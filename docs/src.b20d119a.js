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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lang=exports.countriesList=exports.SOURCE_TYPES_LIST=exports.URL_DATA=exports.MALE=exports.FEMALE=exports.maxRadius=exports.initialRadius=exports.initialOpacity=exports.framesPerSecond=exports.initCenter=exports.mapDarkStyle=void 0;var e="mapbox://styles/mapbox/streets-v11";exports.mapDarkStyle=e;var a=[-39.11133,36.66842];exports.initCenter=a;var n=60;exports.framesPerSecond=n;var i=1;exports.initialOpacity=i;var t=5;exports.initialRadius=t;var s=18;exports.maxRadius=s;var r="Female";exports.FEMALE=r;var c="Male";exports.MALE=c;var m="https://raw.githubusercontent.com/geochicasosm/lascallesdelasmujeres/master";exports.URL_DATA=m;var o=["line","fill"];exports.SOURCE_TYPES_LIST=o;var l=[{id:"argentina",name:"Argentina",citiesList:[{id:"buenosaires",name:"Buenos Aires",datos:{numLink:86,pcLink:67.7,numNoLink:41,pcNoLink:32.3,numMale:1941,numFemale:127,pcMale:93.9,pcFemale:6.1,totalNames:2068},center:[-58.37723,-34.61315]},{id:"chajari",name:"Chajarí",datos:{numLink:7,pcLink:53.8,numNoLink:6,pcNoLink:46.2,numMale:98,numFemale:13,pcMale:88.3,pcFemale:11.7,totalNames:111},center:[-58,-30.75]},{id:"ciudaddesanluis",name:"Ciudad de San Luis",datos:{numLink:13,pcLink:50,numNoLink:13,pcNoLink:50,numMale:165,numFemale:26,pcMale:86.4,pcFemale:13.6,totalNames:191},center:[-66.33563,-33.29501]},{id:"cordoba",name:"Córdoba",datos:{numLink:95,pcLink:59,numNoLink:66,pcNoLink:41,numMale:2096,numFemale:161,pcMale:92.9,pcFemale:7.1,totalNames:2257},center:[-64.183334,-31.416668]},{id:"resistencia",name:"Resistencia",datos:{numLink:51,pcLink:75,numNoLink:17,pcNoLink:25,numMale:474,numFemale:68,pcMale:87.5,pcFemale:12.5,totalNames:542},center:[-58.98652,-27.45112]},{id:"rosario",name:"Rosario",datos:{numLink:28,pcLink:43.8,numNoLink:36,pcNoLink:56.3,numMale:504,numFemale:64,pcMale:88.7,pcFemale:11.3,totalNames:568},center:[-60.6553737,-32.9427715]},{id:"salta",name:"Salta",datos:{numLink:89,pcLink:47.1,numNoLink:100,pcNoLink:52.9,numMale:1213,numFemale:189,pcMale:86.5,pcFemale:13.5,totalNames:1402},center:[-65.41,-24.789]},{id:"santafe",name:"Santa Fe",datos:{numLink:20,pcLink:64.5,numNoLink:11,pcNoLink:35.5,numMale:433,numFemale:31,pcMale:93.3,pcFemale:6.7,totalNames:464},center:[-60.7077,-31.60135]}]},{id:"bolivia",name:"Bolivia",citiesList:[{id:"cochabamba",name:"Cochabamba",datos:{numLink:16,pcLink:34.8,numNoLink:30,pcNoLink:65.2,numMale:617,numFemale:46,pcMale:93.1,pcFemale:6.9,totalNames:663},center:[-66.1568,-17.3895]}]},{id:"cuba",name:"Cuba",citiesList:[{id:"habana",name:"La Habana",datos:{numLink:42,pcLink:36.2,numNoLink:74,pcNoLink:63.8,numMale:191,numFemale:116,pcMale:62.2,pcFemale:37.8,totalNames:307},center:[-82.366592,23.113592]}]},{id:"espana",name:"España",citiesList:[{id:"badalona",name:"Badalona",datos:{numLink:37,pcLink:94.9,numNoLink:2,pcNoLink:5.1,numMale:305,numFemale:39,pcMale:88.7,pcFemale:11.3,totalNames:344},center:[2.24741,41.45004]},{id:"barcelona",name:"Barcelona",datos:{numLink:123,pcLink:69.1,numNoLink:55,pcNoLink:30.9,numMale:911,numFemale:178,pcMale:83.7,pcFemale:16.3,totalNames:1089},center:[2.154007,41.390205]},{id:"girona",name:"Girona",datos:{numLink:42,pcLink:77.8,numNoLink:12,pcNoLink:22.2,numMale:279,numFemale:54,pcMale:83.8,pcFemale:16.2,totalNames:333},center:[2.8239,41.9842]},{id:"madrid",name:"Madrid",datos:{numLink:379,pcLink:52.2,numNoLink:347,pcNoLink:47.8,numMale:2674,numFemale:726,pcMale:78.6,pcFemale:21.4,totalNames:3400},center:[-3.7037,40.41677]},{id:"zaragoza",name:"Zaragoza",datos:{numLink:185,pcLink:77.7,numNoLink:53,pcNoLink:22.3,numMale:1090,numFemale:238,pcMale:82.1,pcFemale:17.9,totalNames:1328},center:[-.87734,41.65606]}]},{id:"mexico",name:"México",citiesList:[{id:"cdmx",name:"C. de México",datos:{numLink:161,pcLink:47.8,numNoLink:176,pcNoLink:52.2,numMale:2577,numFemale:337,pcMale:88.4,pcFemale:11.6,totalNames:2914},center:[-99.133205,19.432608]}]},{id:"paraguay",name:"Paraguay",citiesList:[{id:"asuncion",name:"Asunción",datos:{numLink:27,pcLink:44.3,numNoLink:34,pcNoLink:55.7,numMale:974,numFemale:61,pcMale:94.1,pcFemale:5.9,totalNames:1035},center:[-57.63591,-25.30066]},{id:"encarnacion",name:"Encarnación",datos:{numLink:11,pcLink:45.8,numNoLink:13,pcNoLink:54.2,numMale:98,numFemale:24,pcMale:80.3,pcFemale:19.7,totalNames:122},center:[-55.86667,-27.33056]}]},{id:"peru",name:"Perú",citiesList:[{id:"lima",name:"Lima",datos:{numLink:155,pcLink:58.1,numNoLink:112,pcNoLink:41.9,numMale:2881,numFemale:267,pcMale:91.5,pcFemale:8.5,totalNames:3148},center:[-77.02824,-12.04318]}]},{id:"uruguay",name:"Uruguay",citiesList:[{id:"montevideo",name:"Montevideo",datos:{numLink:78,pcLink:47.9,numNoLink:85,pcNoLink:52.1,numMale:1875,numFemale:163,pcMale:92,pcFemale:8,totalNames:2038},center:[-56.18816,-34.90328]}]}];exports.countriesList=l;var p={es:{panelDescriptionText1:"Mapa generado a partir de las calles con nombre de mujeres, en diferentes ciudades de habla hispana (Latinoamérica y España).",panelDescriptionText2:"El objetivo es visibilizar la brecha que existe históricamente en la representación de figuras femeninas en las calles de las ciudades.",panelDescriptionTextShort:"Mapa de las calles con nombre de mujer en ciudades de Latinoamérica y España, para visibilizar la brecha que existe en la representación de figuras femeninas en las ciudades.",panelProjectBy:"Un proyecto de",panelProjectBy2:"Proyecto de",menuTitle:"Las calles de las mujeres",chartTxt:{chartMen:"Hombres",chartWomen:"Mujeres",chartStreetsOf:"Calles de",chartHave:"tiene",chartNotHave:"no tiene",chartText1:"Mujeres con artículo en Wikipedia"},popupText:"Calle sin artículo"},ca:{panelDescriptionText1:"Mapa generat a partir dels carrers amb nom de dones, a diferents ciutats de parla hispana (Llatinoamèrica i Espanya).",panelDescriptionText2:"L'objectiu és visibilitzar la bretxa que existeix històricament en la representació de figures femenines als carrers de les ciutats.",panelDescriptionTextShort:"Mapa dels carrers amb nom de dona en ciutats de Llatinoamèrica i Espanya, per visibilitzar la bretxa que existeix en la representació de figures femenines a les ciutats.",panelProjectBy:"Un projecte de",panelProjectBy2:"Projecte de",menuTitle:"Els carrers de les dones",chartTxt:{chartMen:"Homes",chartWomen:"Dones",chartStreetsOf:"Carrers de",chartHave:"en té",chartNotHave:"no en té",chartText1:"Dones amb article a Wikipedia"},popupText:"Carrer sense article"},en:{panelDescriptionText1:"Map generated from the data obtained of Women Street names in Spanish speaking cities (Latin America and Spain).",panelDescriptionText2:"The objective is visualize the historic gap representing women figures in the streets of the cities.",panelDescriptionTextShort:"Map of the streets containing women's names in cities of Latin America and Spain, visualizing the gap representing women figures in the cities.",panelProjectBy:"A project from",panelProjectBy2:"Project from",menuTitle:"The street of the women",chartTxt:{chartMen:"Men",chartWomen:"Women",chartStreetsOf:"The street of",chartHave:"have",chartNotHave:"doesn't have",chartText1:"Women having a Wikipedia article"},popupText:"Street without article"}};exports.lang=p;
},{}],"XXGH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./Constants");function a(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}var i=function(){function n(){a(this,n)}return t(n,null,[{key:"loadGeojson",value:function(a,n,t,i,o,c){fetch("".concat(e.URL_DATA,"/data/").concat(n,"/final_tile.geojson")).then(function(e){return e.json()}).then(this.addGeojsonSource.bind(this,a,t,o,c,i,n))}},{key:"loadGeojsonTiles",value:function(a,n,t){for(var i=0;i<n;i++)fetch("".concat(e.URL_DATA,"/data/").concat(t,"/final_tile").concat(i,".geojson")).then(function(e){return e.json()}).then(this.addGeojsonSource.bind(this,a))}},{key:"getHTMLWikipediaLink",value:function(e,a){return""!==e?'<p class=""><a  class="btn btn-light" target="_blank" href=\''.concat(e,'\'><i class="fab fa-wikipedia-w"></i></a></p>'):'<p class=""><a  class="btn btn-light disabled" target="_blank" href=\''.concat(e,'\'><i class="fab fa-wikipedia-w"></i></a></p>\n              <span class="badge badge-secondary"><i class="fas fa-exclamation"></i>&nbsp;').concat(a,"</span>")}},{key:"addGeojsonSource",value:function(a,n,t,i,o,c,r){var s=n?5:4,l=n?4:3;a.addLayer({id:"".concat(c,"-line"),type:"line",source:{type:"geojson",data:r},layout:{"line-join":"round","line-cap":"round"},paint:{"line-blur":["case",["==",["get","wikipedia_link"],""],4,1],"line-color":["case",["==",["get","gender"],e.FEMALE],"#ffca3a","#00B99E"],"line-width":["case",["==",["get","gender"],e.FEMALE],s,l]},filter:["==","$type","LineString"]}),a.addLayer({id:"".concat(c,"-fill"),type:"fill",source:{type:"geojson",data:r},layout:{},paint:{"fill-color":["case",["==",["get","gender"],e.FEMALE],"#ffca3a","#00B99E"],"fill-opacity":["case",["==",["get","wikipedia_link"],""],.2,.6]},filter:["==","$type","Polygon"]}),this.addPopupEvents(a,c,n,i),this.addAnimatedPoint(a,"".concat(c,"-point"),"".concat(c,"-point"),o)}},{key:"addPopupEvents",value:function(a,n,t,i){var o=this;e.SOURCE_TYPES_LIST.forEach(function(c){var r=new mapboxgl.Popup,s=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});a.on("click","".concat(n,"-").concat(c),function(n){s.remove();var t=n.features[0].properties.wikipedia_link,c=n.features[0].properties,l=c.name,d=c.gender,p=d===e.FEMALE?"#ffca3af2":"#0e9686f2",u=d===e.FEMALE?"popup-female":"popup-male",f='<div class="row"><div class="col-sm"><div class="'.concat(u,'"><p>').concat(l,"</p>\n          ").concat(d===e.FEMALE?o.getHTMLWikipediaLink(t,i):"","</div></div></div>");r.setLngLat(n.lngLat).setHTML(f).addTo(a);var g=document.getElementsByClassName("mapboxgl-popup-content");0!==g.length&&(g[0].style.backgroundColor=p)}),t||(a.on("mouseenter","".concat(n,"-").concat(c),function(n){r.remove(),a.getCanvas().style.cursor="pointer";var t=n.features[0].properties.wikipedia_link,c=n.features[0].properties,l=c.name,d=c.gender,p=d===e.FEMALE?"#ffca3af2":"#0e9686f2",u=d===e.FEMALE?"popup-female":"popup-male",f='<div class="row"><div class="col-sm"><div class="'.concat(u,'"><p>').concat(l,"</p>\n            ").concat(d===e.FEMALE?o.getHTMLWikipediaLink(t,i):"","</div></div></div>");s.setLngLat(n.lngLat).setHTML(f).addTo(a);var g=document.getElementsByClassName("mapboxgl-popup-content");0!==g.length&&(g[0].style.backgroundColor=p)}),a.on("mouseleave","".concat(n,"-").concat(c),function(){a.getCanvas().style.cursor="",s.remove()}))})}},{key:"addAnimatedPoint",value:function(a,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0],o=e.initialOpacity,c=e.initialRadius;a.addSource(n,{type:"geojson",data:{type:"Point",coordinates:i}}),a.addLayer({id:t,source:n,type:"circle",paint:{"circle-radius":e.initialRadius,"circle-radius-transition":{duration:0},"circle-opacity-transition":{duration:0},"circle-color":"#FFCA3A"},minzoom:1,maxzoom:7}),a.addLayer({id:"".concat(t,"1"),source:n,type:"circle",paint:{"circle-radius":e.initialRadius,"circle-color":"#FFCA3A"},minzoom:1,maxzoom:7}),function t(){c+=(e.maxRadius-c)/e.framesPerSecond,o-=.9/e.framesPerSecond,a.setPaintProperty(n,"circle-radius",c),a.setPaintProperty(n,"circle-opacity",o<0?0:o),o<=0&&(c=e.initialRadius,o=e.initialOpacity),requestAnimationFrame(t)}()}}]),n}();exports.default=i;
},{"./Constants":"qYec"}],"SqvW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./MyMap")),t=a(require("./GeojsonService")),n=o(require("./Constants"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return u(e)||d(e,t)||c(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}function u(e){if(Array.isArray(e))return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}var f=function(){function r(){m(this,r),this.myMap=new e.default,this.isMobile=this.isMobileDevice(),this.currentLang=this.addText(),this.openToggleMenu=!1,this.selectedCity=window.location.hash?window.location.hash.replace("#",""):"",this.menuListELem=document.getElementById("menu-list"),this.panelListELem=document.getElementById("colectivas-list")}return v(r,[{key:"startApp",value:function(){this.initDataList(),document.getElementById("my-toggle-menu").addEventListener("click",this.updateToggleMenuIcon)}},{key:"initDataList",value:function(){for(var e=this,r=0;r<n.countriesList.length;r++){var o=n.countriesList[r],a=document.createElement("DIV"),i=document.createElement("A");a.setAttribute("id",o.id),a.classList.add("div-pais"),i.setAttribute("id","menu-".concat(o.id)),i.classList.add("menu-div-pais");var s=document.createElement("DIV");s.classList.add("nombre-pais");var c=document.createElement("DIV");c.classList.add("menu-nombre-pais"),s.appendChild(document.createTextNode(o.name.toLocaleUpperCase())),c.appendChild(document.createTextNode(o.name.toLocaleUpperCase())),a.appendChild(s),i.appendChild(c),this.panelListELem.appendChild(a),this.menuListELem.appendChild(i);for(var l=function(r){var s=o.citiesList[r];e.myMap.map.on("load",t.default.loadGeojson(e.myMap.map,s.id,e.isMobile,s.center,e.currentLang,n.lang[e.currentLang].popupText));var c=document.createElement("DIV"),l=document.createElement("A");c.setAttribute("id",s.id),c.classList.add("nombre-ciudad"),c.setAttribute("href","#".concat(s.id)),l.setAttribute("id","menu-".concat(s.id)),l.setAttribute("href","#".concat(s.id)),l.classList.add("nav-item","nav-link","my-menu-item"),c.addEventListener("mouseenter",e.addBackgroundColor),l.addEventListener("mouseenter",e.addBackgroundColor),c.addEventListener("mouseout",e.removeBackgroundColor,!1),l.addEventListener("mouseout",e.removeBackgroundColor,!1),c.appendChild(document.createTextNode(s.name.toLocaleUpperCase())),l.appendChild(document.createTextNode(s.name.toLocaleUpperCase())),c.onclick=function(){var t=document.getElementsByClassName("selected");0!==t.length&&t[0].classList.remove("selected"),c.classList.add("selected"),e.myMap.mapTo(s.center)},l.onclick=function(){var t=document.getElementsByClassName("menu-selected");0!==t.length&&t[0].classList.remove("menu-selected"),l.classList.add("menu-selected");var n=document.getElementsByClassName("navbar-collapse");0!==n.length&&n[0].classList.remove("show");var r=document.getElementById("menu-toggle-icon");r.classList.remove("fa-chevron-circle-right"),r.classList.add("fa-chevron-circle-down"),e.openToggleMenu=!1,e.myMap.mapTo(s.center)},c.addEventListener("mouseenter",e.addBackgroundColor),l.addEventListener("mouseenter",e.addBackgroundColor),c.addEventListener("mouseout",e.removeBackgroundColor,!1),l.addEventListener("mouseout",e.removeBackgroundColor,!1),a.appendChild(c),i.appendChild(l),e.selectedCity===s.id&&(c.classList.add("selected"),l.classList.add("menu-selected"),e.myMap.mapTo(s.center))},d=0;d<o.citiesList.length;d++)l(d)}}},{key:"addBackgroundColor",value:function(e){e.target.style.backgroundColor="#243342"}},{key:"removeBackgroundColor",value:function(e){e.target.style.backgroundColor=""}},{key:"isMobileDevice",value:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"updateToggleMenuIcon",value:function(){var e=document.getElementById("menu-toggle-icon");openToggleMenu?(e.classList.remove("fa-chevron-circle-right"),e.classList.add("fa-chevron-circle-down")):(e.classList.remove("fa-chevron-circle-down"),e.classList.add("fa-chevron-circle-right")),openToggleMenu=!openToggleMenu}},{key:"isBlank",value:function(e){return!e||/^\s*$/.test(e)}},{key:"addText",value:function(){var e=navigator.language||navigator.userLanguage;return e=this.isBlank(e)?"es":e.split("-")[0],n.lang[e]||(e="es"),Object.entries(n.lang[e]).forEach(function(e){var t=i(e,2),n=t[0],r=t[1],o=document.getElementById(n);o&&(o.innerHTML=r)}),e}}]),r}();exports.default=f;
},{"./MyMap":"v4MK","./GeojsonService":"XXGH","./Constants":"qYec"}],"Focm":[function(require,module,exports) {
"use strict";require("./styles.css"),require("./ga");var e=s(require("dotenv"));require("@fortawesome/fontawesome-free/css/all"),require("animate.css");var r=s(require("./services/MyApp"));function s(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){e.default.config(),(new r.default).startApp()};
},{"./styles.css":"Tnu0","./ga":"I9Q1","dotenv":"YF8F","@fortawesome/fontawesome-free/css/all":"jE9z","animate.css":"rDCW","./services/MyApp":"SqvW"}]},{},["Focm"], null)
//# sourceMappingURL=src.b20d119a.js.map