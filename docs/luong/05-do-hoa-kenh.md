# 5 · Đồ hoạ phụ của kênh <span class="badge off">có skill, chưa có mẫu</span>

Những mảnh phụ quanh video chính. Toàn là skill **vendor** (chép từ bên ngoài), chưa chạy lần nào trong repo.

| Muốn | Skill | Là gì |
|---|---|---|
| Logo động 2–3 s | `wiggle` | logo PNG/SVG → Lottie / GIF / MP4 lặp |
| Intro/outro, chữ bay, tiêu đề series | `remotion-motion-graphics` | React → video (`remotion-motion-designer` trùng việc; `remotion-video-creation` là bộ luật tra cứu) |
| Biểu đồ, số chạy, sơ đồ | `manim` | thư viện hoạt hình toán bằng Python (của 3Blue1Brown) |
| Animation trên web (landing, trang kênh) | `gsap-*` | thư viện JS cho trang web — **không xuất video** |

Luật: clip vendor muốn vào tập thì xuất MP4 1080×1920 24 fps, qua `anim-check` như mọi clip khác. Không dùng vendor thay `anim-shot` cho cảnh có nhân vật.
