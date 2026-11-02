# 第二十八批：书页与人里的来客

2026-11-02。imagegen 内置模式生成读书妖怪、易者、运松翁与三幅独立场景，共六份最终 PNG 与 WebP，保存在 assets。各次均实际输入最初灵梦、魔理沙约束约 2.5–3 头身、大头短身、细铅笔排线、柔和淡彩与暖纸底。本批没有另作图像修订，未使用 CLI/API 后备。

## 原作对照与取舍

- [无名的读书妖怪](https://thbwiki.cc/无名的读书妖怪)、[香霖堂第二话](https://thbwiki.cc/东方香霖堂/第2话)：实际查看两张原作插画，用第一张彩色图生成。浅色短发里的蓝灰束、黑色蓬袖与蓝灰腰身、淡红羽状轮廓分别保留。朱鹭子为通称，具体种族未确认。闭合书本、袜鞋及平静动作是同人补绘。
- [易者原图索引](https://thbwiki.cc/碎片角色列表#易者)、[铃奈庵第二十五话原作对话](https://thbwiki.cc/东方铃奈庵/第二十五话)：实际查看人类、妖怪两种原作图，使用后者生成。帽、墨镜、尖耳及围颈布保留；灰褐配色和下身补全为同人演绎。小传保持事件中的利用与调查关系，平静画页不改写结局。
- [运松翁原图索引](https://thbwiki.cc/碎片角色列表#运松翁)、[茨歌仙第十一话原作对话](https://thbwiki.cc/东方茨歌仙/第十一话)：实际查看原作黑白全身局部，保留光头、白眉、下垂髭与尖长须、衣领腰带和钓竿。米灰衣色、短裤及草鞋为补绘，秘药效用不归为人物天生能力。

场景实际输入首批两图与相应最终人物；没有输入他人同人图或原作背景图。林边木台、书斋、河岸和村舍均为本册创作，不作为原作地点、事件或和解结局的复原。三位均保留各自身份，没有将男性与老者改为少女。参考图仅保留在忽略的 output/cast28-references，没有作为本站插图发布。

## 下载来源

- [朱鹭子（香霖堂1）.png](https://upload.thbwiki.cc/8/8b/%E6%9C%B1%E9%B9%AD%E5%AD%90%EF%BC%88%E9%A6%99%E9%9C%96%E5%A0%821%EF%BC%89.png)
- [朱鹭子（香霖堂2）.png](https://upload.thbwiki.cc/5/5e/%E6%9C%B1%E9%B9%AD%E5%AD%90%EF%BC%88%E9%A6%99%E9%9C%96%E5%A0%822%EF%BC%89.png)
- [运松翁（茨歌仙）.jpg](https://upload.thbwiki.cc/c/c7/%E8%BF%90%E6%9D%BE%E7%BF%81%EF%BC%88%E8%8C%A8%E6%AD%8C%E4%BB%99%EF%BC%89.jpg)
- [易者（人）.png](https://upload.thbwiki.cc/9/94/%E6%98%93%E8%80%85%EF%BC%88%E4%BA%BA%EF%BC%89.png)
- [易者.png](https://upload.thbwiki.cc/4/4a/%E6%98%93%E8%80%85.png)

## 最终文件与完整实际提示词

### tokiko

[PNG 原图](assets/tokiko.png) · [WebP 预览](assets/tokiko.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast28-references/朱鹭子（香霖堂1）.png。

```text
Use case: illustration-story. Asset: ONE square full-body character portrait for existing Touhou Gensokyo sketchbook. Images1–2 are STRICT STYLE AND PROPORTION references only: warm ivory textured paper, delicate graphite contours, visible fine colored-pencil hatching and translucent watercolor, oversized round chibi head with an extremely SHORT torso and SHORT legs, 2.5 heads total height like initial Reimu/Marisa. Do not copy their identities, clothes, bows or props. Image3 is ORIGINAL character art, use for design identity only, not tall proportions or page composition. Center one fully visible figure comfortably inside margins, tiny pencil contact shadow, plain ivory paper, no scenery, no text/frame/watermark/UI. Subject: the unnamed book-reading youkai commonly called Tokiko from Curiosities of Lotus Asia. Faithful to original image3: uneven pale ivory-blond/silvery short layered hair, conspicuous slate blue-lavender sections underneath and along front bangs, light golden eyes, small pale feather-like tufts at sides of crown, pink/red feathered wing-like silhouettes behind the upper body at both sides as visible in original. NO generic big hair bow or hat, no long braid. Black/dark charcoal high-neck blouse with rounded puffed shoulders and long sleeves, fitted muted blue-gray waist/bodice front tied with a dark waist bow; black flared skirt with subtle white frilled lower hem. Two tiny hands hold ONE small closed brown reading book at chest (book is a gentle fan-composed prop inspired by reading role). Opaque modest outfit, short white socks and tiny dark simple shoes, 2 short naturally placed legs, feet natural. Cute curious smile, big round face and short compact silhouette matching first two refs. Feathers are soft, modest, no large angel wings, no invented bird beak or claiming confirmed ibis species.
```

### fortune-teller

[PNG 原图](assets/fortune-teller.png) · [WebP 预览](assets/fortune-teller.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast28-references/易者.png。

```text
Use case: illustration-story. Asset: ONE square full-body character portrait for existing Touhou Gensokyo sketchbook. Images1–2 are STRICT STYLE AND PROPORTION references only: warm ivory textured paper, delicate graphite contours, visible fine colored-pencil hatching and translucent watercolor, oversized round chibi head with an extremely SHORT torso and SHORT legs, 2.5 heads total height like initial Reimu/Marisa. Do not copy their identities, clothes, bows or props. Image3 is ORIGINAL character art, use for design identity only, not tall proportions or page composition. Center one fully visible figure comfortably inside margins, tiny pencil contact shadow, plain ivory paper, no scenery, no text/frame/watermark/UI. Subject: Fortune-teller (易者) in the YOUKAI form from Forbidden Scrollery original manga panel image3. Preserve adult MALE identity but tiny chibi silhouette, no girl conversion: close-fitting flat-topped short dark cap, very short dark hair mostly hidden, long pointed ears, angular black sunglasses with narrow connecting bridge, clean-shaven small face, dark scarf wrapping high around neck and a plain traditional charcoal/gray wrap robe with broad sleeves and dark waistband. Opaque robe covers body; two small hands gently hold one CLOSED blank-cover gray-brown book, short trouser cuffs and small dark cloth shoes below. Oversized head 2.5-heads tall, tiny torso and very short legs, small reserved mouth, no violent grin or injury. The manga source is monochrome, so use restrained warm gray, muted brown and charcoal as interpretive coloring only. No blood, violence, death scene, spells, dice, tarot, magic wand, weapons, tall anime anatomy or comic balloons.
```

### unshou

[PNG 原图](assets/unshou.png) · [WebP 预览](assets/unshou.webp)

实际输入：assets/reimu.png；assets/marisa.png；output/cast28-references/运松翁（茨歌仙）.jpg。

```text
Use case: illustration-story. Asset: ONE square full-body character portrait for existing Touhou Gensokyo sketchbook. Images1–2 are STRICT STYLE AND PROPORTION references only: warm ivory textured paper, delicate graphite contours, visible fine colored-pencil hatching and translucent watercolor, oversized round chibi head with an extremely SHORT torso and SHORT legs, 2.5 heads total height like initial Reimu/Marisa. Do not copy their identities, clothes, bows or props. Image3 is ORIGINAL character art, use for design identity only, not tall proportions or page composition. Center one fully visible figure comfortably inside margins, tiny pencil contact shadow, plain ivory paper, no scenery, no text/frame/watermark/UI. Subject Unshou (运松翁), elderly HUMAN fisherman from Wild and Horned Hermit manga panel image3. Keep bald rounded head, thick white brows, eyes gently closed, large white drooping moustache with a separate long pointed WHITE goatee, wrinkled but friendly face. He is NOT Genjii the turtle, do not copy turtle shell, green skin or creature feet. Simple pale warm gray/light beige crossover kimono with wide sleeves, dark charcoal obi belt with a small looped waist cord; cropped loose robe hem and modest short pale-gray trousers, two tiny feet in straw sandals. One slender traditional bamboo fishing rod held safely with both tiny natural hands, rod angle diagonal but full rod comfortably in frame; no visible sharp hook or caught animal. Standing full-body in small balanced stance, head huge and body exceptionally compact about 2.5 heads total, no tall elderly anatomy. Color is invented restrained wash because original is black-and-white. No hat, hair on top of scalp, extra beard, text, writing or modern fishing reel.
```

### scene-tokiko-reading

[PNG 原图](assets/scene-tokiko-reading.png) · [WebP 预览](assets/scene-tokiko-reading.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/tokiko.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape scene for existing Gensokyo sketchbook, only one subject. Inputs1–2 are original Reimu/Marisa STYLE/PROPORTION references: very large chibi heads and exceptionally SHORT bodies and legs, fine warm graphite contours, delicate colored pencil hatching and soft translucent watercolor on cream textured paper with feathered margins. Input3 is FINAL subject portrait: preserve exactly its identity, clothing, head/body ratio and features. Rich quiet environment with depth, entire subject visible comfortably inside paper margins. No writing, typography, labels, UI or watermark, no photorealism or CGI. The unnamed book-reading youkai commonly called Tokiko stands at foreground left beside a rustic low wooden reading table at an imagined forest edge. Exactly her portrait's pale ivory short layered hair with slate blue-lavender front and underneath locks, small feather tufts, golden eyes, small pink feather wing-like silhouettes behind shoulders, dark high neck puff sleeve blouse, blue-gray fitted waist and dark waist bow, black/white frilled skirt, short white socks and dark shoes. Two tiny hands hold a small closed book against chest, cheerful curious gentle face. About 2.5 heads total body height, no tall legs or larger body. On table a few modest closed books with blank unlettered spines, dappled warm sunlight, ferns and small wildflowers, leafy branches and a winding trail into soft blue-green forest, no extravagant mushrooms or new mansion. A tranquil fan-imagined reading pause, not a remake of book-retrieval conflict or confirmation of returned books. Keep figure and feathers clearly separated from background foliage.
```

### scene-fortune-teller-study

[PNG 原图](assets/scene-fortune-teller-study.png) · [WebP 预览](assets/scene-fortune-teller-study.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/fortune-teller.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape scene for existing Gensokyo sketchbook, only one subject. Inputs1–2 are original Reimu/Marisa STYLE/PROPORTION references: very large chibi heads and exceptionally SHORT bodies and legs, fine warm graphite contours, delicate colored pencil hatching and soft translucent watercolor on cream textured paper with feathered margins. Input3 is FINAL subject portrait: preserve exactly its identity, clothing, head/body ratio and features. Rich quiet environment with depth, entire subject visible comfortably inside paper margins. No writing, typography, labels, UI or watermark, no photorealism or CGI. The Fortune-teller in YOUKAI form from portrait stands at foreground right in an invented modest old study. Keep adult male identity translated into cute compact 2.5-heads silhouette, short dark flat-topped cap, pointed ears, narrow angular black sunglasses, short dark hair, no beard, tattered ends of dark scarf, gray-brown plain wrap robe, two tiny hands holding a single closed plain-cover book, extremely short trouser legs and little dark cloth shoes. Quiet reserved mouth, no fierce grin. A low wooden desk with a CLOSED unlettered book stack, simple dark inkstone and one slender brush laid horizontally, a small warm oil lamp, wood lattice window with cool indigo dusk outside, a few softly shadowed shelves of blank books. No tarot cards, crystal ball, divination symbols, readable charts, curses or ghost hands. This is a conceptual still illustration for recognizing a manga design, not a literal historical study or altered happy ending. Restrained gray/sepia/ivory with a small pool of warm light, no injuries, death, violence or other people.
```

### scene-unshou-riverside

[PNG 原图](assets/scene-unshou-riverside.png) · [WebP 预览](assets/scene-unshou-riverside.webp)

实际输入：assets/reimu.png；assets/marisa.png；assets/unshou.png。

```text
Use case: illustration-story. ONE wide 3:2 landscape scene for existing Gensokyo sketchbook, only one subject. Inputs1–2 are original Reimu/Marisa STYLE/PROPORTION references: very large chibi heads and exceptionally SHORT bodies and legs, fine warm graphite contours, delicate colored pencil hatching and soft translucent watercolor on cream textured paper with feathered margins. Input3 is FINAL subject portrait: preserve exactly its identity, clothing, head/body ratio and features. Rich quiet environment with depth, entire subject visible comfortably inside paper margins. No writing, typography, labels, UI or watermark, no photorealism or CGI. Unshou the elderly HUMAN fisherman from portrait stands on a stone riverside path at foreground left, holding a thin bamboo fishing rod diagonally over quiet water. Preserve bald head, white bushy brows, smiling closed eyes, white drooping moustache plus independent long pointed goatee, light beige-gray crossover kimono and wide sleeves, dark obi and small waist cord, short loose trousers and tiny natural feet in straw sandals. Large head, very short torso and legs exactly like portrait, no tall old-man proportions. Both small hands naturally grip the same rod, line descends calmly into water, NO hooked fish or visible hook, no caught animals. Soft willow branches, reeds, a few mossy stepping stones, gentle glints on river, distant modest village rooftops half-hidden behind foliage, hazy hills and warm quiet afternoon atmosphere. Full figure and two feet visible, no extra leg, no hat or turtle traits. Invented countryside pause, not an exact location of his house or a medicine/healing event.
```

## 内容接入

共 166 位人物、79 幅场景、20 页世界手帖、38 个作品入口（28 部游戏、8 部书籍、2 部音乐）、128 组关系、54 个词条与 10 条主题路线。新增茨歌仙入口、书页与人里的来客路线和手帖；人物原作对照在小传内可展开。搜索、最新筛选、收藏、全册翻阅与渐进展开沿用现有交互。参考来源中作品原文、图像与 Wiki 编目说明分别理解。

## 本地验证

- 数据唯一性、人物／地点／作品／场景交叉引用与素材存在检查通过；257 份现用 PNG 纳入原图清单。
- 图鉴筛选、三位循环、全册切换、搜索、收藏保留展开范围、分享降级、深链接关闭清理、场景互跳、渐进展开与第二十页手帖循环回归通过。
- 第十条路线深链接、八步人物、三幅场景链接、无虚构主题曲、三个书籍索引与新手帖关联检查通过。
- 真实浏览器核验新增三位展示、朱鹭子通称搜索、完整人物图、新路线深链接、卦书场景 1536px 原图、场景切换、新手帖标题和 20 / 20 页码；新文档未见控制台错误。
- 360×800 手机核验长名称两行显示，卡片双列且无页面或卡内横向溢出；三份预览均载入 900px 图片，测试后恢复正常视口。
- 人工检查六图的短身比例、形象辨识与手足；原作之外的灰褐配色、下身及场景明确标注。后台投稿、审核和账号流程未在本轮创建新数据复测。

