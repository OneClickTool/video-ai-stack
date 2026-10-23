---
title: Showcase video Opus 5.5
description: Hàng trăm video viral làm bằng Claude Opus 5.5 kèm prompt — chọn một format, mình dựng kênh YouTube theo format đó.
hide:
  - toc
---

# Showcase: video làm bằng Claude Opus 5.5

> Mỗi video dưới đây là **code** (HTML, Canvas, SVG, Three.js…) do Claude Opus 5.5 viết ra từ **một prompt** — không quay,
> không dựng tay. Bạn thích format nào thì nhắn **mã video** (vd `OP-042`), mình dựng một kênh YouTube theo đúng kiểu hình đó,
> nội dung riêng của kênh bạn, ra video đều mỗi tuần.

<div class="sc-steps" markdown>

1. **Lướt và chọn** — rê chuột lên thẻ để xem clip, bấm vào để đọc prompt đầy đủ.
2. **Gửi mã** — vd `OP-042` (ghi ở góc mỗi thẻ). Chọn 2–3 mã cũng được.
3. **Mình dựng kênh** — chốt chủ đề, giọng đọc, lịch đăng; làm 3 video mẫu để bạn duyệt trước.

</div>

| Nhóm | Hợp với kênh kiểu |
|---|---|
| Motion graphic | Shorts “đã mắt”, typography, loop thư giãn |
| 3D & WebGL | Ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp |
| Explainer | Giải thích: khoa học, công thức, số liệu, how-it-works |
| Game & tương tác | Game mini, “AI tự làm game”, coding challenge |

<div id="sc-app" class="sc-app" data-src="videos.json">
  <div class="sc-bar">
    <input id="sc-q" type="search" placeholder="Tìm: rocket, recipe, solar system, @tác giả…" aria-label="Tìm video">
    <select id="sc-tag" aria-label="Lọc theo kỹ thuật"><option value="">Mọi kỹ thuật</option></select>
    <select id="sc-sort" aria-label="Sắp xếp">
      <option value="clip">Có clip trước</option>
      <option value="new">Mới nhất</option>
      <option value="code">Theo mã</option>
    </select>
  </div>
  <div id="sc-cats" class="sc-cats" role="group" aria-label="Lọc theo nhóm"></div>
  <p id="sc-count" class="sc-count">Đang tải danh sách video…</p>
  <div id="sc-grid" class="sc-grid"></div>
  <p class="sc-more-wrap"><button id="sc-more" class="md-button" hidden>Xem thêm</button></p>
</div>

<div class="sc-cta" markdown>
**Đã chọn được video?** Nhắn mã cho mình — kèm chủ đề kênh bạn nghĩ tới (nếu có).
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

??? note "Nguồn video & bản quyền"
    Danh sách, prompt và poster lấy từ [awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos)
    (MIT, của yihui-dev); clip phát trực tiếp từ [Skillry](https://skillry.dev/ai-videos/opus-5-5). Mỗi video thuộc về
    tác giả gốc — tên và link bài đăng ghi ở từng trang. Showcase này chỉ để **chọn format**: khi dựng kênh, mình viết
    prompt và nội dung mới cho kênh của bạn, **không đăng lại video của người khác**.
    Trang sinh bởi `scripts/sync_opus_showcase.py` — chạy lại để cập nhật video mới.
