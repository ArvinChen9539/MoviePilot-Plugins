// ==UserScript==
// @name         Playlet 一键抽奖
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在 Playlet 幸运转盘页面增加一键抽奖功能
// @author       Demo
// @match        https://playletpt.xyz/fortune-wheel.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 配置
    const CONFIG = {
        spinUrl: '/fortune-wheel-spin.php',
        interval: 5000, // 请求间隔 5秒
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

    // 注入样式
    const style = document.createElement('style');
    style.textContent = `
        .custom-spin-btn {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background-color: #28a745; /* 绿色，区别于原按钮 */
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s;
            text-decoration: none;
            line-height: 1.5;
            vertical-align: middle;
        }
        .custom-spin-btn:hover {
            background-color: #218838;
        }
        .custom-spin-btn:disabled {
            background-color: #6c757d;
            cursor: not-allowed;
        }

        /* 进度条悬浮窗 */
        #spin-progress-container {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 300px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            z-index: 9999;
            display: none;
            font-family: sans-serif;
        }
        .progress-bar-bg {
            width: 100%;
            height: 10px;
            background: #444;
            border-radius: 5px;
            margin-top: 10px;
            overflow: hidden;
        }
        .progress-bar-fill {
            height: 100%;
            background: #17a2b8;
            width: 0%;
            transition: width 0.3s;
        }
        .progress-text {
            margin-bottom: 5px;
            font-size: 14px;
        }

        /* 报告弹窗 */
        .report-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        .report-content {
            background: #fff;
            color: #333;
            padding: 20px;
            border-radius: 8px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            font-family: monospace;
            white-space: pre-wrap;
            position: relative;
            font-size: 16px;
        }
        .report-close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #dc3545;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // 工具函数
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const formatNum = (num) => {
        if (num >= 10000) {
            let result = num / 10000;
            return Number.isInteger(result) ? `${result}W` : `${result.toFixed(1)}W`;
        }
        return str(num);
    };
    // JS 中没有 str()，修正为 String() 或者直接隐式转换
    const formatNumJs = (num) => {
        if (num >= 10000) {
            let result = num / 10000;
            return Number.isInteger(result) ? `${result}W` : `${result.toFixed(1)}W`;
        }
        return String(num);
    };

    // 获取剩余次数
    function getRemainCount() {
        try {
            const freeEl = document.getElementById('free-count');
            const todayEl = document.getElementById('today-count');
            
            // 如果找不到元素，尝试从 document.body.innerText 匹配
            // 这里假设页面结构如 Python 代码分析所示
            
            const freeCount = freeEl ? parseInt(freeEl.innerText) : 0;
            
            let remainCount = 0;
            if (todayEl) {
                const todayText = todayEl.innerText; // "10 / 2"
                const parts = todayText.split('/');
                if (parts.length === 2) {
                    const used = parseInt(parts[0].trim());
                    const total = parseInt(parts[1].trim());
                    remainCount = total - used;
                }
            }
            
            return { freeCount, remainCount };
        } catch (e) {
            console.error("获取剩余次数异常", e);
            return { freeCount: 0, remainCount: 0 };
        }
    }

    // 初始化按钮
    function init() {
        // 防止重复添加
        if (document.querySelector('.custom-spin-btn')) {
            return;
        }

        const targetBtn = document.querySelector('.spin-btn--primary');
        if (!targetBtn) {
            console.log("未找到目标按钮 .spin-btn--primary");
            return;
        }

        const newBtn = document.createElement('button');
        newBtn.className = 'custom-spin-btn';
        newBtn.innerText = '一键抽奖';
        newBtn.onclick = handleOneClickSpin;

        // 插入到目标按钮后面
        if (targetBtn.parentNode) {
            targetBtn.parentNode.insertBefore(newBtn, targetBtn.nextSibling);
        }
    }

    // 处理点击事件
    async function handleOneClickSpin(e) {
        e.preventDefault();
        
        const counts = getRemainCount();
        let defaultCount = counts.remainCount;
        
        const inputStr = prompt("请输入抽奖次数：", defaultCount);
        if (inputStr === null) return; // 取消
        
        let execCount = parseInt(inputStr);
        if (isNaN(execCount) || execCount <= 0) {
            alert("请输入有效的数字！");
            return;
        }

        // 显示进度条
        const progressContainer = document.createElement('div');
        progressContainer.id = 'spin-progress-container';
        progressContainer.innerHTML = `
            <div class="progress-text">正在抽奖... <span id="spin-progress-text">0/${execCount}</span></div>
            <div class="progress-bar-bg">
                <div id="spin-progress-fill" class="progress-bar-fill"></div>
            </div>
            <div id="spin-status-text" style="margin-top:5px; font-size:12px; color:#aaa;">准备开始...</div>
        `;
        document.body.appendChild(progressContainer);
        progressContainer.style.display = 'block';

        const allResults = [];
        let completedCount = 0;
        const totalTarget = execCount;
        let errorNum = 0;
        const freeCountStart = counts.freeCount; // 记录开始时的免费次数，用于计算魔力消耗

        try {
            while (execCount > 0) {
                let num = 1;
                if (execCount >= 50) num = 50;
                else if (execCount >= 20) num = 20;
                else if (execCount >= 10) num = 10;

                updateStatus(`正在请求 ${num} 次连抽...`);

                // 发送请求
                const formData = new FormData();
                formData.append('count', num);

                try {
                    const response = await fetch(CONFIG.spinUrl, {
                        method: 'POST',
                        body: formData
                    });
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const json = await response.json();
                    
                    if (!json.success) {
                        console.error("抽奖失败", json);
                        allResults.push(`❌ 抽奖失败: ${json.message || "未知错误"}`);
                        // 失败可能就中断了，或者继续？Python代码是直接返回
                        updateStatus(`请求失败: ${json.message || "未知错误"}`);
                        break; 
                    }

                    if (json.results && Array.isArray(json.results)) {
                        allResults.push(...json.results);
                        completedCount += num;
                        execCount -= num;
                        updateProgress(completedCount, totalTarget);
                        updateStatus(`成功抽取 ${num} 次，休息 5 秒...`);
                    } else {
                        throw new Error("返回数据格式错误");
                    }

                } catch (err) {
                    console.error("请求异常", err);
                    errorNum++;
                    updateStatus(`异常: ${err.message}`);
                    if (errorNum > 5) {
                        alert("连续错误次数过多，停止执行");
                        break;
                    }
                }

                if (execCount > 0) {
                    await sleep(CONFIG.interval);
                }
            }
        } catch (e) {
            alert(`发生严重错误: ${e.message}`);
        } finally {
            // 移除进度条
            document.body.removeChild(progressContainer);
            
            // 生成并显示报告
            const report = generateReport(allResults, freeCountStart);
            showReportModal(report);
        }
    }

    function updateProgress(current, total) {
        const percent = Math.min(100, (current / total) * 100);
        document.getElementById('spin-progress-fill').style.width = `${percent}%`;
        document.getElementById('spin-progress-text').innerText = `${current}/${total}`;
    }

    function updateStatus(text) {
        const el = document.getElementById('spin-status-text');
        if (el) el.innerText = text;
    }

    // 生成报告逻辑 (翻译自 Python 代码)
    function generateReport(raffleResults, freeCount) {
        let results = [];
        const simpleResults = []; // 存储纯文本结果用于展示列表（虽然 Python 代码似乎没有直接展示所有列表，除了失败信息）
        // Python 代码逻辑：如果是 process_raffle_results，它接收的是 API 原始结果列表
        // 但如果中间有报错，allResults 里可能混入了字符串错误信息。
        // 这里我们需要过滤一下。
        
        const validResults = [];
        const errorMessages = [];
        
        raffleResults.forEach(item => {
            if (typeof item === 'string') {
                errorMessages.push(item);
            } else {
                validResults.push(item);
            }
        });

        if (validResults.length === 0 && errorMessages.length === 0) {
            return "ℹ️ 没有抽奖结果";
        }

        // 统计变量
        const prizeStats = {};
        const gradeStats = {};
        const totalCount = validResults.length;
        let winCount = 0;
        
        let totalBonusCost = 0;
        let totalBonusEarned = 0;
        
        validResults.forEach(item => {
            const result = item.result || {};
            const prize = item.prize || {};
            const grade = item.grade || "未知等级";
            
            // 等级统计
            gradeStats[grade] = (gradeStats[grade] || 0) + 1;
            
            // 奖励类型统计
            const status = result.status || "";
            let prizeType = "nothing";
            let prizeName = "谢谢参与";
            
            if (status === "nothing") {
                prizeType = "nothing";
                prizeName = "谢谢参与";
            } else {
                prizeType = result.type || "unknown";
                prizeName = prize.name || "未知奖励";
                winCount++;
            }
            
            if (!prizeStats[prizeType]) {
                prizeStats[prizeType] = {
                    count: 0,
                    details: {},
                    icon: TYPE_ICONS[prizeType] || "🎁"
                };
            }
            
            prizeStats[prizeType].count++;
            
            // 详情统计
            if (status !== "nothing") {
                let value = result.value || 0;
                // 尝试转数字
                value = Number(value);
                if (isNaN(value)) value = 1;
                
                const unit = result.unit || "未知";
                const detailKey = `${prizeName} (${unit})`;
                
                if (!prizeStats[prizeType].details[detailKey]) {
                    prizeStats[prizeType].details[detailKey] = {
                        count: 0,
                        total_value: 0,
                        unit: "未知"
                    };
                }
                
                prizeStats[prizeType].details[detailKey].count++;
                prizeStats[prizeType].details[detailKey].unit = unit;
                prizeStats[prizeType].details[detailKey].total_value += value;
                
                // 魔力赚取
                if (unit === "魔力值") {
                    totalBonusEarned += value;
                }
            }
        });

        // 计算消耗 (免费次数不消耗)
        // 注意：这里 freeCount 是初始的免费次数。
        // Python 逻辑： total_bonus_cost = (total_count - free_count) * 1000
        // 如果抽奖次数小于免费次数，则消耗为0。
        // 但这里 totalCount 是本次实际抽的次数。
        // 假设 freeCount 是本次抽奖前的剩余免费次数。
        // 如果 totalCount <= freeCount, 消耗 0
        // 如果 totalCount > freeCount, 消耗 (totalCount - freeCount) * 1000
        const costCount = Math.max(0, totalCount - freeCount);
        totalBonusCost = costCount * 1000;
        const netBonus = totalBonusEarned - totalBonusCost;

        // 开始构建报告文本
        results.push(`🎮 Playlet幸运转盘抽奖报告`);
        results.push(`⏱️ ${new Date().toLocaleString()}`);
        results.push("━━━━━━━━━━━━━━");
        
        // 如果有错误信息，先显示
        if (errorMessages.length > 0) {
            results.push(...errorMessages);
            results.push("━━━━━━━━━━━━━━");
        }

        results.push(`🎰 抽奖次数: ${totalCount}`);
        results.push(`🎯 中奖次数: ${winCount}`);
        results.push(`💔 谢谢参与: ${totalCount - winCount}`);
        
        if (winCount > 0) {
            const winRate = (winCount / totalCount) * 100;
            results.push(`📊 中奖概率: ${winRate.toFixed(1)}%`);
        }
        
        results.push(`💰 消耗魔力: ${formatNumJs(totalBonusCost)}`);
        results.push(`💵 赚取魔力: ${formatNumJs(totalBonusEarned)}`);
        
        if (netBonus >= 0) {
            results.push(`📈 净赚魔力: ${formatNumJs(netBonus)}`);
        } else {
            results.push(`📉 净亏魔力: ${formatNumJs(Math.abs(netBonus))}`);
        }
        
        results.push("─".repeat(14));
        
        // 盈亏评语
        if (totalBonusCost > 0) {
            const profitRatio = totalBonusEarned / totalBonusCost;
            if (profitRatio >= 2) results.push("🎉 赚翻了！这波血赚，下次继续冲！");
            else if (profitRatio >= 1.5) results.push("😊 赚了不少！这波很划算！");
            else if (profitRatio >= 1) results.push("🙂 回本万岁！至少没亏钱！");
            else if (profitRatio >= 0.5) results.push("😐 亏得不多，就当花钱娱乐了！");
            else if (profitRatio === 0) results.push("💸 全部亏光！这波亏麻了！");
            else results.push("😢 亏得有点多，建议见好就收！");
        } else if (totalBonusEarned > 0) {
            results.push("🎊 全是白赚！血赚不亏！");
        } else {
            results.push("😐 今天无事发生，既没赚也没亏！");
        }
        
        results.push("─".repeat(14));
        results.push("🏅 等级分布:");
        
        // 排序等级
        const sortedGrades = Object.entries(gradeStats).sort((a, b) => {
            const getGradeNum = (str) => {
                const match = str.match(/(\d+)等奖/);
                return match ? parseInt(match[1]) : 99;
            };
            return getGradeNum(a[0]) - getGradeNum(b[0]);
        });
        
        sortedGrades.forEach(([grade, count]) => {
            const match = grade.match(/(\d+)等奖/);
            let icon = "❓";
            if (match) {
                const gradeKey = match[1];
                icon = GRADE_ICONS[gradeKey] || "🎗️";
            }
            results.push(`  ${icon} ${grade}: ${count}次`);
        });
        
        results.push("─".repeat(14));
        results.push("🏆 奖励详情:");
        
        for (const [prizeType, stat] of Object.entries(prizeStats)) {
            if (prizeType === "nothing") continue;
            
            const icon = stat.icon;
            const count = stat.count;
            const typeName = TYPE_NAME[prizeType] || prizeType.toUpperCase();
            
            results.push(`  ${icon} ${typeName} 类奖励 (${count}次)`);
            
            for (const [detail, info] of Object.entries(stat.details)) {
                let totalVal = info.total_value;
                if (info.unit === "魔力值") {
                    totalVal = formatNumJs(totalVal);
                }
                results.push(`    🎁 ${detail}: ${totalVal} (${info.count}次)`);
            }
            results.push("");
        }

        return results.join("\n");
    }

    function showReportModal(reportText) {
        const modal = document.createElement('div');
        modal.className = 'report-modal';
        
        const content = document.createElement('div');
        content.className = 'report-content';
        content.innerText = reportText;
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'report-close-btn';
        closeBtn.innerText = '关闭';
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
        };
        
        content.appendChild(closeBtn);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }

    // 启动
    window.addEventListener('load', init);
    // 以防 load 已经触发
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(init, 1000);
    }

})();
