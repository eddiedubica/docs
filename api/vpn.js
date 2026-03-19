const LOGO = "https://optim.tildacdn.com/tild6234-6433-4330-a439-643032666335/-/resize/162x/-/format/webp/Frame_2.png.webp";

const VLESS_LINK = "vless://7550f067-20aa-4b85-999d-86a77d2d5dc3@80.208.228.186:47823?type=grpc&security=reality&pbk=k0NrwmnRXntD4rnEHiDSgdzmjeA_UUsJl8L8eq0m6Q4&sni=www.microsoft.com&sid=c2fb84f33550f8f3&serviceName=vl&mode=multi#VPN-Lithuania";
const SUB_URL = "http://80.208.228.186:48888/sub/d9dad923833cb70985d221a387e19652";
const SHADOWROCKET_CONF_URL = "https://raw.githubusercontent.com/eddiedubica/vpn-configs/main/shadowrocket.conf";

const HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>VPN — Инструкция по подключению</title>
<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #070b02;
  color: #fff;
  min-height: 100vh;
  padding: 24px;
  -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(ellipse at 50% 10%, rgba(175,230,127,0.06) 0%, transparent 60%);
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 0 80px;
}

.header {
  text-align: center;
  margin-bottom: 48px;
}
.header img { height: 36px; opacity: 0.8; margin-bottom: 24px; }
.header h1 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fff 0%, #afe67f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header p {
  font-size: 15px;
  color: rgba(255,255,255,0.4);
}

/* Tabs */
.tabs {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.04);
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 40px;
}
.tab {
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  background: none;
  color: rgba(255,255,255,0.4);
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.tab:hover { color: rgba(255,255,255,0.7); }
.tab.active {
  background: rgba(175,230,127,0.1);
  color: #afe67f;
  border: 1px solid rgba(175,230,127,0.15);
}
.tab-icon { font-size: 18px; }
.tab-content { display: none; }
.tab-content.active { display: block; }

/* Platform badges */
.platform-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(175,230,127,0.08);
  border: 1px solid rgba(175,230,127,0.12);
  border-radius: 20px;
  font-size: 12px;
  color: rgba(175,230,127,0.7);
  margin-bottom: 24px;
}

/* Sections */
.section {
  margin-bottom: 40px;
}
.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgba(255,255,255,0.9);
}

/* Steps */
.step {
  position: relative;
  padding: 20px 20px 20px 60px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  margin-bottom: 12px;
  transition: border-color 0.2s;
}
.step:hover { border-color: rgba(175,230,127,0.15); }
.step-number {
  position: absolute;
  left: 16px;
  top: 20px;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(175,230,127,0.1);
  border: 1px solid rgba(175,230,127,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #afe67f;
}
.step h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: rgba(255,255,255,0.9);
}
.step p {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
}
.step .sub {
  font-size: 13px;
  color: rgba(255,255,255,0.3);
  margin-top: 8px;
}
.step .highlight {
  color: #afe67f;
  font-weight: 500;
}

/* Config block */
.config-block {
  margin-top: 12px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.config-block code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: rgba(175,230,127,0.7);
  word-break: break-all;
  flex: 1;
  line-height: 1.5;
}
.copy-btn {
  padding: 8px 16px;
  background: rgba(175,230,127,0.1);
  border: 1px solid rgba(175,230,127,0.2);
  border-radius: 8px;
  color: #afe67f;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}
.copy-btn:hover {
  background: rgba(175,230,127,0.15);
  border-color: rgba(175,230,127,0.3);
}
.copy-btn.copied {
  background: rgba(175,230,127,0.2);
  color: #fff;
}

/* Settings table */
.settings {
  margin-top: 12px;
  width: 100%;
  border-collapse: collapse;
}
.settings tr { border-bottom: 1px solid rgba(255,255,255,0.04); }
.settings tr:last-child { border-bottom: none; }
.settings td {
  padding: 10px 0;
  font-size: 14px;
  vertical-align: top;
}
.settings td:first-child {
  color: rgba(255,255,255,0.4);
  width: 140px;
  padding-right: 16px;
}
.settings td:last-child {
  color: rgba(255,255,255,0.8);
  font-weight: 500;
}

/* Info box */
.info-box {
  padding: 16px 20px;
  background: rgba(175,230,127,0.04);
  border: 1px solid rgba(175,230,127,0.1);
  border-radius: 12px;
  margin-bottom: 12px;
}
.info-box p {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
}
.info-box .label {
  font-size: 12px;
  font-weight: 600;
  color: #afe67f;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.warning-box {
  padding: 16px 20px;
  background: rgba(255,180,50,0.04);
  border: 1px solid rgba(255,180,50,0.12);
  border-radius: 12px;
  margin-bottom: 12px;
}
.warning-box p {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
}
.warning-box .label {
  font-size: 12px;
  font-weight: 600;
  color: #ffb432;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

/* Download buttons */
.download-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.dl-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.dl-btn:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  color: #fff;
}
.dl-btn svg { width: 18px; height: 18px; }

/* Footer */
.footer {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.footer p {
  font-size: 13px;
  color: rgba(255,255,255,0.2);
}
.footer a {
  color: rgba(175,230,127,0.5);
  text-decoration: none;
}
.footer a:hover { color: #afe67f; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

/* Divider */
.divider {
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 32px 0;
}

/* App store badge */
.store-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.store-link:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

@media (max-width: 600px) {
  .container { padding: 20px 0 60px; }
  .header h1 { font-size: 26px; }
  .step { padding: 16px 16px 16px 52px; }
  .step-number { left: 12px; top: 16px; width: 28px; height: 28px; font-size: 13px; }
  .config-block { flex-direction: column; align-items: stretch; }
  .copy-btn { text-align: center; }
  .settings td:first-child { width: 110px; }
  .tabs { flex-direction: column; }
}
</style>
</head>
<body>
<div class="container">

  <div class="header">
    <img src="${LOGO}" alt="dubica">
    <h1>VPN — Подключение</h1>
    <p>Инструкция для V2RayTun и Shadowrocket</p>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab active" onclick="switchTab('v2raytun')">
      <span class="tab-icon">🛡</span> V2RayTun
    </button>
    <button class="tab" onclick="switchTab('shadowrocket')">
      <span class="tab-icon">🚀</span> Shadowrocket
    </button>
  </div>

  <!-- ==================== V2RayTun ==================== -->
  <div id="tab-v2raytun" class="tab-content active">

    <div class="platform-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      iOS / Android
    </div>

    <div class="section">
      <div class="section-title">Установка</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скачай V2RayTun</h3>
        <p>Установи приложение из магазина</p>
        <div class="download-row">
          <a class="dl-btn" href="https://apps.apple.com/app/v2raytun/id6476628951" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a class="dl-btn" href="https://play.google.com/store/apps/details?id=com.v2raytun.android" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 1 — По ссылке (быстро)</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скопируй VLESS ссылку</h3>
        <p>Нажми кнопку «Скопировать» — ссылка попадёт в буфер обмена</p>
        <div class="config-block">
          <code id="vless-link-v2ray">${VLESS_LINK}</code>
          <button class="copy-btn" onclick="copyText('vless-link-v2ray', this)">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Открой V2RayTun</h3>
        <p>Приложение <span class="highlight">автоматически предложит</span> добавить конфигурацию из буфера обмена. Нажми <span class="highlight">«Разрешить»</span> или <span class="highlight">«ОК»</span>.</p>
        <p class="sub">Если не предложило — нажми «+» в правом верхнем углу → «Импорт из буфера обмена»</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Подключись</h3>
        <p>Выбери сервер <span class="highlight">VPN-Lithuania</span> в списке и нажми большую кнопку подключения. При первом запуске iOS попросит разрешить VPN — нажми <span class="highlight">«Разрешить»</span>.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 2 — Через подписку (с автообновлением)</div>

      <div class="info-box">
        <div class="label">Зачем подписка?</div>
        <p>Если сервер обновится (новый IP, порт), подписка подтянет изменения автоматически. Не придётся заново вводить данные.</p>
      </div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скопируй ссылку подписки</h3>
        <p>Нажми «Скопировать»</p>
        <div class="config-block">
          <code id="sub-url-v2ray">${SUB_URL}</code>
          <button class="copy-btn" onclick="copyText('sub-url-v2ray', this)">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Добавь подписку в V2RayTun</h3>
        <p>Нажми <span class="highlight">«+»</span> → <span class="highlight">«Подписка»</span> (или «Subscription»). Вставь ссылку и нажми <span class="highlight">«Сохранить»</span>.</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Обнови и подключись</h3>
        <p>Нажми <span class="highlight">«Обновить подписку»</span>. Появится сервер — выбери его и подключись.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 3 — Вручную</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Добавь сервер вручную</h3>
        <p>Нажми <span class="highlight">«+»</span> → <span class="highlight">«Добавить вручную»</span> (или «Manual config»). Заполни параметры:</p>
        <table class="settings">
          <tr><td>Протокол</td><td>VLESS</td></tr>
          <tr><td>Адрес</td><td>80.208.228.186</td></tr>
          <tr><td>Порт</td><td>47823</td></tr>
          <tr><td>UUID</td><td style="font-family:monospace;font-size:13px">7550f067-20aa-4b85-999d-86a77d2d5dc3</td></tr>
          <tr><td>Шифрование</td><td>none</td></tr>
          <tr><td>Транспорт</td><td>gRPC</td></tr>
          <tr><td>Service Name</td><td>vl</td></tr>
          <tr><td>Mode</td><td>multi</td></tr>
          <tr><td>Безопасность</td><td>Reality</td></tr>
          <tr><td>SNI</td><td>www.microsoft.com</td></tr>
          <tr><td>Public Key</td><td style="font-family:monospace;font-size:12px">k0NrwmnRXntD4rnEHiDSgdzmjeA_UUsJl8L8eq0m6Q4</td></tr>
          <tr><td>Short ID</td><td style="font-family:monospace">c2fb84f33550f8f3</td></tr>
        </table>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Сохрани и подключись</h3>
        <p>Нажми <span class="highlight">«Сохранить»</span>, выбери сервер и подключись.</p>
      </div>
    </div>

  </div>

  <!-- ==================== Shadowrocket ==================== -->
  <div id="tab-shadowrocket" class="tab-content">

    <div class="platform-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      Только iOS
    </div>

    <div class="warning-box">
      <div class="label">Важно</div>
      <p>Shadowrocket — платное приложение ($2.99). Доступно только в App Store зарубежного Apple ID (в российском App Store его нет).</p>
    </div>

    <div class="section">
      <div class="section-title">Установка</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скачай Shadowrocket</h3>
        <p>Нужен зарубежный Apple ID. Переключи аккаунт в App Store и установи приложение.</p>
        <div class="download-row">
          <a class="dl-btn" href="https://apps.apple.com/app/shadowrocket/id932747118" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 1 — По ссылке (быстро)</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скопируй VLESS ссылку</h3>
        <p>Нажми «Скопировать»</p>
        <div class="config-block">
          <code id="vless-link-sr">${VLESS_LINK}</code>
          <button class="copy-btn" onclick="copyText('vless-link-sr', this)">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Открой Shadowrocket</h3>
        <p>Приложение <span class="highlight">автоматически предложит</span> добавить конфигурацию. Нажми <span class="highlight">«Добавить»</span>.</p>
        <p class="sub">Если не предложило — нажми «+» в правом верхнем углу → «Тип: VLESS» → вставь ссылку в поле URI</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Подключись</h3>
        <p>Нажми переключатель напротив сервера <span class="highlight">VPN-Lithuania</span>. При первом запуске разреши VPN.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 2 — Через подписку</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Скопируй ссылку подписки</h3>
        <div class="config-block">
          <code id="sub-url-sr">${SUB_URL}</code>
          <button class="copy-btn" onclick="copyText('sub-url-sr', this)">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Добавь подписку</h3>
        <p>Открой Shadowrocket → нажми <span class="highlight">«+»</span> → тип <span class="highlight">«Subscribe»</span>. Вставь ссылку в поле URL и нажми <span class="highlight">«Готово»</span>.</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Обнови и подключись</h3>
        <p>Потяни список серверов вниз для обновления подписки. Появится сервер — включи его.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Способ 3 — Вручную</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Добавь сервер</h3>
        <p>Нажми <span class="highlight">«+»</span> → тип <span class="highlight">«VLESS»</span>. Заполни:</p>
        <table class="settings">
          <tr><td>Адрес</td><td>80.208.228.186</td></tr>
          <tr><td>Порт</td><td>47823</td></tr>
          <tr><td>UUID</td><td style="font-family:monospace;font-size:13px">7550f067-20aa-4b85-999d-86a77d2d5dc3</td></tr>
          <tr><td>Шифрование</td><td>none</td></tr>
          <tr><td>Транспорт</td><td>gRPC</td></tr>
          <tr><td>Host</td><td>www.microsoft.com</td></tr>
          <tr><td>Service Name</td><td>vl</td></tr>
          <tr><td>TLS</td><td>reality</td></tr>
          <tr><td>SNI</td><td>www.microsoft.com</td></tr>
          <tr><td>Public Key</td><td style="font-family:monospace;font-size:12px">k0NrwmnRXntD4rnEHiDSgdzmjeA_UUsJl8L8eq0m6Q4</td></tr>
          <tr><td>Short ID</td><td style="font-family:monospace">c2fb84f33550f8f3</td></tr>
        </table>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Сохрани и подключись</h3>
        <p>Нажми <span class="highlight">«Готово»</span> и включи переключатель.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="section">
      <div class="section-title">Настройка правил маршрутизации</div>

      <div class="info-box">
        <div class="label">Зачем правила?</div>
        <p>Правила определяют какие сайты идут через VPN, а какие напрямую. Российские сервисы (Яндекс, банки, маркетплейсы) работают напрямую — без замедления. Заблокированные (YouTube, Instagram, Discord) идут через VPN.</p>
      </div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Перейди в настройки конфигурации</h3>
        <p>Shadowrocket → вкладка <span class="highlight">«Конфигурация»</span> (внизу экрана)</p>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Добавь URL конфигурации</h3>
        <p>Нажми <span class="highlight">«Добавить конфигурацию из URL»</span> и вставь ссылку:</p>
        <div class="config-block">
          <code id="sr-conf-url">${SHADOWROCKET_CONF_URL}</code>
          <button class="copy-btn" onclick="copyText('sr-conf-url', this)">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Активируй конфигурацию</h3>
        <p>Нажми на загруженную конфигурацию и выбери <span class="highlight">«Использовать»</span>. Теперь правила маршрутизации активны.</p>
      </div>

      <div class="warning-box">
        <div class="label">Режим маршрутизации</div>
        <p>Убедись что на главном экране Shadowrocket выбран режим <strong>«Конфигурация»</strong> (не «Глобальный» и не «Прямой»). Только в режиме «Конфигурация» работают правила.</p>
      </div>
    </div>

  </div>

  <!-- ==================== Common section ==================== -->
  <div class="divider"></div>

  <div class="section">
    <div class="section-title">Проверка подключения</div>

    <div class="step">
      <div class="step-number">✓</div>
      <h3>Как понять что VPN работает?</h3>
      <p>После подключения открой браузер и зайди на любой из этих сайтов:</p>
      <table class="settings">
        <tr>
          <td>YouTube</td>
          <td><a href="https://youtube.com" target="_blank" style="color:#afe67f;text-decoration:none">youtube.com</a> — должен открываться</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td><a href="https://instagram.com" target="_blank" style="color:#afe67f;text-decoration:none">instagram.com</a> — должен открываться</td>
        </tr>
        <tr>
          <td>IP-адрес</td>
          <td><a href="https://whoer.net" target="_blank" style="color:#afe67f;text-decoration:none">whoer.net</a> — IP должен быть не российским</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Частые вопросы</div>

    <div class="step">
      <div class="step-number">?</div>
      <h3>VPN подключается, но сайты не открываются</h3>
      <p>Попробуй отключить и подключить заново. Если не помогает — удали сервер и добавь заново по ссылке.</p>
    </div>

    <div class="step">
      <div class="step-number">?</div>
      <h3>Российские сайты (банки, Яндекс) работают медленно</h3>
      <p>В V2RayTun: проверь что включен режим <span class="highlight">«Proxy»</span>, а не «Global». В Shadowrocket: выбери режим <span class="highlight">«Конфигурация»</span>. Тогда российские сайты пойдут напрямую.</p>
    </div>

    <div class="step">
      <div class="step-number">?</div>
      <h3>Не могу установить Shadowrocket</h3>
      <p>Нужен зарубежный Apple ID. Приложение стоит $2.99 и недоступно в российском App Store. Как вариант — используй <span class="highlight">V2RayTun</span> (бесплатный).</p>
    </div>
  </div>

  <div class="footer">
    <p>dubica docs &middot; <a href="/">все инструкции</a></p>
  </div>

</div>

<script>
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.currentTarget.classList.add('active');
}

function copyText(elId, btn) {
  const text = document.getElementById(elId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Скопировано!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Скопировать';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = 'Скопировано!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Скопировать';
      btn.classList.remove('copied');
    }, 2000);
  });
}
</script>
</body>
</html>`;

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html").send(HTML);
}
