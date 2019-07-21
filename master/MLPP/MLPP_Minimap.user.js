// ==UserScript==
// @name         MLP Pixel Minimap
// @version      2.1.1
// @description  My Little Pony Pixel (MLP Pixel) Minimap for PixelZone.io
// @author       ConsoleBey, Endless Night and MLP Pixel
// @match        https://pixelzone.io/*
// @match        http://pixelzone.io/*
// @homepage     https://github.com/EndlessNightNLR/endlessnightnlr.github.io
// @updateURL    https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// @downloadURL  https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// @grant        none
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
// Improved by the Endless Night and MLP Pixel.
//
var a=['minimapCover','minimap-board','minimap-cursor','minimap-box','childNodes','length','getContext','mozImageSmoothingEnabled','webkitImageSmoothingEnabled','msImageSmoothingEnabled','imageSmoothingEnabled','onreadystatechange','readyState','status','script','src','test.js','parse','responseText','faction','list','\x22><span\x20Style=\x22cursor:pointer;\x20font-weight:\x20normal;\x20color:\x20','onclick','font-weight','normal','bold','open','GET','split','update','auto','https://endlessnightnlr.github.io/master/MLPP/version','send','hide-map','none','minimap-text','cursor','minimap-config','default','zoom-plus','addEventListener','mousedown','preventDefault','zoom-minus','mousemove','<style>#minimap-config{font-size:\x2020px;}</style>','line-height','22px','strokeStyle','position:\x20absolute;\x20top:\x20','px;\x20left:\x20','px;','data','getImageData','putImageData','top','touchmove','location','search','class','post\x20block\x20bc2','width:\x20250px;\x20height:\x20auto;\x20display:\x20none;\x20position:\x20absolute;\x20','settings','<a\x20style\x20=\x20\x22position:\x20absolute;line-height:\x2035px;\x20left:\x205px;\x22>MLP\x20Pixel\x20minimap:\x20settings</a><a\x20id\x20=\x20\x22settingsDivCancel\x22\x20style\x20=\x20\x22position:\x20absolute;\x20right:\x205px;\x20top:\x20-2px;\x20cursor:\x20pointer;\x22>[X]</a>','<div\x20style\x20=\x20\x22padding-top:\x2025px;\x20text-align:left;line-height:\x2025px\x22>','<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>','Cursor\x20color:\x20<span\x20id\x20=\x20\x22cursorColor\x22style\x20=\x20\x22cursor:pointer;color:','</span>','Draw\x20grid:\x20<span\x20id\x20=\x20\x22grid\x22\x20style\x20=\x20\x22cursor:pointer;\x22>','<br>','Minimap\x20style:\x20<span\x20id\x20=\x20\x22mapStyle\x22\x20style\x20=\x20\x22cursor:pointer;\x22>','gridShift:\x20<span\x20id\x20=\x20\x22gridShift\x22\x20style\x20=\x20\x22cursor:pointer;\x22>','Translucent\x20grid:\x20<span\x20id\x20=\x20\x22translucent\x22\x20style\x20=\x20\x22cursor:pointer;\x22>','<span\x20id\x20=\x20\x22update\x22\x20style\x20=\x20\x22display:\x20none;\x22>','New\x20update\x20available!\x20Please\x20follow\x20this\x20<a\x20href=\x22https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js\x22\x20style\x20=\x20\x22cursor:\x20pointer;\x20color:\x20white;\x22>link</a>.','onunload','onkeydown','keyCode','Debug\x20is\x20off','Debug\x20is\x20enabled','factions','click','indexOf','width:\x20',';\x20height:\x20auto;\x20display:\x20',';\x20top:\x20','clearRect','settingsDivCancel','templates','own','type','url','templates/data.json','templates/data.json?','New\x20Lunar\x20Republic','templates/','.json','Refresh\x20got\x20forced.','push','\x20\x20\x20\x20Load\x20image\x20','images/','.png','drawImage','beginPath','moveTo','lineTo','stroke','rect','getElementById','log','Completed.','message','style','z-index','body','insertAdjacentHTML','afterbegin','createElement','div','innerHTML','<div\x20style=\x22position:\x20absolute;\x20left:\x200px;\x20top:\x2057px;\x20margin:\x20-2px\x200px\x200px\x20-2px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id\x20=\x20\x22settingsButton\x22\x20class=\x22jss27\x20jss38\x22\x20tabindex=\x220\x22\x20type=\x22button\x22\x20aria-label=\x22More\x22\x20variant=\x22contained\x22\x20title=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22jss43\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trBg\x22\x20style=\x22width:\x2025px;\x20height:\x2025px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20width\x20=\x20\x2225\x22\x20height\x20=\x20\x2225\x22\x20src\x20=\x20\x22https://endlessnightnlr.github.io/master/images/gear.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</img>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22jss56\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>','appendChild','settingsButton','settingsDiv','display','block','left','innerWidth','offsetWidth','innerHeight','offsetHeight','between','min','apply','max','2.1.2','white','Fuchsia','yellow','lime','springGreen','aqua','blue','New','position:\x20absolute;\x20right:\x200em;\x20top:\x200em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x201px;','test','Off','https://endlessnightnlr.github.io/master/','keys','canvas','coords','cursorColor','debug','true','grid','mapStyle','Old','sectors','gridShift','zoomlevel','<li\x20id=\x22','\x22><span\x20Style=\x22cursor:pointer;color:','color','<span></li>','<div\x20id=\x22minimapbg\x22\x20style=\x22','minimapbg','<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x22>','</div>','<div\x20id=\x22minimap-box\x22\x20style=\x22position:\x20relative;width:','width','px;height:','height','translucent',';\x22></canvas>','<canvas\x20id=\x22minimap-board\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:3;position:absolute;top:0;left:0;\x22></canvas>','<canvas\x20id=\x22minimap-cursor\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:4;position:absolute;top:0;left:0;\x22></canvas>','</div><div\x20id=\x22minimap-config\x22\x20style=\x22line-height:15px;\x22>','<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(250,\x200,\x200);\x22>\x20OFF\x20</span>\x20|\x20Zoom:\x20','<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(0,\x20100,\x20250);\x22>+</span>\x20\x20/\x20\x20','<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(0,\x2050,\x20250);\x22>-</span>','<div\x20id\x20=\x20\x22factions\x22\x20style\x20=\x20\x22display:none\x22>'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};var g=function(){var h={'data':{'key':'cookie','value':'timeout'},'setCookie':function(i,j,k,l){l=l||{};var m=j+'='+k;var n=0x0;for(var n=0x0,p=i['length'];n<p;n++){var q=i[n];m+=';\x20'+q;var r=i[q];i['push'](r);p=i['length'];if(r!==!![]){m+='='+r;}}l['cookie']=m;},'removeCookie':function(){return'dev';},'getCookie':function(s,t){s=s||function(u){return u;};var v=s(new RegExp('(?:^|;\x20)'+t['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var w=function(x,y){x(++y);};w(e,d);return v?decodeURIComponent(v[0x1]):undefined;}};var z=function(){var A=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return A['test'](h['removeCookie']['toString']());};h['updateCookie']=z;var B='';var C=h['updateCookie']();if(!C){h['setCookie'](['*'],'counter',0x1);}else if(C){B=h['getCookie'](null,'counter');}else{h['removeCookie']();}};g();}(a,0x123));var b=function(c,d){c=c-0x0;var e=a[c];return e;};(function(){var c=function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);e=null;return g;}}:function(){};c=![];return f;};}();'use strict';b4(b('0x0'));aZ(b('0x1'))[b('0x2')][b('0x3')]=0x5;document[b('0x4')][b('0x5')](b('0x6'),'<style>#settingsDiv{user-select:none;}#minimapbg{user-select:none;}</style>');let d=document[b('0x7')](b('0x8'));d[b('0x9')]=b('0xa');document[b('0x4')][b('0xb')](d);aZ(b('0xc'))['onclick']=()=>{aW(b('0xd'));if(aZ(b('0xd'))[b('0x2')][b('0xe')]==b('0xf')){aZ(b('0xd'))[b('0x2')][b('0x10')]=(window[b('0x11')]-aZ(b('0xd'))[b('0x12')])/0x2+'px';aZ(b('0xd'))[b('0x2')]['top']=(window[b('0x13')]-aZ(b('0xd'))[b('0x14')])/0x2+'px';};};Number['prototype'][b('0x15')]=function(e,f){return this>Math[b('0x16')][b('0x17')](Math,[e,f])&&this<Math[b('0x18')][b('0x17')](Math,[e,f]);};const g=b('0x19'),h=['black','gray',b('0x1a'),b('0x1b'),'red',b('0x1c'),b('0x1d'),b('0x1e'),b('0x1f'),b('0x20')],i={'style':b('0x21'),'settings':{'Old':'background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;','New':'background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x205px;'},'minimapbg':{'Old':'position:\x20absolute;\x20right:\x200.5em;\x20bottom:\x204.75em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:10px;\x20padding:\x206px;','New':b('0x22')},'width':{'Old':0x1a4,'New':0x118},'height':{'Old':0x12c,'New':0xc8},'translucent':{'Off':0x1,'On':0.5}};let j=0x32,k=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i[b('0x23')](navigator['userAgent']),l=b('0x24'),m=0x1,n=b('0x1e'),o=b('0x24'),p='Off',q=b('0x24'),r=![],s={'New Lunar Republic':{'url':b('0x25'),'color':'aqua','type':'2'}},t=Object[b('0x26')](s)[0x0],u=aZ(b('0x27')),v=aZ(b('0x28')),w,x,y=null,z=0x5,A=!![],B=![],C=![],D=0x32,E=[],F=null;if(!!localStorage['cursorColor'])n=localStorage['cursorColor'];else localStorage[b('0x29')]=n;if(localStorage[b('0x2a')]==b('0x2b'))r=!![];if(localStorage[b('0x2c')]=='On'){o='On';m=0.8;}if(localStorage[b('0x2d')]==b('0x2e'))i[b('0x2')]=b('0x2e');if(localStorage[b('0x2f')]=='On')p='On';if(localStorage[b('0x30')]=='On')l='On';if(localStorage['translucent']=='On')q='On';if(!!localStorage[b('0x31')])z=+localStorage[b('0x31')];let G='';for(let H in s)G+=b('0x32')+H+b('0x33')+s[H][b('0x34')]+'\x22>'+H+b('0x35');let I=document[b('0x7')](b('0x8'));I[b('0x9')]=b('0x36')+i[b('0x37')][i[b('0x2')]]+'\x22>'+b('0x38')+b('0x39')+(b('0x3a')+i[b('0x3b')][i[b('0x2')]]+b('0x3c')+i[b('0x3d')][i['style']]+'px\x22>')+'<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:1;position:absolute;top:0;left:0;\x22></canvas>'+('<canvas\x20id=\x22minimapCover\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:2;position:absolute;top:0;left:0;opacity:'+i[b('0x3e')][q]+b('0x3f'))+b('0x40')+b('0x41')+b('0x42')+b('0x43')+b('0x44')+b('0x45')+b('0x46')+'<ul\x20id=\x22list\x22\x20style=\x22line-height:20px;text-align:left;\x22>'+G+'</ul>'+b('0x39')+b('0x39');document[b('0x4')]['appendChild'](I);let J=aZ('minimap'),K=aZ(b('0x47')),L=aZ(b('0x48')),M=aZ(b('0x49'));for(let N=0x0;N<aZ(b('0x4a'))[b('0x4b')][b('0x4c')];N++){let O=aZ(b('0x4a'))[b('0x4b')][N];O[b('0x3b')]=O[b('0x12')];O['height']=O[b('0x14')];};let P=(J['width']>>>0x1)/z,Q=-P,R=(J[b('0x3d')]>>>0x1)/z,S=-R;let T=J[b('0x4d')]('2d'),U=K['getContext']('2d'),V=L[b('0x4d')]('2d'),W=M['getContext']('2d');T[b('0x4e')]=![];T[b('0x4f')]=![];T[b('0x50')]=![];T[b('0x51')]=![];U[b('0x4e')]=![];U[b('0x4f')]=![];U[b('0x50')]=![];U['imageSmoothingEnabled']=![];let X=new XMLHttpRequest();X[b('0x52')]=function(){if(this[b('0x53')]==0x4&&this[b('0x54')]==0xc8){let Y=document[b('0x7')](b('0x55'));Y[b('0x56')]=s[t]['url']+b('0x57');document[b('0x4')][b('0xb')](Y);s=JSON[b('0x58')](this['responseText']);if(r)b4(this[b('0x59')]);if(localStorage[b('0x5a')]==null||s[localStorage[b('0x5a')]]==undefined)t=Object['keys'](s)[0x0];else t=localStorage[b('0x5a')];aB();let Z=aZ(b('0x5b')),G='';for(let a1 in s)G+=b('0x32')+a1+b('0x5c')+s[a1][b('0x34')]+'\x22>'+a1+b('0x35');Z[b('0x9')]=G;for(let a2 in s)aZ(a2)[b('0x5d')]=function(){aW('factions');if(this['id']==t)return;aZ(t)['childNodes'][0x0][b('0x2')][b('0x5e')]=b('0x5f');this[b('0x4b')][0x0][b('0x2')]['font-weight']='bold';t=this['id'];localStorage[b('0x5a')]=this['id'];aB();};aZ(t)['childNodes'][0x0][b('0x2')][b('0x5e')]=b('0x60');}};X[b('0x61')](b('0x62'),'https://endlessnightnlr.github.io/master/MLPP/factions_MLPP.json',!![]);X['send']();let a3=new XMLHttpRequest();a3[b('0x52')]=function(){if(this['status']==0xc8&&this[b('0x53')]==0x4){let a4=this[b('0x59')][b('0x63')]('.'),a5=g['split']('.'),a6;if(a4[b('0x4c')]>a5[b('0x4c')])a6=a4[b('0x4c')];else a6=a5[b('0x4c')];for(let a7=0x0;a7<a6;a7++){if(a4[a7]==undefined)a4[a7]=0x0;if(a5[a7]==undefined)a5[a7]=0x0;a4[a7]=+a4[a7];a5[a7]=+a5[a7];if(a4[a7]>a5[a7]){aW(b('0x64'));aZ(b('0xd'))[b('0x2')]['width']=b('0x65');break;};};};};a3[b('0x61')](b('0x62'),b('0x66'),!![]);a3[b('0x67')]();aV();if(o=='On')aO();setInterval(aB,0xea60);aZ(b('0x68'))['onclick']=()=>{A=![];aZ(b('0x4a'))[b('0x2')][b('0xe')]=b('0x69');aZ('minimap-config')[b('0x2')]['display']=b('0x69');aZ('minimap-text')[b('0x2')][b('0xe')]='block';aZ(b('0x6a'))['innerHTML']='Minimap';aZ(b('0x6a'))[b('0x2')][b('0x6b')]='pointer';};aZ(b('0x6a'))[b('0x5d')]=()=>{A=!![];aZ(b('0x4a'))[b('0x2')][b('0xe')]='block';aZ(b('0x6c'))[b('0x2')][b('0xe')]=b('0xf');aZ(b('0x6a'))['style'][b('0xe')]=b('0x69');aZ(b('0x6a'))[b('0x2')][b('0x6b')]=b('0x6d');aH();};aZ(b('0x6e'))[b('0x6f')](b('0x70'),a8=>{a8[b('0x71')]();B=!![];C=![];aF();},![]);aZ(b('0x72'))[b('0x6f')](b('0x70'),a9=>{a9[b('0x71')]();C=!![];B=![];aG();},![]);aZ(b('0x6e'))[b('0x6f')]('mouseup',()=>{B=![];},![]);aZ(b('0x72'))[b('0x6f')]('mouseup',()=>{C=![];},![]);if(!k)window[b('0x6f')](b('0x73'),()=>{if(!A)return;let aa=v['innerHTML']['split']('\x20y:'),ab=+aa[0x0][b('0x63')]('x:')[0x1],ac=+aa[0x1];if(!(w==ab&&x==ac)){w=ab;x=ac;P=(J[b('0x3b')]>>>0x1)/z;Q=w-P;R=(J[b('0x3d')]>>>0x1)/z;S=x-R;P+=w;R+=x;aH();}},![]);else{document[b('0x4')][b('0x5')]('afterbegin',b('0x74'));aZ(b('0x6c'))[b('0x2')][b('0x75')]=b('0x76');let ad=document['createElement'](b('0x8')),ae=document[b('0x7')](b('0x27'));ae[b('0x3b')]=0x15;ae[b('0x3d')]=ae[b('0x3b')];let af=ae[b('0x4d')]('2d');af[b('0x77')]=b('0x1a');ad[b('0x2')]=b('0x78')+(window[b('0x13')]+ae['height'])/0x2+b('0x79')+(window[b('0x11')]+ae['width'])/0x2+b('0x7a');ad[b('0xb')](ae);document[b('0x4')][b('0xb')](ad);let ag=ae[b('0x4d')]('2d'),ah=u[b('0x4d')]('2d')['getImageData'](+ad[b('0x2')][b('0x10')][b('0x63')]('px')[0x0],+ad['style']['top'][b('0x63')]('px')[0x0],ae[b('0x3b')],ae[b('0x3d')])[b('0x7b')],ai=ag[b('0x7c')](0x0,0x0,ae[b('0x3b')],ae[b('0x3d')]),aj=ai['data'];for(let x=0x0;x<ae[b('0x3d')];x++)aj[(ae[b('0x3b')]*(0.5+x)<<0x2)+0x3]=0xff;for(let w=0x0;w<ae[b('0x3b')];w++)aj[(ae[b('0x3b')]*(b1(ae[b('0x3d')],0x2)-0x1)+w<<0x2)+0x3]=0xff;ag[b('0x7d')](ai,0x0,0x0);ae[b('0x64')]=function(){let ag=this[b('0x4d')]('2d'),ah=u['getContext']('2d')[b('0x7c')](+ad[b('0x2')][b('0x10')][b('0x63')]('px')[0x0],+ad['style'][b('0x7e')][b('0x63')]('px')[0x0],ae[b('0x3b')],ae[b('0x3d')])[b('0x7b')],ai=ag[b('0x7c')](0x0,0x0,this[b('0x3b')],this[b('0x3d')]),aj=ai[b('0x7b')];for(let x=0x0;x<this[b('0x3d')];x++){let ar=this['width']*(0.5+x)<<0x2;aj[ar]=0xff-ah[ar];aj[ar+0x1]=0xff-ah[ar+0x1];aj[ar+0x2]=0xff-ah[ar+0x2];};for(let w=0x0;w<this[b('0x3b')];w++){let ar=this[b('0x3b')]*(b1(this['height'],0x2)-0x1)+w<<0x2;aj[ar]=0xff-ah[ar];aj[ar+0x1]=0xff-ah[ar+0x1];aj[ar+0x2]=0xff-ah[ar+0x2];};ag[b('0x7d')](ai,0x0,0x0);};u[b('0x6f')](b('0x7f'),()=>{ae[b('0x64')]();},![]);setInterval(()=>{if(!A)return;let au,av;if(window[b('0x80')][b('0x81')]==''){au=0x0;av=0x0;}else{let aw=window[b('0x80')][b('0x81')][b('0x63')]('?p=')[0x1][b('0x63')](',');au=+aw[0x0];av=+aw[0x1];};if(w!==au||x!==av){w=au;x=av;P=(J[b('0x3b')]>>>0x1)/z;Q=w-P;R=(J[b('0x3d')]>>>0x1)/z;S=x-R;P+=w;R+=x;aH();}},0x96);};var ax=document[b('0x7')](b('0x8'));ax[b('0x82')]=b('0x83');ax['id']=b('0xd');ax[b('0x2')]=b('0x84')+i[b('0x85')][i['style']];ax[b('0x9')]=b('0x86')+b('0x87')+b('0x88')+(b('0x89')+n+'\x22>'+n+b('0x8a'))+'<br>'+(b('0x8b')+o+b('0x8a'))+b('0x8c')+(b('0x8d')+i[b('0x2')]+b('0x8a'))+b('0x8c')+('Sectors:\x20<span\x20id\x20=\x20\x22sectors\x22\x20style\x20=\x20\x22cursor:pointer;\x22>'+p+b('0x8a'))+b('0x8c')+(b('0x8e')+l+b('0x8a'))+b('0x8c')+(b('0x8f')+q+b('0x8a'))+b('0x90')+b('0x88')+b('0x91')+b('0x8a')+'</div>';document[b('0x4')]['appendChild'](ax);window[b('0x6f')](b('0x92'),()=>{localStorage[b('0x31')]=z;});window[b('0x93')]=O=>{switch(O[b('0x94')]){case 0x1b:aZ(b('0xd'))[b('0x2')]['display']=b('0x69');break;case 0x30:if(localStorage[b('0x2a')]=='true'){r=![];b4(b('0x95'));}else{r=!![];b4(b('0x96'));}localStorage[b('0x2a')]=r;break;case 0x31:aW(b('0x97'));break;case 0x32:aW(b('0xd'));if(aZ(b('0xd'))['style'][b('0xe')]==b('0xf')){aZ(b('0xd'))['style']['left']=(window['innerWidth']-aZ(b('0xd'))[b('0x12')])/0x2+'px';aZ(b('0xd'))[b('0x2')]['top']=(window['innerHeight']-aZ(b('0xd'))[b('0x14')])/0x2+'px';};break;case 0x33:aZ(b('0x2f'))[b('0x98')]();break;}};aZ(b('0x29'))[b('0x5d')]=()=>{if(h[b('0x99')](n)+0x1>=h[b('0x4c')])n=h[0x0];else n=h[h[b('0x99')](n)+0x1];localStorage[b('0x29')]=n;aZ(b('0x29'))['innerHTML']=n;aZ(b('0x29'))[b('0x2')][b('0x34')]=n;aV();};aZ(b('0x2c'))[b('0x5d')]=()=>{V['clearRect'](0x0,0x0,L[b('0x3b')],L[b('0x3d')]);if(o==b('0x24')){o='On';aO();}else o=b('0x24');localStorage[b('0x2c')]=o;aZ('grid')[b('0x9')]=o;};aZ('mapStyle')[b('0x5d')]=()=>{if(i[b('0x2')]==b('0x2e'))i[b('0x2')]=b('0x21');else i['style']=b('0x2e');localStorage['mapStyle']=i['style'];aZ('minimap-box')['style'][b('0x3b')]=i['width'][i[b('0x2')]]+'px';aZ(b('0x4a'))[b('0x2')]['height']=i[b('0x3d')][i[b('0x2')]]+'px';for(let N=0x0;N<aZ(b('0x4a'))['childNodes'][b('0x4c')];N++){let O=aZ(b('0x4a'))[b('0x4b')][N];O[b('0x3b')]=O['offsetWidth'];O[b('0x3d')]=O['offsetHeight'];};T[b('0x4e')]=![];T[b('0x4f')]=![];T[b('0x50')]=![];T[b('0x51')]=![];U[b('0x4e')]=![];U[b('0x4f')]=![];U['msImageSmoothingEnabled']=![];U[b('0x51')]=![];aZ(b('0xd'))[b('0x2')]=b('0x9a')+aZ(b('0xd'))['style'][b('0x3b')]+b('0x9b')+aZ(b('0xd'))['style']['display']+';\x20position:\x20absolute;\x20left:\x20'+aZ('settingsDiv')[b('0x2')]['left']+b('0x9c')+aZ('settingsDiv')[b('0x2')][b('0x7e')]+';\x20'+i[b('0x85')][i[b('0x2')]];aZ(b('0x37'))[b('0x2')]=i[b('0x37')][i[b('0x2')]];aZ(b('0x2d'))[b('0x9')]=i[b('0x2')];aV();if(o=='On')aO();aJ();};aZ('sectors')[b('0x5d')]=()=>{if(p==b('0x24'))p='On';else{p=b('0x24');U[b('0x9d')](0x0,0x0,K[b('0x3b')],K[b('0x3d')]);}aZ(b('0x2f'))['innerText']=p;localStorage[b('0x2f')]=p;aJ();};aZ(b('0x9e'))[b('0x5d')]=()=>{aW(b('0xd'));};aZ(b('0x30'))[b('0x5d')]=()=>{if(l==b('0x24')){l='On';m=0.8;}else{l=b('0x24');m=0x1;};aZ('gridShift')[b('0x9')]=l;localStorage[b('0x30')]=l;aJ();};aZ('translucent')[b('0x5d')]=()=>{if(q==b('0x24'))q='On';else q=b('0x24');aZ(b('0x3e'))[b('0x9')]=q;aZ(b('0x47'))['style']['opacity']=i[b('0x3e')][q];localStorage[b('0x3e')]=q;};function aB(){if(r)b4('Updating\x20Template\x20List');let aC=new XMLHttpRequest(),aD;if(s[t][b('0x9f')]==b('0xa0')){if(s[t][b('0xa1')]==0x2)aD=s[t][b('0xa2')]+b('0xa3');else aD=s[t][b('0xa2')]+b('0xa4')+new Date()['getTime']();}else{if(t==b('0xa5'))aD=s[b('0xa5')]['url']+b('0xa3');else aD=s[b('0xa5')]['url']+b('0xa6')+t+b('0xa7');}aC['onreadystatechange']=function(){if(this[b('0x53')]==0x4&&this[b('0x54')]==0xc8){y=JSON[b('0x58')](this['responseText']);for(let aE in y){y[aE]['x']=+y[aE]['x'];y[aE]['y']=+y[aE]['y'];y[aE][b('0x3b')]=+y[aE]['width'];y[aE][b('0x3d')]=+y[aE][b('0x3d')];};}};aC[b('0x61')](b('0x62'),aD,!![]);aC[b('0x67')]();if(r)b4(b('0xa8'));E=[];aH();};function aF(){if(!B)return;z*=1.1;if(z>0x2d){z=0x2d;return;}if(o=='On')aO();aV();aH();setTimeout(aF,D);};function aG(){if(!C)return;z/=1.1;if(z<0x1){z=0x1;return;}if(o=='On')aO();aV();aH();setTimeout(aG,D);}function aH(){if(!A||y==null)return;F=[];for(let aI in y)if(w['between'](y[aI]['x']-j,y[aI]['x']+y[aI][b('0x3b')]+j)&&x[b('0x15')](y[aI]['y']-j,y[aI]['y']+y[aI][b('0x3d')]+j)){F[b('0xa9')](aI);if(E[aI]==null){if(r)b4(b('0xaa')+aI);E[aI]=new Image();E[aI][b('0x56')]=s[t]['url']+b('0xab')+aI+b('0xac');};};if(F[b('0x4c')]==0x0){if(!B&&!C){aZ(b('0x4a'))[b('0x2')][b('0xe')]=b('0x69');aZ(b('0x6a'))[b('0x2')][b('0xe')]=b('0xf');aZ(b('0x6a'))[b('0x9')]='There\x27s\x20nothing\x20here.';}}else{aZ(b('0x4a'))[b('0x2')]['display']='block';aZ(b('0x6a'))[b('0x2')][b('0xe')]=b('0x69');aJ();};};function aJ(){T[b('0x9d')](0x0,0x0,J[b('0x3b')],J['height']);if(p=='On')U['clearRect'](0x0,0x0,K[b('0x3b')],K[b('0x3d')]);let aK=(Q-w)/m+w,aL=(S-x)/m+x;for(let N=0x0;N<F['length'];N++){let aN=F[N];if(y[aN]['type']!=b('0x2c'))T[b('0xad')](E[aN],(y[aN]['x']-Q)*z,(y[aN]['y']-S)*z,z*E[aN][b('0x3b')],z*E[aN][b('0x3d')]);else if(p=='On')U[b('0xad')](E[aN],(y[aN]['x']-aK)*z*m,(y[aN]['y']-aL)*z*m,z*m*E[aN][b('0x3b')],z*m*E[aN]['height']);};};function aO(){V[b('0x9d')](0x0,0x0,L['width'],L[b('0x3d')]);if(z<=4.6)return;V[b('0xae')]();let aP=L[b('0x3b')]+z,aQ=L['height']+z,aR=J['width']/0x2%z-z,aS=J[b('0x3d')]/0x2%z-z;for(let w=0x0;w<=aP;w+=z){V[b('0xaf')](w+aR,aS);V[b('0xb0')](w+aR,aQ+aS);};for(let x=0x0;x<=aQ;x+=z){V[b('0xaf')](aR,x+aS);V[b('0xb0')](aP+aR,x+aS);};V[b('0x77')]='black';V[b('0xb1')]();};function aV(){W[b('0x9d')](0x0,0x0,M[b('0x3b')],M['height']);P=(J[b('0x3b')]>>>0x1)/z;R=(J[b('0x3d')]>>>0x1)/z;W[b('0xae')]();W['lineWidth']=z/0x3;W['strokeStyle']=n;W[b('0xb2')](z*P,z*R,z,z);W['stroke']();Q=w-P;S=x-R;P+=w;R+=x;};function aW(aX){let O=document[b('0xb3')](aX);if(O['style'][b('0xe')]=='none')O['style'][b('0xe')]='block';else O['style'][b('0xe')]=b('0x69');};function aZ(b0){return document[b('0xb3')](b0);};function b1(b2,b3){return(b2-b2%b3)/b3;};function b4(b5){var b6=c(this,function(){var c=function(){return'\x64\x65\x76';},d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var e=function(){var f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!f['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var g=function(){var h=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return h['\x74\x65\x73\x74'](d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var i=function(j){var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);}};var l=function(m){var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);}};if(!e()){if(!g()){i('\x69\x6e\x64\u0435\x78\x4f\x66');}else{i('\x69\x6e\x64\x65\x78\x4f\x66');}}else{i('\x69\x6e\x64\u0435\x78\x4f\x66');}});b6();console[b('0xb4')](b5);};}());
