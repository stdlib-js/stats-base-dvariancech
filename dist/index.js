"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=o(function(C,p){
function R(r,e,v,a,M){var f,i,s,n,t,u,c;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(i=M,f=v[i],i+=a,s=0,n=0,c=1;c<r;c++)t=v[i]-f,s+=t*t,n+=t,i+=a;return s/u-n/r*(n/u)}p.exports=R
});var h=o(function(D,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=q();function O(r,e,v,a){return E(r,e,v,a,_(r,a))}y.exports=O
});var j=o(function(F,x){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=h(),g=q();b(m,"ndarray",g);x.exports=m
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),d,l=w(k(__dirname,"./native.js"));z(l)?d=A:d=l;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
