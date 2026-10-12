# Render engine

"Render" = biến kịch bản + giọng + hình thành file MP4. Repo có nhiều engine, mỗi cái cho một kiểu hình:

| Engine | Là gì | Luồng xài | Hợp với |
|---|---|---|---|
| **Remotion 4.0.532** | viết video bằng **React**; Chrome không giao diện chụp từng frame, ffmpeg ghép | TikTok `Short` · recap `Recap` · video app | chữ, đồ hoạ phẳng, cắt ghép clip, phụ đề |
| **Godot 4.7 Movie Maker** | game engine, xuất từng frame ra video | hoạt hình cutout (mặc định) | nhân vật có rig, keyframe chỉnh tay; nhanh (~8 s/shot) |
| **Python + Pillow** | tự vẽ từng frame bằng code | hoạt hình (dự phòng) | máy không có Godot / màn hình tắt; chậm (~51 s/shot) |
| **Manim** | thư viện hoạt hình toán | đồ hoạ phụ (chưa dùng) | biểu đồ, số chạy |
| **wiggle** | logo → Lottie/GIF/MP4 | đồ hoạ phụ (chưa dùng) | logo động 2–3 s |
| **GSAP** | thư viện animation cho web | landing page | không xuất video |
| **HyperFrames** | HTML + CSS + GSAP → MP4 (của HeyGen) | **chưa dùng** | xem dưới |

## Remotion hay HyperFrames?

**HyperFrames** là framework mã nguồn mở của HeyGen (Apache-2.0, ra mắt 2026): mỗi cảnh là một file **HTML**,
thời điểm ghi bằng thuộc tính `data-`, chuyển động bằng **GSAP**, render bằng Chrome không giao diện + FFmpeg —
cùng cách chạy với Remotion. Điểm khác chính: không bắt viết React, và được làm sẵn cho AI agent viết (kèm bộ skill riêng).

| | Remotion | HyperFrames |
|---|---|---|
| Viết bằng | React / TSX | HTML + CSS + GSAP |
| Repo đang có | `Short.tsx` 734 dòng, `Recap.tsx`, khuôn `video-remotion`, bản của Sweepy | chưa có gì |
| License | miễn phí cá nhân và công ty ≤ 3 người; đông hơn phải mua | Apache-2.0, không giới hạn |
| Độ chín | nhiều năm, tài liệu + cộng đồng lớn | mới ra 2026, thông tin chủ yếu từ blog bên thứ ba |

**Quyết định hiện tại: giữ Remotion.** Mọi luồng chạy được đều đã viết bằng Remotion; chuyển sang thì phải viết lại
`Short` + `Recap` mà không được thêm gì cho người xem. Đáng thử HyperFrames khi: muốn biến thẳng một trang HTML
(landing, slide) thành video, hoặc studio lớn hơn 3 người và phải trả tiền license Remotion.

Nguồn về HyperFrames:
[themenonlab.blog](https://themenonlab.blog/blog/heygen-hyperframes-video-as-code) ·
[yuv.ai](https://yuv.ai/blog/heygen-hyperframes-html-video) ·
[noqta.tn](https://www.noqta.tn/en/blog/heygen-hyperframes-html-to-mp4-ai-agent-video-2026) ·
[AI Engineer talk](https://ai.engineer/talks/html-is-all-agents-need) — đọc repo GitHub chính thức của HeyGen trước khi cài.

## Remotion trong repo nằm đâu

| Chỗ | Composition |
|---|---|
| `video-AI-Skills/lib/remotion/` (dùng chung) | `Short` (TikTok 9:16) · `Recap` (16:9) |
| `App-AI-SKILL/templates/video-remotion/` | `Demo` + `Short` cho app mới |
| `apps/ACTIVE/<app>/marketing/video/` | bản chép riêng mỗi app (Sweepy có `Spec`, `AppPreview`, `YouTube`) |

Xem / chỉnh tay: `cd lib/remotion && npm run studio`.
