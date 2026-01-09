import re
import time
from datetime import datetime, timedelta
from typing import Any, List, Dict, Tuple, Optional

import pytz
import requests
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

from app.core.config import settings
from app.db.site_oper import SiteOper
from app.log import logger
from app.plugins import _PluginBase
from app.schemas import NotificationType


class PlayletFortuneWheel(_PluginBase):
    # 插件名称
    plugin_name = "Playlet幸运转盘"
    # 插件描述
    plugin_desc = "每日抽奖，越抽越有"
    # 插件图标
    plugin_icon = "https://raw.githubusercontent.com/ArvinChen9539/MoviePilot-Plugins/feature-playlet-fortune-wheel/icons/PlayletFortuneWheel.png"
    # 插件版本
    plugin_version = "1.2.7"
    # 插件作者
    plugin_author = "ArvinChen9539"
    # 作者主页
    author_url = "https://github.com/ArvinChen9539"
    # 插件配置项ID前缀
    plugin_config_prefix = "playletfortunewheel_"
    # 加载顺序
    plugin_order = 25
    # 可使用的用户级别
    auth_level = 2

    # 基本设置
    _enabled: bool = False
    _onlyonce: bool = False
    _notify: bool = True
    _use_proxy: bool = False
    _auto_cookie: bool = True

    # 只抽免费
    _only_free: bool = False

    # 中一等奖是否喊话
    _announce_first: bool = True
    _default_announce_first_content: str = "🎉🎉🎉🥇😊"
    # 一等奖喊话内容
    _announce_first_content: str = _default_announce_first_content

    # 中二等奖是否喊话
    _announce_second: bool = True
    _default_announce_second_content: str = "🎉🎉🎉🥈🙂"
    # 二等奖喊话内容
    _announce_second_content: str = _default_announce_second_content

    # 赌鬼勋章喊话
    _announce_medal: bool = True
    _default_announce_medal_content: str = "🎉🎉🎉👹😱我是大赌鬼"
    _announce_medal_content: str = _default_announce_medal_content

    # 保存最后一次抽奖报告
    _last_report: Optional[str] = None

    # 参数
    _cookie: Optional[str] = None
    _cron: Optional[str] = None
    _max_raffle_num: Optional[int] = None

    _site_url: str = "https://playletpt.xyz/"

    # 定时器
    _scheduler: Optional[BackgroundScheduler] = None

    # 站点操作实例
    _siteoper = None

    def init_plugin(self, config: Optional[dict] = None) -> None:
        """
        初始化插件
        """
        # 停止现有任务
        self.stop_service()

        # 创建站点操作实例
        self._siteoper = SiteOper()

        if config:
            self._enabled = config.get("enabled", False)
            self._cron = config.get("cron", '')
            self._max_raffle_num = config.get("max_raffle_num")
            self._cookie = config.get("cookie")
            self._notify = config.get("notify", True)
            self._onlyonce = config.get("onlyonce", False)
            self._use_proxy = config.get("use_proxy", False)
            self._only_free = config.get("only_free", False)
            self._auto_cookie = config.get("auto_cookie", True)
            self._announce_first = config.get("announce_first", True)
            self._announce_first_content = config.get("announce_first_content", self._default_announce_first_content)
            self._announce_second = config.get("announce_second", True)
            self._announce_second_content = config.get("announce_second_content", self._default_announce_second_content)
            self._announce_medal = config.get("announce_medal", True)
            self._announce_medal_content = config.get("announce_medal_content", self._default_announce_medal_content)
            self._last_report = config.get("last_report")

            # 处理自动获取cookie
            if self._auto_cookie:
                self._cookie = self.get_site_cookie()
            else:
                self._cookie = config.get("cookie")

            # 立即更新一次配置确保喊话内容为空时使用默认值
            self.update_config({
                "onlyonce": False,
                "cron": self._cron,
                "max_raffle_num": self._max_raffle_num,
                "enabled": self._enabled,
                "cookie": self._cookie,
                "notify": self._notify,
                "use_proxy": self._use_proxy,
                "only_free": self._only_free,
                "auto_cookie": self._auto_cookie,
                "last_report": self._last_report,
                "announce_first": self._announce_first,
                "announce_first_content": self._announce_first_content or self._default_announce_first_content,
                "announce_second": self._announce_second,
                "announce_second_content": self._announce_second_content or self._default_announce_second_content,
                "announce_medal": self._announce_medal,
                "announce_medal_content": self._announce_medal_content or self._default_announce_medal_content,
            })

        if self._onlyonce:
            try:
                self._scheduler = BackgroundScheduler(timezone=settings.TZ)
                logger.info(f"Playlet幸运转盘服务启动，立即运行一次")

                # 执行每日任务
                self._scheduler.add_job(func=self._auto_task, trigger='date',
                                        run_date=datetime.now(tz=pytz.timezone(settings.TZ)) + timedelta(seconds=3),
                                        name="Playlet幸运转盘-自动执行")

                # 关闭一次性开关
                self._onlyonce = False
                self.update_config({
                    "onlyonce": False,
                    "cron": self._cron,
                    "max_raffle_num": self._max_raffle_num,
                    "enabled": self._enabled,
                    "cookie": self._cookie,
                    "notify": self._notify,
                    "use_proxy": self._use_proxy,
                    "only_free": self._only_free,
                    "auto_cookie": self._auto_cookie,
                    "last_report": self._last_report,
                    "announce_first": self._announce_first,
                    "announce_first_content": self._announce_first_content,
                    "announce_second": self._announce_second,
                    "announce_second_content": self._announce_second_content,
                    "announce_medal": self._announce_medal,
                    "announce_medal_content": self._announce_medal_content,
                })

                # 启动任务
                if self._scheduler.get_jobs():
                    self._scheduler.print_jobs()
                    self._scheduler.start()
            except Exception as e:
                logger.error(f"Playlet幸运转盘服务启动失败: {str(e)}")

    # 清理Cookie无效值
    @staticmethod
    def clean_cookie_value(cookie_value):
        # 移除前导和尾随空白字符
        cleaned = cookie_value.strip()
        # 移除非法字符
        cleaned = ''.join(char for char in cleaned if char not in ['\r', '\n'])
        return cleaned

    # 执行抽奖
    def exec_raffle(self):
        raffle_url = self._site_url + "/fortune-wheel-spin.php"

        # content-type: multipart/form-data
        self.headers = {
            "cookie": self.clean_cookie_value(self._cookie),
            "referer": self._site_url,
            # "content-type": "multipart/form-data",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0"
        }

        results = []

        # 获取代理设置
        proxies = self._get_proxies()

        response = requests.get(self._site_url + "/fortune-wheel.php", headers=self.headers, proxies=proxies)
        response_data = response.text
        # 正则截取id="free-count">和<div>之间的字符串
        free_count_html = re.search(r'id="free-count">(.*?)</div>', response_data)
        today_count_html = re.search(r'id="today-count">(.*?)</div>', response_data)
        free_count = 0
        today_num_str = ''
        if free_count_html:
            free_count = int(free_count_html.group(1))

        if today_count_html:
            today_num_str = today_count_html.group(1)

        if not today_num_str:
            logger.error(f"登录异常")
            return results
        # 将today_num_str 拆分成今日次数和已用次数两个数字变量 字符串的格式为 "今日次数 / 已用次数"
        used_count, today_count = map(int, today_num_str.split("/"))
        # 今日剩余次数
        remain_count = today_count - used_count
        logger.info(f"免费抽奖次数:{free_count},今日剩余次数:{remain_count},已用抽奖次数:{used_count}")

        if self._only_free:
            exec_count = free_count
            logger.info(f"使用剩余免费次数:{exec_count}")
        else:
            if not self._max_raffle_num or int(self._max_raffle_num) >= remain_count:
                exec_count = remain_count
                logger.info(f"使用剩余抽奖次数:{exec_count}")
            else:
                exec_count = int(self._max_raffle_num)
                logger.info(f"使用最大抽奖次数:{exec_count}")

        if exec_count > 0:
            # 只能进行1次 10次 20次 50次的抽取 需要把exec_count转换为调用多次
            all_results = []

            error_num = 0

            while exec_count > 0:
                num = 1
                if exec_count >= 50:
                    num = 50
                elif exec_count >= 20:
                    num = 20
                elif exec_count >= 10:
                    num = 10

                # 解析返回结果
                try:
                    response = requests.post(raffle_url, headers=self.headers, files={"count": (None, num)},
                                             proxies=proxies)
                    response_json = response.json()
                    flag = response_json.get("success", False)
                    if not flag:
                        logger.error(f"抽奖失败: {str(response_json)}")
                        error_msg = response_json.get("message", "未知错误")
                        results = self.process_raffle_results({"success": True, "results": all_results}, free_count)
                        results.append("")
                        results.append(f"❌ 抽奖失败: {error_msg}")
                        results.append("")
                        results.append(f"🎯 剩余次数: {remain_count - len(all_results)}")
                        return results

                    # 累积结果
                    all_results.extend(response_json["results"])
                    exec_count -= num
                    logger.info(f"抽奖成功,次数消耗{num}")
                except Exception as e:
                    logger.error(f"转换接口返回数据时异常: {str(e)}", e)
                    error_num += 1
                    if error_num > 5:
                        logger.error(f"抽奖异常次数过多，停止执行")
                        results = self.process_raffle_results({"success": True, "results": all_results}, free_count)
                        results.append("")
                        results.append(f"❌ 抽奖异常: {str(e)}")
                        results.append("")
                        results.append(f"🎯 剩余次数: {remain_count - len(all_results)}")
                        return results
                    logger.error(f"抽奖异常次数: {str(error_num)}，继续执行")
                # 间隔5秒后执行（降低抽奖频率）
                time.sleep(5)

            results = self.process_raffle_results({"success": True, "results": all_results}, free_count)

        else:
            logger.info(f"抽奖次数已用完")

        return results

    # 数值大于1W时显示为*W
    def format_num(self, num: int):
        if num >= 10000:
            result = num / 10000
            # 如果结果是整数，则显示为整数，否则保留一位小数
            if result.is_integer():
                return f"{int(result)}W"
            else:
                return f"{result:.1f}W"
        return str(num)

    def process_raffle_results(self, response_data: dict, free_count: int = 0) -> List[str]:
        results = []

        if not response_data.get("success", False):
            error_msg = response_data.get("message", "未知错误")
            results.append(f"❌ 抽奖失败: {error_msg}")
            return results

        # 获取抽奖结果列表
        raffle_results = response_data.get("results", [])

        if not raffle_results:
            results.append("ℹ️ 暂无抽奖结果")
            return results

        # 分类统计各类奖励
        prize_stats = {}
        grade_stats = {}
        total_count = len(raffle_results)
        win_count = 0  # 中奖次数（非"谢谢参与"）

        # 魔力统计相关变量
        total_bonus_cost = 0  # 消耗的魔力
        total_bonus_earned = 0  # 赚取的魔力
        net_bonus = 0  # 净魔力（赚取-消耗）

        # 图标映射
        type_icons = {
            "upload": "📤",
            "attendance_card": "📋",
            "vip": "⭐",
            "bonus": "💎",
            "nothing": "😞",
            "invite_perm": "🎉",
            "invite_temp": "🎉",
            "rainbow_id": "🌈",
            "medal": "👹"
        }
        type_name = {
            "upload": "流量",
            "attendance_card": "道具",
            "vip": "会员",
            "bonus": "魔力",
            "nothing": "谢谢参与",
            "invite_perm": "永久邀请",
            "invite_temp": "临时邀请",
            "rainbow_id": "彩虹ID",
            "medal": "勋章"
        }

        grade_icons = {
            "1": "🥇",
            "2": "🥈",
            "3": "🥉",
            "4": "🏅",
            "5": "🏅",
            "6": "🏅",
            "7": "🎖️",
            "8": "🎖️",
            "9": "🎖️",
            "10": "🎗️",
            "11": "🎗️",
            "12": "🎗️",
            "13": "👹",
        }

        # 统计数据
        for item in raffle_results:
            result = item.get("result", {})
            prize = item.get("prize", {})
            grade = item.get("grade", "未知等级")

            # 提取等级数字
            grade_num = re.search(r'(\d+)等奖', grade)
            grade_key = grade_num.group(1) if grade_num else "未知"

            # 统计等级分布
            grade_stats[grade] = grade_stats.get(grade, 0) + 1

            # 统计奖励类型
            status = result.get("status", "")
            if status == "nothing":
                prize_type = "nothing"
                prize_name = "谢谢参与"
            else:
                prize_type = result.get("type", "unknown")
                prize_name = prize.get("name", "未知奖励")
                win_count += 1

            # 按奖励类型统计
            if prize_type not in prize_stats:
                prize_stats[prize_type] = {
                    "count": 0,
                    "details": {},
                    "icon": type_icons.get(prize_type, "🎁")
                }

            prize_stats[prize_type]["count"] += 1

            # 统计具体奖励详情
            if status != "nothing":
                value = result.get("value", 0)
                unit = result.get("unit", "")
                detail_key = f"{prize_name} ({unit})"

                if detail_key not in prize_stats[prize_type]["details"]:
                    prize_stats[prize_type]["details"][detail_key] = {
                        "count": 0,
                        "total_value": 0,
                        "unit": "未知",
                    }

                prize_stats[prize_type]["details"][detail_key]["count"] += 1
                prize_stats[prize_type]["details"][detail_key]["unit"] = unit
                prize_stats[prize_type]["details"][detail_key]["total_value"] += value

                # 统计魔力赚取
                if unit == "魔力值":
                    total_bonus_earned += value

        # 计算消耗魔力(暂时固定每次1000)
        total_bonus_cost = (total_count - free_count) * 1000

        # 计算净魔力
        net_bonus = total_bonus_earned - total_bonus_cost

        # 生成报告
        results.append(f"🎰 总抽奖次数: {total_count}")
        results.append(f"🎯 中奖次数: {win_count}")
        results.append(f"💔 谢谢参与: {total_count - win_count}")

        if win_count > 0:
            win_rate = (win_count / total_count) * 100
            results.append(f"📊 中奖率: {win_rate:.1f}%")

        # 添加魔力统计
        results.append(f"💰 消耗魔力: {self.format_num(total_bonus_cost)}")
        results.append(f"💵 赚取魔力: {self.format_num(total_bonus_earned)}")
        if net_bonus >= 0:
            results.append(f"📈 净赚魔力: {self.format_num(net_bonus)}")
        else:
            results.append(f"📉 净亏魔力: {self.format_num(abs(net_bonus))}")

        # 添加分隔线
        results.append("─" * 14)

        # 根据盈亏情况添加提示语
        if total_bonus_cost > 0:  # 有消耗才计算盈亏比例
            profit_ratio = total_bonus_earned / total_bonus_cost if total_bonus_cost > 0 else 0
            if profit_ratio >= 2:
                results.append("🎉 赚翻了！这波血赚，下次继续冲！")
            elif profit_ratio >= 1.5:
                results.append("😊 赚了不少！这波很划算！")
            elif profit_ratio >= 1:
                results.append("🙂 回本万岁！至少没亏钱！")
            elif profit_ratio >= 0.5:
                results.append("😐 亏得不多，就当花钱娱乐了！")
            elif profit_ratio == 0:
                results.append("💸 全部亏光！这波亏麻了！")
            else:
                results.append("😢 亏得有点多，建议见好就收！")
        elif total_bonus_earned > 0:
            results.append("🎊 全是白赚！血赚不亏！")
        else:
            results.append("😐 今天无事发生，既没赚也没亏！")

        # 添加分隔线
        results.append("─" * 14)

        # 等级分布统计
        results.append("🏅 等级分布:")
        # 按等级排序显示
        sorted_grades = sorted(grade_stats.items(),
                               key=lambda x: int(re.search(r'(\d+)等奖', x[0]).group(1)) if re.search(r'(\d+)等奖',
                                                                                                      x[0]) else 99)

        for grade, count in sorted_grades:
            grade_num = re.search(r'(\d+)等奖', grade)
            if grade_num:
                grade_key = grade_num.group(1)
                icon = grade_icons.get(grade_key, "🎗️")

                # 是否中一等奖
                if grade_key == "1":
                    if self._announce_first and self._announce_first_content:
                        self.shoutbox(self._announce_first_content + ("" if count == 1 else "X" + str(count)))

                # 是否中二等奖
                elif grade_key == "2":
                    if self._announce_second and self._announce_second_content:
                        self.shoutbox(self._announce_second_content + ("" if count == 1 else "X" + str(count)))

                # 是否中大赌鬼勋章
                elif grade_key == "13":
                    if self._announce_medal and self._announce_medal_content:
                        self.shoutbox(self._announce_medal_content + ("" if count == 1 else "X" + str(count)))
                        # 在数组顶部插入一条赌鬼勋章中奖的提示
                        results.insert(0, "👹👹👹我是大赌鬼👹👹👹")

            else:
                icon = "❓"
            results.append(f"  {icon} {grade}: {count}次")

        # 添加分隔线
        results.append("─" * 14)

        # 按奖励类型展示详情
        results.append("🏆 奖励详情:")
        for prize_type, stat in prize_stats.items():
            if prize_type == "nothing":
                continue

            icon = stat["icon"]
            count = stat["count"]
            results.append(f"  {icon} {type_name.get(prize_type, '未知') or prize_type.upper()} 类奖励 ({count}次)")

            for detail, info in stat["details"].items():
                total_value = info["total_value"]
                if info["unit"] == "魔力值":
                    total_value = self.format_num(total_value)

                detail_count = info["count"]
                results.append(f"    🎁 {detail}: {total_value} ({detail_count}次)")

            results.append("")

        return results

    # 发送喊话
    def shoutbox(self,text: str):
        self.headers = {
            "cookie": self.clean_cookie_value(self._cookie),
            "referer": self._site_url,
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0"
        }
        requests.get(
            self._site_url + "/shoutbox.php?shbox_text=" + text + "&shout=%E6%88%91%E5%96%8A&sent=yes&type=shoutbox",
            headers=self.headers, proxies=self._get_proxies())

    def _auto_task(self):
        """
        执行每日自动抽奖
        """
        try:
            logger.info("执行每日自动抽奖")
            results = self.exec_raffle()

            # 生成报告
            if results:
                report = self.generate_report(results)

                # 发送通知
                if self._notify:
                    self.post_message(
                        mtype=NotificationType.SiteMessage,
                        title="【Playlet幸运转盘】每日任务完成",
                        text=report)
                self._last_report = report
                self.update_config({
                    "onlyonce": False,
                    "cron": self._cron,
                    "max_raffle_num": self._max_raffle_num,
                    "enabled": self._enabled,
                    "cookie": self._cookie,
                    "notify": self._notify,
                    "use_proxy": self._use_proxy,
                    "only_free": self._only_free,
                    "auto_cookie": self._auto_cookie,
                    "last_report": self._last_report,
                    "announce_first": self._announce_first,
                    "announce_first_content": self._announce_first_content,
                    "announce_second": self._announce_second,
                    "announce_second_content": self._announce_second_content,
                    "announce_medal": self._announce_medal,
                    "announce_medal_content": self._announce_medal_content,
                })
                # 按照\n 分割,然后倒叙再拼接回去
                log_report = "\n".join(reversed(report.split("\n")))
                logger.info(
                    f"报告请点击左上【在新窗口中打开】查看\n\n==============================================\n{log_report}\n==============================================\n\n")
            else:
                logger.info("未抽奖，不发送通知")

        except Exception as e:
            logger.error(f"执行每日抽奖任务时发生异常: {str(e)}")
            logger.error("异常详情: ", exc_info=True)

    def generate_report(self, results: List[str]) -> str:
        """
        生成完整的抽奖报告
        :param results: 抽奖结果列表
        :return: 格式化的报告文本
        """
        try:
            if not results:
                return "ℹ️ 没有抽奖次数"

            # 初始化report变量
            report = "🎮 Playlet幸运转盘抽奖报告\n"
            # 添加时间戳
            report += f"⏱️ 抽奖时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
            # 生成报告
            report += "━━━━━━━━━━━━━━\n"

            # 添加抽奖结果
            report += "\n".join(results)

            return report

        except Exception as e:
            logger.error(f"生成报告时发生异常: {str(e)}")
            return "❌ 生成报告时发生错误，请检查日志以获取更多信息。"

    def _get_proxies(self):
        """
        获取代理设置
        """
        if not self._use_proxy:
            logger.info("未启用代理")
            return None

        try:
            # 获取系统代理设置
            if hasattr(settings, 'PROXY') and settings.PROXY:
                logger.info(f"使用系统代理: {settings.PROXY}")
                return settings.PROXY
            else:
                logger.warning("系统代理未配置")
                return None
        except Exception as e:
            logger.error(f"获取代理设置出错: {str(e)}")
            return None

    def get_site_cookie(self, domain: str = 'playletpt.xyz') -> str:
        """
        获取站点cookie

        Args:
            domain: 站点域名,默认为织梦站点

        Returns:
            str: 有效的cookie字符串,如果获取失败则返回空字符串
        """
        try:
            # 优先使用手动配置的cookie
            if self._cookie:
                if str(self._cookie).strip().lower() == "cookie":
                    logger.warning("手动配置的cookie无效")
                    return ""
                return self._cookie

            # 如果手动配置的cookie无效,则从站点配置获取
            site = self._siteoper.get_by_domain(domain)
            if not site:
                logger.warning(f"未找到站点: {domain}")
                return ""

            cookie = site.cookie
            if not cookie or str(cookie).strip().lower() == "cookie":
                logger.warning(f"站点 {domain} 的cookie无效")
                return ""

            # 将获取到的cookie保存到实例变量
            self._cookie = cookie
            return cookie

        except Exception as e:
            logger.error(f"获取站点cookie失败: {str(e)}")
            return ""

    def get_state(self) -> bool:
        """获取插件状态"""
        return bool(self._enabled)

    @staticmethod
    def get_command() -> List[Dict[str, Any]]:
        """获取命令"""
        pass

    def get_api(self) -> List[Dict[str, Any]]:
        """获取API"""
        pass

    def get_page(self) -> List[dict]:
        """数据页面"""
        pass

    def get_service(self) -> List[Dict[str, Any]]:
        """
        注册插件公共服务
        """
        service = []
        if self._cron:
            service.append({
                "id": "autoPlayletFortuneWheel",
                "name": "Playlet幸运转盘 - 自动执行",
                "trigger": CronTrigger.from_crontab(self._cron),
                "func": self._auto_task,
                "kwargs": {}
            })

        if service:
            return service

    def get_form(self) -> Tuple[List[dict], Dict[str, Any]]:
        """
        拼装插件配置页面，需要返回两块数据：1、页面配置；2、数据结构
        """
        # 动态判断MoviePilot版本，决定定时任务输入框组件类型
        version = getattr(settings, "VERSION_FLAG", "v1")
        cron_field_component = "VCronField" if version == "v2" else "VTextField"
        return [
            {
                'component': 'VForm',
                'content': [
                    # 基本设置
                    {
                        'component': 'VCard',
                        'props': {
                            'variant': 'flat',
                            'class': 'mb-6',
                            'color': 'surface'
                        },
                        'content': [
                            {
                                'component': 'VCardItem',
                                'props': {
                                    'class': 'pa-6'
                                },
                                'content': [
                                    {
                                        'component': 'VCardTitle',
                                        'props': {
                                            'class': 'd-flex align-center text-h6'
                                        },
                                        'content': [
                                            {
                                                'component': 'VIcon',
                                                'props': {
                                                    'style': 'color: #16b1ff',
                                                    'class': 'mr-3',
                                                    'size': 'default'
                                                },
                                                'text': 'mdi-cog'
                                            },
                                            {
                                                'component': 'span',
                                                'text': '基本设置'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'component': 'VCardText',
                                'props': {
                                    'class': 'px-6 pb-6'
                                },
                                'content': [
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'enabled',
                                                            'label': '启用插件',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'use_proxy',
                                                            'label': '使用代理',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'notify',
                                                            'label': '开启通知',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'onlyonce',
                                                            'label': '立即运行一次',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    # 功能设置
                    {
                        'component': 'VCard',
                        'props': {
                            'variant': 'flat',
                            'class': 'mb-6',
                            'color': 'surface'
                        },
                        'content': [
                            {
                                'component': 'VCardItem',
                                'props': {
                                    'class': 'pa-6'
                                },
                                'content': [
                                    {
                                        'component': 'VCardTitle',
                                        'props': {
                                            'class': 'd-flex align-center text-h6'
                                        },
                                        'content': [
                                            {
                                                'component': 'VIcon',
                                                'props': {
                                                    'style': 'color: #16b1ff',
                                                    'class': 'mr-3',
                                                    'size': 'default'
                                                },
                                                'text': 'mdi-tools'
                                            },
                                            {
                                                'component': 'span',
                                                'text': '功能设置'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'component': 'VCardText',
                                'props': {
                                    'class': 'px-6 pb-6'
                                },
                                'content': [
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'auto_cookie',
                                                            'label': '使用站点Cookie',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'only_free',
                                                            'label': '只抽免费',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 4
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VTextField',
                                                        'props': {
                                                            'model': 'cookie',
                                                            'label': '站点Cookie',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'class': 'mt-2',
                                                            'disabled': 'auto_cookie'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 4
                                                },
                                                'content': [
                                                    {
                                                        'component': cron_field_component,  # 动态切换
                                                        'props': {
                                                            'model': 'cron',
                                                            'label': '执行周期(cron)',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'placeholder': '请自行设置执行周期',
                                                            'class': 'mt-2'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 4
                                                },
                                                'content': [
                                                    {
                                                        'component': "VTextField",  # 动态切换
                                                        'props': {
                                                            'model': 'max_raffle_num',
                                                            'label': '最大抽奖次数',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'placeholder': '默认全部抽完',
                                                            'class': 'mt-2'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    # 喊话设置
                    {
                        'component': 'VCard',
                        'props': {
                            'variant': 'flat',
                            'class': 'mb-6',
                            'color': 'surface'
                        },
                        'content': [
                            {
                                'component': 'VCardItem',
                                'props': {
                                    'class': 'pa-6'
                                },
                                'content': [
                                    {
                                        'component': 'VCardTitle',
                                        'props': {
                                            'class': 'd-flex align-center text-h6'
                                        },
                                        'content': [
                                            {
                                                'component': 'VIcon',
                                                'props': {
                                                    'style': 'color: #16b1ff',
                                                    'class': 'mr-3',
                                                    'size': 'default'
                                                },
                                                'text': 'mdi-chat-typing-outline'
                                            },
                                            {
                                                'component': 'span',
                                                'text': '中奖喊话设置'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'component': 'VCardText',
                                'props': {
                                    'class': 'px-6 pb-6'
                                },
                                'content': [
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3,
                                                    'class': 'd-flex align-sm-center'
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'announce_first',
                                                            'label': '一等奖喊话',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 9,
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VTextField',
                                                        'props': {
                                                            'model': 'announce_first_content',
                                                            'label': '喊话内容',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'class': 'mt-2 w-full',
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3,
                                                    'class': 'd-flex align-sm-center'
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'announce_second',
                                                            'label': '二等奖喊话',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 9
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VTextField',
                                                        'props': {
                                                            'model': 'announce_second_content',
                                                            'label': '喊话内容',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'class': 'mt-2 w-full',
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        'component': 'VRow',
                                        'content': [
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 3,
                                                    'class': 'd-flex align-sm-center'
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VSwitch',
                                                        'props': {
                                                            'model': 'announce_medal',
                                                            'label': '赌鬼勋章喊话',
                                                            'color': 'primary',
                                                            'hide-details': True
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                'component': 'VCol',
                                                'props': {
                                                    'cols': 12,
                                                    'sm': 9
                                                },
                                                'content': [
                                                    {
                                                        'component': 'VTextField',
                                                        'props': {
                                                            'model': 'announce_medal_content',
                                                            'label': '喊话内容',
                                                            'variant': 'outlined',
                                                            'color': 'primary',
                                                            'hide-details': True,
                                                            'class': 'mt-2 w-full',
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                    # 使用说明
                    {
                        'component': 'VCard',
                        'props': {
                            'variant': 'flat',
                            'class': 'mb-6',
                            'color': 'surface'
                        },
                        'content': [
                            {
                                'component': 'VCardItem',
                                'props': {
                                    'class': 'pa-6'
                                },
                                'content': [
                                    {
                                        'component': 'VCardTitle',
                                        'props': {
                                            'class': 'd-flex align-center text-h6'
                                        },
                                        'content': [
                                            {
                                                'component': 'VIcon',
                                                'props': {
                                                    'style': 'color: #16b1ff',
                                                    'class': 'mr-3',
                                                    'size': 'default'
                                                },
                                                'text': 'mdi-treasure-chest'
                                            },
                                            {
                                                'component': 'span',
                                                'text': '最后一次抽奖报告'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                'component': 'VCardText',
                                'props': {
                                    'class': 'px-6 pb-6'
                                },
                                'content': [
                                    {
                                        'component': 'div',
                                        'props': {
                                            'class': 'text-body-1'
                                        },
                                        'content': [
                                            {
                                                'component': 'div',
                                                'props': {
                                                    'class': 'mb-4 text-pre-wrap'
                                                },
                                                'content': [
                                                    {
                                                        'component': 'div',
                                                        'class': 'text-subtitle-1 font-weight-bold mb-2 ',
                                                        'text': self._last_report or '暂无数据,可以点击立即运行一次查看'
                                                    },
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ], {
            "enabled": False,
            "onlyonce": False,
            "notify": True,
            "use_proxy": False,
            "only_free": False,
            "cookie": "",
            "auto_cookie": True,
            "cron": "0 9 * * *",
            "max_raffle_num": None,
            "last_report": "",
            "announce_first": True,
            "announce_first_content": self._default_announce_first_content,
            "announce_second": True,
            "announce_second_content": self._default_announce_second_content,
            "announce_medal": True,
            "announce_medal_content": self._default_announce_medal_content,
        }

    def stop_service(self) -> None:
        """
        退出插件
        """
        try:
            if self._scheduler:
                self._scheduler.remove_all_jobs()
                if self._scheduler.running:
                    self._scheduler.shutdown()
                self._scheduler = None
        except Exception as e:
            logger.error("退出插件失败：%s" % str(e))
