(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(":root{--main-container-with: 100px;--main-container-height: auto;--main-container-background: inherit;--main-background: #fff;--main-color: #000;--main-hover-color: #242526}._darkmodeContainer_2ru59_3{min-width:var(--main-container-with);width:100px;height:var(--main-container-height);background-color:var(--main-container-background);display:flex;align-items:center;border:1px solid green;padding:6px;border-radius:28px}._darkmodeContainer_2ru59_3 ._switch_2ru59_15{border-radius:inherit;padding:4px}._darkmodeContainer_2ru59_3 ._switchHover_2ru59_19:hover{box-shadow:0 0 10px var(--main-hover-color),0 0 15px var(--main-hover-color)}._darkmodeContainer_2ru59_3 ._addBorder_2ru59_26{background-color:var(--main-color);color:var(--main-background)}._darkmodeContainer_2ru59_3 ._svg_2ru59_31{display:flex;align-items:center;justify-content:center;color:inherit;background-color:inherit;width:30px;height:30px;border-radius:50%;cursor:pointer}._darkmodeContainer_2ru59_3 ._svg_2ru59_31>svg{width:100%;height:100%;border-radius:inherit}._staticSwitch_2ru59_49{justify-content:center}._normalSwitch_2ru59_53{justify-content:flex-start}._dinamicSwitch_2ru59_57{justify-content:flex-end}")),document.head.appendChild(r)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
(function(S,D){typeof exports=="object"&&typeof module<"u"?module.exports=D(require("react")):typeof define=="function"&&define.amd?define(["react"],D):(S=typeof globalThis<"u"?globalThis:S||self,S.index=D(S.React))})(this,function(S){"use strict";var D={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function Pe(){if(te)return W;te=1;var j=S,l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,m=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function f(s,d,R){var p,g={},_=null,I=null;R!==void 0&&(_=""+R),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(I=d.ref);for(p in d)E.call(d,p)&&!T.hasOwnProperty(p)&&(g[p]=d[p]);if(s&&s.defaultProps)for(p in d=s.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:l,type:s,key:_,ref:I,props:g,_owner:m.current}}return W.Fragment=i,W.jsx=f,W.jsxs=f,W}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function xe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){var j=S,l=Symbol.for("react.element"),i=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),k=Symbol.iterator,N="@@iterator";function Le(e){if(e===null||typeof e!="object")return null;var r=k&&e[k]||e[N];return typeof r=="function"?r:null}var F=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];We("error",e,t)}}function We(e,r,t){{var n=F.ReactDebugCurrentFrame,c=n.getStackAddendum();c!==""&&(r+="%s",t=t.concat([c]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ye=!1,Ne=!1,Ve=!1,Ue=!1,$e=!1,ae;ae=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===E||e===T||$e||e===m||e===R||e===p||Ue||e===I||Ye||Ne||Ve||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===d||e.$$typeof===ae||e.getModuleId!==void 0))}function He(e,r,t){var n=e.displayName;if(n)return n;var c=r.displayName||r.name||"";return c!==""?t+"("+c+")":t}function oe(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case i:return"Portal";case T:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s:var r=e;return oe(r)+".Consumer";case f:var t=e;return oe(t._context)+".Provider";case d:return He(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:C(e.type)||"Memo";case _:{var c=e,u=c._payload,o=c._init;try{return C(o(u))}catch{return null}}}return null}var A=Object.assign,V=0,ie,se,ce,ue,le,fe,de;function ve(){}ve.__reactDisabledLog=!0;function Ze(){{if(V===0){ie=console.log,se=console.info,ce=console.warn,ue=console.error,le=console.group,fe=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function ze(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:ie}),info:A({},e,{value:se}),warn:A({},e,{value:ce}),error:A({},e,{value:ue}),group:A({},e,{value:le}),groupCollapsed:A({},e,{value:fe}),groupEnd:A({},e,{value:de})})}V<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=F.ReactCurrentDispatcher,G;function $(e,r,t){{if(G===void 0)try{throw Error()}catch(c){var n=c.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var q=!1,B;{var Je=typeof WeakMap=="function"?WeakMap:Map;B=new Je}function he(e,r){if(!e||q)return"";{var t=B.get(e);if(t!==void 0)return t}var n;q=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Ze();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(P){n=P}Reflect.construct(e,[],o)}else{try{o.call()}catch(P){n=P}e.call(o.prototype)}}else{try{throw Error()}catch(P){n=P}e()}}catch(P){if(P&&n&&typeof P.stack=="string"){for(var a=P.stack.split(`
`),y=n.stack.split(`
`),v=a.length-1,h=y.length-1;v>=1&&h>=0&&a[v]!==y[h];)h--;for(;v>=1&&h>=0;v--,h--)if(a[v]!==y[h]){if(v!==1||h!==1)do if(v--,h--,h<0||a[v]!==y[h]){var w=`
`+a[v].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,w),w}while(v>=1&&h>=0);break}}}finally{q=!1,J.current=u,ze(),Error.prepareStackTrace=c}var L=e?e.displayName||e.name:"",Ce=L?$(L):"";return typeof e=="function"&&B.set(e,Ce),Ce}function Ge(e,r,t){return he(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return he(e,qe(e));if(typeof e=="string")return $(e);switch(e){case R:return $("Suspense");case p:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Ge(e.render);case g:return H(e.type,r,t);case _:{var n=e,c=n._payload,u=n._init;try{return H(u(c),r,t)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,me={},pe=F.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function Ke(e,r,t,n,c){{var u=Function.call.bind(Z);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var y=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(v){a=v}a&&!(a instanceof Error)&&(z(c),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),z(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,z(c),b("Failed %s type: %s",t,a.message),z(null))}}}var Xe=Array.isArray;function K(e){return Xe(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function er(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function _e(e){if(er(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),ge(e)}var U=F.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},be,ye,X;X={};function tr(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&U.current&&r&&U.current.stateNode!==r){var t=C(U.current.type);X[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(U.current.type),e.ref),X[t]=!0)}}function or(e,r){{var t=function(){be||(be=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){ye||(ye=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var sr=function(e,r,t,n,c,u,o){var a={$$typeof:l,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function cr(e,r,t,n,c){{var u,o={},a=null,y=null;t!==void 0&&(_e(t),a=""+t),nr(r)&&(_e(r.key),a=""+r.key),tr(r)&&(y=r.ref,ar(r,c));for(u in r)Z.call(r,u)&&!rr.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var v=e.defaultProps;for(u in v)o[u]===void 0&&(o[u]=v[u])}if(a||y){var h=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&or(o,h),y&&ir(o,h)}return sr(e,a,y,c,n,U.current,o)}}var Q=F.ReactCurrentOwner,Ee=F.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function Re(){{if(Q.current){var e=C(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ur(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var we={};function lr(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(we[t])return;we[t]=!0;var n="";e&&e._owner&&e._owner!==Q.current&&(n=" It was passed a child from "+C(e._owner.type)+"."),M(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),M(null)}}function Te(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];re(n)&&Se(n,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var c=Le(e);if(typeof c=="function"&&c!==e.entries)for(var u=c.call(e),o;!(o=u.next()).done;)re(o.value)&&Se(o.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=C(r);Ke(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var c=C(r);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){M(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),M(null);break}}e.ref!==null&&(M(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}function ke(e,r,t,n,c,u){{var o=Be(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=ur(c);y?a+=y:a+=Re();var v;e===null?v="null":K(e)?v="array":e!==void 0&&e.$$typeof===l?(v="<"+(C(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,a)}var h=cr(e,r,t,c,u);if(h==null)return h;if(o){var w=r.children;if(w!==void 0)if(n)if(K(w)){for(var L=0;L<w.length;L++)Te(w[L],e);Object.freeze&&Object.freeze(w)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(w,e)}return e===E?dr(h):fr(h),h}}function vr(e,r,t){return ke(e,r,t,!0)}function hr(e,r,t){return ke(e,r,t,!1)}var mr=hr,pr=vr;Y.Fragment=E,Y.jsx=mr,Y.jsxs=pr}()),Y}process.env.NODE_ENV==="production"?D.exports=Pe():D.exports=xe();var x=D.exports;const O={darkmodeContainer:"_darkmodeContainer_2ru59_3",switch:"_switch_2ru59_15",switchHover:"_switchHover_2ru59_19",addBorder:"_addBorder_2ru59_26",svg:"_svg_2ru59_31",staticSwitch:"_staticSwitch_2ru59_49",normalSwitch:"_normalSwitch_2ru59_53",dinamicSwitch:"_dinamicSwitch_2ru59_57"},Oe=()=>{const j=x.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 256 256",children:x.jsx("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"})});return{dark:x.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",children:[x.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),x.jsx("path",{d:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"})]}),light:j}},je=()=>({defaultStyles:De,icons:Fe}),De=[{theme:"Dark",variables:["--main-background","--main-color","--main-hover-color"],values:["#000","#fff","#fbfbfb"]},{theme:"Light",variables:["--main-background","--main-color","--main-hover-color"],values:["#fff","#000","#242526"]}],{dark:Ae,light:Ie}=Oe(),Fe=[{theme:"Dark",icon:Ae},{theme:"Light",icon:Ie}];class Me{userDarkTheme(){return window.matchMedia("(prefers-color-scheme: dark)")}changePropsStyles(l,i){const E=(s,d)=>{for(let R=0;R<s.length;R++){const p=s[R],g=d[R],_=document.querySelector(":root");_==null||_.style.setProperty(p,g)}},m=this.changeMode(l),T=i[0].theme==="Light"?i[0]:i[1],f=i[0].theme==="Dark"?i[0]:i[1];m!=="Light"?E(T.variables,T.values):E(f.variables,f.values)}changeMode(l){return l!=="Dark"?"Dark":"Light"}detectUserTheme(){return this.userDarkTheme().matches?"Dark":"Light"}storageDarkmodePreference(l){const i=window.localStorage.getItem("dark-mode")??void 0;if(l)window.localStorage.setItem("dark-mode",l);else return i}handlerIcons(l,i){if(i&&l){const E=i[0].theme==="Dark"?i[0].theme:i[1].theme,m=i[1].theme==="Light"?i[1].theme:i[0].theme,T=i[0].icon,f=i[1].icon;return l===E?T:m===l?f:void 0}}handlerDefaultSwitchTheme(){const{defaultStyles:l,icons:i}=je();return{defaultStyles:l,icons:i}}}return j=>{const{switchStyles:l,icons:i,switchMode:E,styles:m,hover:T}=j,f=new Me,[s,d]=S.useState(),[R,p]=S.useState(!1),[g,_]=S.useState();S.useEffect(()=>{const k=f.storageDarkmodePreference();if(!k&&!s?d(f.detectUserTheme()):k&&!s?d(k):s&&(l?f.changePropsStyles(s,l):f.changeMode(s),f.storageDarkmodePreference(s),i&&s&&typeof i!="boolean"&&_(f.handlerIcons(s,i)),s==="Dark"&&p(!0)),s&&!l){const N=f.handlerDefaultSwitchTheme().defaultStyles;f.changePropsStyles(s,N)}if(s&&typeof i=="boolean"){const N=f.handlerDefaultSwitchTheme().icons;_(f.handlerIcons(s,N))}},[s]);const I=()=>{s&&d(k=>k==="Light"?"Dark":"Light"),p(k=>!k),i&&s&&typeof i!="boolean"&&_(f.handlerIcons(s,i)),s&&(l?f.changePropsStyles(s,l):f.changeMode(s))};return x.jsx("div",{style:m==null?void 0:m.mainContainer,className:`${O.darkmodeContainer} 
    ${E==="static"?O.staticSwitch:R?O.dinamicSwitch:O.normalSwitch}`,onClick:I,children:x.jsx("div",{style:m==null?void 0:m.switchContainer,className:`${O.switch} ${g?"":O.addBorder} ${T?O.switchHover:""}`,children:x.jsx("div",{style:m==null?void 0:m.iconsContainer,className:O.svg,children:g||s})})})}});
