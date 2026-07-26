"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var u=t(function(f,n){
var i=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-pow/dist');function o(e,r){return i(e)||e<=2||i(r)||r<=0?NaN:r*r/(c(e-1,2)*(e-2))}n.exports=o
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
