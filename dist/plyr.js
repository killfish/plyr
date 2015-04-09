!function(e){"use strict";function t(){var e=["<div class='player-controls'>","<div class='player-progress'>","<label for='seek{id}' class='sr-only'>Seek</label>","<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>","<progress class='player-progress-played' max='100' value='0'>","<span>0</span>% played","</progress>","<progress class='player-progress-buffer' max='100' value='0'>","<span>0</span>% buffered","</progress>","</div>","<span class='player-controls-left'>"];return a(T.controls,"restart")&&e.push("<button type='button' data-player='restart'>","<svg><use xlink:href='#icon-restart'></use></svg>","<span class='sr-only'>Restart</span>","</button>"),a(T.controls,"rewind")&&e.push("<button type='button' data-player='rewind'>","<svg><use xlink:href='#icon-rewind'></use></svg>","<span class='sr-only'>Rewind {seektime} secs</span>","</button>"),a(T.controls,"play")&&e.push("<button type='button' data-player='play'>","<svg><use xlink:href='#icon-play'></use></svg>","<span class='sr-only'>Play</span>","</button>","<button type='button' data-player='pause'>","<svg><use xlink:href='#icon-pause'></use></svg>","<span class='sr-only'>Pause</span>","</button>"),a(T.controls,"fast-forward")&&e.push("<button type='button' data-player='fast-forward'>","<svg><use xlink:href='#icon-fast-forward'></use></svg>","<span class='sr-only'>Forward {seektime} secs</span>","</button>"),a(T.controls,"current-time")&&e.push("<span class='player-time'>","<span class='sr-only'>Current time</span>","<span class='player-current-time'>00:00</span>","</span>"),a(T.controls,"duration")&&e.push("<span class='player-time'>","<span class='sr-only'>Duration</span>","<span class='player-duration'>00:00</span>","</span>"),e.push("</span>","<span class='player-controls-right'>"),a(T.controls,"mute")&&e.push("<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>","<label id='mute{id}' for='mute{id}'>","<svg class='icon-muted'><use xlink:href='#icon-muted'></use></svg>","<svg><use xlink:href='#icon-volume'></use></svg>","<span class='sr-only'>Toggle Mute</span>","</label>"),a(T.controls,"volume")&&e.push("<label for='volume{id}' class='sr-only'>Volume</label>","<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>"),a(T.controls,"captions")&&e.push("<input class='sr-only' id='captions{id}' type='checkbox' data-player='captions'>","<label for='captions{id}'>","<svg class='icon-captions-on'><use xlink:href='#icon-captions-on'></use></svg>","<svg><use xlink:href='#icon-captions-off'></use></svg>","<span class='sr-only'>Toggle Captions</span>","</label>"),a(T.controls,"fullscreen")&&e.push("<button type='button' data-player='fullscreen'>","<svg class='icon-exit-fullscreen'><use xlink:href='#icon-exit-fullscreen'></use></svg>","<svg><use xlink:href='#icon-enter-fullscreen'></use></svg>","<span class='sr-only'>Toggle Fullscreen</span>","</button>"),e.push("</span>","</div>"),e.join("")}function n(e,t){T.debug&&window.console&&console[t?"error":"log"](e)}function r(){var e,t,n,r=navigator.userAgent,s=navigator.appName,a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",a="11;"):-1!==(t=r.indexOf("MSIE"))?(s="IE",a=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(s="Chrome",a=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(s="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(s="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(s=r.substring(e,t),a=r.substring(t+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!==(n=a.indexOf(" "))&&(a=a.substring(0,n)),o=parseInt(""+a,10),isNaN(o)&&(a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:s,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function s(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function a(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function o(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,s=e[n],a=s.parentNode,o=s.nextSibling;r.appendChild(s),o?a.insertBefore(r,o):a.appendChild(r)}}function l(e){e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function u(e,t){for(var n in t)e.setAttribute(n,t[n])}function p(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function d(e,t,n,r){if(t=t.split(" "),e instanceof NodeList)for(var s=0;s<e.length;s++)e[s]instanceof Node&&d(e[s],arguments[1],arguments[2],arguments[3]);else for(var a=0;a<t.length;a++)e[r?"addEventListener":"removeEventListener"](t[a],n,!1)}function f(e,t,n){e&&d(e,t,n,!0)}function m(e,t,n){e&&d(e,t,n,!1)}function y(e,t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function v(e){return e.keyCode&&13!=e.keyCode?!0:(e.target.checked=!e.target.checked,y(e.target,"change"),void 0)}function g(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function b(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},b(e[n],t[n])):e[n]=t[n];return e}function h(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return"webkit"===e.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(e.supportsFullScreen=!1),e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=document),this.prefix){case"":return document.fullscreenElement==e;case"moz":return document.mozFullScreenElement==e;default:return document[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?e.ALLOW_KEYBOARD_INPUT:null)},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function k(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function x(a){function d(e){if(!st.usingTextTracks&&"video"===st.type&&st.supported.full){for(st.subcount=0,e="number"==typeof e?e:st.media.currentTime;F(st.captions[st.subcount][0])<e.toFixed(1);)if(st.subcount++,st.subcount>st.captions.length-1){st.subcount=st.captions.length-1;break}st.media.currentTime.toFixed(1)>=x(st.captions[st.subcount][0])&&st.media.currentTime.toFixed(1)<=F(st.captions[st.subcount][0])?(st.currentCaption=st.captions[st.subcount][1],st.captionsContainer.innerHTML=st.currentCaption):st.captionsContainer.innerHTML=""}}function b(){st.buttons.captions&&(p(st.container,T.classes.captions.enabled,!0),T.captions.defaultActive&&(p(st.container,T.classes.captions.active,!0),st.buttons.captions.checked=!0))}function x(e){var t=[];return t=e.split(" --> "),S(t[0])}function F(e){var t=[];return t=e.split(" --> "),S(t[1])}function S(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function C(e){return st.container.querySelectorAll(e)}function E(e){return C(e)[0]}function A(){try{return window.self!==window.top}catch(e){return!0}}function N(){var e=T.html;if(n("Injecting custom controls."),e||(e=t()),e=o(e,"{seektime}",T.seekTime),e=o(e,"{id}",Math.floor(1e4*Math.random())),st.container.insertAdjacentHTML("beforeend",e),T.tooltips)for(var r=C(T.selectors.labels),s=r.length-1;s>=0;s--){var a=r[s];p(a,T.classes.hidden,!1),p(a,T.classes.tooltip,!0)}}function P(){try{return st.controls=E(T.selectors.controls),st.buttons={},st.buttons.seek=E(T.selectors.buttons.seek),st.buttons.play=E(T.selectors.buttons.play),st.buttons.pause=E(T.selectors.buttons.pause),st.buttons.restart=E(T.selectors.buttons.restart),st.buttons.rewind=E(T.selectors.buttons.rewind),st.buttons.forward=E(T.selectors.buttons.forward),st.buttons.fullscreen=E(T.selectors.buttons.fullscreen),st.buttons.mute=E(T.selectors.buttons.mute),st.buttons.captions=E(T.selectors.buttons.captions),st.checkboxes=C("[type='checkbox']"),st.progress={},st.progress.container=E(T.selectors.progress.container),st.progress.buffer={},st.progress.buffer.bar=E(T.selectors.progress.buffer),st.progress.buffer.text=st.progress.buffer.bar&&st.progress.buffer.bar.getElementsByTagName("span")[0],st.progress.played={},st.progress.played.bar=E(T.selectors.progress.played),st.progress.played.text=st.progress.played.bar&&st.progress.played.bar.getElementsByTagName("span")[0],st.volume=E(T.selectors.buttons.volume),st.duration=E(T.selectors.duration),st.currentTime=E(T.selectors.currentTime),st.seekTime=C(T.selectors.seekTime),!0}catch(e){return n("It looks like there's a problem with your controls html. Bailing.",!0),st.media.setAttribute("controls",""),!1}}function I(){if(st.buttons.play){var e=st.buttons.play.innerText||"Play";"undefined"!=typeof T.title&&T.title.length&&(e+=", "+T.title),st.buttons.play.setAttribute("aria-label",e)}}function M(){if(!st.media)return n("No audio or video element found!",!0),!1;if(st.supported.full&&(st.media.removeAttribute("controls"),p(st.container,T.classes[st.type],!0),p(st.container,T.classes.stopped,null===st.media.getAttribute("autoplay")),st.browser.ios&&p(st.container,"ios",!0),"video"===st.type)){var e=document.createElement("div");e.setAttribute("class",T.classes.videoWrapper),i(st.media,e),st.videoContainer=e}null!==st.media.getAttribute("autoplay")&&q()}function L(){if("video"===st.type){st.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+T.selectors.captions.replace(".","")+"'></div>"),st.captionsContainer=E(T.selectors.captions),st.usingTextTracks=!1,st.media.textTracks&&(st.usingTextTracks=!0);for(var e,t="",r=st.media.childNodes,s=0;s<r.length;s++)"track"===r[s].nodeName.toLowerCase()&&(e=r[s].getAttribute("kind"),"captions"===e&&(t=r[s].getAttribute("src")));if(st.captionExists=!0,""===t?(st.captionExists=!1,n("No caption track found.")):n("Caption track found; URI: "+t),st.captionExists){for(var a=st.media.textTracks,o=0;o<a.length;o++)a[o].mode="hidden";if(b(st),("IE"===st.browser.name&&10===st.browser.version||"IE"===st.browser.name&&11===st.browser.version||"Firefox"===st.browser.name&&st.browser.version>=31||"Safari"===st.browser.name&&st.browser.version>=7)&&(n("Detected IE 10/11 or Firefox 31+ or Safari 7+."),st.usingTextTracks=!1),st.usingTextTracks){n("TextTracks supported.");for(var i=0;i<a.length;i++){var l=a[i];"captions"===l.kind&&f(l,"cuechange",function(){st.captionsContainer.innerHTML="",this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&st.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML())})}}else if(n("TextTracks not supported so rendering captions manually."),st.currentCaption="",st.captions=[],""!==t){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status){var e,t=[],r=c.responseText;t=r.split("\n\n");for(var s=0;s<t.length;s++)e=t[s],st.captions[s]=[],st.captions[s]=e.split("\n");st.captions.shift(),n("Successfully loaded the caption file via AJAX.")}else n("There was a problem loading the caption file via AJAX.",!0)},c.open("get",t,!0),c.send()}if("Safari"===st.browser.name&&st.browser.version>=7){n("Safari 7+ detected; removing track from DOM."),a=st.media.getElementsByTagName("track");for(var u=0;u<a.length;u++)st.media.removeChild(a[u])}}else p(st.container,T.classes.captions.enabled)}}function O(){if("video"===st.type&&T.fullscreen.enabled){var e=w.supportsFullScreen;e||T.fullscreen.fallback&&!A()?(n((e?"Native":"Fallback")+" fullscreen enabled."),p(st.container,T.classes.fullscreen.enabled,!0)):n("Fullscreen not supported and fallback disabled."),T.fullscreen.hideControls&&p(st.container,T.classes.fullscreen.hideControls,!0)}}function q(){st.media.play()}function H(){st.media.pause()}function V(e){"number"!=typeof e&&(e=T.seekTime),j(st.media.currentTime-e)}function R(e){"number"!=typeof e&&(e=T.seekTime),j(st.media.currentTime+e)}function j(e){var t=0;"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*st.media.duration),0>t?t=0:t>st.media.duration&&(t=st.media.duration);try{st.media.currentTime=t.toFixed(1)}catch(r){}n("Seeking to "+st.media.currentTime+" seconds"),d(t)}function B(){p(st.container,T.classes.playing,!st.media.paused),p(st.container,T.classes.stopped,st.media.paused)}function D(e){var t=w.supportsFullScreen;e&&e.type===w.fullScreenEventName?st.isFullscreen=w.isFullScreen(st.container):t?(w.isFullScreen(st.container)?w.cancelFullScreen():w.requestFullScreen(st.container),st.isFullscreen=w.isFullScreen(st.container)):(st.isFullscreen=!st.isFullscreen,st.isFullscreen?(f(document,"keyup",W),document.body.style.overflow="hidden"):(m(document,"keyup",W),document.body.style.overflow="")),p(st.container,T.classes.fullscreen.active,st.isFullscreen),st.isFullscreen&&p(st.controls,T.classes.hover,!1)}function W(e){27===(e.which||e.charCode||e.keyCode)&&st.isFullscreen&&D()}function z(e){st.volume&&("undefined"==typeof e&&(e=T.storage.enabled&&k().supported?window.localStorage[T.storage.key]||T.volume:T.volume),e>10&&(e=10),st.supported.full&&(st.volume.value=e),st.media.volume=parseFloat(e/10),_(),T.storage.enabled&&k().supported&&window.localStorage.setItem(T.storage.key,e))}function U(e){"undefined"==typeof e&&(e=!st.media.muted),st.supported.full&&(st.buttons.mute.checked=e),st.media.muted=e,_()}function X(e){st.supported.full&&st.buttons.captions&&("undefined"==typeof e&&(e=-1===st.container.className.indexOf(T.classes.captions.active),st.buttons.captions.checked=e),p(st.container,T.classes.captions.active,e))}function _(){p(st.container,T.classes.muted,0===st.media.volume||st.media.muted)}function J(e){var t="waiting"===e.type;clearTimeout(st.loadingTimer),st.loadingTimer=setTimeout(function(){p(st.container,T.classes.loading,t)},t?250:0)}function $(e){var t=st.progress.played.bar,n=st.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=g(st.media.currentTime,st.media.duration),"timeupdate"==e.type&&st.buttons.seek&&(st.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=st.progress.buffer.bar,n=st.progress.buffer.text,r=function(){var e=st.media.buffered;return e.length?g(e.end(0),st.media.duration):0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function K(e,t){if(t){st.secs=parseInt(e%60),st.mins=parseInt(e/60%60),st.hours=parseInt(e/60/60%60);var n=parseInt(st.media.duration/60/60%60)>0;st.secs=("0"+st.secs).slice(-2),st.mins=("0"+st.mins).slice(-2),t.innerHTML=(n?st.hours+":":"")+st.mins+":"+st.secs}}function Y(){var e=st.media.duration||0;!st.duration&&T.displayDuration&&st.media.paused&&K(e,st.currentTime),st.duration&&K(e,st.duration)}function G(e){K(st.media.currentTime,st.currentTime),$(e)}function Q(){for(var e=st.media.querySelectorAll("source"),t=e.length-1;t>=0;t--)l(e[t]);st.media.removeAttribute("src")}function Z(e){if(e.src){var t=document.createElement("source");u(t,e),c(st.media,t)}}function et(e){if(H(),j(),Q(),"string"==typeof e)st.media.setAttribute("src",e);else if(e.constructor===Array)for(var t in e)Z(e[t]);st.supported.full&&(G(),B()),st.media.load(),null!==st.media.getAttribute("autoplay")&&q()}function tt(e){"video"===st.type&&st.media.setAttribute("poster",e)}function nt(){var e="IE"==st.browser.name?"change":"input";f(st.buttons.play,"click",function(){q(),setTimeout(function(){st.buttons.pause.focus()},100)}),f(st.buttons.pause,"click",function(){H(),setTimeout(function(){st.buttons.play.focus()},100)}),f(st.buttons.restart,"click",j),f(st.buttons.rewind,"click",V),f(st.buttons.forward,"click",R),f(st.buttons.seek,e,j),f(st.volume,e,function(){z(this.value)}),f(st.buttons.mute,"change",function(){U(this.checked)}),f(st.buttons.fullscreen,"click",D),w.supportsFullScreen&&f(document,w.fullScreenEventName,D),f(st.media,"timeupdate seeking",G),f(st.media,"timeupdate",d),f(st.media,"loadedmetadata",Y),f(st.buttons.captions,"change",function(){X(this.checked)}),f(st.media,"ended",function(){"video"===st.type&&(st.captionsContainer.innerHTML=""),B()}),f(st.media,"progress",$),f(st.media,"playing",$),f(st.media,"volumechange",_),f(st.media,"play pause",B),f(st.media,"waiting canplay seeked",J),f(st.checkboxes,"keyup",v),"video"===st.type&&T.click&&f(st.videoContainer,"click",function(){st.media.paused?y(st.buttons.play,"click"):st.media.ended?(j(),y(st.buttons.play,"click")):y(st.buttons.pause,"click")}),T.fullscreen.hideControls&&f(st.controls,"mouseenter mouseleave",function(e){p(st.controls,T.classes.hover,"mouseenter"===e.type)})}function rt(){if(w=h(),st.browser=r(),st.media=st.container.querySelectorAll("audio, video")[0],st.type=st.media.tagName.toLowerCase(),st.supported=e.supported(st.type),!st.supported.basic)return!1;if(n(st.browser.name+" "+st.browser.version),M(),st.supported.full){if(N(),!P())return!1;T.displayDuration&&Y(),I(),L(),z(),O(),nt()}return!0}var st=this;return st.container=a,rt()?{media:st.media,play:q,pause:H,restart:j,rewind:V,forward:R,seek:j,source:et,poster:tt,setVolume:z,toggleMute:U,toggleCaptions:X,toggleFullscreen:D,isFullscreen:function(){return st.isFullscreen||!1},support:function(e){return s(st,e)}}:{}}var w,T,F={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:"[data-player='seek']",play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",currentTime:".player-current-time",duration:".player-duration"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",hover:"hover",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active",hideControls:"fullscreen-hide-controls"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0},storage:{enabled:!0,key:"plyr_volume"},controls:["restart","rewind","play","fast-forward","current-time","duration","mute","volume","captions","fullscreen"],onSetup:function(){}};e.supported=function(e){var t,n,s=r(),a="IE"===s.name&&s.version<=9,o=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement("audio").canPlayType,l=!!document.createElement("video").canPlayType;switch(e){case"video":t=l,n=t&&!a&&!o;break;case"audio":t=i,n=t&&!a;break;default:t=i&&l,n=t&&!a}return{basic:t,full:n}},e.setup=function(t){if(T=b(F,t),!T.enabled||!e.supported().basic)return!1;for(var n=document.querySelectorAll(T.selectors.container),r=[],s=n.length-1;s>=0;s--){var a=n[s];if("undefined"==typeof a.plyr){var o=new x(a);a.plyr=Object.keys(o).length?o:!1,T.onSetup.apply(a.plyr)}r.push(a.plyr)}return r}}(this.plyr=this.plyr||{});