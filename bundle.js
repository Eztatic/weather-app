/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  color: #F0F1F1;
  background-color: #2f5180;
}

body > p {
  text-align: center;
  font-size: 6rem;
  margin: 16px 0 50px 0;
}

body > div {
  height: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 12px;
}

img {
  max-width: 100%;
  height: auto;
}

main {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* SEARCH */
main > .search {
  position: relative;
}

main > .search > #location {
  color: #F0F1F1;
  background-color: #34445e;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  height: 48px;
  padding: 1rem 90px 1rem 1rem;
  border: none;
  border-radius: 12px;
  outline: none;
}

#location::placeholder {
  color: #F0F1F1;
}

main > .search > button#search {
  color: #F0F1F1;
  font-size: 1.5rem;
  line-height: 48px;
  padding: 0 24px;
  background-color: #2a5ba5;
  border: none;
  border-radius: 0 12px 12px 0;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: -1px;
}

main > .search > button#search:hover {
  background-color: #5478ad;
}

/* CURRENT WEATHER */
main > .current {
  padding: 0 1rem;
  display: flex;
}

.current > div:first-child {
  width: 80%;
}

.current > div:last-child{
  text-align: center;
  align-self: center;
  width: 20%;
}

.current > div:first-child > .location {
  font-size: 2rem;
}

.current > div:first-child > p:nth-child(2) {
  font-size: 1.25rem;
}

.current > div:first-child > .temperature {
  font-size: 3.5rem;
  margin-top: 40px;
}

.current > div:last-child > img{
  width: 8rem;
}

/* HOURLY FORECAST */
main > .hourly {
  background-color: #34445e;
  padding: 1.25rem;
  border-radius: 16px;
}

.hourly > p {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.hourly > div {
  display: flex;
  justify-content: space-around;
}

.hourly-container {
  text-align: center;
  width: fit-content;
}

.hourly-container > img {
  margin: 8px 0;
}

.hourly-container > .temperature {
  font-size: 1.5rem;
  font-weight: 600;
}

.vertical-line {
  background-color: #F0F1F1;
  width: 1px;
  height: auto;
  margin: 8px 0;
}

/* AIR CONDITIONS */
main > .air-conditions {
  background-color: #34445e;
  padding: 1.25rem;
  border-radius: 16px;
}

.air-conditions > p {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.air-conditions > div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.air-conditions > div > div {
  width: 48%;
}

.air-conditions > div > div > p:first-child {
  display: flex;
  align-items: center;
}

.air-conditions > div > div > p:first-child > span {
  margin-right: 8px;
}

.air-conditions > div > div > p:last-child{
  font-size: 2rem;
  margin: 4px 0 0 32px;
}

/* DAY FORECAST */
aside {
  background-color: #34445e;
  width: 20%;
  height: auto;
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

aside > p {
  font-size: 1.25rem;
}

aside > .day {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day > div  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* LOADER */
.loader-container {
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100vh;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(7.5px);
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  transition: opacity 0.75s, visibility 0.75s;
  opacity: .8;
}

.loader-hidden {
  opacity: 0;
  visibility: hidden;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 15px solid #dddddd;
  border-top-color: #5478ad;
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}

@keyframes loading {
  from {
        transform: rotate(0turn);
  }
  to {
        transform: rotate(1turn);
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  color: #F0F1F1;\n  background-color: #2f5180;\n}\n\nbody > p {\n  text-align: center;\n  font-size: 6rem;\n  margin: 16px 0 50px 0;\n}\n\nbody > div {\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  gap: 12px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nmain {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* SEARCH */\nmain > .search {\n  position: relative;\n}\n\nmain > .search > #location {\n  color: #F0F1F1;\n  background-color: #34445e;\n  font-size: 1rem;\n  font-weight: 400;\n  width: 100%;\n  height: 48px;\n  padding: 1rem 90px 1rem 1rem;\n  border: none;\n  border-radius: 12px;\n  outline: none;\n}\n\n#location::placeholder {\n  color: #F0F1F1;\n}\n\nmain > .search > button#search {\n  color: #F0F1F1;\n  font-size: 1.5rem;\n  line-height: 48px;\n  padding: 0 24px;\n  background-color: #2a5ba5;\n  border: none;\n  border-radius: 0 12px 12px 0;\n  outline: none;\n  cursor: pointer;\n  position: absolute;\n  right: -1px;\n}\n\nmain > .search > button#search:hover {\n  background-color: #5478ad;\n}\n\n/* CURRENT WEATHER */\nmain > .current {\n  padding: 0 1rem;\n  display: flex;\n}\n\n.current > div:first-child {\n  width: 80%;\n}\n\n.current > div:last-child{\n  text-align: center;\n  align-self: center;\n  width: 20%;\n}\n\n.current > div:first-child > .location {\n  font-size: 2rem;\n}\n\n.current > div:first-child > p:nth-child(2) {\n  font-size: 1.25rem;\n}\n\n.current > div:first-child > .temperature {\n  font-size: 3.5rem;\n  margin-top: 40px;\n}\n\n.current > div:last-child > img{\n  width: 8rem;\n}\n\n/* HOURLY FORECAST */\nmain > .hourly {\n  background-color: #34445e;\n  padding: 1.25rem;\n  border-radius: 16px;\n}\n\n.hourly > p {\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n}\n\n.hourly > div {\n  display: flex;\n  justify-content: space-around;\n}\n\n.hourly-container {\n  text-align: center;\n  width: fit-content;\n}\n\n.hourly-container > img {\n  margin: 8px 0;\n}\n\n.hourly-container > .temperature {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.vertical-line {\n  background-color: #F0F1F1;\n  width: 1px;\n  height: auto;\n  margin: 8px 0;\n}\n\n/* AIR CONDITIONS */\nmain > .air-conditions {\n  background-color: #34445e;\n  padding: 1.25rem;\n  border-radius: 16px;\n}\n\n.air-conditions > p {\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n}\n\n.air-conditions > div {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.air-conditions > div > div {\n  width: 48%;\n}\n\n.air-conditions > div > div > p:first-child {\n  display: flex;\n  align-items: center;\n}\n\n.air-conditions > div > div > p:first-child > span {\n  margin-right: 8px;\n}\n\n.air-conditions > div > div > p:last-child{\n  font-size: 2rem;\n  margin: 4px 0 0 32px;\n}\n\n/* DAY FORECAST */\naside {\n  background-color: #34445e;\n  width: 20%;\n  height: auto;\n  padding: 1.25rem;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\naside > p {\n  font-size: 1.25rem;\n}\n\naside > .day {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.day > div  {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n/* LOADER */\n.loader-container {\n  background: rgba(255, 255, 255, 0);\n  width: 100%;\n  height: 100vh;\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(7.5px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(7.5px);\n}\n\n.loader {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  transition: opacity 0.75s, visibility 0.75s;\n  opacity: .8;\n}\n\n.loader-hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.loader::after {\n  content: \"\";\n  width: 75px;\n  height: 75px;\n  border: 15px solid #dddddd;\n  border-top-color: #5478ad;\n  border-radius: 50%;\n  animation: loading 0.75s ease infinite;\n}\n\n@keyframes loading {\n  from {\n        transform: rotate(0turn);\n  }\n  to {\n        transform: rotate(1turn);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/customParseFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return(e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],h=!0===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""))}else i.call(this,e)}}}));

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var APIKey = '5YQ43Q8F29YCE4N6Z4DVAWAY9';
var location = 'Tokyo';
document.querySelector('#search').addEventListener('click', function () {
  searchWeather();
});
document.querySelector('#location').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchWeather();
  }
});
function searchWeather() {
  toggleLoader();
  location = document.querySelector('#location').value;
  presentWeather();
}
function generateHr(dayData) {
  var startHour = 6;
  var step = 3;
  var totalHours = 6;
  for (var i = 0; i < totalHours; i++) {
    var hourData = dayData.hours[startHour + i * step];
    hourlyForecast(hourData.datetime, hourData.icon, hourData.temp);
  }
  document.querySelector('.hourly > div > div:last-child').remove();
}
function generateDays(days) {
  days.slice(0, 7).forEach(function (day) {
    dailyForecast(day.datetime, day.icon, day.conditions, day.tempmax, day.tempmin);
  });
}
var presentData = function presentData(data) {
  reset();
  currentWeather(data.address, data.currentConditions.precipprob, data.currentConditions.temp, data.currentConditions.icon, data.currentConditions.conditions);
  airConditions(data.currentConditions.feelslike, data.currentConditions.windspeed, data.currentConditions.precip, data.currentConditions.uvindex);
  generateHr(data.days[0]);
  generateDays(data.days);
};
var presentWeather = function presentWeather() {
  getWeather().then(function (data) {
    presentData(data);
  })["catch"](function () {
    if (location === '') {
      alert('Search Bar Empty');
    } else {
      alert('Location not found');
    }
  })["finally"](function () {
    toggleLoader();
  });
};
function getWeather() {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var weather, weatherData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(location, "?unitGroup=metric&key=5YQ43Q8F29YCE4N6Z4DVAWAY9&contentType=json"), {
            mode: 'cors'
          });
        case 3:
          weather = _context.sent;
          if (weather.ok) {
            _context.next = 6;
            break;
          }
          throw new Error("HTTP error! status: ".concat(weather.status));
        case 6:
          _context.next = 8;
          return weather.json();
        case 8:
          weatherData = _context.sent;
          return _context.abrupt("return", weatherData);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", Promise.reject(_context.t0));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _getWeather.apply(this, arguments);
}
var currentWeather = function currentWeather(area, precip, temp, img, cond) {
  var location = document.querySelector('.current .location');
  var rain = document.querySelector('.current .precipitation');
  var temperature = document.querySelector('.current .temperature');
  var icon = document.querySelector('.current img');
  var condition = document.querySelector('.current .icon-label');
  location.innerText = area;
  rain.innerText = "".concat(precip, "%");
  temperature.innerText = "".concat(temp, "\xB0C");
  icon.setAttribute('src', "./icons/".concat(img, ".png"));
  condition.innerText = cond;
};
var airConditions = function airConditions(temp, speed, chance, index) {
  var temperature = document.querySelector('.real-feel .temperature');
  var windSpeed = document.querySelector('.wind .speed');
  var rain = document.querySelector('.rain .chance');
  var UV = document.querySelector('.uv-index .level');
  temperature.innerText = "".concat(temp, "\xB0C");
  windSpeed.innerText = "".concat(speed, " km/h");
  rain.innerText = "".concat(chance === null ? 0 : chance, "%");
  UV.innerText = index;
};
var hourlyForecast = function hourlyForecast(hour, img, temp) {
  var hours = document.querySelector('.hourly > div');
  var newHour = document.createElement('div');
  var time = document.createElement('p');
  var icon = document.createElement('img');
  var temperature = document.createElement('p');
  var separator = document.createElement('div');
  newHour.classList.add('hourly-container');
  time.classList.add('time');
  temperature.classList.add('temperature');
  separator.classList.add('vertical-line');
  icon.setAttribute('src', "./icons/".concat(img, ".png"));
  icon.setAttribute('alt', 'icon');
  dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default()));
  time.innerText = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(hour, 'HH:mm:ss').format('h:mm A');
  temperature.innerText = "".concat(temp, "\xB0C");
  newHour.appendChild(time);
  newHour.appendChild(icon);
  newHour.appendChild(temperature);
  hours.appendChild(newHour);
  hours.appendChild(separator);
};
var dailyForecast = function dailyForecast(day, img, conditions, maxTemp, minTemp) {
  var days = document.querySelector('aside');
  var dayContainer = document.createElement('div');
  var date = document.createElement('p');
  var iconContainer = document.createElement('div');
  var icon = document.createElement('img');
  var label = document.createElement('p');
  var temperature = document.createElement('p');
  var isToday = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(day).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(), 'day');
  dayContainer.classList.add('day');
  date.classList.add('date');
  label.classList.add('label');
  temperature.classList.add('temp');
  icon.setAttribute('src', "./icons/".concat(img, ".png"));
  icon.setAttribute('alt', 'icon');
  date.innerText = isToday ? 'Today' : dayjs__WEBPACK_IMPORTED_MODULE_1___default()(day, 'YYYY/MM/DD').format('dddd');
  label.innerText = conditions;
  temperature.innerText = "".concat(maxTemp, "/").concat(minTemp);
  iconContainer.appendChild(icon);
  iconContainer.appendChild(label);
  dayContainer.appendChild(date);
  dayContainer.appendChild(iconContainer);
  dayContainer.appendChild(temperature);
  days.appendChild(dayContainer);
};
var toggleLoader = function toggleLoader() {
  var loader = document.querySelector('.loader-container');
  loader.classList.toggle('loader-hidden');
};
var reset = function reset() {
  document.querySelector('.hourly > div').innerText = '';
  var day = document.querySelector('aside');
  var label = document.createElement('p');
  day.innerText = '';
  label.innerText = '7-Day Forecast';
  day.appendChild(label);
};
(function () {
  presentWeather();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxP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Q0FBQ2IsU0FBUyxDQUFDYyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQzFDLENBQUM7QUFFRCxJQUFNekgsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBUztFQUNsQm9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDMEQsU0FBUyxHQUFHLEVBQUU7RUFDdEQsSUFBTXRDLEdBQUcsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUMzQyxJQUFNZ0YsS0FBSyxHQUFHakYsUUFBUSxDQUFDb0UsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN6Qy9DLEdBQUcsQ0FBQ3NDLFNBQVMsR0FBRyxFQUFFO0VBQ2xCc0IsS0FBSyxDQUFDdEIsU0FBUyxHQUFHLGdCQUFnQjtFQUNsQ3RDLEdBQUcsQ0FBQ3NELFdBQVcsQ0FBQ00sS0FBSyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxDQUFDLFlBQVk7RUFDWDNFLGNBQWMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICNGMEYxRjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjUxODA7XG59XG5cbmJvZHkgPiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDZyZW07XG4gIG1hcmdpbjogMTZweCAwIDUwcHggMDtcbn1cblxuYm9keSA+IGRpdiB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbm1haW4ge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIFNFQVJDSCAqL1xubWFpbiA+IC5zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm1haW4gPiAuc2VhcmNoID4gI2xvY2F0aW9uIHtcbiAgY29sb3I6ICNGMEYxRjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ0NWU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMXJlbSA5MHB4IDFyZW0gMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbG9jYXRpb246OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNGMEYxRjE7XG59XG5cbm1haW4gPiAuc2VhcmNoID4gYnV0dG9uI3NlYXJjaCB7XG4gIGNvbG9yOiAjRjBGMUYxO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNWJhNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xcHg7XG59XG5cbm1haW4gPiAuc2VhcmNoID4gYnV0dG9uI3NlYXJjaDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDc4YWQ7XG59XG5cbi8qIENVUlJFTlQgV0VBVEhFUiAqL1xubWFpbiA+IC5jdXJyZW50IHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3VycmVudCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5jdXJyZW50ID4gZGl2Omxhc3QtY2hpbGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuXG4uY3VycmVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IC5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmN1cnJlbnQgPiBkaXY6Zmlyc3QtY2hpbGQgPiBwOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmN1cnJlbnQgPiBkaXY6Zmlyc3QtY2hpbGQgPiAudGVtcGVyYXR1cmUge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmN1cnJlbnQgPiBkaXY6bGFzdC1jaGlsZCA+IGltZ3tcbiAgd2lkdGg6IDhyZW07XG59XG5cbi8qIEhPVVJMWSBGT1JFQ0FTVCAqL1xubWFpbiA+IC5ob3VybHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0NDVlO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uaG91cmx5ID4gcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmhvdXJseSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaG91cmx5LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uaG91cmx5LWNvbnRhaW5lciA+IGltZyB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ob3VybHktY29udGFpbmVyID4gLnRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjFGMTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4vKiBBSVIgQ09ORElUSU9OUyAqL1xubWFpbiA+IC5haXItY29uZGl0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ0NWU7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5haXItY29uZGl0aW9ucyA+IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5haXItY29uZGl0aW9ucyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5haXItY29uZGl0aW9ucyA+IGRpdiA+IGRpdiB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5haXItY29uZGl0aW9ucyA+IGRpdiA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWlyLWNvbmRpdGlvbnMgPiBkaXYgPiBkaXYgPiBwOmZpcnN0LWNoaWxkID4gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uYWlyLWNvbmRpdGlvbnMgPiBkaXYgPiBkaXYgPiBwOmxhc3QtY2hpbGR7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiA0cHggMCAwIDMycHg7XG59XG5cbi8qIERBWSBGT1JFQ0FTVCAqL1xuYXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0NDVlO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYXNpZGUgPiBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG5hc2lkZSA+IC5kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXkgPiBkaXYgIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIExPQURFUiAqL1xuLmxvYWRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjVweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjVweCk7XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcbiAgb3BhY2l0eTogLjg7XG59XG5cbi5sb2FkZXItaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubG9hZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItdG9wLWNvbG9yOiAjNTQ3OGFkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xuICB9XG4gIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1Asb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkNBQTJDO0VBQzNDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtRQUNNLHdCQUF3QjtFQUM5QjtFQUNBO1FBQ00sd0JBQXdCO0VBQzlCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI0YwRjFGMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjUxODA7XFxufVxcblxcbmJvZHkgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIG1hcmdpbjogMTZweCAwIDUwcHggMDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLyogU0VBUkNIICovXFxubWFpbiA+IC5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5tYWluID4gLnNlYXJjaCA+ICNsb2NhdGlvbiB7XFxuICBjb2xvcjogI0YwRjFGMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ0NWU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAxcmVtIDkwcHggMXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNsb2NhdGlvbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGMEYxRjE7XFxufVxcblxcbm1haW4gPiAuc2VhcmNoID4gYnV0dG9uI3NlYXJjaCB7XFxuICBjb2xvcjogI0YwRjFGMTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE1YmE1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTFweDtcXG59XFxuXFxubWFpbiA+IC5zZWFyY2ggPiBidXR0b24jc2VhcmNoOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDc4YWQ7XFxufVxcblxcbi8qIENVUlJFTlQgV0VBVEhFUiAqL1xcbm1haW4gPiAuY3VycmVudCB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3VycmVudCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY3VycmVudCA+IGRpdjpsYXN0LWNoaWxke1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmN1cnJlbnQgPiBkaXY6Zmlyc3QtY2hpbGQgPiAubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY3VycmVudCA+IGRpdjpmaXJzdC1jaGlsZCA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQgPiBkaXY6Zmlyc3QtY2hpbGQgPiAudGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4uY3VycmVudCA+IGRpdjpsYXN0LWNoaWxkID4gaW1ne1xcbiAgd2lkdGg6IDhyZW07XFxufVxcblxcbi8qIEhPVVJMWSBGT1JFQ0FTVCAqL1xcbm1haW4gPiAuaG91cmx5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ0NWU7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmhvdXJseSA+IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmhvdXJseSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob3VybHktY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmhvdXJseS1jb250YWluZXIgPiBpbWcge1xcbiAgbWFyZ2luOiA4cHggMDtcXG59XFxuXFxuLmhvdXJseS1jb250YWluZXIgPiAudGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udmVydGljYWwtbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMUYxO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcblxcbi8qIEFJUiBDT05ESVRJT05TICovXFxubWFpbiA+IC5haXItY29uZGl0aW9ucyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0NDVlO1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5haXItY29uZGl0aW9ucyA+IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFpci1jb25kaXRpb25zID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLmFpci1jb25kaXRpb25zID4gZGl2ID4gZGl2IHtcXG4gIHdpZHRoOiA0OCU7XFxufVxcblxcbi5haXItY29uZGl0aW9ucyA+IGRpdiA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5haXItY29uZGl0aW9ucyA+IGRpdiA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQgPiBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4uYWlyLWNvbmRpdGlvbnMgPiBkaXYgPiBkaXYgPiBwOmxhc3QtY2hpbGR7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDRweCAwIDAgMzJweDtcXG59XFxuXFxuLyogREFZIEZPUkVDQVNUICovXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDQ1ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5hc2lkZSA+IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5hc2lkZSA+IC5kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXkgPiBkaXYgIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4vKiBMT0FERVIgKi9cXG4ubG9hZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDcuNXB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjVweCk7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMsIHZpc2liaWxpdHkgMC43NXM7XFxuICBvcGFjaXR5OiAuODtcXG59XFxuXFxuLmxvYWRlci1oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmxvYWRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJvcmRlcjogMTVweCBzb2xpZCAjZGRkZGRkO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzU0NzhhZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybik7XFxuICB9XFxuICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9jdXN0b21QYXJzZUZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e0xUUzpcImg6bW06c3MgQVwiLExUOlwiaDptbSBBXCIsTDpcIk1NL0REL1lZWVlcIixMTDpcIk1NTU0gRCwgWVlZWVwiLExMTDpcIk1NTU0gRCwgWVlZWSBoOm1tIEFcIixMTExMOlwiZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQVwifSx0PS8oXFxbW15bXSpcXF0pfChbLV86Ly4sKClcXHNdKyl8KEF8YXxRfFlZWVl8WVk/fHd3P3xNTT9NP00/fERvfEREP3xoaD98SEg/fG1tP3xzcz98U3sxLDN9fHp8Wlo/KS9nLG49L1xcZC8scj0vXFxkXFxkLyxpPS9cXGRcXGQ/LyxvPS9cXGQqW14tXzovLCgpXFxzXFxkXSsvLHM9e30sYT1mdW5jdGlvbihlKXtyZXR1cm4oZT0rZSkrKGU+Njg/MTkwMDoyZTMpfTt2YXIgZj1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7dGhpc1tlXT0rdH19LGg9Wy9bKy1dXFxkXFxkOj8oXFxkXFxkKT98Wi8sZnVuY3Rpb24oZSl7KHRoaXMuem9uZXx8KHRoaXMuem9uZT17fSkpLm9mZnNldD1mdW5jdGlvbihlKXtpZighZSlyZXR1cm4gMDtpZihcIlpcIj09PWUpcmV0dXJuIDA7dmFyIHQ9ZS5tYXRjaCgvKFsrLV18XFxkXFxkKS9nKSxuPTYwKnRbMV0rKCt0WzJdfHwwKTtyZXR1cm4gMD09PW4/MDpcIitcIj09PXRbMF0/LW46bn0oZSl9XSx1PWZ1bmN0aW9uKGUpe3ZhciB0PXNbZV07cmV0dXJuIHQmJih0LmluZGV4T2Y/dDp0LnMuY29uY2F0KHQuZikpfSxkPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1zLm1lcmlkaWVtO2lmKHIpe2Zvcih2YXIgaT0xO2k8PTI0O2krPTEpaWYoZS5pbmRleE9mKHIoaSwwLHQpKT4tMSl7bj1pPjEyO2JyZWFrfX1lbHNlIG49ZT09PSh0P1wicG1cIjpcIlBNXCIpO3JldHVybiBufSxjPXtBOltvLGZ1bmN0aW9uKGUpe3RoaXMuYWZ0ZXJub29uPWQoZSwhMSl9XSxhOltvLGZ1bmN0aW9uKGUpe3RoaXMuYWZ0ZXJub29uPWQoZSwhMCl9XSxROltuLGZ1bmN0aW9uKGUpe3RoaXMubW9udGg9MyooZS0xKSsxfV0sUzpbbixmdW5jdGlvbihlKXt0aGlzLm1pbGxpc2Vjb25kcz0xMDAqK2V9XSxTUzpbcixmdW5jdGlvbihlKXt0aGlzLm1pbGxpc2Vjb25kcz0xMCorZX1dLFNTUzpbL1xcZHszfS8sZnVuY3Rpb24oZSl7dGhpcy5taWxsaXNlY29uZHM9K2V9XSxzOltpLGYoXCJzZWNvbmRzXCIpXSxzczpbaSxmKFwic2Vjb25kc1wiKV0sbTpbaSxmKFwibWludXRlc1wiKV0sbW06W2ksZihcIm1pbnV0ZXNcIildLEg6W2ksZihcImhvdXJzXCIpXSxoOltpLGYoXCJob3Vyc1wiKV0sSEg6W2ksZihcImhvdXJzXCIpXSxoaDpbaSxmKFwiaG91cnNcIildLEQ6W2ksZihcImRheVwiKV0sREQ6W3IsZihcImRheVwiKV0sRG86W28sZnVuY3Rpb24oZSl7dmFyIHQ9cy5vcmRpbmFsLG49ZS5tYXRjaCgvXFxkKy8pO2lmKHRoaXMuZGF5PW5bMF0sdClmb3IodmFyIHI9MTtyPD0zMTtyKz0xKXQocikucmVwbGFjZSgvXFxbfFxcXS9nLFwiXCIpPT09ZSYmKHRoaXMuZGF5PXIpfV0sdzpbaSxmKFwid2Vla1wiKV0sd3c6W3IsZihcIndlZWtcIildLE06W2ksZihcIm1vbnRoXCIpXSxNTTpbcixmKFwibW9udGhcIildLE1NTTpbbyxmdW5jdGlvbihlKXt2YXIgdD11KFwibW9udGhzXCIpLG49KHUoXCJtb250aHNTaG9ydFwiKXx8dC5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNsaWNlKDAsMyl9KSkpLmluZGV4T2YoZSkrMTtpZihuPDEpdGhyb3cgbmV3IEVycm9yO3RoaXMubW9udGg9biUxMnx8bn1dLE1NTU06W28sZnVuY3Rpb24oZSl7dmFyIHQ9dShcIm1vbnRoc1wiKS5pbmRleE9mKGUpKzE7aWYodDwxKXRocm93IG5ldyBFcnJvcjt0aGlzLm1vbnRoPXQlMTJ8fHR9XSxZOlsvWystXT9cXGQrLyxmKFwieWVhclwiKV0sWVk6W3IsZnVuY3Rpb24oZSl7dGhpcy55ZWFyPWEoZSl9XSxZWVlZOlsvXFxkezR9LyxmKFwieWVhclwiKV0sWjpoLFpaOmh9O2Z1bmN0aW9uIGwobil7dmFyIHIsaTtyPW4saT1zJiZzLmZvcm1hdHM7Zm9yKHZhciBvPShuPXIucmVwbGFjZSgvKFxcW1teXFxdXStdKXwoTFRTP3xsezEsNH18THsxLDR9KS9nLChmdW5jdGlvbih0LG4scil7dmFyIG89ciYmci50b1VwcGVyQ2FzZSgpO3JldHVybiBufHxpW3JdfHxlW3JdfHxpW29dLnJlcGxhY2UoLyhcXFtbXlxcXV0rXSl8KE1NTU18TU18RER8ZGRkZCkvZywoZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0fHxuLnNsaWNlKDEpfSkpfSkpKS5tYXRjaCh0KSxhPW8ubGVuZ3RoLGY9MDtmPGE7Zis9MSl7dmFyIGg9b1tmXSx1PWNbaF0sZD11JiZ1WzBdLGw9dSYmdVsxXTtvW2ZdPWw/e3JlZ2V4OmQscGFyc2VyOmx9OmgucmVwbGFjZSgvXlxcW3xcXF0kL2csXCJcIil9cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxuPTAscj0wO248YTtuKz0xKXt2YXIgaT1vW25dO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXIrPWkubGVuZ3RoO2Vsc2V7dmFyIHM9aS5yZWdleCxmPWkucGFyc2VyLGg9ZS5zbGljZShyKSx1PXMuZXhlYyhoKVswXTtmLmNhbGwodCx1KSxlPWUucmVwbGFjZSh1LFwiXCIpfX1yZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5hZnRlcm5vb247aWYodm9pZCAwIT09dCl7dmFyIG49ZS5ob3Vyczt0P248MTImJihlLmhvdXJzKz0xMik6MTI9PT1uJiYoZS5ob3Vycz0wKSxkZWxldGUgZS5hZnRlcm5vb259fSh0KSx0fX1yZXR1cm4gZnVuY3Rpb24oZSx0LG4pe24ucC5jdXN0b21QYXJzZUZvcm1hdD0hMCxlJiZlLnBhcnNlVHdvRGlnaXRZZWFyJiYoYT1lLnBhcnNlVHdvRGlnaXRZZWFyKTt2YXIgcj10LnByb3RvdHlwZSxpPXIucGFyc2U7ci5wYXJzZT1mdW5jdGlvbihlKXt2YXIgdD1lLmRhdGUscj1lLnV0YyxvPWUuYXJnczt0aGlzLiR1PXI7dmFyIGE9b1sxXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7dmFyIGY9ITA9PT1vWzJdLGg9ITA9PT1vWzNdLHU9Znx8aCxkPW9bMl07aCYmKGQ9b1syXSkscz10aGlzLiRsb2NhbGUoKSwhZiYmZCYmKHM9bi5Mc1tkXSksdGhpcy4kZD1mdW5jdGlvbihlLHQsbixyKXt0cnl7aWYoW1wieFwiLFwiWFwiXS5pbmRleE9mKHQpPi0xKXJldHVybiBuZXcgRGF0ZSgoXCJYXCI9PT10PzFlMzoxKSplKTt2YXIgaT1sKHQpKGUpLG89aS55ZWFyLHM9aS5tb250aCxhPWkuZGF5LGY9aS5ob3VycyxoPWkubWludXRlcyx1PWkuc2Vjb25kcyxkPWkubWlsbGlzZWNvbmRzLGM9aS56b25lLG09aS53ZWVrLE09bmV3IERhdGUsWT1hfHwob3x8cz8xOk0uZ2V0RGF0ZSgpKSxwPW98fE0uZ2V0RnVsbFllYXIoKSx2PTA7byYmIXN8fCh2PXM+MD9zLTE6TS5nZXRNb250aCgpKTt2YXIgRCx3PWZ8fDAsZz1ofHwwLHk9dXx8MCxMPWR8fDA7cmV0dXJuIGM/bmV3IERhdGUoRGF0ZS5VVEMocCx2LFksdyxnLHksTCs2MCpjLm9mZnNldCoxZTMpKTpuP25ldyBEYXRlKERhdGUuVVRDKHAsdixZLHcsZyx5LEwpKTooRD1uZXcgRGF0ZShwLHYsWSx3LGcseSxMKSxtJiYoRD1yKEQpLndlZWsobSkudG9EYXRlKCkpLEQpfWNhdGNoKGUpe3JldHVybiBuZXcgRGF0ZShcIlwiKX19KHQsYSxyLG4pLHRoaXMuaW5pdCgpLGQmJiEwIT09ZCYmKHRoaXMuJEw9dGhpcy5sb2NhbGUoZCkuJEwpLHUmJnQhPXRoaXMuZm9ybWF0KGEpJiYodGhpcy4kZD1uZXcgRGF0ZShcIlwiKSkscz17fX1lbHNlIGlmKGEgaW5zdGFuY2VvZiBBcnJheSlmb3IodmFyIGM9YS5sZW5ndGgsbT0xO208PWM7bSs9MSl7b1sxXT1hW20tMV07dmFyIE09bi5hcHBseSh0aGlzLG8pO2lmKE0uaXNWYWxpZCgpKXt0aGlzLiRkPU0uJGQsdGhpcy4kTD1NLiRMLHRoaXMuaW5pdCgpO2JyZWFrfW09PT1jJiYodGhpcy4kZD1uZXcgRGF0ZShcIlwiKSl9ZWxzZSBpLmNhbGwodGhpcyxlKX19fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBjdXN0b21QYXJzZUZvcm1hdCBmcm9tICdkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXQnO1xuXG5jb25zdCBBUElLZXkgPSAnNVlRNDNROEYyOVlDRTRONlo0RFZBV0FZOSc7XG5sZXQgbG9jYXRpb24gPSAnVG9reW8nO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHNlYXJjaFdlYXRoZXIoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIHNlYXJjaFdlYXRoZXIoKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gIHRvZ2dsZUxvYWRlcigpO1xuICBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpLnZhbHVlO1xuICBwcmVzZW50V2VhdGhlcigpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhyKGRheURhdGEpIHtcbiAgY29uc3Qgc3RhcnRIb3VyID0gNjtcbiAgY29uc3Qgc3RlcCA9IDM7XG4gIGNvbnN0IHRvdGFsSG91cnMgPSA2O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxIb3VyczsgaSsrKSB7XG4gICAgY29uc3QgaG91ckRhdGEgPSBkYXlEYXRhLmhvdXJzW3N0YXJ0SG91ciArIGkgKiBzdGVwXTtcbiAgICBob3VybHlGb3JlY2FzdChob3VyRGF0YS5kYXRldGltZSwgaG91ckRhdGEuaWNvbiwgaG91ckRhdGEudGVtcCk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseSA+IGRpdiA+IGRpdjpsYXN0LWNoaWxkJykucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF5cyhkYXlzKSB7XG4gIGRheXMuc2xpY2UoMCwgNykuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgZGFpbHlGb3JlY2FzdChcbiAgICAgIGRheS5kYXRldGltZSxcbiAgICAgIGRheS5pY29uLFxuICAgICAgZGF5LmNvbmRpdGlvbnMsXG4gICAgICBkYXkudGVtcG1heCxcbiAgICAgIGRheS50ZW1wbWluLFxuICAgICk7XG4gIH0pO1xufVxuXG5jb25zdCBwcmVzZW50RGF0YSA9IChkYXRhKSA9PiB7XG4gIHJlc2V0KCk7XG5cbiAgY3VycmVudFdlYXRoZXIoXG4gICAgZGF0YS5hZGRyZXNzLFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMucHJlY2lwcHJvYixcbiAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXAsXG4gICAgZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uLFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcbiAgKTtcblxuICBhaXJDb25kaXRpb25zKFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlLFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkLFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMucHJlY2lwLFxuICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMudXZpbmRleCxcbiAgKTtcblxuICBnZW5lcmF0ZUhyKGRhdGEuZGF5c1swXSk7XG5cbiAgZ2VuZXJhdGVEYXlzKGRhdGEuZGF5cyk7XG59O1xuXG5jb25zdCBwcmVzZW50V2VhdGhlciA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlcigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHByZXNlbnREYXRhKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGlmIChsb2NhdGlvbiA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1NlYXJjaCBCYXIgRW1wdHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHRvZ2dsZUxvYWRlcigpO1xuICAgIH0pO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9NVlRNDNROEYyOVlDRTRONlo0RFZBV0FZOSZjb250ZW50VHlwZT1qc29uYCxcbiAgICAgIHttb2RlOiAnY29ycyd9LFxuICAgICk7XG4gICAgaWYgKCF3ZWF0aGVyLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHt3ZWF0aGVyLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufVxuXG5jb25zdCBjdXJyZW50V2VhdGhlciA9IChhcmVhLCBwcmVjaXAsIHRlbXAsIGltZywgY29uZCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5sb2NhdGlvbicpO1xuICBjb25zdCByYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnByZWNpcGl0YXRpb24nKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAudGVtcGVyYXR1cmUnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IGltZycpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuaWNvbi1sYWJlbCcpO1xuXG4gIGxvY2F0aW9uLmlubmVyVGV4dCA9IGFyZWE7XG4gIHJhaW4uaW5uZXJUZXh0ID0gYCR7cHJlY2lwfSVgO1xuICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt0ZW1wfcKwQ2A7XG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pY29ucy8ke2ltZ30ucG5nYCk7XG4gIGNvbmRpdGlvbi5pbm5lclRleHQgPSBjb25kO1xufTtcblxuY29uc3QgYWlyQ29uZGl0aW9ucyA9ICh0ZW1wLCBzcGVlZCwgY2hhbmNlLCBpbmRleCkgPT4ge1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFsLWZlZWwgLnRlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kIC5zcGVlZCcpO1xuICBjb25zdCByYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4gLmNoYW5jZScpO1xuICBjb25zdCBVViA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51di1pbmRleCAubGV2ZWwnKTtcblxuICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt0ZW1wfcKwQ2A7XG4gIHdpbmRTcGVlZC5pbm5lclRleHQgPSBgJHtzcGVlZH0ga20vaGA7XG4gIHJhaW4uaW5uZXJUZXh0ID0gYCR7Y2hhbmNlID09PSBudWxsID8gMCA6IGNoYW5jZX0lYDtcbiAgVVYuaW5uZXJUZXh0ID0gaW5kZXg7XG59O1xuXG5jb25zdCBob3VybHlGb3JlY2FzdCA9IChob3VyLCBpbWcsIHRlbXApID0+IHtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5ID4gZGl2Jyk7XG4gIGNvbnN0IG5ld0hvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmV3SG91ci5jbGFzc0xpc3QuYWRkKCdob3VybHktY29udGFpbmVyJyk7XG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZScpO1xuICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZCgndmVydGljYWwtbGluZScpO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pY29ucy8ke2ltZ30ucG5nYCk7XG4gIGljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbicpO1xuXG4gIGRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XG4gIHRpbWUuaW5uZXJUZXh0ID0gZGF5anMoaG91ciwgJ0hIOm1tOnNzJykuZm9ybWF0KCdoOm1tIEEnKTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7dGVtcH3CsENgO1xuXG4gIG5ld0hvdXIuYXBwZW5kQ2hpbGQodGltZSk7XG4gIG5ld0hvdXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIG5ld0hvdXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICBob3Vycy5hcHBlbmRDaGlsZChuZXdIb3VyKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcbn07XG5cbmNvbnN0IGRhaWx5Rm9yZWNhc3QgPSAoZGF5LCBpbWcsIGNvbmRpdGlvbnMsIG1heFRlbXAsIG1pblRlbXApID0+IHtcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpc1RvZGF5ID0gZGF5anMoZGF5KS5pc1NhbWUoZGF5anMoKSwgJ2RheScpO1xuXG4gIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vaWNvbnMvJHtpbWd9LnBuZ2ApO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ljb24nKTtcblxuICBkYXRlLmlubmVyVGV4dCA9IGlzVG9kYXkgPyAnVG9kYXknIDogZGF5anMoZGF5LCAnWVlZWS9NTS9ERCcpLmZvcm1hdCgnZGRkZCcpO1xuICBsYWJlbC5pbm5lclRleHQgPSBjb25kaXRpb25zO1xuICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHttYXhUZW1wfS8ke21pblRlbXB9YDtcblxuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gIGRheXMuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxvYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci1jb250YWluZXInKTtcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRlci1oaWRkZW4nKTtcbn07XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5ID4gZGl2JykuaW5uZXJUZXh0ID0gJyc7XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXkuaW5uZXJUZXh0ID0gJyc7XG4gIGxhYmVsLmlubmVyVGV4dCA9ICc3LURheSBGb3JlY2FzdCc7XG4gIGRheS5hcHBlbmRDaGlsZChsYWJlbCk7XG59O1xuXG4oZnVuY3Rpb24gKCkge1xuICBwcmVzZW50V2VhdGhlcigpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZGF5anMiLCJjdXN0b21QYXJzZUZvcm1hdCIsIkFQSUtleSIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaFdlYXRoZXIiLCJrZXkiLCJ0b2dnbGVMb2FkZXIiLCJwcmVzZW50V2VhdGhlciIsImdlbmVyYXRlSHIiLCJkYXlEYXRhIiwic3RhcnRIb3VyIiwic3RlcCIsInRvdGFsSG91cnMiLCJob3VyRGF0YSIsImhvdXJzIiwiaG91cmx5Rm9yZWNhc3QiLCJkYXRldGltZSIsImljb24iLCJ0ZW1wIiwicmVtb3ZlIiwiZ2VuZXJhdGVEYXlzIiwiZGF5cyIsImRheSIsImRhaWx5Rm9yZWNhc3QiLCJjb25kaXRpb25zIiwidGVtcG1heCIsInRlbXBtaW4iLCJwcmVzZW50RGF0YSIsImRhdGEiLCJjdXJyZW50V2VhdGhlciIsImFkZHJlc3MiLCJjdXJyZW50Q29uZGl0aW9ucyIsInByZWNpcHByb2IiLCJhaXJDb25kaXRpb25zIiwiZmVlbHNsaWtlIiwid2luZHNwZWVkIiwicHJlY2lwIiwidXZpbmRleCIsImdldFdlYXRoZXIiLCJhbGVydCIsIl9nZXRXZWF0aGVyIiwiX2NhbGxlZSIsIndlYXRoZXIiLCJ3ZWF0aGVyRGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmZXRjaCIsImNvbmNhdCIsIm1vZGUiLCJvayIsInN0YXR1cyIsImpzb24iLCJ0MCIsInJlamVjdCIsImFyZWEiLCJpbWciLCJjb25kIiwicmFpbiIsInRlbXBlcmF0dXJlIiwiY29uZGl0aW9uIiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwic3BlZWQiLCJjaGFuY2UiLCJpbmRleCIsIndpbmRTcGVlZCIsIlVWIiwiaG91ciIsIm5ld0hvdXIiLCJjcmVhdGVFbGVtZW50IiwidGltZSIsInNlcGFyYXRvciIsImNsYXNzTGlzdCIsImFkZCIsImV4dGVuZCIsImZvcm1hdCIsImFwcGVuZENoaWxkIiwibWF4VGVtcCIsIm1pblRlbXAiLCJkYXlDb250YWluZXIiLCJkYXRlIiwiaWNvbkNvbnRhaW5lciIsImxhYmVsIiwiaXNUb2RheSIsImlzU2FtZSIsImxvYWRlciIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=