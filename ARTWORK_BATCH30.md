# 第三十批：结局里的来客

使用内置 image_gen 工具完成两张独立人物与两幅场景。所有最终 PNG 与 WebP 均保存在本目录 assets；首批灵梦、魔理沙作为严格风格与比例参考，留琴约 2.3–2.5 头身，咪咪号保留非人形轮廓。

## 网上对照与实际检查

- [留琴资料](https://thbwiki.cc/留琴)、[灵梦原作结局](https://thbwiki.cc/游戏对话:东方梦时空/博丽灵梦)：绿色翘发、白蓝女仆头饰、蓝白裙和围裙、红领结，保留原作结局的扫除笑点。实际查看的像素原图取自 [ACDB 留琴图页](https://www.animecharactersdatabase.com/characters.php?id=52675)，下载地址见下文。背部符号不挪到胸前，完整袜鞋与手持扫帚动作明确为同人延展。
- [咪咪号资料](https://thbwiki.cc/咪咪号)、[魔理沙原作结局](https://thbwiki.cc/游戏对话:东方梦时空/雾雨魔理沙)：实际查看 [ACDB 结局截图裁片](https://www.animecharactersdatabase.com/characters.php?id=92665)，核对白色弹体、红鼻、黑点眼和红嘴。裁片中完整尾部未呈现，尾翼和完整静止构图参考形象描述补绘，不称为全图精确复刻。
- [原作 Omake](https://thbwiki.cc/附带文档:东方梦时空/Omake)：核对名字与作品来源；不把漫画原型的全部设定直接移入东方。曲目“东方的蓝色天空”有灵梦结局文本依据，作为结局阅读线索，未称两位专属主题曲。

THBWiki 原图下载服务器本次持续断开连接，改用 ACDB 收录的游戏图像进行视觉核验。下载后查看过一幅留琴同人图，但因胸前符号不合原作背部位置，未用作生成输入。爱莲施法图未露出猫，苏格拉底本批未独立绘制或新增条目，没有以文字描述冒充完整原图核验。

神社石径、木廊、落叶与云下静物场景为本册原创同人构图，未参考其他作者的完整同人场景。咪咪号没有地图定位；留琴仅关联结局里的博丽神社，不确认后来常住情况。

## 实际备用图源

- 留琴游戏图：https://ami.animecharactersdatabase.com/images%20of/Ruukoto/from/Touhou%20Project/uploads/chars/35236-509108111.png
- 咪咪号结局裁片：https://www.animecharactersdatabase.com/uploads/chars/35236-1098026932.png

原始参考只保存在忽略的 output/cast30-references，未直接作为网站作品公开。

## 最终素材、实际输入与完整提示词

### ruukoto

[最终 PNG](assets/ruukoto.png) · [WebP 预览](assets/ruukoto.webp)

实际输入：assets\reimu.png；assets\marisa.png；output\cast30-references\ruukoto-profile.png。

```text
Use case: illustration-story. One square portrait for an existing Touhou sketchbook. Input images 1 and 2 are STRICT first-batch STYLE and PROPORTION references, not the subject: warm ivory textured paper, fine graphite contours and visible soft colored-pencil hatching with translucent watercolor, charming big rounded face, exceptionally SHORT torso and tiny legs, compact 2.3–2.5 heads tall excluding headwear. Preserve their hand-made softness, not glossy digital shading. Center one complete subject with generous paper margins, faint pencil contact shadow. No scenery, text, typography, labels, watermark, frames, CGI, tall anime anatomy. Input3 is original PC-98 game portrait of RUUKOTO (る～こと), for identity, hairstyle and costume only. Green neck/shoulder-length bob with distinct outward flared ends and separated long bangs, blue eyes, white frilly maid cap with blue base, white blouse with short puff sleeves, light BLUE bodice and skirt, broad white apron and white shoulder ruffles, RED bow tie. Tiny dark low shoes, tiny white sock cuffs, skirt almost touches tiny knees. Happy earnest smile and slight blush. Both tiny hands loosely hold a simple long wooden broom, bristles resting on paper, her feet planted. Robot maid but outwardly human-looking: no metal joints, headphones, glowing tech or robot ears. Front three-quarter view, do not invent a radiation symbol on the front (the documented motif is on her BACK and not visible here). Make rounded head occupy about 42 percent of full figure height and exposed legs extremely short like first two references.
```

### mimi-chan

[最终 PNG](assets/mimi-chan.png) · [WebP 预览](assets/mimi-chan.webp)

实际输入：assets\reimu.png；assets\marisa.png；output\cast30-references\mimi-alternate.png。

```text
Use case: illustration-story. One square portrait for an existing Touhou sketchbook. Input images 1 and 2 are STRICT first-batch STYLE and PROPORTION references, not the subject: warm ivory textured paper, fine graphite contours and visible soft colored-pencil hatching with translucent watercolor, charming big rounded face, exceptionally SHORT torso and tiny legs, compact 2.3–2.5 heads tall excluding headwear. Preserve their hand-made softness, not glossy digital shading. Center one complete subject with generous paper margins, faint pencil contact shadow. No scenery, text, typography, labels, watermark, frames, CGI, tall anime anatomy. Input3 is a cropped ORIGINAL game ending image of MIMI-CHAN (ミミちゃん): only the white rounded missile face/body with red rounded pointed nose and black dot eye is the subject; exclude the purple-clothed rider and all background pixels. Draw ONE compact friendly sentient cartoon missile horizontally pointing to viewer's right: elongated ivory-white smooth cylinder, bulbous RED rounded cone at right, two small black dot eyes visible on the front side, curved RED smiling mouth under eye region; small simple red stabilizing fins at left tail. Preserve naive PC-98 face style softened in pencil watercolor; complete silhouette newly composed from cropped reference and text design account. No human girl, hair, hands, feet, wings, animal ears, wheel, rider, smoke, flame or weapons schematic. Hover barely above plain paper with faint grounded pencil shadow. No technical labels or flags, nuclear symbols, war imagery or damage. Its white body must remain distinct against slightly warm ivory paper. Style references control medium, NOT humanoid body shape.
```

### scene-ruukoto-sweeping

[最终 PNG](assets/scene-ruukoto-sweeping.png) · [WebP 预览](assets/scene-ruukoto-sweeping.webp)

实际输入：assets\reimu.png；assets\marisa.png；assets\ruukoto.png。

```text
Use case: illustration-story. ONE wide 3:2 scene for Gensokyo Sketchbook. Input1 and input2 are STRICT first-batch STYLE/PROPORTION references: warm ivory paper texture, delicate graphite and colored-pencil hatching with translucent watercolor, soft warm daylight, natural rich detail with feathered paper margins; humanoids about 2.3–2.5 heads tall with big round head, tiny torso and extremely SHORT legs. Input3 is FINAL character identity/proportion reference. Preserve exactly that subject and its medium. ONE complete subject only, no other people. No text, signage, UI, watermark, 3D, photorealism, tall anatomy or glossy shading. Ruukoto the green short-bob robot maid stands near the foreground on an old Japanese shrine courtyard's stone path, happily holding her simple wooden broom with both small hands. Exact green outward-tipped bob, white/blue frill cap, red neck bow, light blue short-puff dress and white apron; tiny calves and dark Mary Jane shoes as reference3. A few ochre leaves gather near the broom, but the path is not perfectly clean. Warm wooden veranda with empty small tea tray in midground, stone lantern, red torii partly hidden in distant cedar trees, tiny white wildflowers by mossy steps, dappled soft afternoon light. Complete natural two hands and two grounded feet, broom head beside shoes, no duplicate broom or extra limbs. Her rounded head must dominate body; legs as short as reference3. This is an imagined peaceful interlude referring to Reimu's ending, not a reconstruction of its screenshot. No futuristic glowing reactor or visible nuclear symbol.
```

### scene-mimi-cloudrest

[最终 PNG](assets/scene-mimi-cloudrest.png) · [WebP 预览](assets/scene-mimi-cloudrest.webp)

实际输入：assets\reimu.png；assets\marisa.png；assets\mimi-chan.png。

```text
Use case: illustration-story. ONE wide 3:2 scene for Gensokyo Sketchbook. Input1 and input2 are STRICT first-batch STYLE/PROPORTION references: warm ivory paper texture, delicate graphite and colored-pencil hatching with translucent watercolor, soft warm daylight, natural rich detail with feathered paper margins; humanoids about 2.3–2.5 heads tall with big round head, tiny torso and extremely SHORT legs. Input3 is FINAL character identity/proportion reference. Preserve exactly that subject and its medium. ONE complete subject only, no other people. No text, signage, UI, watermark, 3D, photorealism, tall anatomy or glossy shading. Mimi-chan is the ONLY subject, a smiling simple fictional missile: full fat white capsule/cylinder with red bulbous nosecone pointing right, two small black dot eyes, red smile, small red tail stabilizing fins. Preserve reference3 exactly, non-human with no limbs, rider or person. Rest horizontally on TWO SIMPLE unmarked wooden display cradles at the edge of an imagined open wooden veranda, safely motionless. Her entire body clear and bright in foreground. Beyond the veranda, quiet rolling grassy hills, distant soft trees, paper-blue clouds in broad sky, tiny daisies in a terracotta pot and one folded blank cloth nearby. Rich colored-pencil wood grain, soft blue watercolor mountains, gentle wind implied only by grass. NO technical machinery, schematics, launching system, control panels, fire, smoke, blast, damage, flags, radiation symbol, war, unreadable marks, faces in clouds or extra rockets. No claim of canonical address or weapon operation: simply quiet still-life illustrating the character silhouette.
```

## 内容接入

本批后为 171 位角色、84 幅场景、22 页手帖、39 个作品入口、135 组关系、58 个词条、12 条主题路线。梦时空索引含九位可用人物与两位结局来客，不声称囊括全部登场者。

## 校验记录

2026-11-02：数据完整性、人物/场景/作品/地点关联、原图文件、目录搜索与收藏、筛选内翻页及分享降级、逐步展开排版、场景键盘翻页与弹窗互跳、主题路线及新七步路线检查通过。静态构建登记 267 张在用 PNG。

真实浏览器检查：本次两位筛选及 900 像素预览完整加载；留琴介绍、原作形象说明与场景入口正常。360×800 手机双列卡片、320 像素宽详情没有页面横向溢出。新路线、留琴场景的博丽神社关联、咪咪号无地图定位、第二十二页世界手帖均正常，未发现页面控制台错误。新场景原图完整加载。
