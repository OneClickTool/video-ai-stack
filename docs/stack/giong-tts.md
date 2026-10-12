# Giọng đọc (TTS)

**TTS** (text-to-speech) = đưa chữ vào, ra file giọng đọc. Repo đang xài **3 engine**, mỗi luồng một cái:

| Engine | Là gì | Luồng xài | Chạy ở đâu | Giá |
|---|---|---|---|---|
| **VieNeu-TTS v3 Turbo** | model TTS tiếng Việt mã nguồn mở, 48 kHz, 25 giọng có sẵn | TikTok tiếng Việt (1, 2) | máy mình, GPU NVIDIA, venv `D:/ai-tts/vieneu` | miễn phí |
| **OmniVoice** | model TTS tiếng Anh: *voice design* (mô tả giọng bằng chữ) + *clone* | TikTok tiếng Anh (1, 2) | máy mình, GPU, venv `D:/ai-tts/omni` | miễn phí |
| **edge-tts** | gọi giọng "Read aloud" của Microsoft Edge qua mạng | hoạt hình (3), recap (4), video app (6), giọng outro | mạng | miễn phí, cần internet |

## Giọng đang dùng

| Luồng | Giọng |
|---|---|
| TikTok VI | VieNeu: **Hải Đăng**, **Adam bựa** (hợp hook meme), **Trúc Ly** |
| TikTok EN (kênh US) | OmniVoice `--instruct "male, young adult, moderate pitch, american accent"` → lưu `voice.pt`, dùng lại cả kênh |
| Hoạt hình | edge-tts EN, mỗi nhân vật 1 giọng ghi trong bible (`cast.json`) |
| Recap | edge-tts `vi-VN-NamMinhNeural` |
| Video app | edge-tts `en-US-AndrewMultilingualNeural`, rate +8% |

## Vì sao không dùng một cái cho tất cả

- **VieNeu / OmniVoice** nghe tự nhiên hơn hẳn → dùng cho TikTok, nơi giọng quyết định người xem có ở lại không.
  Đổi lại: cần GPU, chạy chậm hơn, phải có **Whisper** kiểm vì model đôi khi nuốt chữ.
- **edge-tts** nhanh, ổn định, trả luôn mốc giây từng chữ → hợp video dài nhiều câu (recap) và nhiều nhân vật (hoạt hình).
  Giọng hơi "đọc bản tin".

## Chạy

=== "VieNeu (VI)"
    ```bash
    HF_HOME=D:/ai-tts/hf D:/ai-tts/vieneu/Scripts/python.exe .claude/skills/tt-short/scripts/voice.py shorts/<id> --voice "Hải Đăng"
    ```
=== "OmniVoice (EN)"
    ```bash
    HF_HOME=D:/ai-tts/hf D:/ai-tts/omni/Scripts/python.exe .claude/skills/tt-short/scripts/voice.py shorts/<id> --instruct "male, young adult, american accent"
    ```
=== "edge-tts (hoạt hình)"
    ```bash
    python3 .claude/skills/anim-voice/scripts/voice_lines.py videos/ACTIVE/<slug>
    ```

Sửa riêng vài câu: `--only 2,4` (giữ nguyên giọng).

## Luật

- Một video / một series **một giọng** — đổi giữa chừng người xem nhận ra ngay.
- Câu dài quá → **sửa kịch bản**, không tăng tốc giọng.
- Chỉ giọng preset hoặc voice design. **Không clone giọng người thật** khi chưa có phép, không nhại giọng creator.
- Giọng AI đọc quảng cáo app → bật nhãn AI / quảng cáo khi đăng.
