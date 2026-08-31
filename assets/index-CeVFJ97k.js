(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))C(N);new MutationObserver(N=>{for(const S of N)if(S.type==="childList")for(const z of S.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&C(z)}).observe(document,{childList:!0,subtree:!0});function c(N){const S={};return N.integrity&&(S.integrity=N.integrity),N.referrerPolicy&&(S.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?S.credentials="include":N.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function C(N){if(N.ep)return;N.ep=!0;const S=c(N);fetch(N.href,S)}})();function xd(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var so={exports:{}},Yn={},oo={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Em(){if(sd)return oe;sd=1;var m=Symbol.for("react.element"),f=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),k=Symbol.iterator;function b(l){return l===null||typeof l!="object"?null:(l=k&&l[k]||l["@@iterator"],typeof l=="function"?l:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,ie={};function F(l,x,B){this.props=l,this.context=x,this.refs=ie,this.updater=B||M}F.prototype.isReactComponent={},F.prototype.setState=function(l,x){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,x,"setState")},F.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function te(){}te.prototype=F.prototype;function G(l,x,B){this.props=l,this.context=x,this.refs=ie,this.updater=B||M}var pe=G.prototype=new te;pe.constructor=G,Y(pe,F.prototype),pe.isPureReactComponent=!0;var fe=Array.isArray,Me=Object.prototype.hasOwnProperty,ge={current:null},Se={key:!0,ref:!0,__self:!0,__source:!0};function ve(l,x,B){var I,$={},H=null,O=null;if(x!=null)for(I in x.ref!==void 0&&(O=x.ref),x.key!==void 0&&(H=""+x.key),x)Me.call(x,I)&&!Se.hasOwnProperty(I)&&($[I]=x[I]);var q=arguments.length-2;if(q===1)$.children=B;else if(1<q){for(var re=Array(q),ce=0;ce<q;ce++)re[ce]=arguments[ce+2];$.children=re}if(l&&l.defaultProps)for(I in q=l.defaultProps,q)$[I]===void 0&&($[I]=q[I]);return{$$typeof:m,type:l,key:H,ref:O,props:$,_owner:ge.current}}function se(l,x){return{$$typeof:m,type:l.type,key:x,ref:l.ref,props:l.props,_owner:l._owner}}function Ae(l){return typeof l=="object"&&l!==null&&l.$$typeof===m}function Ie(l){var x={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(B){return x[B]})}var ne=/\/+/g;function ze(l,x){return typeof l=="object"&&l!==null&&l.key!=null?Ie(""+l.key):x.toString(36)}function Ke(l,x,B,I,$){var H=typeof l;(H==="undefined"||H==="boolean")&&(l=null);var O=!1;if(l===null)O=!0;else switch(H){case"string":case"number":O=!0;break;case"object":switch(l.$$typeof){case m:case f:O=!0}}if(O)return O=l,$=$(O),l=I===""?"."+ze(O,0):I,fe($)?(B="",l!=null&&(B=l.replace(ne,"$&/")+"/"),Ke($,x,B,"",function(ce){return ce})):$!=null&&(Ae($)&&($=se($,B+(!$.key||O&&O.key===$.key?"":(""+$.key).replace(ne,"$&/")+"/")+l)),x.push($)),1;if(O=0,I=I===""?".":I+":",fe(l))for(var q=0;q<l.length;q++){H=l[q];var re=I+ze(H,q);O+=Ke(H,x,B,re,$)}else if(re=b(l),typeof re=="function")for(l=re.call(l),q=0;!(H=l.next()).done;)H=H.value,re=I+ze(H,q++),O+=Ke(H,x,B,re,$);else if(H==="object")throw x=String(l),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return O}function nr(l,x,B){if(l==null)return l;var I=[],$=0;return Ke(l,I,"","",function(H){return x.call(B,H,$++)}),I}function We(l){if(l._status===-1){var x=l._result;x=x(),x.then(function(B){(l._status===0||l._status===-1)&&(l._status=1,l._result=B)},function(B){(l._status===0||l._status===-1)&&(l._status=2,l._result=B)}),l._status===-1&&(l._status=0,l._result=x)}if(l._status===1)return l._result.default;throw l._result}var je={current:null},R={transition:null},ee={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:R,ReactCurrentOwner:ge};function h(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:nr,forEach:function(l,x,B){nr(l,function(){x.apply(this,arguments)},B)},count:function(l){var x=0;return nr(l,function(){x++}),x},toArray:function(l){return nr(l,function(x){return x})||[]},only:function(l){if(!Ae(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},oe.Component=F,oe.Fragment=c,oe.Profiler=N,oe.PureComponent=G,oe.StrictMode=C,oe.Suspense=w,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,oe.act=h,oe.cloneElement=function(l,x,B){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var I=Y({},l.props),$=l.key,H=l.ref,O=l._owner;if(x!=null){if(x.ref!==void 0&&(H=x.ref,O=ge.current),x.key!==void 0&&($=""+x.key),l.type&&l.type.defaultProps)var q=l.type.defaultProps;for(re in x)Me.call(x,re)&&!Se.hasOwnProperty(re)&&(I[re]=x[re]===void 0&&q!==void 0?q[re]:x[re])}var re=arguments.length-2;if(re===1)I.children=B;else if(1<re){q=Array(re);for(var ce=0;ce<re;ce++)q[ce]=arguments[ce+2];I.children=q}return{$$typeof:m,type:l.type,key:$,ref:H,props:I,_owner:O}},oe.createContext=function(l){return l={$$typeof:z,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:S,_context:l},l.Consumer=l},oe.createElement=ve,oe.createFactory=function(l){var x=ve.bind(null,l);return x.type=l,x},oe.createRef=function(){return{current:null}},oe.forwardRef=function(l){return{$$typeof:j,render:l}},oe.isValidElement=Ae,oe.lazy=function(l){return{$$typeof:D,_payload:{_status:-1,_result:l},_init:We}},oe.memo=function(l,x){return{$$typeof:T,type:l,compare:x===void 0?null:x}},oe.startTransition=function(l){var x=R.transition;R.transition={};try{l()}finally{R.transition=x}},oe.unstable_act=h,oe.useCallback=function(l,x){return je.current.useCallback(l,x)},oe.useContext=function(l){return je.current.useContext(l)},oe.useDebugValue=function(){},oe.useDeferredValue=function(l){return je.current.useDeferredValue(l)},oe.useEffect=function(l,x){return je.current.useEffect(l,x)},oe.useId=function(){return je.current.useId()},oe.useImperativeHandle=function(l,x,B){return je.current.useImperativeHandle(l,x,B)},oe.useInsertionEffect=function(l,x){return je.current.useInsertionEffect(l,x)},oe.useLayoutEffect=function(l,x){return je.current.useLayoutEffect(l,x)},oe.useMemo=function(l,x){return je.current.useMemo(l,x)},oe.useReducer=function(l,x,B){return je.current.useReducer(l,x,B)},oe.useRef=function(l){return je.current.useRef(l)},oe.useState=function(l){return je.current.useState(l)},oe.useSyncExternalStore=function(l,x,B){return je.current.useSyncExternalStore(l,x,B)},oe.useTransition=function(){return je.current.useTransition()},oe.version="18.3.1",oe}var od;function go(){return od||(od=1,oo.exports=Em()),oo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Pm(){if(ld)return Yn;ld=1;var m=go(),f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,N=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function z(j,w,T){var D,k={},b=null,M=null;T!==void 0&&(b=""+T),w.key!==void 0&&(b=""+w.key),w.ref!==void 0&&(M=w.ref);for(D in w)C.call(w,D)&&!S.hasOwnProperty(D)&&(k[D]=w[D]);if(j&&j.defaultProps)for(D in w=j.defaultProps,w)k[D]===void 0&&(k[D]=w[D]);return{$$typeof:f,type:j,key:b,ref:M,props:k,_owner:N.current}}return Yn.Fragment=c,Yn.jsx=z,Yn.jsxs=z,Yn}var cd;function Mm(){return cd||(cd=1,so.exports=Pm()),so.exports}var t=Mm(),A=go();const _m=xd(A);var di={},lo={exports:{}},dr={},co={exports:{}},uo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function Tm(){return dd||(dd=1,(function(m){function f(R,ee){var h=R.length;R.push(ee);e:for(;0<h;){var l=h-1>>>1,x=R[l];if(0<N(x,ee))R[l]=ee,R[h]=x,h=l;else break e}}function c(R){return R.length===0?null:R[0]}function C(R){if(R.length===0)return null;var ee=R[0],h=R.pop();if(h!==ee){R[0]=h;e:for(var l=0,x=R.length,B=x>>>1;l<B;){var I=2*(l+1)-1,$=R[I],H=I+1,O=R[H];if(0>N($,h))H<x&&0>N(O,$)?(R[l]=O,R[H]=h,l=H):(R[l]=$,R[I]=h,l=I);else if(H<x&&0>N(O,h))R[l]=O,R[H]=h,l=H;else break e}}return ee}function N(R,ee){var h=R.sortIndex-ee.sortIndex;return h!==0?h:R.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;m.unstable_now=function(){return S.now()}}else{var z=Date,j=z.now();m.unstable_now=function(){return z.now()-j}}var w=[],T=[],D=1,k=null,b=3,M=!1,Y=!1,ie=!1,F=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(R){for(var ee=c(T);ee!==null;){if(ee.callback===null)C(T);else if(ee.startTime<=R)C(T),ee.sortIndex=ee.expirationTime,f(w,ee);else break;ee=c(T)}}function fe(R){if(ie=!1,pe(R),!Y)if(c(w)!==null)Y=!0,We(Me);else{var ee=c(T);ee!==null&&je(fe,ee.startTime-R)}}function Me(R,ee){Y=!1,ie&&(ie=!1,te(ve),ve=-1),M=!0;var h=b;try{for(pe(ee),k=c(w);k!==null&&(!(k.expirationTime>ee)||R&&!Ie());){var l=k.callback;if(typeof l=="function"){k.callback=null,b=k.priorityLevel;var x=l(k.expirationTime<=ee);ee=m.unstable_now(),typeof x=="function"?k.callback=x:k===c(w)&&C(w),pe(ee)}else C(w);k=c(w)}if(k!==null)var B=!0;else{var I=c(T);I!==null&&je(fe,I.startTime-ee),B=!1}return B}finally{k=null,b=h,M=!1}}var ge=!1,Se=null,ve=-1,se=5,Ae=-1;function Ie(){return!(m.unstable_now()-Ae<se)}function ne(){if(Se!==null){var R=m.unstable_now();Ae=R;var ee=!0;try{ee=Se(!0,R)}finally{ee?ze():(ge=!1,Se=null)}}else ge=!1}var ze;if(typeof G=="function")ze=function(){G(ne)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,nr=Ke.port2;Ke.port1.onmessage=ne,ze=function(){nr.postMessage(null)}}else ze=function(){F(ne,0)};function We(R){Se=R,ge||(ge=!0,ze())}function je(R,ee){ve=F(function(){R(m.unstable_now())},ee)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(R){R.callback=null},m.unstable_continueExecution=function(){Y||M||(Y=!0,We(Me))},m.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<R?Math.floor(1e3/R):5},m.unstable_getCurrentPriorityLevel=function(){return b},m.unstable_getFirstCallbackNode=function(){return c(w)},m.unstable_next=function(R){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var h=b;b=ee;try{return R()}finally{b=h}},m.unstable_pauseExecution=function(){},m.unstable_requestPaint=function(){},m.unstable_runWithPriority=function(R,ee){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var h=b;b=R;try{return ee()}finally{b=h}},m.unstable_scheduleCallback=function(R,ee,h){var l=m.unstable_now();switch(typeof h=="object"&&h!==null?(h=h.delay,h=typeof h=="number"&&0<h?l+h:l):h=l,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=h+x,R={id:D++,callback:ee,priorityLevel:R,startTime:h,expirationTime:x,sortIndex:-1},h>l?(R.sortIndex=h,f(T,R),c(w)===null&&R===c(T)&&(ie?(te(ve),ve=-1):ie=!0,je(fe,h-l))):(R.sortIndex=x,f(w,R),Y||M||(Y=!0,We(Me))),R},m.unstable_shouldYield=Ie,m.unstable_wrapCallback=function(R){var ee=b;return function(){var h=b;b=ee;try{return R.apply(this,arguments)}finally{b=h}}}})(uo)),uo}var ud;function Dm(){return ud||(ud=1,co.exports=Tm()),co.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Am(){if(md)return dr;md=1;var m=go(),f=Dm();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C=new Set,N={};function S(e,r){z(e,r),z(e+"Capture",r)}function z(e,r){for(N[e]=r,e=0;e<r.length;e++)C.add(r[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},k={};function b(e){return w.call(k,e)?!0:w.call(D,e)?!1:T.test(e)?k[e]=!0:(D[e]=!0,!1)}function M(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,r,n,a){if(r===null||typeof r>"u"||M(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ie(e,r,n,a,i,s,o){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=o}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new ie(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];F[r]=new ie(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new ie(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new ie(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new ie(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new ie(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(te,G);F[r]=new ie(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(te,G);F[r]=new ie(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(te,G);F[r]=new ie(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function pe(e,r,n,a){var i=F.hasOwnProperty(r)?F[r]:null;(i!==null?i.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,n,i,a)&&(n=null),a||i===null?b(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var fe=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),ge=Symbol.for("react.portal"),Se=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),nr=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),R=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var h=Object.assign,l;function x(e){if(l===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);l=r&&r[1]||""}return`
`+l+e}var B=!1;function I(e,r){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var a=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){a=y}e.call(r.prototype)}else{try{throw Error()}catch(y){a=y}e()}}catch(y){if(y&&a&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,d=s.length-1;1<=o&&0<=d&&i[o]!==s[d];)d--;for(;1<=o&&0<=d;o--,d--)if(i[o]!==s[d]){if(o!==1||d!==1)do if(o--,d--,0>d||i[o]!==s[d]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=d);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?x(e):""}function $(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=I(e.type,!1),e;case 11:return e=I(e.type.render,!1),e;case 1:return e=I(e.type,!0),e;default:return""}}function H(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Se:return"Fragment";case ge:return"Portal";case se:return"Profiler";case ve:return"StrictMode";case ze:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case Ae:return(e._context.displayName||"Context")+".Provider";case ne:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nr:return r=e.displayName||null,r!==null?r:H(e.type)||"Memo";case We:r=e._payload,e=e._init;try{return H(e(r))}catch{}}return null}function O(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(r);case 8:return r===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ce(e){var r=re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function me(e){e._valueTracker||(e._valueTracker=ce(e))}function ye(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=re(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Ee(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function le(e,r){var n=r.checked;return h({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function He(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=q(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ar(e,r){r=r.checked,r!=null&&pe(e,"checked",r,!1)}function er(e,r){ar(e,r);var n=q(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Nr(e,r.type,n):r.hasOwnProperty("defaultValue")&&Nr(e,r.type,q(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function fr(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nr(e,r,n){(r!=="number"||Ee(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qe=Array.isArray;function Kr(e,r,n,a){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function cn(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return h({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(c(92));if(Qe(n)){if(1<n.length)throw Error(c(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:q(n)}}function dn(e,r){var n=q(r.value),a=q(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function ra(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function un(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mn(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?un(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dt,hn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Dt=Dt||document.createElement("div"),Dt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Dt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Qr(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){vi.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Rr[r]=Rr[e]})});function ta(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+r).trim():r+"px"}function jo(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=ta(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Dd=h({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,r){if(r){if(Dd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function yi(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,At=null,Lt=null;function ko(e){if(e=An(e)){if(typeof ji!="function")throw Error(c(280));var r=e.stateNode;r&&(r=Ca(r),ji(e.stateNode,e.type,r))}}function No(e){At?Lt?Lt.push(e):Lt=[e]:At=e}function Co(){if(At){var e=At,r=Lt;if(Lt=At=null,ko(e),r)for(e=0;e<r.length;e++)ko(r[e])}}function Fo(e,r){return e(r)}function So(){}var ki=!1;function zo(e,r,n){if(ki)return e(r,n);ki=!0;try{return Fo(e,r,n)}finally{ki=!1,(At!==null||Lt!==null)&&(So(),Co())}}function pn(e,r){var n=e.stateNode;if(n===null)return null;var a=Ca(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,r,typeof n));return n}var Ni=!1;if(j)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Ni=!1}function Ad(e,r,n,a,i,s,o,d,u){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(P){this.onError(P)}}var gn=!1,na=null,aa=!1,Ci=null,Ld={onError:function(e){gn=!0,na=e}};function Bd(e,r,n,a,i,s,o,d,u){gn=!1,na=null,Ad.apply(Ld,arguments)}function Id(e,r,n,a,i,s,o,d,u){if(Bd.apply(this,arguments),gn){if(gn){var y=na;gn=!1,na=null}else throw Error(c(198));aa||(aa=!0,Ci=y)}}function gt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Eo(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Po(e){if(gt(e)!==e)throw Error(c(188))}function Rd(e){var r=e.alternate;if(!r){if(r=gt(e),r===null)throw Error(c(188));return r!==e?null:e}for(var n=e,a=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Po(i),e;if(s===a)return Po(i),r;s=s.sibling}throw Error(c(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,d=i.child;d;){if(d===n){o=!0,n=i,a=s;break}if(d===a){o=!0,a=i,n=s;break}d=d.sibling}if(!o){for(d=s.child;d;){if(d===n){o=!0,n=s,a=i;break}if(d===a){o=!0,a=s,n=i;break}d=d.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:r}function Mo(e){return e=Rd(e),e!==null?_o(e):null}function _o(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=_o(e);if(r!==null)return r;e=e.sibling}return null}var To=f.unstable_scheduleCallback,Do=f.unstable_cancelCallback,Od=f.unstable_shouldYield,$d=f.unstable_requestPaint,_e=f.unstable_now,Wd=f.unstable_getCurrentPriorityLevel,Fi=f.unstable_ImmediatePriority,Ao=f.unstable_UserBlockingPriority,ia=f.unstable_NormalPriority,Hd=f.unstable_LowPriority,Lo=f.unstable_IdlePriority,sa=null,_r=null;function qd(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Gd,Ud=Math.log,Vd=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Ud(e)/Vd|0)|0}var oa=64,la=4194304;function vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var d=o&~i;d!==0?a=vn(d):(s&=o,s!==0&&(a=vn(s)))}else o=n&~i,o!==0?a=vn(o):s!==0&&(a=vn(s));if(a===0)return 0;if(r!==0&&r!==a&&(r&i)===0&&(i=a&-a,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if((a&4)!==0&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-Cr(r),i=1<<n,a|=e[n],r&=~i;return a}function Kd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Cr(s),d=1<<o,u=i[o];u===-1?((d&n)===0||(d&a)!==0)&&(i[o]=Kd(d,r)):u<=r&&(e.expiredLanes|=d),s&=~d}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bo(){var e=oa;return oa<<=1,(oa&4194240)===0&&(oa=64),e}function zi(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function xn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Cr(r),e[r]=n}function Yd(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Cr(n),s=1<<i;r[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function Ei(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-Cr(n),i=1<<a;i&r|e[a]&r&&(e[a]|=r),n&=~i}}var he=0;function Io(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ro,Pi,Oo,$o,Wo,Mi=!1,da=[],Yr=null,Xr=null,Zr=null,yn=new Map,bn=new Map,Jr=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,r){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":yn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(r.pointerId)}}function wn(e,r,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},r!==null&&(r=An(r),r!==null&&Pi(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Zd(e,r,n,a,i){switch(r){case"focusin":return Yr=wn(Yr,e,r,n,a,i),!0;case"dragenter":return Xr=wn(Xr,e,r,n,a,i),!0;case"mouseover":return Zr=wn(Zr,e,r,n,a,i),!0;case"pointerover":var s=i.pointerId;return yn.set(s,wn(yn.get(s)||null,e,r,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,bn.set(s,wn(bn.get(s)||null,e,r,n,a,i)),!0}return!1}function qo(e){var r=vt(e.target);if(r!==null){var n=gt(r);if(n!==null){if(r=n.tag,r===13){if(r=Eo(n),r!==null){e.blockedOn=r,Wo(e.priority,function(){Oo(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Ti(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);bi=a,n.target.dispatchEvent(a),bi=null}else return r=An(n),r!==null&&Pi(r),e.blockedOn=n,!1;r.shift()}return!0}function Uo(e,r,n){ua(e)&&n.delete(r)}function Jd(){Mi=!1,Yr!==null&&ua(Yr)&&(Yr=null),Xr!==null&&ua(Xr)&&(Xr=null),Zr!==null&&ua(Zr)&&(Zr=null),yn.forEach(Uo),bn.forEach(Uo)}function jn(e,r){e.blockedOn===r&&(e.blockedOn=null,Mi||(Mi=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,Jd)))}function kn(e){function r(i){return jn(i,e)}if(0<da.length){jn(da[0],e);for(var n=1;n<da.length;n++){var a=da[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Yr!==null&&jn(Yr,e),Xr!==null&&jn(Xr,e),Zr!==null&&jn(Zr,e),yn.forEach(r),bn.forEach(r),n=0;n<Jr.length;n++)a=Jr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)qo(n),n.blockedOn===null&&Jr.shift()}var Bt=fe.ReactCurrentBatchConfig,ma=!0;function eu(e,r,n,a){var i=he,s=Bt.transition;Bt.transition=null;try{he=1,_i(e,r,n,a)}finally{he=i,Bt.transition=s}}function ru(e,r,n,a){var i=he,s=Bt.transition;Bt.transition=null;try{he=4,_i(e,r,n,a)}finally{he=i,Bt.transition=s}}function _i(e,r,n,a){if(ma){var i=Ti(e,r,n,a);if(i===null)Yi(e,r,a,ha,n),Ho(e,a);else if(Zd(i,e,r,n,a))a.stopPropagation();else if(Ho(e,a),r&4&&-1<Xd.indexOf(e)){for(;i!==null;){var s=An(i);if(s!==null&&Ro(s),s=Ti(e,r,n,a),s===null&&Yi(e,r,a,ha,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Yi(e,r,a,null,n)}}var ha=null;function Ti(e,r,n,a){if(ha=null,e=wi(a),e=vt(e),e!==null)if(r=gt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Eo(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ha=e,null}function Vo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case Fi:return 1;case Ao:return 4;case ia:case Hd:return 16;case Lo:return 536870912;default:return 16}default:return 16}}var et=null,Di=null,pa=null;function Go(){if(pa)return pa;var e,r=Di,n=r.length,a,i="value"in et?et.value:et.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&r[n-a]===i[s-a];a++);return pa=i.slice(e,1<a?1-a:void 0)}function fa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function Ko(){return!1}function ur(e){function r(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Ko,this.isPropagationStopped=Ko,this}return h(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),r}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=ur(It),Nn=h({},It,{view:0,detail:0}),tu=ur(Nn),Li,Bi,Cn,va=h({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(Li=e.screenX-Cn.screenX,Bi=e.screenY-Cn.screenY):Bi=Li=0,Cn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),Qo=ur(va),nu=h({},va,{dataTransfer:0}),au=ur(nu),iu=h({},Nn,{relatedTarget:0}),Ii=ur(iu),su=h({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),ou=ur(su),lu=h({},It,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cu=ur(lu),du=h({},It,{data:0}),Yo=ur(du),uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=hu[e])?!!r[e]:!1}function Ri(){return pu}var fu=h({},Nn,{key:function(e){if(e.key){var r=uu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ri,charCode:function(e){return e.type==="keypress"?fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gu=ur(fu),vu=h({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=ur(vu),xu=h({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ri}),yu=ur(xu),bu=h({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),wu=ur(bu),ju=h({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ku=ur(ju),Nu=[9,13,27,32],Oi=j&&"CompositionEvent"in window,Fn=null;j&&"documentMode"in document&&(Fn=document.documentMode);var Cu=j&&"TextEvent"in window&&!Fn,Zo=j&&(!Oi||Fn&&8<Fn&&11>=Fn),Jo=" ",el=!1;function rl(e,r){switch(e){case"keyup":return Nu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Fu(e,r){switch(e){case"compositionend":return tl(r);case"keypress":return r.which!==32?null:(el=!0,Jo);case"textInput":return e=r.data,e===Jo&&el?null:e;default:return null}}function Su(e,r){if(Rt)return e==="compositionend"||!Oi&&rl(e,r)?(e=Go(),pa=Di=et=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Zo&&r.locale!=="ko"?null:r.data;default:return null}}var zu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!zu[e.type]:r==="textarea"}function al(e,r,n,a){No(a),r=ja(r,"onChange"),0<r.length&&(n=new Ai("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var Sn=null,zn=null;function Eu(e){jl(e,0)}function xa(e){var r=qt(e);if(ye(r))return e}function Pu(e,r){if(e==="change")return r}var il=!1;if(j){var $i;if(j){var Wi="oninput"in document;if(!Wi){var sl=document.createElement("div");sl.setAttribute("oninput","return;"),Wi=typeof sl.oninput=="function"}$i=Wi}else $i=!1;il=$i&&(!document.documentMode||9<document.documentMode)}function ol(){Sn&&(Sn.detachEvent("onpropertychange",ll),zn=Sn=null)}function ll(e){if(e.propertyName==="value"&&xa(zn)){var r=[];al(r,zn,e,wi(e)),zo(Eu,r)}}function Mu(e,r,n){e==="focusin"?(ol(),Sn=r,zn=n,Sn.attachEvent("onpropertychange",ll)):e==="focusout"&&ol()}function _u(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(zn)}function Tu(e,r){if(e==="click")return xa(r)}function Du(e,r){if(e==="input"||e==="change")return xa(r)}function Au(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Fr=typeof Object.is=="function"?Object.is:Au;function En(e,r){if(Fr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!w.call(r,i)||!Fr(e[i],r[i]))return!1}return!0}function cl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dl(e,r){var n=cl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cl(n)}}function ul(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ul(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ml(){for(var e=window,r=Ee();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ee(e.document)}return r}function Hi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Lu(e){var r=ml(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&ul(n.ownerDocument.documentElement,n)){if(a!==null&&Hi(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=dl(n,s);var o=dl(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(r),e.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bu=j&&"documentMode"in document&&11>=document.documentMode,Ot=null,qi=null,Pn=null,Ui=!1;function hl(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Ot==null||Ot!==Ee(a)||(a=Ot,"selectionStart"in a&&Hi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pn&&En(Pn,a)||(Pn=a,a=ja(qi,"onSelect"),0<a.length&&(r=new Ai("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Ot)))}function ya(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var $t={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Vi={},pl={};j&&(pl=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ba(e){if(Vi[e])return Vi[e];if(!$t[e])return e;var r=$t[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in pl)return Vi[e]=r[n];return e}var fl=ba("animationend"),gl=ba("animationiteration"),vl=ba("animationstart"),xl=ba("transitionend"),yl=new Map,bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){yl.set(e,r),S(r,[e])}for(var Gi=0;Gi<bl.length;Gi++){var Ki=bl[Gi],Iu=Ki.toLowerCase(),Ru=Ki[0].toUpperCase()+Ki.slice(1);rt(Iu,"on"+Ru)}rt(fl,"onAnimationEnd"),rt(gl,"onAnimationIteration"),rt(vl,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(xl,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ou=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function wl(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,Id(a,r,void 0,e),e.currentTarget=null}function jl(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(r)for(var o=a.length-1;0<=o;o--){var d=a[o],u=d.instance,y=d.currentTarget;if(d=d.listener,u!==s&&i.isPropagationStopped())break e;wl(i,d,y),s=u}else for(o=0;o<a.length;o++){if(d=a[o],u=d.instance,y=d.currentTarget,d=d.listener,u!==s&&i.isPropagationStopped())break e;wl(i,d,y),s=u}}}if(aa)throw e=Ci,aa=!1,Ci=null,e}function be(e,r){var n=r[ts];n===void 0&&(n=r[ts]=new Set);var a=e+"__bubble";n.has(a)||(kl(r,e,2,!1),n.add(a))}function Qi(e,r,n){var a=0;r&&(a|=4),kl(n,e,a,r)}var wa="_reactListening"+Math.random().toString(36).slice(2);function _n(e){if(!e[wa]){e[wa]=!0,C.forEach(function(n){n!=="selectionchange"&&(Ou.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[wa]||(r[wa]=!0,Qi("selectionchange",!1,r))}}function kl(e,r,n,a){switch(Vo(r)){case 1:var i=eu;break;case 4:i=ru;break;default:i=_i}n=i.bind(null,r,n,e),i=void 0,!Ni||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Yi(e,r,n,a,i){var s=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var d=a.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;d!==null;){if(o=vt(d),o===null)return;if(u=o.tag,u===5||u===6){a=s=o;continue e}d=d.parentNode}}a=a.return}zo(function(){var y=s,P=wi(n),_=[];e:{var E=yl.get(e);if(E!==void 0){var W=Ai,V=e;switch(e){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":W=gu;break;case"focusin":V="focus",W=Ii;break;case"focusout":V="blur",W=Ii;break;case"beforeblur":case"afterblur":W=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=au;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=yu;break;case fl:case gl:case vl:W=ou;break;case xl:W=wu;break;case"scroll":W=tu;break;case"wheel":W=ku;break;case"copy":case"cut":case"paste":W=cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Xo}var K=(r&4)!==0,Te=!K&&e==="scroll",g=K?E!==null?E+"Capture":null:E;K=[];for(var p=y,v;p!==null;){v=p;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,g!==null&&(L=pn(p,g),L!=null&&K.push(Tn(p,L,v)))),Te)break;p=p.return}0<K.length&&(E=new W(E,V,null,n,P),_.push({event:E,listeners:K}))}}if((r&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",E&&n!==bi&&(V=n.relatedTarget||n.fromElement)&&(vt(V)||V[Or]))break e;if((W||E)&&(E=P.window===P?P:(E=P.ownerDocument)?E.defaultView||E.parentWindow:window,W?(V=n.relatedTarget||n.toElement,W=y,V=V?vt(V):null,V!==null&&(Te=gt(V),V!==Te||V.tag!==5&&V.tag!==6)&&(V=null)):(W=null,V=y),W!==V)){if(K=Qo,L="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(K=Xo,L="onPointerLeave",g="onPointerEnter",p="pointer"),Te=W==null?E:qt(W),v=V==null?E:qt(V),E=new K(L,p+"leave",W,n,P),E.target=Te,E.relatedTarget=v,L=null,vt(P)===y&&(K=new K(g,p+"enter",V,n,P),K.target=v,K.relatedTarget=Te,L=K),Te=L,W&&V)r:{for(K=W,g=V,p=0,v=K;v;v=Wt(v))p++;for(v=0,L=g;L;L=Wt(L))v++;for(;0<p-v;)K=Wt(K),p--;for(;0<v-p;)g=Wt(g),v--;for(;p--;){if(K===g||g!==null&&K===g.alternate)break r;K=Wt(K),g=Wt(g)}K=null}else K=null;W!==null&&Nl(_,E,W,K,!1),V!==null&&Te!==null&&Nl(_,Te,V,K,!0)}}e:{if(E=y?qt(y):window,W=E.nodeName&&E.nodeName.toLowerCase(),W==="select"||W==="input"&&E.type==="file")var Q=Pu;else if(nl(E))if(il)Q=Du;else{Q=_u;var Z=Mu}else(W=E.nodeName)&&W.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(Q=Tu);if(Q&&(Q=Q(e,y))){al(_,Q,n,P);break e}Z&&Z(e,E,y),e==="focusout"&&(Z=E._wrapperState)&&Z.controlled&&E.type==="number"&&Nr(E,"number",E.value)}switch(Z=y?qt(y):window,e){case"focusin":(nl(Z)||Z.contentEditable==="true")&&(Ot=Z,qi=y,Pn=null);break;case"focusout":Pn=qi=Ot=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,hl(_,n,P);break;case"selectionchange":if(Bu)break;case"keydown":case"keyup":hl(_,n,P)}var J;if(Oi)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Rt?rl(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Zo&&n.locale!=="ko"&&(Rt||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Rt&&(J=Go()):(et=P,Di="value"in et?et.value:et.textContent,Rt=!0)),Z=ja(y,ae),0<Z.length&&(ae=new Yo(ae,e,null,n,P),_.push({event:ae,listeners:Z}),J?ae.data=J:(J=tl(n),J!==null&&(ae.data=J)))),(J=Cu?Fu(e,n):Su(e,n))&&(y=ja(y,"onBeforeInput"),0<y.length&&(P=new Yo("onBeforeInput","beforeinput",null,n,P),_.push({event:P,listeners:y}),P.data=J))}jl(_,r)})}function Tn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ja(e,r){for(var n=r+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pn(e,n),s!=null&&a.unshift(Tn(e,s,i)),s=pn(e,r),s!=null&&a.push(Tn(e,s,i))),e=e.return}return a}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nl(e,r,n,a,i){for(var s=r._reactName,o=[];n!==null&&n!==a;){var d=n,u=d.alternate,y=d.stateNode;if(u!==null&&u===a)break;d.tag===5&&y!==null&&(d=y,i?(u=pn(n,s),u!=null&&o.unshift(Tn(n,u,d))):i||(u=pn(n,s),u!=null&&o.push(Tn(n,u,d)))),n=n.return}o.length!==0&&e.push({event:r,listeners:o})}var $u=/\r\n?/g,Wu=/\u0000|\uFFFD/g;function Cl(e){return(typeof e=="string"?e:""+e).replace($u,`
`).replace(Wu,"")}function ka(e,r,n){if(r=Cl(r),Cl(e)!==r&&n)throw Error(c(425))}function Na(){}var Xi=null,Zi=null;function Ji(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Hu=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,qu=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(e){return Fl.resolve(null).then(e).catch(Uu)}:es;function Uu(e){setTimeout(function(){throw e})}function rs(e,r){var n=r,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),kn(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);kn(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Sl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ht=Math.random().toString(36).slice(2),Tr="__reactFiber$"+Ht,Dn="__reactProps$"+Ht,Or="__reactContainer$"+Ht,ts="__reactEvents$"+Ht,Vu="__reactListeners$"+Ht,Gu="__reactHandles$"+Ht;function vt(e){var r=e[Tr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Or]||n[Tr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Sl(e);e!==null;){if(n=e[Tr])return n;e=Sl(e)}return r}e=n,n=e.parentNode}return null}function An(e){return e=e[Tr]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ca(e){return e[Dn]||null}var ns=[],Ut=-1;function nt(e){return{current:e}}function we(e){0>Ut||(e.current=ns[Ut],ns[Ut]=null,Ut--)}function xe(e,r){Ut++,ns[Ut]=e.current,e.current=r}var at={},Ye=nt(at),ir=nt(!1),xt=at;function Vt(e,r){var n=e.type.contextTypes;if(!n)return at;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function sr(e){return e=e.childContextTypes,e!=null}function Fa(){we(ir),we(Ye)}function zl(e,r,n){if(Ye.current!==at)throw Error(c(168));xe(Ye,r),xe(ir,n)}function El(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in r))throw Error(c(108,O(e)||"Unknown",i));return h({},n,a)}function Sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,xt=Ye.current,xe(Ye,e),xe(ir,ir.current),!0}function Pl(e,r,n){var a=e.stateNode;if(!a)throw Error(c(169));n?(e=El(e,r,xt),a.__reactInternalMemoizedMergedChildContext=e,we(ir),we(Ye),xe(Ye,e)):we(ir),xe(ir,n)}var $r=null,za=!1,as=!1;function Ml(e){$r===null?$r=[e]:$r.push(e)}function Ku(e){za=!0,Ml(e)}function it(){if(!as&&$r!==null){as=!0;var e=0,r=he;try{var n=$r;for(he=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}$r=null,za=!1}catch(i){throw $r!==null&&($r=$r.slice(e+1)),To(Fi,it),i}finally{he=r,as=!1}}return null}var Gt=[],Kt=0,Ea=null,Pa=0,gr=[],vr=0,yt=null,Wr=1,Hr="";function bt(e,r){Gt[Kt++]=Pa,Gt[Kt++]=Ea,Ea=e,Pa=r}function _l(e,r,n){gr[vr++]=Wr,gr[vr++]=Hr,gr[vr++]=yt,yt=e;var a=Wr;e=Hr;var i=32-Cr(a)-1;a&=~(1<<i),n+=1;var s=32-Cr(r)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Wr=1<<32-Cr(r)+i|n<<i|a,Hr=s+e}else Wr=1<<s|n<<i|a,Hr=e}function is(e){e.return!==null&&(bt(e,1),_l(e,1,0))}function ss(e){for(;e===Ea;)Ea=Gt[--Kt],Gt[Kt]=null,Pa=Gt[--Kt],Gt[Kt]=null;for(;e===yt;)yt=gr[--vr],gr[vr]=null,Hr=gr[--vr],gr[vr]=null,Wr=gr[--vr],gr[vr]=null}var mr=null,hr=null,ke=!1,Sr=null;function Tl(e,r){var n=wr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Dl(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,mr=e,hr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,mr=e,hr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=yt!==null?{id:Wr,overflow:Hr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=wr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,mr=e,hr=null,!0):!1;default:return!1}}function os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(ke){var r=hr;if(r){var n=r;if(!Dl(e,r)){if(os(e))throw Error(c(418));r=tt(n.nextSibling);var a=mr;r&&Dl(e,r)?Tl(a,n):(e.flags=e.flags&-4097|2,ke=!1,mr=e)}}else{if(os(e))throw Error(c(418));e.flags=e.flags&-4097|2,ke=!1,mr=e}}}function Al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mr=e}function Ma(e){if(e!==mr)return!1;if(!ke)return Al(e),ke=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ji(e.type,e.memoizedProps)),r&&(r=hr)){if(os(e))throw Ll(),Error(c(418));for(;r;)Tl(e,r),r=tt(r.nextSibling)}if(Al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){hr=tt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}hr=null}}else hr=mr?tt(e.stateNode.nextSibling):null;return!0}function Ll(){for(var e=hr;e;)e=tt(e.nextSibling)}function Qt(){hr=mr=null,ke=!1}function cs(e){Sr===null?Sr=[e]:Sr.push(e)}var Qu=fe.ReactCurrentBatchConfig;function Ln(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var a=n.stateNode}if(!a)throw Error(c(147,e));var i=a,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(o){var d=i.refs;o===null?delete d[s]:d[s]=o},r._stringRef=s,r)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function _a(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Bl(e){var r=e._init;return r(e._payload)}function Il(e){function r(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)r(g,p),p=p.sibling;return null}function a(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ht(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function d(g,p,v,L){return p===null||p.tag!==6?(p=eo(v,g.mode,L),p.return=g,p):(p=i(p,v),p.return=g,p)}function u(g,p,v,L){var Q=v.type;return Q===Se?P(g,p,v.props.children,L,v.key):p!==null&&(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===We&&Bl(Q)===p.type)?(L=i(p,v.props),L.ref=Ln(g,p,v),L.return=g,L):(L=ti(v.type,v.key,v.props,null,g.mode,L),L.ref=Ln(g,p,v),L.return=g,L)}function y(g,p,v,L){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=ro(v,g.mode,L),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function P(g,p,v,L,Q){return p===null||p.tag!==7?(p=zt(v,g.mode,L,Q),p.return=g,p):(p=i(p,v),p.return=g,p)}function _(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=eo(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Me:return v=ti(p.type,p.key,p.props,null,g.mode,v),v.ref=Ln(g,null,p),v.return=g,v;case ge:return p=ro(p,g.mode,v),p.return=g,p;case We:var L=p._init;return _(g,L(p._payload),v)}if(Qe(p)||ee(p))return p=zt(p,g.mode,v,null),p.return=g,p;_a(g,p)}return null}function E(g,p,v,L){var Q=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return Q!==null?null:d(g,p,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Me:return v.key===Q?u(g,p,v,L):null;case ge:return v.key===Q?y(g,p,v,L):null;case We:return Q=v._init,E(g,p,Q(v._payload),L)}if(Qe(v)||ee(v))return Q!==null?null:P(g,p,v,L,null);_a(g,v)}return null}function W(g,p,v,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number")return g=g.get(v)||null,d(p,g,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Me:return g=g.get(L.key===null?v:L.key)||null,u(p,g,L,Q);case ge:return g=g.get(L.key===null?v:L.key)||null,y(p,g,L,Q);case We:var Z=L._init;return W(g,p,v,Z(L._payload),Q)}if(Qe(L)||ee(L))return g=g.get(v)||null,P(p,g,L,Q,null);_a(p,L)}return null}function V(g,p,v,L){for(var Q=null,Z=null,J=p,ae=p=0,$e=null;J!==null&&ae<v.length;ae++){J.index>ae?($e=J,J=null):$e=J.sibling;var ue=E(g,J,v[ae],L);if(ue===null){J===null&&(J=$e);break}e&&J&&ue.alternate===null&&r(g,J),p=s(ue,p,ae),Z===null?Q=ue:Z.sibling=ue,Z=ue,J=$e}if(ae===v.length)return n(g,J),ke&&bt(g,ae),Q;if(J===null){for(;ae<v.length;ae++)J=_(g,v[ae],L),J!==null&&(p=s(J,p,ae),Z===null?Q=J:Z.sibling=J,Z=J);return ke&&bt(g,ae),Q}for(J=a(g,J);ae<v.length;ae++)$e=W(J,g,ae,v[ae],L),$e!==null&&(e&&$e.alternate!==null&&J.delete($e.key===null?ae:$e.key),p=s($e,p,ae),Z===null?Q=$e:Z.sibling=$e,Z=$e);return e&&J.forEach(function(pt){return r(g,pt)}),ke&&bt(g,ae),Q}function K(g,p,v,L){var Q=ee(v);if(typeof Q!="function")throw Error(c(150));if(v=Q.call(v),v==null)throw Error(c(151));for(var Z=Q=null,J=p,ae=p=0,$e=null,ue=v.next();J!==null&&!ue.done;ae++,ue=v.next()){J.index>ae?($e=J,J=null):$e=J.sibling;var pt=E(g,J,ue.value,L);if(pt===null){J===null&&(J=$e);break}e&&J&&pt.alternate===null&&r(g,J),p=s(pt,p,ae),Z===null?Q=pt:Z.sibling=pt,Z=pt,J=$e}if(ue.done)return n(g,J),ke&&bt(g,ae),Q;if(J===null){for(;!ue.done;ae++,ue=v.next())ue=_(g,ue.value,L),ue!==null&&(p=s(ue,p,ae),Z===null?Q=ue:Z.sibling=ue,Z=ue);return ke&&bt(g,ae),Q}for(J=a(g,J);!ue.done;ae++,ue=v.next())ue=W(J,g,ae,ue.value,L),ue!==null&&(e&&ue.alternate!==null&&J.delete(ue.key===null?ae:ue.key),p=s(ue,p,ae),Z===null?Q=ue:Z.sibling=ue,Z=ue);return e&&J.forEach(function(zm){return r(g,zm)}),ke&&bt(g,ae),Q}function Te(g,p,v,L){if(typeof v=="object"&&v!==null&&v.type===Se&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Me:e:{for(var Q=v.key,Z=p;Z!==null;){if(Z.key===Q){if(Q=v.type,Q===Se){if(Z.tag===7){n(g,Z.sibling),p=i(Z,v.props.children),p.return=g,g=p;break e}}else if(Z.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===We&&Bl(Q)===Z.type){n(g,Z.sibling),p=i(Z,v.props),p.ref=Ln(g,Z,v),p.return=g,g=p;break e}n(g,Z);break}else r(g,Z);Z=Z.sibling}v.type===Se?(p=zt(v.props.children,g.mode,L,v.key),p.return=g,g=p):(L=ti(v.type,v.key,v.props,null,g.mode,L),L.ref=Ln(g,p,v),L.return=g,g=L)}return o(g);case ge:e:{for(Z=v.key;p!==null;){if(p.key===Z)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else r(g,p);p=p.sibling}p=ro(v,g.mode,L),p.return=g,g=p}return o(g);case We:return Z=v._init,Te(g,p,Z(v._payload),L)}if(Qe(v))return V(g,p,v,L);if(ee(v))return K(g,p,v,L);_a(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=eo(v,g.mode,L),p.return=g,g=p),o(g)):n(g,p)}return Te}var Yt=Il(!0),Rl=Il(!1),Ta=nt(null),Da=null,Xt=null,ds=null;function us(){ds=Xt=Da=null}function ms(e){var r=Ta.current;we(Ta),e._currentValue=r}function hs(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Zt(e,r){Da=e,ds=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(or=!0),e.firstContext=null)}function xr(e){var r=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:r,next:null},Xt===null){if(Da===null)throw Error(c(308));Xt=e,Da.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return r}var wt=null;function ps(e){wt===null?wt=[e]:wt.push(e)}function Ol(e,r,n,a){var i=r.interleaved;return i===null?(n.next=n,ps(r)):(n.next=i.next,i.next=n),r.interleaved=n,qr(e,a)}function qr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $l(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ur(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ot(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(de&2)!==0){var i=a.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r,qr(e,n)}return i=a.interleaved,i===null?(r.next=r,ps(a)):(r.next=i.next,i.next=r),a.interleaved=r,qr(e,n)}function Aa(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Ei(e,n)}}function Wl(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function La(e,r,n,a){var i=e.updateQueue;st=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var u=d,y=u.next;u.next=null,o===null?s=y:o.next=y,o=u;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==o&&(d===null?P.firstBaseUpdate=y:d.next=y,P.lastBaseUpdate=u))}if(s!==null){var _=i.baseState;o=0,P=y=u=null,d=s;do{var E=d.lane,W=d.eventTime;if((a&E)===E){P!==null&&(P=P.next={eventTime:W,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var V=e,K=d;switch(E=r,W=n,K.tag){case 1:if(V=K.payload,typeof V=="function"){_=V.call(W,_,E);break e}_=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=K.payload,E=typeof V=="function"?V.call(W,_,E):V,E==null)break e;_=h({},_,E);break e;case 2:st=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,E=i.effects,E===null?i.effects=[d]:E.push(d))}else W={eventTime:W,lane:E,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(y=P=W,u=_):P=P.next=W,o|=E;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;E=d,d=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(P===null&&(u=_),i.baseState=u,i.firstBaseUpdate=y,i.lastBaseUpdate=P,r=i.shared.interleaved,r!==null){i=r;do o|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Nt|=o,e.lanes=o,e.memoizedState=_}}function Hl(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(c(191,i));i.call(a)}}}var Bn={},Dr=nt(Bn),In=nt(Bn),Rn=nt(Bn);function jt(e){if(e===Bn)throw Error(c(174));return e}function gs(e,r){switch(xe(Rn,r),xe(In,e),xe(Dr,Bn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:mn(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=mn(r,e)}we(Dr),xe(Dr,r)}function Jt(){we(Dr),we(In),we(Rn)}function ql(e){jt(Rn.current);var r=jt(Dr.current),n=mn(r,e.type);r!==n&&(xe(In,e),xe(Dr,n))}function vs(e){In.current===e&&(we(Dr),we(In))}var Ce=nt(0);function Ba(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xs=[];function ys(){for(var e=0;e<xs.length;e++)xs[e]._workInProgressVersionPrimary=null;xs.length=0}var Ia=fe.ReactCurrentDispatcher,bs=fe.ReactCurrentBatchConfig,kt=0,Fe=null,Le=null,Re=null,Ra=!1,On=!1,$n=0,Yu=0;function Xe(){throw Error(c(321))}function ws(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Fr(e[n],r[n]))return!1;return!0}function js(e,r,n,a,i,s){if(kt=s,Fe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ia.current=e===null||e.memoizedState===null?em:rm,e=n(a,i),On){s=0;do{if(On=!1,$n=0,25<=s)throw Error(c(301));s+=1,Re=Le=null,r.updateQueue=null,Ia.current=tm,e=n(a,i)}while(On)}if(Ia.current=Wa,r=Le!==null&&Le.next!==null,kt=0,Re=Le=Fe=null,Ra=!1,r)throw Error(c(300));return e}function ks(){var e=$n!==0;return $n=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Fe.memoizedState=Re=e:Re=Re.next=e,Re}function yr(){if(Le===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var r=Re===null?Fe.memoizedState:Re.next;if(r!==null)Re=r,Le=e;else{if(e===null)throw Error(c(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Re===null?Fe.memoizedState=Re=e:Re=Re.next=e}return Re}function Wn(e,r){return typeof r=="function"?r(e):r}function Ns(e){var r=yr(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=Le,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var d=o=null,u=null,y=s;do{var P=y.lane;if((kt&P)===P)u!==null&&(u=u.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),a=y.hasEagerState?y.eagerState:e(a,y.action);else{var _={lane:P,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};u===null?(d=u=_,o=a):u=u.next=_,Fe.lanes|=P,Nt|=P}y=y.next}while(y!==null&&y!==s);u===null?o=a:u.next=d,Fr(a,r.memoizedState)||(or=!0),r.memoizedState=a,r.baseState=o,r.baseQueue=u,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Fe.lanes|=s,Nt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Cs(e){var r=yr(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Fr(s,r.memoizedState)||(or=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,a]}function Ul(){}function Vl(e,r){var n=Fe,a=yr(),i=r(),s=!Fr(a.memoizedState,i);if(s&&(a.memoizedState=i,or=!0),a=a.queue,Fs(Ql.bind(null,n,a,e),[e]),a.getSnapshot!==r||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Hn(9,Kl.bind(null,n,a,i,r),void 0,null),Oe===null)throw Error(c(349));(kt&30)!==0||Gl(n,r,i)}return i}function Gl(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Fe.updateQueue,r===null?(r={lastEffect:null,stores:null},Fe.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Kl(e,r,n,a){r.value=n,r.getSnapshot=a,Yl(r)&&Xl(e)}function Ql(e,r,n){return n(function(){Yl(r)&&Xl(e)})}function Yl(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Fr(e,n)}catch{return!0}}function Xl(e){var r=qr(e,1);r!==null&&Mr(r,e,1,-1)}function Zl(e){var r=Ar();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},r.queue=e,e=e.dispatch=Ju.bind(null,Fe,e),[r.memoizedState,e]}function Hn(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=Fe.updateQueue,r===null?(r={lastEffect:null,stores:null},Fe.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function Jl(){return yr().memoizedState}function Oa(e,r,n,a){var i=Ar();Fe.flags|=e,i.memoizedState=Hn(1|r,n,void 0,a===void 0?null:a)}function $a(e,r,n,a){var i=yr();a=a===void 0?null:a;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,a!==null&&ws(a,o.deps)){i.memoizedState=Hn(r,n,s,a);return}}Fe.flags|=e,i.memoizedState=Hn(1|r,n,s,a)}function ec(e,r){return Oa(8390656,8,e,r)}function Fs(e,r){return $a(2048,8,e,r)}function rc(e,r){return $a(4,2,e,r)}function tc(e,r){return $a(4,4,e,r)}function nc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ac(e,r,n){return n=n!=null?n.concat([e]):null,$a(4,4,nc.bind(null,r,e),n)}function Ss(){}function ic(e,r){var n=yr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&ws(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function sc(e,r){var n=yr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&ws(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function oc(e,r,n){return(kt&21)===0?(e.baseState&&(e.baseState=!1,or=!0),e.memoizedState=n):(Fr(n,r)||(n=Bo(),Fe.lanes|=n,Nt|=n,e.baseState=!0),r)}function Xu(e,r){var n=he;he=n!==0&&4>n?n:4,e(!0);var a=bs.transition;bs.transition={};try{e(!1),r()}finally{he=n,bs.transition=a}}function lc(){return yr().memoizedState}function Zu(e,r,n){var a=ut(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e))dc(r,n);else if(n=Ol(e,r,n,a),n!==null){var i=tr();Mr(n,e,a,i),uc(n,r,a)}}function Ju(e,r,n){var a=ut(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))dc(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var o=r.lastRenderedState,d=s(o,n);if(i.hasEagerState=!0,i.eagerState=d,Fr(d,o)){var u=r.interleaved;u===null?(i.next=i,ps(r)):(i.next=u.next,u.next=i),r.interleaved=i;return}}catch{}finally{}n=Ol(e,r,i,a),n!==null&&(i=tr(),Mr(n,e,a,i),uc(n,r,a))}}function cc(e){var r=e.alternate;return e===Fe||r!==null&&r===Fe}function dc(e,r){On=Ra=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function uc(e,r,n){if((n&4194240)!==0){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Ei(e,n)}}var Wa={readContext:xr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},em={readContext:xr,useCallback:function(e,r){return Ar().memoizedState=[e,r===void 0?null:r],e},useContext:xr,useEffect:ec,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Oa(4194308,4,nc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Oa(4194308,4,e,r)},useInsertionEffect:function(e,r){return Oa(4,2,e,r)},useMemo:function(e,r){var n=Ar();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Ar();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Zu.bind(null,Fe,e),[a.memoizedState,e]},useRef:function(e){var r=Ar();return e={current:e},r.memoizedState=e},useState:Zl,useDebugValue:Ss,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=Zl(!1),r=e[0];return e=Xu.bind(null,e[1]),Ar().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=Fe,i=Ar();if(ke){if(n===void 0)throw Error(c(407));n=n()}else{if(n=r(),Oe===null)throw Error(c(349));(kt&30)!==0||Gl(a,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,ec(Ql.bind(null,a,s,e),[e]),a.flags|=2048,Hn(9,Kl.bind(null,a,s,n,r),void 0,null),n},useId:function(){var e=Ar(),r=Oe.identifierPrefix;if(ke){var n=Hr,a=Wr;n=(a&~(1<<32-Cr(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=$n++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Yu++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},rm={readContext:xr,useCallback:ic,useContext:xr,useEffect:Fs,useImperativeHandle:ac,useInsertionEffect:rc,useLayoutEffect:tc,useMemo:sc,useReducer:Ns,useRef:Jl,useState:function(){return Ns(Wn)},useDebugValue:Ss,useDeferredValue:function(e){var r=yr();return oc(r,Le.memoizedState,e)},useTransition:function(){var e=Ns(Wn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ul,useSyncExternalStore:Vl,useId:lc,unstable_isNewReconciler:!1},tm={readContext:xr,useCallback:ic,useContext:xr,useEffect:Fs,useImperativeHandle:ac,useInsertionEffect:rc,useLayoutEffect:tc,useMemo:sc,useReducer:Cs,useRef:Jl,useState:function(){return Cs(Wn)},useDebugValue:Ss,useDeferredValue:function(e){var r=yr();return Le===null?r.memoizedState=e:oc(r,Le.memoizedState,e)},useTransition:function(){var e=Cs(Wn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ul,useSyncExternalStore:Vl,useId:lc,unstable_isNewReconciler:!1};function zr(e,r){if(e&&e.defaultProps){r=h({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function zs(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:h({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ha={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=tr(),i=ut(e),s=Ur(a,i);s.payload=r,n!=null&&(s.callback=n),r=ot(e,s,i),r!==null&&(Mr(r,e,i,a),Aa(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=tr(),i=ut(e),s=Ur(a,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=ot(e,s,i),r!==null&&(Mr(r,e,i,a),Aa(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=tr(),a=ut(e),i=Ur(n,a);i.tag=2,r!=null&&(i.callback=r),r=ot(e,i,a),r!==null&&(Mr(r,e,a,n),Aa(r,e,a))}};function mc(e,r,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):r.prototype&&r.prototype.isPureReactComponent?!En(n,a)||!En(i,s):!0}function hc(e,r,n){var a=!1,i=at,s=r.contextType;return typeof s=="object"&&s!==null?s=xr(s):(i=sr(r)?xt:Ye.current,a=r.contextTypes,s=(a=a!=null)?Vt(e,i):at),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ha,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function pc(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&Ha.enqueueReplaceState(r,r.state,null)}function Es(e,r,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fs(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=xr(s):(s=sr(r)?xt:Ye.current,i.context=Vt(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(zs(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ha.enqueueReplaceState(i,i.state,null),La(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,r){try{var n="",a=r;do n+=$(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Ps(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Ms(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var nm=typeof WeakMap=="function"?WeakMap:Map;function fc(e,r,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){Ya||(Ya=!0,Vs=a),Ms(e,r)},n}function gc(e,r,n){n=Ur(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;n.payload=function(){return a(i)},n.callback=function(){Ms(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ms(e,r),typeof a!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})}),n}function vc(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new nm;var i=new Set;a.set(r,i)}else i=a.get(r),i===void 0&&(i=new Set,a.set(r,i));i.has(n)||(i.add(n),e=vm.bind(null,e,r,n),r.then(e,e))}function xc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function yc(e,r,n,a,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Ur(-1,1),r.tag=2,ot(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var am=fe.ReactCurrentOwner,or=!1;function rr(e,r,n,a){r.child=e===null?Rl(r,null,n,a):Yt(r,e.child,n,a)}function bc(e,r,n,a,i){n=n.render;var s=r.ref;return Zt(r,i),a=js(e,r,n,a,s,i),n=ks(),e!==null&&!or?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(ke&&n&&is(r),r.flags|=1,rr(e,r,a,i),r.child)}function wc(e,r,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!Js(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,jc(e,r,s,a,i)):(e=ti(n.type,null,a,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:En,n(o,a)&&e.ref===r.ref)return Vr(e,r,i)}return r.flags|=1,e=ht(s,a),e.ref=r.ref,e.return=r,r.child=e}function jc(e,r,n,a,i){if(e!==null){var s=e.memoizedProps;if(En(s,a)&&e.ref===r.ref)if(or=!1,r.pendingProps=a=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(or=!0);else return r.lanes=e.lanes,Vr(e,r,i)}return _s(e,r,n,a,i)}function kc(e,r,n){var a=r.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(tn,pr),pr|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,xe(tn,pr),pr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,xe(tn,pr),pr|=a}else s!==null?(a=s.baseLanes|n,r.memoizedState=null):a=n,xe(tn,pr),pr|=a;return rr(e,r,i,n),r.child}function Nc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function _s(e,r,n,a,i){var s=sr(n)?xt:Ye.current;return s=Vt(r,s),Zt(r,i),n=js(e,r,n,a,s,i),a=ks(),e!==null&&!or?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(ke&&a&&is(r),r.flags|=1,rr(e,r,n,i),r.child)}function Cc(e,r,n,a,i){if(sr(n)){var s=!0;Sa(r)}else s=!1;if(Zt(r,i),r.stateNode===null)Ua(e,r),hc(r,n,a),Es(r,n,a,i),a=!0;else if(e===null){var o=r.stateNode,d=r.memoizedProps;o.props=d;var u=o.context,y=n.contextType;typeof y=="object"&&y!==null?y=xr(y):(y=sr(n)?xt:Ye.current,y=Vt(r,y));var P=n.getDerivedStateFromProps,_=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function";_||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==a||u!==y)&&pc(r,o,a,y),st=!1;var E=r.memoizedState;o.state=E,La(r,a,o,i),u=r.memoizedState,d!==a||E!==u||ir.current||st?(typeof P=="function"&&(zs(r,n,P,a),u=r.memoizedState),(d=st||mc(r,n,d,a,E,u,y))?(_||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(r.flags|=4194308)):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=u),o.props=a,o.state=u,o.context=y,a=d):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{o=r.stateNode,$l(e,r),d=r.memoizedProps,y=r.type===r.elementType?d:zr(r.type,d),o.props=y,_=r.pendingProps,E=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xr(u):(u=sr(n)?xt:Ye.current,u=Vt(r,u));var W=n.getDerivedStateFromProps;(P=typeof W=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==_||E!==u)&&pc(r,o,a,u),st=!1,E=r.memoizedState,o.state=E,La(r,a,o,i);var V=r.memoizedState;d!==_||E!==V||ir.current||st?(typeof W=="function"&&(zs(r,n,W,a),V=r.memoizedState),(y=st||mc(r,n,y,a,E,V,u)||!1)?(P||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,V,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,V,u)),typeof o.componentDidUpdate=="function"&&(r.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=V),o.props=a,o.state=V,o.context=u,a=y):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(r.flags|=1024),a=!1)}return Ts(e,r,n,a,s,i)}function Ts(e,r,n,a,i,s){Nc(e,r);var o=(r.flags&128)!==0;if(!a&&!o)return i&&Pl(r,n,!1),Vr(e,r,s);a=r.stateNode,am.current=r;var d=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&o?(r.child=Yt(r,e.child,null,s),r.child=Yt(r,null,d,s)):rr(e,r,d,s),r.memoizedState=a.state,i&&Pl(r,n,!0),r.child}function Fc(e){var r=e.stateNode;r.pendingContext?zl(e,r.pendingContext,r.pendingContext!==r.context):r.context&&zl(e,r.context,!1),gs(e,r.containerInfo)}function Sc(e,r,n,a,i){return Qt(),cs(i),r.flags|=256,rr(e,r,n,a),r.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,r,n){var a=r.pendingProps,i=Ce.current,s=!1,o=(r.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Ce,i&1),e===null)return ls(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(o=a.children,e=a.fallback,s?(a=r.mode,s=r.child,o={mode:"hidden",children:o},(a&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ni(o,a,0,null),e=zt(e,a,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=As(n),r.memoizedState=Ds,e):Ls(r,o));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return im(e,r,o,a,d,i,n);if(s){s=a.fallback,o=r.mode,i=e.child,d=i.sibling;var u={mode:"hidden",children:a.children};return(o&1)===0&&r.child!==i?(a=r.child,a.childLanes=0,a.pendingProps=u,r.deletions=null):(a=ht(i,u),a.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=ht(d,s):(s=zt(s,o,n,null),s.flags|=2),s.return=r,a.return=r,a.sibling=s,r.child=a,a=s,s=r.child,o=e.child.memoizedState,o=o===null?As(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,r.memoizedState=Ds,a}return s=e.child,e=s.sibling,a=ht(s,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function Ls(e,r){return r=ni({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function qa(e,r,n,a){return a!==null&&cs(a),Yt(r,e.child,null,n),e=Ls(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function im(e,r,n,a,i,s,o){if(n)return r.flags&256?(r.flags&=-257,a=Ps(Error(c(422))),qa(e,r,o,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=a.fallback,i=r.mode,a=ni({mode:"visible",children:a.children},i,0,null),s=zt(s,i,o,null),s.flags|=2,a.return=r,s.return=r,a.sibling=s,r.child=a,(r.mode&1)!==0&&Yt(r,e.child,null,o),r.child.memoizedState=As(o),r.memoizedState=Ds,s);if((r.mode&1)===0)return qa(e,r,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var d=a.dgst;return a=d,s=Error(c(419)),a=Ps(s,a,void 0),qa(e,r,o,a)}if(d=(o&e.childLanes)!==0,or||d){if(a=Oe,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qr(e,i),Mr(a,e,i,-1))}return Zs(),a=Ps(Error(c(421))),qa(e,r,o,a)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=xm.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,hr=tt(i.nextSibling),mr=r,ke=!0,Sr=null,e!==null&&(gr[vr++]=Wr,gr[vr++]=Hr,gr[vr++]=yt,Wr=e.id,Hr=e.overflow,yt=r),r=Ls(r,a.children),r.flags|=4096,r)}function Ec(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),hs(e.return,r,n)}function Bs(e,r,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function Pc(e,r,n){var a=r.pendingProps,i=a.revealOrder,s=a.tail;if(rr(e,r,a.children,n),a=Ce.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,r);else if(e.tag===19)Ec(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(xe(Ce,a),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Ba(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Bs(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Ba(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(r,!0,n,null,s);break;case"together":Bs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ua(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Nt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,n=ht(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function sm(e,r,n){switch(r.tag){case 3:Fc(r),Qt();break;case 5:ql(r);break;case 1:sr(r.type)&&Sa(r);break;case 4:gs(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,i=r.memoizedProps.value;xe(Ta,a._currentValue),a._currentValue=i;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(xe(Ce,Ce.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?zc(e,r,n):(xe(Ce,Ce.current&1),e=Vr(e,r,n),e!==null?e.sibling:null);xe(Ce,Ce.current&1);break;case 19:if(a=(n&r.childLanes)!==0,(e.flags&128)!==0){if(a)return Pc(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Ce,Ce.current),a)break;return null;case 22:case 23:return r.lanes=0,kc(e,r,n)}return Vr(e,r,n)}var Mc,Is,_c,Tc;Mc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Is=function(){},_c=function(e,r,n,a){var i=e.memoizedProps;if(i!==a){e=r.stateNode,jt(Dr.current);var s=null;switch(n){case"input":i=le(e,i),a=le(e,a),s=[];break;case"select":i=h({},i,{value:void 0}),a=h({},a,{value:void 0}),s=[];break;case"textarea":i=cn(e,i),a=cn(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Na)}xi(n,a);var o;n=null;for(y in i)if(!a.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var d=i[y];for(o in d)d.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(N.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in a){var u=a[y];if(d=i!=null?i[y]:void 0,a.hasOwnProperty(y)&&u!==d&&(u!=null||d!=null))if(y==="style")if(d){for(o in d)!d.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&d[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(y,n)),n=u;else y==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,d=d?d.__html:void 0,u!=null&&d!==u&&(s=s||[]).push(y,u)):y==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(y,""+u):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(N.hasOwnProperty(y)?(u!=null&&y==="onScroll"&&be("scroll",e),s||d===u||(s=[])):(s=s||[]).push(y,u))}n&&(s=s||[]).push("style",n);var y=s;(r.updateQueue=y)&&(r.flags|=4)}},Tc=function(e,r,n,a){n!==a&&(r.flags|=4)};function qn(e,r){if(!ke)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function om(e,r,n){var a=r.pendingProps;switch(ss(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return sr(r.type)&&Fa(),Ze(r),null;case 3:return a=r.stateNode,Jt(),we(ir),we(Ye),ys(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ma(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sr!==null&&(Qs(Sr),Sr=null))),Is(e,r),Ze(r),null;case 5:vs(r);var i=jt(Rn.current);if(n=r.type,e!==null&&r.stateNode!=null)_c(e,r,n,a,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(c(166));return Ze(r),null}if(e=jt(Dr.current),Ma(r)){a=r.stateNode,n=r.type;var s=r.memoizedProps;switch(a[Tr]=r,a[Dn]=s,e=(r.mode&1)!==0,n){case"dialog":be("cancel",a),be("close",a);break;case"iframe":case"object":case"embed":be("load",a);break;case"video":case"audio":for(i=0;i<Mn.length;i++)be(Mn[i],a);break;case"source":be("error",a);break;case"img":case"image":case"link":be("error",a),be("load",a);break;case"details":be("toggle",a);break;case"input":He(a,s),be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},be("invalid",a);break;case"textarea":ea(a,s),be("invalid",a)}xi(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var d=s[o];o==="children"?typeof d=="string"?a.textContent!==d&&(s.suppressHydrationWarning!==!0&&ka(a.textContent,d,e),i=["children",d]):typeof d=="number"&&a.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&ka(a.textContent,d,e),i=["children",""+d]):N.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&be("scroll",a)}switch(n){case"input":me(a),fr(a,s,!0);break;case"textarea":me(a),ra(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Na)}a=i,r.updateQueue=a,a!==null&&(r.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=un(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Tr]=r,e[Dn]=a,Mc(e,r,!1,!1),r.stateNode=e;e:{switch(o=yi(n,a),n){case"dialog":be("cancel",e),be("close",e),i=a;break;case"iframe":case"object":case"embed":be("load",e),i=a;break;case"video":case"audio":for(i=0;i<Mn.length;i++)be(Mn[i],e);i=a;break;case"source":be("error",e),i=a;break;case"img":case"image":case"link":be("error",e),be("load",e),i=a;break;case"details":be("toggle",e),i=a;break;case"input":He(e,a),i=le(e,a),be("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=h({},a,{value:void 0}),be("invalid",e);break;case"textarea":ea(e,a),i=cn(e,a),be("invalid",e);break;default:i=a}xi(n,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var u=d[s];s==="style"?jo(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hn(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qr(e,u):typeof u=="number"&&Qr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(N.hasOwnProperty(s)?u!=null&&s==="onScroll"&&be("scroll",e):u!=null&&pe(e,s,u,o))}switch(n){case"input":me(e),fr(e,a,!1);break;case"textarea":me(e),ra(e);break;case"option":a.value!=null&&e.setAttribute("value",""+q(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?Kr(e,!!a.multiple,s,!1):a.defaultValue!=null&&Kr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Na)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)Tc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(c(166));if(n=jt(Rn.current),jt(Dr.current),Ma(r)){if(a=r.stateNode,n=r.memoizedProps,a[Tr]=r,(s=a.nodeValue!==n)&&(e=mr,e!==null))switch(e.tag){case 3:ka(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(a.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Tr]=r,r.stateNode=a}return Ze(r),null;case 13:if(we(Ce),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&hr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ll(),Qt(),r.flags|=98560,s=!1;else if(s=Ma(r),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Tr]=r}else Qt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),s=!1}else Sr!==null&&(Qs(Sr),Sr=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Be===0&&(Be=3):Zs())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return Jt(),Is(e,r),e===null&&_n(r.stateNode.containerInfo),Ze(r),null;case 10:return ms(r.type._context),Ze(r),null;case 17:return sr(r.type)&&Fa(),Ze(r),null;case 19:if(we(Ce),s=r.memoizedState,s===null)return Ze(r),null;if(a=(r.flags&128)!==0,o=s.rendering,o===null)if(a)qn(s,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(o=Ba(e),o!==null){for(r.flags|=128,qn(s,!1),a=o.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)s=n,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Ce,Ce.current&1|2),r.child}e=e.sibling}s.tail!==null&&_e()>nn&&(r.flags|=128,a=!0,qn(s,!1),r.lanes=4194304)}else{if(!a)if(e=Ba(o),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),qn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return Ze(r),null}else 2*_e()-s.renderingStartTime>nn&&n!==1073741824&&(r.flags|=128,a=!0,qn(s,!1),r.lanes=4194304);s.isBackwards?(o.sibling=r.child,r.child=o):(n=s.last,n!==null?n.sibling=o:r.child=o,s.last=o)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=_e(),r.sibling=null,n=Ce.current,xe(Ce,a?n&1|2:n&1),r):(Ze(r),null);case 22:case 23:return Xs(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(pr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function lm(e,r){switch(ss(r),r.tag){case 1:return sr(r.type)&&Fa(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Jt(),we(ir),we(Ye),ys(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return vs(r),null;case 13:if(we(Ce),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Qt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return we(Ce),null;case 4:return Jt(),null;case 10:return ms(r.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Va=!1,Je=!1,cm=typeof WeakSet=="function"?WeakSet:Set,U=null;function rn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Pe(e,r,a)}else n.current=null}function Rs(e,r,n){try{n()}catch(a){Pe(e,r,a)}}var Dc=!1;function dm(e,r){if(Xi=ma,e=ml(),Hi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,d=-1,u=-1,y=0,P=0,_=e,E=null;r:for(;;){for(var W;_!==n||i!==0&&_.nodeType!==3||(d=o+i),_!==s||a!==0&&_.nodeType!==3||(u=o+a),_.nodeType===3&&(o+=_.nodeValue.length),(W=_.firstChild)!==null;)E=_,_=W;for(;;){if(_===e)break r;if(E===n&&++y===i&&(d=o),E===s&&++P===a&&(u=o),(W=_.nextSibling)!==null)break;_=E,E=_.parentNode}_=W}n=d===-1||u===-1?null:{start:d,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},ma=!1,U=r;U!==null;)if(r=U,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,U=e;else for(;U!==null;){r=U;try{var V=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var K=V.memoizedProps,Te=V.memoizedState,g=r.stateNode,p=g.getSnapshotBeforeUpdate(r.elementType===r.type?K:zr(r.type,K),Te);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(L){Pe(r,r.return,L)}if(e=r.sibling,e!==null){e.return=r.return,U=e;break}U=r.return}return V=Dc,Dc=!1,V}function Un(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rs(r,n,s)}i=i.next}while(i!==a)}}function Ga(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function Os(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Ac(e){var r=e.alternate;r!==null&&(e.alternate=null,Ac(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Tr],delete r[Dn],delete r[ts],delete r[Vu],delete r[Gu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Na));else if(a!==4&&(e=e.child,e!==null))for($s(e,r,n),e=e.sibling;e!==null;)$s(e,r,n),e=e.sibling}function Ws(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ws(e,r,n),e=e.sibling;e!==null;)Ws(e,r,n),e=e.sibling}var qe=null,Er=!1;function lt(e,r,n){for(n=n.child;n!==null;)Ic(e,r,n),n=n.sibling}function Ic(e,r,n){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:Je||rn(n,r);case 6:var a=qe,i=Er;qe=null,lt(e,r,n),qe=a,Er=i,qe!==null&&(Er?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Er?(e=qe,n=n.stateNode,e.nodeType===8?rs(e.parentNode,n):e.nodeType===1&&rs(e,n),kn(e)):rs(qe,n.stateNode));break;case 4:a=qe,i=Er,qe=n.stateNode.containerInfo,Er=!0,lt(e,r,n),qe=a,Er=i;break;case 0:case 11:case 14:case 15:if(!Je&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Rs(n,r,o),i=i.next}while(i!==a)}lt(e,r,n);break;case 1:if(!Je&&(rn(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(d){Pe(n,r,d)}lt(e,r,n);break;case 21:lt(e,r,n);break;case 22:n.mode&1?(Je=(a=Je)||n.memoizedState!==null,lt(e,r,n),Je=a):lt(e,r,n);break;default:lt(e,r,n)}}function Rc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cm),r.forEach(function(a){var i=ym.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Pr(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,o=r,d=o;e:for(;d!==null;){switch(d.tag){case 5:qe=d.stateNode,Er=!1;break e;case 3:qe=d.stateNode.containerInfo,Er=!0;break e;case 4:qe=d.stateNode.containerInfo,Er=!0;break e}d=d.return}if(qe===null)throw Error(c(160));Ic(s,o,i),qe=null,Er=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(y){Pe(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Oc(r,e),r=r.sibling}function Oc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pr(r,e),Lr(e),a&4){try{Un(3,e,e.return),Ga(3,e)}catch(K){Pe(e,e.return,K)}try{Un(5,e,e.return)}catch(K){Pe(e,e.return,K)}}break;case 1:Pr(r,e),Lr(e),a&512&&n!==null&&rn(n,n.return);break;case 5:if(Pr(r,e),Lr(e),a&512&&n!==null&&rn(n,n.return),e.flags&32){var i=e.stateNode;try{Qr(i,"")}catch(K){Pe(e,e.return,K)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,d=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&ar(i,s),yi(d,o);var y=yi(d,s);for(o=0;o<u.length;o+=2){var P=u[o],_=u[o+1];P==="style"?jo(i,_):P==="dangerouslySetInnerHTML"?hn(i,_):P==="children"?Qr(i,_):pe(i,P,_,y)}switch(d){case"input":er(i,s);break;case"textarea":dn(i,s);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var W=s.value;W!=null?Kr(i,!!s.multiple,W,!1):E!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dn]=s}catch(K){Pe(e,e.return,K)}}break;case 6:if(Pr(r,e),Lr(e),a&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(K){Pe(e,e.return,K)}}break;case 3:if(Pr(r,e),Lr(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(K){Pe(e,e.return,K)}break;case 4:Pr(r,e),Lr(e);break;case 13:Pr(r,e),Lr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Us=_e())),a&4&&Rc(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(y=Je)||P,Pr(r,e),Je=y):Pr(r,e),Lr(e),a&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!P&&(e.mode&1)!==0)for(U=e,P=e.child;P!==null;){for(_=U=P;U!==null;){switch(E=U,W=E.child,E.tag){case 0:case 11:case 14:case 15:Un(4,E,E.return);break;case 1:rn(E,E.return);var V=E.stateNode;if(typeof V.componentWillUnmount=="function"){a=E,n=E.return;try{r=a,V.props=r.memoizedProps,V.state=r.memoizedState,V.componentWillUnmount()}catch(K){Pe(a,n,K)}}break;case 5:rn(E,E.return);break;case 22:if(E.memoizedState!==null){Hc(_);continue}}W!==null?(W.return=E,U=W):Hc(_)}P=P.sibling}e:for(P=null,_=e;;){if(_.tag===5){if(P===null){P=_;try{i=_.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=_.stateNode,u=_.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,d.style.display=ta("display",o))}catch(K){Pe(e,e.return,K)}}}else if(_.tag===6){if(P===null)try{_.stateNode.nodeValue=y?"":_.memoizedProps}catch(K){Pe(e,e.return,K)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;P===_&&(P=null),_=_.return}P===_&&(P=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Pr(r,e),Lr(e),a&4&&Rc(e);break;case 21:break;default:Pr(r,e),Lr(e)}}function Lr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Lc(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Qr(i,""),a.flags&=-33);var s=Bc(e);Ws(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,d=Bc(e);$s(e,d,o);break;default:throw Error(c(161))}}catch(u){Pe(e,e.return,u)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function um(e,r,n){U=e,$c(e)}function $c(e,r,n){for(var a=(e.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Va;if(!o){var d=i.alternate,u=d!==null&&d.memoizedState!==null||Je;d=Va;var y=Je;if(Va=o,(Je=u)&&!y)for(U=i;U!==null;)o=U,u=o.child,o.tag===22&&o.memoizedState!==null?qc(i):u!==null?(u.return=o,U=u):qc(i);for(;s!==null;)U=s,$c(s),s=s.sibling;U=i,Va=d,Je=y}Wc(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,U=s):Wc(e)}}function Wc(e){for(;U!==null;){var r=U;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||Ga(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Je)if(n===null)a.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:zr(r.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Hl(r,s,a);break;case 3:var o=r.updateQueue;if(o!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Hl(r,o,n)}break;case 5:var d=r.stateNode;if(n===null&&r.flags&4){n=d;var u=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var P=y.memoizedState;if(P!==null){var _=P.dehydrated;_!==null&&kn(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Je||r.flags&512&&Os(r)}catch(E){Pe(r,r.return,E)}}if(r===e){U=null;break}if(n=r.sibling,n!==null){n.return=r.return,U=n;break}U=r.return}}function Hc(e){for(;U!==null;){var r=U;if(r===e){U=null;break}var n=r.sibling;if(n!==null){n.return=r.return,U=n;break}U=r.return}}function qc(e){for(;U!==null;){var r=U;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ga(4,r)}catch(u){Pe(r,n,u)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var i=r.return;try{a.componentDidMount()}catch(u){Pe(r,i,u)}}var s=r.return;try{Os(r)}catch(u){Pe(r,s,u)}break;case 5:var o=r.return;try{Os(r)}catch(u){Pe(r,o,u)}}}catch(u){Pe(r,r.return,u)}if(r===e){U=null;break}var d=r.sibling;if(d!==null){d.return=r.return,U=d;break}U=r.return}}var mm=Math.ceil,Ka=fe.ReactCurrentDispatcher,Hs=fe.ReactCurrentOwner,br=fe.ReactCurrentBatchConfig,de=0,Oe=null,De=null,Ue=0,pr=0,tn=nt(0),Be=0,Vn=null,Nt=0,Qa=0,qs=0,Gn=null,lr=null,Us=0,nn=1/0,Gr=null,Ya=!1,Vs=null,ct=null,Xa=!1,dt=null,Za=0,Kn=0,Gs=null,Ja=-1,ei=0;function tr(){return(de&6)!==0?_e():Ja!==-1?Ja:Ja=_e()}function ut(e){return(e.mode&1)===0?1:(de&2)!==0&&Ue!==0?Ue&-Ue:Qu.transition!==null?(ei===0&&(ei=Bo()),ei):(e=he,e!==0||(e=window.event,e=e===void 0?16:Vo(e.type)),e)}function Mr(e,r,n,a){if(50<Kn)throw Kn=0,Gs=null,Error(c(185));xn(e,n,a),((de&2)===0||e!==Oe)&&(e===Oe&&((de&2)===0&&(Qa|=n),Be===4&&mt(e,Ue)),cr(e,a),n===1&&de===0&&(r.mode&1)===0&&(nn=_e()+500,za&&it()))}function cr(e,r){var n=e.callbackNode;Qd(e,r);var a=ca(e,e===Oe?Ue:0);if(a===0)n!==null&&Do(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Do(n),r===1)e.tag===0?Ku(Vc.bind(null,e)):Ml(Vc.bind(null,e)),qu(function(){(de&6)===0&&it()}),n=null;else{switch(Io(a)){case 1:n=Fi;break;case 4:n=Ao;break;case 16:n=ia;break;case 536870912:n=Lo;break;default:n=ia}n=ed(n,Uc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Uc(e,r){if(Ja=-1,ei=0,(de&6)!==0)throw Error(c(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var a=ca(e,e===Oe?Ue:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||r)r=ri(e,a);else{r=a;var i=de;de|=2;var s=Kc();(Oe!==e||Ue!==r)&&(Gr=null,nn=_e()+500,Ft(e,r));do try{fm();break}catch(d){Gc(e,d)}while(!0);us(),Ka.current=s,de=i,De!==null?r=0:(Oe=null,Ue=0,r=Be)}if(r!==0){if(r===2&&(i=Si(e),i!==0&&(a=i,r=Ks(e,i))),r===1)throw n=Vn,Ft(e,0),mt(e,a),cr(e,_e()),n;if(r===6)mt(e,a);else{if(i=e.current.alternate,(a&30)===0&&!hm(i)&&(r=ri(e,a),r===2&&(s=Si(e),s!==0&&(a=s,r=Ks(e,s))),r===1))throw n=Vn,Ft(e,0),mt(e,a),cr(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=a,r){case 0:case 1:throw Error(c(345));case 2:St(e,lr,Gr);break;case 3:if(mt(e,a),(a&130023424)===a&&(r=Us+500-_e(),10<r)){if(ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){tr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(St.bind(null,e,lr,Gr),r);break}St(e,lr,Gr);break;case 4:if(mt(e,a),(a&4194240)===a)break;for(r=e.eventTimes,i=-1;0<a;){var o=31-Cr(a);s=1<<o,o=r[o],o>i&&(i=o),a&=~s}if(a=i,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*mm(a/1960))-a,10<a){e.timeoutHandle=es(St.bind(null,e,lr,Gr),a);break}St(e,lr,Gr);break;case 5:St(e,lr,Gr);break;default:throw Error(c(329))}}}return cr(e,_e()),e.callbackNode===n?Uc.bind(null,e):null}function Ks(e,r){var n=Gn;return e.current.memoizedState.isDehydrated&&(Ft(e,r).flags|=256),e=ri(e,r),e!==2&&(r=lr,lr=n,r!==null&&Qs(r)),e}function Qs(e){lr===null?lr=e:lr.push.apply(lr,e)}function hm(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Fr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mt(e,r){for(r&=~qs,r&=~Qa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Cr(r),a=1<<n;e[n]=-1,r&=~a}}function Vc(e){if((de&6)!==0)throw Error(c(327));an();var r=ca(e,0);if((r&1)===0)return cr(e,_e()),null;var n=ri(e,r);if(e.tag!==0&&n===2){var a=Si(e);a!==0&&(r=a,n=Ks(e,a))}if(n===1)throw n=Vn,Ft(e,0),mt(e,r),cr(e,_e()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,St(e,lr,Gr),cr(e,_e()),null}function Ys(e,r){var n=de;de|=1;try{return e(r)}finally{de=n,de===0&&(nn=_e()+500,za&&it())}}function Ct(e){dt!==null&&dt.tag===0&&(de&6)===0&&an();var r=de;de|=1;var n=br.transition,a=he;try{if(br.transition=null,he=1,e)return e()}finally{he=a,br.transition=n,de=r,(de&6)===0&&it()}}function Xs(){pr=tn.current,we(tn)}function Ft(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hu(n)),De!==null)for(n=De.return;n!==null;){var a=n;switch(ss(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Fa();break;case 3:Jt(),we(ir),we(Ye),ys();break;case 5:vs(a);break;case 4:Jt();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:ms(a.type._context);break;case 22:case 23:Xs()}n=n.return}if(Oe=e,De=e=ht(e.current,null),Ue=pr=r,Be=0,Vn=null,qs=Qa=Nt=0,lr=Gn=null,wt!==null){for(r=0;r<wt.length;r++)if(n=wt[r],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}n.pending=a}wt=null}return e}function Gc(e,r){do{var n=De;try{if(us(),Ia.current=Wa,Ra){for(var a=Fe.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ra=!1}if(kt=0,Re=Le=Fe=null,On=!1,$n=0,Hs.current=null,n===null||n.return===null){Be=1,Vn=r,De=null;break}e:{var s=e,o=n.return,d=n,u=r;if(r=Ue,d.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=u,P=d,_=P.tag;if((P.mode&1)===0&&(_===0||_===11||_===15)){var E=P.alternate;E?(P.updateQueue=E.updateQueue,P.memoizedState=E.memoizedState,P.lanes=E.lanes):(P.updateQueue=null,P.memoizedState=null)}var W=xc(o);if(W!==null){W.flags&=-257,yc(W,o,d,s,r),W.mode&1&&vc(s,y,r),r=W,u=y;var V=r.updateQueue;if(V===null){var K=new Set;K.add(u),r.updateQueue=K}else V.add(u);break e}else{if((r&1)===0){vc(s,y,r),Zs();break e}u=Error(c(426))}}else if(ke&&d.mode&1){var Te=xc(o);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),yc(Te,o,d,s,r),cs(en(u,d));break e}}s=u=en(u,d),Be!==4&&(Be=2),Gn===null?Gn=[s]:Gn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var g=fc(s,u,r);Wl(s,g);break e;case 1:d=u;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){s.flags|=65536,r&=-r,s.lanes|=r;var L=gc(s,d,r);Wl(s,L);break e}}s=s.return}while(s!==null)}Yc(n)}catch(Q){r=Q,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Kc(){var e=Ka.current;return Ka.current=Wa,e===null?Wa:e}function Zs(){(Be===0||Be===3||Be===2)&&(Be=4),Oe===null||(Nt&268435455)===0&&(Qa&268435455)===0||mt(Oe,Ue)}function ri(e,r){var n=de;de|=2;var a=Kc();(Oe!==e||Ue!==r)&&(Gr=null,Ft(e,r));do try{pm();break}catch(i){Gc(e,i)}while(!0);if(us(),de=n,Ka.current=a,De!==null)throw Error(c(261));return Oe=null,Ue=0,Be}function pm(){for(;De!==null;)Qc(De)}function fm(){for(;De!==null&&!Od();)Qc(De)}function Qc(e){var r=Jc(e.alternate,e,pr);e.memoizedProps=e.pendingProps,r===null?Yc(e):De=r,Hs.current=null}function Yc(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=om(n,r,pr),n!==null){De=n;return}}else{if(n=lm(n,r),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,De=null;return}}if(r=r.sibling,r!==null){De=r;return}De=r=e}while(r!==null);Be===0&&(Be=5)}function St(e,r,n){var a=he,i=br.transition;try{br.transition=null,he=1,gm(e,r,n,a)}finally{br.transition=i,he=a}return null}function gm(e,r,n,a){do an();while(dt!==null);if((de&6)!==0)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yd(e,s),e===Oe&&(De=Oe=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Xa||(Xa=!0,ed(ia,function(){return an(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=br.transition,br.transition=null;var o=he;he=1;var d=de;de|=4,Hs.current=null,dm(e,n),Oc(n,e),Lu(Zi),ma=!!Xi,Zi=Xi=null,e.current=n,um(n),$d(),de=d,he=o,br.transition=s}else e.current=n;if(Xa&&(Xa=!1,dt=e,Za=i),s=e.pendingLanes,s===0&&(ct=null),qd(n.stateNode),cr(e,_e()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ya)throw Ya=!1,e=Vs,Vs=null,e;return(Za&1)!==0&&e.tag!==0&&an(),s=e.pendingLanes,(s&1)!==0?e===Gs?Kn++:(Kn=0,Gs=e):Kn=0,it(),null}function an(){if(dt!==null){var e=Io(Za),r=br.transition,n=he;try{if(br.transition=null,he=16>e?16:e,dt===null)var a=!1;else{if(e=dt,dt=null,Za=0,(de&6)!==0)throw Error(c(331));var i=de;for(de|=4,U=e.current;U!==null;){var s=U,o=s.child;if((U.flags&16)!==0){var d=s.deletions;if(d!==null){for(var u=0;u<d.length;u++){var y=d[u];for(U=y;U!==null;){var P=U;switch(P.tag){case 0:case 11:case 15:Un(8,P,s)}var _=P.child;if(_!==null)_.return=P,U=_;else for(;U!==null;){P=U;var E=P.sibling,W=P.return;if(Ac(P),P===y){U=null;break}if(E!==null){E.return=W,U=E;break}U=W}}}var V=s.alternate;if(V!==null){var K=V.child;if(K!==null){V.child=null;do{var Te=K.sibling;K.sibling=null,K=Te}while(K!==null)}}U=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Un(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var p=e.current;for(U=p;U!==null;){o=U;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,U=v;else e:for(o=p;U!==null;){if(d=U,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ga(9,d)}}catch(Q){Pe(d,d.return,Q)}if(d===o){U=null;break e}var L=d.sibling;if(L!==null){L.return=d.return,U=L;break e}U=d.return}}if(de=i,it(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(sa,e)}catch{}a=!0}return a}finally{he=n,br.transition=r}}return!1}function Xc(e,r,n){r=en(n,r),r=fc(e,r,1),e=ot(e,r,1),r=tr(),e!==null&&(xn(e,1,r),cr(e,r))}function Pe(e,r,n){if(e.tag===3)Xc(e,e,n);else for(;r!==null;){if(r.tag===3){Xc(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ct===null||!ct.has(a))){e=en(n,e),e=gc(r,e,1),r=ot(r,e,1),e=tr(),r!==null&&(xn(r,1,e),cr(r,e));break}}r=r.return}}function vm(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(Be===4||Be===3&&(Ue&130023424)===Ue&&500>_e()-Us?Ft(e,0):qs|=n),cr(e,r)}function Zc(e,r){r===0&&((e.mode&1)===0?r=1:(r=la,la<<=1,(la&130023424)===0&&(la=4194304)));var n=tr();e=qr(e,r),e!==null&&(xn(e,r,n),cr(e,n))}function xm(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Zc(e,n)}function ym(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(r),Zc(e,n)}var Jc;Jc=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||ir.current)or=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return or=!1,sm(e,r,n);or=(e.flags&131072)!==0}else or=!1,ke&&(r.flags&1048576)!==0&&_l(r,Pa,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Ua(e,r),e=r.pendingProps;var i=Vt(r,Ye.current);Zt(r,n),i=js(null,r,a,e,i,n);var s=ks();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,sr(a)?(s=!0,Sa(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fs(r),i.updater=Ha,r.stateNode=i,i._reactInternals=r,Es(r,a,e,n),r=Ts(null,r,a,!0,s,n)):(r.tag=0,ke&&s&&is(r),rr(null,r,i,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Ua(e,r),e=r.pendingProps,i=a._init,a=i(a._payload),r.type=a,i=r.tag=wm(a),e=zr(a,e),i){case 0:r=_s(null,r,a,e,n);break e;case 1:r=Cc(null,r,a,e,n);break e;case 11:r=bc(null,r,a,e,n);break e;case 14:r=wc(null,r,a,zr(a.type,e),n);break e}throw Error(c(306,a,""))}return r;case 0:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zr(a,i),_s(e,r,a,i,n);case 1:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zr(a,i),Cc(e,r,a,i,n);case 3:e:{if(Fc(r),e===null)throw Error(c(387));a=r.pendingProps,s=r.memoizedState,i=s.element,$l(e,r),La(r,a,null,n);var o=r.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=en(Error(c(423)),r),r=Sc(e,r,a,n,i);break e}else if(a!==i){i=en(Error(c(424)),r),r=Sc(e,r,a,n,i);break e}else for(hr=tt(r.stateNode.containerInfo.firstChild),mr=r,ke=!0,Sr=null,n=Rl(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qt(),a===i){r=Vr(e,r,n);break e}rr(e,r,a,n)}r=r.child}return r;case 5:return ql(r),e===null&&ls(r),a=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ji(a,i)?o=null:s!==null&&Ji(a,s)&&(r.flags|=32),Nc(e,r),rr(e,r,o,n),r.child;case 6:return e===null&&ls(r),null;case 13:return zc(e,r,n);case 4:return gs(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Yt(r,null,a,n):rr(e,r,a,n),r.child;case 11:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zr(a,i),bc(e,r,a,i,n);case 7:return rr(e,r,r.pendingProps,n),r.child;case 8:return rr(e,r,r.pendingProps.children,n),r.child;case 12:return rr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,i=r.pendingProps,s=r.memoizedProps,o=i.value,xe(Ta,a._currentValue),a._currentValue=o,s!==null)if(Fr(s.value,o)){if(s.children===i.children&&!ir.current){r=Vr(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var d=s.dependencies;if(d!==null){o=s.child;for(var u=d.firstContext;u!==null;){if(u.context===a){if(s.tag===1){u=Ur(-1,n&-n),u.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var P=y.pending;P===null?u.next=u:(u.next=P.next,P.next=u),y.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hs(s.return,n,r),d.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===r.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(c(341));o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),hs(o,n,r),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===r){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rr(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,a=r.pendingProps.children,Zt(r,n),i=xr(i),a=a(i),r.flags|=1,rr(e,r,a,n),r.child;case 14:return a=r.type,i=zr(a,r.pendingProps),i=zr(a.type,i),wc(e,r,a,i,n);case 15:return jc(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zr(a,i),Ua(e,r),r.tag=1,sr(a)?(e=!0,Sa(r)):e=!1,Zt(r,n),hc(r,a,i),Es(r,a,i,n),Ts(null,r,a,!0,e,n);case 19:return Pc(e,r,n);case 22:return kc(e,r,n)}throw Error(c(156,r.tag))};function ed(e,r){return To(e,r)}function bm(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wr(e,r,n,a){return new bm(e,r,n,a)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wm(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===nr)return 14}return 2}function ht(e,r){var n=e.alternate;return n===null?(n=wr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,r,n,a,i,s){var o=2;if(a=e,typeof e=="function")Js(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Se:return zt(n.children,i,s,r);case ve:o=8,i|=8;break;case se:return e=wr(12,n,r,i|2),e.elementType=se,e.lanes=s,e;case ze:return e=wr(13,n,r,i),e.elementType=ze,e.lanes=s,e;case Ke:return e=wr(19,n,r,i),e.elementType=Ke,e.lanes=s,e;case je:return ni(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:o=10;break e;case Ie:o=9;break e;case ne:o=11;break e;case nr:o=14;break e;case We:o=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=wr(o,n,r,i),r.elementType=e,r.type=a,r.lanes=s,r}function zt(e,r,n,a){return e=wr(7,e,a,r),e.lanes=n,e}function ni(e,r,n,a){return e=wr(22,e,a,r),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function eo(e,r,n){return e=wr(6,e,null,r),e.lanes=n,e}function ro(e,r,n){return r=wr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function jm(e,r,n,a,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function to(e,r,n,a,i,s,o,d,u){return e=new jm(e,r,n,d,u),r===1?(r=1,s===!0&&(r|=8)):r=0,s=wr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fs(s),e}function km(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function rd(e){if(!e)return at;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(sr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(sr(n))return El(e,n,r)}return r}function td(e,r,n,a,i,s,o,d,u){return e=to(n,a,!0,e,i,s,o,d,u),e.context=rd(null),n=e.current,a=tr(),i=ut(n),s=Ur(a,i),s.callback=r??null,ot(n,s,i),e.current.lanes=i,xn(e,i,a),cr(e,a),e}function ai(e,r,n,a){var i=r.current,s=tr(),o=ut(i);return n=rd(n),r.context===null?r.context=n:r.pendingContext=n,r=Ur(s,o),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=ot(i,r,o),e!==null&&(Mr(e,i,o,s),Aa(e,i,o)),o}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function no(e,r){nd(e,r),(e=e.alternate)&&nd(e,r)}function Nm(){return null}var ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function ao(e){this._internalRoot=e}si.prototype.render=ao.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));ai(e,r,null,null)},si.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Ct(function(){ai(null,e,null,null)}),r[Or]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var r=$o();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Jr.length&&r!==0&&r<Jr[n].priority;n++);Jr.splice(n,0,e),n===0&&qo(e)}};function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Cm(e,r,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var y=ii(o);s.call(y)}}var o=td(r,a,e,0,null,!1,!1,"",id);return e._reactRootContainer=o,e[Or]=o.current,_n(e.nodeType===8?e.parentNode:e),Ct(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var d=a;a=function(){var y=ii(u);d.call(y)}}var u=to(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=u,e[Or]=u.current,_n(e.nodeType===8?e.parentNode:e),Ct(function(){ai(r,u,n,a)}),u}function li(e,r,n,a,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var d=i;i=function(){var u=ii(o);d.call(u)}}ai(r,o,e,i)}else o=Cm(n,r,e,i,a);return ii(o)}Ro=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=vn(r.pendingLanes);n!==0&&(Ei(r,n|1),cr(r,_e()),(de&6)===0&&(nn=_e()+500,it()))}break;case 13:Ct(function(){var a=qr(e,1);if(a!==null){var i=tr();Mr(a,e,1,i)}}),no(e,1)}},Pi=function(e){if(e.tag===13){var r=qr(e,134217728);if(r!==null){var n=tr();Mr(r,e,134217728,n)}no(e,134217728)}},Oo=function(e){if(e.tag===13){var r=ut(e),n=qr(e,r);if(n!==null){var a=tr();Mr(n,e,r,a)}no(e,r)}},$o=function(){return he},Wo=function(e,r){var n=he;try{return he=e,r()}finally{he=n}},ji=function(e,r,n){switch(r){case"input":if(er(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var i=Ca(a);if(!i)throw Error(c(90));ye(a),er(a,i)}}}break;case"textarea":dn(e,n);break;case"select":r=n.value,r!=null&&Kr(e,!!n.multiple,r,!1)}},Fo=Ys,So=Ct;var Fm={usingClientEntryPoint:!1,Events:[An,qt,Ca,No,Co,Ys]},Qn={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mo(e),e===null?null:e.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{sa=ci.inject(Sm),_r=ci}catch{}}return dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm,dr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!io(r))throw Error(c(200));return km(e,r,null,n)},dr.createRoot=function(e,r){if(!io(e))throw Error(c(299));var n=!1,a="",i=ad;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=to(e,1,!1,null,null,n,!1,a,i),e[Or]=r.current,_n(e.nodeType===8?e.parentNode:e),new ao(r)},dr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Mo(r),e=e===null?null:e.stateNode,e},dr.flushSync=function(e){return Ct(e)},dr.hydrate=function(e,r,n){if(!oi(r))throw Error(c(200));return li(null,e,r,!0,n)},dr.hydrateRoot=function(e,r,n){if(!io(e))throw Error(c(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",o=ad;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),r=td(r,null,e,1,n??null,i,!1,s,o),e[Or]=r.current,_n(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new si(r)},dr.render=function(e,r,n){if(!oi(r))throw Error(c(200));return li(null,e,r,!1,n)},dr.unmountComponentAtNode=function(e){if(!oi(e))throw Error(c(40));return e._reactRootContainer?(Ct(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1},dr.unstable_batchedUpdates=Ys,dr.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!oi(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return li(e,r,n,!1,a)},dr.version="18.3.1-next-f1338f8080-20240426",dr}var hd;function Lm(){if(hd)return lo.exports;hd=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(f){console.error(f)}}return m(),lo.exports=Am(),lo.exports}var pd;function Bm(){if(pd)return di;pd=1;var m=Lm();return di.createRoot=m.createRoot,di.hydrateRoot=m.hydrateRoot,di}var Im=Bm();const Rm=xd(Im),yd=A.createContext(void 0),Om=({children:m})=>{const f=()=>{if(typeof window>"u")return"/";const b=window.location.hash.replace(/^#/,"");return b&&b.startsWith("/")?b:window.location.pathname||"/"},[c,C]=A.useState(f),[N,S]=A.useState(null),[z,j]=A.useState("");A.useEffect(()=>{const b=()=>{const M=window.location.hash.replace(/^#/,"");M&&M.startsWith("/")?C(M):C(window.location.pathname||"/")};return window.addEventListener("popstate",b),window.addEventListener("hashchange",b),()=>{window.removeEventListener("popstate",b),window.removeEventListener("hashchange",b)}},[]);const w=b=>{if(b===c){window.scrollTo({top:0,behavior:"smooth"});return}window.location.hash=b,C(b),window.scrollTo({top:0,behavior:"smooth"})},T=b=>{S(b)},D=()=>{S(null)},k=A.useMemo(()=>{const b=c.split("?")[0];if(b==="/"||b==="")return[{label:"Home",href:"/"}];const M=[{label:"Home",href:"/"}];return b.startsWith("/colors")?M.push({label:"Elamel Colors",href:"/colors"}):b.startsWith("/goodies")?M.push({label:"Elamel Goodies",href:"/goodies"}):b.startsWith("/moments-souvenirs")||b.startsWith("/moments")?M.push({label:"Moments & Souvenirs",href:"/moments-souvenirs"}):b.startsWith("/about")?M.push({label:"About Elamel",href:"/about"}):b.startsWith("/contact")?M.push({label:"Contact & Orders",href:"/contact"}):b.startsWith("/search")?M.push({label:"Search Results",href:"/search"}):b.startsWith("/sitemap")?M.push({label:"Sitemap",href:"/sitemap"}):b.startsWith("/privacy")?M.push({label:"Privacy Policy",href:"/privacy"}):b.startsWith("/terms")?M.push({label:"Terms of Use",href:"/terms"}):b.startsWith("/accessibility")&&M.push({label:"Accessibility Statement",href:"/accessibility"}),M},[c]);return t.jsx(yd.Provider,{value:{currentPath:c,navigate:w,breadcrumbs:k,selectedProductId:N,openProductModal:T,closeProductModal:D,searchQuery:z,setSearchQuery:j},children:m})},kr=()=>{const m=A.useContext(yd);if(!m)throw new Error("useRouter must be used within a RouterProvider");return m},bd=A.createContext(void 0),$m=({children:m})=>{const[f,c]=A.useState([]),C=A.useCallback(S=>{c(z=>z.filter(j=>j.id!==S))},[]),N=A.useCallback((S,z,j="success")=>{const w=Math.random().toString(36).substring(2,9),T={id:w,title:S,message:z,type:j};c(D=>[...D,T]),setTimeout(()=>{C(w)},4500)},[C]);return t.jsx(bd.Provider,{value:{toasts:f,addToast:N,removeToast:C},children:m})},fi=()=>{const m=A.useContext(bd);if(!m)throw new Error("useToast must be used within a ToastProvider");return m};var vo={};(function m(f,c,C,N){var S=!!(f.Worker&&f.Blob&&f.Promise&&f.OffscreenCanvas&&f.OffscreenCanvasRenderingContext2D&&f.HTMLCanvasElement&&f.HTMLCanvasElement.prototype.transferControlToOffscreen&&f.URL&&f.URL.createObjectURL),z=typeof Path2D=="function"&&typeof DOMMatrix=="function",j=(function(){if(!f.OffscreenCanvas)return!1;try{var h=new OffscreenCanvas(1,1),l=h.getContext("2d");l.fillRect(0,0,1,1);var x=h.transferToImageBitmap();l.createPattern(x,"no-repeat")}catch{return!1}return!0})();function w(){}function T(h){var l=c.exports.Promise,x=l!==void 0?l:f.Promise;return typeof x=="function"?new x(h):(h(w,w),null)}var D=(function(h,l){return{transform:function(x){if(h)return x;if(l.has(x))return l.get(x);var B=new OffscreenCanvas(x.width,x.height),I=B.getContext("2d");return I.drawImage(x,0,0),l.set(x,B),B},clear:function(){l.clear()}}})(j,new Map),k=(function(){var h=Math.floor(16.666666666666668),l,x,B={},I=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=function($){var H=Math.random();return B[H]=requestAnimationFrame(function O(q){I===q||I+h-1<q?(I=q,delete B[H],$()):B[H]=requestAnimationFrame(O)}),H},x=function($){B[$]&&cancelAnimationFrame(B[$])}):(l=function($){return setTimeout($,h)},x=function($){return clearTimeout($)}),{frame:l,cancel:x}})(),b=(function(){var h,l,x={};function B(I){function $(H,O){I.postMessage({options:H||{},callback:O})}I.init=function(O){var q=O.transferControlToOffscreen();I.postMessage({canvas:q},[q])},I.fire=function(O,q,re){if(l)return $(O,null),l;var ce=Math.random().toString(36).slice(2);return l=T(function(me){function ye(Ee){Ee.data.callback===ce&&(delete x[ce],I.removeEventListener("message",ye),l=null,D.clear(),re(),me())}I.addEventListener("message",ye),$(O,ce),x[ce]=ye.bind(null,{data:{callback:ce}})}),l},I.reset=function(){I.postMessage({reset:!0});for(var O in x)x[O](),delete x[O]}}return function(){if(h)return h;if(!C&&S){var I=["var CONFETTI, SIZE = {}, module = {};","("+m.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{h=new Worker(URL.createObjectURL(new Blob([I])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}B(h)}return h}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Y(h,l){return l?l(h):h}function ie(h){return h!=null}function F(h,l,x){return Y(h&&ie(h[l])?h[l]:M[l],x)}function te(h){return h<0?0:Math.floor(h)}function G(h,l){return Math.floor(Math.random()*(l-h))+h}function pe(h){return parseInt(h,16)}function fe(h){return h.map(Me)}function Me(h){var l=String(h).replace(/[^0-9a-f]/gi,"");return l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:pe(l.substring(0,2)),g:pe(l.substring(2,4)),b:pe(l.substring(4,6))}}function ge(h){var l=F(h,"origin",Object);return l.x=F(l,"x",Number),l.y=F(l,"y",Number),l}function Se(h){h.width=document.documentElement.clientWidth,h.height=document.documentElement.clientHeight}function ve(h){var l=h.getBoundingClientRect();h.width=l.width,h.height=l.height}function se(h){var l=document.createElement("canvas");return l.style.position="fixed",l.style.top="0px",l.style.left="0px",l.style.pointerEvents="none",l.style.zIndex=h,l}function Ae(h,l,x,B,I,$,H,O,q){h.save(),h.translate(l,x),h.rotate($),h.scale(B,I),h.arc(0,0,1,H,O,q),h.restore()}function Ie(h){var l=h.angle*(Math.PI/180),x=h.spread*(Math.PI/180);return{x:h.x,y:h.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:h.startVelocity*.5+Math.random()*h.startVelocity,angle2D:-l+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:h.color,shape:h.shape,tick:0,totalTicks:h.ticks,decay:h.decay,drift:h.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:h.gravity*3,ovalScalar:.6,scalar:h.scalar,flat:h.flat}}function ne(h,l){l.x+=Math.cos(l.angle2D)*l.velocity+l.drift,l.y+=Math.sin(l.angle2D)*l.velocity+l.gravity,l.velocity*=l.decay,l.flat?(l.wobble=0,l.wobbleX=l.x+10*l.scalar,l.wobbleY=l.y+10*l.scalar,l.tiltSin=0,l.tiltCos=0,l.random=1):(l.wobble+=l.wobbleSpeed,l.wobbleX=l.x+10*l.scalar*Math.cos(l.wobble),l.wobbleY=l.y+10*l.scalar*Math.sin(l.wobble),l.tiltAngle+=.1,l.tiltSin=Math.sin(l.tiltAngle),l.tiltCos=Math.cos(l.tiltAngle),l.random=Math.random()+2);var x=l.tick++/l.totalTicks,B=l.x+l.random*l.tiltCos,I=l.y+l.random*l.tiltSin,$=l.wobbleX+l.random*l.tiltCos,H=l.wobbleY+l.random*l.tiltSin;if(h.fillStyle="rgba("+l.color.r+", "+l.color.g+", "+l.color.b+", "+(1-x)+")",h.beginPath(),z&&l.shape.type==="path"&&typeof l.shape.path=="string"&&Array.isArray(l.shape.matrix))h.fill(je(l.shape.path,l.shape.matrix,l.x,l.y,Math.abs($-B)*.1,Math.abs(H-I)*.1,Math.PI/10*l.wobble));else if(l.shape.type==="bitmap"){var O=Math.PI/10*l.wobble,q=Math.abs($-B)*.1,re=Math.abs(H-I)*.1,ce=l.shape.bitmap.width*l.scalar,me=l.shape.bitmap.height*l.scalar,ye=new DOMMatrix([Math.cos(O)*q,Math.sin(O)*q,-Math.sin(O)*re,Math.cos(O)*re,l.x,l.y]);ye.multiplySelf(new DOMMatrix(l.shape.matrix));var Ee=h.createPattern(D.transform(l.shape.bitmap),"no-repeat");Ee.setTransform(ye),h.globalAlpha=1-x,h.fillStyle=Ee,h.fillRect(l.x-ce/2,l.y-me/2,ce,me),h.globalAlpha=1}else if(l.shape==="circle")h.ellipse?h.ellipse(l.x,l.y,Math.abs($-B)*l.ovalScalar,Math.abs(H-I)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI):Ae(h,l.x,l.y,Math.abs($-B)*l.ovalScalar,Math.abs(H-I)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI);else if(l.shape==="star")for(var le=Math.PI/2*3,He=4*l.scalar,ar=8*l.scalar,er=l.x,fr=l.y,Nr=5,Qe=Math.PI/Nr;Nr--;)er=l.x+Math.cos(le)*ar,fr=l.y+Math.sin(le)*ar,h.lineTo(er,fr),le+=Qe,er=l.x+Math.cos(le)*He,fr=l.y+Math.sin(le)*He,h.lineTo(er,fr),le+=Qe;else h.moveTo(Math.floor(l.x),Math.floor(l.y)),h.lineTo(Math.floor(l.wobbleX),Math.floor(I)),h.lineTo(Math.floor($),Math.floor(H)),h.lineTo(Math.floor(B),Math.floor(l.wobbleY));return h.closePath(),h.fill(),l.tick<l.totalTicks}function ze(h,l,x,B,I){var $=l.slice(),H=h.getContext("2d"),O,q,re=T(function(ce){function me(){O=q=null,H.clearRect(0,0,B.width,B.height),D.clear(),I(),ce()}function ye(){C&&!(B.width===N.width&&B.height===N.height)&&(B.width=h.width=N.width,B.height=h.height=N.height),!B.width&&!B.height&&(x(h),B.width=h.width,B.height=h.height),H.clearRect(0,0,B.width,B.height),$=$.filter(function(Ee){return ne(H,Ee)}),$.length?O=k.frame(ye):me()}O=k.frame(ye),q=me});return{addFettis:function(ce){return $=$.concat(ce),re},canvas:h,promise:re,reset:function(){O&&k.cancel(O),q&&q()}}}function Ke(h,l){var x=!h,B=!!F(l||{},"resize"),I=!1,$=F(l,"disableForReducedMotion",Boolean),H=S&&!!F(l||{},"useWorker"),O=H?b():null,q=x?Se:ve,re=h&&O?!!h.__confetti_initialized:!1,ce=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,me;function ye(le,He,ar){for(var er=F(le,"particleCount",te),fr=F(le,"angle",Number),Nr=F(le,"spread",Number),Qe=F(le,"startVelocity",Number),Kr=F(le,"decay",Number),cn=F(le,"gravity",Number),ea=F(le,"drift",Number),dn=F(le,"colors",fe),ra=F(le,"ticks",Number),un=F(le,"shapes"),mn=F(le,"scalar"),Dt=!!F(le,"flat"),hn=ge(le),Qr=er,Rr=[],vi=h.width*hn.x,ta=h.height*hn.y;Qr--;)Rr.push(Ie({x:vi,y:ta,angle:fr,spread:Nr,startVelocity:Qe,color:dn[Qr%dn.length],shape:un[G(0,un.length)],ticks:ra,decay:Kr,gravity:cn,drift:ea,scalar:mn,flat:Dt}));return me?me.addFettis(Rr):(me=ze(h,Rr,q,He,ar),me.promise)}function Ee(le){var He=$||F(le,"disableForReducedMotion",Boolean),ar=F(le,"zIndex",Number);if(He&&ce)return T(function(Qe){Qe()});x&&me?h=me.canvas:x&&!h&&(h=se(ar),document.body.appendChild(h)),B&&!re&&q(h);var er={width:h.width,height:h.height};O&&!re&&O.init(h),re=!0,O&&(h.__confetti_initialized=!0);function fr(){if(O){var Qe={getBoundingClientRect:function(){if(!x)return h.getBoundingClientRect()}};q(Qe),O.postMessage({resize:{width:Qe.width,height:Qe.height}});return}er.width=er.height=null}function Nr(){me=null,B&&(I=!1,f.removeEventListener("resize",fr)),x&&h&&(document.body.contains(h)&&document.body.removeChild(h),h=null,re=!1)}return B&&!I&&(I=!0,f.addEventListener("resize",fr,!1)),O?O.fire(le,er,Nr):ye(le,er,Nr)}return Ee.reset=function(){O&&O.reset(),me&&me.reset()},Ee}var nr;function We(){return nr||(nr=Ke(null,{useWorker:!0,resize:!0})),nr}function je(h,l,x,B,I,$,H){var O=new Path2D(h),q=new Path2D;q.addPath(O,new DOMMatrix(l));var re=new Path2D;return re.addPath(q,new DOMMatrix([Math.cos(H)*I,Math.sin(H)*I,-Math.sin(H)*$,Math.cos(H)*$,x,B])),re}function R(h){if(!z)throw new Error("path confetti are not supported in this browser");var l,x;typeof h=="string"?l=h:(l=h.path,x=h.matrix);var B=new Path2D(l),I=document.createElement("canvas"),$=I.getContext("2d");if(!x){for(var H=1e3,O=H,q=H,re=0,ce=0,me,ye,Ee=0;Ee<H;Ee+=2)for(var le=0;le<H;le+=2)$.isPointInPath(B,Ee,le,"nonzero")&&(O=Math.min(O,Ee),q=Math.min(q,le),re=Math.max(re,Ee),ce=Math.max(ce,le));me=re-O,ye=ce-q;var He=10,ar=Math.min(He/me,He/ye);x=[ar,0,0,ar,-Math.round(me/2+O)*ar,-Math.round(ye/2+q)*ar]}return{type:"path",path:l,matrix:x}}function ee(h){var l,x=1,B="#000000",I='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof h=="string"?l=h:(l=h.text,x="scalar"in h?h.scalar:x,I="fontFamily"in h?h.fontFamily:I,B="color"in h?h.color:B);var $=10*x,H=""+$+"px "+I,O=new OffscreenCanvas($,$),q=O.getContext("2d");q.font=H;var re=q.measureText(l),ce=Math.ceil(re.actualBoundingBoxRight+re.actualBoundingBoxLeft),me=Math.ceil(re.actualBoundingBoxAscent+re.actualBoundingBoxDescent),ye=2,Ee=re.actualBoundingBoxLeft+ye,le=re.actualBoundingBoxAscent+ye;ce+=ye+ye,me+=ye+ye,O=new OffscreenCanvas(ce,me),q=O.getContext("2d"),q.font=H,q.fillStyle=B,q.fillText(l,Ee,le);var He=1/x;return{type:"bitmap",bitmap:O.transferToImageBitmap(),matrix:[He,0,0,He,-ce*He/2,-me*He/2]}}c.exports=function(){return We().apply(this,arguments)},c.exports.reset=function(){We().reset()},c.exports.create=Ke,c.exports.shapeFromPath=R,c.exports.shapeFromText=ee})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),vo,!1);const Zn=vo.exports;vo.exports.create;const wd=A.createContext(void 0),Wm=({children:m})=>{const{addToast:f}=fi(),[c,C]=A.useState(()=>{if(typeof window>"u")return[];try{const F=localStorage.getItem("elamel_treat_box");if(F)return JSON.parse(F)}catch{}return[]}),[N,S]=A.useState(!1);A.useEffect(()=>{try{localStorage.setItem("elamel_treat_box",JSON.stringify(c))}catch{}},[c]);const z=(F,te=1,G,pe,fe)=>{const Me=G?`${F.id}-${G.familyOrName}-${G.occasion}`:fe?`${F.id}-box-${Date.now()}`:F.id;C(ge=>ge.find(ve=>ve.id===Me)?ge.map(ve=>ve.id===Me?{...ve,quantity:ve.quantity+te}:ve):[...ge,{id:Me,product:F,quantity:te,personalisation:G,customGlazes:pe,boxItems:fe}]),f("Added to Treat Box!",`"${F.name}" has been added to your family selection.`,"success")},j=F=>{const te=c.find(G=>G.id===F);C(G=>G.filter(pe=>pe.id!==F)),te&&f("Item Removed",`"${te.product.name}" was removed from your treat box.`,"info")},w=(F,te)=>{if(te<=0){j(F);return}C(G=>G.map(pe=>pe.id===F?{...pe,quantity:te}:pe))},T=()=>{C([])},D=()=>S(!0),k=()=>S(!1),b=A.useMemo(()=>c.reduce((F,te)=>F+te.quantity,0),[c]),M=A.useMemo(()=>c.reduce((F,te)=>F+te.product.price*te.quantity,0),[c]),Y=A.useMemo(()=>{const F=new Set;return c.forEach(te=>{if(te.product.category==="goodies"){const G=te.product;G.allergenWarning&&F.add(`${G.name}: ${G.allergenWarning}`)}te.boxItems&&te.boxItems.forEach(G=>{G.allergenWarning&&F.add(`${G.name}: ${G.allergenWarning}`)})}),Array.from(F)},[c]),ie=async F=>{const te=`ELAMEL-${Math.floor(1e5+Math.random()*9e5)}`;try{Zn({particleCount:80,spread:70,origin:{y:.6},colors:["#e1285b","#f8971d","#0284c7","#10b981","#8b5cf6"]})}catch{}return f("Pre-order Request Received!",`Thank you, ${F.name}! Your family request (${te}) is now safely in our bakery & pottery queue.`,"success"),T(),{success:!0,orderId:te}};return t.jsx(wd.Provider,{value:{items:c,addToCart:z,removeFromCart:j,updateQuantity:w,clearCart:T,isCartOpen:N,openCart:D,closeCart:k,totalItemsCount:b,subtotal:M,dietaryWarnings:Y,submitInquiryOrder:ie},children:m})},Tt=()=>{const m=A.useContext(wd);if(!m)throw new Error("useCart must be used within a CartProvider");return m},mo={fontSize:"normal",highContrast:!1,reducedMotion:!1},jd=A.createContext(void 0),Hm=({children:m})=>{const[f,c]=A.useState(()=>{if(typeof window>"u")return mo;try{const j=localStorage.getItem("elamel_a11y_settings");if(j)return JSON.parse(j)}catch{}return mo});A.useEffect(()=>{try{localStorage.setItem("elamel_a11y_settings",JSON.stringify(f))}catch{}const j=document.documentElement;j.classList.remove("font-size-normal","font-size-large","font-size-xlarge"),j.classList.add(`font-size-${f.fontSize}`),f.highContrast?j.classList.add("high-contrast-mode"):j.classList.remove("high-contrast-mode"),f.reducedMotion?j.classList.add("reduced-motion-mode"):j.classList.remove("reduced-motion-mode")},[f]);const C=j=>{c(w=>({...w,fontSize:j}))},N=()=>{c(j=>({...j,highContrast:!j.highContrast}))},S=()=>{c(j=>({...j,reducedMotion:!j.reducedMotion}))},z=()=>{c(mo)};return t.jsx(jd.Provider,{value:{settings:f,setFontSize:C,toggleHighContrast:N,toggleReducedMotion:S,resetSettings:z},children:m})},kd=()=>{const m=A.useContext(jd);if(!m)throw new Error("useAccessibility must be used within an AccessibilityProvider");return m};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=(...m)=>m.filter((f,c,C)=>!!f&&f.trim()!==""&&C.indexOf(f)===c).join(" ").trim();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=m=>m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=m=>m.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,c,C)=>C?C.toUpperCase():c.toLowerCase());/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=m=>{const f=Um(m);return f.charAt(0).toUpperCase()+f.slice(1)};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ho={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=m=>{for(const f in m)if(f.startsWith("aria-")||f==="role"||f==="title")return!0;return!1},Gm=A.createContext({}),Km=()=>A.useContext(Gm),Qm=A.forwardRef(({color:m,size:f,strokeWidth:c,absoluteStrokeWidth:C,className:N="",children:S,iconNode:z,...j},w)=>{const{size:T=24,strokeWidth:D=2,absoluteStrokeWidth:k=!1,color:b="currentColor",className:M=""}=Km()??{},Y=C??k?Number(c??D)*24/Number(f??T):c??D;return A.createElement("svg",{ref:w,...ho,width:f??T??ho.width,height:f??T??ho.height,stroke:m??b,strokeWidth:Y,className:Nd("lucide",M,N),...!S&&!Vm(j)&&{"aria-hidden":"true"},...j},[...z.map(([ie,F])=>A.createElement(ie,F)),...Array.isArray(S)?S:[S]])});/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(m,f)=>{const c=A.forwardRef(({className:C,...N},S)=>A.createElement(Qm,{ref:S,iconNode:f,className:Nd(`lucide-${qm(fd(m))}`,`lucide-${m}`,C),...N}));return c.displayName=fd(m),c};/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Xm=X("arrow-down",Ym);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ui=X("arrow-right",Zm);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],eh=X("award",Jm);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],po=X("cake",rh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],nh=X("calendar",th);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Br=X("check",ah);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sh=X("chevron-down",ih);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],lh=X("chevron-left",oh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gi=X("chevron-right",ch);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],uh=X("chevron-up",dh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Ve=X("circle-check",mh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Cd=X("clock",hh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],fh=X("external-link",ph);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],on=X("eye",gh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xh=X("face-slightly-smiling",vh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],bh=X("file-text",yh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],jh=X("funnel",wh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],fo=X("gift",kh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],mi=X("heart-handshake",Nh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],jr=X("heart",Ch);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Fd=X("house",Fh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xo=X("info",Sh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Eh=X("keyboard",zh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Mh=X("lock",Ph);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yo=X("mail",_h);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bo=X("map-pin",Th);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ah=X("menu",Dh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Bh=X("message-square",Lh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M5 12h14",key:"1ays0h"}]],Sd=X("minus",Ih);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Oh=X("network",Rh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Et=X("palette",$h);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Hh=X("pause",Wh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],zd=X("phone",qh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Vh=X("play",Uh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pt=X("plus",Gh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Qh=X("refresh-cw",Kh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Xh=X("rotate-ccw",Yh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Jh=X("scale",Zh);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Mt=X("search",ep);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ed=X("send",rp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ge=X("shield-check",tp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ap=X("shield",np);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],hi=X("shopping-bag",ip);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],op=X("sliders-vertical",sp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ne=X("sparkles",lp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ln=X("star",cp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],up=X("tag",dp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Pd=X("trash-2",mp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],pi=X("triangle-alert",hp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Md=X("type",pp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_d=X("users",fp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],vp=X("volume-2",gp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_t=X("x",xp);/**
 * @license lucide-react v1.38.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Td=X("zap",yp),bp=({onOpenSearch:m,onOpenAccessibility:f})=>{const{currentPath:c,navigate:C}=kr(),{totalItemsCount:N,openCart:S}=Tt(),[z,j]=A.useState(!1),w=[{label:"Home",path:"/"},{label:"Elamel Colors",path:"/colors"},{label:"Elamel Goodies",path:"/goodies"},{label:"Moments & Souvenirs",path:"/moments-souvenirs"},{label:"About Elamel",path:"/about"},{label:"Contact & Orders",path:"/contact"}],T=D=>{C(D),j(!1)};return t.jsxs("header",{className:"site-header",children:[t.jsx("div",{className:"top-ribbon",role:"region","aria-label":"Brand Announcement",children:t.jsxs("div",{className:"container top-ribbon-content",children:[t.jsxs("span",{className:"top-ribbon-text",children:[t.jsx(Ne,{size:14,className:"icon-pulse"}),"Welcome to ",t.jsx("strong",{children:"elamel"})," • Safe, joyful ceramic kits, bakery goodies & family keepsakes"]}),t.jsxs("div",{className:"top-ribbon-links",children:[t.jsx("button",{onClick:()=>T("/accessibility"),className:"top-ribbon-btn","aria-label":"Accessibility statement and controls",children:"Accessibility Options"}),t.jsx("span",{className:"top-ribbon-divider","aria-hidden":"true",children:"•"}),t.jsx("button",{onClick:()=>T("/contact"),className:"top-ribbon-btn",children:"Order Inquiries"})]})]})}),t.jsx("div",{className:"navbar-container",children:t.jsxs("div",{className:"container navbar-inner",children:[t.jsx("a",{href:"#/",onClick:D=>{D.preventDefault(),T("/")},className:"navbar-brand","aria-label":"Elamel Home - Return to main page",children:t.jsx("img",{src:"./logowith-text.png",alt:"elamel Colors - Pinte • Crie • Desfrute logo",className:"navbar-logo-img"})}),t.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:t.jsx("ul",{className:"nav-list",children:w.map(D=>{const k=D.path==="/"?c==="/":c.startsWith(D.path);return t.jsx("li",{className:"nav-item",children:t.jsxs("button",{onClick:()=>T(D.path),className:`nav-link ${k?"active":""}`,"aria-current":k?"page":void 0,children:[D.label,k&&t.jsx("span",{className:"active-dot","aria-hidden":"true"})]})},D.path)})})}),t.jsxs("div",{className:"navbar-utilities",children:[t.jsx("button",{onClick:m,className:"btn-icon",title:"Search products and stories","aria-label":"Search products, kits, and treats",children:t.jsx(Mt,{size:19})}),t.jsx("button",{onClick:f,className:"btn-icon",title:"Adjust text size, contrast, and motion","aria-label":"Accessibility settings and display options",children:t.jsx(op,{size:19})}),t.jsxs("button",{onClick:S,className:"btn-cart-trigger",title:"View your Treat Box selection","aria-label":`View Treat Box, ${N} items selected`,children:[t.jsx(hi,{size:20}),t.jsx("span",{className:"cart-label",children:"Treat Box"}),N>0&&t.jsx("span",{className:"cart-badge","aria-hidden":"true",children:N})]}),t.jsx("button",{onClick:()=>j(!z),className:"btn-icon mobile-menu-toggle","aria-label":z?"Close navigation menu":"Open navigation menu","aria-expanded":z,children:z?t.jsx(_t,{size:22}):t.jsx(Ah,{size:22})})]})]})}),z&&t.jsxs("div",{className:"mobile-nav-drawer",role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[t.jsx("div",{className:"mobile-nav-backdrop",onClick:()=>j(!1)}),t.jsxs("div",{className:"mobile-nav-panel",children:[t.jsxs("div",{className:"mobile-nav-header",children:[t.jsx("img",{src:"./logowith-text.png",alt:"elamel",className:"mobile-nav-logo"}),t.jsx("button",{onClick:()=>j(!1),className:"btn-icon","aria-label":"Close menu",children:t.jsx(_t,{size:20})})]}),t.jsx("nav",{className:"mobile-nav-links",children:t.jsx("ul",{children:w.map(D=>{const k=D.path==="/"?c==="/":c.startsWith(D.path);return t.jsx("li",{children:t.jsx("button",{onClick:()=>T(D.path),className:`mobile-nav-item ${k?"active":""}`,children:D.label})},D.path)})})}),t.jsxs("div",{className:"mobile-nav-footer",children:[t.jsxs("button",{onClick:()=>{j(!1),m()},className:"btn btn-secondary btn-full",children:[t.jsx(Mt,{size:18})," Search Catalog"]}),t.jsxs("button",{onClick:()=>{j(!1),S()},className:"btn btn-primary btn-full",children:[t.jsx(hi,{size:18})," View Treat Box (",N,")"]})]})]})]}),t.jsx("style",{children:`
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
          background: var(--color-primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(225, 40, 91, 0.35);
        }
        .cart-badge {
          background: #FFFFFF;
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 800;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-toggle {
          display: none;
        }
        .mobile-nav-drawer {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
        }
        .mobile-nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        .mobile-nav-panel {
          position: relative;
          width: 85%;
          max-width: 320px;
          background: #FFFFFF;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          box-shadow: var(--shadow-xl);
          animation: slideInLeft 0.3s ease;
          z-index: 1001;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-nav-logo {
          height: 42px;
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
          padding: 0.8rem 1rem;
          border: none;
          background: none;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          cursor: pointer;
        }
        .mobile-nav-item.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-nav-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-light);
        }
        .btn-full {
          width: 100%;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-menu-toggle { display: inline-flex; }
          .cart-label { display: none; }
          .btn-cart-trigger { padding: 0.6rem; width: 42px; height: 42px; justify-content: center; }
          .top-ribbon-links { display: none; }
        }
      `})]})},wp=()=>{const{navigate:m}=kr(),{addToast:f}=fi(),[c,C]=A.useState(""),[N,S]=A.useState(!1),z=j=>{if(j.preventDefault(),!c||!c.includes("@")){f("Please enter a valid email","We need a valid email to send our family craft guides.","dietary");return}S(!0),f("Welcome to the Family Club!","Thank you! You will receive free weekend craft stencils & seasonal treat recipes.","success")};return t.jsxs("footer",{className:"site-footer",role:"contentinfo","aria-label":"Site Footer",children:[t.jsx("div",{className:"footer-newsletter-banner",children:t.jsxs("div",{className:"container newsletter-inner",children:[t.jsxs("div",{className:"newsletter-text",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Join The Elamel Family Club"]}),t.jsx("h3",{className:"newsletter-heading",children:"Receive free weekend painting stencils & seasonal treat recipes"}),t.jsx("p",{className:"newsletter-sub",children:"No spam, ever. Only wholesome family activities and celebratory seasonal treats."})]}),t.jsx("div",{className:"newsletter-form-wrap",children:N?t.jsxs("div",{className:"newsletter-success",children:[t.jsx(Ve,{size:24,color:"#10B981"}),t.jsxs("div",{children:[t.jsx("strong",{children:"You're part of the club!"}),t.jsx("p",{children:"Check your inbox for our welcome bundle of printable family stencils."})]})]}):t.jsxs("form",{onSubmit:z,className:"newsletter-form",children:[t.jsx("input",{type:"email",value:c,onChange:j=>C(j.target.value),placeholder:"Enter your family email address...",className:"newsletter-input","aria-label":"Email address for family newsletter",required:!0}),t.jsx("button",{type:"submit",className:"btn btn-primary",children:"Join Club"})]})})]})}),t.jsxs("div",{className:"container footer-main",children:[t.jsxs("div",{className:"footer-grid",children:[t.jsxs("div",{className:"footer-col footer-brand-col",children:[t.jsx("a",{href:"#/",onClick:j=>{j.preventDefault(),m("/")},className:"footer-logo-link","aria-label":"Elamel Home",children:t.jsx("img",{src:"./logowith-text.png",alt:"elamel",className:"footer-logo-img"})}),t.jsxs("p",{className:"footer-tagline",children:["Pinte • Crie • Desfrute",t.jsx("br",{}),"Joyful, food-safe ceramic painting kits, artisanal bakery treats, and treasured family keepsakes."]}),t.jsxs("div",{className:"safety-badge",children:[t.jsx(Ge,{size:18,color:"#10B981"}),t.jsx("span",{children:"100% Non-Toxic & Dedicated Peanut-Free Bakery"})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-col-title",children:"Our Offerings"}),t.jsxs("ul",{className:"footer-nav-list",children:[t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/colors"),className:"footer-link",children:"Elamel Colors (Ceramic Kits)"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/goodies"),className:"footer-link",children:"Elamel Goodies (Cakes & Treats)"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/moments-souvenirs"),className:"footer-link",children:"Moments & Souvenirs (Keepsakes)"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/colors"),className:"footer-link",children:"Kids & Family Kits"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/goodies"),className:"footer-link",children:"Treat Box Assortments"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-col-title",children:"About & Help"}),t.jsxs("ul",{className:"footer-nav-list",children:[t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/about"),className:"footer-link",children:"Our Story & Values"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/contact"),className:"footer-link",children:"Contact & Inquiries"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/search"),className:"footer-link",children:"Search Catalog"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/accessibility"),className:"footer-link",children:"Accessibility Statement"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>m("/sitemap"),className:"footer-link",children:"Website Sitemap"})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-col-title",children:"Studio & Contact"}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(bo,{size:18,className:"footer-contact-icon"}),t.jsx("span",{children:"124 Rainbow Craft Lane, Creative District"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(zd,{size:18,className:"footer-contact-icon"}),t.jsx("span",{children:"+1 (800) 555-ELAMEL"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(yo,{size:18,className:"footer-contact-icon"}),t.jsx("span",{children:"hello@elamel-family.com"})]}),t.jsxs("div",{className:"footer-hours",children:[t.jsx("strong",{children:"Studio Hours:"}),t.jsx("br",{}),"Tuesday – Sunday: 9:00 AM – 6:00 PM"]})]})]}),t.jsxs("div",{className:"footer-bottom",children:[t.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," ",t.jsx("strong",{children:"elamel"}),". All rights reserved. Made with"," ",t.jsx(jr,{size:14,color:"#E1285B",style:{display:"inline",verticalAlign:"middle"}})," for families everywhere."]}),t.jsxs("div",{className:"footer-legal-links",children:[t.jsx("button",{onClick:()=>m("/privacy"),className:"footer-legal-btn",children:"Privacy Policy"}),t.jsx("span",{"aria-hidden":"true",children:"•"}),t.jsx("button",{onClick:()=>m("/terms"),className:"footer-legal-btn",children:"Terms of Use"}),t.jsx("span",{"aria-hidden":"true",children:"•"}),t.jsx("button",{onClick:()=>m("/accessibility"),className:"footer-legal-btn",children:"Accessibility"}),t.jsx("span",{"aria-hidden":"true",children:"•"}),t.jsx("button",{onClick:()=>m("/sitemap"),className:"footer-legal-btn",children:"Sitemap"})]})]})]}),t.jsx("style",{children:`
        .site-footer {
          background-color: #FFFFFF;
          border-top: 1px solid var(--color-border-light);
          margin-top: 5rem;
        }
        .footer-newsletter-banner {
          background: var(--gradient-rainbow-subtle);
          border-bottom: 1px solid var(--color-border-light);
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
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .newsletter-sub {
          color: var(--color-text-muted);
          font-size: 0.9375rem;
          margin: 0;
        }
        .newsletter-form-wrap {
          flex-grow: 1;
          max-width: 480px;
        }
        .newsletter-form {
          display: flex;
          gap: 0.75rem;
        }
        .newsletter-input {
          flex-grow: 1;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 0.9375rem;
        }
        .newsletter-input:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(225, 40, 91, 0.15);
        }
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          color: #065F46;
          font-size: 0.875rem;
        }
        .footer-main {
          padding: 4rem 1.5rem 2rem 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-logo-img {
          height: 48px;
          margin-bottom: 1.25rem;
        }
        .footer-tagline {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .safety-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #065F46;
          background: #ECFDF5;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          border: 1px solid #A7F3D0;
        }
        .footer-col-title {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--color-text-main);
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
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }
        .footer-contact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .footer-hours {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: var(--color-text-light);
          padding-top: 0.75rem;
          border-top: 1px dashed var(--color-border);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-light);
          font-size: 0.875rem;
          color: var(--color-text-light);
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-legal-btn {
          background: none;
          border: none;
          color: var(--color-text-light);
          font-size: 0.875rem;
          cursor: pointer;
          font-family: inherit;
        }
        .footer-legal-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .footer-legal-links { justify-content: center; }
          .newsletter-form { flex-direction: column; }
        }
      `})]})},sn=[{id:"color-1",name:"Family Gathering Dinner Plate Kit",category:"colors",subcategory:"Tableware Colors",price:34.5,description:"A smooth, food-safe porcelain dinner plate with 8 vibrant non-toxic pastel glazes and artist brushes.",longDescription:"Bring the entire family together for a heartwarming craft session! This kit includes a premium unglazed bisque porcelain dinner plate with an embossed botanical rim. Once painted with our specialized non-toxic, lead-free glazes, the plate can be oven-cured at home or clear-glazed to become a daily family treasure.",image:"./images/product_plate_kit.jpg",rating:4.9,reviewCount:42,isFeatured:!0,tags:["Family Favorite","Food-Safe","Non-Toxic","Beginner Friendly"],dimensions:"27 cm diameter × 2.8 cm depth",materials:["Unglazed white bisque porcelain","8× 20ml water-based mineral glazes","3 synthetic fine-tip brushes","Natural sea sponge","Stencil booklet"],careInstructions:["Hand wash with mild soap recommended for painted surfaces","Food-safe when cured according to included simple baking guide","Avoid abrasive scouring pads to maintain vibrant color sheen"],safetyInfo:"100% Non-toxic, lead-free, and cadmium-free glazes. Conforms to EN71-3 and ASTM D-4236 standards.",recommendedAge:"Ages 4 and above (with adult supervision for young artists)",familyMomentTip:"Each family member can paint one flower petal or sign their name along the plate rim during Sunday brunch!",glazeCount:8,brushCount:3,difficulty:"Beginner"},{id:"color-2",name:"Cozy Morning Ceramic Mug Duo Kit",category:"colors",subcategory:"Gift Sets",price:29,description:"Set of two handcrafted ceramic mugs with warm pastel paints, perfect for couples and parent-child duos.",longDescription:"Design your own signature morning coffee or hot chocolate mugs! Handcrafted from natural stoneware, these mugs feature smooth ergonomic handles that fit comfortably in both adult and children hands. Comes with 6 rainbow-inspired mixable colors.",image:"./images/ceramic_kits.jpg",rating:4.8,reviewCount:38,isFeatured:!0,tags:["Gift Set","Couples & Duos","Dishwasher Safe","Non-Toxic"],dimensions:"10 cm height × 8.5 cm diameter (350ml capacity)",materials:["2× Handcrafted stoneware mugs","6× 25ml creamy ceramic glazes","2 ergonomic detail brushes","Palette mixing tray"],careInstructions:["Top-rack dishwasher safe after full oven cure","Microwave safe for hot cocoa and herbal teas","Handle with care when hot"],safetyInfo:"Non-toxic, hypoallergenic water-based formulation. Safe for all beverage contact.",recommendedAge:"All ages (safe for toddlers to make finger-paint handprints)",familyMomentTip:"Create matching morning mugs with sweet hidden messages at the bottom of the cup!",glazeCount:6,brushCount:2,difficulty:"All Ages"},{id:"color-3",name:"Spring Blossom Pastel Vase Kit",category:"colors",subcategory:"Decorative Pieces",price:38,description:"An elegant ribbed ceramic flower vase with gentle pastel glaze paints, golden accent paste, and sponges.",longDescription:"Turn fresh garden flowers into a centerpiece masterpiece. This sculptural ceramic vase has subtle grooved ridges that guide paint blending, making it easy to achieve soft ombre gradients and floral motifs.",image:"./images/ceramic_kits.jpg",rating:4.9,reviewCount:29,isFeatured:!1,tags:["Decorative","Ombre Blending","Home Decor","Gift Ready"],dimensions:"22 cm height × 12 cm width",materials:["1× Ribbed terracotta-white bisque vase","6× 30ml satin finish glazes","1× Non-toxic metallic gold luster pot","2 sponge dabbers","1 liner brush"],careInstructions:["Wipe clean with a damp microfiber cloth","Waterproof interior coating allows holding real fresh floral arrangements","Do not soak in harsh detergents"],safetyInfo:"Fragile ceramicware. Keep on stable surfaces out of reach of unattended toddlers.",recommendedAge:"Ages 8+ or younger with family collaboration",familyMomentTip:"Pick wildflowers on a weekend walk and paint matching floral silhouettes on the vase together.",glazeCount:7,brushCount:3,difficulty:"Intermediate"},{id:"color-4",name:"Little Explorers Animal Pottery Set",category:"colors",subcategory:"Kids & Family Kits",price:26.5,description:"Adorable bisque pottery animal figures (bunny, turtle, bear) with washable child-safe vibrant paints.",longDescription:"Designed specifically for younger children, this set features 3 smooth, sturdy bisque animal figurines with rounded edges and easy-grip surfaces. Includes vibrant washable paints and chunky sponge brushes.",image:"./images/hero_family.jpg",rating:5,reviewCount:56,isFeatured:!0,tags:["Kids Best Seller","Washable","Sturdy Bisque","Toddler Safe"],dimensions:"Approx 9 cm × 7 cm each figurine (set of 3)",materials:["3× Thick-walled ceramic animal figures","6× Easy-wash kid-safe tempera glazes","3 chunky wooden-handle brushes","Protective craft mat"],careInstructions:["Can be wiped and repainted with tempera or oven-cured for permanence","Clean hands and surfaces easily with warm water and soap"],safetyInfo:"Extra sturdy ceramic with no sharp edges. 100% non-toxic, child-safe certification.",recommendedAge:"Ages 3 to 10",familyMomentTip:"Children love giving names to their painted animal friends and creating bedtime story adventures!",glazeCount:6,brushCount:3,difficulty:"Beginner"},{id:"color-5",name:"Sunlit Tapas & Dipping Bowls Trio",category:"colors",subcategory:"Tableware Colors",price:32,description:"Set of 3 nesting ceramic condiment & dipping bowls with vibrant Mediterranean-inspired color pots.",longDescription:"Ideal for family taco nights, dipping oils, snacks, and dessert toppings. Paint geometric Mediterranean patterns or bright solid pastels with our high-coverage glaze kit.",image:"./images/product_plate_kit.jpg",rating:4.7,reviewCount:22,isFeatured:!1,tags:["Tableware","Nesting Set","Food-Safe","Everyday Use"],dimensions:"Small: 8 cm, Medium: 10 cm, Large: 12 cm diameter",materials:["3× Bisque earthenware dipping bowls","5× High-gloss food-safe glaze pots","2 detailing brushes","Pattern transfer sheets"],careInstructions:["Dishwasher safe (gentle cycle)","Oven-cure ensures food and oil resistance"],safetyInfo:"Food contact certified glazes, zero toxic fumes during oven curing.",recommendedAge:"Ages 6 and up",familyMomentTip:"Paint each bowl for a different family snack—one for berries, one for nuts, one for sweet treats!",glazeCount:5,brushCount:2,difficulty:"Beginner"},{id:"color-6",name:"Grand Family Keepsake Platter Kit",category:"colors",subcategory:"Gift Sets",price:45,description:"Extra-large 34cm oval serving platter kit with custom lettering pens, full rainbow glaze set, and display stand.",longDescription:"Our signature family gathering platter! Large enough to fit handprints of grandparents, parents, and children, along with commemorative dates and recipes. Includes a sturdy natural wooden display easel.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:64,isFeatured:!0,tags:["Generational Gift","Handprint Memory","Display Easel","Premium Bisque"],dimensions:"34 cm length × 24 cm width × 3.5 cm depth",materials:["1× Extra-large stoneware oval platter","10× Rainbow mineral glazes","2 fine ceramic lettering pens","Natural beechwood display stand","Detailed family project guide"],careInstructions:["Hand wash with soft sponge","Display on wooden easel when not serving holiday roasts or pastries"],safetyInfo:"Heavy stoneware—handle with two hands. Non-toxic glazes.",recommendedAge:"All generations (from newborn handprints to great-grandparent signatures)",familyMomentTip:"Create an annual holiday tradition by adding new symbols or signatures every family reunion!",glazeCount:10,brushCount:4,difficulty:"Beginner"}],wo=[{id:"goodies-1",name:"Elamel Velvet Berry Celebration Cake",category:"goodies",subcategory:"Family Cakes",price:42,description:"Soft vanilla sponge layered with organic raspberry compote, whipped mascarpone cream, and fresh forest berries.",longDescription:"Baked fresh daily with pure French butter, unbleached flour, and fresh hand-picked berries. Light, airy, and gently sweetened so children and grandparents alike can enjoy every bite without heavy sugar overload.",image:"./images/product_berry_cake.jpg",rating:5,reviewCount:88,isFeatured:!0,tags:["Bestseller","Fresh Berries","Low Sugar","Family Celebrations"],flavorProfile:"Madagascar vanilla sponge, tart strawberry-raspberry compote, fluffy sweet cream",portionSize:"20 cm round, 3 tall layers (Serves 8–10 family members)",servings:10,dietaryTags:["Vegetarian","Nut-Free","Organic"],ingredients:["Organic unbleached wheat flour","Farm-fresh eggs","Grass-fed butter","Cane sugar","Fresh raspberries & strawberries","Mascarpone cream","Madagascar bourbon vanilla beans"],allergenWarning:"Contains Wheat (Gluten), Dairy (Milk/Butter), and Eggs. Produced in a 100% dedicated peanut-free kitchen.",storageInstructions:"Keep refrigerated between 2°C to 5°C. Best enjoyed within 3 days of delivery.",servingTemperature:"Remove from refrigerator 20 minutes before serving for optimal sponge tenderness."},{id:"goodies-2",name:"Rainbow Swirl Butter Sugar Cookie Box",category:"goodies",subcategory:"Cookies & Biscuits",price:24,description:"Box of 12 melt-in-your-mouth artisanal butter shortbread cookies with pastel royal icing and celebratory swirl art.",longDescription:"Hand-piped by our master bakers, these cookies celebrate the playful rainbow swirl of the Elamel logo. Made with real European butter, a hint of lemon zest, and soft royal icing that provides a crisp bite with a buttery melt.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:94,isFeatured:!0,tags:["Kids Favorite","Gift Boxed","Crisp & Buttery","Hand Piped"],flavorProfile:"Rich European butter shortbread with delicate citrus vanilla icing",portionSize:"12 large cookies individually sealed in protective parchment (Serves 6–12)",servings:12,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Pasture-raised butter","Wheat flour","Powdered sugar","Cage-free egg whites","Natural lemon extract","Plant-derived food colorings (spirulina, turmeric, beetroot)"],allergenWarning:"Contains Gluten and Dairy. 100% Nut-Free recipe.",storageInstructions:"Store in a cool, dry place in airtight container. Stays crisp for up to 14 days.",servingTemperature:"Serve at room temperature with tea, milk, or hot cocoa."},{id:"goodies-3",name:"Golden Honey Cinnamon Animal Biscuits",category:"goodies",subcategory:"Kids-Friendly Options",price:16.5,description:"Crunchy, naturally sweetened honey and Ceylon cinnamon biscuits in playful animal shapes with zero refined sugar.",longDescription:"A wholesome, joyful snack created for toddlers and young children. Sweetened exclusively with raw wildflower honey and loaded with whole oats and prebiotic fiber. Comes in a resealable family snack tin.",image:"./images/goodies_assortment.jpg",rating:4.8,reviewCount:45,isFeatured:!1,tags:["Toddler Friendly","No Refined Sugar","Raw Honey","Whole Grain"],flavorProfile:"Warm aromatic Ceylon cinnamon with gentle floral honey sweetness",portionSize:"250g snack tin (~30 mini animal biscuits, Serves 4–6 snacks)",servings:6,dietaryTags:["Vegetarian","Nut-Free","Organic"],ingredients:["Whole rolled oats","Spelt flour","Raw wildflower honey","Coconut oil","Ceylon cinnamon","Baking soda","Sea salt"],allergenWarning:"Contains Spelt (Gluten). Free from refined sugars, dairy, eggs, and nuts.",storageInstructions:"Keep tin sealed in pantry. Fresh for up to 4 weeks.",servingTemperature:"Delicious with warm oat milk or as an on-the-go park snack."},{id:"goodies-4",name:"Gluten-Free Chocolate Sea Salt Fudge Cake",category:"goodies",subcategory:"Occasion Treats",price:44,description:"Decadent 70% dark Belgian chocolate fudge cake with Maldon sea salt flakes and almond flour sponge.",longDescription:"For chocolate lovers with gluten sensitivities! We use premium almond flour and single-origin dark chocolate to achieve an ultra-fudgy texture that rivals any traditional cake.",image:"./images/goodies_assortment.jpg",rating:4.9,reviewCount:31,isFeatured:!1,tags:["Gluten-Free","Belgian Chocolate","Rich Fudge","Birthday Special"],flavorProfile:"Deep cocoa, velvety chocolate ganache, gentle mineral sea salt crunch",portionSize:"18 cm round (Serves 8 generous slices)",servings:8,dietaryTags:["Gluten-Free","Vegetarian","Contains Nuts"],ingredients:["70% Belgian dark chocolate","Blanched almond flour","Grass-fed butter","Brown sugar","Organic eggs","Maldon sea salt flakes","Dutch cocoa powder"],allergenWarning:"Contains Almonds (Nuts), Dairy, and Eggs. Certified Gluten-Free preparation.",storageInstructions:"Refrigerate. Can be warmed slightly for a molten lava effect.",servingTemperature:"Best served slightly warm (10 seconds microwave) with a scoop of vanilla gelato."},{id:"goodies-5",name:"Sunshine Citrus & Poppyseed Family Loaf",category:"goodies",subcategory:"Family Cakes",price:18.5,description:"Moist Meyer lemon and orange blossom loaf cake drizzled with tangy citrus glaze and crunchy poppyseeds.",longDescription:"The perfect companion for morning coffee or afternoon family tea time. Freshly squeezed Meyer lemons provide a bright sunshine flavor that balances the tender crumb.",image:"./images/product_berry_cake.jpg",rating:4.7,reviewCount:27,isFeatured:!1,tags:["Breakfast & Tea","Citrus Glaze","Nut-Free","Family Loaf"],flavorProfile:"Zesty Meyer lemon, sweet orange blossom, nutty poppyseeds",portionSize:"Loaf (8 thick slices, Serves 6–8)",servings:8,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Unbleached wheat flour","Meyer lemon juice & zest","Greek yogurt","Sugar","Butter","Eggs","Blue poppyseeds"],allergenWarning:"Contains Gluten, Dairy, and Eggs.",storageInstructions:"Store wrapped at room temperature for up to 5 days.",servingTemperature:"Slice at room temperature, lightly toasted with salted butter if desired."},{id:"goodies-6",name:"Petite Floral Pastel Cupcake Bouquet (Set of 6)",category:"goodies",subcategory:"Occasion Treats",price:28,description:"Assortment of 6 artisan cupcakes decorated like blooming pastel garden roses and hydrangeas in gift presentation.",longDescription:"An edible bouquet! Includes 2 Madagascar Vanilla, 2 Strawberry Cream, and 2 Salted Caramel cupcakes, each hand-piped with intricate floral buttercream petals in soft pastel hues.",image:"./images/goodies_assortment.jpg",rating:5,reviewCount:72,isFeatured:!0,tags:["Floral Bouquet","Gift Set","6 Flavors","Hand-Crafted"],flavorProfile:"Trio of vanilla, fresh strawberry, and golden caramel with silky buttercream",portionSize:"6 standard gourmet cupcakes in a clear-window presentation box (Serves 6)",servings:6,dietaryTags:["Vegetarian","Nut-Free"],ingredients:["Wheat flour","Organic sugar","Butter","Cream","Natural fruit purees","Vanilla extract","Cocoa butter"],allergenWarning:"Contains Gluten, Milk, and Eggs. Nut-free recipe.",storageInstructions:"Keep in box at room temperature away from direct sun. Consume within 48 hours.",servingTemperature:"Enjoy at room temperature for the creamiest frosting texture."}],Xn=[{id:"moment-1",name:"Custom Engraved Family Tree Ceramic Plate",category:"moments",subcategory:"Family Celebrations",price:49,description:"Handcrafted ceramic heirloom plate personalized with your family name, established year, and member names.",longDescription:"Celebrate your family roots with our signature heirloom plate. Hand-thrown in our studio, carefully lettered with your chosen family name, year, and names of up to 8 family members around the illustrated branches. Finished with a food-safe glossy protective glaze.",image:"./images/moments_gifts.jpg",rating:5,reviewCount:112,isFeatured:!0,tags:["Heirloom Keepsake","Custom Engraving","Family Tree","Most Cherished Gift"],baseItemType:"ceramic_plate",charLimit:60,leadTimeDays:4,customizationSteps:["Enter Family Surname & Established Year","Add individual family member names","Choose custom rim inscription or heartfelt quote","Select gift presentation box and greeting card"],sampleStories:[{title:"Three Generations at Grandma's 80th",family:"The Miller Family",quote:"Seeing Grandma’s tears of joy when she read all her grandchildren’s names on the plate made our gathering unforgettable.",occasion:"Grandmother’s 80th Birthday"},{title:"New Roots in Our First Home",family:"Sara & Thomas K.",quote:"It now hangs proudly above our dining table, welcoming everyone to our home.",occasion:"Housewarming 2026"}]},{id:"moment-2",name:"Personalized Message Butter Cookie Crate",category:"moments",subcategory:"Family Celebrations",price:36,description:"Luxury wooden craft crate with 12 gourmet shortbread cookies custom lettered with your heartfelt family messages.",longDescription:'Send delicious edible letters! Each artisanal butter cookie is piped with your chosen phrases—such as "Welcome Home Baby Liam", "Happy 10th Anniversary Mom & Dad", or "Best Family Ever". Packaged in a reusable wooden keepsake box with dried floral sprigs.',image:"./images/product_custom_cookies.jpg",rating:4.9,reviewCount:83,isFeatured:!0,tags:["Edible Keepsake","Custom Lettering","Wooden Crate","Express Joy"],baseItemType:"cookie_crate",charLimit:45,leadTimeDays:2,customizationSteps:["Enter 3 to 4 custom phrases (up to 45 chars total)","Choose pastel color theme (Rainbow Swirl, Rose Garden, Ocean Breeze)","Add recipient name and personal gift note"],sampleStories:[{title:"Anniversary Breakfast Surprise",family:"Carlos & Helena M.",quote:"My husband surprised me with cookies written with our wedding song lyrics. We laughed and savored every single bite!",occasion:"15th Wedding Anniversary"}]},{id:"moment-3",name:"Couples & Duos Hand-Lettered Mug Set",category:"moments",subcategory:"Anniversary Moments",price:38,description:"Pair of matching ceramic mugs with intertwining botanical crests, names, and special commemorative date.",longDescription:"Designed to symbolize shared journeys. These heavy ceramic mugs feature warm earthy glaze, hand-brushed rims, and custom lettering baked permanently into the glaze. A timeless gift for weddings, anniversaries, or parent-child pairs.",image:"./images/moments_gifts.jpg",rating:4.9,reviewCount:67,isFeatured:!0,tags:["Anniversary","Couples Pair","Hand-Lettered","Dishwasher Safe"],baseItemType:"ceramic_mug",charLimit:30,leadTimeDays:3,customizationSteps:['Enter First Names (e.g., "David & Sarah")',"Enter Anniversary / Memorable Date","Select handle style and glaze undertone"],sampleStories:[{title:"Morning Coffee Tradition",family:"Sophie & Marc D.",quote:"Five years of marriage, and we start every single day with these mugs. They still look brand new.",occasion:"5th Anniversary"}]},{id:"moment-4",name:"Holiday Souvenir Ceramic Ornament Set",category:"moments",subcategory:"Holiday Souvenirs",price:29,description:"Set of 4 hanging ceramic stars and baubles with custom embossed names and festive rainbow pastel ribbons.",longDescription:"Capture the magic of holiday gatherings with hanging ceramic keepsakes. Each ornament is custom stamped with a family member’s name and year, tied with luxurious rainbow grosgrain ribbon.",image:"./images/moments_gifts.jpg",rating:4.8,reviewCount:49,isFeatured:!1,tags:["Holiday Souvenir","Set of 4","Ribbon Attached","Yearly Tradition"],baseItemType:"ceramic_plate",charLimit:20,leadTimeDays:3,customizationSteps:["Enter 4 names for the individual ornaments",'Choose year stamp (e.g., "2026")',"Select ribbon color theme"],sampleStories:[{title:"Trimming the Tree with Joy",family:"The Henderson Clan",quote:"We add a new Elamel ornament every holiday season. The kids love finding their names on the branches.",occasion:"Holiday Family Tradition"}]}],ft=[...sn,...wo,...Xn],jp=[{question:"Are Elamel ceramic glazes safe for children and food use?",answer:"Yes, 100%! All glazes in our Elamel Colors kits are certified water-based, non-toxic, lead-free, and cadmium-free (complying with EN71-3 and ASTM D-4236). When cured according to our simple home oven instructions or studio kiln-glazed, tableware items are fully food-safe and easy to wash."},{question:"How do allergen controls work for Elamel Goodies bakery treats?",answer:"We take food safety with utmost seriousness. Every Goodies item features clear allergen badges right on the card and detail page (such as Gluten-Free, Dairy-Free, Nut-Free). Our bakery operates in strictly segregated preparation zones, and we never use artificial preservatives."},{question:"How does the custom personalization process work?",answer:"You can use our Live Personalisation Studio on the Moments & Souvenirs page! You type your family name, special date, and custom message, choose your preferred color theme, and see a live visual preview in real time before submitting your order."},{question:"What is the standard delivery and preparation time?",answer:"Standard non-custom kits and treats ship within 24–48 hours. Personalized ceramics and custom engraved cookie crates require 2 to 4 days of artisan preparation in our studio to ensure perfect cure and packaging before dispatch."},{question:"Do you offer family workshops and group craft sessions?",answer:"Yes! We host weekly weekend family craft mornings and afternoon tea decorating sessions at our studio. You can view upcoming dates on our About page or reach out via our Contact form to book a private family celebration."}],kp=()=>{const{selectedProductId:m,closeProductModal:f,navigate:c}=kr(),{addToCart:C}=Tt(),[N,S]=A.useState(1),[z,j]=A.useState("overview"),w=ft.find(F=>F.id===m);if(!w)return null;const T=w.category==="colors",D=w.category==="goodies",k=w.category==="moments",b=T?w:null,M=D?w:null,Y=k?w:null,ie=()=>{if(k){f(),c("/moments-souvenirs");return}C(w,N),f()};return t.jsxs("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"modal-product-title",children:[t.jsxs("div",{className:"modal-dialog product-modal-dialog",children:[t.jsx("button",{onClick:f,className:"btn-icon modal-close-btn","aria-label":"Close product details modal",children:t.jsx(_t,{size:20})}),t.jsxs("div",{className:"product-modal-grid",children:[t.jsxs("div",{className:"product-modal-media-col",children:[t.jsxs("div",{className:"product-modal-image-wrap",children:[t.jsx("img",{src:w.image,alt:`${w.name} - ${w.description}`,className:"product-modal-image"}),t.jsx("div",{className:"product-modal-tag-overlay",children:t.jsx("span",{className:"badge badge-primary",children:w.subcategory})})]}),t.jsxs("div",{className:"product-modal-badges",children:[b&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"modal-badge-item",children:[t.jsx(Ge,{size:16,color:"#10B981"}),t.jsx("span",{children:"Non-Toxic Lead-Free Glazes"})]}),t.jsxs("div",{className:"modal-badge-item",children:[t.jsx(Ne,{size:16,color:"#F8971D"}),t.jsxs("span",{children:[b.difficulty," Level"]})]})]}),M&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"modal-badge-item",children:[t.jsx(Ge,{size:16,color:"#10B981"}),t.jsx("span",{children:"Peanut-Free Dedicated Bakery"})]}),t.jsxs("div",{className:"modal-badge-item",children:[t.jsx(jr,{size:16,color:"#E1285B"}),t.jsxs("span",{children:[M.servings," Servings"]})]})]})]})]}),t.jsxs("div",{className:"product-modal-details-col",children:[t.jsxs("div",{className:"modal-header-meta",children:[t.jsxs("span",{className:"modal-category-label",children:["elamel • ",w.category.toUpperCase()]}),t.jsxs("div",{className:"modal-rating",children:[t.jsx(ln,{size:14,fill:"#F8971D",color:"#F8971D"}),t.jsx("strong",{children:w.rating.toFixed(1)}),t.jsxs("span",{children:["(",w.reviewCount," family reviews)"]})]})]}),t.jsx("h2",{id:"modal-product-title",className:"product-modal-title",children:w.name}),t.jsxs("div",{className:"product-modal-price-row",children:[t.jsxs("span",{className:"product-modal-price",children:["$",w.price.toFixed(2)]}),M&&t.jsx("span",{className:"modal-portion-tag",children:M.portionSize}),b&&t.jsx("span",{className:"modal-portion-tag",children:b.dimensions})]}),t.jsx("p",{className:"product-modal-summary",children:w.longDescription}),t.jsxs("div",{className:"modal-tabs",role:"tablist","aria-label":"Product Information Tabs",children:[t.jsx("button",{role:"tab","aria-selected":z==="overview",onClick:()=>j("overview"),className:`modal-tab-btn ${z==="overview"?"active":""}`,children:T?"Materials & Kit":D?"Flavor & Ingredients":"Specifications"}),t.jsx("button",{role:"tab","aria-selected":z==="safety",onClick:()=>j("safety"),className:`modal-tab-btn ${z==="safety"?"active":""}`,children:D?"Allergen Information":"Safety & Child Guidelines"}),t.jsx("button",{role:"tab","aria-selected":z==="care",onClick:()=>j("care"),className:`modal-tab-btn ${z==="care"?"active":""}`,children:D?"Storage & Serving":"Care & Curing"}),t.jsx("button",{role:"tab","aria-selected":z==="family",onClick:()=>j("family"),className:`modal-tab-btn ${z==="family"?"active":""}`,children:"Family Moments Tip"})]}),t.jsxs("div",{className:"modal-tab-content",role:"tabpanel",children:[z==="overview"&&t.jsxs("div",{className:"tab-pane",children:[b&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"tab-section-heading",children:"What's Inside Your Craft Box:"}),t.jsx("ul",{className:"modal-bullets",children:b.materials.map((F,te)=>t.jsxs("li",{children:[t.jsx(Br,{size:14,color:"#10B981"})," ",F]},te))})]}),M&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"tab-section-heading",children:"Flavor & Natural Ingredients:"}),t.jsxs("p",{className:"tab-highlight",children:[t.jsx("strong",{children:"Flavor Profile:"})," ",M.flavorProfile]}),t.jsx("ul",{className:"modal-bullets",children:M.ingredients.map((F,te)=>t.jsxs("li",{children:[t.jsx(Br,{size:14,color:"#10B981"})," ",F]},te))})]}),Y&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"tab-section-heading",children:"Personalization Process:"}),t.jsx("ul",{className:"modal-bullets",children:Y.customizationSteps.map((F,te)=>t.jsxs("li",{children:[t.jsx(Br,{size:14,color:"#10B981"})," ",F]},te))})]})]}),z==="safety"&&t.jsxs("div",{className:"tab-pane",children:[b&&t.jsxs("div",{className:"safety-alert-box",children:[t.jsx(Ge,{size:20,color:"#10B981"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Child Safety & Non-Toxic Certification:"}),t.jsx("p",{children:b.safetyInfo}),t.jsxs("p",{className:"sub-note",children:[t.jsx("strong",{children:"Recommended Age:"})," ",b.recommendedAge]})]})]}),M&&t.jsxs("div",{className:"allergen-alert-box",children:[t.jsx(pi,{size:20,color:"#D97706"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Allergen & Diet Advice:"}),t.jsx("p",{children:M.allergenWarning}),t.jsx("div",{className:"diet-tags-wrap",children:M.dietaryTags.map(F=>t.jsx("span",{className:"badge badge-diet",children:F},F))})]})]}),Y&&t.jsx("p",{children:"Hand-inspected for highest heirloom quality. Non-toxic glazes and packaging."})]}),z==="care"&&t.jsxs("div",{className:"tab-pane",children:[b&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"tab-section-heading",children:"Washing & Curing Instructions:"}),t.jsx("ul",{className:"modal-bullets",children:b.careInstructions.map((F,te)=>t.jsxs("li",{children:[t.jsx(xo,{size:14,color:"#0284C7"})," ",F]},te))})]}),M&&t.jsxs(t.Fragment,{children:[t.jsx("h4",{className:"tab-section-heading",children:"Freshness & Serving Temperature:"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Storage:"})," ",M.storageInstructions]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Serving Suggestion:"})," ",M.servingTemperature]})]})]}),z==="family"&&t.jsxs("div",{className:"tab-pane",children:[b&&t.jsxs("div",{className:"family-tip-box",children:[t.jsx(Ne,{size:20,color:"#E1285B"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Shared Memory Tip:"}),t.jsx("p",{children:b.familyMomentTip})]})]}),M&&t.jsxs("div",{className:"family-tip-box",children:[t.jsx(jr,{size:20,color:"#E1285B"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Celebration Suggestion:"}),t.jsx("p",{children:"Pairs wonderfully with weekend storytime or family milestone afternoon teas."})]})]}),Y&&t.jsx("div",{className:"family-stories-list",children:Y.sampleStories.map((F,te)=>t.jsxs("div",{className:"sample-story-card",children:[t.jsxs("strong",{children:['"',F.title,'"']})," — ",t.jsx("em",{children:F.family}),t.jsxs("p",{children:['"',F.quote,'"']})]},te))})]})]}),t.jsxs("div",{className:"modal-action-bar",children:[!k&&t.jsxs("div",{className:"quantity-counter","aria-label":"Quantity selector",children:[t.jsx("button",{onClick:()=>S(Math.max(1,N-1)),className:"btn-qty","aria-label":"Decrease quantity",children:t.jsx(Sd,{size:14})}),t.jsx("span",{className:"qty-value","aria-live":"polite",children:N}),t.jsx("button",{onClick:()=>S(N+1),className:"btn-qty","aria-label":"Increase quantity",children:t.jsx(Pt,{size:14})})]}),t.jsx("button",{onClick:ie,className:"btn btn-primary btn-lg flex-grow-btn",children:k?t.jsx(t.Fragment,{children:"Customize in Studio & Live Preview"}):t.jsxs(t.Fragment,{children:[t.jsx(Pt,{size:18})," Add to Treat Box ($",(w.price*N).toFixed(2),")"]})})]})]})]})]}),t.jsx("style",{children:`
        .product-modal-dialog {
          max-width: 900px;
          padding: 0;
          overflow: hidden;
        }
        .product-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
        }
        .product-modal-media-col {
          background: var(--color-bg-subtle);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-right: 1px solid var(--color-border-light);
        }
        .product-modal-image-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 1;
          box-shadow: var(--shadow-md);
        }
        .product-modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-modal-tag-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }
        .product-modal-badges {
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
          background: #FFFFFF;
          padding: 0.5rem 0.8rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
        }
        .product-modal-details-col {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .modal-category-label {
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }
        .modal-rating {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .product-modal-title {
          font-size: 1.85rem;
          margin-bottom: 0.6rem;
        }
        .product-modal-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .product-modal-price {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .modal-portion-tag {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }
        .product-modal-summary {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .modal-tabs {
          display: flex;
          gap: 0.4rem;
          border-bottom: 2px solid var(--color-border-light);
          margin-bottom: 1.25rem;
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
          padding: 0.6rem 0.8rem;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .modal-tab-btn:hover {
          color: var(--color-primary);
        }
        .modal-tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .modal-tab-content {
          min-height: 160px;
          margin-bottom: 2rem;
          font-size: 0.9375rem;
        }
        .tab-section-heading {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
        }
        .modal-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .modal-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: var(--color-text-muted);
        }
        .safety-alert-box,
        .allergen-alert-box,
        .family-tip-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
        }
        .safety-alert-box {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #065F46;
        }
        .allergen-alert-box {
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          color: #92400E;
        }
        .family-tip-box {
          background: #FFF1F2;
          border: 1px solid #FECDD3;
          color: #9F1239;
        }
        .diet-tags-wrap {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .modal-action-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
        }
        .quantity-counter {
          display: inline-flex;
          align-items: center;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.25rem;
          background: #FFFFFF;
        }
        .btn-qty {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: var(--color-bg-subtle);
          color: var(--color-text-main);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-qty:hover {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .qty-value {
          font-family: var(--font-heading);
          font-weight: 700;
          width: 36px;
          text-align: center;
        }
        .flex-grow-btn {
          flex-grow: 1;
        }

        @media (max-width: 768px) {
          .product-modal-grid { grid-template-columns: 1fr; }
          .product-modal-media-col { padding: 1.25rem; }
          .product-modal-details-col { padding: 1.25rem; }
        }
      `})]})},Np=()=>{const{isCartOpen:m,closeCart:f,items:c,updateQuantity:C,removeFromCart:N,subtotal:S,totalItemsCount:z,dietaryWarnings:j,submitInquiryOrder:w}=Tt(),{navigate:T}=kr(),[D,k]=A.useState(!1),[b,M]=A.useState(""),[Y,ie]=A.useState(""),[F,te]=A.useState(""),[G,pe]=A.useState(""),[fe,Me]=A.useState(""),[ge,Se]=A.useState(!1),[ve,se]=A.useState(null);if(!m)return null;const Ae=async ne=>{if(ne.preventDefault(),!b||!Y)return;Se(!0);const ze=await w({name:b,email:Y,phone:F,eventDate:G,notes:fe});Se(!1),ze.success&&(se(ze.orderId),k(!1))},Ie=()=>{se(null),k(!1),f()};return t.jsxs("div",{className:"drawer-backdrop",onClick:Ie,children:[t.jsxs("div",{className:"drawer-panel",onClick:ne=>ne.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"drawer-title",children:[t.jsxs("div",{className:"drawer-header",children:[t.jsxs("div",{className:"drawer-header-left",children:[t.jsx(hi,{size:22,color:"#E1285B"}),t.jsxs("h3",{id:"drawer-title",className:"drawer-title",children:["Your Treat Box (",z,")"]})]}),t.jsx("button",{onClick:Ie,className:"btn-icon","aria-label":"Close Treat Box Drawer",children:t.jsx(_t,{size:20})})]}),ve?t.jsxs("div",{className:"drawer-confirmed-state",children:[t.jsx("div",{className:"confirmed-icon-circle",children:t.jsx(Ve,{size:48,color:"#10B981"})}),t.jsx("h4",{className:"confirmed-title",children:"Request Received!"}),t.jsxs("p",{className:"confirmed-order-code",children:["Inquiry Reference: ",t.jsx("strong",{children:ve})]}),t.jsxs("p",{className:"confirmed-text",children:["Thank you, ",t.jsx("strong",{children:b}),"! We've sent a detailed confirmation to ",t.jsx("strong",{children:Y}),". Our craft studio and bakery team will prepare your family order with love and contact you within 24 hours."]}),t.jsx("button",{onClick:Ie,className:"btn btn-primary btn-full-width",children:"Continue Exploring Elamel"})]}):c.length===0?t.jsxs("div",{className:"drawer-empty-state",children:[t.jsx(hi,{size:48,color:"#CBD5E1"}),t.jsx("h4",{children:"Your Treat Box is Empty"}),t.jsx("p",{children:"Explore our ceramic craft kits, artisanal bakery treats, and personalized family keepsakes!"}),t.jsx("button",{onClick:()=>{f(),T("/colors")},className:"btn btn-primary",children:"Explore Elamel Colors"})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"drawer-body",children:[j.length>0&&t.jsxs("div",{className:"drawer-allergen-alert",role:"alert",children:[t.jsx(pi,{size:18,color:"#D97706",className:"alert-icon-top"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Allergen Notice:"}),t.jsx("ul",{className:"allergen-list",children:j.map((ne,ze)=>t.jsx("li",{children:ne},ze))})]})]}),t.jsx("div",{className:"drawer-items-list",children:c.map(ne=>t.jsxs("div",{className:"drawer-item-row",children:[t.jsx("img",{src:ne.product.image,alt:ne.product.name,className:"drawer-item-thumb"}),t.jsxs("div",{className:"drawer-item-details",children:[t.jsx("h4",{className:"drawer-item-name",children:ne.product.name}),t.jsxs("span",{className:"drawer-item-price",children:["$",(ne.product.price*ne.quantity).toFixed(2)]}),ne.personalisation&&t.jsxs("div",{className:"item-personalisation-snippet",children:[t.jsxs("strong",{children:['"',ne.personalisation.familyOrName,'"']})," • ",ne.personalisation.occasion,t.jsxs("div",{className:"snippet-msg",children:['"',ne.personalisation.customMessage,'"']})]}),ne.customGlazes&&t.jsxs("div",{className:"item-glazes-snippet",children:[t.jsx("span",{children:"Custom Palette: "}),ne.customGlazes.map((ze,Ke)=>t.jsx("span",{className:"mini-color-dot",style:{backgroundColor:ze}},Ke))]}),t.jsxs("div",{className:"item-qty-actions",children:[t.jsxs("div",{className:"drawer-qty-control",children:[t.jsx("button",{onClick:()=>C(ne.id,ne.quantity-1),className:"btn-drawer-qty","aria-label":"Decrease quantity",children:t.jsx(Sd,{size:12})}),t.jsx("span",{className:"drawer-qty-val",children:ne.quantity}),t.jsx("button",{onClick:()=>C(ne.id,ne.quantity+1),className:"btn-drawer-qty","aria-label":"Increase quantity",children:t.jsx(Pt,{size:12})})]}),t.jsx("button",{onClick:()=>N(ne.id),className:"btn-drawer-delete","aria-label":`Remove ${ne.product.name}`,children:t.jsx(Pd,{size:15})})]})]})]},ne.id))}),D&&t.jsxs("form",{onSubmit:Ae,className:"drawer-checkout-form",children:[t.jsx("h4",{className:"form-heading",children:"Complete Pre-order Request:"}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"form-label",children:["Full Name ",t.jsx("span",{className:"required-star",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:b,onChange:ne=>M(ne.target.value),placeholder:"e.g. Maria Rossi",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"form-label",children:["Email Address ",t.jsx("span",{className:"required-star",children:"*"})]}),t.jsx("input",{type:"email",required:!0,value:Y,onChange:ne=>ie(ne.target.value),placeholder:"e.g. maria@family.com",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Phone Number (Optional)"}),t.jsx("input",{type:"tel",value:F,onChange:ne=>te(ne.target.value),placeholder:"e.g. +1 (555) 019-2834",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Celebration / Delivery Date"}),t.jsx("input",{type:"date",value:G,onChange:ne=>pe(ne.target.value),className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Special Requests & Dietary Notes"}),t.jsx("textarea",{rows:2,value:fe,onChange:ne=>Me(ne.target.value),placeholder:"Any allergen instructions or gift card notes...",className:"form-control"})]}),t.jsxs("button",{type:"submit",disabled:ge,className:"btn btn-primary btn-full-width",children:[t.jsx(Ed,{size:16})," ",ge?"Submitting Request...":"Send Pre-Order Request"]})]})]}),t.jsxs("div",{className:"drawer-footer",children:[t.jsxs("div",{className:"drawer-subtotal-row",children:[t.jsx("span",{children:"Estimated Subtotal:"}),t.jsxs("strong",{className:"subtotal-val",children:["$",S.toFixed(2)]})]}),D?t.jsx("button",{onClick:()=>k(!1),className:"btn btn-secondary btn-full-width",children:"Back to Item List"}):t.jsxs("button",{onClick:()=>k(!0),className:"btn btn-primary btn-lg btn-full-width",children:[t.jsx(Ne,{size:18})," Request Pre-order ($",S.toFixed(2),")"]})]})]})]}),t.jsx("style",{children:`
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .drawer-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .drawer-title {
          font-size: 1.35rem;
          color: var(--color-text-main);
        }
        .drawer-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex-grow: 1;
        }
        .drawer-empty-state,
        .drawer-confirmed-state {
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: auto;
        }
        .confirmed-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .confirmed-title {
          font-size: 1.6rem;
          color: #065F46;
        }
        .confirmed-order-code {
          background: var(--color-bg-subtle);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
        }
        .confirmed-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .drawer-allergen-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          font-size: 0.8125rem;
          color: #92400E;
          margin-bottom: 1.25rem;
        }
        .alert-icon-top {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .allergen-list {
          margin-top: 0.25rem;
          padding-left: 1.2rem;
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
          width: 70px;
          height: 70px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
        }
        .drawer-item-details {
          flex-grow: 1;
        }
        .drawer-item-name {
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
          color: var(--color-text-main);
        }
        .drawer-item-price {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-primary);
          font-size: 1rem;
          display: block;
          margin-bottom: 0.35rem;
        }
        .item-personalisation-snippet {
          background: var(--color-bg-subtle);
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .snippet-msg {
          font-family: var(--font-handwriting);
          font-size: 0.9rem;
          color: var(--color-primary);
        }
        .item-glazes-snippet {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--color-text-light);
          margin-bottom: 0.5rem;
        }
        .mini-color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          border: 1px solid #CBD5E1;
        }
        .item-qty-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
        }
        .drawer-qty-control {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.15rem;
          background: #FFFFFF;
        }
        .btn-drawer-qty {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: var(--color-bg-subtle);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .drawer-qty-val {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8125rem;
          width: 28px;
          text-align: center;
        }
        .btn-drawer-delete {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: var(--radius-sm);
        }
        .btn-drawer-delete:hover {
          color: #DC2626;
        }
        .drawer-checkout-form {
          background: var(--color-bg-subtle);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          margin-top: 1.5rem;
          border: 1px solid var(--color-border-light);
        }
        .form-heading {
          font-size: 1.05rem;
          margin-bottom: 1rem;
        }
        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--color-border-light);
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .drawer-subtotal-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.1rem;
          color: var(--color-text-main);
        }
        .subtotal-val {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: var(--color-primary);
        }
        .btn-full-width {
          width: 100%;
        }
      `})]})},Cp=({isOpen:m,onClose:f})=>{const{navigate:c,openProductModal:C}=kr(),[N,S]=A.useState(""),[z,j]=A.useState("all");A.useEffect(()=>{const k=b=>{b.key==="Escape"&&f()};return m&&window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[m,f]);const w=A.useMemo(()=>{if(!N.trim())return z==="all"?ft.slice(0,6):ft.filter(b=>b.category===z).slice(0,6);const k=N.toLowerCase();return ft.filter(b=>{const M=z==="all"||b.category===z,Y=b.name.toLowerCase().includes(k)||b.description.toLowerCase().includes(k)||b.subcategory.toLowerCase().includes(k)||b.tags.some(ie=>ie.toLowerCase().includes(k));return M&&Y})},[N,z]);if(!m)return null;const T=k=>{f(),C(k)},D=()=>{f(),c(`/search?q=${encodeURIComponent(N)}`)};return t.jsxs("div",{className:"modal-backdrop search-modal-backdrop",onClick:f,children:[t.jsxs("div",{className:"modal-dialog search-dialog",onClick:k=>k.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Search catalog",children:[t.jsxs("div",{className:"search-modal-header",children:[t.jsx(Mt,{size:22,className:"search-input-icon"}),t.jsx("input",{type:"search",value:N,onChange:k=>S(k.target.value),placeholder:"Search ceramic kits, birthday cakes, cookies, souvenirs...",className:"search-modal-input",autoFocus:!0,"aria-label":"Search catalog query input"}),t.jsx("button",{onClick:f,className:"btn-icon","aria-label":"Close search",children:t.jsx(_t,{size:20})})]}),t.jsxs("div",{className:"search-categories-bar",children:[t.jsxs("button",{onClick:()=>j("all"),className:`search-filter-pill ${z==="all"?"active":""}`,children:["All Items (",ft.length,")"]}),t.jsx("button",{onClick:()=>j("colors"),className:`search-filter-pill ${z==="colors"?"active":""}`,children:"Elamel Colors"}),t.jsx("button",{onClick:()=>j("goodies"),className:`search-filter-pill ${z==="goodies"?"active":""}`,children:"Elamel Goodies"}),t.jsx("button",{onClick:()=>j("moments"),className:`search-filter-pill ${z==="moments"?"active":""}`,children:"Moments & Souvenirs"})]}),t.jsxs("div",{className:"search-results-container",children:[t.jsx("div",{className:"search-results-header",children:t.jsx("span",{className:"results-count-text",children:N?`Found ${w.length} results for "${N}"`:"Popular Suggestions & Featured Kits"})}),w.length===0?t.jsxs("div",{className:"search-no-results",children:[t.jsx(Ne,{size:36,color:"#CBD5E1"}),t.jsx("p",{children:"No products found matching your search."}),t.jsx("span",{className:"sub-hint",children:'Try searching for "plate", "cake", "mug", or "gift".'})]}):t.jsx("div",{className:"search-results-list",children:w.map(k=>t.jsxs("button",{onClick:()=>T(k.id),className:"search-result-item",children:[t.jsx("img",{src:k.image,alt:k.name,className:"search-thumb"}),t.jsxs("div",{className:"search-item-info",children:[t.jsxs("div",{className:"search-item-title-row",children:[t.jsx("strong",{className:"search-item-title",children:k.name}),t.jsx("span",{className:"search-item-cat-badge",children:k.subcategory})]}),t.jsx("p",{className:"search-item-desc",children:k.description}),t.jsxs("div",{className:"search-item-footer",children:[t.jsxs("span",{className:"search-price",children:["$",k.price.toFixed(2)]}),t.jsxs("span",{className:"search-tag-sample",children:[t.jsx(up,{size:12})," ",k.tags[0]]})]})]}),t.jsx(gi,{size:18,className:"search-arrow-icon"})]},k.id))})]}),N&&t.jsx("div",{className:"search-modal-footer",children:t.jsx("button",{onClick:D,className:"btn btn-secondary btn-full-width",children:"Open Full Search Page with Advanced Filters"})})]}),t.jsx("style",{children:`
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
      `})]})},Fp=({isOpen:m,onClose:f})=>{const{settings:c,setFontSize:C,toggleHighContrast:N,toggleReducedMotion:S,resetSettings:z}=kd(),{navigate:j}=kr();return m?t.jsxs("div",{className:"modal-backdrop",onClick:f,role:"dialog","aria-modal":"true","aria-labelledby":"a11y-modal-title",children:[t.jsxs("div",{className:"modal-dialog a11y-modal-dialog",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"a11y-modal-header",children:[t.jsxs("div",{className:"a11y-title-wrap",children:[t.jsx(on,{size:22,color:"#E1285B"}),t.jsx("h3",{id:"a11y-modal-title",className:"a11y-modal-title",children:"Accessibility & Display Controls"})]}),t.jsx("button",{onClick:f,className:"btn-icon","aria-label":"Close accessibility controls",children:t.jsx(_t,{size:20})})]}),t.jsxs("div",{className:"a11y-modal-body",children:[t.jsx("p",{className:"a11y-intro-text",children:"We are dedicated to providing a comfortable, family-friendly, and accessible experience for all visitors. Adjust your viewing preferences below:"}),t.jsxs("div",{className:"a11y-control-card",children:[t.jsxs("div",{className:"a11y-card-header",children:[t.jsx(Md,{size:20,color:"#0284C7"}),t.jsxs("div",{children:[t.jsx("strong",{className:"a11y-control-name",children:"Text Size Scaling"}),t.jsx("p",{className:"a11y-control-desc",children:"Increase font size for comfortable reading across all devices."})]})]}),t.jsxs("div",{className:"font-size-buttons-row",children:[t.jsxs("button",{onClick:()=>C("normal"),className:`font-size-choice-btn ${c.fontSize==="normal"?"active":""}`,children:[t.jsx("span",{children:"A"}),t.jsx("small",{children:"Standard (100%)"}),c.fontSize==="normal"&&t.jsx(Br,{size:14})]}),t.jsxs("button",{onClick:()=>C("large"),className:`font-size-choice-btn ${c.fontSize==="large"?"active":""}`,children:[t.jsx("span",{style:{fontSize:"1.2rem"},children:"A"}),t.jsx("small",{children:"Large (115%)"}),c.fontSize==="large"&&t.jsx(Br,{size:14})]}),t.jsxs("button",{onClick:()=>C("xlarge"),className:`font-size-choice-btn ${c.fontSize==="xlarge"?"active":""}`,children:[t.jsx("span",{style:{fontSize:"1.4rem"},children:"A"}),t.jsx("small",{children:"Extra Large (130%)"}),c.fontSize==="xlarge"&&t.jsx(Br,{size:14})]})]})]}),t.jsxs("div",{className:"a11y-control-card",children:[t.jsxs("div",{className:"a11y-card-header",children:[t.jsx(on,{size:20,color:"#F8971D"}),t.jsxs("div",{children:[t.jsx("strong",{className:"a11y-control-name",children:"High Contrast Mode"}),t.jsx("p",{className:"a11y-control-desc",children:"Sharpens borders, maximizes text contrast (14:1+), and emphasizes outlines."})]})]}),t.jsxs("button",{onClick:N,className:`a11y-toggle-btn ${c.highContrast?"active":""}`,"aria-pressed":c.highContrast,children:[t.jsx("span",{children:c.highContrast?"High Contrast Enabled":"Standard Warm Colors"}),t.jsx("span",{className:"toggle-switch-pill"})]})]}),t.jsxs("div",{className:"a11y-control-card",children:[t.jsxs("div",{className:"a11y-card-header",children:[t.jsx(Td,{size:20,color:"#10B981"}),t.jsxs("div",{children:[t.jsx("strong",{className:"a11y-control-name",children:"Reduce Motion & Animations"}),t.jsx("p",{className:"a11y-control-desc",children:"Minimizes transitions, sliding panels, and celebratory effects."})]})]}),t.jsxs("button",{onClick:S,className:`a11y-toggle-btn ${c.reducedMotion?"active":""}`,"aria-pressed":c.reducedMotion,children:[t.jsx("span",{children:c.reducedMotion?"Reduced Motion Active":"Subtle Animations Enabled"}),t.jsx("span",{className:"toggle-switch-pill"})]})]})]}),t.jsxs("div",{className:"a11y-modal-footer",children:[t.jsxs("button",{onClick:z,className:"btn btn-secondary btn-sm",children:[t.jsx(Xh,{size:14})," Reset to Defaults"]}),t.jsxs("button",{onClick:()=>{f(),j("/accessibility")},className:"btn btn-outline-primary btn-sm",children:[t.jsx(fh,{size:14})," Read Full Statement"]})]})]}),t.jsx("style",{children:`
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
      `})]}):null},Sp=()=>{const{toasts:m,removeToast:f}=fi();return m.length===0?null:t.jsxs("div",{className:"toast-container",role:"region","aria-label":"Notification alerts","aria-live":"polite",children:[m.map(c=>t.jsxs("div",{className:`toast-card toast-card-${c.type||"success"}`,role:"status",children:[t.jsxs("div",{className:"toast-icon-wrap",children:[c.type==="success"&&t.jsx(Ve,{size:20,color:"#10B981"}),c.type==="dietary"&&t.jsx(pi,{size:20,color:"#D97706"}),c.type==="info"&&t.jsx(xo,{size:20,color:"#0284C7"}),(!c.type||c.type==="warning")&&t.jsx(pi,{size:20,color:"#D97706"})]}),t.jsxs("div",{className:"toast-text-wrap",children:[t.jsx("strong",{className:"toast-title",children:c.title}),t.jsx("p",{className:"toast-message",children:c.message})]}),t.jsx("button",{onClick:()=>f(c.id),className:"toast-close-btn","aria-label":"Dismiss notification",children:t.jsx(_t,{size:15})})]},c.id)),t.jsx("style",{children:`
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
      `})]})},Jn=({product:m})=>{const{addToCart:f}=Tt(),{openProductModal:c,navigate:C}=kr(),N=m.category==="colors",S=m.category==="goodies",z=m.category==="moments",j=N?m:null,w=S?m:null,T=z?m:null;return t.jsxs("article",{className:"product-card","aria-labelledby":`prod-title-${m.id}`,children:[t.jsxs("div",{className:"product-card-media",children:[t.jsx("img",{src:m.image,alt:`${m.name} - ${m.description}`,className:"product-card-img",loading:"lazy"}),t.jsx("div",{className:"product-card-badge-top",children:m.isFeatured&&t.jsxs("span",{className:"badge badge-primary",children:[t.jsx(Ne,{size:11})," Featured"]})}),t.jsx("div",{className:"product-card-overlay",children:t.jsxs("button",{onClick:()=>c(m.id),className:"btn btn-secondary btn-sm overlay-btn","aria-label":`View full details for ${m.name}`,children:[t.jsx(on,{size:15})," Quick View"]})})]}),t.jsxs("div",{className:"product-card-body",children:[t.jsxs("div",{className:"product-card-meta",children:[t.jsx("span",{className:"product-subcategory",children:m.subcategory}),t.jsxs("div",{className:"product-rating","aria-label":`${m.rating} stars out of 5 from ${m.reviewCount} reviews`,children:[t.jsx(ln,{size:13,fill:"#F8971D",color:"#F8971D"}),t.jsx("span",{children:m.rating.toFixed(1)}),t.jsxs("span",{className:"review-count",children:["(",m.reviewCount,")"]})]})]}),t.jsx("h3",{id:`prod-title-${m.id}`,className:"product-card-title",children:t.jsx("button",{onClick:()=>c(m.id),className:"product-title-btn",children:m.name})}),t.jsx("p",{className:"product-card-desc",children:m.description}),t.jsxs("div",{className:"product-attribute-row",children:[j&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"attribute-pill",children:[t.jsx(Ge,{size:13,color:"#10B981"})," ",j.recommendedAge]}),t.jsxs("span",{className:"attribute-pill",children:[j.glazeCount," Glaze Colors"]})]}),w&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"attribute-pill",children:["🍽️ ",w.portionSize.split("(")[0]]}),w.dietaryTags.slice(0,2).map(D=>t.jsx("span",{className:"badge badge-diet",children:D},D))]}),T&&t.jsxs("span",{className:"attribute-pill",children:[t.jsx(mi,{size:13,color:"#E1285B"})," Personalised Inscription"]})]}),t.jsxs("div",{className:"product-card-footer",children:[t.jsxs("div",{className:"product-price-wrap",children:[t.jsx("span",{className:"price-prefix",children:z?"from ":""}),t.jsxs("span",{className:"product-price",children:["$",m.price.toFixed(2)]})]}),t.jsx("div",{className:"product-actions-group",children:z?t.jsx("button",{onClick:()=>C("/moments-souvenirs"),className:"btn btn-primary btn-sm","aria-label":`Personalize ${m.name}`,children:"Personalize"}):t.jsxs("button",{onClick:()=>f(m,1),className:"btn btn-primary btn-sm","aria-label":`Add ${m.name} to Treat Box`,children:[t.jsx(Pt,{size:15})," Add to Box"]})})]})]}),t.jsx("style",{children:`
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
        .price-prefix {
          font-size: 0.8125rem;
          color: var(--color-text-light);
        }
        .product-actions-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `})]})},gd=()=>{const{navigate:m}=kr(),f=ft.filter(w=>w.isFeatured),[c,C]=A.useState(0),[N,S]=A.useState(!0);A.useEffect(()=>{if(!N)return;const w=setInterval(()=>{C(T=>(T+1)%f.length)},4500);return()=>clearInterval(w)},[N,f.length]);const z=()=>{C(w=>(w-1+f.length)%f.length)},j=()=>{C(w=>(w+1)%f.length)};return t.jsxs("div",{className:"home-page",children:[t.jsxs("section",{className:"hero-section","aria-label":"Welcome Hero",children:[t.jsxs("div",{className:"hero-background-decor","aria-hidden":"true",children:[t.jsx("div",{className:"hero-blob hero-blob-1"}),t.jsx("div",{className:"hero-blob hero-blob-2"}),t.jsx("div",{className:"hero-blob hero-blob-3"})]}),t.jsxs("div",{className:"container hero-container",children:[t.jsxs("div",{className:"hero-text-col",children:[t.jsxs("div",{className:"hero-badge",children:[t.jsx(Ne,{size:16,className:"text-primary"}),t.jsx("span",{children:"Safe • Creative • Delicious"})]}),t.jsx("h1",{className:"hero-main-title",children:"Colors, treats, and moments for every family."}),t.jsxs("p",{className:"hero-tagline",children:[t.jsx("strong",{children:"elamel"})," brings families and couples together through certified food-safe ceramic painting kits, artisanal bakery treats, and treasured personalized keepsakes."]}),t.jsxs("div",{className:"hero-actions-row",children:[t.jsxs("button",{onClick:()=>m("/colors"),className:"btn btn-primary btn-lg",children:[t.jsx(Et,{size:20})," Explore Elamel Colors"]}),t.jsxs("button",{onClick:()=>m("/goodies"),className:"btn btn-secondary btn-lg",children:[t.jsx(po,{size:20})," Explore Elamel Goodies"]})]}),t.jsx("div",{className:"hero-secondary-link-wrap",children:t.jsxs("button",{onClick:()=>m("/moments-souvenirs"),className:"hero-sub-link",children:[t.jsx("span",{children:"Discover Personalised Moments & Souvenirs"}),t.jsx(ui,{size:16})]})}),t.jsxs("div",{className:"hero-trust-row",children:[t.jsxs("div",{className:"trust-item",children:[t.jsx(Ge,{size:18,color:"#10B981"}),t.jsx("span",{children:"100% Non-Toxic Glazes"})]}),t.jsxs("div",{className:"trust-item",children:[t.jsx(Ve,{size:18,color:"#10B981"}),t.jsx("span",{children:"Peanut-Free Bakery"})]}),t.jsxs("div",{className:"trust-item",children:[t.jsx(jr,{size:18,color:"#E1285B"}),t.jsx("span",{children:"Made for All Ages"})]})]})]}),t.jsx("div",{className:"hero-media-col",children:t.jsxs("div",{className:"hero-image-card",children:[t.jsx("img",{src:"./images/hero_family.jpg",alt:"Joyful family laughing and painting ceramic pottery together around a table with sweet cookies",className:"hero-main-img"}),t.jsxs("div",{className:"hero-floating-card",children:[t.jsx("div",{className:"floating-card-icon",children:t.jsx(Et,{size:22,color:"#FFFFFF"})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Weekend Craft Morning"}),t.jsx("p",{children:"Non-toxic ceramics & sweet treats delivered to your door"})]})]})]})})]})]}),t.jsx("section",{className:"section categories-highlight-section","aria-label":"Our Three Subbrands",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," The Elamel Experience"]}),t.jsx("h2",{className:"section-title",children:"Three Worlds of Family Joy"}),t.jsx("p",{className:"section-subtitle",children:"Whether you want to paint tableware together, share fresh celebratory bakery treats, or create an heirloom family gift, we have something special for you."})]}),t.jsxs("div",{className:"categories-grid-3",children:[t.jsxs("div",{className:"category-feature-card category-colors-card",children:[t.jsxs("div",{className:"cat-card-media",children:[t.jsx("img",{src:"./images/ceramic_kits.jpg",alt:"Elamel Colors ceramic craft kits with pastel glazes and brushes",className:"cat-card-img"}),t.jsx("span",{className:"cat-pill pill-rose",children:"Elamel Colors"})]}),t.jsxs("div",{className:"cat-card-body",children:[t.jsx("h3",{className:"cat-card-title",children:"Ceramic Painting & Craft Kits"}),t.jsx("p",{className:"cat-card-text",children:"Complete DIY kits featuring smooth bisque porcelain tableware, vases, and child-safe animal pottery with certified lead-free mineral glazes."}),t.jsxs("ul",{className:"cat-card-features",children:[t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Dinner plates, bowls & mugs"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Easy home oven-cure glazes"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Safe for toddlers and beginner artists"]})]}),t.jsxs("button",{onClick:()=>m("/colors"),className:"btn btn-primary btn-full-width",children:[t.jsx(Et,{size:18})," Browse Colors Kits"]})]})]}),t.jsxs("div",{className:"category-feature-card category-goodies-card",children:[t.jsxs("div",{className:"cat-card-media",children:[t.jsx("img",{src:"./images/goodies_assortment.jpg",alt:"Elamel Goodies freshly baked cakes and rainbow swirl cookies",className:"cat-card-img"}),t.jsx("span",{className:"cat-pill pill-orange",children:"Elamel Goodies"})]}),t.jsxs("div",{className:"cat-card-body",children:[t.jsx("h3",{className:"cat-card-title",children:"Artisanal Cakes & Cookies"}),t.jsx("p",{className:"cat-card-text",children:"Delicate vanilla berry sponge cakes, hand-piped rainbow sugar cookies, and wholesome whole-grain honey animal biscuits with clear dietary labeling."}),t.jsxs("ul",{className:"cat-card-features",children:[t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Low-sugar family formulations"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Gluten-free & nut-free options"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Custom Treat Box creator available"]})]}),t.jsxs("button",{onClick:()=>m("/goodies"),className:"btn btn-primary btn-full-width",children:[t.jsx(po,{size:18})," Browse Goodies Treats"]})]})]}),t.jsxs("div",{className:"category-feature-card category-moments-card",children:[t.jsxs("div",{className:"cat-card-media",children:[t.jsx("img",{src:"./images/moments_gifts.jpg",alt:"Personalized family tree plate and custom couples mugs",className:"cat-card-img"}),t.jsx("span",{className:"cat-pill pill-cyan",children:"Moments & Souvenirs"})]}),t.jsxs("div",{className:"cat-card-body",children:[t.jsx("h3",{className:"cat-card-title",children:"Personalised Family Keepsakes"}),t.jsx("p",{className:"cat-card-text",children:"Custom hand-lettered heirloom plates, message cookie crates, and couple anniversary mugs with live interactive studio preview before ordering."}),t.jsxs("ul",{className:"cat-card-features",children:[t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Family names & special dates"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Live real-time studio preview tool"]}),t.jsxs("li",{children:[t.jsx(Ve,{size:15,color:"#10B981"})," Complimentary luxury gift wrap"]})]}),t.jsxs("button",{onClick:()=>m("/moments-souvenirs"),className:"btn btn-primary btn-full-width",children:[t.jsx(mi,{size:18})," Create Keepsake"]})]})]})]})]})}),t.jsx("section",{className:"section why-love-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"why-love-banner",children:[t.jsxs("div",{className:"section-title-wrap text-center-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(jr,{size:14})," Our Core Promise"]}),t.jsx("h2",{className:"section-title",children:"Why Families Love Elamel"}),t.jsx("p",{className:"section-subtitle",children:"Designed from the ground up for safety, emotional connection, and memorable family experiences."})]}),t.jsxs("div",{className:"why-love-grid",children:[t.jsxs("div",{className:"why-card",children:[t.jsx("div",{className:"why-icon-circle color-rose",children:t.jsx(Ge,{size:28,color:"#E1285B"})}),t.jsx("h4",{className:"why-card-title",children:"100% Non-Toxic & Food Safe"}),t.jsx("p",{className:"why-card-desc",children:"All ceramic glazes are strictly non-toxic, water-based, and lead-free. Tableware can be safely used for daily breakfasts and dinners."})]}),t.jsxs("div",{className:"why-card",children:[t.jsx("div",{className:"why-icon-circle color-orange",children:t.jsx(xh,{size:28,color:"#F8971D"})}),t.jsx("h4",{className:"why-card-title",children:"Dedicated Allergen Care"}),t.jsx("p",{className:"why-card-desc",children:"Our bakery treats are made in segregated zones with prominent allergen tags (Gluten-Free, Nut-Free) and wholesome unbleached ingredients."})]}),t.jsxs("div",{className:"why-card",children:[t.jsx("div",{className:"why-icon-circle color-green",children:t.jsx(_d,{size:28,color:"#10B981"})}),t.jsx("h4",{className:"why-card-title",children:"Bonding for All Generations"}),t.jsx("p",{className:"why-card-desc",children:"From toddler handprints and creative kids kits to couples’ anniversary mugs and grandparent platters, everyone participates with joy."})]}),t.jsxs("div",{className:"why-card",children:[t.jsx("div",{className:"why-icon-circle color-cyan",children:t.jsx(Ne,{size:28,color:"#0284C7"})}),t.jsx("h4",{className:"why-card-title",children:"Three-Click Access & Transparency"}),t.jsx("p",{className:"why-card-desc",children:"No hidden fees, no dark patterns. Fast browsing, easy pre-order inquiries, and immediate friendly human support."})]})]})]})})}),t.jsx("section",{className:"section featured-showcase-section","aria-label":"Featured Products Carousel",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"carousel-section-header",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Family Favorites"]}),t.jsx("h2",{className:"section-title",children:"Featured Kits & Celebration Treats"})]}),t.jsxs("div",{className:"carousel-controls-toolbar",role:"toolbar","aria-label":"Carousel slide controls",children:[t.jsx("button",{onClick:()=>S(!N),className:"btn-icon carousel-ctrl-btn",title:N?"Pause carousel auto-rotation":"Play carousel auto-rotation","aria-label":N?"Pause auto-rotation":"Play auto-rotation",children:N?t.jsx(Hh,{size:17}):t.jsx(Vh,{size:17})}),t.jsx("button",{onClick:z,className:"btn-icon carousel-ctrl-btn","aria-label":"Previous featured item",children:t.jsx(lh,{size:20})}),t.jsx("button",{onClick:j,className:"btn-icon carousel-ctrl-btn","aria-label":"Next featured item",children:t.jsx(gi,{size:20})})]})]}),t.jsxs("div",{className:"featured-carousel-display",children:[t.jsx("div",{className:"carousel-track",children:f.map((w,T)=>T===c?t.jsx("div",{className:"carousel-slide-active",role:"group","aria-roledescription":"slide","aria-label":`${T+1} of ${f.length}`,children:t.jsxs("div",{className:"carousel-slide-grid",children:[t.jsxs("div",{className:"carousel-slide-img-wrap",children:[t.jsx("img",{src:w.image,alt:w.name,className:"carousel-slide-img"}),t.jsx("span",{className:"badge badge-primary carousel-badge",children:w.subcategory})]}),t.jsxs("div",{className:"carousel-slide-info",children:[t.jsxs("div",{className:"carousel-meta-row",children:[t.jsxs("span",{className:"product-rating",children:[t.jsx(ln,{size:15,fill:"#F8971D",color:"#F8971D"}),t.jsx("strong",{children:w.rating.toFixed(1)})," (",w.reviewCount," reviews)"]}),t.jsxs("span",{className:"carousel-category-tag",children:["elamel • ",w.category.toUpperCase()]})]}),t.jsx("h3",{className:"carousel-item-title",children:w.name}),t.jsx("p",{className:"carousel-item-desc",children:w.longDescription}),t.jsxs("div",{className:"carousel-price-action-row",children:[t.jsxs("span",{className:"carousel-price",children:["$",w.price.toFixed(2)]}),t.jsxs("button",{onClick:()=>{w.category==="moments"?m("/moments-souvenirs"):m(`/${w.category}`)},className:"btn btn-primary btn-lg",children:["Explore This Item ",t.jsx(ui,{size:18})]})]})]})]})},w.id):null)}),t.jsx("div",{className:"carousel-dots-nav",children:f.map((w,T)=>t.jsx("button",{onClick:()=>C(T),className:`carousel-dot ${T===c?"active":""}`,"aria-label":`Go to slide ${T+1}`},T))})]}),t.jsxs("div",{className:"grid-highlights-wrap",children:[t.jsx("h3",{className:"sub-grid-heading",children:"More Family Highlights"}),t.jsx("div",{className:"product-grid",children:ft.slice(0,3).map(w=>t.jsx(Jn,{product:w},w.id))})]})]})}),t.jsx("section",{className:"section cta-banner-section",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"cta-banner-card",children:t.jsxs("div",{className:"cta-content",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Ready for Family Joy?"]}),t.jsx("h2",{className:"cta-title",children:"Start Crafting & Tasting Together Today"}),t.jsx("p",{className:"cta-subtitle",children:"Choose a ceramic color kit, select gourmet cookies, or personalize a custom family keepsake in just 3 clicks."}),t.jsxs("div",{className:"cta-buttons-row",children:[t.jsxs("button",{onClick:()=>m("/colors"),className:"btn btn-primary btn-lg",children:[t.jsx(Et,{size:18})," Pick a Ceramic Kit"]}),t.jsxs("button",{onClick:()=>m("/moments-souvenirs"),className:"btn btn-secondary btn-lg",children:[t.jsx(mi,{size:18})," Design a Keepsake"]})]})]})})})}),t.jsx("style",{children:`
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
          padding: 4rem 3rem;
          box-shadow: var(--shadow-md);
        }
        .text-center-wrap {
          text-align: center;
          margin: 0 auto 3rem auto;
        }
        .why-love-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .why-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .why-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .color-rose { background: var(--color-primary-light); }
        .color-orange { background: var(--color-orange-light); }
        .color-green { background: var(--color-green-light); }
        .color-cyan { background: var(--color-cyan-light); }
        .why-card-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
        }
        .why-card-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
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

        @media (max-width: 992px) {
          .hero-container { grid-template-columns: 1fr; }
          .hero-main-title { font-size: 2.6rem; }
          .categories-grid-3 { grid-template-columns: 1fr; }
          .why-love-grid { grid-template-columns: 1fr 1fr; }
          .carousel-slide-grid { grid-template-columns: 1fr; }
          .carousel-slide-info { padding: 1.75rem; }
        }
        @media (max-width: 640px) {
          .hero-main-title { font-size: 2.1rem; }
          .why-love-grid { grid-template-columns: 1fr; }
          .cta-title { font-size: 1.85rem; }
        }
      `})]})},Ir=()=>{const{breadcrumbs:m,navigate:f}=kr();return m.length<=1?null:t.jsxs("nav",{className:"breadcrumbs-nav","aria-label":"Breadcrumbs navigation",children:[t.jsx("div",{className:"container",children:t.jsx("ol",{className:"breadcrumbs-list",children:m.map((c,C)=>{const N=C===m.length-1;return t.jsxs("li",{className:"breadcrumbs-item",children:[C===0?t.jsxs("button",{onClick:()=>f(c.href),className:"breadcrumb-home-btn","aria-label":"Return to Home",children:[t.jsx(Fd,{size:15}),t.jsx("span",{children:"Home"})]}):N?t.jsx("span",{className:"breadcrumbs-current","aria-current":"page",children:c.label}):t.jsx("button",{onClick:()=>f(c.href),className:"breadcrumb-btn",children:c.label}),!N&&t.jsx(gi,{size:14,className:"breadcrumb-separator","aria-hidden":"true"})]},c.href)})})}),t.jsx("style",{children:`
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
      `})]})},zp=()=>{const{addToCart:m}=Tt(),f=[{id:"plate",name:"Botanical Dinner Plate",basePrice:34.5,shape:"circle",prod:sn[0]},{id:"mug",name:"Cozy Morning Mug",basePrice:29,shape:"mug",prod:sn[1]},{id:"vase",name:"Spring Blossom Vase",basePrice:38,shape:"vase",prod:sn[2]},{id:"animal",name:"Little Explorer Bunny",basePrice:26.5,shape:"bunny",prod:sn[3]}],[c,C]=A.useState(f[0]),N=[{name:"Petal Rose",hex:"#F472B6",desc:"Soft warm floral pink"},{name:"Sunset Peach",hex:"#FB923C",desc:"Sunny warm apricot"},{name:"Buttercup Yellow",hex:"#FACC15",desc:"Joyful bright yellow"},{name:"Mint Meadow",hex:"#34D399",desc:"Gentle leafy green"},{name:"Sky Cyan",hex:"#38BDF8",desc:"Crisp morning blue"},{name:"Lavender Frost",hex:"#C084FC",desc:"Serene soft purple"},{name:"Earthy Clay",hex:"#A8A29E",desc:"Warm natural neutral"}],[S,z]=A.useState(N[0]),[j,w]=A.useState({base:"#FFFFFF",accent1:"#F472B6",accent2:"#38BDF8",rim:"#FB923C"}),T=b=>{w(M=>({...M,[b]:S.hex}))},D=()=>{w({base:"#FFFFFF",accent1:"#F472B6",accent2:"#38BDF8",rim:"#FB923C"})},k=()=>{try{Zn({particleCount:50,spread:50,origin:{y:.65}})}catch{}m(c.prod,1,void 0,Object.values(j))};return t.jsxs("div",{className:"glaze-studio-card",id:"glaze-studio",children:[t.jsxs("div",{className:"glaze-studio-header",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Et,{size:14})," Interactive Ceramic Studio"]}),t.jsx("h3",{className:"glaze-studio-title",children:"Paint & Test Your Glaze Palette"}),t.jsx("p",{className:"glaze-studio-sub",children:"Select a ceramic piece, pick your favorite non-toxic Elamel glazes, and click on sections to preview your custom color harmony!"})]}),t.jsxs("div",{className:"glaze-studio-grid",children:[t.jsxs("div",{className:"glaze-controls",children:[t.jsxs("div",{className:"control-group",children:[t.jsx("label",{className:"control-label",children:"1. Choose Pottery Bisque:"}),t.jsx("div",{className:"pottery-model-chips",children:f.map(b=>t.jsxs("button",{type:"button",onClick:()=>C(b),className:`pottery-chip-btn ${c.id===b.id?"active":""}`,children:[b.name," ($",b.basePrice.toFixed(2),")"]},b.id))})]}),t.jsxs("div",{className:"control-group",children:[t.jsxs("label",{className:"control-label",children:["2. Select Active Brush Glaze: ",t.jsx("strong",{style:{color:S.hex},children:S.name})]}),t.jsx("div",{className:"glaze-swatches-grid",children:N.map(b=>t.jsxs("button",{type:"button",onClick:()=>z(b),className:`glaze-swatch-btn ${S.name===b.name?"active":""}`,title:`${b.name} - ${b.desc}`,children:[t.jsx("span",{className:"swatch-circle",style:{backgroundColor:b.hex},children:S.name===b.name&&t.jsx(Br,{size:14,color:"#FFFFFF"})}),t.jsx("span",{className:"swatch-name",children:b.name})]},b.name))})]}),t.jsxs("div",{className:"studio-tips-box",children:[t.jsx(Ne,{size:16,color:"#F8971D"}),t.jsx("span",{children:"Click on the sections of the pottery illustration to apply your selected glaze!"})]}),t.jsxs("div",{className:"controls-footer-actions",children:[t.jsxs("button",{type:"button",onClick:D,className:"btn btn-secondary btn-sm",children:[t.jsx(Qh,{size:14})," Reset Palette"]}),t.jsxs("button",{type:"button",onClick:k,className:"btn btn-primary",children:[t.jsx(Pt,{size:16})," Add This Custom Kit to Box ($",c.basePrice.toFixed(2),")"]})]})]}),t.jsxs("div",{className:"glaze-visual-stage",children:[t.jsxs("div",{className:"interactive-pottery-wrapper",children:[c.id==="plate"&&t.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[t.jsx("circle",{cx:"150",cy:"150",r:"135",fill:j.rim,stroke:"#E2DDD5",strokeWidth:"4",onClick:()=>T("rim"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"150",r:"105",fill:j.accent1,stroke:"#E2DDD5",strokeWidth:"2",onClick:()=>T("accent1"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"150",r:"70",fill:j.base,stroke:"#E2DDD5",strokeWidth:"2",onClick:()=>T("base"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"150",r:"25",fill:j.accent2,onClick:()=>T("accent2"),className:"clickable-zone"}),t.jsx("text",{x:"150",y:"155",textAnchor:"middle",fontSize:"12",fill:"#0F172A",pointerEvents:"none",fontWeight:"600",children:"Click Zones"})]}),c.id==="mug"&&t.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[t.jsx("path",{d:"M210 90 C265 90 265 200 210 200",fill:"none",stroke:j.accent2,strokeWidth:"22",strokeLinecap:"round",onClick:()=>T("accent2"),className:"clickable-zone"}),t.jsx("rect",{x:"70",y:"70",width:"140",height:"170",rx:"24",fill:j.base,stroke:"#CBD5E1",strokeWidth:"3",onClick:()=>T("base"),className:"clickable-zone"}),t.jsx("rect",{x:"70",y:"70",width:"140",height:"35",rx:"10",fill:j.rim,onClick:()=>T("rim"),className:"clickable-zone"}),t.jsx("rect",{x:"70",y:"135",width:"140",height:"45",fill:j.accent1,onClick:()=>T("accent1"),className:"clickable-zone"}),t.jsx("text",{x:"140",y:"162",textAnchor:"middle",fontSize:"13",fill:"#FFFFFF",pointerEvents:"none",fontWeight:"700",children:"Custom Swirl"})]}),c.id==="vase"&&t.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[t.jsx("path",{d:"M110 50 L190 50 L175 110 L125 110 Z",fill:j.rim,onClick:()=>T("rim"),className:"clickable-zone"}),t.jsx("ellipse",{cx:"150",cy:"190",rx:"75",ry:"75",fill:j.base,onClick:()=>T("base"),className:"clickable-zone"}),t.jsx("ellipse",{cx:"150",cy:"200",rx:"55",ry:"45",fill:j.accent1,onClick:()=>T("accent1"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"185",r:"20",fill:j.accent2,onClick:()=>T("accent2"),className:"clickable-zone"})]}),c.id==="animal"&&t.jsxs("svg",{viewBox:"0 0 300 300",className:"interactive-pottery-svg",children:[t.jsx("ellipse",{cx:"115",cy:"80",rx:"16",ry:"45",fill:j.rim,onClick:()=>T("rim"),className:"clickable-zone"}),t.jsx("ellipse",{cx:"185",cy:"80",rx:"16",ry:"45",fill:j.rim,onClick:()=>T("rim"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"200",r:"65",fill:j.base,onClick:()=>T("base"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"140",r:"45",fill:j.accent1,onClick:()=>T("accent1"),className:"clickable-zone"}),t.jsx("circle",{cx:"150",cy:"150",r:"14",fill:j.accent2,onClick:()=>T("accent2"),className:"clickable-zone"})]})]}),t.jsx("span",{className:"visual-stage-caption",children:"Interactive 2D Pottery Simulator"})]})]}),t.jsx("style",{children:`
        .glaze-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
          margin: 3.5rem 0;
        }
        .glaze-studio-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .glaze-studio-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .glaze-studio-sub {
          color: var(--color-text-muted);
          font-size: 1rem;
        }
        .glaze-studio-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .control-group {
          margin-bottom: 1.5rem;
        }
        .control-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .pottery-model-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pottery-chip-btn {
          padding: 0.6rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
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
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 700;
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
          padding: 0.45rem 0.65rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .glaze-swatch-btn:hover {
          border-color: var(--color-primary);
        }
        .glaze-swatch-btn.active {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px var(--color-primary);
        }
        .swatch-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }
        .swatch-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .studio-tips-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--color-orange-light);
          border: 1px solid #FDE68A;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          color: #92400E;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .controls-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .glaze-visual-stage {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px dashed rgba(0, 0, 0, 0.08);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03);
        }
        .interactive-pottery-wrapper {
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .interactive-pottery-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.08));
        }
        .clickable-zone {
          cursor: pointer;
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }
        .clickable-zone:hover {
          opacity: 0.85;
          stroke: #E1285B;
          stroke-width: 3px;
        }
        .visual-stage-caption {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-light);
          margin-top: 1rem;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .glaze-studio-grid { grid-template-columns: 1fr; }
          .glaze-studio-card { padding: 1.75rem; }
        }
      `})]})},Ep=()=>{const[m,f]=A.useState("All"),[c,C]=A.useState(""),[N,S]=A.useState("featured"),z=["All","Tableware Colors","Kids & Family Kits","Gift Sets","Decorative Pieces"],j=A.useMemo(()=>sn.filter(w=>{const T=m==="All"||w.subcategory===m,D=w.name.toLowerCase().includes(c.toLowerCase())||w.description.toLowerCase().includes(c.toLowerCase());return T&&D}).sort((w,T)=>N==="price-asc"?w.price-T.price:N==="price-desc"?T.price-w.price:N==="rating"?T.rating-w.rating:(T.isFeatured?1:0)-(w.isFeatured?1:0)),[m,c,N]);return t.jsxs("div",{className:"colors-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Et,{size:14})," elamel colors"]}),t.jsx("h1",{className:"cat-page-title",children:"Ceramic Painting & Family Craft Kits"}),t.jsx("p",{className:"cat-page-lead",children:"Transform smooth white bisque tableware and decorative ceramics into enduring family keepsakes. All kits include water-based, lead-free non-toxic glazes, artist brushes, and step-by-step guides."}),t.jsxs("div",{className:"cat-hero-badges-row",children:[t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(Ge,{size:16,color:"#10B981"}),t.jsx("span",{children:"100% Lead-Free & Non-Toxic"})]}),t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(Ne,{size:16,color:"#F8971D"}),t.jsx("span",{children:"Food-Safe After Home Oven Cure"})]}),t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(xo,{size:16,color:"#0284C7"}),t.jsx("span",{children:"Safe for Ages 3 to 100"})]})]})]})})}),t.jsx("section",{className:"section catalog-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"catalog-toolbar",children:[t.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Ceramic subcategories",children:z.map(w=>t.jsx("button",{role:"tab","aria-selected":m===w,onClick:()=>f(w),className:`filter-tab-btn ${m===w?"active":""}`,children:w},w))}),t.jsxs("div",{className:"toolbar-search-sort",children:[t.jsxs("div",{className:"search-input-wrapper",children:[t.jsx(Mt,{size:16,className:"search-field-icon"}),t.jsx("input",{type:"text",value:c,onChange:w=>C(w.target.value),placeholder:"Filter kits...",className:"filter-search-input","aria-label":"Filter ceramic kits"})]}),t.jsxs("select",{value:N,onChange:w=>S(w.target.value),className:"sort-dropdown","aria-label":"Sort products by",children:[t.jsx("option",{value:"featured",children:"Featured First"}),t.jsx("option",{value:"price-asc",children:"Price: Low to High"}),t.jsx("option",{value:"price-desc",children:"Price: High to Low"}),t.jsx("option",{value:"rating",children:"Highest Rated"})]})]})]}),t.jsx("div",{className:"results-summary-row",children:t.jsxs("span",{className:"results-count",children:["Showing ",t.jsx("strong",{children:j.length})," Ceramic Kit",j.length===1?"":"s"]})}),j.length===0?t.jsxs("div",{className:"no-results-box",children:[t.jsx("p",{children:"No ceramic kits found matching your current filter."}),t.jsx("button",{onClick:()=>{f("All"),C("")},className:"btn btn-secondary btn-sm",children:"Clear Filters"})]}):t.jsx("div",{className:"product-grid",children:j.map(w=>t.jsx(Jn,{product:w},w.id))}),t.jsx(zp,{}),t.jsxs("div",{className:"ceramic-safety-guide-card",children:[t.jsxs("div",{className:"safety-guide-header",children:[t.jsx(Ge,{size:26,color:"#10B981"}),t.jsxs("div",{children:[t.jsx("h3",{className:"safety-guide-title",children:"Ceramic Craft Safety & Care Guidelines"}),t.jsx("p",{className:"safety-guide-sub",children:"We prioritize child safety, hygiene, and lasting family memories."})]})]}),t.jsxs("div",{className:"safety-guide-grid",children:[t.jsxs("div",{className:"guide-point",children:[t.jsx("strong",{children:"Non-Toxic Certification"}),t.jsx("p",{children:"All mineral glazes comply with international toy and craft safety standards (EN71-3, ASTM D-4236). Free of lead, cadmium, and volatile organic compounds."})]}),t.jsxs("div",{className:"guide-point",children:[t.jsx("strong",{children:"Simple Home Oven Curing"}),t.jsx("p",{children:"Bake your painted pottery in your regular home oven at 150°C (300°F) for 35 minutes to permanently bond the vibrant colors."})]}),t.jsxs("div",{className:"guide-point",children:[t.jsx("strong",{children:"Everyday Dining & Care"}),t.jsx("p",{children:"Once cured, dinnerware items are water-resistant and food-safe. Hand-washing with a soft sponge preserves the luster for generations."})]}),t.jsxs("div",{className:"guide-point",children:[t.jsx("strong",{children:"Recommended Age Guidance"}),t.jsx("p",{children:"Kids under 6 should be supervised around ceramicware. For toddlers, we recommend our sturdy thick-walled animal figurine kits."})]})]})]})]})}),t.jsx("style",{children:`
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
      `})]})},Pp=()=>{const{addToCart:m}=Tt(),[f,c]=A.useState(4),[C,N]=A.useState([]),S=f===4?22:32,z=C.length>=f,j=b=>{C.length<f&&N(M=>[...M,b])},w=b=>{N(M=>M.filter((Y,ie)=>ie!==b))},T=()=>{N([])},D=()=>{if(!z)return;try{Zn({particleCount:70,spread:60,origin:{y:.7}})}catch{}const b={id:`custom-box-${Date.now()}`,name:`Custom Family Treat Box (${f} Assorted Treats)`,category:"goodies",subcategory:"Occasion Treats",price:S,description:`Hand-selected assortment of ${f} gourmet treats: ${C.map(M=>M.name).join(", ")}.`,longDescription:`Your personalized family treat box packed fresh in a presentation gift box with parchment lining. Contains: ${C.map(M=>M.name).join(" • ")}.`,image:"./images/goodies_assortment.jpg",rating:5,reviewCount:1,tags:["Custom Assortment","Gift Box","Family Sharing"],flavorProfile:"Assorted custom gourmet bakery selection",portionSize:`Box of ${f} treats (Serves ${f}–${f*2})`,servings:f*2,dietaryTags:["Vegetarian"],ingredients:["Mixed artisanal pastry ingredients according to chosen treats"],allergenWarning:"Contains items with Gluten, Dairy, and Eggs. Check individual treat labels.",storageInstructions:"Keep in box at room temperature or chilled according to treat guidelines.",servingTemperature:"Best enjoyed fresh within 3 days."};m(b,1,void 0,void 0,C),N([])},k=Array.from(new Set(C.flatMap(b=>b.dietaryTags)));return t.jsxs("div",{className:"treat-box-builder-card",id:"treat-box-builder",children:[t.jsxs("div",{className:"builder-header",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(fo,{size:14})," Mix & Match Studio"]}),t.jsx("h3",{className:"builder-title",children:"Build a Custom Family Treat Box"}),t.jsx("p",{className:"builder-sub",children:"Choose your box size and pick your family’s favorite cakes, biscuits, and pastries!"})]}),t.jsxs("div",{className:"size-selector-row",children:[t.jsxs("button",{type:"button",onClick:()=>{c(4),C.length>4&&N(C.slice(0,4))},className:`size-btn ${f===4?"active":""}`,"aria-pressed":f===4,children:[t.jsxs("div",{className:"size-btn-head",children:[t.jsx("strong",{children:"4-Piece Family Sampler"}),f===4&&t.jsx(Br,{size:16,className:"size-check-icon"})]}),t.jsx("span",{className:"size-btn-price",children:"$22.00"}),t.jsx("span",{className:"size-btn-desc",children:"Ideal for small family afternoon tea"})]}),t.jsxs("button",{type:"button",onClick:()=>c(6),className:`size-btn ${f===6?"active":""}`,"aria-pressed":f===6,children:[t.jsxs("div",{className:"size-btn-head",children:[t.jsx("strong",{children:"6-Piece Celebration Crate"}),f===6&&t.jsx(Br,{size:16,className:"size-check-icon"})]}),t.jsx("span",{className:"size-btn-price",children:"$32.00"}),t.jsx("span",{className:"size-btn-desc",children:"Perfect for weekend birthday gatherings"})]})]}),t.jsxs("div",{className:"builder-grid",children:[t.jsxs("div",{className:"available-treats-col",children:[t.jsxs("div",{className:"col-header-row",children:[t.jsx("h4",{className:"column-title",children:"1. Select Treats to Add:"}),t.jsx("span",{className:"col-counter-hint",children:f-C.length===0?"Box is full!":`Need ${f-C.length} more`})]}),t.jsx("div",{className:"treats-picker-grid",children:wo.map(b=>t.jsxs("div",{className:"treat-picker-item",children:[t.jsx("img",{src:b.image,alt:b.name,className:"treat-picker-thumb"}),t.jsxs("div",{className:"treat-picker-info",children:[t.jsx("strong",{className:"treat-picker-name",children:b.name}),t.jsx("div",{className:"treat-picker-diet",children:b.dietaryTags.map((M,Y)=>t.jsx("span",{className:"treat-mini-tag",children:M},Y))})]}),t.jsxs("button",{type:"button",onClick:()=>j(b),disabled:z,className:"btn btn-secondary btn-sm picker-add-btn","aria-label":`Add ${b.name} to box`,children:[t.jsx(Pt,{size:14})," Add"]})]},b.id))})]}),t.jsxs("div",{className:"box-slots-col",children:[t.jsxs("div",{className:"box-slots-header",children:[t.jsxs("h4",{className:"column-title",children:["2. Your Box Slots (",C.length,"/",f,")"]}),C.length>0&&t.jsx("button",{type:"button",onClick:T,className:"btn-clear-box","aria-label":"Clear all chosen treats from box",children:"Clear All"})]}),t.jsx("div",{className:`slots-container grid-${f}`,children:Array.from({length:f}).map((b,M)=>{const Y=C[M];return t.jsx("div",{className:`box-slot ${Y?"filled":"empty"}`,children:Y?t.jsxs("div",{className:"slot-filled-content",children:[t.jsx("img",{src:Y.image,alt:Y.name,className:"slot-img"}),t.jsxs("div",{className:"slot-info",children:[t.jsx("span",{className:"slot-title",title:Y.name,children:Y.name}),t.jsx("span",{className:"slot-flavor",children:Y.flavorProfile})]}),t.jsx("button",{type:"button",onClick:()=>w(M),className:"btn-remove-slot","aria-label":`Remove ${Y.name} from slot ${M+1}`,title:"Remove treat",children:t.jsx(Pd,{size:13})})]}):t.jsxs("div",{className:"slot-empty-content",children:[t.jsx("div",{className:"empty-plus-icon",children:t.jsx(Pt,{size:18})}),t.jsxs("span",{children:["Slot ",M+1," Available"]})]})},M)})}),C.length>0&&t.jsxs("div",{className:"box-dietary-summary",role:"status","aria-live":"polite",children:[t.jsx(Ge,{size:18,color:"#10B981",className:"summary-shield-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Box Dietary Profile:"})," ",t.jsx("span",{children:k.join(", ")})]})]}),t.jsx("button",{type:"button",onClick:D,disabled:!z,className:`btn btn-lg btn-full-width ${z?"btn-primary":"btn-secondary btn-disabled"}`,children:z?t.jsxs(t.Fragment,{children:[t.jsx(fo,{size:18})," Pack & Add Custom Box ($",S.toFixed(2),")"]}):t.jsxs(t.Fragment,{children:["Add ",f-C.length," More Treat",f-C.length>1?"s":""," to Complete Box"]})})]})]}),t.jsx("style",{children:`
        .treat-box-builder-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-lg);
          margin: 3.5rem 0;
        }
        .builder-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .builder-title {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .builder-sub {
          color: var(--color-text-muted);
          font-size: 1.05rem;
        }
        .size-selector-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .size-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 1.25rem 1.75rem;
          background: var(--color-bg-subtle);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          font-family: var(--font-heading);
          transition: all var(--transition-fast);
          min-width: 260px;
          text-align: left;
        }
        .size-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: var(--shadow-md);
        }
        .size-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-text-main);
          box-shadow: 0 4px 14px rgba(225, 40, 91, 0.12);
        }
        .size-btn-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .size-btn-head strong {
          font-size: 1.05rem;
        }
        .size-check-icon {
          color: var(--color-primary);
        }
        .size-btn-price {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .size-btn-desc {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-family: var(--font-body);
        }
        .builder-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .col-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .column-title {
          font-size: 1.2rem;
          color: var(--color-text-main);
          margin: 0;
        }
        .col-counter-hint {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .treats-picker-grid {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .treat-picker-item {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          padding: 0.9rem 1.15rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .treat-picker-item:hover {
          border-color: rgba(225, 40, 91, 0.4);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .treat-picker-thumb {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }
        .treat-picker-info {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .treat-picker-name {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.35;
          word-break: normal;
          overflow-wrap: break-word;
        }
        .treat-picker-diet {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .treat-mini-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg-subtle);
          padding: 0.1rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-light);
        }
        .picker-add-btn {
          flex-shrink: 0;
          padding: 0.45rem 1rem;
          font-size: 0.8125rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          white-space: nowrap;
          margin-left: 0.5rem;
        }
        .box-slots-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .btn-clear-box {
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: 0.8125rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }
        .btn-clear-box:hover {
          background: var(--color-primary-light);
        }
        .slots-container {
          display: grid;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .grid-4 { grid-template-columns: 1fr 1fr; }
        .grid-6 { grid-template-columns: 1fr 1fr; }
        .box-slot {
          min-height: 88px;
          border-radius: var(--radius-lg);
          border: 2px dashed var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background: var(--color-bg-subtle);
          position: relative;
          transition: all var(--transition-fast);
        }
        .box-slot.filled {
          background: #FFFFFF;
          border-style: solid;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(225, 40, 91, 0.08);
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
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .slot-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
          background: #FEE2E2;
          color: #DC2626;
          border: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .btn-remove-slot:hover {
          background: #DC2626;
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .slot-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-light);
        }
        .empty-plus-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
        }
        .box-dietary-summary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #ECFDF5;
          border: 1.5px solid #A7F3D0;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          color: #065F46;
          margin-bottom: 1.5rem;
        }
        .summary-shield-icon {
          flex-shrink: 0;
        }
        .btn-disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 992px) {
          .builder-grid { grid-template-columns: 1fr; }
          .treat-box-builder-card { padding: 2rem 1.5rem; }
          .size-btn { min-width: 100%; }
        }
      `})]})},Mp=()=>{const[m,f]=A.useState("All"),[c,C]=A.useState("All"),[N,S]=A.useState(""),[z,j]=A.useState("featured"),w=["All","Family Cakes","Cookies & Biscuits","Occasion Treats","Kids-Friendly Options"],T=["All","Nut-Free","Gluten-Free","Vegetarian","Organic"],D=A.useMemo(()=>wo.filter(k=>{const b=m==="All"||k.subcategory===m,M=c==="All"||k.dietaryTags.includes(c),Y=k.name.toLowerCase().includes(N.toLowerCase())||k.flavorProfile.toLowerCase().includes(N.toLowerCase())||k.description.toLowerCase().includes(N.toLowerCase());return b&&M&&Y}).sort((k,b)=>z==="price-asc"?k.price-b.price:z==="price-desc"?b.price-k.price:z==="rating"?b.rating-k.rating:(b.isFeatured?1:0)-(k.isFeatured?1:0)),[m,c,N,z]);return t.jsxs("div",{className:"goodies-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header goodies-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(po,{size:14})," elamel goodies"]}),t.jsx("h1",{className:"cat-page-title",children:"Artisanal Family Cakes & Bakery Treats"}),t.jsx("p",{className:"cat-page-lead",children:"Honest, freshly baked celebrations made with pure butter, real Madagascar vanilla, and organic berries. Every treat is prepared with gentle sweetness, clear allergen warnings, and generous family portions."}),t.jsxs("div",{className:"cat-hero-badges-row",children:[t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(Ge,{size:16,color:"#10B981"}),t.jsx("span",{children:"Dedicated Peanut-Free Kitchen"})]}),t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(Ne,{size:16,color:"#F8971D"}),t.jsx("span",{children:"Certified Gluten-Free Options"})]}),t.jsxs("div",{className:"hero-pill-badge",children:[t.jsx(jr,{size:16,color:"#E1285B"}),t.jsx("span",{children:"Zero Artificial Preservatives"})]})]})]})})}),t.jsx("section",{className:"section catalog-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"catalog-toolbar",children:[t.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Goodies subcategories",children:w.map(k=>t.jsx("button",{role:"tab","aria-selected":m===k,onClick:()=>f(k),className:`filter-tab-btn ${m===k?"active":""}`,children:k},k))}),t.jsxs("div",{className:"toolbar-search-sort",children:[t.jsxs("div",{className:"search-input-wrapper",children:[t.jsx(Mt,{size:16,className:"search-field-icon"}),t.jsx("input",{type:"text",value:N,onChange:k=>S(k.target.value),placeholder:"Search flavors, cakes...",className:"filter-search-input","aria-label":"Search bakery treats"})]}),t.jsxs("select",{value:z,onChange:k=>j(k.target.value),className:"sort-dropdown","aria-label":"Sort products by",children:[t.jsx("option",{value:"featured",children:"Featured First"}),t.jsx("option",{value:"price-asc",children:"Price: Low to High"}),t.jsx("option",{value:"price-desc",children:"Price: High to Low"}),t.jsx("option",{value:"rating",children:"Highest Rated"})]})]})]}),t.jsxs("div",{className:"dietary-filter-bar",children:[t.jsxs("span",{className:"diet-filter-label",children:[t.jsx(jh,{size:14})," Dietary & Allergen Filter:"]}),t.jsx("div",{className:"diet-chips-wrap",children:T.map(k=>t.jsxs("button",{onClick:()=>C(k),className:`diet-chip-btn ${c===k?"active":""}`,children:[c===k&&t.jsx(Br,{size:13}),k==="All"?"All Diets":k]},k))})]}),t.jsx("div",{className:"results-summary-row",children:t.jsxs("span",{className:"results-count",children:["Showing ",t.jsx("strong",{children:D.length})," Bakery Treat",D.length===1?"":"s"]})}),D.length===0?t.jsxs("div",{className:"no-results-box",children:[t.jsx("p",{children:"No bakery treats found matching your dietary filter or search."}),t.jsx("button",{onClick:()=>{f("All"),C("All"),S("")},className:"btn btn-secondary btn-sm",children:"Reset All Filters"})]}):t.jsx("div",{className:"product-grid",children:D.map(k=>t.jsx(Jn,{product:k},k.id))}),t.jsx(Pp,{}),t.jsxs("div",{className:"bakery-standards-card",children:[t.jsxs("div",{className:"standards-header",children:[t.jsx(Ge,{size:28,color:"#10B981"}),t.jsxs("div",{children:[t.jsx("h3",{className:"standards-title",children:"Our Kitchen & Allergen Transparency Promise"}),t.jsx("p",{className:"standards-sub",children:"Every ingredient is clearly accounted for so families can celebrate with peace of mind."})]})]}),t.jsxs("div",{className:"standards-grid",children:[t.jsxs("div",{className:"standard-item",children:[t.jsx("strong",{children:"Natural Ingredients Only"}),t.jsx("p",{children:"We use real fruit purees (strawberries, raspberries, blueberries) and natural plant pigments (spirulina, turmeric, beetroot) for our vibrant pastel icings."})]}),t.jsxs("div",{className:"standard-item",children:[t.jsx("strong",{children:"Peanut-Free Production"}),t.jsx("p",{children:"Our bakery facility is strictly 100% peanut-free. Any specialty items containing tree nuts (like almond flour in our fudge cake) are prepared in dedicated zones."})]}),t.jsxs("div",{className:"standard-item",children:[t.jsx("strong",{children:"Gentle Sweetness for Little Ones"}),t.jsx("p",{children:"Our recipes use 30% less refined sugar than commercial bakeries, highlighting natural Madagascar vanilla, real dairy butter, and fresh seasonal fruits."})]}),t.jsxs("div",{className:"standard-item",children:[t.jsx("strong",{children:"Fresh Daily Deliveries"}),t.jsx("p",{children:"Every cake and cookie box is baked and decorated within hours of dispatch to ensure optimal tenderness and crispness on your celebration table."})]})]})]})]})}),t.jsx("style",{children:`
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
        @media (max-width: 768px) {
          .cat-page-title { font-size: 2.1rem; }
          .catalog-toolbar { flex-direction: column; align-items: stretch; }
          .toolbar-search-sort { flex-direction: column; width: 100%; }
          .filter-search-input, .sort-dropdown { width: 100%; }
          .dietary-filter-bar { flex-direction: column; align-items: flex-start; }
        }
      `})]})},_p=()=>{const{addToCart:m}=Tt(),[f,c]=A.useState(Xn[0]),[C,N]=A.useState("The Miller Family"),[S,z]=A.useState("Home Est. 2008"),[j,w]=A.useState("Our roots run deep, our love grows strong."),[T,D]=A.useState("warm_earth"),[k,b]=A.useState(!0),M=j.length,Y=f.charLimit,ie=[{id:"warm_earth",name:"Warm Terracotta & Gold",primary:"#92400E",secondary:"#F59E0B",bg:"#FEF3C7"},{id:"rose_garden",name:"Rose Garden Pastels",primary:"#BE185D",secondary:"#F472B6",bg:"#FDF2F8"},{id:"ocean_breeze",name:"Ocean Cyan & Navy",primary:"#0369A1",secondary:"#38BDF8",bg:"#E0F2FE"},{id:"rainbow_swirl",name:"Elamel Rainbow Spectrum",primary:"#E1285B",secondary:"#F8971D",bg:"#FFF7ED"}],F=ie.find(G=>G.id===T)||ie[0],te=()=>{try{Zn({particleCount:60,spread:60,origin:{y:.7},colors:["#E1285B","#F8971D","#10B981","#0284C7","#8B5CF6"]})}catch{}m(f,1,{familyOrName:C,occasion:S,customMessage:j,colorTheme:F.name,giftWrap:k})};return t.jsxs("div",{className:"personalisation-studio-card",id:"personalisation-studio",children:[t.jsxs("div",{className:"studio-header",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Live Customization Studio"]}),t.jsx("h3",{className:"studio-title",children:"Create Your Personalised Family Keepsake"}),t.jsx("p",{className:"studio-subtitle",children:"Type your family name and heartfelt message below to see a live preview in real time!"})]}),t.jsxs("div",{className:"studio-layout-grid",children:[t.jsxs("div",{className:"studio-controls-col",children:[t.jsxs("div",{className:"studio-step-block",children:[t.jsxs("label",{className:"step-label",children:[t.jsx("span",{className:"step-number",children:"1"})," Choose Keepsake Item:"]}),t.jsx("div",{className:"base-items-selector",children:Xn.map(G=>t.jsxs("button",{type:"button",onClick:()=>{c(G),j.length>G.charLimit&&w(j.slice(0,G.charLimit))},className:`base-item-btn ${f.id===G.id?"active":""}`,children:[t.jsx("span",{className:"base-item-name",children:G.name}),t.jsxs("span",{className:"base-item-price",children:["$",G.price.toFixed(2)]})]},G.id))})]}),t.jsxs("div",{className:"studio-step-block",children:[t.jsxs("label",{className:"step-label",children:[t.jsx("span",{className:"step-number",children:"2"})," Personalised Details:"]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{htmlFor:"studio-family-name",className:"form-label",children:"Name or Family Name:"}),t.jsx("input",{id:"studio-family-name",type:"text",value:C,onChange:G=>N(G.target.value),placeholder:"e.g. The Miller Family or Sarah & Leo",className:"form-control",maxLength:35})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{htmlFor:"studio-occasion",className:"form-label",children:"Occasion or Date:"}),t.jsx("input",{id:"studio-occasion",type:"text",value:S,onChange:G=>z(G.target.value),placeholder:"e.g. 10th Anniversary or Est. 2026",className:"form-control",maxLength:30})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("div",{className:"label-with-counter",children:[t.jsx("label",{htmlFor:"studio-message",className:"form-label",children:"Heartfelt Message or Inscription:"}),t.jsxs("span",{className:"char-counter","aria-live":"polite",children:[M,"/",Y]})]}),t.jsx("textarea",{id:"studio-message",value:j,onChange:G=>w(G.target.value),placeholder:"e.g. Our roots run deep, our love grows strong.",className:"form-control",rows:2,maxLength:Y})]})]}),t.jsxs("div",{className:"studio-step-block",children:[t.jsxs("label",{className:"step-label",children:[t.jsx("span",{className:"step-number",children:"3"})," Palette Theme & Gift Packaging:"]}),t.jsx("div",{className:"theme-chips-row",children:ie.map(G=>t.jsxs("button",{type:"button",onClick:()=>D(G.id),className:`theme-chip-btn ${T===G.id?"active":""}`,children:[t.jsx("span",{className:"theme-color-preview",style:{background:`linear-gradient(135deg, ${G.primary}, ${G.secondary})`}}),t.jsx("span",{children:G.name})]},G.id))}),t.jsx("div",{className:"giftwrap-checkbox-wrap",children:t.jsxs("label",{className:"giftwrap-label",children:[t.jsx("input",{type:"checkbox",checked:k,onChange:G=>b(G.target.checked)}),t.jsx(fo,{size:17,color:"#E1285B"}),t.jsx("span",{children:"Complimentary Luxury Ribbon & Dried Flower Gift Packaging"})]})})]})]}),t.jsx("div",{className:"studio-preview-col",children:t.jsxs("div",{className:"preview-sticky-wrap",children:[t.jsxs("div",{className:"live-preview-badge",children:[t.jsx(Ne,{size:13})," Live Interactive Render"]}),t.jsxs("div",{className:"live-render-stage",style:{background:F.bg},children:[f.baseItemType==="ceramic_plate"&&t.jsx("div",{className:"plate-canvas-visual",children:t.jsx("div",{className:"plate-rim-circle",children:t.jsxs("div",{className:"plate-inner-art",children:[t.jsxs("svg",{viewBox:"0 0 120 90",className:"tree-vector-svg",children:[t.jsx("path",{d:"M60 80 Q60 55 52 42 Q42 30 30 28 Q42 22 55 35 Q58 20 50 10 Q60 18 64 30 Q75 18 88 22 Q78 30 68 42 Q60 55 60 80 Z",fill:F.primary}),t.jsx("circle",{cx:"34",cy:"24",r:"3",fill:F.secondary}),t.jsx("circle",{cx:"50",cy:"12",r:"3.5",fill:F.secondary}),t.jsx("circle",{cx:"70",cy:"18",r:"3",fill:F.secondary}),t.jsx("circle",{cx:"86",cy:"22",r:"3.5",fill:F.secondary})]}),t.jsxs("div",{className:"plate-live-text-area",children:[t.jsx("h4",{className:"preview-family-name",style:{color:F.primary},children:C||"Your Family Name"}),t.jsx("div",{className:"preview-occasion",style:{color:F.secondary},children:S||"Special Occasion"}),t.jsxs("p",{className:"preview-message-inscription",style:{color:F.primary},children:['"',j||"Your message will appear here.",'"']})]})]})})}),f.baseItemType==="cookie_crate"&&t.jsx("div",{className:"cookie-crate-visual",children:t.jsxs("div",{className:"crate-grid",children:[t.jsx("div",{className:"mock-cookie",style:{borderColor:F.primary},children:t.jsx("span",{className:"cookie-frosting-text",style:{color:F.primary},children:C.split(" ")[0]||"Family"})}),t.jsx("div",{className:"mock-cookie",style:{borderColor:F.secondary},children:t.jsx("span",{className:"cookie-frosting-text",style:{color:F.secondary},children:S||"Sweet Joy"})}),t.jsx("div",{className:"mock-cookie wide-cookie",style:{borderColor:F.primary},children:t.jsx("span",{className:"cookie-frosting-text",style:{color:F.primary},children:j||"Happy Memories"})})]})}),f.baseItemType==="ceramic_mug"&&t.jsxs("div",{className:"mug-duo-visual",children:[t.jsxs("div",{className:"mock-mug",style:{borderColor:F.primary},children:[t.jsx("span",{className:"mug-handle"}),t.jsx("span",{className:"mug-text-preview",style:{color:F.primary},children:C.split(" ")[0]||"Love"}),t.jsx("span",{className:"mug-sub-text",style:{color:F.secondary},children:S||"2026"})]}),t.jsxs("div",{className:"mock-mug",style:{borderColor:F.secondary},children:[t.jsx("span",{className:"mug-handle"}),t.jsx("span",{className:"mug-text-preview",style:{color:F.secondary},children:C.split(" ")[1]||"Forever"}),t.jsx("span",{className:"mug-sub-text",style:{color:F.primary},children:S||"2026"})]})]})]}),t.jsxs("div",{className:"preview-meta-info",children:[t.jsxs("div",{className:"meta-point",children:[t.jsx(Cd,{size:15,color:"#0284C7"}),t.jsxs("span",{children:["Handcrafted & kiln cured in ",f.leadTimeDays," business days"]})]}),t.jsxs("div",{className:"meta-point",children:[t.jsx(Ge,{size:15,color:"#10B981"}),t.jsx("span",{children:"Food-Safe Glaze & Heirloom Ceramic Guarantee"})]})]}),t.jsxs("button",{onClick:te,className:"btn btn-primary btn-lg btn-full-width",children:[t.jsx(jr,{size:18})," Add Custom Creation to Treat Box ($",f.price.toFixed(2),")"]})]})})]}),t.jsx("style",{children:`
        .personalisation-studio-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
          margin: 3rem 0;
        }
        .studio-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
        }
        .studio-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .studio-subtitle {
          color: var(--color-text-muted);
          font-size: 1rem;
        }
        .studio-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .studio-step-block {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
        }
        .step-number {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .base-items-selector {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .base-item-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          transition: all var(--transition-fast);
        }
        .base-item-btn:hover {
          border-color: var(--color-primary);
        }
        .base-item-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 700;
        }
        .base-item-price {
          color: var(--color-primary);
          font-weight: 700;
        }
        .label-with-counter {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .char-counter {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          font-weight: 600;
        }
        .theme-chips-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .theme-chip-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.8rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .theme-chip-btn:hover {
          border-color: var(--color-primary);
        }
        .theme-chip-btn.active {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 2px var(--color-primary);
        }
        .theme-color-preview {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .giftwrap-checkbox-wrap {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
        }
        .giftwrap-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
        }
        .preview-sticky-wrap {
          position: sticky;
          top: 100px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          padding: 1.75rem;
          box-shadow: var(--shadow-md);
        }
        .live-preview-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .live-render-stage {
          border-radius: var(--radius-lg);
          padding: 2.5rem 1.5rem;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 2px dashed rgba(0, 0, 0, 0.08);
          transition: background 0.3s ease;
        }
        .plate-canvas-visual {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: #FFFDF9;
          border: 8px solid #EFECE6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.25rem;
        }
        .plate-rim-circle {
          width: 100%;
          height: 100%;
          border: 2px dashed #D6D1C7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }
        .tree-vector-svg {
          width: 50px;
          height: 40px;
          margin: 0 auto 0.25rem auto;
        }
        .preview-family-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .preview-occasion {
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }
        .preview-message-inscription {
          font-family: var(--font-handwriting);
          font-size: 1.15rem;
          line-height: 1.2;
          font-weight: 600;
          max-width: 180px;
          margin: 0 auto;
        }
        .cookie-crate-visual {
          width: 100%;
        }
        .crate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .mock-cookie {
          background: #FEF3C7;
          border: 3px solid;
          border-radius: var(--radius-md);
          padding: 1rem 0.5rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .wide-cookie {
          grid-column: span 2;
        }
        .cookie-frosting-text {
          font-family: var(--font-handwriting);
          font-size: 1.2rem;
          font-weight: 700;
        }
        .mug-duo-visual {
          display: flex;
          gap: 1.5rem;
        }
        .mock-mug {
          width: 90px;
          height: 105px;
          background: #FFFFFF;
          border: 4px solid;
          border-radius: 4px 4px 18px 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .mug-handle {
          position: absolute;
          right: -14px;
          top: 25px;
          width: 14px;
          height: 45px;
          border: 3px solid #CBD5E1;
          border-left: none;
          border-radius: 0 12px 12px 0;
        }
        .mug-text-preview {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
        }
        .mug-sub-text {
          font-size: 0.7rem;
        }
        .preview-meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .meta-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .btn-full-width {
          width: 100%;
        }

        @media (max-width: 992px) {
          .studio-layout-grid { grid-template-columns: 1fr; }
          .personalisation-studio-card { padding: 1.75rem; }
          .preview-sticky-wrap { position: static; }
        }
      `})]})},Tp=()=>{const[m,f]=A.useState("All"),c=[{id:"All",title:"All Personalised Keepsakes",subtitle:"Explore our complete collection of custom family gifts."},{id:"Anniversary Moments",title:"Anniversary & Couple Moments",subtitle:"Commemorating milestones, wedding dates, and shared journeys."},{id:"Family Celebrations",title:"Family Celebrations & Heirlooms",subtitle:"Generational plates, newborn announcements, and family names."},{id:"Holiday Souvenirs",title:"Holiday & Seasonal Souvenirs",subtitle:"Annual traditions, custom ornaments, and festive memories."}],C=m==="All"?Xn:Xn.filter(S=>S.subcategory===m),N=()=>{const S=document.getElementById("personalisation-studio");S&&S.scrollIntoView({behavior:"smooth"})};return t.jsxs("div",{className:"moments-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header moments-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(mi,{size:14})," moments & souvenirs"]}),t.jsx("h1",{className:"cat-page-title",children:"Personalised Keepsakes for Couples & Families"}),t.jsx("p",{className:"cat-page-lead",children:"Every family has a story worthy of remembrance. Our artisan studio hand-letters custom heirloom ceramic plates, anniversary mugs, and message cookie crates to celebrate your milestones."}),t.jsx("div",{className:"moments-hero-actions",children:t.jsxs("button",{onClick:N,className:"btn btn-primary btn-lg",children:[t.jsx(Ne,{size:18})," Open Live Personalisation Studio ",t.jsx(Xm,{size:16})]})})]})})}),t.jsx("section",{className:"section moments-content-section",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"catalog-toolbar",style:{justifyContent:"center"},children:t.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Moments Themes",children:c.map(S=>t.jsx("button",{role:"tab","aria-selected":m===S.id,onClick:()=>f(S.id),className:`filter-tab-btn ${m===S.id?"active":""}`,children:S.id==="All"?"All Keepsakes":S.id},S.id))})}),t.jsx("div",{className:"product-grid",style:{marginBottom:"4rem"},children:C.map(S=>t.jsx(Jn,{product:S},S.id))}),t.jsx(_p,{}),t.jsxs("div",{className:"family-stories-section",children:[t.jsxs("div",{className:"section-title-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(jr,{size:14})," Shared Memories"]}),t.jsx("h2",{className:"section-title",children:"Stories From Our Community"}),t.jsx("p",{className:"section-subtitle",children:"Discover how families and couples have turned simple moments into lasting traditions."})]}),t.jsxs("div",{className:"stories-cards-grid",children:[t.jsxs("div",{className:"story-quote-card",children:[t.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((S,z)=>t.jsx(ln,{size:15,fill:"#F8971D",color:"#F8971D"},z))}),t.jsx("p",{className:"story-quote-text",children:'"Seeing Grandma’s tears of joy when she unwrapped the family tree plate with all 8 grandchildren’s names hand-painted on the branches made our family reunion unforgettable. It is now the centerpiece of her dining room."'}),t.jsxs("div",{className:"story-author-meta",children:[t.jsx("div",{className:"author-avatar-circle",children:"M"}),t.jsxs("div",{children:[t.jsx("strong",{children:"The Miller Family"}),t.jsx("span",{children:"Grandmother’s 80th Birthday Celebration"})]})]})]}),t.jsxs("div",{className:"story-quote-card",children:[t.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((S,z)=>t.jsx(ln,{size:15,fill:"#F8971D",color:"#F8971D"},z))}),t.jsx("p",{className:"story-quote-text",children:'"My partner surprised me with a personalized cookie crate inscribed with the coordinates of the beach where we got engaged. The cookies were delicious and the wooden box now holds our keepsake photos!"'}),t.jsxs("div",{className:"story-author-meta",children:[t.jsx("div",{className:"author-avatar-circle",children:"C"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Carlos & Helena M."}),t.jsx("span",{children:"5th Wedding Anniversary"})]})]})]}),t.jsxs("div",{className:"story-quote-card",children:[t.jsx("div",{className:"story-stars",children:Array.from({length:5}).map((S,z)=>t.jsx(ln,{size:15,fill:"#F8971D",color:"#F8971D"},z))}),t.jsx("p",{className:"story-quote-text",children:'"We have an annual tradition of ordering custom ceramic ornaments for our kids each Christmas. Watching them hang their own names on the tree brings back so many sweet memories from each year."'}),t.jsxs("div",{className:"story-author-meta",children:[t.jsx("div",{className:"author-avatar-circle",children:"H"}),t.jsxs("div",{children:[t.jsx("strong",{children:"The Henderson Clan"}),t.jsx("span",{children:"Holiday Family Tradition"})]})]})]})]})]}),t.jsxs("div",{className:"how-it-works-banner",children:[t.jsx("h3",{className:"how-it-works-title",children:"How Your Custom Keepsake is Created:"}),t.jsxs("div",{className:"how-steps-grid",children:[t.jsxs("div",{className:"how-step-item",children:[t.jsx("span",{className:"how-step-num",children:"1"}),t.jsx("strong",{children:"Live Design Preview"}),t.jsx("p",{children:"Type your names and dates into our studio tool to see the live rendering."})]}),t.jsxs("div",{className:"how-step-item",children:[t.jsx("span",{className:"how-step-num",children:"2"}),t.jsx("strong",{children:"Artisan Hand-Lettering"}),t.jsx("p",{children:"Our studio ceramicists and pastry artists hand-inscribe your chosen words with fine glazes."})]}),t.jsxs("div",{className:"how-step-item",children:[t.jsx("span",{className:"how-step-num",children:"3"}),t.jsx("strong",{children:"Studio Kiln Curing"}),t.jsx("p",{children:"Ceramics are kiln-fired for durability; cookies are sealed fresh in food-safe parchment."})]}),t.jsxs("div",{className:"how-step-item",children:[t.jsx("span",{className:"how-step-num",children:"4"}),t.jsx("strong",{children:"Luxury Gift Delivery"}),t.jsx("p",{children:"Packed with satin ribbon, dried lavender sprigs, and greeting card, shipped safely to your door."})]})]})]})]})}),t.jsx("style",{children:`
        .moments-hero {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(240, 249, 255, 0.6) 100%);
        }
        .moments-hero-actions {
          margin-top: 1.5rem;
        }
        .moments-theme-tabs-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
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
      `})]})},Dp=()=>{const{navigate:m}=kr(),f=[{id:"ws-1",title:"Family Breakfast Plate & Paint Morning",date:"Every Saturday, 10:00 AM – 12:30 PM",age:"Ages 4+",desc:"Parents and kids paint matching dinner plates while enjoying fresh croissants and seasonal berry spritzers.",spotsLeft:4},{id:"ws-2",title:"Couples & Duos Mug Lettering Evening",date:"Every Thursday, 6:30 PM – 8:30 PM",age:"Teens & Adults",desc:"Learn delicate ceramic calligraphy and botanical watercolor glaze techniques with herbal tea and warm biscuits.",spotsLeft:6},{id:"ws-3",title:"Little Pastry Decorators Masterclass",date:"Every Sunday, 2:00 PM – 3:30 PM",age:"Ages 3–10",desc:"Kids pipe rainbow royal icing and naturally colored sprinkles onto animal cookies to take home in a gift tin.",spotsLeft:3}];return t.jsxs("div",{className:"about-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"about-hero-section",children:t.jsxs("div",{className:"container about-hero-container",children:[t.jsxs("div",{className:"about-hero-text",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Our Story & Heart"]}),t.jsx("h1",{className:"about-main-title",children:"Crafting Colors, Baking Joy, Celebrating Families"}),t.jsxs("p",{className:"about-lead",children:[t.jsx("strong",{children:"elamel"})," was born from a simple kitchen table dream: that the most precious family memories are created when hands are busy making art and hearts are gathered around delicious treats."]})]}),t.jsxs("div",{className:"about-hero-logo-box",children:[t.jsx("img",{src:"./logowith-text.png",alt:"elamel Colors - Pinte • Crie • Desfrute",className:"about-hero-logo-img"}),t.jsx("span",{className:"about-logo-caption",children:"Pinte • Crie • Desfrute"})]})]})}),t.jsx("section",{className:"section our-story-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"story-split-grid",children:[t.jsxs("div",{className:"story-media-wrap",children:[t.jsx("img",{src:"./images/about_studio.jpg",alt:"The Elamel welcoming artisan craft studio and fresh bakery counter",className:"story-studio-img"}),t.jsxs("div",{className:"story-experience-tag",children:[t.jsx(jr,{size:20,color:"#E1285B"}),t.jsxs("div",{children:[t.jsx("strong",{children:"A Home for Every Generation"}),t.jsx("span",{children:"Pottery studio & bakery under one roof"})]})]})]}),t.jsxs("div",{className:"story-content-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(jr,{size:14})," How It All Began"]}),t.jsx("h2",{className:"story-heading",children:"Where Ceramic Glazes Meet Sweet Oven Aromas"}),t.jsx("p",{children:"A few years ago, our founders—a ceramicist mother and an artisan pastry chef father—noticed how traditional craft kits felt complicated and generic, while store-bought bakery celebrations lacked personal soul."}),t.jsxs("p",{children:["They set out to unite both worlds into a warm, inclusive sanctuary called ",t.jsx("strong",{children:"elamel"}),". Every ceramic piece is designed with ergonomic comfort and food-safe certification, while every cake and cookie is baked from wholesome, certified peanut-free ingredients."]}),t.jsx("p",{children:"Today, Elamel serves thousands of families, schools, and couples across the country, providing home-delivered craft kits, celebration treat crates, and in-studio workshops where generations laugh and create side by side."})]})]})})}),t.jsx("section",{className:"section values-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(eh,{size:14})," Guiding Principles"]}),t.jsx("h2",{className:"section-title",children:"Our Values in Everything We Make"}),t.jsx("p",{className:"section-subtitle",children:"Every glaze pot, cookie recipe, and personalized plate is created under strict standards of safety, inclusivity, and joy."})]}),t.jsxs("div",{className:"values-grid-4",children:[t.jsxs("div",{className:"value-card",children:[t.jsx("div",{className:"value-icon-box bg-rose",children:t.jsx(Ge,{size:28,color:"#E1285B"})}),t.jsx("h3",{className:"value-title",children:"1. Absolute Safety & Health"}),t.jsx("p",{className:"value-desc",children:"Certified 100% lead-free, non-toxic mineral glazes and a dedicated peanut-free bakery environment with rigorous dietary segregation."})]}),t.jsxs("div",{className:"value-card",children:[t.jsx("div",{className:"value-icon-box bg-orange",children:t.jsx(Ne,{size:28,color:"#F8971D"})}),t.jsx("h3",{className:"value-title",children:"2. Artisan Craft Quality"}),t.jsx("p",{className:"value-desc",children:"High-fired white bisque porcelain, European grass-fed butter, real Madagascar vanilla beans, and hand-inspected packaging."})]}),t.jsxs("div",{className:"value-card",children:[t.jsx("div",{className:"value-icon-box bg-green",children:t.jsx(_d,{size:28,color:"#10B981"})}),t.jsx("h3",{className:"value-title",children:"3. Warm Inclusivity"}),t.jsx("p",{className:"value-desc",children:"Everyone is welcomed as an artist and baker. Accessible web navigation, inclusive sensory pacing, and language suited for all ages."})]}),t.jsxs("div",{className:"value-card",children:[t.jsx("div",{className:"value-icon-box bg-cyan",children:t.jsx(jr,{size:28,color:"#0284C7"})}),t.jsx("h3",{className:"value-title",children:"4. Wholesome Joy"}),t.jsx("p",{className:"value-desc",children:"Encouraging shared laughter over perfection. There are no mistakes in painting or cookie decorating—only sweet memories!"})]})]})]})}),t.jsx("section",{className:"section safety-standards-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"safety-standards-banner",children:[t.jsxs("div",{className:"safety-banner-left",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ge,{size:14})," Certified Standards"]}),t.jsx("h2",{className:"safety-banner-title",children:"Our Rigorous Quality & Safety Protocols"}),t.jsx("p",{className:"safety-banner-text",children:"Because our products enter family kitchens and touch children’s hands, we hold ourselves to the highest independent certifications."}),t.jsxs("div",{className:"safety-badges-list",children:[t.jsxs("div",{className:"safety-badge-row",children:[t.jsx(Ve,{size:20,color:"#10B981"}),t.jsxs("span",{children:[t.jsx("strong",{children:"EN71-3 & ASTM D-4236 Toy Safety:"})," Glazes are certified water-based and zero VOCs."]})]}),t.jsxs("div",{className:"safety-badge-row",children:[t.jsx(Ve,{size:20,color:"#10B981"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Food Contact Approval:"})," Tableware glazes are oven-cured into non-porous, food-safe glass sheen."]})]}),t.jsxs("div",{className:"safety-badge-row",children:[t.jsx(Ve,{size:20,color:"#10B981"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Segregated Bakery Kitchen:"})," Dedicated peanut-free facility with air filtration and strict batch testing."]})]})]})]}),t.jsx("div",{className:"safety-banner-right",children:t.jsxs("div",{className:"craft-safety-quote-box",children:[t.jsx(jr,{size:32,color:"#E1285B"}),t.jsx("p",{children:'"As parents ourselves, we never ship a ceramic kit or bake a treat that we wouldn’t proudly give to our own toddlers and grandparents."'}),t.jsx("div",{className:"quote-signer",children:"— The Elamel Craft & Kitchen Team"})]})})]})})}),t.jsx("section",{className:"section community-workshops-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-title-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(nh,{size:14})," Join Us In Person"]}),t.jsx("h2",{className:"section-title",children:"Studio Family Workshops & Community Events"}),t.jsx("p",{className:"section-subtitle",children:"Come visit our studio for guided painting sessions, afternoon tea masterclasses, and school holiday celebrations."})]}),t.jsx("div",{className:"workshops-list-grid",children:f.map(c=>t.jsxs("div",{className:"workshop-card",children:[t.jsxs("div",{className:"workshop-badge-row",children:[t.jsx("span",{className:"badge badge-primary",children:c.age}),t.jsxs("span",{className:"workshop-spots",children:[c.spotsLeft," spots available"]})]}),t.jsx("h3",{className:"workshop-title",children:c.title}),t.jsx("p",{className:"workshop-desc",children:c.desc}),t.jsxs("div",{className:"workshop-meta",children:[t.jsxs("div",{className:"meta-item",children:[t.jsx(Cd,{size:15,color:"#0284C7"}),t.jsx("span",{children:c.date})]}),t.jsxs("div",{className:"meta-item",children:[t.jsx(bo,{size:15,color:"#E1285B"}),t.jsx("span",{children:"Elamel Studio Workshop, Room 102"})]})]}),t.jsxs("button",{onClick:()=>m("/contact"),className:"btn btn-secondary btn-full-width",children:["Inquire & Reserve Seats ",t.jsx(ui,{size:15})]})]},c.id))})]})}),t.jsx("style",{children:`
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
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
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

        @media (max-width: 992px) {
          .about-hero-container { grid-template-columns: 1fr; }
          .story-split-grid { grid-template-columns: 1fr; }
          .values-grid-4 { grid-template-columns: 1fr 1fr; }
          .safety-standards-banner { grid-template-columns: 1fr; }
          .workshops-list-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .values-grid-4 { grid-template-columns: 1fr; }
          .about-main-title { font-size: 2.1rem; }
        }
      `})]})},Ap=()=>{const{addToast:m}=fi(),[f,c]=A.useState(""),[C,N]=A.useState(""),[S,z]=A.useState(""),[j,w]=A.useState("Elamel Colors"),[T,D]=A.useState(""),[k,b]=A.useState(""),[M,Y]=A.useState({}),[ie,F]=A.useState(!1),[te,G]=A.useState(!1),[pe,fe]=A.useState(0),Me=se=>{fe(pe===se?null:se)},ge=()=>{const se={};return f.trim()||(se.fullName="Please enter your name so we know how to address you."),C.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C)||(se.email="Please provide a valid email format (e.g., name@domain.com)."):se.email="Please add your email so we can reply.",k.trim()?k.trim().length<10&&(se.message="Please provide at least 10 characters so we can assist you thoroughly."):se.message="Please tell us a little about your family inquiry or celebration.",Y(se),Object.keys(se).length===0},Se=se=>{if(se.preventDefault(),!ge()){m("Please check the form fields","Some required information is missing or incomplete.","dietary");return}G(!0),setTimeout(()=>{G(!1),F(!0);try{Zn({particleCount:70,spread:60,origin:{y:.65},colors:["#e1285b","#f8971d","#10b981","#0284c7","#8b5cf6"]})}catch{}m("Thank You!","Your family request was received. We’ll contact you soon about your Elamel treat.","success")},600)},ve=()=>{c(""),N(""),z(""),D(""),b(""),Y({}),F(!1)};return t.jsxs("div",{className:"contact-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header contact-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Bh,{size:14})," Get in Touch"]}),t.jsx("h1",{className:"cat-page-title",children:"Contact & Custom Order Inquiries"}),t.jsx("p",{className:"cat-page-lead",children:"Have a question about glaze non-toxicity, celebration cake flavors, or organizing a custom family workshop? We would love to hear from you and assist with your family gathering."})]})})}),t.jsx("section",{className:"section contact-main-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"contact-layout-grid",children:[t.jsx("div",{className:"contact-form-card",children:ie?t.jsxs("div",{className:"contact-success-box",role:"status","aria-live":"polite",children:[t.jsx("div",{className:"success-icon-wrap",children:t.jsx(Ve,{size:56,color:"#10B981"})}),t.jsxs("h3",{className:"success-heading",children:["Thank You, ",f,"!"]}),t.jsxs("p",{className:"success-sub",children:["Your request regarding ",t.jsx("strong",{children:j})," has been received by our studio team."]}),t.jsxs("p",{className:"success-detail",children:["We will reply directly to ",t.jsx("strong",{children:C})," within 24 hours with product details, allergen confirmations, or scheduling options."]}),t.jsx("button",{onClick:ve,className:"btn btn-primary",children:"Send Another Message"})]}):t.jsxs("form",{onSubmit:Se,noValidate:!0,"aria-label":"Contact and Order Inquiry Form",children:[t.jsx("h3",{className:"form-title",children:"Send Us a Message or Pre-order Request"}),t.jsx("p",{className:"form-subtitle",children:"Fill in the fields below and our friendly team will reply promptly."}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{htmlFor:"contact-name",className:"form-label",children:["Full Name ",t.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),t.jsx("input",{id:"contact-name",type:"text",value:f,onChange:se=>{c(se.target.value),M.fullName&&Y({...M,fullName:""})},placeholder:"e.g. Elena Rostova",className:`form-control ${M.fullName?"has-error":""}`,"aria-required":"true","aria-describedby":M.fullName?"name-error":void 0}),M.fullName&&t.jsx("span",{id:"name-error",className:"form-error",role:"alert",children:M.fullName})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{htmlFor:"contact-email",className:"form-label",children:["Email Address ",t.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),t.jsx("input",{id:"contact-email",type:"email",value:C,onChange:se=>{N(se.target.value),M.email&&Y({...M,email:""})},placeholder:"e.g. elena@family.com",className:`form-control ${M.email?"has-error":""}`,"aria-required":"true","aria-describedby":M.email?"email-error":void 0}),M.email&&t.jsx("span",{id:"email-error",className:"form-error",role:"alert",children:M.email})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{htmlFor:"contact-phone",className:"form-label",children:"Phone Number (Optional)"}),t.jsx("input",{id:"contact-phone",type:"tel",value:S,onChange:se=>z(se.target.value),placeholder:"e.g. +1 (800) 555-0199",className:"form-control"})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{htmlFor:"contact-interest",className:"form-label",children:"I'm interested in:"}),t.jsxs("select",{id:"contact-interest",value:j,onChange:se=>w(se.target.value),className:"form-control",children:[t.jsx("option",{value:"Elamel Colors",children:"Elamel Colors (Ceramic Kits)"}),t.jsx("option",{value:"Elamel Goodies",children:"Elamel Goodies (Cakes & Treats)"}),t.jsx("option",{value:"Moments & Souvenirs",children:"Moments & Souvenirs (Keepsakes)"}),t.jsx("option",{value:"Studio Workshop",children:"Studio Workshop Booking"}),t.jsx("option",{value:"General Inquiry",children:"General Family Inquiry"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{htmlFor:"contact-date",className:"form-label",children:"Target Celebration Date (Optional)"}),t.jsx("input",{id:"contact-date",type:"date",value:T,onChange:se=>D(se.target.value),className:"form-control"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("div",{className:"label-with-counter",children:[t.jsxs("label",{htmlFor:"contact-message",className:"form-label",children:["Message & Details ",t.jsx("span",{className:"required-star","aria-hidden":"true",children:"*"})]}),t.jsxs("span",{className:"char-counter","aria-live":"polite",children:[k.length,"/500"]})]}),t.jsx("textarea",{id:"contact-message",rows:4,maxLength:500,value:k,onChange:se=>{b(se.target.value),M.message&&Y({...M,message:""})},placeholder:"Tell us about your event, dietary questions, or custom keepsake ideas...",className:`form-control ${M.message?"has-error":""}`,"aria-required":"true","aria-describedby":M.message?"message-error":void 0}),M.message&&t.jsx("span",{id:"message-error",className:"form-error",role:"alert",children:M.message})]}),t.jsxs("button",{type:"submit",disabled:te,className:"btn btn-primary btn-lg btn-full-width",children:[t.jsx(Ed,{size:18})," ",te?"Sending Request...":"Send Message & Inquiry"]})]})}),t.jsxs("div",{className:"contact-info-col",children:[t.jsxs("div",{className:"info-card",children:[t.jsx("h3",{className:"info-card-title",children:"Direct Studio Channels"}),t.jsxs("div",{className:"info-channel-item",children:[t.jsx("div",{className:"channel-icon-circle",children:t.jsx(yo,{size:20,color:"#E1285B"})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Email Inquiries:"}),t.jsx("a",{href:"mailto:hello@elamel-family.com",className:"channel-link",children:"hello@elamel-family.com"}),t.jsx("span",{className:"channel-sub",children:"Typical response time: under 4 hours"})]})]}),t.jsxs("div",{className:"info-channel-item",children:[t.jsx("div",{className:"channel-icon-circle",children:t.jsx(zd,{size:20,color:"#0284C7"})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Phone Support:"}),t.jsx("a",{href:"tel:+18005553526",className:"channel-link",children:"+1 (800) 555-ELAMEL"}),t.jsx("span",{className:"channel-sub",children:"Tuesday – Sunday: 9:00 AM – 6:00 PM"})]})]}),t.jsxs("div",{className:"info-channel-item",children:[t.jsx("div",{className:"channel-icon-circle",children:t.jsx(bo,{size:20,color:"#10B981"})}),t.jsxs("div",{children:[t.jsx("strong",{children:"Studio & Bakery Location:"}),t.jsxs("address",{className:"channel-address",children:["124 Rainbow Craft Lane",t.jsx("br",{}),"Creative Arts District, Suite 102"]}),t.jsx("span",{className:"channel-sub",children:"Free family parking & stroller accessible"})]})]})]}),t.jsxs("div",{className:"messaging-card",children:[t.jsx(Ne,{size:24,color:"#F8971D"}),t.jsxs("div",{children:[t.jsx("h4",{className:"messaging-title",children:"Need Fast Party Planning Advice?"}),t.jsx("p",{className:"messaging-sub",children:"Chat with our studio coordinator directly for urgent birthday cakes or weekend workshop questions."}),t.jsxs("a",{href:"https://wa.me/18005553526",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:["Open Family WhatsApp Chat ",t.jsx(ui,{size:14})]})]})]})]})]}),t.jsxs("div",{className:"contact-faq-section",children:[t.jsxs("div",{className:"section-title-wrap",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ne,{size:14})," Questions Answered"]}),t.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),t.jsx("p",{className:"section-subtitle",children:"Everything you need to know about our food-safe glazes, peanut-free kitchen, and shipping."})]}),t.jsx("div",{className:"faq-accordion-list",children:jp.map((se,Ae)=>{const Ie=pe===Ae;return t.jsxs("div",{className:`faq-item-card ${Ie?"open":""}`,children:[t.jsxs("button",{onClick:()=>Me(Ae),className:"faq-question-btn","aria-expanded":Ie,"aria-controls":`faq-answer-${Ae}`,children:[t.jsx("span",{className:"faq-q-text",children:se.question}),Ie?t.jsx(uh,{size:20}):t.jsx(sh,{size:20})]}),Ie&&t.jsx("div",{id:`faq-answer-${Ae}`,className:"faq-answer-panel",children:t.jsx("p",{children:se.answer})})]},Ae)})})]})]})}),t.jsx("style",{children:`
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
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 1.5rem;
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .info-card-title {
          font-size: 1.35rem;
          margin-bottom: 1.75rem;
        }
        .info-channel-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
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
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .channel-link {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9375rem;
        }
        .channel-address {
          font-style: normal;
          color: var(--color-text-muted);
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .channel-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
          margin-top: 0.25rem;
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
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
        }
        .messaging-sub {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .contact-faq-section {
          margin-top: 5rem;
        }
        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item-card.open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .faq-q-text {
          padding-right: 1rem;
        }
        .faq-answer-panel {
          padding: 0 1.5rem 1.5rem 1.5rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        @media (max-width: 992px) {
          .contact-layout-grid { grid-template-columns: 1fr; }
          .contact-form-card { padding: 1.75rem; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `})]})},Lp=()=>{const m=()=>{if(typeof window>"u")return"";const D=window.location.hash.split("?")[1]||window.location.search.replace(/^\?/,"");return new URLSearchParams(D).get("q")||""},[f,c]=A.useState(m),[C,N]=A.useState("all"),[S,z]=A.useState(60),[j,w]=A.useState("match");A.useEffect(()=>{c(m())},[]);const T=A.useMemo(()=>{const D=f.toLowerCase().trim();return ft.filter(k=>{const b=C==="all"||k.category===C,M=k.price<=S,Y=!D||k.name.toLowerCase().includes(D)||k.description.toLowerCase().includes(D)||k.subcategory.toLowerCase().includes(D)||k.tags.some(ie=>ie.toLowerCase().includes(D));return b&&M&&Y}).sort((k,b)=>j==="price-asc"?k.price-b.price:j==="price-desc"?b.price-k.price:j==="rating"?b.rating-k.rating:(b.isFeatured?1:0)-(k.isFeatured?1:0))},[f,C,S,j]);return t.jsxs("div",{className:"search-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header search-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Mt,{size:14})," Catalog Search"]}),t.jsx("h1",{className:"cat-page-title",children:"Explore All Elamel Kits, Treats & Keepsakes"}),t.jsx("p",{className:"cat-page-lead",children:"Instantly find ceramic painting sets, bakery cakes, cookies, and personalized gifts."}),t.jsxs("div",{className:"search-page-input-wrap",children:[t.jsx(Mt,{size:20,className:"search-bar-icon"}),t.jsx("input",{type:"search",value:f,onChange:D=>c(D.target.value),placeholder:"Search by keyword, product name, dietary tag...",className:"search-bar-input","aria-label":"Search all products"}),f&&t.jsx("button",{onClick:()=>c(""),className:"search-clear-btn","aria-label":"Clear search input",children:"Clear"})]})]})})}),t.jsx("section",{className:"section search-results-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"catalog-toolbar",children:[t.jsxs("div",{className:"filter-tabs",role:"tablist","aria-label":"Search category filters",children:[t.jsx("button",{role:"tab","aria-selected":C==="all",onClick:()=>N("all"),className:`filter-tab-btn ${C==="all"?"active":""}`,children:"All Categories"}),t.jsx("button",{role:"tab","aria-selected":C==="colors",onClick:()=>N("colors"),className:`filter-tab-btn ${C==="colors"?"active":""}`,children:"Elamel Colors"}),t.jsx("button",{role:"tab","aria-selected":C==="goodies",onClick:()=>N("goodies"),className:`filter-tab-btn ${C==="goodies"?"active":""}`,children:"Elamel Goodies"}),t.jsx("button",{role:"tab","aria-selected":C==="moments",onClick:()=>N("moments"),className:`filter-tab-btn ${C==="moments"?"active":""}`,children:"Moments & Souvenirs"})]}),t.jsxs("div",{className:"search-side-controls",children:[t.jsxs("div",{className:"price-slider-wrap",children:[t.jsxs("label",{className:"price-slider-label",children:["Max Price: ",t.jsxs("strong",{children:["$",S]})]}),t.jsx("input",{type:"range",min:15,max:60,step:5,value:S,onChange:D=>z(Number(D.target.value)),className:"price-range-slider","aria-label":"Filter maximum price"})]}),t.jsxs("select",{value:j,onChange:D=>w(D.target.value),className:"sort-dropdown","aria-label":"Sort search results",children:[t.jsx("option",{value:"match",children:"Best Match"}),t.jsx("option",{value:"price-asc",children:"Price: Low to High"}),t.jsx("option",{value:"price-desc",children:"Price: High to Low"}),t.jsx("option",{value:"rating",children:"Highest Rated"})]})]})]}),t.jsx("div",{className:"search-results-summary",children:t.jsxs("span",{children:["Found ",t.jsx("strong",{children:T.length})," matching item",T.length===1?"":"s",f&&t.jsxs("span",{children:[' for "',t.jsx("em",{children:f}),'"']})]})}),T.length===0?t.jsxs("div",{className:"search-empty-state",children:[t.jsx(Ne,{size:48,color:"#CBD5E1"}),t.jsx("h3",{children:"No items found matching your criteria"}),t.jsx("p",{children:"Try clearing your keywords or expanding your maximum price filter."}),t.jsx("button",{onClick:()=>{c(""),N("all"),z(60)},className:"btn btn-primary",children:"Reset All Filters"})]}):t.jsx("div",{className:"product-grid",children:T.map(D=>t.jsx(Jn,{product:D},D.id))})]})}),t.jsx("style",{children:`
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
      `})]})},Bp=()=>{const{navigate:m}=kr(),f=[{title:"Main Navigation & Subbrands",icon:t.jsx(Fd,{size:20,color:"#E1285B"}),links:[{label:"Home Page",path:"/",desc:"Brand intro, category highlights, why families love us, and featured items"},{label:"Elamel Colors",path:"/colors",desc:"Ceramic kits: Tableware, Decorative pieces, Gift sets, Kids pottery, Glaze studio"},{label:"Elamel Goodies",path:"/goodies",desc:"Bakery treats: Family cakes, Cookies, Occasion treats, Treat Box builder"},{label:"Moments & Souvenirs",path:"/moments-souvenirs",desc:"Personalised keepsakes: Heirloom plates, custom cookie crates, couple mugs"},{label:"About Elamel",path:"/about",desc:"Brand origin story, values, food & glaze safety standards, community workshops"},{label:"Contact & Orders",path:"/contact",desc:"Pre-order inquiry form, studio location, phone/email, and FAQ accordion"}]},{title:"Interactive Experiences & Tools",icon:t.jsx(Et,{size:20,color:"#F8971D"}),links:[{label:"Live Personalisation Studio",path:"/moments-souvenirs",desc:"Interactive live engraving & message cookie visual preview tool"},{label:"Interactive Glaze Studio",path:"/colors",desc:"2D pottery color palette tester and simulator"},{label:"Family Treat Box Builder",path:"/goodies",desc:"4-pack and 6-pack assortment custom builder with dietary monitor"},{label:"Global Catalog Search",path:"/search",desc:"Search all kits, bakery treats, and stories with advanced filters"}]},{title:"Trust, Accessibility & Legal",icon:t.jsx(ap,{size:20,color:"#10B981"}),links:[{label:"Accessibility Statement",path:"/accessibility",desc:"WCAG 2.2 AA compliance, font scaling, high contrast toggle, keyboard guide"},{label:"Privacy Policy",path:"/privacy",desc:"Child privacy protection, zero dark patterns, GDPR & data handling"},{label:"Terms of Use",path:"/terms",desc:"Safe family service terms, delivery standards, ceramic & bakery policies"},{label:"Sitemap Index",path:"/sitemap",desc:"Hierarchical navigation map of all public pages and interactive tools"}]}];return t.jsxs("div",{className:"sitemap-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header sitemap-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Oh,{size:14})," Information Architecture"]}),t.jsx("h1",{className:"cat-page-title",children:"Website Sitemap & Page Directory"}),t.jsx("p",{className:"cat-page-lead",children:"A comprehensive hierarchical overview of all pages, interactive tools, subbrands, and legal policies on the Elamel website."})]})})}),t.jsx("section",{className:"section sitemap-main-section",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"sitemap-sections-grid",children:f.map((c,C)=>t.jsxs("div",{className:"sitemap-card",children:[t.jsxs("div",{className:"sitemap-card-header",children:[t.jsx("div",{className:"sitemap-icon-box",children:c.icon}),t.jsx("h2",{className:"sitemap-section-title",children:c.title})]}),t.jsx("ul",{className:"sitemap-links-list",children:c.links.map((N,S)=>t.jsx("li",{className:"sitemap-link-item",children:t.jsxs("button",{onClick:()=>m(N.path),className:"sitemap-btn-link",children:[t.jsxs("div",{className:"sitemap-link-content",children:[t.jsxs("span",{className:"link-title-text",children:[N.label," ",t.jsx("code",{className:"link-path-code",children:N.path})]}),t.jsx("span",{className:"link-desc-text",children:N.desc})]}),t.jsx(gi,{size:16,className:"link-chevron"})]})},S))})]},C))})})}),t.jsx("style",{children:`
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
      `})]})},Ip=()=>t.jsxs("div",{className:"policy-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header privacy-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Ge,{size:14})," Trust & Transparency"]}),t.jsx("h1",{className:"cat-page-title",children:"Privacy Policy & Family Data Protection"}),t.jsxs("p",{className:"cat-page-lead",children:["At ",t.jsx("strong",{children:"elamel"}),", we treat your family’s privacy with the highest respect. We operate with zero dark patterns, no third-party data selling, and strict child privacy protections."]})]})})}),t.jsx("section",{className:"section policy-content-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"policy-card",children:[t.jsxs("div",{className:"policy-header-badge",children:[t.jsx(Mh,{size:18,color:"#10B981"}),t.jsx("span",{children:"Effective Date: Updated for 2026 Season • GDPR & COPPA Compliant"})]}),t.jsxs("article",{className:"policy-article",children:[t.jsx("h2",{children:"1. Our Commitment to Families and Children"}),t.jsx("p",{children:"We recognize that children and families use our platform to explore craft kits and bakery treats. We do not intentionally collect personal information directly from children under 13 without verifiable parental consent. All ordering inquiries, workshop bookings, and personalization requests must be completed by an adult."}),t.jsx("h2",{children:"2. Information We Collect"}),t.jsx("p",{children:"We only collect the minimum information necessary to fulfill your orders, craft inquiries, and provide customer support:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Contact Details:"})," Your name, email address, phone number, and optional delivery address when submitting a pre-order request."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Personalization Information:"})," Family names, dates, or messages you submit for custom engraved ceramics or message cookies."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Browsing & Accessibility Preferences:"})," User settings such as font scaling, high contrast mode, and reduced motion stored locally in your browser."]})]}),t.jsx("h2",{children:"3. How We Use Your Information"}),t.jsx("p",{children:"Your information is used strictly for:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Processing and fulfilling your ceramic kits and bakery orders."}),t.jsx("li",{children:"Communicating updates regarding pre-orders, custom engravings, and workshop reservations."}),t.jsx("li",{children:"Sending our optional Family Club newsletter (which you can unsubscribe from at any time with one click)."})]}),t.jsx("h2",{children:"4. Zero Dark Patterns & No Data Selling"}),t.jsxs("p",{children:["We pledge that we ",t.jsx("strong",{children:"never"})," sell, rent, or trade your family data to third-party advertisers. There are no deceptive countdown timers, hidden opt-ins, or confusing unsubscribe processes on our website."]}),t.jsx("h2",{children:"5. Data Storage and Security"}),t.jsx("p",{children:"All data transmitted through our website is encrypted using industry-standard SSL/TLS protocols. Personalization details are kept only for the duration required to manufacture your custom heirloom pieces and maintain customer warranty records."}),t.jsx("h2",{children:"6. Your Privacy Rights"}),t.jsxs("p",{children:["You have the full right to access, update, or permanently delete your personal information from our systems at any time. Simply reach out to our privacy coordinator at ",t.jsx("a",{href:"mailto:privacy@elamel-family.com",children:"privacy@elamel-family.com"}),"."]}),t.jsxs("div",{className:"policy-contact-box",children:[t.jsx(yo,{size:24,color:"#E1285B"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Questions about our privacy practices?"}),t.jsxs("p",{children:["Contact our Data Protection Officer at ",t.jsx("em",{children:"privacy@elamel-family.com"})," or call +1 (800) 555-ELAMEL."]})]})]})]})]})})}),t.jsx("style",{children:`
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
      `})]}),Rp=()=>t.jsxs("div",{className:"policy-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header terms-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(Jh,{size:14})," Service Terms"]}),t.jsx("h1",{className:"cat-page-title",children:"Terms of Use & Family Guarantees"}),t.jsx("p",{className:"cat-page-lead",children:"Clear, transparent guidelines on how we craft your ceramic kits, bake your celebration goodies, and protect your satisfaction."})]})})}),t.jsx("section",{className:"section policy-content-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"policy-card",children:[t.jsxs("div",{className:"policy-header-badge",children:[t.jsx(bh,{size:18,color:"#0284C7"}),t.jsx("span",{children:"Terms of Service • Last Updated: 2026"})]}),t.jsxs("article",{className:"policy-article",children:[t.jsx("h2",{children:"1. Welcome to Elamel"}),t.jsx("p",{children:"By using our website, purchasing our ceramic craft kits, or ordering our bakery treats, you agree to the following terms. We keep our terms straightforward, transparent, and fair to all family members."}),t.jsx("h2",{children:"2. Product Safety & Intended Use"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Elamel Colors:"})," All included glazes are strictly non-toxic, lead-free, and toy-safe. Ceramics must be oven-cured according to included guidelines to achieve durable, food-safe finishes. Adult supervision is recommended when crafting with young children."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Elamel Goodies:"})," All bakery items are made fresh with clear allergen disclosures. Because treats contain real butter and no synthetic preservatives, please observe the indicated storage guidelines and consume within the recommended freshness window."]}),t.jsx("h2",{children:"3. Custom Personalisation & Orders"}),t.jsx("p",{children:"When submitting personalized text for heirloom plates, mugs, or message cookie crates:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Please double-check the spelling of names, anniversary dates, and messages during your live studio preview."}),t.jsx("li",{children:"We reserve the right to decline text submissions that contain profane, abusive, or discriminatory language in accordance with our family-friendly ethos."}),t.jsx("li",{children:"Customized items undergo a 2-4 business day artisan preparation and kiln cure process before dispatch."})]}),t.jsx("h2",{children:"4. Quality & Happiness Guarantee"}),t.jsx("p",{children:"If your ceramic kit arrives with any damage during transit, or if a bakery item does not meet our high freshness standards, please contact us within 48 hours of receipt with a photo, and we will happily dispatch a complimentary replacement or provide a full refund."}),t.jsx("h2",{children:"5. Studio Workshops & Bookings"}),t.jsx("p",{children:"Workshop reservations can be rescheduled up to 48 hours prior to the event time free of charge. Children attending workshops must be accompanied by a participating adult."}),t.jsx("h2",{children:"6. Contact & Disputes"}),t.jsxs("p",{children:["We believe in resolving any concern with warmth and fairness. Please reach out to ",t.jsx("a",{href:"mailto:support@elamel-family.com",children:"support@elamel-family.com"})," with any feedback or questions."]})]})]})})}),t.jsx("style",{children:`
        .terms-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(248, 151, 29, 0.08) 50%, rgba(254, 242, 242, 0.5) 100%);
        }
      `})]}),Op=()=>{const{settings:m,setFontSize:f,toggleHighContrast:c,toggleReducedMotion:C}=kd();return t.jsxs("div",{className:"accessibility-page",children:[t.jsx(Ir,{}),t.jsx("section",{className:"category-hero-header a11y-hero",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cat-hero-inner",children:[t.jsxs("span",{className:"section-eyebrow",children:[t.jsx(on,{size:14})," Inclusive by Design"]}),t.jsx("h1",{className:"cat-page-title",children:"Accessibility Statement & Preferences"}),t.jsxs("p",{className:"cat-page-lead",children:["We are committed to ensuring digital accessibility for all family members, children, and adults of varying abilities. Our website is built adhering to the ",t.jsx("strong",{children:"WCAG 2.2 Level AA"})," guidelines."]})]})})}),t.jsx("section",{className:"section a11y-main-section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"a11y-tester-card",children:[t.jsxs("div",{className:"tester-header",children:[t.jsx(Ne,{size:24,color:"#E1285B"}),t.jsxs("div",{children:[t.jsx("h2",{className:"tester-title",children:"Interactive Display & Reading Preferences"}),t.jsx("p",{className:"tester-sub",children:"Customize your display settings across the entire website in real time."})]})]}),t.jsxs("div",{className:"tester-controls-grid",children:[t.jsxs("div",{className:"tester-control-box",children:[t.jsxs("div",{className:"tester-box-head",children:[t.jsx(Md,{size:20,color:"#0284C7"}),t.jsx("strong",{children:"Text Size Adjustment"})]}),t.jsx("p",{className:"tester-box-desc",children:"Scale typography for comfortable reading:"}),t.jsxs("div",{className:"tester-btn-group",children:[t.jsx("button",{onClick:()=>f("normal"),className:`tester-choice-btn ${m.fontSize==="normal"?"active":""}`,children:"Standard (100%)"}),t.jsx("button",{onClick:()=>f("large"),className:`tester-choice-btn ${m.fontSize==="large"?"active":""}`,children:"Large (115%)"}),t.jsx("button",{onClick:()=>f("xlarge"),className:`tester-choice-btn ${m.fontSize==="xlarge"?"active":""}`,children:"Extra Large (130%)"})]})]}),t.jsxs("div",{className:"tester-control-box",children:[t.jsxs("div",{className:"tester-box-head",children:[t.jsx(on,{size:20,color:"#F8971D"}),t.jsx("strong",{children:"High Contrast Palette"})]}),t.jsx("p",{className:"tester-box-desc",children:"Enforces black-on-white text with 14:1+ luminance:"}),t.jsx("button",{onClick:c,className:`btn ${m.highContrast?"btn-primary":"btn-secondary"} btn-full-width`,children:m.highContrast?"High Contrast is ON":"Enable High Contrast"})]}),t.jsxs("div",{className:"tester-control-box",children:[t.jsxs("div",{className:"tester-box-head",children:[t.jsx(Td,{size:20,color:"#10B981"}),t.jsx("strong",{children:"Animation & Motion Control"})]}),t.jsx("p",{className:"tester-box-desc",children:"Eliminates sliding panels and celebratory effects:"}),t.jsx("button",{onClick:C,className:`btn ${m.reducedMotion?"btn-primary":"btn-secondary"} btn-full-width`,children:m.reducedMotion?"Reduced Motion is ON":"Enable Reduced Motion"})]})]})]}),t.jsxs("div",{className:"a11y-details-card",children:[t.jsx("h2",{className:"a11y-section-heading",children:"How We Implement WCAG 2.2 Principles (POUR)"}),t.jsxs("div",{className:"pour-grid",children:[t.jsxs("div",{className:"pour-card",children:[t.jsxs("div",{className:"pour-header",children:[t.jsx(on,{size:22,color:"#E1285B"}),t.jsx("h3",{children:"1. Perceivable"})]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Text Contrast:"})," Minimum 4.5:1 ratio for body text and 3:1 for large headers against light backgrounds."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Alt Text:"})," All meaningful images include descriptive alternative text detailing item type and use."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Sensory Independence:"})," Instructions do not rely solely on shape, size, or color alone."]})]})]}),t.jsxs("div",{className:"pour-card",children:[t.jsxs("div",{className:"pour-header",children:[t.jsx(Eh,{size:22,color:"#F8971D"}),t.jsx("h3",{children:"2. Operable"})]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Full Keyboard Navigation:"})," Every button, filter, and modal is reachable via ",t.jsx("code",{children:"Tab"})," and ",t.jsx("code",{children:"Shift+Tab"}),"."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Visible Focus Indicators:"})," High-visibility outline (",t.jsx("code",{children:"3px solid #E1285B"}),") on active elements."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Controllable Motion:"})," Carousels feature visible pause/play controls."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Skip Link:"}),' Direct "Skip to main content" link for keyboard users.']})]})]}),t.jsxs("div",{className:"pour-card",children:[t.jsxs("div",{className:"pour-header",children:[t.jsx(vp,{size:22,color:"#0284C7"}),t.jsx("h3",{children:"3. Understandable"})]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Predictable Layout:"})," Consistent navigation, header, and footer positions on every single page."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Clear Error Feedback:"})," Friendly inline validation messages explaining how to fix issues."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Plain Language:"})," Jargon-free copy respectful of both children and adults."]})]})]}),t.jsxs("div",{className:"pour-card",children:[t.jsxs("div",{className:"pour-header",children:[t.jsx(Ge,{size:22,color:"#10B981"}),t.jsx("h3",{children:"4. Robust"})]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Semantic HTML5:"})," Native ",t.jsx("code",{children:"<header>"}),", ",t.jsx("code",{children:"<nav>"}),", ",t.jsx("code",{children:"<main>"}),", ",t.jsx("code",{children:"<section>"}),", and ",t.jsx("code",{children:"<footer>"})," tags."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"ARIA Landmarks & Live Regions:"})," Dynamic shopping bag and toast updates are announced automatically."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Cross-Browser Reliability:"})," Functions seamlessly without requiring external plugins."]})]})]})]}),t.jsxs("div",{className:"keyboard-shortcuts-table-wrap",children:[t.jsx("h3",{className:"sub-heading",children:"Keyboard Navigation Guide"}),t.jsxs("table",{className:"shortcuts-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Key"}),t.jsx("th",{children:"Action"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("kbd",{children:"Tab"})}),t.jsx("td",{children:"Move focus to the next interactive link, button, or input"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("kbd",{children:"Shift"})," + ",t.jsx("kbd",{children:"Tab"})]}),t.jsx("td",{children:"Move focus to the previous interactive element"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("kbd",{children:"Enter"})," / ",t.jsx("kbd",{children:"Space"})]}),t.jsx("td",{children:"Activate buttons, links, or toggle checkboxes"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("kbd",{children:"Esc"})}),t.jsx("td",{children:"Close open modals, search overlay, or Treat Box drawer"})]})]})]})]})]})]})}),t.jsx("style",{children:`
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
      `})]})},$p=()=>{const{currentPath:m}=kr(),[f,c]=A.useState(!1),[C,N]=A.useState(!1),S=()=>{switch(m.split("?")[0]){case"/":case"":return t.jsx(gd,{});case"/colors":return t.jsx(Ep,{});case"/goodies":return t.jsx(Mp,{});case"/moments-souvenirs":case"/moments":return t.jsx(Tp,{});case"/about":return t.jsx(Dp,{});case"/contact":return t.jsx(Ap,{});case"/search":return t.jsx(Lp,{});case"/sitemap":return t.jsx(Bp,{});case"/privacy":return t.jsx(Ip,{});case"/terms":return t.jsx(Rp,{});case"/accessibility":return t.jsx(Op,{});default:return t.jsx(gd,{})}};return t.jsxs("div",{className:"app-shell",children:[t.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),t.jsx(bp,{onOpenSearch:()=>c(!0),onOpenAccessibility:()=>N(!0)}),t.jsx("main",{id:"main-content",className:"main-landmark",role:"main",tabIndex:-1,children:S()}),t.jsx(wp,{}),t.jsx(kp,{}),t.jsx(Np,{}),t.jsx(Cp,{isOpen:f,onClose:()=>c(!1)}),t.jsx(Fp,{isOpen:C,onClose:()=>N(!1)}),t.jsx(Sp,{})]})},Wp=()=>t.jsx(Hm,{children:t.jsx($m,{children:t.jsx(Om,{children:t.jsx(Wm,{children:t.jsx($p,{})})})})}),vd=document.getElementById("root");vd&&Rm.createRoot(vd).render(t.jsx(_m.StrictMode,{children:t.jsx(Wp,{})}));
