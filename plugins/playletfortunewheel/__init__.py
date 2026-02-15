import re
import time
import threading
import urllib.parse
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
    plugin_version = "2.1.3"
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

    # 后端地址
    _backend_url: str = "http://jing999.top:8000"
    # 认证Token
    _auth_token: Optional[str] = None

    # 每日汇总通知
    _daily_summary_notify: bool = True
    # 最迟报告时间
    _daily_summary_time: str = "11:00"

    # 参数
    _cookie: Optional[str] = None
    _cron: Optional[str] = None
    _max_raffle_num: Optional[int] = None

    _site_url: str = "https://playletpt.xyz/"

    # 定时器
    _scheduler: Optional[BackgroundScheduler] = None

    # 站点操作实例
    _siteoper = None
    _history_lock = threading.Lock()
    _raffle_lock = threading.Lock()

    def get_render_mode(self) -> Tuple[str, str]:
        """
        获取插件渲染模式
        :return: 1、渲染模式，支持：vue/vuetify，默认vuetify
        :return: 2、组件路径，默认 dist/assets
        """
        return "vue", "dist/assets"

    def get_dashboard(self) -> Tuple[str, str]:
        return None

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
            self._auth_token = config.get("auth_token")
            self._daily_summary_notify = config.get("daily_summary_notify", True)
            self._daily_summary_time = config.get("daily_summary_time", "11:00")

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
                "auth_token": self._auth_token,
                "daily_summary_notify": self._daily_summary_notify,
                "daily_summary_time": self._daily_summary_time,
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
                    "auth_token": self._auth_token,
                    "daily_summary_notify": self._daily_summary_notify,
                    "daily_summary_time": self._daily_summary_time,
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
        stats = {} # 用于存储统计数据

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
            return results, stats
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
                        results, stats = self.process_raffle_results({"success": True, "results": all_results}, free_count)
                        results.append("")
                        results.append(f"❌ 抽奖失败: {error_msg}")
                        if "魔力不足" in str(error_msg):
                            results.append("💡 魔力不足，可前往插件页面领取救济金后再来冲！")
                        results.append("")
                        results.append(f"🎯 剩余次数: {remain_count - len(all_results)}")
                        return results, stats

                    # 累积结果
                    all_results.extend(response_json["results"])
                    exec_count -= num
                    logger.info(f"抽奖成功,次数消耗{num}")
                except Exception as e:
                    logger.error(f"转换接口返回数据时异常: {str(e)}", e)
                    error_num += 1
                    if error_num > 5:
                        logger.error(f"抽奖异常次数过多，停止执行")
                        results, stats = self.process_raffle_results({"success": True, "results": all_results}, free_count)
                        results.append("")
                        results.append(f"❌ 抽奖异常: {str(e)}")
                        results.append("")
                        results.append(f"🎯 剩余次数: {remain_count - len(all_results)}")
                        return results, stats
                    logger.error(f"抽奖异常次数: {str(error_num)}，继续执行")
                # 间隔5秒后执行（降低抽奖频率）
                time.sleep(5)

            results, stats = self.process_raffle_results({"success": True, "results": all_results}, free_count)

        else:
            logger.info(f"抽奖次数已用完")

        return results, stats

    # 数值大于1W时显示为*W
    def format_num(self, num: int):
        abs_num = abs(num)
        if abs_num >= 10000:
            result = abs_num / 10000
            # 如果结果是整数，则显示为整数，否则保留一位小数
            suffix = "W"
            formatted = f"{int(result)}" if result.is_integer() else f"{result:.1f}"
            return f"{'-' if num < 0 else ''}{formatted}{suffix}"
        return str(num)

    def process_raffle_results(self, response_data: dict, free_count: int = 0) -> Tuple[List[str], Dict[str, int]]:
        results = []
        stats = {
            "magic_gain": 0,
            "magic_loss": 0,
            "first_prize_count": 0,
            "gambler_badge_count": 0
        }

        if not response_data.get("success", False):
            error_msg = response_data.get("message", "未知错误")
            results.append(f"❌ 抽奖失败: {error_msg}")
            return results, stats

        # 获取抽奖结果列表
        raffle_results = response_data.get("results", [])

        if not raffle_results:
            results.append("ℹ️ 暂无抽奖结果")
            return results, stats

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
                # 确保value是数值类型
                try:
                    value = int(value) if value is not None else 1
                except (ValueError, TypeError):
                    logger.error(f"转换接口返回数据时异常: 值{value}不是有效的数字,已设置为1")
                    logger.error(f"接口返回数据: {item}")
                    value = 1
                unit = result.get("unit", "未知")
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
        results.append(f"🎰 抽奖次数: {total_count}")
        results.append(f"🎯 中奖次数: {win_count}")
        results.append(f"💔 谢谢参与: {total_count - win_count}")

        if win_count > 0:
            win_rate = (win_count / total_count) * 100
            results.append(f"📊 中奖概率: {win_rate:.1f}%")

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

        # 合并多次中奖喊话内容
        shoutbox_str_list = []
        for grade, count in sorted_grades:
            grade_num = re.search(r'(\d+)等奖', grade)
            if grade_num:
                grade_key = grade_num.group(1)
                icon = grade_icons.get(grade_key, "🎗️")

                # 是否中一等奖
                if grade_key == "1":
                    stats["first_prize_count"] += count
                    if self._announce_first and self._announce_first_content:
                        shoutbox_str_list.append(self._announce_first_content + (" " if count == 1 else " X" + str(count)))

                # 是否中二等奖
                elif grade_key == "2":
                    if self._announce_second and self._announce_second_content:
                        shoutbox_str_list.append(self._announce_second_content + (" " if count == 1 else " X" + str(count)))

                # 是否中大赌鬼勋章
                elif grade_key == "13":
                    stats["gambler_badge_count"] += count
                    if self._announce_medal and self._announce_medal_content:
                        shoutbox_str_list.append(self._announce_medal_content + (" " if count == 1 else " X" + str(count)))
                        # 在数组顶部插入一条赌鬼勋章中奖的提示
                        results.insert(0, "👹👹👹我是大赌鬼👹👹👹")

            else:
                icon = "❓"
            results.append(f"  {icon} {grade}: {count}次")

        if shoutbox_str_list:
            self.shoutbox(" | ".join(shoutbox_str_list))

        # 填充统计数据
        stats["magic_gain"] = total_bonus_earned
        stats["magic_loss"] = total_bonus_cost

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

        return results, stats

    # 发送喊话(注意合并一次,可能因为频繁而失败)
    def shoutbox(self, text: str):
        def _shout_task():
            for i in range(3):
                try:
                    logger.info(f"发送喊话内容 (第{i+1}次尝试): {text}")
                    self.headers = {
                        "cookie": self.clean_cookie_value(self._cookie),
                        "referer": self._site_url,
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0"
                    }
                    res = requests.get(
                        self._site_url + "/shoutbox.php?shbox_text=" + text + "&shout=%E6%88%91%E5%96%8A&sent=yes&type=shoutbox",
                        headers=self.headers, proxies=self._get_proxies(), timeout=30)

                    if res.status_code == 200:
                        logger.info("喊话成功")
                        return
                    else:
                        logger.warning(f"喊话失败: {res.status_code}")
                except Exception as e:
                    logger.error(f"喊话异常: {str(e)}")

                if i < 2:
                    logger.info("2分钟后重试...")
                    time.sleep(120)

        threading.Thread(target=_shout_task).start()

    def _upload_data(self, stats: Dict[str, int]) -> bool:
        """
        执行上报逻辑（同步），包含重试
        """
        for i in range(3):
            try:
                logger.info(f"开始上报抽奖数据 (第{i + 1}次尝试)...")

                # 构造上报数据
                report_data = {
                    "魔力值": stats.get("magic_gain", 0) - stats.get("magic_loss", 0),
                    "一等奖": stats.get("first_prize_count", 0),
                    "赌鬼勋章": stats.get("gambler_badge_count", 0)
                }

                url = f"{self._backend_url.rstrip('/')}/prize-records/report"

                # 对可能包含中文字符的Token进行编码，避免 latin-1 错误，保留冒号不转义
                safe_token = urllib.parse.quote(str(self._auth_token), safe=':')

                headers = {
                    "X-API-Key": safe_token,
                    "Content-Type": "application/json"
                }

                # 发送请求
                response = requests.post(url, json=report_data, headers=headers, timeout=10)

                if response.status_code == 200:
                    logger.info("数据上报成功")
                    return True
                else:
                    logger.warning(f"数据上报失败: {response.status_code} {response.text}")

            except Exception as e:
                logger.error(f"数据上报异常: {str(e)}")

            if i < 2:
                logger.info("2分钟后重试上报...")
                time.sleep(120)

        return False

    def upload_report(self, stats: Dict[str, int]) -> None:
        """
        上报抽奖结果（异步）
        """
        if not self._backend_url or not self._auth_token:
            logger.info("未配置Token，跳过上报")
            return

        def _report_task():
            if not self._upload_data(stats):
                self._save_failed_report(stats)

        threading.Thread(target=_report_task).start()

    def _save_failed_report(self, stats: Dict[str, int]):
        """
        保存上报失败的数据
        """
        try:
            with self._history_lock:
                failed_reports = self.get_data('failed_reports') or []
                failed_reports.append({
                    "timestamp": time.time(),
                    "stats": stats
                })
                self.save_data('failed_reports', failed_reports)
                logger.info("上报失败，已保存到本地待重试")
        except Exception as e:
            logger.error(f"保存失败数据异常: {str(e)}")

    def _check_reupload(self):
        """
        检查未上报的数据并尝试重新上报
        仅重试当天的数据，非当天的数据将被清除
        """
        try:
            today_date = datetime.now().date()

            # 1. 清理非当天的数据
            with self._history_lock:
                failed_reports = self.get_data('failed_reports') or []

                if not failed_reports:
                    return

                valid_reports = []
                expired_count = 0

                for item in failed_reports:
                    timestamp = item.get("timestamp")
                    try:
                        report_date = datetime.fromtimestamp(timestamp).date()
                        if report_date == today_date:
                            valid_reports.append(item)
                        else:
                            logger.info(f"清除过期未上报数据: {datetime.fromtimestamp(timestamp)}")
                            expired_count += 1
                    except Exception as e:
                        logger.error(f"解析数据时间戳失败: {timestamp}, {e}")
                        expired_count += 1

                if expired_count > 0:
                    self.save_data('failed_reports', valid_reports)
                    failed_reports = valid_reports

            if not failed_reports:
                return

            # 2. 重试当天的数据
            # 复制一份进行遍历，避免遍历时修改
            pending_reports = failed_reports[:]

            logger.info(f"发现 {len(pending_reports)} 条今日未上报数据，尝试重新上报...")

            for item in pending_reports:
                stats = item.get("stats")
                timestamp = item.get("timestamp")

                if self._upload_data(stats):
                    # 上报成功，从列表中移除
                    with self._history_lock:
                        current_reports = self.get_data('failed_reports') or []
                        new_reports = [
                            r for r in current_reports
                            if r.get("timestamp") != timestamp
                        ]
                        self.save_data('failed_reports', new_reports)

        except Exception as e:
            logger.error(f"检查补报数据失败: {str(e)}")

    def _auto_task(self):
        """
        执行每日自动抽奖
        """
        if self._raffle_lock.locked():
            logger.info("抽奖任务正在运行中，自动任务跳过")
            return

        with self._raffle_lock:
            try:
                logger.info("执行每日自动抽奖")
                results, stats = self.exec_raffle()

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
                        "auth_token": self._auth_token,
                    })
                    # 按照\n 分割,然后倒叙再拼接回去
                    log_report = "\n".join(reversed(report.split("\n")))
                    logger.info(
                        f"报告请点击左上【在新窗口中打开】查看\n\n==============================================\n{log_report}\n==============================================\n\n")

                    # 尝试上报数据
                    if stats:
                        self._save_local_data(stats)
                        self.upload_report(stats)

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
            report += f"⏱️ {datetime.now().strftime('%Y-%m-%d %H:%M')}\n"
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
        """
        获取插件API
        """
        return [
            {
                "path": "/get-statistics-data",
                "endpoint": self.get_statistics_data,
                "methods": ["GET"],
                "auth": "bear",  # 认证类型设为bear
                "summary": "获取抽奖统计数据",
                "description": "获取playlet抽奖统计数据",
            },
            {
                "path": "/get-history-data",
                "endpoint": self.get_history_data_api,
                "methods": ["GET"],
                "auth": "bear",
                "summary": "获取历史抽奖数据",
                "description": "获取最近60天的抽奖数据",
            },
            {
                "path": "/get-username",
                "endpoint": self.get_username,
                "auth": "bear",  # 认证类型设为bear
                "methods": ["GET"],
                "summary": "获取用户名",
                "description": "获取playlet用户名",
            },
            {
                "path": "/is-authenticated",
                "endpoint": self.is_authenticated,
                "auth": "bear",  # 认证类型设为bear
                "methods": ["GET"],
                "summary": "主动检查授权状态",
                "description": "主动检查playlet授权状态",
            },
            {
                "path": "/do-raffle",
                "endpoint": self.exec_raffle_api,
                "auth": "bear",
                "methods": ["POST"],
                "summary": "立即执行抽奖",
                "description": "立即执行一次抽奖任务",
            },
            {
                "path": "/get-token-status",
                "endpoint": self.get_token_status,
                "auth": "bear",
                "methods": ["GET"],
                "summary": "获取Token状态",
                "description": "获取当前Token配置状态",
            },
            {
                "path": "/get-daily-magic-list",
                "endpoint": self.get_daily_magic_list,
                "auth": "bear",
                "methods": ["GET"],
                "summary": "获取每日魔力值榜单",
                "description": "获取每日魔力值变化排行榜列表",
            },
            {
                "path": "/get-daily-status",
                "endpoint": self.get_daily_status,
                "auth": "bear",
                "methods": ["GET"],
                "summary": "获取每日抽奖状态",
                "description": "获取每日抽奖状态(总人数/已抽人数)",
            },
            {
                "path": "/generate-daily-summary",
                "endpoint": self.generate_daily_summary_api,
                "auth": "bear",
                "methods": ["POST"],
                "summary": "生成每日汇总报告",
                "description": "立即生成每日汇总报告并发送通知",
            },
            {
                "path": "/relief-top",
                "endpoint": self.get_relief_top,
                "auth": "bear",
                "methods": ["GET"],
                "summary": "获取救济金领取榜单",
                "description": "获取领取救济金的用户排行榜",
            },
            {
                "path": "/relief-system-status",
                "endpoint": self.get_relief_system_status,
                "auth": "bear",
                "methods": ["GET"],
                "summary": "获取系统救济金池状态",
                "description": "获取系统可发放的救济金余额状态",
            },
            {
                "path": "/claim-relief",
                "endpoint": self.claim_relief,
                "auth": "bear",
                "methods": ["POST"],
                "summary": "领取救济金",
                "description": "符合条件的低魔力值用户可以领取系统发放的救济金",
            }
        ]

    def generate_daily_summary_api(self):
        """
        API endpoint to generate daily summary immediately
        """
        try:
            logger.info("收到API请求：立即生成每日汇总报告")

            # 获取所有用户数据
            data_list = self.get_daily_magic_list()
            if not data_list:
                return {
                    "success": False,
                    "message": "获取每日数据失败"
                }

            # 分析数据 (这里其实可以不用传 undrawn_users，因为 generate_daily_summary_report 会重新计算)
            undrawn_users = [u for u in data_list if u.get('status') == 'undrawn']

            # 生成报告
            report = self.generate_daily_summary_report(data_list, undrawn_users)

            return {
                "success": True,
                "message": "报告已生成",
                "report": report
            }
        except Exception as e:
            logger.error(f"主动生成每日汇总报告失败: {str(e)}")
            return {
                "success": False,
                "message": f"生成失败: {str(e)}"
            }

    def get_daily_status(self):
        """
        获取每日抽奖状态
        """
        try:
            status, data = self.call_backend("/prize-records/daily-status", self._auth_token)
            if status == 200:
                return data
            else:
                logger.error(f"获取每日抽奖状态失败: {status} {data}")
                return {}
        except Exception as e:
            logger.error(f"获取每日抽奖状态异常: {str(e)}")
            return {}

    def _check_daily_summary(self):
        """
        检查是否需要发送每日汇总
        """
        try:
            if not self._auth_token:
                logger.error("未获得数据分享服务授权token，每日汇总检查跳过")
                return
            today_str = datetime.now().strftime('%Y-%m-%d')
            # 检查今天是否已发送
            sent_date = self.get_data('daily_summary_sent_date')
            if sent_date == today_str:
                return

            # 获取所有用户数据
            data_list = self.get_daily_magic_list()
            if not data_list:
                return

            # 分析数据
            total_users = len(data_list)
            undrawn_users = [u for u in data_list if u.get('status') == 'undrawn']
            undrawn_count = len(undrawn_users)

            should_send = False

            # 条件1: 所有人都已抽奖
            if undrawn_count == 0:
                should_send = True

            # 条件2: 到达最迟报告时间
            if not should_send and self._daily_summary_time:
                now_time = datetime.now().strftime('%H:%M')
                if now_time >= self._daily_summary_time:
                    should_send = True

            if should_send:
                logger.info("满足每日汇总发送条件，开始生成报告")
                report = self.generate_daily_summary_report(data_list, undrawn_users)

                # 发送通知
                self.post_message(
                    mtype=NotificationType.SiteMessage,
                    title="【Playlet幸运转盘】每日风云榜",
                    text=report
                )

                # 标记今日已发送
                self.save_data('daily_summary_sent_date', today_str)

        except Exception as e:
            logger.error(f"检查每日汇总失败: {str(e)}")

    def generate_daily_summary_report(self, data_list: List[dict], undrawn_users: List[dict]) -> str:
        """
        生成每日汇总报告
        """
        try:
            today_str = datetime.now().strftime('%Y-%m-%d')
            total_count = len(data_list)

            # 重新过滤数据，确保状态字段正确
            # 后端返回字段为 status (drawn/undrawn)
            undrawn_users = [u for u in data_list if u.get('status') == 'undrawn']
            drawn_users = [u for u in data_list if u.get('status') == 'drawn']

            drawn_count = len(drawn_users)

            # 排序：魔力值从高到低
            drawn_users.sort(key=lambda x: x.get('magic_points', 0) if x.get('magic_points') is not None else 0, reverse=True)

            report = f"🎡 Playlet 伙伴风云榜 🎡\n"
            report += f"📅 {today_str}\n"
            report += "━━━━━━━━━━━━━━\n"

            # 概况
            if len(undrawn_users) == 0:
                report += f"🎉 喜大普奔！今日 {total_count} 位伙伴全部完成打卡！\n"
                report += "🚀 大家的手速都很快，看来都是老赌狗了！\n"
            else:
                report += f"📊 今日战况: {drawn_count}/{total_count} 已完赛\n"
                report += f"🐢 还有 {len(undrawn_users)} 位伙伴在摸鱼，拖慢了全队的节奏！\n"

            report += "\n"
            report += "─" * 14 + "\n"

            # 高光时刻 (Top 3)
            report += "👑 今日欧皇榜 (魔力值):\n"
            if drawn_users:
                medals = ["🥇", "🥈", "🥉"]
                for i, user in enumerate(drawn_users[:3]):
                    medal = medals[i] if i < 3 else "🏅"
                    points = user.get('magic_points', 0)
                    username = user.get('username', '未知')
                    # 格式化魔力值
                    points_str = self.format_num(points)
                    report += f"{medal} {username}: {points_str} \n"

                # 最佳评语
                top_points = drawn_users[0].get('magic_points', 0)
                if top_points and top_points > 2000000:
                    report += "✨ 哇塞！今日欧皇恐怖如斯！\n"
                elif top_points and top_points < 1000000:
                    report += "🌚 今天的欧皇有点水啊...\n"
            else:
                report += "👻 暂无数据，看来大家今天脸都很黑？\n"

            report += "\n"
            report += "─" * 14 + "\n"

            # 当日亏损最多 (Top 1)
            loss_users = sorted(drawn_users, key=lambda x: x.get('magic_points', 0) if x.get('magic_points') is not None else 0)
            if loss_users and loss_users[0].get('magic_points', 0) < 0:
                 report += "💸 今日散财童子:\n"
                 user = loss_users[0]
                 points = user.get('magic_points', 0)
                 username = user.get('username', '未知')
                 points_str = self.format_num(points)
                 report += f"👻 {username}: {points_str} \n"
                 report += "😭 摸摸头，明天一定会回本的！\n"
                 report += "\n"
                 report += "─" * 14 + "\n"

            # 一等奖获得最多者 (Top 1)
            first_prize_users = sorted(drawn_users, key=lambda x: x.get('first_prize', 0) if x.get('first_prize') is not None else 0, reverse=True)
            if first_prize_users and first_prize_users[0].get('first_prize', 0) > 0:
                 report += "🌟 今日幸运星:\n"
                 user = first_prize_users[0]
                 count = user.get('first_prize', 0)
                 username = user.get('username', '未知')
                 report += f"🤩 {username}: 一等奖 {count} 次\n"
                 report += "🥳 运气爆棚！快去买彩票！\n"
                 report += "\n"
                 report += "─" * 14 + "\n"

            # 摸鱼大队 (如果有)
            if undrawn_users:
                report += "🐟 摸鱼大队 (公开处刑):\n"
                names = [u.get('username', '未知') for u in undrawn_users]
                report += ", ".join(names) + "\n"
                report += "📢 赶紧去抽奖！别让大家等你一个人！\n"
                report += "\n"

            # 底部
            report += "━━━━━━━━━━━━━━\n"
            report += "💡 小贴士: 记得每天来一发，越抽越有！\n"

            return report

        except Exception as e:
            logger.error(f"生成汇总报告失败: {str(e)}")
            return "❌ 生成报告失败"

    def get_daily_magic_list(self):
        """
        获取每日魔力值榜单
        """
        try:
            status, data = self.call_backend("/prize-records/daily-magic-list", self._auth_token)
            if status == 200:
                return data
            else:
                logger.error(f"获取每日魔力值榜单失败: {status} {data}")
                return []
        except Exception as e:
            logger.error(f"获取每日魔力值榜单异常: {str(e)}")
            return []

    def get_relief_top(self):
        """
        获取救济金榜单
        """
        try:
            status, data = self.call_backend("/prize-records/relief-top", self._auth_token)
            if status == 200:
                return data
            else:
                logger.error(f"获取救济金榜单失败: {status} {data}")
                return []
        except Exception as e:
            logger.error(f"获取救济金榜单异常: {str(e)}")
            return []

    def get_relief_system_status(self):
        """
        获取系统救济金池状态
        """
        try:
            status, data = self.call_backend("/prize-records/relief-system-status", self._auth_token)
            if status == 200:
                return data
            else:
                logger.error(f"获取系统救济金池状态失败: {status} {data}")
                return {"success": False, "message": "获取失败"}
        except Exception as e:
            logger.error(f"获取系统救济金池状态异常: {str(e)}")
            return {"success": False, "message": str(e)}

    def claim_relief(self):
        """
        申请领取救济金
        """
        try:
            status, data = self.call_backend("/prize-records/claim-relief", self._auth_token, method="POST")
            if status == 200:
                return data
            else:
                logger.error(f"申请救济金失败: {status} {data}")
                return data or {"success": False, "message": f"请求失败: {status}"}
        except Exception as e:
            logger.error(f"申请救济金异常: {str(e)}")
            return {"success": False, "message": str(e)}

    def get_token_status(self):
        """
        获取Token状态
        """
        return {
            "has_token": bool(self._auth_token)
        }

    def exec_raffle_api(self):
        """
        API endpoint to execute raffle immediately
        """
        if self._raffle_lock.locked():
            return {
                "success": False,
                "message": "抽奖任务正在运行中，请稍后再试"
            }

        with self._raffle_lock:
            try:
                logger.info("收到API请求：立即执行抽奖")
                results, stats = self.exec_raffle()

                # 如果有抽奖结果，保存数据并上报
                if results:
                    # 生成简报
                    report = self.generate_report(results)

                    # 发送通知
                    if self._notify:
                        self.post_message(
                            mtype=NotificationType.SiteMessage,
                            title="【Playlet幸运转盘】每日任务完成",
                            text=report)

                    self._last_report = report
                    # 更新配置中的报告
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
                        "auth_token": self._auth_token,
                    })

                    # 按照\n 分割,然后倒叙再拼接回去
                    log_report = "\n".join(reversed(report.split("\n")))
                    logger.info(
                        f"报告请点击左上【在新窗口中打开】查看\n\n==============================================\n{log_report}\n==============================================\n\n")

                    if stats:
                        self._save_local_data(stats)
                        self.upload_report(stats)

                    return {
                        "success": True,
                        "message": "抽奖执行完成",
                        "results": results,
                        "stats": stats
                    }
                else:
                    return {
                        "success": True,
                        "message": "今日已无抽奖次数",
                        "results": [],
                        "stats": {}
                    }
            except Exception as e:
                logger.error(f"执行抽奖失败: {str(e)}")
                return {
                    "success": False,
                    "message": f"执行失败: {str(e)}"
                }

    def get_history_data_api(self):
        """
        API endpoint to get history data
        """
        try:
            history = self.get_data('history') or []
            return history
        except Exception as e:
            logger.error(f"获取历史数据失败: {str(e)}")
            return []

    def _save_local_data(self, stats: Dict[str, int]):
        """
        保存本地数据，按天合并，最多保留60天
        """
        try:
            with self._history_lock:
                today_str = datetime.now().strftime('%Y-%m-%d')
                history = self.get_data('history') or []

                # 查找今天的数据
                today_data = None
                for item in history:
                    if item.get('date') == today_str:
                        today_data = item
                        break

                if today_data:
                    # 合并数据
                    today_data['magic_gain'] += stats.get('magic_gain', 0)
                    today_data['magic_loss'] += stats.get('magic_loss', 0)
                    today_data['first_prize_count'] += stats.get('first_prize_count', 0)
                    today_data['gambler_badge_count'] += stats.get('gambler_badge_count', 0)
                else:
                    # 新增今天的数据
                    new_item = {
                        'date': today_str,
                        'magic_gain': stats.get('magic_gain', 0),
                        'magic_loss': stats.get('magic_loss', 0),
                        'first_prize_count': stats.get('first_prize_count', 0),
                        'gambler_badge_count': stats.get('gambler_badge_count', 0)
                    }
                    history.append(new_item)

                # 排序并保留最近60天
                history.sort(key=lambda x: x['date'])
                if len(history) > 60:
                    history = history[-60:]

                self.save_data('history', history)

        except Exception as e:
            logger.error(f"保存本地数据失败: {str(e)}")

    def call_backend(self, endpoint, key, method="GET", json_data=None):
        try:
            if not key:
                key = self.get_username() + ':'

            url = f"{self._backend_url.rstrip('/')}{endpoint}"
            # 对可能包含中文字符的Token进行编码，保留冒号不转义
            safe_key = urllib.parse.quote(str(key), safe=':')
            
            headers = {"X-API-Key": safe_key}
            if json_data:
                headers["Content-Type"] = "application/json"

            if method.upper() == "POST":
                r = requests.post(url, headers=headers, json=json_data, timeout=10)
            else:
                r = requests.get(url, headers=headers, timeout=10)

            try:
                return r.status_code, r.json()
            except:
                return r.status_code, {}
        except Exception as e:
            logger.error(f"请求后端接口失败: {str(e)}")
            return 500, {"message": str(e)}

    def get_statistics_data(self):
        # 1. 尝试使用现有Token获取数据
        status, data = self.call_backend("/prize-records/month-top", self._auth_token)

        if status == 200:
            # 检查是否是数据对象 (month-top 返回 object)
            if isinstance(data, dict) and ("loss_top" in data or "gain_top" in data):
                month_data = data
                # 获取日榜
                _, day_data = self.call_backend("/prize-records/day-top", self._auth_token)

                return {
                   "is_authenticated": True,
                    "month_data": month_data,
                    "day_data": day_data,
                }
            elif "token" in data:
                username = self.get_username()
                self._auth_token = f"{username}:{data.get('token', '')}"
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
                            "auth_token": self._auth_token,
                })
                return {
                   "is_authenticated": False,
                    "token": data.get("token",""),
                    "auth_message": data.get("message",""),
                }
            else:
                logger.warning(f"Token验证响应格式非预期: {data}")
                auth_message = f"Token验证响应格式非预期: {data}"
        elif status == 403:
                # 认证失败
            logger.warning("Token验证失败: 4031111",data)
            msg = data.get("message", "")
            if "私信" in msg or "private message" in msg:
                auth_message = "请完成认证：将Token私信发送给arvinchen"
                return {
                    "is_authenticated": False,
                    "auth_message": auth_message,
                    # 取:后面的字符
                    "token": self._auth_token.split(":")[-1],
                }
            else:
                auth_message = f"认证失败: {msg}"
        else:
            logger.error(f"Token验证请求失败: {status} {data}")
            auth_message = f"请求失败: {status} {data}"

        return {
            "is_authenticated": False,
            "auth_message": auth_message,
        }

    def get_username(self) -> str:
        """
        获取用户名
        """
        if not self._cookie:
            logger.warning("未配置Cookie，无法获取用户名")
            return ""
        try:
            headers = {
                "cookie": self.clean_cookie_value(self._cookie),
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
            url = self._site_url.rstrip('/') + "/index.php"
            res = requests.get(url, headers=headers, proxies=self._get_proxies(), timeout=10)
            if res.status_code == 200:
                # 尝试解析用户名
                # 匹配 userdetails.php?id=xxxxx"><b>username</b>
                match = re.search(r'userdetails\.php\?id=\d+[^>]*>.*?<b[^>]*>(.*?)</b>', res.text, re.S)
                if not match:
                     match = re.search(r'userdetails\.php\?id=\d+[^>]*>(.*?)</a>', res.text, re.S)

                if match:
                    username = re.sub(r'<[^>]+>', '', match.group(1)).strip()
                    logger.info(f"成功获取用户名: {username}")
                    return username
                else:
                    logger.warning("无法从页面解析出用户名，请检查Cookie是否失效或页面结构变更")
            else:
                logger.error(f"访问站点首页失败: {res.status_code}")
        except Exception as e:
            logger.error(f"获取用户名失败: {str(e)}")
        return ""

    def is_authenticated(self) -> bool:
        """
        检查是否已认证
        """
        logger.info("未认证状态，尝试申请/找回临时Token")
        username = self.get_username()
                # 使用 username: 申请
        status, data = self.call_backend("/prize-records/month-top", f"{username}:")
        if status == 200:
            detail = data.get("detail", data)
            if isinstance(detail, dict) and "token" in detail:
                new_token = detail["token"]
                msg = detail.get("message", "")
                logger.info(f"获取到临时Token: {new_token}")

                # 更新Token
                if self._auth_token != new_token:
                    self._auth_token = f"{username}:{new_token}"
                    # 仅更新内存配置，避免频繁写文件，实际持久化需要用户手动保存或下次任务触发
                    # 但为了让用户下次进来能看到，这里还是调用update_config吧，注意不要死循环
                    try:
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
                            "auth_token": self._auth_token,
                        })
                        return True
                    except Exception as e:
                        logger.error(f"更新配置失败: {str(e)}")
                        return False
                elif status == 403:
                     detail = data.get("detail", {}) if isinstance(data, dict) else str(data)
                     msg = detail.get("message", "") if isinstance(detail, dict) else str(detail)
                     logger.warning(f"获取临时Token失败: {msg}")
                     return False
            else:
                logger.error(f"获取临时Token失败: {status} {msg}")
                return False
        else:
            logger.error(f"获取临时Token失败: {status} {msg}")
            return False

    def get_page(self) -> Optional[List[dict]]:
        return None

    def get_form(self) -> Tuple[List[dict], Dict[str, Any]]:
        """
        拼装插件配置页面，需要返回两块数据：1、页面配置；2、数据结构
        """

        return [], {
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
            "auth_token": "",
        }

    def _check_reupload(self):
        """
        检查未上报的数据并尝试重新上报
        """
        try:
            with self._history_lock:
                history = self.get_data('history') or []

            # 遍历历史数据，查找未上报的记录
            for item in history:
                # 默认 True，兼容旧数据
                if not item.get('is_reported', True):
                    date_str = item.get('date')
                    logger.info(f"发现未上报数据: {date_str}, 尝试重新上报")
                    # 构造 stats
                    stats = {
                        "magic_gain": item.get("magic_gain", 0),
                        "magic_loss": item.get("magic_loss", 0),
                        "first_prize_count": item.get("first_prize_count", 0),
                        "gambler_badge_count": item.get("gambler_badge_count", 0)
                    }
                    self.upload_report(stats, date_str)

        except Exception as e:
            logger.error(f"检查补报数据失败: {str(e)}")

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

        if self._daily_summary_notify:
            service.append({
                "id": "playlet_daily_summary",
                "name": "Playlet幸运转盘 - 每日汇总",
                "trigger": CronTrigger(minute='*/10'),
                "func": self._check_daily_summary,
                "kwargs": {}
            })

        # 数据补报检查，固定每10分钟检查一次
        service.append({
            "id": "playlet_check_reupload",
            "name": "Playlet幸运转盘 - 数据补报检查",
            "trigger": CronTrigger(minute='*/10'),
            "func": self._check_reupload,
            "kwargs": {}
        })

        if service:
            return service

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
