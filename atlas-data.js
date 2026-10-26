// Artwork coordinates describe this atlas's composition, never canonical distances or bearings.
window.GENSOKYO_ATLAS = {
  regions: [
    {id:'village',name:'人里与森林',subtitle:'人间的街巷，森林的入口',mark:'里',color:'#7e8767',image:'assets/atlas-village.webp',defaultPlace:'village',note:'将人类聚落、森林与神社归为一册；画中相邻不表示原作中紧邻。',scope:'地上 / 聚落与森林'},
    {id:'scarlet',name:'雾湖与红魔馆',subtitle:'湖畔的洋馆，书页深处的世界',mark:'紅',color:'#a26266',image:'assets/atlas-scarlet.webp',defaultPlace:'scarlet',note:'图书馆以馆内剖视小景呈现，钟楼属于红魔馆建筑，并非独立聚落。',scope:'地上 / 湖泊与馆内'},
    {id:'mountain',name:'妖怪之山',subtitle:'沿着溪流与瀑布，仰望山中的神社',mark:'山',color:'#718376',image:'assets/atlas-mountain.webp',defaultPlace:'mountain',note:'保留山、瀑布、山麓与神社的区域关系；天狗聚落等具体位置未明。',scope:'地上 / 山中与山麓'},
    {id:'bamboo',name:'迷途竹林',subtitle:'月色穿过竹叶，长廊藏在林间',mark:'竹',color:'#678d87',image:'assets/atlas-bamboo.webp',defaultPlace:'bamboo',note:'永远亭位于迷途竹林内；曲折小径与宅邸细部属于插图设计。',scope:'地上 / 竹林与宅邸'},
    {id:'nether',name:'冥界与彼岸',subtitle:'樱庭与渡河，各有各的边界',mark:'幽',color:'#a48096',image:'assets/atlas-nether.webp',defaultPlace:'nether',note:'冥界与三途河、彼岸为并列小景，留白分隔，不表示三者是同一处空间。',scope:'异界 / 冥界与彼岸'},
    {id:'underground',name:'旧地狱',subtitle:'旧都的灯火，地底更深处的余热',mark:'底',color:'#a6795f',image:'assets/atlas-underground.webp',defaultPlace:'oldcapital',note:'依据旧都、地灵殿、灼热地狱遗址与炉心的层次整理；不采用真实深度比例。',scope:'地底 / 旧地狱一带'}
  ],
  places: [
    {id:'shrine',region:'village',name:'博丽神社',en:'Hakurei Shrine',type:'神社',world:'地上',x:14,y:27,residents:['reimu','suika'],people:['博丽灵梦','伊吹萃香'],summary:'幻想乡与外界边界上的神社。',detail:'灵梦担任巫女，在这里处理神社日常，也从这里走向异变。神社与幻想乡、外面世界的边界紧密相关。',relation:'处于幻想乡与外面世界的境界一带；不据此推定精确方位。',work:'《东方求闻史纪》；历代游戏与书籍',source:'https://thwiki.cc/博丽神社',basis:'场景词条及原作资料摘录'},
    {id:'village',region:'village',name:'人类村落',en:'Human Village',type:'聚落',world:'地上',x:60,y:45,residents:['keine'],people:['稗田阿求','上白泽慧音','本居小铃'],summary:'人类生活与经营店铺的聚落。',detail:'通常简称“人里”。民居、店铺与日常生活聚集在这里，铃奈庵、寺子屋都是认识村落生活的重要入口。',relation:'铃奈庵、寺子屋位于村落内；命莲寺位于村落外。',work:'《东方求闻史纪》《东方铃奈庵》',source:'https://thwiki.cc/人类村落',basis:'场景词条及书籍场景'},
    {id:'suzunaan',region:'village',name:'铃奈庵',en:'Suzunaan',type:'借书屋',world:'地上 · 人里',x:65,y:51,residents:[],people:['本居小铃'],summary:'街巷间的一家借书屋。',detail:'本居小铃是店主的女儿兼店员，负责书籍出租与贩售。外来本与妖魔书，让一间小店牵出许多故事。',relation:'位于人类村落内；本图的店面位置属于画面安排。',work:'《东方铃奈庵》',source:'https://thwiki.cc/铃奈庵',basis:'同名漫画中的场景与人物资料'},
    {id:'terakoya',region:'village',name:'寺子屋',en:'Village School',type:'学塾',world:'地上 · 人里',x:53,y:35,residents:['keine'],people:['上白泽慧音'],summary:'慧音为孩子们教授知识的地方。',detail:'设立在人类村落中的学府，提供读写、算盘、历史等教育。它让幻想乡的故事也有了课堂与日常的一面。',relation:'村落内部的教育场所；建筑样式为插图概括。',work:'《东方铃奈庵》等书籍',source:'https://thwiki.cc/寺子屋',basis:'场景词条及书籍场景'},
    {id:'myouren',region:'village',name:'命莲寺',en:'Myouren Temple',type:'寺院',world:'地上',x:86,y:23,residents:['byakuren','kogasa'],people:['圣白莲','村纱水蜜','寅丸星','多多良小伞'],summary:'在人类村落外建立的寺院。',detail:'圣白莲建立的佛寺，许多修行者是妖怪。寺庙的建立与圣辇船有关，正殿、山门与墓地组成了这里的生活空间。',relation:'位于人类村落外；不是村中一间普通民居。',work:'《东方星莲船》及后续书籍',source:'https://thwiki.cc/命莲寺',basis:'原作设定与书籍场景摘录'},
    {id:'forest',region:'village',name:'魔法森林',en:'Forest of Magic',type:'森林',world:'地上',x:23,y:69,residents:['marisa','alice'],people:['雾雨魔理沙','爱丽丝·玛格特洛依德'],summary:'树木茂密、蘑菇繁生的原始森林。',detail:'魔理沙与爱丽丝等魔法使居住在这里。森林环境阴暗潮湿，奇异蘑菇与孢子也是其设定的一部分。',relation:'香霖堂在森林入口一带；森林与人里并非同一聚落。',work:'《东方求闻史纪》《东方香霖堂》',source:'https://thwiki.cc/魔法森林',basis:'《求闻史纪》资料摘录'},
    {id:'kourindou',region:'village',name:'香霖堂',en:'Kourindou',type:'旧道具店',world:'地上 · 林缘',x:39,y:58,residents:[],people:['森近霖之助'],summary:'森林入口一带的旧道具店。',detail:'店主森近霖之助经营各类旧物，其中有从外面世界流入的东西。物品的用途与来历，常成为故事的起点。',relation:'位于魔法森林入口附近；与森林内的住处分开标注。',work:'《东方香霖堂》',source:'https://thwiki.cc/香霖堂',basis:'同名小说与场景资料'},
    {id:'sunfield',region:'village',name:'太阳花田',en:'Garden of the Sun',type:'花田',world:'地上',x:85,y:81,residents:['yuuka'],people:['风见幽香'],summary:'向日葵盛开的广阔花田。',detail:'以向日葵景观与风见幽香相关的活动闻名。花田在本册作为地上自然风景呈现，并未推断它紧邻人里。',relation:'与幽香相关的独立场景；本册归类不代表空间毗邻。',work:'《东方花映塚》《东方求闻史纪》',source:'https://thwiki.cc/太阳花田',basis:'游戏场景与设定资料'},
    {id:'lake',region:'scarlet',name:'雾之湖',en:'Misty Lake',type:'湖泊',world:'地上',x:31,y:52,residents:['cirno'],people:['琪露诺'],summary:'红魔馆所在区域的雾中湖泊。',detail:'湖畔是妖精活动的地方。琪露诺与冷气、冰晶的形象，让这片湖水成为许多访客熟悉的风景。',relation:'红魔馆位于湖畔一带；地图不标定湖的真实形状。',work:'《东方红魔乡》《东方求闻史纪》',source:'https://thwiki.cc/雾之湖',basis:'场景词条及原作设定'},
    {id:'scarlet',region:'scarlet',name:'红魔馆',en:'Scarlet Devil Mansion',type:'洋馆',world:'地上 · 湖畔',x:76,y:31,residents:['remilia','sakuya','flandre','meiling','patchouli'],people:['蕾米莉亚','十六夜咲夜','芙兰朵露','红美铃'],summary:'斯卡蕾特姐妹生活的西式洋馆。',detail:'蕾米莉亚是馆主，咲夜负责馆中事务，美铃看守大门。馆内图书馆与屋顶钟楼分别作为细部地点收录。',relation:'图书馆和钟楼均属于红魔馆，不是周边独立建筑。',work:'《东方红魔乡》《东方三月精》',source:'https://thwiki.cc/红魔馆',basis:'游戏场景与书籍中的建筑资料'},
    {id:'library',region:'scarlet',name:'大图书馆',en:'Mansion Library',type:'馆内空间',world:'红魔馆内',x:84,y:76,residents:['patchouli'],people:['帕秋莉·诺蕾姬','小恶魔'],summary:'红魔馆内堆叠着藏书的空间。',detail:'与帕秋莉及小恶魔有关，是《红魔乡》的重要场景。图中用剖视小景表现书架与书桌，不能当作馆外另一座建筑。',relation:'属于红魔馆内部；“巴瓦鲁”是关联曲名，不作为正式馆名。',work:'《东方红魔乡》《东方三月精》',source:'https://thwiki.cc/红魔馆大图书馆',basis:'游戏关卡与出版物勘误资料'},
    {id:'clocktower',region:'scarlet',name:'红魔馆钟楼',en:'Mansion Clock Tower',type:'建筑细部',world:'红魔馆屋顶',x:75,y:13,residents:['sakuya'],people:['十六夜咲夜'],summary:'洋馆屋顶上可见的钟楼。',detail:'钟楼是红魔馆建筑的一部分，在相关场景中可见。它在本册被放大标注，便于观察屋顶、钟面与外立面细节。',relation:'红魔馆的屋顶设施；不以图中高度推定原作尺寸。',work:'《东方红魔乡》及相关场景资料',source:'https://thwiki.cc/红魔馆钟楼',basis:'建筑场景图像'},
    {id:'mountain',region:'mountain',name:'妖怪之山',en:'Youkai Mountain',type:'山岳',world:'地上',x:49,y:26,residents:['aya','sanae','chen','nitori','momiji','kanako','suwako'],people:['射命丸文','河城荷取','东风谷早苗','橙'],summary:'天狗、河童与神明活动的山。',detail:'山中有不同妖怪的生活区域，也有迁入幻想乡的守矢神社。瀑布、山麓溪流与高处神社构成不同层次的风景。',relation:'山岳为区域主体；其他地点的位置只保留已知层次关系。',work:'《东方风神录》《东方求闻史纪》',source:'https://thwiki.cc/妖怪之山',basis:'原作场景及设定资料'},
    {id:'moriya',region:'mountain',name:'守矢神社',en:'Moriya Shrine',type:'神社',world:'妖怪之山',x:82,y:27,residents:['sanae','kanako','suwako'],people:['东风谷早苗','八坂神奈子','洩矢诹访子'],summary:'迁入山中的另一座神社。',detail:'早苗、神奈子与诹访子生活、活动的据点。神社与风神之湖一同迁入幻想乡，和博丽神社是不同的场所。',relation:'位于妖怪之山；不将图中位置等同于精确山顶。',work:'《东方风神录》',source:'https://thwiki.cc/守矢神社',basis:'游戏设定与场景资料'},
    {id:'windlake',region:'mountain',name:'风神之湖',en:"Wind God's Lake",type:'山中湖泊',world:'妖怪之山',x:90,y:43,residents:['kanako'],people:['八坂神奈子'],summary:'与守矢神社一同迁入的湖。',detail:'又称八坂之湖，湖畔的御柱是相关场景的识别特征。它与雾之湖分别收录，避免把两个湖泊混为一处。',relation:'与守矢神社相关的山中湖泊；不是雾之湖。',work:'《东方风神录》《东方儚月抄》',source:'https://thwiki.cc/风神之湖',basis:'游戏场景与书籍资料'},
    {id:'waterfall',region:'mountain',name:'九天瀑布',en:'Nine Heavens Waterfall',type:'瀑布',world:'妖怪之山',x:61,y:66,residents:['momiji','aya'],people:['犬走椛','射命丸文'],summary:'从山间峭壁落下的巨大瀑布。',detail:'是《风神录》中具有代表性的山中场景，与天狗的守备活动相关。水、崖壁与林木是本图重点刻画的细节。',relation:'位于妖怪之山；不据绘图推定与各住处的步行距离。',work:'《东方风神录》《东方铃奈庵》',source:'https://thwiki.cc/九天瀑布',basis:'游戏关卡与书籍场景'},
    {id:'genbu',region:'mountain',name:'玄武涧',en:'Genbu Ravine',type:'溪谷',world:'山麓一带',x:25,y:82,residents:['nitori'],people:['河城荷取'],summary:'河童活动、岩石与溪流交错的地方。',detail:'与妖怪之山山麓及魔法森林一带相关，河城荷取在此有据点。不同资料的描述不宜硬拼为精确坐标。',relation:'归入山麓溪流；与森林的具体相对位置保留不确定性。',work:'《东方绯想天》《东方茨歌仙》等',source:'https://thwiki.cc/玄武涧',basis:'场景词条及书籍资料'},
    {id:'tengu',region:'mountain',name:'天狗的聚落',en:'Tengu Settlement',type:'聚落',world:'妖怪之山',x:14,y:28,residents:[],people:['天狗族群'],summary:'位于深山的天狗生活区域。',detail:'原作书籍描写过山中天狗的聚居环境。具体位置并不明确，本册用林间层叠木屋作意象表达。',relation:'仅确认属于山中区域；图中的左右和高低并非设定。',work:'《东方醉蝶华》等书籍',source:'https://thwiki.cc/天狗的聚落',basis:'书籍场景资料；具体位置未明'},
    {id:'bamboo',region:'bamboo',name:'迷途竹林',en:'Bamboo Forest of the Lost',type:'竹林',world:'地上',x:35,y:55,residents:['mokou','tewi'],people:['藤原妹红','因幡天为'],summary:'路径复杂、容易迷失方向的竹林。',detail:'茂密的竹子与难以辨认的道路构成这里的特征。永远亭藏在竹林内；妹红也与此地的活动和引路故事相关。',relation:'永远亭位于竹林内部；图中小径不是可照走的攻略路线。',work:'《东方永夜抄》《东方求闻史纪》',source:'https://thwiki.cc/迷途竹林',basis:'原作设定及书籍资料'},
    {id:'eientei',region:'bamboo',name:'永远亭',en:'Eientei',type:'宅邸',world:'迷途竹林内',x:76,y:32,residents:['reisen','kaguya','eirin','tewi'],people:['蓬莱山辉夜','八意永琳','铃仙·优昙华院·因幡','因幡天为'],summary:'藏在竹林深处的大型日式宅邸。',detail:'辉夜、永琳等人的居处。屋宇与漫长走廊是相关场景的代表意象，作品中亦可见其对外提供医疗服务的一面。',relation:'在迷途竹林中；长廊小景是宅内细节，不另算一个地理地点。',work:'《东方永夜抄》《东方求闻史纪》',source:'https://thwiki.cc/永远亭',basis:'游戏与书籍中的场景资料'},
    {id:'nether',region:'nether',name:'白玉楼',en:'Hakugyokurou',type:'宅邸与庭园',world:'冥界',x:27,y:32,residents:['youmu','yuyuko'],people:['西行寺幽幽子','魂魄妖梦'],summary:'冥界中拥有巨大樱庭的宅邸。',detail:'幽幽子是主人，妖梦照料庭园并担任护卫。庭园与宅邸的开放程度不同，图中建筑细节作意象重构。',relation:'位于冥界；西行妖在其庭园中。',work:'《东方妖妖梦》《东方求闻史纪》',source:'https://thwiki.cc/白玉楼',basis:'《求闻史纪》及场景资料'},
    {id:'saigyou',region:'nether',name:'西行妖',en:'Saigyou Ayakashi',type:'妖怪樱树',world:'冥界 · 白玉楼',x:48,y:32,residents:['yuyuko'],people:['西行寺幽幽子'],summary:'白玉楼庭园中不盛开的古老樱树。',detail:'与《妖妖梦》的春雪异变密切相关。插图用深色老树干与较少花朵区分周围樱树，并不画成普通盛开的樱花。',relation:'属于白玉楼庭园；与幽幽子的身世相关。',work:'《东方妖妖梦》角色设定与故事',source:'https://thwiki.cc/西行妖',basis:'原作故事与角色设定'},
    {id:'border',region:'nether',name:'幽明结界',en:'Boundary of Life and Death',type:'分界',world:'现世与冥界之间',x:25,y:76,residents:[],people:['八云紫','魂魄妖梦'],summary:'现世与冥界之间的边界。',detail:'主人公在《妖妖梦》中穿过结界前往冥界。图中阶梯与薄雾只用于表现通往另一侧的意象，不是固定入口坐标。',relation:'与冥界相连的分界概念；不是通往所有异界的统一大门。',work:'《东方妖妖梦》及后续设定',source:'https://thwiki.cc/幽明结界',basis:'游戏流程及书籍设定'},
    {id:'sanzu',region:'nether',name:'三途河',en:'Sanzu River',type:'河流',world:'通往彼岸',x:79,y:65,residents:['komachi'],people:['小野塚小町'],summary:'与死后旅程和渡船相关的河流。',detail:'小町担任摆渡者。三途河与彼岸的设定应单独阅读，不能把它画成白玉楼庭园里的一条普通溪水。',relation:'渡河后关联彼岸；不据此认定与冥界庭园直接相邻。',work:'《东方花映塚》《东方求闻史纪》',source:'https://thwiki.cc/三途河',basis:'角色设定与场景资料'},
    {id:'higan',region:'nether',name:'彼岸',en:'Higan',type:'异界',world:'彼岸',x:84,y:35,residents:['eiki','komachi'],people:['四季映姬·夜摩仙那度','小野塚小町'],summary:'与三途河渡岸及阎魔审判相关的世界。',detail:'与映姬、小町的职责相连。本图将彼岸放在留白另一侧的独立小景，避免与幽幽子居住的冥界混淆。',relation:'彼岸与冥界不是同一个名称下的同一地点。',work:'《东方花映塚》《东方求闻史纪》',source:'https://thwiki.cc/彼岸',basis:'原作场景与设定资料'},
    {id:'oldcapital',region:'underground',name:'旧都',en:'Former Capital',type:'聚落',world:'旧地狱',x:23,y:42,residents:['yuugi'],people:['星熊勇仪','鬼族'],summary:'地下世界中保留旧日繁华的街道。',detail:'旧地狱一带的聚落，与鬼族生活相关。图中以成排木屋、桥与无字灯笼表现街巷，不使用现实城市地图。',relation:'属于地底旧地狱一带；不是地上的人类村落。',work:'《东方地灵殿》《东方求闻口授》',source:'https://thwiki.cc/旧都',basis:'游戏关卡与书籍设定'},
    {id:'palace',region:'underground',name:'地灵殿',en:'Palace of the Earth Spirits',type:'洋馆',world:'旧地狱',x:75,y:28,residents:['satori','koishi','rin','utsuho'],people:['古明地觉','古明地恋','火焰猫燐','灵乌路空'],summary:'古明地觉生活的地下洋馆。',detail:'馆中有许多宠物，与下方灼热地狱遗址的管理相关。彩色玻璃与格纹地面用于表现其建筑意象。',relation:'与灼热地狱遗址有上下层联系；不能与红魔馆混同。',work:'《东方地灵殿》《东方求闻口授》',source:'https://thwiki.cc/地灵殿（场景）',basis:'游戏场景与角色设定'},
    {id:'blazing',region:'underground',name:'灼热地狱遗址',en:'Remains of Blazing Hell',type:'地底遗址',world:'地灵殿下方',x:49,y:73,residents:['rin','utsuho'],people:['火焰猫燐','灵乌路空'],summary:'地灵殿下方残留着灼热的区域。',detail:'与燐、空的职责和《地灵殿》的异变有关。本册用岩层、洞穴和温暖光晕表现层次，没有采用现实地质深度。',relation:'位于地灵殿下方；更深处为核融合相关设施。',work:'《东方地灵殿》',source:'https://thwiki.cc/灼热地狱遗址',basis:'游戏场景及人物设定'},
    {id:'reactor',region:'underground',name:'核融合炉',en:'Nuclear Fusion Furnace',type:'设施',world:'地底深处',x:82,y:82,residents:['utsuho'],people:['灵乌路空'],summary:'与核融合力量和空相关的深层设施。',detail:'作为《地灵殿》后段的重要场景收录。机器、管道与炉口的外观在这里为画师意象设计，并非工程结构复原。',relation:'与灼热地狱及核融合控制设施相关；不标注现实参数。',work:'《东方地灵殿》及相关场景',source:'https://thwiki.cc/核融合控制中心',basis:'游戏后段场景与设定资料'}
  ]
};

// 相关人物仅作导览，不把来访者一律视为定居者。
for(const [id,ids,names] of [
  ['village',['akyuu','kosuzu'],[]],
  ['suzunaan',['kosuzu','akyuu'],['稗田阿求']],
  ['myouren',['shou','murasa','nue','mamizou','nazrin'],['封兽鵺','二岩猯藏','娜兹玲']]
]){
  const p=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);
  p.residents=[...new Set([...p.residents,...ids])];p.people=[...new Set([...p.people,...names])];
}
window.GENSOKYO_ATLAS.places.find(p=>p.id==='myouren').residents.push('kyouko');
window.GENSOKYO_ATLAS.places.find(p=>p.id==='myouren').people.push('幽谷响子');
for(const [id,resident,name] of [['lake','wakasagihime','若鹭姬'],['bamboo','kagerou','今泉影狼'],['village','sekibanki','赤蛮奇']]){
  const place=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);
  if(!place.residents.includes(resident))place.residents.push(resident);
  if(!place.people.includes(name))place.people.push(name);
}

// 地点相关人物是导览，不等同于精确住址。
for(const [id,ids,names] of [
 ['mountain',['shizuha','minoriko','hina'],['秋静叶','秋穰子','键山雏']],
 ['tengu',['hatate'],['姬海棠果']],
 ['sunfield',['lunasa','merlin','lyrica','raiko'],['普莉兹姆利巴 with H（演出关联）']]
]){
 const p=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);
 p.residents=[...new Set([...p.residents,...ids])];p.people=[...new Set([...p.people,...names])];
}

// 第十批：神社附近的大树住民，只作为区域相关人物。
{const p=window.GENSOKYO_ATLAS.places.find(p=>p.id==='shrine');p.residents.push('sunny','luna','star');p.people.push('桑尼米尔克','露娜切露德','斯塔萨菲雅');}

// 第十一批：月兔的地上生意与神社地板下的新住民。
for(const [id,ids,names] of [
 ['village',['seiran','ringo'],['清兰','铃瑚']],
 ['shrine',['clownpiece'],['克劳恩皮丝']]
]){const p=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);p.residents.push(...ids);p.people.push(...names);}

// 第十二批：只补区域相关人物，不设定未核实的精确坐标。
for(const [id,ids,names] of [
 ['shrine',['aunn'],['高丽野阿吽']],
 ['forest',['narumi'],['矢田寺成美']],
 ['mountain',['nemuno'],['坂田合欢（山麓圣域）']],
 ['sunfield',['eternity'],['拉尔瓦（冬季以外活动）']]
]){const p=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);p.residents.push(...ids);p.people.push(...names);}

// 第十三批：区域导览与工作关联，不等同于所有人物的固定住址。
for(const [id,ids,names] of [
 ['kourindou',['rinnosuke','sumireko'],['森近霖之助','宇佐见堇子（后来打工）']],
 ['myouren',['ichirin','unzan'],['云居一轮','云山']],
 ['village',['miyoi'],['奥野田美宵（鲵吞亭工作）']]
]){const p=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);p.residents.push(...ids);p.people.push(...names);}

// 第十四批：润美的三途河岸居住线索；不为赛之河原、关口或畜生界编坐标。
{const p=window.GENSOKYO_ATLAS.places.find(p=>p.id==='sanzu');p.residents.push('urumi');p.people.push('牛崎润美（河岸养鱼）');}

// 第十五批：区域阅读线索，不编造新地点坐标或矿洞路线。
{const p=window.GENSOKYO_ATLAS.places.find(p=>p.id==='mountain');p.residents.push('mike','takane','sannyo','tsukasa','megumu');p.people.push('豪德寺三花（山中活动）','山城高岭（秘天崖）','驹草山如（高地）','菅牧典（交涉）','饭纲丸龙（山顶附近）');}
