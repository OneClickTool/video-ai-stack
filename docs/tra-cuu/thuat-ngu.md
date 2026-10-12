# Thuật ngữ

TTS (text-to-speech)
:   Chữ → giọng đọc. VieNeu, OmniVoice, edge-tts.

Whisper / ASR
:   Giọng → chữ (nhận dạng giọng nói). Ngược với TTS. Repo dùng để kiểm giọng AI và lấy mốc từng từ.

WER (word error rate)
:   Tỷ lệ chữ Whisper nghe khác kịch bản. Cao = giọng AI đọc sai / nuốt chữ.

Voice design
:   Tạo giọng mới bằng mô tả chữ ("male, young adult, american accent") — OmniVoice.

Voice clone
:   Bắt chước một giọng từ đoạn mẫu. Repo chỉ clone **giọng do chính mình design** để giữ một giọng cả video.

Phụ đề karaoke
:   Phụ đề sáng lên đúng từ đang đọc — cần mốc giây từng từ.

LUFS
:   Đơn vị đo độ to theo tai người. Nền tảng video chuẩn khoảng −14 LUFS.

Composition (Remotion)
:   Một "khuôn video" viết bằng React: `Short`, `Recap`, `Demo`. Dữ liệu (props) đổi → video đổi.

`spring` / `interpolate`
:   Hai hàm Remotion tạo chuyển động: `spring` = nảy như lò xo, `interpolate` = đi đều từ giá trị A tới B.

Contact sheet
:   Một ảnh ghép nhiều khung hình của video — để nhìn nhanh cả clip, bắt lỗi trước khi báo xong.

Cutout / rig
:   Hoạt hình cắt giấy: nhân vật gồm nhiều mảnh (đầu, tay, miệng) gắn khớp với nhau (`rig.json`).

Lip-sync
:   Miệng nhân vật khớp lời. Repo làm bằng độ to giọng mỗi frame (0–3), không dùng AI.

Stitch / Duet
:   Tính năng TikTok: ghép video mình sau (Stitch) hoặc bên cạnh (Duet) video người khác — cách dùng trend hợp luật.

Faceless
:   Video không lộ mặt người làm.

Hook / bìa
:   Hook = 3 giây đầu giữ người xem. Bìa = khung hiện trên lưới profile để người ta bấm vào.

B-roll / cảnh chêm
:   Cảnh phụ chen vào giữa (toàn cảnh, chuyển cảnh), không phải phần chính.
