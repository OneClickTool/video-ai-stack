# 6 · Video cho app <span class="badge ok">chạy được</span>

Nằm ở **repo App** (`03.App-AI-SKILL`), skill **`app-video`** — không ở repo video này, nên hay bị quên.
Mẫu đang chạy: `apps/ACTIVE/sweepy/marketing/video/`.

## Bộ tối thiểu cho một app

| File | Dùng ở |
|---|---|
| `<slug>-demo-1920x1080.mp4` + poster | landing, YouTube dài, App Preview (nếu 15–30 s) |
| 3 × `<slug>-<việc>-1080x1920.mp4` + poster | landing, YouTube Shorts, TikTok, Reels — cùng file |

## Công cụ

| Khâu | Xài gì |
|---|---|
| Quay | app **thật**, dữ liệu mẫu — Mac: script bấm toạ độ · Web/Tauri: Playwright `recordVideo` · iOS: `simctl recordVideo` · Android: `adb screenrecord` |
| Dựng | **Remotion** — dự án riêng mỗi app, tạo bằng `scripts/new_video.py` từ `templates/video-remotion`; chỉ sửa `brand.ts` + `scenes.ts` |
| Short theo spec (4 bậc) | `make_short.py` + `specs/*.json`: 1 demo + nhạc · 2 giọng + phụ đề từng chữ · 3 cắt dán stock/meme · 4 bắt trend |
| Giọng | **edge-tts** `en-US-AndrewMultilingualNeural`, tốc độ +8%; mốc từng chữ lấy thẳng từ edge-tts (`WordBoundary`), **không cần Whisper** |
| Font | font hệ thống Apple: `-apple-system, SF Pro Display, Helvetica Neue` |
| Kiểm | `check_video.py` (kích thước, h264, faststart, độ dài, có poster) + Read poster |

!!! warning "Khác luồng 1"
    Cùng là "short TikTok có giọng AI" nhưng luồng này dùng edge-tts + Remotion riêng của từng app,
    còn luồng 1 dùng VieNeu/OmniVoice + Whisper + Remotion chung trong `lib/remotion`. Xem [Điểm đang lệch nhau](../tra-cuu/diem-lech.md).
