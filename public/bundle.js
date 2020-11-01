(()=>{"use strict";var t={25:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GameControl=void 0;var r=n(534),o=(n(963),n(662)),i=n(129);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(h,t);var e,n,r,u,l=(r=h,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(u){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function h(){return a(this,h),l.apply(this,arguments)}return e=h,n=[{key:"init",value:function(){}},{key:"build",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=s(b(h),"$",this).call(this,"GameControl"),r=globalThis.waitTime;e&&(c(n.childNodes).filter((function(t){return"A"==t.tagName})).forEach((function(t){return t.remove()})),globalThis.waitTime=0),globalThis.answer=o.util.range(3*(globalThis.world-1)+globalThis.stage).map(o.util.randomLevel),o.util.range(0,globalThis.world+1).forEach((function(e,r){setTimeout((function(){var e=document.createElement("a");e.className="circle",e.style["background-color"]=i.Lib.colorSet[r],e.id=r,e.addEventListener("click",(function(){t.onClick(r)}),!1),n.appendChild(e),r==world&&setTimeout((function(){t.run()}),2*globalThis.waitTime)}),globalThis.waitTime*r)})),e&&(globalThis.waitTime=r)}},{key:"run",value:function(){var t=this;globalThis.answer.forEach((function(e,n){setTimeout((function(){t.light(s(b(h),"$",t).call(t,e),!0),setTimeout((function(){t.light(s(b(h),"$",t).call(t,[e]),!1)}),.5*globalThis.rememberTime)}),globalThis.rememberTime*n)}))}},{key:"onClick",value:function(t){var e=this,n=document.createElement("a");n.style["background-color"]=i.Lib.colorSet[t],n.className="circle-icon",s(b(h),"$",this).call(this,"input").appendChild(n),globalThis.answer[0]==t?(globalThis.answer.shift(),0==globalThis.answer.length&&iziToast.show({title:"Correct!",message:"That's the corrent sequence.",position:"topCenter",timeout:1500,onClosed:function(){globalThis.stage<3?globalThis.stage++:(globalThis.stage=0,globalThis.world++),c(s(b(h),"$",e).call(e,"input").children).forEach((function(t){return t.remove()})),s(b(h),"$",e).call(e,"scoreboard").innerText="Stage: ".concat(globalThis.world,"- Level:").concat(globalThis.stage),e.build(!0)}})):iziToast.show({title:"Wrong!",message:"I'm sorry, you lost...\nClose ME to restart! ⇨",position:"topCenter",timeout:1e10,onClosing:function(){location.reload()}})}},{key:"light",value:function(t,e){t.style.border=e?"0.3vw solid white":null}}],null&&f(e.prototype,null),n&&f(e,n),h}(r.Listener);e.GameControl=h},129:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Lib=void 0;var n,r,o,i=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};e.Lib=i,o=["#9F9FBF","#AF9FBF","#BF9FBF","#BF9FAF","#BF9F9F","#BFAF9F","#BFBF9F","#AFBF9F","#9FBF9F","#9FBFAF","#9FBFBF"],(r="colorSet")in(n=i)?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o},534:(t,e)=>{function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.Listener=void 0;var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"$",value:function(t){return document.getElementById(t)}},{key:"$_",value:function(t){return document.getElementsByClassName(t)}}],null&&n(e.prototype,null),r&&n(e,r),t}();e.Listener=r},790:(t,e,n)=>{var r=n(25),o=n(168),i=n(963),u=n(680);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}window.onload=function(){return l.init()};var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"init",value:function(){new i.Traitable(globalThis).with({isGameActive:!1,isUserInputActive:!1,answer:[],waitTime:500,rememberTime:500}),new Array(r.GameControl,o.SettingControl,u.VisualController).forEach((function(t){return t.init()}))}}],null&&c(e.prototype,null),n&&c(e,n),t}()},168:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SettingControl=void 0;var r=n(534),o=n(963),i=n(25),u=n(662);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,t);var e,n,r,c,b=(r=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(c){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function h(){return l(this,h),b.apply(this,arguments)}return e=h,n=[{key:"init",value:function(){var t=this;f(y(h),"$",this).call(this,"StartButton").addEventListener("click",(function(){var e=f(y(h),"$",t).call(t,"StartButton");switch(f(y(h),"$",t).call(t,"difficulity").value){case"Eazy":globalThis.rememberTime+=200;break;case"Hard":globalThis.rememberTime-=200}new o.Traitable(globalThis).with({world:parseInt(f(y(h),"$",t).call(t,"world").value),stage:parseInt(f(y(h),"$",t).call(t,"stage").value)}),f(y(h),"$",t).call(t,"selection").remove(),f(y(h),"$",t).call(t,"scoreboard").innerText=globalThis.world+globalThis.stage>2?"You've resumed the game from ".concat(globalThis.world,"-").concat(globalThis.stage,"!"):"You've started a new game. Good luck!";var n=1,r=setInterval((function(){n<=.1&&(clearInterval(r),e.style.display="none",setTimeout((function(){i.GameControl.build()}),500)),new o.Traitable(e.style).with({opacity:n,filter:"alpha(opacity="+100*n+")"}),n*=.6}),50);u.util.range(parseInt(f(y(h),"$",t).call(t,"title").style["margin-top"].slice(0,2)),20).forEach((function(e,n){u.util.range(0,10).forEach((function(r){setTimeout((function(){f(y(h),"$",t).call(t,"title").style["margin-top"]="".concat(e,".").concat(r,"vh")}),30*n)}))}))}),!1)}}],null&&a(e.prototype,null),n&&a(e,n),h}(r.Listener);e.SettingControl=b},680:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.VisualController=void 0;var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,r,s,p=(r=y,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(s){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function y(){return i(this,y),p.apply(this,arguments)}return e=y,n=[{key:"init",value:function(){var t;$("select").selectOrDie({prefix:"From"}),new Typewriter("#title",{autoStart:!0,delay:100,deleteSpeed:100,loop:!1}).typeString("Simon").pauseFor(300).typeString('<span style="color: #BF9F9F;">Onkil</span>').pauseFor(300).deleteChars(3).pauseFor(300).typeString('<span style="color: #BF9F9F;">line</span>').pauseFor(1e3).start(),(t=c(f(y),"$_",this).call(this,"btn"),function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){return t.style.cursor="pointer"}))}}],null&&u(e.prototype,null),n&&u(e,n),y}(n(534).Listener);e.VisualController=s},963:(t,e)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function u(t,e,n){return(u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Traitable=void 0;var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,i,u,f,s=(e=p,i=c(),function(){var t,n=a(e);if(i){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return o(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).obj=t,e}return u=p,(f=[{key:"with",value:function(t){var e=this;return Object.entries(t).map((function(t){"object"==n(t[1])?(t[1]=Object.entries(t[1]),t[1].forEach((function(t){e.obj[t[0]]=t[1]}))):e.obj[t[0]]=t[1]})),this.obj}}])&&r(u.prototype,f),p}(i(Object));e.Traitable=f},662:(t,e)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return l(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function l(t,e,n){return(l=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0;var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(o,t);var e,n,r=(e=o,n=a(),function(){var t,r=s(e);if(n){var o=s(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)});function o(){return i(this,o),r.apply(this,arguments)}return o}(c(Object));e.util=y,p(y,"range",(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 2===e.length?Array.from({length:e[1]-e[0]+1},(function(t,n){return n+e[0]})):r(new Array(e[0]+1).keys())})),p(y,"randomLevel",(function(t){var e=y.range(globalThis.world+1);return e[e.length*Math.random()|0]}))}},e={};!function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(790)})();