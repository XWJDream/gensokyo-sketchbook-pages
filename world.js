window.GENSOKYO = {
  places: [
    {id:'shrine',name:'博丽神社',en:'Hakurei Shrine',tag:'结界边的起点',number:'一',x:18,y:59,color:'#a94338',residents:['reimu'],intro:'一座神社，守着两个世界的边界。',description:'博丽灵梦担任巫女的神社，位于幻想乡与外面世界的境界处。解决异变的人从这里出发，熟悉的来客也时常在这里相聚。',note:'看见红白的身影，就知道旅途有了起点。',source:'https://danmaku.jp/archive/character/c001/'},
    {id:'forest',name:'魔法森林',en:'Forest of Magic',tag:'林间的研究日常',number:'二',x:38,y:68,color:'#688064',residents:['marisa'],intro:'沿着树影，找一位普通的魔法使。',description:'茂密的森林里生活着魔法使，也生长着奇异的蘑菇。魔理沙在这里生活、研究魔法；她是掌握魔法的人类，种族并不是妖怪魔法使。',note:'把好奇心带上，跟着扫帚留下的方向。',source:'https://thwiki.cc/魔法森林'},
    {id:'lake',name:'雾之湖',en:'Misty Lake',tag:'冰晶与妖精',number:'三',x:56,y:49,color:'#648e99',residents:['cirno'],intro:'薄雾浮在水上，小小的冰晶闪着光。',description:'琪露诺活动的湖畔，也是红魔馆所在区域的重要风景。在这本画册里，湖水将神社与洋馆的意象连在一起，蓝色的冰翼是最容易认出的记号。',note:'听说，今天也有妖精在湖边宣告自己的厉害。',source:'https://danmaku.jp/archive/character/c012/'},
    {id:'scarlet',name:'红魔馆',en:'Scarlet Devil Mansion',tag:'湖畔的红色洋馆',number:'四',x:74,y:31,color:'#955365',residents:['remilia','sakuya','flandre'],intro:'推开洋馆的门，故事有了另一种颜色。',description:'蕾米莉亚担任主人的洋馆。女仆长咲夜照料着馆中的日常，芙兰朵露也住在这里。不同种族的住民，共同构成红魔馆独特的生活。',note:'阳伞、怀表、彩色晶翼，是这一页的三个记号。',source:'https://danmaku.jp/archive/character/c006/'},
    {id:'nether',name:'白玉楼',en:'Hakugyokurou',tag:'冥界的樱色庭院',number:'五',x:87,y:14,color:'#a2788a',residents:['youmu','yuyuko'],intro:'越过幽明的边界，樱花仍在风里。',description:'位于冥界的宅邸，主人是西行寺幽幽子。妖梦在此照看庭院，并担任护卫与剑术指导。庭院、樱花与漂浮的半灵，是认识她们的一组风景。',note:'云上的构图只是本册的意象，白玉楼属于冥界。',source:'https://danmaku.jp/archive/character/c015/'}
  ],
  bonds: [
    {title:'从神社出发的两个人',label:'朋友 / 灵梦与魔理沙',ids:['reimu','marisa'],relation:'一个凭直觉，一个靠钻研。',description:'灵梦与魔理沙是来往密切的朋友。神社是她们日常相见的地方，而异变又让她们各自走向幻想乡的深处。',color:'red',symbol:'縁'},
    {title:'红色屋檐下的日常',label:'姐妹与从者 / 红魔馆',ids:['remilia','sakuya','flandre'],relation:'姐妹之间，也有从容的守候。',description:'蕾米莉亚与芙兰朵露是姐妹；咲夜是侍奉蕾米莉亚的女仆长。三种不同的性格，让同一座洋馆有了鲜明的层次。',color:'violet',symbol:'館'},
    {title:'樱花与双剑的约定',label:'主从 / 白玉楼',ids:['youmu','yuyuko'],relation:'认真的庭师，悠然的主人。',description:'妖梦侍奉幽幽子，负责庭院、护卫与剑术指导。一个努力而直率，一个总显得从容，她们的故事从白玉楼向外延伸。',color:'green',symbol:'桜'}
  ],
  books: [
    {id:'th06',number:'06',year:'2002',name:'东方红魔乡',jp:'東方紅魔郷',en:'the Embodiment of Scarlet Devil.',mark:'红<br>雾',theme:'scarlet',mood:'盛夏 / 红雾 / 湖畔洋馆',description:'红色浓雾笼罩幻想乡。沿着追查异变的脚步，你会经过湖畔，抵达那座令人难忘的红色洋馆。',ids:['cirno','sakuya','remilia','flandre'],caption:'认识红魔馆的住民与湖畔的冰精。',url:'https://www16.big.or.jp/~zun/html/th06.html',reference:'https://thwiki.cc/东方红魔乡'},
    {id:'th07',number:'07',year:'2003',name:'东方妖妖梦',jp:'東方妖々夢',en:'Perfect Cherry Blossom.',mark:'春<br>雪',theme:'spring',mood:'迟来的春天 / 冥界 / 樱花',description:'冬天迟迟不肯离去，春天仿佛被谁带走了。一路追寻，樱花、双剑与白玉楼的故事逐渐展开。',ids:['youmu','yuyuko'],caption:'从妖梦与幽幽子，读到冥界的春天。',url:'https://www16.big.or.jp/~zun/html/th07.html',reference:'https://thwiki.cc/东方妖妖梦'},
    {id:'th08',number:'08',year:'2004',name:'东方永夜抄',jp:'東方永夜抄',en:'Imperishable Night.',mark:'永<br>夜',theme:'night',mood:'满月之夜 / 搭档 / 竹林',description:'满月出现了不寻常的缺憾，人类与妖怪组成搭档，在夜色中寻找答案。一场关于月亮与漫长夜晚的异变就此开始。',ids:['reimu','marisa','sakuya','remilia','youmu','yuyuko'],caption:'熟悉的住民与各自搭档一起，再次踏上旅途。',url:'https://www16.big.or.jp/~zun/html/th08top.html',reference:'https://thwiki.cc/东方永夜抄'}
  ],
  glossary: [
    {term:'幻想乡与结界',en:'Gensokyo & the boundary',text:'幻想乡是东方 Project 的主要故事舞台，人类、妖怪与其他存在共同生活。博丽大结界将这里与外面世界分隔；博丽神社则与两侧世界的边界紧密相关。',source:'https://thwiki.cc/幻想乡'},
    {term:'异变',en:'An incident',text:'幻想乡中超出日常的异常事件。红雾笼罩天空、春天迟迟不来，都可能成为故事的开端。追查起因、找到当事人，是许多原作游戏的基本线索。',source:'https://thwiki.cc/异变'},
    {term:'弹幕与符卡',en:'Danmaku & spell cards',text:'弹幕是密集又带有图案美感的射击表现。符卡则常以独特名称与弹幕样式呈现角色的招式；幻想乡的符卡规则也让力量悬殊的对手能以约定方式展开较量。',source:'https://thwiki.cc/符卡'},
    {term:'半人半灵',en:'Half-human, half-phantom',text:'魂魄妖梦的种族。她身边漂浮的白色半灵，是她自身的一部分，并不是另养的小宠物。认真看插图时，不妨找找那团跟着她的白色身影。',source:'https://danmaku.jp/archive/character/c015/'},
    {term:'魔法使一定是妖怪吗？',en:'A magician, a human',text:'不一定。魔理沙的种族是人类，“魔法使”描述的是她钻研与使用魔法的身份。东方中也有作为种族的妖怪魔法使，阅读时要分清两种用法。',source:'https://danmaku.jp/archive/character/c002/'},
    {term:'原作、一设与二次创作',en:'Original works & fan creations',text:'原作是上海爱丽丝幻乐团及相关合作作品；“一设”常用来指原作设定。爱好者在这个世界之上创作新的图画、音乐与故事，属于二次创作。本画册就是非官方同人展示。',source:'https://touhou-project.news/guideline/'}
  ],
  characterLinks: {
    reimu:{place:'shrine',related:['marisa'],work:'th06',line:'从红雾异变出发，看看巫女怎样处理不平常的日常。'},
    marisa:{place:'forest',related:['reimu'],work:'th06',line:'沿着她收集线索的脚步，走进人类魔法使的世界。'},
    sakuya:{place:'scarlet',related:['remilia','flandre'],work:'th06',line:'在红魔馆的故事里，认识女仆长与时间的能力。'},
    remilia:{place:'scarlet',related:['flandre','sakuya'],work:'th06',line:'在红雾异变的深处，遇见红魔馆的主人。'},
    flandre:{place:'scarlet',related:['remilia'],work:'th06',line:'红魔乡的 Extra 关卡，是认识恶魔之妹的一扇门。'},
    youmu:{place:'nether',related:['yuyuko'],work:'th07',line:'从春雪异变，读到她守在白玉楼前的身影。'},
    yuyuko:{place:'nether',related:['youmu'],work:'th07',line:'沿着消失的春天，读到白玉楼与西行妖的故事。'},
    cirno:{place:'lake',related:[],work:'th06',line:'红魔乡湖畔的相遇之后，还可以认识以她为主角的《妖精大战争》。'}
  }
};

// 增补册：角色关系、地点入口与原作阅读线索同步更新。
Object.assign(window.GENSOKYO.characterLinks, {
  yukari:{place:null,related:['ran','reimu','yuyuko'],work:'th07',line:'妖妖梦的 Phantasm 关卡之后，再读她与灵梦在永夜抄中的搭档故事。'},
  ran:{place:null,related:['yukari','chen'],work:'th07',line:'从 Extra 关卡认识九尾狐，再沿主从关系理解她与紫、橙的日常。'},
  chen:{place:'mountain',related:['ran','yukari'],work:'th07',line:'在妖妖梦第二关遇见橙；妖怪之山是她的活动区域之一，地图未标出具体居所。'},
  patchouli:{place:'library',related:['remilia','marisa'],work:'th06',line:'红魔乡第四关的图书馆，是认识七曜魔法与这位读书家的入口。'},
  meiling:{place:'scarlet',related:['sakuya','remilia'],work:'th06',line:'先在红魔乡第三关遇见门番，再读洋馆住民的日常。'},
  sanae:{place:'moriya',related:['reimu','aya'],work:'th10',line:'跟随风神录的山路，认识守矢神社、信仰与来自外界的风祝。'},
  aya:{place:'mountain',related:['sanae','reimu'],work:'th10',line:'风神录第四关之外，还可以翻开以她为主角的摄影弹幕游戏《东方文花帖》。'},
  reisen:{place:'eientei',related:[],work:'th08',line:'从永夜抄第五关，走进月兔与永远亭的故事。'}
});
window.GENSOKYO.bonds.push(
  {title:'隙间、狐尾与猫的足迹',label:'两层式神关系 / 紫、蓝与橙',ids:['yukari','ran','chen'],relation:'紫使役蓝，蓝再使役橙。',description:'紫是蓝的主人，蓝又有自己的式神橙。她们并不是血缘亲属，橙也不与紫、蓝同住；沿着主从关系，可以读懂这组熟悉身影之间的联系。',color:'violet',symbol:'式'},
  {title:'门前与书页里的守候',label:'同一座洋馆 / 美铃与帕秋莉',ids:['meiling','patchouli'],relation:'一个守在门前，一个留在书中。',description:'美铃负责红魔馆的门卫工作，帕秋莉则常在图书馆研究魔法。沿着红魔乡的关卡前行，会先后遇见这两位性格与职责各异的住民。',color:'green',symbol:'書'},
  {title:'山风捎来新的消息',label:'山中的相遇 / 早苗与文',ids:['sanae','aya'],relation:'风祝与记者，各有各的步调。',description:'守矢神社的风祝早苗与鸦天狗记者文都在妖怪之山活动。《东方风神录》的山路，串起了瀑布、天狗与神社的相遇。',color:'red',symbol:'風'}
);
window.GENSOKYO.books[0].ids.push('meiling','patchouli');
window.GENSOKYO.books[1].ids.push('chen','ran','yukari');
window.GENSOKYO.books[2].ids.push('yukari','reisen');
window.GENSOKYO.books.push({id:'th10',number:'10',year:'2007',name:'东方风神录',jp:'東方風神録',en:'Mountain of Faith.',mark:'山<br>风',theme:'mountain',mood:'秋日 / 信仰 / 妖怪之山',description:'来自另一座神社的要求打破了日常。沿着秋色中的山路与瀑布向上，天狗的消息与守矢的信仰逐渐浮现。',ids:['reimu','marisa','aya','sanae'],caption:'认识山中的记者与来自外界的风祝。',url:'https://www16.big.or.jp/~zun/html/th10top.html',reference:'https://thwiki.cc/东方风神录'});
window.GENSOKYO.glossary.push(
  {term:'幻想入',en:'Entering Gensokyo',text:'外界逐渐被遗忘或否定的存在、物品流入幻想乡的相关概念。具体怎样进入，要结合故事情境，不能只理解成一扇固定的传送门。',source:'https://thwiki.cc/东方求闻史纪/独白/中日对照'},
  {term:'现人神与风祝',en:'A living god & a wind priestess',text:'早苗既保有人类身份，也作为现人神受到信仰；风祝是她在守矢神社的职责。身份、职业和种族有时需要分别理解。',source:'https://danmaku.jp/archive/character/c021/'},
  {term:'式神',en:'Shikigami',text:'理解使役与凭依关系的概念，不宜简单当成普通宠物。蓝是紫的式神，橙又是蓝的式神；橙在化猫与式神状态下的能力也有区别。',source:'https://danmaku.jp/archive/character/c062/'},
  {term:'旧地狱',en:'Former Hell',text:'地底的旧地狱一带有旧都、地灵殿及灼热地狱遗址等场景。它不是冥界的别名，也不等同于作品中出现的全部地狱。',source:'https://thwiki.cc/东方求闻口授/古明地觉'},
  {term:'污秽',en:'Impurity / kegare',text:'月都相关剧情里与生命、生死和变化有关的概念。它不能仅按灰尘或道德上的恶来理解，须放回月人观念和具体事件中阅读。',source:'https://thwiki.cc/月之都'},
  {term:'作品内的叙述者',en:'Reading a narrator',text:'《求闻史纪》以阿求记录的形式呈现世界。人物有自己的知识、立场与推测；记载的危险度、传闻和事件中的直接表现，需要结合起来读。',source:'https://thwiki.cc/东方求闻史纪/独白/中日对照'}
);
// 第五批的阅读入口，沿活动地点连接，不推定唯一居所。
Object.assign(window.GENSOKYO.characterLinks, {
  suika:{place:'shrine',related:['reimu','yukari','yuugi'],work:'th075',line:'从萃梦想的宴席与薄雾认识萃香，再读她在神社等地的日常。'},
  yuuka:{place:'sunfield',related:[],work:'th09',line:'花映塚是认识现在这位鲜花之主的入口；她在旧作中也有更早的故事。'},
  keine:{place:'terakoya',related:['mokou'],work:'th08',line:'先看永夜抄第三关，再对照 Extra 中白泽形态与妹红的线索。'},
  komachi:{place:'sanzu',related:['eiki'],work:'th09',line:'沿花映塚的花之异变走到三途河，分清摆渡者与裁判者的工作。'},
  eiki:{place:'higan',related:['komachi'],work:'th09',line:'从花映塚终盘读到阎魔的劝诫；“夜摩仙那度”是役职称谓。'},
  byakuren:{place:'myouren',related:['reimu','marisa','sanae'],work:'th12',line:'星莲船的旅程围绕解除封印展开，再读命莲寺建立后的共处与修行。'},
  kogasa:{place:'myouren',related:[],work:'th12',line:'从星莲船第二关遇见遗忘之伞，再读她在寺院墓地的活动；不把她写成白莲弟子。'},
  yuugi:{place:'oldcapital',related:['suika'],work:'th11',line:'地灵殿第三关的旧都，展示了端着酒盏的鬼与地下世界的气氛。'}
});
window.GENSOKYO.books.push(
  {id:'th075',number:'07.5',year:'2004',name:'东方萃梦想',jp:'東方萃夢想',en:'Immaterial and Missing Power.',mark:'宴<br>雾',theme:'feast',mood:'宴席 / 妖雾 / 弹幕格斗',description:'接连的宴席与聚拢的薄雾，牵出幻想乡新的相遇。这部由黄昏边境与上海爱丽丝幻乐团共同制作的作品，以弹幕格斗呈现另一种异变旅程。',ids:['reimu','marisa','yukari','suika'],caption:'从聚散的薄雾，认识宴席中的鬼。',url:'https://tasofro.net/touhou/index.html',reference:'https://thwiki.cc/东方萃梦想'},
  {id:'th09',number:'09',year:'2005',name:'东方花映塚',jp:'東方花映塚',en:'Phantasmagoria of Flower View.',mark:'花<br>彼',theme:'flowers',mood:'百花 / 渡河 / 彼岸的劝诫',description:'不同季节的花同时绽放，调查者循着异常的春色前行。从花田到三途河，再到彼岸，花朵与亡灵的线索逐渐汇合。',ids:['reimu','marisa','yuuka','komachi','eiki'],caption:'把鲜花、摆渡者和裁判者放进各自的故事里。',url:'https://www16.big.or.jp/~zun/html/th09top.html',reference:'https://thwiki.cc/东方花映塚'},
  {id:'th12',number:'12',year:'2009',name:'东方星莲船',jp:'東方星蓮船',en:'Undefined Fantastic Object.',mark:'莲<br>舟',theme:'lotus',mood:'飞船 / 封印 / 人妖共处',description:'空中出现了不可思议的船，宝物的传闻引来调查者。随着旅程深入，妖怪们希望迎回的那个人与久远的封印逐渐显露。',ids:['reimu','marisa','sanae','kogasa','byakuren'],caption:'先遇见路上的遗忘之伞，再走向白莲的重逢。',url:'https://www16.big.or.jp/~zun/html/th12top.html',reference:'https://thwiki.cc/东方星莲船'}
);
window.GENSOKYO.bonds.push(
  {title:'课堂之外，竹林之中',label:'相互理解 / 慧音与妹红',ids:['keine','mokou'],relation:'人里的老师，也理解竹林里的长久岁月。',description:'慧音与妹红关系密切。沿永夜抄的第三关与 Extra 关卡阅读，可以把村落的守护、白泽形态与妹红的故事联系起来。',color:'green',symbol:'史'},
  {title:'渡河之后，还有裁判',label:'工作中的上下级 / 小町与映姬',ids:['komachi','eiki'],relation:'摆渡与裁判，是不同的职责。',description:'小町将死者的灵魂送向彼岸，映姬负责裁判，也会劝诫自己的下属。两人的往来让抽象的死后世界显出具体的工作与性格。',color:'violet',symbol:'岸'},
  {title:'宴席与旧都，各有步调',label:'同为鬼 / 萃香与勇仪',ids:['suika','yuugi'],relation:'地上与地底，都有鬼的身影。',description:'萃香以疏密的能力与聚会相连，勇仪则端着酒盏迎接旧都来客。同属鬼并不代表能力、活动地点与故事完全一样。',color:'red',symbol:'鬼'}
);

// 第三批住民的阅读线索与人物关系。
Object.assign(window.GENSOKYO.characterLinks, {
  alice:{place:'forest',related:['marisa'],work:'th07',line:'先在妖妖梦第三关认识人偶师，再读永夜抄中她与魔理沙的搭档故事。'},
  rumia:{place:null,related:[],work:'th06',line:'红魔乡第一关的夜路，是认识她与黑暗能力的入口；现有地图未指定其住处。'},
  wriggle:{place:null,related:[],work:'th08',line:'从永夜抄第一关与草间的萤火，认识操纵虫子的妖怪；具体居所不作推定。'},
  mystia:{place:null,related:[],work:'th08',line:'永夜抄第二关之外，还可读求闻史纪中关于歌声与夜道的记录。'},
  mokou:{place:'bamboo',related:['kaguya'],work:'th08',line:'永夜抄 Extra 关卡，牵出蓬莱之药与她同辉夜的长期争斗。'},
  kaguya:{place:'eientei',related:['eirin','mokou'],work:'th08',line:'从永夜抄 Final B 走进辉夜、永琳与月亮的故事。'},
  eirin:{place:'eientei',related:['kaguya','reisen','tewi'],work:'th08',line:'先读永夜抄 Final A，再沿医药日常与月之都的线索继续了解永琳。'},
  tewi:{place:'eientei',related:['reisen','eirin'],work:'th08',line:'在永夜抄第五关道中遇见地上的妖怪兔，再区分她与铃仙的出身。'}
});
window.GENSOKYO.characterLinks.marisa.related.push('alice');
window.GENSOKYO.characterLinks.reisen.related.push('eirin','tewi','kaguya');
window.GENSOKYO.bonds.push(
  {title:'丝线与星光的魔法',label:'森林里的魔法使 / 爱丽丝与魔理沙',ids:['alice','marisa'],relation:'同为魔法使，也有不同的来处。',description:'爱丽丝的魔法使是种族，魔理沙仍是人类。两人同在魔法森林活动，也曾在永夜抄中搭档。人偶与星光，让两种魔法各有鲜明的形状。',color:'green',symbol:'糸'},
  {title:'竹林里延续的争斗',label:'长久的对手 / 辉夜与妹红',ids:['kaguya','mokou'],relation:'蓬莱之药，将两个人的岁月相连。',description:'辉夜与妹红有长期而复杂的争斗关系。她们都与蓬莱之药有关，却有不同的出身和经历；阅读时可从永夜抄的最终关卡与 Extra 关卡两端出发。',color:'violet',symbol:'永'},
  {title:'药方与月兔的日常',label:'师徒 / 永琳与铃仙',ids:['eirin','reisen'],relation:'一个传授知识，一个认真学习。',description:'铃仙师从永琳，在永远亭处理工作与生活中的事务。从师徒关系出发，能把月亮的旧事与地上的医药日常连在一起。',color:'red',symbol:'薬'}
);
window.GENSOKYO.books.find(b=>b.id==='th06').ids.push('rumia');
window.GENSOKYO.books.find(b=>b.id==='th07').ids.push('alice');
const nightBook=window.GENSOKYO.books.find(b=>b.id==='th08');
nightBook.ids=['reimu','marisa','alice','reisen','kaguya','eirin','mokou','tewi'];
nightBook.caption='从调查搭档走进竹林，认识月亮与蓬莱的故事。';

Object.assign(window.GENSOKYO.characterLinks, {
  nitori:{place:'genbu',related:['momiji','marisa'],work:'th10',line:'从风神录第三关认识河童，再到地灵殿读她远程支援魔理沙的故事。'},
  momiji:{place:'waterfall',related:['aya','nitori'],work:'th10',line:'风神录第四关的瀑布，连接起哨戒天狗的工作与山中的社会。'},
  kanako:{place:'moriya',related:['suwako','sanae','utsuho'],work:'th10',line:'从风神录最终关卡走进守矢，再沿地灵殿的线索理解山与地底的联系。'},
  suwako:{place:'moriya',related:['kanako','sanae'],work:'th10',line:'风神录 Extra 关卡之后，可继续读守矢的历史与两柱神明的关系。'},
  satori:{place:'palace',related:['koishi','rin','utsuho'],work:'th11',line:'地灵殿第四关的洋馆，是认识读心能力与这位主人的入口。'},
  koishi:{place:'palace',related:['satori','sanae'],work:'th11',line:'地灵殿 Extra 关卡从守矢神社展开，先分清无意识与读心的区别。'},
  rin:{place:'blazing',related:['utsuho','satori'],work:'th11',line:'沿地灵殿中反复出现的黑猫，走到第五关，认识怨灵管理者。'},
  utsuho:{place:'reactor',related:['rin','satori','kanako'],work:'th11',line:'地灵殿最终关卡将地底火力、八咫乌与山中神明的线索连在一起。'}
});
window.GENSOKYO.characterLinks.sanae.related.push('kanako','suwako');
window.GENSOKYO.characterLinks.aya.related.push('momiji','nitori');
window.GENSOKYO.books.find(b=>b.id==='th10').ids=['reimu','marisa','nitori','momiji','aya','sanae','kanako','suwako'];
window.GENSOKYO.books.find(b=>b.id==='th10').caption='顺着山路，遇见河童、天狗与守矢的两柱神明。';
window.GENSOKYO.books.push({id:'th11',number:'11',year:'2008',name:'东方地灵殿',jp:'東方地霊殿',en:'Subterranean Animism.',mark:'地<br>灵',theme:'underground',mood:'冬日 / 怨灵 / 地底的神之火',description:'神社附近涌起间歇泉，也带来了地底的异状。调查者在地上伙伴的支援下深入旧地狱，穿过旧都与洋馆，逐渐接近灼热光芒的来由。',ids:['reimu','marisa','satori','rin','utsuho','koishi'],caption:'从会读心的主人，读到闭上心眼的妹妹与地底伙伴。',url:'https://www16.big.or.jp/~zun/html/th11top.html',reference:'https://thwiki.cc/东方地灵殿'});
window.GENSOKYO.bonds.push(
  {title:'同一座神社，两柱神明',label:'守矢的住民 / 神奈子、诹访子与早苗',ids:['kanako','suwako','sanae'],relation:'来自外界，在山中重新寻找信仰。',description:'神奈子与诹访子同受守矢神社的供奉，早苗担任风祝。三人的身份与过往各不相同，神社的迁入让她们与幻想乡的日常相连。',color:'green',symbol:'祀'},
  {title:'睁开的眼，闭合的眼',label:'姐妹 / 觉与恋',ids:['satori','koishi'],relation:'同属觉妖怪，却拥有不同的能力。',description:'觉可以读心，恋则封闭了第三只眼，以无意识的能力行动。理解这组姐妹，先从她们面对内心与外界的不同方式读起。',color:'violet',symbol:'心'},
  {title:'地底的伙伴与各自的工作',label:'地灵殿的日常 / 燐与空',ids:['rin','utsuho'],relation:'怨灵与火力，交给不同的管理者。',description:'燐与空都是觉的宠物。燐管理怨灵，空调节灼热地狱遗址的火力；围绕空的力量发生的变化，也让燐做出了影响异变的行动。',color:'red',symbol:'火'}
);

window.GENSOKYO.characterLinks.mokou.related.push('keine');
window.GENSOKYO.characterLinks.yukari.related.push('suika');
window.GENSOKYO.books.sort((a,b)=>Number(a.number)-Number(b.number));

Object.assign(window.GENSOKYO.characterLinks, {
  nazrin:{place:null,related:['shou','byakuren'],work:'th12',line:'从星莲船第一关与第五关道中，认识两次寻物任务；帮助星与受毘沙门天派遣并不矛盾。'},
  shou:{place:'myouren',related:['nazrin','byakuren'],work:'th12',line:'星莲船第五关的宝塔线索，连接起白莲复活与毘沙门天代理的身份。'},
  murasa:{place:'myouren',related:['byakuren','shou','nue'],work:'th12',line:'从星莲船第四关与圣辇船的航程出发，再读命莲寺成立后的生活。'},
  nue:{place:'myouren',related:['mamizou','byakuren'],work:'th12',line:'星莲船 Extra 关卡之后，再沿神灵庙读她邀请佐渡旧识的故事。'},
  mamizou:{place:'myouren',related:['nue','kosuzu'],work:'th13',line:'从神灵庙 Extra 关卡认识佐渡来客，再到铃奈庵读她在人里的活动。'},
  kokoro:{place:'village',related:['koishi','mamizou'],work:'th135',line:'心绮楼的希望之面与异变，是理解六十六张面具和情感学习的起点。'},
  kosuzu:{place:'suzunaan',related:['akyuu','mamizou','reimu','marisa'],work:'scrollery',line:'从铃奈庵第一卷的小书店读起，看陌生文字如何把日常带向妖怪的世界。'},
  akyuu:{place:'village',related:['kosuzu','keine','reimu'],work:'memento',line:'以求闻史纪中的幻想乡缘起为入口，同时留意记录者的立场与观察。'}
});
window.GENSOKYO.characterLinks.byakuren.related=['shou','murasa','nue','nazrin'];
window.GENSOKYO.characterLinks.koishi.related.push('kokoro');
window.GENSOKYO.characterLinks.keine.related.push('akyuu');
window.GENSOKYO.books.find(b=>b.id==='th12').ids=['byakuren','nazrin','kogasa','murasa','shou','nue'];
window.GENSOKYO.books.find(b=>b.id==='th12').caption='循着寻物、航程与宝塔，读到白莲复活的旅程。';
window.GENSOKYO.books.push(
  {id:'th13',number:'13',year:'2011',name:'东方神灵庙',jp:'東方神霊廟',en:'Ten Desires.',mark:'神<br>灵',theme:'flowers',mood:'神灵 / 复活 / 佐渡的来客',description:'小小神灵在幻想乡各处出现，调查引向新的复活与信仰故事。这里从 Extra 关卡的二岩猯藏出发，认识被旧识邀请而来的化狸；她并非本篇异变的幕后人物。',ids:['reimu','marisa','sanae','youmu','mamizou','nue'],caption:'先读本篇，再在 Extra 关卡迎接佐渡来客。',url:'https://www16.big.or.jp/~zun/html/th13top.html',reference:'https://thwiki.cc/东方神灵庙'},
  {id:'th135',number:'13.5',year:'2013',name:'东方心绮楼',jp:'東方心綺楼',en:'Hopeless Masquerade.',mark:'心<br>面',theme:'feast',mood:'希望 / 信仰 / 空中的演武',description:'人里的气氛因希望的流失而改变，各路宗教家围绕信仰展开空中较量。循着希望之面的线索，走近平静面孔下正在学习感情的秦心。',ids:['reimu','marisa','byakuren','mamizou','kokoro','koishi'],caption:'一张遗失的面具，牵动许多人的心。',url:'https://tasofro.net/touhou135/',reference:'https://thwiki.cc/东方心绮楼'},
  {id:'memento',number:'',code:'BOOK / 01',year:'2006',name:'东方求闻史纪',jp:'東方求聞史紀',en:'Perfect Memento in Strict Sense.',mark:'记<br>忆',theme:'green',mood:'设定资料 / 人类的观察 / 记录',description:'以阿求编纂的《幻想乡缘起》为重要形式，记录人物、妖怪与各处见闻。它是认识幻想乡的资料入口，也保留着人类叙述者的判断与视角。',ids:['akyuu','reimu','marisa','yukari','keine'],caption:'把记载当作起点，再与其他作品互相参照。',url:'https://data.ichijinsha.co.jp/detail/75801063',reference:'https://thwiki.cc/东方求闻史纪'},
  {id:'scrollery',number:'',code:'BOOK / 02',year:'2012–2017',name:'东方铃奈庵',jp:'東方鈴奈庵',en:'Forbidden Scrollery.',mark:'书<br>铃',theme:'flowers',mood:'漫画 / 书店 / 人里的妖怪故事',description:'ZUN 原作、春河萌绘制的官方漫画，以人里的借书屋与爱书少女小铃为窗口。书页、传闻与来客，让人类和妖怪的距离变得忽远忽近。',ids:['kosuzu','akyuu','mamizou','reimu','marisa'],caption:'连载始于 2012 年；出版社链接为 2013 年出版的第一卷。',url:'https://www.kadokawa.co.jp/product/321211000203/',reference:'https://thwiki.cc/东方铃奈庵'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100: Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
  {title:'宝塔与探宝棒',label:'帮助与监督 / 星与娜兹玲',ids:['shou','nazrin'],relation:'看似主从，也有另一重职责。',description:'星是毘沙门天的代理，娜兹玲则直属毘沙门天。她一面帮助星，一面监督其工作；失而复得的宝塔让这段关系有了具体的故事。',color:'green',symbol:'宝'},
  {title:'航程所向，是一次重逢',label:'复活的旅程 / 白莲与水蜜',ids:['byakuren','murasa'],relation:'船长为解除封印而奔走。',description:'星莲船里的飞行航船通向魔界，也通向白莲的归来。航程之后的寺院生活，则让人与妖怪共处的愿望有了新的舞台。',color:'violet',symbol:'舟'},
  {title:'从佐渡越过结界',label:'旧识 / 鵺与猯藏',ids:['nue','mamizou'],relation:'一封邀请，把外界与幻想乡连起来。',description:'神灵庙的故事中，鵺向佐渡旧识寻求助力。猯藏来到幻想乡后留下，也逐渐走入寺院与人里的后续故事。',color:'red',symbol:'狸'}
);
// 复苏者与云上的来客：阅读入口不替独立空间虚构地图坐标。
Object.assign(window.GENSOKYO.characterLinks, {
  miko:{place:null,related:['futo','tojiko','seiga','byakuren'],work:'th13',line:'沿神灵庙的神灵与复苏线索，读到第六关的圣人，再看心绮楼中的宗教家。'},
  futo:{place:null,related:['miko','tojiko'],work:'th13',line:'从神灵庙第五关与尸解故事读起，留意风水、舟与皿的战斗意象。'},
  tojiko:{place:null,related:['miko','futo'],work:'th13',line:'从第五关道中与神子的战斗，认识以亡灵形态同行的旧日伙伴。'},
  seiga:{place:null,related:['yoshika','miko'],work:'th13',line:'第三关的守卫引出第四关的操纵者，再沿道教传授追溯她与神子的旧缘。'},
  yoshika:{place:null,related:['seiga'],work:'th13',line:'从墓地入口的第三关读到青娥，区分被操纵的僵尸与寺院修行者的身份。'},
  kyouko:{place:'myouren',related:['byakuren','mystia'],work:'th13',line:'从第二关山门前的问候认识山彦，再读她与米斯蒂娅的鸟兽伎乐活动。'},
  tenshi:{place:null,related:['iku','reimu','yukari'],work:'th105',line:'从天气与地震的调查出发，循各角色的故事走向天界与绯想之剑。'},
  iku:{place:null,related:['tenshi'],work:'th105',line:'留意绯想天中的地震预告与龙神消息，认识云海之间的使者。'}
});
window.GENSOKYO.characterLinks.byakuren.related.push('kyouko','miko');
window.GENSOKYO.characterLinks.mystia.related.push('kyouko');
window.GENSOKYO.books.push({id:'th105',number:'10.5',year:'2008',name:'东方绯想天',jp:'東方緋想天',en:'Scarlet Weather Rhapsody.',mark:'绯<br>天',theme:'flowers',mood:'天气 / 地震 / 云上的来客',description:'反常天气笼罩幻想乡，地震的预兆又让调查变得急迫。沿不同人物的故事，认识传递消息的衣玖与介入异变的天子，读到天界与地上彼此牵动的关系。',ids:['tenshi','iku','reimu','yukari'],caption:'天气、要石与绯想之剑，把故事带向云上。',url:'https://tasofro.net/touhou105/',reference:'https://thwiki.cc/东方绯想天'});
Object.assign(window.GENSOKYO.books.find(b=>b.id==='th13'),{
  mood:'神灵 / 复苏 / 佛与道的相遇',
  description:'小小神灵在幻想乡各处出现，调查者从命莲寺的山门、墓地走向沉睡者复苏之处。山彦、僵尸、邪仙与古代的圣人逐一登场，带出信仰、欲望与不老之法的故事。',
  ids:['kyouko','yoshika','seiga','tojiko','futo','miko','mamizou'],
  caption:'本篇从清晨山门走向神子的复苏，Extra 再迎接佐渡来客。'
});
window.GENSOKYO.books.find(b=>b.id==='th135').ids.push('miko','futo');
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
  {title:'复苏之后，仍然同行',label:'旧日的伙伴 / 神子、布都与屠自古',ids:['miko','futo','tojiko'],relation:'相同的等待，不同的存在形态。',description:'布都与屠自古侍奉神子，漫长沉睡之后以不同形态再次行动。尸解仙与亡灵的区别，是阅读这组伙伴时不能略去的部分。',color:'violet',symbol:'道'},
  {title:'额前的符纸，身后的命令',label:'操纵者与僵尸 / 青娥与芳香',ids:['seiga','yoshika'],relation:'墓地的守卫，把来客引向操纵者。',description:'芳香依青娥的指令行动；神灵庙第三、四关让这段关系逐渐显现。画中的温和气氛为编辑想象，不抹去原作中操纵与被操纵的事实。',color:'green',symbol:'符'},
  {title:'回声，也可以成为一首歌',label:'鸟兽伎乐 / 响子与米斯蒂娅',ids:['kyouko','mystia'],relation:'山彦与夜雀组成朋克摇滚组合。',description:'寺院扫除与夜间小摊之外，两位妖怪还有共同的舞台。反射声音的能力与夜雀的歌声，在鸟兽伎乐的活动中相遇。',color:'red',symbol:'声'},
  {title:'云海之间的两种步调',label:'异变中的相遇 / 天子与衣玖',ids:['tenshi','iku'],relation:'天人的行动，与使者传来的预兆。',description:'天子与衣玖在绯想天中各有立场：一位介入地上的异变，一位留意龙神与地震的消息。两人有交集，不宜简化成主人与女仆的关系。',color:'violet',symbol:'云'},
  {title:'不同的信仰，同一个舞台',label:'宗教家 / 神子与白莲',ids:['miko','byakuren'],relation:'佛与道的立场，在后续故事里交锋。',description:'命莲寺与神子的故事在神灵庙相接，心绮楼又让宗教家为人心与信仰较量。阅读双方的想法，比简单划成善恶阵营更接近原作的趣味。',color:'green',symbol:'信'}
);
Object.assign(window.GENSOKYO.characterLinks,{
  wakasagihime:{place:'lake',related:['kagerou','sekibanki'],work:'th14',line:'从辉针城第一关的雾之湖读起，认识淡水人鱼与逸散魔力带来的变化。'},
  sekibanki:{place:'village',related:['wakasagihime','kagerou'],work:'th14',line:'从第二关柳之运河的遭遇，回看她混在人类之间的生活与飞头能力。'},
  kagerou:{place:'bamboo',related:['wakasagihime','sekibanki'],work:'th14',line:'第三关的满月竹林，适合区分狼化的力量与她始终保留的冷静。'},
  benben:{place:null,related:['yatsuhashi','raiko'],work:'th14',line:'从第四关与 Extra 道中，读到古乐器觉醒、称作姐妹与寻找新魔力的经过。'},
  yatsuhashi:{place:null,related:['benben','raiko'],work:'th14',line:'沿第四关的分支与九十九姐妹的设定，留意古琴付丧神对自由的向往。'},
  seija:{place:null,related:['shinmyoumaru'],work:'th14',line:'先读辉针城第五关的翻转，再沿弹幕天邪鬼认识反则道具与追捕。'},
  shinmyoumaru:{place:null,related:['seija','reimu'],work:'th14',line:'从第六关的万宝槌与代价读起，分清她的愿望和正邪灌输给她的说法。'},
  raiko:{place:null,related:['benben','yatsuhashi'],work:'th14',line:'Extra 关卡的节拍之后，是摆脱万宝槌依赖、帮助其他付丧神的故事。'}
});
window.GENSOKYO.characterLinks.reimu.related.push('shinmyoumaru');
window.GENSOKYO.books.push({id:'th14',number:'14',year:'2013',name:'东方辉针城',jp:'東方輝針城',en:'Double Dealing Character.',mark:'逆<br>城',theme:'feast',mood:'道具 / 下克上 / 翻转的城',description:'惯用的道具开始异动，平日安静的妖怪也被卷入骚动。调查从雾之湖与竹林伸向风暴中的逆城，逐渐揭开天邪鬼、小人和万宝槌彼此牵连的经过。',ids:['wakasagihime','sekibanki','kagerou','benben','yatsuhashi','seija','shinmyoumaru','raiko'],caption:'本篇读到小槌的代价，Extra 再听付丧神的新节拍。',url:'https://www16.big.or.jp/~zun/html/th14top.html',reference:'https://thwiki.cc/东方辉针城'});
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
  {title:'湖水与竹影之间的来往',label:'友人 / 若鹭姬与影狼',ids:['wakasagihime','kagerou'],relation:'不同的生活场所，也可以拥有交情。',description:'一位在雾之湖唱歌捡石，一位独居迷途竹林。原作资料中的友人关系让两处场景有了人物上的联系；图页中的湖边相聚是本册创作情境。',color:'green',symbol:'湖'},
  {title:'同时获得声音的姐妹',label:'同期觉醒 / 弁弁与八桥',ids:['benben','yatsuhashi'],relation:'以姐妹相称，彼此并无血缘。',description:'琵琶与古琴在相近时刻成为付丧神，一位扮演成熟的姐姐，一位扮演活泼的妹妹。她们的关系来自共同的觉醒与行动，并非人的家族传承。',color:'violet',symbol:'弦'},
  {title:'为下一次演奏留下力量',label:'传授与帮助 / 雷鼓与九十九姐妹',ids:['raiko','benben','yatsuhashi'],relation:'换一个来源，继续以自己的意志发声。',description:'万宝槌魔力回收时，付丧神可能重新变回器物。雷鼓寻找外界新魔力的办法，也成为九十九姐妹继续存在的重要线索。三人图中的合奏是想象排练。',color:'red',symbol:'拍'},
  {title:'同一场异变，不同的愿望',label:'煽动与利用 / 正邪与针妙丸',ids:['seija','shinmyoumaru'],relation:'万宝槌的力量，连接起动机并不相同的两人。',description:'正邪向针妙丸灌输虚假的历史，让小人的愿望进入自己的颠覆计划。两人后来仍有复杂来往，不能只用永远亲密或永远决裂概括所有作品。',color:'violet',symbol:'逆'}
);
window.GENSOKYO.glossary.push(
  {term:'付丧神',en:'Tsukumogami',text:'器物产生自我意识而成为妖怪，是理解小伞、九十九姐妹与雷鼓的线索。具体的觉醒条件要按角色与作品阅读；辉针城中的万宝槌影响，不能直接当作所有付丧神唯一的诞生方式。',source:'https://thwiki.cc/付丧神'},
  {term:'万宝槌',en:'The Miracle Mallet',text:'与小人族有关的秘宝。针妙丸使用它引发的魔力变化，是辉针城异变的关键；使用力量伴随代价，也影响到道具与周围妖怪。它不是不受限制、随时许愿的普通道具。',source:'https://thwiki.cc/万宝槌'}
);

// 第九批：乐音、时令与两位报人的阅读路线。
Object.assign(window.GENSOKYO.characterLinks,{
  lunasa:{place:null,related:['merlin','lyrica','raiko'],work:'th07',line:'从妖妖梦第四关听见骚灵乐团，再循凭依华的演奏舞台读到与雷鼓的合作。'},
  merlin:{place:null,related:['lunasa','lyrica','raiko'],work:'th07',line:'比较小号的躁动之音与小提琴的忧郁之音，认识三姐妹各自的舞台位置。'},
  lyrica:{place:null,related:['lunasa','merlin','raiko'],work:'th09',line:'妖妖梦中的合奏之外，也可在花映塚跟随她的单人视角，再读乐团后来的变化。'},
  lilywhite:{place:null,related:[],work:'th07',line:'妖妖梦第四关的春讯，把报春妖精与迟来的春天联系起来；图页小径不是固定住处。'},
  hina:{place:'mountain',related:[],work:'th10',line:'从风神录第二关认识厄神，再沿求闻口授中的流雏记载，理解善意与周围厄运的区别。'},
  shizuha:{place:'mountain',related:['minoriko'],work:'th10',line:'从第一关道中的红叶之神，读到姐姐与妹妹分别掌管的秋日意象。'},
  minoriko:{place:'mountain',related:['shizuha'],work:'th10',line:'风神录第一关的丰收之神之后，可沿丰收祭与信仰继续理解她同人类的联系。'},
  hatate:{place:'tengu',related:['aya'],work:'th125',line:'文花帖DS的取材与摄影，把文与果各自的报纸、能力和竞争关系串在一起。'}
});
window.GENSOKYO.characterLinks.aya.related.push('hatate');
window.GENSOKYO.characterLinks.raiko.related.push('lunasa','merlin','lyrica');
window.GENSOKYO.books.find(b=>b.id==='th07').ids.push('lilywhite','lunasa','merlin','lyrica');
window.GENSOKYO.books.find(b=>b.id==='th07').caption='沿报春妖精与骚灵合奏，走向冥界的春天。';
window.GENSOKYO.books.find(b=>b.id==='th09').ids.push('lyrica');
window.GENSOKYO.books.find(b=>b.id==='th10').ids.push('shizuha','minoriko','hina');
window.GENSOKYO.books.push({id:'th125',number:'12.5',year:'2010',name:'东方文花帖DS',jp:'ダブルスポイラー ～ 東方文花帖',en:'Double Spoiler.',mark:'写<br>真',theme:'green',mood:'摄影 / 报刊 / 天狗的取材',description:'以摄影为核心的弹幕取材游戏。文与果的不同视角，让熟悉的妖怪和人类成为相机中的被摄对象；观察、等待与拍下瞬间，构成另一种认识幻想乡的方式。',ids:['aya','hatate','hina','shizuha','minoriko'],caption:'这是 2010 年的 DS 文花帖；与 2005 年的文花帖分开阅读。',url:'https://store.steampowered.com/app/1100170/',reference:'https://thwiki.cc/DS东方文花帖'});
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
  {title:'三种音色，同一支曲子',label:'三姐妹 / 骚灵乐团',ids:['lunasa','merlin','lyrica'],relation:'沉静、昂扬与幻想的声音，在合奏里相遇。',description:'露娜萨负责小提琴并担任领队，梅露兰负责小号，莉莉卡主要演奏键盘。三位都是骚灵，不是由她们手中的乐器变成的付丧神。',color:'violet',symbol:'奏'},
  {title:'新节拍，让乐团继续',label:'普莉兹姆利巴 with H / 骚灵与付丧神',ids:['lunasa','merlin','lyrica','raiko'],relation:'雷鼓加入节奏声部，乐团有了新的名字。',description:'雷鼓与三姐妹的合作有原作线索，和上一页九十九姐妹的想象排练需分别理解。凭依华的太阳花田演奏舞台，可作为继续阅读的入口。',color:'red',symbol:'拍'},
  {title:'秋天的两种颜色',label:'姐妹 / 静叶与穰子',ids:['shizuha','minoriko'],relation:'姐姐掌管红叶，妹妹掌管丰收。',description:'红叶的寂寞与收获的喜悦，是秋姐妹各自鲜明的侧面。她们并非同一位神的两套衣装；季节流转又让两人的故事相互呼应。',color:'green',symbol:'秋'},
  {title:'同一阵风，两份新闻',label:'同行与竞争 / 文与果',ids:['aya','hatate'],relation:'各自办报，也各自寻找取材的方法。',description:'《文文。新闻》与《花果子念报》属于不同报人。文的奔走取材与果的念写形成对照；两人有竞争关系，不能简化成上司和助手。',color:'violet',symbol:'报'}
);
window.GENSOKYO.glossary.push(
  {term:'骚灵与乐器付丧神',en:'Poltergeists & instrument tsukumogami',text:'三姐妹是骚灵，雷鼓与九十九姐妹则是乐器付丧神。都能成为演奏者，并不代表相同种族；本册把她们放在同一主题筛选中，方便比较身份与乐音。',source:'https://danmaku.jp/archive/character/c031/'},
  {term:'念写与天狗报刊',en:'Spirit photography & tengu newspapers',text:'姬海棠果的念写是能力，取材与办报是工作。获得图像不等于完成现场调查；文与果各自的报道，也保留着记者的立场与取舍。',source:'https://thwiki.cc/姬海棠果'}
);

// 第十批：从妖精的漫画日常，读到冬日与地底。
Object.assign(window.GENSOKYO.characterLinks,{
 sunny:{place:'shrine',related:['luna','star','cirno'],work:'sangetsu',line:'从三月精的共同日常认识折光，再在妖精大战争中看一次恶作剧如何演变成冲突。'},
 luna:{place:'shrine',related:['sunny','star'],work:'sangetsu',line:'沿漫画中的声音与恶作剧，认识月光妖精；她并非月都的居民。'},
 star:{place:'shrine',related:['sunny','luna'],work:'sangetsu',line:'观察三人行动里负责感知的一位，再比较她与同伴不同的性格和翅膀。'},
 medicine:{place:null,related:[],work:'th09',line:'沿花映塚中的铃兰与毒素，认识获得自我意识的人偶；无名之丘尚未收入地图册。'},
 letty:{place:null,related:['cirno'],work:'th07',line:'从妖妖梦第一关的冬之妖怪读起，区分寒冷与冰、妖怪与妖精，也不编造夏季住所。'},
 kisume:{place:null,related:['yamame'],work:'th11',line:'从地灵殿第一关道中的吊桶与鬼火读起，保留原作尚未展开的身世。'},
 yamame:{place:null,related:['kisume','parsee'],work:'th11',line:'从幻想风穴第一关读到土蜘蛛，再沿后续作品认识她的吐丝、建筑与地底生活。'},
 parsee:{place:null,related:['yamame','yuugi'],work:'th11',line:'第二关的地底桥与嫉妒心，把旅程引向旧都；桥尚未收入地图册，不指定为旧都内部。'}
});
window.GENSOKYO.characterLinks.cirno.related.push('sunny','luna','star','letty');
window.GENSOKYO.books.find(b=>b.id==='th07').ids.push('letty');
window.GENSOKYO.books.find(b=>b.id==='th09').ids.push('medicine');
window.GENSOKYO.books.find(b=>b.id==='th11').ids.unshift('kisume','yamame','parsee');
window.GENSOKYO.books.find(b=>b.id==='th11').caption='从风穴、桥与旧都，走向地灵殿的主人和地底伙伴。';
window.GENSOKYO.books.push(
 {id:'th128',number:'12.8',year:'2010',name:'妖精大战争',jp:'妖精大戦争 ～ 東方三月精',en:'Fairy Wars.',mark:'冰<br>战',theme:'spring',mood:'妖精 / 恶作剧 / 冰冻弹幕',description:'琪露诺因三妖精破坏自己的冰屋而发起挑战。上海爱丽丝幻乐团制作的弹幕游戏，以冻结弹幕的玩法和妖精之间的争执，延伸漫画三月精的故事。',ids:['cirno','sunny','luna','star'],caption:'游戏初发于 2010 年，区别于之后的 Steam 上架时间。',url:'https://store.steampowered.com/app/1100180/',reference:'https://thwiki.cc/妖精大战争'},
 {id:'sangetsu',number:'',code:'BOOK / 03',year:'2008 · 第一卷',name:'东方三月精',jp:'東方三月精 Strange and Bright Nature Deity',en:'Strange and Bright Nature Deity.',mark:'三<br>光',theme:'green',mood:'漫画 / 三只妖精 / 恶作剧的日常',description:'ZUN 原作、比良坂真琴绘制的官方漫画系列，以日光、月光、星光三只妖精的生活为入口。这里链接第二系列第一卷；三月精还包括由其他副标题区分的系列，不能用这一卷的出版时间概括全部。',ids:['sunny','luna','star','reimu','marisa'],caption:'此处为第二系列的纸本第一卷，2008 年出版；并非三妖精的初登场年份。',url:'https://www.kadokawa.co.jp/product/200708000492/',reference:'https://thwiki.cc/东方三月精'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'把光、声音与气息放在一起',label:'共同生活 / 光之三妖精',ids:['sunny','luna','star'],relation:'不同的能力，配合出同一场恶作剧。',description:'桑尼折射光线，露娜消除声音，斯塔感知周围动静。她们是同住的伙伴，“三妖精”并不意味着血缘姐妹，也不是三位天体的神明。',color:'green',symbol:'光'},
 {title:'一封战书，几只妖精的春天',label:'游戏中的冲突 / 琪露诺与三妖精',ids:['cirno','sunny','luna','star'],relation:'冰屋被破坏，成为妖精大战争的导火索。',description:'这场冲突连接了三月精漫画与妖精大战争。她们的来往还有其他日常，不适合把一部作品里的争斗写成永远敌对的关系。',color:'violet',symbol:'冰'},
 {title:'顺着风，走向桥的另一端',label:'关卡阅读 / 风穴与地底通道',ids:['kisume','yamame','parsee'],relation:'先遇见道中的吊桶，再遇见土蜘蛛与桥姬。',description:'地灵殿第一、二关串起三位角色的登场顺序。这是阅读旅程的关联，不声称三人组成固定队伍；场景中的相聚为本册创作。',color:'red',symbol:'桥'}
);
window.GENSOKYO.glossary.push(
 {term:'妖精与自然',en:'Fairies & natural phenomena',text:'妖精与自然现象密切相关。琪露诺、报春的莉莉白和光之三妖精各有能力，不能因为外表年幼、长着翅膀便视为相同角色；蕾蒂则是妖怪，非另一种冰妖精。',source:'https://thwiki.cc/妖精'},
 {term:'无名之丘与铃兰',en:'Nameless Hill & lily of the valley',text:'无名之丘的铃兰花原与梅蒂欣的诞生、毒素能力相关。它不是幽香的太阳花田；两处都与花有关，不能合并成同一个地点或替两位角色编造主从关系。',source:'https://thwiki.cc/无名之丘'}
);


// 第十一批：从地上的月兔，读向梦境、月都与异界。
Object.assign(window.GENSOKYO.characterLinks,{
 seiran:{place:'village',related:['ringo','reisen'],work:'th15',line:'从绀珠传第一关的潜伏队员读起，再看她留在地上经营团子的日常。'},
 ringo:{place:'village',related:['seiran','reisen'],work:'th15',line:'第二关的情报队员以团子增强力量，后来也在人里开起自己的小摊。'},
 doremy:{place:null,related:['sagume'],work:'th15',line:'第三关的梦中旅程与探女的安排相接；梦中的月都需要与现实月都区分。'},
 sagume:{place:null,related:['doremy','eirin'],work:'th15',line:'第四关的逆转言语之后，回看月都危机与梦中都市的计划。'},
 clownpiece:{place:'shrine',related:['hecatia','junko','sunny','luna','star'],work:'th15',line:'第五关的地狱妖精之后，可沿三月精继续读她来到博丽神社的日常。'},
 junko:{place:null,related:['hecatia','clownpiece','reisen'],work:'th15',line:'从第六关的复仇动机读到 Extra 的合作，名字与衣装意象并不等于狐妖种族。'},
 hecatia:{place:null,related:['junko','clownpiece'],work:'th15',line:'沿 Extra 认识拥有三个身体的女神，区分统一意识、不同形态与她的部下。'},
 yorihime:{place:null,related:['eirin','reisen'],work:'bougetsusho',line:'沿儚月抄漫画中的月之使者与地上来客，认识永琳曾教导的月之公主。'}
});
window.GENSOKYO.characterLinks.reisen.related.push('seiran','ringo','yorihime');
window.GENSOKYO.characterLinks.eirin.related.push('yorihime','sagume');
for(const id of ['sunny','luna','star'])window.GENSOKYO.characterLinks[id].related.push('clownpiece');
window.GENSOKYO.books.push(
 {id:'th15',number:'15',year:'2015',name:'东方绀珠传',jp:'東方紺珠伝',en:'Legacy of Lunatic Kingdom.',mark:'月<br>梦',theme:'night',mood:'月兔 / 梦境 / 月都的危机',description:'月兔的地上调查，引出梦境与月之都的危机。故事从山麓走向梦中的月都、月面与复仇者，让地上居民、月之民和地狱来客的立场彼此相接。',ids:['seiran','ringo','doremy','sagume','clownpiece','junko','hecatia','reisen'],caption:'游戏初发于 2015 年；月面冲突与梦境中的计划需要分别理解。',url:'https://store.steampowered.com/app/937580/',reference:'https://thwiki.cc/东方绀珠传'},
 {id:'bougetsusho',number:'',code:'BOOK / 04',year:'2008 · 上卷',name:'东方儚月抄',jp:'東方儚月抄 ～ Silent Sinner in Blue.',en:'Silent Sinner in Blue.',mark:'月<br>抄',theme:'night',mood:'漫画 / 月之公主 / 地上与月都',description:'ZUN 原作、秋★枝绘制的官方漫画，从地上来客的月都计划认识绵月姐妹与永琳的旧缘。这里链接漫画上卷；儚月抄另有小说与四格版本，应按具体版本阅读。',ids:['yorihime','eirin','kaguya','reisen','reimu','remilia'],caption:'漫画上卷于 2008 年出版，不以这一卷的年份概括整个儚月抄企划。',url:'https://data.ichijinsha.co.jp/detail/75806089',reference:'https://thwiki.cc/东方儚月抄'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'离开任务，遇见新的日常',label:'前同僚与同行 / 清兰与铃瑚',ids:['seiran','ringo'],relation:'曾在同一部队，如今各有自己的团子摊。',description:'两位都曾属于 Eagle Rabbit，负责的任务不同。后来在人类村落做团子生意，仍各有店名与生活；画中的并排摊位是想象，不把她们写成血缘姐妹或合伙店主。',color:'green',symbol:'团'},
 {title:'在梦里，再造一座都市',label:'计划与协助 / 探女与哆来咪',ids:['sagume','doremy'],relation:'月都的危机，引出梦中都市的安排。',description:'绀珠传中探女与哆来咪的联系，是理解梦中月都的重要线索。梦境再现与现实月都不是同一个场所，也不能据此把哆来咪写成月之公主。',color:'violet',symbol:'梦'},
 {title:'不同来历，同一次合作',label:'朋友与合作者 / 纯狐与赫卡提亚',ids:['junko','hecatia'],relation:'复仇者与地狱女神，在月都事件中联手。',description:'纯狐的动机与赫卡提亚的立场需要分别阅读。她们有朋友与合作关系，不能因为常与皮丝同框，便把三位改写成原作确定的血缘家庭。',color:'red',symbol:'界'},
 {title:'火把，也照见后来的生活',label:'女神与部下 / 赫卡提亚与皮丝',ids:['hecatia','clownpiece'],relation:'地狱的上下属，也有亲近随和的来往。',description:'克劳恩皮丝是赫卡提亚的部下。月面冲突之后，皮丝来到幻想乡；可沿三月精继续读她与神社、光之三妖精的联系。',color:'violet',symbol:'灯'},
 {title:'月都旧日的教导',label:'曾经的师徒 / 永琳与依姬',ids:['eirin','yorihime'],relation:'如今相隔地月，过去的教导仍是关系线索。',description:'永琳曾教导绵月姐妹，依姬则在月都承担月之使者相关事务。沿儚月抄阅读两人的旧缘，不将如今的居所、职位与旧日关系混为一谈。',color:'green',symbol:'月'}
);
window.GENSOKYO.glossary.push(
 {term:'梦境世界',en:'The Dream World',text:'与生物的梦有关的世界，哆来咪在其中管理梦境。梦中的月都再现属于绀珠传的特定安排；不等于现实月都被整体搬走，也不是从地上随意步行可达的普通地区。',source:'https://thwiki.cc/梦境世界'},
 {term:'三个身体，一个意识',en:'Three bodies, one consciousness',text:'赫卡提亚分别在月、地球与异界的地狱拥有身体，意识相通。发色、头顶星球随形态变化；三枚星球意象不代表三位互不相干的女神，红发异界形态也不是另一个角色。',source:'https://danmaku.jp/archive/character/c057/'}
);


// 第十二批：把四季异变接回神社、森林与人物各自的生活。
Object.assign(window.GENSOKYO.characterLinks,{
 eternity:{place:'sunfield',related:['cirno','clownpiece','sunny','luna','star'],work:'th16',line:'从天空璋第一关的盛夏读起，再沿三月精理解妖精与生命力的变化。'},
 nemuno:{place:'mountain',related:['marisa'],work:'th16',line:'第二关的红叶山路与山姥的圣域，适合分开理解领地、来客与天狗族群的关系。'},
 aunn:{place:'shrine',related:['reimu','okina'],work:'th16',line:'从第三关的神社樱花读到自发守护，再追溯她获得身体的来历。'},
 narumi:{place:'forest',related:['marisa','mai'],work:'th16',line:'第四关的雪中地藏，把森林魔力、生命与背后之门连接起来。'},
 mai:{place:null,related:['satono','okina','narumi'],work:'th16',line:'四关道中的行动之后，与里乃在第五关相遇，留意生命力与精神力的分工。'},
 satono:{place:null,related:['mai','okina'],work:'th16',line:'沿第五关与 Extra 道中认识二童子，舞蹈是为主人行动的仪式。'},
 okina:{place:null,related:['mai','satono','yukari','aunn'],work:'th16',line:'从第六关与 Extra 的门扉和季节线索，认识贤者之一与她的多重神格。'},
 toyohime:{place:null,related:['yorihime','eirin','reisen'],work:'bougetsusho',line:'沿儚月抄阅读姐姐的山海能力，与妹妹召请神灵的力量分开理解。'}
});
window.GENSOKYO.characterLinks.reimu.related.push('aunn');
window.GENSOKYO.characterLinks.marisa.related.push('narumi','nemuno');
window.GENSOKYO.characterLinks.yukari.related.push('okina');
window.GENSOKYO.characterLinks.cirno.related.push('eternity');
window.GENSOKYO.characterLinks.clownpiece.related.push('eternity');
window.GENSOKYO.characterLinks.yorihime.related.push('toyohime');
window.GENSOKYO.characterLinks.eirin.related.push('toyohime');
window.GENSOKYO.books.find(b=>b.id==='bougetsusho').ids.unshift('toyohime');
window.GENSOKYO.books.push({id:'th16',number:'16',year:'2017',name:'东方天空璋',jp:'東方天空璋',en:'Hidden Star in Four Seasons.',mark:'四<br>季',theme:'spring',mood:'四季异变 / 生命力 / 背后之门',description:'不同季节在同一时刻出现，调查者沿盛夏、红叶、樱花和飞雪遇见各地住民。背后之门把异常引向二童子与秘神，也让人重新留意妖精、信仰与生命力之间的联系。',ids:['eternity','nemuno','aunn','narumi','mai','satono','okina'],caption:'原作初发于 2017 年；四季并置是异变中的异常，不代表幻想乡永远按此分区。',url:'https://store.steampowered.com/app/745880/',reference:'https://thwiki.cc/东方天空璋'});
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'不必吩咐，也会留下',label:'神社的守护 / 灵梦与阿吽',ids:['reimu','aunn'],relation:'狛犬主动守护，巫女仍有自己的步调。',description:'阿吽对神佛与信仰场所的守护出于自身性质。她与灵梦的日常有原作线索，画中一同站在石阶旁的时刻为本册想象，不将她写成被雇佣的门卫。',color:'red',symbol:'守'},
 {title:'两种力量，同一场舞',label:'同僚搭档 / 舞与里乃',ids:['mai','satono'],relation:'竹枝引生命力，茗荷引精神力。',description:'二童子分别通过背后起舞诱导不同的力量，配合执行主人的行动。衣色、植物与发型可帮助辨认；“二童子”不意味着血缘姐妹或两种力量完全相同。',color:'green',symbol:'舞'},
 {title:'门扉之后，谁在发出命令',label:'秘神与部下 / 隐岐奈和二童子',ids:['okina','mai','satono'],relation:'主人计划与执行者所知，并不总是完全重合。',description:'天空璋里，两位二童子为隐岐奈执行行动，关于寻找伙伴与寻找继任者的理解却存在差别。读到亲切的舞台画面时，也保留原作中的主从与控制关系。',color:'violet',symbol:'户'},
 {title:'月上的姐妹，地上的旧师',label:'姐妹与旧师 / 丰姬、依姬与永琳',ids:['toyohime','yorihime','eirin'],relation:'姐姐连接山海，妹妹召请神灵。',description:'绵月姐妹同为月之公主，永琳曾教导两人。亲缘、师承与如今所处的地月位置各有线索；不能把一人的能力、服饰或性格直接套到另一人身上。',color:'violet',symbol:'月'},
 {title:'森林里的另一种魔法',label:'相识与调查 / 魔理沙与成美',ids:['marisa','narumi'],relation:'使用魔法的人类，遇见由石像获得生命的魔法使。',description:'两位都生活在魔法森林，却有不同的来历与能力。天空璋的对话让调查继续伸向背后之门；雪径中并肩停留是本册创作，不将魔理沙误写为创造了成美的人。',color:'green',symbol:'森'},
 {title:'冰与凤蝶，都被夏天唤醒',label:'异变中的结识 / 琪露诺与拉尔瓦',ids:['cirno','eternity'],relation:'四季异变，使妖精感受到不同寻常的力量。',description:'两位在天空璋的盛夏相遇，后来各有活动与来往。拉尔瓦的凤蝶翅膀与琪露诺的冰翼并不相同，能力变化也应放回具体作品情境理解。',color:'red',symbol:'夏'}
);
window.GENSOKYO.glossary.push(
 {term:'后户与背后之门',en:'Back doors & the Land of the Back Door',text:'隐岐奈能在万物背面开启门扉，后户之国则是与她相关的独立空间。门扉可关联生命力、精神力和行动路线；它不等同于博丽大结界，也不能把画页里的任意一扇门当成官方通路。',source:'https://danmaku.jp/archive/character/c059/'},
 {term:'二童子的两种力量',en:'Vitality & mental energy',text:'舞的背后起舞诱导生命力，里乃则诱导精神力。原为人类的两人已被改变，几乎不记得过去；“童子”是角色关系与仪式中的称谓，不能据此外推她们的血缘或普通人类年龄。',source:'https://danmaku.jp/archive/character/c043/'}
);


Object.assign(window.GENSOKYO.characterLinks,{
 rinnosuke:{place:'kourindou',related:['marisa','sumireko','reimu'],work:'kourindou-book',line:'从香霖堂早期的旧物故事读起，再沿后续连载看店主与外界来客的变化。'},
 miyoi:{place:'village',related:['suika','reimu','marisa'],work:'lotus-eaters',line:'从醉蝶华第一卷的人里酒馆与传闻入门，留意记忆、酒器与店员的来历。'},
 ichirin:{place:'myouren',related:['unzan','byakuren','murasa','shou'],work:'th12',line:'从星莲船第三关认识守护者，再沿心绮楼与凭依华看寺院伙伴的后续活动。'},
 unzan:{place:'myouren',related:['ichirin','byakuren','murasa'],work:'th12',line:'与一轮共同登场的云山，有自己的性格与力量；后续作品也描写他的寺院生活。'},
 kasen:{place:null,related:['reimu','sumireko','komachi','okina'],work:'th145',line:'茨歌仙的日常之外，可由深秘录的都市传说调查认识她与堇子的联系。'},
 sumireko:{place:'kourindou',related:['rinnosuke','kasen','reimu','doremy'],work:'th145',line:'从深秘录的外界来客读起；地图入口仅关联后来打工的香霖堂，不表示她住在幻想乡。'},
 joon:{place:null,related:['shion','byakuren'],work:'th155',line:'从凭依华的完全凭依事件认识姐妹，再按作品区分女苑修行与后续活动。'},
 shion:{place:null,related:['joon','tenshi'],work:'th155',line:'比较姐妹的两种不幸，也可沿茨歌仙的后续来往阅读她与天子的结伴。'}
});
window.GENSOKYO.characterLinks.marisa.related.push('rinnosuke');
window.GENSOKYO.characterLinks.reimu.related.push('kasen','miyoi','sumireko');
window.GENSOKYO.characterLinks.byakuren.related.push('ichirin','unzan','joon');
window.GENSOKYO.characterLinks.suika.related.push('miyoi');
window.GENSOKYO.characterLinks.tenshi.related.push('shion');
window.GENSOKYO.characterLinks.doremy.related.push('sumireko');
window.GENSOKYO.books.find(b=>b.id==='th12').ids.push('ichirin','unzan');
window.GENSOKYO.books.find(b=>b.id==='th135').ids.push('ichirin','unzan');
window.GENSOKYO.books.push(
 {id:'th145',number:'14.5',year:'2015',name:'东方深秘录',jp:'東方深秘録',en:'Urban Legend in Limbo.',mark:'怪<br>谈',theme:'night',mood:'都市传说 / 外界来客 / 灵异珠',description:'都市传说在幻想乡具现，灵异珠的流通又引来外面世界的高中生。沿不同角色的调查，认识堇子的动机与华扇的行动，并把都市传说的说法和实际发生的事件分开阅读。',ids:['sumireko','kasen','reimu','ichirin'],caption:'2015 年的格斗作品；外界、结界与来访方式需结合后续故事继续理解。',url:'https://tasofro.net/touhou145/',reference:'https://thwiki.cc/东方深秘录'},
 {id:'th155',number:'15.5',year:'2017',name:'东方凭依华',jp:'東方憑依華',en:'Antinomy of Common Flowers.',mark:'凭<br>花',theme:'flowers',mood:'完全凭依 / 搭档 / 梦与现实',description:'完全凭依让不同角色结成搭档，主役与下仆的切换又带来计划、争执和反转。依神姐妹与梦境住民的行动，让这场调查同时牵动现实与梦中的立场。',ids:['joon','shion','doremy','sumireko','tenshi','ichirin'],caption:'原作初发于 2017 年，Steam 版于 2018 年发行；不把两者混为同一日期。',url:'https://tasofro.net/touhou155/',reference:'https://thwiki.cc/东方凭依华'},
 {id:'kourindou-book',number:'',code:'BOOK / 05',year:'2010 · 单行本',name:'东方香霖堂',jp:'東方香霖堂',en:'Curiosities of Lotus Asia.',mark:'旧<br>物',theme:'green',mood:'小说 / 旧货店 / 对外界的推想',description:'ZUN 撰写的故事，以霖之助经营的旧货店为观察窗口。外界器物、人物来往与店主的推理，让读者从日常理解幻想乡；这里链接早期单行本，不将后来堇子的打工情节归入 2010 年这本书。',ids:['rinnosuke','marisa','reimu'],caption:'本入口为 2010 年单行本；后续在外来韦编等处继续连载。',url:'https://www.kadokawa.co.jp/product/201007000662/',reference:'https://thwiki.cc/东方香霖堂'},
 {id:'lotus-eaters',number:'',code:'BOOK / 06',year:'2020 · 第一卷',name:'东方醉蝶华',jp:'東方酔蝶華',en:'Lotus Eaters.',mark:'酒<br>话',theme:'feast',mood:'漫画 / 鲵吞亭 / 记忆与传闻',description:'ZUN 原作、水炊绘制的官方漫画，从人里酒馆与客人的传闻走近美宵。料理、闲谈与记忆中的异常，让普通夜晚也成为调查的开端。',ids:['miyoi','suika','reimu','kasen'],caption:'此处为第一卷的出版资料，2020 年发行，不代表漫画开始连载的时间。',url:'https://www.kadokawa.co.jp/product/322005000454',reference:'https://thwiki.cc/东方醉蝶华'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'守护，也被另一人理解',label:'寺院伙伴 / 一轮、云山与白莲',ids:['ichirin','unzan','byakuren'],relation:'两位互相帮助的伙伴，同在白莲门下。',description:'一轮与云山的来历、守护和寺院生活各有原作线索。他们情同父女而非确认的血缘父女；云山也不是一轮的无生命法具。白莲是两人敬仰的修行引路人。',color:'violet',symbol:'云'},
 {title:'知道名字之后，怎样使用',label:'旧物与来客 / 霖之助、魔理沙与堇子',ids:['rinnosuke','marisa','sumireko'],relation:'店主的能力、长期交情与外界常识，在同一间店相遇。',description:'魔理沙与霖之助有旧日交情，堇子后来在店中打工，帮助理解外界器物。这条关系跨越早期香霖堂与后续连载，不把三人的全部故事都归入同一本单行本。',color:'green',symbol:'物'},
 {title:'又一句劝告，又一次帮忙',label:'指导与往来 / 华扇与灵梦',ids:['kasen','reimu'],relation:'严肃的提醒，也来自对日常的关心。',description:'华扇常到神社帮助或指导灵梦，灵梦也会嫌她唠叨。两人的往来贯穿茨歌仙；不能只因劝告与修行，就推定所有时候都存在正式的师徒职位关系。',color:'red',symbol:'劝'},
 {title:'酒器之外，还有未讲完的来历',label:'酒馆线索 / 美宵与萃香',ids:['miyoi','suika'],relation:'美宵的座敷童子身份，与萃香的酒器相关。',description:'醉蝶华逐渐展开美宵、酒器和鲵吞亭的联系。她在酒馆工作，不等于普通人类店员；人物的记忆与立场也要沿漫画具体情节理解。',color:'green',symbol:'亭'},
 {title:'同为不幸，却有两种来路',label:'姐妹 / 女苑与紫苑',ids:['joon','shion'],relation:'妹妹使人耗财，姐姐让自己也陷入不幸。',description:'依神姐妹共同参与凭依华的异变，能力与性格却截然不同。光鲜与寒酸的衣装是辨认线索，不用来直接替代对行为、动机和后续变化的阅读。',color:'violet',symbol:'双'},
 {title:'强运容得下的同伴',label:'后续结伴 / 天子与紫苑',ids:['tenshi','shion'],relation:'天子的强运，让这段相处有了不同的可能。',description:'凭依华之后，两人曾一起行动，茨歌仙也有后续描写。结伴不意味着紫苑永久居住天界，也不能把天子对不幸的抗性推成所有人都不再受影响。',color:'red',symbol:'运'}
);
window.GENSOKYO.glossary.push(
 {term:'用途与使用方法',en:'Purpose & operation',text:'霖之助可以判别物品的名称与用途，却不能直接知道操作方法。这既适合经营外界旧物，也留下推理与误解的空间；店主的一切解释并不自动成为原作世界的客观定论。',source:'https://thwiki.cc/森近霖之助'},
 {term:'完全凭依',en:'Perfect possession',text:'凭依华中形成搭档、切换主役与下仆的现象，与梦境世界也有联系。它是作品中有具体机制与情境的异常，不等同于所有附身传说，也不能把每组搭档视作永久的主从身份。',source:'https://thwiki.cc/东方凭依华/故事背景'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 eika:{place:'sanzu',related:['urumi','komachi'],work:'th17',line:'从第一关的垒石与水子伙伴读起；地图仅提供三途河相关区域入口，不标定赛之河原坐标。'},
 urumi:{place:'sanzu',related:['eika','komachi'],work:'th17',line:'沿第二关认识牛鬼过去的袭击方式与如今的养鱼生活，分清石婴和真实婴儿。'},
 kutaka:{place:null,related:['eiki','saki'],work:'th17',line:'第三关的彼岸关口是工作地，妖怪之山瀑布上方才是居住线索；本册未标定她的住宅。'},
 yachie:{place:null,related:['saki','yuuma','keiki'],work:'th17',line:'从第四关的引导继续读组织竞争，留意动物灵叙述与人间灵处境的差别。'},
 mayumi:{place:null,related:['keiki','yachie'],work:'th17',line:'第五关的埴轮兵长把创造、忠心与实体的力量接起来，不把灵长园标在旧地狱。'},
 keiki:{place:null,related:['mayumi','yachie','saki'],work:'th17',line:'沿第六关比较保护与统治的两面，结合人间灵的祈求理解造形神。'},
 saki:{place:null,related:['yachie','yuuma','kutaka'],work:'th17',line:'Extra 的黑天马首领属于劲牙组，部下以狼灵为代表；与鬼杰组分别阅读。'},
 yuuma:{place:null,related:['yachie','saki','okina'],work:'th175',line:'鬼形兽中先有提及，刚欲异闻才正式登场；沿黑水线索阅读吸收能力与各方计划。'}
});
window.GENSOKYO.characterLinks.eiki.related.push('kutaka');
window.GENSOKYO.characterLinks.komachi.related.push('eika','urumi');
window.GENSOKYO.characterLinks.okina.related.push('yuuma');
window.GENSOKYO.books.push(
 {id:'th17',number:'17',year:'2019',name:'东方鬼形兽',jp:'東方鬼形獣',en:'Wily Beast and Weakest Creature.',mark:'灵<br>像',theme:'green',mood:'动物灵 / 人间灵 / 偶像与组织',description:'动物灵来到地上，调查者从赛之河原、三途河与关口进入更深的冲突。畜生界的组织竞争、受压迫的人间灵与造形神的偶像，让同一场战斗呈现不同阵营的说法。',ids:['eika','urumi','kutaka','yachie','mayumi','keiki','saki'],caption:'2019 年发行；尤魔在本作中被提及，本人正式登场于刚欲异闻。',url:'https://store.steampowered.com/app/1079160/',reference:'https://thwiki.cc/东方鬼形兽'},
 {id:'th175',number:'17.5',year:'2021',name:'东方刚欲异闻',jp:'東方剛欲異聞 ～ 水没した沈愁地獄',en:'Sunken Fossil World.',mark:'黑<br>水',theme:'night',mood:'黑水 / 地底调查 / 贪欲与吸收',description:'黑色液体从地上各处喷涌而出，不同人物沿线索深入地底。黄昏边境与上海爱丽丝幻乐团合作的横向卷轴弹幕动作作品，将尤魔、旧血池地狱与各方的计划连在一起。',ids:['yuuma','reimu','marisa','kanako','murasa','flandre','okina','joon','shion'],caption:'2021 年发行；本入口以本作故事为范围，不概括后来每次组织关系变化。',url:'https://tasofro.net/touhou175/',reference:'https://thwiki.cc/东方刚欲异闻'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'被创造的忠心，也有自己的力量',label:'创造者与兵长 / 袿姬与磨弓',ids:['keiki','mayumi'],relation:'造形神创造埴轮，兵长守护灵长园。',description:'磨弓由袿姬创造，忠心能转化为实力。两人的关系连接祈愿、造物与守护，也要放回灵长园新的统治结构理解；不是普通血缘母女。',color:'green',symbol:'埴'},
 {title:'三个组织，三种行动方式',label:'竞争首领 / 八千慧、早鬼与尤魔',ids:['yachie','saki','yuuma'],relation:'鬼杰组、劲牙组与刚欲同盟彼此竞争。',description:'水獭灵、狼灵与鹫灵分别提供辨认部下的线索。具体合作或对抗随事件变化，不能把同框插图当成永久联盟，也不能把三位首领归进同一组织。',color:'violet',symbol:'争'},
 {title:'守关的考验，来自另一份责任',label:'工作关系 / 久侘歌与阎魔',ids:['kutaka','eiki'],relation:'久侘歌依阎魔安排在彼岸异界关口工作。',description:'通行许可与守门者的考验各有情境。工作地点不是住宅，鸡之神的居住线索在妖怪之山瀑布上方；本册不以画中木门确定官方关口建筑。',color:'red',symbol:'关'},
 {title:'河岸并排，各自的故事',label:'主题并读 / 璎花与润美',ids:['eika','urumi'],relation:'垒石的水子之灵，与养鱼的牛鬼。',description:'两位分别在鬼形兽第一、二关登场，种族、活动与能力不同。这是按河岸主题安排的并读关系，不声称原作中已经确立固定搭档或亲缘。',color:'green',symbol:'岸'},
 {title:'祈愿改变了谁的秩序',label:'势力冲突 / 袿姬、八千慧与早鬼',ids:['keiki','yachie','saki'],relation:'埴轮的出现，动摇动物灵压迫人间灵的力量格局。',description:'袿姬回应人间灵祈求，动物灵首领则有自身利益。保护、依赖与新的控制需要比较双方叙述；不把温柔造物者或爽快首领直接等同于无条件正义。',color:'violet',symbol:'像'},
 {title:'黑水之下，仍有未说完的安排',label:'事件中的交锋 / 尤魔与隐岐奈',ids:['yuuma','okina','flandre'],relation:'刚欲异闻的黑水调查，牵动不止一方的计划。',description:'尤魔的吸收能力与隐岐奈的行动，要沿刚欲异闻不同路线和后续情节理解。参与同一事件不代表三人始终是同伴，也不将旧血池地狱直接等同于旧都。',color:'red',symbol:'欲'}
);
window.GENSOKYO.glossary.push(
 {term:'动物灵、人间灵与埴轮',en:'Animal spirits, human spirits & haniwa',text:'鬼形兽中的动物灵组织压迫人间灵，袿姬回应人间灵祈求创造偶像与埴轮。埴轮拥有实体，不能与作为灵的居民混为一类；它们对灵体战斗的优势，也不等于能够抵挡所有活人的攻击。',source:'https://danmaku.jp/archive/character/c045/'},
 {term:'灵长园与偶像',en:'The Primate Spirit Garden & idols',text:'灵长园是畜生界中与人间灵、袿姬及埴轮相关的场所。这里的偶像包含造形与信仰的力量，不只指舞台艺人；畜生界、旧地狱和如今的地狱各有设定，不是一张地底地图上的同义名称。',source:'https://danmaku.jp/archive/character/c074/'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 mike:{place:'mountain',related:['takane','chimata'],work:'th18',line:'第一关的三花猫与卡牌交易，适合先分清“招财或揽客”的限制；地图仅为山中区域入口。'},
 takane:{place:'mountain',related:['nitori','mike'],work:'th18',line:'从第二关的山童读起，再与河童比较森林、技术和经商；秘天崖尚未单独标点。'},
 sannyo:{place:'mountain',related:['misumaru','mamizou','miyoi'],work:'th18',line:'第三关先认识高地的山女郎，后续与醉蝶华的酒馆活动分开按作品阅读。'},
 misumaru:{place:null,related:['momoyo','megumu','reimu'],work:'th18',line:'第四关的勾玉、龙珠与矿洞调查，既有关矿物之力，也关乎对开采的担忧。'},
 tsukasa:{place:'mountain',related:['megumu','chimata','momoyo'],work:'th18',line:'从第五、六关到 Extra 比较不同对象听到的建议，管狐的传话并非中立旁白。'},
 megumu:{place:'mountain',related:['tsukasa','chimata','momoyo','aya','hatate'],work:'th18',line:'第五关认识大天狗与交易计划；地图只提供妖怪之山导览，不指定其宅邸。'},
 chimata:{place:null,related:['megumu','tsukasa','mike'],work:'th18',line:'沿第六关理解集市与所有权的设定，月虹市场尚未收入地图册。'},
 momoyo:{place:null,related:['megumu','tsukasa','misumaru'],work:'th18',line:'Extra 的矿道、采矿合作与噬龙传闻，应与原作保留的未知一起阅读。'}
});
window.GENSOKYO.characterLinks.nitori.related.push('takane');
window.GENSOKYO.characterLinks.aya.related.push('megumu');
window.GENSOKYO.characterLinks.hatate.related.push('megumu');
window.GENSOKYO.books.push({id:'th18',number:'18',year:'2021',name:'东方虹龙洞',jp:'東方虹龍洞',en:'Unconnected Marketeers.',mark:'虹<br>市',theme:'spring',mood:'卡牌 / 矿物 / 集市与所有权',description:'不可思议的能力卡牌在各处流通。四位人类沿山路调查，从山麓的贩售者走向矿洞与月虹市场，渐渐看见矿物、制造与交易背后各不相同的目的。',ids:['mike','takane','sannyo','misumaru','tsukasa','megumu','chimata','momoyo'],caption:'2021 年发行；本入口以虹龙洞为范围，不将后续黑市与兽王园中的变化混成同一事件。',url:'https://store.steampowered.com/app/1566410/',reference:'https://thwiki.cc/附带文档:东方虹龙洞/Omake'});
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'森林与河流，各有拿手之处',label:'竞争与依存 / 高岭与荷取',ids:['takane','nitori'],relation:'以两位为入口，比较山童与河童的群体关系。',description:'山童与河童相互竞争，技术、制造与经商又互相依赖。此处按族群设定并读两位，不将每一项群体往来都写成她们个人已经发生的合作事件。',color:'green',symbol:'技'},
 {title:'同一张卡牌，两种利益',label:'合作与牵制 / 龙与千亦',ids:['megumu','chimata'],relation:'流通带来利益，也使市场之神重新积蓄力量。',description:'龙参与制造与通货体系，千亦的神力则与交易相连。她们利用合作达成各自目的，后来又互相牵制；温和的谈判插图不能抹去这种分歧。',color:'violet',symbol:'市'},
 {title:'耳边的话，传向不同的人',label:'助手与交涉 / 典和龙、千亦、百百世',ids:['tsukasa','megumu','chimata','momoyo'],relation:'典传递指示，也抓住听者的心灵弱点。',description:'几位都信任过管狐的建议。阅读虹龙洞时，可比较同一位使者如何向不同对象表达，不把她当作可靠无偏的事件解说员。',color:'red',symbol:'言'},
 {title:'亲友的委托，矿石的报酬',label:'亲友与交易 / 龙和百百世',ids:['megumu','momoyo'],relation:'大天狗提出生意，大蜈蚣负责开采。',description:'龙不厌恶与百百世相会，两人有亲友关系。开采龙珠又形成明确的职责和报酬；“亲友”不等于确认的血缘家族，也不代表两人的种族相同。',color:'green',symbol:'矿'},
 {title:'这块矿石，应当如何被使用',label:'开采争议 / 魅须丸与百百世',ids:['misumaru','momoyo','megumu'],relation:'调查者与开采者，对龙珠去向有不同主张。',description:'魅须丸关心矿物力量与山体环境，百百世则接受了开采职责。这段冲突连接着矿物归属、资源使用与各方利益；画中并立不意味着两位是共同采矿的伙伴。',color:'violet',symbol:'玉'},
 {title:'招来的客人，也要完成交易',label:'主题并读 / 三花与千亦',ids:['mike','chimata'],relation:'从一面贩售者，读到集市神明的交易规则。',description:'三花的招财与揽客有自身限制，千亦的力量则与物品售出、所有权变化有关。这是一条作品内主题路线，不据此推定两位已经确立主从或雇佣关系。',color:'red',symbol:'客'}
);
window.GENSOKYO.glossary.push(
 {term:'能力卡牌与交易',en:'Ability cards & exchange',text:'虹龙洞里的卡牌蕴含人类、妖怪的部分魔力，制造、流通与交易分别牵动不同人物。卡牌在集市神明力量下成交才能补充魔力，不等于原角色被整个封入卡中；游戏机制与现实收藏品也应区分。',source:'https://thwiki.cc/附带文档:东方虹龙洞/Omake'},
 {term:'龙珠、勾玉与矿洞',en:'Dragon gems, magatama & the mine',text:'龙珠是适合制玉的古代矿物，勾玉则是加工出的魔法器具，二者不是同一词。虹龙洞是作品中氧气稀薄的复杂矿洞；画页不提供游览路线，也不能以发光矿脉推定真实地质结构。',source:'https://thwiki.cc/玉造魅须丸'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 biten:{place:'mountain',related:['yachie','zanmu','enoko'],work:'th19',line:'沿兽王园认识猿神与鬼杰组，再分清自称的转世和原作确认的身份；地图只关联山中区域。'},
 enoko:{place:'forest',related:['saki','zanmu','marisa'],work:'th19',line:'从森林山犬与宝珠陷阱读起，留意不死的来历、妖怪觉醒与组织归属各不相同。'},
 chiyari:{place:null,related:['yuuma','zanmu','rin'],work:'th19',line:'旧血池地狱不是当前地图的旧都；继续读刚欲同盟身份之外，她与残无的安排。'},
 hisami:{place:null,related:['zanmu','suika','chiyari'],work:'th19',line:'从通往地狱的诱导认识黄泉丑女，区分她单方面的景仰与残无的回应。'},
 zanmu:{place:null,related:['hisami','biten','enoko','chiyari','suika'],work:'th19',line:'沿不同人物路线比较她的计划与实际行动；地狱与阎魔的职责不宜混为一谈。'}
});
window.GENSOKYO.characterLinks.yachie.related.push('biten');
window.GENSOKYO.characterLinks.saki.related.push('enoko');
window.GENSOKYO.characterLinks.yuuma.related.push('chiyari');
window.GENSOKYO.characterLinks.marisa.related.push('enoko');
window.GENSOKYO.characterLinks.rin.related.push('chiyari');
window.GENSOKYO.books.push({id:'th19',number:'19',year:'2023',name:'东方兽王园',jp:'東方獣王園',en:'Unfinished Dream of All Living Ghost.',mark:'兽<br>梦',theme:'green',mood:'动物灵 / 地上争夺 / 地狱的计划',description:'土地与灵的变化引来各方行动，动物灵组织伸向地上，新的部下又各有来历。通过多位角色的对战故事，比较首领的打算、残无的安排与调查者自己的判断。',ids:['biten','enoko','chiyari','hisami','zanmu','yachie','saki','yuuma','reimu','marisa'],caption:'2023 年的对战弹幕作品。本入口以兽王园为范围，后续经历应按具体作品分别阅读。',url:'https://store.steampowered.com/app/2400340/',reference:'https://thwiki.cc/东方兽王园'});
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'山中的大圣，组织的新成员',label:'首领与部下 / 八千慧与美天',ids:['yachie','biten'],relation:'残无引荐的猿神，成为鬼杰组的一员。',description:'美天在组织中受八千慧指挥，又带着残无安排的线索。山中汇报是本册想象，不将她们写成血缘亲属，也不以轻快画面抹去组织中的利用关系。',color:'green',symbol:'猿'},
 {title:'三条尾巴，也有自己的步调',label:'招募与欣赏 / 早鬼与慧之子',ids:['saki','enoko'],relation:'山犬加入劲牙组，成为地上行动的新成员。',description:'早鬼欣赏慧之子的本领，双方在兽王园形成上下属关系。慧之子的寿命、刚觉醒的心境与陷阱能力要分别读，不按三条尾巴推定三个头或三位人格。',color:'violet',symbol:'犬'},
 {title:'意气相投之后，仍有另一层安排',label:'同盟与隐情 / 尤魔与血枪',ids:['yuuma','chiyari'],relation:'旧血池地狱的相遇，连接起刚欲同盟。',description:'血枪加入尤魔的组织，也与残无保持联系。共同话题不等于互相毫无保留地信任；试管、传送与告知的情节须结合不同路线阅读。',color:'red',symbol:'焰'},
 {title:'伸出的手，等待怎样的回应',label:'单方面景仰 / 日狭美与残无',ids:['hisami','zanmu'],relation:'日狭美为残无行动，也希望被她留意。',description:'热情与回应并不对等。日狭美常把事情做过头，残无对她也有自己的处置；这段关系不直接改写成恋爱、亲缘或无条件互信。',color:'violet',symbol:'路'},
 {title:'三个组织之外的一条线',label:'计划与来历 / 残无和三位新部下',ids:['zanmu','biten','enoko','chiyari'],relation:'组织归属不同，却都与残无的行动相关。',description:'美天、慧之子和血枪各自加入鬼杰组、劲牙组与刚欲同盟，同时带着与残无有关的动机或约定。读到并列名单时，仍要保留三人的不同来历与选择。',color:'green',symbol:'影'},
 {title:'森林里，早就见过的身影',label:'旧日知晓 / 魔理沙与慧之子',ids:['marisa','enoko'],relation:'魔理沙早知森林中的白色山犬，慧之子也记得她。',description:'兽王园对话把两位的过去与如今联系起来。彼此知晓不等于慧之子由魔理沙创造，也不代表山犬是被她收养的普通宠物。',color:'red',symbol:'森'}
);
window.GENSOKYO.glossary.push(
 {term:'自称、外号与种族',en:'Claims, nicknames & species',text:'美天自认孙悟空转世，血枪被叫作卓柏卡布拉，饭纲丸龙名字中有“龙”。这些说法不应直接替代原作给出的猿神、天火人和大天狗种族。阅读时先确认说话者与出处。',source:'https://thwiki.cc/天火人血枪'},
 {term:'组织归属与行动动机',en:'Affiliation & personal motives',text:'兽王园里的三位新成员分别加入不同动物灵组织，又与残无的安排相关。属于某组织、听从某次指示、信任某个人，是三种需要分开理解的关系；会随具体事件发生变化。',source:'https://thwiki.cc/日白残无'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 mima:{place:null,related:['reimu','marisa','yumemi','chiyuri'],work:'th03',line:'先读梦时空 Manual 的轻松恶灵，再比较历作外观。这里保留旧作语境，不把同人常见关系直接写入现行人物经历。'},
 shinki:{place:null,related:['yumeko','mima'],work:'th05',line:'从怪绮谈第五、六关对话理解创造者与迎战者，魔界没有强行对应当前分区地图坐标。'},
 yumeko:{place:null,related:['shinki'],work:'th05',line:'第五关中主动替主人迎战的魔界女仆；剑形弹幕、主人评价和未明确的能力称号应分别阅读。'},
 yumemi:{place:null,related:['chiyuri','mima'],work:'th03',line:'先读原作附记的比较物理学与魔力问题，再读不同角色的对话和结局，不用一张研究室插图代替全故事。'},
 chiyuri:{place:null,related:['yumemi','mima'],work:'th03',line:'从数据整理与随意口吻认识助手；平行世界的教育制度是作品设定，非现实常识。'}
});
window.GENSOKYO.books.push(
 {id:'th02',number:'02',year:'1997',name:'东方封魔录',jp:'東方封魔録',en:'The Story of Eastern Wonderland.',mark:'封<br>魔',theme:'night',mood:'PC-98旧作 / 神社与恶灵',description:'回到早期弹幕的故事：灵梦调查神社周边异状，途中遇见不同对手，最后面对魅魔。比较后来可用角色的轻松日常，会读到同一个人物不同时期的侧面。',ids:['mima'],caption:'1997 年 PC-98 作品；本册人物图选择梦时空形态，不据此还原封魔录全部外观与场景。',url:'https://thbwiki.cc/东方封魔录',reference:'https://thbwiki.cc/魅魔'},
 {id:'th03',number:'03',year:'1997',name:'东方梦时空',jp:'東方夢時空',en:'Phantasmagoria of Dim.Dream.',mark:'梦<br>时',theme:'spring',mood:'PC-98旧作 / 梦幻遗迹 / 科学与魔力',description:'不可思议的遗迹引来竞争，教授梦美与助手千百合又带来另一个世界的科学。对战故事与原作附记并读，可以分清各角色的期待、研究目的及不同结局。',ids:['mima','yumemi','chiyuri'],caption:'1997 年对战弹幕作品；本入口以旧作为范围，不把平行世界直接认定为秘封俱乐部所在时代。',url:'https://thbwiki.cc/东方梦时空',reference:'https://thwiki.cc/附带文档:东方梦时空/Omake'},
 {id:'th05',number:'05',year:'1998',name:'东方怪绮谈',jp:'東方怪綺談',en:'Mystic Square.',mark:'魔<br>界',theme:'violet',mood:'PC-98旧作 / 魔界之旅 / 创造者',description:'魔界来客引发调查，主角穿过不同场所，走向万魔殿中的梦子与神绮。用游戏对话和音乐说明补全这段旅程，不把缺少独立设定文档的地方填成已确认事实。',ids:['shinki','yumeko','mima'],caption:'1998 年 PC-98 作品；现有爱丽丝图卡依据后来的作品绘制，本入口不直接套用其全部后续经历。',url:'https://thbwiki.cc/东方怪绮谈',reference:'https://thbwiki.cc/游戏对话:东方怪绮谈/博丽灵梦'}
);
window.GENSOKYO.books.sort((a,b)=>(a.code?100:Number(a.number))-(b.code?100:Number(b.number)));
window.GENSOKYO.bonds.push(
 {title:'一句玩笑，停在神社的旧日',label:'旧作来往 / 魅魔与灵梦',ids:['mima','reimu'],relation:'梦时空文档把戏弄灵梦写成魅魔的日常。',description:'关系依据为旧作原文，现有灵梦插图仅作为索引。不能把同人想象的每次夜访当作官方事件，也不据此为今日神社指定新的供奉体系。',color:'green',symbol:'月'},
 {title:'同样的名字，按作品慢慢读',label:'旧作阅读 / 魅魔与魔理沙',ids:['mima','marisa'],relation:'早期作品中的交集，是继续查阅对话的入口。',description:'魔理沙对魅魔的态度可由具体作品观察；二创里的师徒、母女等解释需与原作区别。这里提供并读入口，不以关联卡片确认血缘或统一的师承经历。',color:'violet',symbol:'旧'},
 {title:'守在创造者的身前',label:'创造者与侍从 / 神绮与梦子',ids:['shinki','yumeko'],relation:'梦子主动替神绮迎战，神绮认可她的力量。',description:'依据怪绮谈对话，梦子属于神绮创造的强大魔物。画页中的端茶与休息是同人日常，不把能力、剑与服装移植成另一位女仆的设定。',color:'red',symbol:'翼'},
 {title:'大胆的假设，仔细的记录',label:'教授与助手 / 梦美与千百合',ids:['yumemi','chiyuri'],relation:'一位收集证据，一位处理数据，两人说话并不拘束。',description:'梦时空附记明确了比较物理学背景和研究分工。相处随意不等于确认恋爱或亲缘；温和研究室场景也保留了梦美在原作中有过激行为的背景。',color:'green',symbol:'理'},
 {title:'遗迹里的相遇，各有自己的期待',label:'作品并读 / 魅魔与梦时空搭档',ids:['mima','yumemi','chiyuri'],relation:'同一场奇异事件，连接顽皮恶灵和另一世界的研究者。',description:'这是一条梦时空阅读路线。各自路线与结局应单独看待，不把所有结局拼成一条确定时间线，也不把作品主题比较改写成三人的长期共同生活。',color:'violet',symbol:'梦'}
);
window.GENSOKYO.glossary.push(
 {term:'PC-98旧作与作品语境',en:'PC-98 works & context',text:'红魔乡之前的五部早期游戏常被称作旧作。人物、外观和用语应先放回其登场作品理解；有相同姓名或相似意象，不表示旧作与后来所有细节都能无条件拼接。',source:'https://thbwiki.cc/官方游戏#旧作'},
 {term:'可能性空间移动船',en:'Probability-space moving ship',text:'梦时空里与梦美、千百合跨越世界有关的舞台。比较物理学、魔力与另一世界构成故事线索；画中的透镜仪器和窗外遗迹是想象，不是官方构造图，也非现实科学装置说明。',source:'https://thwiki.cc/附带文档:东方梦时空/Omake'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 daiyousei:{place:'lake',related:['cirno','sunny','luna','star'],work:'th06',line:'从红魔乡道中与三月精的玩耍读起，再看幻存神签的后续记述；通称不等于另一个私人姓名。'},
 koakuma:{place:'library',related:['patchouli','remilia'],work:'th06',line:'红魔乡第四关的身影，连接到后续资料中的图书馆工作与找书记述。'},
 renko:{place:null,related:['merry','sumireko'],work:'gfc',line:'配合音乐读莲台野夜行的附带故事，从两人的叙述认识星月和寻访，外界不标进幻想乡地图。'},
 merry:{place:null,related:['renko','yukari'],work:'gfc',line:'先读她对结界界线的叙述，再沿不同音乐故事比较经历；与紫的相似之处保留为线索。'}
});
window.GENSOKYO.characterLinks.cirno.related.push('daiyousei');
window.GENSOKYO.characterLinks.patchouli.related.push('koakuma');
window.GENSOKYO.books.find(b=>b.id==='th06').ids.push('daiyousei','koakuma');
window.GENSOKYO.books.find(b=>b.id==='th128').ids.push('daiyousei');
window.GENSOKYO.books.push(
 {id:'gfc',code:'MUSIC / 02',kind:'music',year:'2003',name:'莲台野夜行',jp:'蓮台野夜行',en:'Ghostly Field Club.',mark:'秘<br>封',theme:'night',mood:'音乐与故事 / 两人的寻访 / 结界线索',description:'秋夜的照片、星月与结界，把莲子和梅莉引向新的寻访。沿曲目阅读附带短篇，听到同一件事在提议、怀疑与发现之间逐渐展开。',ids:['renko','merry'],caption:'2003 年音乐作品。本入口提供官方介绍与 Booklet 阅读，不将专辑误列为弹幕游戏，也不转载录音。',url:'https://www16.big.or.jp/~zun/html/mcdtop.html',reference:'https://thbwiki.cc/莲台野夜行/附带故事'},
 {id:'magical-astronomy',code:'MUSIC / 05',kind:'music',year:'2006',name:'大空魔术',jp:'大空魔術',en:'Magical Astronomy.',mark:'星<br>月',theme:'spring',mood:'音乐与故事 / 科学世纪 / 宇宙与日常',description:'大学露天咖啡座里，秘封双人从月面旅行的消息聊向物理学与宇宙。原作将音乐、封套和短篇结合，日常谈话也能通向遥远的想象。',ids:['renko','merry'],caption:'2006 年音乐作品。星夜画页参考其衣装，场景与观星时刻为另行创作，不声称复原原作咖啡座。',url:'https://www16.big.or.jp/~zun/html/mcdtop.html',reference:'https://thbwiki.cc/大空魔术/附带故事'}
);
window.GENSOKYO.bonds.push(
 {title:'花朵与冰晶，都想分享给你',label:'妖精来往 / 大妖精与琪露诺',ids:['daiyousei','cirno'],relation:'两位在原作中会一起玩耍，也曾作为对手相遇。',description:'三月精中的游戏和妖精大战争的对战，可以一起认识她们的日常。递花是画册想象，不将温柔照料的同人形象当作大妖精唯一的性格。',color:'green',symbol:'花'},
 {title:'找来一本书，再翻过一页',label:'图书馆 / 小恶魔与帕秋莉',ids:['koakuma','patchouli'],relation:'后续原作说明中，小恶魔的性质更接近帕秋莉的使魔。',description:'幻存神签补充了她的雇佣身份及找书记述。共同读书的画面是同人编排，角色关联有据，具体工作情境仍是创作。',color:'violet',symbol:'书'},
 {title:'两个人，也能开始一场寻访',label:'同学与朋友 / 莲子与梅莉',ids:['renko','merry'],relation:'秘封俱乐部的两位成员，带着不同的观察与判断。',description:'音乐故事里的提议、犹疑和谈话，让寻访有了两种声音。这里按朋友与社团伙伴介绍，不把同人常见的感情解释替代原作关系描述。',color:'green',symbol:'星'},
 {title:'同一个姓氏，先保留问题',label:'线索并读 / 莲子与堇子',ids:['renko','sumireko'],relation:'两位都与秘封俱乐部这个名字有关，但活动语境不同。',description:'同姓与社团名字可以引出阅读兴趣，却不足以直接指定祖孙、母女或其他具体血缘。沿各自登场作品分开阅读，比先补一条家谱更稳妥。',color:'red',symbol:'名'},
 {title:'相似的颜色，尚未写定的答案',label:'线索与推测 / 梅莉和紫',ids:['merry','yukari'],relation:'外貌与境界主题常引发联想，原作仍保留空间。',description:'画册提供主题并读入口，不将梅莉直接认定为过去或未来的紫，也不将某一种同人解释当成官方定论。两位人物图保留各自的发型、衣装和身份。',color:'violet',symbol:'界'}
);
window.GENSOKYO.glossary.push(
 {term:'秘封俱乐部与科学世纪',en:'Hifuu Club & the scientific century',text:'莲子与梅莉的音乐故事以外面世界的大学生日常、科学与异界寻访为入口。它们属于东方的叙事范围，但不因此把外界街道直接画进幻想乡地图，也不把旧作梦美的世界无条件视为同一时代。',source:'https://thbwiki.cc/莲台野夜行/附带故事'},
 {term:'通称与后续资料',en:'Descriptive names & later sources',text:'大妖精、小恶魔是描述性通称。后来的原作书籍又补充了造型、能力或生活说明；整理时应注明作品与叙述者，不把早期未写出的内容永远当作未知，也不将二创补充混作原作。',source:'https://thbwiki.cc/小恶魔'}
);

Object.assign(window.GENSOKYO.characterLinks,{
 ellen:{place:null,related:['marisa','kotohime'],work:'th03',line:'先读健忘魔女的 Manual，再看 Omake 中的原型与猫的说明；画中的庭院没有固定地图坐标。'},
 kotohime:{place:null,related:['rikako','reimu','ellen'],work:'th03',line:'从收藏趣味认识她，再沿自己的线路阅读警察结局，留意公主称谓与作品语境。'},
 kana:{place:null,related:['yumemi','chiyuri','lunasa'],work:'th03',line:'从洋馆住民的反应读骚灵，再与后来的骚灵主题比较；不同人物的来历仍各自保留。'},
 rikako:{place:null,related:['yumemi','chiyuri','kotohime','marisa'],work:'th03',line:'拥有魔力而偏好科学，是阅读的起点；不要把同一主题自动拼成同一研究团队。'}
});
{const b=window.GENSOKYO.books.find(b=>b.id==='th03');b.ids=['reimu','mima','marisa','ellen','kotohime','kana','rikako','chiyuri','yumemi'];b.description='不可思议的遗迹引来九位可用人物的竞争。健忘魔女、收藏家、骚灵与科学信者，各自带着不同期待；梦美与千百合又带来另一个世界的问题。';b.caption='1997 年对战弹幕作品。本册已为九位可用人物提供索引，灵梦与魔理沙的现有图卡采用后来作品形象。不同人物路线与结局分别阅读。';}
window.GENSOKYO.bonds.push(
 {title:'围裙与扫帚，各有自己的魔法',label:'主题并读 / 爱莲与魔理沙',ids:['ellen','marisa'],relation:'同样与魔女形象相关，来历与魔法道路各不相同。',description:'爱莲的原型、健忘与不成长来自旧作文档；魔理沙则是钻研魔法的人类。此卡用于比较，不据此确立师徒、姐妹或同一种族。',color:'red',symbol:'魔'},
 {title:'一只齿轮，两种兴趣',label:'想象同框 / 理香子与小兔姬',ids:['rikako','kotohime'],relation:'科学信者与收藏家，用不同目光看同一件物品。',description:'兴趣有原作线索，工房来访却是画册创作。主题并置不等于官方确认的长期搭档，也不代表两人共同拥有一间实验室。',color:'green',symbol:'齿'},
 {title:'热闹的来处并不相同',label:'骚灵主题 / 卡娜与三姐妹',ids:['kana','lunasa','merlin','lyrica'],relation:'同为骚灵主题入口，各自的诞生与活动应分开读。',description:'卡娜的旧洋馆与三姐妹的演奏故事属于不同人物设定。这里比较声音、骚灵与生活，不给她们补成同一家族，也不把洋馆合为一处。',color:'violet',symbol:'声'},
 {title:'相信科学，却不在同一个起点',label:'主题比较 / 理香子与梦美',ids:['rikako','yumemi','chiyuri'],relation:'一方身有魔力却偏好科学，另一方前来寻找魔力证据。',description:'梦时空的 Manual 与 Omake 提供了不同背景。相似的衣装和研究主题不表示同一组织、同一故乡或相同理论体系。',color:'green',symbol:'理'},
 {title:'听见一点声音，就想走近看看',label:'旧作线路 / 卡娜与梦时空搭档',ids:['kana','yumemi','chiyuri'],relation:'卡娜的个人线路连接起研究与搬家愿望。',description:'按她的游戏对话理解相遇与结局，不将这条线路的一切直接当成其他人物路线已发生的前置事件。',color:'red',symbol:'梦'}
);
window.GENSOKYO.glossary.push(
 {term:'共同主题不等于共同经历',en:'A shared theme is not a shared event',text:'魔女、科学或骚灵可以把不同人物串成阅读路线。主题比较、实际相识、确定的主从或亲缘是不同层次；本册的路线卡与同框画面会注明编排依据。',source:'https://thbwiki.cc/附带文档:东方梦时空/Manual'},
 {term:'旧作的原型与出典',en:'Earlier inspirations & attribution',text:'梦时空附记明确提到爱莲参考竹本泉漫画人物。阅读原作时，角色名字、设定原型与东方中的再创作应一起保留出处，不把借鉴来源抹去。',source:'https://thwiki.cc/附带文档:东方梦时空/Omake'}
);
window.GENSOKYO.trails=[
 {id:'dimdream',number:'01',name:'梦时空初访',tag:'旧作 / 从期待读起',image:'scene-ellen-courtyard',intro:'从一位魔女走近遗迹，看看每个人为什么出发。',steps:[['ellen','先认识健忘又勤奋的魔女'],['kotohime','换一个收藏家的目光'],['kana','听一听洋馆里的热闹'],['rikako','读科学与魔法的矛盾'],['yumemi','再看另一个世界的研究者']],scenes:['ellen-courtyard','kana-window','rikako-workbench','dimdream-lab'],lore:'oldworks',work:'th03',note:'编辑阅读顺序，不表示人物在原作里按此先后相遇。'},
 {id:'science',number:'02',name:'科学与魔法',tag:'跨作品 / 不同的问题',image:'scene-rikako-workbench',intro:'同样望向未知，却有不同的世界、方法与愿望。',steps:[['rikako','拥有魔力，却偏爱科学'],['yumemi','寻找理论以外的力量'],['chiyuri','从研究记录看助手的工作'],['renko','抬头看看时间与星月'],['merry','再读结界与梦的叙述']],scenes:['rikako-workbench','dimdream-lab','hifuu-starlight'],lore:'hifuu',work:'magical-astronomy',note:'主题并读保留作品差异，不将几位人物设成同一研究团队。'},
 {id:'poltergeist',number:'03',name:'骚灵与声音',tag:'种族主题 / 各自的来历',image:'scene-kana-window',intro:'从一扇窗走到黄昏的演奏，分别认识声音背后的身影。',steps:[['kana','从旧洋馆的动静开始'],['lunasa','听沉稳的小提琴声'],['merlin','让小号带来明亮气氛'],['lyrica','再辨键盘与三姐妹的合奏']],scenes:['kana-window','prismriver-evening'],lore:'realms',work:'th07',note:'这是种族与声音的比较路线，不确认卡娜与三姐妹有亲缘。'}
];

Object.assign(window.GENSOKYO.characterLinks,{
 sara:{place:null,related:['louise','meiling','aunn'],work:'th05',line:'从第一关入口认识她，守门身份有据，种族与身世仍保留未知。'},
 louise:{place:null,related:['sara','shinki'],work:'th05',line:'从前往人间界的愿望出发，再比较不同主角线路里短短的相遇。'},
 yuki:{place:null,related:['mai-pc98','marisa','shinki'],work:'th05',line:'先看黑白双人战，再阅读舞先被击破后的雪个人分支与曲目。'},
 'mai-pc98':{place:null,related:['yuki','mai','shinki'],work:'th05',line:'读雪先被击破的个人分支，并用作品与日文名区分旧作的舞与丁礼田舞。'}
});
{const b=window.GENSOKYO.books.find(b=>b.id==='th05');b.ids=['reimu','marisa','mima','yuuka','sara','louise','alice','yuki','mai-pc98','yumeko','shinki'];b.description='从入口的萨拉、魔空间的露易兹，到冰雪世界的雪与舞，再走向梦子与神绮。人物、场景与曲目一起，补全这段魔界旅程。';b.caption='1998 年 PC-98 作品，本册收录四位可用人物及七位具名关底人物的阅读索引。灵梦、魔理沙、幽香和爱丽丝的现有图卡采用后来作品形象；魅魔图卡采用梦时空形态。';}
window.GENSOKYO.bonds.push(
 {title:'一黑一白，共同迎战',label:'原作共同登场 / 雪与舞',ids:['yuki','mai-pc98'],relation:'同关的合作与各自的后半战，呈现不同神情。',description:'怪绮谈第四关先是双人战，之后随击破顺序进入一位人物的个人分支。合作有原作依据，姐妹、双生或共同住址则未明确。',color:'violet',symbol:'双'},
 {title:'门边与路上的相遇',label:'作品旅程 / 萨拉与露易兹',ids:['sara','louise'],relation:'先在入口停步，再在魔空间遇见新的面孔。',description:'这张卡串联第一关与第二关的阅读顺序，不表示她们在原作里一起值班或已有固定交情。',color:'red',symbol:'旅'},
 {title:'三扇门，三种守候',label:'守门主题 / 跨作品比较',ids:['sara','meiling','aunn'],relation:'入口的看守、洋馆的门番与神社的守护，各有语境。',description:'守门主题提供比较入口。三位的作品、种族、守护对象与行动方式不同，不按职务相似推断从属或亲缘。',color:'green',symbol:'门'},
 {title:'宽檐与尖顶，各有轮廓',label:'造型并读 / 雪与魔理沙',ids:['yuki','marisa'],relation:'金发与魔女衣装各有辨识点，姓名、帽型和作品也不相同。',description:'雪的低冠宽檐帽、白色帽结与魔理沙现有图卡的尖顶帽分别辨认。相近的魔女外观不等于另一个名字或同一个身份。',color:'red',symbol:'帽'},
 {title:'同一个汉字，不同的人物',label:'名字辨析 / 两位舞',ids:['mai-pc98','mai'],relation:'旧作的マイ，与天空璋的丁礼田舞各自有故事。',description:'前者是怪绮谈的白色魔女，后者是隐岐奈的二童子之一。相近名字不能替代作品归属与人物设定。',color:'green',symbol:'名'},
 {title:'循着关卡，走进魔界',label:'旅程索引 / 怪绮谈',ids:['sara','louise','yuki','mai-pc98','yumeko','shinki'],relation:'六个名字，连接入口、冰封舞台与万魔殿。',description:'这是选取部分关卡人物的阅读线索，途中还会遇见爱丽丝。共同出现在一部作品，不意味着所有人构成同一家庭或直属组织。',color:'violet',symbol:'界'}
);
window.GENSOKYO.glossary.push(
 {term:'击破顺序与剧情分支',en:'Defeat order & alternate branches',text:'怪绮谈第四关的后半战由先击破谁决定。舞先败下时继续面对雪，雪先败下时继续面对舞；两段对话与个人曲目不能按同一次战斗先后拼接。',source:'https://thbwiki.cc/附带文档:东方怪绮谈/Omake'},
 {term:'名字与元素意象',en:'Names are not ability labels',text:'名字叫雪，不自动表示操纵冰雪；画中红蓝微光也不等于原作给出的火与冰能力。人物的衣装、名字、舞台和已记载能力，需要分别核对。',source:'https://thbwiki.cc/附带文档:东方怪绮谈/Omake'}
);
window.GENSOKYO.trails.push({id:'makai',number:'04',name:'沿路走进魔界',tag:'怪绮谈 / 人物、分支与曲目',image:'scene-ice-magic-v2',intro:'从门边的招呼出发，走过魔空间，再辨认冰雪世界中的两位身影。',steps:[['sara','先认识魔界入口的看守'],['louise','听一位魔界人的旅行愿望'],['alice','经过爱丽丝的关卡，留意后来的图卡造型'],['yuki','认出黑衣魔女与她的个人分支'],['mai-pc98','再看白衣魔女的另一种反应'],['shinki','最后读创造者自己的话']],scenes:['makai-gate','luize-passage','ice-magic','makai-hall'],lore:'makai',work:'th05',listening:[['魔法阵 ～ Magic Square','萨拉的主题曲','https://thbwiki.cc/萨拉'],['灵天 ～ Spiritual Heaven','露易兹的主题曲','https://thbwiki.cc/露易兹'],['禁忌的魔法 ～ Forbidden Magic','雪与舞共同登场','https://thbwiki.cc/雪'],['绯红的少女 ～ Crimson Dead!!','舞先被击破后的雪分支','https://thbwiki.cc/雪'],['背叛的少女 ～ Judas Kiss','雪先被击破后的舞分支','https://thbwiki.cc/舞']],note:'路线是选取部分人物的入门顺序，完整关卡还包括梦子等；曲目链接通往原作音乐室资料，不转载录音。'});

Object.assign(window.GENSOKYO.characterLinks,{
 kurumi:{place:null,related:['elly','remilia','flandre'],work:'th04',line:'先读她在湖畔的守门自述，再看原作立绘的长发与蝠翼；不要把湖泊直接认作雾之湖。'},
 elly:{place:null,related:['yuuka','kurumi','sara'],work:'th04',line:'由公馆入口走进旧作，区分第三关道中曲 Bad Apple!! 与她自己的主题曲灵战。'},
 mugetsu:{place:null,related:['gengetsu','sakuya','yumeko'],work:'th04',line:'从 Extra 对话确认妹妹身份；女仆式衣装可比较，雇主、种族与能力仍保留未知。'},
 gengetsu:{place:null,related:['mugetsu','mai-pc98','shinki'],work:'th04',line:'先读姐姐自己的介绍，再核对红头结、蓝腰结和白羽翼；外观不能替代种族资料。'}
});
window.GENSOKYO.books.push({id:'th04',number:'04',year:'1998',name:'东方幻想乡',jp:'東方幻想郷',en:'Lotus Land Story.',mark:'梦<br>馆',theme:'spring',mood:'湖畔 / 梦幻馆 / 双生姐妹',description:'沿着第二关的湖泊、第三关的公馆入口，走向幽香与 Extra 的两位姐妹。人物、关卡音乐与造型资料一起，提供一条旧作阅读线索。',ids:['reimu','marisa','kurumi','elly','yuuka','mugetsu','gengetsu'],caption:'PC-98 平台的第四作，名称也与系列舞台同名。本册尚未收录奥莲姬；现有灵梦、魔理沙与幽香图卡采用后来作品形象。',url:'https://thbwiki.cc/东方幻想乡',reference:'https://thbwiki.cc/游戏对话:东方幻想乡/博丽灵梦'});
window.GENSOKYO.bonds.push(
 {title:'妹妹说完，姐姐接着出场',label:'原作双胞胎 / 梦月与幻月',ids:['mugetsu','gengetsu'],relation:'姐妹身份由 Extra 对话直接说明。',description:'梦月先登场，并提到自己还有双胞胎姐姐；幻月随后接续迎战。茶台闲谈是本册的创作，姐妹关系本身则有原作依据。',color:'violet',symbol:'双'},
 {title:'湖边停步，门前再问一句',label:'作品旅程 / 胡桃与艾丽',ids:['kurumi','elly'],relation:'相邻关卡的两处入口，各有一位看守。',description:'湖畔守门与公馆入口来自不同段落。阅读路线将她们串联，不因此确认两位共事或归属同一组织。',color:'red',symbol:'路'},
 {title:'谁在公馆的门里与门外',label:'原作场所 / 艾丽与幽香',ids:['elly','yuuka'],relation:'艾丽守入口，幽香在对话中介绍自己为公馆主人。',description:'这段关系首先放在东方幻想乡的旧作语境中理解。现有幽香图卡采用后来的造型，不能反过来作为旧作睡衣形态的复原。',color:'green',symbol:'馆'},
 {title:'同为吸血鬼，各自走近',label:'种族并读 / 胡桃与斯卡蕾特姐妹',ids:['kurumi','remilia','flandre'],relation:'相同种族主题，人物与舞台分别辨认。',description:'胡桃的旧作资料与红魔馆姐妹的设定各有出处。金发或蝠翼不证明亲属、居所或能力相同。',color:'violet',symbol:'翼'},
 {title:'小发帽不等于相同的职务',label:'衣装比较 / 梦月、咲夜与梦子',ids:['mugetsu','sakuya','yumeko'],relation:'女仆式衣装相近，原作明确的工作关系并不相同。',description:'咲夜与梦子的侍奉对象有相应资料，梦月的衣装和 Maid 标签则不能补写为侍奉幽香。比较衣装时也保留设定边界。',color:'green',symbol:'衣'},
 {title:'羽翼的颜色，种族的名字',label:'造型与资料 / 幻月与舞',ids:['gengetsu','mai-pc98'],relation:'白羽翼是视觉线索，不能单靠外观判断种族。',description:'幻月在 All Cast 中被记作恶魔，旧作舞则以白色魔女形象登场。相同翼形提供比较入口，不表示两位同族、同乡或相识。',color:'red',symbol:'羽'}
);
window.GENSOKYO.glossary.push(
 {term:'同名的作品与舞台',en:'A title and a setting',text:'东方幻想乡既可指第四部旧作 Lotus Land Story，也常被用于说系列中的幻想乡舞台。阅读人物出处时，要看作品编号、平台和对话，不把所有提到幻想乡的资料归进同一个游戏。',source:'https://thbwiki.cc/东方幻想乡'},
 {term:'道中曲与角色主题曲',en:'Stage themes & boss themes',text:'Bad Apple!! 是东方幻想乡第三关道中曲，艾丽的个人主题则是灵战 ～ Perdition crisis。关卡、角色与后来同人作品之间可以有关联，但曲目在原游戏中的用途仍应分别注明。',source:'https://thbwiki.cc/艾丽'}
);
window.GENSOKYO.trails.push({id:'lotusland',number:'05',name:'从湖畔走向梦幻馆',tag:'东方幻想乡 / 原图、人物与音乐',image:'scene-elly-threshold',intro:'辨认一对蝠翼、一顶低冠帽，再听见姐妹各自的介绍。',steps:[['kurumi','在血之湖畔认识吸血少女'],['elly','核对低冠帽与镰刀，区分关卡曲目'],['yuuka','走近公馆主人，留意旧作造型差异'],['mugetsu','先读妹妹的 Extra 自我介绍'],['gengetsu','再由姐姐接续这段对话']],scenes:['kurumi-lakeshore','elly-threshold','dream-twins'],lore:'lotusland',work:'th04',listening:[['红响曲 ～ Scarlet Phoneme','胡桃的个人主题曲','https://thbwiki.cc/胡桃'],['Bad Apple!!','第三关道中曲；不是艾丽的个人主题','https://thbwiki.cc/东方幻想乡'],['灵战 ～ Perdition crisis','艾丽的个人主题曲','https://thbwiki.cc/艾丽'],['女仆幻想 ～ Icemilk Magic','梦月的主题曲','https://thbwiki.cc/梦月'],['可爱的恶魔 ～ Innocence','幻月的主题曲','https://thbwiki.cc/幻月']],note:'主线与 Extra 分开阅读；本路线选取已入册人物，不表示游戏里的完整关卡顺序。'});

Object.assign(window.GENSOKYO.characterLinks,{
 rika:{place:null,related:['meira','nitori','rikako'],work:'th02',line:'从第一关读到 Extra，分清里香的两次登场、两套衣装与对应机械。'},
 meira:{place:null,related:['reimu','rika','youmu'],work:'th02',line:'先读她对博丽之力的说明，再核对原作头像；不把台词里的误解当作已确认的恋爱关系。'},
 orange:{place:null,related:['kurumi','elly','chen'],work:'th04',line:'先从第四作第一关出发，再走向湖畔；Orange 与猫又橙是不同人物。'}
});
Object.assign(window.GENSOKYO.books.find(b=>b.id==='th02'),{id:'th02',number:'02',year:'1997',name:'东方封魔录',jp:'東方封魔録',en:'the Story of Eastern Wonderland.',mark:'封<br>魔',theme:'night',mood:'神社异变 / 工程师 / 博丽之力',description:'从里香的机械与明罗的挑战，读向魅魔和魔理沙的早期故事。主线与 Extra 分别阅读，也分别辨认头像中的形态。',ids:['reimu','rika','meira','marisa','mima'],caption:'PC-98 平台第二作。现有灵梦与魔理沙图卡采用后来作品形象，魅魔图卡采用梦时空形态；此索引不是本作完整角色清单。',url:'https://thbwiki.cc/东方封魔录',reference:'https://thbwiki.cc/游戏对话:东方封魔录/博丽灵梦'});
{const b=window.GENSOKYO.books.find(b=>b.id==='th04');b.ids.splice(2,0,'orange');b.caption='PC-98 平台第四作，本册现有两位可用人物及六位具名关底人物的阅读索引；灵梦、魔理沙与幽香图卡采用后来作品形象。';}
window.GENSOKYO.bonds.push(
 {title:'先有机器，再有新的问题',label:'工程主题 / 里香与荷取',ids:['rika','nitori','rikako'],relation:'制造机械、研究技术与偏爱科学，是不同的出发点。',description:'三位可按主题并读，作品背景和组织各自保留。工房里的模型与工具是本册想象，不确认共同研究或师徒关系。',color:'green',symbol:'械'},
 {title:'第一关之后，另一位对手',label:'作品旅程 / 里香与明罗',ids:['rika','meira'],relation:'分别出现在封魔录第一关和第二关。',description:'机械制造者与追求博丽之力的武士，让同一段主线有不同动机。这张卡只串联阅读顺序，不确认两位同伙。',color:'red',symbol:'录'},
 {title:'她所追求的，是怎样的力量',label:'原作交锋 / 明罗与灵梦',ids:['meira','reimu'],relation:'明罗在对话中围绕博丽之力提出挑战。',description:'灵梦的误解构成喜剧情节，但不能把一段误会直接写成人物已有恋爱或伴侣关系。',color:'violet',symbol:'力'},
 {title:'剑在身侧，各有道路',label:'剑术主题 / 明罗与妖梦',ids:['meira','youmu'],relation:'相近武器提供比较入口，人物来历分别阅读。',description:'明罗的武士标签与妖梦的庭师、护卫身份并不相同。没有依据把两位补成同门或一条共同剑术传承。',color:'green',symbol:'剑'},
 {title:'相近的名字，不同的身影',label:'名字辨析 / 奥莲姬与橙',ids:['orange','chen'],relation:'Orange 与 Chen 在作品、造型和身份上各有区分。',description:'奥莲姬是旧作第一关的妖怪，橙则是妖妖梦登场的猫又。黄帽绿衣的形象不能自动带入猫耳、尾巴或八云家的关系。',color:'red',symbol:'名'}
);
window.GENSOKYO.glossary.push(
 {term:'同一人物的不同登场形态',en:'Different appearances, one character',text:'里香在封魔录第一关与 Extra 都会出现，头像衣装与所用机械有所区别。绘制时先说明采用哪次登场，不把不同阶段的细节无意混在一起。',source:'https://thbwiki.cc/里香'},
 {term:'低分辨率头像与全身补全',en:'From a small portrait to a full figure',text:'封魔录的头像只保留少量像素。发色、发结和可见领口可以对照；被画面裁掉的裙摆、鞋袜与动作则属于 Q 版补全，不应标为精确的官方全身复原。',source:'https://thbwiki.cc/东方封魔录/角色立绘'}
);
window.GENSOKYO.trails.push({id:'early-roads',number:'06',name:'从工房走向旧作山路',tag:'跨作品 / 相遇与造型',image:'scene-rika-workshop',intro:'从机械的小点子走到一柄剑，再认出山路上黄色小帽的身影。',steps:[['rika','分开读第一关与 Extra 的工程师'],['meira','听清她追求的博丽之力'],['mima','继续读封魔录主线的对手'],['marisa','留意早期故事与现有图卡差异'],['orange','换到第四作，补上山野的第一声招呼']],scenes:['rika-workshop','meira-rainpath','orange-hillpath'],lore:'eastern-wonderland',work:'th02',listening:[["She's in a temper!!",'里香第一关的主题曲','https://thbwiki.cc/里香'],['战车娘所做的梦','里香 Extra 的主题曲','https://thbwiki.cc/里香'],['黑暗的力量','明罗的主题曲','https://thbwiki.cc/明罗'],['装饰战 ～ Decoration Battle','换到第四作，奥莲姬的主题曲','https://thbwiki.cc/奥莲姬']],note:'跨作品的编辑阅读路线；最后一步已切换到第四作，不表示这些人物共享一段旅程。'});
{const t=window.GENSOKYO.trails.find(t=>t.id==='lotusland');t.steps.unshift(['orange','从山野第一关补上最早的相遇']);t.scenes.unshift('orange-hillpath');}
