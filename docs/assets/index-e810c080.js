(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const h of r)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const h={};return r.integrity&&(h.integrity=r.integrity),r.referrerPolicy&&(h.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?h.credentials="include":r.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(r){if(r.ep)return;r.ep=!0;const h=e(r);fetch(r.href,h)}})();/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/const zt=(f,t)=>{for(let e in t)f[e]=t[e];return f},D=(f,t)=>Array.from(f.querySelectorAll(t)),ne=(f,t,e)=>{e?f.classList.add(t):f.classList.remove(t)},It=f=>{if(typeof f=="string"){if(f==="null")return null;if(f==="true")return!0;if(f==="false")return!1;if(f.match(/^-?[\d\.]+$/))return parseFloat(f)}return f},Lt=(f,t)=>{f.style.transform=t},Vt=(f,t)=>{let e=f.matches||f.matchesSelector||f.msMatchesSelector;return!(!e||!e.call(f,t))},st=(f,t)=>{if(typeof f.closest=="function")return f.closest(t);for(;f;){if(Vt(f,t))return f;f=f.parentNode}return null},rn=(f,t,e,s="")=>{let r=f.querySelectorAll("."+e);for(let d=0;d<r.length;d++){let g=r[d];if(g.parentNode===f)return g}let h=document.createElement(t);return h.className=e,h.innerHTML=s,f.appendChild(h),h},ae=f=>{let t=document.createElement("style");return t.type="text/css",f&&f.length>0&&(t.styleSheet?t.styleSheet.cssText=f:t.appendChild(document.createTextNode(f))),document.head.appendChild(t),t},Me=()=>{let f={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{f[t.split("=").shift()]=t.split("=").pop()});for(let t in f){let e=f[t];f[t]=It(unescape(e))}return f.dependencies!==void 0&&delete f.dependencies,f},on=(f,t=0)=>{if(f){let e,s=f.style.height;return f.style.height="0px",f.parentNode.style.height="auto",e=t-f.parentNode.offsetHeight,f.style.height=s+"px",f.parentNode.style.removeProperty("height"),e}return t},ln={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},He=navigator.userAgent,Dt=/(iphone|ipod|ipad|android)/gi.test(He)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fe=/android/gi.test(He);var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});var Ie=Object.assign||function(f){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(f[s]=e[s])}return f},dn=Ue.default=function(f){if(f){var t=function(b){return[].slice.call(b)},e=0,s=1,r=2,h=3,d=[],g=null,u="requestAnimationFrame"in f?function(){f.cancelAnimationFrame(g),g=f.requestAnimationFrame(function(){return M(d.filter(function(b){return b.dirty&&b.active}))})}:function(){},z=function(b){return function(){d.forEach(function(x){return x.dirty=b}),u()}},M=function(b){b.filter(function(E){return!E.styleComputed}).forEach(function(E){E.styleComputed=c(E)}),b.filter(U).forEach(Z);var x=b.filter(I);x.forEach(C),x.forEach(function(E){Z(E),A(E)}),x.forEach(ut)},A=function(b){return b.dirty=e},C=function(b){b.availableWidth=b.element.parentNode.clientWidth,b.currentWidth=b.element.scrollWidth,b.previousFontSize=b.currentFontSize,b.currentFontSize=Math.min(Math.max(b.minSize,b.availableWidth/b.currentWidth*b.previousFontSize),b.maxSize),b.whiteSpace=b.multiLine&&b.currentFontSize===b.minSize?"normal":"nowrap"},I=function(b){return b.dirty!==r||b.dirty===r&&b.element.parentNode.clientWidth!==b.availableWidth},c=function(b){var x=f.getComputedStyle(b.element,null);b.currentFontSize=parseFloat(x.getPropertyValue("font-size")),b.display=x.getPropertyValue("display"),b.whiteSpace=x.getPropertyValue("white-space")},U=function(b){var x=!1;return!b.preStyleTestCompleted&&(/inline-/.test(b.display)||(x=!0,b.display="inline-block"),b.whiteSpace!=="nowrap"&&(x=!0,b.whiteSpace="nowrap"),b.preStyleTestCompleted=!0,x)},Z=function(b){b.element.style.whiteSpace=b.whiteSpace,b.element.style.display=b.display,b.element.style.fontSize=b.currentFontSize+"px"},ut=function(b){b.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:b.previousFontSize,newValue:b.currentFontSize,scaleFactor:b.currentFontSize/b.previousFontSize}}))},dt=function(b,x){return function(){b.dirty=x,b.active&&u()}},it=function(b){return function(){d=d.filter(function(x){return x.element!==b.element}),b.observeMutations&&b.observer.disconnect(),b.element.style.whiteSpace=b.originalStyle.whiteSpace,b.element.style.display=b.originalStyle.display,b.element.style.fontSize=b.originalStyle.fontSize}},X=function(b){return function(){b.active||(b.active=!0,u())}},Y=function(b){return function(){return b.active=!1}},B=function(b){b.observeMutations&&(b.observer=new MutationObserver(dt(b,s)),b.observer.observe(b.element,b.observeMutations))},Q={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in f&&{subtree:!0,childList:!0,characterData:!0}},j=null,_=function(){f.clearTimeout(j),j=f.setTimeout(z(r),nt.observeWindowDelay)},H=["resize","orientationchange"];return Object.defineProperty(nt,"observeWindow",{set:function(b){var x=(b?"add":"remove")+"EventListener";H.forEach(function(E){f[x](E,_)})}}),nt.observeWindow=!0,nt.observeWindowDelay=100,nt.fitAll=z(h),nt}function W(b,x){var E=Ie({},Q,x),ot=b.map(function(at){var J=Ie({},E,{element:at,active:!0});return function(rt){rt.originalStyle={whiteSpace:rt.element.style.whiteSpace,display:rt.element.style.display,fontSize:rt.element.style.fontSize},B(rt),rt.newbie=!0,rt.dirty=!0,d.push(rt)}(J),{element:at,fit:dt(J,h),unfreeze:X(J),freeze:Y(J),unsubscribe:it(J)}});return u(),ot}function nt(b){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof b=="string"?W(t(document.querySelectorAll(b)),x):W([b],x)[0]}}(typeof window>"u"?null:window);class cn{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,D(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))}),D(t,"video, audio").forEach(r=>{let h=0;D(r,"source[data-src]").forEach(d=>{d.setAttribute("src",d.getAttribute("data-src")),d.removeAttribute("data-src"),d.setAttribute("data-lazy-loaded",""),h+=1}),Dt&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),h>0&&r.load()});let s=t.slideBackgroundElement;if(s){s.style.display="block";let r=t.slideBackgroundContentElement,h=t.getAttribute("data-background-iframe");if(s.hasAttribute("data-loaded")===!1){s.setAttribute("data-loaded","true");let g=t.getAttribute("data-background-image"),u=t.getAttribute("data-background-video"),z=t.hasAttribute("data-background-video-loop"),M=t.hasAttribute("data-background-video-muted");if(g)/^data:/.test(g.trim())?r.style.backgroundImage=`url(${g.trim()})`:r.style.backgroundImage=g.split(",").map(A=>`url(${((C="")=>encodeURI(C).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,I=>`%${I.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(A.trim()))})`).join(",");else if(u&&!this.Reveal.isSpeakerNotes()){let A=document.createElement("video");z&&A.setAttribute("loop",""),M&&(A.muted=!0),Dt&&(A.muted=!0,A.setAttribute("playsinline","")),u.split(",").forEach(C=>{let I=((c="")=>ln[c.split(".").pop()])(C);A.innerHTML+=I?`<source src="${C}" type="${I}">`:`<source src="${C}">`}),r.appendChild(A)}else if(h&&e.excludeIframes!==!0){let A=document.createElement("iframe");A.setAttribute("allowfullscreen",""),A.setAttribute("mozallowfullscreen",""),A.setAttribute("webkitallowfullscreen",""),A.setAttribute("allow","autoplay"),A.setAttribute("data-src",h),A.style.width="100%",A.style.height="100%",A.style.maxHeight="100%",A.style.maxWidth="100%",r.appendChild(A)}}let d=r.querySelector("iframe[data-src]");d&&this.shouldPreload(s)&&!/autoplay=(1|true|yes)/gi.test(h)&&d.getAttribute("src")!==h&&d.setAttribute("src",h)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{dn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",D(e,"iframe[src]").forEach(s=>{s.removeAttribute("src")})),D(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")}),D(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(s=>{s.setAttribute("data-src",s.getAttribute("src")),s.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,s,r)=>{D(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+s+'"]').forEach(h=>{let d=h.getAttribute(e);d&&d.indexOf(r)===-1&&h.setAttribute(e,d+(/\?/.test(d)?"&":"?")+r)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(D(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),D(t,"video, audio").forEach(e=>{if(st(e,".fragment")&&!st(e,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!st(e,".slide-background")),s&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Dt){let r=e.play();r&&typeof r.catch=="function"&&e.controls===!1&&r.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),D(t,"iframe[src]").forEach(e=>{st(e,".fragment")&&!st(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),D(t,"iframe[data-src]").forEach(e=>{st(e,".fragment")&&!st(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!st(t.target,"html"),s=!!st(t.target,".present");e&&s&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let s=!!st(t.target,"html"),r=!!st(t.target,".present");if(s&&r){let h=this.Reveal.getConfig().autoPlayMedia;typeof h!="boolean"&&(h=e.hasAttribute("data-autoplay")||!!st(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&h?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=zt({unloadIframes:!0},e),t&&t.parentNode&&(D(t,"video, audio").forEach(s=>{s.hasAttribute("data-ignore")||typeof s.pause!="function"||(s.setAttribute("data-paused-by-reveal",""),s.pause())}),D(t,"iframe").forEach(s=>{s.contentWindow&&s.contentWindow.postMessage("slide:stop","*"),s.removeEventListener("load",this.startEmbeddedIframe)}),D(t,'iframe[src*="youtube.com/embed/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),D(t,'iframe[src*="player.vimeo.com/"]').forEach(s=>{!s.hasAttribute("data-ignore")&&s.contentWindow&&typeof s.contentWindow.postMessage=="function"&&s.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&D(t,"iframe[data-src]").forEach(s=>{s.setAttribute("src","about:blank"),s.removeAttribute("src")}))}}class un{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let s="none";t.slideNumber&&!this.Reveal.isPrintingPDF()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(s="block"),this.element.style.display=s}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,s=this.Reveal.getConfig(),r="h.v";if(typeof s.slideNumber=="function")e=s.slideNumber(t);else{typeof s.slideNumber=="string"&&(r=s.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let d=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+d);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+d,"/",this.Reveal.getTotalSlides());break;default:let g=this.Reveal.getIndices(t);e.push(g.h+d);let u=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(u,g.v+1)}}let h="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],h)}formatNumber(t,e,s,r="#"+this.Reveal.location.getHash()){return typeof s!="number"||isNaN(s)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${s}</span>
					</a>`}destroy(){this.element.remove()}}class hn{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const t=this.jumpInput.value.trim("");let e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0});return!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),s=this.Reveal.getSlides().find(r=>e.test(r.innerText));return s?this.Reveal.getIndices(s):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const ie=f=>{let t=f.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=f.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let s=f.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(s)return{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10)};let r=f.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};class pn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);D(t,"section").forEach(s=>{this.createBackground(s,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let s=document.createElement("div");s.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",s.appendChild(r),e.appendChild(s),t.slideBackgroundElement=s,t.slideBackgroundContentElement=r,this.sync(t),s}sync(t){const e=t.slideBackgroundElement,s=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},h=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",s.style.backgroundSize="",s.style.backgroundRepeat="",s.style.backgroundPosition="",s.style.backgroundImage="",s.style.opacity="",s.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),h&&e.setAttribute("data-preload",""),r.backgroundSize&&(s.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(s.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(s.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(s.style.opacity=r.backgroundOpacity);let d=r.backgroundColor;if(!d||!ie(d)){let u=window.getComputedStyle(e);u&&u.backgroundColor&&(d=u.backgroundColor)}if(d){const u=ie(d);u&&u.a!==0&&(typeof(g=d)=="string"&&(g=ie(g)),(g?(299*g.r+587*g.g+114*g.b)/1e3:null)<128?t.classList.add("has-dark-background"):t.classList.add("has-light-background"))}var g}update(t=!1){let e=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),r=null,h=this.Reveal.getConfig().rtl?"future":"past",d=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((g,u)=>{g.classList.remove("past","present","future"),u<s.h?g.classList.add(h):u>s.h?g.classList.add(d):(g.classList.add("present"),r=g),(t||u===s.h)&&D(g,".slide-background").forEach((z,M)=>{z.classList.remove("past","present","future"),M<s.v?z.classList.add("past"):M>s.v?z.classList.add("future"):(z.classList.add("present"),u===s.h&&(r=z))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r){this.Reveal.slideContent.startEmbeddedContent(r);let g=r.querySelector(".slide-background-content");if(g){let M=g.style.backgroundImage||"";/\.gif/i.test(M)&&(g.style.backgroundImage="",window.getComputedStyle(g).opacity,g.style.backgroundImage=M)}let u=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,z=r.getAttribute("data-background-hash");z&&z===u&&r!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=r}e&&["has-light-background","has-dark-background"].forEach(g=>{e.classList.contains(g)?this.Reveal.getRevealElement().classList.add(g):this.Reveal.getRevealElement().classList.remove(g)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,s,r=this.Reveal.getHorizontalSlides(),h=this.Reveal.getVerticalSlides(),d=this.element.style.backgroundSize.split(" ");d.length===1?e=s=parseInt(d[0],10):(e=parseInt(d[0],10),s=parseInt(d[1],10));let g,u,z=this.element.offsetWidth,M=r.length;g=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:M>1?(e-z)/(M-1):0,u=g*t.h*-1;let A,C,I=this.element.offsetHeight,c=h.length;A=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(s-I)/(c-1),C=c>0?A*t.v:0,this.element.style.backgroundPosition=u+"px "+-C+"px"}}destroy(){this.element.remove()}}const Nt=".slides section",Pt=".slides>section",ze=".slides>section.present>section",gn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,De=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let _e=0;class mn{constructor(t){this.Reveal=t}run(t,e){this.reset();let s=this.Reveal.getSlides(),r=s.indexOf(e),h=s.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>h?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||ae();let d=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",d.slideDirection=r>h?"forward":"backward";let g=t.style.display==="none";g&&(t.style.display=this.Reveal.getConfig().display);let u=this.getAutoAnimatableElements(t,e).map(z=>this.autoAnimateElements(z.from,z.to,z.options||{},d,_e++));if(g&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let z=.8*d.duration,M=.2*d.duration;this.getUnmatchedAutoAnimateElements(e).forEach(A=>{let C=this.getAutoAnimateOptions(A,d),I="unmatched";C.duration===d.duration&&C.delay===d.delay||(I="unmatched-"+_e++,u.push(`[data-auto-animate="running"] [data-auto-animate-target="${I}"] { transition: opacity ${C.duration}s ease ${C.delay}s; }`)),A.dataset.autoAnimateTarget=I},this),u.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${z}s ease ${M}s; }`)}this.autoAnimateStyleSheet.innerHTML=u.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){D(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),D(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,s,r,h){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=h;let d=this.getAutoAnimateOptions(e,r);s.delay!==void 0&&(d.delay=s.delay),s.duration!==void 0&&(d.duration=s.duration),s.easing!==void 0&&(d.easing=s.easing);let g=this.getAutoAnimatableProperties("from",t,s),u=this.getAutoAnimatableProperties("to",e,s);if(e.classList.contains("fragment")&&(delete u.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(De)||[""])[0]===(e.className.match(De)||[""])[0]&&r.slideDirection==="forward"&&e.classList.add("visible","disabled"),s.translate!==!1||s.scale!==!1){let A=this.Reveal.getScale(),C={x:(g.x-u.x)/A,y:(g.y-u.y)/A,scaleX:g.width/u.width,scaleY:g.height/u.height};C.x=Math.round(1e3*C.x)/1e3,C.y=Math.round(1e3*C.y)/1e3,C.scaleX=Math.round(1e3*C.scaleX)/1e3,C.scaleX=Math.round(1e3*C.scaleX)/1e3;let I=s.translate!==!1&&(C.x!==0||C.y!==0),c=s.scale!==!1&&(C.scaleX!==0||C.scaleY!==0);if(I||c){let U=[];I&&U.push(`translate(${C.x}px, ${C.y}px)`),c&&U.push(`scale(${C.scaleX}, ${C.scaleY})`),g.styles.transform=U.join(" "),g.styles["transform-origin"]="top left",u.styles.transform="none"}}for(let A in u.styles){const C=u.styles[A],I=g.styles[A];C===I?delete u.styles[A]:(C.explicitValue===!0&&(u.styles[A]=C.value),I.explicitValue===!0&&(g.styles[A]=I.value))}let z="",M=Object.keys(u.styles);return M.length>0&&(g.styles.transition="none",u.styles.transition=`all ${d.duration}s ${d.easing} ${d.delay}s`,u.styles["transition-property"]=M.join(", "),u.styles["will-change"]=M.join(", "),z='[data-auto-animate-target="'+h+'"] {'+Object.keys(g.styles).map(A=>A+": "+g.styles[A]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+h+'"] {'+Object.keys(u.styles).map(A=>A+": "+u.styles[A]+" !important;").join("")+"}"),z}getAutoAnimateOptions(t,e){let s={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(s=zt(s,e),t.parentNode){let r=st(t.parentNode,"[data-auto-animate-target]");r&&(s=this.getAutoAnimateOptions(r,s))}return t.dataset.autoAnimateEasing&&(s.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(s.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(s.delay=parseFloat(t.dataset.autoAnimateDelay)),s}getAutoAnimatableProperties(t,e,s){let r=this.Reveal.getConfig(),h={styles:[]};if(s.translate!==!1||s.scale!==!1){let g;if(typeof s.measure=="function")g=s.measure(e);else if(r.center)g=e.getBoundingClientRect();else{let u=this.Reveal.getScale();g={x:e.offsetLeft*u,y:e.offsetTop*u,width:e.offsetWidth*u,height:e.offsetHeight*u}}h.x=g.x,h.y=g.y,h.width=g.width,h.height=g.height}const d=getComputedStyle(e);return(s.styles||r.autoAnimateStyles).forEach(g=>{let u;typeof g=="string"&&(g={property:g}),g.from!==void 0&&t==="from"?u={value:g.from,explicitValue:!0}:g.to!==void 0&&t==="to"?u={value:g.to,explicitValue:!0}:(g.property==="line-height"&&(u=parseFloat(d["line-height"])/parseFloat(d["font-size"])),isNaN(u)&&(u=d[g.property])),u!==""&&(h.styles[g.property]=u)}),h}getAutoAnimatableElements(t,e){let s=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return s.filter((h,d)=>{if(r.indexOf(h.to)===-1)return r.push(h.to),!0})}getAutoAnimatePairs(t,e){let s=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(s,t,e,"[data-id]",h=>h.nodeName+":::"+h.getAttribute("data-id")),this.findAutoAnimateMatches(s,t,e,r,h=>h.nodeName+":::"+h.innerText),this.findAutoAnimateMatches(s,t,e,"img, video, iframe",h=>h.nodeName+":::"+(h.getAttribute("src")||h.getAttribute("data-src"))),this.findAutoAnimateMatches(s,t,e,"pre",h=>h.nodeName+":::"+h.innerText),s.forEach(h=>{Vt(h.from,r)?h.options={scale:!1}:Vt(h.from,"pre")&&(h.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-code",d=>d.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(s,h.from,h.to,".hljs .hljs-ln-line[data-line-number]",d=>d.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),s}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,s,r,h,d){let g={},u={};[].slice.call(e.querySelectorAll(r)).forEach((z,M)=>{const A=h(z);typeof A=="string"&&A.length&&(g[A]=g[A]||[],g[A].push(z))}),[].slice.call(s.querySelectorAll(r)).forEach((z,M)=>{const A=h(z);let C;if(u[A]=u[A]||[],u[A].push(z),g[A]){const I=u[A].length-1,c=g[A].length-1;g[A][I]?(C=g[A][I],g[A][I]=null):g[A][c]&&(C=g[A][c],g[A][c]=null)}C&&t.push({from:C,to:z,options:d})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,s)=>{const r=s.querySelector("[data-auto-animate-target]");return s.hasAttribute("data-auto-animate-target")||r||e.push(s),s.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(s))),e},[])}}class fn{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){D(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){D(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),s=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-s.length>0,next:!!s.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let s=[],r=[],h=[];t.forEach(g=>{if(g.hasAttribute("data-fragment-index")){let u=parseInt(g.getAttribute("data-fragment-index"),10);s[u]||(s[u]=[]),s[u].push(g)}else r.push([g])}),s=s.concat(r);let d=0;return s.forEach(g=>{g.forEach(u=>{h.push(u),u.setAttribute("data-fragment-index",d)}),d++}),e===!0?s:h}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=D(t,"section");e.forEach((s,r)=>{this.sort(s.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e){let s={shown:[],hidden:[]},r=this.Reveal.getCurrentSlide();if(r&&this.Reveal.getConfig().fragments&&(e=e||this.sort(r.querySelectorAll(".fragment"))).length){let h=0;if(typeof t!="number"){let d=this.sort(r.querySelectorAll(".fragment.visible")).pop();d&&(t=parseInt(d.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((d,g)=>{if(d.hasAttribute("data-fragment-index")&&(g=parseInt(d.getAttribute("data-fragment-index"),10)),h=Math.max(h,g),g<=t){let u=d.classList.contains("visible");d.classList.add("visible"),d.classList.remove("current-fragment"),g===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(d)),d.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(d)),u||(s.shown.push(d),this.Reveal.dispatchEvent({target:d,type:"visible",bubbles:!1}))}else{let u=d.classList.contains("visible");d.classList.remove("visible"),d.classList.remove("current-fragment"),u&&(this.Reveal.slideContent.stopEmbeddedContent(d),s.hidden.push(d),this.Reveal.dispatchEvent({target:d,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,h),-1),r.setAttribute("data-fragment",t)}return s}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let s=this.Reveal.getCurrentSlide();if(s&&this.Reveal.getConfig().fragments){let r=this.sort(s.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let d=this.sort(s.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=d?parseInt(d.getAttribute("data-fragment-index")||0,10):-1}t+=e;let h=this.update(t,r);return h.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:h.hidden[0],fragments:h.hidden}}),h.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:h.shown[0],fragments:h.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!h.shown.length&&!h.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class vn{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),D(this.Reveal.getRevealElement(),Nt).forEach(r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const s=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:s.h,indexv:s.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&D(t,"section").forEach((s,r)=>{s.setAttribute("data-index-h",e),s.setAttribute("data-index-v",r),Lt(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{Lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),D(t,".slide-background").forEach((s,r)=>{Lt(s,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,s=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-s.h*this.overviewSlideWidth+"px)","translateY("+-s.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),D(this.Reveal.getRevealElement(),Nt).forEach(e=>{Lt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),D(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Lt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let s=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(s,r)}}}}class bn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(t){t.shiftKey&&t.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let s=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let h=document.activeElement&&document.activeElement.isContentEditable===!0,d=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),g=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),u=!([32,37,38,39,40,78,80].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(h||d||g||u)return;let z,M=[66,86,190,191];if(typeof e.keyboard=="object")for(z in e.keyboard)e.keyboard[z]==="togglePause"&&M.push(parseInt(z,10));if(this.Reveal.isPaused()&&M.indexOf(s)===-1)return!1;let A=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),C=!1;if(typeof e.keyboard=="object"){for(z in e.keyboard)if(parseInt(z,10)===s){let I=e.keyboard[z];typeof I=="function"?I.apply(null,[t]):typeof I=="string"&&typeof this.Reveal[I]=="function"&&this.Reveal[I].call(),C=!0}}if(C===!1){for(z in this.bindings)if(parseInt(z,10)===s){let I=this.bindings[z].callback;typeof I=="function"?I.apply(null,[t]):typeof I=="string"&&typeof this.Reveal[I]=="function"&&this.Reveal[I].call(),C=!0}}C===!1&&(C=!0,s===80||s===33?this.Reveal.prev({skipFragments:t.altKey}):s===78||s===34?this.Reveal.next({skipFragments:t.altKey}):s===72||s===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):s===76||s===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):s===75||s===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):s===74||s===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):s===36?this.Reveal.slide(0):s===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):s===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):s===58||s===59||s===66||s===86||s===190||s===191?this.Reveal.togglePause():s===70?(I=>{let c=(I=I||document.documentElement).requestFullscreen||I.webkitRequestFullscreen||I.webkitRequestFullScreen||I.mozRequestFullScreen||I.msRequestFullscreen;c&&c.apply(I)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):s===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):s===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():C=!1),C?t.preventDefault&&t.preventDefault():s!==27&&s!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class yn{constructor(t){var e,s,r;r=1e3,(s="MAX_REPLACE_STATE_FREQUENCY")in(e=this)?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let s=t.replace(/^#\/?/,""),r=s.split("/");if(/^[0-9]*$/.test(r[0])||!s.length){const h=this.Reveal.getConfig();let d,g=h.hashOneBasedIndex||e.oneBasedIndex?1:0,u=parseInt(r[0],10)-g||0,z=parseInt(r[1],10)-g||0;return h.fragmentInURL&&(d=parseInt(r[2],10),isNaN(d)&&(d=void 0)),{h:u,v:z,f:d}}{let h,d;/\/[-\d]+$/g.test(s)&&(d=parseInt(s.split("/").pop(),10),d=isNaN(d)?void 0:d,s=s.split("/").shift());try{h=document.getElementById(decodeURIComponent(s))}catch{}if(h)return{...this.Reveal.getIndices(h),f:d}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),s=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(s){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",s=t||this.Reveal.getCurrentSlide(),r=s?s.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let h=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(h.f=void 0),typeof r=="string"&&r.length)e="/"+r,h.f>=0&&(e+="/"+h.f);else{let d=this.Reveal.getConfig().hashOneBasedIndex?1:0;(h.h>0||h.v>0||h.f>=0)&&(e+=h.h+d),(h.v>0||h.f>=0)&&(e+="/"+(h.v+d)),h.f>=0&&(e+="/"+h.f)}return e}onWindowHashChange(t){this.readURL()}}class wn{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=D(e,".navigate-left"),this.controlsRight=D(e,".navigate-right"),this.controlsUp=D(e,".navigate-up"),this.controlsDown=D(e,".navigate-down"),this.controlsPrev=D(e,".navigate-prev"),this.controlsNext=D(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];Fe&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(s=>s.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(s=>s.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(s=>s.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(s=>s.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(s=>s.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(s=>s.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(s=>{s.classList.remove("enabled","fragmented"),s.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(s=>{s.classList.add("enabled"),s.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let s=this.Reveal.fragments.availableRoutes();s.prev&&this.controlsPrev.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsNext.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(s.prev&&this.controlsUp.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsDown.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})):(s.prev&&this.controlsLeft.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),s.next&&this.controlsRight.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let s=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&s.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&s.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class kn{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),s=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*s);this.Reveal.getConfig().rtl&&(r=s-r);let h=this.Reveal.getIndices(e[r]);this.Reveal.slide(h.h,h.v)}destroy(){this.element.remove()}}class xn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Oe=(f,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=f,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const s=document.querySelector("head");s.insertBefore(e,s.lastChild)};class Sn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(s=>{let r=[],h=0;if(e.forEach(d=>{d.condition&&!d.condition()||(d.async?this.asyncDependencies.push(d):r.push(d))}),r.length){h=r.length;const d=g=>{g&&typeof g.callback=="function"&&g.callback(),--h==0&&this.initPlugins().then(s)};r.forEach(g=>{typeof g.id=="string"?(this.registerPlugin(g),d(g)):typeof g.src=="string"?Oe(g.src,()=>d(g)):(console.warn("Unrecognized plugin format",g),d())})}else this.initPlugins().then(s)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),s=e.length;if(s===0)this.loadAsync().then(t);else{let r,h=()=>{--s==0?this.loadAsync().then(t):r()},d=0;r=()=>{let g=e[d++];if(typeof g.init=="function"){let u=g.init(this.Reveal);u&&typeof u.then=="function"?u.then(h):h()}else h()},r()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Oe(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class En{constructor(t){this.Reveal=t}async setupPDF(){const t=this.Reveal.getConfig(),e=D(this.Reveal.getRevealElement(),Nt),s=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),h=Math.floor(r.width*(1+t.margin)),d=Math.floor(r.height*(1+t.margin)),g=r.width,u=r.height;await new Promise(requestAnimationFrame),ae("@page{size:"+h+"px "+d+"px; margin: 0px;}"),ae(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+g+"px; max-height:"+u+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=h+"px",document.body.style.height=d+"px";const z=document.querySelector(".reveal-viewport");let M;if(z){const U=window.getComputedStyle(z);U&&U.background&&(M=U.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(g,u),await new Promise(requestAnimationFrame);const A=e.map(U=>U.scrollHeight),C=[],I=e[0].parentNode;let c=1;e.forEach(function(U,Z){if(U.classList.contains("stack")===!1){let ut=(h-g)/2,dt=(d-u)/2;const it=A[Z];let X=Math.max(Math.ceil(it/d),1);X=Math.min(X,t.pdfMaxPagesPerSlide),(X===1&&t.center||U.classList.contains("center"))&&(dt=Math.max((d-it)/2,0));const Y=document.createElement("div");if(C.push(Y),Y.className="pdf-page",Y.style.height=(d+t.pdfPageHeightOffset)*X+"px",M&&(Y.style.background=M),Y.appendChild(U),U.style.left=ut+"px",U.style.top=dt+"px",U.style.width=g+"px",this.Reveal.slideContent.layout(U),U.slideBackgroundElement&&Y.insertBefore(U.slideBackgroundElement,U),t.showNotes){const B=this.Reveal.getSlideNotes(U);if(B){const j=typeof t.showNotes=="string"?t.showNotes:"inline",_=document.createElement("div");_.classList.add("speaker-notes"),_.classList.add("speaker-notes-pdf"),_.setAttribute("data-layout",j),_.innerHTML=B,j==="separate-page"?C.push(_):(_.style.left="8px",_.style.bottom="8px",_.style.width=h-2*8+"px",Y.appendChild(_))}}if(s){const B=document.createElement("div");B.classList.add("slide-number"),B.classList.add("slide-number-pdf"),B.innerHTML=c++,Y.appendChild(B)}if(t.pdfSeparateFragments){const B=this.Reveal.fragments.sort(Y.querySelectorAll(".fragment"),!0);let Q;B.forEach(function(j,_){Q&&Q.forEach(function(W){W.classList.remove("current-fragment")}),j.forEach(function(W){W.classList.add("visible","current-fragment")},this);const H=Y.cloneNode(!0);if(s){const W=_+1;H.querySelector(".slide-number-pdf").innerHTML+="."+W}C.push(H),Q=j},this),B.forEach(function(j){j.forEach(function(_){_.classList.remove("visible","current-fragment")})})}else D(Y,".fragment:not(.fade-out)").forEach(function(B){B.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),C.forEach(U=>I.appendChild(U)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class An{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(Vt(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)Fe&&t.preventDefault();else{this.Reveal.onUserInput(t);let s=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let h=this.Reveal.availableRoutes({includeFragments:!0}),d=s-this.touchStartX,g=r-this.touchStartY;d>40&&Math.abs(d)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):d<-40&&Math.abs(d)>Math.abs(g)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):g>40&&h.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):g<-40&&h.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}const se="focus",$e="blur";class Rn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==se&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=se}blur(){this.state!==$e&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=$e}isFocused(){return this.state===se}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=st(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class Ln{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(s=>s.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class Cn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,s=this.diameter2,r=this.diameter2,h=28;this.progressOffset+=.1*(1-this.progressOffset);const d=-Math.PI/2+t*(2*Math.PI),g=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(s,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(s,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(s,r,e,g,d,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(s-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,h),this.context.fillRect(18,0,10,h)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,h),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Tn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Be="4.5.0";function je(f,t){arguments.length<2&&(t=arguments[0],f=document.querySelector(".reveal"));const e={};let s,r,h,d,g,u={},z=!1,M={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},A=[],C=1,I={layout:"",overview:""},c={},U="idle",Z=0,ut=0,dt=-1,it=!1,X=new cn(e),Y=new un(e),B=new hn(e),Q=new mn(e),j=new pn(e),_=new fn(e),H=new vn(e),W=new bn(e),nt=new yn(e),b=new wn(e),x=new kn(e),E=new xn(e),ot=new Sn(e),at=new En(e),J=new Rn(e),rt=new An(e),lt=new Ln(e);function qt(l){if(!f)throw'Unable to find presentation root (<div class="reveal">).';if(c.wrapper=f,c.slides=f.querySelector(".slides"),!c.slides)throw'Unable to find slides container (<div class="slides">).';return u={...Tn,...u,...t,...l,...Me()},ft(),window.addEventListener("load",mt,!1),ot.load(u.plugins,u.dependencies).then($),new Promise(p=>e.on("ready",p))}function ft(){u.embedded===!0?c.viewport=st(f,".reveal-viewport")||f:(c.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),c.viewport.classList.add("reveal-viewport")}function $(){z=!0,L(),i(),k(),m(),v(),Je(),y(),nt.readURL(),j.update(!0),setTimeout(()=>{c.slides.classList.remove("no-transition"),c.wrapper.classList.add("ready"),K({type:"ready",data:{indexh:s,indexv:r,currentSlide:d}})},1),at.isPrintingPDF()&&(P(),document.readyState==="complete"?at.setupPDF():window.addEventListener("load",()=>{at.setupPDF()}))}function L(){u.showHiddenSlides||D(c.wrapper,'section[data-visibility="hidden"]').forEach(l=>{l.parentNode.removeChild(l)})}function i(){c.slides.classList.add("no-transition"),Dt?c.wrapper.classList.add("no-hover"):c.wrapper.classList.remove("no-hover"),j.render(),Y.render(),B.render(),b.render(),x.render(),lt.render(),c.pauseOverlay=rn(c.wrapper,"div","pause-overlay",u.controls?'<button class="resume-button">Resume presentation</button>':null),c.statusElement=n(),c.wrapper.setAttribute("role","application")}function n(){let l=c.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),c.wrapper.appendChild(l)),l}function a(l){c.statusElement.textContent=l}function o(l){let p="";if(l.nodeType===3)p+=l.textContent;else if(l.nodeType===1){let S=l.getAttribute("aria-hidden"),w=window.getComputedStyle(l).display==="none";S==="true"||w||Array.from(l.childNodes).forEach(T=>{p+=o(T)})}return p=p.trim(),p===""?"":p+" "}function m(){setInterval(()=>{c.wrapper.scrollTop===0&&c.wrapper.scrollLeft===0||(c.wrapper.scrollTop=0,c.wrapper.scrollLeft=0)},1e3)}function v(){document.addEventListener("fullscreenchange",Wt),document.addEventListener("webkitfullscreenchange",Wt)}function k(){u.postMessage&&window.addEventListener("message",Ae,!1)}function y(l){const p={...u};if(typeof l=="object"&&zt(u,l),e.isReady()===!1)return;const S=c.wrapper.querySelectorAll(Nt).length;c.wrapper.classList.remove(p.transition),c.wrapper.classList.add(u.transition),c.wrapper.setAttribute("data-transition-speed",u.transitionSpeed),c.wrapper.setAttribute("data-background-transition",u.backgroundTransition),c.viewport.style.setProperty("--slide-width",u.width+"px"),c.viewport.style.setProperty("--slide-height",u.height+"px"),u.shuffle&&Yt(),ne(c.wrapper,"embedded",u.embedded),ne(c.wrapper,"rtl",u.rtl),ne(c.wrapper,"center",u.center),u.pause===!1&&Ot(),u.previewLinks?(q(),wt("[data-preview-link=false]")):(wt(),q("[data-preview-link]:not([data-preview-link=false])")),Q.reset(),g&&(g.destroy(),g=null),S>1&&u.autoSlide&&u.autoSlideStoppable&&(g=new Cn(c.wrapper,()=>Math.min(Math.max((Date.now()-dt)/Z,0),1)),g.on("click",sn),it=!1),u.navigationMode!=="default"?c.wrapper.setAttribute("data-navigation-mode",u.navigationMode):c.wrapper.removeAttribute("data-navigation-mode"),lt.configure(u,p),J.configure(u,p),E.configure(u,p),b.configure(u,p),x.configure(u,p),W.configure(u,p),_.configure(u,p),Y.configure(u,p),he()}function R(){window.addEventListener("resize",Ce,!1),u.touch&&rt.bind(),u.keyboard&&W.bind(),u.progress&&x.bind(),u.respondToHashChanges&&nt.bind(),b.bind(),J.bind(),c.slides.addEventListener("click",Le,!1),c.slides.addEventListener("transitionend",Re,!1),c.pauseOverlay.addEventListener("click",Ot,!1),u.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Te,!1)}function P(){rt.unbind(),J.unbind(),W.unbind(),b.unbind(),x.unbind(),nt.unbind(),window.removeEventListener("resize",Ce,!1),c.slides.removeEventListener("click",Le,!1),c.slides.removeEventListener("transitionend",Re,!1),c.pauseOverlay.removeEventListener("click",Ot,!1)}function O(){P(),Ft(),wt(),lt.destroy(),J.destroy(),ot.destroy(),E.destroy(),b.destroy(),x.destroy(),j.destroy(),Y.destroy(),B.destroy(),document.removeEventListener("fullscreenchange",Wt),document.removeEventListener("webkitfullscreenchange",Wt),document.removeEventListener("visibilitychange",Te,!1),window.removeEventListener("message",Ae,!1),window.removeEventListener("load",mt,!1),c.pauseOverlay&&c.pauseOverlay.remove(),c.statusElement&&c.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),c.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),c.wrapper.removeAttribute("data-transition-speed"),c.wrapper.removeAttribute("data-background-transition"),c.viewport.classList.remove("reveal-viewport"),c.viewport.style.removeProperty("--slide-width"),c.viewport.style.removeProperty("--slide-height"),c.slides.style.removeProperty("width"),c.slides.style.removeProperty("height"),c.slides.style.removeProperty("zoom"),c.slides.style.removeProperty("left"),c.slides.style.removeProperty("top"),c.slides.style.removeProperty("bottom"),c.slides.style.removeProperty("right"),c.slides.style.removeProperty("transform"),Array.from(c.wrapper.querySelectorAll(Nt)).forEach(l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")})}function N(l,p,S){f.addEventListener(l,p,S)}function tt(l,p,S){f.removeEventListener(l,p,S)}function vt(l){typeof l.layout=="string"&&(I.layout=l.layout),typeof l.overview=="string"&&(I.overview=l.overview),I.layout?Lt(c.slides,I.layout+" "+I.overview):Lt(c.slides,I.overview)}function K({target:l=c.wrapper,type:p,data:S,bubbles:w=!0}){let T=document.createEvent("HTMLEvents",1,2);return T.initEvent(p,w,!0),zt(T,S),l.dispatchEvent(T),l===c.wrapper&&ht(p),T}function ht(l,p){if(u.postMessageEvents&&window.parent!==window.self){let S={namespace:"reveal",eventName:l,state:Se()};zt(S,p),window.parent.postMessage(JSON.stringify(S),"*")}}function q(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(p=>{/^(http|www)/gi.test(p.getAttribute("href"))&&p.addEventListener("click",Pe,!1)})}function wt(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(p=>{/^(http|www)/gi.test(p.getAttribute("href"))&&p.removeEventListener("click",Pe,!1)})}function Ct(l){V(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-preview"),c.wrapper.appendChild(c.overlay),c.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${l}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${l}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,c.overlay.querySelector("iframe").addEventListener("load",p=>{c.overlay.classList.add("loaded")},!1),c.overlay.querySelector(".close").addEventListener("click",p=>{V(),p.preventDefault()},!1),c.overlay.querySelector(".external").addEventListener("click",p=>{V()},!1)}function pt(l){typeof l=="boolean"?l?St():V():c.overlay?V():St()}function St(){if(u.help){V(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-help"),c.wrapper.appendChild(c.overlay);let l='<p class="title">Keyboard Shortcuts</p><br/>',p=W.getShortcuts(),S=W.getBindings();l+="<table><th>KEY</th><th>ACTION</th>";for(let w in p)l+=`<tr><td>${w}</td><td>${p[w]}</td></tr>`;for(let w in S)S[w].key&&S[w].description&&(l+=`<tr><td>${S[w].key}</td><td>${S[w].description}</td></tr>`);l+="</table>",c.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${l}</div>
				</div>
			`,c.overlay.querySelector(".close").addEventListener("click",w=>{V(),w.preventDefault()},!1)}}function V(){return!!c.overlay&&(c.overlay.parentNode.removeChild(c.overlay),c.overlay=null,!0)}function mt(){if(c.wrapper&&!at.isPrintingPDF()){if(!u.disableLayout){Dt&&!u.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const l=Ht(),p=C;Et(u.width,u.height),c.slides.style.width=l.width+"px",c.slides.style.height=l.height+"px",C=Math.min(l.presentationWidth/l.width,l.presentationHeight/l.height),C=Math.max(C,u.minScale),C=Math.min(C,u.maxScale),C===1?(c.slides.style.zoom="",c.slides.style.left="",c.slides.style.top="",c.slides.style.bottom="",c.slides.style.right="",vt({layout:""})):(c.slides.style.zoom="",c.slides.style.left="50%",c.slides.style.top="50%",c.slides.style.bottom="auto",c.slides.style.right="auto",vt({layout:"translate(-50%, -50%) scale("+C+")"}));const S=Array.from(c.wrapper.querySelectorAll(Nt));for(let w=0,T=S.length;w<T;w++){const F=S[w];F.style.display!=="none"&&(u.center||F.classList.contains("center")?F.classList.contains("stack")?F.style.top=0:F.style.top=Math.max((l.height-F.scrollHeight)/2,0)+"px":F.style.top="")}p!==C&&K({type:"resize",data:{oldScale:p,scale:C,size:l}})}c.viewport.style.setProperty("--slide-scale",C),x.update(),j.updateParallax(),H.isActive()&&H.update()}}function Et(l,p){D(c.slides,"section > .stretch, section > .r-stretch").forEach(S=>{let w=on(S,p);if(/(img|video)/gi.test(S.nodeName)){const T=S.naturalWidth||S.videoWidth,F=S.naturalHeight||S.videoHeight,et=Math.min(l/T,w/F);S.style.width=T*et+"px",S.style.height=F*et+"px"}else S.style.width=l+"px",S.style.height=w+"px"})}function Ht(l,p){let S=u.width,w=u.height;u.disableLayout&&(S=c.slides.offsetWidth,w=c.slides.offsetHeight);const T={width:S,height:w,presentationWidth:l||c.wrapper.offsetWidth,presentationHeight:p||c.wrapper.offsetHeight};return T.presentationWidth-=T.presentationWidth*u.margin,T.presentationHeight-=T.presentationHeight*u.margin,typeof T.width=="string"&&/%$/.test(T.width)&&(T.width=parseInt(T.width,10)/100*T.presentationWidth),typeof T.height=="string"&&/%$/.test(T.height)&&(T.height=parseInt(T.height,10)/100*T.presentationHeight),T}function re(l,p){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",p||0)}function oe(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const p=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(p)||0,10)}return 0}function _t(l=d){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function le(){return!(!d||!_t(d))&&!d.nextElementSibling}function de(){return s===0&&r===0}function Xt(){return!!d&&!d.nextElementSibling&&(!_t(d)||!d.parentNode.nextElementSibling)}function ce(){if(u.pause){const l=c.wrapper.classList.contains("paused");Ft(),c.wrapper.classList.add("paused"),l===!1&&K({type:"paused"})}}function Ot(){const l=c.wrapper.classList.contains("paused");c.wrapper.classList.remove("paused"),Mt(),l&&K({type:"resumed"})}function ue(l){typeof l=="boolean"?l?ce():Ot():$t()?Ot():ce()}function $t(){return c.wrapper.classList.contains("paused")}function Ke(l){typeof l=="boolean"?l?B.show():B.hide():B.isVisible()?B.hide():B.show()}function Ve(l){typeof l=="boolean"?l?Bt():Ut():it?Bt():Ut()}function Xe(){return!(!Z||it)}function bt(l,p,S,w){if(K({type:"beforeslidechange",data:{indexh:l===void 0?s:l,indexv:p===void 0?r:p,origin:w}}).defaultPrevented)return;h=d;const T=c.wrapper.querySelectorAll(Pt);if(T.length===0)return;p!==void 0||H.isActive()||(p=oe(T[l])),h&&h.parentNode&&h.parentNode.classList.contains("stack")&&re(h.parentNode,r);const F=A.concat();A.length=0;let et=s||0,gt=r||0;s=pe(Pt,l===void 0?s:l),r=pe(ze,p===void 0?r:p);let xt=s!==et||r!==gt;xt||(h=null);let Tt=T[s];d=Tt.querySelectorAll("section")[r]||Tt;let G=!1;xt&&h&&d&&!H.isActive()&&(h.hasAttribute("data-auto-animate")&&d.hasAttribute("data-auto-animate")&&h.getAttribute("data-auto-animate-id")===d.getAttribute("data-auto-animate-id")&&!(s>et||r>gt?d:h).hasAttribute("data-auto-animate-restart")&&(G=!0,c.slides.classList.add("disable-slide-transitions")),U="running"),Jt(),mt(),H.isActive()&&H.update(),S!==void 0&&_.goto(S),h&&h!==d&&(h.classList.remove("present"),h.setAttribute("aria-hidden","true"),de()&&setTimeout(()=>{Qe().forEach(yt=>{re(yt,0)})},0));t:for(let yt=0,an=A.length;yt<an;yt++){for(let Kt=0;Kt<F.length;Kt++)if(F[Kt]===A[yt]){F.splice(Kt,1);continue t}c.viewport.classList.add(A[yt]),K({type:A[yt]})}for(;F.length;)c.viewport.classList.remove(F.pop());xt&&K({type:"slidechanged",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:d,origin:w}}),!xt&&h||(X.stopEmbeddedContent(h),X.startEmbeddedContent(d)),requestAnimationFrame(()=>{a(o(d))}),x.update(),b.update(),lt.update(),j.update(),j.updateParallax(),Y.update(),_.update(),nt.writeURL(),Mt(),G&&(setTimeout(()=>{c.slides.classList.remove("disable-slide-transitions")},0),u.autoAnimate&&Q.run(h,d))}function he(){P(),R(),mt(),Z=u.autoSlide,Mt(),j.create(),nt.writeURL(),u.sortFragmentsOnSync===!0&&_.sortAll(),b.update(),x.update(),Jt(),lt.update(),lt.updateVisibility(),j.update(!0),Y.update(),X.formatEmbeddedContent(),u.autoPlayMedia===!1?X.stopEmbeddedContent(d,{unloadIframes:!1}):X.startEmbeddedContent(d),H.isActive()&&H.layout()}function Ye(l=d){j.sync(l),_.sync(l),X.load(l),j.update(),lt.update()}function Je(){At().forEach(l=>{D(l,"section").forEach((p,S)=>{S>0&&(p.classList.remove("present"),p.classList.remove("past"),p.classList.add("future"),p.setAttribute("aria-hidden","true"))})})}function Yt(l=At()){l.forEach((p,S)=>{let w=l[Math.floor(Math.random()*l.length)];w.parentNode===p.parentNode&&p.parentNode.insertBefore(p,w);let T=p.querySelectorAll("section");T.length&&Yt(T)})}function pe(l,p){let S=D(c.wrapper,l),w=S.length,T=at.isPrintingPDF(),F=!1,et=!1;if(w){u.loop&&(p>=w&&(F=!0),(p%=w)<0&&(p=w+p,et=!0)),p=Math.max(Math.min(p,w-1),0);for(let ct=0;ct<w;ct++){let G=S[ct],yt=u.rtl&&!_t(G);G.classList.remove("past"),G.classList.remove("present"),G.classList.remove("future"),G.setAttribute("hidden",""),G.setAttribute("aria-hidden","true"),G.querySelector("section")&&G.classList.add("stack"),T?G.classList.add("present"):ct<p?(G.classList.add(yt?"future":"past"),u.fragments&&ge(G)):ct>p?(G.classList.add(yt?"past":"future"),u.fragments&&me(G)):ct===p&&u.fragments&&(F?me(G):et&&ge(G))}let gt=S[p],xt=gt.classList.contains("present");gt.classList.add("present"),gt.removeAttribute("hidden"),gt.removeAttribute("aria-hidden"),xt||K({target:gt,type:"visible",bubbles:!1});let Tt=gt.getAttribute("data-state");Tt&&(A=A.concat(Tt.split(" ")))}else p=0;return p}function ge(l){D(l,".fragment").forEach(p=>{p.classList.add("visible"),p.classList.remove("current-fragment")})}function me(l){D(l,".fragment.visible").forEach(p=>{p.classList.remove("visible","current-fragment")})}function Jt(){let l,p,S=At(),w=S.length;if(w&&s!==void 0){let T=H.isActive()?10:u.viewDistance;Dt&&(T=H.isActive()?6:u.mobileViewDistance),at.isPrintingPDF()&&(T=Number.MAX_VALUE);for(let F=0;F<w;F++){let et=S[F],gt=D(et,"section"),xt=gt.length;if(l=Math.abs((s||0)-F)||0,u.loop&&(l=Math.abs(((s||0)-F)%(w-T))||0),l<T?X.load(et):X.unload(et),xt){let Tt=oe(et);for(let ct=0;ct<xt;ct++){let G=gt[ct];p=Math.abs(F===(s||0)?(r||0)-ct:ct-Tt),l+p<T?X.load(G):X.unload(G)}}}we()?c.wrapper.classList.add("has-vertical-slides"):c.wrapper.classList.remove("has-vertical-slides"),ye()?c.wrapper.classList.add("has-horizontal-slides"):c.wrapper.classList.remove("has-horizontal-slides")}}function kt({includeFragments:l=!1}={}){let p=c.wrapper.querySelectorAll(Pt),S=c.wrapper.querySelectorAll(ze),w={left:s>0,right:s<p.length-1,up:r>0,down:r<S.length-1};if(u.loop&&(p.length>1&&(w.left=!0,w.right=!0),S.length>1&&(w.up=!0,w.down=!0)),p.length>1&&u.navigationMode==="linear"&&(w.right=w.right||w.down,w.left=w.left||w.up),l===!0){let T=_.availableRoutes();w.left=w.left||T.prev,w.up=w.up||T.prev,w.down=w.down||T.next,w.right=w.right||T.next}if(u.rtl){let T=w.left;w.left=w.right,w.right=T}return w}function fe(l=d){let p=At(),S=0;t:for(let w=0;w<p.length;w++){let T=p[w],F=T.querySelectorAll("section");for(let et=0;et<F.length;et++){if(F[et]===l)break t;F[et].dataset.visibility!=="uncounted"&&S++}if(T===l)break;T.classList.contains("stack")===!1&&T.dataset.visibility!=="uncounted"&&S++}return S}function Ze(){let l=ke(),p=fe();if(d){let S=d.querySelectorAll(".fragment");if(S.length>0){let w=.9;p+=d.querySelectorAll(".fragment.visible").length/S.length*w}}return Math.min(p/(l-1),1)}function ve(l){let p,S=s,w=r;if(l){let T=_t(l),F=T?l.parentNode:l,et=At();S=Math.max(et.indexOf(F),0),w=void 0,T&&(w=Math.max(D(l.parentNode,"section").indexOf(l),0))}if(!l&&d&&d.querySelectorAll(".fragment").length>0){let T=d.querySelector(".current-fragment");p=T&&T.hasAttribute("data-fragment-index")?parseInt(T.getAttribute("data-fragment-index"),10):d.querySelectorAll(".fragment.visible").length-1}return{h:S,v:w,f:p}}function Zt(){return D(c.wrapper,Nt+':not(.stack):not([data-visibility="uncounted"])')}function At(){return D(c.wrapper,Pt)}function be(){return D(c.wrapper,".slides>section>section")}function Qe(){return D(c.wrapper,Pt+".stack")}function ye(){return At().length>1}function we(){return be().length>1}function Ge(){return Zt().map(l=>{let p={};for(let S=0;S<l.attributes.length;S++){let w=l.attributes[S];p[w.name]=w.value}return p})}function ke(){return Zt().length}function xe(l,p){let S=At()[l],w=S&&S.querySelectorAll("section");return w&&w.length&&typeof p=="number"?w?w[p]:void 0:S}function tn(l,p){let S=typeof l=="number"?xe(l,p):l;if(S)return S.slideBackgroundElement}function Se(){let l=ve();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:$t(),overview:H.isActive()}}function en(l){if(typeof l=="object"){bt(It(l.indexh),It(l.indexv),It(l.indexf));let p=It(l.paused),S=It(l.overview);typeof p=="boolean"&&p!==$t()&&ue(p),typeof S=="boolean"&&S!==H.isActive()&&H.toggle(S)}}function Mt(){if(Ft(),d&&u.autoSlide!==!1){let l=d.querySelector(".current-fragment");l||(l=d.querySelector(".fragment"));let p=l?l.getAttribute("data-autoslide"):null,S=d.parentNode?d.parentNode.getAttribute("data-autoslide"):null,w=d.getAttribute("data-autoslide");p?Z=parseInt(p,10):w?Z=parseInt(w,10):S?Z=parseInt(S,10):(Z=u.autoSlide,d.querySelectorAll(".fragment").length===0&&D(d,"video, audio").forEach(T=>{T.hasAttribute("data-autoplay")&&Z&&1e3*T.duration/T.playbackRate>Z&&(Z=1e3*T.duration/T.playbackRate+1e3)})),!Z||it||$t()||H.isActive()||Xt()&&!_.availableRoutes().next&&u.loop!==!0||(ut=setTimeout(()=>{typeof u.autoSlideMethod=="function"?u.autoSlideMethod():ee(),Mt()},Z),dt=Date.now()),g&&g.setPlaying(ut!==-1)}}function Ft(){clearTimeout(ut),ut=-1}function Ut(){Z&&!it&&(it=!0,K({type:"autoslidepaused"}),clearTimeout(ut),g&&g.setPlaying(!1))}function Bt(){Z&&it&&(it=!1,K({type:"autoslideresumed"}),Mt())}function jt({skipFragments:l=!1}={}){M.hasNavigatedHorizontally=!0,u.rtl?(H.isActive()||l||_.next()===!1)&&kt().left&&bt(s+1,u.navigationMode==="grid"?r:void 0):(H.isActive()||l||_.prev()===!1)&&kt().left&&bt(s-1,u.navigationMode==="grid"?r:void 0)}function Qt({skipFragments:l=!1}={}){M.hasNavigatedHorizontally=!0,u.rtl?(H.isActive()||l||_.prev()===!1)&&kt().right&&bt(s-1,u.navigationMode==="grid"?r:void 0):(H.isActive()||l||_.next()===!1)&&kt().right&&bt(s+1,u.navigationMode==="grid"?r:void 0)}function Gt({skipFragments:l=!1}={}){(H.isActive()||l||_.prev()===!1)&&kt().up&&bt(s,r-1)}function te({skipFragments:l=!1}={}){M.hasNavigatedVertically=!0,(H.isActive()||l||_.next()===!1)&&kt().down&&bt(s,r+1)}function Ee({skipFragments:l=!1}={}){if(l||_.prev()===!1)if(kt().up)Gt({skipFragments:l});else{let p;if(p=u.rtl?D(c.wrapper,Pt+".future").pop():D(c.wrapper,Pt+".past").pop(),p&&p.classList.contains("stack")){let S=p.querySelectorAll("section").length-1||void 0;bt(s-1,S)}else jt({skipFragments:l})}}function ee({skipFragments:l=!1}={}){if(M.hasNavigatedHorizontally=!0,M.hasNavigatedVertically=!0,l||_.next()===!1){let p=kt();p.down&&p.right&&u.loop&&le()&&(p.down=!1),p.down?te({skipFragments:l}):u.rtl?jt({skipFragments:l}):Qt({skipFragments:l})}}function nn(l){u.autoSlideStoppable&&Ut()}function Ae(l){let p=l.data;if(typeof p=="string"&&p.charAt(0)==="{"&&p.charAt(p.length-1)==="}"&&(p=JSON.parse(p),p.method&&typeof e[p.method]=="function"))if(gn.test(p.method)===!1){const S=e[p.method].apply(e,p.args);ht("callback",{method:p.method,result:S})}else console.warn('reveal.js: "'+p.method+'" is is blacklisted from the postMessage API')}function Re(l){U==="running"&&/section/gi.test(l.target.nodeName)&&(U="idle",K({type:"slidetransitionend",data:{indexh:s,indexv:r,previousSlide:h,currentSlide:d}}))}function Le(l){const p=st(l.target,'a[href^="#"]');if(p){const S=p.getAttribute("href"),w=nt.getIndicesFromHash(S);w&&(e.slide(w.h,w.v,w.f),l.preventDefault())}}function Ce(l){mt()}function Te(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Wt(l){(document.fullscreenElement||document.webkitFullscreenElement)===c.wrapper&&(l.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function Pe(l){if(l.currentTarget&&l.currentTarget.hasAttribute("href")){let p=l.currentTarget.getAttribute("href");p&&(Ct(p),l.preventDefault())}}function sn(l){Xt()&&u.loop===!1?(bt(0,0),Bt()):it?Bt():Ut()}const Ne={VERSION:Be,initialize:qt,configure:y,destroy:O,sync:he,syncSlide:Ye,syncFragments:_.sync.bind(_),slide:bt,left:jt,right:Qt,up:Gt,down:te,prev:Ee,next:ee,navigateLeft:jt,navigateRight:Qt,navigateUp:Gt,navigateDown:te,navigatePrev:Ee,navigateNext:ee,navigateFragment:_.goto.bind(_),prevFragment:_.prev.bind(_),nextFragment:_.next.bind(_),on:N,off:tt,addEventListener:N,removeEventListener:tt,layout:mt,shuffle:Yt,availableRoutes:kt,availableFragments:_.availableRoutes.bind(_),toggleHelp:pt,toggleOverview:H.toggle.bind(H),togglePause:ue,toggleAutoSlide:Ve,toggleJumpToSlide:Ke,isFirstSlide:de,isLastSlide:Xt,isLastVerticalSlide:le,isVerticalSlide:_t,isPaused:$t,isAutoSliding:Xe,isSpeakerNotes:lt.isSpeakerNotesWindow.bind(lt),isOverview:H.isActive.bind(H),isFocused:J.isFocused.bind(J),isPrintingPDF:at.isPrintingPDF.bind(at),isReady:()=>z,loadSlide:X.load.bind(X),unloadSlide:X.unload.bind(X),showPreview:Ct,hidePreview:V,addEventListeners:R,removeEventListeners:P,dispatchEvent:K,getState:Se,setState:en,getProgress:Ze,getIndices:ve,getSlidesAttributes:Ge,getSlidePastCount:fe,getTotalSlides:ke,getSlide:xe,getPreviousSlide:()=>h,getCurrentSlide:()=>d,getSlideBackground:tn,getSlideNotes:lt.getSlideNotes.bind(lt),getSlides:Zt,getHorizontalSlides:At,getVerticalSlides:be,hasHorizontalSlides:ye,hasVerticalSlides:we,hasNavigatedHorizontally:()=>M.hasNavigatedHorizontally,hasNavigatedVertically:()=>M.hasNavigatedVertically,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:Ht,getScale:()=>C,getConfig:()=>u,getQueryHash:Me,getSlidePath:nt.getHash.bind(nt),getRevealElement:()=>f,getSlidesElement:()=>c.slides,getViewportElement:()=>c.viewport,getBackgroundsElement:()=>j.element,registerPlugin:ot.registerPlugin.bind(ot),hasPlugin:ot.hasPlugin.bind(ot),getPlugin:ot.getPlugin.bind(ot),getPlugins:ot.getRegisteredPlugins.bind(ot)};return zt(e,{...Ne,announceStatus:a,getStatusText:o,print:at,focus:J,progress:x,controls:b,location:nt,overview:H,fragments:_,slideContent:X,slideNumber:Y,onUserInput:nn,closeOverlay:V,updateSlidesVisibility:Jt,layoutSlideContents:Et,transformSlides:vt,cueAutoSlide:Mt,cancelAutoSlide:Ft}),Ne}let Rt=je,qe=[];Rt.initialize=f=>(Object.assign(Rt,new je(document.querySelector(".reveal"),f)),qe.map(t=>t(Rt)),Rt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(f=>{Rt[f]=(...t)=>{qe.push(e=>e[f].call(null,...t))}}),Rt.isReady=()=>!1,Rt.VERSION=Be;var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nn(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var We={exports:{}};(function(f,t){(function(e,s){f.exports=s()})(Pn,function(){function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let s={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,h=/[&<>"']/g,d=/[<>"']|&(?!#?\w+;)/,g=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},z=L=>u[L];function M(L,i){if(i){if(r.test(L))return L.replace(h,z)}else if(d.test(L))return L.replace(g,z);return L}const A=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function C(L){return L.replace(A,(i,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const I=/(^|[^\[])\^/g;function c(L,i){L=L.source||L,i=i||"";const n={replace:(a,o)=>(o=(o=o.source||o).replace(I,"$1"),L=L.replace(a,o),n),getRegex:()=>new RegExp(L,i)};return n}const U=/[^\w:]/g,Z=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ut(L,i,n){if(L){let a;try{a=decodeURIComponent(C(n)).replace(U,"").toLowerCase()}catch{return null}if(a.indexOf("javascript:")===0||a.indexOf("vbscript:")===0||a.indexOf("data:")===0)return null}i&&!Z.test(n)&&(n=function(a,o){dt[" "+a]||(it.test(a)?dt[" "+a]=a+"/":dt[" "+a]=_(a,"/",!0)),a=dt[" "+a];const m=a.indexOf(":")===-1;return o.substring(0,2)==="//"?m?o:a.replace(X,"$1")+o:o.charAt(0)==="/"?m?o:a.replace(Y,"$1")+o:a+o}(i,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const dt={},it=/^[^:]+:\/*[^/]*$/,X=/^([^:]+:)[\s\S]*$/,Y=/^([^:]+:\/*[^/]*)[\s\S]*$/,B={exec:function(){}};function Q(L){let i,n,a=1;for(;a<arguments.length;a++)for(n in i=arguments[a],i)Object.prototype.hasOwnProperty.call(i,n)&&(L[n]=i[n]);return L}function j(L,i){const n=L.replace(/\|/g,(o,m,v)=>{let k=!1,y=m;for(;--y>=0&&v[y]==="\\";)k=!k;return k?"|":" |"}).split(/ \|/);let a=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>i)n.splice(i);else for(;n.length<i;)n.push("");for(;a<n.length;a++)n[a]=n[a].trim().replace(/\\\|/g,"|");return n}function _(L,i,n){const a=L.length;if(a===0)return"";let o=0;for(;o<a;){const m=L.charAt(a-o-1);if(m!==i||n){if(m===i||!n)break;o++}else o++}return L.substr(0,a-o)}function H(L){L&&L.sanitize&&!L.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function W(L,i){if(i<1)return"";let n="";for(;i>1;)1&i&&(n+=L),i>>=1,L+=L;return n+L}function nt(L,i,n,a){const o=i.href,m=i.title?M(i.title):null,v=L[1].replace(/\\([\[\]])/g,"$1");if(L[0].charAt(0)!=="!"){a.state.inLink=!0;const k={type:"link",raw:n,href:o,title:m,text:v,tokens:a.inlineTokens(v,[])};return a.state.inLink=!1,k}return{type:"image",raw:n,href:o,title:m,text:M(v)}}class b{constructor(i){this.options=i||s}space(i){const n=this.rules.block.newline.exec(i);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(i){const n=this.rules.block.code.exec(i);if(n){const a=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?a:_(a,`
`)}}}fences(i){const n=this.rules.block.fences.exec(i);if(n){const a=n[0],o=function(m,v){const k=m.match(/^(\s+)(?:```)/);if(k===null)return v;const y=k[1];return v.split(`
`).map(R=>{const P=R.match(/^\s+/);if(P===null)return R;const[O]=P;return O.length>=y.length?R.slice(y.length):R}).join(`
`)}(a,n[3]||"");return{type:"code",raw:a,lang:n[2]?n[2].trim():n[2],text:o}}}heading(i){const n=this.rules.block.heading.exec(i);if(n){let a=n[2].trim();if(/#$/.test(a)){const m=_(a,"#");this.options.pedantic?a=m.trim():m&&!/ $/.test(m)||(a=m.trim())}const o={type:"heading",raw:n[0],depth:n[1].length,text:a,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(i){const n=this.rules.block.hr.exec(i);if(n)return{type:"hr",raw:n[0]}}blockquote(i){const n=this.rules.block.blockquote.exec(i);if(n){const a=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(a,[]),text:a}}}list(i){let n=this.rules.block.list.exec(i);if(n){let a,o,m,v,k,y,R,P,O,N,tt,vt,K=n[1].trim();const ht=K.length>1,q={type:"list",raw:"",ordered:ht,start:ht?+K.slice(0,-1):"",loose:!1,items:[]};K=ht?`\\d{1,9}\\${K.slice(-1)}`:`\\${K}`,this.options.pedantic&&(K=ht?K:"[*+-]");const wt=new RegExp(`^( {0,3}${K})((?: [^\\n]*)?(?:\\n|$))`);for(;i&&(vt=!1,n=wt.exec(i))&&!this.rules.block.hr.test(i);){if(a=n[0],i=i.substring(a.length),P=n[2].split(`
`,1)[0],O=i.split(`
`,1)[0],this.options.pedantic?(v=2,tt=P.trimLeft()):(v=n[2].search(/[^ ]/),v=v>4?1:v,tt=P.slice(v),v+=n[1].length),y=!1,!P&&/^ *$/.test(O)&&(a+=O+`
`,i=i.substring(O.length+1),vt=!0),!vt){const pt=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;i&&(N=i.split(`
`,1)[0],P=N,this.options.pedantic&&(P=P.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!pt.test(P));){if(P.search(/[^ ]/)>=v||!P.trim())tt+=`
`+P.slice(v);else{if(y)break;tt+=`
`+P}y||P.trim()||(y=!0),a+=N+`
`,i=i.substring(N.length+1)}}q.loose||(R?q.loose=!0:/\n *\n *$/.test(a)&&(R=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(tt),o&&(m=o[0]!=="[ ] ",tt=tt.replace(/^\[[ xX]\] +/,""))),q.items.push({type:"list_item",raw:a,task:!!o,checked:m,loose:!1,text:tt}),q.raw+=a}q.items[q.items.length-1].raw=a.trimRight(),q.items[q.items.length-1].text=tt.trimRight(),q.raw=q.raw.trimRight();const Ct=q.items.length;for(k=0;k<Ct;k++){this.lexer.state.top=!1,q.items[k].tokens=this.lexer.blockTokens(q.items[k].text,[]);const pt=q.items[k].tokens.filter(V=>V.type==="space"),St=pt.every(V=>{const mt=V.raw.split("");let Et=0;for(const Ht of mt)if(Ht===`
`&&(Et+=1),Et>1)return!0;return!1});!q.loose&&pt.length&&St&&(q.loose=!0,q.items[k].loose=!0)}return q}}html(i){const n=this.rules.block.html.exec(i);if(n){const a={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(a.type="paragraph",a.text=this.options.sanitizer?this.options.sanitizer(n[0]):M(n[0]),a.tokens=[],this.lexer.inline(a.text,a.tokens)),a}}def(i){const n=this.rules.block.def.exec(i);if(n)return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{type:"def",tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}table(i){const n=this.rules.block.table.exec(i);if(n){const a={type:"table",header:j(n[1]).map(o=>({text:o})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(a.header.length===a.align.length){a.raw=n[0];let o,m,v,k,y=a.align.length;for(o=0;o<y;o++)/^ *-+: *$/.test(a.align[o])?a.align[o]="right":/^ *:-+: *$/.test(a.align[o])?a.align[o]="center":/^ *:-+ *$/.test(a.align[o])?a.align[o]="left":a.align[o]=null;for(y=a.rows.length,o=0;o<y;o++)a.rows[o]=j(a.rows[o],a.header.length).map(R=>({text:R}));for(y=a.header.length,m=0;m<y;m++)a.header[m].tokens=[],this.lexer.inlineTokens(a.header[m].text,a.header[m].tokens);for(y=a.rows.length,m=0;m<y;m++)for(k=a.rows[m],v=0;v<k.length;v++)k[v].tokens=[],this.lexer.inlineTokens(k[v].text,k[v].tokens);return a}}}lheading(i){const n=this.rules.block.lheading.exec(i);if(n){const a={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}paragraph(i){const n=this.rules.block.paragraph.exec(i);if(n){const a={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}text(i){const n=this.rules.block.text.exec(i);if(n){const a={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}escape(i){const n=this.rules.inline.escape.exec(i);if(n)return{type:"escape",raw:n[0],text:M(n[1])}}tag(i){const n=this.rules.inline.tag.exec(i);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):M(n[0]):n[0]}}link(i){const n=this.rules.inline.link.exec(i);if(n){const a=n[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const v=_(a.slice(0,-1),"\\");if((a.length-v.length)%2==0)return}else{const v=function(k,y){if(k.indexOf(y[1])===-1)return-1;const R=k.length;let P=0,O=0;for(;O<R;O++)if(k[O]==="\\")O++;else if(k[O]===y[0])P++;else if(k[O]===y[1]&&(P--,P<0))return O;return-1}(n[2],"()");if(v>-1){const k=(n[0].indexOf("!")===0?5:4)+n[1].length+v;n[2]=n[2].substring(0,v),n[0]=n[0].substring(0,k).trim(),n[3]=""}}let o=n[2],m="";if(this.options.pedantic){const v=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);v&&(o=v[1],m=v[3])}else m=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(a)?o.slice(1):o.slice(1,-1)),nt(n,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:m&&m.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(i,n){let a;if((a=this.rules.inline.reflink.exec(i))||(a=this.rules.inline.nolink.exec(i))){let o=(a[2]||a[1]).replace(/\s+/g," ");if(o=n[o.toLowerCase()],!o||!o.href){const m=a[0].charAt(0);return{type:"text",raw:m,text:m}}return nt(a,o,a[0],this.lexer)}}emStrong(i,n,a=""){let o=this.rules.inline.emStrong.lDelim.exec(i);if(!o||o[3]&&a.match(/[\p{L}\p{N}]/u))return;const m=o[1]||o[2]||"";if(!m||m&&(a===""||this.rules.inline.punctuation.exec(a))){const v=o[0].length-1;let k,y,R=v,P=0;const O=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(O.lastIndex=0,n=n.slice(-1*i.length+v);(o=O.exec(n))!=null;){if(k=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!k)continue;if(y=k.length,o[3]||o[4]){R+=y;continue}if((o[5]||o[6])&&v%3&&!((v+y)%3)){P+=y;continue}if(R-=y,R>0)continue;if(y=Math.min(y,y+R+P),Math.min(v,y)%2){const tt=i.slice(1,v+o.index+y);return{type:"em",raw:i.slice(0,v+o.index+y+1),text:tt,tokens:this.lexer.inlineTokens(tt,[])}}const N=i.slice(2,v+o.index+y-1);return{type:"strong",raw:i.slice(0,v+o.index+y+1),text:N,tokens:this.lexer.inlineTokens(N,[])}}}}codespan(i){const n=this.rules.inline.code.exec(i);if(n){let a=n[2].replace(/\n/g," ");const o=/[^ ]/.test(a),m=/^ /.test(a)&&/ $/.test(a);return o&&m&&(a=a.substring(1,a.length-1)),a=M(a,!0),{type:"codespan",raw:n[0],text:a}}}br(i){const n=this.rules.inline.br.exec(i);if(n)return{type:"br",raw:n[0]}}del(i){const n=this.rules.inline.del.exec(i);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(i,n){const a=this.rules.inline.autolink.exec(i);if(a){let o,m;return a[2]==="@"?(o=M(this.options.mangle?n(a[1]):a[1]),m="mailto:"+o):(o=M(a[1]),m=o),{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}url(i,n){let a;if(a=this.rules.inline.url.exec(i)){let o,m;if(a[2]==="@")o=M(this.options.mangle?n(a[0]):a[0]),m="mailto:"+o;else{let v;do v=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(v!==a[0]);o=M(a[0]),m=a[1]==="www."?"http://"+o:o}return{type:"link",raw:a[0],text:o,href:m,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(i,n){const a=this.rules.inline.text.exec(i);if(a){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):M(a[0]):a[0]:M(this.options.smartypants?n(a[0]):a[0]),{type:"text",raw:a[0],text:o}}}}const x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:B,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};x.def=c(x.def).replace("label",x._label).replace("title",x._title).getRegex(),x.bullet=/(?:[*+-]|\d{1,9}[.)])/,x.listItemStart=c(/^( *)(bull) */).replace("bull",x.bullet).getRegex(),x.list=c(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex(),x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,x.html=c(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),x.paragraph=c(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.blockquote=c(x.blockquote).replace("paragraph",x.paragraph).getRegex(),x.normal=Q({},x),x.gfm=Q({},x.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),x.gfm.table=c(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.gfm.paragraph=c(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",x.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.pedantic=Q({},x.normal,{html:c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:B,paragraph:c(x.normal._paragraph).replace("hr",x.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:B,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:B,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ot(L){return L.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function at(L){let i,n,a="";const o=L.length;for(i=0;i<o;i++)n=L.charCodeAt(i),Math.random()>.5&&(n="x"+n.toString(16)),a+="&#"+n+";";return a}E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",E.punctuation=c(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex(),E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,E.escapedEmSt=/\\\*|\\_/g,E._comment=c(x._comment).replace("(?:-->|$)","-->").getRegex(),E.emStrong.lDelim=c(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimAst=c(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimUnd=c(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex(),E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,E.autolink=c(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex(),E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,E.tag=c(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex(),E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,E.link=c(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex(),E.reflink=c(E.reflink).replace("label",E._label).replace("ref",x._label).getRegex(),E.nolink=c(E.nolink).replace("ref",x._label).getRegex(),E.reflinkSearch=c(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex(),E.normal=Q({},E),E.pedantic=Q({},E.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()}),E.gfm=Q({},E.normal,{escape:c(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),E.gfm.url=c(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex(),E.breaks=Q({},E.gfm,{br:c(E.br).replace("{2,}","*").getRegex(),text:c(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class J{constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||s,this.options.tokenizer=this.options.tokenizer||new b,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:x.normal,inline:E.normal};this.options.pedantic?(n.block=x.pedantic,n.inline=E.pedantic):this.options.gfm&&(n.block=x.gfm,this.options.breaks?n.inline=E.breaks:n.inline=E.gfm),this.tokenizer.rules=n}static get rules(){return{block:x,inline:E}}static lex(i,n){return new J(n).lex(i)}static lexInline(i,n){return new J(n).inlineTokens(i)}lex(i){let n;for(i=i.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(i,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(i,n=[]){let a,o,m,v;for(this.options.pedantic&&(i=i.replace(/^ +$/gm,""));i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(k=>!!(a=k.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.space(i))i=i.substring(a.raw.length),a.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(a);else if(a=this.tokenizer.code(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?n.push(a):(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.fences(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.heading(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.hr(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.blockquote(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.list(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.html(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.def(i))i=i.substring(a.raw.length),o=n[n.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title}):(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(a=this.tokenizer.table(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.lheading(i))i=i.substring(a.raw.length),n.push(a);else{if(m=i,this.options.extensions&&this.options.extensions.startBlock){let k=1/0;const y=i.slice(1);let R;this.options.extensions.startBlock.forEach(function(P){R=P.call({lexer:this},y),typeof R=="number"&&R>=0&&(k=Math.min(k,R))}),k<1/0&&k>=0&&(m=i.substring(0,k+1))}if(this.state.top&&(a=this.tokenizer.paragraph(m)))o=n[n.length-1],v&&o.type==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a),v=m.length!==i.length,i=i.substring(a.raw.length);else if(a=this.tokenizer.text(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(a);else if(i){const k="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(k);break}throw new Error(k)}}return this.state.top=!0,n}inline(i,n){this.inlineQueue.push({src:i,tokens:n})}inlineTokens(i,n=[]){let a,o,m,v,k,y,R=i;if(this.tokens.links){const P=Object.keys(this.tokens.links);if(P.length>0)for(;(v=this.tokenizer.rules.inline.reflinkSearch.exec(R))!=null;)P.includes(v[0].slice(v[0].lastIndexOf("[")+1,-1))&&(R=R.slice(0,v.index)+"["+W("a",v[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(v=this.tokenizer.rules.inline.blockSkip.exec(R))!=null;)R=R.slice(0,v.index)+"["+W("a",v[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(v=this.tokenizer.rules.inline.escapedEmSt.exec(R))!=null;)R=R.slice(0,v.index)+"++"+R.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;i;)if(k||(y=""),k=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(P=>!!(a=P.call({lexer:this},i,n))&&(i=i.substring(a.raw.length),n.push(a),!0))))if(a=this.tokenizer.escape(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.tag(i))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.link(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.reflink(i,this.tokens.links))i=i.substring(a.raw.length),o=n[n.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(a=this.tokenizer.emStrong(i,R,y))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.codespan(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.br(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.del(i))i=i.substring(a.raw.length),n.push(a);else if(a=this.tokenizer.autolink(i,at))i=i.substring(a.raw.length),n.push(a);else if(this.state.inLink||!(a=this.tokenizer.url(i,at))){if(m=i,this.options.extensions&&this.options.extensions.startInline){let P=1/0;const O=i.slice(1);let N;this.options.extensions.startInline.forEach(function(tt){N=tt.call({lexer:this},O),typeof N=="number"&&N>=0&&(P=Math.min(P,N))}),P<1/0&&P>=0&&(m=i.substring(0,P+1))}if(a=this.tokenizer.inlineText(m,ot))i=i.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(y=a.raw.slice(-1)),k=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):n.push(a);else if(i){const P="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(P);break}throw new Error(P)}}else i=i.substring(a.raw.length),n.push(a);return n}}class rt{constructor(i){this.options=i||s}code(i,n,a){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const m=this.options.highlight(i,o);m!=null&&m!==i&&(a=!0,i=m)}return i=i.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+M(o,!0)+'">'+(a?i:M(i,!0))+`</code></pre>
`:"<pre><code>"+(a?i:M(i,!0))+`</code></pre>
`}blockquote(i){return`<blockquote>
`+i+`</blockquote>
`}html(i){return i}heading(i,n,a,o){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+o.slug(a)+'">'+i+"</h"+n+`>
`:"<h"+n+">"+i+"</h"+n+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(i,n,a){const o=n?"ol":"ul";return"<"+o+(n&&a!==1?' start="'+a+'"':"")+`>
`+i+"</"+o+`>
`}listitem(i){return"<li>"+i+`</li>
`}checkbox(i){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(i){return"<p>"+i+`</p>
`}table(i,n){return n&&(n="<tbody>"+n+"</tbody>"),`<table>
<thead>
`+i+`</thead>
`+n+`</table>
`}tablerow(i){return`<tr>
`+i+`</tr>
`}tablecell(i,n){const a=n.header?"th":"td";return(n.align?"<"+a+' align="'+n.align+'">':"<"+a+">")+i+"</"+a+`>
`}strong(i){return"<strong>"+i+"</strong>"}em(i){return"<em>"+i+"</em>"}codespan(i){return"<code>"+i+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(i){return"<del>"+i+"</del>"}link(i,n,a){if((i=ut(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<a href="'+M(i)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+a+"</a>",o}image(i,n,a){if((i=ut(this.options.sanitize,this.options.baseUrl,i))===null)return a;let o='<img src="'+i+'" alt="'+a+'"';return n&&(o+=' title="'+n+'"'),o+=this.options.xhtml?"/>":">",o}text(i){return i}}class lt{strong(i){return i}em(i){return i}codespan(i){return i}del(i){return i}html(i){return i}text(i){return i}link(i,n,a){return""+a}image(i,n,a){return""+a}br(){return""}}class qt{constructor(){this.seen={}}serialize(i){return i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(i,n){let a=i,o=0;if(this.seen.hasOwnProperty(a)){o=this.seen[i];do o++,a=i+"-"+o;while(this.seen.hasOwnProperty(a))}return n||(this.seen[i]=o,this.seen[a]=0),a}slug(i,n={}){const a=this.serialize(i);return this.getNextSafeSlug(a,n.dryrun)}}class ft{constructor(i){this.options=i||s,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new lt,this.slugger=new qt}static parse(i,n){return new ft(n).parse(i)}static parseInline(i,n){return new ft(n).parseInline(i)}parse(i,n=!0){let a,o,m,v,k,y,R,P,O,N,tt,vt,K,ht,q,wt,Ct,pt,St,V="";const mt=i.length;for(a=0;a<mt;a++)if(N=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[N.type]&&(St=this.options.extensions.renderers[N.type].call({parser:this},N),St!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(N.type)))V+=St||"";else switch(N.type){case"space":continue;case"hr":V+=this.renderer.hr();continue;case"heading":V+=this.renderer.heading(this.parseInline(N.tokens),N.depth,C(this.parseInline(N.tokens,this.textRenderer)),this.slugger);continue;case"code":V+=this.renderer.code(N.text,N.lang,N.escaped);continue;case"table":for(P="",R="",v=N.header.length,o=0;o<v;o++)R+=this.renderer.tablecell(this.parseInline(N.header[o].tokens),{header:!0,align:N.align[o]});for(P+=this.renderer.tablerow(R),O="",v=N.rows.length,o=0;o<v;o++){for(y=N.rows[o],R="",k=y.length,m=0;m<k;m++)R+=this.renderer.tablecell(this.parseInline(y[m].tokens),{header:!1,align:N.align[m]});O+=this.renderer.tablerow(R)}V+=this.renderer.table(P,O);continue;case"blockquote":O=this.parse(N.tokens),V+=this.renderer.blockquote(O);continue;case"list":for(tt=N.ordered,vt=N.start,K=N.loose,v=N.items.length,O="",o=0;o<v;o++)q=N.items[o],wt=q.checked,Ct=q.task,ht="",q.task&&(pt=this.renderer.checkbox(wt),K?q.tokens.length>0&&q.tokens[0].type==="paragraph"?(q.tokens[0].text=pt+" "+q.tokens[0].text,q.tokens[0].tokens&&q.tokens[0].tokens.length>0&&q.tokens[0].tokens[0].type==="text"&&(q.tokens[0].tokens[0].text=pt+" "+q.tokens[0].tokens[0].text)):q.tokens.unshift({type:"text",text:pt}):ht+=pt),ht+=this.parse(q.tokens,K),O+=this.renderer.listitem(ht,Ct,wt);V+=this.renderer.list(O,tt,vt);continue;case"html":V+=this.renderer.html(N.text);continue;case"paragraph":V+=this.renderer.paragraph(this.parseInline(N.tokens));continue;case"text":for(O=N.tokens?this.parseInline(N.tokens):N.text;a+1<mt&&i[a+1].type==="text";)N=i[++a],O+=`
`+(N.tokens?this.parseInline(N.tokens):N.text);V+=n?this.renderer.paragraph(O):O;continue;default:{const Et='Token with "'+N.type+'" type was not found.';if(this.options.silent)return void console.error(Et);throw new Error(Et)}}return V}parseInline(i,n){n=n||this.renderer;let a,o,m,v="";const k=i.length;for(a=0;a<k;a++)if(o=i[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(m=this.options.extensions.renderers[o.type].call({parser:this},o),m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))v+=m||"";else switch(o.type){case"escape":case"text":v+=n.text(o.text);break;case"html":v+=n.html(o.text);break;case"link":v+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break;case"image":v+=n.image(o.href,o.title,o.text);break;case"strong":v+=n.strong(this.parseInline(o.tokens,n));break;case"em":v+=n.em(this.parseInline(o.tokens,n));break;case"codespan":v+=n.codespan(o.text);break;case"br":v+=n.br();break;case"del":v+=n.del(this.parseInline(o.tokens,n));break;default:{const y='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(y);throw new Error(y)}}return v}}function $(L,i,n){if(L==null)throw new Error("marked(): input parameter is undefined or null");if(typeof L!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(L)+", string expected");if(typeof i=="function"&&(n=i,i=null),H(i=Q({},$.defaults,i||{})),n){const a=i.highlight;let o;try{o=J.lex(L,i)}catch(k){return n(k)}const m=function(k){let y;if(!k)try{i.walkTokens&&$.walkTokens(o,i.walkTokens),y=ft.parse(o,i)}catch(R){k=R}return i.highlight=a,k?n(k):n(null,y)};if(!a||a.length<3||(delete i.highlight,!o.length))return m();let v=0;return $.walkTokens(o,function(k){k.type==="code"&&(v++,setTimeout(()=>{a(k.text,k.lang,function(y,R){if(y)return m(y);R!=null&&R!==k.text&&(k.text=R,k.escaped=!0),v--,v===0&&m()})},0))}),void(v===0&&m())}try{const a=J.lex(L,i);return i.walkTokens&&$.walkTokens(a,i.walkTokens),ft.parse(a,i)}catch(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+M(a.message+"",!0)+"</pre>";throw a}}return $.options=$.setOptions=function(L){var i;return Q($.defaults,L),i=$.defaults,s=i,$},$.getDefaults=e,$.defaults=s,$.use=function(...L){const i=Q({},...L),n=$.defaults.extensions||{renderers:{},childTokens:{}};let a;L.forEach(o=>{if(o.extensions&&(a=!0,o.extensions.forEach(m=>{if(!m.name)throw new Error("extension name required");if(m.renderer){const v=n.renderers?n.renderers[m.name]:null;n.renderers[m.name]=v?function(...k){let y=m.renderer.apply(this,k);return y===!1&&(y=v.apply(this,k)),y}:m.renderer}if(m.tokenizer){if(!m.level||m.level!=="block"&&m.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[m.level]?n[m.level].unshift(m.tokenizer):n[m.level]=[m.tokenizer],m.start&&(m.level==="block"?n.startBlock?n.startBlock.push(m.start):n.startBlock=[m.start]:m.level==="inline"&&(n.startInline?n.startInline.push(m.start):n.startInline=[m.start]))}m.childTokens&&(n.childTokens[m.name]=m.childTokens)})),o.renderer){const m=$.defaults.renderer||new rt;for(const v in o.renderer){const k=m[v];m[v]=(...y)=>{let R=o.renderer[v].apply(m,y);return R===!1&&(R=k.apply(m,y)),R}}i.renderer=m}if(o.tokenizer){const m=$.defaults.tokenizer||new b;for(const v in o.tokenizer){const k=m[v];m[v]=(...y)=>{let R=o.tokenizer[v].apply(m,y);return R===!1&&(R=k.apply(m,y)),R}}i.tokenizer=m}if(o.walkTokens){const m=$.defaults.walkTokens;i.walkTokens=function(v){o.walkTokens.call(this,v),m&&m.call(this,v)}}a&&(i.extensions=n),$.setOptions(i)})},$.walkTokens=function(L,i){for(const n of L)switch(i.call($,n),n.type){case"table":for(const a of n.header)$.walkTokens(a.tokens,i);for(const a of n.rows)for(const o of a)$.walkTokens(o.tokens,i);break;case"list":$.walkTokens(n.items,i);break;default:$.defaults.extensions&&$.defaults.extensions.childTokens&&$.defaults.extensions.childTokens[n.type]?$.defaults.extensions.childTokens[n.type].forEach(function(a){$.walkTokens(n[a],i)}):n.tokens&&$.walkTokens(n.tokens,i)}},$.parseInline=function(L,i){if(L==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof L!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(L)+", string expected");H(i=Q({},$.defaults,i||{}));try{const n=J.lexInline(L,i);return i.walkTokens&&$.walkTokens(n,i.walkTokens),ft.parseInline(n,i)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,i.silent)return"<p>An error occurred:</p><pre>"+M(n.message+"",!0)+"</pre>";throw n}},$.Parser=ft,$.parser=ft.parse,$.Renderer=rt,$.TextRenderer=lt,$.Lexer=J,$.lexer=J.lex,$.Tokenizer=b,$.Slugger=qt,$.parse=$,()=>{let L,i,n=null;function a(){if(n&&!n.closed)n.focus();else{if(n=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),n.marked=$,n.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!n)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const k=i.getConfig().url,y=typeof k=="string"?k:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;L=setInterval(function(){n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:i.getState(),url:y}),"*")},500),window.addEventListener("message",m)})()}}function o(k){let y=i.getCurrentSlide(),R=y.querySelectorAll("aside.notes"),P=y.querySelector(".current-fragment"),O={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:i.getState()};if(y.hasAttribute("data-notes")&&(O.notes=y.getAttribute("data-notes"),O.whitespace="pre-wrap"),P){let N=P.querySelector("aside.notes");N?(O.notes=N.innerHTML,O.markdown=typeof N.getAttribute("data-markdown")=="string",R=null):P.hasAttribute("data-notes")&&(O.notes=P.getAttribute("data-notes"),O.whitespace="pre-wrap",R=null)}R&&(O.notes=Array.from(R).map(N=>N.innerHTML).join(`
`),O.markdown=R[0]&&typeof R[0].getAttribute("data-markdown")=="string"),n.postMessage(JSON.stringify(O),"*")}function m(k){if(function(y){try{return window.location.origin===y.source.location.origin}catch{return!1}}(k)){let y=JSON.parse(k.data);y&&y.namespace==="reveal-notes"&&y.type==="connected"?(clearInterval(L),v()):y&&y.namespace==="reveal-notes"&&y.type==="call"&&function(R,P,O){let N=i[R].apply(i,P);n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:N,callId:O}),"*")}(y.methodName,y.arguments,y.callId)}}function v(){i.on("slidechanged",o),i.on("fragmentshown",o),i.on("fragmenthidden",o),i.on("overviewhidden",o),i.on("overviewshown",o),i.on("paused",o),i.on("resumed",o),o()}return{id:"notes",init:function(k){i=k,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?a():window.addEventListener("message",y=>{if(!n&&typeof y.data=="string"){let P;try{P=JSON.parse(y.data)}catch{}P&&P.namespace==="reveal-notes"&&P.type==="heartbeat"&&(R=y.source,n&&!n.closed?n.focus():(n=R,window.addEventListener("message",m),v()))}var R}),i.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){a()}))},open:a}}})})(We);var Mn=We.exports;const In=Nn(Mn),zn={hash:!0,plugins:[In],totalTime:40*60,progress:!1,slideNumber:!1};Rt.initialize(zn);const Dn=async()=>{try{await navigator.serviceWorker.register("/sw.js")}catch(f){console.error(`Registration failed with ${f}`)}};window.addEventListener("load",Dn);
