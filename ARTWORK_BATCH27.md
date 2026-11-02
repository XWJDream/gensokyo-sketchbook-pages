# 第二十七批：门前与旧日飞行

2026-11-02。使用 imagegen 内置模式绘制神玉第二形态、幽幻魔眼、玄爷与三幅独立场景。六份最终 PNG 与 WebP 保存在 assets；每次实际输入首批灵梦、魔理沙两张风格参考，不使用 CLI 或另外的模型接口。本批无图像修订。

## 网上原作对照

- [神玉](https://thbwiki.cc/神玉)：下载查看三个游戏形态，选用第二形态的红发双角、深蓝宽袖与红白长袍。三个形态属于同一人物，不推断亲缘或原理。
- [幽幻魔眼](https://thbwiki.cc/幽幻魔眼)：查看游戏原图，按五个眼盘、金色轮缘、白眼红虹膜、黄色连接光绘制；不改为人形。关卡与共用曲目用于阅读导航，不推断种族。
- [玄爷原作头像](https://thbwiki.cc/玄爷)与[封魔录 Manual](https://thbwiki.cc/附带文档:东方封魔录/Manual)：放大像素头像核对白眉长须、灰紫额顶与橄榄配色；龟甲纹理和完整四肢属于头像之外的同人延展。能飞及陪伴灵梦的背景来自文档，现代具体住处未确认。

人物图实际输入首批两图与各自原作图，未输入放大检查副本。场景实际输入首批两图与相应最终人物图，没有输入其他画师作品或游戏背景。神玉的人形保持约 2.5–3 头身；非人形保留五眼阵与老龟结构，用相同纸色、细铅笔排线与柔和淡彩统一画面。没有强行给非人形主体添人类身体。

原作参考下载仅留在忽略的 output/cast27-references，不作为本册插图公开。新画门廊、山路、溪桥与停留动作均明确标为同人场景，不提供原作地理坐标。五眼场景将红蓝原色收敛为赭红植物与浅蓝紫远山，并非逐像素背景复原。

## 下载来源

- [神玉（灵异传立绘）.png](https://upload.thbwiki.cc/8/8b/%E7%A5%9E%E7%8E%89%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [神玉2（灵异传立绘）.png](https://upload.thbwiki.cc/1/1d/%E7%A5%9E%E7%8E%892%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [神玉3（灵异传立绘）.png](https://upload.thbwiki.cc/e/e5/%E7%A5%9E%E7%8E%893%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [幽幻魔眼（灵异传立绘）.png](https://upload.thbwiki.cc/6/65/%E5%B9%BD%E5%B9%BB%E9%AD%94%E7%9C%BC%EF%BC%88%E7%81%B5%E5%BC%82%E4%BC%A0%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [玄爷（封魔录立绘）.png](https://upload.thbwiki.cc/9/90/%E7%8E%84%E7%88%B7%EF%BC%88%E5%B0%81%E9%AD%94%E5%BD%95%E7%AB%8B%E7%BB%98%EF%BC%89.png)

## 最终文件与完整实际提示词

### singyoku

[PNG 原图](assets/singyoku.png) · [WebP 预览](assets/singyoku.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast27-references/神玉2（灵异传立绘）.png。

```text
Use case: illustration-story. Asset: one square character portrait for an existing Touhou watercolor sketchbook website. Images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY: use their fine warm graphite contours, visible colored-pencil hatching, translucent soft watercolor, warm ivory paper, lively delicate expression and compact chibi proportions. Do not copy their clothes, hairstyles, props or identities. Plain warm ivory paper background with a tiny pencil contact shadow, no scenery, no text, no frame, no watermark, full silhouette comfortably inset. Image 3 is the original PC-98 design reference of SinGyoku FEMALE SECOND FORM only. Translate that pixel silhouette faithfully into the same cute pencil-watercolor style as images 1–2, about 2.5 heads tall, oversized round head and extremely short body. Long vivid red hair with heavy red bangs, two short curled brown horns on either side, dark navy collar and broad navy sleeves with white small hands, red bow-like chest shapes, long red robe with irregular white patches (not shrine-maiden frills). Both hands held gently apart as in original. Red robe covers feet completely; do not add visible human feet where the source shows none. Render one character only, calm small smile. No extra hats, no wings, no yin-yang orb, no male form, no witch props. Retain the original red/navy/white palette; carefully distinguish the two horns from hair.
```

### yuugenmagan

[PNG 原图](assets/yuugenmagan.png) · [WebP 预览](assets/yuugenmagan.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast27-references/幽幻魔眼（灵异传立绘）.png。

```text
Use case: illustration-story. Asset: one square character portrait for an existing Touhou watercolor sketchbook website. Images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY: use their fine warm graphite contours, visible colored-pencil hatching, translucent soft watercolor, warm ivory paper, lively delicate expression and compact chibi proportions. Do not copy their clothes, hairstyles, props or identities. Plain warm ivory paper background with a tiny pencil contact shadow, no scenery, no text, no frame, no watermark, full silhouette comfortably inset. Image 3 is the ORIGINAL YuugenMagan game design reference. The subject is NOT a humanoid or girl. Draw exactly FIVE separate floating round golden eye disks, in the original configuration: one at top center, one far left middle, one far right middle, two lower central disks. Each disk has a golden ochre pinwheel-like rim with dark inset sections, a white almond-shaped eye with red iris, and small violet filigree around the eye. Fine golden yellow zigzag lightning connects the five disks, with a delicate abstract central lightning scaffold. Make this friendly mysterious, no gore, no realistic eyeball tissue. Preserve five eyes and five disks, no sixth eye, no face, mouth, limbs, clothing or person behind them. Transfer only the graphite, soft watercolor and ivory paper quality from images 1–2, not human proportions. Center the whole cluster, breathing room around every disk. Avoid neon bloom or CGI, very legible hand-drawn edges.
```

### genjii

[PNG 原图](assets/genjii.png) · [WebP 预览](assets/genjii.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast27-references/玄爷（封魔录立绘）.png。

```text
Use case: illustration-story. Asset: one square character portrait for an existing Touhou watercolor sketchbook website. Images 1 and 2 are STYLE AND PROPORTION REFERENCES ONLY: use their fine warm graphite contours, visible colored-pencil hatching, translucent soft watercolor, warm ivory paper, lively delicate expression and compact chibi proportions. Do not copy their clothes, hairstyles, props or identities. Plain warm ivory paper background with a tiny pencil contact shadow, no scenery, no text, no frame, no watermark, full silhouette comfortably inset. Image 3 is Genjii's original tiny game portrait, for facial identity and palette. Draw Genjii as ONE cute elderly flying turtle, not a humanoid, girl or dragon. His large kindly wrinkled face has two eyes under white bushy drooping eyebrows, a pale gray-lavender crown, olive dark cheek areas, warm tan muzzle, and a long white/gray moustache-beard as seen in the pixels. Rounded moss-green/olive brown domed turtle shell, small compact natural turtle body, exactly FOUR short turtle legs attached naturally below the shell, a single tiny tail. Three-quarter front view resting just above a faint pencil shadow. Big elderly head and short stout turtle silhouette harmonize with the chibi warmth of style images while retaining turtle anatomy. No humanoid hands or human feet, no clothing or hats, no wings, no rider, no fifth leg, no long dragon neck, no red decorative border from source screenshot.
```

### scene-singyoku-threshold

[PNG 原图](assets/scene-singyoku-threshold.png) · [WebP 预览](assets/scene-singyoku-threshold.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/singyoku.png。

```text
Use case: illustration-story. Asset: ONE wide 3:2 watercolor landscape for the existing Gensokyo sketchbook. Images 1–2 are the strict original STYLE references: delicate graphite/colored pencil hatching, soft warm watercolor washes, ivory textured paper with gentle feathered margins. Image 3 is the FINAL subject portrait, preserve exact identity, compact proportions and nonhuman features. Rich but quiet environment with depth, full silhouette of only ONE subject, no typography, no signs, captions, watermark, GUI, photorealism or CGI. SinGyoku second female form stands in foreground left at an imagined old shrine threshold at dusk. Preserve very BIG rounded head and short body about 2.5 heads total, two brown curled horns, long red hair, small face, navy wide sleeves with two little hands, red bow-like chest accent and red robe with irregular white patches covering all feet. Exactly same character design as portrait, no other forms or sphere, no extra hat. Weathered dark wooden gate posts, stone stairs, moss, a little grass and scattered crimson leaves. Cool deep blue shadows and a warm muted red distant glow subtly recall the original game's palette; architecture and quiet pause are original fan imagination, not exact modern Hakurei shrine reconstruction. Keep her fully visible, not cropped or leggy; gentle small smile and hands at ease.
```

### scene-yuugenmagan-gate

[PNG 原图](assets/scene-yuugenmagan-gate.png) · [WebP 预览](assets/scene-yuugenmagan-gate.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/yuugenmagan.png。

```text
Use case: illustration-story. Asset: ONE wide 3:2 watercolor landscape for the existing Gensokyo sketchbook. Images 1–2 are the strict original STYLE references: delicate graphite/colored pencil hatching, soft warm watercolor washes, ivory textured paper with gentle feathered margins. Image 3 is the FINAL subject portrait, preserve exact identity, compact proportions and nonhuman features. Rich but quiet environment with depth, full silhouette of only ONE subject, no typography, no signs, captions, watermark, GUI, photorealism or CGI. YuugenMagan, exactly FIVE floating golden pinwheel-rim EYE DISKS from portrait connected by thin golden lightning, suspended together at an imagined otherworldly stone gate. Preserve the one top center, far left/right middle, two low center layout; every disk has ONE white eye with red iris and violet fine filigree, total five eyes. NO human, girl, face, limbs, mouth or sixth eye, no other disks. Make the cluster clearly the subject occupying middle-left of a wide environment; abstract central lightning remains delicate and readable. Tall weathered stone gate silhouette receding behind, a low stone platform and shallow still water with faint distorted reflections not extra eyes, muted red-brown cliff shadows at left, blue-violet recesses at right. Warm cream paper and restrained hand-drawn watercolor soften this mysterious quiet scene. Avoid architecture crowding disks or obscuring connections, avoid neon and horror/gore. This invented layout is inspired by original game colors, not a reconstructed game level.
```

### scene-genjii-cloudpath

[PNG 原图](assets/scene-genjii-cloudpath.png) · [WebP 预览](assets/scene-genjii-cloudpath.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/genjii.png。

```text
Use case: illustration-story. Asset: ONE wide 3:2 watercolor landscape for the existing Gensokyo sketchbook. Images 1–2 are the strict original STYLE references: delicate graphite/colored pencil hatching, soft warm watercolor washes, ivory textured paper with gentle feathered margins. Image 3 is the FINAL subject portrait, preserve exact identity, compact proportions and nonhuman features. Rich but quiet environment with depth, full silhouette of only ONE subject, no typography, no signs, captions, watermark, GUI, photorealism or CGI. Genjii the elderly flying TURTLE from portrait pauses hovering slightly above an imagined mountain stream path, foreground right, full natural turtle silhouette. Preserve the large kindly wrinkled head, long white eyebrows and moustache-beard, gray-lavender forehead, olive cheeks, rounded moss-green brown domed shell; exactly FOUR short turtle feet naturally attached under shell, one tiny tail, no extra limb or rider, no dragon wings, no human body or clothing. His four short feet hang comfortably below shell, a soft small shadow separates him from the path. A narrow old stone footbridge across a clear stream, wildflowers and mossy stepping stones in foreground, pines and low rolling mountains disappearing in pale cloud, warm morning light and gentle air moving white beard. The turtle remains large-headed and compact, pencil detail finely matching style refs. Quiet travel pause, not a claim about his present home. No shrine building or residence labels, no other characters.
```

## 内容与验证

现有 163 位人物、76 幅场景、19 页手帖、37 个作品入口、124 组关系、52 个词条与 9 条主题路线。灵异传索引包括灵梦及七位有名对手，封魔录索引增至六位。新内容接入搜索、本次增补、收藏、弹窗翻阅、原图入口与现有主题路线。地区目录、按册展开和手机排版沿用第二十六批。

资料引用与素材路径、交互回归、真实浏览器及发布后检查详见本轮交付记录；验证只覆盖实际执行范围，不据静态检查宣称后台投稿和审核已完成端到端复测。

# 第二十七批本地验证

- 数据：163 位人物、76 幅场景、19 页手帖、37 个作品入口、124 组关系、52 个词条、9 条路线；所有人物、地点、作品、场景交叉引用有效，新六份 PNG / WebP 均存在。
- 交互回归：最新三位筛选、双向循环、全册切换、搜索、收藏保留展开范围、分享剪贴板降级、深链接与关闭清理、场景与角色互跳、主题路线键盘切换、新手帖 19 / 19 循环均通过。
- 真实浏览器：桌面筛选显示三位并载入 900px 预览，神玉 → 幽幻魔眼 → 玄爷翻页正常；玄爷相关场景打开 1536px PNG；新三景筛选、神玉与五眼原图、新手帖深链接通过。新页面未见浏览器控制台错误。
- 360×800：双列人物卡，无页面横向溢出、无卡片内横向溢出；图像完整、长标签换行。测试后已恢复正常视口。
- 人工图像复核：神玉红发双角及短身、五个眼盘、玄爷四肢与两幅非人形场景结构；场景色调与实际图片描述对应。原作头像外的龟甲纹理与全身细节明确为同人补绘。
- 本轮未新建测试投稿或执行审核，不把上述图鉴检查外推为完整后台端到端验证。

