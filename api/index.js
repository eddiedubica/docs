const HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>docs · dubica.ru</title>
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Onest:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0a0a0a;--fg:#f5f5f2;--dim:rgba(245,245,242,0.45);--faint:rgba(245,245,242,0.25);
  --acid:#7cfc00;--hair:rgba(255,255,255,0.08);
  --font-body:'Onest',sans-serif;--font-mono:'JetBrains Mono',monospace;
}
body{
  font-family:var(--font-body);background:var(--bg);color:var(--fg);
  min-height:100vh;display:flex;flex-direction:column;
  -webkit-font-smoothing:antialiased;
}
/* topbar */
.topbar{
  position:sticky;top:0;z-index:30;
  display:flex;align-items:center;justify-content:space-between;
  height:52px;padding:0 24px;
  background:rgba(10,10,10,0.8);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--hair);
}
.topbar-left{display:flex;align-items:center;gap:14px}
.logo{height:20px;opacity:0.85}
.topbar-tag{
  font-family:var(--font-mono);font-size:10px;font-weight:500;
  letter-spacing:0.15em;text-transform:uppercase;color:var(--dim);
  padding:3px 8px;border:1px solid var(--hair);border-radius:4px;
}
.topbar-right{display:flex;align-items:center;gap:10px}
.topbar-right a{
  font-family:var(--font-mono);font-size:10px;
  letter-spacing:0.12em;text-transform:uppercase;
  color:var(--faint);text-decoration:none;transition:color 0.15s;
}
.topbar-right a:hover{color:var(--fg)}

/* main */
.main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 24px}
.heading{
  font-family:var(--font-mono);font-size:13px;font-weight:700;
  letter-spacing:0.2em;text-transform:uppercase;color:var(--dim);margin-bottom:32px;
  display:flex;align-items:center;gap:10px;
}
.heading .line{width:20px;height:1px;background:var(--acid)}

/* doc list */
.doc-list{display:flex;flex-direction:column;gap:6px;width:100%;max-width:440px}
.doc-item{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 18px;border:1px solid var(--hair);border-radius:6px;
  text-decoration:none;color:var(--fg);
  transition:border-color 0.15s,background 0.15s;
}
.doc-item:hover{border-color:rgba(124,252,0,0.25);background:rgba(124,252,0,0.03)}
.doc-meta{display:flex;flex-direction:column;gap:3px}
.doc-name{font-family:var(--font-mono);font-size:13px;font-weight:500;letter-spacing:0.02em}
.doc-desc{font-size:12px;color:var(--dim)}
.doc-arrow{
  font-family:var(--font-mono);font-size:14px;color:var(--faint);
  transition:color 0.15s,transform 0.15s;
}
.doc-item:hover .doc-arrow{color:var(--acid);transform:translateX(3px)}
.doc-tag{
  display:inline-block;font-family:var(--font-mono);font-size:9px;font-weight:500;
  letter-spacing:0.1em;text-transform:uppercase;
  padding:2px 6px;border-radius:3px;margin-top:2px;
}
.doc-tag.active{color:var(--acid);background:rgba(124,252,0,0.08);border:1px solid rgba(124,252,0,0.15)}
.doc-tag.config{color:var(--dim);background:rgba(255,255,255,0.04);border:1px solid var(--hair)}

/* footer */
.foot{
  padding:16px 24px;border-top:1px solid var(--hair);
  display:flex;align-items:center;justify-content:center;gap:6px;
  font-family:var(--font-mono);font-size:10px;color:var(--faint);
  letter-spacing:0.1em;
}
.foot .cursor{display:inline-block;width:6px;height:13px;background:var(--acid);animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}

@media(max-width:540px){
  .topbar{padding:0 14px}
  .main{padding:32px 14px}
  .doc-item{padding:12px 14px}
}
</style>
</head>
<body>
  <nav class="topbar">
    <div class="topbar-left">
      <img src="https://dubica.ru/assets/dubica-logo-white.png" alt="DUBICA" class="logo">
      <span class="topbar-tag">docs</span>
    </div>
    <div class="topbar-right">
      <a href="https://dubica.ru">workspace</a>
    </div>
  </nav>

  <main class="main">
    <div class="heading">
      <span class="line"></span>
      <span>Документация</span>
      <span class="line"></span>
    </div>

    <div class="doc-list">
      <a href="/api/gc-lava" class="doc-item">
        <div class="doc-meta">
          <span class="doc-name">GetCourse + Lava Top</span>
          <span class="doc-desc">Интеграция через Vakas-tools</span>
          <span class="doc-tag active">doc</span>
        </div>
        <span class="doc-arrow">&rarr;</span>
      </a>
      <a href="/vpn" class="doc-item">
        <div class="doc-meta">
          <span class="doc-name">VPN — Подключение</span>
          <span class="doc-desc">Инструкция по настройке клиентов</span>
          <span class="doc-tag active">doc</span>
        </div>
        <span class="doc-arrow">&rarr;</span>
      </a>
      <a href="/shadowrocket.conf" class="doc-item">
        <div class="doc-meta">
          <span class="doc-name">Shadowrocket Config</span>
          <span class="doc-desc">Конфигурация для Shadowrocket</span>
          <span class="doc-tag config">config</span>
        </div>
        <span class="doc-arrow">&rarr;</span>
      </a>
    </div>
  </main>

  <footer class="foot">
    <span>eddie@dubica:~/docs$</span>
    <span class="cursor"></span>
  </footer>
</body>
</html>`;

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html').send(HTML);
}
