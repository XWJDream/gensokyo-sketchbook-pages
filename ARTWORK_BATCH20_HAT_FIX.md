# 第二十批修订：雪的帽型

2026-10-27。先前把雪的帽子误画成魔理沙式尖顶帽；本次以用户提供的截图为帽型与配色依据，用 imagegen 内置编辑模式同步修正人物图及冰雪场景。

## 修订范围

- 酒红色低冠、宽椭圆帽檐；白色帽带和带淡粉阴影的白色蝴蝶结。去掉尖顶、下垂帽尖及帽檐褶边。
- 保留原有人物头身比例、表情、动作、衣装和淡彩铅笔风格。场景中的舞、冰宫、湖面等保持原构图。
- 实际输入依次为：原图编辑目标、用户帽型截图、首批灵梦、首批魔理沙。后两张仅支持媒材和比例，不作为新帽型模板。
- 图鉴、关系卡和人物弹窗读取 yuki-v2；场景、路线封面和魔界手帖读取 scene-ice-magic-v2。旧文件留作源代码中的历史记录，当前页面不再引用。

发布复查发现原网站首次读取新版高清图时，上游取图返回 503。两张修订 PNG 现直接随网站资源包发布；其他原图仍沿用既有缓存读取。GitHub 浏览版的两张原图亦已逐字节核对。

## 最终文件与实际提示词

### yuki-v2

[PNG 原图](assets/yuki-v2.png) · [WebP 预览](assets/yuki-v2.webp)

```text
Use case: precise-object-edit. This is a narrowly scoped correction to an existing Touhou fan illustration. Input 1 is the EDIT TARGET and its existing drawing, composition and proportions must be preserved. Input 2 is the user's precise HAT SHAPE AND COLOR reference for Yuki. Inputs 3 and 4 are supporting original project style/proportion references ONLY. Correct Yuki's hat to the reference: a low, short flat-topped crown like a shallow cylindrical boater/felt hat, wide elliptical brim, dark burgundy/reddish-brown felt (wine-colored), a white ribbon band and a white bow with subtle pale pink shading on the right/front side as in the supplied reference. The crown rises only a small amount above the brim and has NO POINT, NO CONE, NO LONG BENT TIP. Remove the existing giant pink bow and white frilly brim trim, using a moderately sized white ribbon bow matching the user reference. Keep the hat hand drawn in the same graphite outlines, pencil hatching and watercolor medium as the target. Do not introduce pixel art or copy the green background from input 2. Keep the original big chibi head, short torso, short little limbs, pose, face, golden hair, clothing, shoes, expression, lighting and paper texture. No added characters, no text, no logo. Edit ONLY the hat on the single blonde character in input 1. Preserve the entire remaining full-body character and her wink, reaching hand, red magical spark, black dress, pink necktie, and ivory background. Keep the same square canvas and head/face scale. Where the old pointed tip is removed, restore the surrounding plain ivory paper.
```

### scene-ice-magic-v2

[PNG 原图](assets/scene-ice-magic-v2.png) · [WebP 预览](assets/scene-ice-magic-v2.webp)

```text
Use case: precise-object-edit. This is a narrowly scoped correction to an existing Touhou fan illustration. Input 1 is the EDIT TARGET and its existing drawing, composition and proportions must be preserved. Input 2 is the user's precise HAT SHAPE AND COLOR reference for Yuki. Inputs 3 and 4 are supporting original project style/proportion references ONLY. Correct Yuki's hat to the reference: a low, short flat-topped crown like a shallow cylindrical boater/felt hat, wide elliptical brim, dark burgundy/reddish-brown felt (wine-colored), a white ribbon band and a white bow with subtle pale pink shading on the right/front side as in the supplied reference. The crown rises only a small amount above the brim and has NO POINT, NO CONE, NO LONG BENT TIP. Remove the existing giant pink bow and white frilly brim trim, using a moderately sized white ribbon bow matching the user reference. Keep the hat hand drawn in the same graphite outlines, pencil hatching and watercolor medium as the target. Do not introduce pixel art or copy the green background from input 2. Keep the original big chibi head, short torso, short little limbs, pose, face, golden hair, clothing, shoes, expression, lighting and paper texture. No added characters, no text, no logo. Edit ONLY the hat on Yuki, the blonde black-dressed character on the LEFT in input 1. Preserve Mai, the blue-haired white-winged character on the RIGHT, completely unchanged. Preserve the ice palace, snowy trees, bridge, lake, lights, all background details, both full chibi bodies, hands and feet, red/blue magical glows, and the existing wide landscape framing. Restore the snowy background that was hidden by the old pointed hat tip. Do not change Mai's white head ornament or wings.
```
