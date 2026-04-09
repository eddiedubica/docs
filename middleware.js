// SSO авторизация через общую куку dubica_auth на .dubica.ru

const COOKIE_NAME = 'dubica_auth';
const TOKEN_VERSION = 'v1';
const MAX_AGE = 60 * 60 * 24 * 365;

function b64url(buf) {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function hmac(secret, data) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return b64url(sig);
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyToken(token, secret) {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [version, issuedAtStr, sig] = parts;
  if (version !== TOKEN_VERSION) return false;
  const issuedAt = Number(issuedAtStr);
  if (!Number.isFinite(issuedAt)) return false;
  const now = Math.floor(Date.now() / 1000);
  if (issuedAt > now + 60) return false;
  if (now - issuedAt > MAX_AGE) return false;
  const expected = await hmac(secret, `${version}.${issuedAt}`);
  return safeEqual(sig, expected);
}

function getCookie(cookies, name) {
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : undefined;
}

export default async function middleware(req) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    return new Response('AUTH_SECRET is not configured', { status: 500 });
  }

  const cookies = req.headers.get('cookie') || '';
  const token = getCookie(cookies, COOKIE_NAME);
  const ok = await verifyToken(token, secret);

  if (ok) {
    return fetch(req);
  }

  const loginUrl = new URL('https://dubica.ru/login');
  loginUrl.searchParams.set('next', req.url);
  return Response.redirect(loginUrl.toString(), 302);
}
