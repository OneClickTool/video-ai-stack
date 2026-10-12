# Cài đặt máy

## Windows (GPU NVIDIA) — giọng TikTok + Whisper

Hai venv riêng ở `D:/ai-tts/` (ổ C đầy), cache model `HF_HOME=D:/ai-tts/hf`:

| venv | Cài | Dùng cho |
|---|---|---|
| `omni` | torch 2.8 cu128 · `omnivoice` | giọng EN + **Whisper** (`align.py`) + `music.py` |
| `vieneu` | torch 2.8 cu128 · `transformers==4.57.6` · `vieneu` | giọng VI |

Chạy kèm `PYTHONIOENCODING=utf-8` để in được tiếng Việt.

## Chung

| Thứ | Cài | Ghi chú |
|---|---|---|
| Remotion | `cd lib/remotion && npm install` | 4.0.532, React 19 |
| ffmpeg | có sẵn trên PATH | **không có libass** → phụ đề vẽ PNG rồi chồng lên |
| edge-tts | `pip install edge-tts` | cần mạng |
| yt-dlp, curl_cffi | `pip install yt-dlp "curl_cffi>=0.11,<0.14"` | học trend |
| Godot 4.7 | cho hoạt hình | màn hình phải thức khi render |
| MkDocs Material | `pip install mkdocs-material` | để xem trang này: `cd site && python -m mkdocs serve` |
