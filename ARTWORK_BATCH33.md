# 第三十三批 · 从神社廊下到人家门前

使用内置图像生成工具绘制两张图卡和两幅场景。以初版灵梦、魔理沙为暖纸、铅笔线条、淡彩和紧凑头身的参照。两张黑白原画已查看。配色、场景光线和空间构图由画册另作安排。

- 妖狐图卡对照第八话的蜷卧本体，保留尖耳、细鼻和单尾。场景另外核对第六页的伪装分镜，保留双耳、单尾和围巾。廊板上的帽子属于本次构图。[本体原画](https://thbwiki.cc/文件:假扮魔理沙的妖狐_本体（茨歌仙）.jpg) · [第八话原作分镜](https://dynasty-scans.com/chapters/wild_and_horned_hermit_ch08#6) · [章节对话](https://thbwiki.cc/东方茨歌仙/第八话)
- 和服座敷童子取原画右侧造型，保留深色齐刘海、单朵发饰、宽腰带和下摆大花。灰粉色是同人配色。图卡和门灯场景均调整了首稿偏长的身体。[原画](https://thbwiki.cc/文件:和服座敷童子_东方茨歌仙_第十四话.png) · [章节对话](https://thbwiki.cc/东方茨歌仙/第十四话)

参考图保存在忽略的调研目录。

## 最终文件及实际提示词

### shrine-kitsune

[PNG 原图](assets/shrine-kitsune.png) · [WebP 预览](assets/shrine-kitsune.webp)

初稿输入为 `assets/reimu.png`、`assets/marisa.png`、`output/cast33-references/fox.jpg`。

```text
Use case: illustration-story. Reference images 1 and 2 are the original Reimu and Marisa chibi style from this exact sketchbook. Closely match their warm ivory textured paper, delicate graphite and colored-pencil hatch strokes, translucent watercolor pigment, rosy soft faces, and for humanoid subjects 2.3–2.5 head heights total, oversized round head, tiny torso and extremely short legs. Prioritize reference 3 for the new identity rather than transferring existing outfits. No words, panels, signage, logos or glossy digital rendering. Natural anatomically legible limbs and shadows. One square animal portrait. The unnamed kitsune in Wild and Horned Hermit chapter 8, in its fox form. Faithfully capture the manga's tightly curled sleeping silhouette, slender pointed snout, tall triangular ears, eyes shut, paws tucked against the chest, and exactly one large long bushy tail curled in front. Pale warm ochre and cream fan watercolor chosen for the monochrome source, warm graphite eyes and contours, keep the full silhouette inside warm blank paper. Avoid anthropomorphism, multiple tails, markings or accessories.
```

### kimono-zashiki

[PNG 原图](assets/kimono-zashiki.png) · [WebP 预览](assets/kimono-zashiki.webp)

初稿输入为 `assets/reimu.png`、`assets/marisa.png`、`output/cast33-references/zashiki.png`。

```text
Use case: illustration-story. Reference images 1 and 2 are the original Reimu and Marisa chibi style from this exact sketchbook. Closely match their warm ivory textured paper, delicate graphite and colored-pencil hatch strokes, translucent watercolor pigment, rosy soft faces, and for humanoid subjects 2.3–2.5 head heights total, oversized round head, tiny torso and extremely short legs. Prioritize reference 3 for the new identity rather than transferring existing outfits. No words, panels, signage, logos or glossy digital rendering. Natural anatomically legible limbs and shadows. One square full-body character portrait. The kimono-wearing zashiki-warashi from Wild and Horned Hermit chapter 14. From the source's RIGHT figure only take dark blunt bob with straight fringe and a small side tuft, one large pale blossom at the side of her hair, crossed kimono collar, dark wide obi with thin light line and dark tied knot behind, long hanging sleeves, large pale flowers and dark leaves concentrated around the lower hem, white tabi and two little dark sandals. Choose soft dusty rose kimono as a creative color for monochrome reference, ivory blossoms, restrained charcoal obi and warm deep brown hair. Tiny upright body around 2.4 heads tall, relaxed and self-contained, full shoes visible. No wings, apron, hat, extra accessories or props.
```

最终修订提示词。使用首稿和初版参照图，妖狐场景另输入原作第六页，门灯场景另输入定稿座敷童子图卡。

```text
Use case: precise-object-edit. Image 1 is the target. Images 2 and 3 are the original sketchbook chibi references for body proportions and medium. Preserve identity, thin colored pencil contours, ivory paper grain and translucent watercolor. Compress the kimono body vertically by about 30% from chin to soles, keeping head the same scale or a little larger. The oversized head from hair crown to chin should be 41–43% of the figure height from crown to shoe sole. The whole figure should be 2.35–2.45 head heights. Bring obi, hands, large lower blossoms and both tiny sandals upwards accordingly. Tiny shoulders, very short body and feet close together. Center the smaller full figure inside a square ivory paper with balanced breathing room. Keep the crossed collar, dark wide obi, short blunt bob and ivory flower exactly recognizable. Keep anatomy simple and legible. No text.
```

### scene-kitsune-daybreak

[PNG 原图](assets/scene-kitsune-daybreak.png) · [WebP 预览](assets/scene-kitsune-daybreak.webp)

初稿输入为 `assets/reimu.png`、`assets/marisa.png`、`output/cast33-references/fox.jpg`。

```text
Use case: illustration-story. Reference images 1 and 2 are the original Reimu and Marisa chibi style from this exact sketchbook. Closely match their warm ivory textured paper, delicate graphite and colored-pencil hatch strokes, translucent watercolor pigment, rosy soft faces, and for humanoid subjects 2.3–2.5 head heights total, oversized round head, tiny torso and extremely short legs. Prioritize reference 3 for the new identity rather than transferring existing outfits. No words, panels, signage, logos or glossy digital rendering. Natural anatomically legible limbs and shadows. Landscape 3:2 storybook scene, shrine veranda at dawn after an autumn gathering, inspired by the scene in chapter 8 where Reimu notices the disguise. The only two figures are compact chibi Reimu (first input, red and white bow and dress) and the kitsune temporarily disguised as Marisa (second input's black witch hat with white bow, golden bob or short braid, white apron and black skirt). The disguised fox has ONLY two pointed russet fox ears clearly peeking from alongside the hat, and exactly one large russet-cream tail visible behind her, as the manga dialogue says. No second witch, no human Marisa and no animal fox alongside the disguised figure. Both characters short-legged 2.3–2.5 heads tall, shy embarrassed fox and mildly amused Reimu; eye contact. Wooden shrine veranda, a couple plain small cups left from a gathering, blue mist beyond red maples and soft golden morning light. Keep art airy and all body parts clear.
```

最终修订提示词。使用首稿和初版参照图，妖狐场景另输入原作第六页，门灯场景另输入定稿座敷童子图卡。

```text
Use case: precise-object-edit. Image 1 is the target autumn shrine composition; image 2 is the published manga panel of the disguise reveal, for character appearance only; images 3 and 4 are exact style and short proportions. Keep the target landscape, light, Reimu, and the poses and scale of both people. Change three localized details to follow the panel: (1) lift the black witch hat from the blonde fox's head and lay it on the wooden floor beside her on the right, far enough from her feet to remain separate and in front of the wood wall; (2) show her uncovered blonde hair with exactly TWO prominent furry orange-cream ears, one on each side of the crown, and retain her single cream-tipped fox tail; (3) add a modest pale cream neck scarf like the manga. Keep the braid and black-and-white apron clothing, and the same two figures with 2.3–2.5 head heights, very short legs. Keep graphite hatching and translucent watercolor, no comic text, no ghost shapes or extra ears.
```

### scene-zashiki-threshold

[PNG 原图](assets/scene-zashiki-threshold.png) · [WebP 预览](assets/scene-zashiki-threshold.webp)

初稿输入为 `assets/reimu.png`、`assets/marisa.png`、`output/cast33-references/zashiki.png`。

```text
Use case: illustration-story. Reference images 1 and 2 are the original Reimu and Marisa chibi style from this exact sketchbook. Closely match their warm ivory textured paper, delicate graphite and colored-pencil hatch strokes, translucent watercolor pigment, rosy soft faces, and for humanoid subjects 2.3–2.5 head heights total, oversized round head, tiny torso and extremely short legs. Prioritize reference 3 for the new identity rather than transferring existing outfits. No words, panels, signage, logos or glossy digital rendering. Natural anatomically legible limbs and shadows. Landscape 3:2 storybook scene. A late-year farewell at a wooden Human Village doorway, an imagined framing from Wild and Horned Hermit chapter 14. One fully visible compact 2.4-head tall kimono zashiki-warashi pauses beside a wooden threshold, looking back with a gentle ambiguous smile. Match the original dark blunt bob, large pale side blossom, long sleeves, dark obi and large pale flower pattern near the hem, white tabi and dark sandals. Dusty pink and warm ivory are the new color interpretation. Other than her there are no people. Foreground path of packed earth, sparse early snow at the sides, old eaves, warm light across the threshold and cool charcoal blue winter dusk. Visible wood grain and pencil snow texture. Keep the girl opaque, anatomically intact, framed with room around her.
```

最终修订提示词。使用首稿和初版参照图，妖狐场景另输入原作第六页，门灯场景另输入定稿座敷童子图卡。

```text
Use case: precise-object-edit. Image 1 is the scene to preserve. Image 2 is the final portrait of this exact girl and the exact body proportions to put into the scene. Image 3 is the matching style. Replace just the central standing girl in image 1 with the figure from image 2 standing beside the doorway in the scene, in the same soft perspective and warm lighting, slightly turned toward the doorway. Match Image 2's ratio exactly: large head roughly 43% of total standing height, small body, dusty pink floral kimono, dark obi, pale hair blossom, short dark bob, white tabi, tiny dark sandals. Keep the full standing figure about 700 pixels tall in a 1024-pixel-high landscape, soles at y=963. Head should be about 300 pixels tall from hair crown to chin, body about 400 pixels. Avoid an extremely oversized head that is as big as the whole body. Preserve Image 1's original snow path, house, dawn-dusk light, wood details, angle, and textured paper. No text.
```
