parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tnu0":[function(require,module,exports) {

},{"./images/bg.png":[["bg.dffaf4de.png","LzfK"],"LzfK"]}],"I9Q1":[function(require,module,exports) {
function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","GA_UID"),a("set","anonymizeIp",!0);
},{}],"rDCW":[function(require,module,exports) {

},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"UUq2":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"pBGv"}],"YF8F":[function(require,module,exports) {
var process = require("process");
var e=require("process"),n=require("fs"),r=require("path");function t(e){console.log("[dotenv][DEBUG] ".concat(e))}var o="\n",a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g,i=/\n|\r|\r\n/;function l(e,n){var r=Boolean(n&&n.debug),l={};return e.toString().split(i).forEach(function(e,n){var i=e.match(a);if(null!=i){var s=i[1],u=i[2]||"",d=u.length-1,p='"'===u[0]&&'"'===u[d];"'"===u[0]&&"'"===u[d]||p?(u=u.substring(1,d),p&&(u=u.replace(c,o))):u=u.trim(),l[s]=u}else r&&t("did not match key and value when parsing line ".concat(n+1,": ").concat(e))}),l}function s(o){var a=r.resolve(e.cwd(),".env"),c="utf8",i=!1;o&&(null!=o.path&&(a=o.path),null!=o.encoding&&(c=o.encoding),null!=o.debug&&(i=!0));try{var s=l(n.readFileSync(a,{encoding:c}),{debug:i});return Object.keys(s).forEach(function(n){Object.prototype.hasOwnProperty.call(e.env,n)?i&&t('"'.concat(n,'" is already defined in `process.env` and will not be overwritten')):e.env[n]=s[n]}),{parsed:s}}catch(u){return{error:u}}}module.exports.config=s,module.exports.parse=l;
},{"fs":"rDCW","path":"UUq2","process":"pBGv"}],"jE9z":[function(require,module,exports) {

},{"./../webfonts/fa-brands-400.eot":[["fa-brands-400.37ac7aa9.eot","OeOC"],"OeOC"],"./../webfonts/fa-brands-400.woff2":[["fa-brands-400.75407efa.woff2","pV19"],"pV19"],"./../webfonts/fa-brands-400.woff":[["fa-brands-400.2ba681df.woff","Vw87"],"Vw87"],"./../webfonts/fa-brands-400.ttf":[["fa-brands-400.effdf7ca.ttf","ZUts"],"ZUts"],"./../webfonts/fa-brands-400.svg":[["fa-brands-400.5a5ec54a.svg","w9R3"],"w9R3"],"./../webfonts/fa-regular-400.eot":[["fa-regular-400.6eacca26.eot","aZUn"],"aZUn"],"./../webfonts/fa-regular-400.woff2":[["fa-regular-400.1d9d06ec.woff2","z6Vs"],"z6Vs"],"./../webfonts/fa-regular-400.woff":[["fa-regular-400.df770621.woff","HYrK"],"HYrK"],"./../webfonts/fa-regular-400.ttf":[["fa-regular-400.7b7b2e58.ttf","qzji"],"qzji"],"./../webfonts/fa-regular-400.svg":[["fa-regular-400.8492b0f5.svg","Oses"],"Oses"],"./../webfonts/fa-solid-900.eot":[["fa-solid-900.d183197b.eot","T17m"],"T17m"],"./../webfonts/fa-solid-900.woff2":[["fa-solid-900.45f9d2b3.woff2","y7TU"],"y7TU"],"./../webfonts/fa-solid-900.woff":[["fa-solid-900.a4dd9117.woff","PICE"],"PICE"],"./../webfonts/fa-solid-900.ttf":[["fa-solid-900.ec666f35.ttf","lbz5"],"lbz5"],"./../webfonts/fa-solid-900.svg":[["fa-solid-900.ab2ae31a.svg","WVgM"],"WVgM"]}],"v4MK":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[-66.1562,-17.4211],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mapbox://styles/mapbox/streets-v11";e(this,t),mapboxgl.accessToken="pk.eyJ1IjoibmFob215IiwiYSI6ImNrZzhhdmR6bjAwMXUyeHFjZTdqN3hwN3EifQ.vV6DlgPVXN_SUPokKWJ8tA",this.map=new mapboxgl.Map({container:"map",style:n,center:o,zoom:11})}return o(t,[{key:"mapTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13;this.map.flyTo({center:e,zoom:t})}}]),t}();exports.default=n;
},{}],"qYec":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lang=exports.collectiveList=exports.maxRadius=exports.initialRadius=exports.initialOpacity=exports.framesPerSecond=exports.initCenter=exports.mapDarkStyle=void 0;var e="mapbox://styles/mapbox/streets-v11";exports.mapDarkStyle=e;var i=[-39.11133,36.66842];exports.initCenter=i;var t=60;exports.framesPerSecond=t;var a=1;exports.initialOpacity=a;var r=5;exports.initialRadius=r;var s=18;exports.maxRadius=s;var u=[{id:"mc",name:"Mujeres Creando",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc.",history:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc. Cras pretium consequat sollicitudin. Nam consequat massa et libero vestibulum efficitur. Duis ac augue eget risus ornare ullamcorper eget et tortor.Vivamus luctus pretium est eu pulvinar. Curabitur nec sem ut quam hendrerit viverra. Nunc ultricies, quam nec aliquam pretium, turpis quam blandit nibh, a iaculis justo massa dictum arcu. Nullam magna velit, ornare sit amet leo ut, viverra blandit odio. Nulla viverra cursus nulla vitae sollicitudin. Fusce eget porta ipsum, sit amet viverra magna. Etiam pulvinar iaculis felis a malesuada. Mauris ut purus libero. Curabitur ullamcorper erat est, non aliquet libero rutrum sit amet. Fusce rutrum finibus ultrices. Pellentesque sed quam non urna convallis porta. Sed tincidunt lacus vitae aliquet finibus. ",type:"COLECTIVA",networks:[{fb:"https://www.facebook.com/MUJERESCREANDO1",tw:"https://www.facebook.com/MUJERESCREANDO1",in:"https://www.facebook.com/MUJERESCREANDO1",wsite:"http://mujerescreando.org/",wp:"+5917845623",address:"Calle los tres tristes tigres"}],center:[-68.147,-16.5013]},{id:"mc",name:"Mujeres Creando",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc.",history:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc. Cras pretium consequat sollicitudin. Nam consequat massa et libero vestibulum efficitur. Duis ac augue eget risus ornare ullamcorper eget et tortor.Vivamus luctus pretium est eu pulvinar. Curabitur nec sem ut quam hendrerit viverra. Nunc ultricies, quam nec aliquam pretium, turpis quam blandit nibh, a iaculis justo massa dictum arcu. Nullam magna velit, ornare sit amet leo ut, viverra blandit odio. Nulla viverra cursus nulla vitae sollicitudin. Fusce eget porta ipsum, sit amet viverra magna. Etiam pulvinar iaculis felis a malesuada. Mauris ut purus libero. Curabitur ullamcorper erat est, non aliquet libero rutrum sit amet. Fusce rutrum finibus ultrices. Pellentesque sed quam non urna convallis porta. Sed tincidunt lacus vitae aliquet finibus. ",type:"COLECTIVA",networks:[{fb:"https://www.facebook.com/MUJERESCREANDO1",tw:"https://www.facebook.com/MUJERESCREANDO1",in:"https://www.facebook.com/MUJERESCREANDO1",wsite:"http://mujerescreando.org/",wp:"+5917845623",address:"Calle los tres tristes tigres"}],center:[-68.147,-16.5013]},{id:"mc",name:"Mujeres Creando",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc.",history:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus dolor velit, a eleifend neque elementum vel. Pellentesque eu pharetra turpis. Nunc et nisl nec dui tristique vulputate in vel eros. Cras sed ligula dictum, molestie magna nec, bibendum orci. Proin eu eros id ante egestas eleifend eu vitae nunc. Cras pretium consequat sollicitudin. Nam consequat massa et libero vestibulum efficitur. Duis ac augue eget risus ornare ullamcorper eget et tortor.Vivamus luctus pretium est eu pulvinar. Curabitur nec sem ut quam hendrerit viverra. Nunc ultricies, quam nec aliquam pretium, turpis quam blandit nibh, a iaculis justo massa dictum arcu. Nullam magna velit, ornare sit amet leo ut, viverra blandit odio. Nulla viverra cursus nulla vitae sollicitudin. Fusce eget porta ipsum, sit amet viverra magna. Etiam pulvinar iaculis felis a malesuada. Mauris ut purus libero. Curabitur ullamcorper erat est, non aliquet libero rutrum sit amet. Fusce rutrum finibus ultrices. Pellentesque sed quam non urna convallis porta. Sed tincidunt lacus vitae aliquet finibus. ",type:"COLECTIVA",networks:[{fb:"https://www.facebook.com/MUJERESCREANDO1",tw:"https://www.facebook.com/MUJERESCREANDO1",in:"https://www.facebook.com/MUJERESCREANDO1",wsite:"http://mujerescreando.org/",wp:"+5917845623",address:"Calle los tres tristes tigres"}],center:[-68.147,-16.5013]}];exports.collectiveList=u;var n={es:{panelDescriptionText1:"Mapa generado a partir de las calles con nombre de mujeres, en diferentes ciudades de habla hispana (Latinoamérica y España).",panelDescriptionText2:"El objetivo es visibilizar la brecha que existe históricamente en la representación de figuras femeninas en las calles de las ciudades.",panelDescriptionTextShort:"Mapa de las calles con nombre de mujer en ciudades de Latinoamérica y España, para visibilizar la brecha que existe en la representación de figuras femeninas en las ciudades.",panelProjectBy:"Un proyecto de",panelProjectBy2:"Proyecto de",menuTitle:"Las calles de las mujeres",chartTxt:{chartMen:"Hombres",chartWomen:"Mujeres",chartStreetsOf:"Calles de",chartHave:"tiene",chartNotHave:"no tiene",chartText1:"Mujeres con artículo en Wikipedia"},popupText:"Calle sin artículo"}};exports.lang=n;
},{}],"XXGH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./Constants");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}var a=function(){function t(){n(this,t)}return o(t,null,[{key:"loadGeojson",value:function(n,t,o,a,i,c){fetch("".concat(e.URL_DATA,"/data/").concat(t,"/final_tile.geojson")).then(function(e){return e.json()}).then(this.addGeojsonSource.bind(this,n,o,i,c,a,t))}},{key:"loadGeojsonTiles",value:function(n,t,o){for(var a=0;a<t;a++)fetch("".concat(e.URL_DATA,"/data/").concat(o,"/final_tile").concat(a,".geojson")).then(function(e){return e.json()}).then(this.addGeojsonSource.bind(this,n))}},{key:"addGeojsonSource",value:function(n,t,o,a,i,c,r){var l=t?5:4,u=t?4:3;n.addLayer({id:"".concat(c,"-line"),type:"line",source:{type:"geojson",data:r},layout:{"line-join":"round","line-cap":"round"},paint:{"line-blur":["case",["==",["get","wikipedia_link"],""],4,1],"line-color":["case",["==",["get","gender"],e.FEMALE],"#ffca3a","#00B99E"],"line-width":["case",["==",["get","gender"],e.FEMALE],l,u]},filter:["==","$type","LineString"]}),n.addLayer({id:"".concat(c,"-fill"),type:"fill",source:{type:"geojson",data:r},layout:{},paint:{"fill-color":["case",["==",["get","gender"],e.FEMALE],"#ffca3a","#00B99E"],"fill-opacity":["case",["==",["get","wikipedia_link"],""],.2,.6]},filter:["==","$type","Polygon"]}),this.addAnimatedPoint(n,"".concat(c,"-point"),"".concat(c,"-point"),i)}}]),t}();exports.default=a;
},{"./Constants":"qYec"}],"SqvW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./MyMap")),t=o(require("./GeojsonService")),n=a(require("./Constants"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return u(e)||s(e,t)||l(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}function u(e){if(Array.isArray(e))return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}var v=function(){function r(){m(this,r),this.myMap=new e.default,this.currentLang=this.addText(),this.openToggleMenu=!1,this.selectedCity=window.location.hash?window.location.hash.replace("#",""):"",this.menuListELem=document.getElementById("menu-list"),this.panelListELem=document.getElementById("colectivas-list")}return g(r,[{key:"startApp",value:function(){this.initDataList(),document.getElementById("my-toggle-menu").addEventListener("click",this.updateToggleMenuIcon)}},{key:"initDataList",value:function(){for(var e=this,r=function(r){var a=n.collectiveList[r],c=document.createElement("DIV"),i=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),u=document.createElement("p"),m=document.createElement("p"),p=(document.createElement("A"),document.createElement("p"));c.setAttribute("id",a.id),c.classList.add("card"),i.classList.add("card-body"),l.classList.add("row"),s.classList.add("col-sm"),d.classList.add("col-sm"),u.classList.add("card-title"),m.classList.add("text-right"),p.classList.add("card-text"),u.appendChild(document.createTextNode(a.name)),m.appendChild(document.createTextNode(a.type)),p.appendChild(document.createTextNode(a.description)),s.appendChild(u),l.appendChild(s),d.appendChild(m),l.appendChild(d),i.appendChild(l),i.appendChild(p),c.appendChild(i),e.panelListELem.appendChild(c),(o=document.createElement("div")).className="marker",o.style.backgroundImage="url(images/ong.png)",console.log(o),new mapboxgl.Marker(o).setLngLat(a.center).addTo(e.myMap.map);for(var g=function(r){var o=a.networks[r];e.myMap.map.on("load",t.default.loadGeojson(e.myMap.map,e.currentLang,n.lang[e.currentLang].popupText));var i=document.createElement("DIV"),l=document.createElement("A");i.setAttribute("id",o.tw),i.classList.add("nombre-ciudad"),i.setAttribute("href","#".concat(o.tw)),l.setAttribute("id","menu-".concat(o.tw)),l.setAttribute("href","#".concat(o.tw)),l.classList.add("nav-item","nav-link","my-menu-item"),i.addEventListener("mouseenter",e.addBackgroundColor),l.addEventListener("mouseenter",e.addBackgroundColor),i.addEventListener("mouseout",e.removeBackgroundColor,!1),l.addEventListener("mouseout",e.removeBackgroundColor,!1),i.onclick=function(){var t=document.getElementsByClassName("selected");0!==t.length&&t[0].classList.remove("selected"),i.classList.add("selected"),e.myMap.mapTo(a.center)},c.onclick=function(){var t=document.getElementsByClassName("menu-selected");0!==t.length&&t[0].classList.remove("menu-selected"),c.classList.add("menu-selected");var n=document.getElementsByClassName("navbar-collapse");0!==n.length&&n[0].classList.remove("show");var r=document.getElementById("menu-toggle-icon");r.classList.remove("fa-chevron-circle-right"),r.classList.add("fa-chevron-circle-down"),e.openToggleMenu=!1,e.myMap.mapTo(a.center)},i.addEventListener("mouseenter",e.addBackgroundColor),l.addEventListener("mouseenter",e.addBackgroundColor),i.addEventListener("mouseout",e.removeBackgroundColor,!1),l.addEventListener("mouseout",e.removeBackgroundColor,!1)},v=0;v<a.networks.length;v++)g(v)},a=0;a<n.collectiveList.length;a++){var o;r(a)}}},{key:"addBackgroundColor",value:function(e){e.target.style.backgroundColor="#243342"}},{key:"removeBackgroundColor",value:function(e){e.target.style.backgroundColor=""}},{key:"updateToggleMenuIcon",value:function(){var e=document.getElementById("menu-toggle-icon");openToggleMenu?(e.classList.remove("fa-chevron-circle-right"),e.classList.add("fa-chevron-circle-down")):(e.classList.remove("fa-chevron-circle-down"),e.classList.add("fa-chevron-circle-right")),openToggleMenu=!openToggleMenu}},{key:"isBlank",value:function(e){return!e||/^\s*$/.test(e)}},{key:"addText",value:function(){var e=navigator.language||navigator.userLanguage;return e=this.isBlank(e)?"es":e.split("-")[0],n.lang[e]||(e="es"),Object.entries(n.lang[e]).forEach(function(e){var t=c(e,2),n=t[0],r=t[1],a=document.getElementById(n);a&&(a.innerHTML=r)}),e}}]),r}();exports.default=v;
},{"./MyMap":"v4MK","./GeojsonService":"XXGH","./Constants":"qYec"}],"Focm":[function(require,module,exports) {
"use strict";require("./styles.css"),require("./ga");var e=s(require("dotenv"));require("@fortawesome/fontawesome-free/css/all"),require("animate.css");var r=s(require("./services/MyApp"));function s(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){e.default.config(),(new r.default).startApp()};
},{"./styles.css":"Tnu0","./ga":"I9Q1","dotenv":"YF8F","@fortawesome/fontawesome-free/css/all":"jE9z","animate.css":"rDCW","./services/MyApp":"SqvW"}]},{},["Focm"], null)
//# sourceMappingURL=src.4d5504b0.js.map