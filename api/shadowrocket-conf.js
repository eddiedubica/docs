const CONF = `# Shadowrocket Config for Russia
# Updated: 2026-03-13

[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, captive.apple.com
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32
dns-server = 1.1.1.1, 8.8.8.8
fallback-dns-server = 8.8.4.4, 1.0.0.1
ipv6 = false
prefer-ipv6 = false
dns-direct-system = false
icmp-auto-reply = true
always-reject-url-rewrite = false
private-ip-answer = true
dns-direct-fallback-proxy = false
udp-policy-not-supported-behaviour = REJECT
use-local-host-item-for-proxy = false

[Rule]
# ======== ЗАБЛОКИРОВАННЫЕ В РФ ========

# Discord
DOMAIN-SUFFIX,discord.com,PROXY
DOMAIN-SUFFIX,discordapp.com,PROXY
DOMAIN-SUFFIX,discordapp.net,PROXY
DOMAIN-SUFFIX,discord.gg,PROXY
DOMAIN-SUFFIX,discord.media,PROXY
DOMAIN-SUFFIX,discordcdn.com,PROXY
DOMAIN-SUFFIX,dis.gd,PROXY
DOMAIN-KEYWORD,discord,PROXY

# Instagram / Facebook / Meta
DOMAIN-SUFFIX,instagram.com,PROXY
DOMAIN-SUFFIX,cdninstagram.com,PROXY
DOMAIN-SUFFIX,instagr.am,PROXY
DOMAIN-KEYWORD,instagram,PROXY
DOMAIN-KEYWORD,facebook,PROXY
DOMAIN-SUFFIX,fb.com,PROXY
DOMAIN-SUFFIX,fb.me,PROXY
DOMAIN-SUFFIX,fbcdn.net,PROXY
DOMAIN-SUFFIX,fbsbx.com,PROXY
DOMAIN-SUFFIX,facebook.net,PROXY
DOMAIN-SUFFIX,meta.com,PROXY
DOMAIN-SUFFIX,threads.net,PROXY

# Twitter / X
DOMAIN-KEYWORD,twitter,PROXY
DOMAIN-SUFFIX,twitter.com,PROXY
DOMAIN-SUFFIX,twimg.com,PROXY
DOMAIN-SUFFIX,x.com,PROXY
DOMAIN-SUFFIX,t.co,PROXY

# YouTube / Google
DOMAIN-KEYWORD,youtube,PROXY
DOMAIN-KEYWORD,google,PROXY
DOMAIN-KEYWORD,blogspot,PROXY
DOMAIN-SUFFIX,youtu.be,PROXY
DOMAIN-SUFFIX,yt.be,PROXY
DOMAIN-SUFFIX,ytimg.com,PROXY
DOMAIN-SUFFIX,abc.xyz,PROXY
DOMAIN-SUFFIX,goog,PROXY
DOMAIN-SUFFIX,gmail.com,PROXY
DOMAIN-SUFFIX,gstatic.com,PROXY
DOMAIN-SUFFIX,ggpht.com,PROXY
DOMAIN-SUFFIX,googleapis.com,PROXY
DOMAIN-SUFFIX,appspot.com,PROXY
DOMAIN-SUFFIX,firebaseio.com,PROXY
DOMAIN-SUFFIX,android.com,PROXY
DOMAIN-SUFFIX,chrome.com,PROXY
DOMAIN-SUFFIX,chromium.org,PROXY
DOMAIN-SUFFIX,gvt0.com,PROXY
DOMAIN-SUFFIX,gvt1.com,PROXY
DOMAIN-SUFFIX,gvt3.com,PROXY
DOMAIN-SUFFIX,recaptcha.net,PROXY
DOMAIN-SUFFIX,blogger.com,PROXY
DOMAIN-SUFFIX,deepmind.com,PROXY
DOMAIN-SUFFIX,tensorflow.org,PROXY
DOMAIN-SUFFIX,golang.org,PROXY
DOMAIN-SUFFIX,ampproject.org,PROXY

# Telegram
DOMAIN-SUFFIX,t.me,PROXY
DOMAIN-SUFFIX,telegram.me,PROXY
DOMAIN-SUFFIX,telegram.org,PROXY
DOMAIN-SUFFIX,telegra.ph,PROXY
DOMAIN-SUFFIX,telesco.pe,PROXY
DOMAIN-SUFFIX,tdesktop.com,PROXY
IP-CIDR,91.108.4.0/22,PROXY,no-resolve
IP-CIDR,91.108.8.0/22,PROXY,no-resolve
IP-CIDR,91.108.12.0/22,PROXY,no-resolve
IP-CIDR,91.108.16.0/22,PROXY,no-resolve
IP-CIDR,91.108.20.0/22,PROXY,no-resolve
IP-CIDR,91.108.56.0/22,PROXY,no-resolve
IP-CIDR,109.239.140.0/24,PROXY,no-resolve
IP-CIDR,149.154.160.0/20,PROXY,no-resolve
IP-CIDR,185.76.151.0/24,PROXY,no-resolve

# ======== AI СЕРВИСЫ ========

# ChatGPT / OpenAI
DOMAIN-SUFFIX,openai.com,PROXY
DOMAIN-SUFFIX,oaistatic.com,PROXY
DOMAIN-SUFFIX,oaiusercontent.com,PROXY
DOMAIN-KEYWORD,openaicom-api,PROXY
DOMAIN-SUFFIX,chatgpt.livekit.cloud,PROXY
DOMAIN-SUFFIX,host.livekit.cloud,PROXY
DOMAIN-SUFFIX,turn.livekit.cloud,PROXY

# Claude / Anthropic
DOMAIN-SUFFIX,anthropic.com,PROXY
DOMAIN-SUFFIX,claude.ai,PROXY

# Google Gemini / AI Studio
DOMAIN-SUFFIX,gemini.google.com,PROXY
DOMAIN-SUFFIX,aistudio.google.com,PROXY
DOMAIN-SUFFIX,generativelanguage.googleapis.com,PROXY

# Perplexity AI
DOMAIN-SUFFIX,perplexity.ai,PROXY

# Copilot
DOMAIN,copilot.microsoft.com,PROXY
DOMAIN,copilot.bing.com,PROXY

# ======== МУЗЫКА / ВИДЕО ========

# Spotify
DOMAIN-SUFFIX,spotify.com,PROXY
DOMAIN-SUFFIX,spotifycdn.com,PROXY
DOMAIN-SUFFIX,scdn.co,PROXY
DOMAIN-KEYWORD,spotify,PROXY

# TikTok
DOMAIN-SUFFIX,tiktok.com,PROXY
DOMAIN-SUFFIX,tiktokv.com,PROXY
DOMAIN-SUFFIX,tiktokcdn.com,PROXY
DOMAIN-SUFFIX,tiktokcdn-us.com,PROXY
DOMAIN-SUFFIX,musical.ly,PROXY
DOMAIN-SUFFIX,muscdn.com,PROXY
DOMAIN-SUFFIX,byteoversea.com,PROXY
DOMAIN-SUFFIX,ibytedtos.com,PROXY
DOMAIN-SUFFIX,ibyteimg.com,PROXY
DOMAIN-KEYWORD,tiktok,PROXY

# Netflix
DOMAIN-SUFFIX,fast.com,PROXY
DOMAIN-SUFFIX,nflxvideo.net,PROXY

# Twitch
DOMAIN-SUFFIX,twitch.tv,PROXY

# SoundCloud
DOMAIN-SUFFIX,soundcloud.com,PROXY
DOMAIN-SUFFIX,sndcdn.com,PROXY

# Vimeo
DOMAIN-SUFFIX,vimeo.com,PROXY

# ======== МЕССЕНДЖЕРЫ ========

# WhatsApp
DOMAIN-SUFFIX,whatsapp.net,PROXY
DOMAIN-SUFFIX,whatsapp.com,PROXY

# Signal
DOMAIN-SUFFIX,signal.org,PROXY
DOMAIN-SUFFIX,whispersystems.org,PROXY

# LINE
DOMAIN-SUFFIX,line.me,PROXY
DOMAIN-SUFFIX,line-apps.com,PROXY
DOMAIN-SUFFIX,line-cdn.net,PROXY
DOMAIN-SUFFIX,line-scdn.net,PROXY
DOMAIN-SUFFIX,line.naver.jp,PROXY

# Snapchat
DOMAIN-SUFFIX,snapchat.com,PROXY

# Zoom
DOMAIN-SUFFIX,zoom.us,PROXY

# ======== ПОЛЕЗНЫЕ СЕРВИСЫ ========

# Reddit
DOMAIN-SUFFIX,reddit.com,PROXY
DOMAIN-SUFFIX,redd.it,PROXY
DOMAIN-SUFFIX,redditmedia.com,PROXY
DOMAIN-SUFFIX,redditstatic.com,PROXY

# Notion
DOMAIN-SUFFIX,notion.so,PROXY
DOMAIN-SUFFIX,notion-static.com,PROXY
DOMAIN-SUFFIX,notion.com,PROXY

# Wikipedia
DOMAIN-SUFFIX,wikipedia.com,PROXY
DOMAIN-SUFFIX,wikipedia.org,PROXY
DOMAIN-SUFFIX,wikimedia.org,PROXY

# GitHub
DOMAIN-SUFFIX,github.com,PROXY
DOMAIN-SUFFIX,github.io,PROXY
DOMAIN-SUFFIX,githubusercontent.com,PROXY

# LinkedIn
DOMAIN-SUFFIX,linkedin.com,PROXY
DOMAIN-SUFFIX,licdn.com,PROXY

# Medium
DOMAIN-SUFFIX,medium.com,PROXY

# Patreon
DOMAIN-SUFFIX,patreon.com,PROXY
DOMAIN-SUFFIX,patreonusercontent.com,PROXY

# StackOverflow
DOMAIN-SUFFIX,stackoverflow.com,PROXY
DOMAIN-SUFFIX,sstatic.net,PROXY

# Bing
DOMAIN-SUFFIX,bing.com,PROXY

# DuckDuckGo
DOMAIN-SUFFIX,duckduckgo.com,PROXY

# TeamViewer
DOMAIN-SUFFIX,teamviewer.com,PROXY

# ======== GAMING ========

# Steam
DOMAIN-SUFFIX,steampowered.com,PROXY
DOMAIN-SUFFIX,steamcommunity.com,PROXY
DOMAIN-SUFFIX,steamstatic.com,PROXY
DOMAIN-SUFFIX,steamusercontent.com,PROXY
DOMAIN-SUFFIX,steam-chat.com,PROXY
DOMAIN-SUFFIX,steamcdn-a.akamaihd.net,DIRECT
DOMAIN-SUFFIX,steamcontent.com,DIRECT
DOMAIN-SUFFIX,steamgames.com,DIRECT

# Blizzard / Battle.net
DOMAIN-SUFFIX,battle.net,PROXY
DOMAIN-SUFFIX,blizzard.com,PROXY

# ======== ОБЛАКА / CDN ========

DOMAIN-SUFFIX,cloudfront.net,PROXY
DOMAIN-SUFFIX,cloudflare.com,PROXY
DOMAIN-SUFFIX,amazonaws.com,PROXY
DOMAIN-SUFFIX,amazon.com,PROXY
DOMAIN-SUFFIX,dropbox.com,PROXY
DOMAIN-SUFFIX,dropboxusercontent.com,PROXY
DOMAIN-SUFFIX,box.net,PROXY
DOMAIN-SUFFIX,docker.com,PROXY
DOMAIN-SUFFIX,imgur.com,PROXY
DOMAIN-SUFFIX,flickr.com,PROXY
DOMAIN-SUFFIX,staticflickr.com,PROXY
DOMAIN-SUFFIX,gravatar.com,PROXY
DOMAIN-SUFFIX,wordpress.com,PROXY
DOMAIN-SUFFIX,wp.com,PROXY
DOMAIN-SUFFIX,tumblr.com,PROXY
DOMAIN-SUFFIX,stripe.com,PROXY
DOMAIN-SUFFIX,auth0.com,PROXY

# Apple Intelligence / Siri
DOMAIN-SUFFIX,apple-relay.akamaized.net,PROXY
DOMAIN-SUFFIX,apple-relay.apple.com,PROXY
DOMAIN-SUFFIX,apple-relay.cloudflare.com,PROXY
DOMAIN-SUFFIX,apple-relay.fastly-edge.com,PROXY
DOMAIN-SUFFIX,apple-relay.mask.apple-dns.net,PROXY

# Pixiv
DOMAIN-KEYWORD,pixiv,PROXY

# ======== DNS LEAK TEST ========

DOMAIN-SUFFIX,dnsleaktest.com,PROXY
DOMAIN-SUFFIX,ipleak.net,PROXY
DOMAIN-SUFFIX,browserleaks.com,PROXY
DOMAIN-SUFFIX,whoer.net,PROXY

# ======== РОССИЙСКИЕ СЕРВИСЫ — НАПРЯМУЮ ========

DOMAIN-SUFFIX,ru,DIRECT
DOMAIN-SUFFIX,cn,DIRECT

# Яндекс
DOMAIN-SUFFIX,yandex.com,DIRECT
DOMAIN-SUFFIX,yandex.net,DIRECT
DOMAIN-SUFFIX,yastatic.net,DIRECT

# VK / Mail.ru
DOMAIN-SUFFIX,vk.com,DIRECT
DOMAIN-SUFFIX,vk.me,DIRECT
DOMAIN-SUFFIX,vkuseraudio.net,DIRECT
DOMAIN-SUFFIX,vkuservideo.net,DIRECT
DOMAIN-SUFFIX,mycdn.me,DIRECT
DOMAIN-SUFFIX,imgsmail.com,DIRECT

# Wildberries
DOMAIN-SUFFIX,wbstatic.net,DIRECT
DOMAIN-SUFFIX,wbbasket.com,DIRECT
DOMAIN-SUFFIX,wbcontent.net,DIRECT

# Ozon
DOMAIN-SUFFIX,ozonusercontent.com,DIRECT
DOMAIN-SUFFIX,ozon.st,DIRECT

# Тинькофф
DOMAIN-SUFFIX,tinkoff.com,DIRECT
DOMAIN-SUFFIX,tcsbank.com,DIRECT

# Сбер
DOMAIN-SUFFIX,sberbank.com,DIRECT
DOMAIN-SUFFIX,sbermarket.com,DIRECT

# Авито
DOMAIN-SUFFIX,avito.st,DIRECT

# Билайн / МТС / Мегафон
DOMAIN-SUFFIX,beeline.com,DIRECT
DOMAIN-SUFFIX,mts.com,DIRECT
DOMAIN-SUFFIX,megafon.com,DIRECT

# Другие
DOMAIN-SUFFIX,tencent.com,DIRECT
DOMAIN-SUFFIX,qq.com,DIRECT
DOMAIN-SUFFIX,wechat.com,DIRECT
DOMAIN-SUFFIX,weibo.com,DIRECT
DOMAIN-SUFFIX,bilibili.com,DIRECT
DOMAIN-SUFFIX,douban.com,DIRECT
DOMAIN-SUFFIX,sina.com,DIRECT
DOMAIN-SUFFIX,sohu.com,DIRECT
DOMAIN-SUFFIX,netease.com,DIRECT
DOMAIN-SUFFIX,xiaomi.com,DIRECT
DOMAIN-SUFFIX,xiaohongshu.com,DIRECT
DOMAIN-SUFFIX,xhscdn.com,DIRECT
DOMAIN-SUFFIX,meituan.com,DIRECT
DOMAIN-SUFFIX,meituan.net,DIRECT
DOMAIN-SUFFIX,dingtalk.com,DIRECT
DOMAIN-SUFFIX,toutiao.com,DIRECT
DOMAIN-SUFFIX,snssdk.com,DIRECT
DOMAIN-SUFFIX,iesdouyin.com,DIRECT

# Apple
DOMAIN-SUFFIX,apple.com,DIRECT
DOMAIN-SUFFIX,apple.com.cn,DIRECT
DOMAIN-SUFFIX,icloud.com,DIRECT
DOMAIN-SUFFIX,icloud-content.com,DIRECT
DOMAIN-SUFFIX,mzstatic.com,DIRECT
DOMAIN-SUFFIX,cdn-apple.com,DIRECT
DOMAIN-SUFFIX,appstore.com,DIRECT
DOMAIN-SUFFIX,me.com,DIRECT

# Windows Update
DOMAIN-SUFFIX,windowsupdate.com,DIRECT
DOMAIN-SUFFIX,windows.com,DIRECT

# PayPal / Booking
DOMAIN-SUFFIX,paypal.com,DIRECT
DOMAIN-SUFFIX,booking.com,DIRECT

# ======== LAN ========

IP-CIDR,192.168.0.0/16,DIRECT
IP-CIDR,10.0.0.0/8,DIRECT
IP-CIDR,172.16.0.0/12,DIRECT
IP-CIDR,127.0.0.0/8,DIRECT

# ======== GEO ========

GEOIP,CN,DIRECT
GEOIP,RU,DIRECT

# ======== ВСЁ ОСТАЛЬНОЕ — ЧЕРЕЗ VPN ========

FINAL,PROXY

[Host]
localhost = 127.0.0.1

[URL Rewrite]
^https?://(www.)?g.cn($|/.*) https://www.google.com$2 302
^https?://(www.)?google.cn($|/.*) https://www.google.com$2 302`;

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Disposition", "inline; filename=\"shadowrocket.conf\"");
  res.send(CONF);
}
