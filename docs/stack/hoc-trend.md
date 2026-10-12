# Học trend

| Script | Làm gì | Ra |
|---|---|---|
| `tikdown.py ref <url> --topic X` | tải video trend để **học format** | `docs/research/<ngày>-trend-X/<id>/`: `meta.json`, `hook.png` (3 s đầu), `sheet.png`, `ref.md` để điền |
| `tikdown.py own <url> <batch> --handle @kênh` | lấy video **của kênh mình** đăng lại Reels/Shorts | `<batch>/footage/own-<id>.mp4` (dừng nếu không phải kênh mình) |
| `tiktrend.py grab / user / index / cut` | thư viện trend theo ngách | `docs/research/2026-10-10-tiktok-trend-library/` + `INDEX.md` |
| `yt-market-*` | ngách, xu hướng (Google Trends), đối thủ, post-mortem YouTube | `docs/research/` |

Công cụ dưới: **yt-dlp**, **curl_cffi** (giả trình duyệt Chrome). TikTok chặn khách → thêm `--cookies chrome`.

!!! danger "Không cắt video người khác vào bản dựng"
    `ref.mp4` chỉ để xem. Muốn dùng chính video đó → bấm **Stitch / Duet** trong app TikTok.
    Cắt lại bị TikTok đánh "unoriginal", dễ dính strike.
