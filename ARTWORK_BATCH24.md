# 第二十四批：圣域初访与比例复核

2026-10-30。使用 imagegen 内置模式生成三位人物及三幅场景；三张人物初稿各做一次身体比例修订，最终 PNG 与 WebP 均保存于 assets。每次实际输入首批灵梦与魔理沙，以约 2.5—3 头身、大头短身和纸本铅笔淡彩约束媒材及比例，避免完整原作全身立绘带来长腿。人物发型、耳形、头饰与服装分别核对。

## 网上原作资料

- [锦上京原作立绘索引](https://thbwiki.cc/东方锦上京/角色立绘)
- [原作附带设定](https://thbwiki.cc/附带文档:东方锦上京/Omake)
- [魔理沙红石路线原作对话](https://thbwiki.cc/游戏对话:东方锦上京/雾雨魔理沙（红）)
- [姥芽](https://thbwiki.cc/尘塚姥芽)、[魑魅](https://thbwiki.cc/封兽魑魅)、[驯子](https://thbwiki.cc/道神驯子)与[圣域](https://thbwiki.cc/圣域)的原作资料摘录。
- [天空璋原作附带设定](https://thbwiki.cc/附带文档:东方天空璋/Omake)：旁读合欢的“制作圣域”能力，避免与姥芽混淆。

| 人物 | 原作核对点 | 本册处理 |
|---|---|---|
| 尘塚姥芽 | 灰蓝波浪发、金色叶状冠、白赭黄布片与黑底、紫带绕裙、菱形裙边、赤足 | 发型不换成双辫；身体与小腿另收短，卷发和布带简化为铅笔淡彩 |
| 封兽魑魅 | 白发、三对黑尖白长耳、额前红纹、绿叶衣身与红黄领片、蓝白波纹裙、赤足 | 数清六片耳，不画成羽翼或普通兔耳；未加尾巴，身体另收短 |
| 道神驯子 | 深蓝齐刘海与金束发梢、道祖神形金饰、钥匙耳饰、短裤、蓝金披肩、黑袜小靴、两根不同金杖 | 保留短裤，不改成长裙；身体与腿长另收短，微小头饰与袜边纹样简化 |

姥芽的能力为破坏圣域，合欢为制作圣域；魑魅与鵺的同姓不确认亲缘；驯子阻拦离开而不是泛指入口守卫。介绍为简短概述，不转载完整设定文本，不以前三关概括全部结局。

参考图与下载背景保存在忽略的 output/cast24-references，仅用作核对和输入参考，不作为本站自绘作品发布。本批场景只参考一至三关的森林冠层、深绿苔石、地下岩壁色调；新画的溪流、花草、完整石门、几何石块与宁静动作均属同人构图，不声称关卡事件或地图复原。未使用结局图和漫画页作为生成输入。

## 原作图像下载来源

- [尘塚姥芽](https://upload.thbwiki.cc/b/b2/%E5%B0%98%E5%A1%9A%E5%A7%A5%E8%8A%BD%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [封兽魑魅](https://upload.thbwiki.cc/7/71/%E5%B0%81%E5%85%BD%E9%AD%91%E9%AD%85%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [道神驯子](https://upload.thbwiki.cc/8/8b/%E9%81%93%E7%A5%9E%E9%A9%AF%E5%AD%90%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E7%AB%8B%E7%BB%98%EF%BC%89.png)
- [圣域森林上空（锦上京一面场景）.jpg](https://upload.thbwiki.cc/e/e2/%E5%9C%A3%E5%9F%9F%E6%A3%AE%E6%9E%97%E4%B8%8A%E7%A9%BA%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E4%B8%80%E9%9D%A2%E5%9C%BA%E6%99%AF%EF%BC%89.jpg)
- [圣域森林内部（锦上京二面场景）.jpg](https://upload.thbwiki.cc/9/9e/%E5%9C%A3%E5%9F%9F%E6%A3%AE%E6%9E%97%E5%86%85%E9%83%A8%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E4%BA%8C%E9%9D%A2%E5%9C%BA%E6%99%AF%EF%BC%89.jpg)
- [圣域地下（锦上京三面场景）.jpg](https://upload.thbwiki.cc/a/aa/%E5%9C%A3%E5%9F%9F%E5%9C%B0%E4%B8%8B%EF%BC%88%E9%94%A6%E4%B8%8A%E4%BA%AC%E4%B8%89%E9%9D%A2%E5%9C%BA%E6%99%AF%EF%BC%89.jpg)

## 最终文件、实际输入与初始提示词

### ubame

[PNG 原图](assets/ubame.png) · [WebP 预览](assets/ubame.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应 TH20 原作完整立绘。最终图采用下文比例修订输出。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for the established Gensokyo Sketchbook. Reference images 1 and 2 are the ORIGINAL first Reimu and Marisa drawings: strictly keep their round large chibi heads, tiny short torsos, short small arms/legs, expressive warm round faces, about 2.5-3 heads total, dark hand-drawn graphite outlines with lively pencil hatching, colored pencil and pale watercolor on warm ivory paper. Reference 3 is an ACTUAL ORIGINAL GAME full-body portrait from Touhou 20, used only for individual identity and costume colors, never copy its tall body proportions. Single complete figure centered on square ivory paper with soft pencil ground shadow, ample margin. Exactly 2 arms, 2 hands, 2 legs, 2 correctly attached tiny feet, no duplicate limbs or merged feet. No long adult limbs, mature curves, glossy digital shading, 3D, photos, text, watermarks or signatures. Preserve a DISTINCT hair silhouette for this character. Subject Chirizuka Ubame (尘塚姥芽). Thick GRAY-BLUE shoulder-to-back wavy hair, loosely tousled broad waves rather than braids or twin tails, purple eyes. Small GOLDEN leafy/flame-shaped crown centered atop head with dark teardrop cutout shapes, NOT a pointed hat or generic tiara. Compact ochre-orange knee-length dress/skirt with dark trim and diamond-shaped cutouts at hem; asymmetrical IVORY and OCHRE chest wrap/panels over modest BLACK underlayer, no cleavage, tiny torso; PURPLE ribbon-like cloth winds around short skirt and trails at sides. Plain black bands/loose black fabric strips at upper arms. Two little hands in a mildly confident playful pose, one small fist near shoulder and other at waist. Exactly TWO small BARE feet naturally planted side by side, toes simplified and anatomically coherent, not a closeup and no emphasis on soles. No sandals, socks, weapon, leaf basket or wings. Cute proud but friendly expression. Keep wild loose waves and golden crown legible, with costume details simplified to the original sketchbook medium.
```

### chimi

[PNG 原图](assets/chimi.png) · [WebP 预览](assets/chimi.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应 TH20 原作完整立绘。最终图采用下文比例修订输出。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for the established Gensokyo Sketchbook. Reference images 1 and 2 are the ORIGINAL first Reimu and Marisa drawings: strictly keep their round large chibi heads, tiny short torsos, short small arms/legs, expressive warm round faces, about 2.5-3 heads total, dark hand-drawn graphite outlines with lively pencil hatching, colored pencil and pale watercolor on warm ivory paper. Reference 3 is an ACTUAL ORIGINAL GAME full-body portrait from Touhou 20, used only for individual identity and costume colors, never copy its tall body proportions. Single complete figure centered on square ivory paper with soft pencil ground shadow, ample margin. Exactly 2 arms, 2 hands, 2 legs, 2 correctly attached tiny feet, no duplicate limbs or merged feet. No long adult limbs, mature curves, glossy digital shading, 3D, photos, text, watermarks or signatures. Preserve a DISTINCT hair silhouette for this character. Subject Houju Chimi (封兽魑魅). WHITE chest-length airy hair with loosely parted short front fringe and soft broad flowing tufts, black eyes, small red geometric mark centered on forehead. Exactly SIX long WHITE animal EARS with BLACK TIPS, three clear ear blades on EACH side of head in layered top/middle/bottom fans, extending sideways, matching source. They are smooth furry ears, NOT feathered wings, NOT horns, NOT flower petals, no extra upright rabbit pair. Dense GREEN overlapping leaf-like bodice, collar ring of RED-to-ORANGE-to-YELLOW broad leaf-shaped pieces flowing out over shoulders, light sky BLUE skirt graduating to WHITE with simplified wave patterns and irregular pointed hem. Very short chibi torso and tiny lower legs, exactly TWO BARE feet side by side in natural planted pose, not crossing or merging, toes simplified with no foot closeup. One small hand lifted palm outward, other relaxed at side. Gentle knowing smile, no weapons, hat, staff, tail or wings. Preserve her white head silhouette and six black-tipped ears distinctly from Ubame's waves and Nareko's braids.
```

### nareko

[PNG 原图](assets/nareko.png) · [WebP 预览](assets/nareko.webp)

实际输入：assets/reimu.png、assets/marisa.png；另输入对应 TH20 原作完整立绘。最终图采用下文比例修订输出。

```text
Use case: illustration-story. ONE original Touhou fan-art character plate for the established Gensokyo Sketchbook. Reference images 1 and 2 are the ORIGINAL first Reimu and Marisa drawings: strictly keep their round large chibi heads, tiny short torsos, short small arms/legs, expressive warm round faces, about 2.5-3 heads total, dark hand-drawn graphite outlines with lively pencil hatching, colored pencil and pale watercolor on warm ivory paper. Reference 3 is an ACTUAL ORIGINAL GAME full-body portrait from Touhou 20, used only for individual identity and costume colors, never copy its tall body proportions. Single complete figure centered on square ivory paper with soft pencil ground shadow, ample margin. Exactly 2 arms, 2 hands, 2 legs, 2 correctly attached tiny feet, no duplicate limbs or merged feet. No long adult limbs, mature curves, glossy digital shading, 3D, photos, text, watermarks or signatures. Preserve a DISTINCT hair silhouette for this character. Subject Michigami Nareko (道神驯子). Deep NAVY BLUE straight hair with a neat blunt fringe and several LONG side/back sections ending in small tied bunches with GOLDEN beads/bands, not loose wavy silver hair. Dark blue eyes with small dark-blue triangular accents at outer corners. Small upright GOLD oval/standing-stone headpiece etched with simplified twin guardian shapes, a narrow gold band, NOT a giant pharaoh helmet or witch hat. Tiny gold key-shaped earrings. Mustard/ochre SHORT-SLEEVED safari-style button shirt and matching cargo SHORTS with big side pockets, black belt and gold buckle. BLUE-and-GOLD striped short shoulder cape, BLACK over-knee socks with a narrow border of small gold circle/cross motifs, small ochre ankle boots. Exactly TWO hand-held GOLD rods: her right hand holds long question-hook-shaped rod upright at her side; her left holds a separate straight rod with circle at one end and small crossed tip at other, across waist, both rods stay clear of face. Exactly two tiny boots attached naturally, not crossed. Friendly curious little quiz-master expression. Keep body tiny and big round chibi head, no desert background, no modern backpack.
```

### scene-ubame-canopy

[PNG 原图](assets/scene-ubame-canopy.png) · [WebP 预览](assets/scene-ubame-canopy.webp)

实际输入：assets/reimu.png、assets/marisa.png；场景另输入对应最终修订人物 PNG 和对应第一、二或三关原作背景。

```text
Use case: illustration-story. ONE original wide 16:9 storybook scene for Gensokyo Sketchbook. Inputs 1 and 2 are ORIGINAL first Reimu and Marisa; STRICTLY match their graphite outlines, colored-pencil hatching, pale watercolor and ivory paper, round very large head, tiny short torso/arms/legs. The head skull-to-chin should be about 38 percent of skull-top-to-feet height, excluding headwear/ear extensions. Input 3 is the final corrected character plate and defines exact hair/costume and SHORT body ratio. Input 4 is original game stage background for palette and basic forest motifs only; DO NOT trace/reproduce the stage layout. Exactly ONE character with two small hands, two short legs and two natural feet. Rich hand-drawn layered scenery, gently feathered ivory-paper vignette, tiny character body and generous airy atmosphere. No words, logos, signage, modern UI, extra people, glamour, long limbs or photoreal rendering. Daily scene and building layout are original fan-art imagination, not an official event or map. Chirizuka Ubame stands on a flat mossy root at a sunny forest-edge overlook, both tiny BARE feet fully visible and naturally planted side by side, simple correct toes, no feet closeup. Preserve her GRAY-BLUE loose WAVY hair, golden leaf-shaped crown, purple eyes, ivory/ochre asymmetrical chest panels over modest black underlayer, compact ochre skirt with dark diamond hem details and purple fabric winding around it, black upper-arm bands. One tiny hand rests at waist and other gives a little confident raised fist, smiling. Foreground ferns, roots and small pale flowers; middle distance rich layered leafy forest canopy rolling down a valley with thin silver mist between trees; far distance blue ridges and a bright blue sky with a few faint thin geometric glints alluding to a barrier. Realistic nature detail rendered entirely in pencil/watercolor, warm green-gold with cool blue haze. NO floating platforms, no village, no giant gate, no added weapons. Keep the body distinctly shorter than initial official portrait, about 2.5 heads.
```

### scene-chimi-rill

[PNG 原图](assets/scene-chimi-rill.png) · [WebP 预览](assets/scene-chimi-rill.webp)

实际输入：assets/reimu.png、assets/marisa.png；场景另输入对应最终修订人物 PNG 和对应第一、二或三关原作背景。

```text
Use case: illustration-story. ONE original wide 16:9 storybook scene for Gensokyo Sketchbook. Inputs 1 and 2 are ORIGINAL first Reimu and Marisa; STRICTLY match their graphite outlines, colored-pencil hatching, pale watercolor and ivory paper, round very large head, tiny short torso/arms/legs. The head skull-to-chin should be about 38 percent of skull-top-to-feet height, excluding headwear/ear extensions. Input 3 is the final corrected character plate and defines exact hair/costume and SHORT body ratio. Input 4 is original game stage background for palette and basic forest motifs only; DO NOT trace/reproduce the stage layout. Exactly ONE character with two small hands, two short legs and two natural feet. Rich hand-drawn layered scenery, gently feathered ivory-paper vignette, tiny character body and generous airy atmosphere. No words, logos, signage, modern UI, extra people, glamour, long limbs or photoreal rendering. Daily scene and building layout are original fan-art imagination, not an official event or map. Houju Chimi pauses on a small dry mossy stone beside a quiet woodland rill, two tiny BARE feet side by side naturally grounded, no crossing/merged foot. WHITE airy chest-length hair, a small red geometric forehead mark, black eyes, exactly SIX smooth long white BLACK-TIPPED EARS in three clear layered pairs, all six tips visible, not feathered wings or horns. GREEN overlapping leaf bodice, collar of broad red-orange-yellow leaf pieces, very compact light-blue to white wave-pattern skirt with pointed hem. One small hand lifted in a friendly open-palm gesture, other down near skirt. Twilight dark-green ancient forest, dense rounded mossy boulders, tiny stream reflecting pale teal light, exposed tree roots, delicate ferns and little blue flowers, faint warm firefly-like lights, distant canopy opening with a few stars. Keep figure bright and readable against quiet deep green scenery, not horror. No tail, hat, staff, bridge or extra animals. Match corrected portrait's large head and tiny body.
```

### scene-nareko-stonegate

[PNG 原图](assets/scene-nareko-stonegate.png) · [WebP 预览](assets/scene-nareko-stonegate.webp)

实际输入：assets/reimu.png、assets/marisa.png；场景另输入对应最终修订人物 PNG 和对应第一、二或三关原作背景。

```text
Use case: illustration-story. ONE original wide 16:9 storybook scene for Gensokyo Sketchbook. Inputs 1 and 2 are ORIGINAL first Reimu and Marisa; STRICTLY match their graphite outlines, colored-pencil hatching, pale watercolor and ivory paper, round very large head, tiny short torso/arms/legs. The head skull-to-chin should be about 38 percent of skull-top-to-feet height, excluding headwear/ear extensions. Input 3 is the final corrected character plate and defines exact hair/costume and SHORT body ratio. Input 4 is original game stage background for palette and basic forest motifs only; DO NOT trace/reproduce the stage layout. Exactly ONE character with two small hands, two short legs and two natural feet. Rich hand-drawn layered scenery, gently feathered ivory-paper vignette, tiny character body and generous airy atmosphere. No words, logos, signage, modern UI, extra people, glamour, long limbs or photoreal rendering. Daily scene and building layout are original fan-art imagination, not an official event or map. Michigami Nareko at an imaginative moss-covered underground stone threshold. NAVY blunt-fringe hair with straight sections ending in small GOLD-banded tied bunches, gold oval twin-guardian headpiece, small key earrings, mustard safari short-sleeve shirt and cargo SHORTS, blue-gold striped short shoulder cape, black short over-knee socks with narrow gold circle/cross-pattern borders, ochre little ankle boots. Exactly two tiny grounded boots fully visible, very short little shins. Holds exactly TWO golden rods: question-hook rod upright in right hand beside body, separate circle/cross-ended straight rod across waist in left. Friendly curious smile as if ready to pose a puzzle. Foreground softly worn dark stone steps with ferns, modest low stone pedestal with three blank geometric puzzle stones, not readable letters or numbers. Large weathered rectangular stone doorway behind, moss and hanging roots, old rough stone walls, a small shaft of cool daylight and a warm side lantern glow; deep passage fades behind door. Echo original underground mossy stone palette, no literal Egyptian desert or giant pharaoh statue, no extra people or weapons. Keep head-to-feet 2.5 heads, do not lengthen legs.
```

## 三张人物比例修订

### ubame

输入：本人物初稿、首批灵梦、首批魔理沙；姥芽与魑魅另输入原作立绘。最终采用上文对应 PNG。

```text
Use case: precise-object-edit. Input 1 is the image to correct. Inputs 2 and 3 are the project's original Reimu and Marisa and MUST define the body ratio. Input 4 is original game costume reference. Correct ONLY the chibi BODY PROPORTIONS of input 1: it currently has too long a torso, skirt and legs. Make the rounded cranium-to-chin head about 38-40 percent of the TOTAL skull-top-to-feet figure height, excluding crown or animal ears. Enlarge the round head modestly, shorten everything below the chin by about 35 percent, shorten arms correspondingly; give a tiny short torso, compact skirt, very short stubby little legs and tiny natural bare feet. About 2.5 heads total as original Reimu/Marisa. Preserve the identity, existing hair silhouette, individual accessories, costume colors/patterns, pose, ivory paper, pencil hatching, cheerful face and exactly two hands/two natural bare feet. Do not create a taller model-like body. Avoid oversize feet, extra digits, long shins, distorted hands or added shoes. Keep gray-blue WAVES, golden leaf crown and purple cloth winding around ochre skirt, black-and-ivory asymmetrical upper panels. Single full figure with ample ivory margins, no words or logos.
```

### chimi

输入：本人物初稿、首批灵梦、首批魔理沙；姥芽与魑魅另输入原作立绘。最终采用上文对应 PNG。

```text
Use case: precise-object-edit. Input 1 is the image to correct. Inputs 2 and 3 are the project's original Reimu and Marisa and MUST define the body ratio. Input 4 is original game costume reference. Correct ONLY the chibi BODY PROPORTIONS of input 1: it currently has too long a torso, skirt and legs. Make the rounded cranium-to-chin head about 38-40 percent of the TOTAL skull-top-to-feet figure height, excluding crown or animal ears. Enlarge the round head modestly, shorten everything below the chin by about 35 percent, shorten arms correspondingly; give a tiny short torso, compact skirt, very short stubby little legs and tiny natural bare feet. About 2.5 heads total as original Reimu/Marisa. Preserve the identity, existing hair silhouette, individual accessories, costume colors/patterns, pose, ivory paper, pencil hatching, cheerful face and exactly two hands/two natural bare feet. Do not create a taller model-like body. Avoid oversize feet, extra digits, long shins, distorted hands or added shoes. Keep exactly SIX long smooth white black-tipped animal EARS, three per side, forehead red mark, white hair, green leaf bodice, red-yellow collar and blue-white wave skirt; ears are NOT wings. No hat, tail or extra ears. Single full figure with ample ivory margins, no words or logos.
```

### nareko

输入：本人物初稿、首批灵梦、首批魔理沙；姥芽与魑魅另输入原作立绘。最终采用上文对应 PNG。

```text
Use case: precise-object-edit. Input 1 is the Nareko image to correct. Inputs 2 and 3 are original Reimu and Marisa. Change ONLY overall chibi BODY PROPORTIONS: shorten torso, shorts and legs below chin by about 30 percent, make short stubby legs, smaller hands and boots; keep round head large so skull-to-chin head is about 38 percent of total skull-top-to-feet height, excluding headpiece. Match Reimu/Marisa's original tiny body and short limbs. Preserve navy straight fringe and gold-banded hair bunches, gold twin-guardian headpiece and key earrings, mustard safari shirt/SHORTS, blue-gold cape, black socks and ochre boots, both distinct gold rods with question-hook and circle/cross ends, warm cheerful face, pencil hatching and ivory paper. Exactly two hands and two naturally attached small boots, ample margins. No adult-like long limbs, added accessories, text, background or other changes.
```
