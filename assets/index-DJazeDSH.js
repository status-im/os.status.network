(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jf={exports:{}},cs={},Jf={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),wh=Symbol.for("react.portal"),xh=Symbol.for("react.fragment"),_h=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Sh=Symbol.for("react.provider"),Ih=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Bh=Symbol.for("react.suspense"),bh=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),tc=Symbol.iterator;function Th(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var Wf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,Gf={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Wf}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=Lr.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Wf}var Ha=za.prototype=new Kf;Ha.constructor=za;Yf(Ha,Lr.prototype);Ha.isPureReactComponent=!0;var nc=Array.isArray,Xf=Object.prototype.hasOwnProperty,Va={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Xf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Di,type:e,key:o,ref:l,props:i,_owner:Va.current}}function Ph(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function Qh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qh(""+e.key):t.toString(36)}function fo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Di:case wh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+zs(l,0):r,nc(i)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),fo(i,t,n,"",function(f){return f})):i!=null&&(ja(i)&&(i=Ph(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(rc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",nc(e))for(var u=0;u<e.length;u++){o=e[u];var c=r+zs(o,u);l+=fo(o,t,n,c,i)}else if(c=Th(e),typeof c=="function")for(e=c.call(e),u=0;!(o=e.next()).done;)o=o.value,c=r+zs(o,u++),l+=fo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return fo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Oh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Ao={transition:null},Dh={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Va};function ed(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Lr;Z.Fragment=xh;Z.Profiler=kh;Z.PureComponent=za;Z.StrictMode=_h;Z.Suspense=Bh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;Z.act=ed;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)Xf.call(t,c)&&!Zf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Di,type:e.type,key:i,ref:o,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:Ih,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sh,_context:e},e.Consumer=e};Z.createElement=qf;Z.createFactory=function(e){var t=qf.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Ch,render:e}};Z.isValidElement=ja;Z.lazy=function(e){return{$$typeof:Rh,_payload:{_status:-1,_result:e},_init:Oh}};Z.memo=function(e,t){return{$$typeof:bh,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};Z.unstable_act=ed;Z.useCallback=function(e,t){return Je.current.useCallback(e,t)};Z.useContext=function(e){return Je.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Je.current.useEffect(e,t)};Z.useId=function(){return Je.current.useId()};Z.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Je.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};Z.useRef=function(e){return Je.current.useRef(e)};Z.useState=function(e){return Je.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Je.current.useTransition()};Z.version="18.3.1";Jf.exports=Z;var w=Jf.exports;const x=Ua(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh=w,Nh=Symbol.for("react.element"),Mh=Symbol.for("react.fragment"),Fh=Object.prototype.hasOwnProperty,$h=Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uh={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fh.call(t,r)&&!Uh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nh,type:e,key:o,ref:l,props:i,_owner:$h.current}}cs.Fragment=Mh;cs.jsx=td;cs.jsxs=td;jf.exports=cs;var B=jf.exports,Bl={},nd={exports:{}},it={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,Q){var M=C.length;C.push(Q);e:for(;0<M;){var q=M-1>>>1,Y=C[q];if(0<i(Y,Q))C[q]=Q,C[M]=Y,M=q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var Q=C[0],M=C.pop();if(M!==Q){C[0]=M;e:for(var q=0,Y=C.length,F=Y>>>1;q<F;){var $=2*(q+1)-1,ee=C[$],z=$+1,G=C[z];if(0>i(ee,M))z<Y&&0>i(G,ee)?(C[q]=G,C[z]=M,q=z):(C[q]=ee,C[$]=M,q=$);else if(z<Y&&0>i(G,M))C[q]=G,C[z]=M,q=z;else break e}}return Q}function i(C,Q){var M=C.sortIndex-Q.sortIndex;return M!==0?M:C.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var c=[],f=[],h=1,s=null,a=3,d=!1,g=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var Q=n(f);Q!==null;){if(Q.callback===null)r(f);else if(Q.startTime<=C)r(f),Q.sortIndex=Q.expirationTime,t(c,Q);else break;Q=n(f)}}function E(C){if(v=!1,m(C),!g)if(n(c)!==null)g=!0,_e(_);else{var Q=n(f);Q!==null&&ke(E,Q.startTime-C)}}function _(C,Q){g=!1,v&&(v=!1,A(R),R=-1),d=!0;var M=a;try{for(m(Q),s=n(c);s!==null&&(!(s.expirationTime>Q)||C&&!U());){var q=s.callback;if(typeof q=="function"){s.callback=null,a=s.priorityLevel;var Y=q(s.expirationTime<=Q);Q=e.unstable_now(),typeof Y=="function"?s.callback=Y:s===n(c)&&r(c),m(Q)}else r(c);s=n(c)}if(s!==null)var F=!0;else{var $=n(f);$!==null&&ke(E,$.startTime-Q),F=!1}return F}finally{s=null,a=M,d=!1}}var k=!1,S=null,R=-1,P=5,L=-1;function U(){return!(e.unstable_now()-L<P)}function H(){if(S!==null){var C=e.unstable_now();L=C;var Q=!0;try{Q=S(!0,C)}finally{Q?J():(k=!1,S=null)}}else k=!1}var J;if(typeof p=="function")J=function(){p(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=H,J=function(){K.postMessage(null)}}else J=function(){y(H,0)};function _e(C){S=C,k||(k=!0,J())}function ke(C,Q){R=y(function(){C(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,_e(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return a},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(a){case 1:case 2:case 3:var Q=3;break;default:Q=a}var M=a;a=Q;try{return C()}finally{a=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,Q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=a;a=C;try{return Q()}finally{a=M}},e.unstable_scheduleCallback=function(C,Q,M){var q=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?q+M:q):M=q,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=M+Y,C={id:h++,callback:Q,priorityLevel:C,startTime:M,expirationTime:Y,sortIndex:-1},M>q?(C.sortIndex=M,t(f,C),n(c)===null&&C===n(f)&&(v?(A(R),R=-1):v=!0,ke(E,M-q))):(C.sortIndex=Y,t(c,C),g||d||(g=!0,_e(_))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var Q=a;return function(){var M=a;a=Q;try{return C.apply(this,arguments)}finally{a=M}}}})(id);rd.exports=id;var zh=rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh=w,rt=zh;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,hi={};function Yn(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(hi[e]=t,e=0;e<t.length;e++)od.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},oc={};function jh(e){return bl.call(oc,e)?!0:bl.call(ic,e)?!1:Vh.test(e)?oc[e]=!0:(ic[e]=!0,!1)}function Jh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wh(e,t,n,r){if(t===null||typeof t>"u"||Jh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function Wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ja,Wa);Me[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ja,Wa);Me[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ja,Wa);Me[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wh(t,n,i,r)&&(n=null),r||i===null?jh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),or=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ld=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),ad=Symbol.for("react.offscreen"),sc=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Hs;function qr(e){if(Hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hs=t&&t[1]||""}return`
`+Hs+e}var Vs=!1;function js(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=u);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function Yh(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=js(e.type,!1),e;case 11:return e=js(e.type.render,!1),e;case 1:return e=js(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case or:return"Portal";case Rl:return"Profiler";case Ga:return"StrictMode";case Tl:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case sd:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xa:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function Gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kh(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=Kh(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fd(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Dl(e,t){fd(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(ei(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function dd(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,pd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xh=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){Xh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zh=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,yr=null,Er=null;function fc(e){if(e=Mi(e)){if(typeof zl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=hs(t),zl(e.stateNode,e.type,t))}}function md(e){yr?Er?Er.push(e):Er=[e]:yr=e}function vd(){if(yr){var e=yr,t=Er;if(Er=yr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function yd(e,t){return e(t)}function Ed(){}var Js=!1;function wd(e,t,n){if(Js)return e(t,n);Js=!0;try{return yd(e,t,n)}finally{Js=!1,(yr!==null||Er!==null)&&(Ed(),vd())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Hl=!1;if(jt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Hl=!1}function qh(e,t,n,r,i,o,l,u,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var si=!1,Oo=null,Do=!1,Vl=null,eg={onError:function(e){si=!0,Oo=e}};function tg(e,t,n,r,i,o,l,u,c){si=!1,Oo=null,qh.apply(eg,arguments)}function ng(e,t,n,r,i,o,l,u,c){if(tg.apply(this,arguments),si){if(si){var f=Oo;si=!1,Oo=null}else throw Error(b(198));Do||(Do=!0,Vl=f)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dc(e){if(Gn(e)!==e)throw Error(b(188))}function rg(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dc(i),e;if(o===r)return dc(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function _d(e){return e=rg(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=rt.unstable_scheduleCallback,Ac=rt.unstable_cancelCallback,ig=rt.unstable_shouldYield,og=rt.unstable_requestPaint,ve=rt.unstable_now,sg=rt.unstable_getCurrentPriorityLevel,qa=rt.unstable_ImmediatePriority,Id=rt.unstable_UserBlockingPriority,Lo=rt.unstable_NormalPriority,lg=rt.unstable_LowPriority,Cd=rt.unstable_IdlePriority,fs=null,Tt=null;function ag(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:fg,ug=Math.log,cg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(ug(e)/cg|0)|0}var ji=64,Ji=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=ti(u):(o&=l,o!==0&&(r=ti(o)))}else l=n&~i,l!==0?r=ti(l):o!==0&&(r=ti(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ag(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-wt(o),u=1<<l,c=i[l];c===-1?(!(u&n)||u&r)&&(i[l]=dg(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bd(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function Ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function pg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rd,tu,Td,Pd,Qd,Jl=!1,Wi=[],sn=null,ln=null,an=null,vi=new Map,yi=new Map,tn=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function jr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gg(e,t,n,r,i){switch(t){case"focusin":return sn=jr(sn,e,t,n,r,i),!0;case"dragenter":return ln=jr(ln,e,t,n,r,i),!0;case"mouseover":return an=jr(an,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vi.set(o,jr(vi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yi.set(o,jr(yi.get(o)||null,e,t,n,r,i)),!0}return!1}function Od(e){var t=Pn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=xd(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=Mi(n),t!==null&&tu(t),e.blockedOn=n,!1;t.shift()}return!0}function hc(e,t,n){po(e)&&n.delete(t)}function mg(){Jl=!1,sn!==null&&po(sn)&&(sn=null),ln!==null&&po(ln)&&(ln=null),an!==null&&po(an)&&(an=null),vi.forEach(hc),yi.forEach(hc)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,mg)))}function Ei(e){function t(i){return Jr(i,e)}if(0<Wi.length){Jr(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Jr(sn,e),ln!==null&&Jr(ln,e),an!==null&&Jr(an,e),vi.forEach(t),yi.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&tn.shift()}var wr=Gt.ReactCurrentBatchConfig,Mo=!0;function vg(e,t,n,r){var i=oe,o=wr.transition;wr.transition=null;try{oe=1,nu(e,t,n,r)}finally{oe=i,wr.transition=o}}function yg(e,t,n,r){var i=oe,o=wr.transition;wr.transition=null;try{oe=4,nu(e,t,n,r)}finally{oe=i,wr.transition=o}}function nu(e,t,n,r){if(Mo){var i=Wl(e,t,n,r);if(i===null)rl(e,t,r,Fo,n),pc(e,r);else if(gg(i,e,t,n,r))r.stopPropagation();else if(pc(e,r),t&4&&-1<hg.indexOf(e)){for(;i!==null;){var o=Mi(i);if(o!==null&&Rd(o),o=Wl(e,t,n,r),o===null&&rl(e,t,r,Fo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Fo=null;function Wl(e,t,n,r){if(Fo=null,e=Za(r),e=Pn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function Dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sg()){case qa:return 1;case Id:return 4;case Lo:case lg:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var rn=null,ru=null,ho=null;function Ld(){if(ho)return ho;var e,t=ru,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function gc(){return!1}function ot(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:gc,this.isPropagationStopped=gc,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=ot(Nr),Ni=pe({},Nr,{view:0,detail:0}),Eg=ot(Ni),Ys,Gs,Wr,ds=pe({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Ys=e.screenX-Wr.screenX,Gs=e.screenY-Wr.screenY):Gs=Ys=0,Wr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),mc=ot(ds),wg=pe({},ds,{dataTransfer:0}),xg=ot(wg),_g=pe({},Ni,{relatedTarget:0}),Ks=ot(_g),kg=pe({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=ot(kg),Ig=pe({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=ot(Ig),Bg=pe({},Nr,{data:0}),vc=ot(Bg),bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tg[e])?!!t[e]:!1}function ou(){return Pg}var Qg=pe({},Ni,{key:function(e){if(e.key){var t=bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=ot(Qg),Dg=pe({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=ot(Dg),Lg=pe({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Ng=ot(Lg),Mg=pe({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=ot(Mg),$g=pe({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=ot($g),zg=[9,13,27,32],su=jt&&"CompositionEvent"in window,li=null;jt&&"documentMode"in document&&(li=document.documentMode);var Hg=jt&&"TextEvent"in window&&!li,Nd=jt&&(!su||li&&8<li&&11>=li),Ec=" ",wc=!1;function Md(e,t){switch(e){case"keyup":return zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function Vg(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(wc=!0,Ec);case"textInput":return e=t.data,e===Ec&&wc?null:e;default:return null}}function jg(e,t){if(lr)return e==="compositionend"||!su&&Md(e,t)?(e=Ld(),ho=ru=rn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jg[e.type]:t==="textarea"}function $d(e,t,n,r){md(r),t=$o(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ai=null,wi=null;function Wg(e){Xd(e,0)}function As(e){var t=cr(e);if(cd(t))return e}function Yg(e,t){if(e==="change")return t}var Ud=!1;if(jt){var Xs;if(jt){var Zs="oninput"in document;if(!Zs){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),Zs=typeof _c.oninput=="function"}Xs=Zs}else Xs=!1;Ud=Xs&&(!document.documentMode||9<document.documentMode)}function kc(){ai&&(ai.detachEvent("onpropertychange",zd),wi=ai=null)}function zd(e){if(e.propertyName==="value"&&As(wi)){var t=[];$d(t,wi,e,Za(e)),wd(Wg,t)}}function Gg(e,t,n){e==="focusin"?(kc(),ai=t,wi=n,ai.attachEvent("onpropertychange",zd)):e==="focusout"&&kc()}function Kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(wi)}function Xg(e,t){if(e==="click")return As(t)}function Zg(e,t){if(e==="input"||e==="change")return As(t)}function qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:qg;function xi(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bl.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function Sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var n=Sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sc(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vd(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e0(e){var t=Vd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ic(n,o);var l=Ic(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t0=jt&&"documentMode"in document&&11>=document.documentMode,ar=null,Yl=null,ui=null,Gl=!1;function Cc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||ar==null||ar!==Qo(r)||(r=ar,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&xi(ui,r)||(ui=r,r=$o(Yl,"onSelect"),0<r.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function Gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},qs={},jd={};jt&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function ps(e){if(qs[e])return qs[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return qs[e]=t[n];return e}var Jd=ps("animationend"),Wd=ps("animationiteration"),Yd=ps("animationstart"),Gd=ps("transitionend"),Kd=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Kd.set(e,t),Yn(t,[e])}for(var el=0;el<Bc.length;el++){var tl=Bc[el],n0=tl.toLowerCase(),r0=tl[0].toUpperCase()+tl.slice(1);wn(n0,"on"+r0)}wn(Jd,"onAnimationEnd");wn(Wd,"onAnimationIteration");wn(Yd,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Gd,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ng(r,t,void 0,e),e.currentTarget=null}function Xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;bc(i,u,f),o=c}else for(l=0;l<r.length;l++){if(u=r[l],c=u.instance,f=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;bc(i,u,f),o=c}}}if(Do)throw e=Vl,Do=!1,Vl=null,e}function le(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[Ki]){e[Ki]=!0,od.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,nl("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(Dd(t)){case 1:var i=vg;break;case 4:i=yg;break;default:i=nu}n=i.bind(null,t,n,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Pn(u),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}u=u.parentNode}}r=r.return}wd(function(){var f=o,h=Za(n),s=[];e:{var a=Kd.get(e);if(a!==void 0){var d=iu,g=e;switch(e){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":d=Og;break;case"focusin":g="focus",d=Ks;break;case"focusout":g="blur",d=Ks;break;case"beforeblur":case"afterblur":d=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Ng;break;case Jd:case Wd:case Yd:d=Sg;break;case Gd:d=Fg;break;case"scroll":d=Eg;break;case"wheel":d=Ug;break;case"copy":case"cut":case"paste":d=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=yc}var v=(t&4)!==0,y=!v&&e==="scroll",A=v?a!==null?a+"Capture":null:a;v=[];for(var p=f,m;p!==null;){m=p;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,A!==null&&(E=mi(p,A),E!=null&&v.push(ki(p,E,m)))),y)break;p=p.return}0<v.length&&(a=new d(a,g,null,n,h),s.push({event:a,listeners:v}))}}if(!(t&7)){e:{if(a=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",a&&n!==Ul&&(g=n.relatedTarget||n.fromElement)&&(Pn(g)||g[Jt]))break e;if((d||a)&&(a=h.window===h?h:(a=h.ownerDocument)?a.defaultView||a.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=f,g=g?Pn(g):null,g!==null&&(y=Gn(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=f),d!==g)){if(v=mc,E="onMouseLeave",A="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=yc,E="onPointerLeave",A="onPointerEnter",p="pointer"),y=d==null?a:cr(d),m=g==null?a:cr(g),a=new v(E,p+"leave",d,n,h),a.target=y,a.relatedTarget=m,E=null,Pn(h)===f&&(v=new v(A,p+"enter",g,n,h),v.target=m,v.relatedTarget=y,E=v),y=E,d&&g)t:{for(v=d,A=g,p=0,m=v;m;m=Xn(m))p++;for(m=0,E=A;E;E=Xn(E))m++;for(;0<p-m;)v=Xn(v),p--;for(;0<m-p;)A=Xn(A),m--;for(;p--;){if(v===A||A!==null&&v===A.alternate)break t;v=Xn(v),A=Xn(A)}v=null}else v=null;d!==null&&Rc(s,a,d,v,!1),g!==null&&y!==null&&Rc(s,y,g,v,!0)}}e:{if(a=f?cr(f):window,d=a.nodeName&&a.nodeName.toLowerCase(),d==="select"||d==="input"&&a.type==="file")var _=Yg;else if(xc(a))if(Ud)_=Zg;else{_=Kg;var k=Gg}else(d=a.nodeName)&&d.toLowerCase()==="input"&&(a.type==="checkbox"||a.type==="radio")&&(_=Xg);if(_&&(_=_(e,f))){$d(s,_,n,h);break e}k&&k(e,a,f),e==="focusout"&&(k=a._wrapperState)&&k.controlled&&a.type==="number"&&Ll(a,"number",a.value)}switch(k=f?cr(f):window,e){case"focusin":(xc(k)||k.contentEditable==="true")&&(ar=k,Yl=f,ui=null);break;case"focusout":ui=Yl=ar=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Cc(s,n,h);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Cc(s,n,h)}var S;if(su)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else lr?Md(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Nd&&n.locale!=="ko"&&(lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&lr&&(S=Ld()):(rn=h,ru="value"in rn?rn.value:rn.textContent,lr=!0)),k=$o(f,R),0<k.length&&(R=new vc(R,e,null,n,h),s.push({event:R,listeners:k}),S?R.data=S:(S=Fd(n),S!==null&&(R.data=S)))),(S=Hg?Vg(e,n):jg(e,n))&&(f=$o(f,"onBeforeInput"),0<f.length&&(h=new vc("onBeforeInput","beforeinput",null,n,h),s.push({event:h,listeners:f}),h.data=S))}Xd(s,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(ki(e,o,i)),o=mi(e,t),o!=null&&r.push(ki(e,o,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,i?(c=mi(n,o),c!=null&&l.unshift(ki(n,c,u))):i||(c=mi(n,o),c!=null&&l.push(ki(n,c,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var o0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(s0,"")}function Xi(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(b(425))}function Uo(){}var Kl=null,Xl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(u0)}:ql;function u0(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Mr,Si="__reactProps$"+Mr,Jt="__reactContainer$"+Mr,ea="__reactEvents$"+Mr,c0="__reactListeners$"+Mr,f0="__reactHandles$"+Mr;function Pn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[Rt])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Rt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function hs(e){return e[Si]||null}var ta=[],fr=-1;function xn(e){return{current:e}}function ue(e){0>fr||(e.current=ta[fr],ta[fr]=null,fr--)}function se(e,t){fr++,ta[fr]=e.current,e.current=t}var mn={},ze=xn(mn),Ke=xn(!1),$n=mn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function zo(){ue(Ke),ue(ze)}function Oc(e,t,n){if(ze.current!==mn)throw Error(b(168));se(ze,t),se(Ke,n)}function qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Gh(e)||"Unknown",i));return pe({},n,r)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,$n=ze.current,se(ze,e),se(Ke,Ke.current),!0}function Dc(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=qd(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,ue(Ke),ue(ze),se(ze,e)):ue(Ke),se(Ke,n)}var Ut=null,gs=!1,ol=!1;function eA(e){Ut===null?Ut=[e]:Ut.push(e)}function d0(e){gs=!0,eA(e)}function _n(){if(!ol&&Ut!==null){ol=!0;var e=0,t=oe;try{var n=Ut;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,gs=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Sd(qa,_n),i}finally{oe=t,ol=!1}}return null}var dr=[],Ar=0,Vo=null,jo=0,at=[],ut=0,Un=null,zt=1,Ht="";function Cn(e,t){dr[Ar++]=jo,dr[Ar++]=Vo,Vo=e,jo=t}function tA(e,t,n){at[ut++]=zt,at[ut++]=Ht,at[ut++]=Un,Un=e;var r=zt;e=Ht;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,zt=1<<32-wt(t)+i|n<<i|r,Ht=o+e}else zt=1<<o|n<<i|r,Ht=e}function au(e){e.return!==null&&(Cn(e,1),tA(e,1,0))}function uu(e){for(;e===Vo;)Vo=dr[--Ar],dr[Ar]=null,jo=dr[--Ar],dr[Ar]=null;for(;e===Un;)Un=at[--ut],at[ut]=null,Ht=at[--ut],at[ut]=null,zt=at[--ut],at[ut]=null}var nt=null,tt=null,fe=!1,Et=null;function nA(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:zt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(fe){var t=tt;if(t){var n=t;if(!Lc(e,t)){if(na(e))throw Error(b(418));t=un(n.nextSibling);var r=nt;t&&Lc(e,t)?nA(r,n):(e.flags=e.flags&-4097|2,fe=!1,nt=e)}}else{if(na(e))throw Error(b(418));e.flags=e.flags&-4097|2,fe=!1,nt=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Zi(e){if(e!==nt)return!1;if(!fe)return Nc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=tt)){if(na(e))throw rA(),Error(b(418));for(;t;)nA(e,t),t=un(t.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?un(e.stateNode.nextSibling):null;return!0}function rA(){for(var e=tt;e;)e=un(e.nextSibling)}function Ir(){tt=nt=null,fe=!1}function cu(e){Et===null?Et=[e]:Et.push(e)}var A0=Gt.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function qi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function iA(e){function t(A,p){if(e){var m=A.deletions;m===null?(A.deletions=[p],A.flags|=16):m.push(p)}}function n(A,p){if(!e)return null;for(;p!==null;)t(A,p),p=p.sibling;return null}function r(A,p){for(A=new Map;p!==null;)p.key!==null?A.set(p.key,p):A.set(p.index,p),p=p.sibling;return A}function i(A,p){return A=An(A,p),A.index=0,A.sibling=null,A}function o(A,p,m){return A.index=m,e?(m=A.alternate,m!==null?(m=m.index,m<p?(A.flags|=2,p):m):(A.flags|=2,p)):(A.flags|=1048576,p)}function l(A){return e&&A.alternate===null&&(A.flags|=2),A}function u(A,p,m,E){return p===null||p.tag!==6?(p=dl(m,A.mode,E),p.return=A,p):(p=i(p,m),p.return=A,p)}function c(A,p,m,E){var _=m.type;return _===sr?h(A,p,m.props.children,E,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&Mc(_)===p.type)?(E=i(p,m.props),E.ref=Yr(A,p,m),E.return=A,E):(E=_o(m.type,m.key,m.props,null,A.mode,E),E.ref=Yr(A,p,m),E.return=A,E)}function f(A,p,m,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Al(m,A.mode,E),p.return=A,p):(p=i(p,m.children||[]),p.return=A,p)}function h(A,p,m,E,_){return p===null||p.tag!==7?(p=Mn(m,A.mode,E,_),p.return=A,p):(p=i(p,m),p.return=A,p)}function s(A,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=dl(""+p,A.mode,m),p.return=A,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:return m=_o(p.type,p.key,p.props,null,A.mode,m),m.ref=Yr(A,null,p),m.return=A,m;case or:return p=Al(p,A.mode,m),p.return=A,p;case qt:var E=p._init;return s(A,E(p._payload),m)}if(ei(p)||Hr(p))return p=Mn(p,A.mode,m,null),p.return=A,p;qi(A,p)}return null}function a(A,p,m,E){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:u(A,p,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:return m.key===_?c(A,p,m,E):null;case or:return m.key===_?f(A,p,m,E):null;case qt:return _=m._init,a(A,p,_(m._payload),E)}if(ei(m)||Hr(m))return _!==null?null:h(A,p,m,E,null);qi(A,m)}return null}function d(A,p,m,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return A=A.get(m)||null,u(p,A,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case zi:return A=A.get(E.key===null?m:E.key)||null,c(p,A,E,_);case or:return A=A.get(E.key===null?m:E.key)||null,f(p,A,E,_);case qt:var k=E._init;return d(A,p,m,k(E._payload),_)}if(ei(E)||Hr(E))return A=A.get(m)||null,h(p,A,E,_,null);qi(p,E)}return null}function g(A,p,m,E){for(var _=null,k=null,S=p,R=p=0,P=null;S!==null&&R<m.length;R++){S.index>R?(P=S,S=null):P=S.sibling;var L=a(A,S,m[R],E);if(L===null){S===null&&(S=P);break}e&&S&&L.alternate===null&&t(A,S),p=o(L,p,R),k===null?_=L:k.sibling=L,k=L,S=P}if(R===m.length)return n(A,S),fe&&Cn(A,R),_;if(S===null){for(;R<m.length;R++)S=s(A,m[R],E),S!==null&&(p=o(S,p,R),k===null?_=S:k.sibling=S,k=S);return fe&&Cn(A,R),_}for(S=r(A,S);R<m.length;R++)P=d(S,A,R,m[R],E),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?R:P.key),p=o(P,p,R),k===null?_=P:k.sibling=P,k=P);return e&&S.forEach(function(U){return t(A,U)}),fe&&Cn(A,R),_}function v(A,p,m,E){var _=Hr(m);if(typeof _!="function")throw Error(b(150));if(m=_.call(m),m==null)throw Error(b(151));for(var k=_=null,S=p,R=p=0,P=null,L=m.next();S!==null&&!L.done;R++,L=m.next()){S.index>R?(P=S,S=null):P=S.sibling;var U=a(A,S,L.value,E);if(U===null){S===null&&(S=P);break}e&&S&&U.alternate===null&&t(A,S),p=o(U,p,R),k===null?_=U:k.sibling=U,k=U,S=P}if(L.done)return n(A,S),fe&&Cn(A,R),_;if(S===null){for(;!L.done;R++,L=m.next())L=s(A,L.value,E),L!==null&&(p=o(L,p,R),k===null?_=L:k.sibling=L,k=L);return fe&&Cn(A,R),_}for(S=r(A,S);!L.done;R++,L=m.next())L=d(S,A,R,L.value,E),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?R:L.key),p=o(L,p,R),k===null?_=L:k.sibling=L,k=L);return e&&S.forEach(function(H){return t(A,H)}),fe&&Cn(A,R),_}function y(A,p,m,E){if(typeof m=="object"&&m!==null&&m.type===sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:e:{for(var _=m.key,k=p;k!==null;){if(k.key===_){if(_=m.type,_===sr){if(k.tag===7){n(A,k.sibling),p=i(k,m.props.children),p.return=A,A=p;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&Mc(_)===k.type){n(A,k.sibling),p=i(k,m.props),p.ref=Yr(A,k,m),p.return=A,A=p;break e}n(A,k);break}else t(A,k);k=k.sibling}m.type===sr?(p=Mn(m.props.children,A.mode,E,m.key),p.return=A,A=p):(E=_o(m.type,m.key,m.props,null,A.mode,E),E.ref=Yr(A,p,m),E.return=A,A=E)}return l(A);case or:e:{for(k=m.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(A,p.sibling),p=i(p,m.children||[]),p.return=A,A=p;break e}else{n(A,p);break}else t(A,p);p=p.sibling}p=Al(m,A.mode,E),p.return=A,A=p}return l(A);case qt:return k=m._init,y(A,p,k(m._payload),E)}if(ei(m))return g(A,p,m,E);if(Hr(m))return v(A,p,m,E);qi(A,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(A,p.sibling),p=i(p,m),p.return=A,A=p):(n(A,p),p=dl(m,A.mode,E),p.return=A,A=p),l(A)):n(A,p)}return y}var Cr=iA(!0),oA=iA(!1),Jo=xn(null),Wo=null,pr=null,fu=null;function du(){fu=pr=Wo=null}function Au(e){var t=Jo.current;ue(Jo),e._currentValue=t}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Wo=e,fu=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Wo===null)throw Error(b(308));pr=e,Wo.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Qn=null;function pu(e){Qn===null?Qn=[e]:Qn.push(e)}function sA(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lA(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wt(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wt(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,f=c.next;c.next=null,l===null?o=f:l.next=f,l=c;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==l&&(u===null?h.firstBaseUpdate=f:u.next=f,h.lastBaseUpdate=c))}if(o!==null){var s=i.baseState;l=0,h=f=c=null,u=o;do{var a=u.lane,d=u.eventTime;if((r&a)===a){h!==null&&(h=h.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,v=u;switch(a=t,d=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){s=g.call(d,s,a);break e}s=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,a=typeof g=="function"?g.call(d,s,a):g,a==null)break e;s=pe({},s,a);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,a=i.effects,a===null?i.effects=[u]:a.push(u))}else d={eventTime:d,lane:a,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(f=h=d,c=s):h=h.next=d,l|=a;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;a=u,u=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(!0);if(h===null&&(c=s),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=s}}function $c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Fi={},Pt=xn(Fi),Ii=xn(Fi),Ci=xn(Fi);function On(e){if(e===Fi)throw Error(b(174));return e}function gu(e,t){switch(se(Ci,t),se(Ii,e),se(Pt,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}ue(Pt),se(Pt,t)}function Br(){ue(Pt),ue(Ii),ue(Ci)}function aA(e){On(Ci.current);var t=On(Pt.current),n=Ml(t,e.type);t!==n&&(se(Ii,e),se(Pt,n))}function mu(e){Ii.current===e&&(ue(Pt),ue(Ii))}var de=xn(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function vu(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var vo=Gt.ReactCurrentDispatcher,ll=Gt.ReactCurrentBatchConfig,zn=0,Ae=null,Ie=null,Re=null,Ko=!1,ci=!1,Bi=0,p0=0;function Fe(){throw Error(b(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Eu(e,t,n,r,i,o){if(zn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?v0:y0,e=n(r,i),ci){o=0;do{if(ci=!1,Bi=0,25<=o)throw Error(b(301));o+=1,Re=Ie=null,t.updateQueue=null,vo.current=E0,e=n(r,i)}while(ci)}if(vo.current=Xo,t=Ie!==null&&Ie.next!==null,zn=0,Re=Ie=Ae=null,Ko=!1,t)throw Error(b(300));return e}function wu(){var e=Bi!==0;return Bi=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Ae.memoizedState=Re=e:Re=Re.next=e,Re}function pt(){if(Ie===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Re===null?Ae.memoizedState:Re.next;if(t!==null)Re=t,Ie=e;else{if(e===null)throw Error(b(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?Ae.memoizedState=Re=e:Re=Re.next=e}return Re}function bi(e,t){return typeof t=="function"?t(e):t}function al(e){var t=pt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,c=null,f=o;do{var h=f.lane;if((zn&h)===h)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var s={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=s,l=r):c=c.next=s,Ae.lanes|=h,Hn|=h}f=f.next}while(f!==null&&f!==o);c===null?l=r:c.next=u,kt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=pt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);kt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uA(){}function cA(e,t){var n=Ae,r=pt(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,xu(AA.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Ri(9,dA.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(b(349));zn&30||fA(n,t,i)}return i}function fA(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dA(e,t,n,r){t.value=n,t.getSnapshot=r,pA(t)&&hA(e)}function AA(e,t,n){return n(function(){pA(t)&&hA(e)})}function pA(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function hA(e){var t=Wt(e,1);t!==null&&xt(t,e,1,-1)}function Uc(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,Ae,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gA(){return pt().memoizedState}function yo(e,t,n,r){var i=Bt();Ae.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var l=Ie.memoizedState;if(o=l.destroy,r!==null&&yu(r,l.deps)){i.memoizedState=Ri(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function zc(e,t){return yo(8390656,8,e,t)}function xu(e,t){return ms(2048,8,e,t)}function mA(e,t){return ms(4,2,e,t)}function vA(e,t){return ms(4,4,e,t)}function yA(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function EA(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,yA.bind(null,t,e),n)}function _u(){}function wA(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xA(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _A(e,t,n){return zn&21?(kt(n,t)||(n=Bd(),Ae.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function h0(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{oe=n,ll.transition=r}}function kA(){return pt().memoizedState}function g0(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},SA(e))IA(t,n);else if(n=sA(e,t,n,r),n!==null){var i=je();xt(n,e,r,i),CA(n,t,r)}}function m0(e,t,n){var r=dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(SA(e))IA(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,kt(u,l)){var c=t.interleaved;c===null?(i.next=i,pu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=sA(e,t,i,r),n!==null&&(i=je(),xt(n,e,r,i),CA(n,t,r))}}function SA(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function IA(e,t){ci=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function CA(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}var Xo={readContext:At,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},v0={readContext:At,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:zc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,yA.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g0.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:_u,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=h0.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Bt();if(fe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Qe===null)throw Error(b(349));zn&30||fA(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,zc(AA.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,dA.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Qe.identifierPrefix;if(fe){var n=Ht,r=zt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y0={readContext:At,useCallback:wA,useContext:At,useEffect:xu,useImperativeHandle:EA,useInsertionEffect:mA,useLayoutEffect:vA,useMemo:xA,useReducer:al,useRef:gA,useState:function(){return al(bi)},useDebugValue:_u,useDeferredValue:function(e){var t=pt();return _A(t,Ie.memoizedState,e)},useTransition:function(){var e=al(bi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:uA,useSyncExternalStore:cA,useId:kA,unstable_isNewReconciler:!1},E0={readContext:At,useCallback:wA,useContext:At,useEffect:xu,useImperativeHandle:EA,useInsertionEffect:mA,useLayoutEffect:vA,useMemo:xA,useReducer:ul,useRef:gA,useState:function(){return ul(bi)},useDebugValue:_u,useDeferredValue:function(e){var t=pt();return Ie===null?t.memoizedState=e:_A(t,Ie.memoizedState,e)},useTransition:function(){var e=ul(bi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:uA,useSyncExternalStore:cA,useId:kA,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=dn(e),o=Vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(xt(t,e,i,r),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=dn(e),o=Vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(xt(t,e,i,r),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=dn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(xt(t,e,r,n),mo(t,e,r))}};function Hc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function BA(e,t,n){var r=!1,i=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=Xe(t)?$n:ze.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=Xe(t)?$n:ze.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vs.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=Yh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function bA(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,ma=r),la(e,t)},n}function RA(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){la(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function jc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function Jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var x0=Gt.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?oA(t,null,n,r):Cr(t,e.child,n,r)}function Yc(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=Eu(e,t,n,r,o,i),n=wu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(fe&&n&&au(t),t.flags|=1,He(e,t,r,i),t.child)}function Gc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,TA(e,t,o,r,i)):(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(l,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function TA(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xi(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return aa(e,t,n,r,i)}function PA(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(gr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(gr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(gr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(gr,et),et|=r;return He(e,t,i,n),t.child}function QA(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,i){var o=Xe(n)?$n:ze.current;return o=Sr(t,o),xr(t,i),n=Eu(e,t,n,r,o,i),r=wu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(fe&&r&&au(t),t.flags|=1,He(e,t,n,i),t.child)}function Kc(e,t,n,r,i){if(Xe(n)){var o=!0;Ho(t)}else o=!1;if(xr(t,i),t.stateNode===null)Eo(e,t),BA(t,n,r),sa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var c=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=At(f):(f=Xe(n)?$n:ze.current,f=Sr(t,f));var h=n.getDerivedStateFromProps,s=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";s||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||c!==f)&&Vc(t,l,r,f),en=!1;var a=t.memoizedState;l.state=a,Yo(t,r,l,i),c=t.memoizedState,u!==r||a!==c||Ke.current||en?(typeof h=="function"&&(oa(t,n,h,r),c=t.memoizedState),(u=en||Hc(t,n,u,r,a,c,f))?(s||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lA(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:mt(t.type,u),l.props=f,s=t.pendingProps,a=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=At(c):(c=Xe(n)?$n:ze.current,c=Sr(t,c));var d=n.getDerivedStateFromProps;(h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==s||a!==c)&&Vc(t,l,r,c),en=!1,a=t.memoizedState,l.state=a,Yo(t,r,l,i);var g=t.memoizedState;u!==s||a!==g||Ke.current||en?(typeof d=="function"&&(oa(t,n,d,r),g=t.memoizedState),(f=en||Hc(t,n,f,r,a,g,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=c,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&a===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,o,i)}function ua(e,t,n,r,i,o){QA(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Dc(t,n,!1),Yt(e,t,o);r=t.stateNode,x0.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cr(t,e.child,null,o),t.child=Cr(t,null,u,o)):He(e,t,u,o),t.memoizedState=r.state,i&&Dc(t,n,!0),t.child}function OA(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),gu(e,t.containerInfo)}function Xc(e,t,n,r,i){return Ir(),cu(i),t.flags|=256,He(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function DA(e,t,n){var r=t.pendingProps,i=de.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(de,i&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ws(l,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fa(n),t.memoizedState=ca,e):ku(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return _0(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=An(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=An(u,o):(o=Mn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?fa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ku(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&cu(r),Cr(t,e.child,null,n),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(b(422))),eo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ws({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Cr(t,e.child,null,l),t.child.memoizedState=fa(l),t.memoizedState=ca,o);if(!(t.mode&1))return eo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(b(419)),r=cl(o,r,void 0),eo(e,t,l,r)}if(u=(l&e.childLanes)!==0,Ge||u){if(r=Qe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Wt(e,i),xt(r,e,i,-1))}return Ru(),r=cl(Error(b(421))),eo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=L0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=un(i.nextSibling),nt=t,fe=!0,Et=null,e!==null&&(at[ut++]=zt,at[ut++]=Ht,at[ut++]=Un,zt=e.id,Ht=e.overflow,Un=t),t=ku(t,r.children),t.flags|=4096,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function LA(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k0(e,t,n){switch(t.tag){case 3:OA(t),Ir();break;case 5:aA(t);break;case 1:Xe(t.type)&&Ho(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?DA(e,t,n):(se(de,de.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);se(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return LA(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,PA(e,t,n)}return Yt(e,t,n)}var NA,da,MA,FA;NA=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};MA=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Pt.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}Fl(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(hi.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var c=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(hi.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&le("scroll",e),o||u===c||(o=[])):(o=o||[]).push(f,c))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};FA=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function S0(e,t,n){var r=t.pendingProps;switch(uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Xe(t.type)&&zo(),$e(t),null;case 3:return r=t.stateNode,Br(),ue(Ke),ue(ze),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Ea(Et),Et=null))),da(e,t),$e(t),null;case 5:mu(t);var i=On(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)MA(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return $e(t),null}if(e=On(Pt.current),Zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Si]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)le(ni[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":lc(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":uc(r,o),le("invalid",r)}Fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,u,e),i=["children",""+u]):hi.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":Hi(r),ac(r,o,!0);break;case"textarea":Hi(r),cc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Rt]=t,e[Si]=r,NA(e,t,!1,!1),t.stateNode=e;e:{switch(l=$l(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)le(ni[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":lc(e,r),i=Ol(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),le("invalid",e);break;case"textarea":uc(e,r),i=Nl(e,r),le("invalid",e);break;default:i=r}Fl(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?gd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pd(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gi(e,c):typeof c=="number"&&gi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&le("scroll",e):c!=null&&Ya(e,o,c,l))}switch(n){case"input":Hi(e),ac(e,r,!1);break;case"textarea":Hi(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)FA(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=On(Ci.current),On(Pt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return $e(t),null;case 13:if(ue(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&tt!==null&&t.mode&1&&!(t.flags&128))rA(),Ir(),t.flags|=98560,o=!1;else if(o=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Rt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else Et!==null&&(Ea(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Be===0&&(Be=3):Ru())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Br(),da(e,t),e===null&&_i(t.stateNode.containerInfo),$e(t),null;case 10:return Au(t.type._context),$e(t),null;case 17:return Xe(t.type)&&zo(),$e(t),null;case 19:if(ue(de),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Gr(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Go(e),l!==null){for(t.flags|=128,Gr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>Rr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!fe)return $e(t),null}else 2*ve()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=de.current,se(de,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function I0(e,t){switch(uu(t),t.tag){case 1:return Xe(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),ue(Ke),ue(ze),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mu(t),null;case 13:if(ue(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(de),null;case 4:return Br(),null;case 10:return Au(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var to=!1,Ue=!1,C0=typeof WeakSet=="function"?WeakSet:Set,D=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Aa(e,t,n){try{n()}catch(r){he(e,t,r)}}var qc=!1;function B0(e,t){if(Kl=Mo,e=Vd(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,c=-1,f=0,h=0,s=e,a=null;t:for(;;){for(var d;s!==n||i!==0&&s.nodeType!==3||(u=l+i),s!==o||r!==0&&s.nodeType!==3||(c=l+r),s.nodeType===3&&(l+=s.nodeValue.length),(d=s.firstChild)!==null;)a=s,s=d;for(;;){if(s===e)break t;if(a===n&&++f===i&&(u=l),a===o&&++h===r&&(c=l),(d=s.nextSibling)!==null)break;s=a,a=s.parentNode}s=d}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},Mo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,y=g.memoizedState,A=t.stateNode,p=A.getSnapshotBeforeUpdate(t.elementType===t.type?v:mt(t.type,v),y);A.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){he(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return g=qc,qc=!1,g}function fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Aa(t,n,o)}i=i.next}while(i!==r)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $A(e){var t=e.alternate;t!==null&&(e.alternate=null,$A(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Si],delete t[ea],delete t[c0],delete t[f0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function UA(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||UA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var De=null,vt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)zA(e,t,n),n=n.sibling}function zA(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:Ue||hr(n,t);case 6:var r=De,i=vt;De=null,Xt(e,t,n),De=r,vt=i,De!==null&&(vt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(vt?(e=De,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Ei(e)):il(De,n.stateNode));break;case 4:r=De,i=vt,De=n.stateNode.containerInfo,vt=!0,Xt(e,t,n),De=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Aa(n,t,l),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!Ue&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){he(n,t,u)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Xt(e,t,n),Ue=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var i=N0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:De=u.stateNode,vt=!1;break e;case 3:De=u.stateNode.containerInfo,vt=!0;break e;case 4:De=u.stateNode.containerInfo,vt=!0;break e}u=u.return}if(De===null)throw Error(b(160));zA(o,l,i),De=null,vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){he(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)HA(t,e),t=t.sibling}function HA(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Ct(e),r&4){try{fi(3,e,e.return),ys(3,e)}catch(v){he(e,e.return,v)}try{fi(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:gt(t,e),Ct(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(gt(t,e),Ct(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var i=e.stateNode;try{gi(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&fd(i,o),$l(u,l);var f=$l(u,o);for(l=0;l<c.length;l+=2){var h=c[l],s=c[l+1];h==="style"?gd(i,s):h==="dangerouslySetInnerHTML"?pd(i,s):h==="children"?gi(i,s):Ya(i,h,s,f)}switch(u){case"input":Dl(i,o);break;case"textarea":dd(i,o);break;case"select":var a=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var d=o.value;d!=null?vr(i,!!o.multiple,d,!1):a!==!!o.multiple&&(o.defaultValue!=null?vr(i,!!o.multiple,o.defaultValue,!0):vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Si]=o}catch(v){he(e,e.return,v)}}break;case 6:if(gt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){he(e,e.return,v)}}break;case 3:if(gt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:gt(t,e),Ct(e);break;case 13:gt(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cu=ve())),r&4&&tf(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(f=Ue)||h,gt(t,e),Ue=f):gt(t,e),Ct(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(D=e,h=e.child;h!==null;){for(s=D=h;D!==null;){switch(a=D,d=a.child,a.tag){case 0:case 11:case 14:case 15:fi(4,a,a.return);break;case 1:hr(a,a.return);var g=a.stateNode;if(typeof g.componentWillUnmount=="function"){r=a,n=a.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:hr(a,a.return);break;case 22:if(a.memoizedState!==null){rf(s);continue}}d!==null?(d.return=a,D=d):rf(s)}h=h.sibling}e:for(h=null,s=e;;){if(s.tag===5){if(h===null){h=s;try{i=s.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=s.stateNode,c=s.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=hd("display",l))}catch(v){he(e,e.return,v)}}}else if(s.tag===6){if(h===null)try{s.stateNode.nodeValue=f?"":s.memoizedProps}catch(v){he(e,e.return,v)}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;h===s&&(h=null),s=s.return}h===s&&(h=null),s.sibling.return=s.return,s=s.sibling}}break;case 19:gt(t,e),Ct(e),r&4&&tf(e);break;case 21:break;default:gt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(UA(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=ef(e);ga(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ef(e);ha(e,u,l);break;default:throw Error(b(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e,t,n){D=e,VA(e)}function VA(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||to;if(!l){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Ue;u=to;var f=Ue;if(to=l,(Ue=c)&&!f)for(D=i;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?of(i):c!==null?(c.return=l,D=c):of(i);for(;o!==null;)D=o,VA(o),o=o.sibling;D=i,to=u,Ue=f}nf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):nf(e)}}function nf(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$c(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$c(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var s=h.dehydrated;s!==null&&Ei(s)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ue||t.flags&512&&pa(t)}catch(a){he(t,t.return,a)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function rf(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function of(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(c){he(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){he(t,i,c)}}var o=t.return;try{pa(t)}catch(c){he(t,o,c)}break;case 5:var l=t.return;try{pa(t)}catch(c){he(t,l,c)}}}catch(c){he(t,t.return,c)}if(t===e){D=null;break}var u=t.sibling;if(u!==null){u.return=t.return,D=u;break}D=t.return}}var R0=Math.ceil,Zo=Gt.ReactCurrentDispatcher,Su=Gt.ReactCurrentOwner,dt=Gt.ReactCurrentBatchConfig,ne=0,Qe=null,we=null,Le=0,et=0,gr=xn(0),Be=0,Ti=null,Hn=0,Es=0,Iu=0,di=null,Ye=null,Cu=0,Rr=1/0,Ft=null,qo=!1,ma=null,fn=null,no=!1,on=null,es=0,Ai=0,va=null,wo=-1,xo=0;function je(){return ne&6?ve():wo!==-1?wo:wo=ve()}function dn(e){return e.mode&1?ne&2&&Le!==0?Le&-Le:A0.transition!==null?(xo===0&&(xo=Bd()),xo):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Dd(e.type)),e):1}function xt(e,t,n,r){if(50<Ai)throw Ai=0,va=null,Error(b(185));Li(e,n,r),(!(ne&2)||e!==Qe)&&(e===Qe&&(!(ne&2)&&(Es|=n),Be===4&&nn(e,Le)),Ze(e,r),n===1&&ne===0&&!(t.mode&1)&&(Rr=ve()+500,gs&&_n()))}function Ze(e,t){var n=e.callbackNode;Ag(e,t);var r=No(e,e===Qe?Le:0);if(r===0)n!==null&&Ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ac(n),t===1)e.tag===0?d0(sf.bind(null,e)):eA(sf.bind(null,e)),a0(function(){!(ne&6)&&_n()}),n=null;else{switch(bd(r)){case 1:n=qa;break;case 4:n=Id;break;case 16:n=Lo;break;case 536870912:n=Cd;break;default:n=Lo}n=ZA(n,jA.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jA(e,t){if(wo=-1,xo=0,ne&6)throw Error(b(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=No(e,e===Qe?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ts(e,r);else{t=r;var i=ne;ne|=2;var o=WA();(Qe!==e||Le!==t)&&(Ft=null,Rr=ve()+500,Nn(e,t));do try{Q0();break}catch(u){JA(e,u)}while(!0);du(),Zo.current=o,ne=i,we!==null?t=0:(Qe=null,Le=0,t=Be)}if(t!==0){if(t===2&&(i=jl(e),i!==0&&(r=i,t=ya(e,i))),t===1)throw n=Ti,Nn(e,0),nn(e,r),Ze(e,ve()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!T0(i)&&(t=ts(e,r),t===2&&(o=jl(e),o!==0&&(r=o,t=ya(e,o))),t===1))throw n=Ti,Nn(e,0),nn(e,r),Ze(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Bn(e,Ye,Ft);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Cu+500-ve(),10<t)){if(No(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ql(Bn.bind(null,e,Ye,Ft),t);break}Bn(e,Ye,Ft);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-wt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=ql(Bn.bind(null,e,Ye,Ft),r);break}Bn(e,Ye,Ft);break;case 5:Bn(e,Ye,Ft);break;default:throw Error(b(329))}}}return Ze(e,ve()),e.callbackNode===n?jA.bind(null,e):null}function ya(e,t){var n=di;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=ts(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ea(t)),e}function Ea(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function T0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Iu,t&=~Es,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function sf(e){if(ne&6)throw Error(b(327));_r();var t=No(e,0);if(!(t&1))return Ze(e,ve()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=Ti,Nn(e,0),nn(e,t),Ze(e,ve()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,Ye,Ft),Ze(e,ve()),null}function Bu(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Rr=ve()+500,gs&&_n())}}function Vn(e){on!==null&&on.tag===0&&!(ne&6)&&_r();var t=ne;ne|=1;var n=dt.transition,r=oe;try{if(dt.transition=null,oe=1,e)return e()}finally{oe=r,dt.transition=n,ne=t,!(ne&6)&&_n()}}function bu(){et=gr.current,ue(gr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:Br(),ue(Ke),ue(ze),vu();break;case 5:mu(r);break;case 4:Br();break;case 13:ue(de);break;case 19:ue(de);break;case 10:Au(r.type._context);break;case 22:case 23:bu()}n=n.return}if(Qe=e,we=e=An(e.current,null),Le=et=t,Be=0,Ti=null,Iu=Es=Hn=0,Ye=di=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Qn=null}return e}function JA(e,t){do{var n=we;try{if(du(),vo.current=Xo,Ko){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(zn=0,Re=Ie=Ae=null,ci=!1,Bi=0,Su.current=null,n===null||n.return===null){Be=1,Ti=t,we=null;break}e:{var o=e,l=n.return,u=n,c=t;if(t=Le,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,h=u,s=h.tag;if(!(h.mode&1)&&(s===0||s===11||s===15)){var a=h.alternate;a?(h.updateQueue=a.updateQueue,h.memoizedState=a.memoizedState,h.lanes=a.lanes):(h.updateQueue=null,h.memoizedState=null)}var d=Jc(l);if(d!==null){d.flags&=-257,Wc(d,l,u,o,t),d.mode&1&&jc(o,f,t),t=d,c=f;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){jc(o,f,t),Ru();break e}c=Error(b(426))}}else if(fe&&u.mode&1){var y=Jc(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Wc(y,l,u,o,t),cu(br(c,u));break e}}o=c=br(c,u),Be!==4&&(Be=2),di===null?di=[o]:di.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var A=bA(o,c,t);Fc(o,A);break e;case 1:u=c;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fn===null||!fn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=RA(o,u,t);Fc(o,E);break e}}o=o.return}while(o!==null)}GA(n)}catch(_){t=_,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function WA(){var e=Zo.current;return Zo.current=Xo,e===null?Xo:e}function Ru(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(Hn&268435455)&&!(Es&268435455)||nn(Qe,Le)}function ts(e,t){var n=ne;ne|=2;var r=WA();(Qe!==e||Le!==t)&&(Ft=null,Nn(e,t));do try{P0();break}catch(i){JA(e,i)}while(!0);if(du(),ne=n,Zo.current=r,we!==null)throw Error(b(261));return Qe=null,Le=0,Be}function P0(){for(;we!==null;)YA(we)}function Q0(){for(;we!==null&&!ig();)YA(we)}function YA(e){var t=XA(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?GA(e):we=t,Su.current=null}function GA(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,we=null;return}}else if(n=S0(n,t,et),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Be===0&&(Be=5)}function Bn(e,t,n){var r=oe,i=dt.transition;try{dt.transition=null,oe=1,O0(e,t,n,r)}finally{dt.transition=i,oe=r}return null}function O0(e,t,n,r){do _r();while(on!==null);if(ne&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(pg(e,o),e===Qe&&(we=Qe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,ZA(Lo,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var l=oe;oe=1;var u=ne;ne|=4,Su.current=null,B0(e,n),HA(n,e),e0(Xl),Mo=!!Kl,Xl=Kl=null,e.current=n,b0(n),og(),ne=u,oe=l,dt.transition=o}else e.current=n;if(no&&(no=!1,on=e,es=i),o=e.pendingLanes,o===0&&(fn=null),ag(n.stateNode),Ze(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=ma,ma=null,e;return es&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===va?Ai++:(Ai=0,va=e):Ai=0,_n(),null}function _r(){if(on!==null){var e=bd(es),t=dt.transition,n=oe;try{if(dt.transition=null,oe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,es=0,ne&6)throw Error(b(331));var i=ne;for(ne|=4,D=e.current;D!==null;){var o=D,l=o.child;if(D.flags&16){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(D=f;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:fi(8,h,o)}var s=h.child;if(s!==null)s.return=h,D=s;else for(;D!==null;){h=D;var a=h.sibling,d=h.return;if($A(h),h===f){D=null;break}if(a!==null){a.return=d,D=a;break}D=d}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}D=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,D=l;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fi(9,o,o.return)}var A=o.sibling;if(A!==null){A.return=o.return,D=A;break e}D=o.return}}var p=e.current;for(D=p;D!==null;){l=D;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,D=m;else e:for(l=p;D!==null;){if(u=D,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ys(9,u)}}catch(_){he(u,u.return,_)}if(u===l){D=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,D=E;break e}D=u.return}}if(ne=i,_n(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(fs,e)}catch{}r=!0}return r}finally{oe=n,dt.transition=t}}return!1}function lf(e,t,n){t=br(n,t),t=bA(e,t,1),e=cn(e,t,1),t=je(),e!==null&&(Li(e,1,t),Ze(e,t))}function he(e,t,n){if(e.tag===3)lf(e,e,n);else for(;t!==null;){if(t.tag===3){lf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=br(n,e),e=RA(t,e,1),t=cn(t,e,1),e=je(),t!==null&&(Li(t,1,e),Ze(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(Le&n)===n&&(Be===4||Be===3&&(Le&130023424)===Le&&500>ve()-Cu?Nn(e,0):Iu|=n),Ze(e,t)}function KA(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=je();e=Wt(e,t),e!==null&&(Li(e,t,n),Ze(e,n))}function L0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),KA(e,n)}function N0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),KA(e,n)}var XA;XA=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,k0(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,fe&&t.flags&1048576&&tA(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var i=Sr(t,ze.current);xr(t,n),i=Eu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Ho(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(t),i.updater=vs,t.stateNode=i,i._reactInternals=t,sa(t,r,e,n),t=ua(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&au(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=F0(r),e=mt(r,e),i){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Yc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,mt(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),aa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Kc(e,t,r,i,n);case 3:e:{if(OA(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lA(e,t),Yo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(b(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=br(Error(b(424)),t),t=Xc(e,t,r,n,i);break e}else for(tt=un(t.stateNode.containerInfo.firstChild),nt=t,fe=!0,Et=null,n=oA(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=Yt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return aA(t),e===null&&ra(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Zl(r,i)?l=null:o!==null&&Zl(r,o)&&(t.flags|=32),QA(e,t),He(e,t,l,n),t.child;case 6:return e===null&&ra(t),null;case 13:return DA(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Yc(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,se(Jo,r._currentValue),r._currentValue=l,o!==null)if(kt(o.value,l)){if(o.children===i.children&&!Ke.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Vt(-1,n&-n),c.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?c.next=c:(c.next=h.next,h.next=c),f.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,t),u.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ia(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=At(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Gc(e,t,r,i,n);case 15:return TA(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Eo(e,t),t.tag=1,Xe(r)?(e=!0,Ho(t)):e=!1,xr(t,n),BA(t,r,i),sa(t,r,i,n),ua(null,t,r,!0,e,n);case 19:return LA(e,t,n);case 22:return PA(e,t,n)}throw Error(b(156,t.tag))};function ZA(e,t){return Sd(e,t)}function M0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new M0(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F0(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Xa)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case sr:return Mn(n.children,i,o,t);case Ga:l=8,i|=8;break;case Rl:return e=ft(12,n,t,i|2),e.elementType=Rl,e.lanes=o,e;case Tl:return e=ft(13,n,t,i),e.elementType=Tl,e.lanes=o,e;case Pl:return e=ft(19,n,t,i),e.elementType=Pl,e.lanes=o,e;case ad:return ws(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sd:l=10;break e;case ld:l=9;break e;case Ka:l=11;break e;case Xa:l=14;break e;case qt:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=ft(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function ws(e,t,n,r){return e=ft(22,e,r,t),e.elementType=ad,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,r,i,o,l,u,c){return e=new $0(e,t,n,u,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),e}function U0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qA(e){if(!e)return mn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Xe(n))return qd(e,n,t)}return t}function ep(e,t,n,r,i,o,l,u,c){return e=Pu(n,r,!0,e,i,o,l,u,c),e.context=qA(null),n=e.current,r=je(),i=dn(n),o=Vt(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Li(e,i,r),Ze(e,r),e}function xs(e,t,n,r){var i=t.current,o=je(),l=dn(i);return n=qA(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,l),e!==null&&(xt(e,i,l,o),mo(e,i,l)),l}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qu(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function z0(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}_s.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));xs(e,t,null,null)};_s.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){xs(null,e,null,null)}),t[Jt]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Od(e)}};function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function H0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=ns(l);o.call(f)}}var l=ep(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Jt]=l.current,_i(e.nodeType===8?e.parentNode:e),Vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=ns(c);u.call(f)}}var c=Pu(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=c,e[Jt]=c.current,_i(e.nodeType===8?e.parentNode:e),Vn(function(){xs(t,c,n,r)}),c}function Ss(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var c=ns(l);u.call(c)}}xs(t,l,e,i)}else l=H0(n,t,e,i,r);return ns(l)}Rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(eu(t,n|1),Ze(t,ve()),!(ne&6)&&(Rr=ve()+500,_n()))}break;case 13:Vn(function(){var r=Wt(e,1);if(r!==null){var i=je();xt(r,e,1,i)}}),Qu(e,1)}};tu=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=je();xt(t,e,134217728,n)}Qu(e,134217728)}};Td=function(e){if(e.tag===13){var t=dn(e),n=Wt(e,t);if(n!==null){var r=je();xt(n,e,t,r)}Qu(e,t)}};Pd=function(){return oe};Qd=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};zl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hs(r);if(!i)throw Error(b(90));cd(r),Dl(r,i)}}}break;case"textarea":dd(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};yd=Bu;Ed=Vn;var V0={usingClientEntryPoint:!1,Events:[Mi,cr,hs,md,vd,Bu]},Kr={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_d(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{fs=ro.inject(j0),Tt=ro}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(t))throw Error(b(200));return U0(e,t,null,n)};it.createRoot=function(e,t){if(!Du(e))throw Error(b(299));var n=!1,r="",i=tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,_i(e.nodeType===8?e.parentNode:e),new Ou(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=_d(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Vn(e)};it.hydrate=function(e,t,n){if(!ks(t))throw Error(b(200));return Ss(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Du(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=tp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ep(t,null,e,1,n??null,i,!1,o,l),e[Jt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _s(t)};it.render=function(e,t,n){if(!ks(t))throw Error(b(200));return Ss(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!ks(e))throw Error(b(40));return e._reactRootContainer?(Vn(function(){Ss(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};it.unstable_batchedUpdates=Bu;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ks(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ss(e,t,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)}catch(e){console.error(e)}}np(),nd.exports=it;var rp=nd.exports,cf=rp;Bl.createRoot=cf.createRoot,Bl.hydrateRoot=cf.hydrateRoot;var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function Pi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ae="-ms-",pi="-moz-",ie="-webkit-",ip="comm",Is="rule",Lu="decl",J0="@import",op="@keyframes",W0="@layer",sp=Math.abs,Nu=String.fromCharCode,wa=Object.assign;function Y0(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function lp(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function ko(e,t,n){return e.indexOf(t,n)}function Te(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function ap(e){return e.length}function ri(e,t){return t.push(e),e}function G0(e,t){return e.map(t).join("")}function ff(e,t){return e.filter(function(n){return!$t(n,t)})}var Cs=1,Pr=1,up=0,ht=0,Ee=0,Fr="";function Bs(e,t,n,r,i,o,l,u){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:Pr,length:l,return:"",siblings:u}}function Zt(e,t){return wa(Bs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=Zt(e.root,{children:[e]});ri(e,e.siblings)}function K0(){return Ee}function X0(){return Ee=ht>0?Te(Fr,--ht):0,Pr--,Ee===10&&(Pr=1,Cs--),Ee}function _t(){return Ee=ht<up?Te(Fr,ht++):0,Pr++,Ee===10&&(Pr=1,Cs++),Ee}function Fn(){return Te(Fr,ht)}function So(){return ht}function bs(e,t){return Tr(Fr,e,t)}function xa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z0(e){return Cs=Pr=1,up=bt(Fr=e),ht=0,[]}function q0(e){return Fr="",e}function pl(e){return lp(bs(ht-1,_a(e===91?e+2:e===40?e+1:e)))}function e1(e){for(;(Ee=Fn())&&Ee<33;)_t();return xa(e)>2||xa(Ee)>3?"":" "}function t1(e,t){for(;--t&&_t()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return bs(e,So()+(t<6&&Fn()==32&&_t()==32))}function _a(e){for(;_t();)switch(Ee){case e:return ht;case 34:case 39:e!==34&&e!==39&&_a(Ee);break;case 40:e===41&&_a(e);break;case 92:_t();break}return ht}function n1(e,t){for(;_t()&&e+Ee!==57;)if(e+Ee===84&&Fn()===47)break;return"/*"+bs(t,ht-1)+"*"+Nu(e===47?e:_t())}function r1(e){for(;!xa(Fn());)_t();return bs(e,ht)}function i1(e){return q0(Io("",null,null,null,[""],e=Z0(e),0,[0],e))}function Io(e,t,n,r,i,o,l,u,c){for(var f=0,h=0,s=l,a=0,d=0,g=0,v=1,y=1,A=1,p=0,m="",E=i,_=o,k=r,S=m;y;)switch(g=p,p=_t()){case 40:if(g!=108&&Te(S,s-1)==58){ko(S+=W(pl(p),"&","&\f"),"&\f",sp(f?u[f-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:S+=pl(p);break;case 9:case 10:case 13:case 32:S+=e1(g);break;case 92:S+=t1(So()-1,7);continue;case 47:switch(Fn()){case 42:case 47:ri(o1(n1(_t(),So()),t,n,c),c);break;default:S+="/"}break;case 123*v:u[f++]=bt(S)*A;case 125*v:case 59:case 0:switch(p){case 0:case 125:y=0;case 59+h:A==-1&&(S=W(S,/\f/g,"")),d>0&&bt(S)-s&&ri(d>32?Af(S+";",r,n,s-1,c):Af(W(S," ","")+";",r,n,s-2,c),c);break;case 59:S+=";";default:if(ri(k=df(S,t,n,f,h,i,u,m,E=[],_=[],s,o),o),p===123)if(h===0)Io(S,t,k,k,E,o,s,u,_);else switch(a===99&&Te(S,3)===110?100:a){case 100:case 108:case 109:case 115:Io(e,k,k,r&&ri(df(e,k,k,0,0,i,u,m,i,E=[],s,_),_),i,_,s,u,r?E:_);break;default:Io(S,k,k,k,[""],_,0,u,_)}}f=h=d=0,v=A=1,m=S="",s=l;break;case 58:s=1+bt(S),d=g;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&X0()==125)continue}switch(S+=Nu(p),p*v){case 38:A=h>0?1:(S+="\f",-1);break;case 44:u[f++]=(bt(S)-1)*A,A=1;break;case 64:Fn()===45&&(S+=pl(_t())),a=Fn(),h=s=bt(m=S+=r1(So())),p++;break;case 45:g===45&&bt(S)==2&&(v=0)}}return o}function df(e,t,n,r,i,o,l,u,c,f,h,s){for(var a=i-1,d=i===0?o:[""],g=ap(d),v=0,y=0,A=0;v<r;++v)for(var p=0,m=Tr(e,a+1,a=sp(y=l[v])),E=e;p<g;++p)(E=lp(y>0?d[p]+" "+m:W(m,/&\f/g,d[p])))&&(c[A++]=E);return Bs(e,t,n,i===0?Is:u,c,f,h,s)}function o1(e,t,n,r){return Bs(e,t,n,ip,Nu(K0()),Tr(e,2,-2),0,r)}function Af(e,t,n,r,i){return Bs(e,t,n,Lu,Tr(e,0,r),Tr(e,r+1,-1),r,i)}function cp(e,t,n){switch(Y0(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 4789:return pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+pi+e+ae+e+e;case 5936:switch(Te(e,t+11)){case 114:return ie+e+ae+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+ae+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+ae+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+ae+e+e;case 6165:return ie+e+ae+"flex-"+e+e;case 5187:return ie+e+W(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return ie+e+ae+"flex-item-"+W(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":ae+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return ie+e+ae+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+ae+W(e,"shrink","negative")+e;case 5292:return ie+e+ae+W(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+W(e,"-grow","")+ie+e+ae+W(e,"grow","positive")+e;case 4554:return ie+W(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4200:if(!$t(e,/flex-|baseline/))return ae+"grid-column-align"+Tr(e,t)+e;break;case 2592:case 3360:return ae+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$t(r.props,/grid-\w+-end/)})?~ko(e+(n=n[t].value),"span",0)?e:ae+W(e,"-start","")+e+ae+"grid-row-span:"+(~ko(n,"span",0)?$t(n,/\d+/):+$t(n,/\d+/)-+$t(e,/\d+/))+";":ae+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $t(r.props,/grid-\w+-start/)})?e:ae+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+pi+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ko(e,"stretch",0)?cp(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,u,c,f){return ae+i+":"+o+f+(l?ae+i+"-span:"+(u?c:+c-+o)+f:"")+e});case 4949:if(Te(e,t+6)===121)return W(e,":",":"+ie)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(Te(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+ae+"$2box$3")+e;case 100:return W(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function rs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function s1(e,t,n,r){switch(e.type){case W0:if(e.children.length)break;case J0:case Lu:return e.return=e.return||e.value;case ip:return"";case op:return e.return=e.value+"{"+rs(e.children,r)+"}";case Is:if(!bt(e.value=e.props.join(",")))return""}return bt(n=rs(e.children,r))?e.return=e.value+"{"+n+"}":""}function l1(e){var t=ap(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function a1(e){return function(t){t.root||(t=t.return)&&e(t)}}function u1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Lu:e.return=cp(e.value,e.length,n);return;case op:return rs([Zt(e,{value:W(e.value,"@","@"+ie)})],r);case Is:if(e.length)return G0(n=e.props,function(i){switch($t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(Zt(e,{props:[W(i,/:(read-\w+)/,":"+pi+"$1")]})),Zn(Zt(e,{props:[i]})),wa(e,{props:ff(n,r)});break;case"::placeholder":Zn(Zt(e,{props:[W(i,/:(plac\w+)/,":"+ie+"input-$1")]})),Zn(Zt(e,{props:[W(i,/:(plac\w+)/,":"+pi+"$1")]})),Zn(Zt(e,{props:[W(i,/:(plac\w+)/,ae+"input-$1")]})),Zn(Zt(e,{props:[i]})),wa(e,{props:ff(n,r)});break}return""})}}var c1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},Qr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",fp="active",dp="data-styled-version",Rs="6.1.17",Mu=`/*!sc*/
`,is=typeof window<"u"&&"HTMLElement"in window,f1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),d1={},Ts=Object.freeze([]),Or=Object.freeze({});function Ap(e,t,n){return n===void 0&&(n=Or),e.theme!==n.theme&&e.theme||t||n.theme}var pp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p1=/(^-|-$)/g;function pf(e){return e.replace(A1,"-").replace(p1,"")}var h1=/(a)(d)/gi,io=52,hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function ka(e){var t,n="";for(t=Math.abs(e);t>io;t=t/io|0)n=hf(t%io)+n;return(hf(t%io)+n).replace(h1,"$1-$2")}var hl,hp=5381,mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gp=function(e){return mr(hp,e)};function mp(e){return ka(gp(e)>>>0)}function g1(e){return e.displayName||e.name||"Component"}function gl(e){return typeof e=="string"&&!0}var vp=typeof Symbol=="function"&&Symbol.for,yp=vp?Symbol.for("react.memo"):60115,m1=vp?Symbol.for("react.forward_ref"):60112,v1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ep={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E1=((hl={})[m1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hl[yp]=Ep,hl);function gf(e){return("type"in(t=e)&&t.type.$$typeof)===yp?Ep:"$$typeof"in e?E1[e.$$typeof]:v1;var t}var w1=Object.defineProperty,x1=Object.getOwnPropertyNames,mf=Object.getOwnPropertySymbols,_1=Object.getOwnPropertyDescriptor,k1=Object.getPrototypeOf,vf=Object.prototype;function wp(e,t,n){if(typeof t!="string"){if(vf){var r=k1(t);r&&r!==vf&&wp(e,r,n)}var i=x1(t);mf&&(i=i.concat(mf(t)));for(var o=gf(e),l=gf(t),u=0;u<i.length;++u){var c=i[u];if(!(c in y1||n&&n[c]||l&&c in l||o&&c in o)){var f=_1(t,c);try{w1(e,c,f)}catch{}}}}return e}function jn(e){return typeof e=="function"}function Fu(e){return typeof e=="object"&&"styledComponentId"in e}function Dn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Sa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Qi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ia(e,t,n){if(n===void 0&&(n=!1),!n&&!Qi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ia(e[r],t[r]);else if(Qi(t))for(var r in t)e[r]=Ia(e[r],t[r]);return e}function $u(e,t){Object.defineProperty(e,"toString",{value:t})}function Jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var S1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Jn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(u,n[l])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Mu);return n},e}(),Co=new Map,os=new Map,Bo=1,oo=function(e){if(Co.has(e))return Co.get(e);for(;os.has(Bo);)Bo++;var t=Bo++;return Co.set(e,t),os.set(t,e),t},I1=function(e,t){Bo=t+1,Co.set(e,t),os.set(t,e)},C1="style[".concat(Qr,"][").concat(dp,'="').concat(Rs,'"]'),B1=new RegExp("^".concat(Qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),b1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},R1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Mu),i=[],o=0,l=r.length;o<l;o++){var u=r[o].trim();if(u){var c=u.match(B1);if(c){var f=0|parseInt(c[1],10),h=c[2];f!==0&&(I1(h,f),b1(e,h,c[3]),e.getTag().insertRules(f,i)),i.length=0}else i.push(u)}}},yf=function(e){for(var t=document.querySelectorAll(C1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qr)!==fp&&(R1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function T1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(u){var c=Array.from(u.querySelectorAll("style[".concat(Qr,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qr,fp),r.setAttribute(dp,Rs);var l=T1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},P1=function(){function e(t){this.element=xp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Q1=function(){function e(t){this.element=xp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),O1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ef=is,D1={isServer:!is,useCSSOMInjection:!f1},ss=function(){function e(t,n,r){t===void 0&&(t=Or),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},D1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&is&&Ef&&(Ef=!1,yf(this)),$u(this,function(){return function(o){for(var l=o.getTag(),u=l.length,c="",f=function(s){var a=function(A){return os.get(A)}(s);if(a===void 0)return"continue";var d=o.names.get(a),g=l.getGroup(s);if(d===void 0||!d.size||g.length===0)return"continue";var v="".concat(Qr,".g").concat(s,'[id="').concat(a,'"]'),y="";d!==void 0&&d.forEach(function(A){A.length>0&&(y+="".concat(A,","))}),c+="".concat(g).concat(v,'{content:"').concat(y,'"}').concat(Mu)},h=0;h<u;h++)f(h);return c}(i)})}return e.registerId=function(t){return oo(t)},e.prototype.rehydrate=function(){!this.server&&is&&yf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new O1(i):r?new P1(i):new Q1(i)}(this.options),new S1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(oo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(oo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(oo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),L1=/&/g,N1=/^\s*\/\/.*$/gm;function _p(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_p(n.children,t)),n})}function M1(e){var t,n,r,i=Or,o=i.options,l=o===void 0?Or:o,u=i.plugins,c=u===void 0?Ts:u,f=function(a,d,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):a},h=c.slice();h.push(function(a){a.type===Is&&a.value.includes("&")&&(a.props[0]=a.props[0].replace(L1,n).replace(r,f))}),l.prefix&&h.push(u1),h.push(s1);var s=function(a,d,g,v){d===void 0&&(d=""),g===void 0&&(g=""),v===void 0&&(v="&"),t=v,n=d,r=new RegExp("\\".concat(n,"\\b"),"g");var y=a.replace(N1,""),A=i1(g||d?"".concat(g," ").concat(d," { ").concat(y," }"):y);l.namespace&&(A=_p(A,l.namespace));var p=[];return rs(A,l1(h.concat(a1(function(m){return p.push(m)})))),p};return s.hash=c.length?c.reduce(function(a,d){return d.name||Jn(15),mr(a,d.name)},hp).toString():"",s}var F1=new ss,Ca=M1(),kp=x.createContext({shouldForwardProp:void 0,styleSheet:F1,stylis:Ca});kp.Consumer;x.createContext(void 0);function Ba(){return w.useContext(kp)}var $1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ca);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,$u(this,function(){throw Jn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ca),this.name+t.hash},e}(),U1=function(e){return e>="A"&&e<="Z"};function wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;U1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sp=function(e){return e==null||e===!1||e===""},Ip=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Sp(o)&&(Array.isArray(o)&&o.isCss||jn(o)?r.push("".concat(wf(i),":"),o,";"):Qi(o)?r.push.apply(r,Pi(Pi(["".concat(i," {")],Ip(o),!1),["}"],!1)):r.push("".concat(wf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in c1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function pn(e,t,n,r){if(Sp(e))return[];if(Fu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return pn(i,t,n,r)}var o;return e instanceof $1?n?(e.inject(n,r),[e.getName(r)]):[e]:Qi(e)?Ip(e):Array.isArray(e)?Array.prototype.concat.apply(Ts,e.map(function(l){return pn(l,t,n,r)})):[e.toString()]}function Cp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!Fu(n))return!1}return!0}var z1=gp(Rs),H1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cp(t),this.componentId=n,this.baseHash=mr(z1,n),this.baseStyle=r,ss.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Dn(i,this.staticRulesId);else{var o=Sa(pn(this.rules,t,n,r)),l=ka(mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var u=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,u)}i=Dn(i,l),this.staticRulesId=l}else{for(var c=mr(this.baseHash,r.hash),f="",h=0;h<this.rules.length;h++){var s=this.rules[h];if(typeof s=="string")f+=s;else if(s){var a=Sa(pn(s,t,n,r));c=mr(c,a+h),f+=a}}if(f){var d=ka(c>>>0);n.hasNameForId(this.componentId,d)||n.insertRules(this.componentId,d,r(f,".".concat(d),void 0,this.componentId)),i=Dn(i,d)}}return i},e}(),Oi=x.createContext(void 0);Oi.Consumer;function V1(e){var t=x.useContext(Oi),n=w.useMemo(function(){return function(r,i){if(!r)throw Jn(14);if(jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Jn(8);return i?Pe(Pe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?x.createElement(Oi.Provider,{value:n},e.children):null}var ml={};function j1(e,t,n){var r=Fu(e),i=e,o=!gl(e),l=t.attrs,u=l===void 0?Ts:l,c=t.componentId,f=c===void 0?function(E,_){var k=typeof E!="string"?"sc":pf(E);ml[k]=(ml[k]||0)+1;var S="".concat(k,"-").concat(mp(Rs+k+ml[k]));return _?"".concat(_,"-").concat(S):S}(t.displayName,t.parentComponentId):c,h=t.displayName,s=h===void 0?function(E){return gl(E)?"styled.".concat(E):"Styled(".concat(g1(E),")")}(e):h,a=t.displayName&&t.componentId?"".concat(pf(t.displayName),"-").concat(t.componentId):t.componentId||f,d=r&&i.attrs?i.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(E,_){return v(E,_)&&y(E,_)}}else g=v}var A=new H1(n,a,r?i.componentStyle:void 0);function p(E,_){return function(k,S,R){var P=k.attrs,L=k.componentStyle,U=k.defaultProps,H=k.foldedComponentIds,J=k.styledComponentId,V=k.target,K=x.useContext(Oi),_e=Ba(),ke=k.shouldForwardProp||_e.shouldForwardProp,C=Ap(S,K,U)||Or,Q=function(ee,z,G){for(var be,T=Pe(Pe({},z),{className:void 0,theme:G}),j=0;j<ee.length;j+=1){var X=jn(be=ee[j])?be(T):be;for(var re in X)T[re]=re==="className"?Dn(T[re],X[re]):re==="style"?Pe(Pe({},T[re]),X[re]):X[re]}return z.className&&(T.className=Dn(T.className,z.className)),T}(P,S,C),M=Q.as||V,q={};for(var Y in Q)Q[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&Q.theme===C||(Y==="forwardedAs"?q.as=Q.forwardedAs:ke&&!ke(Y,M)||(q[Y]=Q[Y]));var F=function(ee,z){var G=Ba(),be=ee.generateAndInjectStyles(z,G.styleSheet,G.stylis);return be}(L,Q),$=Dn(H,J);return F&&($+=" "+F),Q.className&&($+=" "+Q.className),q[gl(M)&&!pp.has(M)?"class":"className"]=$,R&&(q.ref=R),w.createElement(M,q)}(m,E,_)}p.displayName=s;var m=x.forwardRef(p);return m.attrs=d,m.componentStyle=A,m.displayName=s,m.shouldForwardProp=g,m.foldedComponentIds=r?Dn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=a,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(_){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var R=0,P=k;R<P.length;R++)Ia(_,P[R],!0);return _}({},i.defaultProps,E):E}}),$u(m,function(){return".".concat(m.styledComponentId)}),o&&wp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function xf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var _f=function(e){return Object.assign(e,{isCss:!0})};function O(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||Qi(e))return _f(pn(xf(Ts,Pi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?pn(r):_f(pn(xf(r,t)))}function ba(e,t,n){if(n===void 0&&(n=Or),!t)throw Jn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,O.apply(void 0,Pi([i],o,!1)))};return r.attrs=function(i){return ba(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ba(e,t,Pe(Pe({},n),i))},r}var Bp=function(e){return ba(j1,e)},I=Bp;pp.forEach(function(e){I[e]=Bp(e)});var J1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cp(t),ss.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Sa(pn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ss.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function W1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=O.apply(void 0,Pi([e],t,!1)),i="sc-global-".concat(mp(JSON.stringify(r))),o=new J1(r,i),l=function(c){var f=Ba(),h=x.useContext(Oi),s=x.useRef(f.styleSheet.allocateGSInstance(i)).current;return f.styleSheet.server&&u(s,c,f.styleSheet,h,f.stylis),x.useLayoutEffect(function(){if(!f.styleSheet.server)return u(s,c,f.styleSheet,h,f.stylis),function(){return o.removeStyles(s,f.styleSheet)}},[s,c,f.styleSheet,h,f.stylis]),null};function u(c,f,h,s,a){if(o.isStatic)o.renderStyles(c,d1,h,a);else{var d=Pe(Pe({},f),{theme:Ap(f,s,l.defaultProps)});o.renderStyles(c,d,h,a)}}return x.memo(l)}var Y1=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const Uu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",zu="inset 2px 2px 3px rgba(0,0,0,0.2)",St=()=>O`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,It=({background:e="material",color:t="materialText"}={})=>O`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,$i=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>O`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Wn=()=>O`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,qn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},G1=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:i=!1})=>[r?Uu:!1,i?zu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),me=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return O`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[qn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[qn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[qn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[qn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:i})=>G1({theme:r,topLeftInner:qn[t][n.topLeftInner],bottomRightInner:qn[t][n.bottomRightInner],hasShadow:i})};
  `},Dr=()=>O`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,K1=e=>Buffer.from(e).toString("base64"),X1=typeof btoa<"u"?btoa:K1,so=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${X1(n)})`},Hu=(e="default")=>O`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>$i({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${It()}
    ${e==="flat"?Wn():me({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${It()}
    ${e==="flat"?Wn():me({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?me({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>so(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>so(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>so(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>so(t.materialText,0)};
  }
`,Z1=I.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,q1=w.forwardRef(({children:e,underline:t=!0,...n},r)=>x.createElement(Z1,{ref:r,underline:t,...n},e));q1.displayName="Anchor";const em=I.header`
  ${me()};
  ${It()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,bp=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},i)=>x.createElement(em,{fixed:t,position:t!==!1?n:void 0,ref:i,...r},e));bp.displayName="AppBar";const Kn=()=>{};function Ln(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function tm(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function kf(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(tm(t)))}function vn(e){return typeof e=="number"?`${e}px`:e}const nm=I.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,rm=I.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,im=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:i=!1,src:o,...l},u)=>x.createElement(nm,{noBorder:n,ref:u,size:vn(r),square:i,src:o,...l},o?x.createElement(rm,{src:o,alt:e}):t));im.displayName="Avatar";const Ne={sm:"28px",md:"36px",lg:"44px"},om=O`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ne[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ne[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Ps=I.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:i})=>i==="flat"?O`
          ${Wn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Dr}
            outline-offset: -4px;
          }
        `:i==="menu"||i==="thin"?O`
          ${It()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&me({style:"buttonThin"})}
          }
          &:active {
            ${!t&&me({style:"buttonThinPressed"})}
          }
          ${e&&me({style:"buttonThinPressed"})}
          ${t&&St()}
        `:O`
          ${It()};
          border: none;
          ${t&&St()}
          ${e?$i({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?O`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:O`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${me(e?{style:i==="raised"?"window":"button",invert:!0}:{style:i==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&me({style:i==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Dr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${om}
`,yn=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:i=!1,size:o="md",square:l=!1,active:u=!1,onTouchStart:c=Kn,primary:f=!1,variant:h="default",...s},a)=>x.createElement(Ps,{active:u,disabled:t,$disabled:t,fullWidth:i,onClick:t?void 0:e,onTouchStart:c,primary:f,ref:a,size:o,square:l,type:r,variant:h,...s},n));yn.displayName="Button";function En({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:i,valuePropName:o="value"}){const l=i!==void 0,[u,c]=w.useState(e),f=w.useCallback(h=>{l||c(h)},[l]);if(l&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${o}\` prop to a component without an \`${n}\` handler.${o==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${o}\`.`}`;console.warn(h)}return[l?i:u,f]}const Ra=I.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ne[e.size]};
  width: ${e=>e.square?Ne[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ne[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&St()}
`,bn=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:i,primary:o,...l},u)=>x.createElement(Ra,{$disabled:t,size:e,square:n,onClick:t?void 0:i,primary:o,role:"menuitem",ref:u,"aria-disabled":t,...l},r));bn.displayName="MenuListItem";const Rp=I.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${me({style:"window"})}
  ${It()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Rp.displayName="MenuList";const Ot=20,ls=I.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ot}px;
  height: ${Ot}px;
  opacity: 0;
  z-index: -1;
`,Vu=I.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&St()}

  ${Ra} & {
    margin: 0;
    height: 100%;
  }
  ${Ra}:hover & {
    ${({$disabled:e,theme:t})=>!e&&O`
        color: ${t.materialTextInvert};
      `};
  }
`,ju=I.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ls}:focus ~ & {
    ${Dr}
  }
  ${ls}:not(:disabled) ~ &:active {
    ${Dr}
  }
`,Lt=I.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${zu};`}
  }
`,sm=I.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Hu()}
`,Tp=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>x.createElement(Lt,{ref:r,shadow:t,...n},x.createElement(sm,null,e)));Tp.displayName="ScrollView";const Pp=O`
  width: ${Ot}px;
  height: ${Ot}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,lm=I(Lt)`
  ${Pp}
  width: ${Ot}px;
  height: ${Ot}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,am=I.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Pp}
  width: ${Ot-4}px;
  height: ${Ot-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,um=I.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,cm=I.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>$i({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,fm={flat:am,default:lm},dm=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:i=!1,label:o="",onChange:l=Kn,style:u={},value:c,variant:f="default",...h},s)=>{var a;const[d,g]=En({defaultValue:n,onChange:l,readOnly:(a=h.readOnly)!==null&&a!==void 0?a:r,value:e}),v=w.useCallback(p=>{const m=p.target.checked;g(m),l(p)},[l,g]),y=fm[f];let A=null;return i?A=cm:d&&(A=um),x.createElement(Vu,{$disabled:r,className:t,style:u},x.createElement(ls,{disabled:r,onChange:r?void 0:v,readOnly:r,type:"checkbox",value:c,checked:d,"data-indeterminate":i,ref:s,...h}),x.createElement(y,{$disabled:r,role:"presentation"},A&&x.createElement(A,{$disabled:r,variant:f})),o&&x.createElement(ju,null,o))});dm.displayName="Checkbox";const Ju=I.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${vn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${vn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Ju.displayName="Separator";const Am=I(Ps)`
  padding-left: 8px;
`,pm=I(Ju)`
  height: 21px;
  position: relative;
  top: 0;
`,Qp=I.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,hm=I.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?O`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:O`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${Qp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Dr}
    outline-offset: -8px;
  }
`,gm=I.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?O`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:O`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,mm=w.forwardRef(({value:e,defaultValue:t,onChange:n=Kn,disabled:r=!1,variant:i="default",...o},l)=>{var u;const[c,f]=En({defaultValue:t,onChange:n,readOnly:(u=o.readOnly)!==null&&u!==void 0?u:r,value:e}),h=s=>{const a=s.target.value;f(a),n(s)};return x.createElement(Am,{disabled:r,as:"div",variant:i,size:"md"},x.createElement(Qp,{onChange:h,readOnly:r,disabled:r,value:c??"#008080",type:"color",ref:l,...o}),x.createElement(hm,{$disabled:r,color:c??"#008080",role:"presentation"}),i==="default"&&x.createElement(pm,{orientation:"vertical"}),x.createElement(gm,{$disabled:r,variant:i}))});mm.displayName="ColorInput";const vm=I.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>O`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${$i({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Sf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],ym=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Em({digit:e=0,pixelSize:t=2,...n}){const r=ym[Number(e)].map((i,o)=>i?`${Sf[o]} active`:Sf[o]);return x.createElement(vm,{pixelSize:t,...n},r.map((i,o)=>x.createElement("span",{className:i,key:o})))}const wm=I.div`
  ${me({style:"status"})}
  display: inline-flex;
  background: #000000;
`,xm={sm:1,md:2,lg:3,xl:4},_m=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},i)=>{const o=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return x.createElement(wm,{ref:i,...r},o.map((l,u)=>x.createElement(Em,{digit:l,pixelSize:xm[n],key:u})))});_m.displayName="Counter";const Op=O`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ne.md};
`,km=I(Lt).attrs({"data-testid":"variant-default"})`
  ${Op}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Sm=I.div.attrs({"data-testid":"variant-flat"})`
  ${Wn()}
  ${Op}
  position: relative;
`,Dp=O`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&St()}
`,Im=I.input`
  ${Dp}
  padding: 0 8px;
`,Cm=I.textarea`
  ${Dp}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Hu(e)}
`,Wu=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Kn,shadow:i=!0,style:o,variant:l="default",...u},c)=>{const f=l==="flat"?Sm:km,h=w.useMemo(()=>{var s;return u.multiline?x.createElement(Cm,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:c,variant:l,...u}):x.createElement(Im,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:c,type:(s=u.type)!==null&&s!==void 0?s:"text",variant:l,...u})},[t,r,u,c,l]);return x.createElement(f,{className:e,fullWidth:n,$disabled:t,shadow:i,style:o},h)});Wu.displayName="TextInput";const Bm=I.div`
  display: inline-flex;
  align-items: center;
`,Ta=I(yn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?O`
          height: calc(50% - 1px);
        `:O`
          height: 50%;
        `}
`,bm=I.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?O`
          height: calc(${Ne.md} - 4px);
        `:O`
          height: ${Ne.md};
          margin-left: 2px;
        `}
`,If=I.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?O`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:O`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Ta}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?O`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:O`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Lp=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:i,onChange:o,readOnly:l,step:u=1,style:c,value:f,variant:h="default",width:s,...a},d)=>{const[g,v]=En({defaultValue:t,onChange:o,readOnly:l,value:f}),y=w.useCallback(k=>{const S=parseFloat(k.target.value);v(S)},[v]),A=w.useCallback(k=>{const S=Ln(parseFloat(((g??0)+k).toFixed(2)),i??null,r??null);v(S),o==null||o(S)},[r,i,o,v,g]),p=w.useCallback(()=>{g!==void 0&&(o==null||o(g))},[o,g]),m=w.useCallback(()=>{A(u)},[A,u]),E=w.useCallback(()=>{A(-u)},[A,u]),_=h==="flat"?"flat":"raised";return x.createElement(Bm,{className:e,style:{...c,width:s!==void 0?vn(s):"auto"},...a},x.createElement(Wu,{value:g,variant:h,onChange:y,disabled:n,type:"number",readOnly:l,ref:d,fullWidth:!0,onBlur:p}),x.createElement(bm,{variant:h},x.createElement(Ta,{"data-testid":"increment",variant:_,disabled:n||l,onClick:m},x.createElement(If,{invert:!0})),x.createElement(Ta,{"data-testid":"decrement",variant:_,disabled:n||l,onClick:E},x.createElement(If,null))))});Lp.displayName="NumberInput";function Rm(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Np=e=>w.useMemo(()=>Rm(),[e]),Mp=O`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Fp=O`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Yu=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Tm=I.div`
  ${Mp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Yu}:focus & {
    ${Fp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,$p=O`
  height: ${Ne.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?St():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Pm=I(Lt)`
  ${$p}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Qm=I.div`
  ${Wn()}
  ${$p}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Om=I.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Mp}
  cursor: pointer;
  &:disabled {
    ${St()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Up=I(Ps).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?O`
          height: 100%;
          margin-right: 0;
        `:O`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,Dm=I.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Up}:active & {
    margin-top: 2px;
  }
`,Lm=I.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Uu};
  ${({variant:e="default"})=>e==="flat"?O`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:O`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Hu(e)}
`,Nm=I.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ne.md} - 4px);
  line-height: calc(${Ne.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Fp:""}
  user-select: none;
`,Mm=[],zp=({className:e,defaultValue:t,disabled:n,native:r,onChange:i,options:o=Mm,readOnly:l,style:u,value:c,variant:f,width:h})=>{var s;const a=w.useMemo(()=>o.filter(Boolean),[o]),[d,g]=En({defaultValue:t??((s=a==null?void 0:a[0])===null||s===void 0?void 0:s.value),onChange:i,readOnly:l,value:c}),v=!(n||l),y=w.useMemo(()=>({className:e,style:{...u,width:h}}),[e,u,h]),A=w.useMemo(()=>x.createElement(Up,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:f==="flat"?"flat":"raised"},x.createElement(Dm,{"data-testid":"select-icon",$disabled:n})),[n,r,f]),p=w.useMemo(()=>f==="flat"?Qm:Pm,[f]);return w.useMemo(()=>({isEnabled:v,options:a,value:d,setValue:g,wrapperProps:y,DropdownButton:A,Wrapper:p}),[A,p,v,a,g,d,y])},Fm={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},$m=1e3,Um=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:i,onMouseDown:o,onOpen:l,open:u,options:c,readOnly:f,value:h,selectRef:s,setValue:a,wrapperRef:d})=>{const g=w.useRef(null),v=w.useRef([]),y=w.useRef(0),A=w.useRef(0),p=w.useRef(),m=w.useRef("search"),E=w.useRef(""),_=w.useRef(),[k,S]=En({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:f,value:u,valuePropName:"open"}),R=w.useMemo(()=>{const T=c.findIndex(j=>j.value===h);return y.current=Ln(T,0,null),c[T]},[c,h]),[P,L]=w.useState(c[0]),U=w.useCallback(T=>{const j=g.current,X=v.current[T];if(!X||!j){p.current=T;return}p.current=void 0;const re=j.clientHeight,ce=j.scrollTop,Oe=j.scrollTop+re,Se=X.offsetTop,st=X.offsetHeight,Nt=X.offsetTop+X.offsetHeight;Se<ce&&j.scrollTo(0,Se),Nt>Oe&&j.scrollTo(0,Se-re+st),X.focus({preventScroll:!0})},[g]),H=w.useCallback((T,{scroll:j}={})=>{var X;const re=c.length-1;let ce;switch(T){case"first":{ce=0;break}case"last":{ce=re;break}case"next":{ce=Ln(A.current+1,0,re);break}case"previous":{ce=Ln(A.current-1,0,re);break}case"selected":{ce=Ln((X=y.current)!==null&&X!==void 0?X:0,0,re);break}default:ce=T}A.current=ce,L(c[ce]),j&&U(ce)},[A,c,U]),J=w.useCallback(({fromEvent:T})=>{S(!0),H("selected",{scroll:!0}),l==null||l({fromEvent:T})},[H,l,S]),V=w.useCallback(()=>{m.current="search",E.current="",clearTimeout(_.current)},[]),K=w.useCallback(({focusSelect:T,fromEvent:j})=>{var X;n==null||n({fromEvent:j}),S(!1),L(c[0]),V(),p.current=void 0,T&&((X=s.current)===null||X===void 0||X.focus())},[V,n,c,s,S]),_e=w.useCallback(({fromEvent:T})=>{k?K({focusSelect:!1,fromEvent:T}):J({fromEvent:T})},[K,J,k]),ke=w.useCallback((T,{fromEvent:j})=>{y.current!==T&&(y.current=T,a(c[T].value),t==null||t(c[T],{fromEvent:j}))},[t,c,a]),C=w.useCallback(({focusSelect:T,fromEvent:j})=>{ke(A.current,{fromEvent:j}),K({focusSelect:T,fromEvent:j})},[K,ke]),Q=w.useCallback((T,{fromEvent:j,select:X})=>{var re;switch(m.current==="cycleFirstLetter"&&T!==E.current&&(m.current="search"),T===E.current?m.current="cycleFirstLetter":E.current+=T,m.current){case"search":{let ce=c.findIndex(Oe=>{var Se;return((Se=Oe.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(E.current))===0});ce<0&&(ce=c.findIndex(Oe=>{var Se;return((Se=Oe.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(T))===0}),E.current=T),ce>=0&&(X?ke(ce,{fromEvent:j}):H(ce,{scroll:!0}));break}case"cycleFirstLetter":{const ce=X?(re=y.current)!==null&&re!==void 0?re:-1:A.current;let Oe=c.findIndex((Se,st)=>{var Nt;return st>ce&&((Nt=Se.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf(T))===0});Oe<0&&(Oe=c.findIndex(Se=>{var st;return((st=Se.label)===null||st===void 0?void 0:st.toLocaleUpperCase().indexOf(T))===0})),Oe>=0&&(X?ke(Oe,{fromEvent:j}):H(Oe,{scroll:!0}));break}}clearTimeout(_.current),_.current=setTimeout(()=>{m.current==="search"&&(E.current="")},$m)},[H,c,ke]),M=w.useCallback(T=>{var j;T.button===0&&(T.preventDefault(),(j=s.current)===null||j===void 0||j.focus(),_e({fromEvent:T}),o==null||o(T))},[o,s,_e]),q=w.useCallback(T=>{C({focusSelect:!0,fromEvent:T})},[C]),Y=w.useCallback(T=>{const{altKey:j,code:X,ctrlKey:re,metaKey:ce,shiftKey:Oe}=T,{ARROW_DOWN:Se,ARROW_UP:st,END:Nt,ENTER:kn,ESC:Kt,HOME:$s,SPACE:Us,TAB:zr}=Fm,ec=j||re||ce||Oe;if(!(X===zr&&(j||re||ce)||X!==zr&&ec))switch(X){case Se:{if(T.preventDefault(),!k){J({fromEvent:T});return}H("next",{scroll:!0});break}case st:{if(T.preventDefault(),!k){J({fromEvent:T});return}H("previous",{scroll:!0});break}case Nt:{if(T.preventDefault(),!k){J({fromEvent:T});return}H("last",{scroll:!0});break}case kn:{if(!k)return;T.preventDefault(),C({focusSelect:!0,fromEvent:T});break}case Kt:{if(!k)return;T.preventDefault(),K({focusSelect:!0,fromEvent:T});break}case $s:{if(T.preventDefault(),!k){J({fromEvent:T});return}H("first",{scroll:!0});break}case Us:{T.preventDefault(),k?C({focusSelect:!0,fromEvent:T}):J({fromEvent:T});break}case zr:{if(!k)return;Oe||T.preventDefault(),C({focusSelect:!Oe,fromEvent:T});break}default:!ec&&X.match(/^Key/)&&(T.preventDefault(),T.stopPropagation(),Q(X.replace(/^Key/,""),{select:!k,fromEvent:T}))}},[H,K,k,J,Q,C]),F=w.useCallback(T=>{Y(T),i==null||i(T)},[Y,i]),$=w.useCallback(T=>{H(T)},[H]),ee=w.useCallback(T=>{k||(V(),e==null||e(T))},[V,e,k]),z=w.useCallback(T=>{V(),r==null||r(T)},[V,r]),G=w.useCallback(T=>{g.current=T,p.current!==void 0&&U(p.current)},[U]),be=w.useCallback((T,j)=>{v.current[j]=T,p.current===j&&U(p.current)},[U]);return w.useEffect(()=>{if(!k)return()=>{};const T=j=>{var X;const re=j.target;!((X=d.current)===null||X===void 0)&&X.contains(re)||(j.preventDefault(),K({focusSelect:!1,fromEvent:j}))};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[K,k,d]),w.useMemo(()=>({activeOption:P,handleActivateOptionIndex:$,handleBlur:ee,handleButtonKeyDown:F,handleDropdownKeyDown:Y,handleFocus:z,handleMouseDown:M,handleOptionClick:q,handleSetDropdownRef:G,handleSetOptionRef:be,open:k,selectedOption:R}),[P,$,ee,F,z,Y,M,q,G,be,k,R])},zm=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:i,readOnly:o,style:l,value:u,variant:c,width:f,...h},s)=>{const{isEnabled:a,options:d,setValue:g,value:v,DropdownButton:y,Wrapper:A}=zp({defaultValue:t,disabled:n,native:!0,onChange:r,options:i,readOnly:o,value:u,variant:c}),p=w.useCallback(m=>{const E=d.find(_=>_.value===m.target.value);E&&(g(E.value),r==null||r(E,{fromEvent:m}))},[r,d,g]);return x.createElement(A,{className:e,style:{...l,width:f}},x.createElement(Yu,null,x.createElement(Om,{...h,disabled:n,onChange:a?p:Kn,ref:s,value:v},d.map((m,E)=>{var _;return x.createElement("option",{key:`${m.value}-${E}`,value:m.value},(_=m.label)!==null&&_!==void 0?_:m.value)})),y))});zm.displayName="SelectNative";function Hm({activateOptionIndex:e,active:t,index:n,onClick:r,option:i,selected:o,setRef:l}){const u=w.useCallback(()=>{e(n)},[e,n]),c=w.useCallback(h=>{l(h,n)},[n,l]),f=Np();return x.createElement(Nm,{active:t,"aria-selected":o?"true":void 0,"data-value":i.value,id:f,onClick:r,onMouseEnter:u,ref:c,role:"option",tabIndex:0},i.label)}function Vm({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:i=!1,formatDisplay:o,inputProps:l,labelId:u,menuMaxHeight:c,name:f,onBlur:h,onChange:s,onClose:a,onFocus:d,onKeyDown:g,onMouseDown:v,onOpen:y,open:A,options:p,readOnly:m,shadow:E=!0,style:_,variant:k="default",value:S,width:R="auto",...P},L){const{isEnabled:U,options:H,setValue:J,value:V,wrapperProps:K,DropdownButton:_e,Wrapper:ke}=zp({className:n,defaultValue:r,disabled:i,native:!1,onChange:s,options:p,style:_,readOnly:m,value:S,variant:k,width:R}),C=w.useRef(null),Q=w.useRef(null),M=w.useRef(null),{activeOption:q,handleActivateOptionIndex:Y,handleBlur:F,handleButtonKeyDown:$,handleDropdownKeyDown:ee,handleFocus:z,handleMouseDown:G,handleOptionClick:be,handleSetDropdownRef:T,handleSetOptionRef:j,open:X,selectedOption:re}=Um({onBlur:h,onChange:s,onClose:a,onFocus:d,onKeyDown:g,onMouseDown:v,onOpen:y,open:A,options:H,value:V,selectRef:Q,setValue:J,wrapperRef:M});w.useImperativeHandle(L,()=>({focus:kn=>{var Kt;(Kt=Q.current)===null||Kt===void 0||Kt.focus(kn)},node:C.current,value:String(V)}),[V]);const ce=w.useMemo(()=>re?typeof o=="function"?o(re):re.label:"",[o,re]),Oe=U?1:void 0,Se=w.useMemo(()=>c?{overflow:"auto",maxHeight:c}:void 0,[c]),st=Np(),Nt=w.useMemo(()=>H.map((kn,Kt)=>{const $s=`${V}-${Kt}`,Us=kn===q,zr=kn===re;return x.createElement(Hm,{activateOptionIndex:Y,active:Us,index:Kt,key:$s,onClick:be,option:kn,selected:zr,setRef:j})}),[q,Y,be,j,H,re,V]);return x.createElement(ke,{...K,$disabled:i,ref:M,shadow:E,style:{..._,width:R}},x.createElement("input",{name:f,ref:C,type:"hidden",value:String(V),...l}),x.createElement(Yu,{"aria-disabled":i,"aria-expanded":X,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??u,"aria-owns":U&&X?st:void 0,onBlur:F,onFocus:z,onKeyDown:$,onMouseDown:U?G:v,ref:Q,role:"button",tabIndex:Oe,...P},x.createElement(Tm,null,ce),_e),U&&X&&x.createElement(Lm,{id:st,onKeyDown:ee,ref:T,role:"listbox",style:Se,tabIndex:0,variant:k},Nt))}const Hp=w.forwardRef(Vm);Hp.displayName="Select";const jm=I.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,as=w.forwardRef(function({children:t,noPadding:n=!1,...r},i){return x.createElement(jm,{noPadding:n,ref:i,...r},t)});as.displayName="Toolbar";const Jm=I.div`
  padding: 16px;
`,Qs=w.forwardRef(function({children:t,...n},r){return x.createElement(Jm,{ref:r,...n},t)});Qs.displayName="WindowContent";const Wm=I.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?O`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:O`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Ps} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Os=w.forwardRef(function({active:t=!0,children:n,...r},i){return x.createElement(Wm,{active:t,ref:i,...r},n)});Os.displayName="WindowHeader";const Ym=I.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${me({style:"window"})}
  ${It()}
`,Gm=I.span`
  ${({theme:e})=>O`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Ds=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...i},o)=>x.createElement(Ym,{ref:o,shadow:r,...i},e,t&&x.createElement(Gm,{"data-testid":"resizeHandle",ref:n})));Ds.displayName="Window";const Km=I(Tp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Xm=I.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Zm=I.div`
  display: flex;
  flex-wrap: wrap;
`,Mt=I.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,qm=I.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,ev=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function tv(e,t){return new Date(e,t+1,0).getDate()}function nv(e,t,n){return new Date(e,t,n).getDay()}function rv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),i=t.getUTCFullYear();return{day:n,month:r,year:i}}const iv=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:i=!0},o)=>{const[l,u]=w.useState(()=>rv(t)),{year:c,month:f,day:h}=l,s=w.useCallback(({value:y})=>{u(A=>({...A,month:y}))},[]),a=w.useCallback(y=>{u(A=>({...A,year:y}))},[]),d=w.useCallback(y=>{u(A=>({...A,day:y}))},[]),g=w.useCallback(()=>{const y=[l.year,l.month+1,l.day].map(A=>String(A).padStart(2,"0")).join("-");n==null||n(y)},[l.day,l.month,l.year,n]),v=w.useMemo(()=>{const y=Array.from({length:42}),A=nv(c,f,1);let p=h;const m=tv(c,f);return p=p<m?p:m,y.forEach((E,_)=>{if(_>=A&&_<m+A){const k=_-A+1;y[_]=x.createElement(Mt,{key:_,onClick:()=>{d(k)}},x.createElement(qm,{active:k===p},k))}else y[_]=x.createElement(Mt,{key:_})}),y},[h,d,f,c]);return x.createElement(Ds,{className:e,ref:o,shadow:i,style:{margin:20}},x.createElement(Os,null,x.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),x.createElement(Qs,null,x.createElement(as,{noPadding:!0,style:{justifyContent:"space-between"}},x.createElement(Hp,{options:ev,value:f,onChange:s,width:128,menuMaxHeight:200}),x.createElement(Lp,{value:c,onChange:a,width:100})),x.createElement(Km,null,x.createElement(Xm,null,x.createElement(Mt,null,"S"),x.createElement(Mt,null,"M"),x.createElement(Mt,null,"T"),x.createElement(Mt,null,"W"),x.createElement(Mt,null,"T"),x.createElement(Mt,null,"F"),x.createElement(Mt,null,"S")),x.createElement(Zm,null,v)),x.createElement(as,{noPadding:!0,style:{justifyContent:"space-between"}},x.createElement(yn,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),x.createElement(yn,{fullWidth:!0,onClick:n?g:void 0,disabled:!n},"OK"))))});iv.displayName="DatePicker";const ov=e=>{switch(e){case"status":case"well":return O`
        ${me({style:"status"})}
      `;case"window":case"outside":return O`
        ${me({style:"window"})}
      `;case"field":return O`
        ${me({style:"field"})}
      `;default:return O`
        ${me()}
      `}},sv=I.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>ov(e)}
  ${({variant:e})=>It(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,lv=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},i)=>x.createElement(sv,{ref:i,shadow:t,variant:n,...r},e));lv.displayName="Frame";const av=I.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&O`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&St()}
`,uv=I.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,cv=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...i},o)=>x.createElement(av,{"aria-disabled":t,$disabled:t,variant:n,ref:o,...i},e&&x.createElement(uv,{variant:n},e),r));cv.displayName="GroupBox";const fv=I.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${vn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;fv.displayName="Handle";const dv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Av=I.div`
  display: inline-block;
  height: ${({size:e})=>vn(e)};
  width: ${({size:e})=>vn(e)};
`,pv=I.span`
  display: block;
  background: ${dv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,hv=w.forwardRef(({size:e=30,...t},n)=>x.createElement(Av,{size:e,ref:n,...t},x.createElement(pv,null)));hv.displayName="Hourglass";const gv=I.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,mv=I.div`
  position: relative;
`,vv=I.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,yv=I(Lt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Ev=I.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,wv=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>x.createElement(gv,{ref:r,...n},x.createElement(mv,null,x.createElement(vv,null,x.createElement(yv,{style:e},t)),x.createElement(Ev,null))));wv.displayName="Monitor";const xv=I.div`
  display: inline-block;
  height: ${Ne.md};
  width: 100%;
`,_v=I(Lt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Vp=O`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,kv=I.div`
  position: relative;
  top: 4px;
  ${Vp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Sv=I.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Vp}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Iv=I.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,jp=17,Cv=I.span`
  display: inline-block;
  width: ${jp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Bv=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...i},o)=>{const l=e?null:`${n}%`,u=w.useRef(null),[c,f]=w.useState([]),h=w.useCallback(()=>{if(!u.current||n===void 0)return;const s=u.current.getBoundingClientRect().width,a=Math.round(n/100*s/jp);f(Array.from({length:a}))},[n]);return w.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),x.createElement(xv,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:o,role:"progressbar",variant:r,...i},x.createElement(_v,{variant:r,shadow:t},r==="default"?x.createElement(x.Fragment,null,x.createElement(kv,{"data-testid":"defaultProgress1"},l),x.createElement(Sv,{"data-testid":"defaultProgress2",value:n},l)):x.createElement(Iv,{ref:u,"data-testid":"tileProgress"},c.map((s,a)=>x.createElement(Cv,{key:a})))))});Bv.displayName="ProgressBar";const Jp=O`
  width: ${Ot}px;
  height: ${Ot}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,bv=I(Lt)`
  ${Jp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Rv=I.div`
  ${Wn()}
  ${Jp}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,Tv=I.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,Pv={flat:Rv,default:bv},Qv=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:i,style:o={},variant:l="default",...u},c)=>{const f=Pv[l];return x.createElement(Vu,{$disabled:n,className:t,style:o},x.createElement(f,{$disabled:n,role:"presentation"},e&&x.createElement(Tv,{$disabled:n,variant:l})),x.createElement(ls,{disabled:n,onChange:n?void 0:i,readOnly:n,type:"radio",checked:e,ref:c,...u}),r&&x.createElement(ju,null,r))});Qv.displayName="Radio";const Ov=typeof window<"u"?w.useLayoutEffect:w.useEffect;function Sn(e){const t=w.useRef(e);return Ov(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function Cf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Bf(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{Cf(e,n),Cf(t,n)},[e,t])}let Ls=!0,Pa=!1,bf;const Dv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Lv(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Dv[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Nv(e){e.metaKey||e.altKey||e.ctrlKey||(Ls=!0)}function vl(){Ls=!1}function Mv(){this.visibilityState==="hidden"&&Pa&&(Ls=!0)}function Fv(e){e.addEventListener("keydown",Nv,!0),e.addEventListener("mousedown",vl,!0),e.addEventListener("pointerdown",vl,!0),e.addEventListener("touchstart",vl,!0),e.addEventListener("visibilitychange",Mv,!0)}function $v(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ls||Lv(t)}function Uv(){Pa=!0,window.clearTimeout(bf),bf=window.setTimeout(()=>{Pa=!1},100)}function zv(){const e=w.useCallback(t=>{const n=rp.findDOMNode(t);n!=null&&Fv(n.ownerDocument)},[]);return{isFocusVisible:$v,onBlurVisible:Uv,ref:e}}function Hv(e,t,n){return(n-t)*e+t}function lo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ao(e){return e&&e.ownerDocument||document}function Vv(e,t){var n;const{index:r}=(n=e.reduce((i,o,l)=>{const u=Math.abs(t-o);return i===null||u<i.distance||u===i.distance?{distance:u,index:l}:i},null))!==null&&n!==void 0?n:{};return r??-1}const jv=I.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?O`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:O`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Wp=()=>O`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?O`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:O`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Jv=I(Lt)`
  ${Wp()}
`,Wv=I(Lt)`
  ${Wp()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Yv=I.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?O`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:O`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?O`
          ${Wn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:O`
          ${It()}
          ${me()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&$i({mainColor:t.material,secondaryColor:t.borderLightest})}
`,us=6,Gv=I.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?O`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${us}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:O`
          bottom: ${-6}px;
          height: ${us}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&O`
      ${St()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Kv=I.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?O`
          transform: translate(${us+2}px, ${us+1}px);
        `:O`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Xv=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:i=0,name:o,onChange:l,onChangeCommitted:u,onMouseDown:c,orientation:f="horizontal",size:h="100%",step:s=1,value:a,variant:d="default",...g},v)=>{const y=d==="flat"?Wv:Jv,A=f==="vertical",[p=i,m]=En({defaultValue:e,onChange:l??u,value:a}),{isFocusVisible:E,onBlurVisible:_,ref:k}=zv(),[S,R]=w.useState(!1),P=w.useRef(),L=w.useRef(null),U=Bf(k,P),H=Bf(v,U),J=Sn(F=>{E(F)&&R(!0)}),V=Sn(()=>{S!==!1&&(R(!1),_())}),K=w.useRef(),_e=w.useMemo(()=>n===!0&&Number.isFinite(s)?[...Array(Math.round((r-i)/s)+1)].map((F,$)=>({label:void 0,value:i+s*$})):Array.isArray(n)?n:[],[n,r,i,s]),ke=Sn(F=>{const $=(r-i)/10,ee=_e.map(be=>be.value),z=ee.indexOf(p);let G=0;switch(F.key){case"Home":G=i;break;case"End":G=r;break;case"PageUp":s&&(G=p+$);break;case"PageDown":s&&(G=p-$);break;case"ArrowRight":case"ArrowUp":s?G=p+s:G=ee[z+1]||ee[ee.length-1];break;case"ArrowLeft":case"ArrowDown":s?G=p-s:G=ee[z-1]||ee[0];break;default:return}F.preventDefault(),s&&(G=kf(G,s,i)),G=Ln(G,i,r),m(G),R(!0),l==null||l(G),u==null||u(G)}),C=w.useCallback(F=>{if(!P.current)return 0;const $=P.current.getBoundingClientRect();let ee;A?ee=($.bottom-F.y)/$.height:ee=(F.x-$.left)/$.width;let z;if(z=Hv(ee,i,r),s)z=kf(z,s,i);else{const G=_e.map(T=>T.value),be=Vv(G,z);z=G[be]}return z=Ln(z,i,r),z},[_e,r,i,s,A]),Q=Sn(F=>{var $;const ee=lo(F,K.current);if(!ee)return;const z=C(ee);($=L.current)===null||$===void 0||$.focus(),m(z),R(!0),l==null||l(z)}),M=Sn(F=>{const $=lo(F,K.current);if(!$)return;const ee=C($);u==null||u(ee),K.current=void 0;const z=ao(P.current);z.removeEventListener("mousemove",Q),z.removeEventListener("mouseup",M),z.removeEventListener("touchmove",Q),z.removeEventListener("touchend",M)}),q=Sn(F=>{var $;c==null||c(F),F.preventDefault(),($=L.current)===null||$===void 0||$.focus(),R(!0);const ee=lo(F,K.current);if(ee){const G=C(ee);m(G),l==null||l(G)}const z=ao(P.current);z.addEventListener("mousemove",Q),z.addEventListener("mouseup",M)}),Y=Sn(F=>{var $;F.preventDefault();const ee=F.changedTouches[0];ee!=null&&(K.current=ee.identifier),($=L.current)===null||$===void 0||$.focus(),R(!0);const z=lo(F,K.current);if(z){const be=C(z);m(be),l==null||l(be)}const G=ao(P.current);G.addEventListener("touchmove",Q),G.addEventListener("touchend",M)});return w.useEffect(()=>{const{current:F}=P;F==null||F.addEventListener("touchstart",Y);const $=ao(F);return()=>{F==null||F.removeEventListener("touchstart",Y),$.removeEventListener("mousemove",Q),$.removeEventListener("mouseup",M),$.removeEventListener("touchmove",Q),$.removeEventListener("touchend",M)}},[M,Q,Y]),x.createElement(jv,{$disabled:t,hasMarks:!!_e.length,isFocused:S,onMouseDown:q,orientation:f,ref:H,size:vn(h),...g},x.createElement("input",{disabled:t,name:o,type:"hidden",value:p??0}),_e&&_e.map(F=>x.createElement(Gv,{$disabled:t,"data-testid":"tick",key:F.value/(r-i)*100,orientation:f,style:{[A?"bottom":"left"]:`${(F.value-i)/(r-i)*100}%`}},F.label&&x.createElement(Kv,{"aria-hidden":!0,"data-testid":"mark",orientation:f},F.label))),x.createElement(y,{orientation:f,variant:d}),x.createElement(Yv,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":f,"aria-valuemax":r,"aria-valuemin":i,"aria-valuenow":p,onBlur:V,onFocus:J,onKeyDown:ke,orientation:f,ref:L,role:"slider",style:{[A?"bottom":"left"]:`${(A?-100:0)+100*(p-i)/(r-i)}%`},tabIndex:t?void 0:0,variant:d}))});Xv.displayName="Slider";const Zv=I.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${zu};
  overflow-y: auto;
`,qv=w.forwardRef(function({children:t,...n},r){return x.createElement(Zv,{ref:r,...n},t)});qv.displayName="TableBody";const ey=I.td`
  padding: 0 8px;
`,ty=w.forwardRef(function({children:t,...n},r){return x.createElement(ey,{ref:r,...n},t)});ty.displayName="TableDataCell";const ny=I.thead`
  display: table-header-group;
`,ry=w.forwardRef(function({children:t,...n},r){return x.createElement(ny,{ref:r,...n},t)});ry.displayName="TableHead";const iy=I.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${me()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&O`
      &:active {
        &:before {
          ${me({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&St()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&St()}
  }
`,oy=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:i=Kn,sort:o,...l},u){const c=o==="asc"?"ascending":o==="desc"?"descending":void 0;return x.createElement(iy,{$disabled:t,"aria-disabled":t,"aria-sort":c,onClick:t?void 0:r,onTouchStart:t?void 0:i,ref:u,...l},x.createElement("div",null,n))});oy.displayName="TableHeadCell";const sy=I.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ne.md} - 2px);
  line-height: calc(${Ne.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,ly=w.forwardRef(function({children:t,...n},r){return x.createElement(sy,{ref:r,...n},t)});ly.displayName="TableRow";const ay=I.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,uy=I(Lt)`
  &:before {
    box-shadow: none;
  }
`,cy=w.forwardRef(({children:e,...t},n)=>x.createElement(uy,null,x.createElement(ay,{ref:n,...t},e)));cy.displayName="Table";const fy=I.button`
  ${It()}
  ${me()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ne.md};
  line-height: ${Ne.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Dr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ne.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,dy=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...i},o)=>x.createElement(fy,{"aria-selected":n,selected:n,onClick:l=>t==null?void 0:t(e,l),ref:o,role:"tab",...i},r));dy.displayName="Tab";const Ay=I.div`
  ${It()}
  ${me()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,py=w.forwardRef(({children:e,...t},n)=>x.createElement(Ay,{ref:n,...t},e));py.displayName="TabBody";const hy=I.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,gy=I.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function my(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const vy=w.forwardRef(({value:e,onChange:t=Kn,children:n,rows:r=1,...i},o)=>{const l=w.useMemo(()=>{var u;const c=(u=x.Children.map(n,s=>{if(!x.isValidElement(s))return null;const a={selected:s.props.value===e,onClick:t};return x.cloneElement(s,a)}))!==null&&u!==void 0?u:[],f=my(c,r).map((s,a)=>({key:a,tabs:s})),h=f.findIndex(s=>s.tabs.some(a=>a.props.selected));return f.push(f.splice(h,1)[0]),f},[n,t,r,e]);return x.createElement(hy,{...i,isMultiRow:r>1,role:"tablist",ref:o},l.map(u=>x.createElement(gy,{key:u.key},u.tabs)))});vy.displayName="Tabs";const yy=["blur","focus"],Ey=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Rf(e){return"nativeEvent"in e&&yy.includes(e.type)}function Tf(e){return"nativeEvent"in e&&Ey.includes(e.type)}const wy={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},xy=I.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Uu};
  text-align: center;
  font-size: 1rem;
  ${e=>wy[e.position]}
`,_y=I.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,ky=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:i=1e3,leaveDelay:o=0,onBlur:l,onClose:u,onFocus:c,onMouseEnter:f,onMouseLeave:h,onOpen:s,style:a,text:d,position:g="top",...v},y)=>{const[A,p]=w.useState(!1),[m,E]=w.useState(),[_,k]=w.useState(),S=!n,R=!r,P=C=>{window.clearTimeout(m),window.clearTimeout(_);const Q=window.setTimeout(()=>{p(!0),s==null||s(C)},i);E(Q)},L=C=>{C.persist(),Rf(C)?c==null||c(C):Tf(C)&&(f==null||f(C)),P(C)},U=C=>{window.clearTimeout(m),window.clearTimeout(_);const Q=window.setTimeout(()=>{p(!1),u==null||u(C)},o);k(Q)},H=C=>{C.persist(),Rf(C)?l==null||l(C):Tf(C)&&(h==null||h(C)),U(C)},J=S?H:void 0,V=S?L:void 0,K=R?L:void 0,_e=R?H:void 0,ke=S?0:void 0;return x.createElement(_y,{"data-testid":"tooltip-wrapper",onBlur:J,onFocus:V,onMouseEnter:K,onMouseLeave:_e,tabIndex:ke},x.createElement(xy,{className:e,"data-testid":"tooltip",position:g,ref:y,show:A,style:a,...v},d),t)});ky.displayName="Tooltip";const Qa=I(ju)`
  white-space: nowrap;
`,Yp=O`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":O`
          cursor: pointer;

          :focus {
            ${Qa} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Sy=I.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&O`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,Iy=I.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?O`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:O`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,Cy=I.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,By=I.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Yp};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Pf=I(Vu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Yp};
`,by=I.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Qf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Of(e){e.preventDefault()}function Gp({className:e,disabled:t,expanded:n,innerRef:r,level:i,select:o,selected:l,style:u,tree:c=[]}){const f=i===0,h=w.useCallback(s=>{var a,d;const g=!!(s.items&&s.items.length>0),v=n.includes(s.id),y=(a=t||s.disabled)!==null&&a!==void 0?a:!1,A=y?Of:_=>o(_,s),p=y?Of:_=>o(_,s),m=l===s.id,E=x.createElement(by,{"aria-hidden":!0},s.icon);return x.createElement(Iy,{key:s.label,isRootLevel:f,role:"treeitem","aria-expanded":v,"aria-selected":m,hasItems:g},g?x.createElement(Cy,{open:v},x.createElement(By,{onClick:A,$disabled:y},x.createElement(Pf,{$disabled:y},E,x.createElement(Qa,null,s.label))),v&&x.createElement(Gp,{className:e,disabled:y,expanded:n,level:i+1,select:o,selected:l,style:u,tree:(d=s.items)!==null&&d!==void 0?d:[]})):x.createElement(Pf,{as:"button",$disabled:y,onClick:p},E,x.createElement(Qa,null,s.label)))},[e,t,n,f,i,o,l,u]);return x.createElement(Sy,{className:f?e:void 0,style:f?u:void 0,ref:f?r:void 0,role:f?"tree":"group",isRootLevel:f},c.map(h))}function Ry({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:i,onNodeSelect:o,onNodeToggle:l,selected:u,style:c,tree:f=[]},h){const[s,a]=En({defaultValue:t,onChange:l,onChangePropName:"onNodeToggle",value:i,valuePropName:"expanded"}),[d,g]=En({defaultValue:n,onChange:o,onChangePropName:"onNodeSelect",value:u,valuePropName:"selected"}),v=w.useCallback((p,m)=>{if(l){const E=Qf(s,m);l(p,E)}a(E=>Qf(E,m))},[s,l,a]),y=w.useCallback((p,m)=>{g(m),o&&o(p,m)},[o,g]),A=w.useCallback((p,m)=>{p.preventDefault(),y(p,m.id),m.items&&m.items.length&&v(p,m.id)},[y,v]);return x.createElement(Gp,{className:e,disabled:r,expanded:s,level:0,innerRef:h,select:A,selected:d,style:c,tree:f})}const Ty=w.forwardRef(Ry);Ty.displayName="TreeView";var Py={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Qy=Py;const Oy=Ua(Qy),Dy="/assets/ms_sans_serif-Du8rjN1q.woff2",Ly="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Ny={menu:!1,visiblePrograms:{},openPrograms:{},activeProgram:void 0},Ns=w.createContext({});function My(e,t){switch(t.type){case"SET_MENU":return{...e,menu:t.payload};case"SET_VISIBLE_PROGRAM":return{...e,visiblePrograms:{...e.visiblePrograms,[t.payload.program]:t.payload.state}};case"SET_OPEN_PROGRAM":return{...e,openPrograms:{...e.openPrograms,[t.payload.program]:t.payload.state}};case"SET_ACTIVE_PROGRAM":return{...e,activeProgram:t.payload};default:return e}}const Fy=({children:e})=>{const[t,n]=w.useReducer(My,Ny);return B.jsx(Ns.Provider,{value:[t,n],children:e})};var Ce=(e=>(e.ABOUT="ABOUT",e.WEB_CAVE="WEB_CAVE",e.SN_BRIDGE="SN_BRIDGE",e.REMIX="REMIX",e.RAKIA="RAKIA",e.STAKING="STAKING",e))(Ce||{});const $r=e=>{const{program:t,programLabel:n,width:r}=e,[i,o]=w.useContext(Ns),l=()=>{o({type:"SET_OPEN_PROGRAM",payload:{program:t,state:!1}}),o({type:"SET_VISIBLE_PROGRAM",payload:{program:t,state:!1}})},u=()=>{o({type:"SET_ACTIVE_MODAL",payload:t})};return i.openPrograms[t]?B.jsxs(Ds,{onClick:u,style:{width:r,maxWidth:"94%",maxHeight:"100%",zIndex:i.activeProgram===t?2:1,position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:i.visiblePrograms[t]?"block":"none"},children:[B.jsxs(Os,{className:"flex items-center justify-between",children:[B.jsx("span",{children:n}),B.jsx(yn,{onClick:l,children:B.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),B.jsx(Qs,{children:e.children})]}):null},$y=()=>B.jsxs($r,{program:Ce.ABOUT,programLabel:"About",width:300,children:[B.jsx("p",{className:"h1",children:"Status Network"}),B.jsx("p",{className:"mt2",children:"The gas-less network with sustainable funding for app builders"}),B.jsx("p",{className:"mt2",children:"Launch and scale your social apps and games with truly free transactions."})]});class ge{constructor(t,n,r){this.x=t,this.y=n,this.z=r}add(t){return new ge(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new ge(this.x-t.x,this.y-t.y,this.z-t.z)}mul(t){return new ge(this.x*t,this.y*t,this.z*t)}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}distance(t){return this.sub(t).length()}normal(){if(this.x==0&&this.y==0&&this.z==0)return new ge(0,0,0);let t=this.length();return new ge(this.x/t,this.y/t,this.z/t)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}toArray(){return[this.x,this.y,this.z]}toString(){return"( "+this.x+", "+this.y+", "+this.z+" )"}}var N=(e=>(e[e.AIR=0]="AIR",e[e.BEDROCK=1]="BEDROCK",e[e.DIRT=2]="DIRT",e[e.WOOD=3]="WOOD",e[e.TNT=4]="TNT",e[e.BOOKCASE=5]="BOOKCASE",e[e.LAVA=6]="LAVA",e[e.PLANK=7]="PLANK",e[e.COBBLESTONE=8]="COBBLESTONE",e[e.CONCRETE=9]="CONCRETE",e[e.BRICK=10]="BRICK",e[e.SAND=11]="SAND",e[e.GRAVEL=12]="GRAVEL",e[e.IRON=13]="IRON",e[e.GOLD=14]="GOLD",e[e.DIAMOND=15]="DIAMOND",e[e.OBSIDIAN=16]="OBSIDIAN",e[e.GLASS=17]="GLASS",e[e.SPONGE=18]="SPONGE",e))(N||{}),Rn=(e=>(e[e.DOWN=0]="DOWN",e[e.UP=1]="UP",e[e.MOVE=2]="MOVE",e))(Rn||{}),Ve=(e=>(e[e.UP=1]="UP",e[e.DOWN=2]="DOWN",e[e.LEFT=3]="LEFT",e[e.RIGHT=4]="RIGHT",e[e.FORWARD=5]="FORWARD",e[e.BACK=6]="BACK",e))(Ve||{});const ye={[N.AIR]:{id:N.AIR,spawnable:!1,transparent:!0,texture:()=>[0,0,0,0]},[N.BEDROCK]:{id:N.BEDROCK,spawnable:!1,transparent:!1,texture:()=>[1/16,1/16,2/16,2/16]},[N.DIRT]:{id:N.DIRT,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:({dir:e,lit:t})=>e==Ve.UP&&t?[14/16,0/16,15/16,1/16]:e==Ve.DOWN||!t?[2/16,0/16,3/16,1/16]:[3/16,0/16,4/16,1/16]},[N.WOOD]:{id:N.WOOD,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:({dir:e})=>e==Ve.UP||e==Ve.DOWN?[5/16,1/16,6/16,2/16]:[4/16,1/16,5/16,2/16]},[N.TNT]:{id:N.TNT,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:({dir:e})=>e==Ve.UP||e==Ve.DOWN?[10/16,0/16,11/16,1/16]:[8/16,0/16,9/16,1/16]},[N.BOOKCASE]:{id:N.BOOKCASE,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:({dir:e})=>e==Ve.FORWARD||e==Ve.BACK?[3/16,2/16,4/16,3/16]:[4/16,0/16,5/16,1/16]},[N.LAVA]:{id:N.LAVA,spawnable:!1,transparent:!0,selflit:!0,gravity:!0,fluid:!0,texture:()=>[13/16,14/16,14/16,15/16]},[N.PLANK]:{id:N.PLANK,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[4/16,0/16,5/16,1/16]},[N.COBBLESTONE]:{id:N.COBBLESTONE,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[0/16,1/16,1/16,2/16]},[N.CONCRETE]:{id:N.CONCRETE,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[1/16,0/16,2/16,1/16]},[N.BRICK]:{id:N.BRICK,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[7/16,0/16,8/16,1/16]},[N.SAND]:{id:N.SAND,spawnable:!0,transparent:!1,selflit:!1,gravity:!0,fluid:!1,texture:()=>[2/16,1/16,3/16,2/16]},[N.GRAVEL]:{id:N.GRAVEL,spawnable:!0,transparent:!1,selflit:!1,gravity:!0,fluid:!1,texture:()=>[3/16,1/16,4/16,2/16]},[N.IRON]:{id:N.IRON,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[6/16,1/16,7/16,2/16]},[N.GOLD]:{id:N.GOLD,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[7/16,1/16,8/16,2/16]},[N.DIAMOND]:{id:N.DIAMOND,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[8/16,1/16,9/16,2/16]},[N.OBSIDIAN]:{id:N.OBSIDIAN,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[5/16,2/16,6/16,3/16]},[N.GLASS]:{id:N.GLASS,spawnable:!0,transparent:!0,selflit:!1,gravity:!1,fluid:!1,texture:()=>[1/16,3/16,2/16,4/16]},[N.SPONGE]:{id:N.SPONGE,spawnable:!0,transparent:!1,selflit:!1,gravity:!1,fluid:!1,texture:()=>[0/16,3/16,1/16,4/16]}};function lt(e,t,n,r,i){e.push(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]),e.push(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]),e.push(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]),e.push(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]),e.push(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]),e.push(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}class Oa{static fromId(t){return ye[t]}static pushVertices(t,n,r,i,o,l){let u=n.blocks,c=l>=r[i][o],f=u[i][o][l],h=f.fluid&&(l==n.sz-1||!u[i][o][l+1].fluid)?.9:1;if(l==n.sz-1||n.blocks[i][o][l+1].transparent||f.fluid){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.UP}),a=l>=r[i][o]?1:.6;f.selflit&&(a=1),lt(t,[i,o,l+h,s[0],s[1],a,a,a,1],[i+1,o,l+h,s[2],s[1],a,a,a,1],[i+1,o+1,l+h,s[2],s[3],a,a,a,1],[i,o+1,l+h,s[0],s[3],a,a,a,1])}if(l==0||n.blocks[i][o][l-1].transparent){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.DOWN}),a=f.selflit?1:.6;lt(t,[i,o+1,l,s[0],s[3],a,a,a,1],[i+1,o+1,l,s[2],s[3],a,a,a,1],[i+1,o,l,s[2],s[1],a,a,a,1],[i,o,l,s[0],s[1],a,a,a,1])}if(o==0||n.blocks[i][o-1][l].transparent){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.FORWARD}),a=o==0||l>=r[i][o-1]?1:.6;f.selflit&&(a=1),lt(t,[i,o,l,s[0],s[3],a,a,a,1],[i+1,o,l,s[2],s[3],a,a,a,1],[i+1,o,l+h,s[2],s[1],a,a,a,1],[i,o,l+h,s[0],s[1],a,a,a,1])}if(o==n.sy-1||n.blocks[i][o+1][l].transparent){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.BACK}),a=f.selflit?1:.6;lt(t,[i,o+1,l+h,s[2],s[1],a,a,a,1],[i+1,o+1,l+h,s[0],s[1],a,a,a,1],[i+1,o+1,l,s[0],s[3],a,a,a,1],[i,o+1,l,s[2],s[3],a,a,a,1])}if(i==0||n.blocks[i-1][o][l].transparent){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.LEFT}),a=f.selflit?1:.6;lt(t,[i,o,l+h,s[2],s[1],a,a,a,1],[i,o+1,l+h,s[0],s[1],a,a,a,1],[i,o+1,l,s[0],s[3],a,a,a,1],[i,o,l,s[2],s[3],a,a,a,1])}if(i==n.sx-1||n.blocks[i+1][o][l].transparent){let s=f.texture({world:n,lightmap:r,lit:c,x:i,y:o,z:l,dir:Ve.RIGHT}),a=i==n.sx-1||l>=r[i+1][o]?1:.6;f.selflit&&(a=1),lt(t,[i+1,o,l,s[0],s[3],a,a,a,1],[i+1,o+1,l,s[2],s[3],a,a,a,1],[i+1,o+1,l+h,s[2],s[1],a,a,a,1],[i+1,o,l+h,s[0],s[1],a,a,a,1])}}static pushPickingVertices(t,n,r,i){let o={r:n/255,g:r/255,b:i/255};lt(t,[n,r,i+1,0,0,o.r,o.g,o.b,1/255],[n+1,r,i+1,1,0,o.r,o.g,o.b,1/255],[n+1,r+1,i+1,1,1,o.r,o.g,o.b,1/255],[n,r+1,i+1,0,0,o.r,o.g,o.b,1/255]),lt(t,[n,r+1,i,0,0,o.r,o.g,o.b,2/255],[n+1,r+1,i,1,0,o.r,o.g,o.b,2/255],[n+1,r,i,1,1,o.r,o.g,o.b,2/255],[n,r,i,0,0,o.r,o.g,o.b,2/255]),lt(t,[n,r,i,0,0,o.r,o.g,o.b,3/255],[n+1,r,i,1,0,o.r,o.g,o.b,3/255],[n+1,r,i+1,1,1,o.r,o.g,o.b,3/255],[n,r,i+1,0,0,o.r,o.g,o.b,3/255]),lt(t,[n,r+1,i+1,0,0,o.r,o.g,o.b,4/255],[n+1,r+1,i+1,1,0,o.r,o.g,o.b,4/255],[n+1,r+1,i,1,1,o.r,o.g,o.b,4/255],[n,r+1,i,0,0,o.r,o.g,o.b,4/255]),lt(t,[n,r,i+1,0,0,o.r,o.g,o.b,5/255],[n,r+1,i+1,1,0,o.r,o.g,o.b,5/255],[n,r+1,i,1,1,o.r,o.g,o.b,5/255],[n,r,i,0,0,o.r,o.g,o.b,5/255]),lt(t,[n+1,r,i,0,0,o.r,o.g,o.b,6/255],[n+1,r+1,i,1,0,o.r,o.g,o.b,6/255],[n+1,r+1,i+1,1,1,o.r,o.g,o.b,6/255],[n+1,r,i+1,0,0,o.r,o.g,o.b,6/255])}}const Kp=Math.sqrt(3),Uy=.5*(Kp-1),Xr=(3-Kp)/6,Df=e=>Math.floor(e)|0,Lf=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Nf(e=Math.random){const t=zy(e),n=new Float64Array(t).map(i=>Lf[i%12*2]),r=new Float64Array(t).map(i=>Lf[i%12*2+1]);return function(o,l){let u=0,c=0,f=0;const h=(o+l)*Uy,s=Df(o+h),a=Df(l+h),d=(s+a)*Xr,g=s-d,v=a-d,y=o-g,A=l-v;let p,m;y>A?(p=1,m=0):(p=0,m=1);const E=y-p+Xr,_=A-m+Xr,k=y-1+2*Xr,S=A-1+2*Xr,R=s&255,P=a&255;let L=.5-y*y-A*A;if(L>=0){const J=R+t[P],V=n[J],K=r[J];L*=L,u=L*L*(V*y+K*A)}let U=.5-E*E-_*_;if(U>=0){const J=R+p+t[P+m],V=n[J],K=r[J];U*=U,c=U*U*(V*E+K*_)}let H=.5-k*k-S*S;if(H>=0){const J=R+1+t[P+1],V=n[J],K=r[J];H*=H,f=H*H*(V*k+K*S)}return 70*(u+c+f)}}function zy(e){const n=new Uint8Array(512);for(let r=0;r<512/2;r++)n[r]=r;for(let r=0;r<512/2-1;r++){const i=r+~~(e()*(256-r)),o=n[r];n[r]=n[i],n[i]=o}for(let r=256;r<512;r++)n[r]=n[r-256];return n}var Xp={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ir,function(){return n.importState=function(i){var o=new n;return o.importState(i),o},n;function n(){return function(i){var o=0,l=0,u=0,c=1;i.length==0&&(i=[+new Date]);var f=r();o=f(" "),l=f(" "),u=f(" ");for(var h=0;h<i.length;h++)o-=f(i[h]),o<0&&(o+=1),l-=f(i[h]),l<0&&(l+=1),u-=f(i[h]),u<0&&(u+=1);f=null;var s=function(){var a=2091639*o+c*23283064365386963e-26;return o=l,l=u,u=a-(c=a|0)};return s.next=s,s.uint32=function(){return s()*4294967296},s.fract53=function(){return s()+(s()*2097152|0)*11102230246251565e-32},s.version="Alea 0.9",s.args=i,s.exportState=function(){return[o,l,u,c]},s.importState=function(a){o=+a[0]||0,l=+a[1]||0,u=+a[2]||0,c=+a[3]||0},s}(Array.prototype.slice.call(arguments))}function r(){var i=4022871197,o=function(l){l=l.toString();for(var u=0;u<l.length;u++){i+=l.charCodeAt(u);var c=.02519603282416938*i;i=c>>>0,c-=i,c*=i,i=c>>>0,c-=i,i+=c*4294967296}return(i>>>0)*23283064365386963e-26};return o.version="Mash 0.9",o}})})(Xp);var Hy=Xp.exports;const Vy=Ua(Hy);class jy{constructor(t,n,r){this.DEFAULT_SCALE=30,this.DEFAULT_MAGNITUDE=.15,this.DEFAULT_OFFSET=.8,this.players=[],this.sx=t,this.sy=n,this.sz=r,this.blocks=new Array(t);for(let i=0;i<t;i++){this.blocks[i]=new Array(n);for(let o=0;o<n;o++)this.blocks[i][o]=new Array(r)}}createRandomisedWorld(t,n,r=this.DEFAULT_SCALE,i=this.DEFAULT_MAGNITUDE,o=this.DEFAULT_OFFSET){this.spawnPoint=new ge(this.sx/2+.5,this.sy/2+.5,t);let l=new Array(this.sx);for(let c=0;c<this.sx;c++){l[c]=new Array(this.sy);for(let f=0;f<this.sy;f++){l[c][f]=new Array(this.sz);for(let h=0;h<this.sz;h++)l[c][f][h]=N.AIR}}const u=n?Nf(Vy(n)):Nf();for(let c=0;c<this.sx;c++)for(let f=0;f<this.sy;f++){const h=u(c/r,f/r),s=o+i*h,a=t*s,d=Math.max(0,Math.min(a,t)),g=d*.8;for(let v=0;v<d;v++){let y;v===0?y=N.BEDROCK:v>0&&v<g?y=N.CONCRETE:y=N.DIRT,l[c][f][v]=y}}for(let c=0;c<this.sx;c++)for(let f=0;f<this.sy;f++)for(let h=0;h<this.sz;h++)this.blocks[c][f][h]=ye[l[c][f][h]]}createFlatWorld(t){this.spawnPoint=new ge(this.sx/2+.5,this.sy/2+.5,t);for(let n=0;n<this.sx;n++)for(let r=0;r<this.sy;r++)for(let i=0;i<this.sz;i++)this.blocks[n][r][i]=i<t?ye[N.DIRT]:ye[N.AIR]}createFromString(t){const[n,r,i,o]=t.split(",");this.spawnPoint=new ge(Number(n),Number(r),Number(i));let l=0;for(let u=0;u<this.sx;u++)for(let c=0;c<this.sy;c++)for(let f=0;f<this.sz;f++)this.blocks[u][c][f]=Oa.fromId(o.charCodeAt(l)-97),l=l+1}getBlock(t,n,r){return t<0||n<0||r<0||t>this.sx-1||n>this.sy-1||r>this.sz-1?ye[N.AIR]:this.blocks[t][n][r]}setBlock(t,n,r,i){this.blocks[t][n][r]=i,this.renderer!=null&&this.renderer.onBlockChanged(t,n,r)}toNetworkString(){let t=[];for(let n=0;n<this.sx;n++)for(let r=0;r<this.sy;r++)for(let i=0;i<this.sz;i++)t.push(String.fromCharCode(97+this.blocks[n][r][i].id));return t.join("")}setLocalPlayer(t){this.localPlayer=t}}function Jy(e,t){return e.y?t.y>e.y-t.size/2&&t.y<e.y+t.size/2&&t.x>e.x1-t.size/2&&t.x<e.x2+t.size/2:e.x?t.x>e.x-t.size/2&&t.x<e.x+t.size/2&&t.y>e.y1-t.size/2&&t.y<e.y2+t.size/2:!1}function Wy(e,t){return t.x1>e.x1&&t.x1<e.x2&&t.y1>e.y1&&t.y1<e.y2||t.x2>e.x1&&t.x2<e.x2&&t.y1>e.y1&&t.y1<e.y2||t.x2>e.x1&&t.x2<e.x2&&t.y2>e.y1&&t.y2<e.y2||t.x1>e.x1&&t.x1<e.x2&&t.y2>e.y1&&t.y2<e.y2}var Yy=1e-6,Mf=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function yl(){var e=new Mf(16);return Mf!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function er(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tr(e,t,n){var r=n[0],i=n[1],o=n[2],l,u,c,f,h,s,a,d,g,v,y,A;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*o+t[12],e[13]=t[1]*r+t[5]*i+t[9]*o+t[13],e[14]=t[2]*r+t[6]*i+t[10]*o+t[14],e[15]=t[3]*r+t[7]*i+t[11]*o+t[15]):(l=t[0],u=t[1],c=t[2],f=t[3],h=t[4],s=t[5],a=t[6],d=t[7],g=t[8],v=t[9],y=t[10],A=t[11],e[0]=l,e[1]=u,e[2]=c,e[3]=f,e[4]=h,e[5]=s,e[6]=a,e[7]=d,e[8]=g,e[9]=v,e[10]=y,e[11]=A,e[12]=l*r+h*i+g*o+t[12],e[13]=u*r+s*i+v*o+t[13],e[14]=c*r+a*i+y*o+t[14],e[15]=f*r+d*i+A*o+t[15]),e}function Gy(e,t,n){var r=n[0],i=n[1],o=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*o,e[9]=t[9]*o,e[10]=t[10]*o,e[11]=t[11]*o,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function El(e,t,n,r){var i=r[0],o=r[1],l=r[2],u=Math.hypot(i,o,l),c,f,h,s,a,d,g,v,y,A,p,m,E,_,k,S,R,P,L,U,H,J,V,K;return u<Yy?null:(u=1/u,i*=u,o*=u,l*=u,c=Math.sin(n),f=Math.cos(n),h=1-f,s=t[0],a=t[1],d=t[2],g=t[3],v=t[4],y=t[5],A=t[6],p=t[7],m=t[8],E=t[9],_=t[10],k=t[11],S=i*i*h+f,R=o*i*h+l*c,P=l*i*h-o*c,L=i*o*h-l*c,U=o*o*h+f,H=l*o*h+i*c,J=i*l*h+o*c,V=o*l*h-i*c,K=l*l*h+f,e[0]=s*S+v*R+m*P,e[1]=a*S+y*R+E*P,e[2]=d*S+A*R+_*P,e[3]=g*S+p*R+k*P,e[4]=s*L+v*U+m*H,e[5]=a*L+y*U+E*H,e[6]=d*L+A*U+_*H,e[7]=g*L+p*U+k*H,e[8]=s*J+v*V+m*K,e[9]=a*J+y*V+E*K,e[10]=d*J+A*V+_*K,e[11]=g*J+p*V+k*K,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function nr(e,t,n){var r=Math.sin(n),i=Math.cos(n),o=t[4],l=t[5],u=t[6],c=t[7],f=t[8],h=t[9],s=t[10],a=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=o*i+f*r,e[5]=l*i+h*r,e[6]=u*i+s*r,e[7]=c*i+a*r,e[8]=f*i-o*r,e[9]=h*i-l*r,e[10]=s*i-u*r,e[11]=a*i-c*r,e}function wl(e,t,n){var r=Math.sin(n),i=Math.cos(n),o=t[0],l=t[1],u=t[2],c=t[3],f=t[4],h=t[5],s=t[6],a=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=o*i+f*r,e[1]=l*i+h*r,e[2]=u*i+s*r,e[3]=c*i+a*r,e[4]=f*i-o*r,e[5]=h*i-l*r,e[6]=s*i-u*r,e[7]=a*i-c*r,e}function Ky(e,t,n,r,i){var o=1/Math.tan(t/2),l;return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(l=1/(r-i),e[10]=(i+r)*l,e[14]=2*i*r*l):(e[10]=-1,e[14]=-2*r),e}var Xy=Ky;const Zy="uniform mat4 uProjMatrix;uniform mat4 uViewMatrix;uniform mat4 uModelMatrix;attribute vec3 aPos;attribute vec4 aColor;attribute vec2 aTexCoord;varying vec4 vColor;varying vec2 vTexCoord;void main() {	gl_Position = uProjMatrix * uViewMatrix * ( uModelMatrix * vec4( aPos, 1.0 ) );	vColor = aColor;	vTexCoord = aTexCoord;}",qy="precision highp float;uniform sampler2D uSampler;varying vec4 vColor;varying vec2 vTexCoord;void main() {	vec4 color = texture2D( uSampler, vec2( vTexCoord.s, vTexCoord.t ) ) * vec4( vColor.rgb, 1.0 );	if ( color.a < 0.1 ) discard;	gl_FragColor = vec4( color.rgb, vColor.a );}",Ff={VERTEX:Zy,FRAGMENT:qy};class eE{constructor(t,n,r){this.canvas=t,this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight;try{this.gl=this.canvas.getContext("webgl")}catch{throw"Your browser doesn't support WebGL!"}this.gl.viewportWidth=this.canvas.width,this.gl.viewportHeight=this.canvas.height,this.gl.clearColor(.62,.81,1,1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.loadShaders(),this.loadPlayerHeadModel(),this.loadPlayerBodyModel(),this.projMatrix=yl(),this.viewMatrix=yl(),this.modelMatrix=yl(),er(this.modelMatrix),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.texWhite=this.gl.createTexture(),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texWhite);let i=new Uint8Array([255,255,255,255]);this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.uniform1i(this.uSampler,0),this.texPlayer=this.gl.createTexture(),this.texPlayer.image=new Image,this.texPlayer.image.onload=()=>{this.gl.bindTexture(this.gl.TEXTURE_2D,this.texPlayer),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.texPlayer.image),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST)},this.texPlayer.image.src=r.player,this.texTerrain=this.gl.createTexture(),this.texTerrain.image=new Image,this.texTerrain.image.onload=()=>{this.gl.bindTexture(this.gl.TEXTURE_2D,this.texTerrain),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.texTerrain.image),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST)},this.texTerrain.image.src=r.terrain,this.textCanvas=n,this.textCanvas.width=256,this.textCanvas.height=64,this.textCanvas.style.display="none";let o=this.textContext=this.textCanvas.getContext("2d");o.textAlign="left",o.textBaseline="middle",o.font="24px"}draw(){this.updateViewport(),this.gl.viewport(0,0,this.gl.viewportWidth,this.gl.viewportHeight),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);let t=this.chunks;if(this.gl.bindTexture(this.gl.TEXTURE_2D,this.texTerrain),t!=null)for(let r=0;r<t.length;r++)t[r].buffer!=null&&this.drawBuffer(t[r].buffer);let n=this.world.players;this.gl.enable(this.gl.BLEND);for(let r in n){let i=n[r],o;i.moving||Math.abs(i.aniframe)>.1?(i.aniframe+=.15,i.aniframe>Math.PI&&(i.aniframe=-Math.PI),o=Math.PI/2*Math.sin(i.aniframe),!i.moving&&Math.abs(o)<.1&&(i.aniframe=0)):o=0;let l=i.pitch;l<-.32&&(l=-.32),l>.32&&(l=.32),er(this.modelMatrix),tr(this.modelMatrix,this.modelMatrix,[i.x,i.y,i.z+1.7]),wl(this.modelMatrix,this.modelMatrix,Math.PI-i.yaw),nr(this.modelMatrix,this.modelMatrix,-l),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texPlayer),this.drawBuffer(this.playerHead),er(this.modelMatrix),tr(this.modelMatrix,this.modelMatrix,[i.x,i.y,i.z+.01]),wl(this.modelMatrix,this.modelMatrix,Math.PI-i.yaw),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.drawBuffer(this.playerBody),tr(this.modelMatrix,this.modelMatrix,[0,0,1.4]),nr(this.modelMatrix,this.modelMatrix,.75*o),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.drawBuffer(this.playerLeftArm),nr(this.modelMatrix,this.modelMatrix,-1.5*o),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.drawBuffer(this.playerRightArm),nr(this.modelMatrix,this.modelMatrix,.75*o),tr(this.modelMatrix,this.modelMatrix,[0,0,-.67]),nr(this.modelMatrix,this.modelMatrix,.5*o),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.drawBuffer(this.playerRightLeg),nr(this.modelMatrix,this.modelMatrix,-o),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.drawBuffer(this.playerLeftLeg),i.nametag||(i.nametag=this.buildPlayerName(i.nick));let u=-Math.PI/2+Math.atan2(this.camPos[1]-i.y,this.camPos[0]-i.x);er(this.modelMatrix),tr(this.modelMatrix,this.modelMatrix,[i.x,i.y,i.z+2.05]),wl(this.modelMatrix,this.modelMatrix,u),Gy(this.modelMatrix,this.modelMatrix,[.005,1,.005]),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.gl.bindTexture(this.gl.TEXTURE_2D,i.nametag.texture),this.drawBuffer(i.nametag.model)}this.gl.disable(this.gl.BLEND),er(this.modelMatrix),this.gl.uniformMatrix4fv(this.uModelMat,!1,this.modelMatrix),this.lastRenderSkipped=!1}buildPlayerName(t){let n=this.gl,r=this.textCanvas,i=this.textContext;t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/,'"');let o=i.measureText(t).width+16,l=45;i.fillStyle="#000",i.fillRect(0,0,o,45),i.fillStyle="#fff",i.fillText(t,10,20);let u=n.createTexture();n.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR);let c=[-o/2,0,l,o/256,0,1,1,1,.7,o/2,0,l,0,0,1,1,1,.7,o/2,0,0,0,l/64,1,1,1,.7,o/2,0,0,0,l/64,1,1,1,.7,-o/2,0,0,o/256,l/64,1,1,1,.7,-o/2,0,l,o/256,0,1,1,1,.7],f=n.createBuffer();return f.vertices=c.length/9,n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),{texture:u,model:f}}pickAt(t,n,r,i){let o=this.gl.createFramebuffer();this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,o);let l=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,l),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,512,512,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null);let u=this.gl.createRenderbuffer();this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,u),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,512,512),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,l,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,u);let c=[];for(let s=t.x;s<=n.x;s++)for(let a=t.y;a<=n.y;a++)for(let d=t.z;d<=n.z;d++)this.world.getBlock(s,a,d)!=ye[N.AIR]&&Oa.pushPickingVertices(c,s,a,d);let f=this.gl.createBuffer();f.vertices=c.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,f),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(c),this.gl.STREAM_DRAW),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texWhite),this.gl.viewport(0,0,512,512),this.gl.clearColor(1,1,1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.drawBuffer(f);let h=new Uint8Array(4);if(this.gl.readPixels(r/this.gl.viewportWidth*512,(1-i/this.gl.viewportHeight)*512,1,1,this.gl.RGBA,this.gl.UNSIGNED_BYTE,h),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texTerrain),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.clearColor(.62,.81,1,1),this.gl.deleteBuffer(f),this.gl.deleteRenderbuffer(u),this.gl.deleteTexture(l),this.gl.deleteFramebuffer(o),h[0]!=255){let s;return h[3]==1?s=new ge(0,0,1):h[3]==2?s=new ge(0,0,-1):h[3]==3?s=new ge(0,-1,0):h[3]==4?s=new ge(0,1,0):h[3]==5?s=new ge(-1,0,0):h[3]==6&&(s=new ge(1,0,0)),{x:h[0],y:h[1],z:h[2],n:s}}else return!1}updateViewport(){(this.canvas.clientWidth!=this.gl.viewportWidth||this.canvas.clientHeight!=this.gl.viewportHeight)&&(this.gl.viewportWidth=this.canvas.clientWidth,this.gl.viewportHeight=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.setPerspective(this.fov,this.min,this.max))}shouldSkipRender(){return document.visibilityState!=="visible"?(this.lastRenderSkipped=!0,!0):!1}loadShaders(){this.program=this.gl.createProgram();let t=this.gl.createShader(this.gl.VERTEX_SHADER);if(this.gl.shaderSource(t,Ff.VERTEX),this.gl.compileShader(t),this.gl.attachShader(this.program,t),!this.gl.getShaderParameter(t,this.gl.COMPILE_STATUS))throw`Could not compile vertex shader!
`+this.gl.getShaderInfoLog(t);let n=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(this.gl.shaderSource(n,Ff.FRAGMENT),this.gl.compileShader(n),this.gl.attachShader(this.program,n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))throw`Could not compile fragment shader!
`+this.gl.getShaderInfoLog(n);if(this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))throw"Could not link the shader program!";this.gl.useProgram(this.program),this.uProjMat=this.gl.getUniformLocation(this.program,"uProjMatrix"),this.uViewMat=this.gl.getUniformLocation(this.program,"uViewMatrix"),this.uModelMat=this.gl.getUniformLocation(this.program,"uModelMatrix"),this.uSampler=this.gl.getUniformLocation(this.program,"uSampler"),this.aPos=this.gl.getAttribLocation(this.program,"aPos"),this.aColor=this.gl.getAttribLocation(this.program,"aColor"),this.aTexCoord=this.gl.getAttribLocation(this.program,"aTexCoord"),this.gl.enableVertexAttribArray(this.aPos),this.gl.enableVertexAttribArray(this.aColor),this.gl.enableVertexAttribArray(this.aTexCoord)}setWorld(t,n){this.world=t,t.renderer=this,this.chunkSize=n,this.chunks=this.chunks||[];for(let r=0;r<t.sx;r+=n)for(let i=0;i<t.sy;i+=n)for(let o=0;o<t.sz;o+=n)this.chunks.push({start:[r,i,o],end:[Math.min(t.sx,r+n),Math.min(t.sy,i+n),Math.min(t.sz,o+n)],dirty:!0})}onBlockChanged(t,n,r){let i=this.chunks;for(let o=0;o<i.length;o++)(t>=i[o].start[0]&&t<i[o].end[0]&&n>=i[o].start[1]&&n<i[o].end[1]&&r>=i[o].start[2]&&r<i[o].end[2]||t>=i[o].start[0]&&t<i[o].end[0]&&n>=i[o].start[1]&&n<i[o].end[1]&&(r>=i[o].end[2]||r==i[o].start[2]-1)||t>=i[o].start[0]&&t<i[o].end[0]&&r>=i[o].start[2]&&r<i[o].end[2]&&(n==i[o].end[1]||n==i[o].start[1]-1)||n>=i[o].start[1]&&n<i[o].end[1]&&r>=i[o].start[2]&&r<i[o].end[2]&&(t==i[o].end[0]||t==i[o].start[0]-1))&&(i[o].dirty=!0)}buildChunks(t,n){let r=this.gl,i=this.chunks,o=this.world;for(let l=0;l<i.length;l++){let u=i[l];if(u.dirty||n){let c=[],f={};for(let s=u.start[0]-1;s<u.end[0]+1;s++){f[s]={};for(let a=u.start[1]-1;a<u.end[1]+1;a++)for(let d=o.sz-1;d>=0&&(f[s][a]=d,!!o.getBlock(s,a,d).transparent);d--);}for(let s=u.start[0];s<u.end[0];s++)for(let a=u.start[1];a<u.end[1];a++)for(let d=u.start[2];d<u.end[2];d++)o.blocks[s][a][d]!=ye[N.AIR]&&Oa.pushVertices(c,o,f,s,a,d);u.buffer&&r.deleteBuffer(u.buffer);let h=u.buffer=r.createBuffer();h.vertices=c.length/9,r.bindBuffer(r.ARRAY_BUFFER,h),r.bufferData(r.ARRAY_BUFFER,new Float32Array(c),r.STATIC_DRAW),u.dirty=!1,t--}if(t==0)break}}setPerspective(t,n,r){this.fov=t,this.min=n,this.max=r,Xy(this.projMatrix,t,this.gl.viewportWidth/this.gl.viewportHeight,n,r),this.gl.uniformMatrix4fv(this.uProjMat,!1,this.projMatrix)}setCamera(t,n){this.camPos=t,er(this.viewMatrix),El(this.viewMatrix,this.viewMatrix,-n[0]-Math.PI/2,[1,0,0]),El(this.viewMatrix,this.viewMatrix,n[1],[0,0,1]),El(this.viewMatrix,this.viewMatrix,-n[2],[0,1,0]),tr(this.viewMatrix,this.viewMatrix,[-t[0],-t[1],-t[2]]),this.gl.uniformMatrix4fv(this.uViewMat,!1,this.viewMatrix)}drawBuffer(t){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.vertexAttribPointer(this.aPos,3,this.gl.FLOAT,!1,9*4,0),this.gl.vertexAttribPointer(this.aColor,4,this.gl.FLOAT,!1,9*4,5*4),this.gl.vertexAttribPointer(this.aTexCoord,2,this.gl.FLOAT,!1,9*4,3*4),this.gl.drawArrays(this.gl.TRIANGLES,0,t.vertices)}loadPlayerHeadModel(){let t=[-.25,-.25,.25,.125,0,1,1,1,1,.25,-.25,.25,.25,0,1,1,1,1,.25,.25,.25,.25,.25,1,1,1,1,.25,.25,.25,.25,.25,1,1,1,1,-.25,.25,.25,.125,.25,1,1,1,1,-.25,-.25,.25,.125,0,1,1,1,1,-.25,-.25,-.25,.25,0,1,1,1,1,-.25,.25,-.25,.25,.25,1,1,1,1,.25,.25,-.25,.375,.25,1,1,1,1,.25,.25,-.25,.375,.25,1,1,1,1,.25,-.25,-.25,.375,0,1,1,1,1,-.25,-.25,-.25,.25,0,1,1,1,1,-.25,-.25,.25,.125,.25,1,1,1,1,-.25,-.25,-.25,.125,.5,1,1,1,1,.25,-.25,-.25,.25,.5,1,1,1,1,.25,-.25,-.25,.25,.5,1,1,1,1,.25,-.25,.25,.25,.25,1,1,1,1,-.25,-.25,.25,.125,.25,1,1,1,1,-.25,.25,.25,.375,.25,1,1,1,1,.25,.25,.25,.5,.25,1,1,1,1,.25,.25,-.25,.5,.5,1,1,1,1,.25,.25,-.25,.5,.5,1,1,1,1,-.25,.25,-.25,.375,.5,1,1,1,1,-.25,.25,.25,.375,.25,1,1,1,1,-.25,-.25,.25,.25,.25,1,1,1,1,-.25,.25,.25,.375,.25,1,1,1,1,-.25,.25,-.25,.375,.5,1,1,1,1,-.25,.25,-.25,.375,.5,1,1,1,1,-.25,-.25,-.25,.25,.5,1,1,1,1,-.25,-.25,.25,.25,.25,1,1,1,1,.25,-.25,.25,0,.25,1,1,1,1,.25,-.25,-.25,0,.5,1,1,1,1,.25,.25,-.25,.125,.5,1,1,1,1,.25,.25,-.25,.125,.5,1,1,1,1,.25,.25,.25,.125,.25,1,1,1,1,.25,-.25,.25,0,.25,1,1,1,1],n=this.playerHead=this.gl.createBuffer();n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW)}loadPlayerBodyModel(){let t=[-.3,-.125,1.45,.3125,.5,1,1,1,1,.3,-.125,1.45,.4375,.5,1,1,1,1,.3,.125,1.45,.4375,.625,1,1,1,1,.3,.125,1.45,.4375,.625,1,1,1,1,-.3,.125,1.45,.3125,.625,1,1,1,1,-.3,-.125,1.45,.3125,.5,1,1,1,1,-.3,-.125,.73,.4375,.5,1,1,1,1,-.3,.125,.73,.4375,.625,1,1,1,1,.3,.125,.73,.5625,.625,1,1,1,1,.3,.125,.73,.5625,.625,1,1,1,1,.3,-.125,.73,.5625,.5,1,1,1,1,-.3,-.125,.73,.4375,.5,1,1,1,1,-.3,-.125,1.45,.3125,.625,1,1,1,1,-.3,-.125,.73,.3125,1,1,1,1,1,.3,-.125,.73,.4375,1,1,1,1,1,.3,-.125,.73,.4375,1,1,1,1,1,.3,-.125,1.45,.4375,.625,1,1,1,1,-.3,-.125,1.45,.3125,.625,1,1,1,1,-.3,.125,1.45,.625,.625,1,1,1,1,.3,.125,1.45,.5,.625,1,1,1,1,.3,.125,.73,.5,1,1,1,1,1,.3,.125,.73,.5,1,1,1,1,1,-.3,.125,.73,.625,1,1,1,1,1,-.3,.125,1.45,.625,.625,1,1,1,1,-.3,-.125,1.45,.25,.625,1,1,1,1,-.3,.125,1.45,.3125,.625,1,1,1,1,-.3,.125,.73,.3125,1,1,1,1,1,-.3,.125,.73,.3125,1,1,1,1,1,-.3,-.125,.73,.25,1,1,1,1,1,-.3,-.125,1.45,.25,.625,1,1,1,1,.3,-.125,1.45,.4375,.625,1,1,1,1,.3,-.125,.73,.4375,1,1,1,1,1,.3,.125,.73,.5,1,1,1,1,1,.3,.125,.73,.5,1,1,1,1,1,.3,.125,1.45,.5,.625,1,1,1,1,.3,-.125,1.45,.4375,.625,1,1,1,1],n=this.playerBody=this.gl.createBuffer();n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW),t=[.3,-.125,.05,44/64,16/32,1,1,1,1,.55,-.125,.05,48/64,16/32,1,1,1,1,.55,.125,.05,48/64,20/32,1,1,1,1,.55,.125,.05,48/64,20/32,1,1,1,1,.3,.125,.05,44/64,20/32,1,1,1,1,.3,-.125,.05,44/64,16/32,1,1,1,1,.3,-.125,-.67,48/64,16/32,1,1,1,1,.3,.125,-.67,48/64,20/32,1,1,1,1,.55,.125,-.67,52/64,20/32,1,1,1,1,.55,.125,-.67,52/64,20/32,1,1,1,1,.55,-.125,-.67,52/64,16/32,1,1,1,1,.3,-.125,-.67,48/64,16/32,1,1,1,1,.3,-.125,.05,48/64,20/32,1,1,1,1,.3,-.125,-.67,48/64,32/32,1,1,1,1,.55,-.125,-.67,44/64,32/32,1,1,1,1,.55,-.125,-.67,44/64,32/32,1,1,1,1,.55,-.125,.05,44/64,20/32,1,1,1,1,.3,-.125,.05,48/64,20/32,1,1,1,1,.3,.125,.05,52/64,20/32,1,1,1,1,.55,.125,.05,56/64,20/32,1,1,1,1,.55,.125,-.67,56/64,32/32,1,1,1,1,.55,.125,-.67,56/64,32/32,1,1,1,1,.3,.125,-.67,52/64,32/32,1,1,1,1,.3,.125,.05,52/64,20/32,1,1,1,1,.3,-.125,.05,48/64,20/32,1,1,1,1,.3,.125,.05,52/64,20/32,1,1,1,1,.3,.125,-.67,52/64,32/32,1,1,1,1,.3,.125,-.67,52/64,32/32,1,1,1,1,.3,-.125,-.67,48/64,32/32,1,1,1,1,.3,-.125,.05,48/64,20/32,1,1,1,1,.55,-.125,.05,44/64,20/32,1,1,1,1,.55,-.125,-.67,44/64,32/32,1,1,1,1,.55,.125,-.67,40/64,32/32,1,1,1,1,.55,.125,-.67,40/64,32/32,1,1,1,1,.55,.125,.05,40/64,20/32,1,1,1,1,.55,-.125,.05,44/64,20/32,1,1,1,1],n=this.playerLeftArm=this.gl.createBuffer(),n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW),t=[-.55,-.125,.05,44/64,16/32,1,1,1,1,-.3,-.125,.05,48/64,16/32,1,1,1,1,-.3,.125,.05,48/64,20/32,1,1,1,1,-.3,.125,.05,48/64,20/32,1,1,1,1,-.55,.125,.05,44/64,20/32,1,1,1,1,-.55,-.125,.05,44/64,16/32,1,1,1,1,-.55,-.125,-.67,52/64,16/32,1,1,1,1,-.55,.125,-.67,52/64,20/32,1,1,1,1,-.3,.125,-.67,48/64,20/32,1,1,1,1,-.3,.125,-.67,48/64,20/32,1,1,1,1,-.3,-.125,-.67,48/64,16/32,1,1,1,1,-.55,-.125,-.67,52/64,16/32,1,1,1,1,-.55,-.125,.05,44/64,20/32,1,1,1,1,-.55,-.125,-.67,44/64,32/32,1,1,1,1,-.3,-.125,-.67,48/64,32/32,1,1,1,1,-.3,-.125,-.67,48/64,32/32,1,1,1,1,-.3,-.125,.05,48/64,20/32,1,1,1,1,-.55,-.125,.05,44/64,20/32,1,1,1,1,-.55,.125,.05,56/64,20/32,1,1,1,1,-.3,.125,.05,52/64,20/32,1,1,1,1,-.3,.125,-.67,52/64,32/32,1,1,1,1,-.3,.125,-.67,52/64,32/32,1,1,1,1,-.55,.125,-.67,56/64,32/32,1,1,1,1,-.55,.125,.05,56/64,20/32,1,1,1,1,-.55,-.125,.05,44/64,20/32,1,1,1,1,-.55,.125,.05,40/64,20/32,1,1,1,1,-.55,.125,-.67,40/64,32/32,1,1,1,1,-.55,.125,-.67,40/64,32/32,1,1,1,1,-.55,-.125,-.67,44/64,32/32,1,1,1,1,-.55,-.125,.05,44/64,20/32,1,1,1,1,-.3,-.125,.05,48/64,20/32,1,1,1,1,-.3,-.125,-.67,48/64,32/32,1,1,1,1,-.3,.125,-.67,52/64,32/32,1,1,1,1,-.3,.125,-.67,52/64,32/32,1,1,1,1,-.3,.125,.05,52/64,20/32,1,1,1,1,-.3,-.125,.05,48/64,20/32,1,1,1,1],n=this.playerRightArm=this.gl.createBuffer(),n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW),t=[.01,-.125,0,4/64,16/32,1,1,1,1,.3,-.125,0,8/64,16/32,1,1,1,1,.3,.125,0,8/64,20/32,1,1,1,1,.3,.125,0,8/64,20/32,1,1,1,1,.01,.125,0,4/64,20/32,1,1,1,1,.01,-.125,0,4/64,16/32,1,1,1,1,.01,-.125,-.73,8/64,16/32,1,1,1,1,.01,.125,-.73,8/64,20/32,1,1,1,1,.3,.125,-.73,12/64,20/32,1,1,1,1,.3,.125,-.73,12/64,20/32,1,1,1,1,.3,-.125,-.73,12/64,16/32,1,1,1,1,.01,-.125,-.73,8/64,16/32,1,1,1,1,.01,-.125,0,4/64,20/32,1,1,1,1,.01,-.125,-.73,4/64,32/32,1,1,1,1,.3,-.125,-.73,8/64,32/32,1,1,1,1,.3,-.125,-.73,8/64,32/32,1,1,1,1,.3,-.125,0,8/64,20/32,1,1,1,1,.01,-.125,0,4/64,20/32,1,1,1,1,.01,.125,0,12/64,20/32,1,1,1,1,.3,.125,0,16/64,20/32,1,1,1,1,.3,.125,-.73,16/64,32/32,1,1,1,1,.3,.125,-.73,16/64,32/32,1,1,1,1,.01,.125,-.73,12/64,32/32,1,1,1,1,.01,.125,0,12/64,20/32,1,1,1,1,.01,-.125,0,8/64,20/32,1,1,1,1,.01,.125,0,12/64,20/32,1,1,1,1,.01,.125,-.73,12/64,32/32,1,1,1,1,.01,.125,-.73,12/64,32/32,1,1,1,1,.01,-.125,-.73,8/64,32/32,1,1,1,1,.01,-.125,0,8/64,20/32,1,1,1,1,.3,-.125,0,4/64,20/32,1,1,1,1,.3,-.125,-.73,4/64,32/32,1,1,1,1,.3,.125,-.73,0/64,32/32,1,1,1,1,.3,.125,-.73,0/64,32/32,1,1,1,1,.3,.125,0,0/64,20/32,1,1,1,1,.3,-.125,0,4/64,20/32,1,1,1,1],n=this.playerLeftLeg=this.gl.createBuffer(),n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW),t=[-.3,-.125,0,4/64,16/32,1,1,1,1,-.01,-.125,0,8/64,16/32,1,1,1,1,-.01,.125,0,8/64,20/32,1,1,1,1,-.01,.125,0,8/64,20/32,1,1,1,1,-.3,.125,0,4/64,20/32,1,1,1,1,-.3,-.125,0,4/64,16/32,1,1,1,1,-.3,-.125,-.73,8/64,16/32,1,1,1,1,-.3,.125,-.73,8/64,20/32,1,1,1,1,-.01,.125,-.73,12/64,20/32,1,1,1,1,-.01,.125,-.73,12/64,20/32,1,1,1,1,-.01,-.125,-.73,12/64,16/32,1,1,1,1,-.3,-.125,-.73,8/64,16/32,1,1,1,1,-.3,-.125,0,4/64,20/32,1,1,1,1,-.3,-.125,-.73,4/64,32/32,1,1,1,1,-.01,-.125,-.73,8/64,32/32,1,1,1,1,-.01,-.125,-.73,8/64,32/32,1,1,1,1,-.01,-.125,0,8/64,20/32,1,1,1,1,-.3,-.125,0,4/64,20/32,1,1,1,1,-.3,.125,0,16/64,20/32,1,1,1,1,-.01,.125,0,12/64,20/32,1,1,1,1,-.01,.125,-.73,12/64,32/32,1,1,1,1,-.01,.125,-.73,12/64,32/32,1,1,1,1,-.3,.125,-.73,16/64,32/32,1,1,1,1,-.3,.125,0,16/64,20/32,1,1,1,1,-.3,-.125,0,4/64,20/32,1,1,1,1,-.3,.125,0,0/64,20/32,1,1,1,1,-.3,.125,-.73,0/64,32/32,1,1,1,1,-.3,.125,-.73,0/64,32/32,1,1,1,1,-.3,-.125,-.73,4/64,32/32,1,1,1,1,-.3,-.125,0,4/64,20/32,1,1,1,1,-.01,-.125,0,8/64,20/32,1,1,1,1,-.01,-.125,-.73,8/64,32/32,1,1,1,1,-.01,.125,-.73,12/64,32/32,1,1,1,1,-.01,.125,-.73,12/64,32/32,1,1,1,1,-.01,.125,0,12/64,20/32,1,1,1,1,-.01,-.125,0,8/64,20/32,1,1,1,1],n=this.playerRightLeg=this.gl.createBuffer(),n.vertices=t.length/9,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(t),this.gl.DYNAMIC_DRAW)}}var bo=(e=>(e.OPEN_CHAT="OPEN_CHAT",e))(bo||{}),Tn=(e=>(e.MOVE_FORWARD="MOVE_FORWARD",e.MOVE_BACKWARD="MOVE_BACKWARD",e.MOVE_LEFT="MOVE_LEFT",e.MOVE_RIGHT="MOVE_RIGHT",e.JUMP="JUMP",e))(Tn||{});const In={OPEN_CHAT:"t",MOVE_FORWARD:"w",MOVE_BACKWARD:"s",MOVE_LEFT:"a",MOVE_RIGHT:"d",JUMP:" "},Zp=35;class tE{setWorld(t){this.world=t,this.world.setLocalPlayer(this),this.pos=t.spawnPoint,this.velocity=new ge(0,0,0),this.angles=[0,Math.PI,0],this.falling=!1,this.keys={},this.buildMaterial=ye[N.DIRT],this.eventHandlers={}}setMaterialSelector(t,n){let r=t.getElementsByTagName("tr")[0],i=0,o=16;r.innerHTML="";for(let l in ye)if(ye[l].spawnable==!0){let u=document.createElement("td");u.style.backgroundPosition=i+"px 0px",u.style.backgroundSize=`${n*o}px ${n}px`,u.onclick=()=>{this.prevSelector!=u&&(u.style.opacity="1.0",this.prevSelector.style.opacity="",this.prevSelector=u),this.buildMaterial=ye[l]},ye[l].id==N.DIRT&&(this.prevSelector=u,u.style.opacity="1.0"),r.appendChild(u),i-=Zp}}setInputCanvas(t,n){this.canvas=n,this.addDocumentEventListeners(),this.canvas.onmousedown=r=>(this.onMouseEvent(r.clientX-this.canvas.getBoundingClientRect().left,r.clientY-this.canvas.getBoundingClientRect().top,Rn.DOWN,r.button===2),!1),this.canvas.onmouseup=r=>(this.onMouseEvent(r.clientX-this.canvas.getBoundingClientRect().left,r.clientY-this.canvas.getBoundingClientRect().top,Rn.UP,r.button===2),!1),this.canvas.onmousemove=r=>(this.onMouseEvent(r.clientX-this.canvas.getBoundingClientRect().left,r.clientY-this.canvas.getBoundingClientRect().top,Rn.MOVE,r.button===2),!1)}addDocumentEventListeners(){this.documentEventController&&this.documentEventController.abort(),this.documentEventController=new AbortController,document.addEventListener("keydown",t=>{t.key===In[Tn.JUMP]&&t.preventDefault(),t.target.tagName!="INPUT"&&this.onKeyEvent(t.key,!0)},{signal:this.documentEventController.signal}),document.addEventListener("keyup",t=>{t.target.tagName!="INPUT"&&this.onKeyEvent(t.key,!1)},{signal:this.documentEventController.signal})}removeDocumentEventListeners(){this.documentEventController&&this.documentEventController.abort()}setRenderer(t){this.renderer=t}setClient(t){this.client=t}on(t,n){this.eventHandlers[t]=n}onKeyEvent(t,n){this.keys[t]=n,t.toLowerCase()===In[bo.OPEN_CHAT].toLowerCase()&&!n&&this.eventHandlers[bo.OPEN_CHAT]&&this.eventHandlers[bo.OPEN_CHAT]()}onMouseEvent(t,n,r,i){r==Rn.DOWN?(this.dragStart={x:t,y:n},this.mouseDown=!0,this.yawStart=this.targetYaw=this.angles[1],this.pitchStart=this.targetPitch=this.angles[0]):r==Rn.UP?(Math.abs(this.dragStart.x-t)+Math.abs(this.dragStart.y-n)<4&&this.doBlockAction(t,n,!i),this.dragging=!1,this.mouseDown=!1,this.canvas.style.cursor="default"):r==Rn.MOVE&&this.mouseDown&&(this.dragging=!0,this.targetPitch=this.pitchStart-(n-this.dragStart.y)/200,this.targetYaw=this.yawStart+(t-this.dragStart.x)/200,this.canvas.style.cursor="move")}doBlockAction(t,n,r){let i=new ge(Math.floor(this.pos.x),Math.floor(this.pos.y),Math.floor(this.pos.z)),o=this.renderer.pickAt(new ge(i.x-4,i.y-4,i.z-4),new ge(i.x+4,i.y+4,i.z+4),t,n);if(o!=!1){const l=this.client?this.client:this.world;r?l.setBlock(o.x,o.y,o.z,ye[N.AIR]):l.setBlock(o.x+o.n.x,o.y+o.n.y,o.z+o.n.z,this.buildMaterial)}}getEyePos(){return this.pos.add(new ge(0,0,1.7))}update(){let t=this.velocity,n=this.pos,r=new ge(Math.floor(n.x),Math.floor(n.y),Math.floor(n.z));if(this.lastUpdate){let i=(new Date().getTime()-this.lastUpdate)/1e3;this.dragging&&(this.angles[0]+=(this.targetPitch-this.angles[0])*30*i,this.angles[1]+=(this.targetYaw-this.angles[1])*30*i,this.angles[0]<-Math.PI/2&&(this.angles[0]=-Math.PI/2),this.angles[0]>Math.PI/2&&(this.angles[0]=Math.PI/2)),this.falling&&(t.z+=-.5),this.keys[In[Tn.JUMP]]&&!this.falling&&(t.z=8);let o=new ge(0,0,0);this.falling||(this.keys[In[Tn.MOVE_FORWARD]]&&(o.x+=Math.cos(Math.PI/2-this.angles[1]),o.y+=Math.sin(Math.PI/2-this.angles[1])),this.keys[In[Tn.MOVE_BACKWARD]]&&(o.x+=Math.cos(Math.PI+Math.PI/2-this.angles[1]),o.y+=Math.sin(Math.PI+Math.PI/2-this.angles[1])),this.keys[In[Tn.MOVE_LEFT]]&&(o.x+=Math.cos(Math.PI/2+Math.PI/2-this.angles[1]),o.y+=Math.sin(Math.PI/2+Math.PI/2-this.angles[1])),this.keys[In[Tn.MOVE_RIGHT]]&&(o.x+=Math.cos(-Math.PI/2+Math.PI/2-this.angles[1]),o.y+=Math.sin(-Math.PI/2+Math.PI/2-this.angles[1]))),o.length()>0?(o=o.normal(),t.x=o.x*4,t.y=o.y*4):(t.x/=this.falling?1.01:1.5,t.y/=this.falling?1.01:1.5),this.pos=this.resolveCollision(n,r,t.mul(i))}this.lastUpdate=new Date().getTime()}resolveCollision(t,n,r){let i={x:t.x+r.x,y:t.y+r.y,size:.25},o=[];for(let h=n.x-1;h<=n.x+1;h++)for(let s=n.y-1;s<=n.y+1;s++)for(let a=n.z;a<=n.z+1;a++)this.world.getBlock(h,s,a)!=ye[N.AIR]&&(this.world.getBlock(h-1,s,a)==ye[N.AIR]&&o.push({x:h,dir:-1,y1:s,y2:s+1}),this.world.getBlock(h+1,s,a)==ye[N.AIR]&&o.push({x:h+1,dir:1,y1:s,y2:s+1}),this.world.getBlock(h,s-1,a)==ye[N.AIR]&&o.push({y:s,dir:-1,x1:h,x2:h+1}),this.world.getBlock(h,s+1,a)==ye[N.AIR]&&o.push({y:s+1,dir:1,x1:h,x2:h+1}));for(let h in o){let s=o[h];Jy(s,i)&&(s.x!=null&&r.x*s.dir<0?(t.x=s.x+i.size/2*(r.x>0?-1:1),r.x=0):s.y!=null&&r.y*s.dir<0&&(t.y=s.y+i.size/2*(r.y>0?-1:1),r.y=0))}let l={x1:t.x+r.x-.125,y1:t.y+r.y-.125,x2:t.x+r.x+.125,y2:t.y+r.y+.125},u=Math.floor(t.z+r.z),c=Math.floor(t.z+1.7+r.z*1.1),f=[];for(let h=n.x-1;h<=n.x+1;h++)for(let s=n.y-1;s<=n.y+1;s++)this.world.getBlock(h,s,u)!=ye[N.AIR]&&f.push({z:u+1,dir:1,x1:h,y1:s,x2:h+1,y2:s+1}),this.world.getBlock(h,s,c)!=ye[N.AIR]&&f.push({z:c,dir:-1,x1:h,y1:s,x2:h+1,y2:s+1});this.falling=!0;for(let h in f){let s=f[h];if(Wy(s,l)&&r.z*s.dir<0){r.z<0?(this.falling=!1,t.z=s.z,r.z=0,this.velocity.z=0):(t.z=s.z-1.8,r.z=0,this.velocity.z=0);break}}return t.add(r)}}const Dt=Object.create(null);Dt.open="0";Dt.close="1";Dt.ping="2";Dt.pong="3";Dt.message="4";Dt.upgrade="5";Dt.noop="6";const Ro=Object.create(null);Object.keys(Dt).forEach(e=>{Ro[Dt[e]]=e});const Da={type:"error",data:"parser error"},qp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",eh=typeof ArrayBuffer=="function",th=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Gu=({type:e,data:t},n,r)=>qp&&t instanceof Blob?n?r(t):$f(t,r):eh&&(t instanceof ArrayBuffer||th(t))?n?r(t):$f(new Blob([t]),r):r(Dt[e]+(t||"")),$f=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function Uf(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let xl;function nE(e,t){if(qp&&e.data instanceof Blob)return e.data.arrayBuffer().then(Uf).then(t);if(eh&&(e.data instanceof ArrayBuffer||th(e.data)))return t(Uf(e.data));Gu(e,!1,n=>{xl||(xl=new TextEncoder),t(xl.encode(n))})}const zf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ii=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<zf.length;e++)ii[zf.charCodeAt(e)]=e;const rE=e=>{let t=e.length*.75,n=e.length,r,i=0,o,l,u,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const f=new ArrayBuffer(t),h=new Uint8Array(f);for(r=0;r<n;r+=4)o=ii[e.charCodeAt(r)],l=ii[e.charCodeAt(r+1)],u=ii[e.charCodeAt(r+2)],c=ii[e.charCodeAt(r+3)],h[i++]=o<<2|l>>4,h[i++]=(l&15)<<4|u>>2,h[i++]=(u&3)<<6|c&63;return f},iE=typeof ArrayBuffer=="function",Ku=(e,t)=>{if(typeof e!="string")return{type:"message",data:nh(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:oE(e.substring(1),t)}:Ro[n]?e.length>1?{type:Ro[n],data:e.substring(1)}:{type:Ro[n]}:Da},oE=(e,t)=>{if(iE){const n=rE(e);return nh(n,t)}else return{base64:!0,data:e}},nh=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},rh="",sE=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((o,l)=>{Gu(o,!1,u=>{r[l]=u,++i===n&&t(r.join(rh))})})},lE=(e,t)=>{const n=e.split(rh),r=[];for(let i=0;i<n.length;i++){const o=Ku(n[i],t);if(r.push(o),o.type==="error")break}return r};function aE(){return new TransformStream({transform(e,t){nE(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,r)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let _l;function uo(e){return e.reduce((t,n)=>t+n.length,0)}function co(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function uE(e,t){_l||(_l=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(l,u){for(n.push(l);;){if(r===0){if(uo(n)<1)break;const c=co(n,1);o=(c[0]&128)===128,i=c[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(uo(n)<2)break;const c=co(n,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),r=3}else if(r===2){if(uo(n)<8)break;const c=co(n,8),f=new DataView(c.buffer,c.byteOffset,c.length),h=f.getUint32(0);if(h>Math.pow(2,21)-1){u.enqueue(Da);break}i=h*Math.pow(2,32)+f.getUint32(4),r=3}else{if(uo(n)<i)break;const c=co(n,i);u.enqueue(Ku(o?c:_l.decode(c),t)),r=0}if(i===0||i>e){u.enqueue(Da);break}}}})}const ih=4;function xe(e){if(e)return cE(e)}function cE(e){for(var t in xe.prototype)e[t]=xe.prototype[t];return e}xe.prototype.on=xe.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};xe.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};xe.prototype.off=xe.prototype.removeListener=xe.prototype.removeAllListeners=xe.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+e],this};xe.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this};xe.prototype.emitReserved=xe.prototype.emit;xe.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};xe.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Ms=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0),ct=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),fE="arraybuffer";function oh(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const dE=ct.setTimeout,AE=ct.clearTimeout;function Fs(e,t){t.useNativeTimers?(e.setTimeoutFn=dE.bind(ct),e.clearTimeoutFn=AE.bind(ct)):(e.setTimeoutFn=ct.setTimeout.bind(ct),e.clearTimeoutFn=ct.clearTimeout.bind(ct))}const pE=1.33;function hE(e){return typeof e=="string"?gE(e):Math.ceil((e.byteLength||e.size)*pE)}function gE(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function sh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function mE(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function vE(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let o=n[r].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}class yE extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class Xu extends xe{constructor(t){super(),this.writable=!1,Fs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,n,r){return super.emitReserved("error",new yE(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=Ku(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=mE(t);return n.length?"?"+n:""}}class EE extends Xu{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};lE(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,sE(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=sh()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}}let lh=!1;try{lh=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const wE=lh;function xE(){}class _E extends EE{constructor(t){if(super(t),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||r!==t.port}}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}class Qt extends xe{constructor(t,n,r){super(),this.createRequest=t,Fs(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var t;const n=oh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Qt.requestsCount++,Qt.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=xE,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Qt.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Qt.requestsCount=0;Qt.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Hf);else if(typeof addEventListener=="function"){const e="onpagehide"in ct?"pagehide":"unload";addEventListener(e,Hf,!1)}}function Hf(){for(let e in Qt.requests)Qt.requests.hasOwnProperty(e)&&Qt.requests[e].abort()}const kE=function(){const e=ah({xdomain:!1});return e&&e.responseType!==null}();class SE extends _E{constructor(t){super(t);const n=t&&t.forceBase64;this.supportsBinary=kE&&!n}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Qt(ah,this.uri(),t)}}function ah(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||wE))return new XMLHttpRequest}catch{}if(!t)try{return new ct[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const uh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class IE extends Xu{get name(){return"websocket"}doOpen(){const t=this.uri(),n=this.opts.protocols,r=uh?{}:oh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Gu(r,this.supportsBinary,o=>{try{this.doWrite(r,o)}catch{}i&&Ms(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=sh()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}}const kl=ct.WebSocket||ct.MozWebSocket;class CE extends IE{createSocket(t,n,r){return uh?new kl(t,n,r):n?new kl(t,n):new kl(t)}doWrite(t,n){this.ws.send(n)}}class BE extends Xu{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const n=uE(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),i=aE();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const o=()=>{r.read().then(({done:u,value:c})=>{u||(this.onPacket(c),o())}).catch(u=>{})};o();const l={type:"open"};this.query.sid&&(l.data=`{"sid":"${this.query.sid}"}`),this._writer.write(l).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;this._writer.write(r).then(()=>{i&&Ms(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const bE={websocket:CE,webtransport:BE,polling:SE},RE=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,TE=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function La(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=RE.exec(e||""),o={},l=14;for(;l--;)o[TE[l]]=i[l]||"";return n!=-1&&r!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=PE(o,o.path),o.queryKey=QE(o,o.query),o}function PE(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function QE(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(n[i]=o)}),n}const Na=typeof addEventListener=="function"&&typeof removeEventListener=="function",To=[];Na&&addEventListener("offline",()=>{To.forEach(e=>e())},!1);class hn extends xe{constructor(t,n){if(super(),this.binaryType=fE,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(n=t,t=null),t){const r=La(t);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=La(n.host).host);Fs(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=vE(this.opts.query)),Na&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},To.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=ih,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&hn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",hn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=t.data,this._onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=hE(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Ms(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,n,r){return this._sendPacket("message",t,n,r),this}send(t,n,r){return this._sendPacket("message",t,n,r),this}_sendPacket(t,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:t,data:n,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}_onError(t){if(hn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Na&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=To.indexOf(this._offlineEventListener);r!==-1&&To.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this._prevBufferLen=0}}}hn.protocol=ih;class OE extends hn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let n=this.createTransport(t),r=!1;hn.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",s=>{if(!r)if(s.type==="pong"&&s.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;hn.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(h(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const a=new Error("probe error");a.transport=n.name,this.emitReserved("upgradeError",a)}}))};function o(){r||(r=!0,h(),n.close(),n=null)}const l=s=>{const a=new Error("probe error: "+s);a.transport=n.name,o(),this.emitReserved("upgradeError",a)};function u(){l("transport closed")}function c(){l("socket closed")}function f(s){n&&s.name!==n.name&&o()}const h=()=>{n.removeListener("open",i),n.removeListener("error",l),n.removeListener("close",u),this.off("close",c),this.off("upgrading",f)};n.once("open",i),n.once("error",l),n.once("close",u),this.once("close",c),this.once("upgrading",f),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const n=[];for(let r=0;r<t.length;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}}let DE=class extends OE{constructor(t,n={}){const r=typeof t=="object"?t:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>bE[i]).filter(i=>!!i)),super(t,r)}};function LE(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=La(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+t,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}const NE=typeof ArrayBuffer=="function",ME=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,ch=Object.prototype.toString,FE=typeof Blob=="function"||typeof Blob<"u"&&ch.call(Blob)==="[object BlobConstructor]",$E=typeof File=="function"||typeof File<"u"&&ch.call(File)==="[object FileConstructor]";function Zu(e){return NE&&(e instanceof ArrayBuffer||ME(e))||FE&&e instanceof Blob||$E&&e instanceof File}function Po(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(Po(e[n]))return!0;return!1}if(Zu(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Po(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Po(e[n]))return!0;return!1}function UE(e){const t=[],n=e.data,r=e;return r.data=Ma(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ma(e,t){if(!e)return e;if(Zu(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ma(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Ma(e[r],t));return n}return e}function zE(e,t){return e.data=Fa(e.data,t),delete e.attachments,e}function Fa(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Fa(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Fa(e[n],t));return e}const HE=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],VE=5;var te;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(te||(te={}));class jE{constructor(t){this.replacer=t}encode(t){return(t.type===te.EVENT||t.type===te.ACK)&&Po(t)?this.encodeAsBinary({type:t.type===te.EVENT?te.BINARY_EVENT:te.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===te.BINARY_EVENT||t.type===te.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=UE(t),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}function Vf(e){return Object.prototype.toString.call(e)==="[object Object]"}class qu extends xe{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===te.BINARY_EVENT;r||n.type===te.BINARY_ACK?(n.type=r?te.EVENT:te.ACK,this.reconstructor=new JE(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Zu(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(te[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===te.BINARY_EVENT||r.type===te.BINARY_ACK){const o=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const l=t.substring(o,n);if(l!=Number(l)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(l)}if(t.charAt(n+1)==="/"){const o=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(o,n)}else r.nsp="/";const i=t.charAt(n+1);if(i!==""&&Number(i)==i){const o=n+1;for(;++n;){const l=t.charAt(n);if(l==null||Number(l)!=l){--n;break}if(n===t.length)break}r.id=Number(t.substring(o,n+1))}if(t.charAt(++n)){const o=this.tryParse(t.substr(n));if(qu.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case te.CONNECT:return Vf(n);case te.DISCONNECT:return n===void 0;case te.CONNECT_ERROR:return typeof n=="string"||Vf(n);case te.EVENT:case te.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&HE.indexOf(n[0])===-1);case te.ACK:case te.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class JE{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=zE(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const WE=Object.freeze(Object.defineProperty({__proto__:null,Decoder:qu,Encoder:jE,get PacketType(){return te},protocol:VE},Symbol.toStringTag,{value:"Module"}));function yt(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const YE=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class fh extends xe{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[yt(t,"open",this.onopen.bind(this)),yt(t,"packet",this.onpacket.bind(this)),yt(t,"error",this.onerror.bind(this)),yt(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){var r,i,o;if(YE.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const l={type:te.EVENT,data:n};if(l.options={},l.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const h=this.ids++,s=n.pop();this._registerAckCallback(h,s),l.id=h}const u=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!u||(c?(this.notifyOutgoingListeners(l),this.packet(l)):this.sendBuffer.push(l)),this.flags={},this}_registerAckCallback(t,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[t]=n;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let u=0;u<this.sendBuffer.length;u++)this.sendBuffer[u].id===t&&this.sendBuffer.splice(u,1);n.call(this,new Error("operation has timed out"))},i),l=(...u)=>{this.io.clearTimeoutFn(o),n.apply(this,u)};l.withError=!0,this.acks[t]=l}emitWithAck(t,...n){return new Promise((r,i)=>{const o=(l,u)=>l?i(l):r(u);o.withError=!0,n.push(o),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...o)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:te.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case te.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case te.EVENT:case te.BINARY_EVENT:this.onevent(t);break;case te.ACK:case te.BINARY_ACK:this.onack(t);break;case te.DISCONNECT:this.ondisconnect();break;case te.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:te.ACK,id:t,data:i}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:te.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Ur(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ur.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Ur.prototype.reset=function(){this.attempts=0};Ur.prototype.setMin=function(e){this.ms=e};Ur.prototype.setMax=function(e){this.max=e};Ur.prototype.setJitter=function(e){this.jitter=e};class $a extends xe{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Fs(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ur({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||WE;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new DE(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=yt(n,"open",function(){r.onopen(),t&&t()}),o=u=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",u),t?t(u):this.maybeReconnectOnOpen()},l=yt(n,"error",o);if(this._timeout!==!1){const u=this._timeout,c=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),n.close()},u);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(l),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(yt(t,"ping",this.onping.bind(this)),yt(t,"data",this.ondata.bind(this)),yt(t,"error",this.onerror.bind(this)),yt(t,"close",this.onclose.bind(this)),yt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){Ms(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new fh(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Zr={};function Sl(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=LE(e,t.path||"/socket.io"),r=n.source,i=n.id,o=n.path,l=Zr[i]&&o in Zr[i].nsps,u=t.forceNew||t["force new connection"]||t.multiplex===!1||l;let c;return u?c=new $a(r,t):(Zr[i]||(Zr[i]=new $a(r,t)),c=Zr[i]),n.query&&!t.query&&(t.query=n.queryKey),c.socket(n.path,t)}Object.assign(Sl,{Manager:$a,Socket:fh,io:Sl,connect:Sl});const GE=I.div`
  height: ${e=>e.height||"100%"};
  width: ${e=>e.width||"100%"};
  background: ${e=>`url(${e.backgroundImage})`};
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`,KE=I.canvas`
  width: 100%;
  height: 100%;
  opacity: ${e=>e.isKicked?0:1};
`,XE=I.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({selectorWidthPx:e})=>`${e}px`};
  opacity: ${({isKicked:e})=>e?0:1};
  display: flex;
  justify-content: center;
`,ZE=I.table`
  background: rgba(0, 0, 0, 0.6);

  & tr {
    height: ${({selectorWidthPx:e})=>`${e}px`};
  }

  & tr > td {
    width: ${({selectorWidthPx:e})=>`${e}px`};
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0.3;

    background: ${({blockThumbsImage:e})=>`url(${e}) 0 0`};
  }
`;function dh(e){return e?[71.5,.01,200]:[70,.01,200]}const qE="/assets/acid-logo-_IamNsf_.png",ew=I.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  background: none;
  width: 130px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: right;
  opacity: 0.5;
  padding: 0;
  text-align: right;

  &:hover {
    color: black;
    border-color: black;

    img {
      filter: invert(100%);
    }
  }

  img {
    height: 100%;
  }
`,tw=e=>{const{renderer:t}=e,[n,r]=w.useState(!1);w.useEffect(()=>{t&&t.setPerspective(...dh(n))},[n,t]);const i=o=>{o.currentTarget.blur(),r(l=>!l)};return B.jsxs(ew,{onClick:i,children:["take some",B.jsx("img",{alt:"Take Acid",src:qE})]})},nw=e=>{const{selectorWidthPx:t=Zp,worldSeed:n,worldSize:r,chunkSize:i,texturePack:o,acid:l}=e,[u,c]=w.useState(),f=w.useRef(null),h=w.useRef(null),s=w.useRef(null),a=w.useRef(null),d=()=>{const y=new jy(r,r,r);y.createRandomisedWorld(r/2,n);const A=new eE(s.current,h.current,o);A.setWorld(y,i),A.setPerspective(...dh(l));const p=new tE;p.setWorld(y),p.setRenderer(A),c({world:y,renderer:A,player:p})},g=()=>{if(u){const{player:y,renderer:A}=u;if(A.shouldSkipRender())return;A.lastRenderSkipped&&(y.lastUpdate=null),y.update(),A.buildChunks(i,A.lastRenderSkipped),A.setCamera(y.getEyePos().toArray(),y.angles),A.draw()}};w.useEffect(()=>{s&&f&&a&&d()},[s,f,a]),w.useEffect(()=>{let y;return u?(u.player.setInputCanvas(f.current,s.current),u.player.setMaterialSelector(a.current,t),y=setInterval(g,16)):clearInterval(y),()=>{clearInterval(y),u&&u.player&&u.player.removeDocumentEventListeners()}},[u]);const v=y=>(y.preventDefault(),!1);return B.jsxs(GE,{ref:f,onContextMenu:v,backgroundImage:o.backgroundImage,height:e.height,width:e.width,children:[B.jsx(KE,{ref:s}),B.jsx(XE,{selectorWidthPx:t,children:B.jsx(ZE,{ref:a,selectorWidthPx:t,blockThumbsImage:o.blockThumbsImage,children:B.jsx("tbody",{children:B.jsx("tr",{})})})}),B.jsx("canvas",{ref:h}),B.jsx(tw,{renderer:u==null?void 0:u.renderer})]})};I.div`
  position: absolute;
  left: 20px;
  bottom: 18px;
  display: ${e=>e.isGameReady?"flex":"none"};
  opacity: ${e=>e.isChatOpen?"1":"0.2"};
  height: ${e=>e.isChatOpen?"initial":"100px"};
  overflow: hidden;
  flex-direction: column;

  button {
    display: ${e=>e.isChatOpen?"initial":"none"};
  }
`;I.div`
  width: 460px;
  height: 195px;
  overflow: hidden;
  overflow-y: scroll;
  padding-left: 10px;
  padding-right: 10px;
  cursor: default;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-content: start;
  justify-content: start;
  margin-bottom: 10px;
`;I.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;I.input`
  opacity: ${e=>e.isChatOpen?"1":"0"};
  height: ${e=>e.isChatOpen?"30px":"0"};
  width: 100%;
  padding-left: 10px;
  padding-bottom: 2px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
`;I.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 300px;
  cursor: default;
  color: #fff;
`;I.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid #888;
  outline: none;
  color: white;
  font-size: 24px;
`;I.div`
  position: absolute;
  top: 42%;
  width: 99%;
  cursor: default;
  text-align: center;
  color: #fff;
  font-size: 24px;
`;I.button`
  margin-bottom: 10px;
  align-self: start;
`;const rw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAl5JREFUeNrs3btOw0AQBdDUNBFChMICiRSU/P/fhZbKIzS+GQefYsp9+rgZ7c6evj/fbmvxtby04uP13Iq9z+9yflqN9Pq77U8AAAAAAAAAAAAAAAAAAAAAHApA1UG1gekNqMa/Xq+r0Z1fF2B6/dX6qgAAAAAAAAAAAAAAAAAAAADgWAC6iYZuoiQ9fjrRkt6f9P4BAAAAAAAAAAAAAAAAAAAAcCwAVaJhWZbV6E4gnWiaPlDSbZ9ORAEAAAAAAAAAAAAAAAAAAAAAwJYLrBZQfeC9H7io+q9+oOn5AQAAAAAAAAAAAAAAAAAAAHAsAN0DC9OJlO6BivTFlnT/8QIRAAAAAAAAAAAAAAAAAAAAAPwrAN1ETXeCVYGH9AakCzGmD8x02wMAAAAAAAAAAAAAAAAAAAAAwD03YPrBh26iae/zBwAAAAAAAAAAAAAAAAAAAACA3wCmJ5hu301kTX/g9PoAAAAAAAAAAAAAAAAAAAAAAOAvMX2xYvrixd4PrLQTQQAAAAAAAAAAAAAAAAAAAAAAsOGDB+kDKV3A0x+oiu7FGgAAAAAAAAAAAAAAAAAAAAAA2NPFhfQGVw86pH+Q9IMZVf8AAAAAAAAAAAAAAAAAAAAAHAvA9ASngTx6dBNVAAAAAAAAAAAAAAAAAAAAAACwZYGGKt4vz6sxXcChe2Cke3ElXWgTAAAAAAAAAAAAAAAAAAAAgGMBmN6gdCHE6QIS6fEBAAAAAAAAAAAAAAAAAAAAAOCeAKYfhqwKJHTH3/vFmfGbQQAAAAAAAAAAAAAAAAAAAAA8EoCfAQBi7VZP36fViQAAAABJRU5ErkJggg==",iw="/assets/blockthumbs-knI0vhZG.png",ow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAHxALIxcJJBgIJBgKJhgLJhoKJxsLJhoMKBsKKBsLKBoNKBwLKRwMKh0NKx4NKx4OLR0OLB4OLx8PLB4RLyANLSAQLyIRMiMQMyQRNCUSOigUPyoVKCgoPz8/JiFbMChyAFtbAGBgAGhoAH9/Qh0KQSEMRSIOQioSUigmUTElYkMvbUMqb0UsakAwdUcvdEgvek4za2trOjGJUj2JRjqlVknMAJmZAJ6eAKioAK+vAMzMikw9gFM0hFIxhlM0gVM5g1U7h1U7h1g6ilk7iFo5j14+kF5Dll9All9BmmNEnGNFnGNGmmRKnGdIn2hJnGlMnWpPlm9bnHJcompHrHZaqn1ms3titXtnrYBttIRttolsvohst4Jyu4lyvYtyvY5yvY50xpaA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPSUN6AAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAKjSURBVEhLpZSLVtNAEIYLpSlLSUITLCBaGhNBQRM01M2mSCoXNUURIkZFxQvv/wz6724Wij2HCM7J6UyS/b+dmZ208rsww6jiqo4FhannZb5yDqjaNgDVwE/8JAmCMqF6fwGwbU0CKjD/+oAq9jcM27gxAFpNQxU3Bwi9Ajy8fgmGZuvaGAcIuwFA12CGce1jJESr6/Ot1i3Tnq5qptFqzet1jRA1F2XHWQFAs3RzwTTNhQd3rOkFU7c0DijmohRg1TR9ZmpCN7/8+PX954fb+sTUjK7VLKOYi1IAaTQtUrfm8pP88/vTw8M5q06sZoOouSgHEDI5vrO/eHK28el04yxf3N8ZnyQooZiLfwA0arNb6d6bj998/+vx8710a7bW4E2Uc1EKsEhz7WiQBK9eL29urrzsB8ngaK1JLDUXpYAkGSQH6e7640fL91dWXjxZ33138PZggA+Sz0WQlAL4gmewuzC1uCenqXevMPWc9XrMX/VXh6Hicx4ByHEeAfRg/wtgSMAvz+CKEkYAnc5SpwuD4z70PM+hUf+4348ixF7EGItjxmQcCx/Dzv/SOkuXAF3PdT3GIujjGLELNYwxhF7M4oi//wsgdlYZdMXCmEUUSsSu0OOBACMoBTiu62BdRPEjYxozXFyIpK7IAE0IYa7jOBRqGlOK0BFq3Kdpup3DthFwP9QDlBCGKEECoHEBEDLAXHAQMQnI8jwFYRQw3AMOQAJoOADoAVcDAh0HZAKQZUMZdC43kdeqAPwUBEsC+M4cIEq5KEEBCl90mR8CVR3nxwCdBBS9OAe020UGnXb7KcxzPY9SXoEEIBZtgE7UDgBKyLMhgBS2YdzjMJb4XHRDAPiQhSGjNOxKQIZTgC8BiMECgarxprjjO0OXiV4MAf4A/x0nbcyiS5EAAAAASUVORK5CYII=",sw="/assets/terrain-d5T66RA4.png",lw={terrain:sw,player:ow,backgroundImage:rw,blockThumbsImage:iw},aw=()=>B.jsx($r,{program:Ce.WEB_CAVE,programLabel:"WebCave",children:B.jsx("div",{children:B.jsx(nw,{chunkSize:8,worldSize:64,worldSeed:"cyprien-os",texturePack:lw,height:"500px",width:"800px"})})}),uw=()=>B.jsx($r,{program:Ce.SN_BRIDGE,programLabel:"SN Bridge",children:B.jsx("iframe",{src:"https://bridge.status.network",height:"600",width:"1000",style:{filter:"grayscale(100%) contrast(200%) brightness(80%)"}})});function Il(e,t,n){return(t=function(r){var i=function(o,l){if(typeof o!="object"||!o)return o;var u=o[Symbol.toPrimitive];if(u!==void 0){var c=u.call(o,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(o)}(r,"string");return typeof i=="symbol"?i:i+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cl={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},Ah=function(e){var t=e.children,n=e.onClickAway,r=e.focusEvent,i=r===void 0?"focusin":r,o=e.mouseEvent,l=o===void 0?"click":o,u=e.touchEvent,c=u===void 0?"touchend":u,f=w.useRef(null),h=w.useRef(null),s=w.useRef(!1);w.useEffect(function(){return setTimeout(function(){s.current=!0},0),function(){s.current=!1}},[]);var a=function(y){return function(A){h.current=A.target;var p=t==null?void 0:t.props[y];p&&p(A)}};w.useEffect(function(){var y,A,p=(y=(A=f.current)===null||A===void 0?void 0:A.ownerDocument)!==null&&y!==void 0?y:document,m=function(E){s.current&&(f.current&&f.current.contains(E.target)||h.current===E.target||!p.contains(E.target)||n(E))};return p.addEventListener(l,m),p.addEventListener(c,m),p.addEventListener(i,m),function(){p.removeEventListener(l,m),p.removeEventListener(c,m),p.removeEventListener(i,m)}},[i,l,n,c]);var d=Cl[l],g=Cl[c],v=Cl[i];return x.Children.only(w.cloneElement(t,Il(Il(Il({ref:function(y){f.current=y;var A=t.ref;typeof A=="function"?A(y):A&&(A.current=y)}},v,a(v)),d,a(d)),g,a(g))))};Ah.displayName="ClickAwayListener";const cw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABwlBMVEVxQP3///9wP/1wPv1vPf1vPv1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xQP1xP/1xQP1yQf3t5/+CVv3h1v94Sv3+/v9xQP1xQP1xQP37+v94Sf1zQ/15Sv349f95S/3u6P/q4/9uPP12R/2Zdv7Pvv5zQv16TP2YdP6DWP2ukv50RP328/91Rf2cev7o4P+EWv1/Uv2jg/6OaP23nv5tOv2gf/5uO/2khf6BVv3Luf6khP6NZv318f+Xc/6/qf77+f+HXv3KuP58T/19Uf3Drv6aeP6Rav26o/6LY/10Q/1+Uf29pv749v+6ov6JYf2cef5xQf2zmf7Bq/79/P/o4f/w6//Ovv6MZf3f0//p4f+IX/21m/57Tv3e0v+yl/7d0f+7o/5yQv3Uxf708f+lhf6KYv2GXf2vlP718v+AVf3j2v+5oP79/f/39f+VcP7c0P+Sbf3l3f+SbP19UP3Yyv6xlf7v6v/k2v+NZf339P/f1P/h1/+2nP6Ub/2qjP6oif7bz/6skP7azf7g1f+CV/3TxP56Tf2BVf2GXP2xlv7n3/+AVP3g1v93SP1HcEyfQYWDAAAAlnRSTlP////////79PcF52LN0bDzgX8XSST//v///////3zb2v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCej4nSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/klEQVQ4y42T9XfbQAzHpfM5aRx04sTL4oYaKjPDtnbrOmZmZmZex9hh/9/dWXaS7SWv0w/2s74fC+4kWCaLxiKhoOb1AHi8WjAUiUUdAeynoQfC8JeFA7pRBXz+NDSwtN9HgK+1BRpaS6vPBvxNdEH4JWCkoamlDQHodQ5FVeQrzjkjh74M0UBNvzhy9Vo/AMut72kjIhCFWK2/eO7Jy+c3GetemM+uJSIcg0gtQLztFZaSTO1DxGwHt30RCNX0eGo1rkqqqbMCwHUEhCBIKhu9XmQ2UHlxQ+hzs6rtD4Lm/H76zmuKMP1BBtiQJ78GXupv/2UsffstgDW5j2gd3V50+vSCx9Y3HkG0ZtptYObplVOmows5IV/mFhn2e/svkYJPTlaUauUJG2Cbh4VujckIP8cnJsbrAZmC7TopgOGl0TL++PoO8YJaBTxUpHnurlUemp7K4hfzUQFPdLslCJna7H8wNVL5/Amtt7x4Hg8fPOAm0dyD4nzwzXvExcdMHcvinr3JLnAOyjlqs+/+AOKzeyL74CFRULlzh0JH7VxW/pLwPuyRuVlqd0F8DHG6LOe6u44Vbt3upcws39FZGtjK6bqdgTH3HT/Dqu2rO3u3bWI0MO7IKSqrn0aFhk6XQ5tpPrQZ43/GfuXFEavXMEvGXb2Vl7d+/ROJf9b/D9WybpVLH66mAAAAAElFTkSuQmCC",ph="/assets/computer-DXO2F_U7.png",hh="/assets/rakia-Dlo1lzcB.png",gh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWmVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAAhMAAwAAAAEAAQAAAAAAAAAAAEgAAAABAAAASAAAAAEfUvc0AAAGi0lEQVR4nO2WWWzUxx3HvzP/c/+73sPHGt8bkxiDvQaTYopMa1RIIBAllejhJrRRRB7SSEnVVqla2qpVhXpIjVQhFKEiRW6q0ganUK6kbrjJtjUEbONg13Z94gMf6/We//3v/memD33pwzrgvPSF7+PMTzMffX4zowEe5mH+zyH3K7hw9TIURuHwatBsCsojSDMNDiagywSzsg7FFvA4PeAEqG1YC4gHB5DvV6AwCgoCNSMhyDkBm6KpaQ2GKmCxsKhuahL9E0nhzOiIOrGizT8RgIKCg6NhRoencJLw+UGZcb8mbGIYMpFYxhIKc2fNf3Sm1xr+TMql2aVxKkBWBpGzBQP/7ge1HVBEClWuMGXd/TpxSgXEWVRquQqKhj/u9xf7/YnCysBM4u5QxtDELFXyFhGxU8hKdt+qVchIFI3rGz6dATWrwZZScL/3N8Kq3Tp16RVhxfNYY8szbXtavAVrCv1gnOHj4QV2vS+68P6FU98t1cioYkSGYabDzoxqM9376Q10dXajamkeemJS1fNYWSiSaf7lz175/enL38PMcD9CbRfgMDQYqoTt+7+Mw29/IM6cTna/d7L9gGTOXI+PLkVdeiUbKimBTSnACerq6nIC0FyDnGbg8+VTIplu21Nc8/0fv/LWiSsv4+yZkygud6CuuRSFNaUoDG7BP6/fw1O7NpD2k62NTU1bj2ctZ21ekTOPVBuUCwmUSeDUXpmB8csheMa6na5Hyuo37P7i1ba2PSpzLKFp+2MYuzOFnh4Dz36jDZBlMGFDIl5cOv11BIM2Nm3801jfpXP7HOloLwK18cEFLjhkrA1ueHADFbNT1Ol2OW8Oj9a37lmvBj9bjPn4OCCbCNTVY+36fYCsAGCghCDDTAzcXoCmaTh29EuBs6GurUKmhRjqlLWMBUuoyxrICYBHfdTSFOfPD73xtef274Sab6CluRHCzgDUgMdTCXAJAAOyi+j4wwG8/O0a5BWZKKlN4eDBH/2CFFeWCqHqss1gk/SyADlvQWbqLlFlVZVk6snz6kA2CQ4ZIByQbUyMXUN4/F1YSyHkewUayxMYu+FHYJMPukPGocOfJ+1/Pb95b8Ojw3pkOql7g3xFBrTScqFwSWhAWKQncTs0jLNnzoFAA0QMxa53EGiIQXP4YZIm0IIDiNLnILgGX76Olh2fwaFDbzxNheEqKHuEatnlX6acBlhsQUiWaaVlY274Ri8u9PThxdd3ApAgsilMzK1BRf0PsW63D+AUglrAyABYOgQt34ZI2bDN2Bqm2w42Mk7dVWuWBchpICMy3GLEfH7nrpudH03CiCdRWlSG3g9HIWwBV/4OEKMEYBJAGQAKkk5hemQOsABmJ4GUMAhRJIVziLSVe3eyDMAI9wgmJHPv7j3XO/5+j+1oXoeXnjgCH3WBcoZUZggQEiARCCFAOMPFE29ivnsQ4Zk0ZMWAKstxYWYZMbKAylbWgpTiBKywKSampl97/devnur41ZuvvtCA3xw8j9ZvbkT9FgWTt/ZhctYLl+LD3X+dx8biNOJRC92hO/D4YvCVrA5JGRbLSm42w5Y5A2IZA0J2gXgL7ZSVCH+hvLyroyfROzpj4YUdm9HdMQIxlkLXR1ewqWYGZa5rKJEisOMEVz4cR/PmJrx9eED85ejRt7gZi3O+yE22/LcjJ0AWNoYMN5yF1SbNxEeu/fHdb/30yEByKpxEbaAcP/nOcawz6jHYOYJbFwcx1LuI6GIUjzfU47XWYyJmlZxKTI3dY0s8GUOZUMTyADlmKLp6uiGJDKojJthIp6o48/xSeWDd9r27fveD1ppVfp+E/rtRDA7eQ77PAGgK0SiDaeu4NGCNXGo7vt82l257tj2zNJ2Icw4dFVXlDwoA3Oq5AYn/V44vPoSiySlVk7xFpKQ48ORLLx6p8ibrt67Px+qqfMiUw0wyMO7EkT/3ov23J56wZufuyPrS/MLjz9qWoJA4RUVV5YMD9N3sRJbKYERG2oxgy2o3mX3/qqxT6ja8xasHltIV7edOP/3BxZO7Y3HudjiU2Fe++vyxbfUNl4MFBTepmZ5Tn9qbnUilBJUARoFAxQoA/jfz8/NQODDR14dgbFRKRC0HVJKnCuaBq9AJm0sWy9rUziQkgSiz4xHnlp3Z0OSMaG7Z9olrE0Lu/ymlAmAESBoKJlklK/9cMImukBkdngor6YikKCY1VDcnmsa4prJRzcsWphdAqXS/pR/mYQAA/wEwSu/M1YnKqwAAAABJRU5ErkJggg==",mh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEXIyMjKysoBAQHGxsbNzMxfXl7R0dElJSWgoKAQEBBVVVTY19dCQkKpqKiKiYmVlZU6OjoxMTEbGxtpaWm4uLivr6/BwcFLS0twcHB+fn54d3eDg4Pe3t7q6uqgQ+NaAAACJklEQVQ4y01TB3LDMAzT3nt6pP//ZimPpsydpYgwScAQYhRTjNB6wIIoGujeXMfXBt15+CHKrLCC0vv4RtwwtP5DWu1hj1YMwKIn8Iug6KNq0qXkGj/f/AuD6n0maUKoRuapxLfC3QSGS3KGqHzgmyPSsxexZrtW5/YYFUTcudOyvYiHHfZlU37CCMGrkycS2JfmgjFplHIEQp8+1FR0e8a4O+Aoa9/IFTr43Ul9/idBrXQqphtAyhk3ByXwN89Crv4gbzhVedH0HnMNSW1OPuY/QN44n4X/0aBiT7vi5AuIG4ce4x2SWmf8Yb4A12OVssxLcIqxqGRu9QuQKi6AlhdRqFBz5fxfgek3noossl8a2pMYY3K5JNCXDpuZGSqQZFcJ1q/xc8pFy6KJTtW4DOt0+9WDim6gg4GHc7zytN4lk2/grfd7WmuFV5Hzuu0qcH4cR1vOe4RCdAUWtHvvVWtoGRMP9Pc1MaMMjEeREIwxIcb1xtLgMe3ouI02KG0dfKuUuLPoaQE00485p/p8DvODVMpRWCYYFtg+JILr5XTqCOCJlnyr3fjoR2g8LB2o3d1BYprAUhojlbDKcB2ZBu5RrMvUq3SmapcJ/8nEM6aMNnxWbYqBEniA1sGFVCOfIhHf5YwywCaH0C4R7OFECj7nXMrRc45n0qFlH5M8oQVc0TZYG8ir3v3AvbPR1wmioNpyy7rEy36YYcaWogPuK4YTDGQR+gUo6h84/rq0CgAAAABJRU5ErkJggg==",vh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEXKysnMzMvLy8rNzcwAAADJycjOz87IyMfU1NMUGBw3NzcoKivc3NseHx8vLi7S0tAodJoHBwddXFyjo6PFxcTY2NepsLOoqai+wcIWTmwyfKM+Pj4ODg+ZmZkjJCMjbZBsrbRlZWSMi4q2u756t8AKPFpIkbB4eHiAgICGhYQAJj1ZoK9RUE4EXY08jLFra2uSkZBPT09OTk1DcHRRd3ua9181AAACKklEQVQ4y1VTh5bjIAykCOOOe4sdp/dsubv//7aTwMnbhRQGjUaAJKY9hZNxJiSTzAIlGRcElac9RpNMuMUdgyACy5CaqR92YvA3dBpvf44fsVidnRy4YignhTVaO21bKF4OfFlp/VriJPRaOmnhxbFBERpCCOMQynBHZF673ZZm8WKmtIio9iCM6/gMcI4rdzIdXwAusbaAKbL7U7pKgsnXtCXMFK6CACUQePQYSvhXSEY4+3hQJSr/k9ClRrpUTONF+DQma4A+m/eeaYbsCOsExsnT9qGUabI+6EO4nQ6buS3n++EUpNEt6LNG4FNrs583h39BCHAcsiyKshkV0hT+bg7zXmJ2eDfcn30UQn782OBAAUvon/esMZgsKbts6ClEdvoYOj18nIYgim7PYW6MTaXgcgsJhnjsdlecl68HKUBRGbwh3pV322BMwnwdvEYyRikEyCB/rvwSwiQJx1UYhuk6wt9VgIRohNYIwQQzTQ6QrIBGWLh/CgF5Y+hhkYCAzgDwp4r5uYAcUAG9LAEv2n0VsCbCN5eVrnkBRIBi12G2GRVZbQoK8RB4aF5JVlCITxVz649fXU8wAuxqSpas6ivkI0x1ZZOlbHV3bdmWe8qsVFzsy7ZtSd8lCxtFeT4Ol3tkSN/4vuSuLzClVOpMkZhygGMGXIO8FVyhLwpLmxCVOkv+7qyljX53lm2lN0O9O0u6znrZ3zW+KKCVL2Vra1ks/j8Cku0/WoMjheWpP18AAAAASUVORK5CYII=",yh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcZJREFUWEfFlbEuRUEQhr9b6RQS0VARlWhoFN6A1iNQ4w2UElQKWiotiUfQ0IhKoqIRiUKnc/9kRzabszu7957kTrLNObMz3//P3HMHTDgGE+5PK8AVsORA3wNHtcJaAA6AfeAL+M00+AR0ToDXGogWgPdQUM0F0RXP4aGaC8KNWgBTbwV/AJ04TL09uwNuPYJaAFMf1/tIipv6+PFeHwCp+i4XUvXVLngObAA3BRXahW/grZBTXEgPIKfe+mkhX8Lm5xiKC+kBXAwXaa2g7hLQGTk8ADUXRC7WR+4cLnoASsu5MLZ6Fa8ByLkwtvpaAOXthmOOl9QL+Kl2NDUOWK14FDn1BqoPUBVEC4CNoqT+MdCqufsVbBmBuVCyt2VM/xNqccAbq6mP89xF7QsgVW8Q7ij6AuhSbxDFhewDIKe+ygUP4BBYLgx/DlgBpgo5Z8Bp7r0HoOaCyMUiMAPMFnJ2gIdRAXRvG9jqKCD1OorpcNK0ovqW70DXP+Jq0m2+A3LB++16I7D7qQuxestJXXDVtzig3HghU/UGoV2whXTVtwLYQnapNwA1F0SV+lYA5R8Dm85cr4cQ597s7X3tDtTWa86bOMAfUTVOIVGx4BIAAAAASUVORK5CYII=",fw=()=>{const[e,t]=w.useContext(Ns),n=()=>{t({type:"SET_MENU",payload:!e.menu})},r=()=>{t({type:"SET_MENU",payload:!1})},i=l=>{t({type:"SET_ACTIVE_PROGRAM",payload:l}),t({type:"SET_OPEN_PROGRAM",payload:{program:l,state:!0}}),t({type:"SET_VISIBLE_PROGRAM",payload:{program:l,state:!0}})},o=()=>{e.menu&&t({type:"SET_MENU",payload:!1})};return B.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.menu?B.jsx(Ah,{onClickAway:o,children:B.jsxs(Rp,{style:{position:"absolute",left:"0",top:"100%"},onClick:r,children:[B.jsxs(bn,{onClick:()=>i(Ce.ABOUT),children:[B.jsx("img",{style:{width:22,marginRight:8},src:ph,alt:"aboutLogo"}),B.jsx("span",{children:"About"})]}),B.jsx(Ju,{}),B.jsxs(bn,{onClick:()=>i(Ce.RAKIA),children:[B.jsx("img",{style:{width:22,marginRight:8},src:hh,alt:"rakiaLogo"}),B.jsx("span",{children:"Rakia Split"})]}),B.jsxs(bn,{onClick:()=>i(Ce.STAKING),children:[B.jsx("img",{style:{width:22,marginRight:8},src:gh,alt:"sntLogo"}),B.jsx("span",{children:"SNT Staking"})]}),B.jsxs(bn,{onClick:()=>i(Ce.WEB_CAVE),children:[B.jsx("img",{style:{width:22,marginRight:8},src:mh,alt:"webcaveLogo"}),B.jsx("span",{children:"WebCave"})]}),B.jsxs(bn,{onClick:()=>i(Ce.SN_BRIDGE),children:[B.jsx("img",{style:{width:22,marginRight:8},src:vh,alt:"snBridgeLogo"}),B.jsx("span",{children:"SN Bridge"})]}),B.jsxs(bn,{onClick:()=>i(Ce.REMIX),children:[B.jsx("img",{style:{width:22,marginRight:8},src:yh,alt:"ideLogo"}),B.jsx("span",{children:"IDE"})]})]})}):null,B.jsxs(yn,{onClick:n,active:e.menu,style:{fontWeight:"bold",marginRight:6},children:[B.jsx("img",{src:cw,alt:"winlogo",style:{marginLeft:-2,marginRight:5,width:20}}),"SN-OS"]})]})},rr=e=>{const{program:t,programLogo:n,programLabel:r}=e,[i,o]=w.useContext(Ns),l=()=>{i.visiblePrograms[t]||o({type:"SET_ACTIVE_MODAL",payload:t}),o({type:"SET_VISIBLE_PROGRAM",payload:{program:t,state:!i.visiblePrograms[t]}})};return i.openPrograms[t]?B.jsxs(yn,{onClick:l,active:i.visiblePrograms[t],className:"bold",style:{marginRight:3},children:[B.jsx("img",{src:n,alt:`programLogo-${t}`,style:{marginLeft:-2,marginRight:5,width:20}}),r]}):null},dw=`https://remix.ethereum.org/?#code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAoKcHJhZ21hIHNvbGlkaXR5IDAuOC40OwoKLyoqCiAqIEB0aXRsZSBXb25kZXJmdWxDb2RlCiAqIEBkZXYgV2VsY29tZSB0byBSZW1peAogKi8KY29udHJhY3QgWW91IHsKCiAgICBhZGRyZXNzIHByaXZhdGUgb3duZXI7CiAgICAKICAgIC8qKgogICAgICogQGRldiBTZXQgY29udHJhY3QgZGVwbG95ZXIgYXMgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYKICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYgPSBtc2cuc2VuZGVyOwoKICAgIH0KCiAgICAvKioKICAgICAqIEBkZXYgQ2hhbmdlIG1vb2QKICAgICAqIEBwYXJhbSBuZXdPd25lciBhZGRyZXNzIG9mIG5ldyBvd25lcgogICAgICovCiAgICBmdW5jdGlvbiBjaGFuZ2VNb29kKGFkZHJlc3MgbmV3TW9vZEFkZHIpIHB1YmxpYyB7CiAgICAgICAgb3duZXJNb29kID0gbmV3TW9vZEFkZHI7CiAgICB9Cn0=
`,Aw=()=>B.jsx($r,{program:Ce.REMIX,programLabel:"IDE",children:B.jsx("iframe",{src:dw,height:"600",width:"1000"})}),pw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAHyElEQVR4nO3d3W0TWxSAUc8VBTgdkE5CB5SQDgIVkBJMBUAHdBA6STpwOvB9vdIlM+IbPOOftV6PSDZOpE9HytYZNpvNYQMAf+iftQcA4DwJCACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQvFt7AJjjcDisPcIswzCsPQJkbiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJMNmsznvP6TnpD09PY2e393dLTPIhbq9vR09f3l5WWYQrpIbCACJgACQCAgAiYAAkAgIAImAAJAICACJPRBmWfs9jpubm9Hz19fXZQZ5w/Pz8+j5+/fvlxnkDd4jYQ43EAASAQEgERAAEgEBIBEQABIBASAREAASeyCMWnvP49L3FPb7/ej5drtdZpA3XPrnzzxuIAAkAgJAIiAAJAICQCIgACQCAkAiIAAk9kCu3Np7HlOufQ/Bz4dT5gYCQCIgACQCAkAiIAAkAgJAIiAAJAICQPJu7QE4rlPfI+C8Tf1+2RO5bG4gACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAk3gO5cFPvMXgvhDm893Hd3EAASAQEgERAAEgEBIBEQABIBASAREAASOyBXLnHx8dZ58xzf3+/9gij7Hkwxg0EgERAAEgEBIBEQABIBASAREAASAQEgGTYbDYehCBb+z2RU99T2G63o+f7/X6ZQd5w6p8fp80NBIBEQABIBASAREAASAQEgERAAEgEBIDEHghHtfaeyLWz58ExuYEAkAgIAImAAJAICACJgACQCAgAiYAAkNgD4aRNvZcx9d7GqdvtdqPnnz9/XmYQCNxAAEgEBIBEQABIBASAREAASAQEgERAAEjsgQCQuIEAkAgIAImAAJAICACJgACQCAgAiYAAkLxbewDGffnyZfT88fFxmUHgCIZhWHsEZnADASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEg8R4Iq7q5uRk9f319XWaQE3V/fz96/u3bt2UGgd9wAwEgERAAEgEBIBEQABIBASAREAASAQEgsQfCLJ8+fRo9//r16zKDvOHh4WH0fLfbzfr6U3saP378mPX1v3//Put8v9+Pnm+32z8bCP7DDQSAREAASAQEgERAAEgEBIBEQABIBASAxB4Io4ZhWHuEUYfDYdXvP3dP49if79R7K1PW/nw5bW4gACQCAkAiIAAkAgJAIiAAJAICQCIgACT2QK6cPY91Tf3/1v75TH3/S//5MM4NBIBEQABIBASAREAASAQEgERAAEgEBIDEHsiFW3uPgMv24cOH0fOnp6eFJmENbiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJPZAgOzXr19rj8CK3EAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEi8B3LhDofD6PkwDAtNwiWa+v3isrmBAJAICACJgACQCAgAiYAAkAgIAImAAJDYA7lyp74nMvX9z30PYe3Pd8q5f74clxsIAImAAJAICACJgACQCAgAiYAAkAgIAIk9EEZN7QHc3t6Onr+8vPzFaf7v1PdE1t7z2O12o+cPDw/LDMJFcgMBIBEQABIBASAREAASAQEgERAAEgEBILEHwizPz8+z/v2x9yTW3sOYa7vdjp7v9/tlBoHfcAMBIBEQABIBASAREAASAQEgERAAEgEBILEHwqrWfq/j58+fo+dTexh3d3d/bRY4N24gACQCAkAiIAAkAgJAIiAAJAICQCIgACT2QLhqHz9+XHsEOFtuIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkw2azWfdBBgDOkhsIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAImAAJAICADJv66sn9KlEVK7AAAAAElFTkSuQmCC",hw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAJEUlEQVR4nO3d4U1UTRuAYfxCAdABdKAVoB1IBWgFaAVIBUoFQgXYgdqBHUAH0IFfA2/mhPt4OMvudf2dsGfY3eTOJPtkXu3t7f3dA4An+t/aGwDgZRIQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASDZX3sD8JL9/ft3uP7q1atn2gk8PycQABIBASAREAASAQEgERAAEgEBIBEQABJzICxq7TmJ9+/fD9d//Pix6POXtvb7y25zAgEgERAAEgEBIBEQABIBASAREAASAQEgebW3tzf+ITk77eHhYbh+eHg4XD84OBiu397eDtffvXs3XJ+y9JyE12eXOYEAkAgIAImAAJAICACJgACQCAgAiYAAkJgDYeilzyF4/XVfn+3mBAJAIiAAJAICQCIgACQCAkAiIAAkAgJAsr/2BthsU3MA5+fnw/Wrq6tZr7/tcwrmPHjJnEAASAQEgERAAEgEBIBEQABIBASAREAASNwH8sKdnZ0N129ubhZ9/tpzBlPPnzJ3fw8PD8P1g4ODRZ8/Ze3Ph+3mBAJAIiAAJAICQCIgACQCAkAiIAAkAgJA4j6QF27ufRrHx8fD9fv7+6du6Vk9Pj4O16fmMOaaev2p93dpb968WfT1157DYV1OIAAkAgJAIiAAJAICQCIgACQCAkAiIAAk7gPZcScnJ8P1X79+Dden5kSOjo6G65t+H8b79++H67e3t0/d0pOeP2Xq/3v37t1w/efPn7Oeb45jtzmBAJAICACJgACQCAgAiYAAkAgIAImAAJCYA1nZtt/XsfR9EXPnPLZ9f4eHh8P1qftUljY1h/L27dvhujmUdTmBAJAICACJgACQCAgAiYAAkAgIAImAAJDsr72BXTf1O/Zt/5382vtb+/lnZ2fD9an9vX79eri+9pzH1BzLps+pMOYEAkAiIAAkAgJAIiAAJAICQCIgACQCAkDiPpAtN/c+iqV9/fp1uP758+dn2slmWvvz+/Tp03B96vNb+/vFspxAAEgEBIBEQABIBASAREAASAQEgERAAEjMgey4qTmDqfsYDg4O/t1m/sOuzxFMfT5Lu7+/H64fHx8/z0bYSE4gACQCAkAiIAAkAgJAIiAAJAICQCIgACT7a29g2639O/4p19fXw/WpOYAvX74M13d9jmOuue/f1Pfv8PBwuP79+/dZr782379lOYEAkAgIAImAAJAICACJgACQCAgAiYAAkLgPhEVNzQn4nf483l/W5AQCQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkDiPpCFTd3XsOnu7++H60dHR8N191Gsa+r7d3l5OVy/uLj4l9t5dr5/y3ICASAREAASAQEgERAAEgEBIBEQABIBASAxB7LjpuYEPn36NFz/9u3bv9vMf9j13/Fv+hzRrn8+u84JBIBEQABIBASAREAASAQEgERAAEgEBIDEHMiWm5ojWPt3/CcnJ8P1379/P9NONtOmf36bvj+W5QQCQCIgACQCAkAiIAAkAgJAIiAAJAICQLK/9gYYm3sfxNq/w587J7Dt///p6elwfWr/5+fnw/Wrq6vh+lxzP7/r6+vh+sePH5+6JZ6REwgAiYAAkAgIAImAAJAICACJgACQCAgAiftAVvbS71OYO6cxZe6cwdpzJq9fvx6u//nzZ7j+0udgphwdHQ3X7+7uhuub/v9tOycQABIBASAREAASAQEgERAAEgEBIBEQABJzIDtu6TmDpedc1p6TWHuOZ+59Gx8+fJi1fnNzM1xnuzmBAJAICACJgACQCAgAiYAAkAgIAImAAJDsr70B5tn1OYgpaz//69evw/XPnz/Pev2p/2/q+Ut//uZItpsTCACJgACQCAgAiYAAkAgIAImAAJAICACJ+0CYZek5kKOjo+H6z58/h+vHx8eznj9l7TmcKZs+p8PL5gQCQCIgACQCAkAiIAAkAgJAIiAAJAICQOI+EIam7nNYeo7g7u5u1vPXnoNYe3+Pj4+z/h5GnEAASAQEgERAAEgEBIBEQABIBASAREAASNwHwtDScwov/fXPz8+H61dXV7Ne/6W/P2w3JxAAEgEBIBEQABIBASAREAASAQEgERAAEveBMHR6ejrr7799+zZcPz4+nvX6a5s757G2+/v7tbfAC+YEAkAiIAAkAgJAIiAAJAICQCIgACQCAkDiPhAWtfZ9E3Off3FxMVy/vLx88p7+pbXfX3abEwgAiYAAkAgIAImAAJAICACJgACQCAgAiftAWJQ5hGV5f1mTEwgAiYAAkAgIAImAAJAICACJgACQCAgAiftAAEicQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASP4PVwGGiyk5En0AAAAASUVORK5CYII=",gw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAI4ElEQVR4nO3d0W0UyRqA0fEVAdgZjDMgAyACNoQhAzKADAjBdgSQgU0GZDDOwM6A+3ifbrX4itnusc95LW13T2PpU0n9b13sdrvfOwD4Q/9Z+wEAOE8CAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJG/WfgA4pd+/fw/Xn5+fh+uXl5fD9cfHx+H69fX1cB3OmR0IAImAAJAICACJgACQCAgAiYAAkAgIAIk5EDbt8+fPw/Vv374N1y8uLv7i0/y5pTmUtZ8PZtiBAJAICACJgACQCAgAiYAAkAgIAImAAJBc7Ha78YfqcELmJMa8H7bMDgSAREAASAQEgERAAEgEBIBEQABIBASAxHkgTFmaU1hye3v7dx7klZp9/+ZImGEHAkAiIAAkAgJAIiAAJAICQCIgACQCAkDiPJBX7tRzBLPnWZz7eRiXl5fD9aenp+H62u/34eFhuP7hw4fhOi+bHQgAiYAAkAgIAImAAJAICACJgACQCAgAifNAztx+vx+uH4/H4frW5yhmn+/UcySz11/7/a/9+zlvdiAAJAICQCIgACQCAkAiIAAkAgJAIiAAJOZANm7pO/vD4TBcf+3f4c+ehzF7/Zdu6fcvzSEtzTG99ve7dXYgACQCAkAiIAAkAgJAIiAAJAICQCIgACQXu91u7kN4Tmr2vIW1z2s49f2fnp6G65eXlye9/+yczt3d3Unvv/V/37Wfnzl2IAAkAgJAIiAAJAICQCIgACQCAkAiIAAkzgN54Za+o3/37t1w/eHhYer6s7Y+J3DqOZKtv9+13z/rsgMBIBEQABIBASAREAASAQEgERAAEgEBIDEH8sr9/PlzuD57nsOslz5nsPT79vv91PWPx+PU/WHEDgSAREAASAQEgERAAEgEBIBEQABIBASA5GK32532Q36mbP28iF+/fg3X3759O3X/6+vr4frj4+PU9dd2c3MzXD8cDv/Og/wfa/99mVPZNjsQABIBASAREAASAQEgERAAEgEBIBEQABJzIBs3+538/f39cP39+/dT119y6u/8tz5HcO6/f+n6s3M6W//3Y8wOBIBEQABIBASAREAASAQEgERAAEgEBIDkzdoPwJzX/h390u879XkbV1dXw/Vzf/+nniPhvNmBAJAICACJgACQCAgAiYAAkAgIAImAAJA4D2TjZr+jX3sOYe05lVPPISydd7F0Xsastd/v0nkyS+fRLFn775cxOxAAEgEBIBEQABIBASAREAASAQEgERAAEueBnLlTn9ew9nf4//zzz3D9+/fvw/W1n3/r73fJ7PMvrTsv5LzZgQCQCAgAiYAAkAgIAImAAJAICACJgACQmAN55Za+0z8ej8P1/X4/df9Tzxms7dRzOrP//eFwGK5v/f2yLjsQABIBASAREAASAQEgERAAEgEBIBEQAJKL3W7nf8i/YVs/T2J2TuH29na4/unTp6nrn7tTn5ex9b+ftZ+PMTsQABIBASAREAASAQEgERAAEgEBIBEQABJzIBt36u/kZ+cMlu4/+/znPidweXk5XH96ehqur/1+Tz2nc+7/vq+dHQgAiYAAkAgIAImAAJAICACJgACQCAgAyZu1H4A5p54zWNvS8+33++H68Xicuv6S2TmGtd//2r+f82YHAkAiIAAkAgJAIiAAJAICQCIgACQCAkBiDuTMLc2BvPTv8B8fH4frs+dhLHnp73fJ0u+/v78frj8/P//Fp+HfZgcCQCIgACQCAkAiIAAkAgJAIiAAJAICQGIOZOOc1zC2dN7H0nkhp36/h8NhuH53dzd1/7W99L8vxuxAAEgEBIBEQABIBASAREAASAQEgERAAEjMgbxwS9/hL80p3NzcTF1/1tbnDM59Tmf2/mu/f9ZlBwJAIiAAJAICQCIgACQCAkAiIAAkAgJAcrHb7cYfgsPA0hzBEnMEYx8/fhyu//jxY7j+/Pw8XL+6uvrDJ4L/sQMBIBEQABIBASAREAASAQEgERAAEgEBIDEHwqrWPg9jbV+/fh2uf/nyZbj+0t8P22YHAkAiIAAkAgJAIiAAJAICQCIgACQCAkBiDoSztvU5kq0/H8ywAwEgERAAEgEBIBEQABIBASAREAASAQEgebP2A8CMpTmKm5ub4frhcJi6/9XV1XDdnAcvmR0IAImAAJAICACJgACQCAgAiYAAkAgIAInzQABI7EAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABI/guRImAfV20xTAAAAABJRU5ErkJggg==",mw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAGEUlEQVR4nO3dAYqDQBQFwXHZ+1/ZPYFKWmR2YtUFEpJA88FHtjHGPgDgQz+z3wAAaxIQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEg+Z39Bljbvu9TX3/btqmvv7rZ39/T/D6e5QIBIBEQABIBASAREAASAQEgERAAEgEBILEDYWl3dwx2AtC5QABIBASAREAASAQEgERAAEgEBIBEQABI7EB4tasdiZ0IHHOBAJAICACJgACQCAgAiYAAkAgIAImAAJDYgcAJOxE45gIBIBEQABIBASAREAASAQEgERAAEgEBILEDgRvsRHgzFwgAiYAAkAgIAImAAJAICACJgACQCAgAiR0IPMhOhG/mAgEgERAAEgEBIBEQABIBASAREAASAQEgsQOBiexEWJkLBIBEQABIBASAREAASAQEgERAAEgEBIBkG2OcP4jOLVfP+a/u6Z3Ct39+s9mZcIcLBIBEQABIBASAREAASAQEgERAAEgEBIDE/4Hwr13tFOxEYB4XCACJgACQCAgAiYAAkAgIAImAAJAICACJHQhLsxOBeVwgACQCAkAiIAAkAgJAIiAAJAICQCIgACR2IHw1OxF4jgsEgERAAEgEBIBEQABIBASAREAASAQEgMQOhFezE4HOBQJAIiAAJAICQCIgACQCAkAiIAAkAgJAYgcCJ+xE4JgLBIBEQABIBASAREAASAQEgERAAEgEBIDEDgRuuNqJXLEjYWUuEAASAQEgERAAEgEBIBEQABIBASAREACSbYzhQXQAPuYCASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIBEQABIBASAREAASAQEgERAAEgEBIPkD1e82Nb8PNfsAAAAASUVORK5CYII=",vw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADoCAYAAACXZsrOAAAGJElEQVR4nO3dvUvVfx/H8U+eK2+o4YgIQjcYgkMQcTWI3YFSQxRJCkFDN+DcEjS0+aupoKL+BCGCmorCWqImoyFqkRzKDEwMSqnAKKLfNVz7+yv0hsLzeKzPc45W59V3+PA9pxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBvt+ZP/wKNYmFh4d+or1kT/1P8/Pkz7C0tLWFva2ubjfq6deu2hC/AijT96V8AVhODgkQGBYkMChIZFCQyKEhkUJDIOdQKvH379m3VY16/ft0d9Q0bNoTP7+rqCvvy8nLY379/H/bp6emwLy4uhr2UUs6cOeP9UsEVChIZFCQyKEhkUJDIoCCRQUEig4JEzhVKKc+fP/+te5VKKWVubi7sMzMzYe/o6Ah7f39/2KempsLe3d0d9u/fv4e9lFLm5+f/G/Xh4eGXlS+yyrlCQSKDgkQGBYkMChIZFCQyKEhkUJDIOVQpZXx8PDyH+vDhQ+VrDA0Nhf3w4cNhv379etgvXLgQ9rGxsbBPTk6G/fbt22EvpZTm5uawnzp1Kuxnz55d9e83VyhIZFCQyKAgkUFBIoOCRAYFiQwKEv3nT/8Cf4MXL16E/evXr5Wvcffu3bAPDAyE/dKlS2Gv+mjAZ8+ehf3KlSth//XrV9hLKaWpKf7/t6o3An8DkMigIJFBQSKDgkQGBYkMChIZFCRqiHOo+/fvh/c7nTt3Lnz+x48fK3/GkydPwr5r166wv3z5MuzXrl0L+/DwcNj37dsX9vb29rCXUsrs7GzYV/A1WqueKxQkMihIZFCQyKAgkUFBIoOCRAYFiVb956SVUsrBgwfDc6j169eHz3/48GHlz6h6jR8/foS96n6mEydOhP3kyZNhv3HjRtivXr0a9lKqz6r6+vrCvrS0tOrfb65QkMigIJFBQSKDgkQGBYkMChIZFCRqiPuhpqamwj46Ohr2iYmJyp9Rr9fD/uDBg7C3tbWF/c6dO2F/+vRp2Ks+d69Wq4W9lFJOnz4d9kY4Z6riCgWJDAoSGRQkMihIZFCQyKAgkUFBooY/NyillHq9Ht4vdeTIkcrXqPrMuoWFhbA3NzeHvbW1Nezfvn0L+/79+8O+ks8ePHbsWNgPHTrU8O8nVyhIZFCQyKAgkUFBIoOCRAYFiQwKEjX8uUEppTx+/Lg76jMzM5VffPT58+ewDw4Ohr2zszPsa9euDfujR4/C3t/fH/aqc65SSmlra3sS9fb29vgP2QBcoSCRQUEig4JEBgWJDAoSGRQkMihI5ByqlLJ169bwfqiqe5VKKWXPnj1hP3/+fNiXl5fDfvny5bAPDw+Hfdu2bWF/8+ZN2Esppa+vz/ulgisUJDIoSGRQkMigIJFBQSKDgkQGBYka4vuhqvT19YX91q1bla+xd+/esI+Pj4d9YGAg7CMjI2Gvut/q5s2bYV/J90NRzRUKEhkUJDIoSGRQkMigIJFBQSKDgkTub1mBnp6e8H6pUkppaWkJ+4EDB8K+Y8eOsC8tLYV9YmIi7Bs3bvytXkopY2Nj3i8VXKEgkUFBIoOCRAYFiQwKEhkUJDIoSORcIUmtVgvPqjZv3hw+f/fu3WG/ePFi2Ov1etjn5+fD3tvb672QwBUKEhkUJDIoSGRQkMigIJFBQSKDgkQ+ly/J0NBQ2O/duxf2ycnJsPf09IR9+/btYa+63+rTp0//hA8opXR0dFQ+ptG5QkEig4JEBgWJDAoSGRQkMihIZFCQyDlUkvb29rBXfX9T1efuvXv3LuxNTfH/jYuLi2Gfnp4eCx/wf/+s4DENzRUKEhkUJDIoSGRQkMigIJFBQSKDgkTOoZJs2bIl7J2dnWH/8uVL2Gu1WthHR0fDPjc3F/aqcyxWxt8iJDIoSGRQkMigIJFBQSKDgkQGBYmcQyVpbW0N+6tXr8K+adOmsB8/fjzsvb29v/X6O3fu9P1QCVyhIJFBQSKDgkQGBYkMChIZFCQyKEjk7OEvMTIy8m/Ujx49Gj6/q6trNuqDg4PxDVukcIWCRAYFiQwKEhkUJDIoSGRQkMigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaCj/A1pWAe9KY6YRAAAAAElFTkSuQmCC",yw="/assets/status_pixelated-CSSvYhUQ.png",Ew="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRYhe3WP2gUURDH8U8uYiIqFhZJ4R/EIqCVIFqktTFYp/BvoYggWmsVEMRCsLOyVMHKYCEGAmqnhWU6tdQU8Q8SiIrJncXbw7nLendhd+9A/MHydmbnvfmy783w+K/iGsFFzGMR3/EejzDZL4hDWECjw3M/g61Mh/EtJ/GPHN8LbK4CYhTvQqJFnMP27Ps+3MZqiLlVBcilkOAD9vwlbhr1LG4FO8sGeR5ATneJnQ2xZ8sG+ZItvIYtXWLPBJA7vSao9Ri3LRtXpHLtpE8580oDWcrGrRjvEjsR3pfLBnmVjUO40CFuGOeD/aZXkF41pbVvHMuJqeFuiPss/cHSNR+S/MI9HMcRqTpea21ql6uAgDG8tb6L5j0PpG2sTON42gHgJ25IZ6UvmtTauBq4ib39Aog60AZSaCt6Ld88lXoGNhWY22izh4JvDFfC+i8xVyBXRx2UvzWjUgNs+hewoyqIPJBaBvMw+D5id5UQrD+sw5gJ9rJ0taxc7SAn/bkUreJEPyDyQOrh/dpGFyuzfKN9tMC6G1b7Ya1LN7imPT0okBlcD/aS1E/6DjIiVU7sIY8HAdI8I/ul0m36Tw0KBK4G/1fsqhJkIiRb01qBNTwL359UCfJv6jczbrT2zBDRrAAAAABJRU5ErkJggg==",ww="/assets/sn_pixelated-Di7anO90.png",xw=[{label:"Logos",img:pw,link:"https://logos.co/"},{label:"Waku",img:hw,link:"https://waku.org/"},{label:"Codex",img:gw,link:"https://codex.storage/"},{label:"Nomos",img:vw,link:"https://nomos.tech/"},{label:"Nimbus",img:mw,link:"https://nimbus.team/"}],_w=[{label:"Status",img:yw,link:"https://status.app/"},{label:"SN",img:ww,link:"https://status.network/"},{label:"Keycard",img:Ew,link:"https://keycard.tech/"}],kw=()=>{const e=()=>[...xw,..._w].map(n=>B.jsxs(Iw,{id:n.label,href:n.link,rel:"noopener noreferrer",target:"_blank",children:[B.jsx("img",{src:n.img,alt:n.label,width:32,height:32}),B.jsx("p",{children:n.label})]}));return B.jsx(Sw,{children:e()})},Sw=I.div`
  max-width: 400px;
  max-height: 30px;
  display: flex;
  flex-wrap: wrap;
`,Iw=I.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: pointer;
  color: white;
`;var Eh={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var s=this||n;return s._counter=1e3,s._html5AudioPool=[],s.html5PoolSize=10,s._codecs={},s._howls=[],s._muted=!1,s._volume=1,s._canPlayEvent="canplaythrough",s._navigator=typeof window<"u"&&window.navigator?window.navigator:null,s.masterGain=null,s.noAudio=!1,s.usingWebAudio=!0,s.autoSuspend=!0,s.ctx=null,s.autoUnlock=!0,s._setup(),s},volume:function(s){var a=this||n;if(s=parseFloat(s),a.ctx||h(),typeof s<"u"&&s>=0&&s<=1){if(a._volume=s,a._muted)return a;a.usingWebAudio&&a.masterGain.gain.setValueAtTime(s,n.ctx.currentTime);for(var d=0;d<a._howls.length;d++)if(!a._howls[d]._webAudio)for(var g=a._howls[d]._getSoundIds(),v=0;v<g.length;v++){var y=a._howls[d]._soundById(g[v]);y&&y._node&&(y._node.volume=y._volume*s)}return a}return a._volume},mute:function(s){var a=this||n;a.ctx||h(),a._muted=s,a.usingWebAudio&&a.masterGain.gain.setValueAtTime(s?0:a._volume,n.ctx.currentTime);for(var d=0;d<a._howls.length;d++)if(!a._howls[d]._webAudio)for(var g=a._howls[d]._getSoundIds(),v=0;v<g.length;v++){var y=a._howls[d]._soundById(g[v]);y&&y._node&&(y._node.muted=s?!0:y._muted)}return a},stop:function(){for(var s=this||n,a=0;a<s._howls.length;a++)s._howls[a].stop();return s},unload:function(){for(var s=this||n,a=s._howls.length-1;a>=0;a--)s._howls[a].unload();return s.usingWebAudio&&s.ctx&&typeof s.ctx.close<"u"&&(s.ctx.close(),s.ctx=null,h()),s},codecs:function(s){return(this||n)._codecs[s.replace(/^x-/,"")]},_setup:function(){var s=this||n;if(s.state=s.ctx&&s.ctx.state||"suspended",s._autoSuspend(),!s.usingWebAudio)if(typeof Audio<"u")try{var a=new Audio;typeof a.oncanplaythrough>"u"&&(s._canPlayEvent="canplay")}catch{s.noAudio=!0}else s.noAudio=!0;try{var a=new Audio;a.muted&&(s.noAudio=!0)}catch{}return s.noAudio||s._setupCodecs(),s},_setupCodecs:function(){var s=this||n,a=null;try{a=typeof Audio<"u"?new Audio:null}catch{return s}if(!a||typeof a.canPlayType!="function")return s;var d=a.canPlayType("audio/mpeg;").replace(/^no$/,""),g=s._navigator?s._navigator.userAgent:"",v=g.match(/OPR\/(\d+)/g),y=v&&parseInt(v[0].split("/")[1],10)<33,A=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,p=g.match(/Version\/(.*?) /),m=A&&p&&parseInt(p[1],10)<15;return s._codecs={mp3:!!(!y&&(d||a.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(a.canPlayType('audio/wav; codecs="1"')||a.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!a.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!a.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(a.canPlayType("audio/x-m4b;")||a.canPlayType("audio/m4b;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(a.canPlayType("audio/x-mp4;")||a.canPlayType("audio/mp4;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!m&&a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!m&&a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(a.canPlayType("audio/x-flac;")||a.canPlayType("audio/flac;")).replace(/^no$/,"")},s},_unlockAudio:function(){var s=this||n;if(!(s._audioUnlocked||!s.ctx)){s._audioUnlocked=!1,s.autoUnlock=!1,!s._mobileUnloaded&&s.ctx.sampleRate!==44100&&(s._mobileUnloaded=!0,s.unload()),s._scratchBuffer=s.ctx.createBuffer(1,1,22050);var a=function(d){for(;s._html5AudioPool.length<s.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,s._releaseHtml5Audio(g)}catch{s.noAudio=!0;break}for(var v=0;v<s._howls.length;v++)if(!s._howls[v]._webAudio)for(var y=s._howls[v]._getSoundIds(),A=0;A<y.length;A++){var p=s._howls[v]._soundById(y[A]);p&&p._node&&!p._node._unlocked&&(p._node._unlocked=!0,p._node.load())}s._autoResume();var m=s.ctx.createBufferSource();m.buffer=s._scratchBuffer,m.connect(s.ctx.destination),typeof m.start>"u"?m.noteOn(0):m.start(0),typeof s.ctx.resume=="function"&&s.ctx.resume(),m.onended=function(){m.disconnect(0),s._audioUnlocked=!0,document.removeEventListener("touchstart",a,!0),document.removeEventListener("touchend",a,!0),document.removeEventListener("click",a,!0),document.removeEventListener("keydown",a,!0);for(var E=0;E<s._howls.length;E++)s._howls[E]._emit("unlock")}};return document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",a,!0),document.addEventListener("click",a,!0),document.addEventListener("keydown",a,!0),s}},_obtainHtml5Audio:function(){var s=this||n;if(s._html5AudioPool.length)return s._html5AudioPool.pop();var a=new Audio().play();return a&&typeof Promise<"u"&&(a instanceof Promise||typeof a.then=="function")&&a.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(s){var a=this||n;return s._unlocked&&a._html5AudioPool.push(s),a},_autoSuspend:function(){var s=this;if(!(!s.autoSuspend||!s.ctx||typeof s.ctx.suspend>"u"||!n.usingWebAudio)){for(var a=0;a<s._howls.length;a++)if(s._howls[a]._webAudio){for(var d=0;d<s._howls[a]._sounds.length;d++)if(!s._howls[a]._sounds[d]._paused)return s}return s._suspendTimer&&clearTimeout(s._suspendTimer),s._suspendTimer=setTimeout(function(){if(s.autoSuspend){s._suspendTimer=null,s.state="suspending";var g=function(){s.state="suspended",s._resumeAfterSuspend&&(delete s._resumeAfterSuspend,s._autoResume())};s.ctx.suspend().then(g,g)}},3e4),s}},_autoResume:function(){var s=this;if(!(!s.ctx||typeof s.ctx.resume>"u"||!n.usingWebAudio))return s.state==="running"&&s.ctx.state!=="interrupted"&&s._suspendTimer?(clearTimeout(s._suspendTimer),s._suspendTimer=null):s.state==="suspended"||s.state==="running"&&s.ctx.state==="interrupted"?(s.ctx.resume().then(function(){s.state="running";for(var a=0;a<s._howls.length;a++)s._howls[a]._emit("resume")}),s._suspendTimer&&(clearTimeout(s._suspendTimer),s._suspendTimer=null)):s.state==="suspending"&&(s._resumeAfterSuspend=!0),s}};var n=new t,r=function(s){var a=this;if(!s.src||s.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}a.init(s)};r.prototype={init:function(s){var a=this;return n.ctx||h(),a._autoplay=s.autoplay||!1,a._format=typeof s.format!="string"?s.format:[s.format],a._html5=s.html5||!1,a._muted=s.mute||!1,a._loop=s.loop||!1,a._pool=s.pool||5,a._preload=typeof s.preload=="boolean"||s.preload==="metadata"?s.preload:!0,a._rate=s.rate||1,a._sprite=s.sprite||{},a._src=typeof s.src!="string"?s.src:[s.src],a._volume=s.volume!==void 0?s.volume:1,a._xhr={method:s.xhr&&s.xhr.method?s.xhr.method:"GET",headers:s.xhr&&s.xhr.headers?s.xhr.headers:null,withCredentials:s.xhr&&s.xhr.withCredentials?s.xhr.withCredentials:!1},a._duration=0,a._state="unloaded",a._sounds=[],a._endTimers={},a._queue=[],a._playLock=!1,a._onend=s.onend?[{fn:s.onend}]:[],a._onfade=s.onfade?[{fn:s.onfade}]:[],a._onload=s.onload?[{fn:s.onload}]:[],a._onloaderror=s.onloaderror?[{fn:s.onloaderror}]:[],a._onplayerror=s.onplayerror?[{fn:s.onplayerror}]:[],a._onpause=s.onpause?[{fn:s.onpause}]:[],a._onplay=s.onplay?[{fn:s.onplay}]:[],a._onstop=s.onstop?[{fn:s.onstop}]:[],a._onmute=s.onmute?[{fn:s.onmute}]:[],a._onvolume=s.onvolume?[{fn:s.onvolume}]:[],a._onrate=s.onrate?[{fn:s.onrate}]:[],a._onseek=s.onseek?[{fn:s.onseek}]:[],a._onunlock=s.onunlock?[{fn:s.onunlock}]:[],a._onresume=[],a._webAudio=n.usingWebAudio&&!a._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(a),a._autoplay&&a._queue.push({event:"play",action:function(){a.play()}}),a._preload&&a._preload!=="none"&&a.load(),a},load:function(){var s=this,a=null;if(n.noAudio){s._emit("loaderror",null,"No audio support.");return}typeof s._src=="string"&&(s._src=[s._src]);for(var d=0;d<s._src.length;d++){var g,v;if(s._format&&s._format[d])g=s._format[d];else{if(v=s._src[d],typeof v!="string"){s._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(v),g||(g=/\.([^.]+)$/.exec(v.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){a=s._src[d];break}}if(!a){s._emit("loaderror",null,"No codec support for selected audio sources.");return}return s._src=a,s._state="loading",window.location.protocol==="https:"&&a.slice(0,5)==="http:"&&(s._html5=!0,s._webAudio=!1),new i(s),s._webAudio&&l(s),s},play:function(s,a){var d=this,g=null;if(typeof s=="number")g=s,s=null;else{if(typeof s=="string"&&d._state==="loaded"&&!d._sprite[s])return null;if(typeof s>"u"&&(s="__default",!d._playLock)){for(var v=0,y=0;y<d._sounds.length;y++)d._sounds[y]._paused&&!d._sounds[y]._ended&&(v++,g=d._sounds[y]._id);v===1?s=null:g=null}}var A=g?d._soundById(g):d._inactiveSound();if(!A)return null;if(g&&!s&&(s=A._sprite||"__default"),d._state!=="loaded"){A._sprite=s,A._ended=!1;var p=A._id;return d._queue.push({event:"play",action:function(){d.play(p)}}),p}if(g&&!A._paused)return a||d._loadQueue("play"),A._id;d._webAudio&&n._autoResume();var m=Math.max(0,A._seek>0?A._seek:d._sprite[s][0]/1e3),E=Math.max(0,(d._sprite[s][0]+d._sprite[s][1])/1e3-m),_=E*1e3/Math.abs(A._rate),k=d._sprite[s][0]/1e3,S=(d._sprite[s][0]+d._sprite[s][1])/1e3;A._sprite=s,A._ended=!1;var R=function(){A._paused=!1,A._seek=m,A._start=k,A._stop=S,A._loop=!!(A._loop||d._sprite[s][2])};if(m>=S){d._ended(A);return}var P=A._node;if(d._webAudio){var L=function(){d._playLock=!1,R(),d._refreshBuffer(A);var V=A._muted||d._muted?0:A._volume;P.gain.setValueAtTime(V,n.ctx.currentTime),A._playStart=n.ctx.currentTime,typeof P.bufferSource.start>"u"?A._loop?P.bufferSource.noteGrainOn(0,m,86400):P.bufferSource.noteGrainOn(0,m,E):A._loop?P.bufferSource.start(0,m,86400):P.bufferSource.start(0,m,E),_!==1/0&&(d._endTimers[A._id]=setTimeout(d._ended.bind(d,A),_)),a||setTimeout(function(){d._emit("play",A._id),d._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?L():(d._playLock=!0,d.once("resume",L),d._clearTimer(A._id))}else{var U=function(){P.currentTime=m,P.muted=A._muted||d._muted||n._muted||P.muted,P.volume=A._volume*n.volume(),P.playbackRate=A._rate;try{var V=P.play();if(V&&typeof Promise<"u"&&(V instanceof Promise||typeof V.then=="function")?(d._playLock=!0,R(),V.then(function(){d._playLock=!1,P._unlocked=!0,a?d._loadQueue():d._emit("play",A._id)}).catch(function(){d._playLock=!1,d._emit("playerror",A._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),A._ended=!0,A._paused=!0})):a||(d._playLock=!1,R(),d._emit("play",A._id)),P.playbackRate=A._rate,P.paused){d._emit("playerror",A._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}s!=="__default"||A._loop?d._endTimers[A._id]=setTimeout(d._ended.bind(d,A),_):(d._endTimers[A._id]=function(){d._ended(A),P.removeEventListener("ended",d._endTimers[A._id],!1)},P.addEventListener("ended",d._endTimers[A._id],!1))}catch(K){d._emit("playerror",A._id,K)}};P.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(P.src=d._src,P.load());var H=window&&window.ejecta||!P.readyState&&n._navigator.isCocoonJS;if(P.readyState>=3||H)U();else{d._playLock=!0,d._state="loading";var J=function(){d._state="loaded",U(),P.removeEventListener(n._canPlayEvent,J,!1)};P.addEventListener(n._canPlayEvent,J,!1),d._clearTimer(A._id)}}return A._id},pause:function(s){var a=this;if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"pause",action:function(){a.pause(s)}}),a;for(var d=a._getSoundIds(s),g=0;g<d.length;g++){a._clearTimer(d[g]);var v=a._soundById(d[g]);if(v&&!v._paused&&(v._seek=a.seek(d[g]),v._rateSeek=0,v._paused=!0,a._stopFade(d[g]),v._node))if(a._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),a._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===1/0)&&v._node.pause();arguments[1]||a._emit("pause",v?v._id:null)}return a},stop:function(s,a){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(s)}}),d;for(var g=d._getSoundIds(s),v=0;v<g.length;v++){d._clearTimer(g[v]);var y=d._soundById(g[v]);y&&(y._seek=y._start||0,y._rateSeek=0,y._paused=!0,y._ended=!0,d._stopFade(g[v]),y._node&&(d._webAudio?y._node.bufferSource&&(typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),d._cleanBuffer(y._node)):(!isNaN(y._node.duration)||y._node.duration===1/0)&&(y._node.currentTime=y._start||0,y._node.pause(),y._node.duration===1/0&&d._clearSound(y._node))),a||d._emit("stop",y._id))}return d},mute:function(s,a){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(s,a)}}),d;if(typeof a>"u")if(typeof s=="boolean")d._muted=s;else return d._muted;for(var g=d._getSoundIds(a),v=0;v<g.length;v++){var y=d._soundById(g[v]);y&&(y._muted=s,y._interval&&d._stopFade(y._id),d._webAudio&&y._node?y._node.gain.setValueAtTime(s?0:y._volume,n.ctx.currentTime):y._node&&(y._node.muted=n._muted?!0:s),d._emit("mute",y._id))}return d},volume:function(){var s=this,a=arguments,d,g;if(a.length===0)return s._volume;if(a.length===1||a.length===2&&typeof a[1]>"u"){var v=s._getSoundIds(),y=v.indexOf(a[0]);y>=0?g=parseInt(a[0],10):d=parseFloat(a[0])}else a.length>=2&&(d=parseFloat(a[0]),g=parseInt(a[1],10));var A;if(typeof d<"u"&&d>=0&&d<=1){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"volume",action:function(){s.volume.apply(s,a)}}),s;typeof g>"u"&&(s._volume=d),g=s._getSoundIds(g);for(var p=0;p<g.length;p++)A=s._soundById(g[p]),A&&(A._volume=d,a[2]||s._stopFade(g[p]),s._webAudio&&A._node&&!A._muted?A._node.gain.setValueAtTime(d,n.ctx.currentTime):A._node&&!A._muted&&(A._node.volume=d*n.volume()),s._emit("volume",A._id))}else return A=g?s._soundById(g):s._sounds[0],A?A._volume:0;return s},fade:function(s,a,d,g){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(s,a,d,g)}}),v;s=Math.min(Math.max(0,parseFloat(s)),1),a=Math.min(Math.max(0,parseFloat(a)),1),d=parseFloat(d),v.volume(s,g);for(var y=v._getSoundIds(g),A=0;A<y.length;A++){var p=v._soundById(y[A]);if(p){if(g||v._stopFade(y[A]),v._webAudio&&!p._muted){var m=n.ctx.currentTime,E=m+d/1e3;p._volume=s,p._node.gain.setValueAtTime(s,m),p._node.gain.linearRampToValueAtTime(a,E)}v._startFadeInterval(p,s,a,d,y[A],typeof g>"u")}}return v},_startFadeInterval:function(s,a,d,g,v,y){var A=this,p=a,m=d-a,E=Math.abs(m/.01),_=Math.max(4,E>0?g/E:g),k=Date.now();s._fadeTo=d,s._interval=setInterval(function(){var S=(Date.now()-k)/g;k=Date.now(),p+=m*S,p=Math.round(p*100)/100,m<0?p=Math.max(d,p):p=Math.min(d,p),A._webAudio?s._volume=p:A.volume(p,s._id,!0),y&&(A._volume=p),(d<a&&p<=d||d>a&&p>=d)&&(clearInterval(s._interval),s._interval=null,s._fadeTo=null,A.volume(d,s._id),A._emit("fade",s._id))},_)},_stopFade:function(s){var a=this,d=a._soundById(s);return d&&d._interval&&(a._webAudio&&d._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(d._interval),d._interval=null,a.volume(d._fadeTo,s),d._fadeTo=null,a._emit("fade",s)),a},loop:function(){var s=this,a=arguments,d,g,v;if(a.length===0)return s._loop;if(a.length===1)if(typeof a[0]=="boolean")d=a[0],s._loop=d;else return v=s._soundById(parseInt(a[0],10)),v?v._loop:!1;else a.length===2&&(d=a[0],g=parseInt(a[1],10));for(var y=s._getSoundIds(g),A=0;A<y.length;A++)v=s._soundById(y[A]),v&&(v._loop=d,s._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=d,d&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop,s.playing(y[A])&&(s.pause(y[A],!0),s.play(y[A],!0)))));return s},rate:function(){var s=this,a=arguments,d,g;if(a.length===0)g=s._sounds[0]._id;else if(a.length===1){var v=s._getSoundIds(),y=v.indexOf(a[0]);y>=0?g=parseInt(a[0],10):d=parseFloat(a[0])}else a.length===2&&(d=parseFloat(a[0]),g=parseInt(a[1],10));var A;if(typeof d=="number"){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"rate",action:function(){s.rate.apply(s,a)}}),s;typeof g>"u"&&(s._rate=d),g=s._getSoundIds(g);for(var p=0;p<g.length;p++)if(A=s._soundById(g[p]),A){s.playing(g[p])&&(A._rateSeek=s.seek(g[p]),A._playStart=s._webAudio?n.ctx.currentTime:A._playStart),A._rate=d,s._webAudio&&A._node&&A._node.bufferSource?A._node.bufferSource.playbackRate.setValueAtTime(d,n.ctx.currentTime):A._node&&(A._node.playbackRate=d);var m=s.seek(g[p]),E=(s._sprite[A._sprite][0]+s._sprite[A._sprite][1])/1e3-m,_=E*1e3/Math.abs(A._rate);(s._endTimers[g[p]]||!A._paused)&&(s._clearTimer(g[p]),s._endTimers[g[p]]=setTimeout(s._ended.bind(s,A),_)),s._emit("rate",A._id)}}else return A=s._soundById(g),A?A._rate:s._rate;return s},seek:function(){var s=this,a=arguments,d,g;if(a.length===0)s._sounds.length&&(g=s._sounds[0]._id);else if(a.length===1){var v=s._getSoundIds(),y=v.indexOf(a[0]);y>=0?g=parseInt(a[0],10):s._sounds.length&&(g=s._sounds[0]._id,d=parseFloat(a[0]))}else a.length===2&&(d=parseFloat(a[0]),g=parseInt(a[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(s._state!=="loaded"||s._playLock))return s._queue.push({event:"seek",action:function(){s.seek.apply(s,a)}}),s;var A=s._soundById(g);if(A)if(typeof d=="number"&&d>=0){var p=s.playing(g);p&&s.pause(g,!0),A._seek=d,A._ended=!1,s._clearTimer(g),!s._webAudio&&A._node&&!isNaN(A._node.duration)&&(A._node.currentTime=d);var m=function(){p&&s.play(g,!0),s._emit("seek",g)};if(p&&!s._webAudio){var E=function(){s._playLock?setTimeout(E,0):m()};setTimeout(E,0)}else m()}else if(s._webAudio){var _=s.playing(g)?n.ctx.currentTime-A._playStart:0,k=A._rateSeek?A._rateSeek-A._seek:0;return A._seek+(k+_*Math.abs(A._rate))}else return A._node.currentTime;return s},playing:function(s){var a=this;if(typeof s=="number"){var d=a._soundById(s);return d?!d._paused:!1}for(var g=0;g<a._sounds.length;g++)if(!a._sounds[g]._paused)return!0;return!1},duration:function(s){var a=this,d=a._duration,g=a._soundById(s);return g&&(d=a._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var s=this,a=s._sounds,d=0;d<a.length;d++)a[d]._paused||s.stop(a[d]._id),s._webAudio||(s._clearSound(a[d]._node),a[d]._node.removeEventListener("error",a[d]._errorFn,!1),a[d]._node.removeEventListener(n._canPlayEvent,a[d]._loadFn,!1),a[d]._node.removeEventListener("ended",a[d]._endFn,!1),n._releaseHtml5Audio(a[d]._node)),delete a[d]._node,s._clearTimer(a[d]._id);var g=n._howls.indexOf(s);g>=0&&n._howls.splice(g,1);var v=!0;for(d=0;d<n._howls.length;d++)if(n._howls[d]._src===s._src||s._src.indexOf(n._howls[d]._src)>=0){v=!1;break}return o&&v&&delete o[s._src],n.noAudio=!1,s._state="unloaded",s._sounds=[],s=null,null},on:function(s,a,d,g){var v=this,y=v["_on"+s];return typeof a=="function"&&y.push(g?{id:d,fn:a,once:g}:{id:d,fn:a}),v},off:function(s,a,d){var g=this,v=g["_on"+s],y=0;if(typeof a=="number"&&(d=a,a=null),a||d)for(y=0;y<v.length;y++){var A=d===v[y].id;if(a===v[y].fn&&A||!a&&A){v.splice(y,1);break}}else if(s)g["_on"+s]=[];else{var p=Object.keys(g);for(y=0;y<p.length;y++)p[y].indexOf("_on")===0&&Array.isArray(g[p[y]])&&(g[p[y]]=[])}return g},once:function(s,a,d){var g=this;return g.on(s,a,d,1),g},_emit:function(s,a,d){for(var g=this,v=g["_on"+s],y=v.length-1;y>=0;y--)(!v[y].id||v[y].id===a||s==="load")&&(setTimeout((function(A){A.call(this,a,d)}).bind(g,v[y].fn),0),v[y].once&&g.off(s,v[y].fn,v[y].id));return g._loadQueue(s),g},_loadQueue:function(s){var a=this;if(a._queue.length>0){var d=a._queue[0];d.event===s&&(a._queue.shift(),a._loadQueue()),s||d.action()}return a},_ended:function(s){var a=this,d=s._sprite;if(!a._webAudio&&s._node&&!s._node.paused&&!s._node.ended&&s._node.currentTime<s._stop)return setTimeout(a._ended.bind(a,s),100),a;var g=!!(s._loop||a._sprite[d][2]);if(a._emit("end",s._id),!a._webAudio&&g&&a.stop(s._id,!0).play(s._id),a._webAudio&&g){a._emit("play",s._id),s._seek=s._start||0,s._rateSeek=0,s._playStart=n.ctx.currentTime;var v=(s._stop-s._start)*1e3/Math.abs(s._rate);a._endTimers[s._id]=setTimeout(a._ended.bind(a,s),v)}return a._webAudio&&!g&&(s._paused=!0,s._ended=!0,s._seek=s._start||0,s._rateSeek=0,a._clearTimer(s._id),a._cleanBuffer(s._node),n._autoSuspend()),!a._webAudio&&!g&&a.stop(s._id,!0),a},_clearTimer:function(s){var a=this;if(a._endTimers[s]){if(typeof a._endTimers[s]!="function")clearTimeout(a._endTimers[s]);else{var d=a._soundById(s);d&&d._node&&d._node.removeEventListener("ended",a._endTimers[s],!1)}delete a._endTimers[s]}return a},_soundById:function(s){for(var a=this,d=0;d<a._sounds.length;d++)if(s===a._sounds[d]._id)return a._sounds[d];return null},_inactiveSound:function(){var s=this;s._drain();for(var a=0;a<s._sounds.length;a++)if(s._sounds[a]._ended)return s._sounds[a].reset();return new i(s)},_drain:function(){var s=this,a=s._pool,d=0,g=0;if(!(s._sounds.length<a)){for(g=0;g<s._sounds.length;g++)s._sounds[g]._ended&&d++;for(g=s._sounds.length-1;g>=0;g--){if(d<=a)return;s._sounds[g]._ended&&(s._webAudio&&s._sounds[g]._node&&s._sounds[g]._node.disconnect(0),s._sounds.splice(g,1),d--)}}},_getSoundIds:function(s){var a=this;if(typeof s>"u"){for(var d=[],g=0;g<a._sounds.length;g++)d.push(a._sounds[g]._id);return d}else return[s]},_refreshBuffer:function(s){var a=this;return s._node.bufferSource=n.ctx.createBufferSource(),s._node.bufferSource.buffer=o[a._src],s._panner?s._node.bufferSource.connect(s._panner):s._node.bufferSource.connect(s._node),s._node.bufferSource.loop=s._loop,s._loop&&(s._node.bufferSource.loopStart=s._start||0,s._node.bufferSource.loopEnd=s._stop||0),s._node.bufferSource.playbackRate.setValueAtTime(s._rate,n.ctx.currentTime),a},_cleanBuffer:function(s){var a=this,d=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!s.bufferSource)return a;if(n._scratchBuffer&&s.bufferSource&&(s.bufferSource.onended=null,s.bufferSource.disconnect(0),d))try{s.bufferSource.buffer=n._scratchBuffer}catch{}return s.bufferSource=null,a},_clearSound:function(s){var a=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);a||(s.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(s){this._parent=s,this.init()};i.prototype={init:function(){var s=this,a=s._parent;return s._muted=a._muted,s._loop=a._loop,s._volume=a._volume,s._rate=a._rate,s._seek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++n._counter,a._sounds.push(s),s.create(),s},create:function(){var s=this,a=s._parent,d=n._muted||s._muted||s._parent._muted?0:s._volume;return a._webAudio?(s._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),s._node.gain.setValueAtTime(d,n.ctx.currentTime),s._node.paused=!0,s._node.connect(n.masterGain)):n.noAudio||(s._node=n._obtainHtml5Audio(),s._errorFn=s._errorListener.bind(s),s._node.addEventListener("error",s._errorFn,!1),s._loadFn=s._loadListener.bind(s),s._node.addEventListener(n._canPlayEvent,s._loadFn,!1),s._endFn=s._endListener.bind(s),s._node.addEventListener("ended",s._endFn,!1),s._node.src=a._src,s._node.preload=a._preload===!0?"auto":a._preload,s._node.volume=d*n.volume(),s._node.load()),s},reset:function(){var s=this,a=s._parent;return s._muted=a._muted,s._loop=a._loop,s._volume=a._volume,s._rate=a._rate,s._seek=0,s._rateSeek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++n._counter,s},_errorListener:function(){var s=this;s._parent._emit("loaderror",s._id,s._node.error?s._node.error.code:0),s._node.removeEventListener("error",s._errorFn,!1)},_loadListener:function(){var s=this,a=s._parent;a._duration=Math.ceil(s._node.duration*10)/10,Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue()),s._node.removeEventListener(n._canPlayEvent,s._loadFn,!1)},_endListener:function(){var s=this,a=s._parent;a._duration===1/0&&(a._duration=Math.ceil(s._node.duration*10)/10,a._sprite.__default[1]===1/0&&(a._sprite.__default[1]=a._duration*1e3),a._ended(s)),s._node.removeEventListener("ended",s._endFn,!1)}};var o={},l=function(s){var a=s._src;if(o[a]){s._duration=o[a].duration,f(s);return}if(/^data:[^;]+;base64,/.test(a)){for(var d=atob(a.split(",")[1]),g=new Uint8Array(d.length),v=0;v<d.length;++v)g[v]=d.charCodeAt(v);c(g.buffer,s)}else{var y=new XMLHttpRequest;y.open(s._xhr.method,a,!0),y.withCredentials=s._xhr.withCredentials,y.responseType="arraybuffer",s._xhr.headers&&Object.keys(s._xhr.headers).forEach(function(A){y.setRequestHeader(A,s._xhr.headers[A])}),y.onload=function(){var A=(y.status+"")[0];if(A!=="0"&&A!=="2"&&A!=="3"){s._emit("loaderror",null,"Failed loading audio file with status: "+y.status+".");return}c(y.response,s)},y.onerror=function(){s._webAudio&&(s._html5=!0,s._webAudio=!1,s._sounds=[],delete o[a],s.load())},u(y)}},u=function(s){try{s.send()}catch{s.onerror()}},c=function(s,a){var d=function(){a._emit("loaderror",null,"Decoding audio data failed.")},g=function(v){v&&a._sounds.length>0?(o[a._src]=v,f(a,v)):d()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(s).then(g).catch(d):n.ctx.decodeAudioData(s,g,d)},f=function(s,a){a&&!s._duration&&(s._duration=a.duration),Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue())},h=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var s=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),a=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=a?parseInt(a[1],10):null;if(s&&d&&d<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof ir<"u"?(ir.HowlerGlobal=t,ir.Howler=n,ir.Howl=r,ir.Sound=i):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,i){var o=this;if(!o.ctx||!o.ctx.listener)return o;if(r=typeof r!="number"?o._pos[1]:r,i=typeof i!="number"?o._pos[2]:i,typeof n=="number")o._pos=[n,r,i],typeof o.ctx.listener.positionX<"u"?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]);else return o._pos;return o},HowlerGlobal.prototype.orientation=function(n,r,i,o,l,u){var c=this;if(!c.ctx||!c.ctx.listener)return c;var f=c._orientation;if(r=typeof r!="number"?f[1]:r,i=typeof i!="number"?f[2]:i,o=typeof o!="number"?f[3]:o,l=typeof l!="number"?f[4]:l,u=typeof u!="number"?f[5]:u,typeof n=="number")c._orientation=[n,r,i,o,l,u],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(l,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(n,r,i,o,l,u);else return f;return c},Howl.prototype.init=function(n){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(n,r)}}),i;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")i._stereo=n,i._pos=[n,0,0];else return i._stereo;for(var l=i._getSoundIds(r),u=0;u<l.length;u++){var c=i._soundById(l[u]);if(c)if(typeof n=="number")c._stereo=n,c._pos=[n,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&t(c,o),o==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(n,0,0):c._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(n,r,i,o){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"pos",action:function(){l.pos(n,r,i,o)}}),l;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof o>"u")if(typeof n=="number")l._pos=[n,r,i];else return l._pos;for(var u=l._getSoundIds(o),c=0;c<u.length;c++){var f=l._soundById(u[c]);if(f)if(typeof n=="number")f._pos=[n,r,i],f._node&&((!f._panner||f._panner.pan)&&t(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setPosition(n,r,i)),l._emit("pos",f._id);else return f._pos}return l},Howl.prototype.orientation=function(n,r,i,o){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"orientation",action:function(){l.orientation(n,r,i,o)}}),l;if(r=typeof r!="number"?l._orientation[1]:r,i=typeof i!="number"?l._orientation[2]:i,typeof o>"u")if(typeof n=="number")l._orientation=[n,r,i];else return l._orientation;for(var u=l._getSoundIds(o),c=0;c<u.length;c++){var f=l._soundById(u[c]);if(f)if(typeof n=="number")f._orientation=[n,r,i],f._node&&(f._panner||(f._pos||(f._pos=l._pos||[0,0,-.5]),t(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setOrientation(n,r,i)),l._emit("orientation",f._id);else return f._orientation}return l},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,i,o,l;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof o>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),n._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:n._panningModel});else return l=n._soundById(parseInt(r[0],10)),l?l._pannerAttr:n._pannerAttr;else r.length===2&&(i=r[0],o=parseInt(r[1],10));for(var u=n._getSoundIds(o),c=0;c<u.length;c++)if(l=n._soundById(u[c]),l){var f=l._pannerAttr;f={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:f.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:f.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:f.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:f.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:f.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:f.panningModel};var h=l._panner;h||(l._pos||(l._pos=n._pos||[0,0,-.5]),t(l,"spatial"),h=l._panner),h.coneInnerAngle=f.coneInnerAngle,h.coneOuterAngle=f.coneOuterAngle,h.coneOuterGain=f.coneOuterGain,h.distanceModel=f.distanceModel,h.maxDistance=f.maxDistance,h.refDistance=f.refDistance,h.rolloffFactor=f.rolloffFactor,h.panningModel=f.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,n.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Eh);const Cw="/assets/startup-sound-B5sg7SwS.wav",Bw=()=>{const e=x.useRef(void 0);return x.useEffect(()=>{e.current=new Eh.Howl({src:[Cw],volume:.5,onend:()=>{e.current=null}}),e.current.once("load",function(){this.play()})},[]),null},bw=()=>B.jsx($r,{program:Ce.RAKIA,programLabel:"Rakia Split",children:B.jsx("iframe",{src:"https://rakija-pump.netlify.app/",height:"600",width:"1000"})}),Rw=()=>B.jsx($r,{program:Ce.STAKING,programLabel:"SNT Staking",children:B.jsx("iframe",{src:"https://snt-staking-demo.netlify.app/",height:"600",width:"1000"})}),Tw=W1`
  ${Y1}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Dy}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Ly}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  #root {
      width: 100%;
      height: 100%;
  }
`;function Pw(){const[e,t]=w.useState(!1);return B.jsxs(Fy,{children:[B.jsx(Tw,{}),B.jsx(V1,{theme:Oy,children:e?B.jsxs(B.Fragment,{children:[B.jsx("nav",{children:B.jsx(bp,{style:{zIndex:3},children:B.jsxs(as,{children:[B.jsx(fw,{}),B.jsx(rr,{program:Ce.ABOUT,programLogo:ph,programLabel:"About"}),B.jsx(rr,{program:Ce.RAKIA,programLogo:hh,programLabel:"Rakia"}),B.jsx(rr,{program:Ce.STAKING,programLogo:gh,programLabel:"SNT Staking"}),B.jsx(rr,{program:Ce.WEB_CAVE,programLogo:mh,programLabel:"WebCave"}),B.jsx(rr,{program:Ce.SN_BRIDGE,programLogo:vh,programLabel:"SN Bridge"}),B.jsx(rr,{program:Ce.REMIX,programLogo:yh,programLabel:"IDE"})]})})}),B.jsxs("main",{children:[B.jsxs("div",{className:"pt4 pl2 pr2",children:[B.jsx($y,{}),B.jsx(bw,{}),B.jsx(Rw,{}),B.jsx(aw,{}),B.jsx(uw,{}),B.jsx(Aw,{}),B.jsx(kw,{})]}),B.jsx(Bw,{})]})]}):B.jsxs(Ds,{style:{width:200,height:200,top:"30%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column"},children:[B.jsx(Os,{className:"flex items-center justify-between",children:B.jsx("span",{children:"Status Network OS"})}),B.jsxs(Qs,{children:["User: based_gang",B.jsx(Wu,{placeholder:"Password"})]}),B.jsx(yn,{onClick:()=>t(!0),children:"Login"})]})})]})}Bl.createRoot(document.getElementById("root")).render(B.jsx(x.StrictMode,{children:B.jsx(Pw,{})}));
