(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.F=b.prototype}
function ma(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.B=this.j=null}
function na(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
ma.prototype.v=function(a){this.i=a};
function oa(a,b){a.j={fa:b,ga:!0};a.h=a.s||a.m}
ma.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
ma.prototype.u=function(a){this.h=a};
function pa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function qa(a){a.s=0;var b=a.j.fa;a.j=null;return b}
function ra(a){a.B=[a.j];a.s=0;a.m=0}
function sa(a){var b=a.B.splice(0)[0];(b=a.j=a.j||b)?b.ga?a.h=a.s||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function ta(a){this.h=new ma;this.i=a}
function ua(a,b){na(a.h);var c=a.h.l;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,oa(a.h,g),xa(a)}a.h.l=null;d.call(a.h,f);return xa(a)}
function xa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,oa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ga)throw b.fa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){na(a.h);a.h.l?b=wa(a,a.h.l.next,b,a.h.v):(a.h.v(b),b=xa(a));return b};
this.throw=function(b){na(a.h);a.h.l?b=wa(a,a.h.l["throw"],b,a.h.v):(oa(a.h,b),b=xa(a));return b};
this.return=function(b){return ua(a,b)};
this[Symbol.iterator]=function(){return this}}
function y(a,b){b=new ya(new ta(b));la&&a.prototype&&la(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function za(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=za(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=za(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Aa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Aa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.m)}};
b.prototype.S=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.s(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.oa(h,g):this.s(g)};
b.prototype.m=function(g){this.v(2,g)};
b.prototype.s=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.B()};
b.prototype.Y=function(){var g=this;e(function(){if(g.K()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.K=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Z=function(g){var h=this.l();g.U(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(x){try{l(r(x))}catch(B){m(B)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.U(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.U=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).U(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(x){return function(B){r[x]=B;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).U(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==za(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,A:n}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.A),this.h.previous.next=l.A,this.h.previous=l.A,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ba(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ca(){}
function Da(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function E(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ja(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ja=Ha:Ja=Ia;return Ja.apply(null,arguments)}
function F(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sa=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ka(a){return a}
;function La(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.ra=b)}
H(La,Error);La.prototype.name="CustomError";function Ma(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Na(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Qa(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Ra(a,b){b=Oa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Sa(a){return Array.prototype.concat.apply([],arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Za(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Za(a[c]);return b}
var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var bb;var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},db=/&/g,eb=/</g,fb=/>/g,gb=/"/g,hb=/'/g,ib=/\x00/g,jb=/[\x00&<>"']/;var kb;a:{var lb=C.navigator;if(lb){var mb=lb.userAgent;if(mb){kb=mb;break a}}kb=""}function J(a){return-1!=kb.indexOf(a)}
;function nb(a){this.h=ob===ob?a:""}
nb.prototype.toString=function(){return this.h.toString()};
var ob={};var pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qb(a){return a?decodeURI(a):a}
function rb(a){return qb(a.match(pb)[3]||null)}
function sb(a){var b=a.match(pb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ub(a){var b=[],c;for(c in a)tb(c,a[c],b);return b.join("&")}
var vb=/#|$/;function wb(a,b){var c=a.search(vb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function K(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function xb(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function yb(a){yb[" "](a);return a}
yb[" "]=Ca;var zb=J("Opera"),Ab=J("Trident")||J("MSIE"),Bb=J("Edge"),Cb=J("Gecko")&&!(-1!=kb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Db=-1!=kb.toLowerCase().indexOf("webkit")&&!J("Edge");function Eb(){var a=C.document;return a?a.documentMode:void 0}
var Fb;a:{var Gb="",Hb=function(){var a=kb;if(Cb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Bb)return/Edge\/([\d\.]+)/.exec(a);if(Ab)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Db)return/WebKit\/(\S+)/.exec(a);if(zb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Hb&&(Gb=Hb?Hb[1]:"");if(Ab){var Ib=Eb();if(null!=Ib&&Ib>parseFloat(Gb)){Fb=String(Ib);break a}}Fb=Gb}var Jb=Fb,Kb;if(C.document&&Ab){var Lb=Eb();Kb=Lb?Lb:parseInt(Jb,10)||void 0}else Kb=void 0;var Mb=Kb;var Nb=xb()||J("iPod"),Ob=J("iPad"),Pb=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(xb()||J("iPad")||J("iPod"));var Qb={},Rb=null;var L=window;function Sb(a,b){this.width=a;this.height=b}
q=Sb.prototype;q.clone=function(){return new Sb(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ub(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Vb(a){var b=Wb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Xb(){var a=[];Vb(function(b){a.push(b)});
return a}
var Wb={Fa:"allow-forms",Ga:"allow-modals",Ha:"allow-orientation-lock",Ia:"allow-pointer-lock",Ja:"allow-popups",Ka:"allow-popups-to-escape-sandbox",La:"allow-presentation",Ma:"allow-same-origin",Na:"allow-scripts",Oa:"allow-top-navigation",Pa:"allow-top-navigation-by-user-activation"},Yb=Na(function(){return Xb()});
function Zb(){var a=Tb(),b={};I(Yb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var $b=(new Date).getTime();function ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function bc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],B=e[2],z=e[3],N=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var O=z^x&(B^z);var G=1518500249}else O=x^B^z,G=1859775393;else 60>p?(O=x&B|z&(x|B),G=2400959708):(O=x^B^z,G=3395469782);O=((n<<5|n>>>27)&4294967295)+O+N+G+r[p]&4294967295;N=z;z=B;B=(x<<30|x>>>2)&4294967295;x=n;n=O}e[0]=e[0]+n&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+B&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+N&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,B=n.length;x<B;++x)p.push(n.charCodeAt(x));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var x=24;0<=x;x-=8)n[r++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,sa:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function cc(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,dc(ac(d),a,c||null)].join(" "):null}
function dc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),ec(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=ec(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ec(a){var b=bc();b.update(a);return b.sa().toLowerCase()}
;var fc={};function gc(a){this.h=a||{cookie:""}}
q=gc.prototype;q.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{aa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.aa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{aa:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var hc=new gc("undefined"==typeof document?null:document);function ic(a){return!!fc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function jc(a,b,c,d){(a=C[a])||(a=(new gc(document)).get(b));return a?cc(a,c,d):null}
function kc(a){var b=void 0===b?!1:b;var c=ac(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ic(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{var g=new gc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ic(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?C.__SAPISID:C.__APISID,e||(e=new gc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?cc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ic(b)&&((b=jc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=jc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function lc(){this.h=[];this.i=-1}
lc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
lc.prototype.get=function(a){return!!this.h[a]};
function mc(a){-1==a.i&&(a.i=Pa(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function nc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
nc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function oc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var pc;function qc(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Tb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ja(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.da;c.da=null;e()}};
return function(e){d.next={da:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function rc(a){C.setTimeout(function(){throw a;},0)}
;function sc(){this.i=this.h=null}
sc.prototype.add=function(a,b){var c=tc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
sc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var tc=new nc(function(){return new uc},function(a){return a.reset()});
function uc(){this.next=this.scope=this.h=null}
uc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
uc.prototype.reset=function(){this.next=this.scope=this.h=null};function vc(a,b){wc||xc();yc||(wc(),yc=!0);zc.add(a,b)}
var wc;function xc(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);wc=function(){a.then(Ac)}}else wc=function(){var b=Ac;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!J("Edge")&&C.Window.prototype.setImmediate==C.setImmediate?(pc||(pc=qc()),pc(b)):C.setImmediate(b)}}
var yc=!1,zc=new sc;function Ac(){for(var a;a=zc.remove();){try{a.h.call(a.scope)}catch(b){rc(b)}oc(tc,a)}yc=!1}
;function Bc(){this.i=-1}
;function Cc(){this.i=64;this.h=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
H(Cc,Bc);Cc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Dc(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Cc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Dc(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Dc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Dc(this,e);f=0;break}}this.j=f;this.m+=b}};
Cc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.s[c]=b&255,b/=256;Dc(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ec(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Fc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Gc[c])c=Gc[c];else{c=String(c);if(!Gc[c]){var f=/function\s+([^\(]+)/m.exec(c);Gc[c]=f?f[1]:"[Anonymous]"}c=Gc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Fc(a,b){b||(b={});b[Hc(a)]=!0;var c=a.stack||"";(a=a.ra)&&!b[Hc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Fc(a,b));return c}
function Hc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Gc={};function Ic(){this.m=this.m;this.s=this.s}
Ic.prototype.m=!1;Ic.prototype.dispose=function(){this.m||(this.m=!0,this.O())};
Ic.prototype.O=function(){if(this.s)for(;this.s.length;)this.s.shift()()};var Jc="StopIteration"in C?C.StopIteration:{message:"StopIteration",stack:""};function Kc(){}
Kc.prototype.next=function(){throw Jc;};
Kc.prototype.G=function(){return this};function Lc(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lc)for(c=Mc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Mc(a){Nc(a);return a.h.concat()}
q=Lc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Oc;Nc(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Oc(a,b){return a===b}
q.isEmpty=function(){return 0==this.j};
q.clear=function(){this.i={};this.l=this.j=this.h.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&Nc(this),!0):!1};
function Nc(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Mc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Lc(this)};
q.G=function(a){Nc(this);var b=0,c=this.l,d=this,e=new Kc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Jc;var f=d.h[b++];return a?f:d.i[f]};
return e};var Pc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{C.addEventListener("test",Ca,b),C.removeEventListener("test",Ca,b)}catch(c){}return a}();function Qc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Qc.prototype.stopPropagation=function(){this.j=!0};
Qc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Rc(a,b){Qc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
H(Rc,Qc);var Sc={2:"touch",3:"pen",4:"mouse"};
Rc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Cb){a:{try{yb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Sc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Rc.F.preventDefault.call(this)};
Rc.prototype.stopPropagation=function(){Rc.F.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Rc.prototype.preventDefault=function(){Rc.F.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tc="closure_listenable_"+(1E6*Math.random()|0);var Uc=0;function Vc(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.W=e;this.key=++Uc;this.P=this.T=!1}
function Wc(a){a.P=!0;a.listener=null;a.h=null;a.src=null;a.W=null}
;function Xc(a){this.src=a;this.listeners={};this.h=0}
Xc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Yc(a,b,d,e);-1<g?(b=a[g],c||(b.T=!1)):(b=new Vc(b,this.src,f,!!d,e),b.T=c,a.push(b));return b};
Xc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Yc(e,b,c,d);return-1<b?(Wc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Zc(a,b){var c=b.type;c in a.listeners&&Ra(a.listeners[c],b)&&(Wc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Yc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.P&&f.listener==b&&f.capture==!!c&&f.W==d)return e}return-1}
;var $c="closure_lm_"+(1E6*Math.random()|0),ad={},bd=0;function cd(a,b,c,d,e){if(d&&d.once)dd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)cd(a,b[f],c,d,e);else c=ed(c),a&&a[Tc]?fd(a,b,c,E(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=E(e)?!!e.capture:!!e,h=hd(a);h||(a[$c]=h=new Xc(a));c=h.add(b,c,d,g,f);if(!c.h){d=id();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Pc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");bd++}}
function id(){function a(c){return b.call(a.src,a.listener,c)}
var b=kd;return a}
function dd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=ed(c),a&&a[Tc]?a.i.add(String(b),c,!0,E(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else(d=E(d)?!!d.capture:!!d,c=ed(c),a&&a[Tc])?a.i.remove(String(b),c,d,e):a&&(a=hd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Yc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if("number"!==typeof a&&a&&!a.P){var b=a.src;if(b&&b[Tc])Zc(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);bd--;(c=hd(b))?(Zc(c,a),0==c.h&&(c.src=null,b[$c]=null)):Wc(a)}}}
function jd(a){return a in ad?ad[a]:ad[a]="on"+a}
function kd(a,b){if(a.P)a=!0;else{b=new Rc(b,this);var c=a.listener,d=a.W||a.src;a.T&&md(a);a=c.call(d,b)}return a}
function hd(a){a=a[$c];return a instanceof Xc?a:null}
var nd="__closure_events_fn_"+(1E9*Math.random()>>>0);function ed(a){if("function"===typeof a)return a;a[nd]||(a[nd]=function(b){return a.handleEvent(b)});
return a[nd]}
;function od(){Ic.call(this);this.i=new Xc(this);this.Z=this;this.K=null}
H(od,Ic);od.prototype[Tc]=!0;od.prototype.addEventListener=function(a,b,c,d){cd(this,a,b,c,d)};
od.prototype.removeEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
function P(a,b){var c=a.K;if(c){var d=[];for(var e=1;c;c=c.K)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new Qc(b,a):b instanceof Qc?b.target=b.target||a:(e=b,b=new Qc(c,a),ab(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=pd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=pd(g,c,!0,b)&&e,b.j||(e=pd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=pd(g,c,!1,b)&&e}
od.prototype.O=function(){od.F.O.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Wc(d[e]);delete a.listeners[c];a.h--}}this.K=null};
function fd(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function pd(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.P&&g.capture==c){var h=g.listener,k=g.W||g.src;g.T&&Zc(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function qd(a){if(a instanceof rd||a instanceof sd||a instanceof td)return a;if("function"==typeof a.next)return new rd(function(){return ud(a)});
if("function"==typeof a[Symbol.iterator])return new rd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.G)return new rd(function(){return ud(a.G())});
throw Error("Not an iterator or iterable.");}
function ud(a){if(!(a instanceof Kc))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Jc)throw d;b=!0}return{value:c,done:b}}}}
function rd(a){this.h=a}
rd.prototype.G=function(){return new sd(this.h())};
rd.prototype[Symbol.iterator]=function(){return new td(this.h())};
rd.prototype.i=function(){return new td(this.h())};
function sd(a){this.h=a}
v(sd,Kc);sd.prototype.next=function(){var a=this.h.next();if(a.done)throw Jc;return a.value};
sd.prototype[Symbol.iterator]=function(){return new td(this.h)};
sd.prototype.i=function(){return new td(this.h)};
function td(a){rd.call(this,function(){return a});
this.j=a}
v(td,rd);td.prototype.next=function(){return this.j.next()};var vd=C.JSON.stringify;function Q(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Ca)try{var b=this;a.call(void 0,function(c){wd(b,2,c)},function(c){wd(b,3,c)})}catch(c){wd(this,3,c)}}
function xd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
xd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var yd=new nc(function(){return new xd},function(a){a.reset()});
function zd(a,b,c){var d=yd.get();d.i=a;d.onRejected=b;d.context=c;return d}
Q.prototype.then=function(a,b,c){return Ad(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Q.prototype.$goog_Thenable=!0;Q.prototype.cancel=function(a){if(0==this.h){var b=new Bd(a);vc(function(){Cd(this,b)},this)}};
function Cd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Cd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Dd(c),Ed(c,e,3,b)))}a.j=null}else wd(a,3,b)}
function Fd(a,b){a.i||2!=a.h&&3!=a.h||Gd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ad(a,b,c,d){var e=zd(null,null,null);e.h=new Q(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Bd?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Fd(a,e);return e.h}
Q.prototype.B=function(a){this.h=0;wd(this,2,a)};
Q.prototype.K=function(a){this.h=0;wd(this,3,a)};
function wd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.K;if(d instanceof Q){Fd(d,zd(e||Ca,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(E(d))try{var k=d.then;if("function"===typeof k){Hd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.h=b,a.j=null,Gd(a),3!=b||c instanceof Bd||Id(a,c))}}
function Hd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Gd(a){a.s||(a.s=!0,vc(a.v,a))}
function Dd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Q.prototype.v=function(){for(var a;a=Dd(this);)Ed(this,a,this.h,this.o);this.s=!1};
function Ed(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Jd(b,c,d);else try{b.j?b.i.call(b.context):Jd(b,c,d)}catch(e){Kd.call(null,e)}oc(yd,b)}
function Jd(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Id(a,b){a.m=!0;vc(function(){a.m&&Kd.call(null,b)})}
var Kd=rc;function Bd(a){La.call(this,a)}
H(Bd,La);Bd.prototype.name="cancel";function R(a){Ic.call(this);this.o=1;this.j=[];this.l=0;this.h=[];this.i={};this.v=!!a}
H(R,Ic);q=R.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function Ld(a,b,c){var d=Md;if(a=d.i[a]){var e=d.h;(a=Qa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.R(a)}}
q.R=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=Ca):(c&&Ra(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.M=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Nd(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.R(c)}}return 0!=e}return!1};
function Nd(a,b,c){vc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(I(b,this.R,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.O=function(){R.F.O.call(this);this.clear();this.j.length=0};function Od(a){this.h=a}
Od.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,vd(b))};
Od.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Od.prototype.remove=function(a){this.h.remove(a)};function Pd(a){this.h=a}
H(Pd,Od);function Qd(a){this.data=a}
function Rd(a){return void 0===a||a instanceof Qd?a:new Qd(a)}
Pd.prototype.set=function(a,b){Pd.F.set.call(this,a,Rd(b))};
Pd.prototype.i=function(a){a=Pd.F.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pd.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Sd(a){this.h=a}
H(Sd,Pd);Sd.prototype.set=function(a,b,c){if(b=Rd(b)){if(c){if(c<Date.now()){Sd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Sd.F.set.call(this,a,b)};
Sd.prototype.i=function(a){var b=Sd.F.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Sd.prototype.remove.call(this,a);else return b}};function Td(){}
;function Ud(){}
H(Ud,Td);Ud.prototype[Symbol.iterator]=function(){return qd(this.G(!0)).i()};
Ud.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Vd(a){this.h=a}
H(Vd,Ud);q=Vd.prototype;q.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.G=function(a){var b=0,c=this.h,d=new Kc;d.next=function(){if(b>=c.length)throw Jc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function Wd(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
H(Wd,Vd);function Xd(a,b){this.i=a;this.h=null;if(Ab&&!(9<=Number(Mb))){Yd||(Yd=new Lc);this.h=Yd.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Yd.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
H(Xd,Ud);var Zd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yd=null;function $d(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zd[b]})}
q=Xd.prototype;q.isAvailable=function(){return!!this.h};
q.set=function(a,b){this.h.setAttribute($d(a),b);ae(this)};
q.get=function(a){a=this.h.getAttribute($d(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute($d(a));ae(this)};
q.G=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Kc;d.next=function(){if(b>=c.length)throw Jc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ae(this)};
function ae(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function be(a,b){this.i=a;this.h=b+"::"}
H(be,Ud);be.prototype.set=function(a,b){this.i.set(this.h+a,b)};
be.prototype.get=function(a){return this.i.get(this.h+a)};
be.prototype.remove=function(a){this.i.remove(this.h+a)};
be.prototype.G=function(a){var b=this.i.G(!0),c=this,d=new Kc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var ce=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};F("yt.config_",ce);function de(a){var b=arguments;1<b.length?ce[b[0]]=b[1]:1===b.length&&Object.assign(ce,b[0])}
function S(a,b){return a in ce?ce[a]:b}
;var ee=[];function fe(a){ee.forEach(function(b){return b(a)})}
function ge(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){he(b)}}:a}
function he(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),de("ERRORS",b));fe(a)}
function ie(a){var b=D("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),de("ERRORS",b))}
;var je=0;F("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++je});var ke={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function le(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ke||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
le.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
le.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
le.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=C.ytEventsEventsListeners||{};F("ytEventsEventsListeners",Xa);var me=C.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",me);
function ne(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=E(e[4])&&E(d)&&Ya(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function oe(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in Xa){var c=Xa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?pe()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[b]}}))}
var pe=Na(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function qe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ne(a,b,c,d);if(!e){e=++me.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new le(h);if(!Ub(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new le(h);
h.currentTarget=a;return c.call(a,h)};
g=ge(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),pe()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d]}}}
;function re(a,b){"function"===typeof a&&(a=ge(a));return window.setTimeout(a,b)}
function se(a){"function"===typeof a&&(a=ge(a));return window.setInterval(a,250)}
;var te=/^[\w.]*$/,ue={q:!0,search_query:!0};function ve(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=we(f[0]||""),h=we(f[1]||"");g in c?Array.isArray(c[g])?Ua(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(ve);k.args=[{key:l,value:f[1],query:a,method:xe==m?"unchanged":m}];ue.hasOwnProperty(l)||ie(k)}}return c}
var xe=String(ve);function ye(a){var b=[];Va(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ze(a){"?"==a.charAt(0)&&(a=a.substr(1));return ve(a,"&")}
function Ae(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ze(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=ub(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Be(a){if(!b)var b=window.location.href;var c=a.match(pb)[1]||null,d=rb(a);c&&d?(a=a.match(pb),b=b.match(pb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?rb(b)==d&&(Number(b.match(pb)[4]||null)||null)==(Number(a.match(pb)[4]||null)||null):!0;return a}
function we(a){return a&&a.match(te)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function T(a){a=Ce(a);return"string"===typeof a&&"false"===a?!1:!!a}
function De(a,b){a=Ce(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ce(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;function Ee(){}
function Fe(a,b){return Ge(a,0,b)}
function He(a,b){return Ge(a,1,b)}
;function Ie(){Ee.apply(this,arguments)}
v(Ie,Ee);function Ge(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):re(a,c||0)}
function Je(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Ie.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};Ie.h||(Ie.h=new Ie);function Ke(a){var b=Le;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=$b;e.flash="0";a:{try{var f=b.h.top.location.href}catch(va){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(va){h=0}e.u_his=h;e.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,
e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(va){}try{var m=h.outerWidth;var n=h.outerHeight}catch(va){}try{var r=h.innerWidth;var p=h.innerHeight}catch(va){}try{var x=h.screenLeft;var B=h.screenTop}catch(va){}try{r=h.innerWidth,p=h.innerHeight}catch(va){}try{var z=
h.screen.availWidth;var N=h.screen.availTop}catch(va){}k=[x,B,k,l,z,N,m,n,r,p];l=b.h.top;try{var O=(l||window).document,G="CSS1Compat"==O.compatMode?O.documentElement:O.body;var M=(new Sb(G.clientWidth,G.clientHeight)).round()}catch(va){M=new Sb(-12245933,-12245933)}O=M;M={};G=new lc;C.SVGElement&&C.document.createElementNS&&G.set(0);l=Zb();l["allow-top-navigation-by-user-activation"]&&G.set(1);l["allow-popups-to-escape-sandbox"]&&G.set(2);C.crypto&&C.crypto.subtle&&G.set(3);C.TextDecoder&&C.TextEncoder&&
G.set(4);G=mc(G);M.bc=G;M.bih=O.height;M.biw=O.width;M.brdim=k.join();b=b.i;b=(M.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,M.wgl=!!L.WebGLRenderingContext,M);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Le=new function(){var a=window.document;this.h=window;this.i=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return ye(Ke(a))});var Me="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Ne(){if(!Me)return null;var a=Me();return"open"in a?a:null}
;var Oe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Pe="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Qe=!1;
function Re(a,b){b=void 0===b?{}:b;var c=Be(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in Oe){var f=S(Oe[e]);!f||!c&&rb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!rb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!rb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!rb(a))b["X-YouTube-Ad-Signals"]=ye(Ke(void 0));return b}
function Se(a){var b=window.location.search,c=rb(a);T("debug_handle_relative_url_for_query_forward_killswitch")||c||!Be(a)||(c=document.location.hostname);var d=qb(a.match(pb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ze(b),f={};I(Pe,function(g){e[g]&&(f[g]=e[g])});
return Ae(a,f||{},!1)}
function Te(a,b){var c=b.format||"JSON";a=Ue(a,b);var d=Ve(a,b),e=!1,f=We(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Xe(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=re(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},b.timeout)}}
function Ue(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Ae(a,b||{},!0);return a}
function Ve(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||rb(a)&&!b.withCredentials&&rb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ze(e),ab(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ub(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Qe&&a&&"POST"!=b.method&&(Qe=!0,he(Error("AJAX request with postData should use POST")));return e}
function Xe(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ie(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ye(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ze(g)})}d&&$e(e);
return e}
function $e(a){if(E(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===bb){var e=null;var f=C.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ka,createScript:Ka,createScriptURL:Ka})}catch(g){C.console&&C.console.error(g.message)}bb=e}else bb=e}d=(e=bb)?e.createHTML(d):d;a[c]=new nb(d)}else $e(a[b])}}
function Ye(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ze(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function We(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ge(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ne();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=Se(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Re(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var af=Nb||Ob;var bf={},cf=0;function df(a,b,c){c=void 0===c?"":c;if(ef(a,c))b&&b();else if(c=void 0===c?"":c,a)if(c)We(a,b,"POST",c,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))We(a,b,"GET","",void 0);else{b:{try{var d=new Ma({url:a});if(d.j&&d.i||d.l){var e=qb(a.match(pb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==wb(a,"ri"));break b}}catch(g){}f=!1}f?ef(a)?(b&&b(),f=!0):f=!1:f=!1;f||ff(a,b)}}
function ef(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ff(a,b){var c=new Image,d=""+cf++;bf[d]=c;c.onload=c.onerror=function(){b&&bf[d]&&b();delete bf[d]};
c.src=a}
;var gf=C.ytPubsubPubsubInstance||new R,hf=C.ytPubsubPubsubSubscribedKeys||{},jf=C.ytPubsubPubsubTopicToKeys||{},kf=C.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.R;R.prototype.publish=R.prototype.M;R.prototype.clear=R.prototype.clear;F("ytPubsubPubsubInstance",gf);F("ytPubsubPubsubTopicToKeys",jf);F("ytPubsubPubsubIsSynchronous",kf);F("ytPubsubPubsubSubscribedKeys",hf);var lf=window,U=lf.ytcsi&&lf.ytcsi.now?lf.ytcsi.now:lf.performance&&lf.performance.timing&&lf.performance.now&&lf.performance.timing.navigationStart?function(){return lf.performance.timing.navigationStart+lf.performance.now()}:function(){return(new Date).getTime()};var mf=De("initial_gel_batch_timeout",2E3),nf=Math.pow(2,16)-1,of=null,pf=0,qf=void 0,rf=0,sf=0,tf=0,uf=!0,vf=C.ytLoggingTransportGELQueue_||new Map;F("ytLoggingTransportGELQueue_",vf);var wf=C.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",wf);
function xf(a,b){if("log_event"===a.endpoint){var c="";a.V?c="visitorOnlyApprovedKey":a.H&&(wf[a.H.token]=yf(a.H),c=a.H.token);var d=vf.get(c)||[];vf.set(c,d);d.push(a.payload);b&&(qf=new b);a=De("tvhtml5_logging_max_batch")||De("web_logging_max_batch")||100;b=U();d.length>=a?zf({writeThenSend:!0}):10<=b-tf&&(Af(),tf=b)}}
function Bf(a,b){if("log_event"===a.endpoint){var c="";a.V?c="visitorOnlyApprovedKey":a.H&&(wf[a.H.token]=yf(a.H),c=a.H.token);var d=new Map;d.set(c,[a.payload]);b&&(qf=new b);return new Q(function(e){qf&&qf.isReady()?Cf(d,e,{bypassNetworkless:!0}):e()})}}
function zf(a){a=void 0===a?{}:a;new Q(function(b){window.clearTimeout(rf);window.clearTimeout(sf);sf=0;qf&&qf.isReady()?(Cf(vf,b,a),vf.clear()):(Af(),b())})}
function Af(){T("web_gel_timeout_cap")&&!sf&&(sf=re(function(){zf({writeThenSend:!0})},6E4));
window.clearTimeout(rf);var a=S("LOGGING_BATCH_TIMEOUT",De("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&uf&&(a=mf);rf=re(function(){zf({writeThenSend:!0})},a)}
function Cf(a,b,c){var d=qf;c=void 0===c?{}:c;var e=Math.round(U()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Za({context:Df(d.h||Ef())});h.events=k;(k=wf[g])&&Ff(h,g,k);delete wf[g];g="visitorOnlyApprovedKey"===g;Gf(h,e,g);T("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&df("/generate_204");Hf(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();pf=Math.round(U()-e)},
onError:function(){f--;f||b()},
ja:c,V:g});uf=!1}}
function Gf(a,b,c){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID",void 0))&&((c=S("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*nf/2)),c++,c>nf&&(c=1),de("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,of&&pf&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:of,roundtripMs:String(pf)}),of=b,pf=0)}
function Ff(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function yf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var If=C.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",If);function Jf(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;F("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Kf={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Lf={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Mf(){var a=C.navigator;return a?a.connection:void 0}
;function Nf(){return"INNERTUBE_API_KEY"in ce&&"INNERTUBE_API_VERSION"in ce}
function Ef(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),va:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wa:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ya:S("INNERTUBE_CONTEXT_HL",void 0),xa:S("INNERTUBE_CONTEXT_GL",void 0),za:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ba:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Aa:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Df(a){var b={client:{hl:a.ya,gl:a.xa,clientName:a.wa,clientVersion:a.innertubeContextClientVersion,configInfo:a.va}},c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=S("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=S("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!T("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Jf()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!T("music_web_display_mode_killswitch")){var h;b.client.ia=null!=(h=b.client.ia)?h:{};b.client.ia.webDisplayMode=Jf()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a:{if(h=Mf()){a=Kf[h.type||"unknown"]||"CONN_UNKNOWN";h=Kf[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=Mf(),a=null!==a&&void 0!==a&&a.effectiveType?Lf.hasOwnProperty(a.effectiveType)?Lf[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(ze(S("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Of(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ra||S("AUTHORIZATION"))||(a?b="Bearer "+D("gapi.auth.getToken")().Qa:b=kc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
;function Pf(a){a=Object.assign({},a);delete a.Authorization;var b=kc();if(b){var c=new Cc;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Da(b);void 0===c&&(c=0);if(!Rb){Rb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Qb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Rb[k]&&(Rb[k]=h)}}}c=Qb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Qf(a){var b=new Wd;(b=b.isAvailable()?a?new be(b,a):b:null)||(a=new Xd(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Sd(a):null;this.i=document.domain||window.location.hostname}
Qf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vd(b))}catch(f){return}else e=escape(b);b=this.i;hc.set(""+a,e,{aa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Qf.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=hc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qf.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;hc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Rf;function Sf(){Rf||(Rf=new Qf("yt.innertube"));return Rf}
function Tf(a,b,c,d){if(d)return null;d=Sf().get("nextId",!0)||1;var e=Sf().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pf(c),requestTime:Math.round(U())};Sf().set("nextId",d+1,86400,!0);Sf().set("requests",e,86400,!0);return d}
function Uf(a){var b=Sf().get("requests",!0)||{};delete b[a];Sf().set("requests",b,86400,!0)}
function Vf(a){var b=Sf().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Pf(Of(!1));Ya(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Hf(a,d.method,e,{}));delete b[c]}}Sf().set("requests",b,86400,!0)}}
;var Wf=D("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.R;R.prototype.publish=R.prototype.M;R.prototype.clear=R.prototype.clear;F("ytPubsub2Pubsub2Instance",Wf);F("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function Xf(){}
;var Yf=[],Zf=!1;function $f(a){Zf||(Yf.push({type:"ERROR",payload:a}),10<Yf.length&&Yf.shift())}
function ag(a,b){Zf||(Yf.push({type:"EVENT",eventType:a,payload:b}),10<Yf.length&&Yf.shift())}
;var bg=function(){var a;return function(){a||(a=new Qf("ytidb"));return a}}();
function cg(){var a;return null===(a=bg())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function dg(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=cg())||(a={createdTimestampMs:U(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if(eg()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:U(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=bg())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function fg(a,b){return new dg(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
dg.prototype.isSupported=function(){return this.h};
dg.prototype.log=function(){eg()&&ag("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(U()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function eg(){var a;return!!(T("ytidb_analyze_is_supported")&&(null===(a=bg())||void 0===a?0:a.h))}
;function gg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
v(gg,Error);function hg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ig(a){return a.substr(0,a.indexOf(":"))||a}
;var jg={},kg=(jg.AUTH_INVALID="No user identifier specified.",jg.EXPLICIT_ABORT="Transaction was explicitly aborted.",jg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",jg.MISSING_OBJECT_STORE="Object store not created.",jg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",jg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",jg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",jg.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",jg),lg={},mg=(lg.AUTH_INVALID="ERROR",lg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",lg.EXPLICIT_ABORT="IGNORED",lg.IDB_NOT_SUPPORTED="ERROR",lg.MISSING_OBJECT_STORE="ERROR",lg.QUOTA_EXCEEDED="WARNING",lg.QUOTA_MAYBE_EXCEEDED="WARNING",lg.UNKNOWN_ABORT="WARNING",lg),ng={},og=(ng.AUTH_INVALID=!1,ng.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ng.EXPLICIT_ABORT=!1,ng.IDB_NOT_SUPPORTED=!1,ng.MISSING_OBJECT_STORE=!1,ng.QUOTA_EXCEEDED=!1,ng.QUOTA_MAYBE_EXCEEDED=!0,
ng.UNKNOWN_ABORT=!0,ng);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?kg[a]:c;d=void 0===d?mg[a]:d;e=void 0===e?og[a]:e;gg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,V.prototype)}
v(V,gg);function pg(a){V.call(this,"MISSING_OBJECT_STORE",{Va:a},kg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,pg.prototype)}
v(pg,V);var qg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function rg(a,b,c){b=ig(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof V)return d;if("QuotaExceededError"===d.name)return new V("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Pb&&"UnknownError"===d.name)return new V("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&qg.some(function(e){return d.message.includes(e)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new V("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Wa:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function sg(a){if(!a)throw Error();throw a;}
function tg(a){return a}
function W(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
W.all=function(a){return new W(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)ug(W.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
W.resolve=function(a){return new W(function(b,c){a instanceof W?a.then(b,c):b(a)})};
W.reject=function(a){return new W(function(b,c){c(a)})};
W.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:tg,e=null!==b&&void 0!==b?b:sg;return new W(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){vg(c,c,d,f,g)}),c.onRejected.push(function(){wg(c,c,e,f,g)})):"FULFILLED"===c.state.status?vg(c,c,d,f,g):"REJECTED"===c.state.status&&wg(c,c,e,f,g)})};
function ug(a,b){a.then(void 0,b)}
function vg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?xg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?xg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?xg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zg(a){return new Promise(function(b,c){yg(a,b,c)})}
function X(a){return new W(function(b,c){yg(a,b,c)})}
;function Ag(a,b){return new W(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Bg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
q=Bg.prototype;q.add=function(a,b,c){return Cg(this,[a],{mode:"readwrite",C:!0},function(d){return Dg(d,a).add(b,c)})};
q.clear=function(a){return Cg(this,[a],{mode:"readwrite",C:!0},function(b){return Dg(b,a).clear()})};
q.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
q.count=function(a,b){return Cg(this,[a],{mode:"readonly",C:!0},function(c){return Dg(c,a).count(b)})};
function Eg(a,b,c){a=a.h.createObjectStore(b,c);return new Fg(a)}
q.delete=function(a,b){return Cg(this,[a],{mode:"readwrite",C:!0},function(c){return Dg(c,a).delete(b)})};
q.get=function(a,b){return Cg(this,[a],{mode:"readonly",C:!0},function(c){return Dg(c,a).get(b)})};
function Gg(a,b){return Cg(a,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(c){c=Dg(c,"LogsRequestsStore");return X(c.h.put(b,void 0))})}
function Cg(a,b,c,d){return K(a,function f(){var g=this,h,k,l,m,n,r,p,x,B,z,N,O;return y(f,function(G){switch(G.h){case 1:var M={mode:"readonly",C:!1};"string"===typeof c?M.mode=c:M=c;h=M;g.transactionCount++;k=h.C?De("ytidb_transaction_try_count",1):1;l=0;case 2:if(m){G.u(3);break}l++;n=Math.round(U());pa(G,4);r=g.h.transaction(b,h.mode);M=new Hg(r);M=Ig(M,d);return w(G,M,6);case 6:return p=G.i,x=Math.round(U()),Jg(g,n,x,l,void 0,b.join(),h),G.return(p);case 4:B=qa(G);z=Math.round(U());N=rg(B,g.h.name,
b.join());if((O=N instanceof V&&!N.h)||l>=k)Jg(g,n,z,l,N,b.join(),h),m=N;G.u(2);break;case 3:return G.return(Promise.reject(m))}})})}
function Jg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ag("QUOTA_EXCEEDED",{dbName:ig(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(ag("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Kg(a,!1,d,f,b),$f(e)):Kg(a,!0,d,f,b)}
function Kg(a,b,c,d,e){ag("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Fg(a){this.h=a}
q=Fg.prototype;q.add=function(a,b){return X(this.h.add(a,b))};
q.clear=function(){return X(this.h.clear()).then(function(){})};
q.count=function(a){return X(this.h.count(a))};
function Lg(a,b){return Mg(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Lg(this,a):X(this.h.delete(a))};
q.get=function(a){return X(this.h.get(a))};
q.index=function(a){return new Ng(this.h.index(a))};
q.getName=function(){return this.h.name};
function Mg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Og(a).then(function(d){return Ag(d,c)})}
function Hg(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ig(a,b){var c=new Promise(function(d,e){ug(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Hg.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new V("EXPLICIT_ABORT");};
Hg.prototype.commit=function(){if(!T("ytidb_stop_transaction_commit")){var a=this.h;a.commit&&!this.aborted&&a.commit()}};
function Dg(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Fg(b),a.i.set(b,c));return c}
function Ng(a){this.h=a}
Ng.prototype.count=function(a){return X(this.h.count(a))};
Ng.prototype.delete=function(a){return Pg(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Ng.prototype.get=function(a){return X(this.h.get(a))};
Ng.prototype.getKey=function(a){return X(this.h.getKey(a))};
function Pg(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Og(a).then(function(d){return Ag(d,c)})}
function Qg(a,b){this.request=a;this.cursor=b}
function Og(a){return X(a).then(function(b){return null===b?null:new Qg(a,b)})}
q=Qg.prototype;q.advance=function(a){this.cursor.advance(a);return Og(this.request)};
q.continue=function(a){this.cursor.continue(a);return Og(this.request)};
q.delete=function(){return X(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.update=function(a){return X(this.cursor.update(a))};function Rg(a,b,c){return K(this,function e(){var f,g,h,k,l,m,n,r,p,x;return y(e,function(B){if(1==B.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.Da,m=g.upgrade,n=g.closed,p=function(){r||(r=new Bg(f.result,{closed:n}));return r},f.addEventListener("upgradeneeded",function(z){if(null===z.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");z.dataLoss&&"none"!==z.dataLoss&&ag("IDB_DATA_CORRUPTED",{reason:z.dataLossMessage||"unknown reason",dbName:ig(a)});var N=p(),O=new Hg(f.transaction);m&&m(N,z.oldVersion,z.newVersion,O)}),h&&f.addEventListener("blocked",function(){h()}),w(B,zg(f),2);
x=B.i;k&&x.addEventListener("versionchange",function(){k(p())});
x.addEventListener("close",function(){ag("IDB_UNEXPECTEDLY_CLOSED",{dbName:ig(a),dbVersion:x.version});l&&l()});
return B.return(p())})})}
function Sg(a,b,c){c=void 0===c?{}:c;return Rg(a,b,c)}
function Tg(a,b){b=void 0===b?{}:b;return K(this,function d(){var e,f,g;return y(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,zg(e),0)})})}
;function Ug(a,b){this.name=a;this.options=b;this.j=!1}
Ug.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Sg(a,b,c)};
Ug.prototype.delete=function(a){a=void 0===a?{}:a;return Tg(this.name,a)};
Ug.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,Da:c,upgrade:this.options.upgrade},e=function(){return K(a,function g(){var h=this,k,l,m;return y(g,function(n){switch(n.h){case 1:return pa(n,2),w(n,h.i(h.name,h.options.version,d),4);case 4:k=n.i;a:{var r=u(Object.keys(h.options.ka));for(var p=r.next();!p.done;p=r.next())if(p=p.value,!k.h.objectStoreNames.contains(p)){r=p;break a}r=void 0}l=r;if(void 0===l){n.u(5);break}if(h.j){n.u(6);break}h.j=!0;return w(n,h.delete(),7);case 7:return n.return(e());case 6:throw new pg(l);case 5:return n.return(k);
case 2:m=qa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Vg=new Ug("YtIdbMeta",{ka:{databases:!0},upgrade:function(a,b){1>b&&Eg(a,"databases",{keyPath:"actualName"})}});
function Wg(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,Vg.open(),2);d=e.i;return e.return(Cg(d,["databases"],{C:!0,mode:"readwrite"},function(f){var g=Dg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.h.put(a,void 0)).then(function(){})})}))})})}
function Xg(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,Vg.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function Yg(){return K(this,function b(){var c,d;return y(b,function(e){if(1==e.h)return w(e,Vg.open(),2);if(3!=e.h)return c=e.i,w(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
;var Zg;
function $g(){return K(this,function b(){var c,d,e,f,g;return y(b,function(h){switch(h.h){case 1:if(T("ytidb_is_supported_cache_success_result")&&(c=cg(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new dg(!0));var k;if(k=af)k=/WebKit\/([0-9]+)/.exec(kb),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(kb),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(fg(Error("YtIdb is not supported on iOS 8 or 9")));if(Bb)return h.return(fg(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(fg(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(fg(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(fg(Error("IDBTransaction.prototype.objectStoreNames is missing")));pa(h,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(h,Wg(e),4);case 4:return w(h,Xg("yt-idb-test-do-not-use"),5);
case 5:return h.return(new dg(!0));case 2:f=qa(h);if(!eg()){h.u(6);break}pa(h,7);return w(h,Yg(),9);case 9:return g=h.i,h.return(fg(f,g));case 7:return qa(h),h.return(fg(f));case 6:return h.return(fg(f))}})})}
function ah(){if(void 0!==Zg)return Zg;Zf=!0;return Zg=$g().then(function(a){Zf=!1;a.log();return a.isSupported()})}
;function bh(){var a=new V("AUTH_INVALID");$f(a);throw a;throw Error("Datasync ID not set");}
function ch(a,b,c,d){var e;return K(this,function g(){var h,k;return y(g,function(l){switch(l.h){case 1:return w(l,dh({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return hg(a),c?h={actualName:a,publicName:a,userIdentifier:void 0}:h=bh(),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,pa(l,3),w(l,Wg(h),5);case 5:return w(l,Sg(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=qa(l),pa(l,7),w(l,Xg(h.actualName),9);case 9:l.h=8;l.s=0;break;case 7:qa(l);
case 8:throw k;}})})}
function dh(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,ah(),2);if(!e.i)throw d=new V("IDB_NOT_SUPPORTED",{context:a}),$f(d),d;e.h=0})})}
function eh(a,b,c){c=void 0===c?{}:c;return ch(a,b,!1,c)}
function fh(a,b,c){c=void 0===c?{}:c;return ch(a,b,!0,c)}
function gh(a,b){b=void 0===b?{}:b;return K(this,function d(){var e;return y(d,function(f){if(1==f.h)return w(f,ah(),2);if(3!=f.h){if(!f.i)return f.return();hg(a);e=bh();return w(f,Tg(e.actualName,b),3)}return w(f,Xg(e.actualName),0)})})}
function hh(a,b){b=void 0===b?{}:b;return K(this,function d(){return y(d,function(e){if(1==e.h)return w(e,ah(),2);if(3!=e.h){if(!e.i)return e.return();hg(a);return w(e,Tg(a,b),3)}return w(e,Xg(a),0)})})}
;function ih(a,b){Ug.call(this,a,b);this.options=b;hg(a)}
v(ih,Ug);ih.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.na?fh:eh)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
ih.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.na?hh:gh)(this.name,a)};
function jh(a){var b;return function(){b||(b=new ih("LogsDatabaseV2",a));return b}}
;function kh(){W.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(kh,W);kh.reject=W.reject;kh.resolve=W.resolve;kh.all=W.all;var lh;function mh(){if(!lh){var a={};lh=jh({ka:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),na:!T("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Eg(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Eg(b,"sapisid"));3>c&&Eg(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return lh().open()}
function nh(a){return K(this,function c(){var d,e,f,g,h;return y(c,function(k){switch(k.h){case 1:return d={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,oh(),2);case 2:return e=k.i,w(k,mh(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Gg(f,g),4);case 4:return h=k.i,d.Ea=U(),ph(d),k.return(h)}})})}
function qh(){return K(this,function b(){var c,d,e,f,g,h,k,l;return y(b,function(m){switch(m.h){case 1:return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,oh(),2);case 2:return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=["NEW",d,e,0],g=["NEW",d,e,U()],h=IDBKeyRange.bound(f,g),w(m,mh(),3);case 3:return k=m.i,l=void 0,w(m,Cg(k,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(n){return Pg(Dg(n,"LogsRequestsStore").index("newRequest"),{query:h,direction:"prev"},function(r){r.cursor.value&&
(l=r.cursor.value,l.status="QUEUED",r.update(l))})}),4);
case 4:return c.Ea=U(),ph(c),m.return(l)}})})}
function rh(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,mh(),2);d=e.i;return e.return(Cg(d,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(f){var g=Dg(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",X(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function sh(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,mh(),2);d=e.i;return e.return(Cg(d,["LogsRequestsStore"],{mode:"readwrite",C:!0},function(f){var g=Dg(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,X(g.h.put(h,void 0)).then(function(){return h})):kh.resolve(void 0)})}))})})}
function th(a){return K(this,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,mh(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function oh(){return K(this,function b(){var c;return y(b,function(d){if(1==d.h){Xf.h||(Xf.h=new Xf);var e={};var f=kc([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(S("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in ce||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ce&&(e["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));e instanceof Q||(f=new Q(Ca),wd(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Pf(c);var g=
new Cc;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function ph(a){var b=De("nwl_latency_sampling_rate",.01);!(.02<b)&&Math.random()<=b&&(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}
;var uh;function vh(){uh||(uh=new Qf("yt.offline"));return uh}
function wh(a){if(T("offline_error_handling")){var b=vh().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);vh().set("errors",b,2592E3,!0)}}
function xh(){if(T("offline_error_handling")){var a=vh().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new gg(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;he(c)}vh().set("errors",{},2592E3,!0)}}}
;var yh=De("network_polling_interval",3E4);function zh(){od.call(this);this.S=0;this.o=this.j=!1;this.v=0;this.l=this.N=!1;this.h=Ah();this.l=T("validate_network_status");Bh(this);Ch(this)}
v(zh,od);function Dh(a,b){a.j=!0;if(void 0===b?0:b)a.S||Eh(a)}
function Ah(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Ch(a){window.addEventListener("online",function(){return K(a,function c(){var d=this;return y(c,function(e){if(1==e.h)return d.l?w(e,Fh(d),2):(d.h=!0,d.j&&P(d,"ytnetworkstatus-online"),e.u(2));Gh(d);d.N&&xh();e.h=0})})})}
function Bh(a){window.addEventListener("offline",function(){return K(a,function c(){var d=this;return y(c,function(e){if(1==e.h)return d.l?w(e,Fh(d),2):(d.h=!1,d.j&&P(d,"ytnetworkstatus-offline"),e.u(2));Gh(d);e.h=0})})})}
function Eh(a){a.S=Fe(function(){return K(a,function c(){var d=this;return y(c,function(e){if(1==e.h){if(T("trigger_nsm_validation_checks_with_nwl")&&!d.h)return w(e,Fh(d),3);if(Ah()){if(!1!==d.h)return e.u(3);d.o=!0;d.v=U();return d.j?d.l?w(e,Fh(d),11):(d.h=!0,P(d,"ytnetworkstatus-online"),e.u(11)):e.u(11)}if(!0!==d.h)return e.u(3);d.o=!0;d.v=U();return d.j?d.l?w(e,Fh(d),3):(d.h=!1,P(d,"ytnetworkstatus-offline"),e.u(3)):e.u(3)}if(3!=e.h)return d.N&&xh(),e.u(3);Eh(d);e.h=0})})},yh)}
function Gh(a){a.o&&(ie(new gg("NetworkStatusManager state did not match poll",U()-a.v)),a.o=!1)}
function Fh(a,b){return a.B?a.B:a.B=new Promise(function(c){return K(a,function e(){var f,g,h,k=this;return y(e,function(l){switch(l.h){case 1:return f=new AbortController,g=f.signal,h=!1,pa(l,2,3),k.Y=He(function(){f.abort()},b||2E4),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ra(l);k.B=void 0;Je(k.Y);h!==k.h&&(k.h=h,k.h&&k.j?P(k,"ytnetworkstatus-online"):k.j&&P(k,"ytnetworkstatus-offline"));c(h);sa(l);break;case 2:qa(l),h=!1,l.u(3)}})})})}
;function Hh(a){a=void 0===a?{}:a;od.call(this);var b=this;this.j=this.o=0;zh.h||(zh.h=new zh);this.h=zh.h;Dh(this.h,a.ta);a.Ca&&(this.h.N=!0);a.X?(this.X=a.X,fd(this.h,"ytnetworkstatus-online",function(){Ih(b,"publicytnetworkstatus-online")}),fd(this.h,"ytnetworkstatus-offline",function(){Ih(b,"publicytnetworkstatus-offline")})):(fd(this.h,"ytnetworkstatus-online",function(){P(b,"publicytnetworkstatus-online")}),fd(this.h,"ytnetworkstatus-offline",function(){P(b,"publicytnetworkstatus-offline")}))}
v(Hh,od);function Jh(){var a=Kh().h;a.l||a.h===Ah()||ie(new gg("NetworkStatusManager isOnline does not match window status"));return a.h}
function Lh(){var a=Kh();return K(a,function c(){var d=this;return y(c,function(e){return e.return(Fh(d.h,void 0))})})}
function Ih(a,b){a.X?a.j?(Je(a.o),a.o=He(function(){a.l!==b&&(P(a,b),a.l=b,a.j=U())},a.X-(U()-a.j))):(P(a,b),a.l=b,a.j=U()):P(a,b)}
;var Mh=0,Nh=0,Oh,Ph=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,isIdbSupported:!1,potentialEsfErrorCounter:Nh};T("export_networkless_options")&&F("ytNetworklessLoggingInitializationOptions",Ph);function Qh(a,b){function c(d){var e=Jh();if(!Rh()||!d||e&&T("vss_networkless_bypass_write"))Sh(a,b);else{var f={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};nh(f).then(function(g){f.id=g;(Jh()||T("networkless_always_online"))&&Th(f)}).catch(function(g){Th(f);
Jh()?he(g):wh(g)})}}
b=void 0===b?{}:b;T("skip_is_supported_killswitch")?ah().then(function(d){c(d)}):c(Uh())}
function Vh(a,b){function c(d){if(Rh()&&d){var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?th(e.id):f=!0;g(h,k)};
Sh(e.url,e.options);nh(e).then(function(h){e.id=h;f&&th(e.id)}).catch(function(h){Jh()?he(h):wh(h)})}else Sh(a,b)}
b=void 0===b?{}:b;T("skip_is_supported_killswitch")?ah().then(function(d){c(d)}):c(Uh())}
function Wh(){var a=this;Mh||(Mh=He(function(){return K(a,function c(){var d;return y(c,function(e){if(1==e.h)return w(e,qh(),2);if(3!=e.h)return d=e.i,d?w(e,Th(d),3):(Je(Mh),Mh=0,e.return());Mh=0;Wh();e.h=0})})},100))}
function Th(a){return K(this,function c(){var d;return y(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.u(2);break}return w(e,rh(a.id),3);case 3:(d=e.i)?a=d:ie(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.u(4);break}ie(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return w(e,th(a.id),5);case 5:return e.return();case 4:f=a=Xh(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:
f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(U());(a=f)&&Sh(a.url,a.options);e.h=0}})})}
function Xh(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return K(b,function h(){return y(h,function(k){switch(k.h){case 1:if(!(T("trigger_nsm_validation_checks_with_nwl")&&(D("ytNetworklessLoggingInitializationOptions")?Ph.potentialEsfErrorCounter:Nh)<=De("potential_esf_error_limit",10))){k.u(2);break}return w(k,Lh(),3);case 3:if(Jh())D("ytNetworklessLoggingInitializationOptions")&&Ph.potentialEsfErrorCounter++,Nh++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.u(4);break}return 1>
a.sendCount?w(k,sh(a.id),8):w(k,th(a.id),4);case 8:He(function(){Jh()&&Wh()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return K(b,function h(){return y(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.u(2):w(k,th(a.id),2);d(e,f);k.h=0})})};
return a}
function Kh(){Oh||(Oh=new Hh({Ca:!0,ta:T("trigger_nsm_validation_checks_with_nwl")}));return Oh}
function Sh(a,b){if(T("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Te(a,b):df(a,void 0,b.postBody)}else Te(a,b)}
function Rh(){return D("ytNetworklessLoggingInitializationOptions")?Ph.isNwlInitialized:!1}
function Uh(){return D("ytNetworklessLoggingInitializationOptions")?Ph.isIdbSupported:!1}
;function Yh(a){var b=this;this.h=null;a?this.h=a:Nf()&&(this.h=Ef());Fe(function(){Vf(b)},5E3)}
Yh.prototype.isReady=function(){!this.h&&Nf()&&(this.h=Ef());return!!this.h};
function Hf(a,b,c,d){function e(r){r=void 0===r?!1:r;var p;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(p=Tf(b,c,l,k)),p)){var x=g.onSuccess,B=g.onFetchSuccess;g.onSuccess=function(z,N){Uf(p);x(z,N)};
c.onFetchSuccess=function(z,N){Uf(p);B(z,N)}}try{r&&d.retry&&!d.ja.bypassNetworkless?(g.method="POST",!d.ja.writeThenSend&&T("nwl_send_fast_on_unload")?Vh(n,g):Qh(n,g)):(g.method="POST",g.postParams||(g.postParams={}),Te(n,g))}catch(z){if("InvalidAccessError"==z.name)p&&(Uf(p),p=0),ie(Error("An extension is blocking network request."));
else throw z;}p&&Fe(function(){Vf(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ie(new gg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new gg("innertube xhrclient not ready",b,c,d);he(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.za)&&(h=f);var k=a.h.Ba||!1,l=Of(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var m={alt:"json"};a.h.Aa&&g.headers.Authorization||(m.key=a.h.innertubeApiKey);var n=Ae(""+h+f,m||{},!0);Rh()?ah().then(function(r){e(r)}):e(!1)}
;function Zh(a,b){var c=void 0===c?{}:c;var d=Yh;S("ytLoggingEventsDefaultDisabled",!1)&&Yh==Yh&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=D("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};T("log_sequence_info_on_gel_web")&&c.ma&&(a=e.context,b=c.ma,If[b]=b in If?If[b]+1:0,a.sequence={index:If[b],groupKey:b},c.Ta&&delete If[c.ma]);(c.Ya?Bf:xf)({endpoint:"log_event",
payload:e,H:c.H,V:c.V},d)}
;var $h=[{ha:function(a){return"Cannot read property '"+a.key+"'"},
ba:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ha:function(a){return"Cannot call '"+a.key+"'"},
ba:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var bi={J:[],I:[{qa:ai,weight:500}]};function ai(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ci(){this.I=[];this.J=[]}
var di;function ei(){if(!di){var a=di=new ci;a.J.length=0;a.I.length=0;bi.J&&a.J.push.apply(a.J,bi.J);bi.I&&a.I.push.apply(a.I,bi.I)}return di}
;var fi=new R;function gi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=hi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=hi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=hi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function hi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ii(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ji(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=gi(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?ji(f+".ve",g,h,k):0;d+=f;d+=ji(e,a[e],b,c);if(500<d)break}}else c[b]=ki(a),d+=c[b].length;else c[b]=ki(a),d+=c[b].length;return d}
function ji(a,b,c,d){c+="."+a;a=ki(b);d[c]=a;return c.length+a.length}
function ki(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var li=new Set,mi=0,ni=0,oi=0,pi=[],qi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var ri={};function si(a){return ri[a]||(ri[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ti={},ui=[],Md=new R,vi={};function wi(){for(var a=u(ui),b=a.next();!b.done;b=a.next())b=b.value,b()}
function xi(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[si(b)]:a.getAttribute("data-"+b):null;return c}
function yi(a,b){for(var c=1;c<arguments.length;++c);Md.M.apply(Md,arguments)}
;function zi(a){this.j=this.h=!1;this.i=a||{};a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"===document.location.protocol||a&&0===a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}}
function Y(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Ai(a,b,c){Bi||(Bi={},qe(window,"message",function(d){a:{if(d.origin===Y(a,"host")||d.origin===Y(a,"host").toString().replace(/^http:/,"https:")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}a.j=!0;a.h||0!==d.origin.indexOf("https:")||(a.h=!0);if(d=Bi[e.id])d.o=!0,d.o&&(I(d.s,d.sendMessage,d),d.s.length=0),d.ca(e)}e=void 0}return e}));
Bi[c]=b}
var Bi=null;function Z(a,b,c){this.m=this.h=this.i=null;this.j=0;this.o=!1;this.s=[];this.l=null;this.B={};if(!a)throw Error("YouTube player element ID required.");this.id=Ea(this);this.v=c;this.setup(a,b)}
q=Z.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.pa=function(){return this.h};
q.ca=function(a){Ci(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Di(this,a);return this};
function Ei(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.v===b[0]&&Di(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(ti[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Bi&&(Bi[this.id]=null);this.i=null;a=this.h;for(var c in Xa)Xa[c][0]==a&&oe(c);this.m=this.h=null};
q.ea=function(){return{}};
function Fi(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.sendMessage(b):a.s.push(b)}
function Ci(a,b,c){a.l.m||(c={target:a,data:c},a.l.M(b,c),yi(a.v+"."+b,c))}
function Gi(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Y(a.i,"title"));(b=Y(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Y(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.ea();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&I(["debugjs","debugcss"],function(h){var k=wb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Y(a.i,"host")+("/embed/"+Y(a.i,"videoId"))+"?"+ub(g);return c}
q.la=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Hi(a){Ai(a.i,a,a.id);a.j=se(a.la.bind(a));qe(a.h,"load",function(){window.clearInterval(a.j);a.j=se(a.la.bind(a))})}
q.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?sb(a.src):"https://www.youtube.com"),this.i=new zi(b),c||(b=Gi(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ea(this.h)),ti[this.h.id]=this,window.postMessage){this.l=new R;Hi(this);b=Y(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in vi)vi.hasOwnProperty(e)&&
Ei(this,e)}};
function Di(a,b){a.B[b]||(a.B[b]=!0,Fi(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";a=vd(a);var b=this.i;var c=sb(this.h.src||"");b=0===c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(z){if(z.name&&"SyntaxError"===z.name){if(!(z.message&&0<z.message.indexOf("target origin ''"))){var d=void 0,e=z;d=void 0===d?{}:d;d.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&e.level&&(d=e.level);if(T("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=mi)){g=void 0;var k=f,l=Ec(e);f=l.message||
"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+": "+f)){var n=m.split("\n");n.shift();m=n.join("\n")}n=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=ii(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var x="params."+g,B=ki(p[g]);k[x]=B;r+=x.length+
B.length;if(500<r)break}}else k.params=ki(p)}if(pi.length)for(g=0;g<pi.length&&!(r=ii(pi[g],"params.context."+g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:n,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=ei();f=u(e.J);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Ua)){e=h.weight;
break a}e=u(e.I);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.qa(g)){e=f.weight;break a}e=1}g.sampleWeight=e;e=g;g=u($h);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ba[e.name])for(n=u(f.ba[e.name]),h=n.next();!h.done;h=n.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];n=l.groups;l={};for(m=0;m<n.length;m++)l[n[m]]=h[m+1],e.params["params.error."+n[m]]=h[m+1];e.message=f.ha(l);break}e.params||(e.params={});g=ei();e.params["params.errorServiceSignature"]=
"msg="+g.J.length+"&cb="+g.I.length;e.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!li.has(e.message)){"ERROR"===d?(fi.M("handleError",e),T("record_app_crashed_web")&&0===oi&&1===e.sampleWeight&&(oi++,Zh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),ni++):"WARNING"===d&&fi.M("handleWarning",
e);if(T("kevlar_gel_error_routing")){g=d;h=e;b:{f=u(qi);for(n=f.next();!n.done;n=f.next())if((l=kb)&&0<=l.toLowerCase().indexOf(n.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{n={stackTrace:h.stack};h.fileName&&(n.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(n.lineNumber=Number(f[0]),n.columnNumber=Number(f[1])):n.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",
message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");n={isObfuscated:!0,browserStackInfo:n};l={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(l.experimentIds=S("FEXP_EXPERIMENTS"));if(h=h.params)for(m=u(Object.keys(h)),k=m.next();!k.done;k=m.next())k=k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=S("SERVER_NAME",void 0);m=S("SERVER_VERSION",void 0);h&&m&&(l.kvPairs.push({key:"server.name",
value:h}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:n,logMessage:f}}f&&(Zh("clientError",f),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&zf())}if(!T("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:S("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&
(d.postParams.stack=f.stack);f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=S("SERVER_NAME",void 0);f=S("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}Te(S("ECATCHER_REPORT_HOST","")+"/error_204",d)}li.add(e.message);mi++}}}}}else throw z;}else console&&console.warn&&
console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Ii(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ji(a){return 0===a.search("get")||0===a.search("is")}
;function Ki(a,b){Z.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.D={};this.playerInfo={}}
v(Ki,Z);q=Ki.prototype;q.ea=function(){var a=Y(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Y(this.i,"embedConfig")){if(E(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.ca=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(E(a))for(var c in a)a.hasOwnProperty(c)&&(this.D[c]=a[c]);break;case "infoDelivery":Li(this,a);break;case "initialDelivery":E(a)&&(window.clearInterval(this.j),this.playerInfo={},this.D={},Mi(this,a.apiInterface),Li(this,a));break;default:Ci(this,b,a)}};
function Li(a,b){if(E(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Mi(a,b){I(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Ii(c)?this[c]=function(){this.playerInfo={};
this.D={};Fi(this,c,arguments);return this}:Ji(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Fi(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Y(this.i,"host")+("/embed/"+Y(this.i,"videoId")),b=Number(Y(this.i,"width")),c=Number(Y(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);jb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(db,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(eb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(fb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(gb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(hb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(ib,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.D.namespaces?a?this.D[a]?this.D[a].options||[]:[]:this.D.namespaces||[]:[]};
q.getOption=function(a,b){if(this.D.namespaces&&a&&b&&this.D[a])return this.D[a][b]};
function Ni(a){if("iframe"!==a.tagName.toLowerCase()){var b=xi(a,"videoid");b&&(b={videoId:b,width:xi(a,"width"),height:xi(a,"height")},new Ki(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return ti[a]});
F("YT.scan",wi);F("YT.subscribe",function(a,b,c){Md.subscribe(a,b,c);vi[a]=!0;for(var d in ti)ti.hasOwnProperty(d)&&Ei(ti[d],a)});
F("YT.unsubscribe",function(a,b,c){Ld(a,b,c)});
F("YT.Player",Ki);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.pa;Z.prototype.addEventListener=Z.prototype.addEventListener;Ki.prototype.getVideoEmbedCode=Ki.prototype.getVideoEmbedCode;Ki.prototype.getOptions=Ki.prototype.getOptions;Ki.prototype.getOption=Ki.prototype.getOption;
ui.push(function(a){var b=a;b||(b=document);a=Ta(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Oa(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Ta(b);I(Sa(a,b),Ni)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||wi();var Oi=C.onYTReady;Oi&&Oi();var Pi=C.onYouTubeIframeAPIReady;Pi&&Pi();var Qi=C.onYouTubePlayerAPIReady;Qi&&Qi();}).call(this);
