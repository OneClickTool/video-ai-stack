# Whisper

**Whisper** là model nhận dạng giọng nói của OpenAI (mã nguồn mở): đưa file tiếng vào, ra chữ. Ngược với TTS.

Repo dùng bản **`openai/whisper-large-v3-turbo`**, chạy trên máy (GPU, venv `D:/ai-tts/omni`, qua thư viện `transformers`). Không gọi API, không tốn tiền.

## Để làm gì — 2 việc

| Việc | Vì sao cần |
|---|---|
| **Bắt lỗi đọc** | VieNeu / OmniVoice đôi khi nuốt chữ, đọc sai số. Whisper nghe lại, so với kịch bản ra **WER** (tỷ lệ chữ sai). Câu lệch nhiều → in `<-- CHECK` |
| **Mốc giây từng từ** | Để phụ đề karaoke sáng đúng từ đang đọc. VieNeu / OmniVoice không tự trả mốc này |

```bash
D:/ai-tts/omni/Scripts/python.exe .claude/skills/tt-short/scripts/align.py shorts/<id>
```

## Đọc kết quả `<-- CHECK`

Xem dòng `heard` (Whisper nghe được gì):

- Số viết thành chữ, "phai" = file, "Mác" = Mac → **lỗi của Whisper**, bỏ qua.
- Thiếu hẳn chữ / đọc sai nghĩa → **lỗi giọng thật**: viết lại câu hoặc render lại `voice.py --only N`.

## Luồng nào không cần Whisper

edge-tts tự trả mốc chữ (`WordBoundary`) hoặc mốc câu (`.srt`) và hiếm khi nuốt chữ → hoạt hình, recap, video app **không** dùng Whisper.
