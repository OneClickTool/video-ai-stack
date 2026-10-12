# 3 · Hoạt hình cutout game <span class="badge wip">đang làm</span>

Hoạt hình 2D kiểu "cắt giấy": nhân vật tự tạo (game Minecraft-like, không dùng logo/nhân vật của ai), thoại tiếng Anh, Short 9:16.
Mẫu: `videos/ACTIVE/ns-01-first-night`.

## Công cụ

| Khâu | Skill | Xài gì |
|---|---|---|
| Ý tưởng, 3 hook | `anim-idea` | Claude · bạn chọn (GATE 1) |
| Nhân vật, giọng, style | `anim-bible` | Claude đưa 2–3 giọng edge-tts để nghe thử (GATE 2) |
| Dàn ý mùa / tập | `anim-story` | ngưỡng đo từ đối thủ (`yt-market-story`) |
| Thoại | `anim-script` | beat trước, thoại sau; câu ≤ 22 chữ (GATE 3) |
| Giọng | `anim-voice` | **edge-tts** EN, mỗi nhân vật 1 giọng cố định; cắt khoảng lặng; tính **độ mở miệng 0–3 mỗi frame** |
| Animatic | `anim-board` | `shots.json` + `animatic.mp4` (GATE 4) |
| Ảnh nhân vật, bối cảnh | `anim-assets` | Claude viết `jobs.json` → **Codex sinh** → Claude cắt mảnh, lắp `rig.json` |
| Animation | `anim-shot` (cha) | **Godot 4.7 Movie Maker** (mặc định, ~8 s/shot) · **Pillow** (dự phòng, ~51 s/shot) · **Veo/Kling** cho cảnh chêm ≤ 15% |
| Kiểm | `anim-check` | contact sheet + đo LUFS |
| Hoàn thiện | `anim-edit` ⏳ | caption PNG (ffmpeg không có libass), SFX, −14 LUFS |

## Lip-sync làm thế nào

Không dùng AI lip-sync. `anim-voice` đo **độ to của giọng từng frame** → số 0–3 (ngậm → há to) → renderer đổi ảnh miệng tương ứng.
Đổi engine (ElevenLabs, Rhubarb viseme) được, miễn giữ hợp đồng `audio.json`.

## Đang kẹt

Render bản cuối `ns-01`; `anim-edit`, `anim-thumb`, `anim-publish` chưa có skill (đang làm tay).
