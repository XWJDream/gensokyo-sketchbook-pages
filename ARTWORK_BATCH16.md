# 第十六批：首批画风与比例增补

2026-10-27。新增兽王园 5 位人物和 4 幅独立场景，累计 125 位人物、44 幅场景、9 页世界手帖、28 个作品入口、69 组关系与 30 条词条。地图保持 6 区 29 处地点。

## 绘制模式与参考

采用 imagegen 内置工具模式，每张单独生成，全部新图都实际传入 [首批灵梦](assets/reimu.png) 与 [首批魔理沙](assets/marisa.png) 两张图片作为风格及比例参考。参考不作为新增角色的身份来源。没有使用 CLI/API。最终 PNG 和 WebP 保存在本项目 assets/；原始生成文件保留。

核对：圆润大头、短身短肢、小手小脚、平衡姿态，铅笔轮廓与轻淡色块。原图、网页卡片与弹窗使用同一绘制结果，没有靠裁切隐藏比例。场景保留纸面排线和手绘背景，避免光滑写实画面。服饰纹样、饰物与道具做了同人简化，不作为官方立绘。旧血池图额外定点修正尤魔瞳色，保留其余构图与比例。

长期约定见 [ART_STYLE_GUIDE.md](ART_STYLE_GUIDE.md)。

## 调研与编排

- [上海爱丽丝幻乐团：兽王园官方发行页](https://store.steampowered.com/app/2400340/)：2023 年对战弹幕作品。
- THBWiki 原作摘录与角色图形说明：[孙美天](https://thwiki.cc/孙美天)、[三头慧之子](https://thwiki.cc/三头慧之子)、[天火人血枪](https://thwiki.cc/天火人血枪)、[豫母都日狭美](https://thwiki.cc/豫母都日狭美)、[日白残无](https://thwiki.cc/日白残无)。

美天自称孙悟空转世，不能当作已证实身份；慧之子是人形三尾山犬，不画三颗头；血枪是天火人，卓柏卡布拉是外号。日狭美景仰残无是单方面的，残无不是阎魔。三位新成员分别加入不同组织，也各自与残无计划有关。山中汇报、森林谈话、旧血池闲话和松下对话均为想象，地图只增加已有区域的阅读线索，不虚构地狱与旧血池坐标。

## 实际提示词与最终文件

### biten

PNG：[assets/biten.png](assets/biten.png)；浏览图：[assets/biten.webp](assets/biten.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW square 1:1 full-body Touhou character illustration for the SAME sketchbook. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT characters to include. Precisely match their round playful 2.5-to-3 HEAD chibi proportions, big rounded head, tiny short torso, short arms and short legs, small natural hands/feet, expressive simple face, lively but balanced pose. Match original delicate DARK GRAPHITE linework, loose visible pencil sketch strokes and soft transparent colored-pencil/watercolor fills; warm pale IVORY paper, light hatching, clean airy blank margins, NO glossy airbrushing, no realistic rendering, no dense grain over face, no tall adult proportions. Show exactly one researched new character, two arms and two human legs (unless specified), correct natural fingers and feet. No Reimu, Marisa, text, watermark, border or scene background. Keep total body length and head/body ratio like references; do not enlarge body to show costume. Son Biten, exuberant monkey goddess. BROWN chest-length hair in TWO LOW PIGTAILS with GOLD hair ties; gold Monkey-King-like circlet on head, RED eyes, ONE long brown MONKEY TAIL. Loose modest over-knee tunic-dress colored GREEN at upper chest, YELLOW middle and BLUE lower skirt, geometric diamond openings simplified with underlayer. ONLY LEFT ARM has a loose WHITE sleeve, right arm bare with GOLD wrist bangle; gold ring at upper edge of left sleeve, yellow clip-shaped ornaments at skirt hem. BAREFOOT: exactly two short natural human legs, two separate five-toed feet flat. Holds ONE thin transparent staff-shaped glass tube containing red/purple small shapes like canonical stick; other hand cheerful greeting. No monkey face, no extra tails, no tall body.
```

### enoko

PNG：[assets/enoko.png](assets/enoko.png)；浏览图：[assets/enoko.webp](assets/enoko.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW square 1:1 full-body Touhou character illustration for the SAME sketchbook. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT characters to include. Precisely match their round playful 2.5-to-3 HEAD chibi proportions, big rounded head, tiny short torso, short arms and short legs, small natural hands/feet, expressive simple face, lively but balanced pose. Match original delicate DARK GRAPHITE linework, loose visible pencil sketch strokes and soft transparent colored-pencil/watercolor fills; warm pale IVORY paper, light hatching, clean airy blank margins, NO glossy airbrushing, no realistic rendering, no dense grain over face, no tall adult proportions. Show exactly one researched new character, two arms and two human legs (unless specified), correct natural fingers and feet. No Reimu, Marisa, text, watermark, border or scene background. Keep total body length and head/body ratio like references; do not enlarge body to show costume. Mitsugashira Enoko, sweet confident immortal mountain dog. WHITE slightly WAVY NECK-LENGTH SHORT hair, TWO BLUE dog ears, RED eyes, THREE distinct BLUE-GREY dog tails behind. PURPLE modest off-shoulder blouse with WHITE zigzag waist motif and translucent WHITE frill around upper arms. Purple pendant with GREEN round GEM at neck. PINK short skirt with rainbow TRIANGULAR V pattern around skirt. RED ankle rings, BAREFOOT exactly two natural human feet five toes each. Red open trap-shaped wrist ornaments simplified as round red toothed bracelets with NO injury. One hand rests at chest, other gently open. Human face, not three heads, no long hair.
```

### chiyari

PNG：[assets/chiyari.png](assets/chiyari.png)；浏览图：[assets/chiyari.webp](assets/chiyari.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW square 1:1 full-body Touhou character illustration for the SAME sketchbook. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT characters to include. Precisely match their round playful 2.5-to-3 HEAD chibi proportions, big rounded head, tiny short torso, short arms and short legs, small natural hands/feet, expressive simple face, lively but balanced pose. Match original delicate DARK GRAPHITE linework, loose visible pencil sketch strokes and soft transparent colored-pencil/watercolor fills; warm pale IVORY paper, light hatching, clean airy blank margins, NO glossy airbrushing, no realistic rendering, no dense grain over face, no tall adult proportions. Show exactly one researched new character, two arms and two human legs (unless specified), correct natural fingers and feet. No Reimu, Marisa, text, watermark, border or scene background. Keep total body length and head/body ratio like references; do not enlarge body to show costume. Tenkajin Chiyari, sleepy mischievous cursed yokai in cute HUMAN chibi form, slight relaxed slouch but compact body. PURPLE WAIST-LENGTH CURLY hair, ONE small MAGENTA HORN at crown, RED eyes. Oversized pale BEAN-GREEN short-sleeve T-SHIRT, white abstract geometric letter-like hem trim but NO readable text. TEAL checked knee shorts with WHITE ruffled hems. Three tiny empty syringe-like capped accessories on HER right thigh and three sealed dark-red glass vials on HER left thigh, secured safely as costume, no use. ONE magenta scaled tail. BAREFOOT two natural short legs and five-toe feet. FIVE small soft crimson spirit-fire globes floating separately behind, not blood splashes. Hands in relaxed casual pose, no wounds or gore.
```

### hisami

PNG：[assets/hisami.png](assets/hisami.png)；浏览图：[assets/hisami.webp](assets/hisami.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW square 1:1 full-body Touhou character illustration for the SAME sketchbook. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT characters to include. Precisely match their round playful 2.5-to-3 HEAD chibi proportions, big rounded head, tiny short torso, short arms and short legs, small natural hands/feet, expressive simple face, lively but balanced pose. Match original delicate DARK GRAPHITE linework, loose visible pencil sketch strokes and soft transparent colored-pencil/watercolor fills; warm pale IVORY paper, light hatching, clean airy blank margins, NO glossy airbrushing, no realistic rendering, no dense grain over face, no tall adult proportions. Show exactly one researched new character, two arms and two human legs (unless specified), correct natural fingers and feet. No Reimu, Marisa, text, watermark, border or scene background. Keep total body length and head/body ratio like references; do not enlarge body to show costume. Yomotsu Hisami, poised yokai guide. BLACK hip-length straight flowing hair. Distinct purple LOBELIA-FLOWER-shaped HEADPIECE with two purple hanging curtain panels covering upper half of face and eyes; small hint of PURPLE eyes can peek underneath, do NOT remove veil. Elegant PURPLE over-knee robe with leaf and GRAPEVINE motifs and petal-like sleeve cuffs, modest closed skirt for chibi. BLACK mid-length gloves, TWO BLACK MID-CALF BOOTS. Both gloved hands gently extended in inviting gesture, calm small smile under veil. Exact tiny torso and short legs of reference, robe must NOT turn body into tall adult silhouette. No horns or wings, no grapes held.
```

### zanmu

PNG：[assets/zanmu.png](assets/zanmu.png)；浏览图：[assets/zanmu.webp](assets/zanmu.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW square 1:1 full-body Touhou character illustration for the SAME sketchbook. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT characters to include. Precisely match their round playful 2.5-to-3 HEAD chibi proportions, big rounded head, tiny short torso, short arms and short legs, small natural hands/feet, expressive simple face, lively but balanced pose. Match original delicate DARK GRAPHITE linework, loose visible pencil sketch strokes and soft transparent colored-pencil/watercolor fills; warm pale IVORY paper, light hatching, clean airy blank margins, NO glossy airbrushing, no realistic rendering, no dense grain over face, no tall adult proportions. Show exactly one researched new character, two arms and two human legs (unless specified), correct natural fingers and feet. No Reimu, Marisa, text, watermark, border or scene background. Keep total body length and head/body ratio like references; do not enlarge body to show costume. Nippaku Zanmu, calm self-assured human-turned oni. BLACK KNEE-LENGTH long loose hair curled at ends, TWO small YELLOW HORNS tied with RED threads, RED eyes. GREEN top with visible RED stitch repairs at shoulders chest and forearms, small yellow-edged waist tear with modest underlayer. BLUE HIGH-WAIST knee-length LOOSE SHORTS with side slits stitched RED, yellow leg edging; WHITE underleggings. TWO reddish-brown wooden thong sandals with natural small feet. Seated compactly on ONE SMALL irregular grey ROCK, tiny welcoming PINE tree grows from side; subtle non-graphic red bone-shaped decorative stones at rock base. One small hand on knee, other palm open. Seated but exactly two human legs and two separate sandals, 2.5-to-3-head chibi not tall or realistic.
```

### scene-monkey-sanctuary

PNG：[assets/scene-monkey-sanctuary.png](assets/scene-monkey-sanctuary.png)；浏览图：[assets/scene-monkey-sanctuary.webp](assets/scene-monkey-sanctuary.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW wide 16:9 Touhou sketchbook scene. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT extra characters to add. Every person MUST share their same round 2.5-to-3-head chibi silhouette, large round head, tiny short torso, short arms/legs, simple expressive face and naturally separate feet. Fine dark graphite contours with loose pencil strokes, soft translucent muted colored-pencil/watercolor on warm IVORY paper, airy light values; background also HAND DRAWN with visible pencil contours, no photorealism, no glossy rendering, no artificial depth-of-field blur, no tall figures. Environment 65% composition, small complete figures grounded safely. No text, UI, logos or border. All architecture and staging invented, not a map or official event reconstruction. A bright imagined mountain forest SANCTUARY: old broad-leaved trees, mossy boulders, fruit baskets, sunlit vines and tiny distant monkey silhouettes, a winding path toward misty hills, no shrine building. TWO chibi people stand on flat foreground ground at natural distance. LEFT Biten: brown LOW TWIN PIGTAILS golden ties/circlet, red eyes, GREEN upper/YELLOW middle/BLUE lower over-knee tunic, WHITE LEFT sleeve only, bare right arm gold bangle, ONE brown monkey tail, barefoot correct human feet; holds thin transparent glass staff upright safely and gives proud cheerful smile. RIGHT Yachie: golden neck-length BOB, branching golden deer antlers, teal short-sleeve blouse white collar/navy bow, dark green knee skirt, green turtle shell back and long scaled dragon tail, white socks black Mary Jane shoes, calm considering expression. A subordinate reports to her organization leader, not mother/daughter or permanent innocent friends. Same round big heads and tiny limbs as references, forest fills majority.
```

### scene-forest-watch

PNG：[assets/scene-forest-watch.png](assets/scene-forest-watch.png)；浏览图：[assets/scene-forest-watch.webp](assets/scene-forest-watch.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW wide 16:9 Touhou sketchbook scene. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT extra characters to add. Every person MUST share their same round 2.5-to-3-head chibi silhouette, large round head, tiny short torso, short arms/legs, simple expressive face and naturally separate feet. Fine dark graphite contours with loose pencil strokes, soft translucent muted colored-pencil/watercolor on warm IVORY paper, airy light values; background also HAND DRAWN with visible pencil contours, no photorealism, no glossy rendering, no artificial depth-of-field blur, no tall figures. Environment 65% composition, small complete figures grounded safely. No text, UI, logos or border. All architecture and staging invented, not a map or official event reconstruction. A quiet imagined path deep in the MAGIC FOREST, mushroom-covered fallen timber, fern shadows, a small clear stream and pale shafts of dawn. Enoko at LEFT: WHITE short WAVY BOB, BLUE dog ears, red eyes, THREE blue-grey dog tails, purple blouse white shoulder frill/zigzag waist, green gem pendant, pink rainbow-triangle skirt, red ankle rings and red trap-shaped wrist ornaments, barefoot two natural feet, open hands. Saki at RIGHT: black knee-length PONYTAIL, brown cowboy hat, green scarf, blue-pink-brown short-sleeved knee dress, TWO black feather wings, ONE black horse tail, brown cowboy boots. Both short round CHIBI with complete feet on flat path; pause to talk, Enoko attentive and Saki energetic confident. A CLOSED red stylized trap ornament hangs on branch far from feet, no active traps on trail, no injury or scary animal attack. Leader and newly recruited subordinate, not siblings. Draw environment in fine pencil as references, no tall legs.
```

### scene-old-bloodpool

PNG：[assets/scene-old-bloodpool.png](assets/scene-old-bloodpool.png)；浏览图：[assets/scene-old-bloodpool.webp](assets/scene-old-bloodpool.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW wide 16:9 Touhou sketchbook scene. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT extra characters to add. Every person MUST share their same round 2.5-to-3-head chibi silhouette, large round head, tiny short torso, short arms/legs, simple expressive face and naturally separate feet. Fine dark graphite contours with loose pencil strokes, soft translucent muted colored-pencil/watercolor on warm IVORY paper, airy light values; background also HAND DRAWN with visible pencil contours, no photorealism, no glossy rendering, no artificial depth-of-field blur, no tall figures. Environment 65% composition, small complete figures grounded safely. No text, UI, logos or border. All architecture and staging invented, not a map or official event reconstruction. An imagined quiet OLD BLOOD-POOL HELL terrace: layered dark purple volcanic rock, sparse reeds, broken stone railings, distant dark WINE-RED still pool represented as abstract watercolor (no blood splashes, gore, body parts or victims), tiny amber lanterns and red spirit-fire reflections. TWO compact ROUND CHIBI figures near low stone ledge, complete natural feet. LEFT Chiyari: PURPLE WAIST-LENGTH CURLY hair, ONE small magenta horn, red eyes, oversized pale bean-green T-shirt with white geometric hem/no text, teal checked shorts white ruffle, tiny sealed vial accessories at thighs, ONE magenta scaled tail, BAREFOOT; relaxed slouch and small sleepy grin, hands loosely at sides, FIVE small soft red ghostfire globes. RIGHT Yuuma: fluffy white SHOULDER CURLS, TWO red curled horns blue eye-pattern bows, blue white-eye-motif knee dress red shoulder cape, barefoot correct human feet, holds big SILVER SPORK resting on ground. A cautious conversation between an alliance leader and new member with separate hidden loyalties, no friendly family meal. Lots of airy paper-pencil landscape.
```

定点修订提示词（输入为该场景初次生成图）：

```text
Use case: precise-object-edit. This is the EDIT TARGET. Preserve the entire drawing, exact original pencil lines, pale paper, two figures, their proportions, clothing, hands, feet, background, composition and colors. Make ONLY ONE tiny correction: the WHITE-haired red-horned character on the RIGHT (Yuuma) must have RED eye irises, not blue. Keep pupil/highlight shapes and eye size unchanged. Do not recolor the purple-haired character. No other changes.
```

### scene-hell-pine

PNG：[assets/scene-hell-pine.png](assets/scene-hell-pine.png)；浏览图：[assets/scene-hell-pine.webp](assets/scene-hell-pine.webp)。

生成参考输入：assets/reimu.png、assets/marisa.png（仅画风与比例）。

```text
Use case: illustration-story. NEW wide 16:9 Touhou sketchbook scene. Input images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY (original Reimu and Marisa), NOT extra characters to add. Every person MUST share their same round 2.5-to-3-head chibi silhouette, large round head, tiny short torso, short arms/legs, simple expressive face and naturally separate feet. Fine dark graphite contours with loose pencil strokes, soft translucent muted colored-pencil/watercolor on warm IVORY paper, airy light values; background also HAND DRAWN with visible pencil contours, no photorealism, no glossy rendering, no artificial depth-of-field blur, no tall figures. Environment 65% composition, small complete figures grounded safely. No text, UI, logos or border. All architecture and staging invented, not a map or official event reconstruction. An imagined winding HELL road of weathered stone and low crimson foliage beside a grey rock dais, distant layered ridges, pale violet mist, tiny red lanterns, one sculptural welcoming PINE grows by dais. At RIGHT Zanmu sits calmly on low rock: BLACK long hair curled at ends, TWO small YELLOW horns RED threads, red eyes, GREEN top RED repaired stitches/yellow edges, BLUE high-waist knee shorts, WHITE underleggings, two separate reddish-brown wooden thong sandals, one hand knee other open. At LEFT Hisami stands a respectful distance and gestures toward road: BLACK hip-length hair, PURPLE lobelia flower headpiece and hanging purple curtains cover upper face/eyes, purple grapevine/leaf robe to knees with petal cuffs, black gloves and two black mid boots. Both MUST be short 2.5-to-3-head ROUND CHIBI, Zanmu's seated silhouette compact, Hisami not tall despite robe. Reserved asymmetrical relationship, not romantic or equal mutual admiration. Environment rendered with visible loose graphite outlines and soft color, no realistic fog or glossy art.
```
