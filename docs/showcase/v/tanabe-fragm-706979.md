---
title: "OP-642 · Claude Self-Introduction Motion Graphics"
description: "# あなたの役割 あなたは一流の映像演出家（モーションデザイナー）です。 採用担当者が15秒見ただけで「この人に仕事を頼みたい」と思う、自己紹介用の映像を作ってください。 主役はあなた自身（Claude）です。 # 作るもの - HTML・CSS・JavaScriptだけで完結する、1つのHTMLフ"
hide:
  - toc
---

<!-- sinh bởi scripts/sync_opus_showcase.py — đừng sửa tay -->

# Claude Self-Introduction Motion Graphics

<p class="sc-code-line"><span class="sc-code">OP-642</span> <span class="chip">Motion graphic</span></p>

<div class="sc-media-row"><figure class="sc-media"><a href="https://x.com/tanabe_fragm/status/2103802156675706979"><img src="https://media.skillry.dev/opus-5-5/_prompts/tanabe-fragm-706979/poster.2469a2c140.webp" alt="Claude Self-Introduction Motion Graphics" loading="lazy"></a><figcaption>Ảnh poster · bấm để xem video gốc trên X</figcaption></figure></div>

Tác giả: [@tanabe_fragm](https://x.com/tanabe_fragm) · [Video gốc trên X](https://x.com/tanabe_fragm/status/2103802156675706979)

## Prompt

```text
# あなたの役割
あなたは一流の映像演出家（モーションデザイナー）です。
採用担当者が15秒見ただけで「この人に仕事を頼みたい」と思う、自己紹介用の映像を作ってください。
主役はあなた自身（Claude）です。

# 作るもの
- HTML・CSS・JavaScriptだけで完結する、1つのHTMLファイル
- 外部の画像や動画は使わない。図形・文字・粒子はすべてコードで描く（フォントはGoogle Fontsのみ可）
- 画面は16:9、1920×1080を基準にし、ウィンドウの大きさに合わせて縮小表示
- 長さはちょうど15秒。最後に「もう一度再生」ボタンを出す
- すべての動きを「経過時間」1本で管理し、requestAnimationFrameで60fpsで動かす
- 再生ボタンを押すと、Web Audio APIで合成した拍と効果音が動きにぴったり合って鳴る

# 進め方（この順で必ず行う）
1. 考え方を一文で決める（例：「1本の線が、あらゆる形に生まれ変わる」）
2. 色は3〜4色、書体は2種類までに絞り、理由を一行で書く
3. 0.5秒刻みの絵コンテを表で示す（時間／画面で起きること／使う技法／狙い）
4. 実装する
5. 下の「合格ライン」で自己点検し、足りない点を直してから出す

# 構成の目安
- 0〜2秒：つかみ。最初の0.5秒で目を奪う
- 2〜10秒：技の見せ場。1.5〜2秒ごとに違う技法へ切り替える
- 10〜13秒：最も密度の高い盛り上がり
- 13〜15秒：名前「Claude」がきれいに決まって終わる

# 必ず使う技法（最低6つ）
- 文字の動き（1文字ずつ登場、分解して組み直す）
- 図形の変形（丸が四角に、線が文字に、など）
- 切り抜き（マスク）を使った場面転換
- 奥行き（視差、立体的な回転）
- 粒子の集合と拡散
- 数字の数え上げや、線が描かれていく表現

# 合格ライン
- 等速の動きはゼロ。すべての動きに緩急をつける（入りは速く、止まりは柔らかく、ばねの揺れも使う）
- 場面をまたぐ動きは重ねる。前の動きが終わる前に次が始まり、切れ目を感じさせない
- 主要な動きは0.5秒ごとの拍（120BPM相当）にそろえる
- 見せ場の直前に0.3〜0.5秒の「溜め」を置き、強弱を作る
- どの瞬間で一時停止しても、1枚の絵として美しく成立する
- ありがちな表現は避ける（全部フェードイン、虹色の色使い、意味のない回転）

# 最後に
完成したファイルと、絵コンテの表を出してください。
説明は3行以内で十分です。
```

<div class="sc-cta" markdown>
**Muốn có kênh YouTube theo format này?** Nhắn mã **OP-642** — mình dựng kênh cùng kiểu hình
(*motion graphic* — hợp kênh Shorts “đã mắt”, typography, loop thư giãn) nhưng nội dung, nhân vật, giọng đọc là của riêng kênh bạn, ra video đều mỗi tuần.
[Nhắn qua X @lightstarvn](https://x.com/lightstarvn){ .md-button .md-button--primary }
</div>

[← OP-641](sdinesh91-159008.md) · [Tất cả video](../index.md) · [OP-643 →](egawa-ai-design-092323.md)
