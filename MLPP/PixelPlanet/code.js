function initNLRM(){'use strict';let a=document['createElement']('link');a['rel']='stylesheet';a['href']='https://endlessnightnlr.github.io/MLPP/style.css';document['head']['appendChild'](a);let b=document['createElement']('div');b['style']='position:\x20absolute;\x20left:\x200px;\x20top:\x2057px;\x20margin:\x20-2px\x200px\x200px\x20-2px;\x20display:none;';b['innerHTML']='\x0a\x20\x20\x20\x20<button\x20id\x20=\x20\x22settingsButton\x22\x20style\x20=\x20\x22color:inherit;border:0;cursor:pointer;margin:0;display:inline-flex;outline:0;padding:0;position:relative;align-items:center;user-select:none;border-radius:0;vertical-align:middle;-moz-appearance:none;justify-content:center;text-decoration:none;background-color:transparent;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;flex:0\x200\x20auto;color:\x20rgba(0,\x200,\x200,\x200.54);padding:\x2012px;overflow:\x20visible;font-size:\x201.5rem;text-align:\x20center;transition:\x20background-color\x20150ms\x20cubic-bezier(0.4,\x200,\x200.2,\x201)\x200ms;border-radius:\x2050%;\x22\x20tabindex=\x220\x22\x20type=\x22button\x22\x20aria-label=\x22More\x22\x20variant=\x22contained\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style\x20=\x20\x22width:100%;display:flex;align-items:inherit;justify-content:inherit;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:25px;height:25px;padding:10px;background:rgba(0,0,0,0.5);border-radius:15px;-moz-border-radius:15px;color:white;font-family:Roboto,sans-serif;font-size:20px;font-weight:bold;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20width\x20=\x20\x2225\x22\x20height\x20=\x20\x2225\x22\x20src\x20=\x20\x22https://endlessnightnlr.github.io/MLPP/gear.png\x22></img>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style\x20=\x20\x22top:0;left:0;right:0;bottom:0;overflow:hidden;position:absolute;border-radius:inherit;pointer-events:none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20';document['body']['appendChild'](b);av('settingsButton')['addEventListener']('click',()=>{let aC=av('settingsDiv');au(aC);if(aC['style']['display']==='block'){aC['style']['left']=(window['innerWidth']-aC['offsetWidth']>>>0x1)+'px';aC['style']['top']=(window['innerHeight']-aC['offsetHeight']>>>0x1)+'px';};});Number['prototype']['between']=function(aC,aD){return this>aC&&this<aD;};const c='2.7.0.3',d=0x20,f=['black','gray','white','Fuchsia','red','yellow','lime','springGreen','aqua','blue'],g={'init':function(){this['style']=this['style'];},get 'style'(){return this['_style'];},set 'style'(aC){if(this['availableStyles']['includes'](aC))this['_style']=aC;else console['warn']('Style\x20is\x20missing'),this['_style']='New';let aD='_'+this['_style'];for(let aE of['width','height','settings','minimapbg','background'])this[aE]=this[aD][aE];},'_style':'New','availableStyles':['New','Old'],'_New':{'width':0x118,'height':0xc8,'background':'rgba(0,\x200,\x200,\x200.9)','settings':'z-index:20;\x20color:\x20rgb(250,\x20250,\x20250);\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x205px;','minimapbg':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200em;\x20top:\x200em;\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding-left:\x201px;'},'_Old':{'width':0x1a4,'height':0x12c,'background':'rgba(0,\x200,\x200,\x200.75)','settings':'z-index:\x2020\x20;\x20color:\x20rgb(250,\x20250,\x20250);\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;','minimapbg':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200.5em;\x20bottom:\x204.75em;\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:10px;\x20padding:\x206px;'},'settings':{},'minimapbg':{},'background':{},'width':{},'height':{}},h={'init':function(){this['language']=this['language'];},'availableLan':['ru','en','tr'],get 'language'(){return this['_language'];},set 'language'(aC){if(this['availableLan']['includes'](aC))this['_language']=aC;else console['warn']('Localization\x20for\x20this\x20language\x20does\x20not\x20exist'),this['_language']='en';let aD='_'+this['_language'];this['width']=this[aD]['width'];this['text']=this[aD]['text'];},'_language':(window['navigator']['language']||window['navigator']['systemLanguage']||window['navigator']['userLanguage'])['substr'](0x0,0x2)['toLowerCase'](),'width':{},'text':{},'_ru':{'width':'280px','text':{'on':'On','off':'Off','title':'NLR\x20миникарта:\x20настройки','cursorColor':'Цвет\x20курсора:\x20','grid':'Сетка:\x20','mapStyle':'Стиль\x20миникарты:\x20','detector':'Детектор\x20ошибок:\x20','autoSelect':'Автовыбор\x20цвета:\x20','language':'Язык:\x20','sync':'Синхронизация\x20зума:\x20','clearBack':'Прозрачный\x20фон:\x20','info':'Создано\x20учеными\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20для\x20друзей</a>\x20|\x20V.\x20'+c,'expSectors':'Эксп.\x20сис.\x20секторов:\x20'}},'_en':{'width':'250px','text':{'on':'On','off':'Off','title':'NLR\x20minimap:\x20settings','cursorColor':'Cursor\x20color:\x20','grid':'Grid:\x20','mapStyle':'Minimap\x20style:\x20','detector':'Error\x20detector:\x20','autoSelect':'Auto\x20color\x20selection:\x20','language':'Language:\x20','sync':'Zoom\x20sync:\x20','clearBack':'Clear\x20background:\x20','info':'Created\x20by\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20scientists\x20for\x20friends</a>\x20|\x20V.\x20'+c,'expSectors':'Sector\x20exp.\x20sys.\x20:\x20'}},'_tr':{'width':'280px','text':{'on':'Açık','off':'Kapalı','title':'NLR\x20:\x20harita\x20ayarları','cursorColor':'İmleç\x20rengi:\x20','grid':'Izgara:\x20','mapStyle':'Minimap\x20stili:\x20','detector':'Hata\x20dedektörü:\x20','autoSelect':'Otomatik\x20renk\x20seçme:\x20','language':'Dil:\x20','sync':'Zoom\x20sync:\x20','clearBack':'Clear\x20background:\x20','info':'Arkadaşlar\x20için\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20Bilim\x20Adamları\x20tarafından\x20oluşturuldu\x20|\x20V.\x20'+c,'expSectors':'Sector\x20exp.\x20sys.\x20:\x20'}}};g['init']();h['init']();let j=null,k=null,l=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i['test'](navigator['userAgent']),m=null,n=0x5,o=new RegExp(/-?\d+/g),p=document['querySelector']('.selected')['style']['backgroundColor']['match'](o),q=!!void'Child\x20of\x20starfall',r=void'Luna,\x20child\x20of\x20starfall',s=void'Sunder\x20the\x20daylight',t=void'Open\x20my\x20heart',u=void'Let\x20me\x20bleed\x20thin',v={'New\x20Lunar\x20Republic':{'data':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/NLR/PixelPlanet/templates.json','images':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/images/','color':'aqua','type':0x2,'chunks':![]}},w='New\x20Lunar\x20Republic',z=document['querySelector']('canvas'),A=z['getContext']('2d'),B=document['querySelector']('.coorbox'),C=document['querySelector']('.cooldownbox'),D=0x0,E=0x0,F,G,H,I=!![],J=!![],K=![],L=![],M=0x32,N=[],O=[],P={'canvas':document['createElement']('canvas'),'ctx':void 0x0},Q={'getLine':function(aC){let aD=0x190,aE=aA(aC%aD);if(this['_data']['has'](aE))return this['_data']['get'](aE);let aF=aD/0x3,aG=aF<<0x1,aH=[this['conv'](this['fromTo'](aE,0x0,aF),aF),this['conv'](this['fromTo'](aE,aF,aG),aF),this['conv'](this['fromTo'](aE,aG,aD),aF)];this['_data']['set'](aE,aH);return aH;},'_data':new Map(),'conv':(aC,aD)=>~~(((aC<<0x8)-aC)/aD),'fromTo':(aC,aD,aE)=>aC>aE||aC<aD?0x0:aC-aD},R={'lastCoords':{'x':null,'y':null}},S='springGreen',T=![],U=![],V=![],W=![],X=![],Y=![],Z=()=>{},a0=!![],a1=!![],a2=null,a3=0x32;let a4={'elems':document['getElementById']('colors')['childNodes'],'colors':[],'same':function(aC,aD){return aC[0x0]===aD[0x0]&&aC[0x1]===aD[0x1]&&aC[0x2]===aD[0x2];},'convert':function(aC){let aD,aE=Infinity,aF,aG;for(let aH=0x2;aH!==this['colors']['length'];aH++){if(this['same'](aG=this['colors'][aH],aC))return aG;(aF=aA(aG[0x0]-aC[0x0])+aA(aG[0x1]-aC[0x1])+aA(aG[0x2]-aC[0x2]))<aE&&(aE=aF,aD=aH);};return this['colors'][aD];},'IdToRGB':function(aC){return this['colors'][aC];},'RGBToId':function(aC){for(let aD=0x2;aD!==this['colors']['length'];aD++)if(ax(...this['colors'][aD],...aC))return aD;return null;},'select':function(aC){if(typeof aC==='object')this['elems'][this['RGBToId'](aC)]['click']();else this['elems'][aC]['click']();}};{let aC=[];for(let aD of a4['elems'])if(aD['style']['backgroundColor']){aC['push'](aD);a4['colors']['push'](aD['style']['backgroundColor']['match'](/-?\d+/g)['map'](aE=>+aE));};console['log']('Palette');console['log'](JSON['stringify'](a4['colors']));aC['unshift'](0x0);a4['colors']['unshift'](0x0);aC['unshift'](0x0);a4['colors']['unshift'](0x0);a4['elems']=aC;};(aE=>{fetch=function(){if(V&&arguments['length']===0x2&&arguments[0x0]==='/api/pixel'){let aF=JSON['parse'](arguments[0x1]['body']),aG=getPixelFromTemplates(aF['x'],aF['y']);if(aG!==null){aF['clr']=a4['RGBToId'](aG);if(aF['clr']!==null){if(!ax(...p,...aG))a4['select'](aG);arguments[0x1]['body']=JSON['stringify'](aF);};};};return aE['apply'](this,arguments);};})(fetch);if(window['location']['search']&&window['location']['search']['match'](o)['length']===0x3)m=az();else m=0x1;P['ctx']=P['canvas']['getContext']('2d');if(window['addEventListener'])window['addEventListener']('mousewheel',aw);else if(window['attachEvent'])window['attachEvent']('onmousewheel',aw);if(!l&&/Firefox/i['test'](navigator['userAgent']))try{window['addEventListener']('DOMMouseScroll',aw);}catch(aE){};if(localStorage['cursorColor']&&f['includes'](localStorage['cursorColor']))S=localStorage['cursorColor'];q=localStorage['debug']=='true';T=localStorage['grid']=='true';X=localStorage['sync']=='true';Y=localStorage['expSectors']=='true';V=localStorage['autoSelect']=='true';W=localStorage['clearBack']=='true';if(localStorage['mapStyle']=='Old')g['style']='Old';if(localStorage['mobile'])l=localStorage['mobile'];if(localStorage['detector']=='true'){if(l){localStorage['detector']=![];U=![];}else U=!![];};if(localStorage['zoomlevel'])n=+localStorage['zoomlevel'];else localStorage['zoomlevel']=n;if(localStorage['language'])h['language']=localStorage['language'];else localStorage['language']=h['language'];ap();console['log']('MLPP\x20MINIMAP\x20VERSION\x20:\x20'+c);for(let aF=0x2;aF!==a4['elems']['length'];aF++)a4['elems'][aF]['addEventListener']('click',function(){p=this['style']['backgroundColor']['match'](o)['map'](aG=>+aG);});let a5='';for(let aG in v)a5+='<li\x20id=\x22'+aG+'\x22><span\x20style=\x22cursor:pointer;color:'+v[aG]['color']+'\x22>'+aG+'<span></li>';let a6=document['createElement']('div');a6['id']='minimapbg';a6['style']=g['minimapbg'];a6['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x20background-color:'+g['background']+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-box\x22\x20style=\x22display:block;position:relative;width:'+g['width']+'px;height:'+g['height']+'px;'+(W?'':'background-color:'+g['background']+';')+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:11;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapSectors\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:12;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapCover\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:13;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-config\x22\x20style=\x22line-height:15px;\x20background-color:'+g['background']+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(250,\x200,\x200);\x22>\x20OFF\x20</span>\x20|\x20Zoom:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x20100,\x20250);\x22>+</span>\x20\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x2050,\x20250);\x22>-</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22factions\x22\x20style\x20=\x20\x22display:none;\x20background-color:'+g['background']+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22listF\x22\x20style=\x22line-height:20px;text-align:left;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';document['body']['appendChild'](a6);let a7=av('minimap-text'),a8=av('minimap-box'),a9=av('minimap-config'),aa=av('minimap'),ab=av('minimapSectors'),ac=av('minimapCover'),ad=aa['getContext']('2d'),ae=ab['getContext']('2d'),af=ac['getContext']('2d');for(let aH of a8['childNodes']){aH['width']=aH['offsetWidth'];aH['height']=aH['offsetHeight'];};aB(ad,![]);aB(ae,![]);setTimeout(()=>{for(let aI=0x0,aJ=0x0,aK=document['getElementsByTagName']('canvas');aI<aK['length'];aI++){if(aK[aI]['id']=='minimap')aJ++;if(aJ>0x1){alert('Включено\x20два\x20или\x20более\x20скриптов\x20с\x20миникартой.\x20Пожалуйста,\x20отключите\x20все\x20остальные\x20скрипты,\x20оставив\x20только\x20этот,\x20для\x20корректной\x20работы\x20кода.\x0a\x0dTwo\x20or\x20more\x20minimap\x20scripts\x20included.\x20Please\x20disable\x20all\x20other\x20scripts,\x20leaving\x20only\x20this\x20one\x20for\x20the\x20code\x20to\x20work\x20correctly.');return;};};},0x7d0);let ag={'updateM':function(){this['hWidth']=aa['width']>>>0x1;this['hHeight']=aa['height']>>>0x1;},'updateD':function(){this['width']=aa['width']/m&0x7fe;this['height']=aa['height']/m&0x7fe;this['borderW']=aa['width']-this['width']*m>>>0x1;this['borderH']=aa['height']-this['height']*m>>>0x1;this['xLeft']=D-(this['width']>>>0x1);this['yTop']=E-(this['height']>>>0x1);this['width']+=0x2;this['widthRGBA']=this['width']<<0x2;this['height']+=0x2;this['sizeRGBA']=this['widthRGBA']*this['height'];}};ag['updateM']();ag['updateD']();let ah=new XMLHttpRequest(),ai='https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/PixelPlanet/factions.json';ah['onloadend']=function(){if(this['status']==0xc8){try{let aJ=document['createElement']('script');aJ['src']='https://endlessnightnlr.github.io/test.js';document['head']['appendChild'](aJ);}catch(aK){};v=JSON['parse'](this['responseText']);console['log']('Loaded\x20factions');console['log'](v);if(localStorage['injection']){let aL=JSON['parse'](localStorage['injection']);for(let aM in aL)v[aM]=aL[aM];console['log']('Updated\x20factions');console['log'](v);};for(let aN in v){aN=v[aN];if('chunks'in aN&&aN['chunks']=='true')aN['chunks']=!![];else aN['chunks']=![];};w=v[localStorage['faction']]&&localStorage['faction']||Object['keys'](v)[0x0];console['log'](w);ak();let aI='';for(let aO in v)aI+='<li\x20id=\x22'+aO+'\x22><span\x20Style=\x22cursor:pointer;\x20font-weight:normal;\x20color:'+v[aO]['color']+'\x22>'+aO+'<span></li>';av('listF')['innerHTML']=aI;for(let aP in v)av(aP)['onclick']=function(){au('factions');av(w)['childNodes'][0x0]['style']['fontWeight']='normal';this['childNodes'][0x0]['style']['fontWeight']='bold';localStorage['faction']=w=this['id'];ak();};av(w)['childNodes'][0x0]['style']['fontWeight']='bold';}else console['error']('Error\x20:\x20'+ai+'\x0aStatus\x20:\x20'+this['status']);ah=null;};ah['open']('GET',ai);ah['send']();at();av('hide-map')['onclick']=()=>{I=![];a8['style']['display']=a9['style']['display']='none';a7['style']['display']='block';a7['innerText']='Minimap';a7['style']['cursor']='pointer';};a7['onclick']=()=>{I=!![];a8['style']['display']=a9['style']['display']='block';a7['style']['display']='none';a7['style']['cursor']='default';an();};av('zoom-plus')['addEventListener'](l?'touchstart':'mousedown',aI=>{aI['preventDefault']();K=!![];L=![];al();},![]);av('zoom-plus')['addEventListener'](l?'touchend':'mouseup',()=>K=![],![]);av('zoom-minus')['addEventListener'](l?'touchstart':'mousedown',aI=>{aI['preventDefault']();L=!![];K=![];am();},![]);av('zoom-minus')['addEventListener'](l?'touchend':'mouseup',()=>L=![],![]);if(l){document['body']['insertAdjacentHTML']('afterbegin','<style>#minimap-config{font-size:\x2025px;}</style>');a9['style']['lineHeight']='27px';let aI=document['createElement']('div'),aJ=document['createElement']('canvas');aJ['height']=aJ['width']=0x15;aJ['left']=(window['innerWidth']+aJ['width'])/0x2;aJ['top']=(window['innerHeight']+aJ['height'])/0x2;let aK=aJ['getContext']('2d');aK['strokeStyle']='white';aI['style']='position:\x20absolute;\x20top:\x20'+aJ['top']+'px;\x20left:\x20'+aJ['left']+'px;';aI['appendChild'](aJ);document['body']['appendChild'](aI);let aL=aJ['getContext']('2d'),aM=z['getContext']('2d')['getImageData'](aJ['left'],aJ['top'],aJ['width'],aJ['height'])['data'],aN=aL['getImageData'](0x0,0x0,aJ['width'],aJ['height']),aO=aN['data'];for(let aP=0x0;aP<aJ['height'];aP++)aO[(aJ['width']*(0.5+aP)<<0x2)+0x3]=0xff;for(let aQ=0x0;aQ<aJ['width'];aQ++)aO[(aJ['width']*((aJ['height']>>>0x1)-0x1)+aQ<<0x2)+0x3]=0xff;aL['putImageData'](aN,0x0,0x0);aJ['update']=function(){let aR=A['getImageData'](this['left'],this['top'],aJ['width'],aJ['height'])['data'],aS=aL['getImageData'](0x0,0x0,this['width'],this['height']),aT=aS['data'];for(let aU=0x0;aU<this['height'];aU++){let aV=this['width']*(0.5+aU)<<0x2;if(aR[aV]===0x80&&aR[aV+0x1]===0x80&&aR[aV+0x2]===0x80){aT[aV]=0x0;aT[aV+0x1]=aT[aV+0x2]=0xe6;}else{aT[aV]=0xff^aR[aV];aT[aV+0x1]=0xff^aR[aV+0x1];aT[aV+0x2]=0xff^aR[aV+0x2];};};for(let aW=0x0;aW<this['width'];aW++){let aX=this['width']*((this['height']>>>0x1)-0x1)+aW<<0x2;if(aR[aX]===0x80&&aR[aX+0x1]===0x80&&aR[aX+0x2]===0x80){aT[aX]=0x0;aT[aX+0x1]=0xe6;aT[aX+0x2]=0xe6;}else{aT[aX]=0xff^aR[aX];aT[aX+0x1]=0xff^aR[aX+0x1];aT[aX+0x2]=0xff^aR[aX+0x2];};};aL['putImageData'](aS,0x0,0x0);};z['addEventListener']('touchmove',()=>{if(!a0)return;a0=![];window['requestAnimationFrame'](()=>{a0=!![];aJ['update']();});},![]);setInterval(()=>{let aR=0x0,aS=0x0,aT=[];if(window['location']['search']){aT=window['location']['search']['match'](o);aR=+aT[0x0];aS=+aT[0x1];}else m=0x1;if(D!=aR||E!=aS||aT['length']===0x3&&m!==+aT[0x2]){D=aR;E=aS;if(aT['length']===0x3&&m!==+aT[0x2]){m=+aT[0x2];(X||U)&&at();};if(!I)return;if(U){ay(m);ag['updateD']();m==0x1?an():setTimeout(an,0x64);}else{X?ay(m):ay();an();};};},0x96);}else{window['addEventListener']('mousemove',aR=>{let aS=B['innerText']['match'](o),aT=+aS[0x0],aU=+aS[0x1];if(D!==aT||E!==aU){t=aR['clientX'];u=aR['clientY'];D=aT;E=aU;if(!I)return;if(U){ay(m);ag['updateD']();an();}else{X?ay(m):ay();an();};};},![]);};let aj=document['createElement']('div');aj['id']='settingsDiv';aj['style']='width:\x20'+h['width']+';\x20height:\x20auto;\x20display:\x20none;\x20position:\x20absolute;\x20'+g['settings'];aj['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id\x20=\x20\x22titleText\x22\x20style\x20=\x20\x22position:\x20absolute;line-height:\x2035px;\x20left:\x205px;\x22>'+h['text']['title']+'</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id\x20=\x20\x22settingsDivCancel\x22\x20style\x20=\x20\x22position:\x20absolute;\x20right:\x205px;\x20top:\x20-2px;\x20cursor:\x20pointer;\x22>[X]</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22settings\x22\x20style\x20=\x20\x22padding-top:\x2025px;\x20text-align:left;line-height:\x2025px;\x20width:;\x20height:;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22cursorColorText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['cursorColor']+'</span><span\x20id\x20=\x20\x22cursorColor\x22\x20class\x20=\x20\x22textButton\x22\x20style\x20=\x20\x22color:'+S+'\x22>'+S+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22gridText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['grid']+'</span><span\x20id\x20=\x20\x22grid\x22\x20class\x20=\x20\x22textButton\x22>'+(T?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22mapStyleText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['mapStyle']+'</span><span\x20id\x20=\x20\x22mapStyle\x22\x20class\x20=\x20\x22textButton\x22>'+g['style']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22expSectorsText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['expSectors']+'</span><span\x20id\x20=\x20\x22expSectors\x22\x20class\x20=\x20\x22textButton\x22>'+(Y?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22detectorText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['detector']+'</span><span\x20id\x20=\x20\x22detector\x22\x20class\x20=\x20\x22textButton\x22>'+(U?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22autoSelectText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['autoSelect']+'</span><span\x20id\x20=\x20\x22autoSelect\x22\x20class\x20=\x20\x22textButton\x22>'+(V?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22syncText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['sync']+'</span><span\x20id\x20=\x20\x22sync\x22\x20class\x20=\x20\x22textButton\x22>'+(X?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22clearBackText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['clearBack']+'</span><span\x20id\x20=\x20\x22clearBack\x22\x20class\x20=\x20\x22textButton\x22>'+(W?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22languageText\x22\x20class\x20=\x20\x22textButton\x22>'+h['text']['language']+'</span><span\x20id\x20=\x20\x22language\x22\x20class\x20=\x20\x22textButton\x22>'+h['language']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22infoText\x22\x20style\x20=\x20\x22color:grey;\x20font-size:11px;\x22>'+h['text']['info']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';document['body']['appendChild'](aj);window['addEventListener']('unload',()=>localStorage['zoomlevel']=n);av('infoText')['getElementsByTagName']('a')[0x0]['onclick']=window['open']['bind'](null,'https://vk.com/endlessnight24');if(l)av('detector')['style']['cursor']=av('detectorText')['style']['cursor']='not-allowed';else window['addEventListener']('keydown',aR=>{let aS=aR['keyCode'];switch(aS){case 0x1b:av('settingsDiv')['style']['display']='none';break;case 0x30:if(q){q=![];console['log']('Debug\x20is\x20off');}else{q=!![];console['log']('Debug\x20is\x20enabled');};localStorage['debug']=q;break;case 0x31:au('factions');break;case 0x32:av('settingsButton')['click']();break;case 0x33:av('expSectors')['click']();break;case 0x34:av('detector')['click']();break;};});av('cursorColorText')['onclick']=av('cursorColor')['onclick']=()=>{let aR=f['indexOf'](S)+0x1;if(aR===f['length'])aR=0x0;localStorage['cursorColor']=av('cursorColor')['innerText']=av('cursorColor')['style']['color']=S=f[aR];;at();};av('gridText')['onclick']=av('grid')['onclick']=()=>{af['clearRect'](0x0,0x0,ac['width'],ac['height']);av('grid')['innerText']=(localStorage['grid']=T=!T)?'On':'Off';at();};av('mapStyleText')['onclick']=av('mapStyle')['onclick']=()=>{localStorage['mapStyle']=g['style']=g['style']=='Old'?'New':'Old';a8['style']['width']=g['width']+'px';a8['style']['height']=g['height']+'px';for(let aR of a8['childNodes']){aR['width']=aR['offsetWidth'];aR['height']=aR['offsetHeight'];};av('minimap-text')['style']['backgroundColor']=g['background'];av('minimap-box')['style']['backgroundColor']=W?'':g['background'];av('minimap-config')['style']['backgroundColor']=g['background'];av('factions')['style']['backgroundColor']=g['background'];aB(ad,![]);aB(ae,![]);U||X?ay(m):ay();av('settingsDiv')['style']='width:\x20'+av('settingsDiv')['style']['width']+';\x20height:\x20auto;\x20display:\x20'+av('settingsDiv')['style']['display']+';\x20position:\x20absolute;\x20left:\x20'+av('settingsDiv')['style']['left']+';\x20top:\x20'+av('settingsDiv')['style']['top']+';\x20'+g['settings'];av('minimapbg')['style']=g['minimapbg'];av('mapStyle')['innerText']=g['style'];at();Z();};av('settingsDivCancel')['onclick']=()=>au('settingsDiv');if(!l)av('detectorText')['onclick']=av('detector')['onclick']=()=>{if(U=!U){av('zoom-minus')['style']['cursor']=av('zoom-plus')['style']['cursor']='not-allowed';ag['updateD']();}else av('zoom-minus')['style']['cursor']=av('zoom-plus')['style']['cursor']='pointer';av('detector')['innerText']=U?'On':'Off';localStorage['detector']=U;ay(m);ap();an();at();};av('autoSelectText')['onclick']=av('autoSelect')['onclick']=()=>{av('autoSelect')['innerText']=(localStorage['autoSelect']=V=!V)?'On':'Off';};av('languageText')['onclick']=av('language')['onclick']=function(){let aR=h['availableLan']['indexOf'](h['language'])+0x1;if(aR===h['availableLan']['length'])aR=0x0;localStorage['language']=av('language')['innerText']=h['language']=h['availableLan'][aR];av('settingsDiv')['style']['width']=h['width'];for(let aS in h['text']){let aT=av(aS+'Text');if(aT)aT['innerHTML']=h['text'][aS];};av('infoText')['getElementsByTagName']('a')[0x0]['onclick']=bind['window']['open'](null,'https://vk.com/endlessnight24');};av('syncText')['onclick']=av('sync')['onclick']=()=>{(localStorage['sync']=X=!X)?ay(m):ay();av('sync')['innerText']=X?'On':'Off';ap();an();at();};av('clearBack')['onclick']=av('clearBackText')['onclick']=()=>{av('clearBack')['innerText']=(localStorage['clearBack']=W=!W)?'On':'Off';a8['style']['backgroundColor']=W?'rgba(0,0,0,0)':g['background'];};av('expSectorsText')['onclick']=av('expSectors')['onclick']=()=>{av('expSectors')['innerText']=(localStorage['expSectors']=Y=!Y)?'On':'Off';Y||ae['clearRect'](0x0,0x0,aa['width'],aa['height']);ap();Z();return console['log']('TODO:\x20do\x20later\x20sectors');};function ak(){let aR=''+v[w]['data']+(v[w]['type']==0x1?'?'+new Date()['getTime']():'');q&&console['log']('Updating\x20Template\x20List\x0aFaction\x20:\x20'+w+'\x0aURL\x20:\x20'+aR);F={};G={};H={};N={};let aS=new XMLHttpRequest();aS['onloadend']=function(){if(this['status']==0xc8){F=JSON['parse'](this['responseText']);for(let aT in F){let aU=F[aT];aU['x']*=0x1;aU['y']*=0x1;aU['width']*=0x1;aU['height']*=0x1;aU['xEnd']=aU['x']+aU['width'];aU['yEnd']=aU['y']+aU['height'];aU['type']==='grid'?H[aT]=aU:G[aT]=aU;};for(let aV of O)ao(aV,()=>q&&console['log']('Img\x20updated'));q&&console['log']('Update\x20completed',F,G,H);}else console['error']('Error\x20:\x20'+v[w]['data']+'\x0aURL\x20:\x20'+aR+'\x0aStatus\x20:\x20'+this['status']);};aS['open']('GET',aR);aS['send']();};function al(){if(!K||U)return;if(X){localStorage['sync']=X=![];n=m;av('sync')['innerText']=X?'On':'Off';ap();};n*=1.1;if(n>0x20){n=0x20;return;};U?ag['updateD']():X?ay(m):ay();at();Z();setTimeout(al,M);};function am(){if(!L||U)return;if(X){localStorage['sync']=X=![];n=m;av('sync')['innerText']=X?'On':'Off';ap();};n/=1.1;if(n<0x1){n=0x1;return;};U?ag['updateD']():X?ay(m):ay();at();an();setTimeout(am,M);};function an(){if(!I||!G)return;O=[];for(let aR in G){let aS=G[aR];if(D['between'](aS['x']-j,aS['xEnd']+j)&&E['between'](aS['y']-k,aS['yEnd']+k))if(N[aR])O[O['length']]=aR;else{ao(aR);delete G[aR];};};if(O['length']===0x0){if(J&&!K&&!L){J=![];a8['style']['display']='none';a7['style']['display']='block';a7['innerText']='There\x27s\x20nothing\x20here';};}else{if(!J){J=!![];a8['style']['display']='block';a7['style']['display']='none';};if(a1){a1=![];window['requestAnimationFrame'](()=>{Z();a1=!![];});};};};function ao(aR,aS){let aT=new Image(),aU=0x0;aT['crossOrigin']='';aT['src']=''+v[w]['images']+aR+'.png';aT['onerror']=()=>{console['warn']('Download\x20failed\x0asrc\x20:\x20'+aT['src']+'\x0aName\x20:\x20'+aR);if(F[aR]['type']==='grid')delete H[aR];else delete G[aR];delete F[aR];delete N[aR];};aT['onload']=()=>{const aV=0x100;let aW=document['createElement']('canvas'),aX=aW['getContext']('2d'),aY=aT['width'],aZ=aT['height'];aW['width']=aY;aW['height']=aZ;aX['drawImage'](aT,0x0,0x0,aY,aZ);let b0=aX['getImageData'](0x0,0x0,aY,aZ),b1=b0['data'];if(v[w]['chunks']==![]||l||aT['width']<=aV*1.5&&aT['height']<=aV*1.5){N[aR]=aW;N[aR]['ctx']=aX;N[aR]['data']=b1;if(F[aR]['type']==='grid')H[aR]=F[aR];else G[aR]=F[aR];console['log'](F,'\x0aName\x20:\x20'+aR+'\x0aType\x20:\x20'+(F[aR]['type']==='grid'?'grid':'image'));aS&&aS();an();return;};let b2=performance['now']();for(let b3=0x0,b4=aV>>0x1;aZ-b3>b4;b3+=aV)for(let b5=0x0;aY-b5>b4;b5+=aV){const b6=aR+'_#_'+b5/aV+'_'+b3/aV,b7=aY-b5>=aV?aV:aY-b5,b8=aZ-b3>=aV?aV:aZ-b3,b9=b7<<0x2,ba=b9*b8;let bb=new Uint8ClampedArray(ba),bc=0x0,bd=0x0,be=null,bf=0x0;for(let bg=0x0,bh=aY<<0x2,bi=aY*b3+b5<<0x2,bj=0x0,bk,bl;bg!==b8;bg+=0x1){bk=bi+bg*bh;bl=bj+b9;while(bj!==bl){bb[bj]=b1[bk];bj+=0x1;bk+=0x1;};};for(let bm=0x3;bm<ba;bm+=0x4)if(bb[bm]!==0x0){be=~~((bm+0x1)/b9);break;};if(be===null)continue;for(let bn=ba-0x1,bo=be*b9;bn>bo;bn-=0x4)if(bb[bn]!==0x0){bf=(bn+0x1)/b9;bf=b8-(~~bf===bf?bf:~~bf+0x1);break;};by:for(let bp=0x3,bq=be*b9,br=(b7-bf)*b9;bp<b9;bp+=0x4)for(let bs=bp+bq;bs<br;bs+=b9)if(bb[bs]!==0x0){bc=bp>>>0x2;break by;};bz:for(let bt=b9-0x1,bu=be*b9,bv=(b7-bf)*b9,bw=bc<<0x2;bt>bw;bt-=0x4)for(let bx=bt+bu;bx<bv;bx+=b9)if(bb[bx]!==0x0){bd=b7-(bt+0x1>>>0x2);break bz;};F[b6]={};F[b6]['x']=F[aR]['x']+b5;F[b6]['y']=F[aR]['y']+b3;N[b6]=document['createElement']('canvas');N[b6]['ctx']=N[b6]['getContext']('2d');if(be||bf||bc||bd){F[b6]['width']=N[b6]['width']=b7-bc-bd;F[b6]['height']=N[b6]['height']=b8-be-bf;N[b6]['ctx']['drawImage'](aW,b5+bc,b3+be,N[b6]['width'],N[b6]['height'],0x0,0x0,N[b6]['width'],N[b6]['height']);F[b6]['x']+=bc;F[b6]['y']+=be;}else{F[b6]['width']=N[b6]['width']=b7;F[b6]['height']=N[b6]['height']=b8;N[b6]['ctx']['drawImage'](aW,b5,b3,N[b6]['width'],N[b6]['height'],0x0,0x0,N[b6]['width'],N[b6]['height']);};F[b6]['xEnd']=F[b6]['x']+F[b6]['width'];F[b6]['yEnd']=F[b6]['y']+F[b6]['height'];if(F[aR]['type']==='grid')H[b6]=F[b6];else{G[b6]=F[b6];N[b6]['data']=N[b6]['ctx']['getImageData'](0x0,0x0,F[b6]['width'],F[b6]['height'])['data'];};aU++;};console['log'](F,'\x0aName\x20:\x20'+aR+'\x0aType\x20:\x20'+(F[aR]['type']==='grid'?'grid':'image')+'\x0aChunks\x20:\x20'+aU+'\x0aTime\x20:\x20'+(performance['now']()-b2));delete F[aR];delete N[aR];aW=null;aX=null;b0=null;b1=null;aS&&aS();an();};};function ap(){if(U){if(Y)Z=()=>{as();ar(m);};else Z=as;}else if(X){if(Y)Z=()=>{aq(m);ar(m);};else Z=()=>aq(m);}else{if(Y)Z=()=>{aq();ar();};else Z=aq;};};function aq(aR=n){ad['clearRect'](0x0,0x0,aa['width'],aa['height']);for(let aS of O)ad['drawImage'](N[aS],~~((G[aS]['x']-r)*aR),~~((G[aS]['y']-s)*aR),~~(N[aS]['width']*aR),~~(N[aS]['height']*aR));};function ar(aR=n){};function as(aR=m){if(~~aR!==aR)return;P['canvas']['width']=ag['width'];P['canvas']['height']=ag['height'];let aS,aT;if(O['length']===0x1){let aX=O[0x0];aS=N[aX]['ctx']['getImageData'](ag['xLeft']-G[aX]['x']-0x1,ag['yTop']-G[aX]['y']-0x1,ag['width'],ag['height']);aT=aS['data'];}else{for(let aY of O)P['ctx']['drawImage'](N[aY],ag['xLeft']-G[aY]['x']-0x1,ag['yTop']-G[aY]['y']-0x1,ag['width'],ag['height'],0x0,0x0,ag['width'],ag['height']);aS=P['ctx']['getImageData'](0x0,0x0,P['canvas']['width'],P['canvas']['height']);aT=aS['data'];};let aU=A['getImageData'](~~(t-(ag['width']*aR>>>0x1)),~~(u-(ag['height']*aR>>>0x1)),~~(ag['width']*aR),~~(ag['height']*aR))['data'],aV=0x0,aW=aR<<0x2;for(let aZ=0x0;aZ<ag['sizeRGBA'];aZ+=ag['widthRGBA'])for(let b0=aZ+ag['widthRGBA'],b1=aZ*aR*aR;aV<b0;aV+=0x4,b1+=aW){if(aU[b1+0x3]===0x0)continue;if(ax(aT[aV],aT[aV+0x1],aT[aV+0x2],aU[b1],aU[b1+0x1],aU[b1+0x2])){aT[aV]=aT[aV+0x1]=aT[aV+0x2]=~~((aT[aV]+aT[aV+0x1]+aT[aV+0x2])/0x3);}else{aT[aV]=0xff;aT[aV+0x1]=aT[aV+0x2]=0x0;};};if(aR===0x1){ad['putImageData'](aS,0x0,0x0);}else{P['ctx']['putImageData'](aS,0x0,0x0);ad['clearRect'](0x0,0x0,aa['width'],aa['height']);ad['drawImage'](P['canvas'],~~(ag['borderW']-aR),~~(ag['borderH']-aR),~~(ag['width']*aR),~~(ag['height']*aR));};};function at(aR=n){af['clearRect'](0x0,0x0,ac['width'],ac['height']);(U||X)&&(aR=m);if(aR<=0x2)return;if(T&&aR>4.6){af['beginPath']();af['strokeStyle']='rgb(20,20,20)';let aS=aa['width']+aR,aT=aa['height']+aR,aU=ag['hWidth']%aR-aR,aV=ag['hHeight']%aR-aR,aW=aS+aU,aX=aT+aV;af['lineWidth']=0x1;for(let aY=aU;aY<=aS;aY+=aR){af['moveTo'](aY,aV);af['lineTo'](aY,aX);};for(let aZ=aV;aZ<=aT;aZ+=aR){af['moveTo'](aU,aZ);af['lineTo'](aW,aZ);};af['stroke']();};af['beginPath']();af['lineWidth']=aR/0x3;af['strokeStyle']=S;af['rect'](ag['hWidth'],ag['hHeight'],aR,aR);af['stroke']();};function au(aR){if(typeof aR==='string'){let aS=document['getElementById'](aR);aS['style']['display']=aS['style']['display']==='none'?'block':'none';}else if(typeof aR==='object')aR['style']['display']=aR['style']['display']==='none'?'block':'none';};function av(aR){return document['getElementById'](aR);};function aw(aR){m=az();if(X){ay(m);at();an();}else if(U&&~~m===m){setTimeout(()=>{ag['updateD']();ay(m);as();Y&&ar(m);at();},0xc8);};};window['getPixelFromTemplates']=function aR(aS,aT){let aU;for(let aV of O){if(!N[aV])continue;aU=G[aV];if(aS['between'](aU['x'],aU['xEnd'])&&aT['between'](aU['y'],aU['yEnd'])){let aW=N[aV],aX=aS-aU['x']+aU['width']*(aT-aU['y'])<<0x2;if(aW['data'][aX+0x3]===0x0)continue;return[aW['data'][aX],aW['data'][aX+0x1],aW['data'][aX+0x2]];};};return null;};function ax(aS,aT,aU,aV,aW,aX){return(aS>aV?aS-aV:aV-aS)<0xa&&(aT>aW?aT-aW:aW-aT)<0xa&&(aU>aX?aU-aX:aX-aU)<0xa;};function ay(aS=n){n=aS;j=ag['hWidth']/aS;k=ag['hHeight']/aS;r=D-ag['hWidth']/aS;s=E-ag['hHeight']/aS;};function az(){let aS=+window['location']['hash']['match'](o)['pop']();return aS===0x0||aS<0x0?0x1:aS;};function aA(aS){return aS>0x0?aS:-aS;};function aB(aS,aT){aS['mozImageSmoothingEnabled']=aS['webkitImageSmoothingEnabled']=aS['msImageSmoothingEnabled']=aS['imageSmoothingEnabled']=aT;};};function checkNeededElems(){return window&&document['querySelector']('canvas')&&document['querySelector']('.coorbox')&&document['querySelector']('.selected')['style']['backgroundColor']&&document['getElementById']('colors')['childNodes']['length'];};function tryInit(){console['log']('Try\x20to\x20init...');if(checkNeededElems())initNLRM();else setTimeout(tryInit,0x14d);};if(window['loaded'])tryInit();else{function inject(){let a=document['createElement']('script');a['appendChild'](document['createTextNode']('('+tryInit+')();'+checkNeededElems+';'+initNLRM));(document['body']||document['head'])['appendChild'](a);};if(document['readyState']==='complete')inject();else window['addEventListener']('load',inject);};
