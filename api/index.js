const LOGO = "https://optim.tildacdn.com/tild6234-6433-4330-a439-643032666335/-/resize/162x/-/format/webp/Frame_2.png.webp";
const PASSWORD = "Dubica10";

const LOGIN_HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>docs.dubica.ru</title>
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
h1 {
  font-size: 20px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin-bottom: 24px;
}
form { display: flex; flex-direction: column; align-items: center; gap: 12px; }
input {
  padding: 12px 20px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: #fff;
  font-size: 15px;
  font-family: inherit;
  width: 260px;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
}
input:focus { border-color: rgba(175,230,127,0.3); }
input::placeholder { color: rgba(255,255,255,0.2); }
button {
  padding: 12px 32px;
  border: 1px solid rgba(175,230,127,0.2);
  border-radius: 12px;
  background: rgba(175,230,127,0.08);
  color: #afe67f;
  font-size: 15px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover { background: rgba(175,230,127,0.15); border-color: rgba(175,230,127,0.35); }
.error { color: #ff6b6b; font-size: 13px; display: none; }
</style>
</head>
<body>
<img src="${LOGO}" alt="dubica">
<h1>Введите пароль</h1>
<form method="POST" action="/">
  <input type="password" name="password" placeholder="Пароль" autofocus>
  <button type="submit">Войти</button>
</form>
</body>
</html>`;

const LOGIN_ERROR_HTML = LOGIN_HTML.replace('display: none;', '').replace('</form>', '<p class="error">Неверный пароль</p></form>');

const MAIN_HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>docs.dubica.ru</title>
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
  margin-bottom: 10px;
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
<h1>Документации</h1>
<p>Выберите инструкцию</p>
<a href="/api/gc-lava">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  GetCourse + Lava Top
</a>
<a href="/vpn">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  VPN — Подключение
</a>
</body>
</html>`;

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach(c => {
    const [key, val] = c.trim().split('=');
    if (key) cookies[key] = val;
  });
  return cookies;
}

export default function handler(req, res) {
  const cookies = parseCookies(req.headers.cookie);

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const pwd = params.get('password');
      if (pwd === PASSWORD) {
        res.setHeader('Set-Cookie', `docs_auth=1; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`);
        res.setHeader('Location', '/');
        res.status(302).end();
      } else {
        res.setHeader('Content-Type', 'text/html').send(LOGIN_ERROR_HTML);
      }
    });
    return;
  }

  if (cookies.docs_auth === '1') {
    res.setHeader('Content-Type', 'text/html').send(MAIN_HTML);
  } else {
    res.setHeader('Content-Type', 'text/html').send(LOGIN_HTML);
  }
}
