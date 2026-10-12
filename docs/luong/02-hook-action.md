# 2 · Hook meme → action app <span class="badge test">thử nghiệm</span>

Mở bằng câu cửa miệng đang hot 1–2 s ("À đây rồi, chính nó!", "Wait, what?") rồi cắt thẳng vào app làm điều lạ.
Skill **`tt-hook-action`**, dựa trên `tt-short` (cùng giọng, cùng render). Mẫu: `tt-04-capture-words-hook`.

```
0–1.5 s  HOOK    câu meme + chữ to + boom + rung
1.5–18 s ACTION  quay màn hình iPhone: chụp → sticker → dán
cuối     PAYOFF  kết quả + 1 CTA
```

## Một kịch bản ra 3 bản

| Bản | Hook lấy từ | Đăng ở |
|---|---|---|
| `full.mp4` | câu meme đọc bằng **giọng AI của mình** (VI hợp: "Adam bựa") | TikTok + Reels + Shorts |
| `stitch.mp4` | bạn bấm **Stitch** trên video hot, khúc ≤ 5 s | TikTok |
| `sound.mp4` | chữ hook câm, bạn chọn **sound trend** trong app | TikTok |

## Công cụ

Giống [luồng 1](01-tiktok-faceless.md): VieNeu / OmniVoice → Whisper → Remotion (`memehook`, `phone`, `cta`) → −14 LUFS.
Render 3 bản: `scripts/hookcut.py <batch> <id>`. Thư viện câu hook: `.claude/skills/tt-hook-action/hooks.json`.

## Đang kẹt

Chờ **quay màn hình iPhone thật** — ảnh chụp màn hình chỉ là bản nháp.
