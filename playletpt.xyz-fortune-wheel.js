// ==UserScript==
// @name         Playlet 一键抽奖 (增强版)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  在 Playlet 幸运转盘页面增加一键抽奖、自动喊话、历史报告功能
// @author       Demo
// @match        https://playletpt.xyz/fortune-wheel.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 配置
    const CONFIG = {
        spinUrl: '/fortune-wheel-spin.php',
        shoutUrl: '/shoutbox.php',
        interval: 5000, // 请求间隔 5秒
        historyMaxDays: 65, // 历史记录保存天数
    };

    // 图标映射
    const TYPE_ICONS = {
        "upload": "📤",
        "attendance_card": "📋",
        "vip": "⭐",
        "bonus": "💎",
        "nothing": "😞",
        "invite_perm": "🎉",
        "invite_temp": "🎉",
        "rainbow_id": "🌈",
        "medal": "👹"
    };

    const TYPE_NAME = {
        "upload": "流量",
        "attendance_card": "道具",
        "vip": "会员",
        "bonus": "魔力",
        "nothing": "谢谢参与",
        "invite_perm": "永久邀请",
        "invite_temp": "临时邀请",
        "rainbow_id": "彩虹ID",
        "medal": "勋章"
    };

    const GRADE_ICONS = {
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
    };

    // 默认设置
    const DEFAULT_SETTINGS = {
        onlyFree: false,
        shoutFirst: "🎉🎉🎉🥇😊",
        shoutSecond: "🎉🎉🎉🥈🙂",
        shoutMedal: "🎉🎉🎉👹😱我是大赌鬼"
    };

    // 注入样式
    const style = document.createElement('style');
    style.textContent = `
        .mp-custom-spin-btn {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background-color: #28a745;
            border: none;
            border-radius: 14px;
            cursor: pointer;
            margin-left: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s;
            text-decoration: none;
            line-height: 1.5;
            vertical-align: middle;
        }
        .mp-custom-spin-btn:hover { background-color: #218838; }

        /* 通用弹窗样式 */
        .mp-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center;
            z-index: 10000; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        .mp-modal-container {
            background: #fff; color: #333; padding: 24px; border-radius: 12px;
            width: 90%; max-width: 650px; max-height: 90vh; overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2); position: relative;
        }
        .mp-modal-title { font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; color: #2c3e50; }
        .mp-section-title { font-size: 16px; font-weight: bold; margin: 20px 0 10px; color: #34495e; display: flex; align-items: center; }
        .mp-section-title::before { content: ""; display: inline-block; width: 4px; height: 16px; background: #28a745; margin-right: 8px; border-radius: 2px; }
        
        .mp-form-group { margin-bottom: 15px; }
        .mp-form-label { display: block; font-size: 14px; margin-bottom: 5px; color: #666; }
        .mp-form-input { width: 100%; padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; font-size: 14px; }
        .mp-form-switch { display: flex; align-items: center; cursor: pointer; }
        .mp-form-switch input { display: none; }
        .mp-switch-slider {
            width: 40px; height: 20px; background: #ccc; border-radius: 10px; position: relative;
            transition: .3s; margin-right: 10px;
        }
        .mp-switch-slider::before {
            content: ""; position: absolute; width: 16px; height: 16px; background: #fff;
            border-radius: 50%; left: 2px; top: 2px; transition: .3s;
        }
        .mp-form-switch input:checked + .mp-switch-slider { background: #28a745; }
        .mp-form-switch input:checked + .mp-switch-slider::before { transform: translateX(20px); }

        .mp-report-box {
            background: #f8f9fa; padding: 15px; border-radius: 6px; font-family: monospace;
            white-space: pre-wrap; font-size: 14px; line-height: 1.6; border: 1px solid #e9ecef;
            max-height: 300px; overflow-y: auto; margin-top: 10px;
        }

        .mp-btn-group { display: flex; gap: 10px; margin-top: 25px; border-top: 1px solid #eee; padding-top: 20px; }
        .mp-btn {
            padding: 10px 20px; border-radius: 5px; border: none; cursor: pointer;
            font-weight: bold; font-size: 14px; transition: 0.2s;
        }
        .mp-btn-primary { background: #28a745; color: #fff; flex: 1; }
        .mp-btn-primary:hover { background: #218838; }
        .mp-btn-secondary { background: #6c757d; color: #fff; }
        .mp-btn-secondary:hover { background: #5a6268; }
        .mp-btn-outline { background: transparent; border: 1px solid #28a745; color: #28a745; }
        .mp-btn-outline:hover { background: #f0fff4; }

        /* 进度条 */
        #spin-progress-container {
            position: fixed; top: 20px; right: 20px; width: 300px; background: rgba(0, 0, 0, 0.85);
            color: #fff; padding: 15px; border-radius: 10px; z-index: 10001; font-size: 14px;
        }
        .mp-progress-bar-bg { width: 100%; height: 8px; background: #444; border-radius: 4px; margin: 10px 0; overflow: hidden; }
        .mp-progress-bar-fill { height: 100%; background: #28a745; width: 0%; transition: width 0.3s; }
    `;
    document.head.appendChild(style);

    // --- 工具函数 ---
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const formatNum = (num) => {
        if (num >= 10000) {
            let result = num / 10000;
            return Number.isInteger(result) ? `${result}W` : `${result.toFixed(1)}W`;
        }
        return String(num);
    };

    // --- 数据持久化 ---
    const storage = {
        getSettings: () => {
            try {
                const saved = localStorage.getItem('raffle_settings');
                return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
            } catch (e) {
                console.error("解析设置失败", e);
                return DEFAULT_SETTINGS;
            }
        },
        saveSettings: (settings) => {
            localStorage.setItem('raffle_settings', JSON.stringify(settings));
        },
        getHistory: () => {
            try {
                const saved = localStorage.getItem('raffle_history');
                let history = saved ? JSON.parse(saved) : [];
                // 清理超过2个月的记录
                const now = Date.now();
                const maxAge = CONFIG.historyMaxDays * 24 * 60 * 60 * 1000;
                history = Array.isArray(history) ? history.filter(item => (now - item.timestamp) < maxAge) : [];
                return history;
            } catch (e) {
                console.error("解析历史记录失败", e);
                return [];
            }
        },
        saveReport: (reportText) => {
            const history = storage.getHistory();
            history.unshift({
                timestamp: Date.now(),
                report: reportText
            });
            localStorage.setItem('raffle_history', JSON.stringify(history.slice(0, 100))); // 最多保存100条
            localStorage.setItem('raffle_last_report', reportText);
        },
        getLastReport: () => {
            return localStorage.getItem('raffle_last_report') || '暂无抽奖报告';
        }
    };

    // --- 抽奖逻辑 ---
    async function shoutbox(text) {
        if (!text) return;
        try {
            const url = `${CONFIG.shoutUrl}?shbox_text=${encodeURIComponent(text)}&shout=%E6%88%91%E5%96%8A&sent=yes&type=shoutbox`;
            await fetch(url);
            console.log("发送喊话:", text);
        } catch (e) {
            console.error("发送喊话失败", e);
        }
    }

    function getRemainCount() {
        try {
            const freeEl = document.getElementById('free-count');
            const todayEl = document.getElementById('today-count');
            const freeCount = freeEl ? parseInt(freeEl.innerText) || 0 : 0;
            let remainCount = 0;
            if (todayEl) {
                const parts = todayEl.innerText.split('/');
                if (parts.length === 2) {
                    const used = parseInt(parts[0].trim()) || 0;
                    const total = parseInt(parts[1].trim()) || 0;
                    remainCount = Math.max(0, total - used);
                }
            }
            console.log(`获取剩余次数: 免费=${freeCount}, 剩余=${remainCount}`);
            return { freeCount, remainCount };
        } catch (e) {
            console.error("获取剩余次数异常", e);
            return { freeCount: 0, remainCount: 0 };
        }
    }

    // --- UI 交互 ---
    function init() {
        console.log("Playlet 抽奖脚本初始化...");
        if (document.querySelector('.mp-custom-spin-btn')) return;
        
        // 尝试多种选择器以防类名变化
        const targetBtn = document.querySelector('.spin-btn--primary') || document.querySelector('.spin-btn');
        if (!targetBtn) {
            console.log("未找到目标按钮 .spin-btn--primary");
            return;
        }

        const newBtn = document.createElement('button');
        newBtn.className = 'mp-custom-spin-btn';
        newBtn.type = 'button'; // 明确指定为 button 类型，防止在 form 中触发 submit
        newBtn.innerText = '一键抽奖';
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("点击一键抽奖按钮 (开始)");
            
            // 使用 setTimeout 异步调用，防止阻塞或因页面状态改变导致的中断
            setTimeout(() => {
                console.log("异步调用 showSettingsModal...");
                showSettingsModal();
            }, 0);
            
            console.log("点击一键抽奖按钮 (结束)");
        }, true);
        
        targetBtn.parentNode.insertBefore(newBtn, targetBtn.nextSibling);
        console.log("一键抽奖按钮已添加");
    }

    function showSettingsModal() {
        console.log("准备打开设置弹窗...");
        try {
            // 防止弹窗多开，如果已存在则先移除
            const existingModal = document.querySelector('.mp-modal-overlay');
            if (existingModal) {
                console.log("弹窗已存在，移除旧弹窗重新创建");
                existingModal.remove();
            }

            console.log("获取设置和剩余次数...");
            const settings = storage.getSettings();
            const counts = getRemainCount();
            const lastReport = storage.getLastReport();
            console.log("数据获取完成:", { settings, counts });

            const overlay = document.createElement('div');
            overlay.className = 'mp-modal-overlay';
            overlay.id = 'mp-settings-modal';
            // 转义报告内容中的 HTML，防止破坏布局
            const escapedReport = lastReport.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
            
            console.log("正在生成弹窗 HTML...");
            overlay.innerHTML = `
                <div class="mp-modal-container">
                    <div class="mp-modal-title">Playlet 抽奖设置</div>
                    
                    <div class="mp-section-title">功能设置</div>
                    <div class="mp-form-group">
                        <label class="mp-form-label">抽奖次数 (剩余: ${counts.remainCount}, 免费: ${counts.freeCount})</label>
                        <input type="number" id="mp-raffle-count" class="mp-form-input" value="${counts.remainCount}" min="1">
                    </div>
                    <div class="mp-form-group">
                        <label class="mp-form-switch">
                            <input type="checkbox" id="mp-only-free" ${settings.onlyFree ? 'checked' : ''}>
                            <div class="mp-switch-slider"></div>
                            <span>只抽免费次数</span>
                        </label>
                    </div>

                    <div class="mp-section-title">中奖喊话设置</div>
                    <div class="mp-form-group">
                        <label class="mp-form-label">一等奖喊话内容</label>
                        <input type="text" id="mp-shout-first" class="mp-form-input" value="${settings.shoutFirst || ''}">
                    </div>
                    <div class="mp-form-group">
                        <label class="mp-form-label">二等奖喊话内容</label>
                        <input type="text" id="mp-shout-second" class="mp-form-input" value="${settings.shoutSecond || ''}">
                    </div>
                    <div class="mp-form-group">
                        <label class="mp-form-label">赌鬼勋章喊话内容</label>
                        <input type="text" id="mp-shout-medal" class="mp-form-input" value="${settings.shoutMedal || ''}">
                    </div>

                    <div class="mp-section-title">抽奖报告 (最后一次)</div>
                    <div class="mp-report-box" id="mp-last-report-box">${escapedReport}</div>

                    <div class="mp-btn-group">
                        <button class="mp-btn mp-btn-outline" id="mp-btn-history">查看历史报告</button>
                        <div style="flex:1"></div>
                        <button class="mp-btn mp-btn-secondary" id="mp-btn-close">取消</button>
                        <button class="mp-btn mp-btn-primary" id="mp-btn-start">开始抽奖</button>
                    </div>
                </div>
            `;

            console.log("将弹窗添加到 body...");
            document.body.appendChild(overlay);

            // 事件绑定
            console.log("绑定弹窗事件...");
            overlay.querySelector('#mp-btn-close').onclick = () => {
                console.log("点击关闭按钮");
                document.body.removeChild(overlay);
            };
            overlay.querySelector('#mp-btn-history').onclick = () => {
                console.log("点击历史记录按钮");
                showHistoryModal();
            };
            overlay.querySelector('#mp-btn-start').onclick = () => {
                console.log("点击开始抽奖按钮");
                const countInput = overlay.querySelector('#mp-raffle-count');
                const count = parseInt(countInput.value) || 0;
                const onlyFree = overlay.querySelector('#mp-only-free').checked;
                const shoutFirst = overlay.querySelector('#mp-shout-first').value;
                const shoutSecond = overlay.querySelector('#mp-shout-second').value;
                const shoutMedal = overlay.querySelector('#mp-shout-medal').value;

                // 保存设置
                storage.saveSettings({ onlyFree, shoutFirst, shoutSecond, shoutMedal });
                document.body.removeChild(overlay);
                
                startRaffle(count, onlyFree, { shoutFirst, shoutSecond, shoutMedal });
            };
            console.log("弹窗显示成功");
        } catch (e) {
            console.error("打开设置弹窗失败:", e);
            alert("打开设置弹窗失败: " + e.message);
        }
    }

    function showHistoryModal() {
        // 允许在设置弹窗之上打开历史记录
        const history = storage.getHistory();
        const overlay = document.createElement('div');
        overlay.className = 'mp-modal-overlay';
        overlay.style.zIndex = "10002"; // 比设置弹窗更高
        
        overlay.innerHTML = `
            <div class="mp-modal-container">
                <div class="mp-modal-title">历史抽奖报告 (最近2个月)</div>
                <div id="history-list" style="max-height: 50vh; overflow-y: auto;">
                    ${history.length === 0 ? '<div style="text-align:center;padding:20px;color:#999">暂无历史记录</div>' : 
                        history.map((item, idx) => {
                            const escapedHistoryReport = item.report.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                            return `
                                <div style="margin-bottom:20px; border-bottom:1px dashed #ddd; padding-bottom:15px;">
                                    <div style="font-weight:bold; color:#28a745; margin-bottom:8px;">#${history.length - idx} - ${new Date(item.timestamp).toLocaleString()}</div>
                                    <div class="mp-report-box">${escapedHistoryReport}</div>
                                </div>
                            `;
                        }).join('')}
                </div>
                <div class="mp-btn-group">
                    <button class="mp-btn mp-btn-secondary" style="width:100%" id="mp-btn-history-close">关闭</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.querySelector('#mp-btn-history-close').onclick = () => document.body.removeChild(overlay);
    }

    async function startRaffle(targetCount, onlyFree, shoutSettings) {
        const counts = getRemainCount();
        let execCount = onlyFree ? Math.min(targetCount, counts.freeCount) : targetCount;
        const totalTarget = execCount;
        const freeCountStart = counts.freeCount;

        if (execCount <= 0) {
            alert(onlyFree ? "没有可用的免费次数" : "请输入正确的抽奖次数");
            return;
        }

        // 显示进度条
        const progressContainer = document.createElement('div');
        progressContainer.id = 'spin-progress-container';
        progressContainer.innerHTML = `
            <div style="display:flex; justify-content:space-between">
                <span>正在抽奖...</span>
                <span id="spin-progress-text">0/${totalTarget}</span>
            </div>
            <div class="mp-progress-bar-bg"><div id="spin-progress-fill" class="mp-progress-bar-fill"></div></div>
            <div id="spin-status-text" style="color:#aaa; font-size:12px">准备开始...</div>
        `;
        document.body.appendChild(progressContainer);

        const allResults = [];
        let completedCount = 0;
        let errorNum = 0;

        try {
            while (execCount > 0) {
                let num = 1;
                if (execCount >= 50) num = 50;
                else if (execCount >= 20) num = 20;
                else if (execCount >= 10) num = 10;

                updateStatus(`正在请求 ${num} 连抽...`);

                const formData = new FormData();
                formData.append('count', num);

                try {
                    const response = await fetch(CONFIG.spinUrl, { method: 'POST', body: formData });
                    const json = await response.json();
                    
                    if (!json.success) {
                        allResults.push(`❌ 失败: ${json.message || "未知错误"}`);
                        break;
                    }

                    allResults.push(...json.results);
                    completedCount += num;
                    execCount -= num;
                    
                    const percent = (completedCount / totalTarget) * 100;
                    document.getElementById('spin-progress-fill').style.width = `${percent}%`;
                    document.getElementById('spin-progress-text').innerText = `${completedCount}/${totalTarget}`;
                    updateStatus(`成功抽取 ${num} 次，休息 5 秒...`);

                } catch (err) {
                    errorNum++;
                    if (errorNum > 5) break;
                    updateStatus(`网络异常 (${errorNum}/5)，重试中...`);
                    await sleep(2000);
                    continue; 
                }

                if (execCount > 0) await sleep(CONFIG.interval);
            }
        } finally {
            document.body.removeChild(progressContainer);
            const report = generateReport(allResults, freeCountStart, shoutSettings);
            storage.saveReport(report);
            showFinalReport(report);
        }
    }

    function updateStatus(text) {
        const el = document.getElementById('spin-status-text');
        if (el) el.innerText = text;
    }

    function generateReport(raffleResults, initialFreeCount, shoutSettings) {
        let results = [];
        const validResults = [];
        const errorMessages = [];
        
        raffleResults.forEach(item => {
            if (typeof item === 'string') errorMessages.push(item);
            else validResults.push(item);
        });

        if (validResults.length === 0) return errorMessages.join("\n") || "ℹ️ 没有中奖数据";

        const prizeStats = {};
        const gradeStats = {};
        const totalCount = validResults.length;
        let winCount = 0;
        let totalBonusEarned = 0;
        
        validResults.forEach(item => {
            const result = item.result || {};
            const prize = item.prize || {};
            const grade = item.grade || "未知等级";
            gradeStats[grade] = (gradeStats[grade] || 0) + 1;
            
            const status = result.status || "";
            let prizeType = "nothing";
            if (status !== "nothing") {
                prizeType = result.type || "unknown";
                winCount++;
                let value = Number(result.value) || 1;
                const unit = result.unit || "未知";
                const detailKey = `${prize.name || "未知"} (${unit})`;
                
                if (!prizeStats[prizeType]) {
                    prizeStats[prizeType] = { count: 0, details: {}, icon: TYPE_ICONS[prizeType] || "🎁" };
                }
                prizeStats[prizeType].count++;
                if (!prizeStats[prizeType].details[detailKey]) {
                    prizeStats[prizeType].details[detailKey] = { count: 0, total_value: 0, unit };
                }
                prizeStats[prizeType].details[detailKey].count++;
                prizeStats[prizeType].details[detailKey].total_value += value;
                if (unit === "魔力值") totalBonusEarned += value;
            }
        });

        const costCount = Math.max(0, totalCount - initialFreeCount);
        const totalBonusCost = costCount * 1000;
        const netBonus = totalBonusEarned - totalBonusCost;

        results.push(`🎰 抽奖次数: ${totalCount}`);
        results.push(`🎯 中奖次数: ${winCount}`);
        results.push(`💔 谢谢参与: ${totalCount - winCount}`);
        if (winCount > 0) results.push(`📊 中奖概率: ${(winCount / totalCount * 100).toFixed(1)}%`);
        results.push(`💰 消耗魔力: ${formatNum(totalBonusCost)}`);
        results.push(`💵 赚取魔力: ${formatNum(totalBonusEarned)}`);
        results.push(netBonus >= 0 ? `📈 净赚魔力: ${formatNum(netBonus)}` : `📉 净亏魔力: ${formatNum(Math.abs(netBonus))}`);
        results.push("─".repeat(14));

        // 喊话逻辑
        const shouts = [];
        const sortedGrades = Object.entries(gradeStats).sort((a, b) => {
            const getG = (s) => parseInt(s.match(/(\d+)/)?.[1]) || 99;
            return getG(a[0]) - getG(b[0]);
        });

        results.push("🏅 等级分布:");
        sortedGrades.forEach(([grade, count]) => {
            const num = grade.match(/(\d+)/)?.[1];
            results.push(`  ${GRADE_ICONS[num] || "🎗️"} ${grade}: ${count}次`);
            if (num === "1" && shoutSettings.shoutFirst) shouts.push(shoutSettings.shoutFirst + (count > 1 ? ` x${count}` : ""));
            if (num === "2" && shoutSettings.shoutSecond) shouts.push(shoutSettings.shoutSecond + (count > 1 ? ` x${count}` : ""));
            if (num === "13" && shoutSettings.shoutMedal) shouts.push(shoutSettings.shoutMedal + (count > 1 ? ` x${count}` : ""));
        });

        if (shouts.length > 0) shoutbox(shouts.join(" | "));

        results.push("─".repeat(14));
        results.push("🏆 奖励详情:");
        Object.entries(prizeStats).forEach(([type, stat]) => {
            results.push(`  ${stat.icon} ${TYPE_NAME[type] || type} (${stat.count}次)`);
            Object.entries(stat.details).forEach(([detail, info]) => {
                results.push(`    🎁 ${detail}: ${info.unit === "魔力值" ? formatNum(info.total_value) : info.total_value} (${info.count}次)`);
            });
        });

        return `🎮 Playlet幸运转盘抽奖报告\n⏱️ ${new Date().toLocaleString()}\n━━━━━━━━━━━━━━\n${errorMessages.length ? errorMessages.join("\n") + "\n━━━━━━━━━━━━━━\n" : ""}${results.join("\n")}`;
    }

    function showFinalReport(reportText) {
        const overlay = document.createElement('div');
        overlay.className = 'mp-modal-overlay';
        overlay.innerHTML = `
            <div class="mp-modal-container">
                <div class="mp-modal-title">抽奖完成</div>
                <div class="mp-report-box" style="max-height: 500px; font-size: 16px;">${reportText}</div>
                <div class="mp-btn-group">
                    <button class="mp-btn mp-btn-primary" style="width:100%" onclick="location.reload()">确定并刷新页面</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // 初始化入口
    function run() {
        init();
        // 某些页面可能在加载后动态更新按钮，使用 MutationObserver 监听
        const observer = new MutationObserver((mutations) => {
            if (!document.querySelector('.mp-custom-spin-btn')) {
                init();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener('load', run);
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        run();
    }
})();
