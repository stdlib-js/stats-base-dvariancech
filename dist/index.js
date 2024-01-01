"use strict";var q=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var d=q(function(A,p){
function R(r,u,o,a){var s,e,i,t,v,n,c;if(n=r-u,r<=0||n<=0)return NaN;if(r===1||a===0)return 0;for(a<0?e=(1-r)*a:e=0,s=o[e],e+=a,i=0,t=0,c=1;c<r;c++)v=o[e]-s,i+=v*v,t+=v,e+=a;return i/n-t/r*(t/n)}p.exports=R
});var x=q(function(B,h){
function _(r,u,o,a,s){var e,i,t,v,n,c,f;if(c=r-u,r<=0||c<=0)return NaN;if(r===1||a===0)return 0;for(i=s,e=o[i],i+=a,t=0,v=0,f=1;f<r;f++)n=o[i]-e,t+=n*n,v+=n,i+=a;return t/c-v/r*(v/c)}h.exports=_
});var j=q(function(C,M){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=d(),O=x();E(y,"ndarray",O);M.exports=y
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=j(),m,l=g(b(__dirname,"./native.js"));k(l)?m=w:m=l;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
