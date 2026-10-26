# 第十四批绘制与资料手记

2026-10-26。新增 8 位人物、4 幅独立场景，累计 112 位人物、36 幅场景、8 页世界手帖、26 个作品入口、57 组关系、26 条词条。地图保持 6 区 29 处地点。

采用 imagegen 内置工具模式，每项独立生成；未调用付费 API。PNG 原图与 WebP 浏览图均保存于本项目 assets/。世界手帖与灵长园场景共用一幅新图。

## 核对的资料

- [鬼形兽官方发行页](https://store.steampowered.com/app/1079160/)：2019 年发行与作品范围。
- [黄昏边境：刚欲异闻](https://tasofro.net/touhou175/) 与 [官方发行页](https://store.steampowered.com/app/1440500/)：2021 年发行，黑水与弹幕动作作品。
- [久侘歌](https://danmaku.jp/archive/character/c025/)、[磨弓](https://danmaku.jp/archive/character/c045/)、[袿姬](https://danmaku.jp/archive/character/c074/)：授权角色介绍。
- THBWiki 对原作附带设定与立绘的整理：[璎花](https://thwiki.cc/戎璎花)、[润美](https://thwiki.cc/牛崎润美)、[久侘歌](https://thwiki.cc/庭渡久侘歌)、[八千慧](https://thwiki.cc/吉吊八千慧)、[磨弓](https://thwiki.cc/杖刀偶磨弓)、[袿姬](https://thwiki.cc/埴安神袿姬)、[早鬼](https://thwiki.cc/骊驹早鬼)、[尤魔](https://thwiki.cc/饕餮尤魔)。

## 编排与修订边界

久侘歌的工作地与住宅分别描述。早鬼归劲牙组，八千慧归鬼杰组，尤魔归刚欲同盟；三方远眺是想象构图，保留竞争关系。尤魔在鬼形兽被提及，正式登场于刚欲异闻。畜生界与灵长园不置入旧地狱地图。袿姬的保护与新控制保留多方视角。垒石同框不作为璎花、润美的既定搭档事实。插图为风格化 AI 同人意象，衣装细节有所简化，场景建筑、光线、同框与道路非官方还原。

## 实际提示词及项目文件

### eika

原图：[assets/eika.png](assets/eika.png)；浏览图：[assets/eika.webp](assets/eika.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Eika Ebisu from Touhou, cheerful riverbank spirit. Warm medium-TAN skin (clearly warmer/deeper than pale ivory paper), creamy WHITE chest-length gently wavy hair whose curled tips suggest a jellyfish bell, PINK eyes, slightly elongated rounded earlobes. WHITE short-sleeve knee-length dress with pale PINK bubble patterns, PINK satin collar, sleeve trim, waist sash and hem; thin ribbon ends trail from sleeve cuffs and rear sash like jellyfish streamers. BAREFOOT, exactly two natural separate five-toed feet flat on ground. Holds one small smooth grey stacking stone with both hands at chest, playful smart smile; tiny stack of three smooth stones beside feet. No halo, wings, crown, jellyfish body or other people.
```

### urumi

原图：[assets/urumi.png](assets/urumi.png)；浏览图：[assets/urumi.webp](assets/urumi.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Urumi Ushizaki from Touhou. Split-color shoulder-length slightly WAVY hair, viewer LEFT BLACK and viewer RIGHT WHITE, matching cow ears on sides; TWO RED curved cow horns, RED eyes, cheerful calm smile. Yellow BLACK-edged vest with white ruffle trim and tiny red dots, fully modest covered chest, open WHITE short-sleeve jacket with subtle GREY cow patches and BLACK edges, YELLOW shorts with white red-dotted ruffles. RED cow tail with small tuft behind. RED flat sandals with BLACK straps and small ankle cuffs with short broken chains, two natural separate feet fitted correctly. TWO hands securely cradle one small GREY STONE BABY STATUE wrapped in RED cloth, clearly carved stone not a living baby, no harm or water. Short round cute chibi, not tall curvaceous adult, no large chest emphasis.
```

### kutaka

原图：[assets/kutaka.png](assets/kutaka.png)；浏览图：[assets/kutaka.webp](assets/kutaka.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Kutaka Niwatari from Touhou, polite chicken goddess. Pale YELLOW shoulder-length slightly curly short hair, distinctive RED comb-like hair tuft at her front LEFT with a TINY YELLOW CHICK nestled in it. Gentle serious smile. WHITE short-sleeved blouse with yellow dashed edge trim and feather-like sleeve frills, YELLOW shoulder shawl with white stitch edge and RED neck bow like a rooster wattle. ORANGE knee skirt with a delicate WHITE circle/semicircle hem pattern. One pair small pale-yellow CHICKEN WINGS behind and pale-yellow tail feathers split in two bunches. BROWN mid-calf boots, both separate flat on ground. One hand open as polite checking/greeting gesture, other rests at waist. No staff, sword, feathered human legs or extra people.
```

### yachie

原图：[assets/yachie.png](assets/yachie.png)；浏览图：[assets/yachie.webp](assets/yachie.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Kicchou Yachie, smug composed smile. NECK-LENGTH golden BLUNT BOB haircut, red eyes, two branching golden deer antlers. Teal square-neck short-sleeve blouse with white collar and white front placket, navy bow and diagonal red frog closures. Dark green pleated knee skirt, white ankle socks, black Mary Jane shoes. Green turtle-shell back partly visible at side, ONE long green scaled dragon tail curled beside her, segmented white underside and leaflike tip. One hand poised at chest, other on hip. NO wings.
```

### mayumi

原图：[assets/mayumi.png](assets/mayumi.png)；浏览图：[assets/mayumi.webp](assets/mayumi.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Joutouguu Mayumi, loyal haniwa soldier with confident gentle smile. GOLD shoulder-short hair with TWO SMALL ROUND SIDE BUNS tied with upright white scarf ends, golden eyes. White short-sleeved blouse under golden ochre armor, red bow-shaped frog closures, tiny dancing-haniwa ornament at collar. BLUE rope waist belt and ochre armor fauld, loose pale knee-length trouser leg guards tied below knees. Purple forearm guards with red cords, dark blue ankle boots. Holds ONE small terracotta dancing haniwa figurine in right hand, other hand relaxed. Correct hands, no extra weapons.
```

### keiki

原图：[assets/keiki.png](assets/keiki.png)；浏览图：[assets/keiki.webp](assets/keiki.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Haniyasushin Keiki, smiling thoughtful sculptor goddess. AQUA blue-green chest-length loose hair under a DARK GREEN headscarf, pink eyes. YELLOW short-sleeved below-knee dress with orange spiral sleeve and hem patterns. Dark green WORK APRON with bright green pleated trim, BLUE square tool pockets. Multicolored MAGATAMA bead necklace. Blue cords around forearms and calves, black slippers with blue straps. Holds one small wooden sculpting tool and one simple caliper in separate natural hands; spare tools and tiny white flower in apron pockets. No animal ears or horns.
```

### saki

原图：[assets/saki.png](assets/saki.png)；浏览图：[assets/saki.webp](assets/saki.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Kurokoma Saki, upbeat strong black pegasus animal spirit. BLACK KNEE-LENGTH long PONYTAIL tied at back side, red eyes, dark brown COWBOY HAT. Green neck scarf. Short-sleeved KNEE-LENGTH dress with THREE color bands: blue fine-grid upper bodice, pink middle, brown dark-plaid bottom; blue and yellow zigzag boundary trims; modest front skirt split shows yellow underskirt. TWO BLACK FEATHER WINGS on back and ONE black horse tail, brown tall cowboy boots. One small fist on hip, other cheerful thumbs-up. No extra horse ears, no hooves, two human legs in boots.
```

### yuuma

原图：[assets/yuuma.png](assets/yuuma.png)；浏览图：[assets/yuuma.webp](assets/yuuma.webp)。

```text
Use case: illustration-story. SQUARE 1:1 standalone full-body Touhou CHIBI character, total height only 2.5 head lengths, huge ROUND head, tiny short torso and limbs. Warm IVORY textured paper background, delicate visible graphite and colored-pencil hatching, translucent muted watercolor, rosy cheeks, generous blank margins around entire character. Natural small hands, exactly two legs and anatomically correct separate feet or shoes. No text, logos, borders, watermark or extra people. Distinct researched hairstyle and outfit. Plain paper only, no scenic background. Soft traditional hand-drawn finish, no glossy digital rendering or tall adult anime proportions. Toutetsu Yuuma, cheeky confident smile, tiny serrated fang. Fluffy WHITE shoulder-length CURLY hair, TWO RED CURLING HORNS each with BLUE bow bearing a small white eye pattern. Red eyes with horizontal goatlike pupils, pointed ears with small GOLD hoop earrings. Blue sleeveless knee-length dress with white edging and white ruffled hem, TWO white EYE motifs on skirt, subtle taotie motif; large round SILVER collar clasp, two red horizontal frog fasteners on bodice. Short RED shoulder cape with white motif trim. White bloomers hidden under hem. BAREFOOT two separate natural human feet, five toes each. LEFT hand holds ONE large SILVER SPORK with blue decorated handle angled diagonally beside her, other hand on hip. No goat legs, no fur body.
```

### scene-sanzu-stones

原图：[assets/scene-sanzu-stones.png](assets/scene-sanzu-stones.png)；浏览图：[assets/scene-sanzu-stones.webp](assets/scene-sanzu-stones.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. A calm misty Sanzu riverbank at sunrise, smooth grey pebble beach, many small hand-stacked stone towers, reeds, driftwood, distant ferry silhouette and ripples with two ancient large fish visible beneath clear shallow water. Eika at LEFT: tan skin, cream-white chest wavy hair, pink eyes and long earlobes, white pink-bubble dress and pink ribbons, barefoot standing flat, carefully places ONE smooth stone on low stack using two natural hands. Urumi at RIGHT on dry riverbank: half black half white shoulder curls, two red cow horns and ears, yellow vest/shorts, cow-print white jacket, red sandals, holds grey STONE BABY statue wrapped red cloth in both arms. Full small figures, no walking action, correct two feet per person. Quiet imagined cross-stage encounter, friendly but not relatives. Background river and pebbles richly drawn.
```

### scene-spirit-checkpoint

原图：[assets/scene-spirit-checkpoint.png](assets/scene-spirit-checkpoint.png)；浏览图：[assets/scene-spirit-checkpoint.webp](assets/scene-spirit-checkpoint.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. An imagined otherworld BORDER CHECKPOINT beside a misty river terrace, weathered wooden gate, rope barrier, stone lanterns, red maple, layered clouds and silhouettes of distant cliffs; no written signs or torii shrine. Kutaka alone near foreground center-right, small ROUND CHIBI: short curly pale yellow hair, red chicken comb on HER front LEFT bearing tiny yellow chick, white feather-frill blouse with yellow shawl and red bow, orange knee skirt white circle hem patterns, brown mid-calf boots. Pair small pale yellow feather wings and yellow tail feathers. She stands firmly with exactly two boots on stone ground, holds one blank wooden pass in one small hand and politely raises other open palm to greet a visitor outside frame. Gate and river dominate, calm pale gold-violet light. This is her workplace checkpoint, NOT a cottage above a mountain waterfall.
```

### scene-haniwa-garden

原图：[assets/scene-haniwa-garden.png](assets/scene-haniwa-garden.png)；浏览图：[assets/scene-haniwa-garden.webp](assets/scene-haniwa-garden.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. An imagined Primate Spirit Garden sculptor courtyard in the Beast Realm: terracotta haniwa workshops and cylindrical clay towers, vine-shaded benches, fresh green garden paths, rows of SMALL hollow dancing haniwa figures, wet clay and wooden sculpting tools on a low table; distant geometric city dissolves into ochre haze. Keiki LEFT: aqua chest-length hair under dark green headscarf, yellow short-sleeved dress orange spiral hem, dark green apron blue tool pockets and green trim, magatama necklace, black slippers blue straps. She gently carves a small clay statue with ONE tool, two natural hands. Mayumi RIGHT: golden short hair TWO ROUND SIDE BUNS with upright white scarf ties, golden armor on white short-sleeved blouse, blue rope belt/armor fauld, purple armguards, dark blue boots, holds ONE terracotta dancing haniwa figure and stands attentive. Correct feet on ground, full small figures in bottom middle, no battle, no extra humans. Artifice and shelter coexist, quiet warm afternoon.
```

### scene-beast-overlook

原图：[assets/scene-beast-overlook.png](assets/scene-beast-overlook.png)；浏览图：[assets/scene-beast-overlook.webp](assets/scene-beast-overlook.webp)。

```text
Use case: illustration-story. Wide 16:9 high-detail Touhou storybook illustration on warm IVORY textured drawing paper. Fine graphite contours, visible colored-pencil hatching and translucent muted watercolor, soft airy values and atmospheric depth, not photographic, no glossy digital or 3D rendering. ROUND 2.5-head CHIBI figures with tiny short limbs, natural small hands and correct separate feet. Rich environment 65% of composition, no text, signs, labels, UI, watermark or borders. Invented arrangement inspired by canonical lore, not a map or reconstruction. An invented Beast Realm panorama at dusk: dense angular industrial towers and elevated paths fading into copper haze, jagged rocks, river channels, muted grass and a high broken stone terrace. THREE RIVAL leaders stand widely SEPARATED, each facing city in a different guarded stance, NOT a friendly gathering or tea party. LEFT Yachie: golden short BOB, branching golden deer antlers, teal blouse/navy bow, dark green pleated skirt, green turtle shell back and scaled dragon tail, black Mary Jane shoes. CENTER-BACK Saki: black long ponytail, brown cowboy hat and boots, green neck scarf, blue-pink-brown short sleeved dress, TWO black feather wings and black horse tail. RIGHT Yuuma: fluffy shoulder white curls, two red curled horns blue bows, red cape, blue knee dress white eye motifs, barefoot human feet planted flat, one large silver spork. Exactly two human legs each, natural grounded poses, city fills most scene, no combat or gore.
```
