# docs (docs.dubica.ru)

## Цель
Документационный портал с паролем. Инструкции по VPN-подключению и интеграции GetCourse + Lava Top.

## Текущий статус
- ✅ Защита паролем (cookie-based)
- ✅ Инструкция VPN: V2RayTun + Shadowrocket с GIF-видео
- ✅ Генератор конфига Shadowrocket (/shadowrocket.conf)
- ✅ Документация GetCourse + Lava Top + Vakas
- ✅ Автодеплой из GitHub

## Stack
- Vanilla JavaScript (ES6)
- HTML/CSS (inline в JS строках)
- Node.js serverless (Vercel)
- Zero dependencies (пустой package.json)

## Структура
```
docs/
├── api/
│   ├── index.js              # Авторизация + главное меню (182 строки)
│   ├── vpn.js                # VPN-инструкция: V2RayTun, Shadowrocket (817 строк)
│   ├── shadowrocket-conf.js  # Генератор конфига Shadowrocket (391 строка)
│   └── gc-lava.js            # Документация GetCourse + Lava Top (967 строк)
├── public/videos/             # GIF и видео туториалов (~43MB)
├── vercel.json               # Роуты
└── package.json              # Минимальный (name, version)
```

## Роуты (vercel.json)
- `/` → `/api/index` (логин + меню)
- `/vpn` → `/api/vpn` (VPN-инструкция)
- `/shadowrocket.conf` → `/api/shadowrocket-conf` (конфиг файл)
- `/videos/*` → `/public/videos/$1` (статика)
- `/api/gc-lava` — документация платёжной интеграции

## Авторизация
- Пароль: `Dubica10` (захардкожен в index.js!)
- Cookie: `docs_auth=1`, HttpOnly, SameSite=Strict, 1 год
- Один пароль на всех

## .env секреты
- Нет .env файла — всё захардкожено или в Vercel Dashboard
- LAVA_API_KEY — в документации gc-lava (ссылка на Vercel env)

## Как запускать
```bash
cd docs
vercel dev  # http://localhost:3000
```

## Деплой
- **Куда:** Vercel
- **URL:** docs.dubica.ru
- **Как:** git push origin main → автодеплой
- **GitHub:** https://github.com/eddiedubica/docs.git

## Shadowrocket конфиг
Правила маршрутизации для iOS:
- **Через VPN:** Discord, Instagram, YouTube, Telegram, ChatGPT, Claude, Spotify, Netflix и др.
- **Напрямую:** Yandex, VK, Wildberries, Ozon, Tinkoff, Sber, Avito, Apple
- **DNS:** 1.1.1.1, 8.8.8.8 (fallback: Yandex 77.88.8.8)

## Что НЕ трогать
- Правила Shadowrocket — тщательно подобраны, проверены
- Пароль — менять одновременно в коде и у пользователей

## Известные проблемы
- Пароль захардкожен в коде (не через env)
- Нет rate limiting на попытки входа
- public/videos ~43MB — большие GIF файлы

## История изменений
- 2026-03-20 — Добавлена парольная защита
- 2026-04 — Создан MEMORY.md
