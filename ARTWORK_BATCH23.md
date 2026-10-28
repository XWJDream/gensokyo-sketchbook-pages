# 第二十三批：两条路线，三种轮廓

2026-10-28。使用 imagegen 内置模式生成三张独立人物图与三张场景图，全部最终 PNG 与 WebP 保存于 assets。每张实际输入首批灵梦和魔理沙，以约 2.5—3 头身、大头短身、纸纹与铅笔淡彩控制比例和媒材。人物另输入网上原作游戏图的人物观察放大图；场景另输入本批最终人物和原作背景。

## 网上资料与形象核对

- [灵异传原作资料与 Cast 索引](https://thbwiki.cc/东方灵异传)
- [原作附带 Manual](https://thbwiki.cc/附带文档:东方灵异传/Manual)
- [原作 Music Test](https://thbwiki.cc/东方灵异传/Music)
- [依莉斯](https://thbwiki.cc/依莉斯)、[萨丽爱尔](https://thbwiki.cc/萨丽爱尔)、[矜羯罗](https://thbwiki.cc/矜羯罗)词条内的原作游戏图与音乐室摘录。

| 人物 | 原作图像核对点 | 本册的整理与资料边界 |
|---|---|---|
| 依莉斯 | 金发、红色大发带、左脸星形、白星杖尖、白袖深色背心、红裙紫边、一对紫膜翼 | 未画成魔女帽；鞋袜、裙长与笑容属 Q 版整理；关卡顺序不确立与萨丽爱尔的上下级关系 |
| 萨丽爱尔 | 银白蓝紫长直发、三对白翼、蓝紫衣身与白袖、胸前浅色饰件、圆珠杖尖 | 选第一形态，未添光环；鞋履和表情属整理，不补写性别、身世与人物间的创生关系 |
| 矜羯罗 | 黑色高束单马尾、红缎带、单一尖角状轮廓、红衣白边浅灰宽袖、剑、红碗状物、雾状下身 | 保留漂浮雾尾，不添腿脚；角不确立种族，碗不确认内容；不补写性别或剑术师承 |

原作图与背景保存在忽略的 output/cast23-references，人物区域裁切和最近邻放大仅用于观察与输入参考，没有重画或改变原图内容，不作为本站自绘图发布。场景采用原作色调和意象，新增建筑、植被、光线和停留动作均属同人构图，不声称复原关卡布局。神殿、废墟等线索不强行加入现有地图坐标。

## 原作图像来源

- [依莉斯0](https://upload.thbwiki.cc/5/52/%E4%BE%9D%E8%8E%89%E4%B8%9D%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [矜羯罗0](https://upload.thbwiki.cc/a/af/%E7%9F%9C%E7%BE%AF%E7%BD%97%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [萨丽爱尔0](https://upload.thbwiki.cc/8/8a/%E8%90%A8%E4%B8%BD%E8%89%BE%E5%B0%94%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [维纳的废墟1（灵异传）.png](https://upload.thbwiki.cc/8/89/%E7%BB%B4%E7%BA%B3%E7%9A%84%E5%BA%9F%E5%A2%9F1%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%EF%BC%89.png)
- [堕落神殿1（灵异传）.png](https://upload.thbwiki.cc/c/c5/%E5%A0%95%E8%90%BD%E7%A5%9E%E6%AE%BF1%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%EF%BC%89.png)
- [静寂神殿（灵异传）1.png](https://upload.thbwiki.cc/1/16/%E9%9D%99%E5%AF%82%E7%A5%9E%E6%AE%BF%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%EF%BC%891.png)
- [静寂神殿（灵异传）2.png](https://upload.thbwiki.cc/a/a2/%E9%9D%99%E5%AF%82%E7%A5%9E%E6%AE%BF%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%EF%BC%892.png)

## 最终文件、实际输入与提示词

### elis

[PNG 原图](assets/elis.png) · [WebP 预览](assets/elis.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应原作游戏画面中的人物区域观察放大图。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for an existing sketchbook. Reference images 1 and 2 are the original project Reimu and Marisa: strictly match their graphite outlines, lively pencil hatching, colored-pencil and pale watercolor on warm ivory paper, cute expressive face and big round chibi head with VERY short torso/arms/legs, about 2.5-3 heads total. Reference image 3 is an enlarged ORIGINAL GAME sprite solely for identity, color and accessory checks, not for pixel rendering or background. Single full figure centered on square ivory paper with pencil ground shadow, generous margins, no background scene, no words, signatures, watermarks or logos. Preserve character-specific hair silhouette rather than copying Reimu/Marisa hair. Exactly two small hands and two arms. No glossy digital/3D rendering, long limbs or mature body proportions. Subject Elis (依莉斯) from Highly Responsive to Prayers. Long golden-blonde hair flowing loosely in separate broad locks, large plain RED ribbon bow on top of head, NOT a hat. Purple eyes; small red five-point star on HER LEFT cheek. WHITE long puff sleeves under dark navy vest, a large red collar bow, compact red skirt edged with narrow dark-purple trim; tiny white socks and dark-red Mary Jane shoes, two feet visible. Exactly one pair of PURPLE bat membrane wings, distinct from feather wings, arching behind her in a compact silhouette. Her left little hand holds a short thin wand topped with a WHITE five-point star; other hand gives a small playful open-palm greeting. Cheerful warm smile. No horns, no additional wing pairs, no black witch hat, no broom, no apron. Star wand and cheek mark both legible but restrained.
```

### sariel

[PNG 原图](assets/sariel.png) · [WebP 预览](assets/sariel.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应原作游戏画面中的人物区域观察放大图。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for an existing sketchbook. Reference images 1 and 2 are the original project Reimu and Marisa: strictly match their graphite outlines, lively pencil hatching, colored-pencil and pale watercolor on warm ivory paper, cute expressive face and big round chibi head with VERY short torso/arms/legs, about 2.5-3 heads total. Reference image 3 is an enlarged ORIGINAL GAME sprite solely for identity, color and accessory checks, not for pixel rendering or background. Single full figure centered on square ivory paper with pencil ground shadow, generous margins, no background scene, no words, signatures, watermarks or logos. Preserve character-specific hair silhouette rather than copying Reimu/Marisa hair. Exactly two small hands and two arms. No glossy digital/3D rendering, long limbs or mature body proportions. Subject Sariel (萨丽爱尔), first form from Highly Responsive to Prayers. Very long straight SILVERY WHITE hair with a pale lavender-blue tint, loosely parted fringe and long side locks, no ponytails/braids/bows/hat. Quiet blue eyes, gentle reserved smile. Deep blue-violet simple compact dress with long WHITE puff sleeves and a pale shield-shaped chest ornament carrying an ABSTRACT dark curling emblem, no readable lettering. Exactly SIX white feathered wings, three clear pairs layered upper/middle/lower, much softer and smaller than adult angel art, all wing tips contained in canvas. One small hand holds a thin ornate violet wand with a single small round pale orb at tip; other hand open. Dress hem compact; two short little legs and two small plain white closed shoes visible and parallel, no long bare legs. No halo, horns, crown, bible, extra arms or giant magic circle. Warm cute sketchbook interpretation of the first form, not the dark silhouette second form.
```

### konngara

[PNG 原图](assets/konngara.png) · [WebP 预览](assets/konngara.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应原作游戏画面中的人物区域观察放大图。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for an existing sketchbook. Reference images 1 and 2 are the original project Reimu and Marisa: strictly match their graphite outlines, lively pencil hatching, colored-pencil and pale watercolor on warm ivory paper, cute expressive face and big round chibi head with VERY short torso/arms/legs, about 2.5-3 heads total. Reference image 3 is an enlarged ORIGINAL GAME sprite solely for identity, color and accessory checks, not for pixel rendering or background. Single full figure centered on square ivory paper with pencil ground shadow, generous margins, no background scene, no words, signatures, watermarks or logos. Preserve character-specific hair silhouette rather than copying Reimu/Marisa hair. Exactly two small hands and two arms. No glossy digital/3D rendering, long limbs or mature body proportions. Subject Konngara (矜羯罗), Astral Knight from Highly Responsive to Prayers. BLACK hair in a dramatic high upswept single ponytail with sharp flowing locks, tied with a RED ribbon, a little white reflected shine on the dark locks; red eyes, pale face, a SINGLE slim red horn-like point projecting from forehead, no pair of oni horns. Red robe with white border over broad pale gray-white sleeves, compact short chibi upper body. IMPORTANT: match original ghostly lower silhouette: robe tapers into a soft blue-gray wispy swirl underneath, NO legs, NO feet and NO shoes, not amputated; floating spirit. Keep entire head-to-mist silhouette about 2.5 heads tall, big round cute face, not mature/tall warrior. Her left small hand holds a slim silver sword upright beside her body, blade clear of face, black hilt. Right little hand holds one shallow RED bowl near chest as in original sprite, no liquid or alcohol label. Calm slightly curious expression. No wings, no armor, no hat, no gore or bleeding, no lettering in swirling mist.
```

### scene-elis-ruins

[PNG 原图](assets/scene-elis-ruins.png) · [WebP 预览](assets/scene-elis-ruins.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应本批最终人物 PNG；依莉斯场景输入维纳的废墟1，萨丽爱尔场景输入堕落神殿1，矜羯罗场景依次输入静寂神殿2、静寂神殿1的原作背景。

```text
Use case: illustration-story. ONE wide 16:9 original Touhou sketchbook scene. Inputs 1 and 2 are the original first Reimu and Marisa drawings: closely preserve graphite pencil outlines/hatching, colored-pencil and pale watercolor on warm ivory paper, round large chibi heads, short little torso/limbs, tiny hands, about 2.5-3 heads tall. Input 3 is the FINAL checked character portrait: preserve individual hair, outfit, face and accessories. Further inputs are ORIGINAL GAME background art for mood/colors/basic motifs only, not to trace the layout or reuse pixels. Exactly ONE character, no extra people, duplicate body parts or background faces. Rich layered hand-drawn landscape detail, feathered ivory-paper vignette edges. No lettering, readable glyphs, signboards, watermark, logos, modern UI or realistic long-limbed adult proportions. This calm daily moment and architecture are imaginative fan art rather than a claimed reconstruction of the original game. Elis in the violet/brown twilight hills of an imaginative ancient ruin: golden hair worn loose in broad locks, RED head ribbon (NO hat), purple eyes, small red star on HER LEFT cheek, white puff sleeves, navy vest, red collar bow and short red skirt with purple edging, white socks and small red Mary Janes. Exactly two grounded visible feet. Exactly ONE pair purple bat-membrane wings (NO feathers), compact and curved behind her. Left hand holds short white-star-tipped wand, right hand waves happily. Foreground old uneven brown and mauve flagstones, little wildflowers and grasses, low fragments of a circular stone arch and worn column bases; middle ground gentle purple barren hills and silver haze, distant violet ridges echoing input 4, plum sky with warm peach glimmer behind thin clouds. Keep soft warm cute mood, not horror or combat. Avoid giant fortress, realistic human or modern European town.
```

### scene-sariel-sanctuary

[PNG 原图](assets/scene-sariel-sanctuary.png) · [WebP 预览](assets/scene-sariel-sanctuary.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应本批最终人物 PNG；依莉斯场景输入维纳的废墟1，萨丽爱尔场景输入堕落神殿1，矜羯罗场景依次输入静寂神殿2、静寂神殿1的原作背景。

```text
Use case: illustration-story. ONE wide 16:9 original Touhou sketchbook scene. Inputs 1 and 2 are the original first Reimu and Marisa drawings: closely preserve graphite pencil outlines/hatching, colored-pencil and pale watercolor on warm ivory paper, round large chibi heads, short little torso/limbs, tiny hands, about 2.5-3 heads tall. Input 3 is the FINAL checked character portrait: preserve individual hair, outfit, face and accessories. Further inputs are ORIGINAL GAME background art for mood/colors/basic motifs only, not to trace the layout or reuse pixels. Exactly ONE character, no extra people, duplicate body parts or background faces. Rich layered hand-drawn landscape detail, feathered ivory-paper vignette edges. No lettering, readable glyphs, signboards, watermark, logos, modern UI or realistic long-limbed adult proportions. This calm daily moment and architecture are imaginative fan art rather than a claimed reconstruction of the original game. Sariel's FIRST FORM in an imaginative gently illuminated sanctuary inspired by game round lights and cross-shaped architectural motif. SILVERY WHITE very long straight hair shaded lavender, calm blue eyes, blue-violet compact dress with pale chest shield ornament/abstract curling motif, white long puff sleeves. Exactly SIX white feathered wings in three pairs: upper, middle, lower, all visible and separated from hair. One short hand holds violet wand with a round pale orb, other hand rests softly at chest. Two short little legs, two small white closed shoes parallel and visible, NOT long bare legs. Foreground warm beige worn stone floor with a few tiny blue flowers, a little shallow reflective pool off to the side. Broken stone columns frame a tall round window with simple intersecting mullions, warm golden shafts of light, a few floating lavender light-orbs, ivy spilling down a distant arch. White wings and blue-violet figure stand out from warm stone; soft atmospheric background details. No halo, no extra wing pairs, no feathers shaped as hands, no crowd, no fiery battlefield. Respect original's first form and keep body VERY short.
```

### scene-konngara-stillhall

[PNG 原图](assets/scene-konngara-stillhall.png) · [WebP 预览](assets/scene-konngara-stillhall.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应本批最终人物 PNG；依莉斯场景输入维纳的废墟1，萨丽爱尔场景输入堕落神殿1，矜羯罗场景依次输入静寂神殿2、静寂神殿1的原作背景。

```text
Use case: illustration-story. ONE wide 16:9 original Touhou sketchbook scene. Inputs 1 and 2 are the original first Reimu and Marisa drawings: closely preserve graphite pencil outlines/hatching, colored-pencil and pale watercolor on warm ivory paper, round large chibi heads, short little torso/limbs, tiny hands, about 2.5-3 heads tall. Input 3 is the FINAL checked character portrait: preserve individual hair, outfit, face and accessories. Further inputs are ORIGINAL GAME background art for mood/colors/basic motifs only, not to trace the layout or reuse pixels. Exactly ONE character, no extra people, duplicate body parts or background faces. Rich layered hand-drawn landscape detail, feathered ivory-paper vignette edges. No lettering, readable glyphs, signboards, watermark, logos, modern UI or realistic long-limbed adult proportions. This calm daily moment and architecture are imaginative fan art rather than a claimed reconstruction of the original game. Konngara in an imaginative quiet blue-black temple gallery, red pillars in far distance. BLACK single high upswept ponytail with RED ribbon, red eyes, SINGLE small red horn-like forehead point, red robe with white edge over broad gray-white sleeves. Exactly TWO arms/hands: left hand holds upright slender silver sword beside body with blade clear of face; right hand supports shallow red bowl near chest. IMPORTANT original ghostly silhouette: lower robe tapers into blue-gray wisps hovering above floor, absolutely NO legs, feet or shoes, no severed limbs. Whole head-to-mist silhouette still compact 2.5-3 heads. Calm curious small expression. Foreground smooth dark blue stone with faint shallow water reflections, a few small pale lotuses floating in a side basin, trailing mist along floor. Receding old stone columns, circular opening far behind, cold indigo interior with a restrained distant red-gold glow echoing the two original stage backgrounds. Intricate pencil stone texture and airy ivory vignette, not dark photographic horror. NO readable Sanskrit or characters, NO alcohol labels or visible liquid, NO extra ghosts, battle flames or blood.
```
