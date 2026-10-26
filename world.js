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
