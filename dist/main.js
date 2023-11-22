(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px;\n}\n\na {\n  text-decoration: none;\n  color: #111;\n  transition: color 0.3s ease 0s;\n}\na:hover {\n  color: #d62121;\n}\n\n.btn {\n  font-weight: 700;\n  color: #111;\n  transition: color 0.3s ease 0s;\n}\n.btn:hover {\n  color: #d62121;\n}\n.btn.active {\n  cursor: default;\n  color: #d62121;\n}\n\n.title,\n.description {\n  text-align: center;\n}\n\n.header {\n  margin-bottom: 20px;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\nimg {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n}\n\n.contact__links {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var a={};(()=>{n.d(a,{Z:()=>C});const e=n.p+"fe1b62a586490d6e97d6.jpg";function t(){const t=document.querySelector(".main"),n=document.createElement("section");n.classList.add("home");const a=new Image;a.src=e,n.appendChild(a);const o=document.createElement("h1");o.textContent="Poseidon Restaurant",o.classList.add("title"),n.appendChild(o);const r=document.createElement("p");r.textContent="Poseidon specializes in delicious food featuring fresh ingredients and masterful preparation by the Poseidon culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, Poseidon’s lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.",r.classList.add("description"),n.appendChild(r),t.appendChild(n)}var o=n(379),r=n.n(o),c=n(795),i=n.n(c),s=n(569),d=n.n(s),l=n(565),u=n.n(l),p=n(216),m=n.n(p),f=n(589),h=n.n(f),v=n(28),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=n.p+"6b7c882ae62a5bf84d83.jpg",b=n.p+"263995e487c7819149fb.png";function C(e){switch(document.querySelector(".main").textContent="",e){case"Home":t();break;case"Menu":!function(){const e=document.querySelector(".main"),t=document.createElement("section");t.classList.add("menu");const n=new Image;n.src=y,t.appendChild(n);const a=document.createElement("h2");a.textContent="Poseidon Restaurant Menu",a.classList.add("title"),t.appendChild(a);const o=document.createElement("p");o.textContent="Try something from our menu and you won't leave hungry!",o.classList.add("description"),t.appendChild(o),e.appendChild(t)}();break;case"Contact":!function(){const e=document.querySelector(".main"),t=document.createElement("section");t.classList.add("contact");const n=new Image;n.src=b,t.appendChild(n);const a=document.createElement("h2");a.textContent="Contacts",a.classList.add("title"),t.appendChild(a);const o=document.createElement("div");o.classList.add("contact__links"),t.appendChild(o);const r=document.createElement("a");r.href="tel:375291234567",r.textContent="Phone number: +375(29)1234567",o.appendChild(r);const c=document.createElement("a");c.href="https://maps.app.goo.gl/dnR1GiX3ouf1Bidt9",c.textContent="Adress: проспект Дзержинского 57, Минск 220089",o.appendChild(c),e.appendChild(t)}()}}!function(){const e=document.querySelector("#content"),n=document.createElement("header");n.classList.add("header");const a=document.createElement("nav");function o(e){e.preventDefault();const t=e.target.dataset.tabName;if(!t)return;const n=e.target;if(n.classList.contains("active"))return;const a=document.querySelectorAll(".btn");C(t),a.forEach((e=>e.classList.remove("active"))),n.classList.add("active")}a.classList.add("nav"),["Home","Menu","Contact"].forEach(((e,t)=>{const n=document.createElement("a");n.href="",n.textContent=e,n.dataset.tabName=e,n.classList.add("btn"),0===t&&n.classList.add("active"),n.addEventListener("click",o),a.appendChild(n)})),n.appendChild(a),e.appendChild(n);const r=document.createElement("main");r.classList.add("main"),e.appendChild(r),t()}()})()})();