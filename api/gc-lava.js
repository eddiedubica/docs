const LOGO = "/assets/dubica-logo-white.png";

const HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Documentation — Lava Top + GetCourse + Vakas-tools</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Onest:wght@400;500;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Onest', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0a0a0a;
  color: #1e1e1e;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.hero {
  text-align: center;
  padding: 80px 20px 60px;
  background: radial-gradient(ellipse at 50% 0%, rgba(124,252,0,0.12) 0%, transparent 60%);
}
.hero img { height: 48px; margin-bottom: 24px; display: block; margin-left: auto; margin-right: auto; }
.hero .doc-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #7cfc00;
  margin-bottom: 24px;
  padding: 6px 16px;
  border: 1px solid rgba(124,252,0,0.2);
  border-radius: 20px;
  opacity: 0.7;
}
.hero h1 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #fff 0%, #7cfc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p { color: rgba(255,255,255,0.35); font-size: 17px; max-width: 560px; margin: 0 auto; line-height: 1.5; }

.container { max-width: 820px; margin: 0 auto; padding: 0 24px 80px; }

/* Schema */
.schema {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(124,252,0,0.08);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 48px;
  overflow-x: auto;
}
.schema pre {
  font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
  font-size: 13px;
  color: rgba(124,252,0,0.55);
  line-height: 1.7;
  white-space: pre;
}

/* Sections */
.section { margin-bottom: 56px; }
.section-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(124,252,0,0.1);
  color: #7cfc00;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
}
.section h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  color: #fff;
}
.section .desc {
  color: rgba(255,255,255,0.3);
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.5;
}

/* Cards */
.card-group { display: flex; flex-direction: column; gap: 10px; }
.card {
  background: rgba(255,255,255,0.92);
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s;
}
.card:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
.card-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}
.card-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7cfc00;
  flex-shrink: 0;
}
.card-title { font-size: 15px; font-weight: 600; color: #1e1e1e; }
.card-text { font-size: 14px; color: rgba(30,30,30,0.55); padding-left: 20px; line-height: 1.6; }

/* Code */
.code-block {
  background: #0d1206;
  border: 1px solid rgba(124,252,0,0.1);
  border-radius: 14px;
  padding: 18px 22px;
  margin: 14px 0;
  overflow-x: auto;
}
.code-block code {
  font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
  font-size: 13px;
  color: rgba(124,252,0,0.75);
  line-height: 1.7;
  white-space: pre;
}
.code-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.2);
  margin-bottom: 6px;
  margin-top: 20px;
}
code {
  font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
  font-size: 12px;
  background: rgba(124,252,0,0.08);
  padding: 2px 6px;
  border-radius: 5px;
  color: #7da84f;
}
.card code { background: rgba(124,252,0,0.1); }

/* Callout */
.callout {
  background: rgba(124,252,0,0.05);
  border: 1px solid rgba(124,252,0,0.12);
  border-radius: 14px;
  padding: 18px 22px;
  margin: 16px 0;
}
.callout-warn {
  background: rgba(245,158,11,0.05);
  border-color: rgba(245,158,11,0.15);
}
.callout-info {
  background: rgba(59,130,246,0.05);
  border-color: rgba(59,130,246,0.15);
}
.callout-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #7cfc00;
  margin-bottom: 6px;
}
.callout-warn .callout-title { color: #f59e0b; }
.callout-info .callout-title { color: #3b82f6; }
.callout p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.6; }

/* Prompt */
.prompt-block {
  background: linear-gradient(135deg, rgba(124,252,0,0.06) 0%, rgba(130,180,90,0.03) 100%);
  border: 1px solid rgba(124,252,0,0.12);
  border-radius: 16px;
  padding: 24px;
  margin: 16px 0;
}
.prompt-block .label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7cfc00;
  margin-bottom: 10px;
  opacity: 0.6;
}
.prompt-block p {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  font-style: italic;
  line-height: 1.7;
}

/* URL example visual */
.url-visual {
  background: #1a1a2e;
  border: 1px solid rgba(124,252,0,0.1);
  border-radius: 12px;
  padding: 16px 20px;
  margin: 12px 0;
  font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  overflow-x: auto;
  white-space: nowrap;
}
.url-visual .url-dim { color: rgba(255,255,255,0.3); }
.url-visual .url-highlight {
  color: #7cfc00;
  background: rgba(124,252,0,0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}
.url-visual .url-arrow {
  display: block;
  margin-top: 8px;
  color: #7cfc00;
  font-size: 12px;
  font-family: 'SF Pro Display', sans-serif;
}

/* Step list */
.step-list {
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 16px 0;
}
.step-list li {
  counter-increment: step;
  padding: 12px 0 12px 36px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.45);
  font-size: 14px;
  position: relative;
  line-height: 1.6;
}
.step-list li:last-child { border-bottom: none; }
.step-list li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: rgba(124,252,0,0.08);
  color: #7cfc00;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
}
.step-list li strong { color: #e8e8dc; }

/* Browser mockup */
.browser-mock {
  background: #1a1a2e;
  border: 1px solid rgba(124,252,0,0.1);
  border-radius: 14px;
  overflow: hidden;
  margin: 16px 0;
}
.browser-bar {
  background: rgba(255,255,255,0.04);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.browser-dots {
  display: flex;
  gap: 6px;
}
.browser-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
}
.browser-url {
  flex: 1;
  background: rgba(255,255,255,0.04);
  border-radius: 6px;
  padding: 5px 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255,255,255,0.35);
}
.browser-url .hl { color: #7cfc00; font-weight: 600; }
.browser-body {
  padding: 20px;
}
.browser-body .mock-sidebar {
  display: flex;
  gap: 16px;
}
.browser-body .mock-nav {
  width: 180px;
  flex-shrink: 0;
}
.browser-body .mock-nav-item {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  color: rgba(255,255,255,0.25);
  margin-bottom: 2px;
}
.browser-body .mock-nav-item.active {
  background: rgba(124,252,0,0.08);
  color: #7cfc00;
}
.browser-body .mock-content {
  flex: 1;
}
.browser-body .mock-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  font-size: 12px;
}
.browser-body .mock-label { color: rgba(255,255,255,0.25); min-width: 100px; }
.browser-body .mock-value { color: rgba(255,255,255,0.45); }
.browser-body .mock-value.hl { color: #7cfc00; }
.browser-body .mock-btn {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  margin-top: 12px;
}
.mock-btn-green { background: rgba(124,252,0,0.12); color: #7cfc00; }
.mock-btn-blue { background: rgba(59,130,246,0.12); color: #3b82f6; }

/* Table */
.table-wrap {
  overflow-x: auto;
  margin: 12px 0;
  border-radius: 14px;
  border: 1px solid rgba(124,252,0,0.08);
}
table { width: 100%; border-collapse: collapse; font-size: 14px; }
th {
  background: rgba(124,252,0,0.04);
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  color: rgba(124,252,0,0.5);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(124,252,0,0.08);
}
td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(124,252,0,0.04);
  color: rgba(255,255,255,0.4);
}
td:first-child { color: #e8e8dc; font-weight: 500; }
tr:last-child td { border-bottom: none; }

/* Fields */
.fields-card {
  background: rgba(255,255,255,0.92);
  border-radius: 14px;
  padding: 8px 22px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.field-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.field-row:last-child { border-bottom: none; }
.field-key { min-width: 140px; }
.field-arrow { color: rgba(0,0,0,0.15); font-size: 12px; }
.field-val { color: rgba(30,30,30,0.5); font-size: 14px; }

/* External link */
.ext-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #7cfc00;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  margin-top: 12px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.ext-link:hover { opacity: 1; }
.ext-link svg { width: 14px; height: 14px; }

/* Footer */
.footer {
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid rgba(124,252,0,0.06);
  color: rgba(255,255,255,0.15);
  font-size: 13px;
}

@media (max-width: 640px) {
  body { overflow-x: hidden; }
  .hero { padding: 60px 16px 36px; }
  .hero img { height: 36px; }
  .hero .doc-label { font-size: 10px; letter-spacing: 2px; padding: 5px 12px; }
  .hero h1 { font-size: 24px; }
  .hero p { font-size: 15px; }
  .container { padding: 0 16px 60px; }
  .section { margin-bottom: 40px; }
  .section h2 { font-size: 20px; }
  .section .desc { font-size: 14px; }
  .schema { padding: 16px; border-radius: 14px; margin-bottom: 36px; }
  .schema pre { font-size: 9px; line-height: 1.5; }
  .card { padding: 16px; border-radius: 12px; }
  .card-title { font-size: 14px; }
  .card-text { font-size: 13px; padding-left: 16px; }
  .code-block { padding: 14px 16px; border-radius: 12px; }
  .code-block code { font-size: 11px; line-height: 1.6; }
  code { font-size: 11px; word-break: break-all; }
  .callout { padding: 14px 16px; border-radius: 12px; }
  .callout p { font-size: 13px; }
  .prompt-block { padding: 18px 16px; border-radius: 12px; }
  .prompt-block p { font-size: 13px; }
  .step-list li { font-size: 13px; padding: 10px 0 10px 32px; }
  .step-list li::before { width: 22px; height: 22px; font-size: 11px; top: 10px; }
  .browser-mock { border-radius: 10px; }
  .browser-bar { padding: 8px 12px; gap: 6px; }
  .browser-dots span { width: 8px; height: 8px; }
  .browser-url { font-size: 9px; padding: 4px 8px; }
  .browser-body { padding: 14px; }
  .browser-body .mock-sidebar { flex-direction: column; }
  .browser-body .mock-nav { width: 100%; display: flex; flex-wrap: wrap; gap: 4px; }
  .browser-body .mock-nav-item { padding: 6px 10px; font-size: 11px; }
  .browser-body .mock-row { font-size: 11px; }
  .browser-body .mock-label { min-width: 70px; font-size: 11px; }
  .browser-body .mock-value { font-size: 11px; word-break: break-all; }
  .table-wrap { border-radius: 10px; }
  table { font-size: 12px; }
  th { padding: 10px 12px; font-size: 10px; }
  td { padding: 10px 12px; font-size: 12px; }
  .fields-card { padding: 6px 16px; border-radius: 12px; }
  .field-row { gap: 8px; padding: 9px 0; flex-wrap: wrap; }
  .field-key { min-width: auto; }
  .field-val { font-size: 13px; }
  .footer { padding: 30px 16px; font-size: 12px; }
}
</style>
</head>
<body>

<div class="hero">
  <img src="${LOGO}" alt="dubica">
  <div class="doc-label">Documentation</div>
  <h1>Lava Top + GetCourse + Vakas</h1>
  <p>Полная инструкция по сборке системы приёма оплат через Lava Top API с передачей данных клиента в Vakas-tools</p>
</div>

<div class="container">

<div class="schema">
<pre>GetCourse                  Сервер (Vercel)              Lava Top            Vakas-tools
    │                           │                           │                    │
    │  клик "Оплатить"          │                           │                    │
    │───── редирект ──────────→│                           │                    │
    │  email, name, phone       │                           │                    │
    │                           │── создать инвойс ───────→│                    │
    │                           │←── ссылка на оплату ─────│                    │
    │                           │── данные клиента ────────────────────────────→│
    │←── редирект на оплату ───│                           │                    │
    │                           │                           │                    │
    │───── оплата ─────────────────────────────────────────→│                    │
    │                           │←── webhook ──────────────│                    │
    │                           │── подтверждение ─────────────────────────────→│</pre>
</div>

<div class="callout callout-warn">
  <div class="callout-title">Зачем нужен сервер-прослойка</div>
  <p>Webhooks в Lava Top срабатывают <strong style="color:#fff;">только для инвойсов, созданных через API</strong>, а не через виджет или страницу Lava. Если клиент оплатит через виджет — webhook не придёт, и Vakas ничего не узнает об оплате. Поэтому нужен промежуточный сервер, который создаёт инвойсы через API и управляет всей цепочкой.</p>
</div>

<!-- ==================== Step 1 ==================== -->
<div class="section">
  <div class="section-num">1</div>
  <h2>Подготовка Lava Top</h2>
  <div class="desc">Создание проекта, продуктов с офферами и получение API-ключа. Всё делается в панели <strong style="color:#fff;">app.lava.top</strong></div>

  <ol class="step-list">
    <li><strong>Создайте проект</strong> в Lava Top — это контейнер для ваших продуктов. Один проект = один API-ключ.</li>
    <li><strong>Создайте продукты</strong> — каждый тариф (например, «Зритель», «С куратором», «VIP») — это отдельный продукт.</li>
    <li><strong>Создайте офферы</strong> внутри каждого продукта. Оффер — это вариант цены (полная оплата, предоплата, рассрочка). У каждого оффера своя цена и свой <code>offerId</code>.</li>
    <li><strong>Скопируйте offerId</strong> каждого оффера — это UUID, он нужен для создания инвойса через API.</li>
    <li><strong>Скопируйте API-ключ</strong> проекта — он в разделе <em>Настройки → API</em>.</li>
    <li><strong>Проверьте видимость</strong> — если стоит галочка «Скрыть с моей страницы», продукт не будет доступен через API. Снимите её.</li>
  </ol>

  <div class="callout">
    <div class="callout-title">Где найти offerId</div>
    <p>Откройте продукт → нажмите на оффер для редактирования. В адресной строке браузера появится URL вида:</p>
  </div>

  <div class="browser-mock">
    <div class="browser-bar">
      <div class="browser-dots"><span></span><span></span><span></span></div>
      <div class="browser-url">app.lava.top/products/edit/offer/<span class="hl">d26e5914-0153-4394-8572-ce6f855b653e</span></div>
    </div>
    <div class="browser-body" style="text-align:center; padding: 24px;">
      <div style="color:rgba(255,255,255,0.2); font-size:12px; margin-bottom:8px;">↑ Это и есть offerId ↑</div>
      <div style="font-family:'JetBrains Mono',monospace; font-size:15px; color:#7cfc00; font-weight:600; letter-spacing:0.5px;">d26e5914-0153-4394-8572-ce6f855b653e</div>
      <div style="color:rgba(255,255,255,0.25); font-size:12px; margin-top:8px;">UUID формат: 8-4-4-4-12 символов (буквы a-f и цифры 0-9)</div>
    </div>
  </div>

  <div class="callout callout-info">
    <div class="callout-title">Пример</div>
    <p>Для тарифа с двумя вариантами оплаты у вас будет два offerId:<br>
    <code>d26e5914-...-ce6f855b653e</code> — полная оплата<br>
    <code>2287333a-...-0cc4f758f248</code> — предоплата<br>
    Каждый offerId уникален и не меняется после создания.</p>
  </div>

  <div class="code-label">Где найти API-ключ</div>
  <div class="browser-mock">
    <div class="browser-bar">
      <div class="browser-dots"><span></span><span></span><span></span></div>
      <div class="browser-url">app.lava.top / Настройки проекта / <span class="hl">API</span></div>
    </div>
    <div class="browser-body">
      <div class="mock-row">
        <span class="mock-label">API Key</span>
        <span class="mock-value hl">DMcvuUeo...HRm</span>
      </div>
      <div style="color:rgba(255,255,255,0.2); font-size:11px; margin-top:8px;">Длинная строка из букв и цифр. Храните в секрете!</div>
    </div>
  </div>

  <a href="https://docs.lava.top" target="_blank" class="ext-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    Документация Lava Top API
  </a>
</div>

<!-- ==================== Step 2 ==================== -->
<div class="section">
  <div class="section-num">2</div>
  <h2>Создание серверного проекта</h2>
  <div class="desc">Сервер на Vercel (бесплатный хостинг serverless-функций). Проект состоит из 2 основных файлов — обработчик оплаты и обработчик вебхуков.</div>

  <div class="code-label">Структура проекта</div>
  <div class="code-block"><code>my-lava-proxy/
├── api/
│   ├── pay.js        ← принимает клиента, создаёт инвойс, шлёт данные в Vakas
│   └── webhook.js    ← принимает webhook от Lava → пересылает в Vakas
├── vercel.json       ← маршруты и конфигурация Vercel
├── package.json      ← зависимости (обычно пустой)
└── .env.production   ← API-ключ Lava (НЕ коммитить в git!)</code></div>

  <div class="callout">
    <div class="callout-title">Как работает каждый файл</div>
    <p><strong style="color:#fff;">pay.js</strong> — основной файл. Принимает GET-запрос с параметрами (тариф, email, имя, телефон), создаёт инвойс в Lava через API, отправляет данные клиента в Vakas, и редиректит на страницу оплаты Lava.<br><br>
    <strong style="color:#fff;">webhook.js</strong> — принимает POST от Lava после успешной оплаты и пересылает данные в Vakas. Это подтверждение оплаты.<br><br>
    <strong style="color:#fff;">vercel.json</strong> — настройки маршрутизации. Перенаправляет <code>/webhook</code> на <code>/api/webhook</code>.</p>
  </div>

  <div class="prompt-block">
    <div class="label">Запрос для Claude Code</div>
    <p>Создай Vercel serverless проект для интеграции Lava Top с Vakas-tools.<br><br>
    Нужны:<br>
    — /api/pay — принимает query-параметры tariff, option, email, name, phone, создаёт инвойс через POST https://gate.lava.top/api/v3/invoice и редиректит на paymentUrl<br>
    — /api/webhook — принимает POST от Lava Top и пересылает JSON в Vakas webhook URL<br>
    — API-ключ Lava в env LAVA_API_KEY<br>
    — Тарифы: [перечислить свои тарифы с offerId]<br>
    — Vakas URL: [ваш URL вебхука]<br><br>
    Важно: при создании инвойса отправлять данные клиента (name, phone, email) в Vakas, т.к. webhook от Lava содержит только email.</p>
  </div>
</div>

<!-- ==================== Step 3 ==================== -->
<div class="section">
  <div class="section-num">3</div>
  <h2>Lava Top API — создание инвойса</h2>
  <div class="desc">Сервер отправляет POST-запрос к API Lava для создания инвойса. В ответ приходит ссылка на оплату.</div>

  <div class="code-label">Запрос</div>
  <div class="code-block"><code>POST https://gate.lava.top/api/v3/invoice

Headers:
  X-Api-Key: ваш_api_ключ
  Content-Type: application/json

Body:
{
  "email": "buyer@email.com",
  "offerId": "d26e5914-0153-4394-8572-ce6f855b653e",
  "currency": "RUB",
  "buyerLanguage": "RU"
}</code></div>

  <div class="code-label">Ответ (успех)</div>
  <div class="code-block"><code>{
  "id": "0f89fef1-7e29-424f-b1d9-f78648a9db53",
  "paymentUrl": "https://app.lava.top/payment/0f89fef1-...",
  "status": "created",
  "amount": 24900,
  "currency": "RUB",
  "email": "buyer@email.com"
}</code></div>

  <div style="color:rgba(255,255,255,0.35); font-size:14px; margin-top:16px; line-height:1.7;">
    <strong style="color:#fff;">paymentUrl</strong> — ссылка на страницу оплаты Lava. Сервер делает редирект 302 на этот URL.<br>
    <strong style="color:#fff;">id</strong> — уникальный ID инвойса. Сохраняем и отправляем в Vakas как <code>contractId</code>.<br>
    <strong style="color:#fff;">offerId</strong> — должен совпадать с реальным UUID оффера из Lava Top (см. Шаг 1).
  </div>

  <div class="callout callout-warn">
    <div class="callout-title">Частые ошибки API</div>
    <p><strong style="color:#fff;">400 Bad Request</strong> — невалидный email или несуществующий offerId. Проверьте формат email и что оффер не удалён в Lava.<br>
    <strong style="color:#fff;">401 Unauthorized</strong> — неверный API-ключ. Проверьте <code>X-Api-Key</code> в заголовке.<br>
    <strong style="color:#fff;">404 Not Found</strong> — продукт скрыт галочкой «Скрыть с моей страницы».</p>
  </div>
</div>

<!-- ==================== Step 4 ==================== -->
<div class="section">
  <div class="section-num">4</div>
  <h2>Webhook от Lava Top</h2>
  <div class="desc">После успешной оплаты Lava отправляет POST-запрос (webhook) на ваш сервер. Это подтверждение оплаты.</div>

  <ol class="step-list">
    <li>Откройте проект в Lava Top → <strong>Настройки → Webhooks</strong></li>
    <li>Добавьте URL вашего сервера: <code>https://ваш-домен.com/webhook</code></li>
    <li>Lava будет отправлять POST-запрос после каждой успешной оплаты API-инвойса</li>
  </ol>

  <div class="browser-mock">
    <div class="browser-bar">
      <div class="browser-dots"><span></span><span></span><span></span></div>
      <div class="browser-url">app.lava.top / Настройки проекта / <span class="hl">Webhooks</span></div>
    </div>
    <div class="browser-body">
      <div class="mock-row">
        <span class="mock-label">URL</span>
        <span class="mock-value" style="color:#3b82f6;">https://pay.вашдомен.com/webhook</span>
      </div>
      <div class="mock-row">
        <span class="mock-label">Метод</span>
        <span class="mock-value">POST</span>
      </div>
      <div class="mock-row">
        <span class="mock-label">Статус</span>
        <span class="mock-value hl">Активен</span>
      </div>
    </div>
  </div>

  <div class="code-label">Что приходит в webhook после оплаты</div>
  <div class="code-block"><code>{
  "eventType": "payment.success",
  "product": {
    "id": "0c8b2a4c-17b5-46df-8769-5b4e739c0b36",
    "title": "ТАРИФ: ЗРИТЕЛЬ | ПРЕДОПЛАТА"
  },
  "contractId": "0f89fef1-7e29-424f-b1d9-f78648a9db53",
  "buyer": {
    "email": "buyer@email.com"
  },
  "amount": 5000,
  "currency": "RUB",
  "status": "completed",
  "timestamp": "2026-02-23T16:02:22.744Z"
}</code></div>

  <div class="callout callout-warn">
    <div class="callout-title">Важное ограничение</div>
    <p>Webhook от Lava содержит <strong style="color:#fff;">только email</strong> покупателя — <strong style="color:#fff;">без имени и телефона</strong>. Поэтому имя и телефон нужно отправлять в Vakas раньше — в момент создания инвойса (из pay.js), когда эти данные ещё есть из GetCourse.</p>
  </div>
</div>

<!-- ==================== Step 5 ==================== -->
<div class="section">
  <div class="section-num">5</div>
  <h2>Настройка Vakas-tools</h2>
  <div class="desc">Vakas-tools принимает данные через входящий webhook и записывает их в базу. Важно правильно выбрать тип вебхука и сопоставить поля.</div>

  <ol class="step-list">
    <li>Откройте нужную <strong>базу</strong> в Vakas-tools</li>
    <li>Перейдите: <strong>Ссылка → Webhook → Входящий</strong> (именно «Входящий» — не «Исходящий» и не другой тип!)</li>
    <li>Скопируйте <strong>URL вебхука</strong> — он будет в формате <code>https://vakas-tools.ru/base/webhook/XXXXX/XXXXX/XXXX/</code></li>
    <li>Нажмите кнопку <strong>«Ожидать события»</strong> — Vakas начнёт слушать входящие запросы</li>
    <li>Отправьте тестовый запрос — перейдите по ссылке оплаты с тестовым email</li>
    <li>Vakas получит данные и <strong>покажет все поля</strong> — теперь их нужно сопоставить с полями вашей базы</li>
  </ol>

  <div class="browser-mock">
    <div class="browser-bar">
      <div class="browser-dots"><span></span><span></span><span></span></div>
      <div class="browser-url">vakas-tools.ru / База / <span class="hl">Webhook → Входящий</span></div>
    </div>
    <div class="browser-body">
      <div class="mock-sidebar">
        <div class="mock-nav">
          <div class="mock-nav-item">Ссылка</div>
          <div class="mock-nav-item active">→ Webhook</div>
          <div class="mock-nav-item" style="padding-left:24px; color:rgba(255,255,255,0.15);">Исходящий</div>
          <div class="mock-nav-item active" style="padding-left:24px;">Входящий ✓</div>
        </div>
        <div class="mock-content">
          <div class="mock-row">
            <span class="mock-label">URL</span>
            <span class="mock-value" style="color:#3b82f6; font-size:11px;">https://vakas-tools.ru/base/webhook/XXXXX/...</span>
          </div>
          <div class="mock-btn mock-btn-green">Ожидать события</div>
        </div>
      </div>
    </div>
  </div>

  <div class="callout callout-warn">
    <div class="callout-title">Если Vakas отвечает «not set_params»</div>
    <p>Это значит выбран неправильный тип вебхука. Убедитесь, что выбрано: <strong style="color:#fff;">Ссылка → Webhook → Входящий</strong>. Если выбрано «Исходящий» или другой тип — данные не будут приняты.</p>
  </div>

  <div class="code-label">Сопоставление полей</div>
  <p style="color:rgba(255,255,255,0.35); font-size:14px; margin-bottom:12px;">После получения тестового запроса Vakas покажет список полей. Привяжите каждое к полю вашей базы:</p>
  <div class="fields-card">
    <div class="field-row"><span class="field-key"><code>buyer.email</code></span><span class="field-arrow">→</span><span class="field-val">Email покупателя</span></div>
    <div class="field-row"><span class="field-key"><code>buyer.name</code></span><span class="field-arrow">→</span><span class="field-val">Имя (из GetCourse)</span></div>
    <div class="field-row"><span class="field-key"><code>buyer.phone</code></span><span class="field-arrow">→</span><span class="field-val">Телефон (из GetCourse)</span></div>
    <div class="field-row"><span class="field-key"><code>product.title</code></span><span class="field-arrow">→</span><span class="field-val">Название тарифа</span></div>
    <div class="field-row"><span class="field-key"><code>amount</code></span><span class="field-arrow">→</span><span class="field-val">Сумма оплаты</span></div>
    <div class="field-row"><span class="field-key"><code>contractId</code></span><span class="field-arrow">→</span><span class="field-val">ID платежа (для сверки)</span></div>
    <div class="field-row"><span class="field-key"><code>status</code></span><span class="field-arrow">→</span><span class="field-val">invoice_created / completed</span></div>
  </div>

  <div class="callout callout-info" style="margin-top:16px;">
    <div class="callout-title">Два уведомления</div>
    <p>Vakas получит <strong style="color:#fff;">два запроса</strong> для каждой оплаты:<br>
    <strong style="color:#fff;">1.</strong> При создании инвойса — <code>status: "invoice_created"</code> — здесь есть имя и телефон<br>
    <strong style="color:#fff;">2.</strong> После оплаты (webhook от Lava) — <code>status: "completed"</code> — подтверждение оплаты<br>
    Объединение по <code>buyer.email</code> или <code>contractId</code>.</p>
  </div>
</div>

<!-- ==================== Step 6 ==================== -->
<div class="section">
  <div class="section-num">6</div>
  <h2>Деплой на Vercel</h2>
  <div class="desc">Vercel — бесплатный хостинг для serverless-функций. Каждый файл в папке <code>api/</code> автоматически становится API-эндпоинтом.</div>

  <div class="code-label">Установка и деплой</div>
  <div class="code-block"><code># 1. Установить Vercel CLI (один раз)
npm i -g vercel

# 2. Залогиниться (один раз)
vercel login

# 3. Перейти в папку проекта
cd my-lava-proxy

# 4. Деплой в продакшен
vercel --prod</code></div>

  <p style="color:rgba(255,255,255,0.35); font-size:14px; margin:16px 0;">После деплоя Vercel выдаст URL вида <code>my-lava-proxy.vercel.app</code>. Этот URL можно использовать сразу, или привязать свой домен.</p>

  <div class="code-label">Добавление API-ключа</div>
  <div class="browser-mock">
    <div class="browser-bar">
      <div class="browser-dots"><span></span><span></span><span></span></div>
      <div class="browser-url">vercel.com / Project / Settings / <span class="hl">Environment Variables</span></div>
    </div>
    <div class="browser-body">
      <div class="mock-row">
        <span class="mock-label">Name</span>
        <span class="mock-value hl">LAVA_API_KEY</span>
      </div>
      <div class="mock-row">
        <span class="mock-label">Value</span>
        <span class="mock-value">DMcvuUeo...вашКлюч...HRm</span>
      </div>
      <div class="mock-row">
        <span class="mock-label">Environment</span>
        <span class="mock-value">Production, Preview, Development</span>
      </div>
      <div class="mock-btn mock-btn-blue" style="margin-top:8px;">Save</div>
    </div>
  </div>

  <div class="callout callout-warn">
    <div class="callout-title">Важно</div>
    <p>API-ключ хранится <strong style="color:#fff;">только в Vercel Environment Variables</strong> — не в коде, не в git. После добавления переменной нужно сделать повторный деплой: <code>vercel --prod</code></p>
  </div>

  <div class="code-label">Привязка своего домена (опционально)</div>
  <ol class="step-list">
    <li>В Vercel Dashboard → <strong>Settings → Domains</strong> → добавить домен (напр. <code>pay.yourdomain.com</code>)</li>
    <li>Vercel покажет <strong>CNAME-запись</strong> — уникальную для вашего проекта (вида <code>cname.vercel-dns.com</code>)</li>
    <li>В DNS-панели вашего домена создайте <strong>CNAME-запись</strong>: <code>pay</code> → значение из Vercel</li>
    <li>Дождитесь пропагации DNS (обычно 5-15 мин, до 24ч). Vercel автоматически выпустит SSL-сертификат</li>
  </ol>
</div>

<!-- ==================== Step 7 ==================== -->
<div class="section">
  <div class="section-num">7</div>
  <h2>Настройка GetCourse</h2>
  <div class="desc">В ГК для каждого тарифа создаётся предложение с кнопкой «Переадресация на ссылку». ГК автоматически подставляет данные покупателя в URL.</div>

  <div class="code-label">Формат ссылки</div>
  <div class="code-block"><code>https://pay.вашдомен.com/api/pay?tariff=КЛЮЧ&option=ВАРИАНТ&email={email}&name={name}&phone={phone}</code></div>

  <div style="color:rgba(255,255,255,0.35); font-size:14px; margin:20px 0; line-height:1.8;">
    <strong style="color:#fff;">tariff=КЛЮЧ</strong> — идентификатор тарифа из кода (<code>zritel</code>, <code>kurator</code>, <code>vip</code> и т.д.)<br>
    <strong style="color:#fff;">option=ВАРИАНТ</strong> — <code>full</code> (полная оплата) или <code>predoplata</code> (предоплата)<br>
    <strong style="color:#fff;">{email}</strong> — переменная ГК, подставляется email покупателя автоматически<br>
    <strong style="color:#fff;">{name}</strong> — переменная ГК, подставляется имя покупателя<br>
    <strong style="color:#fff;">{phone}</strong> — переменная ГК, подставляется телефон покупателя
  </div>

  <div class="callout callout-info">
    <div class="callout-title">Переменные GetCourse</div>
    <p><code>{email}</code>, <code>{name}</code>, <code>{phone}</code> — это специальные переменные ГК. Когда покупатель нажимает кнопку, ГК заменяет их на реальные данные. Например:<br><br>
    <code style="font-size:11px;">...?email={email}&name={name}</code> → <code style="font-size:11px;">...?email=ivan@mail.ru&name=Иван Петров</code><br><br>
    Если ГК не подставил переменную (осталось <code>{email}</code> буквально) — код сервера автоматически очищает скобки.</p>
  </div>

  <div class="code-label">Пример для каждого тарифа</div>
  <div class="code-block"><code># Тариф "Зритель" — полная оплата
https://pay.вашдомен.com/api/pay?tariff=zritel&option=full&email={email}&name={name}&phone={phone}

# Тариф "Зритель" — предоплата
https://pay.вашдомен.com/api/pay?tariff=zritel&option=predoplata&email={email}&name={name}&phone={phone}

# Тариф "С куратором" — полная оплата
https://pay.вашдомен.com/api/pay?tariff=kurator&option=full&email={email}&name={name}&phone={phone}

# ... и так далее для каждого тарифа + вариант</code></div>

  <ol class="step-list">
    <li>В ГК создайте <strong>предложение</strong> для каждого тарифа + варианта оплаты</li>
    <li>В настройках кнопки оплаты выберите <strong>«Переадресация на ссылку»</strong></li>
    <li>Вставьте ссылку с нужными <code>tariff</code> и <code>option</code></li>
    <li>Убедитесь, что переменные <code>{email}</code>, <code>{name}</code>, <code>{phone}</code> на месте</li>
  </ol>
</div>

<!-- ==================== Step 8 ==================== -->
<div class="section">
  <div class="section-num">8</div>
  <h2>Тестирование</h2>
  <div class="desc">Пошаговая проверка всей цепочки — от клика до записи в Vakas</div>

  <ol class="step-list">
    <li>Откройте ссылку в браузере, подставив <strong>реальный email</strong> вместо <code>{email}</code> и любые значения для name/phone. Должен произойти редирект на <code>app.lava.top</code> с формой оплаты</li>
    <li>В Vakas нажмите <strong>«Ожидать события»</strong> — это нужно делать перед каждым тестом</li>
    <li>Совершите <strong>тестовую оплату</strong>. Для минимальных затрат выбирайте предоплату (минимальная сумма)</li>
    <li>Проверьте <strong>Lava Top → Webhooks</strong> — должен быть статус отработки webhook</li>
    <li>Проверьте <strong>Vakas</strong> — данные должны появиться в базе (два события: invoice_created и completed)</li>
    <li>Проверьте <strong>Vercel → Logs</strong> — логи запросов с деталями (Invoice created, Vakas response)</li>
  </ol>

  <div class="callout">
    <div class="callout-title">Как тестировать без ГК</div>
    <p>Для тестирования не нужен GetCourse. Просто откройте ссылку в браузере, заменив переменные на реальные данные:<br><br>
    <code style="font-size:11px;">https://pay.вашдомен.com/api/pay?tariff=zritel&option=predoplata&email=test@mail.ru&name=Тест&phone=79001234567</code></p>
  </div>
</div>

<!-- ==================== Problems ==================== -->
<div class="section">
  <h2 style="margin-bottom:20px;">Частые проблемы</h2>
  <div class="table-wrap">
    <table>
      <tr><th>Проблема</th><th>Причина</th><th>Решение</th></tr>
      <tr><td>Webhook не приходит</td><td>Оплата была не через API-инвойс (а через виджет/страницу)</td><td>Оплата должна идти только через <code>/api/pay</code></td></tr>
      <tr><td>Продукт не виден через API</td><td>Стоит галочка «Скрыть с моей страницы»</td><td>Снять галочку в настройках продукта</td></tr>
      <tr><td>Email пришёл как {email}</td><td>ГК не подставил переменную</td><td>Проверить настройку переадресации в ГК. Код чистит скобки автоматически</td></tr>
      <tr><td>Vakas: not set_params</td><td>Выбран неправильный тип вебхука</td><td>В Vakas выбрать: Ссылка → Webhook → <strong>Входящий</strong></td></tr>
      <tr><td>Payment creation failed</td><td>Невалидный email или несуществующий offerId</td><td>Проверить формат email и что offerId актуален</td></tr>
      <tr><td>401 Unauthorized от Lava</td><td>Неверный или отсутствующий API-ключ</td><td>Проверить LAVA_API_KEY в Vercel Environment Variables</td></tr>
      <tr><td>Нет имени/телефона в Vakas</td><td>Webhook Lava не содержит эти поля</td><td>Данные шлются из pay.js при создании инвойса (status: invoice_created)</td></tr>
    </table>
  </div>
</div>

<!-- ==================== New tariff ==================== -->
<div class="section">
  <h2 style="margin-bottom:8px;">Добавление нового тарифа</h2>
  <div class="desc">Чтобы добавить новый тариф, нужно создать оффер в Lava и добавить его в код</div>

  <ol class="step-list">
    <li>Создайте <strong>продукт + офферы</strong> в Lava Top</li>
    <li>Скопируйте <strong>offerId</strong> каждого оффера (из URL при редактировании)</li>
    <li>Добавьте тариф в объект <code>TARIFFS</code> в файле <code>api/pay.js</code></li>
    <li>Задеплойте: <code>vercel --prod</code></li>
    <li>Создайте ссылку для ГК с новым ключом тарифа</li>
  </ol>

  <div class="code-label">Формат записи тарифа в pay.js</div>
  <div class="code-block"><code>// api/pay.js → объект TARIFFS
new_tariff: {
  name: "НАЗВАНИЕ ТАРИФА",
  options: {
    full: {
      offerId: "uuid-оффера-полной-оплаты",   // ← из URL в Lava
      label: "Полная оплата",
      price: "XX XXX ₽ / \$XXX / €XXX"
    },
    predoplata: {
      offerId: "uuid-оффера-предоплаты",      // ← из URL в Lava
      label: "Предоплата",
      price: "X XXX ₽ / \$XX / €XX"
    },
  },
},</code></div>

  <div class="code-label">Новая ссылка для ГК</div>
  <div class="code-block"><code>https://pay.вашдомен.com/api/pay?tariff=new_tariff&option=full&email={email}&name={name}&phone={phone}</code></div>
</div>

<!-- ==================== Vakas URL ==================== -->
<div class="section">
  <h2 style="margin-bottom:8px;">Смена Vakas webhook URL</h2>
  <div class="desc">Если нужно сменить URL вебхука Vakas</div>

  <p style="color:rgba(255,255,255,0.4); font-size:14px; line-height:1.7;">URL прописан в переменной <code>VAKAS_URL</code> в файлах:</p>
  <div class="code-block"><code>api/pay.js      ← отправка данных при создании инвойса
api/webhook.js  ← пересылка webhook от Lava</code></div>
  <p style="color:rgba(255,255,255,0.35); font-size:14px; margin-top:12px;">Замените URL в обоих файлах и задеплойте: <code>vercel --prod</code></p>
</div>

</div>

<div class="footer">dubica — integration docs</div>

</body>
</html>`;

export default function handler(req, res) {
  res.status(200).setHeader("Content-Type", "text/html").send(HTML);
}
