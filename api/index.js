const LOGO = "https://optim.tildacdn.com/tild6234-6433-4330-a439-643032666335/-/resize/162x/-/format/webp/Frame_2.png.webp";

const HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>404 — docs.dubica.ru</title>
<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #070b02;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(ellipse at 50% 30%, rgba(175,230,127,0.06) 0%, transparent 60%);
}
img { height: 40px; margin-bottom: 32px; opacity: 0.8; }
.code {
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -4px;
  background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(175,230,127,0.15) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 16px;
}
h1 {
  font-size: 20px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin-bottom: 8px;
}
p {
  font-size: 15px;
  color: rgba(255,255,255,0.3);
  margin-bottom: 32px;
}
a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid rgba(175,230,127,0.2);
  border-radius: 20px;
  color: #afe67f;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
a:hover {
  background: rgba(175,230,127,0.08);
  border-color: rgba(175,230,127,0.35);
}
a svg { width: 16px; height: 16px; }
</style>
</head>
<body>
<img src="${LOGO}" alt="dubica">
<div class="code">404</div>
<h1>Страница не найдена</h1>
<p>Возможно, вы ищете одну из документаций</p>
<a href="/api/gc-lava" style="margin-bottom:10px">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  GetCourse + Lava Top
</a>
<a href="/vpn">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  VPN — Подключение
</a>
</body>
</html>`;

export default function handler(req, res) {
  res.status(404).setHeader("Content-Type", "text/html").send(HTML);
}
