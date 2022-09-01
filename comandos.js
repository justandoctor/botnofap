/*[-- BY: Zeus/Zultra --]*/
const {
    MessageType,
    Presence,
	WAMessageProto,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
    Browser
} = require('@adiwajshing/baileys');
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { isFiltered, addFilter } = require('./lib/antispam')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const toMs = require('ms')
const path = require('path')
const hx = require("hxz-api");
const cd = 4.32e+7
const { ind } = require('./language')
const request = require('request')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { JSDOM } = require('jsdom')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Zeus29cm\n' 
            + 'ORG: ❲████████████▒▒❳ 90% ZeusWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=556993899391:+55 69 9389-9391\n' 
            + 'END:VCARD' 

const X = "❌"
const O = "⭕️"

/*[-- Load setting --]*/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	owner,
	vip,
	author,
	pack,
	HunterApi
} = settingan

/*[-- manual load --]*/
const ownerNumber = `${owner}@s.whatsapp.net`
const vipNumber = '556993899391@s.whatsapp.net, 5511976666419@s.whatsapp.net, 557582294661@s.whatsapp.net,  556692300611@s.whatsapp.net, 557581196667@s.whatsapp.net, 553888517724@s.whatsapp.net, 5516993865842@s.whatsapp.net, 5527998737902@s.whatsapp.net, 5511984228699@s.whatsapp.net, 5511955835513@s.whatsapp.net, 351926997432@s.whatsapp.net, 55 94 9243-3633, 5511963895971@s.whatsapp.net, 554499286755@s.whatsapp.net' 
prefix = BotPrefix
blocked = []   

/*[-- load function --]*/
/*[-> level <-]*/
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

/*[-> register <-]*/
const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')

/*[-> afk <-]*/
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition,
    afkDel
} = require('./lib/afk.js')

/*[-> total cmd <-]*/
const {
	cmdadd
} = require('./lib/totalcmd.js')
	

       
/*[-- load file --]*/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _retinder = JSON.parse(fs.readFileSync('./database/banco/tinder/retinder.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const eununcaeuja = JSON.parse(fs.readFileSync('./database/banco/nuncaja/frases.json'))
const antifake = JSON.parse(fs.readFileSync('./database/banco/json/antifake.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./database/group/antiviewonce.json'));
const { color, bgcolor } = require('./lib/color')

/*-----------------------TEMPO CONFIG----------------------*/
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
const time2 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
const timi2 = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
const timu2 = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();


/*-----------------------CONSTANTES MENUS----------------------*/
const { menu } = require('./database/menus/menu')
const { regras } = require('./database/menus/regras')
const { creditos } = require('./database/menus/creditos')
const { menus } = require('./database/menus/menus')
const { menu2 } = require('./database/menus/menu2')
const { comprarbot } = require('./database/menus/comprarbot')
const { menuadm } = require('./database/menus/menuadm')
const { menuvip } = require('./database/menus/menuvip')
const { menuzeus } = require('./database/menus/menuzeus')
const { menuprem } = require('./database/menus/menuprem')

				/*------------------------------ARQUIVOS DO JODO DA VELHA------------------------------*/
const { crtt } = "Jogo da velha"
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./database/jogodavelha/jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./database/jogodavelha/jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttme');
var tttset = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttset.json');
var esp = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttframe.json');
const { validmove, setGame } = require("./database/jogodavelha/tictactoe/index.js");
hit_today = [1000]


/*-----------------------CONSTANTES TINDER----------------------*/
function _0x303b4d(_0x57128f,_0x4040a4,_0x4bcb61,_0x36679f,_0x2ae346){return _0xedeb(_0x2ae346- -0x1a2,_0x4040a4);}(function(_0x427c8e,_0x46fe93){function _0x39cafb(_0x377b5c,_0x6d12c1,_0x51c5f8,_0x1b05b8,_0x2d63bb){return _0xedeb(_0x377b5c-0x36f,_0x1b05b8);}const _0x5862df=_0x427c8e();function _0x515a8d(_0x52f577,_0x3a5f91,_0x12d66a,_0x175585,_0x2ca397){return _0xedeb(_0x2ca397-0x9a,_0x175585);}function _0x423fa2(_0x36d89e,_0x22d38a,_0x4832c0,_0x41f46a,_0x16c77d){return _0xedeb(_0x4832c0- -0xd0,_0x36d89e);}function _0x59662e(_0x118a6c,_0x160045,_0x3a2df5,_0x20d946,_0x17d78f){return _0xedeb(_0x20d946- -0x3a,_0x118a6c);}function _0x159500(_0x511d81,_0x34a73c,_0x331e2d,_0x66b439,_0xac0b00){return _0xedeb(_0x66b439-0x95,_0x511d81);}while(!![]){try{const _0x57a3aa=-parseInt(_0x515a8d(0x1ce,0x198,0x1b6,'^V6]',0x1b7))/(0x22c*-0x8+-0x2214+-0x1127*-0x3)*(-parseInt(_0x423fa2('TgIe',0x4c,0x47,0x30,0x3a))/(-0x32f+-0x268f+0x29c0))+parseInt(_0x423fa2('zVGl',0x57,0x57,0x38,0x67))/(0x136f+0x1401+0x1*-0x276d)+-parseInt(_0x39cafb(0x498,0x49d,0x4ae,'YgxQ',0x4b2))/(0x75a+-0x932+-0x1c*-0x11)*(parseInt(_0x39cafb(0x478,0x466,0x476,'r$S]',0x480))/(-0x11b*-0x13+0x43e*0x4+-0x25f4))+parseInt(_0x59662e('Jwq6',0xc3,0xe9,0xcc,0xb1))/(0x21*-0x51+-0x2227+0x164f*0x2)*(-parseInt(_0x39cafb(0x45f,0x449,0x451,'hG&e',0x45f))/(-0x250c+0x2425+0xee))+-parseInt(_0x515a8d(0x1ad,0x19c,0x18b,'83fG',0x198))/(-0x1*0x1435+0x2584+-0x1147)+parseInt(_0x39cafb(0x47a,0x48e,0x47e,'zVGl',0x480))/(-0x887+-0x1644+-0x2*-0xf6a)*(parseInt(_0x515a8d(0x18a,0x1c0,0x1a4,'%f$K',0x1aa))/(0x26e9+0x1*-0x14fe+-0x11e1))+parseInt(_0x159500(')%IF',0x193,0x184,0x191,0x19a))/(-0x16db+-0x1141+0x2827)*(parseInt(_0x39cafb(0x467,0x455,0x463,'2TK#',0x46a))/(-0x677+0x13fd+0xf*-0xe6));if(_0x57a3aa===_0x46fe93)break;else _0x5862df['push'](_0x5862df['shift']());}catch(_0xa68de9){_0x5862df['push'](_0x5862df['shift']());}}}(_0x4223,-0x1*-0x9e90f+-0x4c375+-0x2f*-0x1e99));const _0x502509=(function(){let _0x107e0c=!![];return function(_0x22704d,_0x1817b3){const _0x17dbef=_0x107e0c?function(){function _0xca565d(_0x1a6dc4,_0x48212d,_0x1163ed,_0xe78a68,_0x56f81b){return _0xedeb(_0xe78a68- -0x3d,_0x1a6dc4);}if(_0x1817b3){const _0x34cb82=_0x1817b3[_0xca565d(')c7U',0xbd,0xbf,0xc8,0xb1)](_0x22704d,arguments);return _0x1817b3=null,_0x34cb82;}}:function(){};return _0x107e0c=![],_0x17dbef;};}()),_0x591ef6=_0x502509(this,function(){function _0xf4568e(_0x2555ab,_0x1d5142,_0x454c87,_0x1d32b3,_0xc0b4d6){return _0xedeb(_0x1d32b3- -0x17b,_0x2555ab);}const _0xe683a3={};function _0x3a08de(_0x19da81,_0x5d6726,_0x3a3da9,_0x3d6ed5,_0x3dfd83){return _0xedeb(_0x5d6726-0x166,_0x19da81);}_0xe683a3[_0x3a08de('(qXC',0x270,0x252,0x27d,0x268)]=_0x3a08de('cOfv',0x27f,0x289,0x26f,0x289)+_0xf4568e('MMmh',-0x6b,-0x63,-0x78,-0x5a)+'+$';function _0x286acc(_0x516e45,_0x30d48f,_0x49328c,_0x275d38,_0x35539d){return _0xedeb(_0x516e45- -0x1b2,_0x275d38);}function _0x5d4f6b(_0x42335d,_0x25b9dd,_0x1c42d0,_0x1f9da6,_0x2e0b38){return _0xedeb(_0x2e0b38-0x292,_0x1f9da6);}const _0x428796=_0xe683a3;function _0x4dc878(_0x2dd2ee,_0x4338e3,_0x290828,_0x2de4d9,_0x19d491){return _0xedeb(_0x4338e3-0x1f5,_0x2dd2ee);}return _0x591ef6[_0x5d4f6b(0x384,0x39e,0x3b5,'T[7*',0x3a1)+_0x4dc878(')c7U',0x311,0x321,0x2fd,0x31d)]()[_0x3a08de('2Opl',0x268,0x24a,0x256,0x254)+'h'](_0x428796[_0x3a08de('lQ#N',0x279,0x26d,0x26b,0x28e)])[_0x5d4f6b(0x393,0x396,0x3b4,'T[7*',0x3a1)+_0xf4568e('iZYB',-0x68,-0x7b,-0x82,-0x73)]()[_0xf4568e('OO8T',-0x9b,-0x6c,-0x7c,-0x63)+_0xf4568e('(qXC',-0x6d,-0x3f,-0x5d,-0x4b)+'r'](_0x591ef6)[_0x4dc878('OO8T',0x319,0x2fb,0x32a,0x32e)+'h'](_0x428796[_0x3a08de('7Fn8',0x266,0x24c,0x26d,0x248)]);});_0x591ef6();function _0xedeb(_0x5bcdd0,_0x13fe15){const _0xbdf2d3=_0x4223();return _0xedeb=function(_0xf9f666,_0x1706d0){_0xf9f666=_0xf9f666-(0x179*0x3+0x4*-0x7e1+0x1c05);let _0x5d7a9c=_0xbdf2d3[_0xf9f666];if(_0xedeb['ZjaIuB']===undefined){var _0x4e646b=function(_0x148395){const _0x150e4d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x194803='',_0x5acaa3='',_0x21c504=_0x194803+_0x4e646b;for(let _0x5f2e0e=-0x311+-0x20*0xaa+0x1851,_0x161121,_0x1f6cb6,_0x3ba2b7=0x1c*-0x26+-0x1163+-0x158b*-0x1;_0x1f6cb6=_0x148395['charAt'](_0x3ba2b7++);~_0x1f6cb6&&(_0x161121=_0x5f2e0e%(0x806+0x1d48+-0x2*0x12a5)?_0x161121*(-0x13a+-0xdd1+0xf4b)+_0x1f6cb6:_0x1f6cb6,_0x5f2e0e++%(0xa7*0x36+0x2a*-0xe6+0x286))?_0x194803+=_0x21c504['charCodeAt'](_0x3ba2b7+(-0x5*0x7bb+-0x9c*0xb+0x2d65))-(0x14d5+-0x2*-0x977+-0x27b9)!==0x2a*0xa0+-0xd6*-0x11+-0x1*0x2876?String['fromCharCode'](0xb*-0x9+-0xeb5*-0x1+-0xd53&_0x161121>>(-(0x2*-0x463+0xecb+-0x603)*_0x5f2e0e&-0x259a+-0x2c*0x6b+0x3804)):_0x5f2e0e:0x2342*0x1+-0x25*0x2c+0x36*-0x89){_0x1f6cb6=_0x150e4d['indexOf'](_0x1f6cb6);}for(let _0x313b71=-0xe3*0xd+-0xfa8+-0x1*-0x1b2f,_0x280b1f=_0x194803['length'];_0x313b71<_0x280b1f;_0x313b71++){_0x5acaa3+='%'+('00'+_0x194803['charCodeAt'](_0x313b71)['toString'](-0x13af*0x1+-0x1d*0xb5+0x5c0*0x7))['slice'](-(-0x1d64+0x2263+-0x4fd));}return decodeURIComponent(_0x5acaa3);};const _0x2547fb=function(_0x13cb8e,_0x1aa12c){let _0x2e2649=[],_0x174e68=-0x1355+-0x1386+0x1d*0x157,_0x641956,_0x27cc5b='';_0x13cb8e=_0x4e646b(_0x13cb8e);let _0x48153b;for(_0x48153b=0x25ce+0x789+-0x2d57;_0x48153b<0x3d8+0x5e5+-0x1*0x8bd;_0x48153b++){_0x2e2649[_0x48153b]=_0x48153b;}for(_0x48153b=0x2155+0x1*0x6ad+0x1*-0x2802;_0x48153b<0xd6*-0x17+0x125*0xb+0x73*0x11;_0x48153b++){_0x174e68=(_0x174e68+_0x2e2649[_0x48153b]+_0x1aa12c['charCodeAt'](_0x48153b%_0x1aa12c['length']))%(-0x3*0x2b5+-0x1765+0x2084*0x1),_0x641956=_0x2e2649[_0x48153b],_0x2e2649[_0x48153b]=_0x2e2649[_0x174e68],_0x2e2649[_0x174e68]=_0x641956;}_0x48153b=-0x9c4+0x39a*-0x1+0xd5e,_0x174e68=0x44e+-0x7b*0x33+0x1433;for(let _0x1feb79=-0x2234+-0x794*0x2+0x83a*0x6;_0x1feb79<_0x13cb8e['length'];_0x1feb79++){_0x48153b=(_0x48153b+(-0x13e5+0x80f*-0x2+0x2404))%(0x1724+-0xc96+0x2*-0x4c7),_0x174e68=(_0x174e68+_0x2e2649[_0x48153b])%(0x16d*0x17+-0xa2e+-0x159d),_0x641956=_0x2e2649[_0x48153b],_0x2e2649[_0x48153b]=_0x2e2649[_0x174e68],_0x2e2649[_0x174e68]=_0x641956,_0x27cc5b+=String['fromCharCode'](_0x13cb8e['charCodeAt'](_0x1feb79)^_0x2e2649[(_0x2e2649[_0x48153b]+_0x2e2649[_0x174e68])%(-0x2682+0x1*-0x1e17+0x1*0x4599)]);}return _0x27cc5b;};_0xedeb['toffKT']=_0x2547fb,_0x5bcdd0=arguments,_0xedeb['ZjaIuB']=!![];}const _0x24ea93=_0xbdf2d3[-0x1*0x1a5e+-0x1476+-0xde*-0x36],_0x4037be=_0xf9f666+_0x24ea93,_0xafe3e8=_0x5bcdd0[_0x4037be];if(!_0xafe3e8){if(_0xedeb['AXRKkX']===undefined){const _0x1306db=function(_0x4fdb9d){this['yPPIHo']=_0x4fdb9d,this['ApOBLq']=[0x2f*0xd4+-0x17f*0x5+-0x1f70,-0x5ae*0x6+-0xe7*-0x29+-0x2eb,-0x268f+-0xba7+0x191b*0x2],this['Dscbbn']=function(){return'newState';},this['ZYtqJO']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BMiKMO']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1306db['prototype']['VcSclx']=function(){const _0x3d0fe5=new RegExp(this['ZYtqJO']+this['BMiKMO']),_0x45a2f5=_0x3d0fe5['test'](this['Dscbbn']['toString']())?--this['ApOBLq'][0x7*-0x2d4+-0x1*0x343+0x1710]:--this['ApOBLq'][-0x1b2c+0x37*0x84+-0x4c*0x4];return this['kBzJwu'](_0x45a2f5);},_0x1306db['prototype']['kBzJwu']=function(_0x252393){if(!Boolean(~_0x252393))return _0x252393;return this['tUSBlE'](this['yPPIHo']);},_0x1306db['prototype']['tUSBlE']=function(_0x5cdd5b){for(let _0x191ec6=0x262a+0x1f35+-0x455f,_0x1447dd=this['ApOBLq']['length'];_0x191ec6<_0x1447dd;_0x191ec6++){this['ApOBLq']['push'](Math['round'](Math['random']())),_0x1447dd=this['ApOBLq']['length'];}return _0x5cdd5b(this['ApOBLq'][0x10e1+0x61*0x2f+-0x22b0]);},new _0x1306db(_0xedeb)['VcSclx'](),_0xedeb['AXRKkX']=!![];}_0x5d7a9c=_0xedeb['toffKT'](_0x5d7a9c,_0x1706d0),_0x5bcdd0[_0x4037be]=_0x5d7a9c;}else _0x5d7a9c=_0xafe3e8;return _0x5d7a9c;},_0xedeb(_0x5bcdd0,_0x13fe15);}function _0x57f18f(_0x5a17e7,_0x365448,_0x117312,_0x3efb3e,_0x5219e6){return _0xedeb(_0x5219e6- -0x2fd,_0x365448);}const {tinderhelp}=require(_0x131979(0x37c,'wH9]',0x37c,0x35d,0x39b)+_0x131979(0x376,'xfts',0x375,0x367,0x368)+_0x57f18f(-0x1fb,'eiV6',-0x21b,-0x221,-0x20a)+_0x57f18f(-0x1f9,'zVGl',-0x218,-0x21a,-0x20b)+_0x39f522('0F@U',-0x1ea,-0x1e2,-0x203,-0x205)+_0x303b4d(-0xa3,'9)Ci',-0xa4,-0x74,-0x90)+_0x57f18f(-0x213,'m#bv',-0x229,-0x20c,-0x20f));function _0x4223(){const _0x87645c=['m8kmdvOf','W6/dLCkzWOHx','FCkQW41iz8k2u8knWR0Drmk3yG','aKq9bmk8W4hcRYFcHu/cQ8kcWPOL','WQ/dVmofamoH','WRpcOqFdQqa','xgBdPmoQWO1cE8ovbmoSgNT4cW','W6DfkW','W7HOW7WJW6q','W6D0WQb1WQH1W7BdTKZcNSkpjCoO','W6nbWRCcx1BcMgG','saCDW4CU','ymorasq4W6nfWRnVW7uIWRybW6e','l8o8WPelja','WO7cIMnAvG','cW1Jy8ov','dSkpBeNdNG','W79SWRfPWRK','W5j8W4NdLMO','WQhcO8obbCo2','WOCRW7pcM19fitO','W4e0W5/dN8kw','WQe/W7/cSCkk','W409omk3l03cMCk2W7hdL8k+ta','iSkqWO3dP3e','zCo1kfqrW4TW','WQtdKSkkW4La','W4zVcColW4i','WQhdR3HWjCkNWQKedCk3bhW','dKZcVb/dSG','WOjIWOBcJmoOW6BdHmknbIO5mqO','mmoEvIpcNvOG','WR4kBfpdMq','wSk0BaVdTG','WQhdLCkzWPvr','W6jkhdJcNW','aSktWRhdUKm','s8k4naTzWRddUq','yfOLW6vB','yCkCWPBdS8oj','WRFcPCovmhydWQxdPG','qmkybCoVBG','WQNcVCow','fCkTpJvyprFcLSoKWRxcId00','amkhWQddVuK','xgtcUmkwW4yfbCkp','u8ofAvRdIq','jmk8uqRdJW','oCk5phRdRan1zSkKlMpcNIBcPG','WOruW6JcJhnfna','p8o2WP4kmW','WQ7cIv9hza','W6DjW698frtcIM7cMmoCW6hdUW','zmkstWzAWPXYW5hcHqlcUXm','W67cLCktkIK','W4SkWPJcSSozW67dLa','W5nRWPxcK2S','s8kKWPldRLZcRSkx','WOu5xSkAWRbRWQiVaSkmW7C9W4i','WRNcJSkrW6K','W5X+W4RdKSk+','mdBdMCoaisxcR8kQWQtcS29laq','W604W6K/WRa'];_0x4223=function(){return _0x87645c;};return _0x4223();}function _0x131979(_0x1a10ee,_0x2a1997,_0x49bd67,_0x2f4a21,_0x44eebb){return _0xedeb(_0x49bd67-0x274,_0x2a1997);}const tinder=JSON[_0x9a2fd9('7Fn8',0x371,0x37f,0x39d,0x36d)](fs[_0x9a2fd9('cvko',0x364,0x367,0x35f,0x384)+_0x57f18f(-0x1d8,'[C7j',-0x1d8,-0x1ed,-0x1e2)+'nc'](_0x131979(0x37a,'2Opl',0x394,0x3a5,0x3b3)+_0x131979(0x366,'(l]F',0x36b,0x364,0x351)+_0x9a2fd9('eiV6',0x34a,0x34d,0x32f,0x34f)+_0x131979(0x352,'%f$K',0x363,0x375,0x348)+_0x9a2fd9('eiV6',0x34f,0x366,0x363,0x351)+_0x303b4d(-0x86,'xXDW',-0xb0,-0x9c,-0xa5)+_0x57f18f(-0x1e5,'lQ#N',-0x1e9,-0x1e3,-0x1dc)));function _0x9a2fd9(_0x1d48a5,_0x14fc6e,_0x430e6c,_0x40a38e,_0x4977e7){return _0xedeb(_0x430e6c-0x25a,_0x1d48a5);}function _0x39f522(_0x33fd76,_0x3bd589,_0xab82e4,_0x120b96,_0x4e1b1a){return _0xedeb(_0x3bd589- -0x2db,_0x33fd76);}const retinder=JSON[_0x39f522('(qXC',-0x1c5,-0x1a9,-0x1af,-0x1cd)](fs[_0x131979(0x38f,'%f$K',0x37b,0x397,0x362)+_0x39f522('Gk@4',-0x1c3,-0x1c9,-0x1bf,-0x1b9)+'nc'](_0x131979(0x35a,'MMmh',0x36e,0x35d,0x36c)+_0x131979(0x38d,'eiV6',0x388,0x39c,0x36f)+_0x39f522('qgV%',-0x1c6,-0x1ad,-0x1e0,-0x1c2)+_0x57f18f(-0x1f6,')c7U',-0x1ff,-0x1f7,-0x207)+_0x39f522('Jwq6',-0x1d7,-0x1d0,-0x1c1,-0x1e3)+_0x57f18f(-0x1bf,'IJ[c',-0x1d9,-0x1dd,-0x1d5)+_0x9a2fd9('Jwq6',0x36a,0x384,0x3a3,0x370)+'on'));



				/*times*/
				let ii = []	
				let giid = []				
				for (id of ii){
				if (id && id.includes('g.us')){
				giid.push(id)
				}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const uptime = process.uptime()


/*[-- function --]*/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} horas ${pad(minutes)} minutos ${pad(seconds)} segundos`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
	

	/*[-- Update Message --]*/
module.exports = comandos = async (client , mek) => {
	/*[-- Update block --]*/
	/*********client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})********/
		try {
             if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            chatss = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			body = /* mensagem
			*/((type == 'conversation') && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation :
			/* marcação
			*/((type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix)) ? mek.message.extendedTextMessage.text :
			/* imagem
			*/ ((type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix)) ? mek.message.imageMessage.caption :
			/* video
			*/((type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix)) ? mek.message.videoMessage.caption :
			/* documento
			*/ (mek.message.documentMessage && mek.message.documentMessage.fileName.startsWith(prefix)) ? mek.message.documentMessage.fileName :
			/* list response
			*/ (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId :
			/* botton response
			*/ (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId :
			/* contato
			*/ (mek.message.contactMessage && mek.message.contactMessage.displayName.startsWith(prefix) && mek.message.contactMessage.displayName) ? mek.message.contactMessage.displayName :
			/* requeste payment
			*/ (mek.message.requestPaymentMessage && mek.message.requestPaymentMessage.noteMessage.extendedTextMessage.text.startsWith(prefix) && mek.message.requestPaymentMessage.noteMessage.extendedTextMessage.text) ? mek.message.requestPaymentMessage.noteMessage.extendedTextMessage.text :
			/* location mensage
			*/ (mek.message.locationMessage && mek.message.locationMessage.name.startsWith(prefix) && mek.message.locationMessage.name) ? mek.message.locationMessage.name :
			/* carrinho de paganentos
			*/ (mek.message.orderMessage && mek.message.orderMessage.message.startsWith(prefix) && mek.message.orderMessage.message) ? mek.message.orderMessage.message :
			/* catalogo
			*/ (mek.message.productMessage && mek.message.productMessage.product.title.startsWith(prefix) && mek.message.productMessage.product.tile) ? mek.message.productMessage.product.title : ''
			const argss = body.split(/ +/g)
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
			//const groupall = client.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
            
            /*[-- Scure command --]*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
			const isRetinder = retinder.includes(sender)
            const isBadWord = isGroup ? badword.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			var groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
			var groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
			var privat = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
			const totalChat = await client.chats.all()
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isVip = vipNumber.includes(sender)
			const isAfkOn = checkAfkUser(sender)
			const isAntiVO = isGroup ? antiviewonce.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
	    


	/*------------------------------BARRA DE NÍVEL------------------------------*/
	var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
	const peri = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
	const perl = peri-getLevelingXp(sender) 
	const resl = Math.round(100-((perl/getLevelingXp(sender))*10))
	if (resl <= 10) {
		per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
	} else if (resl <= 20) {
		per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
	} else if (resl <= 30) {
		per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
	} else if (resl <= 40) {
		per = `*[████▒▒▒▒▒▒] ${resl}%*`
	} else if (resl <= 50) {
		per = `*[█████▒▒▒▒▒] ${resl}%*`
	} else if (resl <= 60) {
		per = `*[██████▒▒▒▒] ${resl}%*`
	} else if (resl <= 70) {
		per = `*[███████▒▒▒] ${resl}%*`
	} else if (resl <= 80) {
		per = `*[████████▒▒] ${resl}%*`
	} else if (resl <= 90) {
		per = `*[█████████▒] ${resl}%*`
	} else if (resl <= 100) {
		per = `*[██████████] ${resl}%*`
	} 
		
		
	
	
	/*------------------------------CONFIGURAÇÃO DE RANK------------------------------*/
	const levelRole = getLevelingLevel(sender)
	var role = 'SEM RANK'
	if (levelRole <= 3) {
		role = 'GHOST'
	} else if (levelRole <= 5) {
		role = 'PRATA I'
	} else if (levelRole <= 7) {
		role = 'PRATA II'
	} else if (levelRole <= 8) {
		role = 'PLATINA'
	} else if (levelRole <= 9) {
		role = 'MINI ZEUS'
	} else if (levelRole <= 10) {
		role = 'ESMERALDA'
	} else if (levelRole <= 11) {
		role = 'ESMERALDA II'
	} else if (levelRole <= 12) {
		role = 'ESMERALDA III'
	} else if (levelRole <= 13) {
		role = 'SAFIRA'
	} else if (levelRole <= 14) {
		role = 'SAFIRA II'
	} else if (levelRole <= 14) {
		role = 'MEMBRO ATIVO'
	} else if (levelRole <= 15) {
		role = 'ATIVASSO I'
	} else if (levelRole <= 16) {
		role = 'ATIVASSO II'
	} else if (levelRole <= 17) {
		role = 'ATIVASSO III'
	} else if (levelRole <= 18) {
		role = 'RUBI'
	} else if (levelRole <= 19) {
		role = 'RUBI II'
	} else if (levelRole <= 20) {
		role = 'FILHO DO ZEUS'
	} else if (levelRole <= 21) {
		role = 'MESTRE'
	} else if (levelRole <= 22) {
		role = 'MESTRE II'
	} else if (levelRole <= 23) {
		role = 'MESTRE III'
	} else if (levelRole <= 24) {
		role = 'ATIVASSO '
	} else if (levelRole <= 25) {
		role = 'ATIVASSO II'
	} else if (levelRole <= 26) {
		role = 'CONQUISTADOR'
	} else if (levelRole <= 27) {
		role = 'PUTINHA'
	} else if (levelRole <= 28) {
		role = 'PUTINHA II'
	} else if (levelRole <= 29) {
		role = 'GRANDE PUTINHA'
	} else if (levelRole <= 30) {
		role = 'SUPREMO'
	}
	
												//BOTÃO DE REGISTRO//
			const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
			const buttonMessage = {
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: 1,
			};
			client.sendMessage(
			id,
			buttonMessage,
			MessageType.buttonsMessage,
			options
			);
			};
			const register1 = `Olá ${pushname}! \n\nRegistre-se antes de continuar usando o bot.`
			const register2 = `Clique no botão abaixo para se registrar ou use ${prefix}rg!`
			const register3 = [{buttonId: `${prefix}rg`,buttonText: {displayText: `🔖REGISTRAR`,},type: 1,},]
			const pporigi = fs.readFileSync('./media/denz.jpg')
			const regras = fs.readFileSync('./media/regras.jpg')
			
			const sticRegister = (hehe) => {
			ano = fs.readFileSync('./media/anime/Register.webp')
			client.sendMessage(hehe, ano, sticker, { quoted: mek})}
			
			
						const fdoc = {
						key : {
					    participant : '0@s.whatsapp.net'
						},
		 				message: {
						documentMessage: {
						title: `${pushname}`, 
						jpegThumbnail: pporigi
						}
						}
						}
		
						const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
						kma = gam1
						mhan = await client.prepareMessage(from, kma, location)
						const buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const sendMediaURL = async(to, url, text="", mids=[]) =>{
						if(mids.length > 0){
						text = normalizeMention(to, text, mids)
						}
						const fn = Date.now() / 10000;
						const filename = fn.toString()
						let mime = ""
						var download = function (uri, filename, callback) {
						request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
						});
						};
						download(url, filename, async function () {
						console.log('done');
						let media = fs.readFileSync(filename)
						let type = mime.split("/")[0]+"Message"
						if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
						}
						if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
						}
						client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
						fs.unlinkSync(filename)
						});
						}
			
						const sendFileFromUrl = async(link, type, options) => {
						hasil = await getBuffer(link)
						client.sendMessage(from, hasil, type, options).catch(e => {
						fetch(link).then((hasil) => {
						client.sendMessage(from, hasil, type, options).catch(e => {
						client.sendMessage(from, { url : link }, type, options).catch(e => {
						reply
						console.log(e)
						})
						})
						})
						})
						}
			
   		 
											//TROLI
						const ftrol = {
						key : {
                        participant : '0@s.whatsapp.net'
                        },
      					message: {
        	            orderMessage: {
                        itemCount : 1,
                        status: 1,
                        surface : 1,
                        message: ``, 
                        orderTitle: ``,
                        thumbnail: `dfrply`, 
                        sellerJid: '0@s.whatsapp.net' 
                        }
                       	}
                     	}
                      	const vral = {contextInfo: { externalAdReply: {
                        title: "Dono",
                        mediaType: 1,
                        body: "Zeus-Bot",
                        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvvYy0UIWgIx1d0GB3XXmsZi1XJgw6gwIsw&usqp=CAU',
						sourceUrl: 'https://api.whatsapp.com/send?phone=556993899391&text=Oi'}}}

						client.on('group-participants-update', async (anu) => {
							const mdata = await client.groupMetadata(anu.jid)
							if(antifake.includes(anu.jid)) {
								if (anu.action == 'add'){
									num = anu.participants[0]
									if(!num.split('@')[0].startsWith(55)) {
										
										setTimeout(async function () {
											client.groupRemove(mdata.id, [num])
										}, 1000)
									}
								}
							}
						})
				
						client.on('CB:action,,battery', json => {
							global.batteryLevelStr = json[2][0][1].value
						   global.batterylevel = parseInt(batteryLevelStr)
							baterai = batterylevel
							if (json[2][0][1].live == 'true') charging = true
						   if (json[2][0][1].live == 'false') charging = false
							console.log(json[2][0][1])
							console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
						})
						client.on('close', async () => {
					  if (client.state == 'close') {
					  client.logger.error('Reconectando...')
						await client.loadAuthInfo('./client.json')
						await client.connect()
						global.timestamp.connect = new Date
					  }
					})

	/*------------------------------ANTI SPAM------------------------------*/
	if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Olá@${sender.split('@')[0]}. Aguarde 3 segundos antes de usar outro comando!`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
        
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Olá@${sender.split('@')[0]}. Aguarde 3 segundos antes de usar outro comando!`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}


			//_TESTE PARA VITÓRIA DE ❌
			const WinnerX = () => {
				if (
					(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
					(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
				) {
					return true
				} else {
					return false
				}
			}
			
			//TESTE PARA VITÓRIA DE ⭕
			const WinnerO = () => {
				if (
					(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
					(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
				) {
					return true
				} else {
					return false
				}
			}
			
			//TESTE PARA EMPATE
			const Tie = () => {
				if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
					return true
				} else {
					return false
				}
			}
			
			const IA = (index) => {
				if (WinnerX() || WinnerO() || Tie()) {
					tttset.reActivate1 = "off"
			//INICIO DO MODO IMPOSSIVEL
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
					//TESTE PARA TENTATIVA DE VITÓRIA
					(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
					(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
					(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
					(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
					(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
					(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
					//TESTE PARA TENTATIVA DE BLOQUEIO
					(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
					(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
					(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
					(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
					(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
					(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
				)){
					tttset.reActivate1 = "off"
					IAmove1()
				//JOGADAS PROGRAMADAS ABAIXO
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
					   tttset.reActivate1 = "off"
					  esp.a1 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
					  tttset.reActivate1 = "off"
					  esp.a2 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
					  tttset.reActivate1 = "off"
					  esp.a3 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
						   (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
					  tttset.reActivate1 = "off"
					  esp.b1 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
						   (esp.a1 == "??" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
					  tttset.reActivate1 = "off"
					  esp.b2 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
						   (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
					  tttset.reActivate1 = "off"
					  esp.b3 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
						   (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
					  tttset.reActivate1 = "off"
					  esp.c1 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						  ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
					  tttset.reActivate1 = "off"
					  esp.c2 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
						((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
						   (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
					  tttset.reActivate1 = "off"
					  esp.c3 = "⭕"
				} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
					//PRIORIZAR CANTOS E CENTRO
					tttset.reActivate1 = "off"
					while (tttset.reActivate3 == "on") {
						priorityC()
					}
					tttset.reActivate3 = "on"
			//FIM DO MODO IMPOSSIVEL
				} else if (tttset.tttdifficulty == "HARD" && ( 
					//TESTE PARA TENTATIVA DE VITÓRIA
					(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
					(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
					(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
					(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
					(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
					(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
					//TESTE PARA TENTATIVA DE BLOQUEIO
					(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
					(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
					(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
					(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
					(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
					(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
				)){
					//HARD
					tttset.reActivate1 = "off"
					IAmove1()
				} else if (tttset.tttdifficulty == "NORMAL" && ( 
					//TESTE PARA TENTATIVA DE VITÓRIA
					(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
					(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
					(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
					(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
					(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
					(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
					(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
					//TESTE PARA TENTATIVA DE BLOQUEIO
					(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
					(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
					(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
					(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
					(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
					(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
					(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
				)){
					//NORMAL
					tttset.reActivate1 = "off"
					let randomNORMAL = Math.floor(Math.random() * 3)
					if (randomNORMAL == 0 || randomNORMAL == 1) {
						IAmove1()
					} else {
						while (tttset.reActivate2 == "on") {
							IAalter()
						}
					}
					tttset.reActivate2 = "on"
				} else {
					//EASY / RANDOM
					let randomALL = Math.floor(Math.random() * 9)
					switch (randomALL) {
						case 0:
							if (esp.a1 == "🔲") {
								tttset.reActivate1 = "off"
								esp.a1 = "⭕"
							}
						break
						case 1:
							if (esp.a2 == "🔲") {
								tttset.reActivate1 = "off"
								esp.a2 = "⭕"
							}
						break
						case 2:
							if (esp.a3 == "🔲") {
								tttset.reActivate1 = "off"
								esp.a3 = "⭕"
							}
						break
						case 3:
							if (esp.b1 == "🔲") {
								tttset.reActivate1 = "off"
								esp.b1 = "⭕"
							}
						break
						case 4:
							if (esp.b2 == "🔲") {
								tttset.reActivate1 = "off"
								esp.b2 = "⭕"
							}
						break
						case 5:
							if (esp.b3 == "🔲") {
								tttset.reActivate1 = "off"
								esp.b3 = "⭕"
							}
						break
						case 6:
							if (esp.c1 == "🔲") {
								tttset.reActivate1 = "off"
								esp.c1 = "⭕"
							}
						break
						case 7:
							if (esp.c2 == "🔲") {
								tttset.reActivate1 = "off"
								esp.c2 = "⭕"
							}
						break
						case 8:
							if (esp.c3 == "🔲") {
								tttset.reActivate1 = "off"
								esp.c3 = "⭕"
							}
						break
					}
				}
			}
			
			const IAmove1 = () => {
				//JOGADA PARA VITÓRIA
				if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
					esp.a3 = "⭕"
				} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
					esp.a2 = "⭕"
				} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
					esp.a1 = "⭕"
				} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
					esp.b3 = "⭕"
				} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
					esp.b2 = "⭕"
				} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
					esp.b1 = "⭕"
				} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
					esp.c2 = "⭕"
				} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
					esp.c1 = "⭕"
				} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
					esp.c1 = "⭕"
				} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
					esp.b1 = "⭕"
				} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
					esp.a1 = "⭕"
				} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
					esp.c2 = "⭕"
				} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
					esp.b2 = "⭕"
				} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
					esp.a2 = "⭕"
				} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
					esp.b3 = "⭕"
				} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
					esp.a3 = "⭕"
				} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
					esp.b2 = "⭕"
				} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
					esp.a1 = "⭕"
				} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
					esp.c1 = "⭕"
				} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
					esp.b2 = "⭕"
				} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
					esp.a3 = "⭕"
				//JOGADA PARA BLOQUEIO
				} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
					esp.a3 = "⭕"
				} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
					esp.a2 = "⭕"
				} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
					esp.a1 = "⭕"
				} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
					esp.b3 = "⭕"
				} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
					esp.b2 = "⭕"
				} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
					esp.b1 = "⭕"
				} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
					esp.c2 = "⭕"
				} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
					esp.c1 = "⭕"
				} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
					esp.c1 = "⭕"
				} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
					esp.b1 = "⭕"
				} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
					esp.a1 = "⭕"
				} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
					esp.c2 = "⭕"
				} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
					esp.b2 = "⭕"
				} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
					esp.a2 = "⭕"
				} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
					esp.b3 = "⭕"
				} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
					esp.a3 = "⭕"
				} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
					esp.c3 = "⭕"
				} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
					esp.b2 = "⭕"
				} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
					esp.a1 = "⭕"
				} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
					esp.c1 = "⭕"
				} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
					esp.b2 = "⭕"
				} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
					esp.a3 = "⭕"
				}
			}

						/*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./database/jogodavelha/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "Y"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./database/jogodavelha/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Jogo dá Velha 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    client.sendMessage(
                         from,
                         `Esta opção é apenas para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "N" ||
               budy.toLowerCase() == "n"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./database/jogodavelha/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `Infelizmente o desafio @${boardnow.X} foi rejeitado ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         `Esta opção é apenas para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou / rejeitou o desafio.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Jogo dá Velha 🎳*
          
Jogo termina empatado 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./database/jogodavelha/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Jogo dá Velha 🎳*
          
Ganho por @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./database/jogodavelha/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Jogo dá Velha 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
			
if ((budy === "Batatinha frita 123") || (budy === "Batatinha frita 123")) {
    setTimeout( () => {
        jogador = `${Math.floor(Math.random() * 456)}`
            const rond = jogador
                 batata = `Jogador *${jogador}* foi eliminado!`
                  reply(batata)
                }, 05000)
                    const batat = ["batatinha frita"]
                        bat = batat[Math.floor(Math.random() * batat.length)]
                            batati = fs.readFileSync('./database/batatinha/' + bat + '.webp')
                                client.sendMessage(from, batati, sticker, {
                                quoted: mek
                             })
        setTimeout( () => {
            buttons = [
                {buttonId: `${prefix}batatinhafrita`, buttonText: {displayText: 'Batatinha frita 123'}, type: 1}
                    ]
                        buttonMessage = {
                            contentText: "Deseja jogar novamente ?",
                                footerText: 'Zeus-Bot',
                                    buttons: buttons,
                                headerType: 1
                            }
                        client.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
                    },07000)
                }

	        /*------------------------------SISTEMA DE NÍVEL------------------------------*/
            if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
					const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(ind.levelup(pushname, role, sender, getLevelingXp,  getLevel, getLevelingLevel))
					}
				} catch (err) {
					console.error(err)
				}
			}
         

			/*------------------------------SISTEMA DE LIMITE------------------------------*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            		client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        		client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    		client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	   /****[-- auto out form gc if member under limit --]
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
					setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("1detik")
						}, 4000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("2detik")
						}, 3000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("3detik")
						}, 2000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("4detik")
						}, 1000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("5detik")
						}, 0)
				    }
		       } catch (err) { console.error(err)  }
 	       }****/
 
 		   /*[-- no badword --]*/
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    		try { 
                        reply("JAGA UCAPAN DONG!! 😠")
                        setTimeout( () => {
 	                           client.groupRemove(from, sender) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!")
							}, 0)
                        } catch { client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}) }
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
 

		client.on('CB:action,,call', async json => {
			const callerId = json[2][0][1].from;
			
			console.log(color('LIGAÇÃO DE ', 'red') + callerId)
			client.sendMessage(callerId, "Ligações = block", MessageType.text)
			setTimeout(async() => {
				await client.blockUser(callerId, "add")
			}, 4000)
		})



        /*------------------------------ANTI LINK------------------------------*/
		if (messagesC.includes("://chat.whatsapp.com/")){
			if (!isGroup) return
			if (!isAntiLink) return
			if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
			client.updatePresence(from, Presence.composing)
			if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(`*B.A.N.I.D.O*`)
			setTimeout( () => {
				client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			}, 2000)
		}
 	       
 	     
 	           /*[-- function money --]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 290
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
	
			 //feature total command
			 if (isCmd) cmdadd()
           	
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 


				/*------------------------------INICIO DOS COMANDOS------------------------------*/
				
				//BATATINHA FRITA//
								case 'batatinhafrita':
                                    setTimeout( () => {
        jogador = `${Math.floor(Math.random() * 456)}`
            const rond = jogador
                 batata = `Jogador *${jogador}* foi eliminado!`
                  reply(batata)
                }, 05000)
                    const batat = ["batatinha frita"]
                        bat = batat[Math.floor(Math.random() * batat.length)]
                            batati = fs.readFileSync('./database/batatinha/' + bat + '.webp')
                                client.sendMessage(from, batati, sticker, {
                                quoted: mek
                             })
        setTimeout( () => {
            buttons = [
                {buttonId: `${prefix}batatinhafrita`, buttonText: {displayText: 'Batatinha frita 123'}, type: 1}
                    ]
                        buttonMessage = {
                            contentText: "Deseja jogar novamente ?",
                                footerText: 'Zeus-Bot',
                                    buttons: buttons,
                                headerType: 1
                            }
                        client.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
                    },07000)
                break
				
             case  'jogov':
                if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
                if (fs.existsSync(`./database/jogodavelha/tictactoe/db/${from}.json`)) {
                const boardnow = setGame(`${from}`);
                const matrix = boardnow._matrix;
                const chatMove = `*🎮 Jogo dá Velha 🎳*
     
     Há uma sessão de jogo neste grupo\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                client.sendMessage(from, chatMove, MessageType.text, {
                quoted: mek,
                contextInfo: {
                mentionedJid: [
                boardnow.X + "@s.whatsapp.net",
                boardnow.O + "@s.whatsapp.net",
                ],
                },
                });
                return;
                }
                if (argss.length === 1)
                 return reply(
                 `Marca quem quer ser seu oponente!\n\nUsar : *.jogov <@TagMember>*`
                );
                const boardnow = setGame(`${from}`);
                console.log(`Start Tictactore ${boardnow.session}`);
                boardnow.status = false;
                boardnow.X = sender.replace("@s.whatsapp.net", "");
                boardnow.O = argss[1].replace("@", "");
                fs.writeFileSync(
                `./database/jogodavelha/tictactoe/db/${from}.json`,
                JSON.stringify(boardnow, null, 2)
                );
                const strChat = `*?? Comece o jogo dá Velha 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} desafiar você a se tornar um oponente do jogo
     
     _[ ${argss[1]} ] Digite Y/N para aceitar ou rejeitar o jogo_ 
     `;
                client.sendMessage(from, strChat, MessageType.text, {
                quoted: mek,
                contextInfo: {
                mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                },
                });
                    break
               case  'delttc':
                    if (!isOwner && !isGroupAdmins) return reply('Esse comando só pode ser usado pelo dono do bot ou pelo o administrador do grupo')
                    if (fs.existsSync("./database/jogodavelha/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./database/jogodavelha/tictactoe/db/" + from + ".json");
                         reply(`Sessão excluída com sucesso neste grupo!`);
                    } else {
                         reply(`Nenhuma sessão em andamento, digite ${prefix}jogov`);
                    }
                    break




           //INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
		   case 'ttthelp':
			if (!isGroup) return reply(ind.groupo())
				client.sendMessage(from, ttthelp(prefix) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('media/47.jpg')}}}})					
						break
			case 'ttt':
			if (!isGroup) { return reply(ind.groupo())
			} else if (tttset.tttstatus == "on") {
			reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
			
			} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
			reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
			} else {
			tttset.tttstatus = "on"
			tttset.player = sender
			tttset.playerName = pushname
			tttset.mentionPlayer = mek
			tttset.local = from
			if (args == 'easy' || args == 'Easy' || args == 'EASY') {
			tttset.tttdifficulty = "EASY"
			} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
			tttset.tttdifficulty = "NORMAL"
			} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
			tttset.tttdifficulty = "HARD"
			} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
			tttset.tttdifficulty = "IMPOSSIBLE"
			}
			const randomStartIA = Math.floor(Math.random() * 3)
			if (randomStartIA == 0) {
			IA()
			tttset.reActivate1 = "on"	
			}
			costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, tescuk, cr)
			client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
			client.sendMessage(from,`Bom jogo`, text) 
			
			}
			break	
			case 'tttme':
			if (!isGroup) return reply(ind.groupo())
			const checkTTTIdMe = getTTTId(sender)
			if (checkTTTIdMe === undefined) addTTTId(sender)
			client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
			break	
			case 'tttrank':
			if (!isGroup) return reply(ind.groupo())
			//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
			tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
			mentioned_jid = []
			let board = '【 TTT RANKS 】\n\n'
			try {
			for (let i = 0; i < 3; i++) {
			if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
			} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
			} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
			}
			mentioned_jid.push(tictactoe[i].jid)
			} 
			mentions(board, mentioned_jid, true)
			} catch (err) {
			console.log(err)
			await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
			}
			break	
			case 'coord' :
			tttset.playertest = sender
			if (!isGroup) { return reply(ind.groupo())
			} else if (tttset.tttstatus == "off") {
			reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
			} else if (tttset.player != tttset.playertest) {
			reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
			} else if (tttset.tttantibug == "on") {
			reply(`Aguarde a ação anterior ser concluída...`)
			} else {
			tttset.tttantibug = "on"
			const coordX = args
			if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
			coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
			coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
			reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
			tttset.tttantibug = "off"
			} else {
			switch (args[0]) {
			case 'a1':
			if (esp.a1 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.a1 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'a2':
			if (esp.a2 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.a2 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'a3':
			if (esp.a3 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.a3 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'b1':
			if (esp.b1 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.b1 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'b2':
			if (esp.b2 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.b2 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'b3':
			if (esp.b3 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.b3 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'c1':
			if (esp.c1 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.c1 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'c2':
			if (esp.c2 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.c2 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			case 'c3':
			if (esp.c3 != "🔲") {
			reply('O espaço já foi ocupado\nTente outra coordenada')
			} else {
			esp.c3 = "❌"
			while (tttset.reActivate1 == "on") {
			IA()
			}
			}
			break
			}
			tttset.reActivate1 = "on"
			reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
			var randomTTTXP = 0
			if (WinnerX()) {
			if (isCmd) {
			switch (tttset.tttdifficulty) {
			case "EASY":
			randomTTTXP = Math.floor(Math.random() * 25) + 25
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "NORMAL":
			randomTTTXP = Math.floor(Math.random() * 30) + 30
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "HARD":
			randomTTTXP = Math.floor(Math.random() * 40) + 40
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "IMPOSSIBLE":
			randomTTTXP = Math.floor(Math.random() * 250) + 250
			addLevelingXp(tttset.player, randomTTTXP)
			break
			}
			client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
			} else {
			client.sendMessage(from, `🎉🎉 Parabéns ${pushname} você ganhou 🎉🎉`, text)
			}
			const currentTTTwins = getTTTwins(tttset.player)
			const checkTTTIdWin = getTTTId(tttset.player)
			if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
			addTTTwin(tttset.player, 1)
			addTTTpoints(tttset.player, randomTTTXP)
			esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
			esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
			esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
			tttset.tttstatus = "off"
			tttset.waitingTime = "on"
			} else if (WinnerO()) {
			if (isCmd) {
			switch (tttset.tttdifficulty) {
			case "EASY":
			randomTTTXP = 0 - (Math.floor(Math.random() * 250) + 250)
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "NORMAL":
			randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "HARD":
			randomTTTXP = 0 - (Math.floor(Math.random() * 50) + 50)
			addLevelingXp(tttset.player, randomTTTXP)
			break
			case "IMPOSSIBLE":
			randomTTTXP = 0
			addLevelingXp(tttset.player, randomTTTXP)
			break
			}	
			client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
			} else {
			client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
			}
			const currentTTTdefeats = getTTTdefeats(tttset.player)
			const checkTTTIdDefeat = getTTTId(tttset.player)
			if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
			addTTTdefeat(tttset.player, 1)
			addTTTpoints(tttset.player, randomTTTXP)
			esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
			esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
			esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
			tttset.tttstatus = "off"
			tttset.waitingTime = "on"
			} else if (Tie()) {
			if (isCmd) {
			client.sendMessage(from, `EMPATE ⚖\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
			} else {
			client.sendMessage(from, `EMPATE ⚖`, text)
			}
			const currentTTTties = getTTTties(tttset.player)
			const checkTTTIdTie = getTTTId(tttset.player)
			if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
			addTTTtie(tttset.player, 1)
			esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
			esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
			esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
			tttset.tttstatus = "off"
			tttset.waitingTime = "on"
			}
			tttset.tttantibug = "off"
			}
			}
			break

				//---------COMANDOS DO ADMINISTRADOR------------//
		case 'antiview1':           
			if (!isGroup) return reply(ind.groupo())
			if (!isGroupAdmins && !isOwner) return reply(ind.admin())
			if (!isBotGroupAdmins) return reply(ind.badmin())     
			if (args.length < 1) return reply(`Selecione para habilitar ou desabilitar`)          
			if ((args[0]) === 'on') {                    
			if (isAntiVO) return reply(`Anti-visualização de grupo ja foi ativo uma vez`)                 
			antiviewonce.push(from)				
			fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))				
			reply('O comando de AntiView foi habilitado neste grupo!')           
			} else if ((args[0]) === 'off') {                      
			antiviewonce.splice(from, 1)         
			fs.writeFileSync('./database/group/antiviewonce.json', JSON.stringify(antiviewonce))                
			reply('O AntView foi desabilitado neste grupo!')  
			} else {       
			reply('Digite antiview1 on para habilitar e antiview1 off para desabilitar')			        
			}     
				break
			case 'marcar':
				if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				
				var value = body.slice(9)
				var group = await client.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
				text: value,
				contextInfo: { mentionedJid: mem },
				quoted: mek
				}
				client.sendMessage(from, options, text)
				await limitAdd(sender)
					break
			case 'marcar2': 
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += `${body.slice(8)}\n\n`
				for (let mem of groupMembers) {
				teks += `¡ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
					break 
			case 'nivel':
                if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100 
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nick* : ${pushname}\n┣⊱ *Experiência:*  ${userXp}\n┣⊱ *Nivel:* ${userLevel}\n┣⊱ *Patente*: ${role}\n┣⊱ *Link:* wa.me/${sender.split("@")[0]}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break
			case 'listonline': 
        		if (!isGroupAdmins) return reply(ind.admin())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Membros onlines:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  	contextInfo: { mentionedJid: online }
			    })
				break
			case 'promover':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = ''
				for (let _ of mentioned) {
				teks += `Parabéns🥳 agora você é um admin do grupo! (+_+) :\n`
				teks += `@_.split('@')[0]`
				}
				mentions(teks, mentioned, true)
				client.groupMakeAdmin(from, mentioned)
				} else {
				mentions(`@${mentioned[0].split('@')[0]} parabéns pela promoção 🥳🥳`, mentioned, true)
				client.groupMakeAdmin(from, mentioned)
				}
					break
				case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #demitir @tagadministrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*?? :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					client.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`@${mentioned[0].split('@')[0]} seus dias de glória acabaram 😭😭👌`, mentioned, true)
					client.groupDemoteAdmin(from, mentioned)
						}
					break 
				case 'ban':    
					if (!isVip) return reply(ind.vip())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (exe1.groupadmins> 1) {
					var M_exe = []
					for (let cut of exe1) {
					M_exe.push(cut)
					}
					client.groupRemove(from, M_exe)
					} else {
					client.groupRemove(from, [exe1[0]])
					}
					} else {
					exe1 = mek.message.extendedTextMessage.contextInfo.participant
					client.groupRemove(from, [exe1])
					}
						break
						case 'add1': 
					if (!isVip) return reply(ind.vip())   
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (exe1.groupadmins> 1) {
					var M_exe = []
					for (let cut of exe1) {
					M_exe.push(cut)
					}
					client.groupAdd(from, M_exe)
					} else {
					client.groupAdd(from, [exe1[0]])
					}
					} else {
					exe1 = mek.message.extendedTextMessage.contextInfo.participant
					client.groupAdd(from, [exe1])
					}
						break
						case 'add':

  				  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					frase = args.join(' ') 
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;

  if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {

    entah = mek.message.extendedTextMessage.contextInfo.mentionedJid

    if (exe1.groupadmins > 1) {

      var M_exe = []

      for (let cut of exe1) {

        M_exe.push(cut)

      }

      client.groupAdd(from, M_exe)

    } else {

      client.groupAdd(from, [exe1[0]])

    }

  } else {

    exe1 = mek.message.extendedTextMessage.contextInfo.participant

    client.groupAdd(from, [exe1])

  idd = exe1.replace(/ /g, '')} + '@s.whatsapp.net'

  add = await client.groupAdd(from, [idd])

  buffer = fs.readFileSync('./media/convite.jpg')

  ad1 = Object.values(add.participants[0])

  data = ad1[0]

  if (data.code === '409') return reply('Essa pessoa já está no grupo')

  if (data.code === '403') {

    reply('Perfil privado, enviando convite')

    client.sendMessage(idd, {

      groupJid: from, inviteCode: data.invite_code, inviteExpiration: data.invite_code_exp, groupName: groupMetadata.subject, jpegThumbnail: buffer.toString('base64'), caption: 'Olá! Vamos para a legion? ٩(^◡^ )'

    }, MessageType.groupInviteMessage)

  }

  break
				case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMenssage(from, '🤝', text, {quoted: mek})
						break
						 case 'promote':
            
            await client.promoteParticipant(groupId, mentionedJid)
            
            break
				case 'setdesc':
                	if (!isGroup) return reply(ind.groupo())
			    	if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                	client.groupUpdateDescription(from, `${body.slice(9)}`)
               		client.sendMessage(from, '🤝', text, {quoted: mek})
						break
				case 'setmarc':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Marcaçao altarada para: ${cr}`)
					await limitAdd(sender)
						break 
				case 'atinivel':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :??')
					if (args[0] === 'on') {
					if (isLevelingOn) return reply('O sistema de nível foi ativo nesso grupo!')
					_leveling.push(from)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === 'off') {
					_leveling.splice(from, 1)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvloff())
					} else {
					reply(ind.satukos())
					}
						break
				case 'atnivel':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						const ur = WAMessageProto.Message.fromObject({
						listMessage: WAMessageProto.ListMessage.fromObject({
						title: "Seja bem-vindo",
						buttonText: "Configuraçöes de Nível",
						description: `			Zeus`,
						listType: 1,
						"sections": [{//início
						"title": "Nível",
						"rows": [{
						"title": "Ligar",
						"rowId": `${prefix}atinivel on`},
						{ "title": "Desligar",
						   "rowId": `${prefix}atinivel off` },
						]} 
						]//Terminou
						})
						})
						let preparedur = client.prepareMessageFromContent(from, ur, {});
						client.relayWAMessage(preparedur, {waitForAck: true})
						   break    
					case 'boasvindas1':
							if (!isGroup) return reply(ind.groupo())
							if (!isGroupAdmins) return reply(ind.admin())
							if (args.length < 1) return reply('Boo :𝘃')
							if (Number(args[0]) === 1) {
							if (isWelkom) return reply('As mensagens de boas vindas foram ativas nesse grupo!')
							welkom.push(from)
							fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
							reply('*😳 Welcome foi ativado neste grupo!*')
							} else if (Number(args[0]) === 0) {
							welkom.splice(from, 1)
							fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
							reply('*😰 Welcome foi desativado neste grupo!*')
							} else {
							reply(ind.satukos())
							}
								break 
					
						case 'boasvindas1':
							if (!isGroup) return reply(ind.groupo())
							if (!isGroupAdmins && !isOwner) return reply(ind.admin())
							if (!isBotGroupAdmins) return reply(ind.badmin())          
							const buttons66 = [
							{buttonId: `${prefix}boasvindas1 1`, buttonText: {displayText: 'Ligar Bv'}, type: 1},
							{buttonId: `${prefix}boasvindas1 0`, buttonText: {displayText: 'Desligar Bv'}, type: 1},
							]
							anu = process.uptime()
							const button66Message = {
							contentText: `
							Selecione uma opção
							`,
							footerText: `Usuário: ${pushname}`,
							buttons: buttons5,
							headerType: 1
							}							
							client.sendMessage(from, button66Message, MessageType.buttonsMessage, {quoted: mek})
								break
						case 'antilinkgrupo':
     						if (!isGroupAdmins) return reply(ind.admin())
						if (args.length < 1) return reply('digite 1 para ativar ')
						if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Mas já ativaram isso? 🤔')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link de grupos está ativo, Caso você enviar um link de alguem grupo será removido!`, text)
						} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Anti-link de grupos foi desativado!')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
						} else {
						reply('1 para ativar, 0 para desativar ')
						}
							break
					case 'antfake':
						try {
						if (!isGroup) return reply(ind.groupo())
						if (!isGroupAdmins) return reply(ind.admin())
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/banco/json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
						} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/banco/json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
						} else {
						reply('1 para ativar, 0 para desativar')
						}
						} catch {
						reply('Deu erro, tente novamente :/')
						}
							break
					case 'gp1':
						if (!isGroup) return reply(ind.groupo())
						if (!isGroupAdmins) return reply(ind.admin())
						if (!isBotGroupAdmins) return reply(ind.badmin())
						if (args[0] === 'open') {
					    reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
						} else if (args[0] === 'close') {
						reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
						}
							break      
					case 'nsfw6':
						if (!isGroup) return reply(ind.groupo())
						if (!isGroupAdmins) return reply(ind.admin())
						if (args.length < 1) return reply('Boo :𝘃')
						if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *O comando já estava ativo antes*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sucesso ao ativar nsfw nesse grupo!')
						} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sucesso ao desativar nsfw nesse grupo!')
						} else {
						reply(ind.satukos())
						}
							break
case 'welcome':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const ar = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Escolha uma opção",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Boas vindas",
"rows": [{
"title": "Ligar",
"rowId": `${prefix}boasvindas1 1`},
{ "title": "Desligar",
"rowId": `${prefix}boasvindas1 0` },
]}
  
]//Terminou
})
})
let preparedar = client.prepareMessageFromContent(from, ar, {});
client.relayWAMessage(preparedar, {waitForAck: true})
break
case 'antilink':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const er = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Escolha uma opção",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Escolha uma opção",
"rows": [{
"title": "Ligar",
"rowId": `${prefix}antilinkgrupo 1`},
{ "title": "Desligar",
"rowId": `${prefix}antilinkgrupo 0` },
]}
  
]//Terminou
})
})
let prepareder = client.prepareMessageFromContent(from, er, {});
client.relayWAMessage(prepareder, {waitForAck: true})
break
case 'antifake':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const ir = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Escolha uma opção",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Anti fake",
"rows": [{
"title": "Ligar",
"rowId": `${prefix}antfake 1`},
{ "title": "Desligar",
"rowId": `${prefix}antfake 0` },
]}
  
]//Terminou
})
})
let preparedir = client.prepareMessageFromContent(from, ir, {});
client.relayWAMessage(preparedir, {waitForAck: true})
break
case 'gp':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const az = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Configurações do Grupo",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Escolha uma opção",
"rows": [{
"title": "Abrir grupo",
"rowId": `${prefix}gp1 open`},
{ "title": "Fechar grupo",
"rowId": `${prefix}gp1 close` },
]}
  
]//Terminou
})
})
let preparedaz = client.prepareMessageFromContent(from, az, {});
client.relayWAMessage(preparedaz, {waitForAck: true})
break
case 'nsfw':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const az1 = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Configuração nsfw",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Escolha uma opção",
"rows": [{
"title": "Ativar nsfw",
"rowId": `${prefix}nsfw6 1`},
{ "title": "Desativar nsfw",
"rowId": `${prefix}nsfw6 0` },
]}
  
]//Terminou
})
})
let preparedaz1 = client.prepareMessageFromContent(from, az1, {});
client.relayWAMessage(preparedaz1, {waitForAck: true})
break
			            case 'rg':
if (isRegistered) return sticRegister(from)
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `╭─❒ 「 Registrado 」 ❒
├ *🔖 Nome :* ${pushname}
├ *🔖 Número :* @${sender.split('@')[0]}
├ *🔖 Serial:* ${serialUser}
├ *🔖 Usuários:* ${_registered.length}
└❏
`
gbutsan = [
{buttonId:`${prefix}menu`,buttonText:{displayText:'🔖Menu'},type:1},
{buttonId:`${prefix}criadorbot`,buttonText:{displayText:'👤Criador'},type:1}
]
ppimg = await client.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const sendBtnVeryy = {
imageMessage: ppimg.message.imageMessage,
contentText:`${jancok}`,
footerText: `Obrigado por se registrar no bot`, 
buttons: gbutsan,
headerType: 4
}
client.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	break
	
	case 'regras':
bu = [
{buttonId:`${prefix}menu`,buttonText:{displayText:'🔖Menu'},type:1},
{buttonId:`${prefix}criadorbot`,buttonText:{displayText:'👤Criador'},type:1}
]
ppimg = await client.prepareMessage(from, regras, image, {thumbnail: regras})
const sendregras = {
imageMessage: ppimg.message.imageMessage,
contentText: '٩(^◡^ )',
footerText: `Leiem as regras do grupo para não serem banidos! ;)`, 
buttons: bu,
headerType: 4
}
client.sendMessage(from, sendregras, MessageType.buttonsMessage, {quoted:ftrol})
	break



									//DOWNLOAD DE MÚSICAS
	case 'play6':
		teks = body.slice(6)
		anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
		const objs = []
		for(i=0;i< anu.resultados.length; ++i) {
		let data = {
		"rowId": `${prefix}mp3 `+ anu.resultados[i].title,
		"title": `${prefix}mp3`,
		description: anu.resultados[i].title
		}
		objs.push(data)
		}
		const payload = {
		listMessage: {
		title: " Músicas encotradas ✓",
		buttonText: "Mostra lista de músicas",
		description: `Nome: ${teks}`,
		listType: 1,
		sections: [
		{
		title: "Músicas relacionadas",
		rows: objs
		}
		]
		}
		}
		let preparedPayload = await client.prepareMessageFromContent(from, payload, {});
		await client.relayWAMessage(preparedPayload, {waitForAck: true})
			break
	case 'mp':
		if (!isGroup) return reply(ind.groupo())
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		if (args.length === 0) return reply(`Para baixar uma musica use *${prefix}play* _nome da musica_`)
		const playy = await axios.get(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${body.slice(6)}&apikey=apiteam`)
		const mulaikah = playy.url
		try {
		reply(ind.wait())
		yta(mulaikah)
		.then((res) => {
		const { dl_link, thumb, title, filesizeF, filesize } = res
		axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		.then(async (a) => {
		if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *Titulp* : ${title}\n❏ *Formato* : MP3\n*Formato* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a música é muito longa`)
		sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 PLAY MP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}}).catch(() => reply(ind.stikga()))
		})
		})
		} catch (err) {
		reply(ind.stikga())
		}
			break
        case 'ytmp4':
        	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    	    if (!isGroup) return reply(ind.groupo())
			if (args.length === 0) return reply(`Para  baixar um vídeo use *${prefix}ytmp4 (link)*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply('erro')
			try {
			reply(ind.wait())
			ytv(args[0])
			.then((res) => {
			const { dl_link, thumb, title, filesizeF, filesize } = res
			axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			.then((a) => {
			if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Titulo* : ${title}\n❏ *Formato* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, o vídeo é muito longo`)
			sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(ind.stikga()))
			})
			})
			} catch (err) {
			reply(ind.stikga())
			}
				break
		case 'twitter':
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply('Coloque o link do vídeo!')
			lin = args[0]
			reply(ind.wait())
			hx.twitter(lin).then(res => {
			console.log('[ TWITTER ] downloader')
			Anu = res.SD
			fto = fs.readFileSync('./media/denz.jpg')
			sendMediaURL(from, Anu)
			})
				break
		case 'play':
			blkzz = args.join(' ') 
			if(!blkzz) return enviar('Qual o nome da música?')
			reply(ind.wait())
			musica = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${blkzz}&apikey=apiteam`)
			blkxp = await getBuffer(musica.url)
		    client.sendMessage(from, blkxp, audio, {mimetype: 'audio/mp4', quoted: mek})
				break
									//---------COMANDOS DE BOTÕES------------//
case 'antiview':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins && !isOwner) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())          
const buttons5 = [
{buttonId: `${prefix}antiview1 on`, buttonText: {displayText: 'Ligar AntiView'}, type: 1},
{buttonId: `${prefix}antiview1 off`, buttonText: {displayText: 'Desligar AntiView'}, type: 1},
]
anu = process.uptime()
const button5Message = {
contentText: `
Selecione uma opção
`,
footerText: `Usuário: ${pushname}`,
buttons: buttons5,
headerType: 1
}

client.sendMessage(from, button5Message, MessageType.buttonsMessage, {quoted: mek})
break
case 'status':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const button4 = [
{buttonId: `${prefix}criadorbot`, buttonText: {displayText: 'Criador'}, type: 1},
]
anu = process.uptime()
const button4Message = {
contentText: `
STATUS DO BOT
Total de Grupos : ${groups.length}
Chat Privado : ${totalChat.length - giid.length}
Total de chats : ${totalChat.length}
Velocidade : ${latensii.toFixed(4)}
Tempo de execução : ${kyun(anu)}

Status de Telefone
Versão do whatsapp: ${wa_version}
RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
MCC : ${mnc}
MNC : ${mnc}
Android : ${os_version}
Marca do Dispositivo : ${device_manufacturer}
Modelo do Dispositivo: ${device_model}
Tempo de execução : ${kyun(anu)}

`,
footerText: `Usuário: ${pushname}`,
buttons: button4,
headerType: 1
}

client.sendMessage(from, button4Message, MessageType.buttonsMessage, {quoted: mek})
break
case 'menu':
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const buttons3 = [
{buttonId: `${prefix}menus`, buttonText: {displayText: 'Lista de menus'}, type: 1},
{buttonId: `${prefix}mhentai`, buttonText: {displayText: 'Menu NSFW'}, type: 1},
{buttonId: `${prefix}criadorbot`, buttonText: {displayText: 'Criador'}, type: 1},
]
const button3Message = {
contentText: `
	
                       「 𝑍𝑒𝑢𝑠 ⚡ 」  
╔────────
║〆  Hora: ${time}
║〆  Data: ${time2}
║〆  Chat privado : ${privat.length}
║〆  Total de grupos: ${groups.length}
║〆  Total de chats: ${totalChat.length}
╚─────────────────⊀

                       「 𝐼𝑛𝑓𝑜 」
╔────────
║〆${prefix}info 
║〆${prefix}criadorbot
║〆${prefix}bug (Sua mensagem)
║〆${prefix}creditos
║〆${prefix}comprarbot
║〆${prefix}perfil
║〆${prefix}menus
║〆${prefix}regras
║〆${prefix}ping
║〆${prefix}nivel
║〆${prefix}rank
║〆${prefix}status
╚─────────────────⊀

                        「 𝑇𝑖𝑛𝑑𝑒𝑟 」
╔────────
║〆${prefix}tinder
║〆${prefix}rgtinder
║〆${prefix}tinderhelp
║〆${prefix}rolar
╚─────────────────⊀

                        「 𝐴ç𝑜𝑒𝑠 」
╔────────
║〆${prefix}covid {estado}
║〆${prefix}xp {Resgata seu xp diário}
║〆${prefix}figugif
║〆${prefix}figu
║〆${prefix}clima
║〆${prefix}imagem 
║〆${prefix}voz {código do idioma} {fala}
║〆${prefix}cadr {texto}
║〆${prefix}buscanime
║〆${prefix}convite
║〆${prefix}getbio
║〆${prefix}send 
║〆${prefix}video
║〆${prefix}brainly (pergunta)
║〆${prefix}adivinha
╚─────────────────⊀

                       「 𝐷𝑖𝑣𝑒𝑟𝑠𝑜𝑒𝑠 」
╔────────
║〆${prefix}cassino
║〆${prefix}pisc 
║〆${prefix}gay 
║〆${prefix}rankgay
║〆${prefix}rankgado
║〆${prefix}fimoses
║〆${prefix}rankgostoso
║〆${prefix}putinha
║〆${prefix}resp {sua pergunta}
║〆${prefix}avalie
║〆${prefix}gado
║〆${prefix}safado
║〆${prefix}buc
║〆${prefix}gostoso
║〆${prefix}casal
║〆${prefix}prnhb Nome/texto
║〆${prefix}fakemsg @pessoa |msg1|resp
║〆${prefix}eununca
╚─────────────────⊀

                       「 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 」
╔────────
║〆${prefix}play {nome da música}
║〆${prefix}ytmp4 {url yt}
║〆${prefix}ig (link)
║〆${prefix}tiktok(link)
║〆${prefix}twitter (link)
╚─────────────────⊀


                       「 𝐽𝑜𝑔𝑜 𝑑𝑎 𝑣𝑒𝑙ℎ𝑎 」
╔────────
║〆${prefix}ttthelp
║〆${prefix}ttt
║〆${prefix}tttme
║〆${prefix}tttrank
║〆${prefix}jogov @adversário
╚─────────────────⊀

`,
footerText: `Usuário: ${pushname}`,
buttons: buttons3,
headerType: 1
}

client.sendMessage(from, button3Message, MessageType.buttonsMessage, {quoted: mek})
break
case 'sortear':
if (!isOwner) return reply(ind.ownerb()) 
const jogador = `${Math.floor(Math.random() * 20)}`
            reply(`O número sorteado foi: ${jogador}🎉!`)
            break
									
									
									
									
									
										//------MENUS------//
	case 'menus':
 if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const crowley = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Abrir menu",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Menus",
"rows": [{
"title": "menu",
"rowId": `${prefix}menu` },
{"title": "menus",
"rowId": `${prefix}menus`},
{ "title": "mhentai",
"rowId": `${prefix}mhentai` },	 
{ "title": "menuzeus",
"rowId": `${prefix}menuzeus` },
{ "title": "menuadm",
"rowId": `${prefix}menuadm` },
{ "title": "tinder",
"rowId": `${prefix}tinder` },
]},
{ "title": "Contato",
"rows": [{
"title": "https://wa.me/556993899391",
"rowId": "https://wa.me/556993899391" },
{ "title": "https://www.instagram.com/viny_zz/",
"rowId": "https://www.instagram.com/viny_zz/" }] },
										
{ "title": "Informações",
"rows": [{
"title": "Criador: Zeus/Zultra",
"rowId": ""
}]
									  
}]//Terminou
})
})
let preparedCrowley = client.prepareMessageFromContent(from, crowley, {});
client.relayWAMessage(preparedCrowley, {waitForAck: true})
break
	case 'mhentai':
if (!isNsfw) return reply(ind.nsfwoff())
if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
const zeu = WAMessageProto.Message.fromObject({
listMessage: WAMessageProto.ListMessage.fromObject({
title: "Seja bem-vindo",
buttonText: "Abrir menu",
description: `			Zeus`,
listType: 1,
"sections": [{//início
"title": "Animes",
"rows": [{
"title": "neko",
"rowId": `${prefix}neko`},
{ "title": "abraçar",
"rowId": `${prefix}abraçar` },
{ "title": "beijar",
"rowId": `${prefix}beijar` },	 
{ "title": "foxg",
"rowId": `${prefix}foxg` },
{ "title": "carinho",
"rowId": `${prefix}carinho` },
{ "title": "dedo",
"rowId": `${prefix}dedo` },
{ "title": "cossegas",
"rowId": `${prefix}cossegas` },
{ "title": "waifu",
"rowId": `${prefix}waifu` },
{ "title": "avatar",
"rowId": `${prefix}avatar` },
{ "title": "wallpaper",
"rowId": `${prefix}wallpaper` },
{ "title": "baka",
"rowId": `${prefix}baka` },
]},
{ "title": "hentais",
"rows": [{
"title": "kuni",
"rowId": `${prefix}kuni` },
{ "title": "lesbian",
"rowId": `${prefix}lesbian` },
{ "title": "keta",
"rowId": `${prefix}keta` },
{ "title": "nholo",
"rowId": `${prefix}nholo` },
{ "title": "smug",
"rowId": `${prefix}smug` },
{ "title": "solo",
"rowId": `${prefix}solo` },
{ "title": "ero",
"rowId": `${prefix}ero` },
{ "title": "pezinhos",
"rowId": `${prefix}pezinhos` },
{ "title": "tapa",
"rowId": `${prefix}tapa` },
{ "title": "feet",
"rowId": `${prefix}feet` },
{ "title": "classic",
"rowId": `${prefix}classic` },
{ "title": "holoero",
"rowId": `${prefix}holoero` },
{ "title": "cum",
"rowId": `${prefix}cum` },
{ "title": "elesbian",
"rowId": `${prefix}elesbian` },
{ "title": "eron",
"rowId": `${prefix}eron` },
{ "title": "pwankg",
"rowId": `${prefix}pwankg` },
{ "title": "anal",
"rowId": `${prefix}anal` },
{ "title": "lewd",
"rowId": `${prefix}lewd` },
{ "title": "lewdkemo",
"rowId": `${prefix}lewdkemo` },
{ "title": "solog",
"rowId": `${prefix}solog` },
{ "title": "lewdk",
"rowId": `${prefix}lewdk` },
{ "title": "ngif",
"rowId": `${prefix}ngif` },
{ "title": "blowjob",
"rowId": `${prefix}blowjob` },
{ "title": "hentai2",
"rowId": `${prefix}hentai2` },
{ "title": "hololewd",
"rowId": `${prefix}hololewd` },
{ "title": "trap",
"rowId": `${prefix}trap` },
{ "title": "les",
"rowId": `${prefix}les` },
{ "title": "futanari",
"rowId": `${prefix}futanari` },
{ "title": "femdom",
"rowId": `${prefix}femdom` },
{ "title": "feed",
"rowId": `${prefix}feed` },
{ "title": "erkk",
"rowId": `${prefix}erok` },
{ "title": "feetg",
"rowId": `${prefix}feetg` },
{ "title": "erokemo",
"rowId": `${prefix}erokemo` },
{ "title": "boobs",
"rowId": `${prefix}boobs` },
{ "title": "pussy",
"rowId": `${prefix}pussy` },
{ "title": "cgif",
"rowId": `${prefix}cgif` },
{ "title": "nsfwgif",
"rowId": `${prefix}nsfwgif` },
{ "title": "slap",
"rowId": `${prefix}slap` },
{ "title": "rhug",
"rowId": `${prefix}rhug` },
{ "title": "tits",
"rowId": `${prefix}tits` },] },
										
{ "title": "Informações",
"rows": [{
"title": "Criador: Zeus/Zultra",
"rowId": ""
}]
									  
}]//Terminou
})
})
let preparedZeu = client.prepareMessageFromContent(from, zeu, {});
client.relayWAMessage(preparedZeu, {waitForAck: true})
break
case 'menu6':
       		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
               const reqXp  = 1000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
               		client.sendMessage(from, menu(prefix, privat, groups, totalChat, time, time2) , text, { quoted: ftrol, contextInfo :{text: '🔥',
            		"forwardingScore": 1000000000,
            		isForwarded: false,
            		sendEphemeral: false,
            		"externalAdReply": {
               		"title": `Clique para visitar o canal do Zeus`,
                	"body": "",
                	"previewType": "PHOTO",
                	"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                	"thumbnail": fs.readFileSync('./media/47.jpg'),
                	"sourceUrl": "https://youtube.com/c/ZULTRA_Vinizeus"}}})
                		break
                case 'menuzeus':
                case 'zeuemenu':
       		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
               		client.sendMessage(from, menuzeus(prefix) , text, { quoted: ftrol, contextInfo :{text: '🔥',
            		"forwardingScore": 1000000000,
            		isForwarded: false,
            		sendEphemeral: false,
            		"externalAdReply": {
               		"title": `Clique para visitar o canal do Zeus`,
                	"body": "",
                	"previewType": "PHOTO",
                	"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                	"thumbnail": fs.readFileSync('./media/47.jpg'),
                	"sourceUrl": "https://youtube.com/c/ZULTRA_Vinizeus"}}})
                		break
                case 'menuadm':
       				if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
			   		const pepolu = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
               		client.sendMessage(from, menuadm(pushname, prefix, getLevelingLevel, isAntiFake, getLevelingXp, sender, _registered, client, process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) , text, { quoted: ftrol, contextInfo :{text: '🔥',
            		"forwardingScore": 1000000000,
            		isForwarded: false,
            		sendEphemeral: false,
            		"externalAdReply": {
               		"title": `Clique para visitar o canal do Zeus`,
                	"body": "",
                	"previewType": "PHOTO",
                	"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                	"thumbnail": fs.readFileSync('./media/47.jpg'),
                	"sourceUrl": "https://youtube.com/c/ZULTRA_Vinizeus"}}})
                		break
                case 'comprarbot':
       		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
               		client.sendMessage(from, comprarbot(prefix) , text, { quoted: ftrol, contextInfo :{text: '🔥',
            		"forwardingScore": 1000000000,
            		isForwarded: false,
            		sendEphemeral: false,
            		"externalAdReply": {
               		"title": `Clique para visitar o canal do Zeus`,
                	"body": "",
                	"previewType": "PHOTO",
                	"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                	"thumbnail": fs.readFileSync('./media/47.jpg'),
                	"sourceUrl": "https://youtube.com/c/ZULTRA_Vinizeus"}}})
                		break
							/----------COMANDOS DE DIVERSÕES----------/

	case 'cassino':
		const sotoy = [
		'🍊-🍒-🍐',
		'🍒-🔔-🍊',
		'🍇-🍇-🍇',
		'🍊-🍋-🔔',
		'🔔-🍒-🍐',
		'🔔-??-🍊',
		'🍊-🍋-🔔',		
		'🍐-🍒-🍋',
		'🍐-🍐-🍐',
		'🍊-🍒-🍒',
		'🔔-🔔-🍇',
		'🍌-🍒-🔔',
		'🍐-🔔-🔔',
		'🍊-🍋-🍒',
		'🍋-🍋-🍌',
		'🔔-🔔-🍇',
		'🔔-🍐-🍇',
		'🔔-🔔-🔔',
		'🍒-🍒-🍒',
		'🍌-🍌-🍌'
		]
		const sintoy = sotoy[Math.floor(Math.random() * sotoy.length)]
		const sintoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
		const sintoy3 = sotoy[Math.floor(Math.random() * sotoy.length)]
		yow = `[  🎰 CASSINO ]\n-----------------\n${sintoy}\n${sintoy2}⟵\n${sintoy3}`
		reply(yow)
			break
	case 'pisc':
		if (!isGroup) return reply(ind.groupo())
		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
		if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc atari*`)
		url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		attp2 = await getBuffer(url)
		client.sendMessage(from, attp2, sticker, {quoted: mek})
			break
	case 'gay':
		if (!isGroup) return reply(ind.groupo())
		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})  
		rate = body.slice(1)
		const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%']
		const be = ab[Math.floor(Math.random() * ab.length)] 
		buffer = await getBuffer(`https://i.ibb.co/FhGKxX4/IMG-20210209-WA0172.jpg`)
		client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Máquina gay*\n_${pushname} você é `+be +` gay._`}) 
			break
	case 'bdsm':
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isGroup) return reply(ind.groupo())
		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})  
		buffer = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/bdsm?apikey=Zeus-zultra`)
		client.sendMessage(from, buffer, image, { quoted: mek}) 
			break
	case 'resp':
		if (!isGroup) return reply(ind.groupo())
		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol}) 
		ate = body.slice(1)
		const ge =['Não', 'Sim', 'Provavelmente', 'Talvez', 'Minhas fontes dizem que sim', 'Provavelmente não', 'Provavelmente sim', 'Minha resposta é sim', 'Minha resposta é não', 'Quem sabe', 'Também queria saber', 'Não sei']
		const ha = ge[Math.floor(Math.random() * ge.length)] 
		tesk = ha
		client.sendMessage(from, tesk, text, { quoted: mek})
			break 
	case 'avalie':
		client.updatePresence(from, Presence.composing) 
		random = `${Math.floor(Math.random() * 100)}`
		hasil = `A minha nota é: *${random}%🤭*`
		reply(hasil)
			break
	case 'gado':
       	if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
        if (!isGroup) return reply(ind.groupo())
        client.updatePresence(from, Presence.composing) 
        random = `${Math.floor(Math.random() * 100)}`
        hasil = `Nivel de gadisse🐂\n\nVocê é: *${random}%* GADO(A)😛🐂`
        reply(hasil)
            break
	case 'safado':
        if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
        if (!isGroup) return reply(ind.groupo())
        client.updatePresence(from, Presence.composing) 
        random = `${Math.floor(Math.random() * 100)}`
        hasil = `Nivel de safadeza😈\n\nVocê é: *${random}%* safado(a)😈`
        reply(hasil)
           break
	case 'buc':
		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
		if (!isGroup) return reply(ind.groupo())
		if (args.length < 1) return reply ('Vou sair aqui ok? Pfv tentem esquecer isso...era eu? Era mas pfv não espalhem eu só queria uma figurinha pra zoar com pessoas ÍNTIMAS minhas não era pra ter esse alvoroço todo....(não aql roula n é minha kk.. é de um amigo meu pfv não espalhem tmb) nunca pedia nada pra ngm daqui então pfv não espalhem e esquecem isso pfv...')
			break
	case 'gostoso':
        if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
        if (!isGroup) return reply(ind.groupo())
        client.updatePresence(from, Presence.composing) 
        random = `${Math.floor(Math.random() * 100)}`
        hasil = `Nivel de gostosura🤤\n\nVocê é: *${random}%* gostoso(A)😏👊`
        reply(hasil)
        	break

	case 'fakemsg':
		var gh = body.slice(11)
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		var replace = gh.split("|")[0];
		var target = gh.split("|")[1];
		var bot = gh.split("|")[2];
		client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
			break
	case 'eununca':
		random = eununcaeuja[Math.floor(Math.random() * (eununcaeuja.length))]
		zeusnub = client.prepareMessageFromContent(from, {
		"listMessage":{
		"description": `${random}`,
		"buttonText": "Escolha uma opção",
		"listType": "SINGLE_SELECT",
		"sections": [
		{
		"rows": [
		{
		"title": "Eu Nunca", 
		"rowId": `nfkf`                     
		},
		{
		"title": "Eu Já",
		"rowId": `jfjf`                     
		}
		]
		}]}}, {}) 
		client.relayWAMessage(zeusnub, {waitForAck: true})
		setTimeout( () => {
		buttons = [
		{buttonId: `${prefix}eununca`, buttonText: {displayText: 'Nova Partida'}, type: 1}
		]
		buttonMessage = {
		contentText: "Deseja outra partida ?",
		footerText: 'Zeus-Bot',
		buttons: buttons,
		headerType: 1
		}
		client.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
		}, 10000)
			break
												///Comandos de Rank
					case 'rankgay':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '🏳️‍🌈 𝑅𝑎𝑛𝑘 𝑑𝑜𝑠 𝑚𝑎𝑖𝑠 𝑣𝑖𝑎??𝑖𝑛ℎ𝑜𝑠 🏳️‍🌈\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🌈✗ @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
					case 'fimoses':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '𝑅𝑎𝑛𝑘 𝑑𝑜𝑠 𝑚𝑎𝑖𝑠 𝑓𝑖𝑚𝑜𝑠𝑒𝑛𝑡𝑜𝑠 🤓✂️ \n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `✂️ @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
					case 'rankgostoso':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '😋 𝑆𝑜 𝑜𝑠 𝑚𝑎𝑖𝑠 𝑔𝑜𝑠𝑡𝑜𝑠𝑜𝑠 𝑒𝑠𝑡𝑎𝑜 𝑎𝑞𝑢𝑖 😋\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🤤 @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
					case 'rankgado':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '🐂 𝐸𝑠𝑠𝑒𝑠 𝑎𝑞𝑢𝑖 𝑠𝑎𝑜 𝑜𝑠 𝑚𝑎𝑖𝑠 𝑔𝑎𝑑𝑜𝑠 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜 🐂\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🤠 @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
					case 'casal':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = 'O amor vale apena, só basta querer que aconteça💕 Seu par perfeito é o(a)'
						for(i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += ` @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
							break
					case 'putinha':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = 'A mais putinha do grupo é o(a)'
						for(i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += ` @${groupMembers[r].jid.split('@')[0]} 😈\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
							break

							/----------COMANDOS DE AÇÕES----------/
							
										//*DOWNLOAD*//
	case 'ig':
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
        return reply(ind.wait());
        if (!q) return fakegroup("Coloque o link para que eu possa fazer o download!");
        reply(ind.wait());
        hx.igdl(args[0]).then(async (result) => {
        for (let i of result.medias) {
        if (i.url.includes("mp4")) {
        let link = await getBuffer(i.url);
        client.sendMessage(from, link, video, {
        quoted: mek
        });
    	} else {
        let link = await getBuffer(i.url);
        client.sendMessage(from, link, image, {
        quoted: mek
        });
        }
        }
        });
        	break
	case 'tiktok':
		if (!isUrl(args[0]) && !args[0].includes("vt.tiktok"))
		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(ind.wait())
		if (!q) return fakegroup('Linknya?')
		 reply(ind.wait())
		hx.ttdownloader(`${args[0]}`)
		.then(result => {
		const { wm, nowm, audio } = result
		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
		.then(async (a) => {
		client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek})
		})
		})
		.catch(e => console.log(e))
			break
					case 'adivinha':
						advinha = mek.key.id.length > 21 ? 'Android🥴' : mek.key.id.substring(0, 2) == '3A' ? 'IOS🥸' : 'Zaper web😏';
						client.sendMessage(from, `${advinha}` ,text)
							break
					case 'sticker':
					case 'stiker':
					case 'figu':
					case 'figugif':
					case 'figug':
					case 'f':
					case 's': 
					addFilter(from)
						await limitAdd(sender)
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
						.input(media)
						.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						reply(ind.stikga)
						})
						.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
						if (error) {
						reply(ind.stikga())
						fs.unlinkSync(media)	
						fs.unlinkSync(ran)
						}
						client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
						fs.unlinkSync(media)	
						fs.unlinkSync(ran)	
						})
						})
						.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
						.inputFormat(media.split('.')[1])
						.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`❌Não foi possível converter ${tipe} para figurinha, tente novamente!`)
						})
						.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
						if (error) {
						reply(ind.stikga())
						fs.unlinkSync(media)	
						fs.unlinkSync(ran)
						}
						client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
						fs.unlinkSync(media)
						fs.unlinkSync(ran)
						})
						})
						.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
						} else {
						reply(`Envie uma uma foto/video com a legenda ${prefix}figu ou coloque na legenda de uma foto/vídeo já enviada!`)
						}
							break
					case 'brainly':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (isLimit(sender)) return reply(ind.limitend(pusname))
						brien = body.slice(9)
						brainly(`${brien}`).then(res => {
						teks = '❉───────────❉\n'
						for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n❉───────────❉\n`
						}
						client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
						})
						await limitAdd(sender)
							break 
							case 'brainly':
								if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
								if (isLimit(sender)) return reply(ind.limitend(pusname))
								brien = body.slice(9)
								brainly(`${brien}`).then(res => {
								teks = '❉───────────❉\n'
								for (let Y of res.data) {
								teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n❉───────────❉\n`
								}
								client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
								console.log(res)
								})
								await limitAdd(sender)
									break 
							case 'sn':
                      paperr = body.slice(3)
        var buttons = [{ buttonId: 'Teste', buttonText: { displayText: 'sim' }, type: 1 },
 { buttonId: 'teste3', buttonText: { displayText: 'não' }, type: 1 },
 { buttonId: 'teste2', buttonText: { displayText: 'sla' }, type: 1 }]
 
        var buttonsMessage = {
 contentText: ` `, 
footerText: 'clique para votar',
 buttons: buttons, headerType: 1 }
        var sendMsg = await client.prepareMessageFromContent(from, { buttonsMessage }, {})
        client.relayWAMessage(sendMsg, { waitForAck: true })
        break
					case 'ping':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						const timestampi = speed();
						const latensyi = speed() - timestampi
						ini_pingnya = `_Velocidade: ${latensyi.toFixed(4)} Segundos_`
						reply(ini_pingnya)
							break
					case 'covid':
						anu = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${args[0]}`, {method: 'get'})
						covi = `Estado: ${anu.state}\nUF: ${anu.uf}\nCasos: ${anu.cases}\nMortes: ${anu.deaths}\nSuspeitos: ${anu.suspects}\nData de atualização: ${anu.datetime}`                     
						reply(covi)
						break
					case 'clima':
						if (!isGroup) return reply(ind.groupo())
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						client.updatePresence(from, Presence.composing) 
						if (args.length == 0) return reply('Insira o nome da sua cidade.')
						try {
						const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
						const buffer = await getBuffer(`https://wttr.in/${body.slice(7)}.png`)
						let teks = `*「C L I M A」*
						 ╴
						 ${clima.data}
						 ╴
			 			Legion of Gods 神 🇧🇱`
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
						} catch {
						reply('Estranho...\nCertifique-se de não estar usando acentos ok?')
						}
							break
					case 'imagem':
						if (!isGroup) return reply(ind.groupo())
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (!isQuotedSticker) return reply('*Marque um sticker! 😉*')
						reply(ind.wait())
						encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.png')
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui está amigo! '})
						fs.unlinkSync(ran)
						})
						await limitAdd(sender)
							break
					case 'voz':
						if (!isGroup) return reply(ind.groupo())
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
						const gtts = require('./lib/gtts')(args[0])
						if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
						dtt = body.slice(8)
						ranm = getRandom('.mp3')
						rano = getRandom('.ogg')
						dtt.length > 130
						? reply('Para reduzir spam o máximo de letras permitidas são 130!')
						: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
						fs.unlinkSync(ranm)
						buffer = fs.readFileSync(rano)
						if (err) return reply(ind.stikga())
						client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
						fs.unlinkSync(rano)
						})
						})
							break
					case 'buscanime':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
						client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
						reply(err)
						})
						} else {
						reply(ind.wait())
						}
						await limitAdd(sender)
							break
					case 'convite':
				    	if (!isGroup) return reply(ind.groupo()) 
				    	if (!isBotGroupAdmins) return reply(ind.badmin())
				    	linkgc = await client.groupInviteCode (from)
				   	 	yeh = `_Aqui está o link do grupo 😛✌️_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				   		client.sendMessage(from, yeh, text, {quoted: mek})
			        	await limitAdd(sender) 
			        		break	
					case 'getbio':
                 		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (!isGroup) return reply(ind.groupo())
                		var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               			var p = await client.getStatus(`${yy}`, MessageType.text)
                		reply(p.status)
                		if (p.status == 401) {
                		reply("indisponível")
                		}
                			break
					case 'send':
                   		if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (!isGroup) return reply(ind.groupo())
                   		if (args.length < 1) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado`)
                    	if (!q.includes('|')) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado\nNão esqueça do: | `)
                    	var pc = body.slice(6)
                    	var nomor = pc.split("|")[0];
                    	var pesan1 = pc.split("|")[1];
                    	client.sendMessage(nomor + '@s.whatsapp.net', pesan1, text)
                    		break
					case 'video':
                    	if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (!isGroup) return reply(ind.groupo())
                    	if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
                        a = await webp2gifFile(mediaaa)
                        mp4 = await getBuffer(a.result)
                        		client.sendMessage(from, mp4, MessageType.video, {
                    	mimetype: 'video/gif',
                        filename: `stick.gif`,
                        quoted: mek,
                        caption: '✅'
                        })
                        fs.unlinkSync(mediaaa)
                    	}
                    		break
                    case 'teste':
						client.sendMessage(from,fs.readFileSync('./media/videos/teste.mp4'),video,{thumbnail:null,caption: `Oier`, mimetype: 'video/mp4'})
							break
							/----------COMANDOS DE INFORMAÇÕES----------/

					case 'info':
						me = client.user
						uptime = process.uptime()
						teks = `_Info: Zeus. Apenas um simples bot para o whatsapp, focado em diversão e moderação de grupos! Quer me add no seu grupo? Converse com #criadorbot ??_`
						buffer = await getBuffer(me.imgUrl)
						client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
							break 
					case 'criadorbot':
						client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
						client.sendMessage(from, 'Aqui está o contato do meu criador, caso use uma versão que não le card, chame ele por aqui\n\nwa.me/556993899391',MessageType.text, { quoted: mek} )
							break
					case 'bug':
					case 'reportar':
					case 'report':
						const pesan = body.slice(5)
						if (pesan.length > 1000) return client.sendMessage(from, 'Você excedeu o número máximo de letras(1000). Por favor, resuma o seu report.', msgType.text, {quoted: mek})
						var nomor = mek.participant
						const teks1 = `*[BUG REPORTADO]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMOTIVO : ${pesan}`
						var options = {
						text: teks1,
						contextInfo: {mentionedJid: [nomor]},
						}
						client.sendMessage('556993899391@s.whatsapp.net', options, text, {quoted: mek})
						reply('Seu bug foi reportado para o Zultra, agradecemos por ter entrado em contato com o suporte😉')
							break
					case 'creditos':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						client.sendMessage(from, creditos(prefix) , text, { quoted: ftrol, contextInfo :{text: '🔥',
						"forwardingScore": 1000000000,
						isForwarded: false,
						sendEphemeral: false,
						"externalAdReply": {
						"title": `Clique para visitar o canal do Zeus`,
						"body": "",
						"previewType": "PHOTO",
						"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
						"thumbnail": fs.readFileSync('./media/47.jpg'),
						"sourceUrl": "https://youtube.com/c/ZULTRA_Vinizeus"}}})
							break
					case 'perfil':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						if (!isGroup) return reply(ind.groupo())
						client.updatePresence(from, Presence.composing) 
						random = `${Math.floor(Math.random() * 100)}`
						random2 = `${Math.floor(Math.random() * 100)}`
						random3 = `${Math.floor(Math.random() * 100)}`
						random4 = `${Math.floor(Math.random() * 100)}`
						random5 = `${Math.floor(Math.random() * 5000)}`
						try {
						profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
						} catch {
						profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
						}
						const userLevel7 = getLevelingLevel(sender)
						const userXp7 = getLevelingXp(sender)
						if (userLevel7 === undefined && userXp7 === undefined) return reply(ind.lvlnul())
						const requiredXp7 = 1000 * (Math.pow(2, userLevel7) - 1)
						profile = `    「 *_Seu perfil_* 」\n*📋Nome:* ${pushname}\n*🕹️Xp:*  ${userXp7}\n*📊Nivel:* ${userLevel7}\n*💎Patente*: ${role}\n*🐂Nivel gado: ${random2}%*\n*😈Nivel puta: ${random3}%*\n*🏳️‍🌈Nivel gay: ${random4}%*\n*😋Nivel de gostosura: ${random}%*\n*🍼Valor do programa: R$${random5}*`
						buffer = await getBuffer(profil)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: profile}, text, tescuk, cr)
							break
					case 'rank':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
							_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
							let leaderboardlvl = '-----[ *RANKING DE NIVEL* ]----\n\n'
							let nom = 0
							try {
							for (let i = 0; i < 10; i++) {
							nom++
							leaderboardlvl += `*[${nom}]* ${_level[i].id.split('@')[0]}\n│➣  *XP*: ${_level[i].xp}\n│➣  *Nivel*: ${_level[i].level}\n`
							}
							await reply(leaderboardlvl)
							} catch (err) {
							console.error(err)
							await reply(`Para usar esse comando, precisa ter no mínimo 5 usuários com nível`)
							}
								break
								/---------COMANDOS DO DONO------------/
					   case 'return':
							   if (!isOwner) return reply(ind.ownerb())
      						 arguss = body.slice(8)
      						 try {
							   return JSON.stringify(eval(arguss))
    					 	  } catch (erro) {
        					   reply(`${erro}`)
       						console.log(erro)
    							}
   				    		 addFilter(from)
      				  		break
      			 	 case 'mek':
						    if (!isOwner) return reply(ind.ownerb())
							return reply(JSON.stringify(mek, null, '_'))
								break
						case 'exe':
							client.updatePresence(from, Presence.composing) 
							if (!isOwner) return reply(ind.ownerb())
							const cmd = body.slice(4)
							exec(cmd, (err, stdout) => {
							if(err) return client.sendMessage(from, "Comando inexistente", text, {quoted: mek})
							if (stdout) {
							client.sendMessage(from, stdout, text, {quoted: mek})
							}
							})
 						   addFilter(from)
								break
						case 'setprefix':
							if (args.length < 1) return
							if (!isOwner) return reply(ind.ownerb())
							prefix = args[0]
							reply(`*Prefixo alterado para:* ${prefix}`)
								break 
						case 'delete':
						case 'del': 
							if (!isOwner) return reply(ind.ownerb())
							client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
								break
						case 'resetlimit':
							if (!isGroup) return reply(dpa.groupo())
							if (!isOwner) return reply(ind.ownerg()) 
							var obj = []
							fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
							await reply(`O limite foi resetado!`)
								break
					  case 'setlimit':
							if (!isGroup) return reply(dpa.groupo())
							if (args.length < 1) return
							limitawal = args[0]
							reply(`O limit foi alterado para: *${limitawal}*`)
								break
							case 'clone':
								if (!isGroup) return reply(ind.groupo())
								if (!isOwner) return reply(ind.ownerg()) 
								if (args.length < 1) return reply(' *Marque uma pessoa que terá sua foto do perfil clonada:* ')
								if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('q')
								mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
								let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
								try {
								pp = await client.getProfilePicture(id)
								buffer = await getBuffer(pp)
								client.updateProfilePicture(botNumber, buffer)
								mentions(`obg pela foto de perfil 😳 @${id.split('@')[0]}`, [jid], true)
								} catch (e) {
								reply(ind.stikga())
								}
								await limitAdd(sender) 
									break   
							case 'ppbot':
								if (!isOwner) return reply(ind.ownerb())
								client.updatePresence(from, Presence.composing) 
								if (!isQuotedImage) return reply(`Envie uma imagem com a legenda *${prefix}ppbot*`)
								enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
								media = await client.downloadAndSaveMediaMessage(enmedia)
								await client.updateProfilePicture(botNumber, media)
								reply('Obg pelo novo perfil 😗')
									break
							case 'banall':
                   				 if (!isOwner) return reply(ind.ownerb())
			      				  members_id = []
								teks = (args.length > 1) ? body.slice(8).trim() : ''
								teks += '\n\n'
								for (let mem of groupMembers) {
								teks += `*😘* ${mem.jid.split('@')[0]}\n`
								members_id.push(mem.jid)
								}
								mentions(teks, members_id, true)
								client.groupRemove(from, members_id)
									break 
							case 'giftlimit': 
								if (!isOwner) return reply(ind.ownero())
								const nomerr = args[0].replace('@','')
								const jmla = args[1]
								if (jmla <= 1) return reply(`O limite minímo é de 1`)
								if (isNaN(jmla)) return reply(`O limite deve ser um número`)
								if (!nomerr) return reply(`Desculpe formato errado\nInsira parâmetros corretos\nExemplo : ${prefix}giftlimit @556993899391 20`)
								const cysz = nomerr + '@s.whatsapp.net'
								var found = false
								Object.keys(_limit).forEach((i) => {
								if(_limit[i].id === cysz){
								found = i
								}
								})
								if (found !== false) {
								_limit[found].limit -= jmla
								const updated = _limit[found]
								const result = `Limite presenteado\nSN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
				*「 LIMITE PRESENTEADO 」*
				
				• Usuário : @${updated.id.replace('@s.whatsapp.net','')}
				• Limit: ${limitawal-updated.limit}`
								console.log(_limit[found])
								fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
								reply(result)
								} else {
								reply(`Desculpe, número ${nomerr} não registrado no banco de dados!`)
								}
									break
					case 'bugbutton':
     					if (!isOwner) return reply(ind.ownerb()) 
   	     				lient.toggleDisappearingMessages(from, 0)
    					reply(`${virtex9(prefix)}`)    
     					client.toggleDisappearingMessages(from, 0)
							break
					case 'tiktokstalk':
						if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
						try {
						if (args.length < 1) return client.sendMessage(from, 'Qual o username?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Nome* : ${user.uniqueId}\n*Nick* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Curtidas* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
						} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuário inválido!')
						}
							break
						case 'exit': 
							if (!isGroup) return reply(ind.groupo())
							if (!isOwner) return reply(ind.ownerb())
							await reply(from, 'bye').then(() => client.groupLeave(groupId))
								break
						case 'clearall':
							if (!isOwner) return reply(ind.ownerb())
							anu = await client.chats.all()
							client.setMaxListeners(25)
							for (let _ of anu) {
							client.deleteChat(_.jid)
							}
							reply(ind.clears())
								break
						case 'delete':
						case 'del': 
							if (!isOwner) return reply(ind.ownerb())
							client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
								break
						case 'posttext':
							if (!isOwner) return reply(ind.ownerb())
								client.updatePresence(from, Presence.composing)
								client.sendMessage('status@broadcast', `${q}`, extendedText)
								client.sendMessage(from, `Texto enviado ao status: ${q}`, text, {
								quoted: mek
								})
									break
						case 'postfoto':
							if (!isOwner) return reply(ind.ownerb())
							client.updatePresence(from, Presence.composing)
							if (isQuotedImage) {
							const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							cihcih = await client.downloadMediaMessage(swsw)
							client.sendMessage('status@broadcast', cihcih, image, {
							caption: `${q}`
							})
							}
							if (args.length < 1) {
							bur = `Imagem enviada ao status`
							client.sendMessage(from, bur, text, {
							quoted: mek
							})
							} else {
							bur = `Imagem enviada ao status com a legenda: ${q}`
							client.sendMessage(from, bur, text, {
							quoted: mek
							})
							}
								break
						case 'postvid':
                			if (!isOwner) return reply(ind.ownerb())
                    		client.updatePresence(from, Presence.composing)
                   			if (isQuotedVideo) {
                        	const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        	cihcih = await client.downloadMediaMessage(swsw)
                        	client.sendMessage('status@broadcast', cihcih, video, {
                            caption: `${q}`
                        	})
                   			}
                    		if (args.length < 1) {
                        	bur = `Vídeo enviado ao status`
                        	client.sendMessage(from, bur, text, {
                            quoted: mek
                        	})
                    		} else {
                        	bur = `Vídeo enviado ao status com a legenda: ${q}`
                        	client.sendMessage(from, bur, text, {
                            quoted: mek
                        	})
                    		}
                    			break
						case 'marcfig':
							if (!isOwner) return reply(ind.ownerb())
							if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
							const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							filePath = await client.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
							var value = args.join(" ")
							var group = await client.groupMetadata(from)
							var member = group['participants']
							var mem = []
							member.map(async adm => {
							mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
							})
							var options = {
							contextInfo: {
							mentionedJid: mem
							},
							quoted: mek
							}
							ini_buffer = fs.readFileSync(filePath)
							client.sendMessage(from, ini_buffer, sticker, options)
							fs.unlinkSync(filePath)
							} else {
							reply(`Marque um sticker para que eu mencione todos com ele`)
							}
								break
						case 'marcfoto':
							if (!isOwner) return reply(ind.ownerb())
							if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							filePath = await client.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
							var value = args.join(" ")
							var group = await client.groupMetadata(from)
							var member = group['participants']
							var mem = []
							member.map(async adm => {
							mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
							})
							var options = {
							contextInfo: {
							mentionedJid: mem
							},
							quoted: mek
							}
							ini_buffer = fs.readFileSync(filePath)
							client.sendMessage(from, ini_buffer, image, options)
							fs.unlinkSync(filePath)
							} else {
							reply(`Marque uma imagem para que eu mencione todos com ela`)
							}
								break
						case 'tm': 
							if (!isOwner) return reply(ind.ownerb()) 
							if (args.length < 1) return reply('.......')
							anu = await client.chats.all()
							if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
							buff = await client.downloadMediaMessage(encmedia)
							for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}`})
							}
							reply('Transmissão feita!')
							} else {
							for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
							}
							reply('Transmissão feita!')
							}
								break
						case 'tmrg':
							if (!isOwner) return
							if (args.length < 1) return reply('Cadê o texto?')
							//	var hi = body.slice(6)
							kkkkkkki = _registered.length
							for (let i = 0; i < kkkkkkki; i++) {
							setTimeout( function timer(){
							client.sendMessage(_registered[i].id, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 500, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Transmissão para Registrados`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytA4UwVDag1g4HPnJnfoBu_BC7D86wIEJxA&usqp=CAU", "thumbnail": fs.readFileSync("./media/47.jpg"),sourceUrl: 'https://chat.whatsapp.com/HT9y0w00dSeAMvtBBvAROY'}}})
							}, i * 0001);

							/*}, i * 00010);*/

							}
							await reply('Transmissão enviada com sucesso')
								break
						case 'bcimage':
							if (!isOwner) return reply(ind.ownerb())
							if (args.length < 1) return reply(ind.Erro(prefix, command))
							argg = args.join(' ');
							anunyabg = await client.chats.all()
							if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
							bc = await client.downloadMediaMessage(encmedia)
							for (let _ of anunyabg) {
							client.sendMessage(_.jid, bc, image, {quoted : ftrol, caption : `*TRANSMISSAO*\n\n${argg}`,"contextInfo": {"forwardingScore": 1000000000,isForwarded: true,sendEphemeral: true}})
							}
							} else {
							await ini_bc_pc_bang(argg)
							}
							reply(lang.successBc())
								break
							//COMANDOS DE ANIMES//

             		case 'baka':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/baka')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}baka`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                	case 'wallpaper':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://akaneko-api.herokuapp.com/api/wallpapers')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}wallpaper`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                 	case 'avatar':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/avatar')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}avatar`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                 	case 'cossegas':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/waifu')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}cossegas`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                 	case 'dedo':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/poke')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}dedo`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                 	case 'carinho':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/pat')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}carinho`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                 	case 'foxg':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/fox_girl')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}foxg`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                   	case 'beijar':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/kiss')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}beijar`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                        case 'abraÃ§ar':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/cuddle')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}abraÃ§ar`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                     case 'neko':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/kemonomimi')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}neko`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
 

							//COMANDOS DE HENTAI//

					case 'rhug':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/hug')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}rhug`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);						
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break
					case 'slap':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/slap')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}slap`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);					
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'nsfwgif':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/nsfw_neko_gif')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}nsfwgif`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);					
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
	               case 'cgif':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/cum')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}cgif`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);						
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'pussy':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/pussy_jpg')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}pussy`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);					
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'boobs':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/boobs')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}boobs`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'erokemo':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/erokemo')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}erokemo`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'feetg':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/feetg')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}feetg`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'erok':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/erok')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}erok`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'feed':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/feed')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}feed`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'femdom':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/femdom')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}femdom`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'futanari':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/futanari')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}futanari`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'les':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/les')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}les`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
					case 'trap':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/trap')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}trap`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
    				case 'hololewd':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/hololewd')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}hololewd`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
    				case 'hentai2':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/hentai')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}hentai2`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break
    				case 'blowjob':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/blowjob')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}blowjob`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
    				case 'ngif':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/ngif')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}ngif`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
        			case 'lewdk':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/lewdk')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}lewdk`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
        			case 'solog':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/solog')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}solog`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'lewdkemo':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/lewdkemo')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}lewdkemo`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'lewd':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/lewd')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}lewd`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'anal':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/anal')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}anal`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'pwankg':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/pwankg')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}pwankg`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'eron':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/eron')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}eron`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'elesbian':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/eroyuri')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}elesbian`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'cum':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/cum_jpg')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}cum`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'holoero':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/holoero')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}holoero`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'classic':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/classic')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}classic`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'feet':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/feet')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}feet`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
         			case 'tapa':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/spank')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}tapa`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
          			case 'pezinhos':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/erofeet')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}pezinhos`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
          			case 'ero':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/ero')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}ero`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
          			case 'solo':
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/solo')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}solo`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
           			case 'smug':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/smug')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}smug`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
           			case 'nholo':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/holo')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}nholo`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
            		case 'keta':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/keta')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}keta`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
            		case 'lesbian':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/lesbian')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}lesbian`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
              		case 'kuni':
						if (!isNsfw) return reply(ind.nsfwoff())
						await reply(ind.wait())
						tapa = await fetchJson('https://nekos.life/api/v2/img/kuni')
						buffer = await getBuffer(tapa.url) 
						buttons = [
		  				{buttonId: `${prefix}kuni`, buttonText: {displayText: ' Quero outra '}, type: 1}
						]
						buttonMessage = Object.assign({
						contentText: "Gostou ? clica pra receber outra ðŸ˜‰",
						footerText: `Usuario: ${pushname}`,
						buttons: buttons,
						headerType: 4
						}, await client.prepareMessageMedia(
		 				buffer,
		  				MessageType.image, { thumbnail: buffer})
						);			
						client.sendMessage(
		  				from,
		  				buttonMessage,
		 				MessageType.buttonsMessage
						);
							break	
                		case 'tits':
                    		try {
							if (!isRegistered) return sendButRegis(from, register1, register2, register3, {quoted: ftrol})
							if (!isGroup) return reply(ind.groupo())
                         	if (!isNsfw) return reply(ind.nsfwoff())
                        	reply(ind.wait())
                        if (args[0] === "1") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "2") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "3") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "4") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "6") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "7") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "8") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else if (args[0] === "9") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        } else {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                            imageToBase64(res.data.url)
                            .then(
                            (ress) => {
                            var buf = Buffer.from(ress, 'base64')
                            		client.sendMessage(from, buf, MessageType.image, {
                            quoted: mek
                            })
                            })
                            })
                        }
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

							/----------COMANDOS DE TINDER----------/
					case 'tinderhelp':
						await costum(tinderhelp(prefix, sender, role), text, tescuk, cr)
              			  break
					case 'rolar':
						if (!isRetinder) return reply('Você precisa estar registrado para rolar! Use #rgtinder')
						tinder_jid = []
						teks = '*Tinder Zeus*\n\n'
						for (i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * tinder.length + 0)
						teks += `💕 : @${tinder[r].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Nome: ${tinder[r].Nome} 💝\n│ ➣ Idade: ${tinder[r].Idade} 💝\n│ ➣ Bio: ${tinder[r].Bio} 💌\n\n_Divulgue esta função para ter mais resultados sempre <3_\nSe cadastre usando #rgtinder`
						photo = fs.readFileSync(`./database/banco/tinder/photos/${tinder[r].jid}.jpeg`)
						}
						tinder_jid.push(tinder[r].jid)
						client.sendMessage(from, photo, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [`${tinder_jid}`] }})
							break 
					case 'rgtinder':
						if (isRetinder) return reply('Você já está registrado no tinder!')
						if (args.length < 1) return reply('Registre-se enviando uma foto com "#rgtinder Nome / Idade  / Bio" na legenda\n\nNão se esqueça das barrinhas, elas são necessárias.')
						const infos = args.join(' ')
						const tname = infos.split("/")[0];
						const tage = infos.split("/")[1];
						const tbio = infos.split("/")[2];
						if (tbio.length < 1) return reply('Você precisa informar todos os dados separando eles com a barrinha, use #tinderhelp para ajuda')
						boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						delb = await client.downloadMediaMessage(boij)
						fs.writeFileSync(`./database/banco/tinder/photos/${sender}.jpeg`, delb)
						const objeto = { jid: sender, Nome: tname, Idade: tage, Bio: tbio }
						tinder.push(objeto)
						retinder.push(sender)
						fs.writeFileSync('./database/banco/tinder/tinder.json', JSON.stringify(tinder))
						fs.writeFileSync('./database/banco/tinder/retinder.json', JSON.stringify(retinder))
						client.sendMessage(from, `${tname}, você foi adicionado(a) ao Tinder Zeus! Divulgue para sempre ter mais resultados <3`, MessageType.text)
							break 
					case 'tinder':
						const thelp = WAMessageProto.Message.fromObject({
						listMessage: WAMessageProto.ListMessage.fromObject({
						title: `Seja bem-vindo(a) ao Tinder do Zeus, ${pushname}`,
						buttonText: "Tinder Zeus",
						description: `Tinder Help, envie #tinderhelp caso use WhatsApp Modificado`,
						listType: 1,
						"sections": [{//início
						"title": "Tinder",
						"rows": [{
						"title": "Como Funciona",
						"rowId": "#tinderhelp"
						},
						{
						"title": "Se Cadastrar",
						"rowId": "#rgtinder"
						},
						{
						"title": "Rolar",
						"rowId": "#rolar"
						}
						]
						},
						{
						"title": "Contato",
						"rows": [{
						"title": "WhatsApp",
						"rowId": "#criadorbot"
						},
						{
						"title": "https://www.instagram.com/viny_zz/",
						"rowId": ""
						}]
						}]//Terminou
						})
						})
						let preparedPayload5 = client.prepareMessageFromContent(from, thelp, {});
						client.relayWAMessage(preparedPayload5, { waitForAck: true })
							break 
				default:
				if (isGroup && isAntiVO && type == 'viewOnceMessage'){
						var msg = {...mek}
						let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
						msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage							
						typenya["viewOnce"] = false					
						typenya["caption"] = `AntiViewOnce Detectado!\n\n\nLegenda : ${(typenya.caption === '') ? 'NONE' : typenya.caption}`						
						let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }									
						let pe = await client.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})							
						await client.relayWAMessage(pe)
						console.log(color('WARNING: ANTIVIEW ONCE','red'))
						}
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Olá *${pushname}*, o comando *${prefix}${command}* não existe, para ver a lista de comandos use *${prefix}menu*!`)
                  }
            if (/^>/.test(pes)) {
            	if (!isOwner) return
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    		client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                		client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                		client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
