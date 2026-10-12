# 4 · Tóm tắt truyện 16:9 <span class="badge wip">bản nháp</span>

Video dài kể lại tiểu thuyết / sự kiện bằng giọng kể tiếng Việt, ảnh tĩnh có camera chuyển động, thẻ chữ, phụ đề.
Pipeline `story-recap`. Mẫu: `videos/ACTIVE/sd-01-so-do-ch1`.

## Công cụ

| Khâu | Skill | Xài gì |
|---|---|---|
| Nguồn + bản quyền | `recap-source` | kiểm tác phẩm được phép tóm tắt |
| Lời kể, chia cảnh | `recap-script` | tự viết từ nguyên tác, hook ≤ 15 s, mỗi chương kết câu treo |
| Giọng kể | `anim-voice` → `narrate.py` | **edge-tts `vi-VN-NamMinhNeural`**, xuất `.srt` mốc câu |
| Dựng cảnh theo giọng | `recap-board` | độ dài cảnh = độ dài giọng đo bằng ffprobe |
| Ảnh cảnh | Codex | Claude viết prompt |
| Render | `anim-shot-remotion` | **Remotion** `Recap` 1920×1080: camera zoom/lia/focus, nền giấy, thẻ chữ gõ máy, tên chương, phụ đề, bụi trôi |
| Font | | **Be Vietnam Pro** (chữ chính) + **Pangolin** (chữ viết tay trên thẻ) |

Đo trên máy: 25 still ≈ 80 s.

## Đang kẹt

Còn ảnh PLACEHOLDER → chưa đăng được; chờ Codex sinh ảnh thật.
