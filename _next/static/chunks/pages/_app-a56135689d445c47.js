(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,l;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(l=r.g.process)?void 0:l.env)?r.g.process:r(7663)},5492:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(12)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return i},default:function(){return u}});let n=r(8754),l=(r(7294),n._(r(8976)));function o(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let u=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=u?u().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,i(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let n=r(8754),l=n._(r(7294)),o=l.default.createContext(null)},8976:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754),l=n._(r(7294)),o=r(2254),i=[],u=[],a=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){let t=new d(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!a){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return i()})}function s(e,t){!function(){i();let e=l.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=l.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),l.default.useMemo(()=>{var t;return u.loading||u.error?l.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?l.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=()=>i(),s.displayName="LoadableComponent",l.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(a=!0,t());f(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let h=c},12:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n,l=r(5893),o=r(5152),i=r.n(o),u=r(1163),a=r(7294),s=r(3454);let d=null!==(n=s.env.NEXT_PUBLIC_GA_ID)&&void 0!==n?n:"",c=e=>{window.gtag("config",d,{page_path:e})};r(7952);var f=r(5103),h=r(8583),p=r(3935);let _=e=>{let{children:t}=e,[r,n]=(0,a.useState)();return(0,a.useEffect)(()=>{let e=document.createElement("div");return document.body.appendChild(e),n(e),()=>{document.body.removeChild(e)}},[]),r?p.createPortal(t,r):null};var m=r(3739),v=r.n(m);let g=e=>e.visible?(0,l.jsx)(_,{children:(0,l.jsx)("div",{className:v().container,children:(0,l.jsx)("div",{className:v().loader})})}):null,b=(0,f.cn)(0),y=(0,f.cn)(e=>e(b)>0),w=()=>{let[e,t]=(0,h.KO)(b),[r]=(0,h.KO)(y),n=(0,a.useCallback)(()=>t(e+1),[e,t]),o=(0,a.useCallback)(()=>t(e-1),[e,t]);return{loadingElm:(0,l.jsx)(g,{visible:r}),addLoading:n,removeLoading:o}};var E=function(e){let{Component:t,pageProps:n}=e,o=i()(()=>r.e(206).then(r.bind(r,4206)),{loadableGenerated:{webpack:()=>[4206]},ssr:!1}),s=(0,u.useRouter)(),{loadingElm:d}=w();return(0,a.useEffect)(()=>{let e=(e,t)=>{let{shallow:r}=t;r||c(e)};return s.events.on("routeChangeComplete",e),()=>{s.events.off("routeChangeComplete",e)}},[s.events]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o,{children:[(0,l.jsx)(t,{...n}),d]})})}},7952:function(){},3739:function(e){e.exports={container:"Loading_container__wV1ri",loader:"Loading_loader__cpdbt",load:"Loading_load__8NQtO"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,l=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a=[],s=!1,d=-1;function c(){s&&n&&(s=!1,n.length?a=n.concat(a):d=-1,a.length&&f())}function f(){if(!s){var e=u(c);s=!0;for(var t=a.length;t;){for(n=a,a=[];++d<t;)n&&n[d].run();d=-1,t=a.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}l.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||s||u(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=p,l.addListener=p,l.once=p,l.off=p,l.removeListener=p,l.removeAllListeners=p,l.emit=p,l.prependListener=p,l.prependOnceListener=p,l.listeners=function(e){return[]},l.binding=function(e){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw Error("process.chdir is not supported")},l.umask=function(){return 0}}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,n),i=!1}finally{i&&delete r[e]}return o.exports}n.ab="//";var l=n(229);e.exports=l}()},5152:function(e,t,r){e.exports=r(5677)},1163:function(e,t,r){e.exports=r(6885)},8583:function(e,t,r){"use strict";r.d(t,{KO:function(){return s}});var n=r(7294),l=r(5103);let o=(0,n.createContext)(void 0),i=e=>{let t=(0,n.useContext)(o);return(null==e?void 0:e.store)||t||(0,l.K7)()},u=e=>"function"==typeof(null==e?void 0:e.then),a=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e});function s(e,t){return[function(e,t){let r=i(t),[[l,o,s],d]=(0,n.useReducer)(t=>{let n=r.get(e);return Object.is(t[0],n)&&t[1]===r&&t[2]===e?t:[n,r,e]},void 0,()=>[r.get(e),r,e]),c=l;(o!==r||s!==e)&&(d(),c=r.get(e));let f=null==t?void 0:t.delay;return(0,n.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof f){setTimeout(d,f);return}d()});return d(),t},[r,e,f]),(0,n.useDebugValue)(c),u(c)?a(c):c}(e,t),function(e,t){let r=i(t),l=(0,n.useCallback)((...t)=>{if(!("write"in e))throw Error("not writable atom");return r.set(e,...t)},[r,e]);return l}(e,t)]}},5103:function(e,t,r){"use strict";let n;r.d(t,{K7:function(){return y},cn:function(){return o}});let l=0;function o(e,t){let r=`atom${++l}`,n={toString:()=>r};return"function"==typeof e?n.read=e:(n.init=e,n.read=e=>e(n),n.write=(e,t,r)=>t(n,"function"==typeof r?r(e(n)):r)),t&&(n.write=t),n}let i=e=>"init"in e,u=e=>!!e.write,a=new WeakMap,s=(e,t)=>{a.set(e,t),e.catch(()=>{}).finally(()=>a.delete(e))},d=(e,t)=>{let r=a.get(e);r&&(a.delete(e),r(t))},c=(e,t)=>{e.status="fulfilled",e.value=t},f=(e,t)=>{e.status="rejected",e.reason=t},h=e=>"function"==typeof(null==e?void 0:e.then),p=(e,t)=>"v"in e&&"v"in t&&Object.is(e.v,t.v),_=(e,t)=>"e"in e&&"e"in t&&Object.is(e.e,t.e),m=e=>"v"in e&&e.v instanceof Promise,v=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,g=e=>{if("e"in e)throw e.e;return e.v},b=()=>{let e,t;let r=new WeakMap,n=new WeakMap,l=new Map;e=new Set,t=new Set;let o=e=>r.get(e),a=(e,t)=>{Object.freeze(t);let n=r.get(e);if(r.set(e,t),l.has(e)||l.set(e,n),n&&m(n)){let e="v"in t?t.v instanceof Promise?t.v:Promise.resolve(t.v):Promise.reject(t.e);d(n.v,e)}},b=(e,t,r)=>{let n=new Map,l=!1;r.forEach((r,o)=>{r||o!==e||(r=t),r?(n.set(o,r),t.d.get(o)!==r&&(l=!0)):console.warn("[Bug] atom state not found")}),(l||t.d.size!==n.size)&&(t.d=n)},y=(e,t,r)=>{let n=o(e),l={d:(null==n?void 0:n.d)||new Map,v:t};if(r&&b(e,l,r),n&&p(n,l)&&n.d===l.d)return n;if(n&&m(n)&&m(l)&&v(n,l)){if(n.d===l.d)return n;l.v=n.v}return a(e,l),l},w=(e,t,r,n)=>{if(h(t)){let l;let i=new Promise((n,u)=>{let a=!1;t.then(t=>{if(!a){a=!0;let l=o(e),u=y(e,i,r);c(i,t),n(t),(null==l?void 0:l.d)!==u.d&&P(e,u,null==l?void 0:l.d)}},t=>{if(!a){a=!0;let n=o(e),l=y(e,i,r);f(i,t),u(t),(null==n?void 0:n.d)!==l.d&&P(e,l,null==n?void 0:n.d)}}),l=e=>{a||(a=!0,e.then(e=>c(i,e),e=>f(i,e)),n(e))}});return i.orig=t,i.status="pending",s(i,e=>{e&&l(e),null==n||n()}),y(e,i,r)}return y(e,t,r)},E=(e,t,r)=>{let n=o(e),l={d:(null==n?void 0:n.d)||new Map,e:t};return(r&&b(e,l,r),n&&_(n,l)&&n.d===l.d)?n:(a(e,l),l)},T=(e,t)=>{let r,l;let a=o(e);if(!t&&a&&(n.has(e)||Array.from(a.d).every(([t,r])=>t===e||T(t)===r)))return a;let s=new Map,d=!0;try{let t=e.read(t=>{if(t===e){let e=o(t);if(e)return s.set(t,e),g(e);if(i(t))return s.set(t,void 0),t.init;throw Error("no atom init")}let r=T(t);return s.set(t,r),g(r)},{get signal(){return r||(r=new AbortController),r.signal},get setSelf(){return u(e)||console.warn("setSelf function cannot be used with read-only atom"),!l&&u(e)&&(l=(...t)=>{if(d&&console.warn("setSelf function cannot be called in sync"),!d)return k(e,...t)}),l}});return w(e,t,s,()=>null==r?void 0:r.abort())}catch(t){return E(e,t,s)}finally{d=!1}},O=e=>{let t=n.get(e);return t||(t=N(e)),t},C=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),j=e=>{let t=n.get(e);t&&C(e,t)&&M(e)},x=e=>{let t=new Map,r=new WeakMap,l=e=>{let o=n.get(e);null==o||o.t.forEach(n=>{n!==e&&(t.set(n,(t.get(n)||new Set).add(e)),r.set(n,(r.get(n)||0)+1),l(n))})};l(e);let i=e=>{let l=n.get(e);null==l||l.t.forEach(n=>{var l;if(n!==e){let e=r.get(n);if(e&&r.set(n,--e),!e){let e=!!(null==(l=t.get(n))?void 0:l.size);if(e){let t=o(n),r=T(n,!0);e=!t||!p(t,r)}e||t.forEach(e=>e.delete(n))}i(n)}})};i(e)},S=(t,...r)=>{let n=!0,l=t.write(e=>g(T(e)),(r,...l)=>{let u;if(r===t){if(!i(r))throw Error("atom not writable");let e=o(r),t=w(r,l[0]);e&&p(e,t)||x(r)}else u=S(r,...l);if(!n){let t=A();e.forEach(e=>e({type:"async-write",flushed:t}))}return u},...r);return n=!1,l},k=(t,...r)=>{let n=S(t,...r),l=A();return e.forEach(e=>e({type:"write",flushed:l})),n},N=(e,r)=>{var l;null==(l=o(e))||l.d.forEach((t,r)=>{let l=n.get(r);l?l.t.add(e):r!==e&&N(r,e)}),T(e);let i={t:new Set(r&&[r]),l:new Set};if(n.set(e,i),t.add(e),u(e)&&e.onMount){let t=e.onMount((...t)=>k(e,...t));t&&(i.u=t)}return i},M=e=>{var r;let l=null==(r=n.get(e))?void 0:r.u;l&&l(),n.delete(e),t.delete(e);let i=o(e);i?(m(i)&&d(i.v),i.d.forEach((t,r)=>{if(r!==e){let t=n.get(r);t&&(t.t.delete(e),C(r,t)&&M(r))}})):console.warn("[Bug] could not find atom state to unmount",e)},P=(e,t,r)=>{let l=new Set(t.d.keys());null==r||r.forEach((t,r)=>{if(l.has(r)){l.delete(r);return}let o=n.get(r);o&&(o.t.delete(e),C(r,o)&&M(r))}),l.forEach(t=>{let r=n.get(t);r?r.t.add(e):n.has(e)&&N(t,e)})},A=()=>{let e;for(e=new Set;l.size;){let t=Array.from(l);l.clear(),t.forEach(([t,r])=>{let l=o(t);if(l){l.d!==(null==r?void 0:r.d)&&P(t,l,null==r?void 0:r.d);let o=n.get(t);o&&!(r&&!m(r)&&(p(r,l)||_(r,l)))&&(o.l.forEach(e=>e()),e.add(t))}else console.warn("[Bug] no atom state to flush")})}return e};return{get:e=>g(T(e)),set:k,sub:(t,r)=>{let n=O(t),l=A(),o=n.l;return o.add(r),e.forEach(e=>e({type:"sub",flushed:l})),()=>{o.delete(r),j(t),e.forEach(e=>e({type:"unsub"}))}},dev_subscribe_store:(t,r)=>{if(2!==r)throw Error("The current StoreListener revision is 2.");return e.add(t),()=>{e.delete(t)}},dev_get_mounted_atoms:()=>t.values(),dev_get_atom_state:e=>r.get(e),dev_get_mounted:e=>n.get(e),dev_restore_atoms:t=>{for(let[e,r]of t)i(e)&&(w(e,r),x(e));let r=A();e.forEach(e=>e({type:"restore",flushed:r}))}}};"number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&++globalThis.__NUMBER_OF_JOTAI_INSTANCES__,globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1;let y=()=>(n||(1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),n=b()),n)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5492),t(6885)}),_N_E=e.O()}]);