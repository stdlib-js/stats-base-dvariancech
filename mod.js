// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(u.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},f=r()?c:_;function p(e,r,t,n){var o,a,i,u,l,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(o=t[a=n<0?(1-e)*n:0],a+=n,i=0,u=0,_=1;_<e;_++)i+=(l=t[a]-o)*l,u+=l,a+=n;return i/c-u/e*(u/c)}function b(e,r,t,n,o){var a,i,u,l,c,_,f;if(_=e-r,e<=0||_<=0)return NaN;if(1===e||0===n)return 0;for(a=t[i=o],i+=n,u=0,l=0,f=1;f<e;f++)u+=(c=t[i]-a)*c,l+=c,i+=n;return u/_-l/e*(l/_)}(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"ndarray",b);export{p as default,b as ndarray};
//# sourceMappingURL=mod.js.map
