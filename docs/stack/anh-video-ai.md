# Ảnh & video AI

**Claude không tự vẽ ảnh.** Claude viết prompt + `jobs.json`, rồi **dừng**; bạn chạy **Codex** sinh ảnh vào `raw/`; báo "đã có ảnh trong raw" thì Claude nhặt về dùng tiếp.

| Cần | Ai sinh | Skill | Ghi chú |
|---|---|---|---|
| Mảnh nhân vật, bối cảnh, đạo cụ hoạt hình | **Codex** | `anim-assets` | Claude cắt mảnh, lắp `rig.json` |
| Ảnh cảnh recap | **Codex** | `recap-board` | còn PLACEHOLDER = bản nháp |
| Nền thumbnail | **Codex** | `anim-thumb` ⏳ | nhân vật lấy từ `--still --alpha` |
| Cảnh chêm video (toàn cảnh, vụ nổ, chuyển cảnh) | **Veo / Kling / Sora** chạy ngoài | `anim-shot-ai` | ≤ 15% thời lượng, không cảnh nhân vật nói; ghi `disclosure.json` |
| Hình app trong video | **quay màn hình thật** | `tt-short`, `app-video` | không dùng giao diện AI vẽ |
| B-roll nỗi đau (video app) | stock / AI | `app-video` | ghi nguồn `public/stock/SOURCES.md` |

`placeholder_parts.py` chỉ để thử máy render — clip còn chữ PLACEHOLDER chưa phải bản cuối.
