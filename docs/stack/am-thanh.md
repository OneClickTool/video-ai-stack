# Nhạc, SFX, âm lượng

## Nhạc nền — tự tổng hợp bằng code

`tt-short/scripts/music.py` dùng **numpy** tạo nhạc 48 kHz từ sóng âm, không lấy file của ai → **không dính bản quyền**.

| Style | Hợp với |
|---|---|
| `pop` | listicle mẹo |
| `chill` | hướng dẫn từng bước |
| `drive` | quảng bá app, trend |

SFX cũng tự tạo: `whoosh`, `pop`, `ding`. Hoạt hình thêm "boom" cho hook.

```bash
python .claude/skills/tt-short/scripts/music.py <batch> --sec 60
```

**Nhạc trend** (bài đang hot) **không** nhét vào file — gắn trong app TikTok lúc đăng. Video quảng cáo → chọn trong
Commercial Music Library.

## Âm lượng chuẩn: −14 LUFS

**LUFS** = đơn vị đo độ to "theo tai người". TikTok, YouTube, Reels đều chỉnh video về khoảng −14 LUFS — để file đúng mức sẵn
thì nền tảng không bóp tiếng.

`build.py` chạy ffmpeg `loudnorm` **2 lượt** (đo rồi chỉnh): `I=-14 · TP=-1.5 · LRA=11`, AAC 192 kbps 48 kHz.
Ghép đoạn trend: `chain.py … --duck 0.8` (giảm tiếng đoạn kia khi giọng mình nói).
