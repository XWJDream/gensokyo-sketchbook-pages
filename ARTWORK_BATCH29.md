# 第二十九批：名字、见闻与梦

2026-11-02。采用 imagegen 内置模式生成三位新角色与三幅独立场景，另对 Reisen 首稿进行一次定向比例修订。最终六份 PNG 及 WebP 保存在 assets。各次实际输入最初灵梦、魔理沙，约束暖纸、细铅笔排线和柔和淡彩；人形约 2.5 头身、短腿小脚，动物保留各自非人形轮廓。没有使用 CLI/API 后备。

## 网上原作对照

- [Reisen 原作资料](https://thbwiki.cc/Reisen)：查看儚月抄黑白头像与人妖名鉴三人彩图。彩图仅用左侧月兔核对蓝色短发、深色制服、红领带、白裙和袜鞋；垂耳轮廓以漫画为准。不是永远亭的长紫发铃仙，铃仙二号只是社群别称。
- [万岁乐原漫画图索引](https://thbwiki.cc/碎片角色列表#万岁乐)、[茨歌仙第二十二话原作对话](https://thbwiki.cc/东方茨歌仙/第二十二话)：保留海豹头、双瓣口鼻、细长胡须、两前鳍和后部双鳍。灰蓝洗色是黑白原图之外的同人配色，怪鱼一词不改变物种造型。
- [大鲶鱼原图](https://thbwiki.cc/大鲶鱼)、[非想天则美铃路线原作对话](https://thbwiki.cc/游戏对话:东方非想天则/红美铃)、[黄昏边境作品官网](https://tasofro.net/touhou123/)：只绘游戏梦境形象，保留宽扁头、金褐斑纹与白腹、须鳍尾。原作对话里的梦、角色猜想与绯想天地底鲶鱼线索分别整理，不合并个体或巨大人偶。

原始参考下载只保存在忽略的 output/cast29-references，未作为本站插图直接发布。Reisen 生成输入首批两图、漫画头像与三人彩图，限定彩图只参考左侧人物；另两位输入首批两图和各自原图。场景输入首批两图和对应最终人物，没有直接输入原作背景或其他画师同人场景。

## 比例修订

Reisen 首稿腿部略长，未用作最终素材。一次内置编辑保留头发、垂耳、制服、脸和信封，修短腿部并压缩身躯，最终文件为 assets/reisen-moon.png。修订输入为首批两图与首稿，场景使用修订后的最终图。首稿保留在工具默认生成目录，未纳入公开原图清单。

## 场景边界

月庭木廊、石桥与信封外观是同人构图；画中圆月只作月主题意象，不是月都天体观测图。涧边地图入口仅关联原有玄武涧，不标定万岁乐固定住址。梦水与浮石不当作大鲶鱼真实地底栖居地或已发生的灾难。

## 下载来源

- [绵月丰姬&绵月依姬&铃仙二号（人妖名鉴）.jpg](https://upload.thbwiki.cc/c/cc/%E7%BB%B5%E6%9C%88%E4%B8%B0%E5%A7%AC%26%E7%BB%B5%E6%9C%88%E4%BE%9D%E5%A7%AC%26%E9%93%83%E4%BB%99%E4%BA%8C%E5%8F%B7%EF%BC%88%E4%BA%BA%E5%A6%96%E5%90%8D%E9%89%B4%EF%BC%89.jpg)
- [铃仙二号（儚月抄）.jpg](https://upload.thbwiki.cc/a/a6/%E9%93%83%E4%BB%99%E4%BA%8C%E5%8F%B7%EF%BC%88%E5%84%9A%E6%9C%88%E6%8A%84%EF%BC%89.jpg)
- [大鲶鱼（非想天则立绘）.png](https://upload.thbwiki.cc/2/29/%E5%A4%A7%E9%B2%B6%E9%B1%BC%EF%BC%88%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [万岁乐（茨歌仙）.jpg](https://upload.thbwiki.cc/4/49/%E4%B8%87%E5%B2%81%E4%B9%90%EF%BC%88%E8%8C%A8%E6%AD%8C%E4%BB%99%EF%BC%89.jpg)

## 最终素材与实际提示词

### reisen-moon（首稿，最终经下述比例修订）

[最终 PNG](assets/reisen-moon.png) · [WebP 预览](assets/reisen-moon.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast29-references/铃仙二号（儚月抄）.jpg；output/cast29-references/绵月丰姬&绵月依姬&铃仙二号（人妖名鉴）.jpg。

```text
Use case: illustration-story. Asset: ONE square character portrait for existing Gensokyo sketchbook website. Input images1–2 are STRICT original STYLE/PROPORTION references: warm textured ivory paper, fine graphite contours with delicate visible colored-pencil hatching, soft translucent watercolor, charming rounded big heads and exceptionally SHORT torsos and legs, about 2.5 heads tall for humanoids. Copy medium and proportions, NOT their hair, costumes, identities, bows or props. Other inputs are original character design references, NOT style references. One entire isolated subject centered with paper margins, faint pencilled contact shadow, no scenery, writing, labels, frame, watermark or GUI. No tall anime anatomy, CGI or glossy digital shading. Subject REISEN (レイセン), the BLUE SHORT-HAIRED moon rabbit from Silent Sinner in Blue, NOT Reisen Udongein Inaba. Image3 original monochrome manga head is for short bob silhouette and drooping WHITE rabbit ears. Image4 original color group: ONLY the small blue-haired rabbit on the FAR LEFT is this subject; use her palette and uniform only, do not include the other two women or their hats. Sunny sky/steel BLUE bob ending at neck, a few outward tips, side parted bangs, pinkish wine-red/purple eyes. TWO long soft WHITE rabbit ears bend and hang to either side, NO ear labels or patches and no hair bows. White collared shirt, thin red tie, dark navy-black school-uniform jacket with two GOLD front buttons and small gold cuff buttons, short WHITE pleated skirt, opaque dark over-knee socks on VERY SHORT legs, simple tiny brown flat shoes. Sweet slightly shy expression, two tiny hands gently hold one small plain sealed cream letter below chest, no readable marks. Letter is a fan-composed reference to her message mission, not an exact canonical letter replica. Full-body compact 2.5-heads silhouette excluding ear extensions, big face and tiny torso. Do not turn into the familiar lavender LONG-HAIRED rabbit, do not add moon-princess dress or hats.
```

### manzairaku

[最终 PNG](assets/manzairaku.png) · [WebP 预览](assets/manzairaku.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast29-references/万岁乐（茨歌仙）.jpg。

```text
Use case: illustration-story. Asset: ONE square character portrait for existing Gensokyo sketchbook website. Input images1–2 are STRICT original STYLE/PROPORTION references: warm textured ivory paper, fine graphite contours with delicate visible colored-pencil hatching, soft translucent watercolor, charming rounded big heads and exceptionally SHORT torsos and legs, about 2.5 heads tall for humanoids. Copy medium and proportions, NOT their hair, costumes, identities, bows or props. Other inputs are original character design references, NOT style references. One entire isolated subject centered with paper margins, faint pencilled contact shadow, no scenery, writing, labels, frame, watermark or GUI. No tall anime anatomy, CGI or glossy digital shading. Subject MANZAIRAKU the SEAL from Wild and Horned Hermit. Image3 is original black-and-white manga design: keep rounded pear-like SEAL head blending into smooth plump tapering body, small black round eyes with little brows, small triangular black nose, two pale muzzle lobes with several long fine whiskers, gently curved tiny mouth, TWO short FORE FLIPPERS and TWO rear hind-flipper lobes at the trailing end. Three-quarter view resting, head lifted on left, compact body tapering right, like the original. Make head a little larger and body rounder to match the first illustrations' chibi warmth while preserving natural SEAL anatomy. No human, no sea lion external ears, no otter hands, no walking dog legs, no fish scales, no fish tail, no clothing or accessories. Original is monochrome: restrained soft warm gray/pale bluish-gray wash with cream muzzle is interpretive coloring, not claiming official palette. No spotted pattern absent from source. Entire seal and all flipper outlines comfortably in frame, touching tiny pencil shadow, not floating.
```

### oonamazu

[最终 PNG](assets/oonamazu.png) · [WebP 预览](assets/oonamazu.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast29-references/大鲶鱼（非想天则立绘）.png。

```text
Use case: illustration-story. Asset: ONE square character portrait for existing Gensokyo sketchbook website. Input images1–2 are STRICT original STYLE/PROPORTION references: warm textured ivory paper, fine graphite contours with delicate visible colored-pencil hatching, soft translucent watercolor, charming rounded big heads and exceptionally SHORT torsos and legs, about 2.5 heads tall for humanoids. Copy medium and proportions, NOT their hair, costumes, identities, bows or props. Other inputs are original character design references, NOT style references. One entire isolated subject centered with paper margins, faint pencilled contact shadow, no scenery, writing, labels, frame, watermark or GUI. No tall anime anatomy, CGI or glossy digital shading. Subject OO-NAMAZU the DREAM CATFISH from Hisoutensoku original sprite image3. Faithfully preserve NONHUMAN fish silhouette: extremely broad flattened rounded head merging into stout fat fish body, golden ochre/oil-yellow brown upper body with irregular darker brown mottled spots, creamy white belly, heavy half-lidded small eyes, huge wide CLOSED curved dark mouth line, long curled barbels at both mouth corners, a few small pale underside barbels visible in original, a small gray triangular dorsal fin, short pale pectoral fins and one brown fish tail behind. Three-quarter front-side view, tail left, face right, whole fish floats a tiny amount above pencil shadow. Cute mysterious knowing expression, not horror, no human face, no human body/legs/hands, no clothing, hat, beard replacing barbels, realistic wet slime or CGI. Follow first images only for delicate hand-drawn pencil-watercolor rendering and cream paper, NOT humanoid head/body ratio. Keep him squat and rounded, not long snake, shark or giant koi. No extra fish, no destruction, buildings, quake cracks, people, bubbles with text or large teeth.
```

### scene-reisen-moonletter

[最终 PNG](assets/scene-reisen-moonletter.png) · [WebP 预览](assets/scene-reisen-moonletter.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/reisen-moon.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape for Gensokyo sketchbook. Images1–2 are strict original STYLE REFERENCES: fine warm graphite and colored-pencil hatching, delicate translucent watercolor on textured ivory paper, small feathered margins, soft light, huge round heads and exceptionally SHORT bodies/legs for humanoids. Image3 is the FINAL approved subject portrait, preserve exactly its identity and proportions, do not elongate any body or invent humanoid limbs for animals. ONE complete subject in a rich quiet environment with depth. No typography, letters, signage, captions, GUI, watermark, photorealism, 3D or glossy effects. Blue SHORT bob-haired Reisen (レイセン) the separate moon-rabbit, not long-haired Udongein, stands foreground left at an imagined peaceful moonlit courtyard wooden veranda. Preserve portrait3 exactly: BIG round head, two long drooping white rabbit ears, pink-purple eyes, tiny SHORT torso, navy-black uniform jacket with gold buttons, white shirt and red tie, short white pleated skirt, VERY SHORT dark socked calves immediately under the knees, tiny brown shoes. Both tiny hands hold one small sealed cream envelope with no markings at chest, shy curious expression. Whole silhouette only 2.3–2.5 heads tall excluding ears; head almost as tall as torso plus legs, no long thighs or calves. Pale stones, soft silver-blue moonlight and warm lamp under veranda eaves, quiet garden grasses, flowering white branches and distant soft cloudlit horizon. Entire character and both tiny grounded feet visible. Architecture and envelope are original fan design, not a specific canonical palace or exact letter. No other rabbits, women, princess hats, Earth city skyline, astronaut gear or weapons.
```

### scene-manzairaku-ravine

[最终 PNG](assets/scene-manzairaku-ravine.png) · [WebP 预览](assets/scene-manzairaku-ravine.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/manzairaku.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape for Gensokyo sketchbook. Images1–2 are strict original STYLE REFERENCES: fine warm graphite and colored-pencil hatching, delicate translucent watercolor on textured ivory paper, small feathered margins, soft light, huge round heads and exceptionally SHORT bodies/legs for humanoids. Image3 is the FINAL approved subject portrait, preserve exactly its identity and proportions, do not elongate any body or invent humanoid limbs for animals. ONE complete subject in a rich quiet environment with depth. No typography, letters, signage, captions, GUI, watermark, photorealism, 3D or glossy effects. Manzairaku the gray SEAL from portrait3 rests on a broad moss-edged flat stone beside an imagined Genbu ravine stream. Exact seal identity, round large head, small black eyes, tiny brows, pale two-lobed whiskered muzzle, smooth plump short gray/pale-blue-gray body, TWO fore flippers and TWO hind-flipper lobes together behind tapered rear. No external ears, no land legs or otter paws, no fish scales or fish tail, no human clothing. Whole compact seal clearly visible foreground right, cheek pleasantly curious. Clear shallow stream with gentle ripples, rounded rocks, a small weathered wooden footbridge beyond, fern leaves, reeds, a few wildflowers and dappled warm morning light through leafy trees, distant misty hill. No stage, circus, spectators, captive enclosure, other creatures or ball on nose. Quiet independent fan-imagined rest, not exact manga panel or fixed home location. Be careful not to create extra flippers or let rocks merge into anatomy.
```

### scene-oonamazu-dreamwater

[最终 PNG](assets/scene-oonamazu-dreamwater.png) · [WebP 预览](assets/scene-oonamazu-dreamwater.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/oonamazu.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape for Gensokyo sketchbook. Images1–2 are strict original STYLE REFERENCES: fine warm graphite and colored-pencil hatching, delicate translucent watercolor on textured ivory paper, small feathered margins, soft light, huge round heads and exceptionally SHORT bodies/legs for humanoids. Image3 is the FINAL approved subject portrait, preserve exactly its identity and proportions, do not elongate any body or invent humanoid limbs for animals. ONE complete subject in a rich quiet environment with depth. No typography, letters, signage, captions, GUI, watermark, photorealism, 3D or glossy effects. Oo-Namazu the dream CATFISH from portrait3 floats gently just above still dream-water. Preserve wide flattened head and short fat entire fish body, GOLD OCHRE/BROWN mottled upper surface, creamy white underside, small HALF-LIDDED eyes, broad curved closed mouth, long curled barbels at both corners, little pale underside barbels, short pectoral fins, gray triangular dorsal fin and brown tail behind to left. No human features, no hat, no legs or hands, not koi or shark, no extra fins or duplicated face. Entire fish in foreground center-left, eye expression gently knowing rather than threatening. Imagined serene liminal dreamscape: watercolor floating pale stone shelves, tiny moss patches, softly dissolving blue-violet cloudbanks, a calm reflective surface with gold glints and subtle circular ripples, warm ivory sky edges. NO destruction, broken buildings, earthquake damage, people, lightning, battles or text. Reflections should be soft abstract color, not additional whole fish. This dream illustration is not the real underground catfish's habitat or a recreated battle stage.
```

### Reisen 定向比例修订

输入：首批灵梦、魔理沙、Reisen 首稿。最终输出复制为 assets/reisen-moon.png。

```text
Use case: precise-object-edit. Input1 and Input2 are strict first Reimu/Marisa STYLE AND CHIBI PROPORTION references. Input3 is the EDIT TARGET: current blue-haired Reisen moon-rabbit illustration. Keep exactly her blue short bob, TWO drooping white rabbit ears, big purple-pink eyes, shy face, navy uniform, white collar, red tie, white pleated skirt, dark socks, brown shoes, sealed plain letter, two small hands, warm ivory paper and delicate pencil watercolor. Change ONLY proportion: her legs in input3 are too long. Shorten BOTH lower legs by about 45 percent, shorten torso slightly, and enlarge rounded head slightly so body is a truly compact 2.3–2.5-head-tall chibi excluding rabbit ears. Skirt almost meets the tiny knees, short socked calves and tiny shoes immediately underneath, as short-legged as first Reimu/Marisa. Keep whole figure, two feet grounded naturally, modest opaque outfit and no extra body parts. Do not turn her into tall anime teenager, do not change pose or add anything. Retain roomy ivory margins, no text/watermark.
```

## 内容接入

本批后共 169 位人物、82 幅场景、21 页手帖、39 个作品入口（29 部游戏、8 部书籍、2 部音乐）、132 组关系、56 个词条与 11 条主题路线。新增奇异身影主题筛选，作为画册目录而非种族名；非想天则作品入口及新路线只给有原作依据的梦中对决附曲目。搜索、收藏、原图和场景入口沿用现有功能。

## 校验记录

2026-11-02：数据唯一性、全部人物/场景/地点/作品关联、原图存在性及构建通过。现有目录、布局、场景、主题路线回归检查及本批新增路线检查均通过；新分类为两位，月系十位，别名“铃仙二号”在全册搜索中只返回 Reisen。

真实浏览器检查：本次三张人物预览完整加载；Reisen 详情的全名、资料入口与场景入口正常；360×800 手机下无页面横向溢出，双列卡片与长姓名换行正常。新增九步路线、海豹场景原图、玄武涧地图关联、第二十一页手帖均正常，未发现页面控制台错误。Reisen 首稿腿部偏长，已定向修订，场景使用修订后的短腿版本。原作仅提供黑白资料的海豹保留同人配色说明；所有新场景明确为意象绘制。

