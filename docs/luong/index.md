# Các luồng

Mỗi luồng = một loại video, có skill riêng và công thức riêng. Chọn luồng theo **thứ bạn muốn đăng**:

| Muốn đăng | Luồng | Gõ với Claude | Ra file |
|---|---|---|---|
| TikTok/Reels mẹo, quảng bá app, trend | [1 · TikTok faceless](01-tiktok-faceless.md) | `tt-short` | `final.mp4` 1080×1920 + `cover.png` |
| Video câu meme rồi cắt vào app | [2 · Hook → action](02-hook-action.md) | `tt-hook-action` | `full.mp4` · `stitch.mp4` · `sound.mp4` |
| Tập hoạt hình nhân vật nói chuyện | [3 · Cutout](03-hoat-hinh-cutout.md) | `anim-idea` → … → `anim-shot` | tập 9:16, −14 LUFS |
| Tóm tắt truyện / kể sử dài | [4 · Recap](04-tom-tat-truyen.md) | `recap-source` → … → `anim-shot-remotion` | MP4 1920×1080 |
| Logo động, intro, biểu đồ | [5 · Đồ hoạ](05-do-hoa-kenh.md) | `wiggle` · `remotion-motion-graphics` · `manim` | clip ngắn |
| Demo app cho landing / store / YouTube | [6 · Video app](06-video-app.md) | `app-video` (repo App) | demo 16:9 + 3 shorts + poster |

## So nhanh

| | TikTok | Hook-action | Cutout | Recap | Video app |
|---|---|---|---|---|---|
| Khung | 9:16 | 9:16 | 9:16 | 16:9 | 16:9 + 9:16 |
| Giọng | VieNeu (VI) · OmniVoice (EN) | như TikTok | edge-tts EN | edge-tts `vi-VN-NamMinhNeural` | edge-tts `en-US-AndrewMultilingualNeural` |
| Whisper | ✅ kiểm lỗi + mốc từ | ✅ | — | — | — (mốc từ lấy từ edge-tts) |
| Render | Remotion `Short` | Remotion | Godot 4 / Pillow | Remotion `Recap` | Remotion (dự án riêng mỗi app) |
| Hình | quay màn hình thật | quay iPhone thật | Codex sinh mảnh nhân vật | Codex sinh ảnh cảnh | quay app thật |
| Repo | video | video | video | video | **App** |
