(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))v(h);new MutationObserver(h=>{for(const x of h)if(x.type==="childList")for(const b of x.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&v(b)}).observe(document,{childList:!0,subtree:!0});function l(h){const x={};return h.integrity&&(x.integrity=h.integrity),h.referrerPolicy&&(x.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?x.credentials="include":h.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function v(h){if(h.ep)return;h.ep=!0;const x=l(h);fetch(h.href,x)}})();function jd(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var nn={exports:{}},Kt={},ln={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function qm(){if(nd)return de;nd=1;var u=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),M=Symbol.iterator;function C(c){return c===null||typeof c!="object"?null:(c=M&&c[M]||c["@@iterator"],typeof c=="function"?c:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,F={};function S(c,j,R){this.props=c,this.context=j,this.refs=F,this.updater=R||A}S.prototype.isReactComponent={},S.prototype.setState=function(c,j){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,j,"setState")},S.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function U(){}U.prototype=S.prototype;function ee(c,j,R){this.props=c,this.context=j,this.refs=F,this.updater=R||A}var H=ee.prototype=new U;H.constructor=ee,E(H,S.prototype),H.isPureReactComponent=!0;var ce=Array.isArray,ie=Object.prototype.hasOwnProperty,ye={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function be(c,j,R){var O,W={},G=null,$=null;if(j!=null)for(O in j.ref!==void 0&&($=j.ref),j.key!==void 0&&(G=""+j.key),j)ie.call(j,O)&&!Te.hasOwnProperty(O)&&(W[O]=j[O]);var K=arguments.length-2;if(K===1)W.children=R;else if(1<K){for(var oe=Array(K),me=0;me<K;me++)oe[me]=arguments[me+2];W.children=oe}if(c&&c.defaultProps)for(O in K=c.defaultProps,K)W[O]===void 0&&(W[O]=K[O]);return{$$typeof:u,type:c,key:G,ref:$,props:W,_owner:ye.current}}function er(c,j){return{$$typeof:u,type:c.type,key:j,ref:c.ref,props:c.props,_owner:c._owner}}function Ke(c){return typeof c=="object"&&c!==null&&c.$$typeof===u}function or(c){var j={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(R){return j[R]})}var le=/\/+/g;function Se(c,j){return typeof c=="object"&&c!==null&&c.key!=null?or(""+c.key):j.toString(36)}function ze(c,j,R,O,W){var G=typeof c;(G==="undefined"||G==="boolean")&&(c=null);var $=!1;if(c===null)$=!0;else switch(G){case"string":case"number":$=!0;break;case"object":switch(c.$$typeof){case u:case d:$=!0}}if($)return $=c,W=W($),c=O===""?"."+Se($,0):O,ce(W)?(R="",c!=null&&(R=c.replace(le,"$&/")+"/"),ze(W,j,R,"",function(me){return me})):W!=null&&(Ke(W)&&(W=er(W,R+(!W.key||$&&$.key===W.key?"":(""+W.key).replace(le,"$&/")+"/")+c)),j.push(W)),1;if($=0,O=O===""?".":O+":",ce(c))for(var K=0;K<c.length;K++){G=c[K];var oe=O+Se(G,K);$+=ze(G,j,R,oe,W)}else if(oe=C(c),typeof oe=="function")for(c=oe.call(c),K=0;!(G=c.next()).done;)G=G.value,oe=O+Se(G,K++),$+=ze(G,j,R,oe,W);else if(G==="object")throw j=String(c),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return $}function se(c,j,R){if(c==null)return c;var O=[],W=0;return ze(c,O,"","",function(G){return j.call(R,G,W++)}),O}function Ce(c){if(c._status===-1){var j=c._result;j=j(),j.then(function(R){(c._status===0||c._status===-1)&&(c._status=1,c._result=R)},function(R){(c._status===0||c._status===-1)&&(c._status=2,c._result=R)}),c._status===-1&&(c._status=0,c._result=j)}if(c._status===1)return c._result.default;throw c._result}var ve={current:null},q={transition:null},te={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:q,ReactCurrentOwner:ye};function f(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:se,forEach:function(c,j,R){se(c,function(){j.apply(this,arguments)},R)},count:function(c){var j=0;return se(c,function(){j++}),j},toArray:function(c){return se(c,function(j){return j})||[]},only:function(c){if(!Ke(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},de.Component=S,de.Fragment=l,de.Profiler=h,de.PureComponent=ee,de.StrictMode=v,de.Suspense=k,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,de.act=f,de.cloneElement=function(c,j,R){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var O=E({},c.props),W=c.key,G=c.ref,$=c._owner;if(j!=null){if(j.ref!==void 0&&(G=j.ref,$=ye.current),j.key!==void 0&&(W=""+j.key),c.type&&c.type.defaultProps)var K=c.type.defaultProps;for(oe in j)ie.call(j,oe)&&!Te.hasOwnProperty(oe)&&(O[oe]=j[oe]===void 0&&K!==void 0?K[oe]:j[oe])}var oe=arguments.length-2;if(oe===1)O.children=R;else if(1<oe){K=Array(oe);for(var me=0;me<oe;me++)K[me]=arguments[me+2];O.children=K}return{$$typeof:u,type:c.type,key:W,ref:G,props:O,_owner:$}},de.createContext=function(c){return c={$$typeof:b,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:x,_context:c},c.Consumer=c},de.createElement=be,de.createFactory=function(c){var j=be.bind(null,c);return j.type=c,j},de.createRef=function(){return{current:null}},de.forwardRef=function(c){return{$$typeof:z,render:c}},de.isValidElement=Ke,de.lazy=function(c){return{$$typeof:P,_payload:{_status:-1,_result:c},_init:Ce}},de.memo=function(c,j){return{$$typeof:T,type:c,compare:j===void 0?null:j}},de.startTransition=function(c){var j=q.transition;q.transition={};try{c()}finally{q.transition=j}},de.unstable_act=f,de.useCallback=function(c,j){return ve.current.useCallback(c,j)},de.useContext=function(c){return ve.current.useContext(c)},de.useDebugValue=function(){},de.useDeferredValue=function(c){return ve.current.useDeferredValue(c)},de.useEffect=function(c,j){return ve.current.useEffect(c,j)},de.useId=function(){return ve.current.useId()},de.useImperativeHandle=function(c,j,R){return ve.current.useImperativeHandle(c,j,R)},de.useInsertionEffect=function(c,j){return ve.current.useInsertionEffect(c,j)},de.useLayoutEffect=function(c,j){return ve.current.useLayoutEffect(c,j)},de.useMemo=function(c,j){return ve.current.useMemo(c,j)},de.useReducer=function(c,j,R){return ve.current.useReducer(c,j,R)},de.useRef=function(c){return ve.current.useRef(c)},de.useState=function(c){return ve.current.useState(c)},de.useSyncExternalStore=function(c,j,R){return ve.current.useSyncExternalStore(c,j,R)},de.useTransition=function(){return ve.current.useTransition()},de.version="18.3.1",de}var ld;function xn(){return ld||(ld=1,ln.exports=qm()),ln.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function $m(){if(cd)return Kt;cd=1;var u=xn(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,h=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function b(z,k,T){var P,M={},C=null,A=null;T!==void 0&&(C=""+T),k.key!==void 0&&(C=""+k.key),k.ref!==void 0&&(A=k.ref);for(P in k)v.call(k,P)&&!x.hasOwnProperty(P)&&(M[P]=k[P]);if(z&&z.defaultProps)for(P in k=z.defaultProps,k)M[P]===void 0&&(M[P]=k[P]);return{$$typeof:d,type:z,key:C,ref:A,props:M,_owner:h.current}}return Kt.Fragment=l,Kt.jsx=b,Kt.jsxs=b,Kt}var dd;function Wm(){return dd||(dd=1,nn.exports=$m()),nn.exports}var a=Wm(),L=xn();const Hm=jd(L);var ds={},cn={exports:{}},ur={},dn={exports:{}},un={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function Vm(){return ud||(ud=1,(function(u){function d(q,te){var f=q.length;q.push(te);e:for(;0<f;){var c=f-1>>>1,j=q[c];if(0<h(j,te))q[c]=te,q[f]=j,f=c;else break e}}function l(q){return q.length===0?null:q[0]}function v(q){if(q.length===0)return null;var te=q[0],f=q.pop();if(f!==te){q[0]=f;e:for(var c=0,j=q.length,R=j>>>1;c<R;){var O=2*(c+1)-1,W=q[O],G=O+1,$=q[G];if(0>h(W,f))G<j&&0>h($,W)?(q[c]=$,q[G]=f,c=G):(q[c]=W,q[O]=f,c=O);else if(G<j&&0>h($,f))q[c]=$,q[G]=f,c=G;else break e}}return te}function h(q,te){var f=q.sortIndex-te.sortIndex;return f!==0?f:q.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;u.unstable_now=function(){return x.now()}}else{var b=Date,z=b.now();u.unstable_now=function(){return b.now()-z}}var k=[],T=[],P=1,M=null,C=3,A=!1,E=!1,F=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(q){for(var te=l(T);te!==null;){if(te.callback===null)v(T);else if(te.startTime<=q)v(T),te.sortIndex=te.expirationTime,d(k,te);else break;te=l(T)}}function ce(q){if(F=!1,H(q),!E)if(l(k)!==null)E=!0,Ce(ie);else{var te=l(T);te!==null&&ve(ce,te.startTime-q)}}function ie(q,te){E=!1,F&&(F=!1,U(be),be=-1),A=!0;var f=C;try{for(H(te),M=l(k);M!==null&&(!(M.expirationTime>te)||q&&!or());){var c=M.callback;if(typeof c=="function"){M.callback=null,C=M.priorityLevel;var j=c(M.expirationTime<=te);te=u.unstable_now(),typeof j=="function"?M.callback=j:M===l(k)&&v(k),H(te)}else v(k);M=l(k)}if(M!==null)var R=!0;else{var O=l(T);O!==null&&ve(ce,O.startTime-te),R=!1}return R}finally{M=null,C=f,A=!1}}var ye=!1,Te=null,be=-1,er=5,Ke=-1;function or(){return!(u.unstable_now()-Ke<er)}function le(){if(Te!==null){var q=u.unstable_now();Ke=q;var te=!0;try{te=Te(!0,q)}finally{te?Se():(ye=!1,Te=null)}}else ye=!1}var Se;if(typeof ee=="function")Se=function(){ee(le)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,se=ze.port2;ze.port1.onmessage=le,Se=function(){se.postMessage(null)}}else Se=function(){S(le,0)};function Ce(q){Te=q,ye||(ye=!0,Se())}function ve(q,te){be=S(function(){q(u.unstable_now())},te)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(q){q.callback=null},u.unstable_continueExecution=function(){E||A||(E=!0,Ce(ie))},u.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):er=0<q?Math.floor(1e3/q):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_getFirstCallbackNode=function(){return l(k)},u.unstable_next=function(q){switch(C){case 1:case 2:case 3:var te=3;break;default:te=C}var f=C;C=te;try{return q()}finally{C=f}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(q,te){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var f=C;C=q;try{return te()}finally{C=f}},u.unstable_scheduleCallback=function(q,te,f){var c=u.unstable_now();switch(typeof f=="object"&&f!==null?(f=f.delay,f=typeof f=="number"&&0<f?c+f:c):f=c,q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=f+j,q={id:P++,callback:te,priorityLevel:q,startTime:f,expirationTime:j,sortIndex:-1},f>c?(q.sortIndex=f,d(T,q),l(k)===null&&q===l(T)&&(F?(U(be),be=-1):F=!0,ve(ce,f-c))):(q.sortIndex=j,d(k,q),E||A||(E=!0,Ce(ie))),q},u.unstable_shouldYield=or,u.unstable_wrapCallback=function(q){var te=C;return function(){var f=C;C=te;try{return q.apply(this,arguments)}finally{C=f}}}})(un)),un}var md;function Gm(){return md||(md=1,dn.exports=Vm()),dn.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Um(){if(pd)return ur;pd=1;var u=xn(),d=Gm();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,h={};function x(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(h[e]=r,e=0;e<r.length;e++)v.add(r[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},M={};function C(e){return k.call(M,e)?!0:k.call(P,e)?!1:T.test(e)?M[e]=!0:(P[e]=!0,!1)}function A(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,r,t,o){if(r===null||typeof r>"u"||A(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function F(e,r,t,o,s,i,n){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=n}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];S[r]=new F(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(U,ee);S[r]=new F(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(U,ee);S[r]=new F(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(U,ee);S[r]=new F(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,r,t,o){var s=S.hasOwnProperty(r)?S[r]:null;(s!==null?s.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,t,s,o)&&(t=null),o||s===null?C(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(r=s.attributeName,o=s.attributeNamespace,t===null?e.removeAttribute(r):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var ce=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),ye=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),er=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),or=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),q=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var f=Object.assign,c;function j(e){if(c===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);c=r&&r[1]||""}return`
`+c+e}var R=!1;function O(e,r){if(!e||R)return"";R=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var o=N}Reflect.construct(e,[],r)}else{try{r.call()}catch(N){o=N}e.call(r.prototype)}else{try{throw Error()}catch(N){o=N}e()}}catch(N){if(N&&o&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),i=o.stack.split(`
`),n=s.length-1,m=i.length-1;1<=n&&0<=m&&s[n]!==i[m];)m--;for(;1<=n&&0<=m;n--,m--)if(s[n]!==i[m]){if(n!==1||m!==1)do if(n--,m--,0>m||s[n]!==i[m]){var p=`
`+s[n].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=n&&0<=m);break}}}finally{R=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?j(e):""}function W(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case ye:return"Portal";case er:return"Profiler";case be:return"StrictMode";case Se:return"Suspense";case ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case or:return(e.displayName||"Context")+".Consumer";case Ke:return(e._context.displayName||"Context")+".Provider";case le:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return r=e.displayName||null,r!==null?r:G(e.type)||"Memo";case Ce:r=e._payload,e=e._init;try{return G(e(r))}catch{}}return null}function $(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(r);case 8:return r===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function me(e){var r=oe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,i=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(n){o=""+n,i.call(this,n)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(n){o=""+n},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function he(e){e._valueTracker||(e._valueTracker=me(e))}function we(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function Ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ue(e,r){var t=r.checked;return f({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function We(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=K(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function sr(e,r){r=r.checked,r!=null&&H(e,"checked",r,!1)}function rr(e,r){sr(e,r);var t=K(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Nr(e,r.type,t):r.hasOwnProperty("defaultValue")&&Nr(e,r.type,K(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function gr(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Nr(e,r,t){(r!=="number"||Ae(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Qe=Array.isArray;function Qr(e,r,t,o){if(e=e.options,r){r={};for(var s=0;s<t.length;s++)r["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=r.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&o&&(e[t].defaultSelected=!0)}else{for(t=""+K(t),r=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function nt(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return f({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zt(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(Qe(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:K(t)}}function lt(e,r){var t=K(r.value),o=K(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function eo(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ct(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ct(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,ut=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,o,s){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Yr(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vs=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){vs.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Or[r]=Or[e]})});function ro(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Or.hasOwnProperty(e)&&Or[e]?(""+r).trim():r+"px"}function kn(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,s=ro(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,s):e[t]=s}}var Gd=f({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,r){if(r){if(Gd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function ys(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,_a=null,La=null;function Cn(e){if(e=At(e)){if(typeof js!="function")throw Error(l(280));var r=e.stateNode;r&&(r=No(r),js(e.stateNode,e.type,r))}}function Nn(e){_a?La?La.push(e):La=[e]:_a=e}function Fn(){if(_a){var e=_a,r=La;if(La=_a=null,Cn(e),r)for(e=0;e<r.length;e++)Cn(r[e])}}function Sn(e,r){return e(r)}function zn(){}var ks=!1;function Pn(e,r,t){if(ks)return e(r,t);ks=!0;try{return Sn(e,r,t)}finally{ks=!1,(_a!==null||La!==null)&&(zn(),Fn())}}function mt(e,r){var t=e.stateNode;if(t===null)return null;var o=No(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var Cs=!1;if(z)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{Cs=!1}function Ud(e,r,t,o,s,i,n,m,p){var N=Array.prototype.slice.call(arguments,3);try{r.apply(t,N)}catch(_){this.onError(_)}}var ft=!1,ao=null,to=!1,Ns=null,Kd={onError:function(e){ft=!0,ao=e}};function Qd(e,r,t,o,s,i,n,m,p){ft=!1,ao=null,Ud.apply(Kd,arguments)}function Yd(e,r,t,o,s,i,n,m,p){if(Qd.apply(this,arguments),ft){if(ft){var N=ao;ft=!1,ao=null}else throw Error(l(198));to||(to=!0,Ns=N)}}function va(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function En(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Mn(e){if(va(e)!==e)throw Error(l(188))}function Xd(e){var r=e.alternate;if(!r){if(r=va(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var s=t.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){t=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===t)return Mn(s),e;if(i===o)return Mn(s),r;i=i.sibling}throw Error(l(188))}if(t.return!==o.return)t=s,o=i;else{for(var n=!1,m=s.child;m;){if(m===t){n=!0,t=s,o=i;break}if(m===o){n=!0,o=s,t=i;break}m=m.sibling}if(!n){for(m=i.child;m;){if(m===t){n=!0,t=i,o=s;break}if(m===o){n=!0,o=i,t=s;break}m=m.sibling}if(!n)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function Tn(e){return e=Xd(e),e!==null?An(e):null}function An(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=An(e);if(r!==null)return r;e=e.sibling}return null}var Dn=d.unstable_scheduleCallback,_n=d.unstable_cancelCallback,Jd=d.unstable_shouldYield,Zd=d.unstable_requestPaint,_e=d.unstable_now,eu=d.unstable_getCurrentPriorityLevel,Fs=d.unstable_ImmediatePriority,Ln=d.unstable_UserBlockingPriority,oo=d.unstable_NormalPriority,ru=d.unstable_LowPriority,Bn=d.unstable_IdlePriority,so=null,Ar=null;function au(e){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Fr=Math.clz32?Math.clz32:su,tu=Math.log,ou=Math.LN2;function su(e){return e>>>=0,e===0?32:31-(tu(e)/ou|0)|0}var io=64,no=4194304;function ht(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,s=e.suspendedLanes,i=e.pingedLanes,n=t&268435455;if(n!==0){var m=n&~s;m!==0?o=ht(m):(i&=n,i!==0&&(o=ht(i)))}else n=t&~s,n!==0?o=ht(n):i!==0&&(o=ht(i));if(o===0)return 0;if(r!==0&&r!==o&&(r&s)===0&&(s=o&-o,i=r&-r,s>=i||s===16&&(i&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-Fr(r),s=1<<t,o|=e[t],r&=~s;return o}function iu(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-Fr(i),m=1<<n,p=s[n];p===-1?((m&t)===0||(m&o)!==0)&&(s[n]=iu(m,r)):p<=r&&(e.expiredLanes|=m),i&=~m}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function In(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function zs(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function gt(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Fr(r),e[r]=t}function lu(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Fr(t),i=1<<s;r[s]=0,o[s]=-1,e[s]=-1,t&=~i}}function Ps(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-Fr(t),s=1<<o;s&r|e[o]&r&&(e[o]|=r),t&=~s}}var ge=0;function Rn(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var On,Es,qn,$n,Wn,Ms=!1,co=[],Xr=null,Jr=null,Zr=null,vt=new Map,xt=new Map,ea=[],cu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hn(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":vt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xt.delete(r.pointerId)}}function yt(e,r,t,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},r!==null&&(r=At(r),r!==null&&Es(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function du(e,r,t,o,s){switch(r){case"focusin":return Xr=yt(Xr,e,r,t,o,s),!0;case"dragenter":return Jr=yt(Jr,e,r,t,o,s),!0;case"mouseover":return Zr=yt(Zr,e,r,t,o,s),!0;case"pointerover":var i=s.pointerId;return vt.set(i,yt(vt.get(i)||null,e,r,t,o,s)),!0;case"gotpointercapture":return i=s.pointerId,xt.set(i,yt(xt.get(i)||null,e,r,t,o,s)),!0}return!1}function Vn(e){var r=xa(e.target);if(r!==null){var t=va(r);if(t!==null){if(r=t.tag,r===13){if(r=En(t),r!==null){e.blockedOn=r,Wn(e.priority,function(){qn(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=As(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);bs=o,t.target.dispatchEvent(o),bs=null}else return r=At(t),r!==null&&Es(r),e.blockedOn=t,!1;r.shift()}return!0}function Gn(e,r,t){uo(e)&&t.delete(r)}function uu(){Ms=!1,Xr!==null&&uo(Xr)&&(Xr=null),Jr!==null&&uo(Jr)&&(Jr=null),Zr!==null&&uo(Zr)&&(Zr=null),vt.forEach(Gn),xt.forEach(Gn)}function bt(e,r){e.blockedOn===r&&(e.blockedOn=null,Ms||(Ms=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,uu)))}function wt(e){function r(s){return bt(s,e)}if(0<co.length){bt(co[0],e);for(var t=1;t<co.length;t++){var o=co[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Xr!==null&&bt(Xr,e),Jr!==null&&bt(Jr,e),Zr!==null&&bt(Zr,e),vt.forEach(r),xt.forEach(r),t=0;t<ea.length;t++)o=ea[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<ea.length&&(t=ea[0],t.blockedOn===null);)Vn(t),t.blockedOn===null&&ea.shift()}var Ba=ce.ReactCurrentBatchConfig,mo=!0;function mu(e,r,t,o){var s=ge,i=Ba.transition;Ba.transition=null;try{ge=1,Ts(e,r,t,o)}finally{ge=s,Ba.transition=i}}function pu(e,r,t,o){var s=ge,i=Ba.transition;Ba.transition=null;try{ge=4,Ts(e,r,t,o)}finally{ge=s,Ba.transition=i}}function Ts(e,r,t,o){if(mo){var s=As(e,r,t,o);if(s===null)Ys(e,r,o,po,t),Hn(e,o);else if(du(s,e,r,t,o))o.stopPropagation();else if(Hn(e,o),r&4&&-1<cu.indexOf(e)){for(;s!==null;){var i=At(s);if(i!==null&&On(i),i=As(e,r,t,o),i===null&&Ys(e,r,o,po,t),i===s)break;s=i}s!==null&&o.stopPropagation()}else Ys(e,r,o,null,t)}}var po=null;function As(e,r,t,o){if(po=null,e=ws(o),e=xa(e),e!==null)if(r=va(e),r===null)e=null;else if(t=r.tag,t===13){if(e=En(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return po=e,null}function Un(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eu()){case Fs:return 1;case Ln:return 4;case oo:case ru:return 16;case Bn:return 536870912;default:return 16}default:return 16}}var ra=null,Ds=null,fo=null;function Kn(){if(fo)return fo;var e,r=Ds,t=r.length,o,s="value"in ra?ra.value:ra.textContent,i=s.length;for(e=0;e<t&&r[e]===s[e];e++);var n=t-e;for(o=1;o<=n&&r[t-o]===s[i-o];o++);return fo=s.slice(e,1<o?1-o:void 0)}function ho(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Qn(){return!1}function mr(e){function r(t,o,s,i,n){this._reactName=t,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:Qn,this.isPropagationStopped=Qn,this}return f(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),r}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=mr(Ia),jt=f({},Ia,{view:0,detail:0}),fu=mr(jt),Ls,Bs,kt,vo=f({},jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kt&&(kt&&e.type==="mousemove"?(Ls=e.screenX-kt.screenX,Bs=e.screenY-kt.screenY):Bs=Ls=0,kt=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:Bs}}),Yn=mr(vo),hu=f({},vo,{dataTransfer:0}),gu=mr(hu),vu=f({},jt,{relatedTarget:0}),Is=mr(vu),xu=f({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),yu=mr(xu),bu=f({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wu=mr(bu),ju=f({},Ia,{data:0}),Xn=mr(ju),ku={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Nu[e])?!!r[e]:!1}function Rs(){return Fu}var Su=f({},jt,{key:function(e){if(e.key){var r=ku[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zu=mr(Su),Pu=f({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jn=mr(Pu),Eu=f({},jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Mu=mr(Eu),Tu=f({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Au=mr(Tu),Du=f({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_u=mr(Du),Lu=[9,13,27,32],Os=z&&"CompositionEvent"in window,Ct=null;z&&"documentMode"in document&&(Ct=document.documentMode);var Bu=z&&"TextEvent"in window&&!Ct,Zn=z&&(!Os||Ct&&8<Ct&&11>=Ct),el=" ",rl=!1;function al(e,r){switch(e){case"keyup":return Lu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function Iu(e,r){switch(e){case"compositionend":return tl(r);case"keypress":return r.which!==32?null:(rl=!0,el);case"textInput":return e=r.data,e===el&&rl?null:e;default:return null}}function Ru(e,r){if(Ra)return e==="compositionend"||!Os&&al(e,r)?(e=Kn(),fo=Ds=ra=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Zn&&r.locale!=="ko"?null:r.data;default:return null}}var Ou={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ol(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Ou[e.type]:r==="textarea"}function sl(e,r,t,o){Nn(o),r=jo(r,"onChange"),0<r.length&&(t=new _s("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var Nt=null,Ft=null;function qu(e){kl(e,0)}function xo(e){var r=Ha(e);if(we(r))return e}function $u(e,r){if(e==="change")return r}var il=!1;if(z){var qs;if(z){var $s="oninput"in document;if(!$s){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),$s=typeof nl.oninput=="function"}qs=$s}else qs=!1;il=qs&&(!document.documentMode||9<document.documentMode)}function ll(){Nt&&(Nt.detachEvent("onpropertychange",cl),Ft=Nt=null)}function cl(e){if(e.propertyName==="value"&&xo(Ft)){var r=[];sl(r,Ft,e,ws(e)),Pn(qu,r)}}function Wu(e,r,t){e==="focusin"?(ll(),Nt=r,Ft=t,Nt.attachEvent("onpropertychange",cl)):e==="focusout"&&ll()}function Hu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Ft)}function Vu(e,r){if(e==="click")return xo(r)}function Gu(e,r){if(e==="input"||e==="change")return xo(r)}function Uu(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:Uu;function St(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var s=t[o];if(!k.call(r,s)||!Sr(e[s],r[s]))return!1}return!0}function dl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ul(e,r){var t=dl(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dl(t)}}function ml(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ml(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function pl(){for(var e=window,r=Ae();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Ae(e.document)}return r}function Ws(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ku(e){var r=pl(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&ml(t.ownerDocument.documentElement,t)){if(o!==null&&Ws(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!e.extend&&i>o&&(s=o,o=i,i=s),s=ul(t,i);var n=ul(t,o);s&&n&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),i>o?(e.addRange(r),e.extend(n.node,n.offset)):(r.setEnd(n.node,n.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qu=z&&"documentMode"in document&&11>=document.documentMode,Oa=null,Hs=null,zt=null,Vs=!1;function fl(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vs||Oa==null||Oa!==Ae(o)||(o=Oa,"selectionStart"in o&&Ws(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zt&&St(zt,o)||(zt=o,o=jo(Hs,"onSelect"),0<o.length&&(r=new _s("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Oa)))}function yo(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var qa={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Gs={},hl={};z&&(hl=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function bo(e){if(Gs[e])return Gs[e];if(!qa[e])return e;var r=qa[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in hl)return Gs[e]=r[t];return e}var gl=bo("animationend"),vl=bo("animationiteration"),xl=bo("animationstart"),yl=bo("transitionend"),bl=new Map,wl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function aa(e,r){bl.set(e,r),x(r,[e])}for(var Us=0;Us<wl.length;Us++){var Ks=wl[Us],Yu=Ks.toLowerCase(),Xu=Ks[0].toUpperCase()+Ks.slice(1);aa(Yu,"on"+Xu)}aa(gl,"onAnimationEnd"),aa(vl,"onAnimationIteration"),aa(xl,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(yl,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ju=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pt));function jl(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,Yd(o,r,void 0,e),e.currentTarget=null}function kl(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],s=o.event;o=o.listeners;e:{var i=void 0;if(r)for(var n=o.length-1;0<=n;n--){var m=o[n],p=m.instance,N=m.currentTarget;if(m=m.listener,p!==i&&s.isPropagationStopped())break e;jl(s,m,N),i=p}else for(n=0;n<o.length;n++){if(m=o[n],p=m.instance,N=m.currentTarget,m=m.listener,p!==i&&s.isPropagationStopped())break e;jl(s,m,N),i=p}}}if(to)throw e=Ns,to=!1,Ns=null,e}function je(e,r){var t=r[ai];t===void 0&&(t=r[ai]=new Set);var o=e+"__bubble";t.has(o)||(Cl(r,e,2,!1),t.add(o))}function Qs(e,r,t){var o=0;r&&(o|=4),Cl(t,e,o,r)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Et(e){if(!e[wo]){e[wo]=!0,v.forEach(function(t){t!=="selectionchange"&&(Ju.has(t)||Qs(t,!1,e),Qs(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[wo]||(r[wo]=!0,Qs("selectionchange",!1,r))}}function Cl(e,r,t,o){switch(Un(r)){case 1:var s=mu;break;case 4:s=pu;break;default:s=Ts}t=s.bind(null,r,t,e),s=void 0,!Cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(r,t,{capture:!0,passive:s}):e.addEventListener(r,t,!0):s!==void 0?e.addEventListener(r,t,{passive:s}):e.addEventListener(r,t,!1)}function Ys(e,r,t,o,s){var i=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var n=o.tag;if(n===3||n===4){var m=o.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(n===4)for(n=o.return;n!==null;){var p=n.tag;if((p===3||p===4)&&(p=n.stateNode.containerInfo,p===s||p.nodeType===8&&p.parentNode===s))return;n=n.return}for(;m!==null;){if(n=xa(m),n===null)return;if(p=n.tag,p===5||p===6){o=i=n;continue e}m=m.parentNode}}o=o.return}Pn(function(){var N=i,_=ws(t),B=[];e:{var D=bl.get(e);if(D!==void 0){var V=_s,Y=e;switch(e){case"keypress":if(ho(t)===0)break e;case"keydown":case"keyup":V=zu;break;case"focusin":Y="focus",V=Is;break;case"focusout":Y="blur",V=Is;break;case"beforeblur":case"afterblur":V=Is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Yn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Mu;break;case gl:case vl:case xl:V=yu;break;case yl:V=Au;break;case"scroll":V=fu;break;case"wheel":V=_u;break;case"copy":case"cut":case"paste":V=wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Jn}var X=(r&4)!==0,Le=!X&&e==="scroll",y=X?D!==null?D+"Capture":null:D;X=[];for(var g=N,w;g!==null;){w=g;var I=w.stateNode;if(w.tag===5&&I!==null&&(w=I,y!==null&&(I=mt(g,y),I!=null&&X.push(Mt(g,I,w)))),Le)break;g=g.return}0<X.length&&(D=new V(D,Y,null,t,_),B.push({event:D,listeners:X}))}}if((r&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",D&&t!==bs&&(Y=t.relatedTarget||t.fromElement)&&(xa(Y)||Y[qr]))break e;if((V||D)&&(D=_.window===_?_:(D=_.ownerDocument)?D.defaultView||D.parentWindow:window,V?(Y=t.relatedTarget||t.toElement,V=N,Y=Y?xa(Y):null,Y!==null&&(Le=va(Y),Y!==Le||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(V=null,Y=N),V!==Y)){if(X=Yn,I="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(X=Jn,I="onPointerLeave",y="onPointerEnter",g="pointer"),Le=V==null?D:Ha(V),w=Y==null?D:Ha(Y),D=new X(I,g+"leave",V,t,_),D.target=Le,D.relatedTarget=w,I=null,xa(_)===N&&(X=new X(y,g+"enter",Y,t,_),X.target=w,X.relatedTarget=Le,I=X),Le=I,V&&Y)r:{for(X=V,y=Y,g=0,w=X;w;w=$a(w))g++;for(w=0,I=y;I;I=$a(I))w++;for(;0<g-w;)X=$a(X),g--;for(;0<w-g;)y=$a(y),w--;for(;g--;){if(X===y||y!==null&&X===y.alternate)break r;X=$a(X),y=$a(y)}X=null}else X=null;V!==null&&Nl(B,D,V,X,!1),Y!==null&&Le!==null&&Nl(B,Le,Y,X,!0)}}e:{if(D=N?Ha(N):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var J=$u;else if(ol(D))if(il)J=Gu;else{J=Hu;var re=Wu}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(J=Vu);if(J&&(J=J(e,N))){sl(B,J,t,_);break e}re&&re(e,D,N),e==="focusout"&&(re=D._wrapperState)&&re.controlled&&D.type==="number"&&Nr(D,"number",D.value)}switch(re=N?Ha(N):window,e){case"focusin":(ol(re)||re.contentEditable==="true")&&(Oa=re,Hs=N,zt=null);break;case"focusout":zt=Hs=Oa=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,fl(B,t,_);break;case"selectionchange":if(Qu)break;case"keydown":case"keyup":fl(B,t,_)}var ae;if(Os)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Ra?al(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(Zn&&t.locale!=="ko"&&(Ra||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ra&&(ae=Kn()):(ra=_,Ds="value"in ra?ra.value:ra.textContent,Ra=!0)),re=jo(N,ne),0<re.length&&(ne=new Xn(ne,e,null,t,_),B.push({event:ne,listeners:re}),ae?ne.data=ae:(ae=tl(t),ae!==null&&(ne.data=ae)))),(ae=Bu?Iu(e,t):Ru(e,t))&&(N=jo(N,"onBeforeInput"),0<N.length&&(_=new Xn("onBeforeInput","beforeinput",null,t,_),B.push({event:_,listeners:N}),_.data=ae))}kl(B,r)})}function Mt(e,r,t){return{instance:e,listener:r,currentTarget:t}}function jo(e,r){for(var t=r+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=mt(e,t),i!=null&&o.unshift(Mt(e,i,s)),i=mt(e,r),i!=null&&o.push(Mt(e,i,s))),e=e.return}return o}function $a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nl(e,r,t,o,s){for(var i=r._reactName,n=[];t!==null&&t!==o;){var m=t,p=m.alternate,N=m.stateNode;if(p!==null&&p===o)break;m.tag===5&&N!==null&&(m=N,s?(p=mt(t,i),p!=null&&n.unshift(Mt(t,p,m))):s||(p=mt(t,i),p!=null&&n.push(Mt(t,p,m)))),t=t.return}n.length!==0&&e.push({event:r,listeners:n})}var Zu=/\r\n?/g,em=/\u0000|\uFFFD/g;function Fl(e){return(typeof e=="string"?e:""+e).replace(Zu,`
`).replace(em,"")}function ko(e,r,t){if(r=Fl(r),Fl(e)!==r&&t)throw Error(l(425))}function Co(){}var Xs=null,Js=null;function Zs(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(tm)}:ei;function tm(e){setTimeout(function(){throw e})}function ri(e,r){var t=r,o=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(o===0){e.removeChild(s),wt(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=s}while(t);wt(r)}function ta(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function zl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Wa=Math.random().toString(36).slice(2),Dr="__reactFiber$"+Wa,Tt="__reactProps$"+Wa,qr="__reactContainer$"+Wa,ai="__reactEvents$"+Wa,om="__reactListeners$"+Wa,sm="__reactHandles$"+Wa;function xa(e){var r=e[Dr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[qr]||t[Dr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=zl(e);e!==null;){if(t=e[Dr])return t;e=zl(e)}return r}e=t,t=e.parentNode}return null}function At(e){return e=e[Dr]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ha(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function No(e){return e[Tt]||null}var ti=[],Va=-1;function oa(e){return{current:e}}function ke(e){0>Va||(e.current=ti[Va],ti[Va]=null,Va--)}function xe(e,r){Va++,ti[Va]=e.current,e.current=r}var sa={},Ye=oa(sa),ir=oa(!1),ya=sa;function Ga(e,r){var t=e.type.contextTypes;if(!t)return sa;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in t)s[i]=r[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function nr(e){return e=e.childContextTypes,e!=null}function Fo(){ke(ir),ke(Ye)}function Pl(e,r,t){if(Ye.current!==sa)throw Error(l(168));xe(Ye,r),xe(ir,t)}function El(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var s in o)if(!(s in r))throw Error(l(108,$(e)||"Unknown",s));return f({},t,o)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sa,ya=Ye.current,xe(Ye,e),xe(ir,ir.current),!0}function Ml(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=El(e,r,ya),o.__reactInternalMemoizedMergedChildContext=e,ke(ir),ke(Ye),xe(Ye,e)):ke(ir),xe(ir,t)}var $r=null,zo=!1,oi=!1;function Tl(e){$r===null?$r=[e]:$r.push(e)}function im(e){zo=!0,Tl(e)}function ia(){if(!oi&&$r!==null){oi=!0;var e=0,r=ge;try{var t=$r;for(ge=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}$r=null,zo=!1}catch(s){throw $r!==null&&($r=$r.slice(e+1)),Dn(Fs,ia),s}finally{ge=r,oi=!1}}return null}var Ua=[],Ka=0,Po=null,Eo=0,vr=[],xr=0,ba=null,Wr=1,Hr="";function wa(e,r){Ua[Ka++]=Eo,Ua[Ka++]=Po,Po=e,Eo=r}function Al(e,r,t){vr[xr++]=Wr,vr[xr++]=Hr,vr[xr++]=ba,ba=e;var o=Wr;e=Hr;var s=32-Fr(o)-1;o&=~(1<<s),t+=1;var i=32-Fr(r)+s;if(30<i){var n=s-s%5;i=(o&(1<<n)-1).toString(32),o>>=n,s-=n,Wr=1<<32-Fr(r)+s|t<<s|o,Hr=i+e}else Wr=1<<i|t<<s|o,Hr=e}function si(e){e.return!==null&&(wa(e,1),Al(e,1,0))}function ii(e){for(;e===Po;)Po=Ua[--Ka],Ua[Ka]=null,Eo=Ua[--Ka],Ua[Ka]=null;for(;e===ba;)ba=vr[--xr],vr[xr]=null,Hr=vr[--xr],vr[xr]=null,Wr=vr[--xr],vr[xr]=null}var pr=null,fr=null,Ne=!1,zr=null;function Dl(e,r){var t=jr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function _l(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,pr=e,fr=ta(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,pr=e,fr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=ba!==null?{id:Wr,overflow:Hr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=jr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,pr=e,fr=null,!0):!1;default:return!1}}function ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(Ne){var r=fr;if(r){var t=r;if(!_l(e,r)){if(ni(e))throw Error(l(418));r=ta(t.nextSibling);var o=pr;r&&_l(e,r)?Dl(o,t):(e.flags=e.flags&-4097|2,Ne=!1,pr=e)}}else{if(ni(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ne=!1,pr=e}}}function Ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pr=e}function Mo(e){if(e!==pr)return!1;if(!Ne)return Ll(e),Ne=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Zs(e.type,e.memoizedProps)),r&&(r=fr)){if(ni(e))throw Bl(),Error(l(418));for(;r;)Dl(e,r),r=ta(r.nextSibling)}if(Ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){fr=ta(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}fr=null}}else fr=pr?ta(e.stateNode.nextSibling):null;return!0}function Bl(){for(var e=fr;e;)e=ta(e.nextSibling)}function Qa(){fr=pr=null,Ne=!1}function ci(e){zr===null?zr=[e]:zr.push(e)}var nm=ce.ReactCurrentBatchConfig;function Dt(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var s=o,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(n){var m=s.refs;n===null?delete m[i]:m[i]=n},r._stringRef=i,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function To(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Il(e){var r=e._init;return r(e._payload)}function Rl(e){function r(y,g){if(e){var w=y.deletions;w===null?(y.deletions=[g],y.flags|=16):w.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)r(y,g),g=g.sibling;return null}function o(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function s(y,g){return y=fa(y,g),y.index=0,y.sibling=null,y}function i(y,g,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<g?(y.flags|=2,g):w):(y.flags|=2,g)):(y.flags|=1048576,g)}function n(y){return e&&y.alternate===null&&(y.flags|=2),y}function m(y,g,w,I){return g===null||g.tag!==6?(g=en(w,y.mode,I),g.return=y,g):(g=s(g,w),g.return=y,g)}function p(y,g,w,I){var J=w.type;return J===Te?_(y,g,w.props.children,I,w.key):g!==null&&(g.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ce&&Il(J)===g.type)?(I=s(g,w.props),I.ref=Dt(y,g,w),I.return=y,I):(I=as(w.type,w.key,w.props,null,y.mode,I),I.ref=Dt(y,g,w),I.return=y,I)}function N(y,g,w,I){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=rn(w,y.mode,I),g.return=y,g):(g=s(g,w.children||[]),g.return=y,g)}function _(y,g,w,I,J){return g===null||g.tag!==7?(g=Pa(w,y.mode,I,J),g.return=y,g):(g=s(g,w),g.return=y,g)}function B(y,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=en(""+g,y.mode,w),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ie:return w=as(g.type,g.key,g.props,null,y.mode,w),w.ref=Dt(y,null,g),w.return=y,w;case ye:return g=rn(g,y.mode,w),g.return=y,g;case Ce:var I=g._init;return B(y,I(g._payload),w)}if(Qe(g)||te(g))return g=Pa(g,y.mode,w,null),g.return=y,g;To(y,g)}return null}function D(y,g,w,I){var J=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return J!==null?null:m(y,g,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ie:return w.key===J?p(y,g,w,I):null;case ye:return w.key===J?N(y,g,w,I):null;case Ce:return J=w._init,D(y,g,J(w._payload),I)}if(Qe(w)||te(w))return J!==null?null:_(y,g,w,I,null);To(y,w)}return null}function V(y,g,w,I,J){if(typeof I=="string"&&I!==""||typeof I=="number")return y=y.get(w)||null,m(g,y,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ie:return y=y.get(I.key===null?w:I.key)||null,p(g,y,I,J);case ye:return y=y.get(I.key===null?w:I.key)||null,N(g,y,I,J);case Ce:var re=I._init;return V(y,g,w,re(I._payload),J)}if(Qe(I)||te(I))return y=y.get(w)||null,_(g,y,I,J,null);To(g,I)}return null}function Y(y,g,w,I){for(var J=null,re=null,ae=g,ne=g=0,$e=null;ae!==null&&ne<w.length;ne++){ae.index>ne?($e=ae,ae=null):$e=ae.sibling;var fe=D(y,ae,w[ne],I);if(fe===null){ae===null&&(ae=$e);break}e&&ae&&fe.alternate===null&&r(y,ae),g=i(fe,g,ne),re===null?J=fe:re.sibling=fe,re=fe,ae=$e}if(ne===w.length)return t(y,ae),Ne&&wa(y,ne),J;if(ae===null){for(;ne<w.length;ne++)ae=B(y,w[ne],I),ae!==null&&(g=i(ae,g,ne),re===null?J=ae:re.sibling=ae,re=ae);return Ne&&wa(y,ne),J}for(ae=o(y,ae);ne<w.length;ne++)$e=V(ae,y,ne,w[ne],I),$e!==null&&(e&&$e.alternate!==null&&ae.delete($e.key===null?ne:$e.key),g=i($e,g,ne),re===null?J=$e:re.sibling=$e,re=$e);return e&&ae.forEach(function(ha){return r(y,ha)}),Ne&&wa(y,ne),J}function X(y,g,w,I){var J=te(w);if(typeof J!="function")throw Error(l(150));if(w=J.call(w),w==null)throw Error(l(151));for(var re=J=null,ae=g,ne=g=0,$e=null,fe=w.next();ae!==null&&!fe.done;ne++,fe=w.next()){ae.index>ne?($e=ae,ae=null):$e=ae.sibling;var ha=D(y,ae,fe.value,I);if(ha===null){ae===null&&(ae=$e);break}e&&ae&&ha.alternate===null&&r(y,ae),g=i(ha,g,ne),re===null?J=ha:re.sibling=ha,re=ha,ae=$e}if(fe.done)return t(y,ae),Ne&&wa(y,ne),J;if(ae===null){for(;!fe.done;ne++,fe=w.next())fe=B(y,fe.value,I),fe!==null&&(g=i(fe,g,ne),re===null?J=fe:re.sibling=fe,re=fe);return Ne&&wa(y,ne),J}for(ae=o(y,ae);!fe.done;ne++,fe=w.next())fe=V(ae,y,ne,fe.value,I),fe!==null&&(e&&fe.alternate!==null&&ae.delete(fe.key===null?ne:fe.key),g=i(fe,g,ne),re===null?J=fe:re.sibling=fe,re=fe);return e&&ae.forEach(function(Om){return r(y,Om)}),Ne&&wa(y,ne),J}function Le(y,g,w,I){if(typeof w=="object"&&w!==null&&w.type===Te&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ie:e:{for(var J=w.key,re=g;re!==null;){if(re.key===J){if(J=w.type,J===Te){if(re.tag===7){t(y,re.sibling),g=s(re,w.props.children),g.return=y,y=g;break e}}else if(re.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ce&&Il(J)===re.type){t(y,re.sibling),g=s(re,w.props),g.ref=Dt(y,re,w),g.return=y,y=g;break e}t(y,re);break}else r(y,re);re=re.sibling}w.type===Te?(g=Pa(w.props.children,y.mode,I,w.key),g.return=y,y=g):(I=as(w.type,w.key,w.props,null,y.mode,I),I.ref=Dt(y,g,w),I.return=y,y=I)}return n(y);case ye:e:{for(re=w.key;g!==null;){if(g.key===re)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){t(y,g.sibling),g=s(g,w.children||[]),g.return=y,y=g;break e}else{t(y,g);break}else r(y,g);g=g.sibling}g=rn(w,y.mode,I),g.return=y,y=g}return n(y);case Ce:return re=w._init,Le(y,g,re(w._payload),I)}if(Qe(w))return Y(y,g,w,I);if(te(w))return X(y,g,w,I);To(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(t(y,g.sibling),g=s(g,w),g.return=y,y=g):(t(y,g),g=en(w,y.mode,I),g.return=y,y=g),n(y)):t(y,g)}return Le}var Ya=Rl(!0),Ol=Rl(!1),Ao=oa(null),Do=null,Xa=null,di=null;function ui(){di=Xa=Do=null}function mi(e){var r=Ao.current;ke(Ao),e._currentValue=r}function pi(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function Ja(e,r){Do=e,di=Xa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(lr=!0),e.firstContext=null)}function yr(e){var r=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:r,next:null},Xa===null){if(Do===null)throw Error(l(308));Xa=e,Do.dependencies={lanes:0,firstContext:e}}else Xa=Xa.next=e;return r}var ja=null;function fi(e){ja===null?ja=[e]:ja.push(e)}function ql(e,r,t,o){var s=r.interleaved;return s===null?(t.next=t,fi(r)):(t.next=s.next,s.next=t),r.interleaved=t,Vr(e,o)}function Vr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var na=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $l(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function la(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var s=o.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),o.pending=r,Vr(e,t)}return s=o.interleaved,s===null?(r.next=r,fi(o)):(r.next=s.next,s.next=r),o.interleaved=r,Vr(e,t)}function _o(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ps(e,t)}}function Wl(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var s=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var n={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?s=i=n:i=i.next=n,t=t.next}while(t!==null);i===null?s=i=r:i=i.next=r}else s=i=r;t={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Lo(e,r,t,o){var s=e.updateQueue;na=!1;var i=s.firstBaseUpdate,n=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var p=m,N=p.next;p.next=null,n===null?i=N:n.next=N,n=p;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==n&&(m===null?_.firstBaseUpdate=N:m.next=N,_.lastBaseUpdate=p))}if(i!==null){var B=s.baseState;n=0,_=N=p=null,m=i;do{var D=m.lane,V=m.eventTime;if((o&D)===D){_!==null&&(_=_.next={eventTime:V,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var Y=e,X=m;switch(D=r,V=t,X.tag){case 1:if(Y=X.payload,typeof Y=="function"){B=Y.call(V,B,D);break e}B=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=X.payload,D=typeof Y=="function"?Y.call(V,B,D):Y,D==null)break e;B=f({},B,D);break e;case 2:na=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,D=s.effects,D===null?s.effects=[m]:D.push(m))}else V={eventTime:V,lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(N=_=V,p=B):_=_.next=V,n|=D;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;D=m,m=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);if(_===null&&(p=B),s.baseState=p,s.firstBaseUpdate=N,s.lastBaseUpdate=_,r=s.shared.interleaved,r!==null){s=r;do n|=s.lane,s=s.next;while(s!==r)}else i===null&&(s.shared.lanes=0);Na|=n,e.lanes=n,e.memoizedState=B}}function Hl(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],s=o.callback;if(s!==null){if(o.callback=null,o=t,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var _t={},_r=oa(_t),Lt=oa(_t),Bt=oa(_t);function ka(e){if(e===_t)throw Error(l(174));return e}function gi(e,r){switch(xe(Bt,r),xe(Lt,e),xe(_r,_t),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=dt(r,e)}ke(_r),xe(_r,r)}function Za(){ke(_r),ke(Lt),ke(Bt)}function Vl(e){ka(Bt.current);var r=ka(_r.current),t=dt(r,e.type);r!==t&&(xe(Lt,e),xe(_r,t))}function vi(e){Lt.current===e&&(ke(_r),ke(Lt))}var Pe=oa(0);function Bo(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xi=[];function yi(){for(var e=0;e<xi.length;e++)xi[e]._workInProgressVersionPrimary=null;xi.length=0}var Io=ce.ReactCurrentDispatcher,bi=ce.ReactCurrentBatchConfig,Ca=0,Ee=null,Ie=null,Oe=null,Ro=!1,It=!1,Rt=0,lm=0;function Xe(){throw Error(l(321))}function wi(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Sr(e[t],r[t]))return!1;return!0}function ji(e,r,t,o,s,i){if(Ca=i,Ee=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Io.current=e===null||e.memoizedState===null?mm:pm,e=t(o,s),It){i=0;do{if(It=!1,Rt=0,25<=i)throw Error(l(301));i+=1,Oe=Ie=null,r.updateQueue=null,Io.current=fm,e=t(o,s)}while(It)}if(Io.current=$o,r=Ie!==null&&Ie.next!==null,Ca=0,Oe=Ie=Ee=null,Ro=!1,r)throw Error(l(300));return e}function ki(){var e=Rt!==0;return Rt=0,e}function Lr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function br(){if(Ie===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var r=Oe===null?Ee.memoizedState:Oe.next;if(r!==null)Oe=r,Ie=e;else{if(e===null)throw Error(l(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ot(e,r){return typeof r=="function"?r(e):r}function Ci(e){var r=br(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=Ie,s=o.baseQueue,i=t.pending;if(i!==null){if(s!==null){var n=s.next;s.next=i.next,i.next=n}o.baseQueue=s=i,t.pending=null}if(s!==null){i=s.next,o=o.baseState;var m=n=null,p=null,N=i;do{var _=N.lane;if((Ca&_)===_)p!==null&&(p=p.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),o=N.hasEagerState?N.eagerState:e(o,N.action);else{var B={lane:_,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};p===null?(m=p=B,n=o):p=p.next=B,Ee.lanes|=_,Na|=_}N=N.next}while(N!==null&&N!==i);p===null?n=o:p.next=m,Sr(o,r.memoizedState)||(lr=!0),r.memoizedState=o,r.baseState=n,r.baseQueue=p,t.lastRenderedState=o}if(e=t.interleaved,e!==null){s=e;do i=s.lane,Ee.lanes|=i,Na|=i,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Ni(e){var r=br(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,s=t.pending,i=r.memoizedState;if(s!==null){t.pending=null;var n=s=s.next;do i=e(i,n.action),n=n.next;while(n!==s);Sr(i,r.memoizedState)||(lr=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),t.lastRenderedState=i}return[i,o]}function Gl(){}function Ul(e,r){var t=Ee,o=br(),s=r(),i=!Sr(o.memoizedState,s);if(i&&(o.memoizedState=s,lr=!0),o=o.queue,Fi(Yl.bind(null,t,o,e),[e]),o.getSnapshot!==r||i||Oe!==null&&Oe.memoizedState.tag&1){if(t.flags|=2048,qt(9,Ql.bind(null,t,o,s,r),void 0,null),qe===null)throw Error(l(349));(Ca&30)!==0||Kl(t,r,s)}return s}function Kl(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Ql(e,r,t,o){r.value=t,r.getSnapshot=o,Xl(r)&&Jl(e)}function Yl(e,r,t){return t(function(){Xl(r)&&Jl(e)})}function Xl(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Sr(e,t)}catch{return!0}}function Jl(e){var r=Vr(e,1);r!==null&&Tr(r,e,1,-1)}function Zl(e){var r=Lr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ot,lastRenderedState:e},r.queue=e,e=e.dispatch=um.bind(null,Ee,e),[r.memoizedState,e]}function qt(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function ec(){return br().memoizedState}function Oo(e,r,t,o){var s=Lr();Ee.flags|=e,s.memoizedState=qt(1|r,t,void 0,o===void 0?null:o)}function qo(e,r,t,o){var s=br();o=o===void 0?null:o;var i=void 0;if(Ie!==null){var n=Ie.memoizedState;if(i=n.destroy,o!==null&&wi(o,n.deps)){s.memoizedState=qt(r,t,i,o);return}}Ee.flags|=e,s.memoizedState=qt(1|r,t,i,o)}function rc(e,r){return Oo(8390656,8,e,r)}function Fi(e,r){return qo(2048,8,e,r)}function ac(e,r){return qo(4,2,e,r)}function tc(e,r){return qo(4,4,e,r)}function oc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function sc(e,r,t){return t=t!=null?t.concat([e]):null,qo(4,4,oc.bind(null,r,e),t)}function Si(){}function ic(e,r){var t=br();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&wi(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function nc(e,r){var t=br();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&wi(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function lc(e,r,t){return(Ca&21)===0?(e.baseState&&(e.baseState=!1,lr=!0),e.memoizedState=t):(Sr(t,r)||(t=In(),Ee.lanes|=t,Na|=t,e.baseState=!0),r)}function cm(e,r){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var o=bi.transition;bi.transition={};try{e(!1),r()}finally{ge=t,bi.transition=o}}function cc(){return br().memoizedState}function dm(e,r,t){var o=ma(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},dc(e))uc(r,t);else if(t=ql(e,r,t,o),t!==null){var s=tr();Tr(t,e,o,s),mc(t,r,o)}}function um(e,r,t){var o=ma(e),s={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(dc(e))uc(r,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var n=r.lastRenderedState,m=i(n,t);if(s.hasEagerState=!0,s.eagerState=m,Sr(m,n)){var p=r.interleaved;p===null?(s.next=s,fi(r)):(s.next=p.next,p.next=s),r.interleaved=s;return}}catch{}finally{}t=ql(e,r,s,o),t!==null&&(s=tr(),Tr(t,e,o,s),mc(t,r,o))}}function dc(e){var r=e.alternate;return e===Ee||r!==null&&r===Ee}function uc(e,r){It=Ro=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function mc(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ps(e,t)}}var $o={readContext:yr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},mm={readContext:yr,useCallback:function(e,r){return Lr().memoizedState=[e,r===void 0?null:r],e},useContext:yr,useEffect:rc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Oo(4194308,4,oc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Oo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Oo(4,2,e,r)},useMemo:function(e,r){var t=Lr();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Lr();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=dm.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var r=Lr();return e={current:e},r.memoizedState=e},useState:Zl,useDebugValue:Si,useDeferredValue:function(e){return Lr().memoizedState=e},useTransition:function(){var e=Zl(!1),r=e[0];return e=cm.bind(null,e[1]),Lr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=Ee,s=Lr();if(Ne){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),qe===null)throw Error(l(349));(Ca&30)!==0||Kl(o,r,t)}s.memoizedState=t;var i={value:t,getSnapshot:r};return s.queue=i,rc(Yl.bind(null,o,i,e),[e]),o.flags|=2048,qt(9,Ql.bind(null,o,i,t,r),void 0,null),t},useId:function(){var e=Lr(),r=qe.identifierPrefix;if(Ne){var t=Hr,o=Wr;t=(o&~(1<<32-Fr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=Rt++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=lm++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},pm={readContext:yr,useCallback:ic,useContext:yr,useEffect:Fi,useImperativeHandle:sc,useInsertionEffect:ac,useLayoutEffect:tc,useMemo:nc,useReducer:Ci,useRef:ec,useState:function(){return Ci(Ot)},useDebugValue:Si,useDeferredValue:function(e){var r=br();return lc(r,Ie.memoizedState,e)},useTransition:function(){var e=Ci(Ot)[0],r=br().memoizedState;return[e,r]},useMutableSource:Gl,useSyncExternalStore:Ul,useId:cc,unstable_isNewReconciler:!1},fm={readContext:yr,useCallback:ic,useContext:yr,useEffect:Fi,useImperativeHandle:sc,useInsertionEffect:ac,useLayoutEffect:tc,useMemo:nc,useReducer:Ni,useRef:ec,useState:function(){return Ni(Ot)},useDebugValue:Si,useDeferredValue:function(e){var r=br();return Ie===null?r.memoizedState=e:lc(r,Ie.memoizedState,e)},useTransition:function(){var e=Ni(Ot)[0],r=br().memoizedState;return[e,r]},useMutableSource:Gl,useSyncExternalStore:Ul,useId:cc,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=f({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function zi(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:f({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Wo={isMounted:function(e){return(e=e._reactInternals)?va(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ma(e),i=Gr(o,s);i.payload=r,t!=null&&(i.callback=t),r=la(e,i,s),r!==null&&(Tr(r,e,s,o),_o(r,e,s))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ma(e),i=Gr(o,s);i.tag=1,i.payload=r,t!=null&&(i.callback=t),r=la(e,i,s),r!==null&&(Tr(r,e,s,o),_o(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),o=ma(e),s=Gr(t,o);s.tag=2,r!=null&&(s.callback=r),r=la(e,s,o),r!==null&&(Tr(r,e,o,t),_o(r,e,o))}};function pc(e,r,t,o,s,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,n):r.prototype&&r.prototype.isPureReactComponent?!St(t,o)||!St(s,i):!0}function fc(e,r,t){var o=!1,s=sa,i=r.contextType;return typeof i=="object"&&i!==null?i=yr(i):(s=nr(r)?ya:Ye.current,o=r.contextTypes,i=(o=o!=null)?Ga(e,s):sa),r=new r(t,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),r}function hc(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&Wo.enqueueReplaceState(r,r.state,null)}function Pi(e,r,t,o){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},hi(e);var i=r.contextType;typeof i=="object"&&i!==null?s.context=yr(i):(i=nr(r)?ya:Ye.current,s.context=Ga(e,i)),s.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(zi(e,r,i,t),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Wo.enqueueReplaceState(s,s.state,null),Lo(e,t,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function et(e,r){try{var t="",o=r;do t+=W(o),o=o.return;while(o);var s=t}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:s,digest:null}}function Ei(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Mi(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var hm=typeof WeakMap=="function"?WeakMap:Map;function gc(e,r,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){Yo||(Yo=!0,Gi=o),Mi(e,r)},t}function vc(e,r,t){t=Gr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=r.value;t.payload=function(){return o(s)},t.callback=function(){Mi(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Mi(e,r),typeof o!="function"&&(da===null?da=new Set([this]):da.add(this));var n=r.stack;this.componentDidCatch(r.value,{componentStack:n!==null?n:""})}),t}function xc(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new hm;var s=new Set;o.set(r,s)}else s=o.get(r),s===void 0&&(s=new Set,o.set(r,s));s.has(t)||(s.add(t),e=Pm.bind(null,e,r,t),r.then(e,e))}function yc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function bc(e,r,t,o,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Gr(-1,1),r.tag=2,la(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var gm=ce.ReactCurrentOwner,lr=!1;function ar(e,r,t,o){r.child=e===null?Ol(r,null,t,o):Ya(r,e.child,t,o)}function wc(e,r,t,o,s){t=t.render;var i=r.ref;return Ja(r,s),o=ji(e,r,t,o,i,s),t=ki(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ur(e,r,s)):(Ne&&t&&si(r),r.flags|=1,ar(e,r,o,s),r.child)}function jc(e,r,t,o,s){if(e===null){var i=t.type;return typeof i=="function"&&!Zi(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=i,kc(e,r,i,o,s)):(e=as(t.type,null,o,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,(e.lanes&s)===0){var n=i.memoizedProps;if(t=t.compare,t=t!==null?t:St,t(n,o)&&e.ref===r.ref)return Ur(e,r,s)}return r.flags|=1,e=fa(i,o),e.ref=r.ref,e.return=r,r.child=e}function kc(e,r,t,o,s){if(e!==null){var i=e.memoizedProps;if(St(i,o)&&e.ref===r.ref)if(lr=!1,r.pendingProps=o=i,(e.lanes&s)!==0)(e.flags&131072)!==0&&(lr=!0);else return r.lanes=e.lanes,Ur(e,r,s)}return Ti(e,r,t,o,s)}function Cc(e,r,t){var o=r.pendingProps,s=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(at,hr),hr|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,xe(at,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,xe(at,hr),hr|=o}else i!==null?(o=i.baseLanes|t,r.memoizedState=null):o=t,xe(at,hr),hr|=o;return ar(e,r,s,t),r.child}function Nc(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Ti(e,r,t,o,s){var i=nr(t)?ya:Ye.current;return i=Ga(r,i),Ja(r,s),t=ji(e,r,t,o,i,s),o=ki(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ur(e,r,s)):(Ne&&o&&si(r),r.flags|=1,ar(e,r,t,s),r.child)}function Fc(e,r,t,o,s){if(nr(t)){var i=!0;So(r)}else i=!1;if(Ja(r,s),r.stateNode===null)Vo(e,r),fc(r,t,o),Pi(r,t,o,s),o=!0;else if(e===null){var n=r.stateNode,m=r.memoizedProps;n.props=m;var p=n.context,N=t.contextType;typeof N=="object"&&N!==null?N=yr(N):(N=nr(t)?ya:Ye.current,N=Ga(r,N));var _=t.getDerivedStateFromProps,B=typeof _=="function"||typeof n.getSnapshotBeforeUpdate=="function";B||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(m!==o||p!==N)&&hc(r,n,o,N),na=!1;var D=r.memoizedState;n.state=D,Lo(r,o,n,s),p=r.memoizedState,m!==o||D!==p||ir.current||na?(typeof _=="function"&&(zi(r,t,_,o),p=r.memoizedState),(m=na||pc(r,t,m,o,D,p,N))?(B||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(r.flags|=4194308)):(typeof n.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=p),n.props=o,n.state=p,n.context=N,o=m):(typeof n.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{n=r.stateNode,$l(e,r),m=r.memoizedProps,N=r.type===r.elementType?m:Pr(r.type,m),n.props=N,B=r.pendingProps,D=n.context,p=t.contextType,typeof p=="object"&&p!==null?p=yr(p):(p=nr(t)?ya:Ye.current,p=Ga(r,p));var V=t.getDerivedStateFromProps;(_=typeof V=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(m!==B||D!==p)&&hc(r,n,o,p),na=!1,D=r.memoizedState,n.state=D,Lo(r,o,n,s);var Y=r.memoizedState;m!==B||D!==Y||ir.current||na?(typeof V=="function"&&(zi(r,t,V,o),Y=r.memoizedState),(N=na||pc(r,t,N,o,D,Y,p)||!1)?(_||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(o,Y,p),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(o,Y,p)),typeof n.componentDidUpdate=="function"&&(r.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof n.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(r.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=Y),n.props=o,n.state=Y,n.context=p,o=N):(typeof n.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(r.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(r.flags|=1024),o=!1)}return Ai(e,r,t,o,i,s)}function Ai(e,r,t,o,s,i){Nc(e,r);var n=(r.flags&128)!==0;if(!o&&!n)return s&&Ml(r,t,!1),Ur(e,r,i);o=r.stateNode,gm.current=r;var m=n&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&n?(r.child=Ya(r,e.child,null,i),r.child=Ya(r,null,m,i)):ar(e,r,m,i),r.memoizedState=o.state,s&&Ml(r,t,!0),r.child}function Sc(e){var r=e.stateNode;r.pendingContext?Pl(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Pl(e,r.context,!1),gi(e,r.containerInfo)}function zc(e,r,t,o,s){return Qa(),ci(s),r.flags|=256,ar(e,r,t,o),r.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function _i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,r,t){var o=r.pendingProps,s=Pe.current,i=!1,n=(r.flags&128)!==0,m;if((m=n)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),xe(Pe,s&1),e===null)return li(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(n=o.children,e=o.fallback,i?(o=r.mode,i=r.child,n={mode:"hidden",children:n},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=ts(n,o,0,null),e=Pa(e,o,t,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=_i(t),r.memoizedState=Di,e):Li(r,n));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return vm(e,r,n,o,m,s,t);if(i){i=o.fallback,n=r.mode,s=e.child,m=s.sibling;var p={mode:"hidden",children:o.children};return(n&1)===0&&r.child!==s?(o=r.child,o.childLanes=0,o.pendingProps=p,r.deletions=null):(o=fa(s,p),o.subtreeFlags=s.subtreeFlags&14680064),m!==null?i=fa(m,i):(i=Pa(i,n,t,null),i.flags|=2),i.return=r,o.return=r,o.sibling=i,r.child=o,o=i,i=r.child,n=e.child.memoizedState,n=n===null?_i(t):{baseLanes:n.baseLanes|t,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~t,r.memoizedState=Di,o}return i=e.child,e=i.sibling,o=fa(i,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function Li(e,r){return r=ts({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ho(e,r,t,o){return o!==null&&ci(o),Ya(r,e.child,null,t),e=Li(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function vm(e,r,t,o,s,i,n){if(t)return r.flags&256?(r.flags&=-257,o=Ei(Error(l(422))),Ho(e,r,n,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=o.fallback,s=r.mode,o=ts({mode:"visible",children:o.children},s,0,null),i=Pa(i,s,n,null),i.flags|=2,o.return=r,i.return=r,o.sibling=i,r.child=o,(r.mode&1)!==0&&Ya(r,e.child,null,n),r.child.memoizedState=_i(n),r.memoizedState=Di,i);if((r.mode&1)===0)return Ho(e,r,n,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;return o=m,i=Error(l(419)),o=Ei(i,o,void 0),Ho(e,r,n,o)}if(m=(n&e.childLanes)!==0,lr||m){if(o=qe,o!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|n))!==0?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vr(e,s),Tr(o,e,s,-1))}return Ji(),o=Ei(Error(l(421))),Ho(e,r,n,o)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=Em.bind(null,e),s._reactRetry=r,null):(e=i.treeContext,fr=ta(s.nextSibling),pr=r,Ne=!0,zr=null,e!==null&&(vr[xr++]=Wr,vr[xr++]=Hr,vr[xr++]=ba,Wr=e.id,Hr=e.overflow,ba=r),r=Li(r,o.children),r.flags|=4096,r)}function Ec(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),pi(e.return,r,t)}function Bi(e,r,t,o,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:s}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=s)}function Mc(e,r,t){var o=r.pendingProps,s=o.revealOrder,i=o.tail;if(ar(e,r,o.children,t),o=Pe.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,t,r);else if(e.tag===19)Ec(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(xe(Pe,o),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(t=r.child,s=null;t!==null;)e=t.alternate,e!==null&&Bo(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=r.child,r.child=null):(s=t.sibling,t.sibling=null),Bi(r,!1,s,t,i);break;case"backwards":for(t=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&Bo(e)===null){r.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Bi(r,!0,t,null,i);break;case"together":Bi(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Vo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ur(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Na|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=fa(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=fa(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function xm(e,r,t){switch(r.tag){case 3:Sc(r),Qa();break;case 5:Vl(r);break;case 1:nr(r.type)&&So(r);break;case 4:gi(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,s=r.memoizedProps.value;xe(Ao,o._currentValue),o._currentValue=s;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(xe(Pe,Pe.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Pc(e,r,t):(xe(Pe,Pe.current&1),e=Ur(e,r,t),e!==null?e.sibling:null);xe(Pe,Pe.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Mc(e,r,t);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Pe,Pe.current),o)break;return null;case 22:case 23:return r.lanes=0,Cc(e,r,t)}return Ur(e,r,t)}var Tc,Ii,Ac,Dc;Tc=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ii=function(){},Ac=function(e,r,t,o){var s=e.memoizedProps;if(s!==o){e=r.stateNode,ka(_r.current);var i=null;switch(t){case"input":s=ue(e,s),o=ue(e,o),i=[];break;case"select":s=f({},s,{value:void 0}),o=f({},o,{value:void 0}),i=[];break;case"textarea":s=nt(e,s),o=nt(e,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Co)}xs(t,o);var n;t=null;for(N in s)if(!o.hasOwnProperty(N)&&s.hasOwnProperty(N)&&s[N]!=null)if(N==="style"){var m=s[N];for(n in m)m.hasOwnProperty(n)&&(t||(t={}),t[n]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(h.hasOwnProperty(N)?i||(i=[]):(i=i||[]).push(N,null));for(N in o){var p=o[N];if(m=s!=null?s[N]:void 0,o.hasOwnProperty(N)&&p!==m&&(p!=null||m!=null))if(N==="style")if(m){for(n in m)!m.hasOwnProperty(n)||p&&p.hasOwnProperty(n)||(t||(t={}),t[n]="");for(n in p)p.hasOwnProperty(n)&&m[n]!==p[n]&&(t||(t={}),t[n]=p[n])}else t||(i||(i=[]),i.push(N,t)),t=p;else N==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,m=m?m.__html:void 0,p!=null&&m!==p&&(i=i||[]).push(N,p)):N==="children"?typeof p!="string"&&typeof p!="number"||(i=i||[]).push(N,""+p):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(h.hasOwnProperty(N)?(p!=null&&N==="onScroll"&&je("scroll",e),i||m===p||(i=[])):(i=i||[]).push(N,p))}t&&(i=i||[]).push("style",t);var N=i;(r.updateQueue=N)&&(r.flags|=4)}},Dc=function(e,r,t,o){t!==o&&(r.flags|=4)};function $t(e,r){if(!Ne)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function ym(e,r,t){var o=r.pendingProps;switch(ii(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return nr(r.type)&&Fo(),Je(r),null;case 3:return o=r.stateNode,Za(),ke(ir),ke(Ye),yi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Mo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zr!==null&&(Qi(zr),zr=null))),Ii(e,r),Je(r),null;case 5:vi(r);var s=ka(Bt.current);if(t=r.type,e!==null&&r.stateNode!=null)Ac(e,r,t,o,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Je(r),null}if(e=ka(_r.current),Mo(r)){o=r.stateNode,t=r.type;var i=r.memoizedProps;switch(o[Dr]=r,o[Tt]=i,e=(r.mode&1)!==0,t){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(s=0;s<Pt.length;s++)je(Pt[s],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":We(o,i),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},je("invalid",o);break;case"textarea":Zt(o,i),je("invalid",o)}xs(t,i),s=null;for(var n in i)if(i.hasOwnProperty(n)){var m=i[n];n==="children"?typeof m=="string"?o.textContent!==m&&(i.suppressHydrationWarning!==!0&&ko(o.textContent,m,e),s=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(i.suppressHydrationWarning!==!0&&ko(o.textContent,m,e),s=["children",""+m]):h.hasOwnProperty(n)&&m!=null&&n==="onScroll"&&je("scroll",o)}switch(t){case"input":he(o),gr(o,i,!0);break;case"textarea":he(o),eo(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Co)}o=s,r.updateQueue=o,o!==null&&(r.flags|=4)}else{n=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ct(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=n.createElement(t,{is:o.is}):(e=n.createElement(t),t==="select"&&(n=e,o.multiple?n.multiple=!0:o.size&&(n.size=o.size))):e=n.createElementNS(e,t),e[Dr]=r,e[Tt]=o,Tc(e,r,!1,!1),r.stateNode=e;e:{switch(n=ys(t,o),t){case"dialog":je("cancel",e),je("close",e),s=o;break;case"iframe":case"object":case"embed":je("load",e),s=o;break;case"video":case"audio":for(s=0;s<Pt.length;s++)je(Pt[s],e);s=o;break;case"source":je("error",e),s=o;break;case"img":case"image":case"link":je("error",e),je("load",e),s=o;break;case"details":je("toggle",e),s=o;break;case"input":We(e,o),s=ue(e,o),je("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=f({},o,{value:void 0}),je("invalid",e);break;case"textarea":Zt(e,o),s=nt(e,o),je("invalid",e);break;default:s=o}xs(t,s),m=s;for(i in m)if(m.hasOwnProperty(i)){var p=m[i];i==="style"?kn(e,p):i==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ut(e,p)):i==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&Yr(e,p):typeof p=="number"&&Yr(e,""+p):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(h.hasOwnProperty(i)?p!=null&&i==="onScroll"&&je("scroll",e):p!=null&&H(e,i,p,n))}switch(t){case"input":he(e),gr(e,o,!1);break;case"textarea":he(e),eo(e);break;case"option":o.value!=null&&e.setAttribute("value",""+K(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Qr(e,!!o.multiple,i,!1):o.defaultValue!=null&&Qr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Co)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Je(r),null;case 6:if(e&&r.stateNode!=null)Dc(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=ka(Bt.current),ka(_r.current),Mo(r)){if(o=r.stateNode,t=r.memoizedProps,o[Dr]=r,(i=o.nodeValue!==t)&&(e=pr,e!==null))switch(e.tag){case 3:ko(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(o.nodeValue,t,(e.mode&1)!==0)}i&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Dr]=r,r.stateNode=o}return Je(r),null;case 13:if(ke(Pe),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&fr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Bl(),Qa(),r.flags|=98560,i=!1;else if(i=Mo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Dr]=r}else Qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),i=!1}else zr!==null&&(Qi(zr),zr=null),i=!0;if(!i)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Re===0&&(Re=3):Ji())),r.updateQueue!==null&&(r.flags|=4),Je(r),null);case 4:return Za(),Ii(e,r),e===null&&Et(r.stateNode.containerInfo),Je(r),null;case 10:return mi(r.type._context),Je(r),null;case 17:return nr(r.type)&&Fo(),Je(r),null;case 19:if(ke(Pe),i=r.memoizedState,i===null)return Je(r),null;if(o=(r.flags&128)!==0,n=i.rendering,n===null)if(o)$t(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(n=Bo(e),n!==null){for(r.flags|=128,$t(i,!1),o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)i=t,e=o,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return xe(Pe,Pe.current&1|2),r.child}e=e.sibling}i.tail!==null&&_e()>tt&&(r.flags|=128,o=!0,$t(i,!1),r.lanes=4194304)}else{if(!o)if(e=Bo(n),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),$t(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!Ne)return Je(r),null}else 2*_e()-i.renderingStartTime>tt&&t!==1073741824&&(r.flags|=128,o=!0,$t(i,!1),r.lanes=4194304);i.isBackwards?(n.sibling=r.child,r.child=n):(t=i.last,t!==null?t.sibling=n:r.child=n,i.last=n)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=_e(),r.sibling=null,t=Pe.current,xe(Pe,o?t&1|2:t&1),r):(Je(r),null);case 22:case 23:return Xi(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function bm(e,r){switch(ii(r),r.tag){case 1:return nr(r.type)&&Fo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Za(),ke(ir),ke(Ye),yi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return vi(r),null;case 13:if(ke(Pe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Qa()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ke(Pe),null;case 4:return Za(),null;case 10:return mi(r.type._context),null;case 22:case 23:return Xi(),null;case 24:return null;default:return null}}var Go=!1,Ze=!1,wm=typeof WeakSet=="function"?WeakSet:Set,Q=null;function rt(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){De(e,r,o)}else t.current=null}function Ri(e,r,t){try{t()}catch(o){De(e,r,o)}}var _c=!1;function jm(e,r){if(Xs=mo,e=pl(),Ws(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var n=0,m=-1,p=-1,N=0,_=0,B=e,D=null;r:for(;;){for(var V;B!==t||s!==0&&B.nodeType!==3||(m=n+s),B!==i||o!==0&&B.nodeType!==3||(p=n+o),B.nodeType===3&&(n+=B.nodeValue.length),(V=B.firstChild)!==null;)D=B,B=V;for(;;){if(B===e)break r;if(D===t&&++N===s&&(m=n),D===i&&++_===o&&(p=n),(V=B.nextSibling)!==null)break;B=D,D=B.parentNode}B=V}t=m===-1||p===-1?null:{start:m,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Js={focusedElem:e,selectionRange:t},mo=!1,Q=r;Q!==null;)if(r=Q,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Q=e;else for(;Q!==null;){r=Q;try{var Y=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var X=Y.memoizedProps,Le=Y.memoizedState,y=r.stateNode,g=y.getSnapshotBeforeUpdate(r.elementType===r.type?X:Pr(r.type,X),Le);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=r.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(I){De(r,r.return,I)}if(e=r.sibling,e!==null){e.return=r.return,Q=e;break}Q=r.return}return Y=_c,_c=!1,Y}function Wt(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ri(r,t,i)}s=s.next}while(s!==o)}}function Uo(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function Oi(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Lc(e){var r=e.alternate;r!==null&&(e.alternate=null,Lc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Dr],delete r[Tt],delete r[ai],delete r[om],delete r[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Co));else if(o!==4&&(e=e.child,e!==null))for(qi(e,r,t),e=e.sibling;e!==null;)qi(e,r,t),e=e.sibling}function $i(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for($i(e,r,t),e=e.sibling;e!==null;)$i(e,r,t),e=e.sibling}var He=null,Er=!1;function ca(e,r,t){for(t=t.child;t!==null;)Rc(e,r,t),t=t.sibling}function Rc(e,r,t){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(so,t)}catch{}switch(t.tag){case 5:Ze||rt(t,r);case 6:var o=He,s=Er;He=null,ca(e,r,t),He=o,Er=s,He!==null&&(Er?(e=He,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(Er?(e=He,t=t.stateNode,e.nodeType===8?ri(e.parentNode,t):e.nodeType===1&&ri(e,t),wt(e)):ri(He,t.stateNode));break;case 4:o=He,s=Er,He=t.stateNode.containerInfo,Er=!0,ca(e,r,t),He=o,Er=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&Ri(t,r,n),s=s.next}while(s!==o)}ca(e,r,t);break;case 1:if(!Ze&&(rt(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(m){De(t,r,m)}ca(e,r,t);break;case 21:ca(e,r,t);break;case 22:t.mode&1?(Ze=(o=Ze)||t.memoizedState!==null,ca(e,r,t),Ze=o):ca(e,r,t);break;default:ca(e,r,t)}}function Oc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new wm),r.forEach(function(o){var s=Mm.bind(null,e,o);t.has(o)||(t.add(o),o.then(s,s))})}}function Mr(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];try{var i=e,n=r,m=n;e:for(;m!==null;){switch(m.tag){case 5:He=m.stateNode,Er=!1;break e;case 3:He=m.stateNode.containerInfo,Er=!0;break e;case 4:He=m.stateNode.containerInfo,Er=!0;break e}m=m.return}if(He===null)throw Error(l(160));Rc(i,n,s),He=null,Er=!1;var p=s.alternate;p!==null&&(p.return=null),s.return=null}catch(N){De(s,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qc(r,e),r=r.sibling}function qc(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mr(r,e),Br(e),o&4){try{Wt(3,e,e.return),Uo(3,e)}catch(X){De(e,e.return,X)}try{Wt(5,e,e.return)}catch(X){De(e,e.return,X)}}break;case 1:Mr(r,e),Br(e),o&512&&t!==null&&rt(t,t.return);break;case 5:if(Mr(r,e),Br(e),o&512&&t!==null&&rt(t,t.return),e.flags&32){var s=e.stateNode;try{Yr(s,"")}catch(X){De(e,e.return,X)}}if(o&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,n=t!==null?t.memoizedProps:i,m=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{m==="input"&&i.type==="radio"&&i.name!=null&&sr(s,i),ys(m,n);var N=ys(m,i);for(n=0;n<p.length;n+=2){var _=p[n],B=p[n+1];_==="style"?kn(s,B):_==="dangerouslySetInnerHTML"?ut(s,B):_==="children"?Yr(s,B):H(s,_,B,N)}switch(m){case"input":rr(s,i);break;case"textarea":lt(s,i);break;case"select":var D=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var V=i.value;V!=null?Qr(s,!!i.multiple,V,!1):D!==!!i.multiple&&(i.defaultValue!=null?Qr(s,!!i.multiple,i.defaultValue,!0):Qr(s,!!i.multiple,i.multiple?[]:"",!1))}s[Tt]=i}catch(X){De(e,e.return,X)}}break;case 6:if(Mr(r,e),Br(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(X){De(e,e.return,X)}}break;case 3:if(Mr(r,e),Br(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{wt(r.containerInfo)}catch(X){De(e,e.return,X)}break;case 4:Mr(r,e),Br(e);break;case 13:Mr(r,e),Br(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vi=_e())),o&4&&Oc(e);break;case 22:if(_=t!==null&&t.memoizedState!==null,e.mode&1?(Ze=(N=Ze)||_,Mr(r,e),Ze=N):Mr(r,e),Br(e),o&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!_&&(e.mode&1)!==0)for(Q=e,_=e.child;_!==null;){for(B=Q=_;Q!==null;){switch(D=Q,V=D.child,D.tag){case 0:case 11:case 14:case 15:Wt(4,D,D.return);break;case 1:rt(D,D.return);var Y=D.stateNode;if(typeof Y.componentWillUnmount=="function"){o=D,t=D.return;try{r=o,Y.props=r.memoizedProps,Y.state=r.memoizedState,Y.componentWillUnmount()}catch(X){De(o,t,X)}}break;case 5:rt(D,D.return);break;case 22:if(D.memoizedState!==null){Hc(B);continue}}V!==null?(V.return=D,Q=V):Hc(B)}_=_.sibling}e:for(_=null,B=e;;){if(B.tag===5){if(_===null){_=B;try{s=B.stateNode,N?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(m=B.stateNode,p=B.memoizedProps.style,n=p!=null&&p.hasOwnProperty("display")?p.display:null,m.style.display=ro("display",n))}catch(X){De(e,e.return,X)}}}else if(B.tag===6){if(_===null)try{B.stateNode.nodeValue=N?"":B.memoizedProps}catch(X){De(e,e.return,X)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;_===B&&(_=null),B=B.return}_===B&&(_=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Mr(r,e),Br(e),o&4&&Oc(e);break;case 21:break;default:Mr(r,e),Br(e)}}function Br(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Bc(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Yr(s,""),o.flags&=-33);var i=Ic(e);$i(e,i,s);break;case 3:case 4:var n=o.stateNode.containerInfo,m=Ic(e);qi(e,m,n);break;default:throw Error(l(161))}}catch(p){De(e,e.return,p)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function km(e,r,t){Q=e,$c(e)}function $c(e,r,t){for(var o=(e.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&o){var n=s.memoizedState!==null||Go;if(!n){var m=s.alternate,p=m!==null&&m.memoizedState!==null||Ze;m=Go;var N=Ze;if(Go=n,(Ze=p)&&!N)for(Q=s;Q!==null;)n=Q,p=n.child,n.tag===22&&n.memoizedState!==null?Vc(s):p!==null?(p.return=n,Q=p):Vc(s);for(;i!==null;)Q=i,$c(i),i=i.sibling;Q=s,Go=m,Ze=N}Wc(e)}else(s.subtreeFlags&8772)!==0&&i!==null?(i.return=s,Q=i):Wc(e)}}function Wc(e){for(;Q!==null;){var r=Q;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ze||Uo(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ze)if(t===null)o.componentDidMount();else{var s=r.elementType===r.type?t.memoizedProps:Pr(r.type,t.memoizedProps);o.componentDidUpdate(s,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Hl(r,i,o);break;case 3:var n=r.updateQueue;if(n!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Hl(r,n,t)}break;case 5:var m=r.stateNode;if(t===null&&r.flags&4){t=m;var p=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var _=N.memoizedState;if(_!==null){var B=_.dehydrated;B!==null&&wt(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||r.flags&512&&Oi(r)}catch(D){De(r,r.return,D)}}if(r===e){Q=null;break}if(t=r.sibling,t!==null){t.return=r.return,Q=t;break}Q=r.return}}function Hc(e){for(;Q!==null;){var r=Q;if(r===e){Q=null;break}var t=r.sibling;if(t!==null){t.return=r.return,Q=t;break}Q=r.return}}function Vc(e){for(;Q!==null;){var r=Q;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Uo(4,r)}catch(p){De(r,t,p)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var s=r.return;try{o.componentDidMount()}catch(p){De(r,s,p)}}var i=r.return;try{Oi(r)}catch(p){De(r,i,p)}break;case 5:var n=r.return;try{Oi(r)}catch(p){De(r,n,p)}}}catch(p){De(r,r.return,p)}if(r===e){Q=null;break}var m=r.sibling;if(m!==null){m.return=r.return,Q=m;break}Q=r.return}}var Cm=Math.ceil,Ko=ce.ReactCurrentDispatcher,Wi=ce.ReactCurrentOwner,wr=ce.ReactCurrentBatchConfig,pe=0,qe=null,Be=null,Ve=0,hr=0,at=oa(0),Re=0,Ht=null,Na=0,Qo=0,Hi=0,Vt=null,cr=null,Vi=0,tt=1/0,Kr=null,Yo=!1,Gi=null,da=null,Xo=!1,ua=null,Jo=0,Gt=0,Ui=null,Zo=-1,es=0;function tr(){return(pe&6)!==0?_e():Zo!==-1?Zo:Zo=_e()}function ma(e){return(e.mode&1)===0?1:(pe&2)!==0&&Ve!==0?Ve&-Ve:nm.transition!==null?(es===0&&(es=In()),es):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Un(e.type)),e)}function Tr(e,r,t,o){if(50<Gt)throw Gt=0,Ui=null,Error(l(185));gt(e,t,o),((pe&2)===0||e!==qe)&&(e===qe&&((pe&2)===0&&(Qo|=t),Re===4&&pa(e,Ve)),dr(e,o),t===1&&pe===0&&(r.mode&1)===0&&(tt=_e()+500,zo&&ia()))}function dr(e,r){var t=e.callbackNode;nu(e,r);var o=lo(e,e===qe?Ve:0);if(o===0)t!==null&&_n(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&_n(t),r===1)e.tag===0?im(Uc.bind(null,e)):Tl(Uc.bind(null,e)),am(function(){(pe&6)===0&&ia()}),t=null;else{switch(Rn(o)){case 1:t=Fs;break;case 4:t=Ln;break;case 16:t=oo;break;case 536870912:t=Bn;break;default:t=oo}t=rd(t,Gc.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Gc(e,r){if(Zo=-1,es=0,(pe&6)!==0)throw Error(l(327));var t=e.callbackNode;if(ot()&&e.callbackNode!==t)return null;var o=lo(e,e===qe?Ve:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=rs(e,o);else{r=o;var s=pe;pe|=2;var i=Qc();(qe!==e||Ve!==r)&&(Kr=null,tt=_e()+500,Sa(e,r));do try{Sm();break}catch(m){Kc(e,m)}while(!0);ui(),Ko.current=i,pe=s,Be!==null?r=0:(qe=null,Ve=0,r=Re)}if(r!==0){if(r===2&&(s=Ss(e),s!==0&&(o=s,r=Ki(e,s))),r===1)throw t=Ht,Sa(e,0),pa(e,o),dr(e,_e()),t;if(r===6)pa(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Nm(s)&&(r=rs(e,o),r===2&&(i=Ss(e),i!==0&&(o=i,r=Ki(e,i))),r===1))throw t=Ht,Sa(e,0),pa(e,o),dr(e,_e()),t;switch(e.finishedWork=s,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:za(e,cr,Kr);break;case 3:if(pa(e,o),(o&130023424)===o&&(r=Vi+500-_e(),10<r)){if(lo(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ei(za.bind(null,e,cr,Kr),r);break}za(e,cr,Kr);break;case 4:if(pa(e,o),(o&4194240)===o)break;for(r=e.eventTimes,s=-1;0<o;){var n=31-Fr(o);i=1<<n,n=r[n],n>s&&(s=n),o&=~i}if(o=s,o=_e()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Cm(o/1960))-o,10<o){e.timeoutHandle=ei(za.bind(null,e,cr,Kr),o);break}za(e,cr,Kr);break;case 5:za(e,cr,Kr);break;default:throw Error(l(329))}}}return dr(e,_e()),e.callbackNode===t?Gc.bind(null,e):null}function Ki(e,r){var t=Vt;return e.current.memoizedState.isDehydrated&&(Sa(e,r).flags|=256),e=rs(e,r),e!==2&&(r=cr,cr=t,r!==null&&Qi(r)),e}function Qi(e){cr===null?cr=e:cr.push.apply(cr,e)}function Nm(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var s=t[o],i=s.getSnapshot;s=s.value;try{if(!Sr(i(),s))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pa(e,r){for(r&=~Hi,r&=~Qo,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Fr(r),o=1<<t;e[t]=-1,r&=~o}}function Uc(e){if((pe&6)!==0)throw Error(l(327));ot();var r=lo(e,0);if((r&1)===0)return dr(e,_e()),null;var t=rs(e,r);if(e.tag!==0&&t===2){var o=Ss(e);o!==0&&(r=o,t=Ki(e,o))}if(t===1)throw t=Ht,Sa(e,0),pa(e,r),dr(e,_e()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,za(e,cr,Kr),dr(e,_e()),null}function Yi(e,r){var t=pe;pe|=1;try{return e(r)}finally{pe=t,pe===0&&(tt=_e()+500,zo&&ia())}}function Fa(e){ua!==null&&ua.tag===0&&(pe&6)===0&&ot();var r=pe;pe|=1;var t=wr.transition,o=ge;try{if(wr.transition=null,ge=1,e)return e()}finally{ge=o,wr.transition=t,pe=r,(pe&6)===0&&ia()}}function Xi(){hr=at.current,ke(at)}function Sa(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,rm(t)),Be!==null)for(t=Be.return;t!==null;){var o=t;switch(ii(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fo();break;case 3:Za(),ke(ir),ke(Ye),yi();break;case 5:vi(o);break;case 4:Za();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:mi(o.type._context);break;case 22:case 23:Xi()}t=t.return}if(qe=e,Be=e=fa(e.current,null),Ve=hr=r,Re=0,Ht=null,Hi=Qo=Na=0,cr=Vt=null,ja!==null){for(r=0;r<ja.length;r++)if(t=ja[r],o=t.interleaved,o!==null){t.interleaved=null;var s=o.next,i=t.pending;if(i!==null){var n=i.next;i.next=s,o.next=n}t.pending=o}ja=null}return e}function Kc(e,r){do{var t=Be;try{if(ui(),Io.current=$o,Ro){for(var o=Ee.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ro=!1}if(Ca=0,Oe=Ie=Ee=null,It=!1,Rt=0,Wi.current=null,t===null||t.return===null){Re=1,Ht=r,Be=null;break}e:{var i=e,n=t.return,m=t,p=r;if(r=Ve,m.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var N=p,_=m,B=_.tag;if((_.mode&1)===0&&(B===0||B===11||B===15)){var D=_.alternate;D?(_.updateQueue=D.updateQueue,_.memoizedState=D.memoizedState,_.lanes=D.lanes):(_.updateQueue=null,_.memoizedState=null)}var V=yc(n);if(V!==null){V.flags&=-257,bc(V,n,m,i,r),V.mode&1&&xc(i,N,r),r=V,p=N;var Y=r.updateQueue;if(Y===null){var X=new Set;X.add(p),r.updateQueue=X}else Y.add(p);break e}else{if((r&1)===0){xc(i,N,r),Ji();break e}p=Error(l(426))}}else if(Ne&&m.mode&1){var Le=yc(n);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),bc(Le,n,m,i,r),ci(et(p,m));break e}}i=p=et(p,m),Re!==4&&(Re=2),Vt===null?Vt=[i]:Vt.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var y=gc(i,p,r);Wl(i,y);break e;case 1:m=p;var g=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(da===null||!da.has(w)))){i.flags|=65536,r&=-r,i.lanes|=r;var I=vc(i,m,r);Wl(i,I);break e}}i=i.return}while(i!==null)}Xc(t)}catch(J){r=J,Be===t&&t!==null&&(Be=t=t.return);continue}break}while(!0)}function Qc(){var e=Ko.current;return Ko.current=$o,e===null?$o:e}function Ji(){(Re===0||Re===3||Re===2)&&(Re=4),qe===null||(Na&268435455)===0&&(Qo&268435455)===0||pa(qe,Ve)}function rs(e,r){var t=pe;pe|=2;var o=Qc();(qe!==e||Ve!==r)&&(Kr=null,Sa(e,r));do try{Fm();break}catch(s){Kc(e,s)}while(!0);if(ui(),pe=t,Ko.current=o,Be!==null)throw Error(l(261));return qe=null,Ve=0,Re}function Fm(){for(;Be!==null;)Yc(Be)}function Sm(){for(;Be!==null&&!Jd();)Yc(Be)}function Yc(e){var r=ed(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?Xc(e):Be=r,Wi.current=null}function Xc(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=ym(t,r,hr),t!==null){Be=t;return}}else{if(t=bm(t,r),t!==null){t.flags&=32767,Be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Be=null;return}}if(r=r.sibling,r!==null){Be=r;return}Be=r=e}while(r!==null);Re===0&&(Re=5)}function za(e,r,t){var o=ge,s=wr.transition;try{wr.transition=null,ge=1,zm(e,r,t,o)}finally{wr.transition=s,ge=o}return null}function zm(e,r,t,o){do ot();while(ua!==null);if((pe&6)!==0)throw Error(l(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(lu(e,i),e===qe&&(Be=qe=null,Ve=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Xo||(Xo=!0,rd(oo,function(){return ot(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=wr.transition,wr.transition=null;var n=ge;ge=1;var m=pe;pe|=4,Wi.current=null,jm(e,t),qc(t,e),Ku(Js),mo=!!Xs,Js=Xs=null,e.current=t,km(t),Zd(),pe=m,ge=n,wr.transition=i}else e.current=t;if(Xo&&(Xo=!1,ua=e,Jo=s),i=e.pendingLanes,i===0&&(da=null),au(t.stateNode),dr(e,_e()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)s=r[t],o(s.value,{componentStack:s.stack,digest:s.digest});if(Yo)throw Yo=!1,e=Gi,Gi=null,e;return(Jo&1)!==0&&e.tag!==0&&ot(),i=e.pendingLanes,(i&1)!==0?e===Ui?Gt++:(Gt=0,Ui=e):Gt=0,ia(),null}function ot(){if(ua!==null){var e=Rn(Jo),r=wr.transition,t=ge;try{if(wr.transition=null,ge=16>e?16:e,ua===null)var o=!1;else{if(e=ua,ua=null,Jo=0,(pe&6)!==0)throw Error(l(331));var s=pe;for(pe|=4,Q=e.current;Q!==null;){var i=Q,n=i.child;if((Q.flags&16)!==0){var m=i.deletions;if(m!==null){for(var p=0;p<m.length;p++){var N=m[p];for(Q=N;Q!==null;){var _=Q;switch(_.tag){case 0:case 11:case 15:Wt(8,_,i)}var B=_.child;if(B!==null)B.return=_,Q=B;else for(;Q!==null;){_=Q;var D=_.sibling,V=_.return;if(Lc(_),_===N){Q=null;break}if(D!==null){D.return=V,Q=D;break}Q=V}}}var Y=i.alternate;if(Y!==null){var X=Y.child;if(X!==null){Y.child=null;do{var Le=X.sibling;X.sibling=null,X=Le}while(X!==null)}}Q=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,Q=n;else e:for(;Q!==null;){if(i=Q,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Wt(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,Q=y;break e}Q=i.return}}var g=e.current;for(Q=g;Q!==null;){n=Q;var w=n.child;if((n.subtreeFlags&2064)!==0&&w!==null)w.return=n,Q=w;else e:for(n=g;Q!==null;){if(m=Q,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Uo(9,m)}}catch(J){De(m,m.return,J)}if(m===n){Q=null;break e}var I=m.sibling;if(I!==null){I.return=m.return,Q=I;break e}Q=m.return}}if(pe=s,ia(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(so,e)}catch{}o=!0}return o}finally{ge=t,wr.transition=r}}return!1}function Jc(e,r,t){r=et(t,r),r=gc(e,r,1),e=la(e,r,1),r=tr(),e!==null&&(gt(e,1,r),dr(e,r))}function De(e,r,t){if(e.tag===3)Jc(e,e,t);else for(;r!==null;){if(r.tag===3){Jc(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(da===null||!da.has(o))){e=et(t,e),e=vc(r,e,1),r=la(r,e,1),e=tr(),r!==null&&(gt(r,1,e),dr(r,e));break}}r=r.return}}function Pm(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,qe===e&&(Ve&t)===t&&(Re===4||Re===3&&(Ve&130023424)===Ve&&500>_e()-Vi?Sa(e,0):Hi|=t),dr(e,r)}function Zc(e,r){r===0&&((e.mode&1)===0?r=1:(r=no,no<<=1,(no&130023424)===0&&(no=4194304)));var t=tr();e=Vr(e,r),e!==null&&(gt(e,r,t),dr(e,t))}function Em(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Zc(e,t)}function Mm(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Zc(e,t)}var ed;ed=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||ir.current)lr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return lr=!1,xm(e,r,t);lr=(e.flags&131072)!==0}else lr=!1,Ne&&(r.flags&1048576)!==0&&Al(r,Eo,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Vo(e,r),e=r.pendingProps;var s=Ga(r,Ye.current);Ja(r,t),s=ji(null,r,o,e,s,t);var i=ki();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,nr(o)?(i=!0,So(r)):i=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hi(r),s.updater=Wo,r.stateNode=s,s._reactInternals=r,Pi(r,o,e,t),r=Ai(null,r,o,!0,i,t)):(r.tag=0,Ne&&i&&si(r),ar(null,r,s,t),r=r.child),r;case 16:o=r.elementType;e:{switch(Vo(e,r),e=r.pendingProps,s=o._init,o=s(o._payload),r.type=o,s=r.tag=Am(o),e=Pr(o,e),s){case 0:r=Ti(null,r,o,e,t);break e;case 1:r=Fc(null,r,o,e,t);break e;case 11:r=wc(null,r,o,e,t);break e;case 14:r=jc(null,r,o,Pr(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Pr(o,s),Ti(e,r,o,s,t);case 1:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Pr(o,s),Fc(e,r,o,s,t);case 3:e:{if(Sc(r),e===null)throw Error(l(387));o=r.pendingProps,i=r.memoizedState,s=i.element,$l(e,r),Lo(r,o,null,t);var n=r.memoizedState;if(o=n.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){s=et(Error(l(423)),r),r=zc(e,r,o,t,s);break e}else if(o!==s){s=et(Error(l(424)),r),r=zc(e,r,o,t,s);break e}else for(fr=ta(r.stateNode.containerInfo.firstChild),pr=r,Ne=!0,zr=null,t=Ol(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qa(),o===s){r=Ur(e,r,t);break e}ar(e,r,o,t)}r=r.child}return r;case 5:return Vl(r),e===null&&li(r),o=r.type,s=r.pendingProps,i=e!==null?e.memoizedProps:null,n=s.children,Zs(o,s)?n=null:i!==null&&Zs(o,i)&&(r.flags|=32),Nc(e,r),ar(e,r,n,t),r.child;case 6:return e===null&&li(r),null;case 13:return Pc(e,r,t);case 4:return gi(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Ya(r,null,o,t):ar(e,r,o,t),r.child;case 11:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Pr(o,s),wc(e,r,o,s,t);case 7:return ar(e,r,r.pendingProps,t),r.child;case 8:return ar(e,r,r.pendingProps.children,t),r.child;case 12:return ar(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,s=r.pendingProps,i=r.memoizedProps,n=s.value,xe(Ao,o._currentValue),o._currentValue=n,i!==null)if(Sr(i.value,n)){if(i.children===s.children&&!ir.current){r=Ur(e,r,t);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var m=i.dependencies;if(m!==null){n=i.child;for(var p=m.firstContext;p!==null;){if(p.context===o){if(i.tag===1){p=Gr(-1,t&-t),p.tag=2;var N=i.updateQueue;if(N!==null){N=N.shared;var _=N.pending;_===null?p.next=p:(p.next=_.next,_.next=p),N.pending=p}}i.lanes|=t,p=i.alternate,p!==null&&(p.lanes|=t),pi(i.return,t,r),m.lanes|=t;break}p=p.next}}else if(i.tag===10)n=i.type===r.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(l(341));n.lanes|=t,m=n.alternate,m!==null&&(m.lanes|=t),pi(n,t,r),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===r){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}ar(e,r,s.children,t),r=r.child}return r;case 9:return s=r.type,o=r.pendingProps.children,Ja(r,t),s=yr(s),o=o(s),r.flags|=1,ar(e,r,o,t),r.child;case 14:return o=r.type,s=Pr(o,r.pendingProps),s=Pr(o.type,s),jc(e,r,o,s,t);case 15:return kc(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Pr(o,s),Vo(e,r),r.tag=1,nr(o)?(e=!0,So(r)):e=!1,Ja(r,t),fc(r,o,s),Pi(r,o,s,t),Ai(null,r,o,!0,e,t);case 19:return Mc(e,r,t);case 22:return Cc(e,r,t)}throw Error(l(156,r.tag))};function rd(e,r){return Dn(e,r)}function Tm(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,r,t,o){return new Tm(e,r,t,o)}function Zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Am(e){if(typeof e=="function")return Zi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===le)return 11;if(e===se)return 14}return 2}function fa(e,r){var t=e.alternate;return t===null?(t=jr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function as(e,r,t,o,s,i){var n=2;if(o=e,typeof e=="function")Zi(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case Te:return Pa(t.children,s,i,r);case be:n=8,s|=8;break;case er:return e=jr(12,t,r,s|2),e.elementType=er,e.lanes=i,e;case Se:return e=jr(13,t,r,s),e.elementType=Se,e.lanes=i,e;case ze:return e=jr(19,t,r,s),e.elementType=ze,e.lanes=i,e;case ve:return ts(t,s,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:n=10;break e;case or:n=9;break e;case le:n=11;break e;case se:n=14;break e;case Ce:n=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=jr(n,t,r,s),r.elementType=e,r.type=o,r.lanes=i,r}function Pa(e,r,t,o){return e=jr(7,e,o,r),e.lanes=t,e}function ts(e,r,t,o){return e=jr(22,e,o,r),e.elementType=ve,e.lanes=t,e.stateNode={isHidden:!1},e}function en(e,r,t){return e=jr(6,e,null,r),e.lanes=t,e}function rn(e,r,t){return r=jr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Dm(e,r,t,o,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function an(e,r,t,o,s,i,n,m,p){return e=new Dm(e,r,t,m,p),r===1?(r=1,i===!0&&(r|=8)):r=0,i=jr(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(i),e}function _m(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function ad(e){if(!e)return sa;e=e._reactInternals;e:{if(va(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(nr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(nr(t))return El(e,t,r)}return r}function td(e,r,t,o,s,i,n,m,p){return e=an(t,o,!0,e,s,i,n,m,p),e.context=ad(null),t=e.current,o=tr(),s=ma(t),i=Gr(o,s),i.callback=r??null,la(t,i,s),e.current.lanes=s,gt(e,s,o),dr(e,o),e}function os(e,r,t,o){var s=r.current,i=tr(),n=ma(s);return t=ad(t),r.context===null?r.context=t:r.pendingContext=t,r=Gr(i,n),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=la(s,r,n),e!==null&&(Tr(e,s,n,i),_o(e,s,n)),n}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function tn(e,r){od(e,r),(e=e.alternate)&&od(e,r)}function Lm(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function on(e){this._internalRoot=e}is.prototype.render=on.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));os(e,r,null,null)},is.prototype.unmount=on.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Fa(function(){os(null,e,null,null)}),r[qr]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var r=$n();e={blockedOn:null,target:e,priority:r};for(var t=0;t<ea.length&&r!==0&&r<ea[t].priority;t++);ea.splice(t,0,e),t===0&&Vn(e)}};function sn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Bm(e,r,t,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var N=ss(n);i.call(N)}}var n=td(r,o,e,0,null,!1,!1,"",id);return e._reactRootContainer=n,e[qr]=n.current,Et(e.nodeType===8?e.parentNode:e),Fa(),n}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var m=o;o=function(){var N=ss(p);m.call(N)}}var p=an(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=p,e[qr]=p.current,Et(e.nodeType===8?e.parentNode:e),Fa(function(){os(r,p,t,o)}),p}function ls(e,r,t,o,s){var i=t._reactRootContainer;if(i){var n=i;if(typeof s=="function"){var m=s;s=function(){var p=ss(n);m.call(p)}}os(r,n,e,s)}else n=Bm(t,r,e,s,o);return ss(n)}On=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=ht(r.pendingLanes);t!==0&&(Ps(r,t|1),dr(r,_e()),(pe&6)===0&&(tt=_e()+500,ia()))}break;case 13:Fa(function(){var o=Vr(e,1);if(o!==null){var s=tr();Tr(o,e,1,s)}}),tn(e,1)}},Es=function(e){if(e.tag===13){var r=Vr(e,134217728);if(r!==null){var t=tr();Tr(r,e,134217728,t)}tn(e,134217728)}},qn=function(e){if(e.tag===13){var r=ma(e),t=Vr(e,r);if(t!==null){var o=tr();Tr(t,e,r,o)}tn(e,r)}},$n=function(){return ge},Wn=function(e,r){var t=ge;try{return ge=e,r()}finally{ge=t}},js=function(e,r,t){switch(r){case"input":if(rr(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var s=No(o);if(!s)throw Error(l(90));we(o),rr(o,s)}}}break;case"textarea":lt(e,t);break;case"select":r=t.value,r!=null&&Qr(e,!!t.multiple,r,!1)}},Sn=Yi,zn=Fa;var Im={usingClientEntryPoint:!1,Events:[At,Ha,No,Nn,Fn,Yi]},Ut={findFiberByHostInstance:xa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:Ut.bundleType,version:Ut.version,rendererPackageName:Ut.rendererPackageName,rendererConfig:Ut.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tn(e),e===null?null:e.stateNode},findFiberByHostInstance:Ut.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{so=cs.inject(Rm),Ar=cs}catch{}}return ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im,ur.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sn(r))throw Error(l(200));return _m(e,r,null,t)},ur.createRoot=function(e,r){if(!sn(e))throw Error(l(299));var t=!1,o="",s=sd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=an(e,1,!1,null,null,t,!1,o,s),e[qr]=r.current,Et(e.nodeType===8?e.parentNode:e),new on(r)},ur.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Tn(r),e=e===null?null:e.stateNode,e},ur.flushSync=function(e){return Fa(e)},ur.hydrate=function(e,r,t){if(!ns(r))throw Error(l(200));return ls(null,e,r,!0,t)},ur.hydrateRoot=function(e,r,t){if(!sn(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,s=!1,i="",n=sd;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),r=td(r,null,e,1,t??null,s,!1,i,n),e[qr]=r.current,Et(e),o)for(e=0;e<o.length;e++)t=o[e],s=t._getVersion,s=s(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,s]:r.mutableSourceEagerHydrationData.push(t,s);return new is(r)},ur.render=function(e,r,t){if(!ns(r))throw Error(l(200));return ls(null,e,r,!1,t)},ur.unmountComponentAtNode=function(e){if(!ns(e))throw Error(l(40));return e._reactRootContainer?(Fa(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1},ur.unstable_batchedUpdates=Yi,ur.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!ns(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ls(e,r,t,!1,o)},ur.version="18.3.1-next-f1338f8080-20240426",ur}var fd;function Km(){if(fd)return cn.exports;fd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),cn.exports=Um(),cn.exports}var hd;function Qm(){if(hd)return ds;hd=1;var u=Km();return ds.createRoot=u.createRoot,ds.hydrateRoot=u.hydrateRoot,ds}var Ym=Qm();const Xm=jd(Ym),kd=L.createContext(void 0),Jm=({children:u})=>{const d=()=>{if(typeof window>"u")return"/";const C=window.location.hash.replace(/^#/,"");return C&&C.startsWith("/")?C:window.location.pathname||"/"},[l,v]=L.useState(d),[h,x]=L.useState(null),[b,z]=L.useState("");L.useEffect(()=>{const C=()=>{const A=window.location.hash.replace(/^#/,"");A&&A.startsWith("/")?v(A):v(window.location.pathname||"/")};return window.addEventListener("popstate",C),window.addEventListener("hashchange",C),()=>{window.removeEventListener("popstate",C),window.removeEventListener("hashchange",C)}},[]);const k=C=>{if(C===l){window.scrollTo({top:0,behavior:"smooth"});return}window.location.hash=C,v(C),window.scrollTo({top:0,behavior:"smooth"})},T=C=>{x(C)},P=()=>{x(null)},M=L.useMemo(()=>{const C=l.split("?")[0];if(C==="/"||C==="")return[{label:"Home",href:"/"}];const A=[{label:"Home",href:"/"}];return C.startsWith("/colors")?A.push({label:"Elamel Colors",href:"/colors"}):C.startsWith("/goodies")?A.push({label:"Elamel Goodies",href:"/goodies"}):C.startsWith("/moments-souvenirs")||C.startsWith("/moments")?A.push({label:"Moments & Souvenirs",href:"/moments-souvenirs"}):C.startsWith("/about")?A.push({label:"About Elamel",href:"/about"}):C.startsWith("/contact")?A.push({label:"Contact & Orders",href:"/contact"}):C.startsWith("/search")?A.push({label:"Search Results",href:"/search"}):C.startsWith("/sitemap")?A.push({label:"Sitemap",href:"/sitemap"}):C.startsWith("/privacy")?A.push({label:"Privacy Policy",href:"/privacy"}):C.startsWith("/terms")?A.push({label:"Terms of Use",href:"/terms"}):C.startsWith("/accessibility")&&A.push({label:"Accessibility Statement",href:"/accessibility"}),A},[l]);return a.jsx(kd.Provider,{value:{currentPath:l,navigate:k,breadcrumbs:M,selectedProductId:h,openProductModal:T,closeProductModal:P,searchQuery:b,setSearchQuery:z},children:u})},Cr=()=>{const u=L.useContext(kd);if(!u)throw new Error("useRouter must be used within a RouterProvider");return u},Cd=L.createContext(void 0),Zm=({children:u})=>{const[d,l]=L.useState([]),v=L.useCallback(x=>{l(b=>b.filter(z=>z.id!==x))},[]),h=L.useCallback((x,b,z="success")=>{const k=Math.random().toString(36).substring(2,9),T={id:k,title:x,message:b,type:z};l(P=>[...P,T]),setTimeout(()=>{v(k)},4500)},[v]);return a.jsx(Cd.Provider,{value:{toasts:d,addToast:h,removeToast:v},children:u})},hs=()=>{const u=L.useContext(Cd);if(!u)throw new Error("useToast must be used within a ToastProvider");return u};var yn={};(function u(d,l,v,h){var x=!!(d.Worker&&d.Blob&&d.Promise&&d.OffscreenCanvas&&d.OffscreenCanvasRenderingContext2D&&d.HTMLCanvasElement&&d.HTMLCanvasElement.prototype.transferControlToOffscreen&&d.URL&&d.URL.createObjectURL),b=typeof Path2D=="function"&&typeof DOMMatrix=="function",z=(function(){if(!d.OffscreenCanvas)return!1;try{var f=new OffscreenCanvas(1,1),c=f.getContext("2d");c.fillRect(0,0,1,1);var j=f.transferToImageBitmap();c.createPattern(j,"no-repeat")}catch{return!1}return!0})();function k(){}function T(f){var c=l.exports.Promise,j=c!==void 0?c:d.Promise;return typeof j=="function"?new j(f):(f(k,k),null)}var P=(function(f,c){return{transform:function(j){if(f)return j;if(c.has(j))return c.get(j);var R=new OffscreenCanvas(j.width,j.height),O=R.getContext("2d");return O.drawImage(j,0,0),c.set(j,R),R},clear:function(){c.clear()}}})(z,new Map),M=(function(){var f=Math.floor(16.666666666666668),c,j,R={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(c=function(W){var G=Math.random();return R[G]=requestAnimationFrame(function $(K){O===K||O+f-1<K?(O=K,delete R[G],W()):R[G]=requestAnimationFrame($)}),G},j=function(W){R[W]&&cancelAnimationFrame(R[W])}):(c=function(W){return setTimeout(W,f)},j=function(W){return clearTimeout(W)}),{frame:c,cancel:j}})(),C=(function(){var f,c,j={};function R(O){function W(G,$){O.postMessage({options:G||{},callback:$})}O.init=function($){var K=$.transferControlToOffscreen();O.postMessage({canvas:K},[K])},O.fire=function($,K,oe){if(c)return W($,null),c;var me=Math.random().toString(36).slice(2);return c=T(function(he){function we(Ae){Ae.data.callback===me&&(delete j[me],O.removeEventListener("message",we),c=null,P.clear(),oe(),he())}O.addEventListener("message",we),W($,me),j[me]=we.bind(null,{data:{callback:me}})}),c},O.reset=function(){O.postMessage({reset:!0});for(var $ in j)j[$](),delete j[$]}}return function(){if(f)return f;if(!v&&x){var O=["var CONFETTI, SIZE = {}, module = {};","("+u.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([O])))}catch(W){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",W),null}R(f)}return f}})(),A={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(f,c){return c?c(f):f}function F(f){return f!=null}function S(f,c,j){return E(f&&F(f[c])?f[c]:A[c],j)}function U(f){return f<0?0:Math.floor(f)}function ee(f,c){return Math.floor(Math.random()*(c-f))+f}function H(f){return parseInt(f,16)}function ce(f){return f.map(ie)}function ie(f){var c=String(f).replace(/[^0-9a-f]/gi,"");return c.length<6&&(c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]),{r:H(c.substring(0,2)),g:H(c.substring(2,4)),b:H(c.substring(4,6))}}function ye(f){var c=S(f,"origin",Object);return c.x=S(c,"x",Number),c.y=S(c,"y",Number),c}function Te(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function be(f){var c=f.getBoundingClientRect();f.width=c.width,f.height=c.height}function er(f){var c=document.createElement("canvas");return c.style.position="fixed",c.style.top="0px",c.style.left="0px",c.style.pointerEvents="none",c.style.zIndex=f,c}function Ke(f,c,j,R,O,W,G,$,K){f.save(),f.translate(c,j),f.rotate(W),f.scale(R,O),f.arc(0,0,1,G,$,K),f.restore()}function or(f){var c=f.angle*(Math.PI/180),j=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-c+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function le(f,c){c.x+=Math.cos(c.angle2D)*c.velocity+c.drift,c.y+=Math.sin(c.angle2D)*c.velocity+c.gravity,c.velocity*=c.decay,c.flat?(c.wobble=0,c.wobbleX=c.x+10*c.scalar,c.wobbleY=c.y+10*c.scalar,c.tiltSin=0,c.tiltCos=0,c.random=1):(c.wobble+=c.wobbleSpeed,c.wobbleX=c.x+10*c.scalar*Math.cos(c.wobble),c.wobbleY=c.y+10*c.scalar*Math.sin(c.wobble),c.tiltAngle+=.1,c.tiltSin=Math.sin(c.tiltAngle),c.tiltCos=Math.cos(c.tiltAngle),c.random=Math.random()+2);var j=c.tick++/c.totalTicks,R=c.x+c.random*c.tiltCos,O=c.y+c.random*c.tiltSin,W=c.wobbleX+c.random*c.tiltCos,G=c.wobbleY+c.random*c.tiltSin;if(f.fillStyle="rgba("+c.color.r+", "+c.color.g+", "+c.color.b+", "+(1-j)+")",f.beginPath(),b&&c.shape.type==="path"&&typeof c.shape.path=="string"&&Array.isArray(c.shape.matrix))f.fill(ve(c.shape.path,c.shape.matrix,c.x,c.y,Math.abs(W-R)*.1,Math.abs(G-O)*.1,Math.PI/10*c.wobble));else if(c.shape.type==="bitmap"){var $=Math.PI/10*c.wobble,K=Math.abs(W-R)*.1,oe=Math.abs(G-O)*.1,me=c.shape.bitmap.width*c.scalar,he=c.shape.bitmap.height*c.scalar,we=new DOMMatrix([Math.cos($)*K,Math.sin($)*K,-Math.sin($)*oe,Math.cos($)*oe,c.x,c.y]);we.multiplySelf(new DOMMatrix(c.shape.matrix));var Ae=f.createPattern(P.transform(c.shape.bitmap),"no-repeat");Ae.setTransform(we),f.globalAlpha=1-j,f.fillStyle=Ae,f.fillRect(c.x-me/2,c.y-he/2,me,he),f.globalAlpha=1}else if(c.shape==="circle")f.ellipse?f.ellipse(c.x,c.y,Math.abs(W-R)*c.ovalScalar,Math.abs(G-O)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI):Ke(f,c.x,c.y,Math.abs(W-R)*c.ovalScalar,Math.abs(G-O)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI);else if(c.shape==="star")for(var ue=Math.PI/2*3,We=4*c.scalar,sr=8*c.scalar,rr=c.x,gr=c.y,Nr=5,Qe=Math.PI/Nr;Nr--;)rr=c.x+Math.cos(ue)*sr,gr=c.y+Math.sin(ue)*sr,f.lineTo(rr,gr),ue+=Qe,rr=c.x+Math.cos(ue)*We,gr=c.y+Math.sin(ue)*We,f.lineTo(rr,gr),ue+=Qe;else f.moveTo(Math.floor(c.x),Math.floor(c.y)),f.lineTo(Math.floor(c.wobbleX),Math.floor(O)),f.lineTo(Math.floor(W),Math.floor(G)),f.lineTo(Math.floor(R),Math.floor(c.wobbleY));return f.closePath(),f.fill(),c.tick<c.totalTicks}function Se(f,c,j,R,O){var W=c.slice(),G=f.getContext("2d"),$,K,oe=T(function(me){function he(){$=K=null,G.clearRect(0,0,R.width,R.height),P.clear(),O(),me()}function we(){v&&!(R.width===h.width&&R.height===h.height)&&(R.width=f.width=h.width,R.height=f.height=h.height),!R.width&&!R.height&&(j(f),R.width=f.width,R.height=f.height),G.clearRect(0,0,R.width,R.height),W=W.filter(function(Ae){return le(G,Ae)}),W.length?$=M.frame(we):he()}$=M.frame(we),K=he});return{addFettis:function(me){return W=W.concat(me),oe},canvas:f,promise:oe,reset:function(){$&&M.cancel($),K&&K()}}}function ze(f,c){var j=!f,R=!!S(c||{},"resize"),O=!1,W=S(c,"disableForReducedMotion",Boolean),G=x&&!!S(c||{},"useWorker"),$=G?C():null,K=j?Te:be,oe=f&&$?!!f.__confetti_initialized:!1,me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function we(ue,We,sr){for(var rr=S(ue,"particleCount",U),gr=S(ue,"angle",Number),Nr=S(ue,"spread",Number),Qe=S(ue,"startVelocity",Number),Qr=S(ue,"decay",Number),nt=S(ue,"gravity",Number),Zt=S(ue,"drift",Number),lt=S(ue,"colors",ce),eo=S(ue,"ticks",Number),ct=S(ue,"shapes"),dt=S(ue,"scalar"),Da=!!S(ue,"flat"),ut=ye(ue),Yr=rr,Or=[],vs=f.width*ut.x,ro=f.height*ut.y;Yr--;)Or.push(or({x:vs,y:ro,angle:gr,spread:Nr,startVelocity:Qe,color:lt[Yr%lt.length],shape:ct[ee(0,ct.length)],ticks:eo,decay:Qr,gravity:nt,drift:Zt,scalar:dt,flat:Da}));return he?he.addFettis(Or):(he=Se(f,Or,K,We,sr),he.promise)}function Ae(ue){var We=W||S(ue,"disableForReducedMotion",Boolean),sr=S(ue,"zIndex",Number);if(We&&me)return T(function(Qe){Qe()});j&&he?f=he.canvas:j&&!f&&(f=er(sr),document.body.appendChild(f)),R&&!oe&&K(f);var rr={width:f.width,height:f.height};$&&!oe&&$.init(f),oe=!0,$&&(f.__confetti_initialized=!0);function gr(){if($){var Qe={getBoundingClientRect:function(){if(!j)return f.getBoundingClientRect()}};K(Qe),$.postMessage({resize:{width:Qe.width,height:Qe.height}});return}rr.width=rr.height=null}function Nr(){he=null,R&&(O=!1,d.removeEventListener("resize",gr)),j&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,oe=!1)}return R&&!O&&(O=!0,d.addEventListener("resize",gr,!1)),$?$.fire(ue,rr,Nr):we(ue,rr,Nr)}return Ae.reset=function(){$&&$.reset(),he&&he.reset()},Ae}var se;function Ce(){return se||(se=ze(null,{useWorker:!0,resize:!0})),se}function ve(f,c,j,R,O,W,G){var $=new Path2D(f),K=new Path2D;K.addPath($,new DOMMatrix(c));var oe=new Path2D;return oe.addPath(K,new DOMMatrix([Math.cos(G)*O,Math.sin(G)*O,-Math.sin(G)*W,Math.cos(G)*W,j,R])),oe}function q(f){if(!b)throw new Error("path confetti are not supported in this browser");var c,j;typeof f=="string"?c=f:(c=f.path,j=f.matrix);var R=new Path2D(c),O=document.createElement("canvas"),W=O.getContext("2d");if(!j){for(var G=1e3,$=G,K=G,oe=0,me=0,he,we,Ae=0;Ae<G;Ae+=2)for(var ue=0;ue<G;ue+=2)W.isPointInPath(R,Ae,ue,"nonzero")&&($=Math.min($,Ae),K=Math.min(K,ue),oe=Math.max(oe,Ae),me=Math.max(me,ue));he=oe-$,we=me-K;var We=10,sr=Math.min(We/he,We/we);j=[sr,0,0,sr,-Math.round(he/2+$)*sr,-Math.round(we/2+K)*sr]}return{type:"path",path:c,matrix:j}}function te(f){var c,j=1,R="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?c=f:(c=f.text,j="scalar"in f?f.scalar:j,O="fontFamily"in f?f.fontFamily:O,R="color"in f?f.color:R);var W=10*j,G=""+W+"px "+O,$=new OffscreenCanvas(W,W),K=$.getContext("2d");K.font=G;var oe=K.measureText(c),me=Math.ceil(oe.actualBoundingBoxRight+oe.actualBoundingBoxLeft),he=Math.ceil(oe.actualBoundingBoxAscent+oe.actualBoundingBoxDescent),we=2,Ae=oe.actualBoundingBoxLeft+we,ue=oe.actualBoundingBoxAscent+we;me+=we+we,he+=we+we,$=new OffscreenCanvas(me,he),K=$.getContext("2d"),K.font=G,K.fillStyle=R,K.fillText(c,Ae,ue);var We=1/j;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[We,0,0,We,-me*We/2,-he*We/2]}}l.exports=function(){return Ce().apply(this,arguments)},l.exports.reset=function(){Ce().reset()},l.exports.create=ze,l.exports.shapeFromPath=q,l.exports.shapeFromText=te})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),yn,!1);const Xt=yn.exports;yn.exports.create;const Nd=L.createContext(void 0),ep=({children:u})=>{const{addToast:d}=hs(),[l,v]=L.useState(()=>{if(typeof window>"u")return[];try{const S=localStorage.getItem("elamel_treat_box");if(S)return JSON.parse(S)}catch{}return[]}),[h,x]=L.useState(!1);L.useEffect(()=>{try{localStorage.setItem("elamel_treat_box",JSON.stringify(l))}catch{}},[l]);const b=(S,U=1,ee,H,ce)=>{const ie=ee?`${S.id}-${ee.familyOrName}-${ee.occasion}`:ce?`${S.id}-box-${Date.now()}`:S.id;v(ye=>ye.find(be=>be.id===ie)?ye.map(be=>be.id===ie?{...be,quantity:be.quantity+U}:be):[...ye,{id:ie,product:S,quantity:U,personalisation:ee,customGlazes:H,boxItems:ce}]),d("Added to Treat Box!",`"${S.name}" has been added to your family selection.`,"success")},z=S=>{const U=l.find(ee=>ee.id===S);v(ee=>ee.filter(H=>H.id!==S)),U&&d("Item Removed",`"${U.product.name}" was removed from your treat box.`,"info")},k=(S,U)=>{if(U<=0){z(S);return}v(ee=>ee.map(H=>H.id===S?{...H,quantity:U}:H))},T=()=>{v([])},P=()=>x(!0),M=()=>x(!1),C=L.useMemo(()=>l.reduce((S,U)=>S+U.quantity,0),[l]),A=L.useMemo(()=>l.reduce((S,U)=>S+U.product.price*U.quantity,0),[l]),E=L.useMemo(()=>{const S=new Set;return l.forEach(U=>{if(U.product.category==="goodies"){const ee=U.product;ee.allergenWarning&&S.add(`${ee.name}: ${ee.allergenWarning}`)}U.boxItems&&U.boxItems.forEach(ee=>{ee.allergenWarning&&S.add(`${ee.name}: ${ee.allergenWarning}`)})}),Array.from(S)},[l]),F=async S=>{const U=`ELAMEL-${Math.floor(1e5+Math.random()*9e5)}`;try{Xt({particleCount:80,spread:70,origin:{y:.6},colors:["#e1285b","#f8971d","#0284c7","#10b981","#8b5cf6"]})}catch{}return d("Pre-order Request Received!",`Thank you, ${S.name}! Your family request (${U}) is now safely in our bakery & pottery queue.`,"success"),T(),{success:!0,orderId:U}};return a.jsx(Nd.Provider,{value:{items:l,addToCart:b,removeFromCart:z,updateQuantity:k,clearCart:T,isCartOpen:h,openCart:P,closeCart:M,totalItemsCount:C,subtotal:A,dietaryWarnings:E,submitInquiryOrder:F},children:u})},Aa=()=>{const u=L.useContext(Nd);if(!u)throw new Error("useCart must be used within a CartProvider");return u},mn={fontSize:"normal",highContrast:!1,reducedMotion:!1},Fd=L.createContext(void 0),rp=({children:u})=>{const[d,l]=L.useState(()=>{if(typeof window>"u")return mn;try{const z=localStorage.getItem("elamel_a11y_settings");if(z)return JSON.parse(z)}catch{}return mn});L.useEffect(()=>{try{localStorage.setItem("elamel_a11y_settings",JSON.stringify(d))}catch{}const z=document.documentElement;z.classList.remove("font-size-normal","font-size-large","font-size-xlarge"),z.classList.add(`font-size-${d.fontSize}`),d.highContrast?z.classList.add("high-contrast-mode"):z.classList.remove("high-contrast-mode"),d.reducedMotion?z.classList.add("reduced-motion-mode"):z.classList.remove("reduced-motion-mode")},[d]);const v=z=>{l(k=>({...k,fontSize:z}))},h=()=>{l(z=>({...z,highContrast:!z.highContrast}))},x=()=>{l(z=>({...z,reducedMotion:!z.reducedMotion}))},b=()=>{l(mn)};return a.jsx(Fd.Provider,{value:{settings:d,setFontSize:v,toggleHighContrast:h,toggleReducedMotion:x,resetSettings:b},children:u})},Sd=()=>{const u=L.useContext(Fd);if(!u)throw new Error("useAccessibility must be used within an AccessibilityProvider");return u},ap="pt",tp="Português (Pré-Acordo)",op={name:"elamel",tagline:"Cores, Iguarias e Momentos para Toda a Família",motto:"Pinte • Crie • Desfrute",slogan:"Pinte • Crie • Desfrute",subbrands:{colors:"Elamel Cores",goodies:"Elamel Iguarias",moments:"Momentos & Lembranças"},description:"Kits de pintura cerâmica artesanais, pastelaria familiar requintada e recordações personalizadas feitas para unir corações."},sp={home:"Início",colors:"Cores (Cerâmica)",goodies:"Iguarias (Pastelaria)",moments:"Momentos & Lembranças",about:"Sobre Nós",contact:"Contacto",search:"Pesquisar",cart:"Cesto de Compras",accessibility:"Acessibilidade",skipToContent:"Saltar para o conteúdo principal",menu:"Menu",closeMenu:"Fechar menu"},ip={addToCart:"Adicionar ao Cesto",addedToCart:"Adicionado com Sucesso!",viewDetails:"Ver Detalhes",quickView:"Vista Rápida",learnMore:"Saber Mais",orderNow:"Encomendar Já",save:"Guardar",close:"Fechar",back:"Voltar",next:"Seguinte",previous:"Anterior",loading:"A carregar...",searchPlaceholder:"Pesquisar kits de cerâmica, bolos, bolachas, lembranças...",clear:"Limpar",clearFilters:"Limpar Filtros",all:"Todos",filters:"Filtros",sortBy:"Ordenar por",sortFeatured:"Em Destaque",sortPriceLow:"Preço: Mais Baixo",sortPriceHigh:"Preço: Mais Alto",priceLowHigh:"Preço: Mais Baixo",priceHighLow:"Preço: Mais Alto",sortRating:"Melhor Classificação",sortName:"Nome: A a Z",reviews:"avaliações",rating:"Classificação",category:"Categoria",materials:"Materiais e Composição",dimensions:"Dimensões",careGuide:"Instruções de Cuidado e Manutenção",safetyInfo:"Certificação de Segurança e Não-Toxicidade",familyTip:"Sugestão para Momentos em Família",nutrition:"Informações Nutricionais e Alergénios",allergens:"Aviso de Alergénios",portion:"Porção / Rendimento",dietary:"Perfil Dietético",freeDelivery:"Envio Gratuito em encomendas superiores a 45€",guarantee:"Garantia de Satisfação Familiar a 100%",leadFree:"100% Isento de Chumbo e Tóxicos",safeForKids:"Seguro para Crianças e Famílias",handcrafted:"Produção Artesanal Cuidadosa",readMore:"Ler Mais",readLess:"Ler Menos"},np={hero:{eyebrow:"Bem-vindo à Família Elamel",badge:"Atelier Criativo & Pastelaria Familiar",title:"Crie Momentos Inesquecíveis com Arte, Sabores e Amor",subtitle:"Kits seguros de pintura em cerâmica vidrada, bolos e biscoitos artesanais confeccionados com ingredientes nobres, e recordações personalizadas concebidas para perdurar de geração em geração.",ctaColors:"Explorar Kits de Cerâmica",ctaGoodies:"Descobrir Iguarias",ctaMoments:"Recordações Personalizadas",badge1:"100% Não-Tóxico e Seguro",badge2:"Pastelaria sem Amendoins",badge3:"Concebido para Todas as Idades"},categories:{eyebrow:"A Experiência Elamel",title:"Três Universos de Alegria Familiar",subtitle:"Quer pretenda pintar louça decorativa em conjunto, saborear pastelaria fresca e reconfortante, ou criar uma recordação de família eterna, temos a proposta perfeita para si.",colors:{title:"Kits de Pintura Cerâmica & Artesanato",desc:"Loiça em faiança fina porosa, vidrados minerais laváveis e guias simples para criar arte sem sair de casa.",action:"Explorar Elamel Cores"},goodies:{title:"Pastelaria & Iguarias de Celebração",desc:"Bolos esponjosos com frutos frescos e biscoitos decorados à mão com baixo teor de açúcar.",action:"Explorar Elamel Iguarias"},moments:{title:"Recordações & Momentos de Família",desc:"Pratos heráldicos, canecas comemorativas e caixas em madeira maciça com gravações únicas.",action:"Explorar Lembranças"},colorsTitle:"Kits de Pintura Cerâmica & Artesanato",colorsDesc:"Kits completos com loiça em faiança fina porosa, vasos e figuras decorativas infantis, acompanhados de vidrados minerais laváveis e seguros.",colorsFeature1:"Pratos de jantar, taças e canecas ergonómicas",colorsFeature2:"Fixação térmica simples no forno doméstico",colorsFeature3:"Apropriado para crianças pequenas e principiantes",goodiesTitle:"Bolos & Biscoitos Artesanais",goodiesDesc:"Bolos esponjosos com compota de frutos do bosque, biscoitos decorados à mão e bolachas nutritivas de mel sem açúcares refinados.",goodiesFeature1:"Fórmulas com baixo teor de açúcar para crianças",goodiesFeature2:"Opções sem glúten e sem frutos de casca rija",goodiesFeature3:"Criador interactivo de Caixas de Iguarias à medida",momentsTitle:"Recordações Familiares Personalizadas",momentsDesc:"Pratos heráldicos de árvore genealógica gravados à mão, canecas comemorativas para casais e ornamentos especiais que eternizam histórias.",momentsFeature1:"Gravação artesanal à mão no nosso estúdio",momentsFeature2:"Vidrados de alta resistência e durabilidade",momentsFeature3:"Embalagem requintada em caixa de madeira maciça"},whyLove:{eyebrow:"O Nosso Compromisso",title:"Por Que Razão as Famílias Adoram a Elamel",subtitle:"Quatro pilares fundamentais que asseguram pureza, segurança e memórias inesquecíveis para todas as gerações.",reasons:{safe:{title:"100% Não-Tóxico",desc:"Vidrados minerais e cores certificados segundo as normas europeias EN71-3 e ASTM D-4236, totalmente isentos de chumbo e solventes."},allergens:{title:"Segurança de Alergénios",desc:"Cozinha com exclusão rigorosa de amendoins e transparência total de ingredientes para tranquilidade absoluta dos pais."},bonding:{title:"União Familiar",desc:"Actividades sem ecrãs desenhadas para avós, pais e crianças criarem peças com as próprias mãos à volta da mesa."},transparency:{title:"Pureza Artesanal",desc:"Faianças porosas de qualidade superior e doçaria fresca com ingredientes nobres para recordar sempre."}}},featured:{eyebrow:"Criações em Destaque",title:"Os Favoritos das Nossas Famílias"},cta:{eyebrow:"Comece a Criar Hoje",title:"Pronto para Criar Momentos Inesquecíveis?",subtitle:"Escolha um kit de pintura cerâmica ou componha uma caixa de doces personalizada entregue com amor.",buttonColors:"Ver Kits de Cerâmica",buttonMoments:"Personalizar Lembrança"},studios:{eyebrow:"Experiências Interactivas ao Vivo",title:"Liberte a Sua Criatividade no Nosso Estúdio",subtitle:"Experimente os nossos simuladores online antes de encomendar: pinte cerâmicas virtualmente, componha a sua caixa de doces ou visualize peças personalizadas em tempo real."},values:{eyebrow:"O Nosso Compromisso Ético",title:"Por Que Razão as Famílias Confiam na Elamel",card1Title:"Segurança e Pureza Absoluta",card1Desc:"Todos os nossos pigmentos minerais e vidrados cumprem rigorosamente as normas europeias EN71-3 e ASTM D-4236, sendo 100% isentos de chumbo, cádmio ou quaisquer compostos voláteis nocivos.",card2Title:"Ingredientes Naturais e Transparentes",card2Desc:"As nossas receitas de pastelaria utilizam exclusivamente manteiga pura, ovos biológicos de galinhas criadas ao ar livre e farinhas não branqueadas, sem corantes artificiais.",card3Title:"Design Inclusivo e Acessível",card3Desc:"Concebemos cada produto com pegas ergonómicas e instruções visuais claras, permitindo a participação activa de avós a netos sem barreiras físicas ou cognitivas."}},lp={title:"Elamel Cores • Kits de Pintura Cerâmica",subtitle:"Descubra faianças em biscoito prontas a pintar, acompanhadas por paletas de vidrados luminosos, pincéis de pelo sintético e guias passo-a-passo para artistas de todas as idades.",highlights:{nonToxic:"Vidrados 100% Não-Tóxicos",foodSafe:"Apto para Alimentos após Cozedura",easyCure:"Cura Simples em Forno Doméstico (150°C)"}},cp={title:"Elamel Cores • Kits de Pintura Cerâmica",subtitle:"Descubra faianças em biscoito prontas a pintar, acompanhadas por paletas de vidrados luminosos, pincéis de pelo sintético e guias passo-a-passo para artistas de todas as idades.",filterAll:"Todos os Kits",filterTableware:"Loiça & Mesa",filterVases:"Jarras & Vasos",filterKids:"Infantil & Figuras",filterSets:"Conjuntos Presente",studioBannerTitle:"Simulador de Vidragem em Tempo Real",studioBannerText:"Escolha um modelo cerâmico, aplique as suas cores preferidas e visualize o efeito de brilho vitrificado antes de pintar em casa!"},dp={title:"Elamel Iguarias • Pastelaria Artesanal Familiar",subtitle:"Bolos aromáticos, biscoitos decorados com requinte e bolachas saudáveis, confeccionados diariamente na nossa pastelaria familiar.",highlights:{peanutFree:"Cozinha Isenta de Amendoins",glutenFree:"Opções Sem Glúten Disponíveis",natural:"100% Ingredientes Naturais"}},up={title:"Elamel Iguarias • Pastelaria Artesanal Familiar",subtitle:"Bolos aromáticos, biscoitos decorados com requinte e bolachas saudáveis, confeccionados diariamente na nossa pastelaria familiar.",filterAll:"Todas as Iguarias",filterCakes:"Bolos de Família",filterCookies:"Biscoitos & Bolachas",filterOccasions:"Celebrações & Caixas",boxBuilderBannerTitle:"Componha a Sua Caixa de Iguarias",boxBuilderBannerText:"Seleccione 4 ou 6 doces à sua escolha, acompanhe o perfil dietético em directo e receba uma embalagem de oferta requintada."},mp={title:"Momentos & Lembranças • Peças Personalizadas",subtitle:"Presentes comoventes e peças comemorativas com os nomes da sua família, datas especiais e dedicatórias gravadas para sempre."},pp={title:"Momentos & Lembranças • Peças Personalizadas",subtitle:"Presentes comoventes e peças comemorativas com os nomes da sua família, datas especiais e dedicatórias gravadas para sempre.",filterAll:"Todas as Lembranças",filterHeirloom:"Loiça de Família",filterCouples:"Casais & Aniversários",filterOrnaments:"Enfeites & Épocas Especiais",personalisationBannerTitle:"Estúdio de Gravação ao Vivo",personalisationBannerText:"Escreva o nome da sua família, escolha o motivo gráfico e veja a antevisão imediata da sua peça gravada."},fp={title:"Estúdio de Pintura e Vidragem Cerâmica",subtitle:"Experimente combinações de cores e simule o efeito vitrificado brilhante do forno.",selectModel:"1. Seleccione a Peça Cerâmica:",models:{plate:"Prato de Jantar Botânico",mug:"Caneca Aconchegante",vase:"Vaso Flor de Primavera",bunny:"Coelhinho Explorador"},selectColor:"2. Escolha o Vidrado Mineral:",colors:{rose:"Rosa Pétala Suave",coral:"Coral Pôr-do-Sol",sunshine:"Amarelo Raio-de-Sol",sage:"Verde Salva Suave",teal:"Azul Turquesa Marinho",lavender:"Lavanda Silvestre",terracotta:"Terracota Quente",cream:"Creme Baunilha Natural"},brushSize:"Espessura do Pincel:",actions:{clearCanvas:"Limpar Superfície",toggleGloss:"Simular Brilho de Forno",saveArtwork:"Descarregar Criação",addToKit:"Encomendar Kit com Estas Cores"},ovenSimulationNote:"A simulação de vidragem reproduz a profundidade e reflexos obtidos após a cura térmica no forno a 150°C."},hp={title:"Criador de Caixa de Iguarias Personalizada",subtitle:"Monte o sortido ideal para o lanche da sua família ou para oferecer a alguém especial.",step1:"1. Escolha a Dimensão da Caixa:",box4:"Amostrador Familiar (4 Peças)",box4Desc:"Perfeito para uma tarde doce a dois ou para crianças.",box6:"Caixa de Celebração (6 Peças)",box6Desc:"Ideal para partilhar em reuniões de família e aniversários.",step2:"2. Seleccione os Seus Doces Favoritos:",slotsLabel:"Lugares Preenchidos na Caixa:",emptySlot:"Espaço Vazio — Clique num doce abaixo para adicionar",remove:"Remover",dietarySummary:"Resumo Alergénico da Caixa:",boxFull:"Caixa Completa! Pronta para Encomenda",boxIncomplete:"Adicione mais {remaining} doce(s) para completar a caixa",orderBox:"Adicionar Caixa ao Cesto ({price}€)"},gp={title:"Estúdio de Personalização em Directo",subtitle:"Veja como ficará a sua dedicatória gravada antes de avançar com a encomenda.",familyName:"Apelido / Nome da Família:",familyPlaceholder:"ex: Família Silva Ramos",estYear:"Ano de Fundação / Casamento:",yearPlaceholder:"ex: 2018",members:"Nomes dos Membros da Família (separados por vírgula):",membersPlaceholder:"ex: Mariana, Tiago, Clara, Tomás",dedication:"Mensagem ou Dedicatória Especial:",dedicationPlaceholder:"ex: Onde a vida começa e o amor nunca tem fim.",themeColor:"Tom do Vidrado de Fundo:",giftWrap:"Incluir Embalagem de Oferta em Madeira Nobre (+6,00€)",previewLabel:"Antevisão da Peça Confeccionada à Mão:",orderPersonalised:"Encomendar Peça Personalizada ({price}€)"},vp={title:"O Seu Cesto de Compras",empty:"O seu cesto de compras está vazio.",emptySubtitle:"Explore os nossos kits de cores, bolos caseiros e recordações para começar!",itemsCount:"{count} artigo(s) seleccionado(s)",subtotal:"Subtotal",shipping:"Portes de Envio",shippingFree:"Gratuito",shippingCalculated:"4,50€ (Grátis a partir de 45€)",total:"Total da Encomenda",checkoutButton:"Concluir Pedido de Encomenda",inquiryNotice:"A Elamel funciona com preparação artesanal e reserva personalizada. Ao submeter, entraremos em contacto directo consigo para confirmar datas de entrega ou levantamento no estúdio.",form:{fullName:"Nome Completo",email:"Endereço de Correio Electrónico",phone:"Contacto Telefónico",address:"Morada de Entrega (ou levantamento)",deliveryDate:"Data Desejada para Recepção / Celebração",notes:"Observações ou Restrições Alimentares Adicionais",submit:"Enviar Pedido de Reserva Familiar",successTitle:"Pedido Registado com Sucesso!",successMessage:"Muito obrigado pela sua preferência. A nossa equipa entrará em contacto por correio electrónico ou telefone no prazo máximo de 24 horas para coordenar os detalhes."}},xp={story:{eyebrow:"A Nossa Essência",title:"Pintar Cores, Cozinhar Alegria, Celebrar Famílias"},heroTitle:"Pintar Cores, Cozinhar Alegria, Celebrar Famílias",heroLead:"A elamel nasceu à volta de uma mesa de cozinha simples, com a convicção profunda de que as recordações mais preciosas acontecem quando as mãos criam arte e as famílias se reúnem em torno de iguarias com sabor a aconchego.",studioTag:"Um Lar para Todas as Gerações • Atelier de Cerâmica e Pastelaria Sob o Mesmo Teto",storyHeading:"A Nossa História: Da Mesa da Cozinha para o Vosso Lar",storyP1:"A Elamel surgiu do encontro entre o amor pelas artes plásticas tradicionais e a paixão pela pastelaria genuína. Apercebemo-nos de que faltavam actividades verdadeiramente envolventes que unissem crianças, pais e avós sem a interferência de ecrãs digitais.",storyP2:"Decidimos criar peças de faiança de textura aveludada e vidrados totalmente inócuos que qualquer pessoa pode decorar em casa, acompanhados por bolos e biscoitos que despertam memórias de infância.",values:{eyebrow:"Os Nossos Valores",title:"Os Quatro Pilares da Experiência Elamel",subtitle:"Tudo o que criamos é guiado pelo amor, pela segurança e pela celebração dos laços familiares.",safety:{title:"Pureza & Não-Toxicidade",desc:"Vidrados minerais 100% isentos de chumbo e cozinha de pastelaria estritamente sem amendoins para total tranquilidade."},artisan:{title:"Arte e Dedicação",desc:"Peças de faiança de textura aveludada e receitas com manteiga nobre preparadas com paixão e detalhe."},inclusivity:{title:"Design Intergeracional",desc:"Pincéis e peças ergonómicas concebidas para mãos pequeninas e avós partilharem momentos sem esforço."},joy:{title:"Momentos Especiais",desc:"Objectos e sabores que transformam uma tarde em casa num tesouro de família para recordar sempre."}},safetyHeading:"Compromisso Inquebrável com a Não-Toxicidade e Alergénios",safetyLead:"A tranquilidade dos pais é a nossa maior prioridade. Todos os aspectos da produção são pensados para a protecção infantil.",safetyPoint1Title:"Vidrados 100% Isentos de Chumbo e Cádmio",safetyPoint1Desc:"Certificados em conformidade com as directivas europeias mais exigentes para contacto alimentar e brinquedos infantis.",safetyPoint2Title:"Pastelaria com Instalações Isentas de Amendoins",safetyPoint2Desc:"A nossa cozinha funciona em circuito rigoroso sem contaminação cruzada de frutos secos perigosos.",safetyPoint3Title:"Ergonomia Intergeracional",safetyPoint3Desc:"Canecas e pratos moldados com formas confortáveis tanto para mãos pequenas como para articulações sensíveis de idosos.",workshops:{eyebrow:"Experiências no Atelier",title:"Ateliers Presenciais & Tardes em Família",subtitle:"Visite o nosso espaço no Porto para pintar loiça em conjunto e provar pastelaria acabadinha de sair do forno.",spotsLeft:"{count} lugares disponíveis",inquireAction:"Reservar Atelier"},workshopsTitle:"Ateliers Presenciais & Eventos Familiares",workshopsSubtitle:"Venha visitar o nosso espaço acolhedor e participar em sessões conjuntas de olaria, pintura e degustação de pastelaria fresca.",bookWorkshop:"Inscrever no Atelier"},yp={title:"Fale Connosco • Contacto Directo",subtitle:"Tem dúvidas sobre kits de pintura, encomendas personalizadas de pastelaria ou eventos privados? Estamos inteiramente ao seu dispor.",addressTitle:"O Nosso Estúdio & Atelier",addressValue:"Rua das Flores Criativas, 128, 4000-064 Porto, Portugal",phoneTitle:"Contacto Telefónico & WhatsApp",phoneValue:"+351 220 123 456 / +351 912 345 678",emailTitle:"Correio Electrónico",emailValue:"ola@elamel.pt / encomendas@elamel.pt",hoursTitle:"Horário de Funcionamento",hoursValue:"Terça a Sábado: 09:30 – 18:30 • Domingo: 10:00 – 16:00 (Segunda: Encerrado)",form:{title:"Envie-nos uma Mensagem Directa",name:"O Seu Nome Completo",email:"Endereço de Correio Electrónico",phone:"Número de Contacto Telefónico",interest:"Área de Interesse",eventDate:"Data Prevista para o Evento / Recepção",message:"Mensagem ou Pedido Especial",send:"Enviar Mensagem",thankYou:"Mensagem enviada com sucesso! Entraremos em contacto brevemente."},formTitle:"Envie-nos uma Mensagem Directa",name:"O Seu Nome",email:"O Seu Correio Electrónico",subject:"Assunto do Contacto",message:"A Sua Mensagem",send:"Enviar Mensagem",sentSuccess:"Mensagem enviada com sucesso! Responderemos muito brevemente."},bp={title:"Acessibilidade & Inclusão Universal",subtitle:"Compromisso formal com o padrão WCAG 2.2 Nível AA para que todas as pessoas possam navegar sem barreiras.",controlsTitle:"Controlos de Visualização Rápida",textSize:"Tamanho do Texto",textSizeNormal:"Normal (100%)",textSizeLarge:"Grande (125%)",textSizeXLarge:"Muito Grande (150%)",contrast:"Modo de Alto Contraste",contrastHelp:"Aumenta a nitidez e diferenciação de cores para facilitar a leitura.",motion:"Reduzir Animações",motionHelp:"Suprime transições dinâmicas para utilizadores com sensibilidade vestibular.",complianceTitle:"Declaração de Conformidade WCAG 2.2 AA",complianceText:"Este sítio web foi integralmente concebido e testado para cumprir as directrizes de acessibilidade de conteúdos para a web (WCAG 2.2 AA), assegurando navegação por teclado, compatibilidade com leitores de ecrã (NVDA, VoiceOver, JAWS) e hierarquia semântica estruturada."},wp={newsletterTitle:"Junte-se ao Clube Familiar Elamel",newsletterSubtitle:"Receba em primeira mão novidades sobre novos kits de pintura, receitas de pastelaria e convites para ateliers comemorativos.",newsletterPlaceholder:"Introduza o seu correio electrónico...",subscribe:"Subscrever",privacyNotice:"Respeitamos a sua privacidade. Sem publicidade invasiva nem partilha de dados com terceiros.",rights:"Todos os direitos reservados. elamel — Pinte • Crie • Desfrute.",links:{privacy:"Política de Privacidade & Dados",terms:"Termos e Condições Gerais",accessibility:"Declaração de Acessibilidade",sitemap:"Mapa do Sítio Web"}},jp={lang:ap,name:tp,brand:op,nav:sp,common:ip,home:np,colors:lp,colorsPage:cp,goodies:dp,goodiesPage:up,moments:mp,momentsPage:pp,glazeStudio:fp,treatBox:hp,personalisation:gp,cart:vp,about:xp,contact:yp,accessibility:bp,footer:wp},kp="en",Cp="English",Np={name:"elamel",tagline:"Colors, Treats, and Moments for Every Family",motto:"Pinte • Crie • Desfrute",slogan:"Paint • Create • Enjoy",subbrands:{colors:"Elamel Colors",goodies:"Elamel Goodies",moments:"Moments & Souvenirs"},description:"Safe ceramic painting kits, artisanal family bakery treats, and treasured custom keepsakes made to bring families together."},Fp={home:"Home",colors:"Colors (Ceramics)",goodies:"Goodies (Bakery)",moments:"Moments & Souvenirs",about:"About Us",contact:"Contact",search:"Search",cart:"Shopping Bag",accessibility:"Accessibility",skipToContent:"Skip to main content",menu:"Menu",closeMenu:"Close menu"},Sp={addToCart:"Add to Bag",addedToCart:"Added Successfully!",viewDetails:"View Details",quickView:"Quick View",learnMore:"Learn More",orderNow:"Order Now",save:"Save",close:"Close",back:"Back",next:"Next",previous:"Previous",loading:"Loading...",searchPlaceholder:"Search ceramic kits, cakes, cookies, keepsakes...",clear:"Clear",clearFilters:"Clear Filters",all:"All",filters:"Filters",sortBy:"Sort by",sortFeatured:"Featured",sortPriceLow:"Price: Low to High",sortPriceHigh:"Price: High to Low",priceLowHigh:"Price: Low to High",priceHighLow:"Price: High to Low",sortRating:"Highest Rated",sortName:"Name: A to Z",reviews:"reviews",rating:"Rating",category:"Category",materials:"Materials & Composition",dimensions:"Dimensions",careGuide:"Care & Maintenance Instructions",safetyInfo:"Safety & Non-Toxic Certification",familyTip:"Family Moment Suggestion",nutrition:"Nutrition & Dietary Information",allergens:"Allergen Warning",portion:"Portion / Yield",dietary:"Dietary Profile",freeDelivery:"Free Delivery on orders over €45",guarantee:"100% Family Satisfaction Guarantee",leadFree:"100% Lead-Free & Non-Toxic",safeForKids:"Safe for Children & Families",handcrafted:"Carefully Handcrafted",readMore:"Read More",readLess:"Read Less"},zp={hero:{eyebrow:"Welcome to the Elamel Family",badge:"Creative Studio & Family Bakery",title:"Crafting Colors, Baking Joy, Celebrating Families",subtitle:"Safe ceramic painting kits with food-safe glazes, wholesome artisanal bakery treats, and personalized family keepsakes designed to be treasured for generations.",ctaColors:"Explore Ceramic Kits",ctaGoodies:"Discover Goodies",ctaMoments:"Personalized Keepsakes",badge1:"100% Non-Toxic & Safe",badge2:"Peanut-Free Bakery",badge3:"Designed for All Ages"},categories:{eyebrow:"The Elamel Experience",title:"Three Worlds of Family Joy",subtitle:"Whether you want to paint tableware together, share warm artisanal bakery treats, or create an heirloom family gift, we have something special for you.",colors:{title:"Ceramic Painting & Craft Kits",desc:"Bisque tableware, washable mineral glazes, and step-by-step guides to create art at home.",action:"Explore Elamel Colors"},goodies:{title:"Pastry & Celebration Goodies",desc:"Tender sponge cakes with fresh berries and hand-piped low-sugar cookies.",action:"Explore Elamel Goodies"},moments:{title:"Family Keepsakes & Moments",desc:"Heirloom family plates, couples mugs, and solid wood boxes with custom engravings.",action:"Explore Keepsakes"},colorsTitle:"Ceramic Painting & Craft Kits",colorsDesc:"Complete DIY kits featuring smooth bisque porcelain tableware, vases, and child-friendly figures with certified lead-free mineral glazes.",colorsFeature1:"Dinner plates, bowls & ergonomic mugs",colorsFeature2:"Simple home oven-cure glazes (150°C)",colorsFeature3:"Safe for toddlers and beginner artists",goodiesTitle:"Artisanal Cakes & Cookies",goodiesDesc:"Delicate vanilla berry sponge cakes, hand-piped rainbow sugar cookies, and wholesome honey animal biscuits with zero refined sugar.",goodiesFeature1:"Low-sugar family formulations",goodiesFeature2:"Gluten-free & nut-free options",goodiesFeature3:"Custom Treat Box creator available",momentsTitle:"Personalised Family Keepsakes",momentsDesc:"Hand-lettered family tree heirloom plates, custom couples mugs, and commemorative ornaments that capture treasured milestones.",momentsFeature1:"Hand-lettered by studio artisans",momentsFeature2:"Durable kiln-baked glazed finishes",momentsFeature3:"Gift packaging in luxury wooden box"},whyLove:{eyebrow:"Our Family Promise",title:"Why Families Love Elamel",subtitle:"Four essential pillars ensuring purity, allergen safety, and unforgettable bonding for every generation.",reasons:{safe:{title:"100% Non-Toxic",desc:"Mineral glazes and paints certified under European EN71-3 and ASTM D-4236 standards, completely free of lead and volatile solvents."},allergens:{title:"Peanut-Free Bakery",desc:"Strict peanut-free kitchen protocols and total ingredient transparency for complete parental peace of mind."},bonding:{title:"Family Bonding",desc:"Screen-free activities designed for grandparents, parents, and toddlers to create memories together around the table."},transparency:{title:"Artisan Quality",desc:"Premium porous bisque pottery and wholesome organic baking crafted to be treasured for years to come."}}},featured:{eyebrow:"Featured Creations",title:"Family Favorites"},cta:{eyebrow:"Start Creating Today",title:"Ready to Create Unforgettable Moments?",subtitle:"Pick a ceramic craft kit or build a personalized treat box delivered with love.",buttonColors:"View Ceramic Kits",buttonMoments:"Personalize Keepsake"},studios:{eyebrow:"Live Interactive Experiences",title:"Unleash Your Creativity in Our Studio",subtitle:"Try our interactive online simulators before you order: paint ceramics virtually, build your own treat box, or preview custom engravings in real-time."},values:{eyebrow:"Our Core Values",title:"Why Families Trust Elamel",card1Title:"Absolute Purity & Safety",card1Desc:"All mineral glazes and paints comply strictly with European EN71-3 and ASTM D-4236 standards, 100% free of lead, cadmium, and harmful VOCs.",card2Title:"Natural & Honest Ingredients",card2Desc:"Our bakery recipes use pure European butter, pasture-raised organic eggs, and unbleached flour without artificial preservatives or dyes.",card3Title:"Universal Inclusive Design",card3Desc:"Every kit features easy-grip handles and visual guides, making it easy for both grandparents and toddlers to create art without frustration."}},Pp={title:"Elamel Colors • Ceramic Painting Kits",subtitle:"Discover unglazed bisque ceramics, vibrant pastel mineral glazes, artist brushes, and step-by-step guides for creators of all ages.",highlights:{nonToxic:"100% Non-Toxic Glazes",foodSafe:"Food-Safe After Oven Cure",easyCure:"Easy Home Oven Cure (150°C)"}},Ep={title:"Elamel Colors • Ceramic Painting Kits",subtitle:"Discover unglazed bisque ceramics, vibrant pastel mineral glazes, artist brushes, and step-by-step guides for creators of all ages.",filterAll:"All Kits",filterTableware:"Tableware & Dining",filterVases:"Vases & Home Decor",filterKids:"Kids & Animals",filterSets:"Gift Sets",studioBannerTitle:"Live Ceramic Glaze Simulator",studioBannerText:"Select a pottery piece, brush your favorite colors, and toggle the glossy kiln reflection before painting at home!"},Mp={title:"Elamel Goodies • Artisanal Family Bakery",subtitle:"Aromatic cakes, decorated sugar cookies, and wholesome honey biscuits baked fresh daily in our dedicated nut-free kitchen.",highlights:{peanutFree:"Peanut-Free Bakery Kitchen",glutenFree:"Gluten-Free Options Available",natural:"100% Natural Ingredients"}},Tp={title:"Elamel Goodies • Artisanal Family Bakery",subtitle:"Aromatic cakes, decorated sugar cookies, and wholesome honey biscuits baked fresh daily in our dedicated nut-free kitchen.",filterAll:"All Goodies",filterCakes:"Family Cakes",filterCookies:"Cookies & Biscuits",filterOccasions:"Celebrations & Boxes",boxBuilderBannerTitle:"Build Your Custom Treat Box",boxBuilderBannerText:"Choose 4 or 6 artisan treats, monitor dietary tags in real time, and receive them in a presentation gift box."},Ap={title:"Moments & Souvenirs • Custom Keepsakes",subtitle:"Heartfelt gifts and commemorative ceramic pieces personalized with your family names, dates, and special dedications."},Dp={title:"Moments & Souvenirs • Custom Keepsakes",subtitle:"Heartfelt gifts and commemorative ceramic pieces personalized with your family names, dates, and special dedications.",filterAll:"All Keepsakes",filterHeirloom:"Heirloom Tableware",filterCouples:"Couples & Anniversaries",filterOrnaments:"Holiday Ornaments",personalisationBannerTitle:"Live Engraving & Lettering Studio",personalisationBannerText:"Type your family name, choose your color theme, and preview your custom plate or mug in real time."},_p={title:"Ceramic Painting & Glaze Studio",subtitle:"Test color palettes and simulate the glossy oven-fired finish before ordering your physical craft kit.",selectModel:"1. Select Ceramic Pottery Piece:",models:{plate:"Botanical Dinner Plate",mug:"Cozy Morning Mug",vase:"Spring Bloom Vase",bunny:"Curious Bunny Figurine"},selectColor:"2. Choose Mineral Glaze Color:",colors:{rose:"Soft Petal Rose",coral:"Sunset Coral",sunshine:"Warm Sunshine Yellow",sage:"Soft Sage Green",teal:"Deep Sea Teal",lavender:"Wild Lavender",terracotta:"Warm Terracotta",cream:"Natural Vanilla Cream"},brushSize:"Brush Thickness:",actions:{clearCanvas:"Clear Surface",toggleGloss:"Simulate Oven Gloss",saveArtwork:"Download Artwork",addToKit:"Order Kit with These Colors"},ovenSimulationNote:"Glaze simulation replicates the glossy vitreous sheen obtained after baking in your home oven at 150°C (300°F)."},Lp={title:"Custom Treat Box Builder",subtitle:"Create the ideal assortment for family teatime or a heartfelt gift for someone special.",step1:"1. Choose Your Box Size:",box4:"Family Sampler (4 Items)",box4Desc:"Perfect for a cozy afternoon treat or for kids.",box6:"Celebration Box (6 Items)",box6Desc:"Ideal for sharing during family gatherings and birthdays.",step2:"2. Select Your Favorite Treats:",slotsLabel:"Filled Slots in Box:",emptySlot:"Empty Slot — Click a treat below to add",remove:"Remove",dietarySummary:"Box Allergen Summary:",boxFull:"Box Complete! Ready to Order",boxIncomplete:"Add {remaining} more treat(s) to complete the box",orderBox:"Add Box to Bag (€{price})"},Bp={title:"Live Personalisation Studio",subtitle:"Preview how your custom hand-lettered dedication will look before ordering.",familyName:"Family Surname / Name:",familyPlaceholder:"e.g., The Miller Family",estYear:"Established / Wedding Year:",yearPlaceholder:"e.g., 2018",members:"Family Members' Names (comma-separated):",membersPlaceholder:"e.g., Sarah, David, Leo, Emma",dedication:"Special Message or Dedication:",dedicationPlaceholder:"e.g., Where life begins and love never ends.",themeColor:"Base Glaze Shade:",giftWrap:"Include Handcrafted Solid Wood Gift Box (+€6.00)",previewLabel:"Handcrafted Piece Live Preview:",orderPersonalised:"Order Custom Piece (€{price})"},Ip={title:"Your Shopping Bag",empty:"Your shopping bag is empty.",emptySubtitle:"Explore our craft color kits, fresh bakery goods, and family keepsakes to get started!",itemsCount:"{count} item(s) selected",subtotal:"Subtotal",shipping:"Shipping Fee",shippingFree:"Free",shippingCalculated:"€4.50 (Free over €45)",total:"Order Total",checkoutButton:"Complete Reservation Request",inquiryNotice:"Elamel operates with artisan care and personalized reservations. When you submit, our studio team will contact you directly to confirm delivery dates or studio pick-up.",form:{fullName:"Full Name",email:"Email Address",phone:"Phone Number",address:"Delivery Address (or studio pickup)",deliveryDate:"Desired Date for Delivery / Celebration",notes:"Additional Notes or Dietary Requirements",submit:"Submit Family Reservation Order",successTitle:"Order Submitted Successfully!",successMessage:"Thank you for your order! Our team will contact you via email or phone within 24 hours to confirm all details."}},Rp={story:{eyebrow:"Our Essence",title:"Painting Colors, Baking Joy, Celebrating Families"},heroTitle:"Painting Colors, Baking Joy, Celebrating Families",heroLead:"elamel was born around a simple kitchen table with the heartfelt belief that the most precious memories happen when hands create art and families gather around wholesome treats.",studioTag:"A Home for Every Generation • Pottery Studio & Bakery Under One Roof",storyHeading:"Our Story: From the Kitchen Table to Your Home",storyP1:"Elamel was born from the meeting of a passion for traditional ceramic craft and the love of wholesome bakery treats. We realized that families were missing engaging screen-free activities that brought kids, parents, and grandparents together.",storyP2:"We decided to craft smooth bisque pottery with certified non-toxic glazes that anyone can paint at home, paired with artisanal bakery treats that evoke childhood joy.",values:{eyebrow:"Our Core Values",title:"The Four Pillars of the Elamel Experience",subtitle:"Everything we craft is guided by love, safety, and the celebration of family bonds.",safety:{title:"Purity & Non-Toxicity",desc:"100% lead-free mineral glazes and a strictly peanut-free bakery kitchen for complete peace of mind."},artisan:{title:"Artistry & Dedication",desc:"Velvety bisque pottery and pure butter recipes prepared with passion and meticulous detail."},inclusivity:{title:"Intergenerational Design",desc:"Ergonomic brushes and shapes crafted for little hands and grandparents to share moments effortlessly."},joy:{title:"Cherished Moments",desc:"Objects and flavors that transform an afternoon at home into a treasured family memory to keep forever."}},safetyHeading:"Unwavering Commitment to Safety & Allergens",safetyLead:"Parental peace of mind is our highest priority. Every detail of production is designed for child safety.",safetyPoint1Title:"100% Lead-Free & Cadmium-Free Glazes",safetyPoint1Desc:"Certified under the strictest European toy safety and food contact directives.",safetyPoint2Title:"Dedicated Peanut-Free Bakery Facility",safetyPoint2Desc:"Our kitchen operates under strict segregation protocols to eliminate allergen cross-contamination.",safetyPoint3Title:"Intergenerational Ergonomics",safetyPoint3Desc:"Mugs and tableware molded with comfortable grips for both toddlers and elderly hands.",workshops:{eyebrow:"Studio Experiences",title:"In-Person Workshops & Family Afternoons",subtitle:"Visit our welcoming space in Porto to paint pottery together and taste pastries fresh from the oven.",spotsLeft:"{count} spots left",inquireAction:"Book Workshop"},workshopsTitle:"In-Person Workshops & Family Events",workshopsSubtitle:"Come visit our studio and participate in family pottery painting and pastry tasting sessions.",bookWorkshop:"Register for Workshop"},Op={title:"Get in Touch • Direct Contact",subtitle:"Have questions about our ceramic craft kits, custom bakery orders, or private events? We are here to help.",addressTitle:"Our Studio & Kitchen",addressValue:"Rua das Flores Criativas, 128, 4000-064 Porto, Portugal",phoneTitle:"Phone & WhatsApp Support",phoneValue:"+351 220 123 456 / +351 912 345 678",emailTitle:"Email Inquiries",emailValue:"hello@elamel-family.com / orders@elamel-family.com",hoursTitle:"Opening Hours",hoursValue:"Tuesday to Saturday: 09:30 – 18:30 • Sunday: 10:00 – 16:00 (Monday: Closed)",form:{title:"Send Us a Direct Message",name:"Your Full Name",email:"Email Address",phone:"Phone Number",interest:"Area of Interest",eventDate:"Event / Delivery Date",message:"Message or Special Request",send:"Send Message",thankYou:"Message sent successfully! We will get in touch shortly."},formTitle:"Send Us a Direct Message",name:"Your Name",email:"Your Email",subject:"Subject",message:"Your Message",send:"Send Message",sentSuccess:"Message sent successfully! We will reply very soon."},qp={title:"Accessibility & Universal Inclusion",subtitle:"Formal commitment to WCAG 2.2 Level AA standards so every visitor can explore without barriers.",controlsTitle:"Quick Display Controls",textSize:"Text Size",textSizeNormal:"Normal (100%)",textSizeLarge:"Large (125%)",textSizeXLarge:"Extra Large (150%)",contrast:"High Contrast Mode",contrastHelp:"Enhances text sharpness and color distinction for easier reading.",motion:"Reduce Animations",motionHelp:"Suppresses dynamic transitions for visitors with vestibular sensitivities.",complianceTitle:"WCAG 2.2 AA Compliance Statement",complianceText:"This website is designed and tested to comply with Web Content Accessibility Guidelines (WCAG 2.2 AA), ensuring full keyboard navigation, screen reader compatibility (NVDA, VoiceOver, JAWS), and structured semantic hierarchy."},$p={newsletterTitle:"Join the Elamel Family Club",newsletterSubtitle:"Be the first to hear about new craft kits, seasonal bakery treats, and family workshop invitations.",newsletterPlaceholder:"Enter your email address...",subscribe:"Subscribe",privacyNotice:"We respect your privacy. No spam or third-party data sharing.",rights:"All rights reserved. elamel — Paint • Create • Enjoy.",links:{privacy:"Privacy Policy & Data",terms:"General Terms of Service",accessibility:"Accessibility Statement",sitemap:"Website Sitemap"}},Wp={lang:kp,name:Cp,brand:Np,nav:Fp,common:Sp,home:zp,colors:Pp,colorsPage:Ep,goodies:Mp,goodiesPage:Tp,moments:Ap,momentsPage:Dp,glazeStudio:_p,treatBox:Lp,personalisation:Bp,cart:Ip,about:Rp,contact:Op,accessibility:qp,footer:$p},gd={pt:jp,en:Wp},zd=L.createContext(void 0),vd="elamel_language_preference",Hp=({children:u})=>{const[d,l]=L.useState(()=>{try{const z=localStorage.getItem(vd);if(z==="pt"||z==="en")return z}catch{}return"pt"}),v=z=>{l(z);try{localStorage.setItem(vd,z),document.documentElement.lang=z==="pt"?"pt-PT":"en"}catch{}};L.useEffect(()=>{document.documentElement.lang=d==="pt"?"pt-PT":"en"},[d]);const h=(z,k)=>{const T=z.split(".");let P=gd[d];for(const C of T)if(P&&typeof P=="object"&&C in P)P=P[C];else{let A=gd.pt;for(const E of T)if(A&&typeof A=="object"&&E in A)A=A[E];else{A=null;break}P=A!==null?A:z;break}if(typeof P!="string")return z;let M=P;return k&&Object.entries(k).forEach(([C,A])=>{M=M.replace(new RegExp(`\\{${C}\\}`,"g"),String(A))}),M},x=z=>new Intl.NumberFormat(d==="pt"?"pt-PT":"en-GB",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(z),b=z=>new Intl.NumberFormat(d==="pt"?"pt-PT":"en-GB").format(z);return a.jsx(zd.Provider,{value:{locale:d,setLocale:v,t:h,formatCurrency:x,formatNumber:b,isPt:d==="pt"},children:u})},Me=()=>{const u=L.useContext(zd);if(!u)throw new Error("useI18n must be used within an I18nProvider");return u};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=(...u)=>u.filter((d,l,v)=>!!d&&d.trim()!==""&&v.indexOf(d)===l).join(" ").trim();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,l,v)=>v?v.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=u=>{const d=Gp(u);return d.charAt(0).toUpperCase()+d.slice(1)};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=u=>{for(const d in u)if(d.startsWith("aria-")||d==="role"||d==="title")return!0;return!1},Kp=L.createContext({}),Qp=()=>L.useContext(Kp),Yp=L.forwardRef(({color:u,size:d,strokeWidth:l,absoluteStrokeWidth:v,className:h="",children:x,iconNode:b,...z},k)=>{const{size:T=24,strokeWidth:P=2,absoluteStrokeWidth:M=!1,color:C="currentColor",className:A=""}=Qp()??{},E=v??M?Number(l??P)*24/Number(d??T):l??P;return L.createElement("svg",{ref:k,...pn,width:d??T??pn.width,height:d??T??pn.height,stroke:u??C,strokeWidth:E,className:Pd("lucide",A,h),...!x&&!Up(z)&&{"aria-hidden":"true"},...z},[...b.map(([F,S])=>L.createElement(F,S)),...Array.isArray(x)?x:[x]])});/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(u,d)=>{const l=L.forwardRef(({className:v,...h},x)=>L.createElement(Yp,{ref:x,iconNode:d,className:Pd(`lucide-${Vp(xd(u))}`,`lucide-${u}`,v),...h}));return l.displayName=xd(u),l};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Jp=Z("arrow-down",Xp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],us=Z("arrow-right",Zp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],rf=Z("award",ef);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],fn=Z("cake",af);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],of=Z("calendar",tf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ir=Z("check",sf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lf=Z("chevron-down",nf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],df=Z("chevron-left",cf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gs=Z("chevron-right",uf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],pf=Z("chevron-up",mf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Ge=Z("circle-check",ff);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Ed=Z("clock",hf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],vf=Z("external-link",gf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],st=Z("eye",xf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bf=Z("face-slightly-smiling",yf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],jf=Z("file-text",wf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Cf=Z("funnel",kf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],hn=Z("gift",Nf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Sf=Z("globe",Ff);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],ms=Z("heart-handshake",zf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],kr=Z("heart",Pf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],gn=Z("house",Ef);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],bn=Z("info",Mf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Af=Z("keyboard",Tf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_f=Z("lock",Df);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wn=Z("mail",Lf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],jn=Z("map-pin",Bf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Rf=Z("menu",If);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],qf=Z("message-square",Of);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"M5 12h14",key:"1ays0h"}]],Md=Z("minus",$f);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Hf=Z("network",Wf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ga=Z("palette",Vf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Uf=Z("pause",Gf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Td=Z("phone",Kf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Yf=Z("play",Qf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ea=Z("plus",Xf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Zf=Z("refresh-cw",Jf);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],rh=Z("rotate-ccw",eh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],th=Z("scale",ah);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ma=Z("search",oh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ad=Z("send",sh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ue=Z("shield-check",ih);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],yd=Z("shield",nh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],ps=Z("shopping-bag",lh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],dh=Z("sliders-vertical",ch);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Fe=Z("sparkles",uh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],it=Z("star",mh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],fh=Z("tag",ph);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Dd=Z("trash-2",hh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fs=Z("triangle-alert",gh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],_d=Z("type",vh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ld=Z("users",xh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],bh=Z("volume-2",yh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ta=Z("x",wh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Bd=Z("zap",jh),kh=({onOpenSearch:u,onOpenAccessibility:d})=>{const{currentPath:l,navigate:v}=Cr(),{totalItemsCount:h,openCart:x}=Aa(),{locale:b,setLocale:z,t:k}=Me(),[T,P]=L.useState(!1),M=[{label:k("nav.home"),path:"/"},{label:k("nav.colors"),path:"/colors"},{label:k("nav.goodies"),path:"/goodies"},{label:k("nav.moments"),path:"/moments-souvenirs"},{label:k("nav.about"),path:"/about"},{label:k("nav.contact"),path:"/contact"}],C=A=>{v(A),P(!1)};return a.jsxs("header",{className:"site-header",children:[a.jsx("div",{className:"top-ribbon",role:"region","aria-label":"Brand Announcement",children:a.jsxs("div",{className:"container top-ribbon-content",children:[a.jsxs("span",{className:"top-ribbon-text",children:[a.jsx(Fe,{size:14,className:"icon-pulse"}),b==="pt"?a.jsxs(a.Fragment,{children:["Bem-vindo à ",a.jsx("strong",{children:"elamel"})," • Kits de cerâmica seguros, pastelaria de família e lembranças personalizadas"]}):a.jsxs(a.Fragment,{children:["Welcome to ",a.jsx("strong",{children:"elamel"})," • Safe ceramic kits, family bakery goodies & treasured keepsakes"]})]}),a.jsxs("div",{className:"top-ribbon-links",children:[a.jsx("button",{onClick:()=>C("/accessibility"),className:"top-ribbon-btn","aria-label":"Accessibility statement and controls",children:k("nav.accessibility")}),a.jsx("span",{className:"top-ribbon-divider","aria-hidden":"true",children:"•"}),a.jsx("button",{onClick:()=>C("/contact"),className:"top-ribbon-btn",children:k("nav.contact")})]})]})}),a.jsx("div",{className:"navbar-container",children:a.jsxs("div",{className:"container navbar-inner",children:[a.jsx("a",{href:"#/",onClick:A=>{A.preventDefault(),C("/")},className:"navbar-brand","aria-label":"Elamel Home - Return to main page",children:a.jsx("img",{src:"./logowith-text.png",alt:"elamel Colors - Pinte • Crie • Desfrute logo",className:"navbar-logo-img"})}),a.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:a.jsx("ul",{className:"nav-list",children:M.map(A=>{const E=A.path==="/"?l==="/":l.startsWith(A.path);return a.jsx("li",{className:"nav-item",children:a.jsxs("button",{onClick:()=>C(A.path),className:`nav-link ${E?"active":""}`,"aria-current":E?"page":void 0,children:[A.label,E&&a.jsx("span",{className:"active-dot","aria-hidden":"true"})]})},A.path)})})}),a.jsxs("div",{className:"navbar-utilities",children:[a.jsxs("div",{className:"lang-switcher-pill",role:"group","aria-label":"Language Selector",children:[a.jsx("button",{onClick:()=>z("pt"),className:`lang-btn ${b==="pt"?"active":""}`,"aria-pressed":b==="pt",title:"Português de Portugal (Pré-Acordo Ortográfico)",children:"🇵🇹 PT"}),a.jsx("span",{className:"lang-divider","aria-hidden":"true",children:"|"}),a.jsx("button",{onClick:()=>z("en"),className:`lang-btn ${b==="en"?"active":""}`,"aria-pressed":b==="en",title:"English",children:"🇬🇧 EN"})]}),a.jsx("button",{onClick:u,className:"btn-icon",title:k("common.searchPlaceholder"),"aria-label":k("nav.search"),children:a.jsx(Ma,{size:19})}),a.jsx("button",{onClick:d,className:"btn-icon",title:k("accessibility.controlsTitle"),"aria-label":k("nav.accessibility"),children:a.jsx(dh,{size:19})}),a.jsxs("button",{onClick:x,className:"btn-cart-trigger",title:k("cart.title"),"aria-label":`${k("cart.title")}, ${h} ${k("common.reviews")}`,children:[a.jsx(ps,{size:20}),a.jsx("span",{className:"cart-label",children:b==="pt"?"Cesto":"Treat Box"}),h>0&&a.jsx("span",{className:"cart-badge","aria-hidden":"true",children:h})]}),a.jsx("button",{onClick:()=>P(!T),className:"btn-icon mobile-menu-toggle","aria-label":k(T?"nav.closeMenu":"nav.menu"),"aria-expanded":T,children:T?a.jsx(Ta,{size:22}):a.jsx(Rf,{size:22})})]})]})}),T&&a.jsxs("div",{className:"mobile-nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[a.jsx("div",{className:"mobile-nav-backdrop",onClick:()=>P(!1)}),a.jsxs("div",{className:"mobile-nav-panel",children:[a.jsxs("div",{className:"mobile-nav-header",children:[a.jsx("img",{src:"./logowith-text.png",alt:"elamel",className:"mobile-nav-logo"}),a.jsx("button",{onClick:()=>P(!1),className:"btn-icon","aria-label":k("nav.closeMenu"),children:a.jsx(Ta,{size:20})})]}),a.jsxs("div",{className:"mobile-lang-row",children:[a.jsxs("span",{className:"mobile-lang-title",children:[a.jsx(Sf,{size:16})," ",b==="pt"?"Idioma":"Language",":"]}),a.jsxs("div",{className:"lang-switcher-pill",children:[a.jsx("button",{onClick:()=>z("pt"),className:`lang-btn ${b==="pt"?"active":""}`,children:"🇵🇹 Português"}),a.jsx("span",{className:"lang-divider","aria-hidden":"true",children:"|"}),a.jsx("button",{onClick:()=>z("en"),className:`lang-btn ${b==="en"?"active":""}`,children:"🇬🇧 English"})]})]}),a.jsx("nav",{className:"mobile-nav-links",children:a.jsx("ul",{children:M.map(A=>{const E=A.path==="/"?l==="/":l.startsWith(A.path);return a.jsx("li",{children:a.jsx("button",{onClick:()=>C(A.path),className:`mobile-nav-item ${E?"active":""}`,children:A.label})},A.path)})})}),a.jsxs("div",{className:"mobile-nav-footer",children:[a.jsxs("button",{onClick:()=>{P(!1),u()},className:"btn btn-secondary btn-full",children:[a.jsx(Ma,{size:18})," ",k("nav.search")]}),a.jsxs("button",{onClick:()=>{P(!1),x()},className:"btn btn-primary btn-full",children:[a.jsx(ps,{size:18})," ",k("cart.title")," (",h,")"]})]})]})]}),a.jsx("style",{children:`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border-light);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }
        .top-ribbon {
          background: var(--gradient-rainbow-subtle);
          border-bottom: 1px solid var(--color-border-light);
          font-size: 0.8125rem;
          padding: 0.35rem 0;
          color: var(--color-text-muted);
        }
        .top-ribbon-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .top-ribbon-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .top-ribbon-links {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .top-ribbon-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          cursor: pointer;
          font-family: inherit;
        }
        .top-ribbon-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .top-ribbon-divider {
          color: var(--color-border);
        }
        .navbar-container {
          padding: 0.75rem 0;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .navbar-logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }
        .navbar-brand:hover .navbar-logo-img {
          transform: scale(1.03);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
        }
        .nav-link {
          background: transparent;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-light);
        }
        .nav-link.active {
          color: var(--color-primary);
          font-weight: 700;
        }
        .active-dot {
          position: absolute;
          bottom: 2px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-primary);
        }
        .navbar-utilities {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .lang-switcher-pill {
          display: inline-flex;
          align-items: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.2rem 0.45rem;
          gap: 0.35rem;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .lang-btn {
          background: none;
          border: none;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 0.2rem 0.45rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          font-family: var(--font-heading);
        }
        .lang-btn:hover {
          color: var(--color-primary);
        }
        .lang-btn.active {
          background: var(--color-primary);
          color: #FFFFFF;
        }
        .lang-divider {
          color: var(--color-border);
          font-size: 0.75rem;
        }
        .btn-cart-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-primary);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9375rem;
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          position: relative;
          box-shadow: 0 3px 10px rgba(225, 40, 91, 0.25);
          transition: all var(--transition-fast);
        }
        .btn-cart-trigger:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
        }
        .cart-badge {
          background: var(--color-amber);
          color: var(--color-text-main);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          margin-left: 0.2rem;
        }
        .mobile-menu-toggle {
          display: none;
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
        }
        .mobile-nav-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
        }
        .mobile-nav-panel {
          position: relative;
          width: 85%;
          max-width: 340px;
          background: #FFFFFF;
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-nav-logo {
          height: 42px;
        }
        .mobile-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-lang-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .mobile-nav-links {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 0;
        }
        .mobile-nav-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav-item {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 0.85rem 1rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .mobile-nav-item:hover, .mobile-nav-item.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-nav-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
        }
        .btn-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: inline-flex;
          }
          .cart-label {
            display: none;
          }
        }
      `})]})},Ch=()=>{const{navigate:u}=Cr(),{addToast:d}=hs(),{t:l,locale:v}=Me(),[h,x]=L.useState(""),[b,z]=L.useState(!1),k=T=>{if(T.preventDefault(),!h||!h.includes("@")){d(v==="pt"?"Endereço Inválido":"Please enter a valid email",v==="pt"?"Por favor insira um correio electrónico válido.":"We need a valid email to send our family craft guides.","dietary");return}z(!0),d(v==="pt"?"Bem-vindo ao Clube Familiar!":"Welcome to the Family Club!",v==="pt"?"Subscrição confirmada com sucesso. Receberá em breve as nossas novidades.":"Thank you! You will receive free weekend craft stencils & seasonal treat recipes.","success")};return a.jsxs("footer",{className:"site-footer",role:"contentinfo","aria-label":"Site Footer",children:[a.jsx("div",{className:"footer-newsletter-banner",children:a.jsxs("div",{className:"container newsletter-inner",children:[a.jsxs("div",{className:"newsletter-text",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",l("footer.newsletterTitle")]}),a.jsx("h3",{className:"newsletter-heading",children:l("footer.newsletterSubtitle")}),a.jsx("p",{className:"newsletter-sub",children:l("footer.privacyNotice")})]}),a.jsx("div",{className:"newsletter-form-wrap",children:b?a.jsxs("div",{className:"newsletter-success",children:[a.jsx(Ge,{size:24,color:"#10B981"}),a.jsxs("div",{children:[a.jsx("strong",{children:v==="pt"?"Já faz parte do clube!":"You're part of the club!"}),a.jsx("p",{children:v==="pt"?"Consulte a sua caixa de correio para descarregar o guia de boas-vindas.":"Check your inbox for our welcome bundle of printable family stencils."})]})]}):a.jsxs("form",{onSubmit:k,className:"newsletter-form",children:[a.jsx("input",{type:"email",value:h,onChange:T=>x(T.target.value),placeholder:l("footer.newsletterPlaceholder"),className:"newsletter-input","aria-label":"Email address for family newsletter",required:!0}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:l("footer.subscribe")})]})})]})}),a.jsxs("div",{className:"container footer-main",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-col footer-brand-col",children:[a.jsx("a",{href:"#/",onClick:T=>{T.preventDefault(),u("/")},className:"footer-logo-link","aria-label":"Elamel Home",children:a.jsx("img",{src:"./logowith-text.png",alt:"elamel",className:"footer-logo-img"})}),a.jsxs("p",{className:"footer-tagline",children:["Pinte • Crie • Desfrute",a.jsx("br",{}),l("brand.description")]}),a.jsxs("div",{className:"safety-badge",children:[a.jsx(Ue,{size:18,color:"#10B981"}),a.jsx("span",{children:v==="pt"?"100% Não-Tóxico & Pastelaria Isenta de Amendoins":"100% Non-Toxic & Dedicated Peanut-Free Bakery"})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{className:"footer-col-title",children:v==="pt"?"As Nossas Criações":"Our Offerings"}),a.jsxs("ul",{className:"footer-nav-list",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/colors"),className:"footer-link",children:l("brand.subbrands.colors")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/goodies"),className:"footer-link",children:l("brand.subbrands.goodies")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/moments-souvenirs"),className:"footer-link",children:l("brand.subbrands.moments")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/colors"),className:"footer-link",children:v==="pt"?"Kits para Crianças e Famílias":"Kids & Family Kits"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/goodies"),className:"footer-link",children:v==="pt"?"Caixas de Iguarias Sortidas":"Treat Box Assortments"})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{className:"footer-col-title",children:v==="pt"?"Sobre & Ajuda":"About & Help"}),a.jsxs("ul",{className:"footer-nav-list",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/about"),className:"footer-link",children:l("nav.about")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/contact"),className:"footer-link",children:l("nav.contact")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/search"),className:"footer-link",children:l("nav.search")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/accessibility"),className:"footer-link",children:l("footer.links.accessibility")})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>u("/sitemap"),className:"footer-link",children:l("footer.links.sitemap")})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{className:"footer-col-title",children:l("contact.addressTitle")}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(jn,{size:18,className:"footer-contact-icon"}),a.jsx("span",{children:l("contact.addressValue")})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(Td,{size:18,className:"footer-contact-icon"}),a.jsx("span",{children:l("contact.phoneValue")})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(wn,{size:18,className:"footer-contact-icon"}),a.jsx("span",{children:l("contact.emailValue")})]}),a.jsxs("div",{className:"footer-hours",children:[a.jsxs("strong",{children:[l("contact.hoursTitle"),":"]}),a.jsx("br",{}),a.jsx("span",{children:l("contact.hoursValue")})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," ",a.jsx("strong",{children:"elamel"}),". ",l("footer.rights")," Made with"," ",a.jsx(kr,{size:14,color:"#E1285B",style:{display:"inline",verticalAlign:"middle"}})," ",v==="pt"?"para todas as famílias.":"for families everywhere."]}),a.jsxs("div",{className:"footer-legal-links",children:[a.jsx("button",{onClick:()=>u("/privacy"),className:"footer-legal-btn",children:l("footer.links.privacy")}),a.jsx("span",{"aria-hidden":"true",children:"•"}),a.jsx("button",{onClick:()=>u("/terms"),className:"footer-legal-btn",children:l("footer.links.terms")}),a.jsx("span",{"aria-hidden":"true",children:"•"}),a.jsx("button",{onClick:()=>u("/accessibility"),className:"footer-legal-btn",children:l("footer.links.accessibility")}),a.jsx("span",{"aria-hidden":"true",children:"•"}),a.jsx("button",{onClick:()=>u("/sitemap"),className:"footer-legal-btn",children:l("footer.links.sitemap")})]})]})]}),a.jsx("style",{children:`
        .site-footer {
          background: #201C1D;
          color: #E2DEDF;
          font-family: var(--font-body);
        }
        .footer-newsletter-banner {
          background: linear-gradient(135deg, rgba(225, 40, 91, 0.15) 0%, rgba(254, 209, 65, 0.1) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3rem 0;
        }
        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .newsletter-text {
          max-width: 540px;
        }
        .newsletter-heading {
          font-family: var(--font-heading);
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0.5rem 0 0.4rem 0;
        }
        .newsletter-sub {
          color: #A0989A;
          font-size: 0.9375rem;
          margin: 0;
        }
        .newsletter-form-wrap {
          flex: 1;
          min-width: 280px;
          max-width: 480px;
        }
        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }
        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: var(--radius-full);
          padding: 0.75rem 1.25rem;
          color: #FFFFFF;
          font-family: inherit;
          font-size: 0.9375rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .newsletter-input:focus {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.12);
        }
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 0.75rem 1.25rem;
          color: #FFFFFF;
          font-size: 0.875rem;
        }
        .footer-main {
          padding: 4rem 1.5rem 2rem 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-logo-img {
          height: 48px;
          filter: brightness(0) invert(1);
          margin-bottom: 1rem;
        }
        .footer-tagline {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #A0989A;
          margin-bottom: 1.5rem;
        }
        .safety-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #34D399;
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-full);
        }
        .footer-col-title {
          font-family: var(--font-heading);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-link {
          background: none;
          border: none;
          color: #A0989A;
          font-family: inherit;
          font-size: 0.9375rem;
          cursor: pointer;
          padding: 0;
          text-align: left;
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.875rem;
          color: #A0989A;
          margin-bottom: 0.65rem;
          line-height: 1.4;
        }
        .footer-contact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .footer-hours {
          margin-top: 1rem;
          font-size: 0.8125rem;
          color: #A0989A;
          line-height: 1.5;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.875rem;
          color: #80787A;
          flex-wrap: wrap;
        }
        .copyright-text {
          margin: 0;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-legal-btn {
          background: none;
          border: none;
          color: #80787A;
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color var(--transition-fast);
        }
        .footer-legal-btn:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
          .newsletter-form {
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})},Nh=[{id:"color-1",name:"Family Gathering Dinner Plate Kit",category:"colors",subcategory:"Tableware Colors",price:34.5,description:"A smooth, food-safe porcelain dinner plate with 8 vibrant non-toxic pastel glazes and artist brushes.",longDescription:"Bring the entire family together for a heartwarming craft session! This kit includes a premium unglazed bisque porcelain dinner plate with an embossed botanical rim. Once painted with our specialized non-toxic, lead-free glazes, the plate can be oven-cured at home or clear-glazed to become a daily family treasure.",image:"./images/product_plate_kit.jpg",rating:4.9,reviewCount:42,isFeatured:!0,tags:["Family Favorite","Food-Safe","Non-Toxic","Beginner Friendly"],dimensions:"27 cm diameter × 2.8 cm depth",materials:["Unglazed white bisque porcelain","8× 20ml water-based mineral glazes","3 synthetic fine-tip brushes","Natural sea sponge","Stencil booklet"],careInstructions:["Hand wash with mild soap recommended for painted surfaces","Food-safe when cured according to included simple baking guide","Avoid abrasive scouring pads to maintain vibrant color sheen"],safetyInfo:"100% Non-toxic, lead-free, and cadmium-free glazes. Conforms to EN71-3 and ASTM D-4236 standards.",recommendedAge:"Ages 4 and above (with adult supervision for young artists)",familyMomentTip:"Each family member can paint one flower petal or sign their name along the plate rim during Sunday brunch!",glazeCount:8,brushCount:3,difficulty:"Beginner"},{id:"color-2",name:"Cozy Morning Ceramic Mug Duo Kit",category:"colors",subcategory:"Gift Sets",price:29,description:"Set of two handcrafted ceramic mugs with warm pastel paints, perfect for couples and parent-child duos.",longDescription:"Design your own signature morning coffee or hot chocolate mugs! Handcrafted from natural stoneware, these mugs feature smooth ergonomic handles that fit comfortably in both adult and children hands. Comes with 6 rainbow-inspired mixable colors.",image:"./images/ceramic_kits.jpg",rating:4.8,reviewCount:38,isFeatured:!0,tags:["Gift Set","Couples & Duos","Dishwasher Safe","Non-Toxic"],dimensions:"10 cm height × 8.5 cm diameter (350ml capacity)",materials:["2× Handcrafted stoneware mugs","6× 25ml creamy ceramic glazes","2 ergonomic detail brushes","Palette mixing tray"],careInstructions:["Top-rack dishwasher safe after full oven cure","Microwave safe for hot cocoa and herbal teas","Handle with care when hot"],safetyInfo:"Non-toxic, hypoallergenic water-based formulation. Safe for all beverage contact.",recommendedAge:"All ages (safe for toddlers to make finger-paint handprints)",familyMomentTip:"Create matching morning mugs with sweet hidden messages at the bottom of the cup!",glazeCount:6,brushCount:2,difficulty:"All Ages"},{id:"color-3",name:"Spring Blossom Pastel Vase Kit",category:"colors",subcategory:"Decorative Pieces",price:38,description:"An elegant ribbed ceramic flower vase with gentle pastel glaze paints, golden accent paste, and sponges.",longDescription:"Turn fresh garden flowers into a centerpiece masterpiece. This sculptural ceramic vase has subtle grooved ridges that guide paint blending, making it easy to achieve soft ombre gradients and floral motifs.",image:"./images/ceramic_kits.jpg",rating:4.9,reviewCount:29,isFeatured:!1,tags:["Decorative","Ombre Blending","Home Decor","Gift Ready"],dimensions:"18 cm height × 11 cm diameter",materials:["Ribbed white bisque vase","6 pastel mineral glazes","Metallic gold ceramic accent paste","Foam blending dabbers","Design template sheet"],careInstructions:["Wipe clean with a damp microfiber cloth","Holds fresh water safely after oven curing","Not intended for dishwasher use"],safetyInfo:"Certified child-safe and non-toxic materials. Contains no harsh solvents or odors.",recommendedAge:"Ages 6 and above",familyMomentTip:"Paint this vase with wildflowers picked on your family Sunday countryside walk.",glazeCount:6,brushCount:2,difficulty:"Intermediate"},{id:"color-4",name:"Woodland Animal Friends Bisque Set",category:"colors",subcategory:"Kids & Animals",price:26.5,description:"Adorable bisque pottery animal figures (bunny, turtle, bear) with washable child-safe vibrant paints.",longDescription:"Designed specifically for younger children, this set features 3 smooth, sturdy bisque animal figurines with rounded edges and easy-grip surfaces. Includes vibrant washable paints and chunky sponge brushes.",image:"./images/hero_family.jpg",rating:5,reviewCount:56,isFeatured:!0,tags:["Best for Toddlers","Chunky Brushes","Washable","Safe Fun"],dimensions:"Approx 8 cm height each (3 figures)",materials:["3 smooth bisque animal figures (Bear, Bunny, Turtle)","6 vibrant washable color pots","2 chunky soft grip brushes","Mess-free craft mat"],careInstructions:["Can be wiped clean or sealed with child-safe clear craft glaze","Keep indoors away from harsh outdoor frost"],safetyInfo:"Meets highest European EN71 safety standards for toddler craft toys. Gluten-free, allergen-free paints.",recommendedAge:"Ages 2 to 7 (fun for parents to paint together with toddlers)",familyMomentTip:"Let your toddler pick their favorite animal and tell a bedtime story about the colored character they created!",glazeCount:6,brushCount:2,difficulty:"Easy"},{id:"color-5",name:"Tapas & Condiment Trio Bowls Kit",category:"colors",subcategory:"Tableware Colors",price:32,description:"Set of 3 nesting ceramic condiment & dipping bowls with vibrant Mediterranean-inspired color pots.",longDescription:"Ideal for family taco nights, dipping oils, snacks, and dessert toppings. Paint geometric Mediterranean patterns or bright solid pastels with our high-coverage glaze kit.",image:"./images/product_plate_kit.jpg",rating:4.7,reviewCount:22,isFeatured:!1,tags:["Tableware","Entertaining","Family Snacks","Food Safe"],dimensions:"12 cm, 10 cm, and 8 cm nesting diameters",materials:["3 bisque stoneware pinch bowls","6 Mediterranean glazes","Fine detail liner brush","Pattern stencil sheet"],careInstructions:["Dishwasher safe (top rack) once baked","Food-safe for dips, olive oils, and fruit bowls"],safetyInfo:"Food contact safe glazes certified lead and cadmium free.",recommendedAge:"Ages 5 and above",familyMomentTip:"Assign one bowl to each child to paint their favorite family snack symbol.",glazeCount:6,brushCount:2,difficulty:"Beginner"},{id:"color-6",name:"Grand Family Celebration Platter Kit",category:"colors",subcategory:"Tableware Colors",price:45,description:"Extra-large 34cm oval serving platter kit with custom lettering pens, full rainbow glaze set, and display stand.",longDescription:"Our signature family gathering platter! Large enough to fit handprints of grandparents, parents, and children, along with commemorative dates and recipes. Includes a sturdy natural wooden display easel.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:64,isFeatured:!0,tags:["Heirloom Craft","Handprint Memory","Extra Large","Display Easel Included"],dimensions:"34 cm length × 25 cm width × 3.5 cm depth",materials:["Large bisque ceramic oval platter","10 mineral rainbow glazes","Ceramic lettering marker","4 premium brushes","Solid beechwood easel stand"],careInstructions:["Gentle hand washing preserves detailed family lettering for decades","Oven cure at 150°C for 35 minutes for permanent food-safe seal"],safetyInfo:"100% non-toxic, skin-safe for pressed handprints of babies and toddlers.",recommendedAge:"All ages (intergenerational family project)",familyMomentTip:"Capture the tiny handprint of a new baby surrounded by colorful signatures of the whole family on Thanksgiving or Christmas.",glazeCount:10,brushCount:4,difficulty:"Family Project"}],Id=[{id:"color-1",name:"Kit Prato de Jantar Familiar Botânico",category:"colors",subcategory:"Loiça em Cerâmica",price:34.5,description:"Prato de jantar em faiança fina porosa, com 8 vidrados minerais não-tóxicos e pincéis de precisão.",longDescription:"Reúna toda a família para um momento artístico inesquecível! Este conjunto inclui um prato em faiança fina pronta a pintar com rebordo botânico em relevo. Após a pintura com os nossos vidrados minerais isentos de chumbo, a peça pode ser fixada no forno doméstico para utilização diária à mesa.",image:"./images/product_plate_kit.jpg",rating:4.9,reviewCount:42,isFeatured:!0,tags:["Favorito da Família","Uso Alimentar","Não-Tóxico","Iniciação Fácil"],dimensions:"27 cm diâmetro × 2.8 cm profundidade",materials:["Faiança fina em biscoito poroso","8× frascos de 20ml de vidrados minerais à base de água","3 pincéis sintéticos finos","Esponja marinha natural","Caderno de moldes e stencils"],careInstructions:["Lavagem manual com detergente suave recomendada para preservar a pintura","Apropriado para uso alimentar após cura simples no forno doméstico","Evitar esfregões abrasivos para manter o brilho do vidrado"],safetyInfo:"Vidrados 100% não-tóxicos, isentos de chumbo e cádmio. Certificados segundo as normas EN71-3 e ASTM D-4236.",recommendedAge:"A partir dos 4 anos (com acompanhamento de adultos para os mais pequenos)",familyMomentTip:"Cada membro da família pode pintar uma pétala de flor ou assinar o seu nome no rebordo do prato durante o almoço de domingo!",glazeCount:8,brushCount:3,difficulty:"Iniciação"},{id:"color-2",name:"Kit Dupla de Canecas Aconchegantes",category:"colors",subcategory:"Conjuntos Presente",price:29,description:"Conjunto de duas canecas cerâmicas feitas à mão com tintas pastel quentes, ideais para casais ou pais e filhos.",longDescription:"Crie as suas próprias canecas para o café da manhã ou chocolate quente da tarde! Moldadas à mão em grés natural, apresentam pegas ergonómicas confortáveis para mãos de adultos e crianças. Acompanhadas por 6 vidrados luminosos misturáveis.",image:"./images/ceramic_kits.jpg",rating:4.8,reviewCount:38,isFeatured:!0,tags:["Conjunto Presente","Casais e Duplas","Lavável na Máquina","Não-Tóxico"],dimensions:"10 cm altura × 8.5 cm diâmetro (Capacidade 350ml)",materials:["2× Canecas em faiança feitas à mão","6× frascos de 25ml de vidrados cremosos","2 pincéis ergonómicos","Paleta misturadora"],careInstructions:["Apto para máquina de lavar loiça no tabuleiro superior após cura no forno","Pode ir ao micro-ondas com chá quente ou leite com chocolate","Manipular com cuidado quando contiver líquidos a ferver"],safetyInfo:"Formulação hipoalergénica à base de água, 100% inócua para contacto directo com bebidas.",recommendedAge:"Todas as idades (seguro para bebés deixarem impressões digitais)",familyMomentTip:"Pintem canecas a condizer com pequenas mensagens de carinho escondidas no fundo da chávena!",glazeCount:6,brushCount:2,difficulty:"Todas as Idades"},{id:"color-3",name:"Kit Vaso Flor de Primavera em Pastel",category:"colors",subcategory:"Peças Decorativas",price:38,description:"Vaso cerâmico canelado para flores com vidrados pastel, pasta de relevo dourada e esponjas de textura.",longDescription:"Transforme flores colhidas no campo no centro de mesa mais bonito da casa. Este vaso escultórico em faiança possui estrias suaves que facilitam a criação de transições em degradé e motivos florais delicados.",image:"./images/ceramic_kits.jpg",rating:4.9,reviewCount:29,isFeatured:!1,tags:["Decorativo","Efeito Degradé","Decoração de Lar","Pronto a Oferecer"],dimensions:"18 cm altura × 11 cm diâmetro",materials:["Vaso canelado em biscoito cerâmico","6 vidrados minerais pastel","Pasta de realce metálico dourado","Esponjas para esbater","Folha com sugestões gráficas"],careInstructions:["Limpar suavemente com pano de microfibras húmido","Suporta água fresca sem infiltrações após a cozedura no forno","Não indicado para máquina de lavar loiça"],safetyInfo:"Materiais certificados e seguros para o ambiente familiar. Sem solventes químicos ou odores fortes.",recommendedAge:"A partir dos 6 anos",familyMomentTip:"Pinte este vaso para colocar as flores silvestres colhidas no passeio familiar de fim de semana.",glazeCount:6,brushCount:2,difficulty:"Intermédio"},{id:"color-4",name:"Conjunto Animais da Floresta em Faiança",category:"colors",subcategory:"Infantil & Figuras",price:26.5,description:"Figuras adoráveis de animais (coelho, tartaruga, urso) com tintas minerais laváveis para crianças.",longDescription:"Concebido especificamente para mãos pequeninas, este conjunto inclui 3 estatuetas robustas de contornos suaves e fáceis de segurar. Acompanhado por tintas laváveis com água e pincéis de cabo largo.",image:"./images/hero_family.jpg",rating:5,reviewCount:56,isFeatured:!0,tags:["Ideal para Crianças Pequenas","Pincéis de Cabo Largo","Lavável","Segurança Total"],dimensions:"Cerca de 8 cm de altura cada (3 figuras)",materials:["3 figuras em biscoito cerâmico macio (Urso, Coelho, Tartaruga)","6 potes de cores laváveis vivas","2 pincéis ergonómicos infantis","Base impermeável de protecção"],careInstructions:["Pode ser limpo com água ou selado com verniz transparente não-tóxico","Manter no interior protegido de geadas fortes"],safetyInfo:"Cumpre integralmente as normas europeias EN71 para brinquedos de crianças pequenas. Sem glúten nem alergénios.",recommendedAge:"Dos 2 aos 7 anos (perfeito para partilha entre pais e filhos)",familyMomentTip:"Deixe o seu filho escolher o animal favorito e inventem juntos uma história para adormecer sobre a personagem que pintaram!",glazeCount:6,brushCount:2,difficulty:"Fácil"},{id:"color-5",name:"Kit Trio de Taças para Petiscos e Molhos",category:"colors",subcategory:"Loiça em Cerâmica",price:32,description:"Conjunto de 3 taças empilháveis para petiscos, azeite e tapas com cores de inspiração mediterrânica.",longDescription:"Excelente para noites de petiscos, azeite com pão fresco, frutos secos e sobremesas. Pinte padrões geométricos tradicionais ou tons lisos vibrantes com a nossa paleta de vidrados de alta cobertura.",image:"./images/product_plate_kit.jpg",rating:4.7,reviewCount:22,isFeatured:!1,tags:["Loiça de Mesa","Petiscos em Família","Uso Alimentar","Resistente"],dimensions:"12 cm, 10 cm e 8 cm de diâmetro empilháveis",materials:["3 taças em grés cerâmico cru","6 vidrados minerais mediterrânicos","Pincel de traço fino","Moldes com motivos geométricos"],careInstructions:["Lavável na máquina de lavar loiça no tabuleiro superior após cozedura","Adequado para molhos frios, azeites e azeitonas"],safetyInfo:"Vidrados certificados para contacto com alimentos, isentos de metais pesados.",recommendedAge:"A partir dos 5 anos",familyMomentTip:"Atribua uma taça a cada elemento da família para pintar o seu petisco ou símbolo preferido.",glazeCount:6,brushCount:2,difficulty:"Iniciação"},{id:"color-6",name:"Kit Grande Travessa Familiar de Celebração",category:"colors",subcategory:"Loiça em Cerâmica",price:45,description:"Travessa oval de 34cm com canetas cerâmicas para caligrafia, paleta completa arco-íris e cavalete em madeira.",longDescription:"A nossa peça nobre para reuniões de família! Suficientemente ampla para acolher as impressões das mãos de avós, pais e netos, bem como datas marcantes e receitas queridas. Inclui suporte em madeira de faia natural.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:64,isFeatured:!0,tags:["Peça de Família","Memória com Mãos","Formato Nobre","Suporte Incluído"],dimensions:"34 cm comprimento × 25 cm largura × 3.5 cm profundidade",materials:["Travessa oval de cerâmica em biscoito","10 vidrados minerais arco-íris","Caneta cerâmica para caligrafia","4 pincéis de precisão","Cavalete de exposição em madeira nobre"],careInstructions:["Lavagem suave à mão preserva a caligrafia e assinaturas durante décadas","Cozedura no forno a 150°C durante 35 minutos para selagem alimentar definitiva"],safetyInfo:"Vidrados 100% seguros para a pele de recém-nascidos e crianças ao imprimir mãos ou pezinhos.",recommendedAge:"Todas as idades (projecto intergeracional)",familyMomentTip:"Grave a mãozinha pequenina de um bebé recém-chegado rodeada pelas assinaturas carinhosas de toda a família num aniversário especial.",glazeCount:10,brushCount:4,difficulty:"Projecto Familiar"}],Fh=[{id:"goodies-1",name:"Signature Forest Berry Sponge Cake",category:"goodies",subcategory:"Family Cakes",price:42,description:"Soft vanilla sponge layered with organic raspberry compote, whipped mascarpone cream, and fresh forest berries.",longDescription:"Baked fresh daily with pure French butter, unbleached flour, and fresh hand-picked berries. Light, airy, and gently sweetened so children and grandparents alike can enjoy every bite without heavy sugar overload.",image:"./images/product_berry_cake.jpg",rating:5,reviewCount:88,isFeatured:!0,tags:["Low Sugar","Fresh Berries","Celebration","Nut-Free Facility"],flavorProfile:"Madagascar vanilla, wild raspberry compote, sweet mascarpone, fresh blueberries",portionSize:"8-inch cake (Serves 10–12 slices)",servings:12,dietaryTags:["Vegetarian","Nut-Free","Low Sugar"],ingredients:["Unbleached wheat flour","European butter","Pasture-raised eggs","Organic raspberries & blueberries","Mascarpone cheese","Madagascar vanilla bean","Cane sugar (low ratio)"],allergenWarning:"Contains Dairy, Wheat (Gluten), and Eggs. Produced in a dedicated peanut-free and tree nut-free kitchen.",storageInstructions:"Keep refrigerated between 2°C – 5°C. Remove 20 minutes before serving for optimal soft texture.",servingTemperature:"Serve chilled or lightly brought to room temperature with fresh tea."},{id:"goodies-2",name:"Rainbow Swirl Vanilla Butter Shortbread",category:"goodies",subcategory:"Cookies & Biscuits",price:24,description:"Box of 12 melt-in-your-mouth artisanal butter shortbread cookies with pastel royal icing and celebratory swirl art.",longDescription:"Hand-piped by our master bakers, these cookies celebrate the playful rainbow swirl of the Elamel logo. Made with real European butter, a hint of lemon zest, and soft royal icing that provides a crisp bite with a buttery melt.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:94,isFeatured:!0,tags:["Hand-Decorated","Gift Ready Box","Melt-in-Mouth","Kids Party"],flavorProfile:"Sweet European butter, hint of natural lemon zest, vanilla icing",portionSize:"Box of 12 cookies (Approx. 450g)",servings:12,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Grade-AA butter","Unbleached flour","Powdered sugar","Natural vegetable colorings (beetroot, turmeric, spirulina)","Egg whites","Lemon zest"],allergenWarning:"Contains Dairy, Gluten, and Eggs. 100% Peanut-Free guaranteed.",storageInstructions:"Store in airtight box at cool room temperature for up to 14 days.",servingTemperature:"Room temperature with morning coffee or afternoon milk."},{id:"goodies-3",name:"Wholesome Little Bear Honey Biscuits",category:"goodies",subcategory:"Cookies & Biscuits",price:16.5,description:"Crunchy, naturally sweetened honey and Ceylon cinnamon biscuits in playful animal shapes with zero refined sugar.",longDescription:"A wholesome, joyful snack created for toddlers and young children. Sweetened exclusively with raw wildflower honey and loaded with whole oats and prebiotic fiber. Comes in a resealable family snack tin.",image:"./images/goodies_assortment.jpg",rating:4.8,reviewCount:45,isFeatured:!1,tags:["Zero Refined Sugar","Toddler Friendly","Whole Oats","High Fiber"],flavorProfile:"Wildflower honey, toasted rolled oats, delicate Ceylon cinnamon",portionSize:"250g family tin (Approx. 24 mini biscuits)",servings:8,dietaryTags:["Vegetarian","Refined Sugar-Free","Nut-Free"],ingredients:["Whole rolled oats","Spelt flour","Raw wildflower honey","Cold-pressed coconut oil","Ceylon cinnamon","Baking soda","Sea salt"],allergenWarning:"Contains Gluten (Spelt & Oats). Free from refined sugars, peanuts, and dairy.",storageInstructions:"Store in airtight family tin in a cool, dry pantry for up to 3 weeks.",servingTemperature:"Crunchy at room temperature."},{id:"goodies-4",name:"Gluten-Free Belgian Fudge Birthday Cake",category:"goodies",subcategory:"Family Cakes",price:44,description:"Decadent 70% dark Belgian chocolate fudge cake with Maldon sea salt flakes and almond flour sponge.",longDescription:"For chocolate lovers with gluten sensitivities! We use premium almond flour and single-origin dark chocolate to achieve an ultra-fudgy texture that rivals any traditional cake.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:31,isFeatured:!1,tags:["Gluten-Free","70% Dark Chocolate","Rich Fudge","Birthday Choice"],flavorProfile:"Deep Belgian dark chocolate, salted butter caramel, subtle almond note",portionSize:"8-inch cake (Serves 10 slices)",servings:10,dietaryTags:["Gluten-Free","Vegetarian"],ingredients:["70% Belgian dark chocolate","Almond flour","Organic butter","Pasture-raised eggs","Cane sugar","Maldon sea salt","Pure vanilla extract"],allergenWarning:"Contains Tree Nuts (Almonds), Dairy, and Eggs. Certified Gluten-Free.",storageInstructions:"Keep chilled. Microwave individual slices for 10 seconds for a molten fudge core!",servingTemperature:"Warm or room temperature."},{id:"goodies-5",name:"Citrus Meyer Lemon & Poppyseed Loaf",category:"goodies",subcategory:"Family Cakes",price:18.5,description:"Moist Meyer lemon and orange blossom loaf cake drizzled with tangy citrus glaze and crunchy poppyseeds.",longDescription:"The perfect companion for morning coffee or afternoon family tea time. Freshly squeezed Meyer lemons provide a bright sunshine flavor that balances the tender crumb.",image:"./images/product_berry_cake.jpg",rating:4.7,reviewCount:27,isFeatured:!1,tags:["Tea Time","Citrus Fresh","Nut-Free","Breakfast Treat"],flavorProfile:"Bright Meyer lemon, floral orange blossom, crunchy poppyseed",portionSize:"Standard loaf (Approx. 8 thick slices)",servings:8,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Flour","Butter","Fresh Meyer lemon juice & zest","Orange blossom water","Blue poppyseeds","Sugar","Eggs","Greek yogurt"],allergenWarning:"Contains Dairy, Wheat (Gluten), and Eggs. Nut-free.",storageInstructions:"Wrap in foil or parchment at room temperature for up to 5 days.",servingTemperature:"Room temperature or lightly toasted with butter."},{id:"goodies-6",name:"Garden Blossom Pastel Cupcake Box",category:"goodies",subcategory:"Celebration Treats",price:28,description:"Assortment of 6 artisan cupcakes decorated like blooming pastel garden roses and hydrangeas in gift presentation.",longDescription:"An edible bouquet! Includes 2 Madagascar Vanilla, 2 Strawberry Cream, and 2 Salted Caramel cupcakes, each hand-piped with intricate floral buttercream petals in soft pastel hues.",image:"./images/goodies_assortment.jpg",rating:5,reviewCount:72,isFeatured:!0,tags:["Edible Floral Art","Gift Box","Celebration","Nut-Free"],flavorProfile:"Vanilla bean, strawberry compote, salted butter caramel buttercream",portionSize:"Gift box of 6 cupcakes",servings:6,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Cake flour","Butter","Eggs","Sugar","Strawberry reduction","Vanilla bean","Cream cheese","Natural food colorings"],allergenWarning:"Contains Dairy, Gluten, and Eggs. Peanut-free.",storageInstructions:"Refrigerate in presentation box. Serve within 48 hours for freshest cream texture.",servingTemperature:"Slightly chilled or room temperature."}],Rd=[{id:"goodies-1",name:"Bolo de Baunilha e Frutos Silvestres do Bosque",category:"goodies",subcategory:"Bolos de Família",price:42,description:"Pão-de-ló leve de baunilha com compota artesanal de framboesa, creme mascarpone suave e frutos frescos.",longDescription:"Confeccionado diariamente com manteiga pura, farinha não branqueada e bagas frescas apanhadas à mão. Leve, arejado e com teor moderado de açúcar para que miúdos e graúdos possam desfrutar de cada fatia sem excessos.",image:"./images/product_berry_cake.jpg",rating:5,reviewCount:88,isFeatured:!0,tags:["Pouco Açúcar","Frutos Frescos","Celebração","Cozinha Sem Amendoins"],flavorProfile:"Baunilha de Madagáscar, compota de framboesa, mascarpone aveludado e mirtilos frescos",portionSize:"Bolo de 20 cm (Serve 10 a 12 fatias generosas)",servings:12,dietaryTags:["Vegetariano","Sem Amendoins","Baixo Açúcar"],ingredients:["Farinha de trigo não branqueada","Manteiga pura europeia","Ovos de galinhas criadas ao ar livre","Framboesas e mirtilos biológicos","Queijo mascarpone","Vagem de baunilha","Açúcar de cana integral"],allergenWarning:"Contém lacticínios, trigo (glúten) e ovos. Preparado em cozinha estritamente isenta de amendoins e frutos secos.",storageInstructions:"Conservar no frigorífico entre 2°C e 5°C. Retirar 20 minutos antes de servir para textura aveludada.",servingTemperature:"Servir fresco ou ligeiramente à temperatura ambiente com chá aromático."},{id:"goodies-2",name:"Biscoitos Amanteigados Espiral do Arco-Íris",category:"goodies",subcategory:"Biscoitos & Bolachas",price:24,description:"Caixa de 12 biscoitos estaladiços de manteiga pura com glacê real em tons pastel e o logótipo em espiral.",longDescription:"Decorados à mão com manga de pasteleiro pelos nossos mestres artesãos. Feitos com manteiga europeia de primeira qualidade, raspas de limão fresco e glacê real que derrete deliciosamente na boca.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:94,isFeatured:!0,tags:["Decorado à Mão","Caixa Presente","Derrete na Boca","Festas de Crianças"],flavorProfile:"Manteiga nobre, toque subtil de limão natural, glacê de baunilha",portionSize:"Caixa de 12 biscoitos artesanais (Aprox. 450g)",servings:12,dietaryTags:["Vegetariano","Sem Amendoins"],ingredients:["Manteiga pura","Farinha de trigo","Açúcar em pó","Corantes vegetais naturais (beterraba, curcuma, espirulina)","Claras de ovos","Raspa de limão"],allergenWarning:"Contém lacticínios, glúten e ovos. Garantia de 100% livre de amendoins.",storageInstructions:"Guardar em recipiente hermético em local fresco durante até 14 dias.",servingTemperature:"À temperatura ambiente com leite fresco ou café."},{id:"goodies-3",name:"Bolachinhas Nutritivas de Mel e Aveia",category:"goodies",subcategory:"Biscoitos & Bolachas",price:16.5,description:"Bolachas estaladiças de mel silvestre e canela de Ceilão em formatos de animais, sem açúcares refinados.",longDescription:"Um lanche saudável e alegre pensado para bebés e crianças em crescimento. Adoçadas unicamente com mel puro de flores silvestres e ricas em aveia integral e fibra prebiótica. Apresentadas em lata familiar reutilizável.",image:"./images/goodies_assortment.jpg",rating:4.8,reviewCount:45,isFeatured:!1,tags:["Sem Açúcar Refinado","Para Bebés e Crianças","Aveia Integral","Rico em Fibra"],flavorProfile:"Mel silvestre de montanha, aveia tostada, canela de Ceilão aromática",portionSize:"Lata familiar de 250g (Cerca de 24 bolachinhas)",servings:8,dietaryTags:["Vegetariano","Sem Açúcar Refinado","Sem Amendoins"],ingredients:["Flocos de aveia integral","Farinha de espelta","Mel silvestre cru","Óleo de coco virgem","Canela de Ceilão","Bicarbonato de sódio","Flor de sal"],allergenWarning:"Contém glúten (espelta e aveia). Isento de açúcares refinados, amendoins e leite.",storageInstructions:"Conservar na lata hermética em despensa fresca e seca durante até 3 semanas.",servingTemperature:"Estaladiças à temperatura ambiente."},{id:"goodies-4",name:"Bolo Cremoso de Chocolate Belga Sem Glúten",category:"goodies",subcategory:"Bolos de Família",price:44,description:"Bolo farto de chocolate negro belga a 70% com flor de sal e farinha de amêndoa, sem glúten.",longDescription:"Para quem adora chocolate e tem intolerância ao glúten! Utilizamos farinha de amêndoa fina e chocolate negro de origem seleccionada para atingir uma consistência aveludada e irresistível.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:31,isFeatured:!1,tags:["Sem Glúten","Chocolate Negro 70%","Textura Fudge","Ideal para Aniversário"],flavorProfile:"Chocolate negro belga intenso, caramelo salgado, notas quentes de amêndoa",portionSize:"Bolo de 20 cm (Serve 10 fatias ricas)",servings:10,dietaryTags:["Sem Glúten","Vegetariano"],ingredients:["Chocolate negro 70% belga","Farinha de amêndoa","Manteiga biológica","Ovos frescos","Açúcar de cana","Flor de sal de Tavira","Extracto de baunilha pura"],allergenWarning:"Contém frutos de casca rija (amêndoa), lacticínios e ovos. Certificado sem glúten.",storageInstructions:"Conservar no frio. Aqueça a sua fatia 10 segundos no micro-ondas para um coração derretido!",servingTemperature:"Morno ou à temperatura ambiente."},{id:"goodies-5",name:"Bolo Húmido de Limão Meyer e Papoila",category:"goodies",subcategory:"Bolos de Família",price:18.5,description:"Bolo inglês húmido de limão Meyer e água de flor de laranjeira com vidrado cítrico e sementes de papoila.",longDescription:"O companheiro perfeito para a chávena de chá da tarde ou pequeno-almoço em família. Limões Meyer sumarentos conferem uma luminosidade aromática que harmoniza na perfeição com o miolo fofo.",image:"./images/product_berry_cake.jpg",rating:4.7,reviewCount:27,isFeatured:!1,tags:["Hora do Chá","Cítrico Refrescante","Sem Frutos Secos","Pequeno-Almoço"],flavorProfile:"Limão Meyer perfumado, flor de laranjeira, sementes de papoila estaladiças",portionSize:"Forma inglesa standard (Rende cerca de 8 fatias grossas)",servings:8,dietaryTags:["Vegetariano","Sem Amendoins"],ingredients:["Farinha de trigo","Manteiga","Sumo e raspas de limão Meyer","Água de flor de laranjeira","Sementes de papoila azul","Açúcar","Ovos","Iogurte grego natural"],allergenWarning:"Contém lacticínios, trigo (glúten) e ovos. Isento de amendoins.",storageInstructions:"Conservar embrulhado em papel vegetal ou folha de alumínio durante até 5 dias.",servingTemperature:"À temperatura ambiente ou ligeiramente tostado com manteiga fresca."},{id:"goodies-6",name:"Caixa Bouquet de 6 Cupcakes Florais",category:"goodies",subcategory:"Celebrações & Caixas",price:28,description:"Sortido de 6 cupcakes decorados como rosas e hortênsias em tons pastel numa caixa de apresentação requintada.",longDescription:"Um autêntico bouquet comestível! Inclui 2 de Baunilha de Madagáscar, 2 de Creme de Morango e 2 de Caramelo Salgado, cada um decorado com pétalas de creme de manteiga em tons pastel suaves.",image:"./images/goodies_assortment.jpg",rating:5,reviewCount:72,isFeatured:!0,tags:["Arte Floral Comestível","Caixa Presente","Celebração","Sem Amendoins"],flavorProfile:"Baunilha em vagem, compota de morango fresco, creme de manteiga com caramelo salgado",portionSize:"Caixa de presente com 6 cupcakes artesanais",servings:6,dietaryTags:["Vegetariano","Sem Amendoins"],ingredients:["Farinha especial para pastelaria","Manteiga","Ovos","Açúcar","Redução de morangos","Vagem de baunilha","Creme de queijo","Corantes vegetais"],allergenWarning:"Contém lacticínios, glúten e ovos. Sem amendoins.",storageInstructions:"Refrigerar na caixa original. Consumir nas 48 horas seguintes para a máxima frescura do creme.",servingTemperature:"Ligeiramente fresco ou à temperatura ambiente."}],Sh=[{id:"moment-1",name:"Family Roots Heirloom Ceramic Plate",category:"moments",subcategory:"Heirloom Tableware",price:49,description:"Handcrafted ceramic heirloom plate personalized with your family name, established year, and member names.",longDescription:"Celebrate your family roots with our signature heirloom plate. Hand-thrown in our studio, carefully lettered with your chosen family name, year, and names of up to 8 family members around the illustrated branches. Finished with a food-safe glossy protective glaze.",image:"./images/moments_gifts.jpg",rating:5,reviewCount:112,isFeatured:!0,tags:["Signature Heirloom","Hand-Lettered","Food Safe","Gift Boxed"],materials:["Hand-thrown earthenware clay","High-fire mineral underglazes","Food-safe clear glossy glaze","Velvet gift pouch","Natural wood display stand"],charLimit:80,turnaroundDays:4,personalisationFields:["Family / Last Name","Established Year","Family Member Names","Special Message or Motto"],customizationSteps:["Enter your family surname and commemorative year","List the names of family members (children, parents, grandparents)","Choose your accent glaze color theme","Our studio artisans hand-letter and kiln-fire your plate over 48 hours"],sampleStories:[{family:"The Miller Family, Portland",quote:"We gave this to my parents for their 40th wedding anniversary with all 6 grandchildren names. Mom cried happy tears!",title:"40th Wedding Anniversary"},{family:"The Santos-Silva Duo, Lisbon",quote:"Our wedding date and favorite quote permanently sealed in lovely ceramic. It sits proudly on our kitchen mantel.",title:"New Home Keepsake"}]},{id:"moment-2",name:"Celebration Message Artisan Cookie Crate",category:"moments",subcategory:"Celebration Gifts",price:36,description:"Luxury wooden craft crate with 12 gourmet shortbread cookies custom lettered with your heartfelt family messages.",longDescription:'Send delicious edible letters! Each artisanal butter cookie is piped with your chosen phrases—such as "Welcome Home Baby Liam", "Happy 10th Anniversary Mom & Dad", or "Best Family Ever". Packaged in a reusable wooden keepsake box with dried floral sprigs.',image:"./images/product_custom_cookies.jpg",rating:4.9,reviewCount:83,isFeatured:!0,tags:["Custom Edible Letters","Wooden Keepsake Crate","Fresh Baked","Express Prep"],materials:["12 artisanal butter cookies","Natural royal icing lettering","FSC-certified reusable pine crate","Hand-tied ribbon","Gift card"],charLimit:60,turnaroundDays:2,personalisationFields:["Custom Phrase (Up to 4 lines)","Recipient Family Name","Gift Note Message"],customizationSteps:["Type your message (e.g., anniversary wishes, new baby congratulations)","Select your pastel lettering color palette","Bakers pipe and package fresh on the day of dispatch"],sampleStories:[{family:"Grandma Elena, Chicago",quote:"Received this from my daughter across the country. The cookies were buttery and fresh, and the wooden box now holds my recipe cards.",title:"Mother's Day Surprise"}]},{id:"moment-3",name:"Intertwined Botanic Couples Mug Set",category:"moments",subcategory:"Couples & Duos",price:38,description:"Pair of matching ceramic mugs with intertwining botanical crests, names, and special commemorative date.",longDescription:"Designed to symbolize shared journeys. These heavy ceramic mugs feature warm earthy glaze, hand-brushed rims, and custom lettering baked permanently into the glaze. A timeless gift for weddings, anniversaries, or parent-child pairs.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:67,isFeatured:!0,tags:["Couples Gift","Intertwined Design","Microwave & Dishwasher Safe","Permanent Glaze"],materials:["2× Handcrafted stoneware mugs (380ml)","Lead-free permanent mineral glazes","Custom hand-lettering","Kraft gift packaging"],charLimit:50,turnaroundDays:3,personalisationFields:["Name 1","Name 2","Special Date or Place","Hidden Rim Note"],customizationSteps:["Provide the two names (e.g., Elena & Marco)","Add your memorable date or anniversary","Optional secret note lettered inside the bottom rim"],sampleStories:[{family:"Clara & David, Seattle",quote:"Our morning coffee ritual feels so meaningful with our names on these sturdy mugs. Quality is outstanding.",title:"Wedding Keepsake"}]},{id:"moment-4",name:"Golden Family Name Ribbon Ornaments",category:"moments",subcategory:"Holiday & Seasonal",price:29,description:"Set of 4 hanging ceramic stars and baubles with custom embossed names and festive rainbow pastel ribbons.",longDescription:"Capture the magic of holiday gatherings with hanging ceramic keepsakes. Each ornament is custom stamped with a family member’s name and year, tied with luxurious rainbow grosgrain ribbon.",image:"./images/moments_gifts.jpg",rating:4.8,reviewCount:49,isFeatured:!1,tags:["Set of 4","Holiday Keepsake","Hand-Stamped","Yearly Tradition"],materials:["4 porcelain bisque hanging shapes (Stars & Baubles)","24k gold luster script accent","Rainbow pastel grosgrain ribbons","Velvet keepsake box"],charLimit:40,turnaroundDays:3,personalisationFields:["4 Names (One per ornament)","Commemorative Year"],customizationSteps:["Enter up to 4 names for the ornaments","Choose year stamp (e.g. 2026)","Individually packaged in velvet slots"],sampleStories:[{family:"The Henderson Clan, Denver",quote:"We add a new ceramic star every year when our family grows. The tree looks gorgeous with these!",title:"Holiday Family Tradition"}]}],Od=[{id:"moment-1",name:"Prato Heráldico da Árvore Genealógica Familiar",category:"moments",subcategory:"Loiça de Família",price:49,description:"Prato cerâmico nobre gravado à mão com o apelido da família, ano de casamento e nomes dos familiares.",longDescription:"Celebre as raízes da sua família com a nossa peça nobre de assinatura. Moldado à mão no nosso estúdio, cuidadosamente gravado com o apelido, ano e os nomes de até 8 familiares ao longo dos ramos ilustrados. Finalizado com vidrado transparente de alto brilho e protecção alimentar.",image:"./images/moments_gifts.jpg",rating:5,reviewCount:112,isFeatured:!0,tags:["Peça de Família Nobre","Caligrafia Manual","Seguro para Alimentos","Caixa de Oferta"],materials:["Faiança fina moldada à mão","Vidrados minerais de alta temperatura","Vidrado transparente brilhante alimentar","Bolsa de veludo","Cavalete de suporte em madeira natural"],charLimit:80,turnaroundDays:4,personalisationFields:["Apelido / Nome da Família","Ano de Fundação / Casamento","Nomes dos Familiares","Mensagem Especial ou Lema"],customizationSteps:["Indique o apelido da família e o ano comemorativo","Enumere os nomes dos familiares (filhos, pais, avós)","Seleccione a paleta de vidrados para os apontamentos gráficos","Os nossos mestres ceramistas gravam e cozem a peça no forno durante 48 horas"],sampleStories:[{family:"Família Ferreira Pinto, Porto",quote:"Oferecemos este prato aos meus pais nas Bodas de Rubi com o nome dos 6 netos. Foi o momento mais emocionante da festa!",title:"Bodas de Rubi (40 Anos)"},{family:"Mariana & Tiago, Lisboa",quote:"A data do nosso casamento gravada para sempre nesta faiança magnífica. Fica em lugar de destaque na nossa sala.",title:"Lembrança do Novo Lar"}]},{id:"moment-2",name:"Caixa de Biscoitos com Mensagens Gravadas",category:"moments",subcategory:"Lembranças de Celebração",price:36,description:"Caixa em madeira maciça com 12 biscoitos gourmet decorados com frases e dedicatórias à sua escolha.",longDescription:'Envie cartas comestíveis inesquecíveis! Cada biscoito amanteigado é decorado com as suas palavras especiais — como "Bem-vindo Bebé Tomás", "Parabéns aos Melhores Pais do Mundo" ou "Família Unida Sempre". Embalados em caixa de madeira reutilizável com flores secas aromáticas.',image:"./images/product_custom_cookies.jpg",rating:4.9,reviewCount:83,isFeatured:!0,tags:["Letras Comestíveis","Caixa em Madeira Nobre","Fresco do Dia","Preparação Expressa"],materials:["12 biscoitos amanteigados de pastelaria","Glacê real com corantes naturais","Caixa em madeira de pinho certificada FSC","Fita de gorgorão","Cartão personalizado"],charLimit:60,turnaroundDays:2,personalisationFields:["Frase Personalizada (Até 4 linhas)","Nome da Família ou Destinatário","Dedicatória do Cartão"],customizationSteps:["Escreva a sua mensagem personalizada (aniversários, boas-vindas, agradecimentos)","Seleccione a combinação de cores do glacê","Os pasteleiros decoram e embalam no próprio dia do envio"],sampleStories:[{family:"Avó Luísa, Coimbra",quote:"Recebi esta caixa de surpresa dos meus netos. Os biscoitos eram deliciosos e a caixa de madeira guarda agora as minhas receitas.",title:"Surpresa de Dia da Mãe"}]},{id:"moment-3",name:"Par de Canecas para Casal com Crista Botânica",category:"moments",subcategory:"Casais & Duplas",price:38,description:"Conjunto de duas canecas cerâmicas com motivos botânicos entrelaçados, nomes e data comemorativa gravada.",longDescription:"Concebidas para simbolizar caminhos partilhados. Estas canecas robustas em grés apresentam vidrado acolhedor, rebordos pintados à mão e caligrafia personalizada vitrificada permanentemente no forno.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:67,isFeatured:!0,tags:["Presente para Casais","Desenho Entrelaçado","Micro-ondas e Máquina","Vidrado Permanente"],materials:["2× Canecas em grés artesanal (380ml)","Vidrados minerais permanentes sem chumbo","Caligrafia manual personalizada","Embalagem de presente em cartão kraft"],charLimit:50,turnaroundDays:3,personalisationFields:["Nome 1","Nome 2","Data Especial ou Lugar","Mensagem no Fundo da Caneca"],customizationSteps:["Indique os dois nomes do casal ou dupla","Adicione a data marcante ou aniversário","Opção de mensagem secreta gravada no rebordo interior"],sampleStories:[{family:"Clara & David, Braga",quote:"O nosso café da manhã tem outro encanto com estas canecas tão robustas e bonitas. A qualidade é excepcional.",title:"Lembrança de Casamento"}]},{id:"moment-4",name:"Conjunto de 4 Ornamentos de Natal Gravados",category:"moments",subcategory:"Épocas Especiais",price:29,description:"Conjunto de 4 enfeites em faiança com nomes gravados em relevo e fitas de gorgorão em tons arco-íris.",longDescription:"Guarde a magia das festas de fim de ano com lembranças em cerâmica para pendurar. Cada enfeite é gravado com o nome de um familiar e o ano, atado com fita de gorgorão em cores suaves.",image:"./images/moments_gifts.jpg",rating:4.8,reviewCount:49,isFeatured:!1,tags:["Conjunto de 4 Peças","Recordação de Natal","Gravado à Mão","Tradição Anual"],materials:["4 formas suspensas em faiança fina (Estrelas e Globos)","Pormenores em ouro de 24k","Fitas de gorgorão coloridas","Caixa com divisórias em veludo"],charLimit:40,turnaroundDays:3,personalisationFields:["4 Nomes (Um por ornamento)","Ano Comemorativo"],customizationSteps:["Insira os nomes a gravar em cada peça","Escolha o ano (ex: 2026)","Embalados individualmente em bolsa de veludo"],sampleStories:[{family:"Família Mendonça, Guimarães",quote:"Acrescentamos uma nova estrela de cerâmica todos os anos quando a família cresce. A árvore fica maravilhosa!",title:"Tradição Familiar de Natal"}]}],qd=u=>u==="pt"?Id:Nh,$d=u=>u==="pt"?Rd:Fh,Wd=u=>u==="pt"?Od:Sh,Hd=u=>[...qd(u),...$d(u),...Wd(u)],Qt=Id,Vd=Rd,vn=Od,Yt=[...Qt,...Vd,...vn],zh=()=>{const{selectedProductId:u,closeProductModal:d,navigate:l}=Cr(),{addToCart:v}=Aa(),{t:h,formatCurrency:x,locale:b}=Me(),[z,k]=L.useState(1),[T,P]=L.useState("overview"),M=Yt.find(H=>H.id===u);if(!M)return null;const C=M.category==="colors",A=M.category==="goodies",E=M.category==="moments",F=C?M:null,S=A?M:null,U=E?M:null,ee=()=>{if(E){d(),l("/moments-souvenirs");return}v(M,z),d()};return a.jsxs("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"modal-product-title",children:[a.jsxs("div",{className:"modal-dialog product-modal-dialog",children:[a.jsx("button",{onClick:d,className:"btn-icon modal-close-btn","aria-label":h("common.close"),children:a.jsx(Ta,{size:20})}),a.jsxs("div",{className:"product-modal-grid",children:[a.jsxs("div",{className:"product-modal-media-col",children:[a.jsxs("div",{className:"product-modal-image-wrap",children:[a.jsx("img",{src:M.image,alt:`${M.name} - ${M.description}`,className:"product-modal-image"}),a.jsx("div",{className:"product-modal-tag-overlay",children:a.jsx("span",{className:"badge badge-primary",children:M.subcategory})})]}),a.jsxs("div",{className:"product-modal-badges",children:[F&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-badge-item",children:[a.jsx(Ue,{size:16,color:"#10B981"}),a.jsx("span",{children:b==="pt"?"Vidrados Não-Tóxicos e Sem Chumbo":"Non-Toxic Lead-Free Glazes"})]}),a.jsxs("div",{className:"modal-badge-item",children:[a.jsx(Fe,{size:16,color:"#F8971D"}),a.jsx("span",{children:b==="pt"?`Nível ${F.difficulty}`:`${F.difficulty} Level`})]})]}),S&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-badge-item",children:[a.jsx(Ue,{size:16,color:"#10B981"}),a.jsx("span",{children:b==="pt"?"Pastelaria Sem Amendoins":"Peanut-Free Dedicated Bakery"})]}),a.jsxs("div",{className:"modal-badge-item",children:[a.jsx(kr,{size:16,color:"#E1285B"}),a.jsx("span",{children:b==="pt"?`${S.servings} Porções`:`${S.servings} Servings`})]})]})]})]}),a.jsxs("div",{className:"product-modal-details-col",children:[a.jsxs("div",{className:"modal-header-meta",children:[a.jsxs("span",{className:"modal-category-label",children:["elamel • ",M.category.toUpperCase()]}),a.jsxs("div",{className:"modal-rating",children:[a.jsx(it,{size:14,fill:"#F8971D",color:"#F8971D"}),a.jsx("strong",{children:M.rating.toFixed(1)}),a.jsxs("span",{children:["(",M.reviewCount," ",h("common.reviews"),")"]})]})]}),a.jsx("h2",{id:"modal-product-title",className:"product-modal-title",children:M.name}),a.jsxs("div",{className:"product-modal-price-row",children:[a.jsx("span",{className:"product-modal-price",children:x(M.price)}),S&&a.jsx("span",{className:"modal-portion-tag",children:S.portionSize}),F&&a.jsx("span",{className:"modal-portion-tag",children:F.dimensions})]}),a.jsx("p",{className:"product-modal-summary",children:M.longDescription}),a.jsxs("div",{className:"modal-tabs",role:"tablist","aria-label":"Product Information Tabs",children:[a.jsx("button",{role:"tab","aria-selected":T==="overview",onClick:()=>P("overview"),className:`modal-tab-btn ${T==="overview"?"active":""}`,children:C?b==="pt"?"Materiais & Kit":"Materials & Kit":A?b==="pt"?"Ingredientes & Sabor":"Flavor & Ingredients":b==="pt"?"Especificações":"Specifications"}),a.jsx("button",{role:"tab","aria-selected":T==="safety",onClick:()=>P("safety"),className:`modal-tab-btn ${T==="safety"?"active":""}`,children:A?b==="pt"?"Alergénios & Dieta":"Allergen Information":b==="pt"?"Segurança Infantil":"Safety Guidelines"}),a.jsx("button",{role:"tab","aria-selected":T==="care",onClick:()=>P("care"),className:`modal-tab-btn ${T==="care"?"active":""}`,children:A?b==="pt"?"Conservação":"Storage & Serving":b==="pt"?"Cuidado & Cura":"Care & Curing"}),a.jsx("button",{role:"tab","aria-selected":T==="family",onClick:()=>P("family"),className:`modal-tab-btn ${T==="family"?"active":""}`,children:b==="pt"?"Momento em Família":"Family Moments Tip"})]}),a.jsxs("div",{className:"modal-tab-content",role:"tabpanel",children:[T==="overview"&&a.jsxs("div",{className:"tab-pane",children:[F&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"tab-section-heading",children:b==="pt"?"Conteúdo da Caixa de Pintura:":"What's Inside Your Craft Box:"}),a.jsx("ul",{className:"modal-bullets",children:F.materials.map((H,ce)=>a.jsxs("li",{children:[a.jsx(Ir,{size:14,color:"#10B981"})," ",H]},ce))})]}),S&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"tab-section-heading",children:b==="pt"?"Sabor e Ingredientes Naturais:":"Flavor & Natural Ingredients:"}),a.jsxs("p",{className:"tab-highlight",children:[a.jsx("strong",{children:b==="pt"?"Perfil de Sabor:":"Flavor Profile:"})," ",S.flavorProfile]}),a.jsx("ul",{className:"modal-bullets",children:S.ingredients.map((H,ce)=>a.jsxs("li",{children:[a.jsx(Ir,{size:14,color:"#10B981"})," ",H]},ce))})]}),U&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"tab-section-heading",children:b==="pt"?"Processo de Confecção e Gravação:":"Personalization Process:"}),a.jsx("ul",{className:"modal-bullets",children:U.customizationSteps.map((H,ce)=>a.jsxs("li",{children:[a.jsx(Ir,{size:14,color:"#10B981"})," ",H]},ce))})]})]}),T==="safety"&&a.jsxs("div",{className:"tab-pane",children:[F&&a.jsxs("div",{className:"safety-alert-box",children:[a.jsx(Ue,{size:20,color:"#10B981"}),a.jsxs("div",{children:[a.jsx("strong",{children:b==="pt"?"Segurança Infantil e Certificação Não-Tóxica:":"Child Safety & Non-Toxic Certification:"}),a.jsx("p",{children:F.safetyInfo}),a.jsxs("p",{className:"sub-note",children:[a.jsx("strong",{children:b==="pt"?"Idade Recomendada:":"Recommended Age:"})," ",F.recommendedAge]})]})]}),S&&a.jsxs("div",{className:"allergen-alert-box",children:[a.jsx(fs,{size:20,color:"#D97706"}),a.jsxs("div",{children:[a.jsx("strong",{children:b==="pt"?"Avisos Alergénicos e Dieta:":"Allergen & Diet Advice:"}),a.jsx("p",{children:S.allergenWarning}),a.jsx("div",{className:"diet-tags-wrap",children:S.dietaryTags.map(H=>a.jsx("span",{className:"badge badge-diet",children:H},H))})]})]}),U&&a.jsx("p",{children:b==="pt"?"Inspecionado manualmente para garantir a mais elevada qualidade de loiça de família. Vidrados e embalagens seguros.":"Hand-inspected for highest heirloom quality. Non-toxic glazes and packaging."})]}),T==="care"&&a.jsxs("div",{className:"tab-pane",children:[F&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"tab-section-heading",children:b==="pt"?"Instruções de Lavagem e Cura:":"Washing & Curing Instructions:"}),a.jsx("ul",{className:"modal-bullets",children:F.careInstructions.map((H,ce)=>a.jsxs("li",{children:[a.jsx(bn,{size:14,color:"#0284C7"})," ",H]},ce))})]}),S&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"tab-section-heading",children:b==="pt"?"Conservação e Temperatura de Serviço:":"Freshness & Serving Temperature:"}),a.jsxs("p",{children:[a.jsx("strong",{children:b==="pt"?"Conservação:":"Storage:"})," ",S.storageInstructions]}),a.jsxs("p",{children:[a.jsx("strong",{children:b==="pt"?"Sugestão de Degustação:":"Serving Suggestion:"})," ",S.servingTemperature]})]})]}),T==="family"&&a.jsxs("div",{className:"tab-pane",children:[F&&a.jsxs("div",{className:"family-tip-box",children:[a.jsx(Fe,{size:20,color:"#E1285B"}),a.jsxs("div",{children:[a.jsx("strong",{children:b==="pt"?"Sugestão para a Família:":"Shared Memory Tip:"}),a.jsx("p",{children:F.familyMomentTip})]})]}),S&&a.jsxs("div",{className:"family-tip-box",children:[a.jsx(kr,{size:20,color:"#E1285B"}),a.jsxs("div",{children:[a.jsx("strong",{children:b==="pt"?"Sugestão para Celebração:":"Celebration Suggestion:"}),a.jsx("p",{children:b==="pt"?"Combina na perfeição com lanches de domingo, aniversários e histórias à mesa.":"Pairs wonderfully with weekend storytime or family milestone afternoon teas."})]})]}),U&&a.jsx("div",{className:"family-stories-list",children:U.sampleStories.map((H,ce)=>a.jsxs("div",{className:"sample-story-card",children:[a.jsxs("strong",{children:['"',H.title,'"']})," — ",a.jsx("em",{children:H.family}),a.jsxs("p",{children:['"',H.quote,'"']})]},ce))})]})]}),a.jsxs("div",{className:"modal-action-bar",children:[!E&&a.jsxs("div",{className:"quantity-counter","aria-label":"Quantity selector",children:[a.jsx("button",{onClick:()=>k(Math.max(1,z-1)),className:"btn-qty","aria-label":"Decrease quantity",children:a.jsx(Md,{size:14})}),a.jsx("span",{className:"qty-value","aria-live":"polite",children:z}),a.jsx("button",{onClick:()=>k(z+1),className:"btn-qty","aria-label":"Increase quantity",children:a.jsx(Ea,{size:14})})]}),a.jsx("button",{onClick:ee,className:"btn btn-primary btn-lg flex-grow-btn",children:E?a.jsx(a.Fragment,{children:b==="pt"?"Personalizar no Estúdio ao Vivo":"Customize in Studio & Live Preview"}):a.jsxs(a.Fragment,{children:[a.jsx(Ea,{size:18})," ",h("common.addToCart")," (",x(M.price*z),")"]})})]})]})]})]}),a.jsx("style",{children:`
        .product-modal-dialog {
          max-width: 880px;
          padding: 2.25rem;
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          z-index: 10;
        }
        .product-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2.5rem;
        }
        .product-modal-image-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-subtle);
          box-shadow: var(--shadow-md);
        }
        .product-modal-image {
          width: 100%;
          height: 340px;
          object-fit: cover;
        }
        .product-modal-tag-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }
        .product-modal-badges {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .modal-badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-surface);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .modal-category-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }
        .modal-rating {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .product-modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .product-modal-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .product-modal-price {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .modal-portion-tag {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-light);
        }
        .product-modal-summary {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .modal-tabs {
          display: flex;
          gap: 0.35rem;
          border-bottom: 1px solid var(--color-border-light);
          margin-bottom: 1rem;
          overflow-x: auto;
          padding-bottom: 2px;
        }
        .modal-tab-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-light);
          padding: 0.5rem 0.85rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .modal-tab-btn:hover {
          color: var(--color-primary);
        }
        .modal-tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          font-weight: 700;
        }
        .modal-tab-content {
          min-height: 160px;
          margin-bottom: 1.5rem;
        }
        .tab-section-heading {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.6rem;
        }
        .modal-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .modal-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        .safety-alert-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .allergen-alert-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .diet-tags-wrap {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .family-tip-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--color-primary-light);
          border: 1px solid rgba(225, 40, 91, 0.2);
          padding: 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .family-stories-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .sample-story-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.75rem;
          font-size: 0.8125rem;
        }
        .modal-action-bar {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border-light);
        }
        .quantity-counter {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.25rem;
          background: var(--color-surface);
        }
        .btn-qty {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .btn-qty:hover {
          background: var(--color-bg-subtle);
        }
        .qty-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9375rem;
          min-width: 2rem;
          text-align: center;
        }
        .flex-grow-btn {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .product-modal-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .product-modal-image {
            height: 240px;
          }
        }
      `})]})},Ph=()=>{const{isCartOpen:u,closeCart:d,items:l,updateQuantity:v,removeFromCart:h,subtotal:x,totalItemsCount:b,dietaryWarnings:z,submitInquiryOrder:k}=Aa(),{navigate:T}=Cr(),{t:P,formatCurrency:M,locale:C}=Me(),[A,E]=L.useState(!1),[F,S]=L.useState(""),[U,ee]=L.useState(""),[H,ce]=L.useState(""),[ie,ye]=L.useState(""),[Te,be]=L.useState(""),[er,Ke]=L.useState(!1),[or,le]=L.useState(null);if(!u)return null;const Se=async se=>{if(se.preventDefault(),!F||!U)return;Ke(!0);const Ce=await k({name:F,email:U,phone:H,eventDate:ie,notes:Te});Ke(!1),Ce.success&&(le(Ce.orderId),E(!1))},ze=()=>{le(null),E(!1),d()};return a.jsxs("div",{className:"drawer-backdrop",onClick:ze,children:[a.jsxs("div",{className:"drawer-panel",onClick:se=>se.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"drawer-title",children:[a.jsxs("div",{className:"drawer-header",children:[a.jsxs("div",{className:"drawer-header-left",children:[a.jsx(ps,{size:22,color:"#E1285B"}),a.jsxs("h3",{id:"drawer-title",className:"drawer-title",children:[C==="pt"?"O Seu Cesto de Compras":"Your Treat Box"," (",b,")"]})]}),a.jsx("button",{onClick:ze,className:"btn-icon","aria-label":P("common.close"),children:a.jsx(Ta,{size:20})})]}),or?a.jsxs("div",{className:"drawer-confirmed-state",children:[a.jsx("div",{className:"confirmed-icon-circle",children:a.jsx(Ge,{size:48,color:"#10B981"})}),a.jsx("h4",{className:"confirmed-title",children:P("cart.form.successTitle")}),a.jsxs("p",{className:"confirmed-order-code",children:[C==="pt"?"Referência da Encomenda:":"Inquiry Reference:"," ",a.jsx("strong",{children:or})]}),a.jsx("p",{className:"confirmed-text",children:P("cart.form.successMessage")}),a.jsx("button",{onClick:ze,className:"btn btn-primary btn-full-width",children:C==="pt"?"Continuar a Navegar na Elamel":"Continue Exploring Elamel"})]}):l.length===0?a.jsxs("div",{className:"drawer-empty-state",children:[a.jsx(ps,{size:48,color:"#CBD5E1"}),a.jsx("h4",{children:P("cart.empty")}),a.jsx("p",{children:P("cart.emptySubtitle")}),a.jsx("button",{onClick:()=>{d(),T("/colors")},className:"btn btn-primary",children:C==="pt"?"Ver Kits de Cerâmica":"Explore Elamel Colors"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"drawer-body",children:[z.length>0&&a.jsxs("div",{className:"drawer-allergen-alert",role:"alert",children:[a.jsx(fs,{size:18,color:"#D97706",className:"alert-icon-top"}),a.jsxs("div",{children:[a.jsxs("strong",{children:[P("common.allergens"),":"]}),a.jsx("ul",{className:"allergen-list",children:z.map((se,Ce)=>a.jsx("li",{children:se},Ce))})]})]}),a.jsx("div",{className:"drawer-items-list",children:l.map(se=>a.jsxs("div",{className:"drawer-item-row",children:[a.jsx("img",{src:se.product.image,alt:se.product.name,className:"drawer-item-thumb"}),a.jsxs("div",{className:"drawer-item-details",children:[a.jsx("h4",{className:"drawer-item-name",children:se.product.name}),a.jsx("span",{className:"drawer-item-price",children:M(se.product.price*se.quantity)}),se.personalisation&&a.jsxs("div",{className:"item-personalisation-snippet",children:[a.jsxs("strong",{children:['"',se.personalisation.familyOrName,'"']})," • ",se.personalisation.occasion,a.jsxs("div",{className:"snippet-msg",children:['"',se.personalisation.customMessage,'"']})]}),se.customGlazes&&a.jsxs("div",{className:"item-glazes-snippet",children:[a.jsx("span",{children:C==="pt"?"Paleta Personalizada: ":"Custom Palette: "}),se.customGlazes.map((Ce,ve)=>a.jsx("span",{className:"mini-color-dot",style:{backgroundColor:Ce}},ve))]}),a.jsxs("div",{className:"item-qty-actions",children:[a.jsxs("div",{className:"drawer-qty-control",children:[a.jsx("button",{onClick:()=>v(se.id,se.quantity-1),className:"btn-drawer-qty","aria-label":"Decrease quantity",children:a.jsx(Md,{size:12})}),a.jsx("span",{className:"drawer-qty-val",children:se.quantity}),a.jsx("button",{onClick:()=>v(se.id,se.quantity+1),className:"btn-drawer-qty","aria-label":"Increase quantity",children:a.jsx(Ea,{size:12})})]}),a.jsx("button",{onClick:()=>h(se.id),className:"btn-drawer-delete","aria-label":`${P("treatBox.remove")}: ${se.product.name}`,children:a.jsx(Dd,{size:15})})]})]})]},se.id))}),A&&a.jsxs("form",{onSubmit:Se,className:"drawer-checkout-form",children:[a.jsx("h4",{className:"form-heading",children:C==="pt"?"Concluir Pedido de Reserva:":"Complete Pre-order Request:"}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[P("cart.form.fullName")," ",a.jsx("span",{className:"required-star",children:"*"})]}),a.jsx("input",{type:"text",required:!0,value:F,onChange:se=>S(se.target.value),placeholder:C==="pt"?"ex: Maria Silva":"e.g. Maria Rossi",className:"form-control"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[P("cart.form.email")," ",a.jsx("span",{className:"required-star",children:"*"})]}),a.jsx("input",{type:"email",required:!0,value:U,onChange:se=>ee(se.target.value),placeholder:"maria@familia.pt",className:"form-control"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:P("cart.form.phone")}),a.jsx("input",{type:"tel",value:H,onChange:se=>ce(se.target.value),placeholder:"+351 912 345 678",className:"form-control"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:P("cart.form.deliveryDate")}),a.jsx("input",{type:"date",value:ie,onChange:se=>ye(se.target.value),className:"form-control"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:P("cart.form.notes")}),a.jsx("textarea",{rows:2,value:Te,onChange:se=>be(se.target.value),placeholder:C==="pt"?"Alguma alergia ou instrução especial de embalagem?":"Any dietary requirements or special inscription notes?",className:"form-control"})]}),a.jsxs("button",{type:"submit",disabled:er,className:"btn btn-primary btn-full-width",children:[a.jsx(Ad,{size:16})," ",P(er?"common.loading":"cart.form.submit")]})]})]}),a.jsxs("div",{className:"drawer-footer",children:[a.jsxs("div",{className:"drawer-subtotal-row",children:[a.jsxs("span",{className:"subtotal-label",children:[P("cart.subtotal"),":"]}),a.jsx("span",{className:"subtotal-amount",children:M(x)})]}),a.jsx("p",{className:"drawer-terms-note",children:P("cart.inquiryNotice")}),A?a.jsx("button",{type:"button",onClick:()=>E(!1),className:"btn btn-secondary btn-sm btn-full-width",children:C==="pt"?"Modificar Artigos no Cesto":"Modify Items in Bag"}):a.jsxs("button",{onClick:()=>E(!0),className:"btn btn-primary btn-lg btn-full-width",children:[a.jsx(Fe,{size:18})," ",P("cart.checkoutButton")]})]})]})]}),a.jsx("style",{children:`
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .drawer-panel {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
          animation: slideInRight 0.25s ease-out;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .drawer-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem 1.5rem;
        }
        .drawer-empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          text-align: center;
          gap: 1rem;
          color: var(--color-text-muted);
        }
        .drawer-empty-state h4 {
          font-size: 1.25rem;
          color: var(--color-text-main);
          margin: 0;
        }
        .drawer-confirmed-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem;
          text-align: center;
          gap: 1rem;
        }
        .confirmed-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .confirmed-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0;
        }
        .confirmed-order-code {
          font-size: 0.9375rem;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          margin: 0;
        }
        .confirmed-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }
        .drawer-allergen-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          font-size: 0.8125rem;
          color: #92400E;
        }
        .alert-icon-top {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .allergen-list {
          margin: 0.35rem 0 0 1rem;
          padding: 0;
        }
        .drawer-items-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .drawer-item-row {
          display: flex;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-item-thumb {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
        }
        .drawer-item-details {
          flex: 1;
          min-width: 0;
        }
        .drawer-item-name {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        .drawer-item-price {
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 800;
          color: var(--color-primary);
          display: block;
          margin-bottom: 0.35rem;
        }
        .item-personalisation-snippet {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.5rem;
        }
        .snippet-msg {
          font-style: italic;
          color: var(--color-text-light);
        }
        .item-glazes-snippet {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .mini-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
        .item-qty-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-qty-control {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.15rem;
        }
        .btn-drawer-qty {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .drawer-qty-val {
          font-size: 0.8125rem;
          font-weight: 700;
          min-width: 1.5rem;
          text-align: center;
        }
        .btn-drawer-delete {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.25rem;
          transition: color var(--transition-fast);
        }
        .btn-drawer-delete:hover {
          color: #EF4444;
        }
        .drawer-checkout-form {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 2px dashed var(--color-border);
        }
        .form-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1rem;
        }
        .required-star {
          color: var(--color-primary);
        }
        .drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-surface);
        }
        .drawer-subtotal-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .subtotal-label {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .subtotal-amount {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .drawer-terms-note {
          font-size: 0.75rem;
          color: var(--color-text-light);
          line-height: 1.4;
          margin-bottom: 1rem;
        }
      `})]})},Eh=({isOpen:u,onClose:d})=>{const{navigate:l,openProductModal:v}=Cr(),{t:h,formatCurrency:x,locale:b}=Me(),[z,k]=L.useState(""),[T,P]=L.useState("all");L.useEffect(()=>{const E=F=>{F.key==="Escape"&&d()};return u&&window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[u,d]);const M=L.useMemo(()=>{if(!z.trim())return T==="all"?Yt.slice(0,6):Yt.filter(F=>F.category===T).slice(0,6);const E=z.toLowerCase();return Yt.filter(F=>{const S=T==="all"||F.category===T,U=F.name.toLowerCase().includes(E)||F.description.toLowerCase().includes(E)||F.subcategory.toLowerCase().includes(E)||F.tags.some(ee=>ee.toLowerCase().includes(E));return S&&U})},[z,T]);if(!u)return null;const C=E=>{d(),v(E)},A=()=>{d(),l(`/search?q=${encodeURIComponent(z)}`)};return a.jsxs("div",{className:"modal-backdrop search-modal-backdrop",onClick:d,children:[a.jsxs("div",{className:"modal-dialog search-dialog",onClick:E=>E.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":h("nav.search"),children:[a.jsxs("div",{className:"search-modal-header",children:[a.jsx(Ma,{size:22,className:"search-input-icon"}),a.jsx("input",{type:"search",value:z,onChange:E=>k(E.target.value),placeholder:h("common.searchPlaceholder"),className:"search-modal-input",autoFocus:!0,"aria-label":"Search catalog query input"}),a.jsx("button",{onClick:d,className:"btn-icon","aria-label":h("common.close"),children:a.jsx(Ta,{size:20})})]}),a.jsxs("div",{className:"search-categories-bar",children:[a.jsxs("button",{onClick:()=>P("all"),className:`search-filter-pill ${T==="all"?"active":""}`,children:[h("common.all")," (",Yt.length,")"]}),a.jsx("button",{onClick:()=>P("colors"),className:`search-filter-pill ${T==="colors"?"active":""}`,children:h("brand.subbrands.colors")}),a.jsx("button",{onClick:()=>P("goodies"),className:`search-filter-pill ${T==="goodies"?"active":""}`,children:h("brand.subbrands.goodies")}),a.jsx("button",{onClick:()=>P("moments"),className:`search-filter-pill ${T==="moments"?"active":""}`,children:h("brand.subbrands.moments")})]}),a.jsxs("div",{className:"search-results-container",children:[a.jsx("div",{className:"search-results-header",children:a.jsx("span",{className:"results-count-text",children:z?b==="pt"?`Encontrados ${M.length} resultado(s) para "${z}"`:`Found ${M.length} results for "${z}"`:b==="pt"?"Sugestões Populares e Kits em Destaque":"Popular Suggestions & Featured Kits"})}),M.length===0?a.jsxs("div",{className:"search-no-results",children:[a.jsx(Fe,{size:36,color:"#CBD5E1"}),a.jsx("p",{children:b==="pt"?"Não foram encontrados produtos correspondentes à sua pesquisa.":"No products found matching your search."}),a.jsx("span",{className:"sub-hint",children:b==="pt"?'Experimente pesquisar por "prato", "bolo", "caneca", ou "lembrança".':'Try searching for "plate", "cake", "mug", or "gift".'})]}):a.jsx("div",{className:"search-results-list",children:M.map(E=>a.jsxs("button",{onClick:()=>C(E.id),className:"search-result-item",children:[a.jsx("img",{src:E.image,alt:E.name,className:"search-thumb"}),a.jsxs("div",{className:"search-item-info",children:[a.jsxs("div",{className:"search-item-title-row",children:[a.jsx("strong",{className:"search-item-title",children:E.name}),a.jsx("span",{className:"search-item-cat-badge",children:E.subcategory})]}),a.jsx("p",{className:"search-item-desc",children:E.description}),a.jsxs("div",{className:"search-item-footer",children:[a.jsx("span",{className:"search-price",children:x(E.price)}),a.jsxs("span",{className:"search-tag-sample",children:[a.jsx(fh,{size:12})," ",E.tags[0]]})]})]}),a.jsx(gs,{size:18,className:"search-arrow-icon"})]},E.id))})]}),z&&a.jsx("div",{className:"search-modal-footer",children:a.jsx("button",{onClick:A,className:"btn btn-secondary btn-full-width",children:b==="pt"?"Ver Todos os Resultados com Filtros Avançados":"Open Full Search Page with Advanced Filters"})})]}),a.jsx("style",{children:`
        .search-modal-backdrop {
          align-items: flex-start;
          padding-top: 8vh;
        }
        .search-dialog {
          max-width: 680px;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .search-modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
          background: #FFFFFF;
        }
        .search-input-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .search-modal-input {
          flex-grow: 1;
          border: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-text-main);
          outline: none;
        }
        .search-categories-bar {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg-subtle);
          border-bottom: 1px solid var(--color-border-light);
          overflow-x: auto;
        }
        .search-filter-pill {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.35rem 0.85rem;
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          white-space: nowrap;
        }
        .search-filter-pill.active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .search-results-container {
          padding: 1.25rem 1.5rem;
          max-height: 480px;
          overflow-y: auto;
        }
        .search-results-header {
          margin-bottom: 0.75rem;
        }
        .results-count-text {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          font-weight: 600;
          text-transform: uppercase;
        }
        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          background: #FFFFFF;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all var(--transition-fast);
        }
        .search-result-item:hover {
          background: var(--color-primary-light);
          border-color: rgba(225, 40, 91, 0.2);
        }
        .search-thumb {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .search-item-info {
          flex-grow: 1;
          overflow: hidden;
        }
        .search-item-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }
        .search-item-title {
          font-size: 0.95rem;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .search-item-cat-badge {
          font-size: 0.6875rem;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          flex-shrink: 0;
        }
        .search-item-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .search-item-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .search-price {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
        }
        .search-tag-sample {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .search-arrow-icon {
          color: var(--color-text-light);
          flex-shrink: 0;
        }
        .search-no-results {
          padding: 3rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
        }
        .sub-hint {
          font-size: 0.8125rem;
          color: var(--color-text-light);
        }
        .search-modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-bg-subtle);
        }
      `})]})},Mh=({isOpen:u,onClose:d})=>{const{settings:l,setFontSize:v,toggleHighContrast:h,toggleReducedMotion:x,resetSettings:b}=Sd(),{navigate:z}=Cr(),{t:k,locale:T}=Me();return u?a.jsxs("div",{className:"modal-backdrop",onClick:d,role:"dialog","aria-modal":"true","aria-labelledby":"a11y-modal-title",children:[a.jsxs("div",{className:"modal-dialog a11y-modal-dialog",onClick:P=>P.stopPropagation(),children:[a.jsxs("div",{className:"a11y-modal-header",children:[a.jsxs("div",{className:"a11y-title-wrap",children:[a.jsx(st,{size:22,color:"#E1285B"}),a.jsx("h3",{id:"a11y-modal-title",className:"a11y-modal-title",children:k("accessibility.controlsTitle")})]}),a.jsx("button",{onClick:d,className:"btn-icon","aria-label":k("common.close"),children:a.jsx(Ta,{size:20})})]}),a.jsxs("div",{className:"a11y-modal-body",children:[a.jsx("p",{className:"a11y-intro-text",children:T==="pt"?"Dedicamo-nos a proporcionar uma experiência confortável, familiar e acessível a todos os visitantes. Ajuste as suas preferências abaixo:":"We are dedicated to providing a comfortable, family-friendly, and accessible experience for all visitors. Adjust your viewing preferences below:"}),a.jsxs("div",{className:"a11y-control-card",children:[a.jsxs("div",{className:"a11y-card-header",children:[a.jsx(_d,{size:20,color:"#0284C7"}),a.jsxs("div",{children:[a.jsx("strong",{className:"a11y-control-name",children:k("accessibility.textSize")}),a.jsx("p",{className:"a11y-control-desc",children:T==="pt"?"Aumente o tamanho da letra para uma leitura confortável em qualquer dispositivo.":"Increase font size for comfortable reading across all devices."})]})]}),a.jsxs("div",{className:"font-size-buttons-row",children:[a.jsxs("button",{onClick:()=>v("normal"),className:`font-size-choice-btn ${l.fontSize==="normal"?"active":""}`,children:[a.jsx("span",{children:"A"}),a.jsx("small",{children:k("accessibility.textSizeNormal")}),l.fontSize==="normal"&&a.jsx(Ir,{size:14})]}),a.jsxs("button",{onClick:()=>v("large"),className:`font-size-choice-btn ${l.fontSize==="large"?"active":""}`,children:[a.jsx("span",{style:{fontSize:"1.2rem"},children:"A"}),a.jsx("small",{children:k("accessibility.textSizeLarge")}),l.fontSize==="large"&&a.jsx(Ir,{size:14})]}),a.jsxs("button",{onClick:()=>v("xlarge"),className:`font-size-choice-btn ${l.fontSize==="xlarge"?"active":""}`,children:[a.jsx("span",{style:{fontSize:"1.4rem"},children:"A"}),a.jsx("small",{children:k("accessibility.textSizeXLarge")}),l.fontSize==="xlarge"&&a.jsx(Ir,{size:14})]})]})]}),a.jsxs("div",{className:"a11y-control-card",children:[a.jsxs("div",{className:"a11y-card-header",children:[a.jsx(st,{size:20,color:"#F8971D"}),a.jsxs("div",{children:[a.jsx("strong",{className:"a11y-control-name",children:k("accessibility.contrast")}),a.jsx("p",{className:"a11y-control-desc",children:k("accessibility.contrastHelp")})]})]}),a.jsxs("button",{onClick:h,className:`a11y-toggle-btn ${l.highContrast?"active":""}`,"aria-pressed":l.highContrast,children:[a.jsx("span",{children:l.highContrast?T==="pt"?"Alto Contraste Activado":"High Contrast Enabled":T==="pt"?"Cores Padrão":"Standard Warm Colors"}),a.jsx("span",{className:"toggle-switch-pill"})]})]}),a.jsxs("div",{className:"a11y-control-card",children:[a.jsxs("div",{className:"a11y-card-header",children:[a.jsx(Bd,{size:20,color:"#10B981"}),a.jsxs("div",{children:[a.jsx("strong",{className:"a11y-control-name",children:k("accessibility.motion")}),a.jsx("p",{className:"a11y-control-desc",children:k("accessibility.motionHelp")})]})]}),a.jsxs("button",{onClick:x,className:`a11y-toggle-btn ${l.reducedMotion?"active":""}`,"aria-pressed":l.reducedMotion,children:[a.jsx("span",{children:l.reducedMotion?T==="pt"?"Animações Reduzidas":"Reduced Motion Active":T==="pt"?"Animações Padrão":"Subtle Animations Enabled"}),a.jsx("span",{className:"toggle-switch-pill"})]})]})]}),a.jsxs("div",{className:"a11y-modal-footer",children:[a.jsxs("button",{onClick:b,className:"btn btn-secondary btn-sm",children:[a.jsx(rh,{size:14})," ",T==="pt"?"Repor Predefinições":"Reset to Defaults"]}),a.jsxs("button",{onClick:()=>{d(),z("/accessibility")},className:"btn btn-outline-primary btn-sm",children:[a.jsx(vf,{size:14})," ",T==="pt"?"Ler Declaração Completa":"Read Full Statement"]})]})]}),a.jsx("style",{children:`
        .a11y-modal-dialog {
          max-width: 580px;
          border-radius: var(--radius-xl);
        }
        .a11y-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .a11y-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .a11y-modal-title {
          font-size: 1.35rem;
        }
        .a11y-modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .a11y-intro-text {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }
        .a11y-control-card {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
        }
        .a11y-card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .a11y-control-name {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .a11y-control-desc {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          margin: 0;
        }
        .font-size-buttons-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.5rem;
        }
        .font-size-choice-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0.75rem 0.5rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .font-size-choice-btn small {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-light);
        }
        .font-size-choice-btn:hover {
          border-color: var(--color-primary);
        }
        .font-size-choice-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .font-size-choice-btn.active small {
          color: var(--color-primary);
        }
        .a11y-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .toggle-switch-pill {
          width: 42px;
          height: 24px;
          background: #CBD5E1;
          border-radius: var(--radius-full);
          position: relative;
          transition: background 0.2s ease;
        }
        .toggle-switch-pill::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 3px;
          width: 18px;
          height: 18px;
          background: #FFFFFF;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
        .a11y-toggle-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .a11y-toggle-btn.active .toggle-switch-pill {
          background: var(--color-primary);
        }
        .a11y-toggle-btn.active .toggle-switch-pill::after {
          transform: translateX(18px);
        }
        .a11y-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: var(--color-bg-subtle);
          border-top: 1px solid var(--color-border-light);
        }
      `})]}):null},Th=()=>{const{toasts:u,removeToast:d}=hs();return u.length===0?null:a.jsxs("div",{className:"toast-container",role:"region","aria-label":"Notification alerts","aria-live":"polite",children:[u.map(l=>a.jsxs("div",{className:`toast-card toast-card-${l.type||"success"}`,role:"status",children:[a.jsxs("div",{className:"toast-icon-wrap",children:[l.type==="success"&&a.jsx(Ge,{size:20,color:"#10B981"}),l.type==="dietary"&&a.jsx(fs,{size:20,color:"#D97706"}),l.type==="info"&&a.jsx(bn,{size:20,color:"#0284C7"}),(!l.type||l.type==="warning")&&a.jsx(fs,{size:20,color:"#D97706"})]}),a.jsxs("div",{className:"toast-text-wrap",children:[a.jsx("strong",{className:"toast-title",children:l.title}),a.jsx("p",{className:"toast-message",children:l.message})]}),a.jsx("button",{onClick:()=>d(l.id),className:"toast-close-btn","aria-label":"Dismiss notification",children:a.jsx(Ta,{size:15})})]},l.id)),a.jsx("style",{children:`
        .toast-icon-wrap {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .toast-text-wrap {
          flex-grow: 1;
        }
        .toast-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.15rem;
        }
        .toast-message {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin: 0;
        }
        .toast-close-btn {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.2rem;
          border-radius: var(--radius-sm);
        }
        .toast-close-btn:hover {
          color: var(--color-text-main);
        }
      `})]})},Jt=({product:u})=>{const{addToCart:d}=Aa(),{openProductModal:l,navigate:v}=Cr(),{t:h,formatCurrency:x,locale:b}=Me(),z=u.category==="colors",k=u.category==="goodies",T=u.category==="moments",P=z?u:null,M=k?u:null,C=T?u:null;return a.jsxs("article",{className:"product-card","aria-labelledby":`prod-title-${u.id}`,children:[a.jsxs("div",{className:"product-card-media",children:[a.jsx("img",{src:u.image,alt:`${u.name} - ${u.description}`,className:"product-card-img",loading:"lazy"}),a.jsx("div",{className:"product-card-badge-top",children:u.isFeatured&&a.jsxs("span",{className:"badge badge-primary",children:[a.jsx(Fe,{size:11})," ",h("common.sortFeatured")]})}),a.jsx("div",{className:"product-card-overlay",children:a.jsxs("button",{onClick:()=>l(u.id),className:"btn btn-secondary btn-sm overlay-btn","aria-label":`${h("common.quickView")}: ${u.name}`,children:[a.jsx(st,{size:15})," ",h("common.quickView")]})})]}),a.jsxs("div",{className:"product-card-body",children:[a.jsxs("div",{className:"product-card-meta",children:[a.jsx("span",{className:"product-subcategory",children:u.subcategory}),a.jsxs("div",{className:"product-rating","aria-label":`${u.rating} / 5 (${u.reviewCount} ${h("common.reviews")})`,children:[a.jsx(it,{size:13,fill:"#F8971D",color:"#F8971D"}),a.jsx("span",{children:u.rating.toFixed(1)}),a.jsxs("span",{className:"review-count",children:["(",u.reviewCount,")"]})]})]}),a.jsx("h3",{id:`prod-title-${u.id}`,className:"product-card-title",children:a.jsx("button",{onClick:()=>l(u.id),className:"product-title-btn",children:u.name})}),a.jsx("p",{className:"product-card-desc",children:u.description}),a.jsxs("div",{className:"product-attribute-row",children:[P&&a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"attribute-pill",children:[a.jsx(Ue,{size:13,color:"#10B981"})," ",P.recommendedAge]}),a.jsxs("span",{className:"attribute-pill",children:[P.glazeCount," ",b==="pt"?"Vidrados":"Glazes"]})]}),M&&a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"attribute-pill",children:["🍽️ ",M.portionSize.split("(")[0]]}),M.dietaryTags.slice(0,2).map(A=>a.jsx("span",{className:"badge badge-diet",children:A},A))]}),C&&a.jsxs("span",{className:"attribute-pill",children:[a.jsx(ms,{size:13,color:"#E1285B"})," ",b==="pt"?"Gravação Personalizada":"Custom Inscription"]})]}),a.jsxs("div",{className:"product-card-footer",children:[a.jsxs("div",{className:"product-price-wrap",children:[a.jsx("span",{className:"price-prefix",children:T?b==="pt"?"desde ":"from ":""}),a.jsx("span",{className:"product-price",children:x(u.price)})]}),a.jsx("div",{className:"product-actions-group",children:T?a.jsx("button",{onClick:()=>v("/moments-souvenirs"),className:"btn btn-primary btn-sm","aria-label":`${b==="pt"?"Personalizar":"Personalize"} ${u.name}`,children:b==="pt"?"Personalizar":"Personalize"}):a.jsxs("button",{onClick:()=>d(u,1),className:"btn btn-primary btn-sm","aria-label":`${h("common.addToCart")}: ${u.name}`,children:[a.jsx(Ea,{size:15})," ",h("common.addToCart")]})})]})]}),a.jsx("style",{children:`
        .product-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          backdrop-filter: blur(2px);
        }
        .product-card:hover .product-card-overlay {
          opacity: 1;
        }
        .overlay-btn {
          box-shadow: var(--shadow-lg);
        }
        .product-subcategory {
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .review-count {
          color: var(--color-text-light);
          font-weight: 400;
        }
        .product-title-btn {
          background: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          text-align: left;
          cursor: pointer;
          padding: 0;
          line-height: 1.3;
          transition: color var(--transition-fast);
        }
        .product-title-btn:hover {
          color: var(--color-primary);
        }
        .product-attribute-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .attribute-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
        }
        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .price-prefix {
          font-size: 0.8125rem;
          color: var(--color-text-light);
        }
        .product-actions-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
      `})]})},bd=()=>{const{navigate:u}=Cr(),{t:d,locale:l,formatCurrency:v}=Me(),h=Hd(l),x=h.filter(C=>C.isFeatured),[b,z]=L.useState(0),[k,T]=L.useState(!0);L.useEffect(()=>{if(!k)return;const C=setInterval(()=>{z(A=>(A+1)%x.length)},4500);return()=>clearInterval(C)},[k,x.length]);const P=()=>{z(C=>(C-1+x.length)%x.length)},M=()=>{z(C=>(C+1)%x.length)};return a.jsxs("div",{className:"home-page",children:[a.jsxs("section",{className:"hero-section","aria-label":"Welcome Hero",children:[a.jsxs("div",{className:"hero-background-decor","aria-hidden":"true",children:[a.jsx("div",{className:"hero-blob hero-blob-1"}),a.jsx("div",{className:"hero-blob hero-blob-2"}),a.jsx("div",{className:"hero-blob hero-blob-3"})]}),a.jsxs("div",{className:"container hero-container",children:[a.jsxs("div",{className:"hero-text-col",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx(Fe,{size:16,className:"text-primary"}),a.jsx("span",{children:d("home.hero.badge")})]}),a.jsx("h1",{className:"hero-main-title",children:d("home.hero.title")}),a.jsxs("p",{className:"hero-tagline",children:[a.jsx("strong",{children:"elamel"})," ",l==="pt"?"une famílias, crianças e casais através de conjuntos certificados de pintura em cerâmica aptos para uso alimentar, iguarias artesanais de pastelaria e lembranças personalizadas que perduram no tempo.":"brings families and couples together through certified food-safe ceramic painting kits, artisanal bakery treats, and treasured personalized keepsakes."]}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsxs("button",{onClick:()=>u("/colors"),className:"btn btn-primary btn-lg",children:[a.jsx(ga,{size:20})," ",d("home.hero.ctaColors")]}),a.jsxs("button",{onClick:()=>u("/goodies"),className:"btn btn-secondary btn-lg",children:[a.jsx(fn,{size:20})," ",d("home.hero.ctaGoodies")]})]}),a.jsx("div",{className:"hero-secondary-link-wrap",children:a.jsxs("button",{onClick:()=>u("/moments-souvenirs"),className:"hero-sub-link",children:[a.jsx("span",{children:d("home.hero.ctaMoments")}),a.jsx(us,{size:16})]})}),a.jsxs("div",{className:"hero-trust-row",children:[a.jsxs("div",{className:"trust-item",children:[a.jsx(Ue,{size:18,color:"#10B981"}),a.jsx("span",{children:l==="pt"?"Vidrados 100% Não-Tóxicos":"100% Non-Toxic Glazes"})]}),a.jsxs("div",{className:"trust-item",children:[a.jsx(Ge,{size:18,color:"#10B981"}),a.jsx("span",{children:l==="pt"?"Pastelaria Sem Amendoins":"Peanut-Free Bakery"})]}),a.jsxs("div",{className:"trust-item",children:[a.jsx(kr,{size:18,color:"#E1285B"}),a.jsx("span",{children:l==="pt"?"Para Todas as Idades":"Made for All Ages"})]})]})]}),a.jsx("div",{className:"hero-media-col",children:a.jsxs("div",{className:"hero-image-card",children:[a.jsx("img",{src:"./images/hero_family.jpg",alt:"Família alegre a pintar loiça de cerâmica em conjunto à volta da mesa",className:"hero-main-img"}),a.jsxs("div",{className:"hero-floating-card",children:[a.jsx("div",{className:"floating-card-icon",children:a.jsx(ga,{size:22,color:"#FFFFFF"})}),a.jsxs("div",{children:[a.jsx("strong",{children:l==="pt"?"Manhã Criativa em Família":"Weekend Craft Morning"}),a.jsx("p",{children:l==="pt"?"Cerâmica não-tóxica e doces entregues à sua porta":"Non-toxic ceramics & sweet treats delivered to your door"})]})]})]})})]})]}),a.jsx("section",{className:"section categories-highlight-section","aria-label":"Our Three Subbrands",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-title-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",d("home.categories.eyebrow")]}),a.jsx("h2",{className:"section-title",children:d("home.categories.title")}),a.jsx("p",{className:"section-subtitle",children:d("home.categories.subtitle")})]}),a.jsxs("div",{className:"categories-grid-3",children:[a.jsxs("div",{className:"category-feature-card category-colors-card",children:[a.jsxs("div",{className:"cat-card-media",children:[a.jsx("img",{src:"./images/ceramic_kits.jpg",alt:"Elamel Colors - Conjuntos de pintura em cerâmica com vidrados pastel e pincéis",className:"cat-card-img"}),a.jsx("span",{className:"cat-pill pill-rose",children:d("brand.subbrands.colors")})]}),a.jsxs("div",{className:"cat-card-body",children:[a.jsx("h3",{className:"cat-card-title",children:d("home.categories.colors.title")}),a.jsx("p",{className:"cat-card-text",children:d("home.categories.colors.desc")}),a.jsxs("ul",{className:"cat-card-features",children:[a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Pratos de jantar, taças e canecas":"Dinner plates, bowls & mugs"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Vidrados para forno doméstico fácil":"Easy home oven-cure glazes"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Seguro para crianças e principiantes":"Safe for toddlers and beginner artists"]})]}),a.jsxs("button",{onClick:()=>u("/colors"),className:"btn btn-primary btn-full-width",children:[a.jsx(ga,{size:18})," ",d("home.categories.colors.action")]})]})]}),a.jsxs("div",{className:"category-feature-card category-goodies-card",children:[a.jsxs("div",{className:"cat-card-media",children:[a.jsx("img",{src:"./images/goodies_assortment.jpg",alt:"Elamel Goodies - Bolos artesanais e biscoitos decorados à mão",className:"cat-card-img"}),a.jsx("span",{className:"cat-pill pill-orange",children:d("brand.subbrands.goodies")})]}),a.jsxs("div",{className:"cat-card-body",children:[a.jsx("h3",{className:"cat-card-title",children:d("home.categories.goodies.title")}),a.jsx("p",{className:"cat-card-text",children:d("home.categories.goodies.desc")}),a.jsxs("ul",{className:"cat-card-features",children:[a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Fórmulas familiares com teor reduzido de açúcar":"Low-sugar family formulations"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Opções sem glúten e sem amendoins":"Gluten-free & nut-free options"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Criador interactivo de Caixas de Iguarias":"Custom Treat Box creator available"]})]}),a.jsxs("button",{onClick:()=>u("/goodies"),className:"btn btn-primary btn-full-width",children:[a.jsx(fn,{size:18})," ",d("home.categories.goodies.action")]})]})]}),a.jsxs("div",{className:"category-feature-card category-moments-card",children:[a.jsxs("div",{className:"cat-card-media",children:[a.jsx("img",{src:"./images/moments_gifts.jpg",alt:"Lembranças personalizadas e peças de família Elamel",className:"cat-card-img"}),a.jsx("span",{className:"cat-pill pill-cyan",children:d("brand.subbrands.moments")})]}),a.jsxs("div",{className:"cat-card-body",children:[a.jsx("h3",{className:"cat-card-title",children:d("home.categories.moments.title")}),a.jsx("p",{className:"cat-card-text",children:d("home.categories.moments.desc")}),a.jsxs("ul",{className:"cat-card-features",children:[a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Apelidos de família e datas comemorativas":"Family names & special dates"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Estúdio de pré-visualização em tempo real":"Live real-time studio preview tool"]}),a.jsxs("li",{children:[a.jsx(Ge,{size:15,color:"#10B981"})," ",l==="pt"?"Embalagem nobre de oferta de cortesia":"Complimentary luxury gift wrap"]})]}),a.jsxs("button",{onClick:()=>u("/moments-souvenirs"),className:"btn btn-primary btn-full-width",children:[a.jsx(ms,{size:18})," ",d("home.categories.moments.action")]})]})]})]})]})}),a.jsx("section",{className:"section why-love-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"why-love-banner",children:[a.jsxs("div",{className:"section-title-wrap text-center-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(kr,{size:14})," ",d("home.whyLove.eyebrow")]}),a.jsx("h2",{className:"section-title",children:d("home.whyLove.title")}),a.jsx("p",{className:"section-subtitle",children:d("home.whyLove.subtitle")})]}),a.jsxs("div",{className:"why-love-grid",children:[a.jsxs("div",{className:"why-card",children:[a.jsx("div",{className:"why-icon-circle color-rose",children:a.jsx(Ue,{size:28,color:"#E1285B"})}),a.jsx("h4",{className:"why-card-title",children:d("home.whyLove.reasons.safe.title")}),a.jsx("p",{className:"why-card-desc",children:d("home.whyLove.reasons.safe.desc")})]}),a.jsxs("div",{className:"why-card",children:[a.jsx("div",{className:"why-icon-circle color-orange",children:a.jsx(bf,{size:28,color:"#F8971D"})}),a.jsx("h4",{className:"why-card-title",children:d("home.whyLove.reasons.allergens.title")}),a.jsx("p",{className:"why-card-desc",children:d("home.whyLove.reasons.allergens.desc")})]}),a.jsxs("div",{className:"why-card",children:[a.jsx("div",{className:"why-icon-circle color-green",children:a.jsx(Ld,{size:28,color:"#10B981"})}),a.jsx("h4",{className:"why-card-title",children:d("home.whyLove.reasons.bonding.title")}),a.jsx("p",{className:"why-card-desc",children:d("home.whyLove.reasons.bonding.desc")})]}),a.jsxs("div",{className:"why-card",children:[a.jsx("div",{className:"why-icon-circle color-cyan",children:a.jsx(Fe,{size:28,color:"#0284C7"})}),a.jsx("h4",{className:"why-card-title",children:d("home.whyLove.reasons.transparency.title")}),a.jsx("p",{className:"why-card-desc",children:d("home.whyLove.reasons.transparency.desc")})]})]})]})})}),a.jsx("section",{className:"section featured-showcase-section","aria-label":"Featured Products Carousel",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"carousel-section-header",children:[a.jsxs("div",{children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",d("home.featured.eyebrow")]}),a.jsx("h2",{className:"section-title",children:d("home.featured.title")})]}),a.jsxs("div",{className:"carousel-controls-toolbar",role:"toolbar","aria-label":"Carousel slide controls",children:[a.jsx("button",{onClick:()=>T(!k),className:"btn-icon carousel-ctrl-btn",title:k?"Pause carousel auto-rotation":"Play carousel auto-rotation","aria-label":k?"Pause auto-rotation":"Play auto-rotation",children:k?a.jsx(Uf,{size:17}):a.jsx(Yf,{size:17})}),a.jsx("button",{onClick:P,className:"btn-icon carousel-ctrl-btn","aria-label":"Previous featured item",children:a.jsx(df,{size:20})}),a.jsx("button",{onClick:M,className:"btn-icon carousel-ctrl-btn","aria-label":"Next featured item",children:a.jsx(gs,{size:20})})]})]}),a.jsxs("div",{className:"featured-carousel-display",children:[a.jsx("div",{className:"carousel-track",children:x.map((C,A)=>A===b?a.jsx("div",{className:"carousel-slide-active",role:"group","aria-roledescription":"slide","aria-label":`${A+1} of ${x.length}`,children:a.jsxs("div",{className:"carousel-slide-grid",children:[a.jsxs("div",{className:"carousel-slide-img-wrap",children:[a.jsx("img",{src:C.image,alt:C.name,className:"carousel-slide-img"}),a.jsx("span",{className:"badge badge-primary carousel-badge",children:C.subcategory})]}),a.jsxs("div",{className:"carousel-slide-info",children:[a.jsxs("div",{className:"carousel-meta-row",children:[a.jsxs("span",{className:"product-rating",children:[a.jsx(it,{size:15,fill:"#F8971D",color:"#F8971D"}),a.jsx("strong",{children:C.rating.toFixed(1)})," (",C.reviewCount," ",l==="pt"?"avaliações":"reviews",")"]}),a.jsxs("span",{className:"carousel-category-tag",children:["elamel • ",C.category.toUpperCase()]})]}),a.jsx("h3",{className:"carousel-item-title",children:C.name}),a.jsx("p",{className:"carousel-item-desc",children:C.longDescription}),a.jsxs("div",{className:"carousel-price-action-row",children:[a.jsx("span",{className:"carousel-price",children:v(C.price)}),a.jsxs("button",{onClick:()=>{C.category==="moments"?u("/moments-souvenirs"):u(`/${C.category}`)},className:"btn btn-primary btn-lg",children:[l==="pt"?"Explorar Este Artigo":"Explore This Item"," ",a.jsx(us,{size:18})]})]})]})]})},C.id):null)}),a.jsx("div",{className:"carousel-dots-nav",children:x.map((C,A)=>a.jsx("button",{onClick:()=>z(A),className:`carousel-dot ${A===b?"active":""}`,"aria-label":`Go to slide ${A+1}`},A))})]}),a.jsxs("div",{className:"grid-highlights-wrap",children:[a.jsx("h3",{className:"sub-grid-heading",children:l==="pt"?"Mais Destaques para a Família":"More Family Highlights"}),a.jsx("div",{className:"product-grid",children:h.slice(0,3).map(C=>a.jsx(Jt,{product:C},C.id))})]})]})}),a.jsx("section",{className:"section cta-banner-section",children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"cta-banner-card",children:a.jsxs("div",{className:"cta-content",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",d("home.cta.eyebrow")]}),a.jsx("h2",{className:"cta-title",children:d("home.cta.title")}),a.jsx("p",{className:"cta-subtitle",children:d("home.cta.subtitle")}),a.jsxs("div",{className:"cta-buttons-row",children:[a.jsxs("button",{onClick:()=>u("/colors"),className:"btn btn-primary btn-lg",children:[a.jsx(ga,{size:18})," ",d("home.cta.buttonColors")]}),a.jsxs("button",{onClick:()=>u("/moments-souvenirs"),className:"btn btn-secondary btn-lg",children:[a.jsx(ms,{size:18})," ",d("home.cta.buttonMoments")]})]})]})})})}),a.jsx("style",{children:`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem 0;
          overflow: hidden;
          background: var(--gradient-warm-hero);
        }
        .hero-background-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.25;
        }
        .hero-blob-1 {
          top: -10%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: #E1285B;
        }
        .hero-blob-2 {
          bottom: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: #F8971D;
        }
        .hero-blob-3 {
          top: 30%;
          right: 30%;
          width: 300px;
          height: 300px;
          background: #0284C7;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.25rem;
        }
        .hero-main-title {
          font-size: 3.25rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .hero-tagline {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .hero-secondary-link-wrap {
          margin-bottom: 2.5rem;
        }
        .hero-sub-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s ease;
        }
        .hero-sub-link:hover {
          gap: 0.75rem;
          text-decoration: underline;
        }
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-light);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .hero-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
        }
        .hero-main-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 4px solid #FFFFFF;
          object-fit: cover;
          aspect-ratio: 16 / 10;
        }
        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          max-width: 320px;
          animation: floatSlow 4s ease-in-out infinite;
        }
        .floating-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--gradient-rainbow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-floating-card strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .hero-floating-card p {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Categories 3-Grid */
        .categories-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .category-feature-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .category-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }
        .cat-card-media {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .cat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-feature-card:hover .cat-card-img {
          transform: scale(1.06);
        }
        .cat-pill {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }
        .pill-rose { background: #FFFFFF; color: var(--color-primary); }
        .pill-orange { background: #FFFFFF; color: var(--color-orange); }
        .pill-cyan { background: #FFFFFF; color: var(--color-cyan); }
        .cat-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .cat-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .cat-card-text {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .cat-card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .cat-card-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Why Families Love Elamel */
        .why-love-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem 2.5rem;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .text-center-wrap {
          text-align: center;
          margin: 0 auto 2.5rem auto;
          max-width: 680px;
        }
        .why-love-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .why-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .why-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }
        .color-rose { background: var(--color-primary-light); }
        .color-orange { background: var(--color-orange-light); }
        .color-green { background: var(--color-green-light); }
        .color-cyan { background: var(--color-cyan-light); }
        .why-card-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
          word-break: break-word;
        }
        .why-card-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          word-break: break-word;
        }

        /* Featured Carousel */
        .carousel-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .carousel-controls-toolbar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .carousel-ctrl-btn {
          width: 44px;
          height: 44px;
        }
        .featured-carousel-display {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          margin-bottom: 4rem;
        }
        .carousel-slide-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
        }
        .carousel-slide-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
        }
        .carousel-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .carousel-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
        }
        .carousel-slide-info {
          padding: 3rem;
          display: flex;
          flex-direction: column;
        }
        .carousel-meta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .carousel-category-tag {
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }
        .carousel-item-title {
          font-size: 2.15rem;
          margin-bottom: 1rem;
        }
        .carousel-item-desc {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .carousel-price-action-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .carousel-price {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .carousel-dots-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.25rem;
          border-top: 1px solid var(--color-border-light);
          background: var(--color-bg-subtle);
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .carousel-dot.active {
          width: 32px;
          border-radius: var(--radius-full);
          background: var(--color-primary);
        }
        .sub-grid-heading {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        /* CTA Banner */
        .cta-banner-card {
          background: var(--gradient-rainbow);
          border-radius: var(--radius-xl);
          padding: 4rem 2rem;
          text-align: center;
          color: #FFFFFF;
          box-shadow: var(--shadow-xl);
        }
        .cta-content {
          max-width: 650px;
          margin: 0 auto;
        }
        .cta-banner-card .section-eyebrow {
          background: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }
        .cta-title {
          font-size: 2.5rem;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }
        .cta-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .cta-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cta-buttons-row .btn-primary {
          background: #FFFFFF;
          color: var(--color-primary);
        }
        .cta-buttons-row .btn-primary:hover {
          background: #FFF5F7;
          color: var(--color-primary-hover);
        }
        .cta-buttons-row .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }
        .cta-buttons-row .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: #FFFFFF;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 1100px) {
          .why-love-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem 1.5rem;
          }
          .why-love-banner {
            padding: 3rem 2rem;
          }
        }
        @media (max-width: 992px) {
          .hero-container { grid-template-columns: 1fr; }
          .hero-main-title { font-size: 2.6rem; }
          .categories-grid-3 { grid-template-columns: 1fr; }
          .carousel-slide-grid { grid-template-columns: 1fr; }
          .carousel-slide-info { padding: 1.75rem; }
        }
        @media (max-width: 640px) {
          .hero-main-title { font-size: 2.1rem; }
          .why-love-grid { grid-template-columns: 1fr; gap: 1.75rem; }
          .why-love-banner { padding: 2.25rem 1.25rem; }
          .cta-title { font-size: 1.85rem; }
        }
      `})]})},Rr=()=>{const{breadcrumbs:u,navigate:d}=Cr(),{t:l}=Me();if(u.length<=1)return null;const v=h=>h.href==="/"?l("nav.home"):h.href.startsWith("/colors")?l("brand.subbrands.colors"):h.href.startsWith("/goodies")?l("brand.subbrands.goodies"):h.href.startsWith("/moments")?l("brand.subbrands.moments"):h.href.startsWith("/about")?l("nav.about"):h.href.startsWith("/contact")?l("nav.contact"):h.href.startsWith("/search")?l("nav.search"):h.href.startsWith("/accessibility")?l("nav.accessibility"):h.href.startsWith("/privacy")?l("footer.links.privacy"):h.href.startsWith("/terms")?l("footer.links.terms"):h.href.startsWith("/sitemap")?l("footer.links.sitemap"):h.label;return a.jsxs("nav",{className:"breadcrumbs-nav","aria-label":"Breadcrumbs navigation",children:[a.jsx("div",{className:"container",children:a.jsx("ol",{className:"breadcrumbs-list",children:u.map((h,x)=>{const b=x===u.length-1,z=v(h);return a.jsxs("li",{className:"breadcrumbs-item",children:[x===0?a.jsxs("button",{onClick:()=>d(h.href),className:"breadcrumb-home-btn","aria-label":l("nav.home"),children:[a.jsx(gn,{size:15}),a.jsx("span",{children:l("nav.home")})]}):b?a.jsx("span",{className:"breadcrumbs-current","aria-current":"page",children:z}):a.jsx("button",{onClick:()=>d(h.href),className:"breadcrumb-btn",children:z}),!b&&a.jsx(gs,{size:14,className:"breadcrumb-separator","aria-hidden":"true"})]},h.href)})})}),a.jsx("style",{children:`
        .breadcrumb-home-btn,
        .breadcrumb-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: color var(--transition-fast);
        }
        .breadcrumb-home-btn:hover,
        .breadcrumb-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .breadcrumb-separator {
          color: var(--color-text-light);
        }
      `})]})},Ah=()=>{const{addToCart:u}=Aa(),{t:d,formatCurrency:l,locale:v}=Me(),h=[{id:"plate",name:v==="pt"?"Prato de Jantar Botânico":"Botanical Dinner Plate",basePrice:34.5,shape:"circle",prod:Qt[0]},{id:"mug",name:v==="pt"?"Caneca Aconchegante":"Cozy Morning Mug",basePrice:29,shape:"mug",prod:Qt[1]},{id:"vase",name:v==="pt"?"Vaso Flor de Primavera":"Spring Blossom Vase",basePrice:38,shape:"vase",prod:Qt[2]},{id:"animal",name:v==="pt"?"Coelhinho Explorador":"Little Explorer Bunny",basePrice:26.5,shape:"bunny",prod:Qt[3]}],[x,b]=L.useState(h[0]),z=[{name:v==="pt"?"Rosa Pétala":"Petal Rose",hex:"#F472B6",desc:v==="pt"?"Rosa suave e floral":"Soft warm floral pink"},{name:v==="pt"?"Pêssego Pôr-do-Sol":"Sunset Peach",hex:"#FB923C",desc:v==="pt"?"Alperce luminoso e acolhedor":"Sunny warm apricot"},{name:v==="pt"?"Amarelo Raio-de-Sol":"Buttercup Yellow",hex:"#FACC15",desc:v==="pt"?"Amarelo vivo e alegre":"Joyful bright yellow"},{name:v==="pt"?"Verde Salva":"Mint Meadow",hex:"#34D399",desc:v==="pt"?"Verde folha refrescante":"Gentle leafy green"},{name:v==="pt"?"Azul Celeste":"Sky Cyan",hex:"#38BDF8",desc:v==="pt"?"Azul límpido da manhã":"Crisp morning blue"},{name:v==="pt"?"Lavanda Silvestre":"Lavender Frost",hex:"#C084FC",desc:v==="pt"?"Púrpura suave e sereno":"Serene soft purple"},{name:v==="pt"?"Barro Terracota":"Earthy Clay",hex:"#A8A29E",desc:v==="pt"?"Neutro orgânico quente":"Warm natural neutral"}],[k,T]=L.useState(z[0]),[P,M]=L.useState({base:"#FFFFFF",accent1:"#F472B6",accent2:"#38BDF8",rim:"#FB923C"}),C=F=>{M(S=>({...S,[F]:k.hex}))},A=()=>{M({base:"#FFFFFF",accent1:"#F472B6",accent2:"#38BDF8",rim:"#FB923C"})},E=()=>{try{Xt({particleCount:50,spread:50,origin:{y:.65}})}catch{}u(x.prod,1,void 0,Object.values(P))};return a.jsxs("div",{className:"glaze-studio-card",id:"glaze-studio",children:[a.jsxs("div",{className:"glaze-studio-header",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(ga,{size:14})," ",d("glazeStudio.title")]}),a.jsx("h3",{className:"glaze-studio-title",children:d("glazeStudio.subtitle")}),a.jsx("p",{className:"glaze-studio-sub",children:v==="pt"?"Seleccione a peça em faiança, escolha os vidrados não-tóxicos e clique nas diferentes secções para compor a sua harmonia de cores!":"Select a ceramic piece, pick your favorite non-toxic Elamel glazes, and click on sections to preview your custom color harmony!"})]}),a.jsxs("div",{className:"glaze-studio-grid",children:[a.jsxs("div",{className:"glaze-controls",children:[a.jsxs("div",{className:"control-group",children:[a.jsx("label",{className:"control-label",children:d("glazeStudio.selectModel")}),a.jsx("div",{className:"pottery-model-chips",children:h.map(F=>a.jsxs("button",{type:"button",onClick:()=>b(F),className:`pottery-chip-btn ${x.id===F.id?"active":""}`,children:[F.name," (",l(F.basePrice),")"]},F.id))})]}),a.jsxs("div",{className:"control-group",children:[a.jsxs("label",{className:"control-label",children:[d("glazeStudio.selectColor")," ",a.jsx("strong",{style:{color:k.hex},children:k.name})]}),a.jsx("div",{className:"glaze-swatches-grid",children:z.map(F=>a.jsxs("button",{type:"button",onClick:()=>T(F),className:`glaze-swatch-btn ${k.name===F.name?"active":""}`,title:`${F.name} - ${F.desc}`,children:[a.jsx("span",{className:"swatch-circle",style:{backgroundColor:F.hex},children:k.name===F.name&&a.jsx(Ir,{size:14,color:"#FFFFFF"})}),a.jsx("span",{className:"swatch-name",children:F.name})]},F.name))})]}),a.jsxs("div",{className:"studio-tips-box",children:[a.jsx(Fe,{size:16,color:"#F8971D"}),a.jsx("span",{children:v==="pt"?"Clique nas zonas da ilustração para aplicar o vidrado mineral seleccionado!":"Click on the sections of the pottery illustration to apply your selected glaze!"})]}),a.jsxs("div",{className:"controls-footer-actions",children:[a.jsxs("button",{type:"button",onClick:A,className:"btn btn-secondary btn-sm",children:[a.jsx(Zf,{size:14})," ",v==="pt"?"Repor Cores":"Reset Palette"]}),a.jsxs("button",{type:"button",onClick:E,className:"btn btn-primary",children:[a.jsx(Ea,{size:16})," ",v==="pt"?`Adicionar Kit com Estas Cores (${l(x.basePrice)})`:`Add This Custom Kit to Bag (${l(x.basePrice)})`]})]})]}),a.jsx("div",{className:"glaze-visual-stage",children:a.jsxs("div",{className:"interactive-pottery-wrapper",children:[x.id==="plate"&&a.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[a.jsx("circle",{cx:"150",cy:"150",r:"135",fill:P.rim,stroke:"#E2DDD5",strokeWidth:"4",onClick:()=>C("rim"),className:"clickable-zone"}),a.jsx("circle",{cx:"150",cy:"150",r:"105",fill:P.accent1,stroke:"#E2DDD5",strokeWidth:"2",onClick:()=>C("accent1"),className:"clickable-zone"}),a.jsx("circle",{cx:"150",cy:"150",r:"70",fill:P.base,stroke:"#E2DDD5",strokeWidth:"2",onClick:()=>C("base"),className:"clickable-zone"}),a.jsx("circle",{cx:"150",cy:"150",r:"25",fill:P.accent2,onClick:()=>C("accent2"),className:"clickable-zone"}),a.jsx("text",{x:"150",y:"155",textAnchor:"middle",fontSize:"12",fill:"#0F172A",pointerEvents:"none",fontWeight:"600",children:v==="pt"?"Clique nas Secções":"Click Zones"})]}),x.id==="mug"&&a.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[a.jsx("path",{d:"M210 90 C265 90 265 200 210 200",fill:"none",stroke:P.accent2,strokeWidth:"22",strokeLinecap:"round",onClick:()=>C("accent2"),className:"clickable-zone"}),a.jsx("rect",{x:"70",y:"70",width:"140",height:"170",rx:"24",fill:P.base,stroke:"#CBD5E1",strokeWidth:"3",onClick:()=>C("base"),className:"clickable-zone"}),a.jsx("rect",{x:"70",y:"70",width:"140",height:"35",rx:"10",fill:P.rim,onClick:()=>C("rim"),className:"clickable-zone"}),a.jsx("path",{d:"M70 160 Q140 185 210 160",fill:"none",stroke:P.accent1,strokeWidth:"16",onClick:()=>C("accent1"),className:"clickable-zone"}),a.jsx("text",{x:"140",y:"130",textAnchor:"middle",fontSize:"12",fill:"#0F172A",pointerEvents:"none",fontWeight:"600",children:v==="pt"?"Caneca Aconchegante":"Cozy Mug"})]}),x.id==="vase"&&a.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[a.jsx("ellipse",{cx:"150",cy:"250",rx:"60",ry:"20",fill:P.rim,onClick:()=>C("rim"),className:"clickable-zone"}),a.jsx("path",{d:"M100 90 Q60 170 100 240 L200 240 Q240 170 200 90 Z",fill:P.base,stroke:"#CBD5E1",strokeWidth:"3",onClick:()=>C("base"),className:"clickable-zone"}),a.jsx("ellipse",{cx:"150",cy:"170",rx:"75",ry:"18",fill:P.accent1,onClick:()=>C("accent1"),className:"clickable-zone"}),a.jsx("path",{d:"M115 50 L185 50 L170 90 L130 90 Z",fill:P.accent2,onClick:()=>C("accent2"),className:"clickable-zone"}),a.jsx("text",{x:"150",y:"215",textAnchor:"middle",fontSize:"12",fill:"#0F172A",pointerEvents:"none",fontWeight:"600",children:v==="pt"?"Vaso Flor de Primavera":"Bloom Vase"})]}),x.id==="animal"&&a.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[a.jsx("ellipse",{cx:"105",cy:"70",rx:"18",ry:"50",fill:P.accent1,transform:"rotate(-15 105 70)",onClick:()=>C("accent1"),className:"clickable-zone"}),a.jsx("ellipse",{cx:"195",cy:"70",rx:"18",ry:"50",fill:P.accent1,transform:"rotate(15 195 70)",onClick:()=>C("accent1"),className:"clickable-zone"}),a.jsx("ellipse",{cx:"150",cy:"205",rx:"80",ry:"65",fill:P.base,stroke:"#CBD5E1",strokeWidth:"3",onClick:()=>C("base"),className:"clickable-zone"}),a.jsx("circle",{cx:"150",cy:"140",r:"55",fill:P.base,stroke:"#CBD5E1",strokeWidth:"3",onClick:()=>C("base"),className:"clickable-zone"}),a.jsx("polygon",{points:"130,185 170,185 160,195 170,205 130,205 140,195",fill:P.rim,onClick:()=>C("rim"),className:"clickable-zone"}),a.jsx("circle",{cx:"150",cy:"225",r:"30",fill:P.accent2,onClick:()=>C("accent2"),className:"clickable-zone"}),a.jsx("text",{x:"150",y:"145",textAnchor:"middle",fontSize:"12",fill:"#0F172A",pointerEvents:"none",fontWeight:"600",children:v==="pt"?"Coelhinho":"Bunny"})]})]})})]}),a.jsx("style",{children:`
        .glaze-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .glaze-studio-header {
          margin-bottom: 2rem;
          text-align: center;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .glaze-studio-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .glaze-studio-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .glaze-studio-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .control-group {
          margin-bottom: 1.5rem;
        }
        .control-label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .pottery-model-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pottery-chip-btn {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.55rem 1rem;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pottery-chip-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .pottery-chip-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(225, 40, 91, 0.25);
        }
        .glaze-swatches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.5rem;
        }
        .glaze-swatch-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.45rem 0.65rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .glaze-swatch-btn:hover {
          border-color: var(--color-primary);
        }
        .glaze-swatch-btn.active {
          background: #FFFFFF;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .swatch-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .swatch-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .studio-tips-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-primary-light);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }
        .controls-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .glaze-visual-stage {
          background: radial-gradient(circle, #F8FAFC 0%, #EDE9FE 100%);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border-light);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .interactive-pottery-wrapper {
          width: 100%;
          max-width: 320px;
        }
        .interactive-pottery-svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
        }
        .clickable-zone {
          cursor: pointer;
          transition: filter 0.15s ease, transform 0.15s ease;
        }
        .clickable-zone:hover {
          filter: brightness(1.1) drop-shadow(0 0 6px rgba(225, 40, 91, 0.4));
        }

        @media (max-width: 850px) {
          .glaze-studio-grid {
            grid-template-columns: 1fr;
          }
          .glaze-visual-stage {
            order: -1;
          }
        }
      `})]})},Dh=()=>{const{t:u,locale:d}=Me(),[l,v]=L.useState("all"),[h,x]=L.useState(""),[b,z]=L.useState("featured"),k=qd(d),T=L.useMemo(()=>[{id:"all",label:u("common.all")},{id:"Tableware Colors",label:d==="pt"?"Loiça em Cerâmica":"Tableware Colors"},{id:"Kids & Family Kits",label:d==="pt"?"Infantil & Figuras":"Kids & Animals"},{id:"Gift Sets",label:d==="pt"?"Conjuntos Presente":"Gift Sets"},{id:"Decorative Pieces",label:d==="pt"?"Peças Decorativas":"Decorative Pieces"}],[u,d]),P=L.useMemo(()=>k.filter(M=>{const C=l==="all"||M.subcategory.toLowerCase().includes(l.toLowerCase())||l==="Kids & Family Kits"&&(M.subcategory.includes("Infantil")||M.subcategory.includes("Kids")),A=M.name.toLowerCase().includes(h.toLowerCase())||M.description.toLowerCase().includes(h.toLowerCase());return C&&A}).sort((M,C)=>b==="price-asc"?M.price-C.price:b==="price-desc"?C.price-M.price:b==="rating"?C.rating-M.rating:(C.isFeatured?1:0)-(M.isFeatured?1:0)),[k,l,h,b]);return a.jsxs("div",{className:"colors-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(ga,{size:14})," ",u("brand.subbrands.colors")]}),a.jsx("h1",{className:"cat-page-title",children:u("colors.title")}),a.jsx("p",{className:"cat-page-lead",children:u("colors.subtitle")}),a.jsxs("div",{className:"cat-hero-badges-row",children:[a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(Ue,{size:16,color:"#10B981"}),a.jsx("span",{children:u("colors.highlights.nonToxic")})]}),a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(Fe,{size:16,color:"#F8971D"}),a.jsx("span",{children:u("colors.highlights.foodSafe")})]}),a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(bn,{size:16,color:"#0284C7"}),a.jsx("span",{children:u("colors.highlights.easyCure")})]})]})]})})}),a.jsx("section",{className:"section catalog-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"catalog-toolbar",children:[a.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Ceramic subcategories",children:T.map(M=>a.jsx("button",{role:"tab","aria-selected":l===M.id,onClick:()=>v(M.id),className:`filter-tab-btn ${l===M.id?"active":""}`,children:M.label},M.id))}),a.jsxs("div",{className:"toolbar-search-sort",children:[a.jsxs("div",{className:"search-input-wrapper",children:[a.jsx(Ma,{size:16,className:"search-field-icon"}),a.jsx("input",{type:"text",value:h,onChange:M=>x(M.target.value),placeholder:u("common.searchPlaceholder"),className:"filter-search-input","aria-label":"Filter ceramic kits"})]}),a.jsxs("select",{value:b,onChange:M=>z(M.target.value),className:"sort-dropdown","aria-label":"Sort products by",children:[a.jsx("option",{value:"featured",children:d==="pt"?"Destaques Primeiro":"Featured First"}),a.jsx("option",{value:"price-asc",children:u("common.priceLowHigh")}),a.jsx("option",{value:"price-desc",children:u("common.priceHighLow")}),a.jsx("option",{value:"rating",children:d==="pt"?"Melhor Avaliados":"Highest Rated"})]})]})]}),a.jsx("div",{className:"results-summary-row",children:a.jsx("span",{className:"results-count",children:d==="pt"?a.jsxs(a.Fragment,{children:["A apresentar ",a.jsx("strong",{children:P.length})," kit(s) de cerâmica"]}):a.jsxs(a.Fragment,{children:["Showing ",a.jsx("strong",{children:P.length})," Ceramic Kit",P.length===1?"":"s"]})})}),P.length===0?a.jsxs("div",{className:"no-results-box",children:[a.jsx("p",{children:d==="pt"?"Não foram encontrados conjuntos de cerâmica com o filtro actual.":"No ceramic kits found matching your current filter."}),a.jsx("button",{onClick:()=>{v("all"),x("")},className:"btn btn-secondary btn-sm",children:u("common.clearFilters")})]}):a.jsx("div",{className:"product-grid",children:P.map(M=>a.jsx(Jt,{product:M},M.id))}),a.jsx(Ah,{}),a.jsxs("div",{className:"ceramic-safety-guide-card",children:[a.jsxs("div",{className:"safety-guide-header",children:[a.jsx(Ue,{size:26,color:"#10B981"}),a.jsxs("div",{children:[a.jsx("h3",{className:"safety-guide-title",children:d==="pt"?"Normas de Segurança & Cuidados com a Cerâmica":"Ceramic Craft Safety & Care Guidelines"}),a.jsx("p",{className:"safety-guide-sub",children:d==="pt"?"Damos prioridade à segurança infantil, higiene alimentar e memórias duradouras.":"We prioritize child safety, hygiene, and lasting family memories."})]})]}),a.jsxs("div",{className:"safety-guide-grid",children:[a.jsxs("div",{className:"guide-point",children:[a.jsx("strong",{children:d==="pt"?"Certificação Não-Tóxica":"Non-Toxic Certification"}),a.jsx("p",{children:d==="pt"?"Todos os vidrados minerais cumprem as directivas europeias de segurança para brinquedos (EN71-3, ASTM D-4236). Isentos de chumbo, cádmio e compostos orgânicos voláteis.":"All mineral glazes comply with international toy and craft safety standards (EN71-3, ASTM D-4236). Free of lead, cadmium, and volatile organic compounds."})]}),a.jsxs("div",{className:"guide-point",children:[a.jsx("strong",{children:d==="pt"?"Cura Simples no Forno Doméstico":"Simple Home Oven Curing"}),a.jsx("p",{children:d==="pt"?"Basta levar as suas peças pintadas ao forno convencional a 150°C durante 35 minutos para fixar definitivamente os vidrados vitrificados.":"Bake your painted pottery in your regular home oven at 150°C (300°F) for 35 minutes to permanently bond the vibrant colors."})]}),a.jsxs("div",{className:"guide-point",children:[a.jsx("strong",{children:d==="pt"?"Utilização Quotidiana à Mesa":"Everyday Dining & Care"}),a.jsx("p",{children:d==="pt"?"Após a cozedura, a loiça é resistente à água e segura para contacto com alimentos. A lavagem manual com esponja macia preserva o brilho durante décadas.":"Once cured, dinnerware items are water-resistant and food-safe. Hand-washing with a soft sponge preserves the luster for generations."})]}),a.jsxs("div",{className:"guide-point",children:[a.jsx("strong",{children:d==="pt"?"Idades Recomendadas":"Recommended Age Guidance"}),a.jsx("p",{children:d==="pt"?"Crianças com menos de 6 anos devem ser acompanhadas por um adulto. Para bebés e crianças pequeninas, recomendamos os kits de figuras robustas de animais.":"Kids under 6 should be supervised around ceramicware. For toddlers, we recommend our sturdy thick-walled animal figurine kits."})]})]})]})]})}),a.jsx("style",{children:`
        .category-hero-header {
          background: var(--gradient-rainbow-subtle);
          padding: 3rem 0 2.5rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .cat-hero-inner {
          max-width: 780px;
        }
        .cat-page-title {
          font-size: 2.75rem;
          margin-bottom: 0.75rem;
        }
        .cat-page-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .cat-hero-badges-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          box-shadow: var(--shadow-sm);
        }
        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .toolbar-search-sort {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .ceramic-safety-guide-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-top: 4rem;
        }
        .safety-guide-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .safety-guide-title {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .safety-guide-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .safety-guide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 2rem;
        }
        .guide-point strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .guide-point p {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .cat-page-title { font-size: 2.1rem; }
          .catalog-toolbar { flex-direction: column; align-items: stretch; }
          .toolbar-search-sort { flex-direction: column; }
          .filter-search-input, .sort-dropdown { width: 100%; }
        }
      `})]})},_h=()=>{const{addToCart:u}=Aa(),{t:d,formatCurrency:l,locale:v}=Me(),[h,x]=L.useState(4),[b,z]=L.useState([]),k=h===4?22:32,T=b.length>=h,P=F=>{b.length<h&&z(S=>[...S,F])},M=F=>{z(S=>S.filter((U,ee)=>ee!==F))},C=()=>{z([])},A=()=>{if(!T)return;try{Xt({particleCount:70,spread:60,origin:{y:.7}})}catch{}const F={id:`custom-box-${Date.now()}`,name:v==="pt"?`Caixa de Iguarias Familiar (${h} Doces Sortidos)`:`Custom Family Treat Box (${h} Assorted Treats)`,category:"goodies",subcategory:"Occasion Treats",price:k,description:v==="pt"?`Sortido artesanal seleccionado com ${h} doces gourmet: ${b.map(S=>S.name).join(", ")}.`:`Hand-selected assortment of ${h} gourmet treats: ${b.map(S=>S.name).join(", ")}.`,longDescription:v==="pt"?`A sua caixa de pastelaria personalizada, embalada fresca com papel vegetal e fita decorativa. Contém: ${b.map(S=>S.name).join(" • ")}.`:`Your personalized family treat box packed fresh in a presentation gift box with parchment lining. Contains: ${b.map(S=>S.name).join(" • ")}.`,image:"./images/goodies_assortment.jpg",rating:5,reviewCount:1,tags:["Custom Assortment","Gift Box","Family Sharing"],flavorProfile:v==="pt"?"Sortido personalizado de pastelaria artesanal":"Assorted custom gourmet bakery selection",portionSize:v==="pt"?`Caixa de ${h} peças (Serve ${h} a ${h*2} pessoas)`:`Box of ${h} treats (Serves ${h}–${h*2})`,servings:h*2,dietaryTags:["Vegetarian"],ingredients:[v==="pt"?"Ingredientes nobres de pastelaria de acordo com os doces seleccionados":"Mixed artisanal pastry ingredients according to chosen treats"],allergenWarning:v==="pt"?"Contém itens com glúten, lacticínios e ovos. Consulte os rótulos individuais.":"Contains items with Gluten, Dairy, and Eggs. Check individual treat labels.",storageInstructions:v==="pt"?"Conservar na caixa à temperatura ambiente ou no frio de acordo com cada doce.":"Keep in box at room temperature or chilled according to treat guidelines.",servingTemperature:v==="pt"?"Consumir de preferência fresco no prazo de 3 dias.":"Best enjoyed fresh within 3 days."};u(F,1,void 0,void 0,b),z([])},E=Array.from(new Set(b.flatMap(F=>F.dietaryTags)));return a.jsxs("div",{className:"treat-box-builder-card",id:"treat-box-builder",children:[a.jsxs("div",{className:"builder-header",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(hn,{size:14})," ",d("treatBox.title")]}),a.jsx("h3",{className:"builder-title",children:d("treatBox.subtitle")}),a.jsx("p",{className:"builder-sub",children:v==="pt"?"Escolha a dimensão da caixa e seleccione os bolos, biscoitos e bolachas preferidos da sua família!":"Choose your box size and pick your family’s favorite cakes, biscuits, and pastries!"})]}),a.jsxs("div",{className:"size-selector-row",children:[a.jsxs("button",{type:"button",onClick:()=>{x(4),b.length>4&&z(b.slice(0,4))},className:`size-btn ${h===4?"active":""}`,"aria-pressed":h===4,children:[a.jsxs("div",{className:"size-btn-head",children:[a.jsx("strong",{children:d("treatBox.box4")}),h===4&&a.jsx(Ir,{size:16,className:"size-check-icon"})]}),a.jsx("span",{className:"size-btn-price",children:l(22)}),a.jsx("span",{className:"size-btn-desc",children:d("treatBox.box4Desc")})]}),a.jsxs("button",{type:"button",onClick:()=>x(6),className:`size-btn ${h===6?"active":""}`,"aria-pressed":h===6,children:[a.jsxs("div",{className:"size-btn-head",children:[a.jsx("strong",{children:d("treatBox.box6")}),h===6&&a.jsx(Ir,{size:16,className:"size-check-icon"})]}),a.jsx("span",{className:"size-btn-price",children:l(32)}),a.jsx("span",{className:"size-btn-desc",children:d("treatBox.box6Desc")})]})]}),a.jsxs("div",{className:"builder-grid",children:[a.jsxs("div",{className:"available-treats-col",children:[a.jsxs("div",{className:"col-header-row",children:[a.jsx("h4",{className:"column-title",children:d("treatBox.step2")}),a.jsx("span",{className:"col-counter-hint",children:h-b.length===0?v==="pt"?"Caixa completa!":"Box is full!":v==="pt"?`Faltam ${h-b.length} doce(s)`:`Need ${h-b.length} more`})]}),a.jsx("div",{className:"treats-picker-grid",children:Vd.map(F=>a.jsxs("div",{className:"treat-picker-item",children:[a.jsx("img",{src:F.image,alt:F.name,className:"treat-picker-thumb"}),a.jsxs("div",{className:"treat-picker-info",children:[a.jsx("strong",{className:"treat-picker-name",children:F.name}),a.jsx("div",{className:"treat-picker-diet",children:F.dietaryTags.map((S,U)=>a.jsx("span",{className:"treat-mini-tag",children:S},U))})]}),a.jsxs("button",{type:"button",onClick:()=>P(F),disabled:T,className:"btn btn-secondary btn-sm picker-add-btn","aria-label":`${d("common.addToCart")}: ${F.name}`,children:[a.jsx(Ea,{size:14})," ",v==="pt"?"Adicionar":"Add"]})]},F.id))})]}),a.jsxs("div",{className:"box-slots-col",children:[a.jsxs("div",{className:"box-slots-header",children:[a.jsx("h4",{className:"column-title",children:v==="pt"?`Lugares na Caixa (${b.length}/${h})`:`Your Box Slots (${b.length}/${h})`}),b.length>0&&a.jsx("button",{type:"button",onClick:C,className:"btn-clear-box","aria-label":d("common.clear"),children:d("common.clear")})]}),a.jsx("div",{className:`slots-container grid-${h}`,children:Array.from({length:h}).map((F,S)=>{const U=b[S];return a.jsx("div",{className:`box-slot ${U?"filled":"empty"}`,children:U?a.jsxs("div",{className:"slot-filled-content",children:[a.jsx("img",{src:U.image,alt:U.name,className:"slot-img"}),a.jsxs("div",{className:"slot-info",children:[a.jsx("span",{className:"slot-title",title:U.name,children:U.name}),a.jsx("span",{className:"slot-flavor",children:U.flavorProfile})]}),a.jsx("button",{type:"button",onClick:()=>M(S),className:"btn-remove-slot","aria-label":`${d("treatBox.remove")}: ${U.name}`,title:d("treatBox.remove"),children:a.jsx(Dd,{size:13})})]}):a.jsxs("div",{className:"slot-empty-content",children:[a.jsx("div",{className:"empty-plus-icon",children:a.jsx(Ea,{size:18})}),a.jsx("span",{children:v==="pt"?`Espaço ${S+1} Livre`:`Slot ${S+1} Available`})]})},S)})}),b.length>0&&a.jsxs("div",{className:"box-dietary-summary",role:"status","aria-live":"polite",children:[a.jsx(Ue,{size:18,color:"#10B981",className:"summary-shield-icon"}),a.jsxs("div",{children:[a.jsx("strong",{children:d("treatBox.dietarySummary")})," ",a.jsx("span",{children:E.join(", ")})]})]}),a.jsx("button",{type:"button",onClick:A,disabled:!T,className:`btn btn-lg btn-full-width ${T?"btn-primary":"btn-secondary btn-disabled"}`,children:T?a.jsxs(a.Fragment,{children:[a.jsx(hn,{size:18})," ",v==="pt"?`Embalar e Adicionar ao Cesto (${l(k)})`:`Pack & Add Custom Box (${l(k)})`]}):a.jsx(a.Fragment,{children:d("treatBox.boxIncomplete",{remaining:h-b.length})})})]})]}),a.jsx("style",{children:`
        .treat-box-builder-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .builder-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2rem auto;
        }
        .builder-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .builder-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .size-selector-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .size-btn {
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .size-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
        }
        .size-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 4px 15px rgba(225, 40, 91, 0.12);
        }
        .size-btn-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
          color: var(--color-text-main);
        }
        .size-check-icon {
          color: var(--color-primary);
        }
        .size-btn-price {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .size-btn-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .builder-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.25fr;
          gap: 2rem;
          align-items: start;
        }
        .col-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .column-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin: 0;
        }
        .col-counter-hint {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .treats-picker-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-height: 480px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .treat-picker-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.85rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }
        .treat-picker-item:hover {
          border-color: var(--color-border);
          transform: translateX(3px);
        }
        .treat-picker-thumb {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .treat-picker-info {
          flex: 1;
          min-width: 0;
        }
        .treat-picker-name {
          display: block;
          font-size: 0.875rem;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .treat-picker-diet {
          display: flex;
          gap: 0.3rem;
          margin-top: 0.25rem;
        }
        .treat-mini-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-light);
          background: var(--color-bg-subtle);
          padding: 0.1rem 0.35rem;
          border-radius: var(--radius-sm);
        }
        .picker-add-btn {
          flex-shrink: 0;
        }
        .box-slots-col {
          background: #FAFAF9;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          border: 1px dashed var(--color-border);
        }
        .box-slots-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .btn-clear-box {
          background: none;
          border: none;
          color: var(--color-text-light);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }
        .btn-clear-box:hover {
          color: var(--color-primary);
        }
        .slots-container {
          display: grid;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .slots-container.grid-4 {
          grid-template-columns: 1fr 1fr;
        }
        .slots-container.grid-6 {
          grid-template-columns: 1fr 1fr;
        }
        .box-slot {
          min-height: 84px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          transition: all var(--transition-fast);
        }
        .box-slot.empty {
          border: 2px dashed #D6D3D1;
          background: rgba(255, 255, 255, 0.6);
          justify-content: center;
        }
        .slot-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          color: #A8A29E;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .empty-plus-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #E7E5E4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #78716C;
        }
        .box-slot.filled {
          border: 1px solid var(--color-border);
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
          padding: 0.5rem 0.65rem;
        }
        .slot-filled-content {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          width: 100%;
        }
        .slot-img {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          flex-shrink: 0;
        }
        .slot-info {
          flex: 1;
          min-width: 0;
        }
        .slot-title {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .slot-flavor {
          display: block;
          font-size: 0.7rem;
          color: var(--color-text-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .btn-remove-slot {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.35rem;
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background var(--transition-fast);
        }
        .btn-remove-slot:hover {
          color: #EF4444;
          background: #FEE2E2;
        }
        .box-dietary-summary {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
        }
        .summary-shield-icon {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .builder-grid {
            grid-template-columns: 1fr;
          }
          .size-selector-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Lh=()=>{const{t:u,locale:d}=Me(),[l,v]=L.useState("all"),[h,x]=L.useState("all"),[b,z]=L.useState(""),[k,T]=L.useState("featured"),P=$d(d),M=L.useMemo(()=>[{id:"all",label:u("common.all")},{id:"Family Cakes",label:d==="pt"?"Bolos de Família":"Family Cakes"},{id:"Cookies & Biscuits",label:d==="pt"?"Biscoitos & Bolachas":"Cookies & Biscuits"},{id:"Celebration Treats",label:d==="pt"?"Celebrações & Caixas":"Celebration Treats"}],[u,d]),C=L.useMemo(()=>[{id:"all",label:u("common.all")},{id:"Nut-Free",label:d==="pt"?"Sem Amendoins":"Nut-Free"},{id:"Gluten-Free",label:d==="pt"?"Sem Glúten":"Gluten-Free"},{id:"Vegetarian",label:d==="pt"?"Vegetariano":"Vegetarian"},{id:"Low Sugar",label:d==="pt"?"Baixo Açúcar":"Low Sugar"}],[u,d]),A=L.useMemo(()=>P.filter(E=>{const F=l==="all"||E.subcategory.toLowerCase().includes(l.toLowerCase())||l==="Family Cakes"&&E.subcategory.includes("Bolos")||l==="Cookies & Biscuits"&&(E.subcategory.includes("Biscoitos")||E.subcategory.includes("Bolachas"))||l==="Celebration Treats"&&E.subcategory.includes("Celebra"),S=h==="all"||E.dietaryTags.some(ee=>ee.toLowerCase().includes(h.toLowerCase()))||E.tags.some(ee=>ee.toLowerCase().includes(h.toLowerCase())),U=E.name.toLowerCase().includes(b.toLowerCase())||E.flavorProfile.toLowerCase().includes(b.toLowerCase())||E.description.toLowerCase().includes(b.toLowerCase());return F&&S&&U}).sort((E,F)=>k==="price-asc"?E.price-F.price:k==="price-desc"?F.price-E.price:k==="rating"?F.rating-E.rating:(F.isFeatured?1:0)-(E.isFeatured?1:0)),[P,l,h,b,k]);return a.jsxs("div",{className:"goodies-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header goodies-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(fn,{size:14})," ",u("brand.subbrands.goodies")]}),a.jsx("h1",{className:"cat-page-title",children:u("goodies.title")}),a.jsx("p",{className:"cat-page-lead",children:u("goodies.subtitle")}),a.jsxs("div",{className:"cat-hero-badges-row",children:[a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(Ue,{size:16,color:"#10B981"}),a.jsx("span",{children:u("goodies.highlights.peanutFree")})]}),a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(Fe,{size:16,color:"#F8971D"}),a.jsx("span",{children:u("goodies.highlights.glutenFree")})]}),a.jsxs("div",{className:"hero-pill-badge",children:[a.jsx(kr,{size:16,color:"#E1285B"}),a.jsx("span",{children:u("goodies.highlights.natural")})]})]})]})})}),a.jsx("section",{className:"section catalog-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"catalog-toolbar",children:[a.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Goodies subcategories",children:M.map(E=>a.jsx("button",{role:"tab","aria-selected":l===E.id,onClick:()=>v(E.id),className:`filter-tab-btn ${l===E.id?"active":""}`,children:E.label},E.id))}),a.jsxs("div",{className:"toolbar-search-sort",children:[a.jsxs("div",{className:"search-input-wrapper",children:[a.jsx(Ma,{size:16,className:"search-field-icon"}),a.jsx("input",{type:"text",value:b,onChange:E=>z(E.target.value),placeholder:d==="pt"?"Pesquisar sabores, bolos...":"Search flavors, cakes...",className:"filter-search-input","aria-label":"Search bakery treats"})]}),a.jsxs("select",{value:k,onChange:E=>T(E.target.value),className:"sort-dropdown","aria-label":"Sort products by",children:[a.jsx("option",{value:"featured",children:d==="pt"?"Destaques Primeiro":"Featured First"}),a.jsx("option",{value:"price-asc",children:u("common.priceLowHigh")}),a.jsx("option",{value:"price-desc",children:u("common.priceHighLow")}),a.jsx("option",{value:"rating",children:d==="pt"?"Melhor Avaliados":"Highest Rated"})]})]})]}),a.jsxs("div",{className:"dietary-filter-bar",children:[a.jsxs("span",{className:"diet-filter-label",children:[a.jsx(Cf,{size:14})," ",d==="pt"?"Filtro Dietético & Alergénios:":"Dietary & Allergen Filter:"]}),a.jsx("div",{className:"diet-chips-wrap",children:C.map(E=>a.jsxs("button",{onClick:()=>x(E.id),className:`diet-chip-btn ${h===E.id?"active":""}`,children:[h===E.id&&a.jsx(Ir,{size:13}),E.label]},E.id))})]}),a.jsx("div",{className:"results-summary-row",children:a.jsx("span",{className:"results-count",children:d==="pt"?a.jsxs(a.Fragment,{children:["A apresentar ",a.jsx("strong",{children:A.length})," iguaria(s) de pastelaria"]}):a.jsxs(a.Fragment,{children:["Showing ",a.jsx("strong",{children:A.length})," Bakery Treat",A.length===1?"":"s"]})})}),A.length===0?a.jsxs("div",{className:"no-results-box",children:[a.jsx("p",{children:d==="pt"?"Não foram encontradas iguarias com o filtro seleccionado.":"No bakery treats found matching your dietary filter or search."}),a.jsx("button",{onClick:()=>{v("all"),x("all"),z("")},className:"btn btn-secondary btn-sm",children:u("common.clearFilters")})]}):a.jsx("div",{className:"product-grid",children:A.map(E=>a.jsx(Jt,{product:E},E.id))}),a.jsx(_h,{}),a.jsxs("div",{className:"bakery-standards-card",children:[a.jsxs("div",{className:"standards-header",children:[a.jsx(Ue,{size:28,color:"#10B981"}),a.jsxs("div",{children:[a.jsx("h3",{className:"standards-title",children:d==="pt"?"O Nosso Compromisso de Transparência & Alergénios":"Our Kitchen & Allergen Transparency Promise"}),a.jsx("p",{className:"standards-sub",children:d==="pt"?"Cada ingrediente é rigorosamente declarado para que as famílias celebrem com total tranquilidade.":"Every ingredient is clearly accounted for so families can celebrate with peace of mind."})]})]}),a.jsxs("div",{className:"standards-grid",children:[a.jsxs("div",{className:"standard-item",children:[a.jsx("strong",{children:d==="pt"?"Apenas Ingredientes Naturais":"Natural Ingredients Only"}),a.jsx("p",{children:d==="pt"?"Utilizamos purés de fruta fresca (morangos, framboesas, mirtilos) e corantes vegetais de origem botânica (espirulina, curcuma, beterraba) nas nossas decorações em glacê.":"We use real fruit purees (strawberries, raspberries, blueberries) and natural plant pigments (spirulina, turmeric, beetroot) for our vibrant pastel icings."})]}),a.jsxs("div",{className:"standard-item",children:[a.jsx("strong",{children:d==="pt"?"Produção Estritamente Sem Amendoins":"Peanut-Free Production"}),a.jsx("p",{children:d==="pt"?"A nossa pastelaria opera sob rigoroso protocolo 100% livre de amendoins. Quaisquer artigos com frutos de casca rija (como a farinha de amêndoa no bolo fudge) são confecionados em zonas dedicadas.":"Our bakery facility is strictly 100% peanut-free. Any specialty items containing tree nuts (like almond flour in our fudge cake) are prepared in dedicated zones."})]}),a.jsxs("div",{className:"standard-item",children:[a.jsx("strong",{children:d==="pt"?"Doçura Moderada para os Mais Novos":"Gentle Sweetness for Little Ones"}),a.jsx("p",{children:d==="pt"?"As nossas receitas contêm 30% menos açúcares refinados que a pastelaria comercial, realçando a baunilha natural em vagem, a manteiga nobre e as frutas da estação.":"Our recipes use 30% less refined sugar than commercial bakeries, highlighting natural Madagascar vanilla, real dairy butter, and fresh seasonal fruits."})]}),a.jsxs("div",{className:"standard-item",children:[a.jsx("strong",{children:d==="pt"?"Fornadas Frescas Diárias":"Fresh Daily Deliveries"}),a.jsx("p",{children:d==="pt"?"Cada bolo e caixa de biscoitos é cozinhado e decorado poucas horas antes da expedição para garantir a máxima frescura e aroma à sua mesa.":"Every cake and cookie box is baked and decorated within hours of dispatch to ensure optimal tenderness and crispness on your celebration table."})]})]})]})]})}),a.jsx("style",{children:`
        .goodies-hero {
          background: linear-gradient(135deg, rgba(248, 151, 29, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(254, 243, 199, 0.5) 100%);
        }
        .dietary-filter-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 0.75rem 1.25rem;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }
        .diet-filter-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .diet-chips-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .diet-chip-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .diet-chip-btn:hover {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }
        .diet-chip-btn.active {
          background: #FEF3C7;
          border-color: #F59E0B;
          color: #92400E;
          font-weight: 700;
        }
        .bakery-standards-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-top: 4rem;
        }
        .standards-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .standards-title {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .standards-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 2rem;
        }
        .standard-item strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .standard-item p {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 768px) {
          .cat-page-title { font-size: 2.1rem; }
          .catalog-toolbar { flex-direction: column; align-items: stretch; }
          .toolbar-search-sort { flex-direction: column; width: 100%; }
          .filter-search-input, .sort-dropdown { width: 100%; }
          .dietary-filter-bar { flex-direction: column; align-items: flex-start; }
        }
      `})]})},Bh=()=>{const{addToCart:u}=Aa(),{t:d,formatCurrency:l,locale:v}=Me(),[h,x]=L.useState(vn[0]),[b,z]=L.useState(v==="pt"?"Família Silva Ramos":"The Miller Family"),[k,T]=L.useState(v==="pt"?"Fundada em 2018":"Home Est. 2008"),[P,M]=L.useState(v==="pt"?"Onde a vida começa e o amor nunca tem fim.":"Our roots run deep, our love grows strong."),[C,A]=L.useState("warm_earth"),[E,F]=L.useState(!0),S=P.length,U=h.charLimit,ee=[{id:"warm_earth",name:v==="pt"?"Terracota e Ouro Nobre":"Warm Terracotta & Gold",primary:"#92400E",secondary:"#F59E0B",bg:"#FEF3C7"},{id:"rose_garden",name:v==="pt"?"Jardim de Rosas Pastel":"Rose Garden Pastels",primary:"#BE185D",secondary:"#F472B6",bg:"#FDF2F8"},{id:"ocean_breeze",name:v==="pt"?"Azul Celeste e Marinho":"Ocean Cyan & Navy",primary:"#0369A1",secondary:"#38BDF8",bg:"#E0F2FE"},{id:"rainbow_swirl",name:v==="pt"?"Espectro Arco-Íris Elamel":"Elamel Rainbow Spectrum",primary:"#E1285B",secondary:"#F8971D",bg:"#FFF7ED"}],H=ee.find(ie=>ie.id===C)||ee[0],ce=()=>{try{Xt({particleCount:60,spread:60,origin:{y:.7},colors:["#E1285B","#F8971D","#10B981","#0284C7","#8B5CF6"]})}catch{}u(h,1,{familyOrName:b,occasion:k,customMessage:P,colorTheme:H.name,giftWrap:E})};return a.jsxs("div",{className:"personalisation-studio-card",id:"personalisation-studio",children:[a.jsxs("div",{className:"studio-header",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",d("personalisation.title")]}),a.jsx("h3",{className:"studio-title",children:v==="pt"?"Crie a Sua Recordação Familiar Gravada":"Create Your Personalised Family Keepsake"}),a.jsx("p",{className:"studio-subtitle",children:v==="pt"?"Escreva os nomes da sua família e a dedicatória especial abaixo para ver a antevisão em tempo real!":"Type your family name and heartfelt message below to see a live preview in real time!"})]}),a.jsxs("div",{className:"studio-layout-grid",children:[a.jsxs("div",{className:"studio-controls-col",children:[a.jsxs("div",{className:"studio-step-block",children:[a.jsxs("label",{className:"step-label",children:[a.jsx("span",{className:"step-number",children:"1"})," ",v==="pt"?"Escolha a Peça Cerâmica:":"Choose Keepsake Item:"]}),a.jsx("div",{className:"base-items-selector",children:vn.map(ie=>a.jsxs("button",{type:"button",onClick:()=>{x(ie),P.length>ie.charLimit&&M(P.slice(0,ie.charLimit))},className:`base-item-btn ${h.id===ie.id?"active":""}`,children:[a.jsx("span",{className:"base-item-name",children:ie.name}),a.jsx("span",{className:"base-item-price",children:l(ie.price)})]},ie.id))})]}),a.jsxs("div",{className:"studio-step-block",children:[a.jsxs("label",{className:"step-label",children:[a.jsx("span",{className:"step-number",children:"2"})," ",v==="pt"?"Detalhes da Personalização:":"Personalised Details:"]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"studio-family-name",className:"form-label",children:d("personalisation.familyName")}),a.jsx("input",{id:"studio-family-name",type:"text",value:b,onChange:ie=>z(ie.target.value),placeholder:d("personalisation.familyPlaceholder"),className:"form-control",maxLength:35})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"studio-occasion",className:"form-label",children:d("personalisation.estYear")}),a.jsx("input",{id:"studio-occasion",type:"text",value:k,onChange:ie=>T(ie.target.value),placeholder:d("personalisation.yearPlaceholder"),className:"form-control",maxLength:30})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("div",{className:"label-with-counter",children:[a.jsx("label",{htmlFor:"studio-message",className:"form-label",children:d("personalisation.dedication")}),a.jsxs("span",{className:"char-counter","aria-live":"polite",children:[S,"/",U]})]}),a.jsx("textarea",{id:"studio-message",value:P,onChange:ie=>M(ie.target.value),placeholder:d("personalisation.dedicationPlaceholder"),className:"form-control textarea-custom",rows:3,maxLength:U})]})]}),a.jsxs("div",{className:"studio-step-block",children:[a.jsxs("label",{className:"step-label",children:[a.jsx("span",{className:"step-number",children:"3"})," ",d("personalisation.themeColor")]}),a.jsx("div",{className:"theme-options-grid",children:ee.map(ie=>a.jsxs("button",{type:"button",onClick:()=>A(ie.id),className:`theme-option-btn ${C===ie.id?"active":""}`,children:[a.jsxs("div",{className:"theme-swatch-circles",children:[a.jsx("span",{style:{backgroundColor:ie.primary}}),a.jsx("span",{style:{backgroundColor:ie.secondary}})]}),a.jsx("span",{className:"theme-name",children:ie.name})]},ie.id))})]}),a.jsx("div",{className:"gift-wrap-option",children:a.jsxs("label",{className:"checkbox-custom-label",children:[a.jsx("input",{type:"checkbox",checked:E,onChange:ie=>F(ie.target.checked),className:"checkbox-input"}),a.jsxs("span",{className:"checkbox-text",children:[a.jsx(hn,{size:16,color:"#E1285B"}),a.jsx("strong",{children:d("personalisation.giftWrap")})]})]})}),a.jsxs("div",{className:"production-time-notice",children:[a.jsx(Ed,{size:16,color:"#0284C7"}),a.jsx("span",{children:v==="pt"?`Prazo de Confecção: ${h.turnaroundDays} dias úteis no atelier`:`Production Time: ${h.turnaroundDays} studio days`})]}),a.jsxs("button",{type:"button",onClick:ce,className:"btn btn-primary btn-lg btn-full-width",children:[a.jsx(kr,{size:18})," ",v==="pt"?`Adicionar Peça Personalizada ao Cesto (${l(h.price+(E?6:0))})`:`Add Personalised Piece to Bag (${l(h.price+(E?6:0))})`]})]}),a.jsx("div",{className:"studio-preview-col",children:a.jsxs("div",{className:"preview-sticky-wrap",children:[a.jsxs("div",{className:"preview-header-tag",children:[a.jsx(Fe,{size:14})," ",v==="pt"?"Antevisão em Directo da Peça":"Live Artwork Preview"]}),a.jsxs("div",{className:"preview-svg-stage",style:{backgroundColor:H.bg},children:[h.id==="moment-1"&&a.jsxs("svg",{viewBox:"0 0 400 400",className:"preview-svg-canvas",children:[a.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"#FFFFFF",stroke:"#E2DDD5",strokeWidth:"6"}),a.jsx("circle",{cx:"200",cy:"200",r:"160",fill:"none",stroke:H.secondary,strokeWidth:"2",strokeDasharray:"6 4"}),a.jsxs("g",{transform:"translate(200, 160)",stroke:H.primary,strokeWidth:"3",fill:"none",children:[a.jsx("path",{d:"M0 60 L0 -10 M0 20 Q-40 0 -50 -40 M0 20 Q40 0 50 -40 M0 -10 Q-25 -30 -30 -60 M0 -10 Q25 -30 30 -60"}),a.jsx("circle",{cx:"-50",cy:"-40",r:"10",fill:H.secondary}),a.jsx("circle",{cx:"50",cy:"-40",r:"10",fill:H.secondary}),a.jsx("circle",{cx:"-30",cy:"-60",r:"8",fill:H.secondary}),a.jsx("circle",{cx:"30",cy:"-60",r:"8",fill:H.secondary}),a.jsx("circle",{cx:"0",cy:"-75",r:"12",fill:H.primary})]}),a.jsx("text",{x:"200",y:"270",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"28",fontWeight:"700",fill:H.primary,children:b||(v==="pt"?"Nome da Família":"The Family Name")}),a.jsx("text",{x:"200",y:"295",textAnchor:"middle",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"13",fontWeight:"600",letterSpacing:"2",fill:H.secondary,children:k||"EST. 2026"}),a.jsxs("text",{x:"200",y:"325",textAnchor:"middle",fontFamily:"'Outfit', sans-serif",fontSize:"11",fill:"#4B5563",fontStyle:"italic",children:['"',P.slice(0,42),'"']}),P.length>42&&a.jsxs("text",{x:"200",y:"340",textAnchor:"middle",fontFamily:"'Outfit', sans-serif",fontSize:"11",fill:"#4B5563",fontStyle:"italic",children:['"',P.slice(42,85),'"']})]}),h.id==="moment-2"&&a.jsxs("svg",{viewBox:"0 0 400 400",className:"preview-svg-canvas",children:[a.jsx("rect",{x:"50",y:"50",width:"300",height:"300",rx:"16",fill:"#F5F5F4",stroke:"#D6D3D1",strokeWidth:"4"}),a.jsx("rect",{x:"70",y:"70",width:"260",height:"260",rx:"8",fill:"#FFFFFF",stroke:H.secondary,strokeWidth:"1",strokeDasharray:"4 4"}),a.jsx("rect",{x:"90",y:"90",width:"100",height:"100",rx:"8",fill:"#FEE2E2",stroke:"#FCA5A5"}),a.jsx("rect",{x:"210",y:"90",width:"100",height:"100",rx:"8",fill:"#E0F2FE",stroke:"#BAE6FD"}),a.jsx("rect",{x:"90",y:"205",width:"100",height:"100",rx:"8",fill:"#FEF3C7",stroke:"#FDE68A"}),a.jsx("rect",{x:"210",y:"205",width:"100",height:"100",rx:"8",fill:"#DCFCE7",stroke:"#BBF7D0"}),a.jsx("text",{x:"140",y:"145",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"14",fill:"#991B1B",children:b.split(" ")[0]||(v==="pt"?"Amor":"Love")}),a.jsx("text",{x:"260",y:"145",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"14",fill:"#075985",children:b.split(" ")[1]||(v==="pt"?"Família":"Joy")}),a.jsx("text",{x:"140",y:"260",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"14",fill:"#92400E",children:k.split(" ")[0]||(v==="pt"?"Sempre":"Always")}),a.jsx("text",{x:"260",y:"260",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"14",fill:"#166534",children:k.split(" ")[1]||(v==="pt"?"Juntos":"Together")}),a.jsx("rect",{x:"80",y:"340",width:"240",height:"26",rx:"13",fill:H.primary}),a.jsxs("text",{x:"200",y:"357",textAnchor:"middle",fontFamily:"'Outfit', sans-serif",fontSize:"11",fontWeight:"700",fill:"#FFFFFF",children:[b," • ",k]})]}),h.id==="moment-3"&&a.jsxs("svg",{viewBox:"0 0 400 400",className:"preview-svg-canvas",children:[a.jsxs("g",{transform:"translate(60, 100)",children:[a.jsx("path",{d:"M120 40 C155 40 155 120 120 120",fill:"none",stroke:H.secondary,strokeWidth:"14",strokeLinecap:"round"}),a.jsx("rect",{x:"20",y:"20",width:"100",height:"140",rx:"18",fill:"#FFFFFF",stroke:"#CBD5E1",strokeWidth:"3"}),a.jsx("text",{x:"70",y:"85",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"22",fill:H.primary,children:b.split("&")[0]||(v==="pt"?"Ele":"One")})]}),a.jsxs("g",{transform:"translate(190, 100)",children:[a.jsx("path",{d:"M120 40 C155 40 155 120 120 120",fill:"none",stroke:H.secondary,strokeWidth:"14",strokeLinecap:"round"}),a.jsx("rect",{x:"20",y:"20",width:"100",height:"140",rx:"18",fill:"#FFFFFF",stroke:"#CBD5E1",strokeWidth:"3"}),a.jsx("text",{x:"70",y:"85",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"22",fill:H.primary,children:b.split("&")[1]||(v==="pt"?"Ela":"Two")})]}),a.jsx("text",{x:"200",y:"310",textAnchor:"middle",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"14",fontWeight:"700",fill:H.primary,children:k}),a.jsxs("text",{x:"200",y:"335",textAnchor:"middle",fontFamily:"'Outfit', sans-serif",fontSize:"12",fill:"#4B5563",fontStyle:"italic",children:['"',P.slice(0,36),'"']})]}),h.id==="moment-4"&&a.jsxs("svg",{viewBox:"0 0 400 400",className:"preview-svg-canvas",children:[a.jsx("rect",{x:"195",y:"20",width:"10",height:"80",fill:"#E1285B"}),a.jsx("circle",{cx:"200",cy:"220",r:"140",fill:"#FFFFFF",stroke:"#CBD5E1",strokeWidth:"4"}),a.jsx("circle",{cx:"200",cy:"220",r:"120",fill:"none",stroke:H.secondary,strokeWidth:"2",strokeDasharray:"4 4"}),a.jsx("text",{x:"200",y:"195",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"32",fontWeight:"700",fill:H.primary,children:b}),a.jsx("text",{x:"200",y:"235",textAnchor:"middle",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"15",fontWeight:"700",letterSpacing:"3",fill:H.secondary,children:k}),a.jsxs("text",{x:"200",y:"270",textAnchor:"middle",fontFamily:"'Outfit', sans-serif",fontSize:"12",fill:"#64748B",fontStyle:"italic",children:['"',P.slice(0,32),'"']})]})]}),a.jsxs("div",{className:"preview-footer-note",children:[a.jsx(Ue,{size:16,color:"#10B981"}),a.jsx("span",{children:v==="pt"?"Gravado à mão com vidrados alimentares seguros e permanentes.":"Hand-engraved with food-safe, permanent glazed pigments."})]})]})})]}),a.jsx("style",{children:`
        .personalisation-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-lg);
          margin: 2.5rem 0;
        }
        .studio-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.5rem auto;
        }
        .studio-title {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin: 0.4rem 0 0.5rem 0;
        }
        .studio-subtitle {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .studio-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .studio-step-block {
          margin-bottom: 1.75rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.85rem;
        }
        .step-number {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .base-items-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .base-item-btn {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .base-item-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
        }
        .base-item-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .base-item-name {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .base-item-price {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
        }
        .label-with-counter {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .char-counter {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .form-control {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.65rem 0.85rem;
          font-family: inherit;
          font-size: 0.9375rem;
          outline: none;
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
        }
        .form-control:focus {
          border-color: var(--color-primary);
        }
        .textarea-custom {
          resize: vertical;
        }
        .theme-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .theme-option-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.75rem;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }
        .theme-option-btn:hover {
          border-color: var(--color-primary);
        }
        .theme-option-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(225, 40, 91, 0.2);
        }
        .theme-swatch-circles {
          display: flex;
          gap: 2px;
        }
        .theme-swatch-circles span {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
        .theme-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .gift-wrap-option {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .checkbox-custom-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .checkbox-input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: var(--color-primary);
        }
        .checkbox-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .production-time-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .preview-sticky-wrap {
          position: sticky;
          top: 90px;
        }
        .preview-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .preview-svg-stage {
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .preview-svg-canvas {
          width: 100%;
          max-width: 320px;
          height: auto;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08));
        }
        .preview-footer-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }

        @media (max-width: 900px) {
          .studio-layout-grid {
            grid-template-columns: 1fr;
          }
          .preview-sticky-wrap {
            position: static;
          }
        }
      `})]})},Ih=()=>{const{t:u,locale:d}=Me(),[l,v]=L.useState("all"),h=Wd(d),x=L.useMemo(()=>[{id:"all",label:u("common.all")},{id:"Heirloom Tableware",label:d==="pt"?"Loiça de Família":"Heirloom Tableware"},{id:"Celebration Gifts",label:d==="pt"?"Lembranças de Celebração":"Celebration Gifts"},{id:"Couples & Duos",label:d==="pt"?"Casais & Duplas":"Couples & Duos"},{id:"Holiday & Seasonal",label:d==="pt"?"Épocas Especiais":"Holiday & Seasonal"}],[u,d]),b=L.useMemo(()=>l==="all"?h:h.filter(k=>k.subcategory.toLowerCase().includes(l.toLowerCase())||l==="Heirloom Tableware"&&k.subcategory.includes("Família")||l==="Celebration Gifts"&&k.subcategory.includes("Celebra")||l==="Couples & Duos"&&(k.subcategory.includes("Casais")||k.subcategory.includes("Couples"))||l==="Holiday & Seasonal"&&(k.subcategory.includes("Épocas")||k.subcategory.includes("Holiday"))),[h,l]),z=()=>{const k=document.getElementById("personalisation-studio");k&&k.scrollIntoView({behavior:"smooth"})};return a.jsxs("div",{className:"moments-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header moments-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(ms,{size:14})," ",u("brand.subbrands.moments")]}),a.jsx("h1",{className:"cat-page-title",children:u("moments.title")}),a.jsx("p",{className:"cat-page-lead",children:u("moments.subtitle")}),a.jsx("div",{className:"moments-hero-actions",children:a.jsxs("button",{onClick:z,className:"btn btn-primary btn-lg",children:[a.jsx(Fe,{size:18})," ",d==="pt"?"Abrir Estúdio de Personalização em Directo":"Open Live Personalisation Studio"," ",a.jsx(Jp,{size:16})]})})]})})}),a.jsx("section",{className:"section moments-content-section",children:a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"catalog-toolbar",style:{justifyContent:"center"},children:a.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Moments Themes",children:x.map(k=>a.jsx("button",{role:"tab","aria-selected":l===k.id,onClick:()=>v(k.id),className:`filter-tab-btn ${l===k.id?"active":""}`,children:k.label},k.id))})}),a.jsx("div",{className:"product-grid",style:{marginBottom:"4rem"},children:b.map(k=>a.jsx(Jt,{product:k},k.id))}),a.jsx(Bh,{}),a.jsxs("div",{className:"family-stories-section",children:[a.jsxs("div",{className:"section-title-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(kr,{size:14})," ",d==="pt"?"Memórias Partilhadas":"Shared Memories"]}),a.jsx("h2",{className:"section-title",children:d==="pt"?"Testemunhos da Nossa Comunidade":"Stories From Our Community"}),a.jsx("p",{className:"section-subtitle",children:d==="pt"?"Descubra como famílias e casais transformaram momentos singelos em tradições para toda a vida.":"Discover how families and couples have turned simple moments into lasting traditions."})]}),a.jsxs("div",{className:"stories-cards-grid",children:[a.jsxs("div",{className:"story-quote-card",children:[a.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((k,T)=>a.jsx(it,{size:15,fill:"#F8971D",color:"#F8971D"},T))}),a.jsx("p",{className:"story-quote-text",children:d==="pt"?'"Ver as lágrimas de emoção da avó quando desembrulhou o prato com a árvore genealógica e os nomes dos 6 netos pintados nos ramos foi o auge da nossa reunião de família. É hoje a peça central da sala de jantar."':'"Seeing Grandma’s tears of joy when she unwrapped the family tree plate with all 8 grandchildren’s names hand-painted on the branches made our family reunion unforgettable. It is now the centerpiece of her dining room."'}),a.jsxs("div",{className:"story-author-meta",children:[a.jsx("div",{className:"author-avatar-circle",children:"M"}),a.jsxs("div",{children:[a.jsx("strong",{children:d==="pt"?"Família Ferreira Pinto, Porto":"The Miller Family"}),a.jsx("span",{children:d==="pt"?"80º Aniversário da Avó":"Grandmother’s 80th Birthday Celebration"})]})]})]}),a.jsxs("div",{className:"story-quote-card",children:[a.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((k,T)=>a.jsx(it,{size:15,fill:"#F8971D",color:"#F8971D"},T))}),a.jsx("p",{className:"story-quote-text",children:d==="pt"?'"O meu noivo surpreendeu-me com a caixa em madeira rústica e biscoitos decorados com as coordenadas do local onde nos conhecemos. Os biscoitos eram deliciosos e a caixa guarda as nossas fotografias mais especiais."':'"My partner surprised me with a personalized cookie crate inscribed with the coordinates of the beach where we got engaged. The cookies were delicious and the wooden box now holds our keepsake photos!"'}),a.jsxs("div",{className:"story-author-meta",children:[a.jsx("div",{className:"author-avatar-circle",children:"C"}),a.jsxs("div",{children:[a.jsx("strong",{children:d==="pt"?"Mariana & Tiago, Lisboa":"Carlos & Helena M."}),a.jsx("span",{children:d==="pt"?"Bodas de Madeira (5 Anos)":"5th Wedding Anniversary"})]})]})]}),a.jsxs("div",{className:"story-quote-card",children:[a.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((k,T)=>a.jsx(it,{size:15,fill:"#F8971D",color:"#F8971D"},T))}),a.jsx("p",{className:"story-quote-text",children:d==="pt"?'"Temos a tradição de encomendar estrelas em cerâmica personalizadas para cada filho no Natal. Vê-los a pendurar o próprio nome na árvore ano após ano enche-nos o coração de ternura."':'"We have an annual tradition of ordering custom ceramic ornaments for our kids each Christmas. Watching them hang their own names on the tree brings back so many sweet memories from each year."'}),a.jsxs("div",{className:"story-author-meta",children:[a.jsx("div",{className:"author-avatar-circle",children:"H"}),a.jsxs("div",{children:[a.jsx("strong",{children:d==="pt"?"Família Mendonça, Guimarães":"The Henderson Clan"}),a.jsx("span",{children:d==="pt"?"Tradição Familiar de Natal":"Holiday Family Tradition"})]})]})]})]})]}),a.jsxs("div",{className:"how-it-works-banner",children:[a.jsx("h3",{className:"how-it-works-title",children:d==="pt"?"Como é Criada a Sua Peça Personalizada:":"How Your Custom Keepsake is Created:"}),a.jsxs("div",{className:"how-steps-grid",children:[a.jsxs("div",{className:"how-step-item",children:[a.jsx("span",{className:"how-step-num",children:"1"}),a.jsx("strong",{children:d==="pt"?"Pré-visualização em Directo":"Live Design Preview"}),a.jsx("p",{children:d==="pt"?"Introduza os nomes e datas no estúdio interactivo para ver o resultado imediato.":"Type your names and dates into our studio tool to see the live rendering."})]}),a.jsxs("div",{className:"how-step-item",children:[a.jsx("span",{className:"how-step-num",children:"2"}),a.jsx("strong",{children:d==="pt"?"Caligrafia Manual Nobre":"Artisan Hand-Lettering"}),a.jsx("p",{children:d==="pt"?"Os nossos ceramistas e pasteleiros gravam à mão as suas dedicatórias com vidrados e glacê finos.":"Our studio ceramicists and pastry artists hand-inscribe your chosen words with fine glazes."})]}),a.jsxs("div",{className:"how-step-item",children:[a.jsx("span",{className:"how-step-num",children:"3"}),a.jsx("strong",{children:d==="pt"?"Cozedura no Forno do Estúdio":"Studio Kiln Curing"}),a.jsx("p",{children:d==="pt"?"As cerâmicas são vitrificadas no forno; os biscoitos são selados no próprio dia em papel vegetal.":"Ceramics are kiln-fired for durability; cookies are sealed fresh in food-safe parchment."})]}),a.jsxs("div",{className:"how-step-item",children:[a.jsx("span",{className:"how-step-num",children:"4"}),a.jsx("strong",{children:d==="pt"?"Entrega de Presente Requintada":"Luxury Gift Delivery"}),a.jsx("p",{children:d==="pt"?"Embalado com fita de gorgorão, flores secas aromáticas e cartão de oferta com as suas palavras.":"Packed with satin ribbon, dried lavender sprigs, and greeting card, shipped safely to your door."})]})]})]})]})}),a.jsx("style",{children:`
        .moments-hero {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(240, 249, 255, 0.6) 100%);
        }
        .moments-hero-actions {
          margin-top: 1.5rem;
        }
        .family-stories-section {
          margin: 4.5rem 0;
        }
        .stories-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .story-quote-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .story-stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        .story-quote-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }
        .story-author-meta {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
        }
        .author-avatar-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .story-author-meta strong {
          display: block;
          font-size: 0.9375rem;
          color: var(--color-text-main);
        }
        .story-author-meta span {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .how-it-works-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }
        .how-it-works-title {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .how-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .how-step-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .how-step-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-rainbow);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .how-step-item strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .how-step-item p {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 992px) {
          .stories-cards-grid { grid-template-columns: 1fr; }
          .how-steps-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          .how-steps-grid { grid-template-columns: 1fr; }
        }
      `})]})},Rh=()=>{const{navigate:u}=Cr(),{t:d,locale:l}=Me(),v=l==="pt"?[{id:"ws-1",title:"Manhã Familiar de Pintura de Pratos & Pequeno-Almoço",date:"Todos os Sábados, 10:00 – 12:30",age:"A partir dos 4 anos",desc:"Pais e filhos pintam pratos de jantar a condizer enquanto saboreiam croissants frescos e refrescos de frutos silvestres.",spotsLeft:4},{id:"ws-2",title:"Noite de Caligrafia em Canecas para Casais & Duplas",date:"Todas as Quintas-feiras, 18:30 – 20:30",age:"Jovens & Adultos",desc:"Aprenda técnicas de caligrafia sobre cerâmica e pintura botânica com chá aromático e biscoitos estaladiços.",spotsLeft:6},{id:"ws-3",title:"Masterclass de Pequenos Mestres Pasteleiros",date:"Todos os Domingos, 14:00 – 15:30",age:"Dos 3 aos 10 anos",desc:"As crianças decoram biscoitos em formato de animais com glacê arco-íris e levam para casa numa lata personalizada.",spotsLeft:3}]:[{id:"ws-1",title:"Family Breakfast Plate & Paint Morning",date:"Every Saturday, 10:00 AM – 12:30 PM",age:"Ages 4+",desc:"Parents and kids paint matching dinner plates while enjoying fresh croissants and seasonal berry spritzers.",spotsLeft:4},{id:"ws-2",title:"Couples & Duos Mug Lettering Evening",date:"Every Thursday, 6:30 PM – 8:30 PM",age:"Teens & Adults",desc:"Learn delicate ceramic calligraphy and botanical watercolor glaze techniques with herbal tea and warm biscuits.",spotsLeft:6},{id:"ws-3",title:"Little Pastry Decorators Masterclass",date:"Every Sunday, 2:00 PM – 3:30 PM",age:"Ages 3–10",desc:"Kids pipe rainbow royal icing and naturally colored sprinkles onto animal cookies to take home in a gift tin.",spotsLeft:3}];return a.jsxs("div",{className:"about-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"about-hero-section",children:a.jsxs("div",{className:"container about-hero-container",children:[a.jsxs("div",{className:"about-hero-text",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",d("about.story.eyebrow")]}),a.jsx("h1",{className:"about-main-title",children:d("about.story.title")}),a.jsxs("p",{className:"about-lead",children:[a.jsx("strong",{children:"elamel"})," ",l==="pt"?"nasceu do sonho de reunir a família à volta da mesa: acreditamos que as memórias mais preciosas se constroem quando as mãos criam arte e os corações partilham doces momentos.":"was born from a simple kitchen table dream: that the most precious family memories are created when hands are busy making art and hearts are gathered around delicious treats."]})]}),a.jsxs("div",{className:"about-hero-logo-box",children:[a.jsx("img",{src:"./logowith-text.png",alt:"elamel Colors - Pinte • Crie • Desfrute",className:"about-hero-logo-img"}),a.jsx("span",{className:"about-logo-caption",children:d("brand.slogan")})]})]})}),a.jsx("section",{className:"section our-story-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"story-split-grid",children:[a.jsxs("div",{className:"story-media-wrap",children:[a.jsx("img",{src:"./images/about_studio.jpg",alt:"O acolhedor estúdio de cerâmica e pastelaria artesanal Elamel",className:"story-studio-img"}),a.jsxs("div",{className:"story-experience-tag",children:[a.jsx(kr,{size:20,color:"#E1285B"}),a.jsxs("div",{children:[a.jsx("strong",{children:l==="pt"?"Um Lar para Cada Geração":"A Home for Every Generation"}),a.jsx("span",{children:l==="pt"?"Estúdio de cerâmica & pastelaria sob o mesmo tecto":"Pottery studio & bakery under one roof"})]})]})]}),a.jsxs("div",{className:"story-content-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(kr,{size:14})," ",l==="pt"?"Como Tudo Começou":"How It All Began"]}),a.jsx("h2",{className:"story-heading",children:l==="pt"?"Onde os Vidrados Cerâmicos se Cruzam com o Aroma a Fornada Doce":"Where Ceramic Glazes Meet Sweet Oven Aromas"}),a.jsx("p",{children:l==="pt"?"Há alguns anos, os nossos fundadores — uma mãe ceramista e um pai mestre pasteleiro — repararam que a maioria dos conjuntos de trabalhos manuais eram complicados e impessoais, enquanto os doces de compra careciam de alma e significado.":"A few years ago, our founders—a ceramicist mother and an artisan pastry chef father—noticed how traditional craft kits felt complicated and generic, while store-bought bakery celebrations lacked personal soul."}),a.jsx("p",{children:l==="pt"?"Decidiram unir ambos os mundos num refúgio acolhedor e familiar chamado elamel. Cada peça de cerâmica foi concebida para ser ergonómica e certificada para uso alimentar, enquanto cada bolo e biscoito é confeccionado exclusivamente com ingredientes nobres e sem amendoins.":"They set out to unite both worlds into a warm, inclusive sanctuary called elamel. Every ceramic piece is designed with ergonomic comfort and food-safe certification, while every cake and cookie is baked from wholesome, certified peanut-free ingredients."}),a.jsx("p",{children:l==="pt"?"Hoje, a Elamel serve milhares de famílias, escolas e casais por todo o país, disponibilizando kits de pintura entregues ao domicílio, caixas comemorativas de doces e workshops no estúdio onde todas as gerações partilham sorrisos e criatividade.":"Today, Elamel serves thousands of families, schools, and couples across the country, providing home-delivered craft kits, celebration treat crates, and in-studio workshops where generations laugh and create side by side."})]})]})})}),a.jsx("section",{className:"section values-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-title-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(rf,{size:14})," ",d("about.values.eyebrow")]}),a.jsx("h2",{className:"section-title",children:d("about.values.title")}),a.jsx("p",{className:"section-subtitle",children:d("about.values.subtitle")})]}),a.jsxs("div",{className:"values-grid-4",children:[a.jsxs("div",{className:"value-card",children:[a.jsx("div",{className:"value-icon-box bg-rose",children:a.jsx(Ue,{size:28,color:"#E1285B"})}),a.jsx("h3",{className:"value-title",children:d("about.values.safety.title")}),a.jsx("p",{className:"value-desc",children:d("about.values.safety.desc")})]}),a.jsxs("div",{className:"value-card",children:[a.jsx("div",{className:"value-icon-box bg-orange",children:a.jsx(Fe,{size:28,color:"#F8971D"})}),a.jsx("h3",{className:"value-title",children:d("about.values.artisan.title")}),a.jsx("p",{className:"value-desc",children:d("about.values.artisan.desc")})]}),a.jsxs("div",{className:"value-card",children:[a.jsx("div",{className:"value-icon-box bg-green",children:a.jsx(Ld,{size:28,color:"#10B981"})}),a.jsx("h3",{className:"value-title",children:d("about.values.inclusivity.title")}),a.jsx("p",{className:"value-desc",children:d("about.values.inclusivity.desc")})]}),a.jsxs("div",{className:"value-card",children:[a.jsx("div",{className:"value-icon-box bg-cyan",children:a.jsx(kr,{size:28,color:"#0284C7"})}),a.jsx("h3",{className:"value-title",children:d("about.values.joy.title")}),a.jsx("p",{className:"value-desc",children:d("about.values.joy.desc")})]})]})]})}),a.jsx("section",{className:"section safety-standards-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"safety-standards-banner",children:[a.jsxs("div",{className:"safety-banner-left",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Ue,{size:14})," ",l==="pt"?"Normas Certificadas":"Certified Standards"]}),a.jsx("h2",{className:"safety-banner-title",children:l==="pt"?"Os Nossos Rigorosos Protocolos de Qualidade & Segurança":"Our Rigorous Quality & Safety Protocols"}),a.jsx("p",{className:"safety-banner-text",children:l==="pt"?"Como os nossos produtos entram nas cozinhas familiares e tocam nas mãos das crianças, exigimos de nós próprios as mais exigentes certificações independentes.":"Because our products enter family kitchens and touch children’s hands, we hold ourselves to the highest independent certifications."}),a.jsxs("div",{className:"safety-badges-list",children:[a.jsxs("div",{className:"safety-badge-row",children:[a.jsx(Ge,{size:20,color:"#10B981"}),a.jsxs("span",{children:[a.jsx("strong",{children:l==="pt"?"Segurança Europeia EN71-3 & ASTM D-4236:":"EN71-3 & ASTM D-4236 Toy Safety:"})," ",l==="pt"?"Vidrados minerais certificados à base de água, sem compostos orgânicos voláteis.":"Glazes are certified water-based and zero VOCs."]})]}),a.jsxs("div",{className:"safety-badge-row",children:[a.jsx(Ge,{size:20,color:"#10B981"}),a.jsxs("span",{children:[a.jsx("strong",{children:l==="pt"?"Aptos para Contacto com Alimentos:":"Food Contact Approval:"})," ",l==="pt"?"A loiça pintada e cozida no forno ganha uma película vitrificada lisa e 100% inócua.":"Tableware glazes are oven-cured into non-porous, food-safe glass sheen."]})]}),a.jsxs("div",{className:"safety-badge-row",children:[a.jsx(Ge,{size:20,color:"#10B981"}),a.jsxs("span",{children:[a.jsx("strong",{children:l==="pt"?"Pastelaria Sem Amendoins:":"Segregated Bakery Kitchen:"})," ",l==="pt"?"Instalações com controlo ambiental de alergénios e testes periódicos por lote.":"Dedicated peanut-free facility with air filtration and strict batch testing."]})]})]})]}),a.jsx("div",{className:"safety-banner-right",children:a.jsxs("div",{className:"craft-safety-quote-box",children:[a.jsx(kr,{size:32,color:"#E1285B"}),a.jsx("p",{children:l==="pt"?'"Sendo nós próprios pais, nunca enviaríamos um conjunto de cerâmica nem confecionaríamos um doce que não oferecêssemos com orgulho aos nossos filhos e aos nossos avós."':'"As parents ourselves, we never ship a ceramic kit or bake a treat that we wouldn’t proudly give to our own toddlers and grandparents."'}),a.jsx("div",{className:"quote-signer",children:l==="pt"?"— A Equipa de Atelier & Cozinha Elamel":"— The Elamel Craft & Kitchen Team"})]})})]})})}),a.jsx("section",{className:"section community-workshops-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-title-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(of,{size:14})," ",d("about.workshops.eyebrow")]}),a.jsx("h2",{className:"section-title",children:d("about.workshops.title")}),a.jsx("p",{className:"section-subtitle",children:d("about.workshops.subtitle")})]}),a.jsx("div",{className:"workshops-list-grid",children:v.map(h=>a.jsxs("div",{className:"workshop-card",children:[a.jsxs("div",{className:"workshop-badge-row",children:[a.jsx("span",{className:"badge badge-primary",children:h.age}),a.jsx("span",{className:"workshop-spots",children:d("about.workshops.spotsLeft",{count:h.spotsLeft})})]}),a.jsx("h3",{className:"workshop-title",children:h.title}),a.jsx("p",{className:"workshop-desc",children:h.desc}),a.jsxs("div",{className:"workshop-meta",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx(Ed,{size:15,color:"#0284C7"}),a.jsx("span",{children:h.date})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx(jn,{size:15,color:"#E1285B"}),a.jsx("span",{children:l==="pt"?"Atelier Elamel, Sala Criativa":"Elamel Studio Workshop, Room 102"})]})]}),a.jsxs("button",{onClick:()=>u("/contact"),className:"btn btn-secondary btn-full-width",children:[d("about.workshops.inquireAction")," ",a.jsx(us,{size:15})]})]},h.id))})]})}),a.jsx("style",{children:`
        .about-hero-section {
          background: var(--gradient-rainbow-subtle);
          padding: 4rem 0 3rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .about-hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .about-main-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
        }
        .about-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .about-hero-logo-box {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .about-hero-logo-img {
          max-height: 120px;
          margin-bottom: 0.75rem;
        }
        .about-logo-caption {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-main);
          letter-spacing: 0.05em;
        }
        .story-split-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-media-wrap {
          position: relative;
        }
        .story-studio-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 4px solid #FFFFFF;
          aspect-ratio: 16 / 10;
          object-fit: cover;
        }
        .story-experience-tag {
          position: absolute;
          bottom: -15px;
          right: -15px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--color-border-light);
        }
        .story-experience-tag strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .story-experience-tag span {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .story-heading {
          font-size: 2.15rem;
          margin-bottom: 1.25rem;
        }
        .story-content-wrap p {
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .values-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .value-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          transition: transform var(--transition-normal);
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .value-icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .bg-rose { background: var(--color-primary-light); }
        .bg-orange { background: var(--color-orange-light); }
        .bg-green { background: var(--color-green-light); }
        .bg-cyan { background: var(--color-cyan-light); }
        .value-title {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .value-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .safety-standards-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-md);
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .safety-banner-title {
          font-size: 2rem;
          margin-bottom: 0.85rem;
        }
        .safety-banner-text {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin-bottom: 1.75rem;
        }
        .safety-badges-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .safety-badge-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }
        .craft-safety-quote-box {
          background: var(--gradient-rainbow-subtle);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          border: 1px solid var(--color-border-light);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .craft-safety-quote-box p {
          font-style: italic;
          font-size: 1rem;
          color: var(--color-text-main);
          line-height: 1.6;
          margin: 0;
        }
        .quote-signer {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--color-primary);
        }
        .workshops-list-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .workshop-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal);
        }
        .workshop-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .workshop-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .workshop-spots {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-orange);
          background: var(--color-orange-light);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }
        .workshop-title {
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .workshop-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .workshop-meta {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding-top: 1rem;
          margin-bottom: 1.5rem;
          border-top: 1px solid var(--color-border-light);
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 1100px) {
          .values-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
          .workshops-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 992px) {
          .about-hero-container { grid-template-columns: 1fr; }
          .story-split-grid { grid-template-columns: 1fr; }
          .safety-standards-banner { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .values-grid-4 { grid-template-columns: 1fr; }
          .workshops-list-grid { grid-template-columns: 1fr; }
          .about-main-title { font-size: 2.1rem; }
        }
      `})]})},Oh=()=>{const{addToast:u}=hs(),{t:d,locale:l}=Me(),[v,h]=L.useState(""),[x,b]=L.useState(""),[z,k]=L.useState(""),[T,P]=L.useState("Elamel Colors"),[M,C]=L.useState(""),[A,E]=L.useState(""),[F,S]=L.useState({}),[U,ee]=L.useState(!1),[H,ce]=L.useState(!1),[ie,ye]=L.useState(0),Te=le=>{ye(ie===le?null:le)},be=l==="pt"?[{question:"Os vidrados cerâmicos são realmente seguros para refeições diárias de crianças e bebés?",answer:"Sim, categoricamente. Todos os nossos vidrados minerais são certificados como 100% não-tóxicos, isentos de chumbo e cádmio, em conformidade com as normas europeias EN71-3 e ASTM D-4236. Após a cozedura simples no forno doméstico, a superfície vitrificada é impermeável e totalmente segura para contacto directo com alimentos quentes ou frios."},{question:"Como funciona o processo de cozedura dos pratos e canecas em casa?",answer:"É extremamente simples e não requer fornos industriais! Após pintar a sua peça de loiça e deixá-la secar durante 24 horas, basta colocá-la no forno doméstico convencional a 150°C durante 35 minutos. Deixe arrefecer no interior do forno. O vidrado fica permanentemente vitrificado e resistente à lavagem."},{question:"A pastelaria Elamel tem garantia de segurança para pessoas alérgicas a amendoins?",answer:"Sim. A nossa cozinha opera com protocolo de exclusão total de amendoins. Todos os fornecedores de farinha, manteiga pura e ovos são auditados. Para itens específicos que contêm frutos de casca rija (como amêndoa moída no bolo fudge), a preparação é efectuada em bancadas estanques e segregadas com identificação destacada."},{question:"Qual é o prazo de entrega para as caixas de biscoitos com dedicatória personalizada?",answer:"As caixas com dedicatória personalizada são gravadas e cozinhadas no próprio dia do envio para assegurar a máxima frescura e crocância. O tempo habitual de confecção em atelier é de 2 a 3 dias úteis, seguindo de imediato para entrega expresso climatizada."},{question:"Como posso reservar um workshop presencial para a minha família ou festa de anos?",answer:'Pode preencher o formulário nesta página seleccionando "Reserva de Workshop no Atelier" ou contactar o nosso coordenador de eventos através do WhatsApp directo. Recomendamos a reserva com 1 a 2 semanas de antecedência para garantir lugares nos fins de semana.'}]:[{question:"Are the ceramic glazes truly safe for toddlers and daily family dining?",answer:"Yes, absolutely. All our mineral glazes are certified 100% non-toxic, lead-free, and cadmium-free, complying with European EN71-3 and ASTM D-4236 standards. Once baked in your home oven, the painted surface becomes fully food-safe and dishwasher-safe on the top rack."},{question:"How does home oven curing work for painted ceramics?",answer:"It is very simple! After painting your bisque piece and allowing it to air-dry for 24 hours, place it in your standard kitchen oven at 150°C (300°F) for 35 minutes, then let it cool inside. The colors permanently vitrify into a shiny food-safe glaze."},{question:"How do you prevent nut and allergen cross-contamination in the bakery?",answer:"Our bakery facility is 100% peanut-free. For items containing tree nuts (such as almond flour in our fudge cake), we use dedicated, air-segregated prep zones with separate tools and thorough sanitization protocols."},{question:"What is the turnaround time for personalized message cookie crates and plates?",answer:"Personalized cookie crates take 2 business days to hand-pipe and bake fresh on the morning of dispatch. Hand-lettered heirloom ceramic plates take 3 to 4 days for in-studio painting and kiln firing."},{question:"How do I book a private family workshop or birthday celebration?",answer:'You can select "Studio Workshop Booking" in the contact form below or reach out via our studio WhatsApp chat. We recommend reserving 1 to 2 weeks in advance for weekend family sessions.'}],er=()=>{const le={};return v.trim()||(le.fullName=l==="pt"?"Por favor indique o seu nome completo.":"Please enter your name so we know how to address you."),x.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)||(le.email=l==="pt"?"Por favor introduza um formato de correio electrónico válido.":"Please provide a valid email format (e.g., name@domain.com)."):le.email=l==="pt"?"Por favor introduza o seu correio electrónico para resposta.":"Please add your email so we can reply.",A.trim()?A.trim().length<10&&(le.message=l==="pt"?"A sua mensagem deve conter pelo menos 10 caracteres.":"Please provide at least 10 characters so we can assist you thoroughly."):le.message=l==="pt"?"Por favor escreva uma breve mensagem sobre o seu pedido.":"Please tell us a little about your family inquiry or celebration.",S(le),Object.keys(le).length===0},Ke=le=>{if(le.preventDefault(),!er()){u(l==="pt"?"Verifique os campos do formulário":"Please check the form fields",l==="pt"?"Algumas informações obrigatórias estão por preencher.":"Some required information is missing or incomplete.","dietary");return}ce(!0),setTimeout(()=>{ce(!1),ee(!0);try{Xt({particleCount:70,spread:60,origin:{y:.65},colors:["#e1285b","#f8971d","#10b981","#0284c7","#8b5cf6"]})}catch{}u(l==="pt"?"Mensagem Enviada com Sucesso!":"Thank You!",l==="pt"?"O seu pedido familiar foi recebido. Responderemos com brevidade.":"Your family request was received. We’ll contact you soon about your Elamel treat.","success")},600)},or=()=>{h(""),b(""),k(""),C(""),E(""),S({}),ee(!1)};return a.jsxs("div",{className:"contact-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header contact-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(qf,{size:14})," ",d("contact.title")]}),a.jsx("h1",{className:"cat-page-title",children:d("contact.form.title")}),a.jsx("p",{className:"cat-page-lead",children:d("contact.subtitle")})]})})}),a.jsx("section",{className:"section contact-main-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"contact-layout-grid",children:[a.jsx("div",{className:"contact-form-card",children:U?a.jsxs("div",{className:"contact-success-box",role:"status","aria-live":"polite",children:[a.jsx("div",{className:"success-icon-wrap",children:a.jsx(Ge,{size:56,color:"#10B981"})}),a.jsx("h3",{className:"success-heading",children:d("contact.form.thankYou",{name:v})}),a.jsxs("p",{className:"success-sub",children:[l==="pt"?"O seu pedido relativo a ":"Your request regarding ",a.jsx("strong",{children:T}),l==="pt"?" foi recebido com sucesso pela nossa equipa de atelier.":" has been received by our studio team."]}),a.jsx("p",{className:"success-detail",children:l==="pt"?`Responderemos directamente para ${x} dentro de 24 horas úteis com esclarecimentos detalhados.`:`We will reply directly to ${x} within 24 hours with product details, allergen confirmations, or scheduling options.`}),a.jsx("button",{onClick:or,className:"btn btn-primary",children:l==="pt"?"Enviar Nova Mensagem":"Send Another Message"})]}):a.jsxs("form",{onSubmit:Ke,noValidate:!0,"aria-label":"Formulário de Contacto e Encomendas",children:[a.jsx("h3",{className:"form-title",children:d("contact.form.title")}),a.jsx("p",{className:"form-subtitle",children:l==="pt"?"Preencha os campos abaixo e a nossa equipa entrará em contacto com a maior brevidade.":"Fill in the fields below and our friendly team will reply promptly."}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{htmlFor:"contact-name",className:"form-label",children:[d("contact.form.name")," ",a.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),a.jsx("input",{id:"contact-name",type:"text",value:v,onChange:le=>{h(le.target.value),F.fullName&&S({...F,fullName:""})},placeholder:l==="pt"?"ex.: Maria Ferreira Pinto":"e.g. Elena Rostova",className:`form-control ${F.fullName?"has-error":""}`,"aria-required":"true","aria-describedby":F.fullName?"name-error":void 0}),F.fullName&&a.jsx("span",{id:"name-error",className:"form-error",role:"alert",children:F.fullName})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{htmlFor:"contact-email",className:"form-label",children:[d("contact.form.email")," ",a.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),a.jsx("input",{id:"contact-email",type:"email",value:x,onChange:le=>{b(le.target.value),F.email&&S({...F,email:""})},placeholder:l==="pt"?"ex.: maria@familia.pt":"e.g. elena@family.com",className:`form-control ${F.email?"has-error":""}`,"aria-required":"true","aria-describedby":F.email?"email-error":void 0}),F.email&&a.jsx("span",{id:"email-error",className:"form-error",role:"alert",children:F.email})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{htmlFor:"contact-phone",className:"form-label",children:[d("contact.form.phone")," (",l==="pt"?"Opcional":"Optional",")"]}),a.jsx("input",{id:"contact-phone",type:"tel",value:z,onChange:le=>k(le.target.value),placeholder:l==="pt"?"ex.: +351 912 345 678":"e.g. +1 (800) 555-0199",className:"form-control"})]})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"contact-interest",className:"form-label",children:d("contact.form.interest")}),a.jsxs("select",{id:"contact-interest",value:T,onChange:le=>P(le.target.value),className:"form-control",children:[a.jsx("option",{value:"Elamel Colors",children:l==="pt"?"Elamel Colors (Kits de Cerâmica)":"Elamel Colors (Ceramic Kits)"}),a.jsx("option",{value:"Elamel Goodies",children:l==="pt"?"Elamel Goodies (Bolos & Biscoitos)":"Elamel Goodies (Cakes & Treats)"}),a.jsx("option",{value:"Moments & Souvenirs",children:l==="pt"?"Moments & Souvenirs (Lembranças Personalizadas)":"Moments & Souvenirs (Keepsakes)"}),a.jsx("option",{value:"Studio Workshop",children:l==="pt"?"Reserva de Workshop no Atelier":"Studio Workshop Booking"}),a.jsx("option",{value:"General Inquiry",children:l==="pt"?"Informação Geral de Família":"General Family Inquiry"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{htmlFor:"contact-date",className:"form-label",children:[d("contact.form.eventDate")," (",l==="pt"?"Opcional":"Optional",")"]}),a.jsx("input",{id:"contact-date",type:"date",value:M,onChange:le=>C(le.target.value),className:"form-control"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("div",{className:"label-with-counter",children:[a.jsxs("label",{htmlFor:"contact-message",className:"form-label",children:[d("contact.form.message")," ",a.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),a.jsxs("span",{className:"char-counter","aria-live":"polite",children:[A.length,"/500"]})]}),a.jsx("textarea",{id:"contact-message",rows:4,maxLength:500,value:A,onChange:le=>{E(le.target.value),F.message&&S({...F,message:""})},placeholder:l==="pt"?"Conte-nos sobre a sua celebração, evento de família ou dúvidas sobre vidrados e alergénios...":"Tell us about your event, dietary questions, or custom keepsake ideas...",className:`form-control ${F.message?"has-error":""}`,"aria-required":"true","aria-describedby":F.message?"message-error":void 0}),F.message&&a.jsx("span",{id:"message-error",className:"form-error",role:"alert",children:F.message})]}),a.jsxs("button",{type:"submit",disabled:H,className:"btn btn-primary btn-lg btn-full-width",children:[a.jsx(Ad,{size:18})," ",H?l==="pt"?"A Enviar Pedido...":"Sending Request...":d("contact.form.send")]})]})}),a.jsxs("div",{className:"contact-info-col",children:[a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{className:"info-card-title",children:l==="pt"?"Canais Directos do Atelier":"Direct Studio Channels"}),a.jsxs("div",{className:"info-channel-item",children:[a.jsx("div",{className:"channel-icon-circle",children:a.jsx(wn,{size:20,color:"#E1285B"})}),a.jsxs("div",{children:[a.jsx("strong",{children:l==="pt"?"Correio Electrónico:":"Email Inquiries:"}),a.jsx("a",{href:"mailto:hello@elamel-family.com",className:"channel-link",children:"hello@elamel-family.com"}),a.jsx("span",{className:"channel-sub",children:l==="pt"?"Tempo habitual de resposta: menos de 4 horas":"Typical response time: under 4 hours"})]})]}),a.jsxs("div",{className:"info-channel-item",children:[a.jsx("div",{className:"channel-icon-circle",children:a.jsx(Td,{size:20,color:"#0284C7"})}),a.jsxs("div",{children:[a.jsx("strong",{children:l==="pt"?"Atendimento Telefónico:":"Phone Support:"}),a.jsx("a",{href:"tel:+351210000000",className:"channel-link",children:"+351 210 000 000"}),a.jsx("span",{className:"channel-sub",children:l==="pt"?"Terça a Domingo: 09:00 – 18:00":"Tuesday – Sunday: 9:00 AM – 6:00 PM"})]})]}),a.jsxs("div",{className:"info-channel-item",children:[a.jsx("div",{className:"channel-icon-circle",children:a.jsx(jn,{size:20,color:"#10B981"})}),a.jsxs("div",{children:[a.jsx("strong",{children:l==="pt"?"Localização do Atelier & Pastelaria:":"Studio & Bakery Location:"}),a.jsxs("address",{className:"channel-address",children:[l==="pt"?"Rua das Flores Criativas, 124":"124 Rainbow Craft Lane",a.jsx("br",{}),l==="pt"?"Bairro das Artes, Atelier 102":"Creative Arts District, Suite 102"]}),a.jsx("span",{className:"channel-sub",children:l==="pt"?"Parque familiar e acesso para carrinhos de bebé":"Free family parking & stroller accessible"})]})]})]}),a.jsxs("div",{className:"messaging-card",children:[a.jsx(Fe,{size:24,color:"#F8971D"}),a.jsxs("div",{children:[a.jsx("h4",{className:"messaging-title",children:l==="pt"?"Precisa de Aconselhamento Rápido para a Festa?":"Need Fast Party Planning Advice?"}),a.jsx("p",{className:"messaging-sub",children:l==="pt"?"Converse directamente com o nosso coordenador de atelier para bolos de aniversário urgentes ou dúvidas sobre workshops.":"Chat with our studio coordinator directly for urgent birthday cakes or weekend workshop questions."}),a.jsxs("a",{href:"https://wa.me/351210000000",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[l==="pt"?"Abrir Conversa de WhatsApp":"Open Family WhatsApp Chat"," ",a.jsx(us,{size:14})]})]})]})]})]}),a.jsxs("div",{className:"contact-faq-section",children:[a.jsxs("div",{className:"section-title-wrap",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Fe,{size:14})," ",l==="pt"?"Perguntas Frequentes":"Questions Answered"]}),a.jsx("h2",{className:"section-title",children:l==="pt"?"Dúvidas & Respostas Mais Comuns":"Frequently Asked Questions"}),a.jsx("p",{className:"section-subtitle",children:l==="pt"?"Tudo o que precisa de saber sobre vidrados não-tóxicos, cozinha sem amendoins e encomendas familiares.":"Everything you need to know about our food-safe glazes, peanut-free kitchen, and shipping."})]}),a.jsx("div",{className:"faq-accordion-list",children:be.map((le,Se)=>{const ze=ie===Se;return a.jsxs("div",{className:`faq-item-card ${ze?"open":""}`,children:[a.jsxs("button",{onClick:()=>Te(Se),className:"faq-question-btn","aria-expanded":ze,"aria-controls":`faq-answer-${Se}`,children:[a.jsx("span",{className:"faq-q-text",children:le.question}),ze?a.jsx(pf,{size:20}):a.jsx(lf,{size:20})]}),ze&&a.jsx("div",{id:`faq-answer-${Se}`,className:"faq-answer-panel",children:a.jsx("p",{children:le.answer})})]},Se)})})]})]})}),a.jsx("style",{children:`
        .contact-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(254, 242, 242, 0.6) 100%);
        }
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .contact-form-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }
        .form-title {
          font-size: 1.85rem;
          margin-bottom: 0.4rem;
        }
        .form-subtitle {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .has-error {
          border-color: #DC2626 !important;
          background-color: #FEF2F2 !important;
        }
        .contact-success-box {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon-wrap {
          margin-bottom: 0.5rem;
        }
        .success-heading {
          font-size: 2rem;
          color: #065F46;
        }
        .success-sub {
          font-size: 1.1rem;
          color: var(--color-text-main);
        }
        .success-detail {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          max-width: 480px;
          line-height: 1.5;
        }
        .label-with-counter {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .char-counter {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }
        .info-channel-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .channel-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-channel-item strong {
          display: block;
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .channel-link {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          margin-bottom: 0.2rem;
        }
        .channel-link:hover {
          text-decoration: underline;
        }
        .channel-address {
          font-style: normal;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 0.2rem;
        }
        .channel-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .messaging-card {
          background: var(--gradient-rainbow-subtle);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .messaging-title {
          font-size: 1.15rem;
          margin-bottom: 0.4rem;
        }
        .messaging-sub {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        .contact-faq-section {
          margin-top: 5rem;
        }
        .faq-accordion-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-xs);
          transition: border-color var(--transition-fast);
        }
        .faq-item-card.open {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-main);
          gap: 1rem;
        }
        .faq-item-card.open .faq-question-btn {
          color: var(--color-primary);
        }
        .faq-answer-panel {
          padding: 0 1.5rem 1.5rem 1.5rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .contact-layout-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .form-row-2 { grid-template-columns: 1fr; }
          .contact-form-card { padding: 1.75rem; }
        }
      `})]})},qh=()=>{const{t:u,locale:d,formatCurrency:l}=Me(),v=()=>{if(typeof window>"u")return"";const E=window.location.hash.split("?")[1]||window.location.search.replace(/^\?/,"");return new URLSearchParams(E).get("q")||""},[h,x]=L.useState(v),[b,z]=L.useState("all"),[k,T]=L.useState(60),[P,M]=L.useState("match"),C=Hd(d);L.useEffect(()=>{x(v())},[]);const A=L.useMemo(()=>{const E=h.toLowerCase().trim();return C.filter(F=>{const S=b==="all"||F.category===b,U=F.price<=k,ee=!E||F.name.toLowerCase().includes(E)||F.description.toLowerCase().includes(E)||F.subcategory.toLowerCase().includes(E)||F.tags.some(H=>H.toLowerCase().includes(E));return S&&U&&ee}).sort((F,S)=>P==="price-asc"?F.price-S.price:P==="price-desc"?S.price-F.price:P==="rating"?S.rating-F.rating:(S.isFeatured?1:0)-(F.isFeatured?1:0))},[C,h,b,k,P]);return a.jsxs("div",{className:"search-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header search-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Ma,{size:14})," ",u("nav.search")]}),a.jsx("h1",{className:"cat-page-title",children:d==="pt"?"Explorar Todo o Catálogo Elamel":"Explore All Elamel Kits, Treats & Keepsakes"}),a.jsx("p",{className:"cat-page-lead",children:d==="pt"?"Encontre de imediato conjuntos de cerâmica, bolos artesanais, biscoitos e lembranças personalizadas.":"Instantly find ceramic painting sets, bakery cakes, cookies, and personalized gifts."}),a.jsxs("div",{className:"search-page-input-wrap",children:[a.jsx(Ma,{size:20,className:"search-bar-icon"}),a.jsx("input",{type:"search",value:h,onChange:E=>x(E.target.value),placeholder:u("common.searchPlaceholder"),className:"search-bar-input","aria-label":"Search all products"}),h&&a.jsx("button",{onClick:()=>x(""),className:"search-clear-btn","aria-label":u("common.clear"),children:u("common.clear")})]})]})})}),a.jsx("section",{className:"section search-results-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"catalog-toolbar",children:[a.jsxs("div",{className:"filter-tabs",role:"tablist","aria-label":"Search category filters",children:[a.jsx("button",{role:"tab","aria-selected":b==="all",onClick:()=>z("all"),className:`filter-tab-btn ${b==="all"?"active":""}`,children:u("common.all")}),a.jsx("button",{role:"tab","aria-selected":b==="colors",onClick:()=>z("colors"),className:`filter-tab-btn ${b==="colors"?"active":""}`,children:u("brand.subbrands.colors")}),a.jsx("button",{role:"tab","aria-selected":b==="goodies",onClick:()=>z("goodies"),className:`filter-tab-btn ${b==="goodies"?"active":""}`,children:u("brand.subbrands.goodies")}),a.jsx("button",{role:"tab","aria-selected":b==="moments",onClick:()=>z("moments"),className:`filter-tab-btn ${b==="moments"?"active":""}`,children:u("brand.subbrands.moments")})]}),a.jsxs("div",{className:"search-side-controls",children:[a.jsxs("div",{className:"price-slider-wrap",children:[a.jsxs("label",{className:"price-slider-label",children:[d==="pt"?"Preço Máx:":"Max Price:"," ",a.jsx("strong",{children:l(k)})]}),a.jsx("input",{type:"range",min:15,max:60,step:5,value:k,onChange:E=>T(Number(E.target.value)),className:"price-range-slider","aria-label":"Filter maximum price"})]}),a.jsxs("select",{value:P,onChange:E=>M(E.target.value),className:"sort-dropdown","aria-label":"Sort search results",children:[a.jsx("option",{value:"match",children:d==="pt"?"Melhor Correspondência":"Best Match"}),a.jsx("option",{value:"price-asc",children:u("common.priceLowHigh")}),a.jsx("option",{value:"price-desc",children:u("common.priceHighLow")}),a.jsx("option",{value:"rating",children:d==="pt"?"Melhor Avaliados":"Highest Rated"})]})]})]}),a.jsx("div",{className:"search-results-summary",children:a.jsx("span",{children:d==="pt"?a.jsxs(a.Fragment,{children:["Encontrados ",a.jsx("strong",{children:A.length})," artigo(s) correspondente(s)",h&&a.jsxs("span",{children:[' para "',a.jsx("em",{children:h}),'"']})]}):a.jsxs(a.Fragment,{children:["Found ",a.jsx("strong",{children:A.length})," matching item",A.length===1?"":"s",h&&a.jsxs("span",{children:[' for "',a.jsx("em",{children:h}),'"']})]})})}),A.length===0?a.jsxs("div",{className:"search-empty-state",children:[a.jsx(Fe,{size:48,color:"#CBD5E1"}),a.jsx("h3",{children:d==="pt"?"Nenhum artigo encontrado com os filtros actuais":"No items found matching your criteria"}),a.jsx("p",{children:d==="pt"?"Experimente limpar as palavras-chave ou aumentar o filtro de preço máximo.":"Try clearing your keywords or expanding your maximum price filter."}),a.jsx("button",{onClick:()=>{x(""),z("all"),T(60)},className:"btn btn-primary",children:u("common.clearFilters")})]}):a.jsx("div",{className:"product-grid",children:A.map(E=>a.jsx(Jt,{product:E},E.id))})]})}),a.jsx("style",{children:`
        .search-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(248, 151, 29, 0.08) 50%, rgba(225, 40, 91, 0.08) 100%);
        }
        .search-page-input-wrap {
          position: relative;
          max-width: 600px;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
        }
        .search-bar-icon {
          position: absolute;
          left: 1.25rem;
          color: var(--color-primary);
        }
        .search-bar-input {
          width: 100%;
          padding: 1.1rem 3.5rem 1.1rem 3.25rem;
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-text-main);
          background: #FFFFFF;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-md);
        }
        .search-bar-input:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 4px rgba(225, 40, 91, 0.15);
        }
        .search-clear-btn {
          position: absolute;
          right: 1.25rem;
          background: none;
          border: none;
          color: var(--color-text-light);
          font-weight: 600;
          cursor: pointer;
        }
        .search-filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .search-side-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .price-slider-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFFFF;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }
        .price-slider-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          white-space: nowrap;
        }
        .price-range-slider {
          width: 100px;
          accent-color: var(--color-primary);
          cursor: pointer;
        }
        .search-results-summary {
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--color-text-muted);
        }
        .search-empty-state {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .search-filters-bar { flex-direction: column; align-items: stretch; }
          .search-side-controls { flex-direction: column; }
          .price-slider-wrap { width: 100%; justify-content: space-between; }
        }
      `})]})},$h=()=>{const{navigate:u}=Cr(),{locale:d}=Me(),l=d==="pt"?[{title:"Navegação Principal & Submarcas",icon:a.jsx(gn,{size:20,color:"#E1285B"}),links:[{label:"Página Inicial",path:"/",desc:"Apresentação da marca, destaques das 3 colecções, testemunhos e produtos em destaque"},{label:"Elamel Colors",path:"/colors",desc:"Kits de cerâmica: Loiça de jantar, Peças decorativas, Conjuntos de oferta, Loiça infantil e Estúdio de vidrados"},{label:"Elamel Goodies",path:"/goodies",desc:"Pastelaria artesanal: Bolos de família, Biscoitos e bolachas, Celebrações e Criador de Caixas de Iguarias"},{label:"Moments & Souvenirs",path:"/moments-souvenirs",desc:"Lembranças personalizadas: Pratos heráldicos, caixas de biscoitos com dedicatória, canecas de casal"},{label:"Sobre a Elamel",path:"/about",desc:"A nossa história, valores fundamentais, normas de segurança alimentar e workshops no atelier"},{label:"Contacto & Encomendas",path:"/contact",desc:"Formulário de encomenda e contacto, localização do atelier, telefone, correio electrónico e perguntas frequentes"}]},{title:"Experiências & Ferramentas Interactivas",icon:a.jsx(ga,{size:20,color:"#F8971D"}),links:[{label:"Estúdio de Personalização em Directo",path:"/moments-souvenirs",desc:"Ferramenta de pré-visualização interactiva de gravação em cerâmica e caixas de madeira"},{label:"Estúdio de Vidrados e Cores",path:"/colors",desc:"Simulador 2D interactivo para experimentar vidrados e combinações na cerâmica"},{label:"Criador Familiar de Caixas de Iguarias",path:"/goodies",desc:"Compositor interactivo de caixas de 4 e 6 unidades com monitor em tempo real de alergénios"},{label:"Pesquisa Global do Catálogo",path:"/search",desc:"Pesquisa avançada com filtros por preço, categoria e ingredientes"}]},{title:"Acessibilidade, Confiança & Informação Legal",icon:a.jsx(yd,{size:20,color:"#10B981"}),links:[{label:"Declaração de Acessibilidade",path:"/accessibility",desc:"Conformidade WCAG 2.2 AA, escala de letra, modo de alto contraste e navegação por teclado"},{label:"Política de Privacidade",path:"/privacy",desc:"Protecção da privacidade familiar e infantil, ausência de padrões obscuros e conformidade RGPD"},{label:"Termos de Utilização",path:"/terms",desc:"Condições gerais de serviço, expedição segura de loiça e pastelaria"},{label:"Mapa do Sítio",path:"/sitemap",desc:"Estrutura hierárquica completa de todas as páginas públicas e ferramentas"}]}]:[{title:"Main Navigation & Subbrands",icon:a.jsx(gn,{size:20,color:"#E1285B"}),links:[{label:"Home Page",path:"/",desc:"Brand intro, category highlights, why families love us, and featured items"},{label:"Elamel Colors",path:"/colors",desc:"Ceramic kits: Tableware, Decorative pieces, Gift sets, Kids pottery, Glaze studio"},{label:"Elamel Goodies",path:"/goodies",desc:"Bakery treats: Family cakes, Cookies, Occasion treats, Treat Box builder"},{label:"Moments & Souvenirs",path:"/moments-souvenirs",desc:"Personalised keepsakes: Heirloom plates, custom cookie crates, couple mugs"},{label:"About Elamel",path:"/about",desc:"Brand origin story, values, food & glaze safety standards, community workshops"},{label:"Contact & Orders",path:"/contact",desc:"Pre-order inquiry form, studio location, phone/email, and FAQ accordion"}]},{title:"Interactive Experiences & Tools",icon:a.jsx(ga,{size:20,color:"#F8971D"}),links:[{label:"Live Personalisation Studio",path:"/moments-souvenirs",desc:"Interactive live engraving & message cookie visual preview tool"},{label:"Interactive Glaze Studio",path:"/colors",desc:"2D pottery color palette tester and simulator"},{label:"Family Treat Box Builder",path:"/goodies",desc:"4-pack and 6-pack assortment custom builder with dietary monitor"},{label:"Global Catalog Search",path:"/search",desc:"Search all kits, bakery treats, and stories with advanced filters"}]},{title:"Trust, Accessibility & Legal",icon:a.jsx(yd,{size:20,color:"#10B981"}),links:[{label:"Accessibility Statement",path:"/accessibility",desc:"WCAG 2.2 AA compliance, font scaling, high contrast toggle, keyboard guide"},{label:"Privacy Policy",path:"/privacy",desc:"Child privacy protection, zero dark patterns, GDPR & data handling"},{label:"Terms of Use",path:"/terms",desc:"Safe family service terms, delivery standards, ceramic & bakery policies"},{label:"Sitemap Index",path:"/sitemap",desc:"Hierarchical navigation map of all public pages and interactive tools"}]}];return a.jsxs("div",{className:"sitemap-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header sitemap-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Hf,{size:14})," ",d==="pt"?"Arquitectura de Informação":"Information Architecture"]}),a.jsx("h1",{className:"cat-page-title",children:d==="pt"?"Mapa do Sítio & Directório de Páginas":"Website Sitemap & Page Directory"}),a.jsx("p",{className:"cat-page-lead",children:d==="pt"?"Visão hierárquica e detalhada de todas as secções, ferramentas interactivas, submarcas e páginas informativas da plataforma Elamel.":"A comprehensive hierarchical overview of all pages, interactive tools, subbrands, and legal policies on the Elamel website."})]})})}),a.jsx("section",{className:"section sitemap-main-section",children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"sitemap-sections-grid",children:l.map((v,h)=>a.jsxs("div",{className:"sitemap-card",children:[a.jsxs("div",{className:"sitemap-card-header",children:[a.jsx("div",{className:"sitemap-icon-box",children:v.icon}),a.jsx("h2",{className:"sitemap-section-title",children:v.title})]}),a.jsx("ul",{className:"sitemap-links-list",children:v.links.map((x,b)=>a.jsx("li",{className:"sitemap-link-item",children:a.jsxs("button",{onClick:()=>u(x.path),className:"sitemap-btn-link",children:[a.jsxs("div",{className:"sitemap-link-content",children:[a.jsxs("span",{className:"link-title-text",children:[x.label," ",a.jsx("code",{className:"link-path-code",children:x.path})]}),a.jsx("span",{className:"link-desc-text",children:x.desc})]}),a.jsx(gs,{size:16,className:"link-chevron"})]})},b))})]},h))})})}),a.jsx("style",{children:`
        .sitemap-hero {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(225, 40, 91, 0.08) 100%);
        }
        .sitemap-sections-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .sitemap-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sitemap-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .sitemap-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--color-bg-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sitemap-section-title {
          font-size: 1.4rem;
          color: var(--color-text-main);
        }
        .sitemap-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .sitemap-link-item {
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .sitemap-btn-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }
        .sitemap-btn-link:hover {
          background: var(--color-primary-light);
          border-color: rgba(225, 40, 91, 0.3);
          transform: translateX(4px);
        }
        .sitemap-link-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .link-title-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .link-path-code {
          font-family: monospace;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-primary);
          background: #FFFFFF;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .link-desc-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .link-chevron {
          color: var(--color-text-light);
          flex-shrink: 0;
        }
      `})]})},Wh=()=>{const{locale:u}=Me();return a.jsxs("div",{className:"policy-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header privacy-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(Ue,{size:14})," ",u==="pt"?"Confiança & Transparência":"Trust & Transparency"]}),a.jsx("h1",{className:"cat-page-title",children:u==="pt"?"Política de Privacidade & Protecção de Dados Familiares":"Privacy Policy & Family Data Protection"}),a.jsx("p",{className:"cat-page-lead",children:u==="pt"?"Na elamel, tratamos a privacidade da sua família com o mais escrupuloso respeito. Operamos com transparência total, sem venda de dados e com rigorosa protecção da privacidade infantil.":"At elamel, we treat your family’s privacy with the highest respect. We operate with zero dark patterns, no third-party data selling, and strict child privacy protections."})]})})}),a.jsx("section",{className:"section policy-content-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"policy-card",children:[a.jsxs("div",{className:"policy-header-badge",children:[a.jsx(_f,{size:18,color:"#10B981"}),a.jsx("span",{children:u==="pt"?"Data de Entrada em Vigor: 2026 • Em conformidade com o RGPD":"Effective Date: Updated for 2026 Season • GDPR & COPPA Compliant"})]}),a.jsxs("article",{className:"policy-article",children:[a.jsx("h2",{children:u==="pt"?"1. O Nosso Compromisso com as Famílias e Crianças":"1. Our Commitment to Families and Children"}),a.jsx("p",{children:u==="pt"?"Reconhecemos que crianças e famílias utilizam a nossa plataforma para explorar kits artísticos e doces de celebração. Não recolhemos intencionalmente dados de menores de 16 anos sem o consentimento comprovado dos pais. Todas as reservas, encomendas e personalizações devem ser realizadas por adultos.":"We recognize that children and families use our platform to explore craft kits and bakery treats. We do not intentionally collect personal information directly from children under 13 without verifiable parental consent. All ordering inquiries, workshop bookings, and personalization requests must be completed by an adult."}),a.jsx("h2",{children:u==="pt"?"2. Informação que Recolhemos":"2. Information We Collect"}),a.jsx("p",{children:u==="pt"?"Recolhemos unicamente os dados indispensáveis para o processamento das suas encomendas e atendimento ao cliente:":"We only collect the minimum information necessary to fulfill your orders, craft inquiries, and provide customer support:"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:u==="pt"?"Dados de Contacto:":"Contact Details:"})," ",u==="pt"?"Nome completo, endereço de correio electrónico, telefone e morada de expedição para entrega ao domicílio.":"Your name, email address, phone number, and optional delivery address when submitting a pre-order request."]}),a.jsxs("li",{children:[a.jsx("strong",{children:u==="pt"?"Dados de Personalização:":"Personalization Information:"})," ",u==="pt"?"Nomes de família, datas comemorativas e dedicatórias enviadas para gravação em cerâmica ou caixas de madeira.":"Family names, dates, or messages you submit for custom engraved ceramics or message cookies."]}),a.jsxs("li",{children:[a.jsx("strong",{children:u==="pt"?"Preferências de Acessibilidade:":"Browsing & Accessibility Preferences:"})," ",u==="pt"?"Tamanho de letra seleccionado, modo de alto contraste e idioma preferido armazenados localmente no seu navegador.":"User settings such as font scaling, high contrast mode, and reduced motion stored locally in your browser."]})]}),a.jsx("h2",{children:u==="pt"?"3. Finalidade do Tratamento de Dados":"3. How We Use Your Information"}),a.jsx("p",{children:u==="pt"?"Os seus dados são utilizados estritamente para:":"Your information is used strictly for:"}),a.jsxs("ul",{children:[a.jsx("li",{children:u==="pt"?"Processamento e expedição das encomendas de cerâmica e pastelaria.":"Processing and fulfilling your ceramic kits and bakery orders."}),a.jsx("li",{children:u==="pt"?"Comunicação directa sobre o estado de gravação em forno e reservas de workshops.":"Communicating updates regarding pre-orders, custom engravings, and workshop reservations."}),a.jsx("li",{children:u==="pt"?"Envio da nossa publicação periódica informativa (da qual pode cancelar a subscrição a qualquer momento com um clique).":"Sending our optional Family Club newsletter (which you can unsubscribe from at any time with one click)."})]}),a.jsx("h2",{children:u==="pt"?"4. Ausência de Padrões Obscuros e Não Comercialização de Dados":"4. Zero Dark Patterns & No Data Selling"}),a.jsx("p",{children:u==="pt"?"Comprometemo-nos a nunca vender, alugar ou partilhar informações da sua família com empresas terceiras de publicidade. Não utilizamos contadores de pressão enganosos nem cobranças ocultas no nosso sítio.":"We pledge that we never sell, rent, or trade your family data to third-party advertisers. There are no deceptive countdown timers, hidden opt-ins, or confusing unsubscribe processes on our website."}),a.jsx("h2",{children:u==="pt"?"5. Conservação e Segurança da Informação":"5. Data Storage and Security"}),a.jsx("p",{children:u==="pt"?"Toda a comunicação nesta plataforma é encriptada através de protocolos seguros SSL/TLS. Os dados de personalização são conservados apenas durante o período necessário ao fabrico das peças de cerâmica e salvaguarda da garantia legal.":"All data transmitted through our website is encrypted using industry-standard SSL/TLS protocols. Personalization details are kept only for the duration required to manufacture your custom heirloom pieces and maintain customer warranty records."}),a.jsx("h2",{children:u==="pt"?"6. Os Seus Direitos de Privacidade":"6. Your Privacy Rights"}),a.jsx("p",{children:u==="pt"?"Tem o direito garantido de consultar, rectificar ou solicitar a eliminação definitiva dos seus dados pessoais em qualquer altura. Basta enviar uma mensagem para o nosso encarregado de protecção de dados através de privacy@elamel-family.com.":"You have the full right to access, update, or permanently delete your personal information from our systems at any time. Simply reach out to our privacy coordinator at privacy@elamel-family.com."}),a.jsxs("div",{className:"policy-contact-box",children:[a.jsx(wn,{size:24,color:"#E1285B"}),a.jsxs("div",{children:[a.jsx("strong",{children:u==="pt"?"Dúvidas sobre a nossa política de privacidade?":"Questions about our privacy practices?"}),a.jsx("p",{children:u==="pt"?"Contacte o nosso responsável de protecção de dados em privacy@elamel-family.com ou ligue +351 210 000 000.":"Contact our Data Protection Officer at privacy@elamel-family.com or call +1 (800) 555-ELAMEL."})]})]})]})]})})}),a.jsx("style",{children:`
        .privacy-hero {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(254, 242, 242, 0.5) 100%);
        }
        .policy-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-sm);
          max-width: 860px;
          margin: 0 auto;
        }
        .policy-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #065F46;
          margin-bottom: 2rem;
        }
        .policy-article h2 {
          font-size: 1.45rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
        }
        .policy-article p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 1rem;
        }
        .policy-article ul {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .policy-article li {
          margin-bottom: 0.4rem;
        }
        .policy-contact-box {
          margin-top: 3rem;
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .policy-contact-box strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.25rem;
        }
        .policy-contact-box p {
          margin: 0;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .policy-card { padding: 1.75rem; }
        }
      `})]})},Hh=()=>{const{locale:u}=Me();return a.jsxs("div",{className:"policy-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header terms-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(th,{size:14})," ",u==="pt"?"Termos de Serviço":"Service Terms"]}),a.jsx("h1",{className:"cat-page-title",children:u==="pt"?"Termos de Utilização & Garantias Familiares":"Terms of Use & Family Guarantees"}),a.jsx("p",{className:"cat-page-lead",children:u==="pt"?"Directrizes transparentes e claras sobre o fabrico dos nossos conjuntos de cerâmica, confecção de pastelaria fresca e compromisso com a satisfação da sua família.":"Clear, transparent guidelines on how we craft your ceramic kits, bake your celebration goodies, and protect your satisfaction."})]})})}),a.jsx("section",{className:"section policy-content-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"policy-card",children:[a.jsxs("div",{className:"policy-header-badge",children:[a.jsx(jf,{size:18,color:"#0284C7"}),a.jsx("span",{children:u==="pt"?"Termos de Serviço • Actualizado em 2026":"Terms of Service • Last Updated: 2026"})]}),a.jsxs("article",{className:"policy-article",children:[a.jsx("h2",{children:u==="pt"?"1. Bem-vindo à Elamel":"1. Welcome to Elamel"}),a.jsx("p",{children:u==="pt"?"Ao utilizar a nossa plataforma, encomendar os nossos conjuntos de cerâmica criativa ou requisitar iguarias de pastelaria, aceita as presentes condições. Mantemos as nossas regras simples, transparentes e justas para todas as famílias.":"By using our website, purchasing our ceramic craft kits, or ordering our bakery treats, you agree to the following terms. We keep our terms straightforward, transparent, and fair to all family members."}),a.jsx("h2",{children:u==="pt"?"2. Segurança dos Produtos & Utilização Prevista":"2. Product Safety & Intended Use"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Elamel Colors:"})," ",u==="pt"?"Todos os vidrados incluídos são estritamente não-tóxicos, isentos de chumbo e seguros para brinquedos. A loiça deve ser cozida no forno doméstico de acordo com o guia incluído para garantir durabilidade e aptidão alimentar. A supervisão de adultos é recomendada para crianças de tenra idade.":"All included glazes are strictly non-toxic, lead-free, and toy-safe. Ceramics must be oven-cured according to included guidelines to achieve durable, food-safe finishes. Adult supervision is recommended when crafting with young children."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Elamel Goodies:"})," ",u==="pt"?"Todos os produtos de pastelaria são confecionados no próprio dia com informação detalhada de ingredientes e alergénios. Como contêm manteiga nobre e não possuem conservantes artificiais, devem ser conservados conforme as instruções de frescura indicadas.":"All bakery items are made fresh with clear allergen disclosures. Because treats contain real butter and no synthetic preservatives, please observe the indicated storage guidelines and consume within the recommended freshness window."]}),a.jsx("h2",{children:u==="pt"?"3. Personalizações & Encomendas à Medida":"3. Custom Personalisation & Orders"}),a.jsx("p",{children:u==="pt"?"Ao submeter textos ou nomes para gravação em pratos, canecas ou caixas de biscoitos:":"When submitting personalized text for heirloom plates, mugs, or message cookie crates:"}),a.jsxs("ul",{children:[a.jsx("li",{children:u==="pt"?"Verifique atentamente a ortografia dos nomes e datas durante a pré-visualização no estúdio interactivo.":"Please double-check the spelling of names, anniversary dates, and messages during your live studio preview."}),a.jsx("li",{children:u==="pt"?"Reservamo-nos o direito de recusar dedicatórias com linguagem ofensiva ou discriminatória, em respeito pelo espírito familiar da nossa marca.":"We reserve the right to decline text submissions that contain profane, abusive, or discriminatory language in accordance with our family-friendly ethos."}),a.jsx("li",{children:u==="pt"?"As peças personalizadas requerem entre 2 a 4 dias úteis de trabalho artesanal em forno antes da expedição.":"Customized items undergo a 2-4 business day artisan preparation and kiln cure process before dispatch."})]}),a.jsx("h2",{children:u==="pt"?"4. Garantia de Qualidade & Satisfação":"4. Quality & Happiness Guarantee"}),a.jsx("p",{children:u==="pt"?"Caso a sua encomenda de cerâmica sofra algum dano durante o transporte, ou caso um artigo de pastelaria não corresponda aos nossos elevados padrões de frescura, contacte-nos nas primeiras 48 horas após a recepção com fotografia da embalagem. Procederemos de imediato ao reenvio de nova unidade ou à devolução integral do valor.":"If your ceramic kit arrives with any damage during transit, or if a bakery item does not meet our high freshness standards, please contact us within 48 hours of receipt with a photo, and we will happily dispatch a complimentary replacement or provide a full refund."}),a.jsx("h2",{children:u==="pt"?"5. Workshops & Eventos Presenciais":"5. Studio Workshops & Bookings"}),a.jsx("p",{children:u==="pt"?"As reservas para workshops no atelier podem ser remarcadas gratuitamente até 48 horas antes da data marcada. Crianças com idade inferior a 12 anos devem ser acompanhadas por um adulto responsável.":"Workshop reservations can be rescheduled up to 48 hours prior to the event time free of charge. Children attending workshops must be accompanied by a participating adult."}),a.jsx("h2",{children:u==="pt"?"6. Contacto & Resolução de Questões":"6. Contact & Disputes"}),a.jsx("p",{children:u==="pt"?"Acreditamos no diálogo próximo e acolhedor para resolver qualquer situação. Envie-nos as suas dúvidas ou sugestões através de support@elamel-family.com.":"We believe in resolving any concern with warmth and fairness. Please reach out to support@elamel-family.com with any feedback or questions."})]})]})})}),a.jsx("style",{children:`
        .terms-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(248, 151, 29, 0.08) 50%, rgba(254, 242, 242, 0.5) 100%);
        }
      `})]})},Vh=()=>{const{settings:u,setFontSize:d,toggleHighContrast:l,toggleReducedMotion:v}=Sd(),{t:h,locale:x}=Me();return a.jsxs("div",{className:"accessibility-page",children:[a.jsx(Rr,{}),a.jsx("section",{className:"category-hero-header a11y-hero",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cat-hero-inner",children:[a.jsxs("span",{className:"section-eyebrow",children:[a.jsx(st,{size:14})," ",x==="pt"?"Inclusivo por Natureza":"Inclusive by Design"]}),a.jsx("h1",{className:"cat-page-title",children:x==="pt"?"Declaração de Acessibilidade & Preferências de Visualização":"Accessibility Statement & Preferences"}),a.jsx("p",{className:"cat-page-lead",children:x==="pt"?"Assumimos o compromisso de garantir uma experiência digital acolhedora a todos os elementos da família, crianças e adultos. A nossa plataforma foi desenvolvida em conformidade rigorosa com as directrizes europeias e internacionais WCAG 2.2 Nível AA.":"We are committed to ensuring digital accessibility for all family members, children, and adults of varying abilities. Our website is built adhering to the WCAG 2.2 Level AA guidelines."})]})})}),a.jsx("section",{className:"section a11y-main-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"a11y-tester-card",children:[a.jsxs("div",{className:"tester-header",children:[a.jsx(Fe,{size:24,color:"#E1285B"}),a.jsxs("div",{children:[a.jsx("h2",{className:"tester-title",children:h("accessibility.controlsTitle")}),a.jsx("p",{className:"tester-sub",children:x==="pt"?"Personalize o aspecto visual e o tamanho do texto em tempo real em todas as páginas.":"Customize your display settings across the entire website in real time."})]})]}),a.jsxs("div",{className:"tester-controls-grid",children:[a.jsxs("div",{className:"tester-control-box",children:[a.jsxs("div",{className:"tester-box-head",children:[a.jsx(_d,{size:20,color:"#0284C7"}),a.jsx("strong",{children:h("accessibility.textSize")})]}),a.jsx("p",{className:"tester-box-desc",children:x==="pt"?"Ajuste a escala tipográfica para uma leitura sem esforço:":"Scale typography for comfortable reading:"}),a.jsxs("div",{className:"tester-btn-group",children:[a.jsx("button",{onClick:()=>d("normal"),className:`tester-choice-btn ${u.fontSize==="normal"?"active":""}`,children:h("accessibility.textSizeNormal")}),a.jsx("button",{onClick:()=>d("large"),className:`tester-choice-btn ${u.fontSize==="large"?"active":""}`,children:h("accessibility.textSizeLarge")}),a.jsx("button",{onClick:()=>d("xlarge"),className:`tester-choice-btn ${u.fontSize==="xlarge"?"active":""}`,children:h("accessibility.textSizeXLarge")})]})]}),a.jsxs("div",{className:"tester-control-box",children:[a.jsxs("div",{className:"tester-box-head",children:[a.jsx(st,{size:20,color:"#F8971D"}),a.jsx("strong",{children:h("accessibility.contrast")})]}),a.jsx("p",{className:"tester-box-desc",children:h("accessibility.contrastHelp")}),a.jsx("button",{onClick:l,className:`btn ${u.highContrast?"btn-primary":"btn-secondary"} btn-full-width`,children:u.highContrast?x==="pt"?"Alto Contraste Activado":"High Contrast is ON":x==="pt"?"Activar Alto Contraste":"Enable High Contrast"})]}),a.jsxs("div",{className:"tester-control-box",children:[a.jsxs("div",{className:"tester-box-head",children:[a.jsx(Bd,{size:20,color:"#10B981"}),a.jsx("strong",{children:h("accessibility.motion")})]}),a.jsx("p",{className:"tester-box-desc",children:h("accessibility.motionHelp")}),a.jsx("button",{onClick:v,className:`btn ${u.reducedMotion?"btn-primary":"btn-secondary"} btn-full-width`,children:u.reducedMotion?x==="pt"?"Animações Reduzidas":"Reduced Motion is ON":x==="pt"?"Reduzir Animações":"Enable Reduced Motion"})]})]})]}),a.jsxs("div",{className:"a11y-details-card",children:[a.jsx("h2",{className:"a11y-section-heading",children:x==="pt"?"Como Cumprimos os 4 Princípios WCAG 2.2 (POUR)":"How We Implement WCAG 2.2 Principles (POUR)"}),a.jsxs("div",{className:"pour-grid",children:[a.jsxs("div",{className:"pour-card",children:[a.jsxs("div",{className:"pour-header",children:[a.jsx(st,{size:22,color:"#E1285B"}),a.jsx("h3",{children:x==="pt"?"1. Perceptível (Perceivable)":"1. Perceivable"})]}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Contraste de Texto:":"Text Contrast:"})," ",x==="pt"?"Rácio mínimo de 4.5:1 para texto corrente e 3:1 para títulos sobre fundos claros.":"Minimum 4.5:1 ratio for body text and 3:1 for large headers against light backgrounds."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Texto Alternativo (Alt):":"Alt Text:"})," ",x==="pt"?"Todas as imagens relevantes contêm descrições detalhadas da peça e dos materiais.":"All meaningful images include descriptive alternative text detailing item type and use."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Independência Sensorial:":"Sensory Independence:"})," ",x==="pt"?"Nenhuma instrução depende unicamente de cores ou formatos visuais isolados.":"Instructions do not rely solely on shape, size, or color alone."]})]})]}),a.jsxs("div",{className:"pour-card",children:[a.jsxs("div",{className:"pour-header",children:[a.jsx(Af,{size:22,color:"#F8971D"}),a.jsx("h3",{children:x==="pt"?"2. Operável (Operable)":"2. Operable"})]}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Navegação por Teclado:":"Full Keyboard Navigation:"})," ",x==="pt"?"Todos os botões, filtros e janelas modais são navegáveis via Tab e Shift+Tab.":"Every button, filter, and modal is reachable via Tab and Shift+Tab."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Foco Visual Destacado:":"Visible Focus Indicators:"})," ",x==="pt"?"Contornos de foco bem nítidos em elementos activos.":"High-visibility outline on active elements."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Controlo de Movimento:":"Controllable Motion:"})," ",x==="pt"?"Os carrosséis possuem botões de Pausa e Reprodução.":"Carousels feature visible pause/play controls."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Ligação de Atalho Directo:":"Skip Link:"})," ",x==="pt"?"Ligação para saltar directamente para o conteúdo principal.":'Direct "Skip to main content" link for keyboard users.']})]})]}),a.jsxs("div",{className:"pour-card",children:[a.jsxs("div",{className:"pour-header",children:[a.jsx(bh,{size:22,color:"#0284C7"}),a.jsx("h3",{children:x==="pt"?"3. Compreensível (Understandable)":"3. Understandable"})]}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Estrutura Previsível:":"Predictable Layout:"})," ",x==="pt"?"Barra de navegação, cabeçalhos e rodapé consistentes em todas as páginas.":"Consistent navigation, header, and footer positions on every single page."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Validação Construtiva:":"Clear Error Feedback:"})," ",x==="pt"?"Mensagens de ajuda claras a indicar como corrigir campos incompletos.":"Friendly inline validation messages explaining how to fix issues."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Linguagem Simples:":"Plain Language:"})," ",x==="pt"?"Textos claros e acessíveis para crianças, pais e avós.":"Plain language copy respectful of both children and adults."]})]})]}),a.jsxs("div",{className:"pour-card",children:[a.jsxs("div",{className:"pour-header",children:[a.jsx(Ue,{size:22,color:"#10B981"}),a.jsx("h3",{children:x==="pt"?"4. Robusto (Robust)":"4. Robust"})]}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"HTML5 Semântico:":"Semantic HTML5:"})," ",x==="pt"?"Utilização de elementos padrão <header>, <nav>, <main>, <section> e <footer>.":"Native <header>, <nav>, <main>, <section>, and <footer> tags."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Suporte para Leitores de Ecrã:":"ARIA Landmarks & Live Regions:"})," ",x==="pt"?"As notificações do cesto e avisos são anunciados via atributos aria-live.":"Dynamic shopping bag and toast updates are announced automatically."]}),a.jsxs("li",{children:[a.jsx("strong",{children:x==="pt"?"Compatibilidade Ampla:":"Cross-Browser Reliability:"})," ",x==="pt"?"Funcionamento uniforme em computadores, tablets e telemóveis sem necessidade de extensões.":"Functions seamlessly without requiring external plugins."]})]})]})]}),a.jsxs("div",{className:"keyboard-shortcuts-table-wrap",children:[a.jsx("h3",{className:"sub-heading",children:x==="pt"?"Guia de Navegação Rápida por Teclado":"Keyboard Navigation Guide"}),a.jsxs("table",{className:"shortcuts-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:x==="pt"?"Tecla":"Key"}),a.jsx("th",{children:x==="pt"?"Acção":"Action"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("kbd",{children:"Tab"})}),a.jsx("td",{children:x==="pt"?"Avança o foco para a próxima ligação, botão ou campo":"Move focus to the next interactive link, button, or input"})]}),a.jsxs("tr",{children:[a.jsxs("td",{children:[a.jsx("kbd",{children:"Shift"})," + ",a.jsx("kbd",{children:"Tab"})]}),a.jsx("td",{children:x==="pt"?"Recua o foco para o elemento interactivo anterior":"Move focus to the previous interactive element"})]}),a.jsxs("tr",{children:[a.jsxs("td",{children:[a.jsx("kbd",{children:"Enter"})," / ",a.jsx("kbd",{children:"Espaço"})]}),a.jsx("td",{children:x==="pt"?"Activa botões, abre produtos e acciona caixas de selecção":"Activate buttons, links, or toggle checkboxes"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("kbd",{children:"Esc"})}),a.jsx("td",{children:x==="pt"?"Fecha janelas modais abertas, pesquisa e gaveta de compras":"Close open modals, search overlay, or Treat Box drawer"})]})]})]})]})]})]})}),a.jsx("style",{children:`
        .a11y-hero {
          background: linear-gradient(135deg, rgba(225, 40, 91, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(240, 253, 244, 0.6) 100%);
        }
        .a11y-tester-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-bottom: 3.5rem;
        }
        .tester-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .tester-title {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }
        .tester-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .tester-controls-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .tester-control-box {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          border: 1px solid var(--color-border-light);
          display: flex;
          flex-direction: column;
        }
        .tester-box-head {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }
        .tester-box-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .tester-btn-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .tester-choice-btn {
          padding: 0.55rem 0.85rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .tester-choice-btn:hover {
          border-color: var(--color-primary);
        }
        .tester-choice-btn.active {
          background: var(--color-primary-light);
          border-color: var(--color-primary);
          color: var(--color-primary);
          font-weight: 700;
        }
        .a11y-details-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-sm);
        }
        .a11y-section-heading {
          font-size: 1.85rem;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .pour-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }
        .pour-card {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--color-border-light);
        }
        .pour-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .pour-header h3 {
          font-size: 1.35rem;
        }
        .pour-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .pour-card li {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }
        .keyboard-shortcuts-table-wrap {
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-light);
        }
        .sub-heading {
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
        }
        .shortcuts-table {
          width: 100%;
          border-collapse: collapse;
        }
        .shortcuts-table th,
        .shortcuts-table td {
          padding: 0.85rem 1.25rem;
          text-align: left;
          border-bottom: 1px solid var(--color-border-light);
          font-size: 0.9375rem;
        }
        .shortcuts-table th {
          font-family: var(--font-heading);
          color: var(--color-text-main);
          background: var(--color-bg-subtle);
        }
        kbd {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.5rem;
          font-family: monospace;
          font-size: 0.8125rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 992px) {
          .tester-controls-grid { grid-template-columns: 1fr; }
          .pour-grid { grid-template-columns: 1fr; }
          .a11y-tester-card, .a11y-details-card { padding: 1.75rem; }
        }
      `})]})},Gh=()=>{const{currentPath:u}=Cr(),{t:d}=Me(),[l,v]=L.useState(!1),[h,x]=L.useState(!1),b=()=>{switch(u.split("?")[0]){case"/":case"":return a.jsx(bd,{});case"/colors":return a.jsx(Dh,{});case"/goodies":return a.jsx(Lh,{});case"/moments-souvenirs":case"/moments":return a.jsx(Ih,{});case"/about":return a.jsx(Rh,{});case"/contact":return a.jsx(Oh,{});case"/search":return a.jsx(qh,{});case"/sitemap":return a.jsx($h,{});case"/privacy":return a.jsx(Wh,{});case"/terms":return a.jsx(Hh,{});case"/accessibility":return a.jsx(Vh,{});default:return a.jsx(bd,{})}};return a.jsxs("div",{className:"app-shell",children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:d("nav.skipToContent")}),a.jsx(kh,{onOpenSearch:()=>v(!0),onOpenAccessibility:()=>x(!0)}),a.jsx("main",{id:"main-content",className:"main-landmark",role:"main",tabIndex:-1,children:b()}),a.jsx(Ch,{}),a.jsx(zh,{}),a.jsx(Ph,{}),a.jsx(Eh,{isOpen:l,onClose:()=>v(!1)}),a.jsx(Mh,{isOpen:h,onClose:()=>x(!1)}),a.jsx(Th,{})]})},Uh=()=>a.jsx(Hp,{children:a.jsx(rp,{children:a.jsx(Zm,{children:a.jsx(Jm,{children:a.jsx(ep,{children:a.jsx(Gh,{})})})})})}),wd=document.getElementById("root");wd&&Xm.createRoot(wd).render(a.jsx(Hm.StrictMode,{children:a.jsx(Uh,{})}));
