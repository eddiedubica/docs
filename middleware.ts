import { next } from '@vercel/edge';

export const config = {
  // Защищаем всё кроме внутренних путей Vercel и логотипов
  matcher: '/((?!_vercel|assets/dubica-logo).*)',
};

// === SSO авторизация через общую куку dubica_auth на .dubica.ru ===
// Кука ставится на dubica.ru/login, проверяется здесь через HMAC-SHA256.
// Если куки нет или она невалидна — редирект на dubica.ru/login?next=<текущий URL>.

const COOKIE_NAME = 'dubica_auth';
const TOKEN_VERSION = 'v1';
const MAX_AGE = 60 * 60 * 24 * 365; // 1 год

function b64urlDecode(s: string): Uint8Array {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function b64url(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function hmac(secret: string, data: string): Promise<string> {
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

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyToken(token: string | undefined, secret: string): Promise<boolean> {
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

function getCookie(cookies: string, name: string): string | undefined {
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : undefined;
}

export default async function middleware(req: Request): Promise<Response | undefined> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    return new Response('AUTH_SECRET is not configured', { status: 500 });
  }

  const cookies = req.headers.get('cookie') || '';
  const token = getCookie(cookies, COOKIE_NAME);
  const ok = await verifyToken(token, secret);

  if (ok) return next();

  // Не авторизован — редирект на хаб dubica.ru/login с возвратом сюда
  const currentUrl = req.url;
  const loginUrl = new URL('https://dubica.ru/login');
  loginUrl.searchParams.set('next', currentUrl);
  return new Response(null, {
    status: 302,
    headers: { Location: loginUrl.toString() },
  });
}
