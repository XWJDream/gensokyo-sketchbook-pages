# 第二十五批：四季、石心与蜃

2026-10-30。使用 imagegen 内置模式生成三张人物与三张场景，贝子人物另做一次坐姿比例修订。最终 PNG 与 WebP 均保存在 assets。各图实际输入最初的灵梦、魔理沙，以约 2.5—3 头身、大头短身与铅笔淡彩约束比例及媒材；不照搬原作长腿。

## 网上原作对照

- [锦上京原作完整立绘索引](https://thbwiki.cc/东方锦上京/角色立绘)
- [原作附带设定](https://thbwiki.cc/附带文档:东方锦上京/Omake)：本册仅概述，不转载全文。
- [维缦·浅间](https://thbwiki.cc/维缦·浅间)、[磐永阿梨夜](https://thbwiki.cc/磐永阿梨夜)、[渡里贝子](https://thbwiki.cc/渡里贝子)：原作图像与设定摘录的查看入口。
- [浅间净秽山](https://thbwiki.cc/浅间净秽山)：四季竖穴场景与古老神社、设施的不同历史层次。

| 人物 | 原图核对点 | 绘制处理 |
|---|---|---|
| 维缦·浅间 | 白色长发、红瞳、黑色无袖上衣、深蓝裙、金纹蓝白蛇形布带、碎布与赤足 | 不添冠帽；布带弧线不计为头身高度，小纹样做铅笔化简 |
| 磐永阿梨夜 | 棕色齐颈短发、自身左侧旋纹半面石饰、白衣金纹、灰色石柱裙、化石架与青蓝眼纹披布、赤足 | 不改成长发或整脸面具；化石框架作为装饰，无身体伤口；保留小脚自然落地 |
| 渡里贝子 | 芥末黄长卷发、螺旋侧发、三个黑圈松束、小贝饰、渐彩褶边白衣、大半贝壳与赤足 | 不换成普通金发辫；坐姿另收短躯干与双腿，两腿各自连贯，贝壳不计人体头身 |

所有原作参考均先下载、查看，再作为对应人物生成的第三张实际输入。场景继续输入两张首批风格参考与对应最终人物图。维缦场景另实际输入原作四季竖穴背景，只取蓝色氛围与多色交叉线条；旧祠与化石林场景未输入游戏背景，不声称复原关卡。参考图保存在忽略的 output/cast25-references，不作为本站自绘作品发布。

## 内容边界

扩展锦上京为两位主角与七位 Boss 的九人阅读索引，丰姬与主角图卡沿用原有通行形象。补充丰姬的锦上京简介与新人物入口。新路线第九条区分第四至第六关与 Extra；第十七页手帖保留设施管理人与古老祭神的不同视角，不把不同结局拼成唯一时间线。人物的说法与故事确认的事实分开，海市蜃楼不是幻想乡实际新建的现代城市。建筑、石台、四季并置、休息动作与城市轮廓均为同人意象。

## 实际原图来源

- [维缦·浅间](https://upload.thbwiki.cc/d/d0/%E7%BB%B4%E7%BC%A6%C2%B7%E6%B5%85%E9%97%B4%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [磐永阿梨夜](https://upload.thbwiki.cc/6/6c/%E7%A3%90%E6%B0%B8%E9%98%BF%E6%A2%A8%E5%A4%9C%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [渡里贝子](https://upload.thbwiki.cc/5/5c/%E6%B8%A1%E9%87%8C%E8%B4%9D%E5%AD%90%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [四季竖穴（锦上京四面场景）.jpg](https://upload.thbwiki.cc/e/e0/%E5%9B%9B%E5%AD%A3%E7%AB%96%E7%A9%B4%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E5%9B%9B%E9%9D%A2%E5%9C%BA%E6%99%AF%EF%BC%89.jpg)

## 最终文件与实际提示词

### yuiman

[PNG 原图](assets/yuiman.png) · [WebP 预览](assets/yuiman.webp)

实际输入：首批灵梦、魔理沙和对应原作完整立绘。贝子最终使用下文比例修订输出。

```text
Use case: illustration-story. Asset type: independent character portrait for the existing Gensokyo sketchbook. Input image 1 Reimu and image 2 Marisa are STRICT references for the ORIGINAL book's cute proportions and traditional medium, not costume references. Image 3 is this subject's original TH20 full-body design: take only her own identifying hairstyle, costume, objects and colors from it; NEVER copy its tall body proportions. Create ONE full body character on softly textured warm cream paper, no frame, text, logo or watermark. Delicate hand-drawn dark-brown graphite contours, visible fine pencil hatching and warm translucent colored pencil/watercolor, expressive face, blush, simple pencilled grounding shadow. Important proportions: compact 2.4–2.7-head-tall chibi like images 1–2, very large round head about 40–42% of main figure height (excluding accessories), tiny torso and SHORT tiny legs, not a tall anime figure. Natural two arms/two small hands/two short legs/two tiny feet, never duplicate legs or merge them. No photoreal skin, 3D, vector sheen, hard cel shading, doll render, painterly long-body fantasy portrait, or a character sheet. Preserve subject-specific hair silhouette; no generic twin braids. Square canvas, entire silhouette including accessories visible with a comfortable cream margin. Subject: Yuiman Asama (ユイマン・浅間 / 维缦·浅间). Long clean white hair reaching her low back, long parted pointed fringe; NO crown, hat, ears or horns, red eyes. Black sleeveless top and compact dark navy short skirt, barefoot. A single wide blue-gray cloth with white dashed borders and small gold geometric symbols winds diagonally over shoulder and torso and around waist; lower cloth fades to cream white and a stylized tiny snake head. It loops up into one loose open arch above her, attached to a few scattered blue bird-shaped and golden human-shaped cloth fragments at the skirt side exactly as the design reference. Pattern may be simplified into pencil marks, NO lettering. Retain a simple gold outlined eye motif on upper sash. Chibi figure stands with BOTH little feet naturally on the same ground, separated and forward; one hand resting near waist, other lightly showing the fluttering patterned cloth, cheerful curious smile. Main body from white hair top to soles is 2.5 heads tall; the cloth arch is an accessory only and must not stretch the body. Kind playful expression matching first two refs, NOT ominous.
```

### ariya

[PNG 原图](assets/ariya.png) · [WebP 预览](assets/ariya.webp)

实际输入：首批灵梦、魔理沙和对应原作完整立绘。贝子最终使用下文比例修订输出。

```text
Use case: illustration-story. Asset type: independent character portrait for the existing Gensokyo sketchbook. Input image 1 Reimu and image 2 Marisa are STRICT references for the ORIGINAL book's cute proportions and traditional medium, not costume references. Image 3 is this subject's original TH20 full-body design: take only her own identifying hairstyle, costume, objects and colors from it; NEVER copy its tall body proportions. Create ONE full body character on softly textured warm cream paper, no frame, text, logo or watermark. Delicate hand-drawn dark-brown graphite contours, visible fine pencil hatching and warm translucent colored pencil/watercolor, expressive face, blush, simple pencilled grounding shadow. Important proportions: compact 2.4–2.7-head-tall chibi like images 1–2, very large round head about 40–42% of main figure height (excluding accessories), tiny torso and SHORT tiny legs, not a tall anime figure. Natural two arms/two small hands/two short legs/two tiny feet, never duplicate legs or merge them. No photoreal skin, 3D, vector sheen, hard cel shading, doll render, painterly long-body fantasy portrait, or a character sheet. Preserve subject-specific hair silhouette; no generic twin braids. Square canvas, entire silhouette including accessories visible with a comfortable cream margin. Subject: Iwanaga Ariya (磐永 阿梨夜 / 磐永阿梨夜). Short neck-length asymmetrical taupe/brown bob, long slanting fringe, red eyes. Her OWN left half-face (VIEWER RIGHT) is partly covered by a small brown/gold stone mask with a clear spiral above the eye; her left little hand lightly touches that mask. Keep the other half of her smiling face visible. White high-coverage long-sleeve compact buttoned dress with small antique gold spine-like appliques; tightly arranged dark charcoal basalt crystal columns around the short lower skirt. Two tiny bare feet grounded apart. Behind her is an ornamental gold fossil/bone framework, NOT exposed body or gore: on her OWN left / viewer right a fan of golden ribs around a soft orange-red flame; on the other side a fossil-wing support holding dark teal cloth with muted pale eye/triangle markings. One golden spine-like tail curves beside the skirt. Keep this wide silhouette but compact short body at 2.5 heads tall, long sleeves ending in tiny hands; one hand showing a friendly open palm, the other touching mask. Fossil apparatus and flame must read as decorative magical objects attached behind, never an extra arm/wing of feathers, never a broken or wounded body. No crown or long hair.
```

### nina

[PNG 原图](assets/nina.png) · [WebP 预览](assets/nina.webp)

实际输入：首批灵梦、魔理沙和对应原作完整立绘。贝子最终使用下文比例修订输出。

```text
Use case: illustration-story. Asset type: independent character portrait for the existing Gensokyo sketchbook. Input image 1 Reimu and image 2 Marisa are STRICT references for the ORIGINAL book's cute proportions and traditional medium, not costume references. Image 3 is this subject's original TH20 full-body design: take only her own identifying hairstyle, costume, objects and colors from it; NEVER copy its tall body proportions. Create ONE full body character on softly textured warm cream paper, no frame, text, logo or watermark. Delicate hand-drawn dark-brown graphite contours, visible fine pencil hatching and warm translucent colored pencil/watercolor, expressive face, blush, simple pencilled grounding shadow. Important proportions: compact 2.4–2.7-head-tall chibi like images 1–2, very large round head about 40–42% of main figure height (excluding accessories), tiny torso and SHORT tiny legs, not a tall anime figure. Natural two arms/two small hands/two short legs/two tiny feet, never duplicate legs or merge them. No photoreal skin, 3D, vector sheen, hard cel shading, doll render, painterly long-body fantasy portrait, or a character sheet. Preserve subject-specific hair silhouette; no generic twin braids. Square canvas, entire silhouette including accessories visible with a comfortable cream margin. Subject: Watari Nina (渡里 ニナ / 渡里贝子). Mustard yellow-green long wavy hair past waist, a distinct curled spiral lock at her OWN right / viewer left and a loose low bundle held by THREE small black hair rings at her own left/viewer right. Black headband with a small white scallop ornament on her left/viewer right. Dark golden yellow eyes. Loose modest opaque white short-sleeved wrap tunic with black bands at upper arms and waist. Tiny frilled edges fade from violet at neckline through pink and yellow to blue at the bottom. Her two small bare feet and bent legs are simple and clearly separate. Pose seated sideways comfortably on ONE large open half-shell, white pearl inner face and brown outer rim, both knees and feet readable; the two legs originate naturally from the tunic's lower hem, no hidden extra limb. Compact 2.5-head-tall figure if straightened, enormous cute head and short rounded limbs, not adult proportions. Cheerful amazed smile with one little hand waving gently, other rests on shell edge. Behind shell a few faint blue-violet mirage silhouettes of a tower and small buildings dissolve softly into paper; not a real city or hard black shapes, not extra people. Entire shell and hair visible; preserve cream blank space, no elaborate background.
```

### scene-yuiman-seasons

[PNG 原图](assets/scene-yuiman-seasons.png) · [WebP 预览](assets/scene-yuiman-seasons.webp)

实际输入：首批灵梦、魔理沙和对应最终人物图；维缦场景另输入原作四季竖穴背景。

```text
Use case: illustration-story. Asset type: wide independent landscape illustration for Gensokyo sketchbook, 3:2 landscape. First two reference images Reimu/Marisa set fine graphite and soft colored-pencil/watercolor medium AND compact big-head short-body proportions. Image 3 is the final approved subject portrait; keep her exact silhouette and costume identity, 2.5-head body ratio, no anatomical stretching. Quiet detailed environment, beautifully delicate warm pencil hatching, subtle translucent washes and cream textured paper, irregular feathered paper margins. One subject only, roughly 25–30% image height, expressive cute face and SHORT tiny limbs, naturally connected hands and feet. No words, calligraphy, captions, watermark, frame, UI, realistic humans or photorealism. This is an imagined everyday landscape, not a battle, game screenshot or authoritative map. Subject Yuiman Asama from image3: long white hair, red eyes, black sleeveless top, compact navy skirt, blue/cream/gold patterned cloth looping above and flowing into tiny blue bird/gold person cloth pieces and one snake head; no added headdress. Stand at a worn stone overlook within a vast underground garden shaft, BOTH little bare feet separate and firmly grounded. One hand gently indicates the scenery. Image4 is the actual TH20 Four Seasons Shaft background: use its blue atmospheric ceiling and crossing warm/cool colored bands only as subtle light/pattern inspiration, NOT copy its low-resolution geometric rendering. Invent a lyrical interior garden: moss terraces lead to pale blooming spring twigs, fresh green leaves, amber maple and a distant dusting of snow, softly intermingled in DEPTH, not 4 panels. Old arched stone rim, small ferns and scattered pebbles, shaft of natural pale blue light falling from above. Small soft crystalline lines in distance echo original abstract geometry; no hightech computers/real cities. Main character remains short-bodied from approvedportrait, cloth loop is an accessory not height of torso. Warm intimate foreground, wide airy seasonal distance.
```

### scene-ariya-stillshrine

[PNG 原图](assets/scene-ariya-stillshrine.png) · [WebP 预览](assets/scene-ariya-stillshrine.webp)

实际输入：首批灵梦、魔理沙和对应最终人物图；维缦场景另输入原作四季竖穴背景。

```text
Use case: illustration-story. Asset type: wide independent landscape illustration for Gensokyo sketchbook, 3:2 landscape. First two reference images Reimu/Marisa set fine graphite and soft colored-pencil/watercolor medium AND compact big-head short-body proportions. Image 3 is the final approved subject portrait; keep her exact silhouette and costume identity, 2.5-head body ratio, no anatomical stretching. Quiet detailed environment, beautifully delicate warm pencil hatching, subtle translucent washes and cream textured paper, irregular feathered paper margins. One subject only, roughly 25–30% image height, expressive cute face and SHORT tiny limbs, naturally connected hands and feet. No words, calligraphy, captions, watermark, frame, UI, realistic humans or photorealism. This is an imagined everyday landscape, not a battle, game screenshot or authoritative map. Subject Ariya from image3: short asymmetrical taupe brown bob, spiral stone half-mask on her OWN left / viewer right of face, white long sleeves with gold spine motifs, short dark basalt column skirt, two tiny bare feet grounded. Keep antique-gold decorative fossil ribs with a small warm red-orange flame on viewer right, dark teal eye-pattern cloth on viewer left, curved small fossil spine below. No anatomical wounds, exposed ribs, extra hands, feather wings or long hair. Place her slightly left of center in front of an imagined ancient small wooden shrine nestled inside a deep stone cavern, low basalt steps and moss, a modest empty offering platform, pale hanging cloth, weathered pillars. No text/signs on shrine, no dramatic skulls. She lightly touches mask with one hand and holds other hand open; no new prop. A quiet broken shaft of blue daylight and the decorative flame gently warm the stones. Tiny pale flowers, damp ferns, a still puddle reflecting gold and teal. The entire shrine architecture and rest moment are fan imagining from the source's shrine history, not a particular ending. Character's face large and body compact like first refs.
```

### scene-nina-mirage

[PNG 原图](assets/scene-nina-mirage.png) · [WebP 预览](assets/scene-nina-mirage.webp)

实际输入：首批灵梦、魔理沙和对应最终人物图；维缦场景另输入原作四季竖穴背景。

```text
Use case: illustration-story. Asset type: wide independent landscape illustration for Gensokyo sketchbook, 3:2 landscape. First two reference images Reimu/Marisa set fine graphite and soft colored-pencil/watercolor medium AND compact big-head short-body proportions. Image 3 is the final approved subject portrait; keep her exact silhouette and costume identity, 2.5-head body ratio, no anatomical stretching. Quiet detailed environment, beautifully delicate warm pencil hatching, subtle translucent washes and cream textured paper, irregular feathered paper margins. One subject only, roughly 25–30% image height, expressive cute face and SHORT tiny limbs, naturally connected hands and feet. No words, calligraphy, captions, watermark, frame, UI, realistic humans or photorealism. This is an imagined everyday landscape, not a battle, game screenshot or authoritative map. Subject Nina from image3 unchanged mustard yellow-green long curls, curled side lock, three black hair rings, black headband/scallop ornament, golden eyes, opaque loose white wrap tunic with rainbow-tinted tiny frills and black bands. Seated comfortably on one huge white-inner/brown-outer half clam shell that rests beside pale fossilized tree trunks at the edge of a still shallow blue-violet pool. Exactly two SHORT naturally bent legs and two tiny bare feet visible and separated, no additional toes/limbs; cute compact body proportions of reference3. One little hand waves toward a faint magical mirage over the pool, other rests on shell. Right half of landscape shows a translucent city outline with several pale blue-lilac towers dissolving into mist, clearly an optical fantasy NOT physical skyscrapers erected in forest. Soft ancient wood-grain fossils, chalky rock, water ripples, a few grass tufts and tiny warm reflection points. Muted pearl cream, blue-violet and mustard palette, airy evening light, intimate calm environment. No other people, no new costume, do not lengthen her seated legs to adult size.
```

## 贝子坐姿比例修订

实际输入：贝子初稿、首批灵梦、首批魔理沙。只收短躯干、腿与小脚，保留发型、衣饰、两腿连接与贝壳。

```text
Use case: identity-preserve. Image 1 is the edit target, Nina seated on shell. Images 2 and 3 are the ORIGINAL first Reimu/Marisa proportion and pencil/watercolor references. Correct ONLY the seated character's body proportions: make the torso about 15% shorter and the visible legs and feet about 30–35% shorter/smaller, compact cute 2.5-head-tall anatomy if she stood up, with an oversized head like images 2–3. Bring knees closer to hips, feet closer to shell rim, preserve exactly TWO clearly separate naturally bent legs and TWO tiny bare feet. Preserve her entire mustard-yellow wavy long hair, spiral sidelock, three black hair rings, black headband with white scallop ornament, golden eyes, cheerful face, opaque white short-sleeve wrap tunic with black bands and violet/pink/yellow/blue frills, waving hand and hand resting on shell. Keep the large pearly half-shell and faint city mirage. Do not stretch shell, change pose direction, add limbs, turn legs into long adult proportions, add shoes, crop ornaments, recolor or change background/medium. Fine graphite/colored-pencil on cream paper, original hand-made texture, no text.
```
