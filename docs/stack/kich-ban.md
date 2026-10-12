# Kịch bản & hook

Claude viết, máy kiểm, người duyệt. Mỗi luồng một "method":

| Luồng | Method | Máy kiểm gì |
|---|---|---|
| TikTok | **6 công thức hook** + mỗi câu một `kind` cảnh | `build.py` lint: lời chào → dừng; hook dài, thiếu "you/bạn" hoặc số, bìa trùng hook → cảnh báo |
| Hook-action | câu meme có sẵn trong `hooks.json` → action app thật | — |
| Hoạt hình | **beat trước, thoại sau**: hook (0–3 s) → setup → twist → punchline + reaction | `check_script`: câu > 22 chữ, pose/cảm xúc lạ, giọng lệch bible, quá giờ |
| Dàn ý tập dài | ngưỡng đo từ đối thủ: hook ≤ 15 s, mục tiêu trước 10%, ≥ 1.5 beat mới/phút, twist ở 55–85% | `anim-story` check |
| Recap | tự viết từ nguyên tác, giọng đời thường hơi giễu; hook ≤ 15 s; mỗi chương kết câu treo | — |
| Video app | hook ≤ 8 từ gọi đúng nỗi đau (lấy từ review thật); tiêu đề cảnh = động từ + kết quả | `check_video.py` |

## 6 công thức hook TikTok

| `hook_type` | Khuôn | Ví dụ đã dùng |
|---|---|---|
| `number` | con số đo được trên màn hình + hậu quả | "My Mac was hiding 868 megabytes of duplicates." |
| `contradict` | phủ nhận điều ai cũng nghĩ → cái tệ hơn | "Lười thì không. Có cái tệ hơn: quên sạch." |
| `callout` | gọi đúng người + đúng tình huống | "If your agent keeps going in circles, this is why." |
| `pov` | cảnh quen, kể ngôi "bạn" | "POV: you open a repo after three months." |
| `stop` | bảo dừng một thói quen + lý do gấp | "Stop deleting duplicates by hand." |
| `react` | duet/stitch: chỉ vào video kia + phán | "👈 This is exactly why it loops." |

## 7 luật hook

1. ≤ 12 từ (EN) / ≤ 16 tiếng (VI), đọc xong ≤ 3 s. Không chào, không "hôm nay", không "in this video".
2. Có "you / bạn / mình" hoặc một con số.
3. Mở một vòng chưa đóng: nói **cái gì** sai, giấu **cách sửa**.
4. Chữ trên màn hình (3–5 từ) ≠ lời đọc (câu đầy đủ).
5. Số liệu chỉ lấy từ cảnh có trong clip — không bịa.
6. Câu 2 trả một phần lời hứa trong ≤ 4 s.
7. CTA = hành động cụ thể + lý do, không chỉ "follow for more".

**Bìa ≠ hook:** bìa để *bấm vào* từ lưới profile (2 dòng ≤ 4 từ), hook để *giữ lại* khi video đã chạy.
Nguồn đầy đủ: `.claude/skills/tt-short/references/hooks.md`.
