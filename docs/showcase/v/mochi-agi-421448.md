---
title: "OP-577 · Late Night Horror Station Animation"
description: "今回は ElevenLabs v4 のお試しで、終電のホームの短いホラー 声は v4 で2人の掛け合いを1回で生成 画は静止画9枚に奥行きつけて動かしてるだけ、動画生成AIはなし 最初の声がぜんぜん怖くなかったので → 台詞はそのまま、途中に [whispering] とか [laughs soft"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Late Night Horror Station Animation

<p class="sc-code-line"><span class="sc-code">OP-577</span> <span class="chip">3D &amp; WebGL</span></p>

<div class="sc-media-row"><figure class="sc-media"><a href="https://x.com/Mochi_AGI/status/2104757097850421448"><img src="https://media.skillry.dev/opus-5-5/_prompts/mochi-agi-421448/poster.11b273febb.webp" alt="Late Night Horror Station Animation" loading="lazy"></a><figcaption>Ảnh poster · bấm để xem video gốc trên X</figcaption></figure></div>

Tác giả: [@Mochi_AGI](https://x.com/Mochi_AGI) · [Video gốc trên X](https://x.com/Mochi_AGI/status/2104757097850421448)

## Prompt

```text
今回は ElevenLabs v4 のお試しで、終電のホームの短いホラー

声は v4 で2人の掛け合いを1回で生成
画は静止画9枚に奥行きつけて動かしてるだけ、動画生成AIはなし

最初の声がぜんぜん怖くなかったので
→ 台詞はそのまま、途中に [whispering] とか [laughs softly] とか英語で演技の指示
→ stability 0.5 → 0.3
→ 女の声は3人聞き比べて、息の多い低い声に
女は最後まで小声、顔は出さずに背中と唇だけ

字幕は明朝体、女は縦書きで男は横書き
女の字はささやく速さで1字ずつ、男の字は叫ぶほど震える仕様

使用ツール
・Claude Code の Opus 5.5　企画、演出、動きと字幕のコード、仕上がりのチェック
・ElevenLabs v4　2人の声の掛け合いと、環境音
・Codex の画像生成　静止画9枚
・Three.js　静止画に奥行きをつけてカメラを動かす
・しっぽり明朝 B1　字幕の書体
・Playwright　ブラウザで1コマずつ書き出し
・ffmpeg　動画の書き出し
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-577** — mình dựng kênh cùng kiểu hình
(*3d & webgl* — hợp kênh ambient / visual 3D, nền nhạc lo-fi, cảnh đẹp) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-576](king1818888-642123.md) · [Tất cả video](../index.md) · [OP-578 →](lalulu-create-091362.md)
