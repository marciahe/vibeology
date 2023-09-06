
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x392e3d=_0x3bce;function _0x12d3(){const _0x12219=['logger\\\\x20websocket\\\\x20error','__es'+'Module','1577787gCSxxx','host','_connected','map','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','errorHandlerInstalled','versions','default','_inBrowser','_attemptToReconnectShortly','catch','9NOOvVt','toString','16035630lmIbFi','message','\\\\x20server','console','reason','_allowedToConnectOnSend','error','bind','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','now','163372hkKhgV','stack','_connectAttemptCount','nuxt','254580PFrVTw','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','data','543488NxQsCU','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','_ws','55WGKasn','nodeModules','hasOwnProperty','create','_allowedToSend','port','getPrototypeOf','remix','stringify','close','join','ws/index.js','includes','2232606dIKBQf','_sendErrorMessage','forEach','_reconnectTimeout','_disposeWebsocket','onopen','warn','_WebSocketClass','_connectToHostNow','WebSocket','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','location','_socket','_connecting','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','method','defineProperty','prototype','getOwnPropertyNames','getWebSocketClass','7xcSfEk','onerror','32253zHXwjl','_WebSocket','split','readyState','onclose','then','unref','global','reload','call','onmessage','ws://','url','astro','path','_console_ninja_session','enumerable',[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"MacBook-Air-de-Usuario.local\\\",\\\"192.168.100.2\\\"],'process','hostname','node','send','\\\\x20browser','Unknown\\\\x20error','_triedToInstallGlobalErrorHandler','uncaughtException','addEventListener','getOwnPropertyDescriptor','vite','_maxConnectAttemptCount','_consoleNinjaAllowedToStart','next.js','_webSocketErrorDocsLink'];_0x12d3=function(){return _0x12219;};return _0x12d3();}function _0x3bce(_0x2fa15c,_0x3e4307){const _0x12d3a9=_0x12d3();return _0x3bce=function(_0x3bcef7,_0x1393a8){_0x3bcef7=_0x3bcef7-0x17a;let _0x2e9440=_0x12d3a9[_0x3bcef7];return _0x2e9440;},_0x3bce(_0x2fa15c,_0x3e4307);}(function(_0x4ca419,_0x45e042){const _0x1e8297=_0x3bce,_0x2f712a=_0x4ca419();while(!![]){try{const _0xf81370=-parseInt(_0x1e8297(0x1e0))/0x1+parseInt(_0x1e8297(0x1b7))/0x2+-parseInt(_0x1e8297(0x19c))/0x3+-parseInt(_0x1e8297(0x1b3))/0x4*(parseInt(_0x1e8297(0x1bd))/0x5)+parseInt(_0x1e8297(0x1ca))/0x6*(-parseInt(_0x1e8297(0x1de))/0x7)+-parseInt(_0x1e8297(0x1ba))/0x8*(parseInt(_0x1e8297(0x1a7))/0x9)+parseInt(_0x1e8297(0x1a9))/0xa;if(_0xf81370===_0x45e042)break;else _0x2f712a['push'](_0x2f712a['shift']());}catch(_0x6a1a9a){_0x2f712a['push'](_0x2f712a['shift']());}}}(_0x12d3,0x452e1));var k=Object[_0x392e3d(0x1c0)],m=Object[_0x392e3d(0x1da)],C=Object[_0x392e3d(0x194)],E=Object[_0x392e3d(0x1dc)],y=Object[_0x392e3d(0x1c3)],g=Object[_0x392e3d(0x1db)][_0x392e3d(0x1bf)],O=(_0x36c513,_0x15786e,_0x945814,_0x416379)=>{const _0xfa22a4=_0x392e3d;if(_0x15786e&&typeof _0x15786e=='object'||typeof _0x15786e=='function'){for(let _0x25c549 of E(_0x15786e))!g[_0xfa22a4(0x182)](_0x36c513,_0x25c549)&&_0x25c549!==_0x945814&&m(_0x36c513,_0x25c549,{'get':()=>_0x15786e[_0x25c549],'enumerable':!(_0x416379=C(_0x15786e,_0x25c549))||_0x416379[_0xfa22a4(0x189)]});}return _0x36c513;},T=(_0x48bb02,_0x12a28f,_0x5b5e6d)=>(_0x5b5e6d=_0x48bb02!=null?k(y(_0x48bb02)):{},O(_0x12a28f||!_0x48bb02||!_0x48bb02[_0x392e3d(0x19b)]?m(_0x5b5e6d,_0x392e3d(0x1a3),{'value':_0x48bb02,'enumerable':!0x0}):_0x5b5e6d,_0x48bb02)),_=class{constructor(_0x5ba2bc,_0x19c81f,_0x857c91,_0x51d417){const _0xb8faa9=_0x392e3d;this['global']=_0x5ba2bc,this['host']=_0x19c81f,this[_0xb8faa9(0x1c2)]=_0x857c91,this[_0xb8faa9(0x1be)]=_0x51d417,this[_0xb8faa9(0x1c1)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0xb8faa9(0x19e)]=!0x1,this[_0xb8faa9(0x1d7)]=!0x1,this['_inBrowser']=!!this[_0xb8faa9(0x180)][_0xb8faa9(0x1d3)],this[_0xb8faa9(0x1d1)]=null,this[_0xb8faa9(0x1b5)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0xb8faa9(0x199)]='https://tinyurl.com/37x8b79t',this[_0xb8faa9(0x1cb)]=(this[_0xb8faa9(0x1a4)]?_0xb8faa9(0x1b8):_0xb8faa9(0x1d4))+this['_webSocketErrorDocsLink'];}async['getWebSocketClass'](){const _0x39770c=_0x392e3d;if(this[_0x39770c(0x1d1)])return this['_WebSocketClass'];let _0x46854b;if(this[_0x39770c(0x1a4)])_0x46854b=this[_0x39770c(0x180)][_0x39770c(0x1d3)];else{if(this['global']['process']?.['_WebSocket'])_0x46854b=this['global'][_0x39770c(0x18b)]?.[_0x39770c(0x17a)];else try{let _0x3ca2d3=await import(_0x39770c(0x187));_0x46854b=(await import((await import(_0x39770c(0x185)))['pathToFileURL'](_0x3ca2d3[_0x39770c(0x1c7)](this[_0x39770c(0x1be)],_0x39770c(0x1c8)))[_0x39770c(0x1a8)]()))[_0x39770c(0x1a3)];}catch{try{_0x46854b=require(require(_0x39770c(0x187))[_0x39770c(0x1c7)](this[_0x39770c(0x1be)],'ws'));}catch{throw new Error(_0x39770c(0x1a0));}}}return this[_0x39770c(0x1d1)]=_0x46854b,_0x46854b;}[_0x392e3d(0x1d2)](){const _0x1d207f=_0x392e3d;this[_0x1d207f(0x1d7)]||this[_0x1d207f(0x19e)]||this['_connectAttemptCount']>=this[_0x1d207f(0x196)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x1d207f(0x1d7)]=!0x0,this[_0x1d207f(0x1b5)]++,this['_ws']=new Promise((_0x547903,_0x35432b)=>{const _0x304e7d=_0x1d207f;this[_0x304e7d(0x1dd)]()[_0x304e7d(0x17e)](_0x281473=>{const _0x577111=_0x304e7d;let _0x44d758=new _0x281473(_0x577111(0x184)+this[_0x577111(0x19d)]+':'+this['port']);_0x44d758['onerror']=()=>{const _0x529a3b=_0x577111;this[_0x529a3b(0x1c1)]=!0x1,this[_0x529a3b(0x1ce)](_0x44d758),this[_0x529a3b(0x1a5)](),_0x35432b(new Error(_0x529a3b(0x19a)));},_0x44d758[_0x577111(0x1cf)]=()=>{const _0x47335f=_0x577111;this[_0x47335f(0x1a4)]||_0x44d758[_0x47335f(0x1d6)]&&_0x44d758[_0x47335f(0x1d6)][_0x47335f(0x17f)]&&_0x44d758['_socket'][_0x47335f(0x17f)](),_0x547903(_0x44d758);},_0x44d758[_0x577111(0x17d)]=()=>{const _0x38df81=_0x577111;this['_allowedToConnectOnSend']=!0x0,this[_0x38df81(0x1ce)](_0x44d758),this[_0x38df81(0x1a5)]();},_0x44d758[_0x577111(0x183)]=_0x53ae78=>{const _0x57606a=_0x577111;try{_0x53ae78&&_0x53ae78[_0x57606a(0x1b9)]&&this['_inBrowser']&&JSON['parse'](_0x53ae78[_0x57606a(0x1b9)])[_0x57606a(0x1d9)]===_0x57606a(0x181)&&this['global']['location'][_0x57606a(0x181)]();}catch{}};})['then'](_0x52e9ed=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x52e9ed))[_0x304e7d(0x1a6)](_0x5e3533=>(this[_0x304e7d(0x19e)]=!0x1,this[_0x304e7d(0x1d7)]=!0x1,console[_0x304e7d(0x1d0)](_0x304e7d(0x1b1)+this[_0x304e7d(0x199)]),_0x35432b(new Error(_0x304e7d(0x1d8)+(_0x5e3533&&_0x5e3533[_0x304e7d(0x1aa)])))));}));}[_0x392e3d(0x1ce)](_0x8f37){const _0x5a4f2d=_0x392e3d;this[_0x5a4f2d(0x19e)]=!0x1,this[_0x5a4f2d(0x1d7)]=!0x1;try{_0x8f37[_0x5a4f2d(0x17d)]=null,_0x8f37[_0x5a4f2d(0x1df)]=null,_0x8f37[_0x5a4f2d(0x1cf)]=null;}catch{}try{_0x8f37[_0x5a4f2d(0x17c)]<0x2&&_0x8f37[_0x5a4f2d(0x1c6)]();}catch{}}[_0x392e3d(0x1a5)](){const _0x170958=_0x392e3d;clearTimeout(this[_0x170958(0x1cd)]),!(this[_0x170958(0x1b5)]>=this[_0x170958(0x196)])&&(this[_0x170958(0x1cd)]=setTimeout(()=>{const _0xb0b81e=_0x170958;this[_0xb0b81e(0x19e)]||this[_0xb0b81e(0x1d7)]||(this['_connectToHostNow'](),this['_ws']?.[_0xb0b81e(0x1a6)](()=>this[_0xb0b81e(0x1a5)]()));},0x1f4),this[_0x170958(0x1cd)][_0x170958(0x17f)]&&this[_0x170958(0x1cd)][_0x170958(0x17f)]());}async[_0x392e3d(0x18e)](_0x289d3f){const _0x64cd85=_0x392e3d;try{if(!this[_0x64cd85(0x1c1)])return;this[_0x64cd85(0x1ae)]&&this[_0x64cd85(0x1d2)](),(await this[_0x64cd85(0x1bc)])[_0x64cd85(0x18e)](JSON[_0x64cd85(0x1c5)](_0x289d3f));}catch(_0x448d0a){console[_0x64cd85(0x1d0)](this[_0x64cd85(0x1cb)]+':\\\\x20'+(_0x448d0a&&_0x448d0a[_0x64cd85(0x1aa)])),this[_0x64cd85(0x1c1)]=!0x1,this[_0x64cd85(0x1a5)]();}}};function u(_0x36019b,_0x2924b2,_0x1dd3d4,_0x4ef851,_0x137314){const _0x2f9031=_0x392e3d;let _0x3495ab=_0x1dd3d4[_0x2f9031(0x17b)](',')[_0x2f9031(0x19f)](_0x45dae4=>{const _0x935f1=_0x2f9031;try{_0x36019b[_0x935f1(0x188)]||((_0x137314===_0x935f1(0x198)||_0x137314===_0x935f1(0x1c4)||_0x137314===_0x935f1(0x186))&&(_0x137314+=_0x36019b[_0x935f1(0x18b)]?.[_0x935f1(0x1a2)]?.[_0x935f1(0x18d)]?_0x935f1(0x1ab):_0x935f1(0x18f)),_0x36019b[_0x935f1(0x188)]={'id':+new Date(),'tool':_0x137314});let _0x38916a=new _(_0x36019b,_0x2924b2,_0x45dae4,_0x4ef851);return _0x38916a[_0x935f1(0x18e)][_0x935f1(0x1b0)](_0x38916a);}catch(_0x87cd68){return console[_0x935f1(0x1d0)](_0x935f1(0x1bb),_0x87cd68&&_0x87cd68['message']),()=>{};}});return _0x1b6264=>_0x3495ab[_0x2f9031(0x1cc)](_0xd9500c=>_0xd9500c(_0x1b6264));}function f(_0x2756bf,_0xe7bbbe,_0x43a15f){const _0x138bc5=_0x392e3d;if(_0x2756bf[_0x138bc5(0x197)]!==void 0x0)return _0x2756bf[_0x138bc5(0x197)];let _0x4174ae=_0x2756bf['process']?.[_0x138bc5(0x1a2)]?.[_0x138bc5(0x18d)];return _0x4174ae&&_0x43a15f===_0x138bc5(0x1b6)?_0x2756bf[_0x138bc5(0x197)]=!0x1:_0x2756bf[_0x138bc5(0x197)]=_0x4174ae||!_0xe7bbbe||_0x2756bf[_0x138bc5(0x1d5)]?.[_0x138bc5(0x18c)]&&_0xe7bbbe[_0x138bc5(0x1c9)](_0x2756bf[_0x138bc5(0x1d5)][_0x138bc5(0x18c)]),_0x2756bf[_0x138bc5(0x197)];}((_0xc134f1,_0x254587,_0x1ae575,_0x1251f3,_0x182e16,_0x47d40a,_0x3bbeff,_0x27db82)=>{const _0x4cb6c9=_0x392e3d;if(!f(_0xc134f1,_0x27db82,_0x47d40a)){_0xc134f1[_0x4cb6c9(0x191)]=!0x0;return;}if(_0xc134f1[_0x4cb6c9(0x191)])return;_0xc134f1['_triedToInstallGlobalErrorHandler']=!0x0;let _0x39bff2=u(_0xc134f1,_0x254587,_0x1ae575,_0x1251f3,_0x47d40a),_0x1f691b=_0xc134f1[_0x4cb6c9(0x188)],_0x35570c=_0x5605ab=>{const _0x5eae39=_0x4cb6c9;if(_0x5605ab){let _0xd5cab0=_0x5605ab[_0x5eae39(0x1aa)]||'',_0x4736ec=_0x5605ab[_0x5eae39(0x1b4)]||'',_0x59ca7a;!_0xd5cab0&&!_0x4736ec&&(_0xd5cab0=typeof _0x5605ab=='string'?_0x5605ab:_0x5eae39(0x190),_0x4736ec=new Error()['stack'],_0x59ca7a=!0x0),_0x39bff2({'method':_0x5eae39(0x1af),'version':_0x182e16,'args':[{'ts':Date[_0x5eae39(0x1b2)](),'session':_0x1f691b,'message':_0xd5cab0,'stack':_0x4736ec,'generatedStack':_0x59ca7a}]});}};if(_0xc134f1[_0x4cb6c9(0x1ac)][_0x4cb6c9(0x1af)]=(_0x4144d0=>(..._0x91055e)=>(_0x35570c(_0x91055e[0x0]),_0x4144d0(..._0x91055e)))(_0xc134f1[_0x4cb6c9(0x1ac)]['error']),_0xc134f1['process']&&_0xc134f1[_0x4cb6c9(0x18b)]['on'])_0xc134f1[_0x4cb6c9(0x18b)]['on'](_0x4cb6c9(0x192),_0x35570c),_0xc134f1[_0x4cb6c9(0x18b)]['on']('unhandledRejection',_0x35570c);else{if(_0xc134f1[_0x4cb6c9(0x193)]){let _0x40820b=_0x2314ac=>{const _0x3e52e1=_0x4cb6c9;let _0xe1f789=_0x2314ac&&(_0x2314ac[_0x3e52e1(0x1af)]||_0x2314ac[_0x3e52e1(0x1ad)]);_0x35570c(_0xe1f789);};_0xc134f1[_0x4cb6c9(0x193)](_0x4cb6c9(0x1af),_0x40820b),_0xc134f1['addEventListener']('unhandledrejection',_0x40820b);}}_0x39bff2({'method':_0x4cb6c9(0x1a1),'version':_0x182e16,'args':[_0x1f691b]});})(globalThis,'127.0.0.1','49918',\\\"/Users/usuario/.vscode/extensions/wallabyjs.console-ninja-0.0.215/node_modules\\\",'1.0.0',_0x392e3d(0x195),'1693962470119',_0x392e3d(0x18a));\");}catch(e){}</script>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\"\n      rel=\"stylesheet\"\n    />\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "pe0es5"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
