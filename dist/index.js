!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PrimaryServices=t():e.PrimaryServices=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";function n(e){return void 0===e}function i(e){return null===e}function o(e,t){var r=!(n(e)||i(e)||s(e)||a(e)||d(e)),o=!0===t||!l(e);return!(!r||!o)&&(!0===t&&(e=new Date(e)),e instanceof Date==!0&&"Invalid Date"!==e.toString())}function a(e,t,r){var n=!0===e||!1===e,i="true"===e||"false"===e;return r&&"true"===r||!0===r||"false"===r||!1===r?(!0===t?n||i:n)&&(!(!1!==e&&"false"!==e||!1!==r&&"false"!==r)||!(!0!==e&&"true"!==e||!0!==r&&"true"!==r)):!0===t?n||i:n}function u(e,t){var r=!(n(e)||i(e)||isNaN(e)||parseInt(Number(e))!=e||isNaN(parseInt(e,10))),o=!0!==t||!0===r&&!l(e);return!0===r&&!0===o}function s(e,t){var r=!n(e)&&!i(e)&&!isNaN(parseFloat(e))&&isFinite(e),o=!0!==t||!0===r&&!l(e);return!0===r&&!0===o}function c(e){return!n(e)&&!i(e)&&"function"==typeof e}function l(e,t){var r=!n(e)&&!i(e)&&"string"==typeof e,o=!0!==t||!0===r&&e.length>0;return!0===r&&!0===o}function f(e,t){var r=!(n(e)||i(e)||o(e)||"object"!=typeof e||c(e)||!1!==Array.isArray(e)),a=!0!==t||!0===r&&Object.keys(e).length>0;return!0===r&&!0===a}function d(e,t){var r=!n(e)&&!i(e)&&Array.isArray(e),o=!0!==t||!0===r&&e.length>0;return!0===r&&!0===o}function p(e){if(l(e,!0)){var t=25===e.length,r="--T::+:"===e.split("").filter((function(e){return isNaN(e)})).join("");return t&&r}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isIsoString=t.isArray=t.isObject=t.isString=t.isFunction=t.isNumeric=t.isInteger=t.isBoolean=t.isDate=t.isNull=t.isUndefined=void 0,t.isUndefined=n,t.isNull=i,t.isDate=o,t.isBoolean=a,t.isInteger=u,t.isNumeric=s,t.isFunction=c,t.isString=l,t.isObject=f,t.isArray=d,t.isIsoString=p,t.default={isUndefined:n,isNull:i,isDate:o,isBoolean:a,isInteger:u,isNumeric:s,isFunction:c,isString:l,isObject:f,isArray:d,isIsoString:p}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t._getValueForSorting=t.generateRandomInteger=t.numberWithCommas=t.round=t.numberToPercentage=t.isJson=t.objectToQueryString=t.extractQueryParametersFromUrl=t.toProperCase=t.formatAsCurrency=t.roundNumber=t.sortArrayOfObjectsByKey=t.extractSearchString=t.extractNumbersFromString=t.extractEndpointWithoutSearchString=t.getQueryObjectFromUrl=t.searchStringToQueryParams=t.copyObject=t.validateItem=t.pluralityQualifier=t.convertValueToStringValue=t.getIndexOfItemThatContainsValueFromArray=t.arrayOfStringsContainsValue=t.sanitizeEmail=t.sanitizePhone=t.isValidEmail=t.obfuscateEmail=t.obfuscatePhone=t.isValidPhone=t.repeatString=t.repeatFunction=t.generateRandomNumberString=t.isEmailOrPhone=void 0;var i=n(r(0));function o(e){if(i.default.isString(e,!0))return e.indexOf("@")>=0?"email":"phone";throw new Error("input is not string or is empty")}function a(e){if(!i.default.isInteger(e,!0))throw new Error("length (Integer) is required");return u(q,e).join("")}function u(e,t){if(!i.default.isFunction(e))throw new Error("callback (Function) is required");if(!i.default.isInteger(t))throw new Error("count (Integer) is required");for(var r=[],n=0;n<t;n++)r.push(e());return r}function s(e,t,r){return r=i.default.isString(r)?r:"",u((function(){return e}),t).join(r)}function c(e){return!(!i.default.isString(e)&&!i.default.isInteger(e)||10!==p(e).length)}function l(e){if(c(e))return e=p(e),"(".concat(e.substr(0,1),"**) ***-**").concat(e.substr(8,2));throw new Error("phone (String) must be 10 digits long and only numbers")}function f(e){if(d(e)){var t=(e=g(e)).split("@"),r=t[0],n=t[1],i=n.split("."),o="."+i[i.length-1];return i.pop(),n=i.join("."),[r.substr(0,2),s("*",r.length-2),"@",n.substr(0,2),s("*",n.length-2),o].join("")}throw new Error("email (String) must be a valid email")}function d(e){return!!i.default.isString(e)&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.trim())}function p(e){return i.default.isInteger(e,!0)&&(e=""+e),e.replace(/[^0-9]/g,"").trim()}function g(e){return e.trim().toLowerCase()}function h(e,t){if(!i.default.isArray(e))throw new Error("array (Array) is required");if(!i.default.isString(t,!0))throw new Error("value (String) is required and cannot be empty");return m(e,t)>-1}function m(e,t){if(!i.default.isArray(e))throw new Error("array (Array) is required");if(!i.default.isString(t,!0))throw new Error("value (String) is required and cannot be empty");for(var r=-1,n=0;n<e.length;n++){e[n].includes(t)&&(r=n,n=e.length)}return r}function y(e){return i.default.isArray(e,!0)||i.default.isObject(e,!0)?JSON.stringify(e):i.default.isString(e)?'"'+e+'"':""+e}function b(e,t,r){return t=i.default.isString(t)?t:"",r=i.default.isString(r)?r:"",1===e?r:t}function v(e,t,r){var n={undefined:i.default.isUndefined,null:i.default.isNull,object:i.default.isObject,date:i.default.isDate,boolean:i.default.isBoolean,integer:i.default.isInteger,number:i.default.isNumeric,function:i.default.isFunction,string:i.default.isString,array:i.default.isArray},o=t.toLowerCase();if(n[o])return!0===n[o](e)?e:r;throw new Error("invalid key")}function S(e){return JSON.parse(JSON.stringify({value:e})).value}function j(e){if(e.includes("?")){var t=e.split("?");t.shift(),e=t.join("?")}try{return e.length>=1?JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}catch(e){return{}}}function w(e){return j(P(e))}function O(e){return e&&e.includes("?")?e.split(/\?/)[0]:e}function x(e){return e.replace(/[^0-9]/g,"")}function P(e){return e&&e.includes("?")?e.split(/\?/)[1]:""}function E(e,t,r){return void 0===r&&(r=!1),(e=v(e,"array",[])).sort((function(e,n){var i=M(e[t]),o=M(n[t]),a=0;return i>o?a=-1:i<o&&(a=1),!0===r?a:-1*a}))}function N(e,t){t=v(t,"integer",0);var r=Math.pow(10,t);return Math.round(e*r)/r}function I(e,t){var r=v(t&&t.decimals,"number",2),n=v(t&&t.round,"number",r),o=v(t&&t.decimal,"string","."),a=v(t&&t.thousands,"string",","),u=v(t&&t.currencySign,"string","$");try{r=Math.abs(r),r=i.default.isInteger(r)?2:r;var s=(e=v(e,"number",0))<0?"-":"";e=N(e,n);var c=parseInt(Math.abs(Number(e)||0).toFixed(r)).toString(),l=c.length>3?c.length%3:0,f=[s,u,l?c.substr(0,l)+a:"",c.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+a)];return r>0&&(f.push(o),f.push(Math.abs(e).toFixed(r).split(".")[1])),f.join("")}catch(e){return console.log(e),null}}function T(e){return i.default.isString(e)?e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})):e}function A(e){var t={},r=e.split("?");if(r.length>0){r.shift(),e=r.join("?");var n=decodeURI(e);if(i.default.isString(n,!0))n.split("&").forEach((function(e){if(i.default.isString(e,!0)&&e.includes("=")){var r,n=e.split("="),o=void 0;r=n[0],n.length>1&&(o=n[1].split("%2C").join(",")),t[r]=o}}))}return t}function _(e){return Object.keys(e).filter((function(t){return!i.default.isUndefined(e[t])})).map((function(t){return[t,encodeURIComponent(e[t])].join("=")})).join("&")}function C(e){try{e=JSON.parse(e)}catch(e){return!1}return!0}function F(e,t){return U(100*e,t)+"%"}function U(e,t){return+(Math.round(e+"e+"+t)+"e-"+t)}function V(e){return void 0===e&&(e=0),e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function q(e,t){return e=v(e,"integer",0),t=v(t,"integer",9),Math.floor(Math.random()*(t-e+1))+e}function M(e){return i.default.isDate(e)?e.getTime():i.default.isNumeric(e)?Number(e):i.default.isString(e)?e.toUpperCase():e}t.isEmailOrPhone=o,t.generateRandomNumberString=a,t.repeatFunction=u,t.repeatString=s,t.isValidPhone=c,t.obfuscatePhone=l,t.obfuscateEmail=f,t.isValidEmail=d,t.sanitizePhone=p,t.sanitizeEmail=g,t.arrayOfStringsContainsValue=h,t.getIndexOfItemThatContainsValueFromArray=m,t.convertValueToStringValue=y,t.pluralityQualifier=b,t.validateItem=v,t.copyObject=S,t.searchStringToQueryParams=j,t.getQueryObjectFromUrl=w,t.extractEndpointWithoutSearchString=O,t.extractNumbersFromString=x,t.extractSearchString=P,t.sortArrayOfObjectsByKey=E,t.roundNumber=N,t.formatAsCurrency=I,t.toProperCase=T,t.extractQueryParametersFromUrl=A,t.objectToQueryString=_,t.isJson=C,t.numberToPercentage=F,t.round=U,t.numberWithCommas=V,t.generateRandomInteger=q,t._getValueForSorting=M,t.default={isEmailOrPhone:o,generateRandomNumberString:a,repeatFunction:u,repeatString:s,isValidPhone:c,obfuscatePhone:l,isJson:C,extractQueryParametersFromUrl:A,obfuscateEmail:f,isValidEmail:d,sanitizePhone:p,numberToPercentage:F,round:U,numberWithCommas:V,sanitizeEmail:g,roundNumber:N,toProperCase:T,objectToQueryString:_,formatAsCurrency:I,arrayOfStringsContainsValue:h,getIndexOfItemThatContainsValueFromArray:m,convertValueToStringValue:y,pluralityQualifier:b,validateItem:v,copyObject:S,searchStringToQueryParams:j,getQueryObjectFromUrl:w,extractEndpointWithoutSearchString:O,extractNumbersFromString:x,extractSearchString:P,sortArrayOfObjectsByKey:E,generateRandomInteger:q,_getValueForSorting:M}},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t._getAllHeaders=t.http=void 0;var a,u=o(r(1)),s=o(r(0));try{a="undefined"!=typeof window?r(5):r(3).default}catch(e){a=r(3).default}function c(e){return n(this,void 0,void 0,(function(){var t=this;return i(this,(function(r){return[2,new Promise((function(r,o){return n(t,void 0,void 0,(function(){var t,n,c,f,d,p,g,h;return i(this,(function(i){return t=["GET","PUT","POST","DELETE"],!1===s.default.isObject(e)?[2,o(new Error("options (Object) is required"))]:!1===s.default.isString(e.url)?[2,o(new Error("options.url (String) is required"))]:!1===s.default.isString(e.method)?[2,o(new Error("options.method (String) is required"))]:!1===t.includes(e.method.toUpperCase())?[2,o(new Error("options.method must be one of the following values ".concat(JSON.stringify(t))))]:((e=u.default.validateItem(e,"object",{})).useDefaultHeaders=!1!==e.useDefaultHeaders,n=void 0,s.default.isObject(e.data)?n=e.data:s.default.isObject(e.body)&&(n=e.body),(s.default.isArray(n)||s.default.isObject(n))&&(n=JSON.stringify(n)),c=e.url,f={},s.default.isObject(e.params)?f=e.params:s.default.isObject(e.parameters)?f=e.parameters:s.default.isObject(e.query)&&(f=e.query),s.default.isObject(f,!0)&&(d=Object.entries(f).map((function(e){var t=e[0],r=e[1];return r=Array.isArray(r)||"object"==typeof r?JSON.stringify(r):r,"".concat(t,"=").concat(r)})).join("&"),c=c+"?"+encodeURI(d)),p={},s.default.isObject(e.headers)?p=e.headers:s.default.isObject(e.header)&&(p=e.header),e.useDefaultHeaders&&(p.accept="application/json",p["content-type"]="application/json"),"GET"===(g=e.method.toUpperCase())&&(p.Accept="application/x-www-form-urlencoded",p["Content-Type"]="application/x-www-form-urlencoded"),"http"===c.substr(0,4),h={headers:{},status:0,statusText:null},a(c,{method:g,headers:p,body:n}).then((function(e){var t=e.status;h={status:e.status,headers:l(e),statusText:e.statusText};var r=!1;try{r=h.headers["content-type"].includes("application/json")}catch(e){r=!1}return 204===t?"":r?e.json():e.text()})).then((function(e){var t={status:h.status,data:e,response:h,ok:h.status>=200&&h.status<300,request:{body:n,method:g,params:f,url:c,headers:p}};r(t)})).catch(o),[2])}))}))}))]}))}))}function l(e){if(!s.default.isObject(e))throw Error("responseData (Object) is required");var t={};return e.headers.forEach((function(e,r){t[r]=e})),t}t.http=c,t._getAllHeaders=l,t.default={http:c,_getAllHeaders:l}},function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n);r.d(t,"HttpService",(function(){return i.a}));var o=r(0),a=r.n(o);r.d(t,"TypeService",(function(){return a.a}));var u=r(1),s=r.n(u);r.d(t,"UtilityService",(function(){return s.a})),t.default={HttpService:i(),TypeService:a(),UtilityService:s()}},function(e,t,r){"use strict";r.r(t),t.default=function(e,t){return t=t||{},new Promise((function(r,n){var i=new XMLHttpRequest,o=[],a=[],u={},s=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:s,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){o.push(t=t.toLowerCase()),a.push([t,r]),u[t]=u[t]?u[t]+","+r:r})),r(s())},i.onerror=n,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(c,t.headers[c]);i.send(t.body||null)}))}}])}));