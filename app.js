// 禁忌数据
const CONTRAINDICATIONS = {
fatal: [
    {drug:"头孢类(所有)", ban:"⛔ 酒精（酒心巧克力、醪糟、藿香正气水、含醇漱口水都算）", result:"双硫仑反应→休克→死亡", level:"☠️致命"},
    {drug:"甲硝唑/奥硝唑", ban:"⛔ 酒精（吃药前后7天）", result:"双硫仑反应，同上", level:"☠️致命"},
    {drug:"对乙酰氨基酚", ban:"⛔ 酒精", result:"肝衰竭", level:"☠️致命"},
    {drug:"藿香正气水", ban:"⛔ 不能和头孢一起吃", result:"里面含酒精→触发双硫仑反应", level:"☠️致命"},
    {drug:"阿莫西林", ban:"⛔ 青霉素过敏的人", result:"过敏性休克", level:"☠️致命"}
],
serious: [
    {drug:"布洛芬", ban:"⚠️ 空腹/酒/咖啡", result:"伤胃，可能胃出血", level:"🔴严重"},
    {drug:"尼美舒利", ban:"⛔ 酒/高脂食物", result:"肝损伤加重", level:"🔴严重"},
    {drug:"牛黄解毒片", ban:"⚠️ 不能连续吃超5天", result:"含砷，会蓄积中毒", level:"🔴严重"},
    {drug:"左氧氟沙星", ban:"⛔ 牛奶/钙片/铁剂", result:"药物失效+伤肌腱", level:"🟠中重"},
    {drug:"铁剂(补血)", ban:"⚠️ 茶/咖啡/牛奶/钙片", result:"铁吸收不了", level:"🟡中等"},
    {drug:"氯雷他定", ban:"⚠️ 柚子/西柚", result:"药物浓度升高", level:"🟡中等"},
    {drug:"阿莫西林", ban:"⚠️ 避孕药", result:"避孕效果降低", level:"🟡中等"},
    {drug:"奥美拉唑", ban:"⚠️ 别连吃超14天", result:"影响钙和B12吸收", level:"🟡中等"},
    {drug:"褪黑素", ban:"⚠️ 咖啡/浓茶", result:"白吃了（抵消效果）", level:"🟢轻微"},
    {drug:"中成药", ban:"⚠️ 萝卜/绿豆/浓茶", result:"降低药效", level:"🟢轻微"},
    {drug:"钙片", ban:"⚠️ 菠菜", result:"形成草酸钙吸收不了", level:"🟢轻微"}
],
combos: [
    {combo:"布洛芬 + 对乙酰氨基酚 同时吃", risk:"伤肝伤肾（可以交替吃，间隔4小时，但不能同时！）"},
    {combo:"头孢 + 藿香正气水", risk:"藿香正气水含酒精→致命！"},
    {combo:"感冒药 + 退烧药", risk:"很多感冒药已经含了对乙酰氨基酚，重复=超量=伤肝"},
    {combo:"布洛芬 + 阿司匹林", risk:"胃出血风险翻倍"},
    {combo:"蒙脱石散 + 其他药一起吃", risk:"蒙脱石散会把其他药吸走（必须隔2小时）"},
    {combo:"抗生素 + 益生菌一起吃", risk:"抗生素把益生菌杀了白吃（隔2小时）"},
    {combo:"布洛芬 + 尼美舒利", risk:"同类药叠加，胃和肝都受不了"},
    {combo:"好几种中成药一起吃", risk:"成分可能重复，毒性叠加"}
]
};

// 快捷标签
const QUICK = [
    {label:"喉咙痛+低烧", text:"喉咙痛 低烧"},
    {label:"痛经", text:"痛经 小腹痛"},
    {label:"感冒怕冷", text:"怕冷 鼻塞 流清鼻涕"},
    {label:"咳嗽有痰", text:"咳嗽 有痰"},
    {label:"拉肚子", text:"拉肚子 腹痛"},
    {label:"失眠", text:"失眠 睡不着"},
    {label:"过敏", text:"过敏 皮肤痒"},
    {label:"头痛", text:"头痛"},
    {label:"胃不舒服", text:"胃痛 反酸"},
    {label:"免疫力差", text:"乏力 容易累 易感冒"},
    {label:"月经不调", text:"月经不调"},
    {label:"发炎感染", text:"感染 发炎"}
];

// ============ 初始化 ============
document.addEventListener('DOMContentLoaded', function() {
    initQuickTags();
    initContra();
    initCatalog();
});

function initQuickTags() {
    document.getElementById('quickTags').innerHTML = QUICK.map(q =>
        `<span onclick="quickSearch('${q.text}')">${q.label}</span>`
    ).join('');
}
function quickSearch(t) {
    document.getElementById('symptomInput').value = t;
    search();
}

// ============ Tab ============
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(e => e.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

// ============ 搜索 ============
function search() {
    const input = document.getElementById('symptomInput').value.trim();
    if (!input) { showNo("告诉我哪里不舒服呀~"); return; }
    switchTab('search');
    const res = [];
    for (const [k, v] of Object.entries(DB)) {
        let score = 0, matched = [];
        for (const s of v.symptoms) { if (input.includes(s)) { score++; matched.push(s); } }
        if (score > 0) res.push({key: k, score, matched, ...v});
    }
    res.sort((a, b) => b.score - a.score);
    render(res);
}

function render(res) {
    if (!res.length) { showNo("没匹配到呢，换个说法试试？<br>比如：喉咙痛、痛经、拉肚子、失眠~"); return; }
    let h = '';
    for (const r of res) {
        h += `<div class="card">
            <div class="card-title">💊 ${r.key}</div>
            <div class="sym-tags">${r.matched.map(s => `<span class="sym-tag">✓ ${s}</span>`).join('')}</div>`;
        if (r.combo) {
            h += `<div class="combo-box">
                <div class="combo-title">📦 小欣吃这些</div>
                <div class="combo-pills">${r.combo.meds.map((m,i) => `<span class="combo-pill"><span class="pill-order">${i+1}</span>${m}</span>`).join('')}</div>
                <div class="combo-note">${r.combo.note}</div>
                ${r.combo.warn ? `<div class="combo-warn">${r.combo.warn}</div>` : ''}
            </div>`;
        }
        h += `<details style="margin-bottom:12px;"><summary>📊 看看全部药物对比</summary>
            <div class="tbl-wrap"><table class="med-tbl">
            <thead><tr><th>级别</th><th>药名</th><th>用法</th><th>适合情况</th><th>多快见效</th><th>安全性</th></tr></thead>
            <tbody>${r.medicines.map(m => medRow(m)).join('')}</tbody></table></div></details>`;
        if (r.contraindications && r.contraindications.length) {
            h += `<div class="contra-box"><h4>⚠️ 注意这些禁忌：</h4>${r.contraindications.map(c => `<div>• ${c}</div>`).join('')}</div>`;
        }
        h += `<div class="tips-box">${r.tips}</div></div>`;
    }
    document.getElementById('results').innerHTML = h;
}

function medRow(m) {
    const pc = m.priority===1?'p1':m.priority===2?'p2':m.priority===3?'p3':'p4';
    const pt = m.priority===1?'★首选':m.priority===2?'次选':m.priority===3?'备选':'⚠️慎用';
    const tc = m.toxicity==='极低'||m.toxicity==='低'?'danger-low':m.toxicity==='低-中'?'danger-mid':'danger-high';
    let safe = `<span class="${tc}">${m.toxicity}</span>`;
    if (m.side) safe += `<br><small style="color:#666">${m.side}</small>`;
    if (m.contra) safe += `<br><small style="color:#c62828;font-weight:600">${m.contra}</small>`;
    return `<tr><td><span class="${pc}">${pt}</span></td><td class="name">${m.name}</td><td>${m.usage}</td><td>${m.scene}</td><td>${m.speed}</td><td>${safe}</td></tr>`;
}

function showNo(msg) {
    document.getElementById('results').innerHTML = `<div class="no-result"><div class="emoji">🤔</div><p>${msg}</p></div>`;
}

// ============ 禁忌速查 ============
function initContra() {
    let h = '';
    h += `<div class="card" style="border:1.5px solid #f48fb1;">
        <div class="card-title" style="color:#c62828;">🚨 小欣的过敏提醒</div>
        <div style="font-size:0.84em;line-height:1.7;margin-top:6px;">
        <div>• <b>丁香过敏</b>：买中成药之前看看成分表有没有丁香/丁香油/丁香酚</div>
        <div>• <b>猫毛狗毛过敏</b>：碰了之后赶紧洗手换衣服，严重就吃氯雷他定</div>
        </div></div>`;
    h += `<div class="card">
        <div class="card-title" style="color:#b71c1c;">☠️ 绝对不能碰的组合（致命）</div>
        <div class="tbl-wrap"><table class="med-tbl">
        <thead><tr><th>药物</th><th>禁忌</th><th>后果</th><th>严重度</th></tr></thead>
        <tbody>${CONTRAINDICATIONS.fatal.map(c => `<tr><td class="name">${c.drug}</td><td>${c.ban}</td><td style="color:#b71c1c">${c.result}</td><td><b>${c.level}</b></td></tr>`).join('')}</tbody>
        </table></div></div>`;
    h += `<div class="card">
        <div class="card-title" style="color:#e65100;">⚠️ 吃药时不能碰的食物/饮品</div>
        <div class="tbl-wrap"><table class="med-tbl">
        <thead><tr><th>药物</th><th>不能碰</th><th>为什么</th><th>严重度</th></tr></thead>
        <tbody>${CONTRAINDICATIONS.serious.map(c => `<tr><td class="name">${c.drug}</td><td>${c.ban}</td><td>${c.result}</td><td>${c.level}</td></tr>`).join('')}</tbody>
        </table></div></div>`;
    h += `<div class="card">
        <div class="card-title" style="color:#6a1b9a;">💊 不能一起吃的药</div>
        <div class="tbl-wrap"><table class="med-tbl">
        <thead><tr><th>危险组合</th><th>会怎样</th></tr></thead>
        <tbody>${CONTRAINDICATIONS.combos.map(c => `<tr><td class="name">${c.combo}</td><td>${c.risk}</td></tr>`).join('')}</tbody>
        </table></div></div>`;
    h += `<div class="card" style="background:#fff3e0;border:1px solid #ffe0b2;">
        <div class="card-title" style="color:#e65100;">💉 抗生素铁律（很重要！）</div>
        <div style="font-size:0.84em;color:#555;line-height:1.8;margin-top:6px;">
        <b>1.</b> 一定吃满疗程（5-7天），感觉好了也不能停！<br>
        <b>2.</b> 头孢+酒 = 可能会死（前后7天滴酒不沾）<br>
        <b>3.</b> 甲硝唑+酒 = 一样危险<br>
        <b>4.</b> 青霉素过敏 → 阿莫西林绝对不能吃<br>
        <b>5.</b> 吃抗生素同时可以吃益生菌保护肠道（隔2小时吃）
        </div></div>`;
    document.getElementById('contraContent').innerHTML = h;
}

// ============ 目录 ============
function initCatalog() {
    let h = `<div class="card"><div class="card-title">📖 全部收录（点一下就能查）</div><div class="catalog-grid" style="margin-top:10px;">`;
    for (const [k, v] of Object.entries(DB)) {
        h += `<div class="catalog-item" onclick="quickSearch('${v.symptoms[0]}')">
            <div class="ci-name">${k}</div>
            <div class="ci-desc">${v.symptoms.slice(0,3).join('、')}</div></div>`;
    }
    h += '</div></div>';
    document.getElementById('catalogContent').innerHTML = h;
}
