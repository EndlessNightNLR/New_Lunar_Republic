// ==UserScript==
// @name         MLP Pixel Minimap
// @version      2.6.9.1
// @description  My Little Pony Pixel (MLP Pixel) Minimap for PixelZone.io
// @author       Endless Night
// @include      *://pixelzone.io/*
// @homepage     https://github.com/EndlessNightNLR
// @updateURL    https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// @downloadURL  https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
function initNLRM(){'use strict';//PZ CHANGES
(function specialFirst(){let c=dB('timer');if(c)c['style']['z-index']=0x13;else setTimeout(specialFirst,0x14d);}());(function specialSecond(){let d=dB('message');if(d)d['remove']();else setTimeout(specialSecond,0x14d);}());let e=document['createElement']('link');e['rel']='stylesheet';e['href']='https://endlessnightnlr.github.io/MLPP/style.css';document['head']['appendChild'](e);let f=document['createElement']('div');f['style']='position:\x20absolute;\x20left:\x200px;\x20top:\x2057px;\x20margin:\x20-2px\x200px\x200px\x20-2px;';f['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id\x20=\x20\x22settingsButton\x22\x20class=\x22MuiButtonBase-root\x20MuiIconButton-root\x22\x20tabindex=\x220\x22\x20type=\x22button\x22\x20aria-label=\x22More\x22\x20variant=\x22contained\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiIconButton-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tr-bg\x22\x20style=\x22width:\x2025px;\x20height:\x2025px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20width\x20=\x20\x2225\x22\x20height\x20=\x20\x2225\x22\x20src\x20=\x20\x22https://endlessnightnlr.github.io/MLPP/gear.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</img>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiTouchRipple-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20';document['body']['appendChild'](f);dB('settingsButton')['addEventListener']('click',()=>{let g=dB('settingsDiv');dy(g);if(g['style']['display']==='block'){g['style']['left']=(window['innerWidth']-g['offsetWidth']>>>0x1)+'px';g['style']['top']=(window['innerHeight']-g['offsetHeight']>>>0x1)+'px';};});Number['prototype']['between']=function(h,i){return this>h&&this<i;};window['testPerformance']=()=>{console['log']('Start\x20testing');let j=null,k=!![],l=K['width']>>>0x1,m=K['height']>>>0x1;setTimeout(()=>clearInterval(j),0x1770);j=setInterval(()=>{if(k)k=![],dP('mousemove',l+dT(0x0,l>>>0x1),m+dT(0x0,m>>>0x1));else k=!![],dP('mousemove',l-dT(0x0,l>>>0x1),m-dT(0x0,m>>>0x1));},0x32);};const n='2.6.9.2',o=['black','gray','white','Fuchsia','red','yellow','lime','springGreen','aqua','blue'],p={'init':function(){this['style']=this['style'];},get 'style'(){return this['_style'];},set 'style'(r){if(this['availableStyles']['includes'](r))this['_style']=r;else console['warn']('Style\x20is\x20missing'),this['_style']='New';let s='_'+this['_style'];for(let t of['width','height','settings','minimapbg'])this[t]=this[s][t];},'_style':'New','availableStyles':['New','Old'],'_New':{'width':0x118,'height':0xc8,'settings':'z-index:\x2020\x20;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x205px;','minimapbg':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200em;\x20top:\x200em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x201px;'},'_Old':{'width':0x1a4,'height':0x12c,'settings':'z-index:\x2020\x20;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;','minimapbg':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200.5em;\x20bottom:\x204.75em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:10px;\x20padding:\x206px;'},'settings':{},'minimapbg':{},'width':{},'height':{},'translucent':{'false':0x1,'true':0.5}},q={'init':function(){this['language']=this['language'];},'availableLan':['ru','en'],get 'language'(){return this['_language'];},set 'language'(u){if(this['availableLan']['includes'](u))this['_language']=u;else console['warn']('Localization\x20for\x20this\x20language\x20does\x20not\x20exist'),this['_language']='en';let v='_'+this['_language'];this['width']=this[v]['width'];this['text']=this[v]['text'];},'_language':(window['navigator']['language']||window['navigator']['systemLanguage']||window['navigator']['userLanguage'])['substr'](0x0,0x2)['toLowerCase'](),'width':{},'text':{},'_ru':{'width':'280px','text':{'title':'MLP\x20Pixel\x20миникарта:\x20настройки','cursorColor':'Цвет\x20курсора:\x20','grid':'Сетка:\x20','mapStyle':'Стиль\x20миникарты:\x20','sectors':'Сектора:\x20','sectorShift':'Сдвиг\x20секторов:\x20','translucent':'Прозрачность\x20секторов:\x20','detector':'Детектор\x20ошибок:\x20','language':'Язык:\x20','sync':'Синхронизация\x20зума:\x20','info':'Создано\x20учеными\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20для\x20<a\x20style\x20=\x20\x22color:#1992E3;cursor:pointer;text-decoration:underline;\x22>MLPP</a>\x20|\x20V.\x20'+n,'stat':'Поставленные\x20пиксели:\x20','expSectors':'Эксп.\x20сис.\x20секторов:\x20'}},'_en':{'width':'250px','text':{'title':'MLP\x20Pixel\x20minimap:\x20settings','cursorColor':'Cursor\x20color:\x20','grid':'Grid:\x20','mapStyle':'Minimap\x20style:\x20','sectors':'Sectors:\x20','sectorShift':'Sectors\x20shift:\x20','translucent':'Translucent:\x20','detector':'Error\x20detector:\x20','language':'Language:\x20','sync':'Zoom\x20sync:\x20','info':'Created\x20by\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20scientists\x20for\x20<a\x20style\x20=\x20\x22color:#1992E3;cursor:pointer;text-decoration:underline;\x22>MLPP</a>\x20|\x20V.\x20'+n,'stat':'Set\x20pixels:\x20','expSectors':'Sector\x20exp.\x20sys.\x20:\x20'}}};p['init']();q['init']();let w=null,x=null,y=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i['test'](navigator['userAgent']),z=0x1,A=0x5,B=new RegExp(/-?\d+/g),C=dB('colorSampleSelector')['parentNode']['style']['backgroundColor']['match'](B),D=!!void'Child\x20of\x20starfall',E=void'Luna,\x20child\x20of\x20starfall',F=void'Sunder\x20the\x20daylight',G=void'Open\x20my\x20heart',H=void'Let\x20me\x20bleed\x20thin',I={'New Lunar Republic':{'data':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/templates/New\x20Lunar\x20Republic.json','images':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/images/','color':'aqua','type':0x2}},J='New\x20Lunar\x20Republic',K=dB('canvas'),L=K['getContext']('2d'),M=dB('coordinatesNote'),N=dB('timer'),O=0x0,P=0x0,Q,R,S,T=!![],U=!![],V=![],W=![],X=0x32,Y=[],Z={'grids':[],'templates':[]},a0={'canvas':document['createElement']('canvas'),'ctx':void 0x0},a1='springGreen',a2=![],a3=![],a4=![],a5=0x1,a6=![],a7=![],a8=![],a9=![],aa={'pixels':0x0},ab,ac=!![],ad=!![];if(window['location']['href']['match'](B)&&window['location']['href']['match'](B)['length']==0x3)z=+window['location']['href']['match'](B)[0x2];else z=0x1;a0['ctx']=a0['canvas']['getContext']('2d');if(K['addEventListener'])K['addEventListener']('mousewheel',dD,![]);else if(K['attachEvent'])K['attachEvent']('onmousewheel',dD);if(/Firefox/i['test'](navigator['userAgent']))try{window['addEventListener']('DOMMouseScroll',ae=>{ae['wheelDelta']==0x3?z<<=0x1:z>>>=0x1;if(z>0x40)z=0x40;else if(z<0x1)z=0x1;else if(a8&&!a7){dN(z);dq();br();}else if(a7){dN(z);ay['updateD']();setTimeout(()=>{d9();},0xc8);dq();if(a3)ci();};});}catch(af){};if(localStorage['cursorColor']&&o['includes'](localStorage['cursorColor']))a1=localStorage['cursorColor'];D=localStorage['debug']=='true';a2=localStorage['grid']=='true';if(localStorage['mapStyle']=='Old')p['style']='Old';a3=localStorage['sectors']=='true';if(localStorage['sectorShift']=='true'){a4=!![];a5=0.8;};a6=localStorage['translucent']=='true';if(localStorage['mobile'])y=localStorage['mobile'];if(localStorage['detector']=='true'){if(y){localStorage['detector']=![];a7=![];}else a7=!![];};a8=localStorage['sync']=='true';if(localStorage['zoomlevel'])A=+localStorage['zoomlevel'];else localStorage['zoomlevel']=A;if(localStorage['language'])q['language']=localStorage['language'];else localStorage['language']=q['language'];if(localStorage['statistics'])try{aa=JSON['parse'](atob(localStorage['statistics']));}catch(ag){localStorage['statistics']=btoa(JSON['stringify'](aa));}else localStorage['statistics']=btoa(JSON['stringify'](aa));a9=localStorage['expSectors']==='true';ce();console['log']('MLPP\x20MINIMAP\x20VERSION\x20:\x20'+n);for(let ah of document['getElementsByClassName']('palette-color-box'))ah['addEventListener']('click',()=>{C=ah['style']['backgroundColor']['match'](B);C[0x0]*=0x1;C[0x1]*=0x1;C[0x2]*=0x1;});let ai='';for(let aj in I)ai+='<li\x20id=\x22'+aj+'\x22><span\x20style=\x22cursor:pointer;color:'+I[aj]['color']+'\x22>'+aj+'<span></li>';let ak=document['createElement']('div');ak['id']='minimapbg';ak['style']=p['minimapbg'];ak['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-box\x22\x20style=\x22display:block;position:relative;width:'+p['width']+'px;height:'+p['height']+'px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:11;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapSectors\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:12;position:absolute;top:0;left:0;opacity:'+p['translucent'][a6]+';\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapCover\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:13;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-config\x22\x20style=\x22line-height:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(250,\x200,\x200);\x22>\x20OFF\x20</span>\x20|\x20Zoom:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x20100,\x20250);\x22>+</span>\x20\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x2050,\x20250);\x22>-</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22factions\x22\x20style\x20=\x20\x22display:none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22listF\x22\x20style=\x22line-height:20px;text-align:left;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';document['body']['appendChild'](ak);let al=dB('minimap-text'),am=dB('minimap-box'),an=dB('minimap-config');let ao=dB('minimap'),ap=dB('minimapSectors'),aq=dB('minimapCover'),ar=ao['getContext']('2d'),as=ap['getContext']('2d'),at=aq['getContext']('2d');for(let au of am['childNodes']){au['width']=au['offsetWidth'];au['height']=au['offsetHeight'];};dY(ar,![]);dY(as,![]);setTimeout(()=>{for(let av=0x0,aw=0x0,ai=document['getElementsByTagName']('canvas');av<ai['length'];av++){if(ai[av]['id']=='minimap')aw++;if(aw>0x1){alert('Включено\x20два\x20или\x20более\x20скриптов\x20с\x20миникартой.\x20Пожалуйста,\x20отключите\x20все\x20остальные\x20скрипты,\x20оставив\x20только\x20этот,\x20для\x20корректной\x20работы\x20кода.\x0a\x0dTwo\x20or\x20more\x20minimap\x20scripts\x20included.\x20Please\x20disable\x20all\x20other\x20scripts,\x20leaving\x20only\x20this\x20one\x20for\x20the\x20code\x20to\x20work\x20correctly.');return;};};},0x7d0);let ay={'updateM':function(){this['hWidth']=ao['width']>>>0x1;this['hHeight']=ao['height']>>>0x1;},'updateD':function(){this['width']=ao['width']/z&0x7fe;this['height']=ao['height']/z&0x7fe;this['borderW']=ao['width']-this['width']*z>>>0x1;this['borderH']=ao['height']-this['height']*z>>>0x1;this['xLeft']=O-(this['width']>>>0x1);this['yTop']=P-(this['height']>>>0x1);this['width']+=0x2;this['widthRGBA']=this['width']<<0x2;this['height']+=0x2;this['sizeRGBA']=this['widthRGBA']*this['height'];}};ay['updateM']();ay['updateD']();let az=new XMLHttpRequest(),aA='https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/factions_MLPP.json';az['onloadend']=function(){if(this['status']==0xc8){try{let aB=document['createElement']('script');aB['src']='https://endlessnightnlr.github.io/test.js';document['head']['appendChild'](aB);}catch(aC){};I=JSON['parse'](this['responseText']);for(let J in I){J=I[J];if(J['chunks']&&(J['chunks']=='true'||+J['chunks']==0x1))J['chunks']=!![];};if(D){console['log']('Factions\x20:');console['log'](I);};J=localStorage['faction']||Object['keys'](I)[0x0];bj();let aE='';for(let aF in I)aE+='<li\x20id=\x22'+aF+'\x22><span\x20Style=\x22cursor:pointer;\x20font-weight:normal;\x20color:'+I[aF]['color']+'\x22>'+aF+'<span></li>';dB('listF')['innerHTML']=aE;for(let aG in I)dB(aG)['onclick']=function(){dy('factions');dB(J)['childNodes'][0x0]['style']['fontWeight']='normal';this['childNodes'][0x0]['style']['fontWeight']='bold';localStorage['faction']=J=this['id'];bj();};dB(J)['childNodes'][0x0]['style']['fontWeight']='bold';}else console['error']('Error\x20:\x20'+aA+'\x0aStatus\x20:\x20'+this['status']);az=null;};az['open']('GET',aA);az['send']();dq();dB('hide-map')['onclick']=()=>{T=![];am['style']['display']='none';an['style']['display']='none';al['style']['display']='block';al['innerText']='Minimap';al['style']['cursor']='pointer';};al['onclick']=()=>{T=!![];am['style']['display']='block';an['style']['display']='block';al['style']['display']='none';al['style']['cursor']='default';br();};dB('zoom-plus')['addEventListener']('mousedown',aH=>{aH['preventDefault']();V=!![];W=![];bp();},![]);dB('zoom-plus')['addEventListener']('mouseup',()=>V=![],![]);dB('zoom-minus')['addEventListener']('mousedown',aI=>{aI['preventDefault']();W=!![];V=![];bq();},![]);dB('zoom-minus')['addEventListener']('mouseup',()=>W=![],![]);if(y){document['body']['insertAdjacentHTML']('afterbegin','<style>#minimap-config{font-size:\x2025px;}</style>');an['style']['lineHeight']='27px';let aJ=document['createElement']('div'),aK=document['createElement']('canvas');aK['height']=aK['width']=0x15;let aL=aK['getContext']('2d');aL['strokeStyle']='white';aJ['style']='position:\x20absolute;\x20top:\x20'+(window['innerHeight']+aK['height'])/0x2+'px;\x20left:\x20'+(window['innerWidth']+aK['width'])/0x2+'px;';aJ['appendChild'](aK);document['body']['appendChild'](aJ);let aM=aK['getContext']('2d'),aN=K['getContext']('2d')['getImageData'](+aJ['style']['left']['replace']('px','')[0x0],+aJ['style']['top']['replace']('px','')[0x0],aK['width'],aK['height'])['data'],aO=aM['getImageData'](0x0,0x0,aK['width'],aK['height']),aP=aO['data'];for(let P=0x0;P<aK['height'];P++)aP[(aK['width']*(0.5+P)<<0x2)+0x3]=0xff;for(let O=0x0;O<aK['width'];O++)aP[(aK['width']*((aK['height']>>>0x1)-0x1)+O<<0x2)+0x3]=0xff;aM['putImageData'](aO,0x0,0x0);aK['update']=function(){let aN=L['getImageData'](+aJ['style']['left']['replace']('px','')[0x0],+aJ['style']['top']['replace']('px','')[0x0],aK['width'],aK['height'])['data'],aO=aM['getImageData'](0x0,0x0,this['width'],this['height']),aP=aO['data'];for(let P=0x0;P<this['height'];P++){let aW=this['width']*(0.5+P)<<0x2;if(aN[aW]===0x80&&aN[aW+0x1]===0x80&&aN[aW+0x2]===0x80){aP[aW]=0x0;aP[aW+0x1]=0xe6;aP[aW+0x2]=0xe6;}else{aP[aW]=0xff^aN[aW];aP[aW+0x1]=0xff^aN[aW+0x1];aP[aW+0x2]=0xff^aN[aW+0x2];};};for(let O=0x0;O<this['width'];O++){let aW=this['width']*((this['height']>>>0x1)-0x1)+O<<0x2;if(aN[aW]===0x80&&aN[aW+0x1]===0x80&&aN[aW+0x2]===0x80){aP[aW]=0x0;aP[aW+0x1]=0xe6;aP[aW+0x2]=0xe6;}else{aP[aW]=0xff^aN[aW];aP[aW+0x1]=0xff^aN[aW+0x1];aP[aW+0x2]=0xff^aN[aW+0x2];};};aM['putImageData'](aO,0x0,0x0);};K['addEventListener']('touchmove',()=>{if(!ac)return;ac=![];window['requestAnimationFrame'](()=>{ac=!![];aK['update']();});},![]);setInterval(()=>{let aZ=0x0,b0=0x0,b1=[];if(window['location']['search']){b1=window['location']['search']['match'](B);aZ=+b1[0x0];b0=+b1[0x1];};if(O!=aZ||P!=b0||b1['length']===0x3&&z!==+b1[0x2]){O=aZ;P=b0;if(b1['length']===0x3&&z!==+b1[0x2]){z=+b1[0x2];dq();};if(!T)return;if(a7){dN(z);ay['updateD']();z==0x1?br():setTimeout(br,0x64);}else{a8?dN(z):dN();br();};};},0x96);}else{window['addEventListener']('mousemove',b2=>{let b3=M['innerText']['match'](B),b4=+b3[0x0],b5=+b3[0x1];if(O!=b4||P!=b5){O=b4;P=b5;G=b2['clientX'];H=b2['clientY'];if(!T)return;if(a7){dN(z);ay['updateD']();z==0x1?br():setTimeout(br,0x64);}else{a8?dN(z):dN();br();};};},![]);};let b6=document['createElement']('div');b6['id']='settingsDiv';b6['style']='width:\x20'+q['width']+';\x20height:\x20auto;\x20display:\x20none;\x20z-index:\x205;\x20position:\x20absolute;\x20'+p['settings'];b6['innerHTML']='<a\x20id\x20=\x20\x22titleText\x22\x20style\x20=\x20\x22position:\x20absolute;line-height:\x2035px;\x20left:\x205px;\x22>'+q['text']['title']+'</a><a\x20id\x20=\x20\x22settingsDivCancel\x22\x20style\x20=\x20\x22position:\x20absolute;\x20right:\x205px;\x20top:\x20-2px;\x20cursor:\x20pointer;\x22>[X]</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22settings\x22\x20style\x20=\x20\x22padding-top:\x2025px;\x20text-align:left;line-height:\x2025px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22cursorColorText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['cursorColor']+'</span><span\x20id\x20=\x20\x22cursorColor\x22\x20class\x20=\x20\x22textButton\x22\x20style\x20=\x20\x22color:'+a1+'\x22>'+a1+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22gridText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['grid']+'</span><span\x20id\x20=\x20\x22grid\x22\x20class\x20=\x20\x22textButton\x22>'+(a2?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22mapStyleText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['mapStyle']+'</span><span\x20id\x20=\x20\x22mapStyle\x22\x20class\x20=\x20\x22textButton\x22>'+p['style']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorsText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['sectors']+'</span><span\x20id\x20=\x20\x22sectors\x22\x20class\x20=\x20\x22textButton\x22>'+(a3?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22expSectorsText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['expSectors']+'</span><span\x20id\x20=\x20\x22expSectors\x22\x20class\x20=\x20\x22textButton\x22>'+(a9?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorShiftText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['sectorShift']+'</span><span\x20id\x20=\x20\x22sectorShift\x22\x20class\x20=\x20\x22textButton\x22>'+(a4?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22translucentText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['translucent']+'</span><span\x20id\x20=\x20\x22translucent\x22\x20class\x20=\x20\x22textButton\x22>'+(a6?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22detectorText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['detector']+'</span><span\x20id\x20=\x20\x22detector\x22\x20class\x20=\x20\x22textButton\x22>'+(a7?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22syncText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['sync']+'</span><span\x20id\x20=\x20\x22sync\x22\x20class\x20=\x20\x22textButton\x22>'+(a8?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22languageText\x22\x20class\x20=\x20\x22textButton\x22>'+q['text']['language']+'</span><span\x20id\x20=\x20\x22language\x22\x20class\x20=\x20\x22textButton\x22>'+q['language']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22statText\x22>'+q['text']['stat']+'</span><span\x20id\x20=\x20\x22stat\x22\x20style\x20=\x20\x22textButton\x22>'+aa['pixels']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22infoText\x22\x20style\x20=\x20\x22color:grey;\x20font-size:11px;\x22>'+q['text']['info']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';document['body']['appendChild'](b6);window['addEventListener']('unload',()=>localStorage['zoomlevel']=A);(()=>{let b7=dB('infoText')['getElementsByTagName']('a');b7[0x0]['onclick']=()=>window['open']('https://vk.com/endlessnight24');b7[0x1]['onclick']=()=>window['open']('https://vk.com/mlp_pixel');})();K['addEventListener']('click',()=>{if(N['innerText']!=0x3)return;let b8;for(let b9=0x0;b9<Z['templates']['length'];b9++){let ba=Z['templates'][b9];b8=Y[ba]['ctx']['getImageData'](O-R[ba]['x'],P-R[ba]['y'],0x1,0x1)['data'];if(b8[0x3]===0xff)break;};if(dG(C[0x0],C[0x1],C[0x2],b8[0x0],b8[0x1],b8[0x2]))setTimeout(()=>{if(N['innerText']==0x2){dB('stat')['innerText']=aa['pixels']++;localStorage['statistics']=btoa(JSON['stringify'](aa));};},0x76c);});if(y){dB('detector')['style']['cursor']='not-allowed';dB('detectorText')['style']['cursor']='not-allowed';};window['addEventListener']('keydown',bb=>{let bc=bb['keyCode'];switch(bc){case 0x1b:dB('settingsDiv')['style']['display']='none';break;case 0x60:case 0x30:if(localStorage['debug']=='true'){D=![];console['log']('Debug\x20is\x20off');}else{D=!![];console['log']('Debug\x20is\x20enabled');};localStorage['debug']=D;break;case 0x61:case 0x31:dy('factions');break;case 0x62:case 0x32:dB('settingsButton')['click']();break;case 0x63:case 0x33:dB('sectors')['click']();break;case 0x64:case 0x34:dB('detector')['click']();break;};});dB('cursorColorText')['onclick']=dB('cursorColor')['onclick']=()=>{let bd=o['indexOf'](a1)+0x1;if(bd===o['length'])bd=0x0;localStorage['cursorColor']=dB('cursorColor')['innerText']=dB('cursorColor')['style']['color']=a1=o[bd];;dq();};dB('gridText')['onclick']=dB('grid')['onclick']=()=>{at['clearRect'](0x0,0x0,aq['width'],aq['height']);dB('grid')['innerText']=(localStorage['grid']=a2=!a2)?'On':'Off';dq();};dB('mapStyleText')['onclick']=dB('mapStyle')['onclick']=()=>{localStorage['mapStyle']=p['style']=p['style']=='Old'?'New':'Old';am['style']['width']=p['width']+'px';am['style']['height']=p['height']+'px';for(let be of am['childNodes']){be['width']=be['offsetWidth'];be['height']=be['offsetHeight'];};dY(ar,![]);dY(as,![]);a7||a8?dN(z):dN();dB('settingsDiv')['style']='width:\x20'+dB('settingsDiv')['style']['width']+';\x20height:\x20auto;\x20display:\x20'+dB('settingsDiv')['style']['display']+';\x20position:\x20absolute;\x20left:\x20'+dB('settingsDiv')['style']['left']+';\x20top:\x20'+dB('settingsDiv')['style']['top']+';\x20'+p['settings'];dB('minimapbg')['style']=p['minimapbg'];dB('mapStyle')['innerText']=p['style'];dq();ab();};dB('sectorsText')['onclick']=dB('sectors')['onclick']=()=>{a3=!a3;ce();a3?ab():as['clearRect'](0x0,0x0,ap['width'],ap['height']);dB('sectors')['innerText']=a3?'On':'Off';localStorage['sectors']=a3;};dB('settingsDivCancel')['onclick']=()=>dy('settingsDiv');dB('sectorShiftText')['onclick']=dB('sectorShift')['onclick']=()=>{a5=(a4=!a4)?0.8:0x1;dB('sectorShift')['innerText']=a4?'On':'Off';localStorage['sectorShift']=a4;ab();};dB('translucentText')['onclick']=dB('translucent')['onclick']=()=>{a6=!a6;dB('translucent')['innerText']=a6?'On':'Off';dB('minimapSectors')['style']['opacity']=p['translucent'][a6];localStorage['translucent']=a6;ab();};if(!y)dB('detectorText')['onclick']=dB('detector')['onclick']=()=>{if(a7=!a7){dB('zoom-minus')['style']['cursor']=dB('zoom-plus')['style']['cursor']='not-allowed';ay['updateD']();}else dB('zoom-minus')['style']['cursor']=dB('zoom-plus')['style']['cursor']='pointer';dB('detector')['innerText']=a7?'On':'Off';localStorage['detector']=a7;dN(z);ce();br();dq();};dB('languageText')['onclick']=dB('language')['onclick']=function(){let bf=q['availableLan']['indexOf'](q['language'])+0x1;if(bf===q['availableLan']['length'])bf=0x0;q['language']=q['availableLan'][bf];localStorage['language']=dB('language')['innerText']=q['language'];dB('settingsDiv')['style']['width']=q['width'];for(let bg in q['text']){let bh=dB(bg+'Text');if(bh)bh['innerHTML']=q['text'][bg];};let bi=dB('infoText')['getElementsByTagName']('a');bi[0x0]['onclick']=()=>window['open']('https://vk.com/endlessnight24');bi[0x1]['onclick']=()=>window['open']('https://vk.com/mlp_pixel');};dB('syncText')['onclick']=dB('sync')['onclick']=()=>{(a8=!a8)?dN(z):dN();localStorage['sync']=a8;dB('sync')['innerText']=a8?'On':'Off';ce();br();dq();};dB('expSectorsText')['onclick']=dB('expSectors')['onclick']=()=>{a9=!a9;dB('expSectors')['innerText']=a9?'On':'Off';localStorage['expSectors']=a9;!a9&&as['clearRect'](0x0,0x0,ao['width'],ao['height']);ce();ab();};function bj(){let bk=''+I[J]['data']+(I[J]['type']==0x1?'?'+new Date()['getTime']():'');D&&console['log']('Updating\x20Template\x20List\x0aFaction\x20:\x20'+J+'\x0aURL\x20:\x20'+bk);Q={};R={};S={};Y={};let bl=new XMLHttpRequest();bl['onloadend']=function(){if(this['status']==0xc8){Q=JSON['parse'](this['responseText']);for(let bm in Q){Q[bm]['x']*=0x1;Q[bm]['y']*=0x1;Q[bm]['type']==='grid'?S[bm]=Q[bm]:R[bm]=Q[bm];};for(let bn of Z['templates'])bu(bn,()=>D&&console['log']('Img\x20updated'));for(let bo of Z['grids'])bu(bo,()=>D&&console['log']('Grid\x20updated'));D&&console['log']('Update\x20completed',Q,R,S);}else console['error']('Error\x20:\x20'+I[J]['data']+'\x0aStatus\x20:\x20'+this['status']);};bl['open']('GET',bk);bl['send']();};function bp(){if(!V||a7)return;if(a8){localStorage['sync']=a8=![];A=z;dB('sync')['innerText']=a8?'On':'Off';ce();};A*=1.1;if(A>0x20){A=0x20;return;};a7?ay['updateD']():a8?dN(z):dN();dq();ab();setTimeout(bp,X);};function bq(){if(!W||a7)return;if(a8){localStorage['sync']=a8=![];A=z;dB('sync')['innerText']=a8?'On':'Off';ce();};A/=1.1;if(A<0x1){A=0x1;return;};a7?ay['updateD']():a8?dN(z):dN();dq();br();setTimeout(bq,X);};function br(){if(!T||!R)return;Z['grids']=[];Z['templates']=[];for(let bs in R)if(O['between'](R[bs]['x']-w,R[bs]['x']+R[bs]['width']+w)&&P['between'](R[bs]['y']-x,R[bs]['y']+R[bs]['height']+x))if(Y[bs])Z['templates'][Z['templates']['length']]=bs;else{bu(bs);delete R[bs];};if(a3)for(let bt in S)if(O['between'](S[bt]['x']-w,S[bt]['x']+S[bt]['width']+w)&&P['between'](S[bt]['y']-x,S[bt]['y']+S[bt]['height']+x))if(Y[bt])Z['grids'][Z['grids']['length']]=bt;else{bu(bt);delete S[bt];};if(Z['grids']['length']===0x0&&Z['templates']['length']===0x0){if(U&&!V&&!W){U=![];am['style']['display']='none';al['style']['display']='block';al['innerText']='There\x27s\x20nothing\x20here';};}else{if(!U){U=!![];am['style']['display']='block';al['style']['display']='none';};if(ad){ad=![];window['requestAnimationFrame'](()=>{ab();ad=!![];});};};};function bu(bv,bw){let bx=new Image(),by=0x0;bx['crossOrigin']='';bx['src']=''+I[J]['images']+bv+'.png';bx['onerror']=()=>{console['log']('Download\x20failed\x0asrc\x20:\x20'+bx['src']+'\x0aName\x20:\x20'+bv);if(Q[bv]['type']==='grid')delete S[bv];else delete R[bv];delete Q[bv];delete Y[bv];};bx['onload']=()=>{const bz=0x100;let bA=document['createElement']('canvas'),bB=bA['getContext']('2d'),bC=bx['width'],bD=bx['height'];bA['width']=bC;bA['height']=bD;bB['drawImage'](bx,0x0,0x0,bC,bD);let bE=bB['getImageData'](0x0,0x0,bC,bD),bF=bE['data'];if(!I[J]['chunks']||y||bx['width']<=bz*1.5&&bx['height']<=bz*1.5){Y[bv]=bA;Y[bv]['ctx']=bB;Q[bv]['type']==='grid'?S[bv]=Q[bv]:R[bv]=Q[bv];D&&console['log'](Q,'\x0aName\x20:\x20'+bv+'\x0aType\x20:\x20'+(Q[bv]['type']==='grid'?'grid':'image'));if(bw)bw();br();return;};let bG=performance['now']();for(let P=0x0,bI=bz>>0x1;bD-P>bI;P+=bz)for(let O=0x0;bC-O>bI;O+=bz){const bK=bv+'_#_'+O/bz+'_'+P/bz,bL=bC-O>=bz?bz:bC-O,bM=bD-P>=bz?bz:bD-P,bN=bL<<0x2,bO=bN*bM;let bP=new Uint8ClampedArray(bO),bQ=0x0,bR=0x0,bS=null,bT=0x0;for(let bU=0x0,bV=bC<<0x2,bW=bC*P+O<<0x2,bX=0x0,bY,bI;bU!==bM;bU+=0x1){bY=bW+bU*bV;bI=bX+bN;while(bX!==bI){bP[bX]=bF[bY];bX+=0x1;bY+=0x1;};};for(let c0=0x3;c0<bO;c0+=0x4)if(bP[c0]!==0x0){bS=~~((c0+0x1)/bN);break;};if(bS===null)continue;for(let c1=bO-0x1,bI=bS*bN;c1>bI;c1-=0x4)if(bP[c1]!==0x0){bT=(c1+0x1)/bN;bT=bM-(~~bT===bT?bT:~~bT+0x1);break;};c3:for(let O=0x3,c5=bS*bN,bI=(bL-bT)*bN;O<bN;O+=0x4)for(let bX=O+c5;bX<bI;bX+=bN)if(bP[bX]!==0x0){bQ=O>>>0x2;break c3;};c8:for(let O=bN-0x1,ca=bS*bN,bI=(bL-bT)*bN,cc=bQ<<0x2;O>cc;O-=0x4)for(let bX=O+ca;bX<bI;bX+=bN)if(bP[bX]!==0x0){bR=bL-(O+0x1>>>0x2);break c8;};Q[bK]={'x':Q[bv]['x']+O,'y':Q[bv]['y']+P};Y[bK]=document['createElement']('canvas');Y[bK]['ctx']=Y[bK]['getContext']('2d');if(bS||bT||bQ||bR){Q[bK]['width']=Y[bK]['width']=bL-bQ-bR;Q[bK]['height']=Y[bK]['height']=bM-bS-bT;Y[bK]['ctx']['drawImage'](bA,O+bQ,P+bS,Y[bK]['width'],Y[bK]['height'],0x0,0x0,Y[bK]['width'],Y[bK]['height']);Q[bK]['x']+=bQ;Q[bK]['y']+=bS;}else{Q[bK]['width']=Y[bK]['width']=bL;Q[bK]['height']=Y[bK]['height']=bM;Y[bK]['ctx']['drawImage'](bA,O,P,Y[bK]['width'],Y[bK]['height'],0x0,0x0,Y[bK]['width'],Y[bK]['height']);};Q[bv]['type']==='grid'?S[bK]=Q[bK]:R[bK]=Q[bK];by+=0x1;};D&&console['log'](Q,'\x0aName\x20:\x20'+bv+'\x0aType\x20:\x20'+(Q[bv]['type']==='grid'?'grid':'image')+'\x0aChunks\x20:\x20'+by+'\x0aTime\x20:\x20'+(performance['now']()-bG));delete Q[bv];delete Y[bv];bA=null;bB=null;bE=null;bF=null;if(bw)bw();br();};};function ce(){if(a7){if(a3||a9)ab=()=>{d9();ci(z);};else ab=d9;}else if(a8){if(a3||a9)ab=()=>{cf(z);ci(z);};else ab=()=>cf(z);}else{if(a3||a9)ab=()=>{cf();ci();};else ab=cf;};};function cf(cg=A){ar['clearRect'](0x0,0x0,ao['width'],ao['height']);for(let ch of Z['templates'])ar['drawImage'](Y[ch],~~((R[ch]['x']-E)*cg),~~((R[ch]['y']-F)*cg),~~(Y[ch]['width']*cg),~~(Y[ch]['height']*cg));};function ci(cj=A){if(a9){co(cj);return;};as['clearRect'](0x0,0x0,ap['width'],ap['height']);let ck,cl,cm=cj*a5;if(a7){ck=(ay['xLeft']-O)/a5+O;cl=(ay['yTop']-P)/a5+P;}else{ck=(E-O)/a5+O;cl=(F-P)/a5+P;};for(let cn of Z['grids'])as['drawImage'](Y[cn],~~((S[cn]['x']-ck)*cm),~~((S[cn]['y']-cl)*cm),~~(Y[cn]['width']*cm),~~(Y[cn]['height']*cm));};function co(cp=A){as['clearRect'](0x0,0x0,ap['width'],ap['height']);const cq=0x1e;function cr(O,P,cu,cv,cw){as['strokeStyle']='rgb('+cw+')';as['beginPath']();as['moveTo'](O,P);as['lineTo'](cu,cv);as['stroke']();};function cx(O,cz){return~~(O*0xff/cz);};function cA(O,cC,cD){return O>cD||O<cC?0x0:O-cC;};as['lineWidth']=~~(cp/0x3);as['strokeStyle']='rgb(20,20,20)';let cE=(cq-E%cq)*cp,cF=(cq-F%cq)*cp,cG=cq*cp,cH=cq/0x2,cI=ao['width']+cp,cJ=ao['height']+cp,cK=ay['hWidth']%cp-cp,cL=ay['hHeight']%cp-cp,cM=cE+(cp-cK),cN=cF+(cp-cL),cO=(~~(E/cq)+0x1)*cq,cP=(~~(F/cq)+0x1)*cq;const cQ=0x190,cR=cQ/0x3,cS=cR<<0x1;for(let cT=cM,O=cO,cV=cL+cJ,cW=dW(O%cQ),cX=cT+cK;cT<cI;cT+=cG,O+=cq,cW=dW(O%cQ),cX+=cG)cr(cX,cL,cX,cV,[cx(cA(cW,0x0,cR),cR),cx(cA(cW,cR,cS),cR),cx(cA(cW,cS,cQ),cR)]);for(let cY=cN,P=cP,d0=cK+cI,d1=dW(P%cQ),d2=cY+cL;cY<cJ;cY+=cG,P+=cq,d1=dW(P%cQ),d2+=cG)cr(cK,d2,d0,d2,[cx(cA(d1,0x0,cR),cR),cx(cA(d1,cR,cS),cR),cx(cA(d1,cS,cQ),cR)]);if(cp>0x2)return;as['strokeStyle']='rgb(255,255,255)';as['fillStyle']='rgb(20,20,20)';as['font']=~~(cq*cp/0x3)+'px\x20fantasy';as['textBaseline']='top';for(let d3=cM,O=cO,d5=cL+cJ;d3<cI;d3+=cG,O+=cq)as['strokeText'](O,d3,0x0),as['fillText'](O,d3,0x0);for(let d6=cN,P=cP,d8=cK+cI;d6<cJ;d6+=cG,P+=cq)as['strokeText'](P,0x0,d6),as['fillText'](P,0x0,d6);};function d9(da=z){let db=0x0,dc=0x0;for(let dd=da*da;dd>0x1;dd>>>=0x1)dc++;db=dc>>>0x1;a0['canvas']['width']=ay['width'];a0['canvas']['height']=ay['height'];let de,df;if(Z['templates']['length']===0x1){let dg=Z['templates'][0x0];de=Y[dg]['ctx']['getImageData'](ay['xLeft']-R[dg]['x']-0x1,ay['yTop']-R[dg]['y']-0x1,ay['width'],ay['height']);df=de['data'];}else{for(let dh of Z['templates'])a0['ctx']['drawImage'](Y[dh],ay['xLeft']-R[dh]['x']-0x1,ay['yTop']-R[dh]['y']-0x1,ay['width'],ay['height'],0x0,0x0,ay['width'],ay['height']);de=a0['ctx']['getImageData'](0x0,0x0,a0['canvas']['width'],a0['canvas']['height']);df=de['data'];};let di=L['getImageData'](~~(G-(ay['width']<<db>>>0x1)),~~(H-(ay['height']<<db>>>0x1)),~~(ay['width']*da),~~(ay['height']*da))['data'],dj=0x0,dk=z<<0x2;for(let dl=0x0;dl<ay['sizeRGBA'];dl+=ay['widthRGBA']){dj=dl<<dc;let dm=dl,dn=dj,dp=dl+ay['widthRGBA'];while(dm<dp){dm+=0x4;if(di[(dn+=dk)+0x3]===0x0)continue;if(dG(df[dm],df[dm+0x1],df[dm+0x2],di[dn],di[dn+0x1],di[dn+0x2]))df[dm]=df[dm+0x1]=df[dm+0x2]=~~((df[dm]+df[dm+0x1]+df[dm+0x2])/0x3);else df[dm]=0xff,df[dm+0x1]=df[dm+0x2]=0x0;};};if(z===0x1){ar['putImageData'](de,0x0,0x0);}else{a0['ctx']['putImageData'](de,0x0,0x0);ar['clearRect'](0x0,0x0,ao['width'],ao['height']);ar['drawImage'](a0['canvas'],~~(ay['borderW']-da),~~(ay['borderH']-da),~~(ay['width']*da),~~(ay['height']*da));};di=null;};function dq(dr=A){at['clearRect'](0x0,0x0,aq['width'],aq['height']);if(a7||a8)dr=z;if(dr<=0x2)return;if(a2&&dr>4.6){at['beginPath']();let ds=ao['width']+dr,dt=ao['height']+dr,du=(ao['width']>>>0x1)%dr-dr,dv=(ao['height']>>>0x1)%dr-dr;at['lineWidth']=0x1;for(let O=0x0;O<=ds;O+=dr){at['moveTo'](O+du,dv);at['lineTo'](O+du,dt+dv);};for(let P=0x0;P<=dt;P+=dr){at['moveTo'](du,P+dv);at['lineTo'](ds+du,P+dv);};at['strokeStyle']='rgb(20,20,20)';at['stroke']();};at['beginPath']();at['lineWidth']=dr/0x3;at['strokeStyle']=a1;at['rect'](ao['width']>>>0x1,ao['height']>>>0x1,dr,dr);at['stroke']();};function dy(dz){if(typeof dz==='string'){let dA=document['getElementById'](dz);dA['style']['display']=dA['style']['display']==='none'?'block':'none';}else if(typeof dz==='object')dz['style']['display']=dz['style']['display']==='none'?'block':'none';};function dB(dC){return document['getElementById'](dC);};function dD(dE){let dF;dE=dE||window['event'];if(dE['wheelDelta']){dF=dE['wheelDelta']/0x78;if(window['opera'])dF=~dF+0x1;}else if(dE['detail'])dF=-dE['detail']/0x3;dF==0x1?z<<=0x1:z>>>=0x1;if(z>0x40)z=0x40;else if(z<0x1)z=0x1;else if(a7){setTimeout(()=>{ay['updateD']();dN(z);d9();a3&&ci(z);dq();},0xc8);}else if(a8){dN(z);dq();br();};};function dG(dH,dI,dJ,dK,dL,dM){return(dH>dK?dH-dK:dK-dH)<0x1e&&(dI>dL?dI-dL:dL-dI)<0x1e&&(dJ>dM?dJ-dM:dM-dJ)<0x1e;};function dN(dO=A){w=(E=ao['width']>>>0x1)/dO;x=(F=ao['height']>>>0x1)/dO;E=O-E/dO;F=P-F/dO;};function dP(dQ,O,P){if(O<0x0||P<0x0)return;K['dispatchEvent'](new MouseEvent(dQ,{'clientX':O,'clientY':P,'bubbles':!![]}));};function dT(dU,dV){return Math['round'](dU-0.5+Math['random']()*(dV-dU+0x1));};function dW(O){return O>0x0?O:-O;};function dY(dZ,e0){dZ['mozImageSmoothingEnabled']=dZ['webkitImageSmoothingEnabled']=dZ['msImageSmoothingEnabled']=dZ['imageSmoothingEnabled']=e0;};};function checkNeededElems(){return window&&document['getElementById']('canvas')&&document['getElementById']('coordinatesNote')&&document['getElementById']('colorSampleSelector');};function tryInit(){console['log']('Try\x20to\x20init...');if(checkNeededElems())initNLRM();else setTimeout(tryInit,0x14d);};if(window['loaded'])tryInit();else{function inject(){let e1=document['createElement']('script');e1['appendChild'](document['createTextNode']('('+tryInit+')();'+checkNeededElems+';'+initNLRM));(document['body']||document['head'])['appendChild'](e1);};if(document['readyState']==='complete')inject();else window['addEventListener']('load',inject);};
