# Font & hiệu ứng

## Font

| Font | Ở đâu | Vì sao |
|---|---|---|
| **Be Vietnam Pro** 600/800/900 | Remotion `Short` (TikTok) + `Recap` | đậm, đủ dấu tiếng Việt, tải qua `@remotion/google-fonts` |
| **Pangolin** 400 | `Recap` — chữ viết tay trên thẻ, tên chương | trông như ghi chú tay |
| **Impact** | `outro.py`, `anim-shot-python` (chữ trên ảnh) | chữ meme to, viền đen |
| **Segoe UI Black** | `outro.py` khi chữ có dấu | Impact không có dấu tiếng Việt |
| `-apple-system / SF Pro Display` | video app (`templates/video-remotion/src/brand.ts`) | giống giao diện Apple |

Trang này cũng dùng Be Vietnam Pro cho đồng bộ.

## Hiệu ứng { #hieu-ung }

Không dùng plugin hiệu ứng có sẵn — tất cả viết tay bằng `spring` / `interpolate` của Remotion trong `lib/remotion/src/Short.tsx`:

| Hiệu ứng | Cách làm | Dùng ở cảnh |
|---|---|---|
| **Punch-in** | scale 1.12 → 1 bằng `spring` (damping 14) | đầu mỗi cảnh |
| **Flash trắng** | lớp trắng 35% → 0 trong 5 frame | đầu cảnh, cú boom |
| **Rung màn** | dịch ngang theo `sin`, giảm dần trong 12–14 frame | `memehook`, `meme` |
| **Pop** | `spring` damping thấp (7–9) → nảy quá rồi về | emoji, icon CTA, nhãn |
| **Phím lún + glow** | phím dịch xuống 12 px, bóng màu accent sáng dần | `keys` |
| **Nảy lần lượt** | mỗi dòng trễ vài frame (`f - i * gap`) | `steps`, `files` |
| **Ken Burns** | zoom chậm 0 → 3–6% suốt cảnh, ease-out cubic khi vào | `clip` |
| **Zoom vào điểm** | `transformOrigin` = `focus` [x, y] rồi scale tới `zoom` | `clip`, `phone` |
| **Nền mờ** | chính clip, `blur(10px) brightness(.3)` phóng 1.2 | `cta`, outro |
| **Phụ đề karaoke** | gom 3–4 từ, từ đang đọc to hơn 11% + màu accent | mọi cảnh có giọng |
| **Chấm chạm** | vòng tròn tại toạ độ `taps` [x, y, frame] | `phone` |
| **Bìa tĩnh** | 14 frame (~0,5 s) đầu = ảnh bìa | frame 0 hiện trên lưới profile |

Recap (`Recap.tsx`): camera in/out/lia/focus (kẹp không lộ mép), thẻ chữ gõ máy, tên chương, bụi trôi, nền giấy.

Hoạt hình: pose + cảm xúc là 2 track cộng dồn, ease `inout · out · in · snap · linear`; nhịp hài: hold trước punchline, crash zoom, reaction ≥ 0,3 s.
