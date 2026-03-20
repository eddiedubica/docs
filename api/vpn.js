const LOGO = "https://optim.tildacdn.com/tild6234-6433-4330-a439-643032666335/-/resize/162x/-/format/webp/Frame_2.png.webp";

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

/* GIF block */
.video-block {
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: #000;
}
.video-block img {
  width: 100%;
  display: block;
  max-height: 500px;
  object-fit: contain;
  background: #000;
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

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

.divider {
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 32px 0;
}

@media (max-width: 600px) {
  .container { padding: 20px 0 60px; }
  .header h1 { font-size: 26px; }
  .step { padding: 16px 16px 16px 52px; }
  .step-number { left: 12px; top: 16px; width: 28px; height: 28px; font-size: 13px; }
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

  <!-- Prerequisite -->
  <div class="info-box" style="margin-bottom:40px">
    <div class="label">Перед началом</div>
    <p>Тебе нужна <strong style="color:#afe67f">VLESS-ссылка</strong> для подключения. Она начинается с <code style="color:#afe67f;font-family:monospace;font-size:13px">vless://...</code> — её тебе пришлют отдельно.</p>
  </div>

  <div class="info-box" style="margin-bottom:40px">
    <div class="label">Телефон и компьютер</div>
    <p>Настройка одинаковая на iPhone, Android и Mac — интерфейс приложений идентичный.</p>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab active" onclick="switchTab('v2raytun')">
      <img src="/videos/v2raytun-icon.jpg" style="width:24px;height:24px;border-radius:6px"> V2RayTun
    </button>
    <button class="tab" onclick="switchTab('shadowrocket')">
      <img src="/videos/shadowrocket-icon.jpg" style="width:24px;height:24px;border-radius:6px"> Shadowrocket
    </button>
  </div>

  <!-- ==================== V2RayTun ==================== -->
  <div id="tab-v2raytun" class="tab-content active">

    <div class="platform-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      iOS / Android
    </div>

    <div class="section">
      <div class="section-title">Шаг 1 — Скачай приложение</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Установи V2RayTun</h3>
        <p>Бесплатное приложение. Скачай из магазина:</p>
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
      <div class="section-title">Шаг 2 — Скопируй ссылку</div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Скопируй VLESS-ссылку</h3>
        <p>Открой сообщение со ссылкой и <span class="highlight">скопируй её</span> (долгое нажатие → «Скопировать»). Ссылка начинается с <code style="color:#afe67f;font-family:monospace">vless://...</code></p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 3 — Добавь в приложение</div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Открой V2RayTun</h3>
        <p>Приложение <span class="highlight">автоматически предложит</span> добавить конфигурацию из буфера обмена. Нажми <span class="highlight">«Разрешить»</span> или <span class="highlight">«ОК»</span>.</p>
        <p class="sub">Если не предложило — нажми «+» в правом верхнем углу → «Импорт из буфера обмена»</p>
        <!-- VIDEO: v2ray-import -->
        <div class="video-block" id="video-v2ray-import">
          <img src="/videos/v2ray-import.gif" alt="Как добавить ссылку в V2RayTun">
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 4 — Подключись</div>

      <div class="step">
        <div class="step-number">4</div>
        <h3>Включи VPN</h3>
        <p>Выбери появившийся сервер в списке и нажми большую кнопку подключения. При первом запуске iOS/Android попросит разрешить VPN — нажми <span class="highlight">«Разрешить»</span>.</p>
        <!-- VIDEO: v2ray-connect -->
        <div class="video-block" id="video-v2ray-connect">
          <img src="/videos/v2ray-connect.gif" alt="Как подключиться в V2RayTun">
        </div>
      </div>

      <div class="info-box">
        <div class="label">Готово!</div>
        <p>VPN подключён. YouTube, Instagram, Discord и другие заблокированные сайты теперь работают.</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 5 — Настрой правила трафика</div>

      <div class="info-box">
        <div class="label">Зачем это нужно?</div>
        <p>Без этой настройки российские сайты (Яндекс, банки, Госуслуги) могут работать медленно или не работать, потому что весь трафик идёт через VPN. Включи правила — и российские сайты пойдут напрямую.</p>
      </div>

      <div class="step">
        <div class="step-number">5</div>
        <h3>Включи обход для РФ сайтов</h3>
        <p>Открой <span class="highlight">Настройки</span> → <span class="highlight">Правила трафика</span> и включи нужную настройку, как показано на гифке:</p>
        <div class="video-block">
          <img src="/videos/v2ray-traffic.gif" alt="Настройка правил трафика в V2RayTun">
        </div>
      </div>
    </div>

  </div>

  <!-- ==================== Shadowrocket ==================== -->
  <div id="tab-shadowrocket" class="tab-content">

    <div class="platform-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      iOS / macOS
    </div>

    <div class="warning-box">
      <div class="label">Важно</div>
      <p>Shadowrocket — платное приложение ($2.99). Доступно в российском App Store.</p>
    </div>

    <div class="section">
      <div class="section-title">Шаг 1 — Скачай приложение</div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Установи Shadowrocket</h3>
        <p>Скачай из App Store:</p>
        <div class="download-row">
          <a class="dl-btn" href="https://apps.apple.com/app/shadowrocket/id932747118" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 2 — Скопируй ссылку</div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Скопируй VLESS-ссылку</h3>
        <p>Открой сообщение со ссылкой и <span class="highlight">скопируй её</span> (долгое нажатие → «Скопировать»). Ссылка начинается с <code style="color:#afe67f;font-family:monospace">vless://...</code></p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 3 — Добавь в приложение</div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Открой Shadowrocket</h3>
        <p>Приложение <span class="highlight">автоматически предложит</span> добавить конфигурацию. Нажми <span class="highlight">«Добавить»</span>.</p>
        <p class="sub">Если не предложило — нажми «+» в правом верхнем углу → тип «VLESS» → вставь ссылку в поле URI</p>
        <!-- VIDEO: sr-import -->
        <div class="video-block">
          <img src="/videos/sr-import.gif" alt="Как добавить ссылку в Shadowrocket">
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Шаг 4 — Подключись</div>

      <div class="step">
        <div class="step-number">4</div>
        <h3>Включи VPN</h3>
        <p>Нажми переключатель напротив появившегося сервера. При первом запуске разреши VPN.</p>
      </div>

      <div class="info-box">
        <div class="label">Готово!</div>
        <p>VPN подключён. YouTube, Instagram, Discord и другие заблокированные сайты теперь работают.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="section">
      <div class="section-title">Настройка правил (по желанию)</div>

      <div class="info-box">
        <div class="label">Зачем правила?</div>
        <p>Без правил весь трафик идёт через VPN. С правилами — российские сервисы (Яндекс, банки, маркетплейсы) работают напрямую и быстрее, а заблокированные сайты идут через VPN.</p>
      </div>

      <div class="step">
        <div class="step-number">1</div>
        <h3>Открой «Конфигурация»</h3>
        <p>Нажми вкладку <span class="highlight">«Конфигурация»</span> внизу экрана</p>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Добавь конфигурацию по ссылке</h3>
        <p>Нажми <span class="highlight">«Добавить конфигурацию из URL»</span> и вставь эту ссылку:</p>
        <div style="margin-top:12px;display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 16px">
          <code id="conf-url" style="flex:1;font-size:13px;color:#afe67f;word-break:break-all;font-family:monospace">https://docs.dubica.ru/shadowrocket.conf</code>
          <button onclick="copyConf()" id="copy-conf-btn" style="background:rgba(175,230,127,0.1);border:1px solid rgba(175,230,127,0.2);border-radius:8px;padding:8px 14px;color:#afe67f;font-size:13px;font-weight:500;cursor:pointer;white-space:nowrap;font-family:inherit">Скопировать</button>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Активируй</h3>
        <p>Нажми на загруженную конфигурацию → <span class="highlight">«Использовать»</span>. На главном экране выбери режим <span class="highlight">«Конфигурация»</span>.</p>
        <div class="video-block">
          <img src="/videos/sr-config.gif" alt="Настройка конфига в Shadowrocket">
        </div>
      </div>

    </div>

  </div>

  <!-- ==================== Common ==================== -->
  <div class="divider"></div>

  <div class="section">
    <div class="section-title">Проверка</div>

    <div class="step">
      <div class="step-number">✓</div>
      <h3>Как понять что VPN работает?</h3>
      <p>Открой в браузере:</p>
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
          <td><a href="https://whoer.net" target="_blank" style="color:#afe67f;text-decoration:none">whoer.net</a> — IP не российский</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="footer">
    <p>dubica docs</p>
  </div>

</div>

<script>
function copyConf() {
  var url = document.getElementById('conf-url').textContent;
  navigator.clipboard.writeText(url).then(function() {
    var btn = document.getElementById('copy-conf-btn');
    btn.textContent = 'Скопировано!';
    setTimeout(function() { btn.textContent = 'Скопировать'; }, 2000);
  });
}
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.currentTarget.classList.add('active');
}
</script>
</body>
</html>`;

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html").send(HTML);
}
