!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PrimaryServices=t():e.PrimaryServices=t()}(this,(function(){return(()=>{"use strict";var e={300:(e,t)=>{var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},41:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function u(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t._getAllHeaders=t.http=void 0;var o,u=a(r(544)),s=a(r(20));try{o="undefined"!=typeof window?r(869):r(300).default}catch(e){o=r(300).default}function l(e){return n(this,void 0,void 0,(function(){var t=this;return i(this,(function(r){return[2,new Promise((function(r,a){return n(t,void 0,void 0,(function(){var t,n,l,f,d,p,g,h;return i(this,(function(i){return t=["GET","PUT","POST","DELETE"],!1===s.default.isObject(e)?[2,a(new Error("options (Object) is required"))]:!1===s.default.isString(e.url)?[2,a(new Error("options.url (String) is required"))]:!1===s.default.isString(e.method)?[2,a(new Error("options.method (String) is required"))]:!1===t.includes(e.method.toUpperCase())?[2,a(new Error("options.method must be one of the following values ".concat(JSON.stringify(t))))]:((e=u.default.validateItem(e,"object",{})).useDefaultHeaders=!1!==e.useDefaultHeaders,n=void 0,s.default.isObject(e.data)?n=e.data:s.default.isObject(e.body)&&(n=e.body),(s.default.isArray(n)||s.default.isObject(n))&&(n=JSON.stringify(n)),l=e.url,f={},s.default.isObject(e.params)?f=e.params:s.default.isObject(e.parameters)?f=e.parameters:s.default.isObject(e.query)&&(f=e.query),s.default.isObject(f,!0)&&(d=Object.entries(f).map((function(e){var t=e[0],r=e[1];return r=Array.isArray(r)||"object"==typeof r?JSON.stringify(r):r,"".concat(t,"=").concat(r)})).join("&"),l=l+"?"+encodeURI(d)),p={},s.default.isObject(e.headers)?p=e.headers:s.default.isObject(e.header)&&(p=e.header),e.useDefaultHeaders&&(p.accept="application/json",p["content-type"]="application/json"),"GET"===(g=e.method.toUpperCase())&&(p.Accept="application/x-www-form-urlencoded",p["Content-Type"]="application/x-www-form-urlencoded"),l.substr(0,4),h={headers:{},status:0,statusText:null},o(l,{method:g,headers:p,body:n}).then((function(e){var t=e.status;h={status:e.status,headers:c(e),statusText:e.statusText};var r=!1;try{r=h.headers["content-type"].includes("application/json")}catch(e){r=!1}return 204===t?"":r?e.json():e.text()})).then((function(e){var t={status:h.status,data:e,response:h,ok:h.status>=200&&h.status<300,request:{body:n,method:g,params:f,url:l,headers:p}};r(t)})).catch(a),[2])}))}))}))]}))}))}function c(e){if(!s.default.isObject(e))throw Error("responseData (Object) is required");var t={};return e.headers.forEach((function(e,r){t[r]=e})),t}t.http=l,t._getAllHeaders=c,t.default={http:l,_getAllHeaders:c}},20:(e,t)=>{function r(e){return void 0===e}function n(e){return null===e}function i(e,t){var i=!(r(e)||n(e)||u(e)||a(e)||f(e)),o=!0===t||!l(e);return!(!i||!o)&&(!0===t&&(e=new Date(e)),e instanceof Date==1&&"Invalid Date"!==e.toString())}function a(e,t,r){var n=!0===e||!1===e,i="true"===e||"false"===e;return r&&"true"===r||!0===r||"false"===r||!1===r?(!0===t?n||i:n)&&(!(!1!==e&&"false"!==e||!1!==r&&"false"!==r)||!(!0!==e&&"true"!==e||!0!==r&&"true"!==r)):!0===t?n||i:n}function o(e,t){var i=!(r(e)||n(e)||isNaN(e)||parseInt(Number(e))!=e||isNaN(parseInt(e,10))),a=!0!==t||!0===i&&!l(e);return!0===i&&!0===a}function u(e,t){var i=!r(e)&&!n(e)&&!isNaN(parseFloat(e))&&isFinite(e),a=!0!==t||!0===i&&!l(e);return!0===i&&!0===a}function s(e){return!r(e)&&!n(e)&&"function"==typeof e}function l(e,t){var i=!r(e)&&!n(e)&&"string"==typeof e,a=!0!==t||!0===i&&e.length>0;return!0===i&&!0===a}function c(e,t){var a=!(r(e)||n(e)||i(e)||"object"!=typeof e||s(e)||!1!==Array.isArray(e)),o=!0!==t||!0===a&&Object.keys(e).length>0;return!0===a&&!0===o}function f(e,t){var i=!r(e)&&!n(e)&&Array.isArray(e),a=!0!==t||!0===i&&e.length>0;return!0===i&&!0===a}function d(e){if(l(e,!0)){var t=25===e.length,r="--T::+:"===e.split("").filter((function(e){return isNaN(e)})).join("");return t&&r}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isIsoString=t.isArray=t.isObject=t.isString=t.isFunction=t.isNumeric=t.isInteger=t.isBoolean=t.isDate=t.isNull=t.isUndefined=void 0,t.isUndefined=r,t.isNull=n,t.isDate=i,t.isBoolean=a,t.isInteger=o,t.isNumeric=u,t.isFunction=s,t.isString=l,t.isObject=c,t.isArray=f,t.isIsoString=d,t.default={isUndefined:r,isNull:n,isDate:i,isBoolean:a,isInteger:o,isNumeric:u,isFunction:s,isString:l,isObject:c,isArray:f,isIsoString:d}},544:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t._getValueForSorting=t.generateRandomInteger=t.numberWithCommas=t.round=t.numberToPercentage=t.isJson=t.objectToQueryString=t.extractQueryParametersFromUrl=t.toProperCase=t.formatAsCurrency=t.roundNumber=t.sortArrayOfObjectsByKey=t.extractSearchString=t.extractNumbersFromString=t.extractEndpointWithoutSearchString=t.getQueryObjectFromUrl=t.searchStringToQueryParams=t.copyObject=t.validateItem=t.pluralityQualifier=t.convertValueToStringValue=t.getIndexOfItemThatContainsValueFromArray=t.arrayOfStringsContainsValue=t.sanitizeEmail=t.sanitizePhone=t.isValidEmail=t.obfuscateEmail=t.obfuscatePhone=t.isValidPhone=t.repeatString=t.repeatFunction=t.generateRandomNumberString=t.isEmailOrPhone=void 0;var i=n(r(20));function a(e){if(i.default.isString(e,!0))return e.indexOf("@")>=0?"email":"phone";throw new Error("input is not string or is empty")}function o(e){if(!i.default.isInteger(e,!0))throw new Error("length (Integer) is required");return u(q,e).join("")}function u(e,t){if(!i.default.isFunction(e))throw new Error("callback (Function) is required");if(!i.default.isInteger(t))throw new Error("count (Integer) is required");for(var r=[],n=0;n<t;n++)r.push(e());return r}function s(e,t,r){return r=i.default.isString(r)?r:"",u((function(){return e}),t).join(r)}function l(e){return!(!i.default.isString(e)&&!i.default.isInteger(e)||10!==p(e).length)}function c(e){if(l(e))return e=p(e),"(".concat(e.substr(0,1),"**) ***-**").concat(e.substr(8,2));throw new Error("phone (String) must be 10 digits long and only numbers")}function f(e){if(d(e)){var t=(e=g(e)).split("@"),r=t[0],n=t[1],i=n.split("."),a="."+i[i.length-1];return i.pop(),n=i.join("."),[r.substr(0,2),s("*",r.length-2),"@",n.substr(0,2),s("*",n.length-2),a].join("")}throw new Error("email (String) must be a valid email")}function d(e){return!!i.default.isString(e)&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.trim())}function p(e){return i.default.isInteger(e,!0)&&(e=""+e),e.replace(/[^0-9]/g,"").trim()}function g(e){return e.trim().toLowerCase()}function h(e,t){if(!i.default.isArray(e))throw new Error("array (Array) is required");if(!i.default.isString(t,!0))throw new Error("value (String) is required and cannot be empty");return m(e,t)>-1}function m(e,t){if(!i.default.isArray(e))throw new Error("array (Array) is required");if(!i.default.isString(t,!0))throw new Error("value (String) is required and cannot be empty");for(var r=-1,n=0;n<e.length;n++)e[n].includes(t)&&(r=n,n=e.length);return r}function y(e){return i.default.isArray(e,!0)||i.default.isObject(e,!0)?JSON.stringify(e):i.default.isString(e)?'"'+e+'"':""+e}function b(e,t,r){return t=i.default.isString(t)?t:"",r=i.default.isString(r)?r:"",1===e?r:t}function S(e,t,r){var n={undefined:i.default.isUndefined,null:i.default.isNull,object:i.default.isObject,date:i.default.isDate,boolean:i.default.isBoolean,integer:i.default.isInteger,number:i.default.isNumeric,function:i.default.isFunction,string:i.default.isString,array:i.default.isArray},a=t.toLowerCase();if(n[a])return!0===n[a](e)?e:r;throw new Error("invalid key")}function v(e){return JSON.parse(JSON.stringify({value:e})).value}function w(e){if(e.includes("?")){var t=e.split("?");t.shift(),e=t.join("?")}try{return e.length>=1?JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}catch(e){return{}}}function j(e){return w(P(e))}function O(e){return e&&e.includes("?")?e.split(/\?/)[0]:e}function x(e){return e.replace(/[^0-9]/g,"")}function P(e){return e&&e.includes("?")?e.split(/\?/)[1]:""}function E(e,t,r){return void 0===r&&(r=!1),(e=S(e,"array",[])).sort((function(e,n){var i=R(e[t]),a=R(n[t]),o=0;return i>a?o=-1:i<a&&(o=1),!0===r?o:-1*o}))}function N(e,t){t=S(t,"integer",0);var r=Math.pow(10,t);return Math.round(e*r)/r}function I(e,t){var r=S(t&&t.decimals,"number",2),n=S(t&&t.round,"number",r),a=S(t&&t.decimal,"string","."),o=S(t&&t.thousands,"string",","),u=S(t&&t.currencySign,"string","$");try{r=Math.abs(r),r=i.default.isInteger(r)?2:r;var s=(e=S(e,"number",0))<0?"-":"";e=N(e,n);var l=parseInt(Math.abs(Number(e)||0).toFixed(r)).toString(),c=l.length>3?l.length%3:0,f=[s,u,c?l.substr(0,c)+o:"",l.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+o)];return r>0&&(f.push(a),f.push(Math.abs(e).toFixed(r).split(".")[1])),f.join("")}catch(e){return console.log(e),null}}function T(e){return i.default.isString(e)?e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})):e}function A(e){var t={},r=e.split("?");if(r.length>0){r.shift(),e=r.join("?");var n=decodeURI(e);i.default.isString(n,!0)&&n.split("&").forEach((function(e){if(i.default.isString(e,!0)&&e.includes("=")){var r,n=e.split("="),a=void 0;r=n[0],n.length>1&&(a=n[1].split("%2C").join(",")),t[r]=a}}))}return t}function C(e){return Object.keys(e).filter((function(t){return!i.default.isUndefined(e[t])})).map((function(t){return[t,encodeURIComponent(e[t])].join("=")})).join("&")}function F(e){try{e=JSON.parse(e)}catch(e){return!1}return!0}function _(e,t){return U(100*e,t)+"%"}function U(e,t){return+(Math.round(e+"e+"+t)+"e-"+t)}function V(e){return void 0===e&&(e=0),e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function q(e,t){return e=S(e,"integer",0),t=S(t,"integer",9),Math.floor(Math.random()*(t-e+1))+e}function R(e){return i.default.isDate(e)?e.getTime():i.default.isNumeric(e)?Number(e):i.default.isString(e)?e.toUpperCase():e}t.isEmailOrPhone=a,t.generateRandomNumberString=o,t.repeatFunction=u,t.repeatString=s,t.isValidPhone=l,t.obfuscatePhone=c,t.obfuscateEmail=f,t.isValidEmail=d,t.sanitizePhone=p,t.sanitizeEmail=g,t.arrayOfStringsContainsValue=h,t.getIndexOfItemThatContainsValueFromArray=m,t.convertValueToStringValue=y,t.pluralityQualifier=b,t.validateItem=S,t.copyObject=v,t.searchStringToQueryParams=w,t.getQueryObjectFromUrl=j,t.extractEndpointWithoutSearchString=O,t.extractNumbersFromString=x,t.extractSearchString=P,t.sortArrayOfObjectsByKey=E,t.roundNumber=N,t.formatAsCurrency=I,t.toProperCase=T,t.extractQueryParametersFromUrl=A,t.objectToQueryString=C,t.isJson=F,t.numberToPercentage=_,t.round=U,t.numberWithCommas=V,t.generateRandomInteger=q,t._getValueForSorting=R,t.default={isEmailOrPhone:a,generateRandomNumberString:o,repeatFunction:u,repeatString:s,isValidPhone:l,obfuscatePhone:c,isJson:F,extractQueryParametersFromUrl:A,obfuscateEmail:f,isValidEmail:d,sanitizePhone:p,numberToPercentage:_,round:U,numberWithCommas:V,sanitizeEmail:g,roundNumber:N,toProperCase:T,objectToQueryString:C,formatAsCurrency:I,arrayOfStringsContainsValue:h,getIndexOfItemThatContainsValueFromArray:m,convertValueToStringValue:y,pluralityQualifier:b,validateItem:S,copyObject:v,searchStringToQueryParams:w,getQueryObjectFromUrl:j,extractEndpointWithoutSearchString:O,extractNumbersFromString:x,extractSearchString:P,sortArrayOfObjectsByKey:E,generateRandomInteger:q,_getValueForSorting:R}},869:(e,t,r)=>{function n(e,t){return t=t||{},new Promise((function(r,n){var i=new XMLHttpRequest,a=[],o=[],u={},s=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:s,headers:{keys:function(){return a},entries:function(){return o},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var l in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){a.push(t=t.toLowerCase()),o.push([t,r]),u[t]=u[t]?u[t]+","+r:r})),r(s())},i.onerror=n,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(l,t.headers[l]);i.send(t.body||null)}))}r.r(t),r.d(t,{default:()=>n})}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{HttpService:()=>t.a,TypeService:()=>i.default,UtilityService:()=>o.a,default:()=>u});var e=r(41),t=r.n(e),i=r(20),a=r(544),o=r.n(a);const u={HttpService:t(),TypeService:i.default,UtilityService:o()}})(),n})()}));