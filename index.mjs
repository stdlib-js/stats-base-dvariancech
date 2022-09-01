// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t){var a,i,f,u,o,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(a=e[i=t<0?(1-r)*t:0],i+=t,f=0,u=0,s=1;s<r;s++)f+=(o=e[i]-a)*o,u+=o,i+=t;return f/d-u/r*(u/d)}function e(r,n,e,t,a){var i,f,u,o,d,s,l;if(s=r-n,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(i=e[f=a],f+=t,u=0,o=0,l=1;l<r;l++)u+=(d=e[f]-i)*d,o+=d,f+=t;return u/s-o/r*(o/s)}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
