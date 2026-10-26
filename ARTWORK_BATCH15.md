# 第十五批绘制与资料手记

2026-10-26。新增虹龙洞 8 位人物和 4 幅独立场景，累计 120 位人物、40 幅场景、9 页世界手帖、27 个作品入口、63 组关系、28 条词条。地图保持 6 区 29 处地点。

采用 imagegen 内置工具模式，每项独立生成；没有调用 CLI/API。所选 PNG 原图与 WebP 浏览图复制到本项目 assets/，世界手帖与月虹市场场景共用新图。图画是风格化 AI 同人创作，衣纹、鞋饰、发束等细节有所简化，非官方立绘。

## 查阅来源与编排

- [上海爱丽丝幻乐团：虹龙洞发行页](https://store.steampowered.com/app/1566410/)：2021 年作品。
- [原作附带角色设定](https://thwiki.cc/附带文档:东方虹龙洞/Omake)：山童与河童、交易合作、开采争议等。中文简介为概述，未复制大段原文。
- THBWiki 角色立绘说明与原作摘录：[豪德寺三花](https://thwiki.cc/豪德寺三花)、[山城高岭](https://thwiki.cc/山城高岭)、[驹草山如](https://thwiki.cc/驹草山如)、[玉造魅须丸](https://thwiki.cc/玉造魅须丸)、[菅牧典](https://thwiki.cc/菅牧典)、[饭纲丸龙](https://thwiki.cc/饭纲丸龙)、[天弓千亦](https://thwiki.cc/天弓千亦)、[姬虫百百世](https://thwiki.cc/姬虫百百世)。
- [菅牧典形象补充阅读](https://moegirl.icu/zh-tw/菅牧典)：金发、白色连体衣与足袋，THBWiki 详情页在检索时部分请求不可用。

三花招财与揽客不能兼得；高岭是山童，典是管狐，饭纲丸龙是大天狗。龙与千亦有合作和分歧，典的建议不可当中立旁白。魅须丸到矿洞调查，不因此固定住所；百百世是否真能噬龙在原作保留未知。四景的摊位、檐廊、谈判桌和矿道均为想象；高地会面、相邻小摊不是已发生的原作事件。市场和矿洞无虚构地图坐标，矿洞不设计为旅游路线。

## 实际提示词和项目路径

### mike

PNG：[assets/mike.png](assets/mike.png)；WebP：[assets/mike.webp](assets/mike.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Goutokuji Mike, bright happy calico beckoning cat. WHITE, ORANGE and BROWN patched NECK-LENGTH SHORT hair, two white cat ears pink inside, orange eyes. White short-sleeved blouse and modest matching short skirt with orange/brown patches bearing tiny white dots; pink skirt lining. Black collar and wristbands each with small GOLD BELL. ONE calico cat tail. BAREFOOT, exactly two separate natural human feet five toes each. Left hand holds ONE oval gold koban coin with simple geometric marks (no writing), right hand raised in beckoning pose with natural fingers. Confident about her three-color appearance.
```

### takane

PNG：[assets/takane.png](assets/takane.png)；WebP：[assets/takane.webp](assets/takane.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Yamashiro Takane, clever friendly mountain kappa-like yamawaro, HUMAN face, no animal ears or tail. GREEN chest-length CURLY hair, green eyes, blue-green BERET. Long-sleeved green CAMOUFLAGE blouse, upper-arm pockets; matching knee-length camo skirt with a ring of pockets. GOLD KEY tied at chest by crossed black cords. Small brown wooden BOX BACKPACK with gold latch. Yellow-green mid-calf boots. Left hand holds THREE small rectangular ability cards, right hand lightly on backpack strap. Distinct pronounced curls, no twin tails.
```

### sannyo

PNG：[assets/sannyo.png](assets/sannyo.png)；WebP：[assets/sannyo.webp](assets/sannyo.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Komakusa Sannyo, relaxed confident adult yokai translated to round cute chibi, no animal ears or tail. Pale LAVENDER chest-length hair tied in ONE low back ponytail with YELLOW ribbon, red eyes. RED long-sleeved open jacket over dark red right-lapel top, BLACK collar and placket, yellow scrolling vine motifs along jacket hem. Layered PURPLE knee-length skirt with pale purple vine trim. Bare feet in TWO dark brown wooden GETA with clear straps. LEFT hand holds gold folding FAN with tassel; RIGHT hand holds ONE long ornate dragon-shaped kiseru pipe away from face, unlit with no smoke. No casino or gambling objects.
```

### misumaru

PNG：[assets/misumaru.png](assets/misumaru.png)；WebP：[assets/misumaru.webp](assets/misumaru.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Tamatsukuri Misumaru, composed ancient magatama artisan goddess. Shoulder-length TWO-TONE hair: PALE GOLD front and sidelocks tied by small round jade beads, BROWN hair at back gathered with large round bead. Pink eyes. Ancient Japanese Kofun-inspired RED short-sleeved top with WHITE sleeves and reddish-brown MAGATAMA patterns; rainbow-colored magatama strand over HER left shoulder. Purple waist sash with colored magatama hanging at its ends. OCHRE knee-length skirt covered with GREEN magatama designs, colored magatama fringe at hem. BAREFOOT, two natural feet. Both hands carefully present ONE green comma-shaped magatama bead. No modern tools or extra people.
```

### tsukasa

PNG：[assets/tsukasa.png](assets/tsukasa.png)；WebP：[assets/tsukasa.webp](assets/tsukasa.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Kudamaki Tsukasa, sly but cute pipe fox. GOLDEN BLONDE SHORT shoulder hair, one narrow long bang between eyes, golden-yellow eyes. TWO fox ears with white tips and ONE fluffy golden fox tail with white tip. White short-sleeved ONE-PIECE ROMPER down to knees, simple modest white bodice and loose trouser legs, GREEN bands and ribbon ties gather each trouser leg. White split-toe TABI socks with NO shoes, exactly two separate socked feet. LEFT hand holds ONE tiny glass test tube with greenish liquid; right hand makes a simple fox hand gesture at chest with anatomically natural fingers. No pink dress, no nine tails, no animal muzzle.
```

### megumu

PNG：[assets/megumu.png](assets/megumu.png)；WebP：[assets/megumu.webp](assets/megumu.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Iizunamaru Megumu, commanding great tengu, calm proud expression. DARK BLUE chest-length loose hair, small BLUE TOKIN hat, red eyes. BLUE knee-length dress with loose WHITE collar, sleeves to mid-forearm with white dash trim and pleated white hem. Asymmetric BLACK CAPE covering HER LEFT side with white dash edging and white fluffy pom-poms; crossed thin gold cords secure it. GOLD armor plate with BLUE gem on HER LEFT shoulder. Crossed white waist ribbons with tiny test tube tucked on right. Black three-quarter socks and PURPLE one-tooth GETA, clearly two wooden shoes. Right hand rests ONE folded black camera TRIPOD across shoulder (no camera, no weapon), other hand at waist. No actual dragon horns or tail, no giant wings covering costume.
```

### chimata

PNG：[assets/chimata.png](assets/chimata.png)；WebP：[assets/chimata.webp](assets/chimata.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Tenkyuu Chimata, colorful market goddess, warm confident smile. DARK BLUE neck-length SHORT slightly CURLY hair, RAINBOW gradient HAIRBAND, blue-violet eyes. Long-sleeved knee-length dress made of SEVEN RAINBOW fabric panels in spectrum order joined with visible zippers and YELLOW cords, sophisticated patchwork not plain stripes. WHITE outer CAPE with BLUE SKY and WHITE CLOUD lining, red clasp and red neck cord. Brown waistbelt, small YELLOW cloth pouch on HER LEFT hip. PINK ankle boots with WHITE BOW on each upper cuff. Right hand points gently upward, left hand points toward ground, natural fingers, feet planted. Tiny soft yellow flame-like aura near shoes optional. No long hair, no wings or extra props.
```

### momoyo

PNG：[assets/momoyo.png](assets/momoyo.png)；WebP：[assets/momoyo.webp](assets/momoyo.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Himemushi Momoyo, strong cheerful giant-centipede yokai in HUMAN shape, two arms two legs ONLY. GREY-BLUE WAIST-LENGTH long loose hair, one upturned hornlike forelock at HER right forehead (hair NOT actual horn), grey-blue eyes. BLACK short-sleeved blouse and BLACK knee skirt with YELLOW wormlike winding patterns; many small GREEN RINGS trim collar sleeves waist and hem. Large ORANGE bow tied behind waist; three orange ribbon ties on each forearm, five orange ribbon ties on each calf. BAREFOOT two natural five-toe human feet. Left hand holds ONE small miner PICKAXE with golden head resting on shoulder, RIGHT hand holds ONE SHOVEL with golden head and golden grip resting on ground. No actual centipede legs, no insect mandibles, correct small hands.
```

### scene-mountain-stalls

PNG：[assets/scene-mountain-stalls.png](assets/scene-mountain-stalls.png)；WebP：[assets/scene-mountain-stalls.webp](assets/scene-mountain-stalls.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. Rain has just cleared over an imagined green mountain foothill path. Fine moss, wet stones, fern-covered cliffs, tiny timber stalls with blank cloth awnings, baskets of mundane handmade objects and small ability cards on low counters, a pale rainbow behind distant mountains. Mike at LEFT: calico white-orange-brown SHORT bob, white cat ears, orange eyes, calico tail, white patched short blouse/skirt, gold bells, barefoot human feet planted flat, raises ONE small gold coin. Takane at RIGHT: GREEN long curls under teal beret, camo green blouse and pocketed knee skirt, brown box backpack, key necklace, yellow-green boots, presents THREE simple pattern cards in left hand. They have separate small stalls across path, a polite imagined exchange, not established business partners. Tiny round 2.5-head figures, two feet each. Environment dominates, no readable signs or UI.
```

### scene-highland-veranda

PNG：[assets/scene-highland-veranda.png](assets/scene-highland-veranda.png)；WebP：[assets/scene-highland-veranda.webp](assets/scene-highland-veranda.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. An invented highland rest veranda near an old timber building, white-pink alpine flowers, weathered stone steps, distant lingering snow on high cliffs, soft cloud sea and sunset. Sannyo sits LEFT at veranda edge: pale LAVENDER ponytail tied yellow, red long-sleeve jacket yellow vine trim, purple layered skirt, two feet in dark wooden GETA resting safely on flat step, holds gold folding fan, unlit ornate dragon pipe rests beside her. Misumaru stands RIGHT: pale gold front hair and brown tied back hair with jade beads, red top white sleeves, ochre GREEN magatama patterned knee skirt, purple sash and multicolored magatama jewelry, barefoot human feet, shows ONE green magatama above small wooden tray. A calm imagined conversation between two distinct people who warn humans away from a mine, no claim canonical meeting. No gambling, no smoke, no modern furniture. Chibi figures at bottom corners, landscape fills majority.
```

### scene-moonrainbow-market

PNG：[assets/scene-moonrainbow-market.png](assets/scene-moonrainbow-market.png)；WebP：[assets/scene-moonrainbow-market.webp](assets/scene-moonrainbow-market.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. Imagined mountain summit market at night under soft pale MOONBOW, luminous moon through mist, strings of warm lanterns over separate modest wood stalls and stone paths above a cloud sea. Foreground THREE 2.5-head ROUND CHIBI figures negotiating across a low table of patterned ability cards, polite but cautious expressions. LEFT Megumu: dark blue chest hair small blue tokin, blue dress white collar, asymmetric black cape and gold left shoulder armor, black socks purple geta, folded tripod leaning beside table. RIGHT Chimata: dark blue short curly bob rainbow headband, SEVEN colored patchwork knee dress with yellow seams, white cape SKY-CLOUD lining, yellow hip pouch, pink boots white bows, places ONE card flat on table. CENTER-BACK Tsukasa: short GOLD blonde hair, fox ears and ONE gold white-tip fox tail, white knee romper green leg ties, white tabi socks; leans slightly to relay words, two natural hands behind her, cunning quiet smile. This is an invented negotiation, NOT a fixed three-way friendship. Distinct hair lengths, natural two feet each. No text or labels.
```

### scene-dragon-mine

PNG：[assets/scene-dragon-mine.png](assets/scene-dragon-mine.png)；WebP：[assets/scene-dragon-mine.webp](assets/scene-dragon-mine.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. An invented vast mountain mine chamber with ancient multicolored rounded DRAGON GEM mineral veins in stone, rough timber supports, branching mine rails vanishing into cool purple-blue haze, amber lanterns, old wooden cart with mineral chunks, rock pools reflecting tiny colored lights, NOT a tourist cave. Foreground LEFT Momoyo: grey-blue WAIST-length loose hair and one hornlike forelock, HUMAN body two arms and two legs, black short-sleeved blouse/knee skirt with yellow winding motifs, green ring trim, orange backbow and ribbon ties on calves, BAREFOOT human feet planted flat. Left hand rests golden-headed PICKAXE on shoulder, right hand rests golden SHOVEL on ground. RIGHT Misumaru stands at a separate raised rocky shelf: pale gold front/brown back hair jade beads, red-white top, ochre green-magatama skirt, purple sash and rainbow jade jewelry, barefoot, both hands show a small green magatama while studying vein. Distance and guarded expressions show conflicting claims about mining, NOT coworkers happily extracting together. No dragons present, no gore, no hard hats or oxygen gear, no extra hands.
```
