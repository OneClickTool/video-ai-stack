# Điểm đang lệch nhau

Những chỗ làm "mù mờ" — đọc ra từ code ngày 2026-10-13. Đây là **ghi nhận**, chưa sửa; muốn sửa cái nào thì mở việc riêng.

| # | Lệch ở đâu | Hệ quả | Hướng xử lý gợi ý |
|---|---|---|---|
| 1 | **Short cho app** (luồng 6, edge-tts Andrew) và **short TikTok** (luồng 1, OmniVoice) cùng đăng TikTok nhưng **khác giọng** | kênh nghe như hai người khác nhau | short đăng kênh TikTok chính thì làm bằng `tt-short` để giữ một giọng |
| 2 | Remotion có **4 bản**: `lib/remotion` + khuôn `templates/video-remotion` + bản chép trong Sweepy + Markdown Viewer (cùng 4.0.532) | sửa hiệu ứng ở một chỗ, chỗ khác không có | ghi rõ: TikTok → `lib/remotion`; video app → bản của app |
| 3 | `anim-shot-python` trỏ font **đường dẫn macOS** (`/System/Library/Fonts/Supplemental/Impact.ttf`); `outro.py` trỏ **đường dẫn Windows** (`C:/Windows/Fonts/…`) | mỗi script chỉ chạy trên một loại máy | cho đường dẫn font vào một chỗ cấu hình theo máy |
| 4 | Video app dùng font hệ thống **Apple** (`-apple-system, SF Pro Display`) | render trên Windows ra font khác (không có SF Pro) | render trên Mac, hoặc nạp font web cố định |
| 5 | `anim-shot-godot` gọi **`caffeinate`** (lệnh của macOS) để màn hình thức | trên Windows cần cách khác | kiểm khi render Godot trên máy Windows |
| 6 | Có **3 engine TTS** (VieNeu, OmniVoice, edge-tts) | khó nhớ cái nào ở đâu | bảng ở [Giọng đọc](../stack/giong-tts.md) — vẫn hợp lý vì mỗi cái mạnh một việc |
| 7 | Skill vendor trùng việc: `remotion-motion-designer` ≈ `remotion-motion-graphics` | gọi nhầm | chỉ dùng `remotion-motion-graphics` |
| 8 | `anim-edit`, `anim-thumb`, `anim-publish` có thư mục nhưng **chưa có SKILL.md** | bước cuối hoạt hình đang làm tay | làm khi có tập hoạt hình đầu tiên đăng |
