(self.webpackChunkfotohakon=self.webpackChunkfotohakon||[]).push([[585],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},1071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var f,a,l=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},f=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:a},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y="".split,E=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,h=function(e){return E(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(e,t){return m.call(e,t)},O=u.document,S=v(O)&&v(O.createElement),T=function(e){return S?O.createElement(e):{}},_=!f&&!i((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,I={f:f?D:function(e,t){if(e=h(e),t=b(t,!0),_)try{return D(e,t)}catch(n){}if(g(e,t))return p(!s.f.call(e,t),e[t])}},A=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,P={f:f?w:function(e,t,n){if(A(e),t=b(t,!0),A(n),_)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},N=f?function(e,t,n){return P.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{N(u,e,t)}catch(n){u[e]=t}return t},R="__core-js_shared__",L=u[R]||j(R,{}),M=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(e){return M.call(e)});var H,k,C,G=L.inspectSource,x=u.WeakMap,B="function"==typeof x&&/native code/.test(G(x)),Y=r((function(e){(e.exports=function(e,t){return L[e]||(L[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+K).toString(36)},W=Y("keys"),q=function(e){return W[e]||(W[e]=F(e))},z={},V=u.WeakMap;if(B){var Z=new V,Q=Z.get,X=Z.has,J=Z.set;H=function(e,t){return J.call(Z,e,t),t},k=function(e){return Q.call(Z,e)||{}},C=function(e){return X.call(Z,e)}}else{var $=q("state");z[$]=!0,H=function(e,t){return N(e,$,t),t},k=function(e){return g(e,$)?e[$]:{}},C=function(e){return g(e,$)}}var ee={set:H,get:k,has:C,enforce:function(e){return C(e)?k(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=r((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||g(o,"name")||N(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==u?(c?!a&&e[t]&&(f=!0):delete e[t],f?e[t]=o:N(e,t,o)):f?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),ne=u,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(u[e]):ne[e]&&ne[e][t]||u[e]&&u[e][t]},ue=Math.ceil,ie=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ie:ue)(e)},fe=Math.min,ae=Math.max,le=Math.min,se=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?fe(ce(o),9007199254740991):0,f=function(e,t){var n=ce(e);return n<0?ae(n+t,0):le(n,t)}(r,c);if(e&&n!=n){for(;c>f;)if((u=i[f++])!=u)return!0}else for(;c>f;f++)if((e||f in i)&&i[f]===n)return e||f||0;return!e&&-1}},pe={includes:se(!0),indexOf:se(!1)},de=pe.indexOf,ye=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!g(z,n)&&g(r,n)&&u.push(n);for(;t.length>o;)g(r,n=t[o++])&&(~de(u,n)||u.push(n));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=Ee.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return ye(e,he)}},be={f:Object.getOwnPropertySymbols},me=oe("Reflect","ownKeys")||function(e){var t=ve.f(A(e)),n=be.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=me(t),r=P.f,o=I.f,u=0;u<n.length;u++){var i=n[u];g(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,Se=function(e,t){var n=_e[Te(e)];return n==Ie||n!=De&&("function"==typeof t?i(t):!!t)},Te=Se.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},_e=Se.data={},De=Se.NATIVE="N",Ie=Se.POLYFILL="P",Ae=Se,we=I.f,Pe=function(e,t){var n,r,o,i,c,f=e.target,a=e.global,l=e.stat;if(n=a?u:l?u[f]||j(f,{}):(u[f]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=we(n,r))&&c.value:n[r],!Ae(a?r:f+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&N(i,"sham",!0),te(n,r,i,e)}},Ne=Object.keys||function(e){return ye(e,Ee)},je=s.f,Re=function(e){return function(t){for(var n,r=h(t),o=Ne(r),u=o.length,i=0,c=[];u>i;)n=o[i++],f&&!je.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Le=(Re(!0),Re(!1));Pe({target:"Object",stat:!0},{values:function(e){return Le(e)}}),ne.Object.values;var Me,He=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),ke=He&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=Y("wks"),Ge=u.Symbol,xe=ke?Ge:Ge&&Ge.withoutSetter||F,Be=f?Object.defineProperties:function(e,t){A(e);for(var n,r=Ne(t),o=r.length,u=0;o>u;)P.f(e,n=r[u++],t[n]);return e},Ye=oe("document","documentElement"),Ue=q("IE_PROTO"),Ke=function(){},Fe=function(e){return"<script>"+e+"<\/script>"},We=function(){try{Me=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;We=Me?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Me):((t=T("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete We.prototype[Ee[n]];return We()};z[Ue]=!0;var qe,ze=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=A(e),n=new Ke,Ke.prototype=null,n[Ue]=e):n=We(),void 0===t?n:Be(n,t)},Ve=(g(Ce,qe="unscopables")||(He&&g(Ge,qe)?Ce[qe]=Ge[qe]:Ce[qe]=xe("Symbol."+qe)),Ce[qe]),Ze=Array.prototype;null==Ze[Ve]&&P.f(Ze,Ve,{configurable:!0,value:ze(null)});var Qe,Xe=Object.defineProperty,Je={},$e=function(e){throw e},et=pe.includes;Pe({target:"Array",proto:!0,forced:!function(e,t){if(g(Je,e))return Je[e];t||(t={});var n=[][e],r=!!g(t,"ACCESSORS")&&t.ACCESSORS,o=g(t,0)?t[0]:$e,u=g(t,1)?t[1]:void 0;return Je[e]=!!n&&!i((function(){if(r&&!f)return!0;var e={length:-1};r?Xe(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",Ze[Ve][Qe]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ut=Function.call;tt="includes",ot(ut,u.Array.prototype[tt],nt),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var it,ct=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(it||(it={}));var ft,at=it,lt=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],pt=((ft={})[ct.OL_LIST]=[ct.LIST_ITEM],ft[ct.UL_LIST]=[ct.LIST_ITEM],ft[ct.LIST_ITEM]=lt.slice(),ft[ct.QUOTE]=[ct.PARAGRAPH],ft),dt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},yt=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ct,t.CONTAINERS=pt,t.EMPTY_DOCUMENT=dt,t.INLINES=at,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=lt,t.VOID_BLOCKS=st,t.helpers=yt}(f={exports:{}},f.exports),f.exports);(a=l)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var s,p,d=l.BLOCKS,y=(l.CONTAINERS,l.EMPTY_DOCUMENT,l.INLINES),E=l.MARKS,h=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function v(e,t){return e.map((function(e,n){return r=b(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function b(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(h.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=v(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var m=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},s[d.HR]=function(){return u.createElement("hr",null)},s[y.ASSET_HYPERLINK]=function(e){return O(y.ASSET_HYPERLINK,e)},s[y.ENTRY_HYPERLINK]=function(e){return O(y.ENTRY_HYPERLINK,e)},s[y.EMBEDDED_ENTRY]=function(e){return O(y.EMBEDDED_ENTRY,e)},s[y.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},s),g=((p={})[E.BOLD]=function(e){return u.createElement("b",null,e)},p[E.ITALIC]=function(e){return u.createElement("i",null,e)},p[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},p[E.CODE]=function(e){return u.createElement("code",null,e)},p);function O(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?b(e,{renderNode:i({},m,t.renderNode),renderMark:i({},g,t.renderMark),renderText:t.renderText}):null}},833:function(e,t,n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var u=function(e){return e&&e.Math==Math&&e},i=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof r&&r)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},f=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:a},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y="".split,E=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,h=function(e){return E(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(e,t){return m.call(e,t)},O=i.document,S=v(O)&&v(O.createElement),T=function(e){return S?O.createElement(e):{}},_=!f&&!c((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,I={f:f?D:function(e,t){if(e=h(e),t=b(t,!0),_)try{return D(e,t)}catch(n){}if(g(e,t))return p(!s.f.call(e,t),e[t])}},A=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,P={f:f?w:function(e,t,n){if(A(e),t=b(t,!0),A(n),_)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},N=f?function(e,t,n){return P.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{N(i,e,t)}catch(n){i[e]=t}return t},R="__core-js_shared__",L=i[R]||j(R,{}),M=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(e){return M.call(e)});var H,k,C,G=L.inspectSource,x=i.WeakMap,B="function"==typeof x&&/native code/.test(G(x)),Y=o((function(e){(e.exports=function(e,t){return L[e]||(L[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+K).toString(36)},W=Y("keys"),q=function(e){return W[e]||(W[e]=F(e))},z={},V=i.WeakMap;if(B){var Z=new V,Q=Z.get,X=Z.has,J=Z.set;H=function(e,t){return J.call(Z,e,t),t},k=function(e){return Q.call(Z,e)||{}},C=function(e){return X.call(Z,e)}}else{var $=q("state");z[$]=!0,H=function(e,t){return N(e,$,t),t},k=function(e){return g(e,$)?e[$]:{}},C=function(e){return g(e,$)}}var ee={set:H,get:k,has:C,enforce:function(e){return C(e)?k(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=o((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||g(o,"name")||N(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==i?(c?!a&&e[t]&&(f=!0):delete e[t],f?e[t]=o:N(e,t,o)):f?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),ne=i,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(i[e]):ne[e]&&ne[e][t]||i[e]&&i[e][t]},ue=Math.ceil,ie=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ie:ue)(e)},fe=Math.min,ae=Math.max,le=Math.min,se=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?fe(ce(o),9007199254740991):0,f=function(e,t){var n=ce(e);return n<0?ae(n+t,0):le(n,t)}(r,c);if(e&&n!=n){for(;c>f;)if((u=i[f++])!=u)return!0}else for(;c>f;f++)if((e||f in i)&&i[f]===n)return e||f||0;return!e&&-1}},pe={includes:se(!0),indexOf:se(!1)},de=pe.indexOf,ye=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!g(z,n)&&g(r,n)&&u.push(n);for(;t.length>o;)g(r,n=t[o++])&&(~de(u,n)||u.push(n));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=Ee.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return ye(e,he)}},be={f:Object.getOwnPropertySymbols},me=oe("Reflect","ownKeys")||function(e){var t=ve.f(A(e)),n=be.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=me(t),r=P.f,o=I.f,u=0;u<n.length;u++){var i=n[u];g(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,Se=function(e,t){var n=_e[Te(e)];return n==Ie||n!=De&&("function"==typeof t?c(t):!!t)},Te=Se.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},_e=Se.data={},De=Se.NATIVE="N",Ie=Se.POLYFILL="P",Ae=Se,we=I.f,Pe=function(e,t){var n,r,o,u,c,f=e.target,a=e.global,l=e.stat;if(n=a?i:l?i[f]||j(f,{}):(i[f]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(c=we(n,r))&&c.value:n[r],!Ae(a?r:f+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;ge(u,o)}(e.sham||o&&o.sham)&&N(u,"sham",!0),te(n,r,u,e)}},Ne=Object.keys||function(e){return ye(e,Ee)},je=s.f,Re=function(e){return function(t){for(var n,r=h(t),o=Ne(r),u=o.length,i=0,c=[];u>i;)n=o[i++],f&&!je.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Le={entries:Re(!0),values:Re(!1)}.values;Pe({target:"Object",stat:!0},{values:function(e){return Le(e)}});ne.Object.values;var Me,He=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),ke=He&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=Y("wks"),Ge=i.Symbol,xe=ke?Ge:Ge&&Ge.withoutSetter||F,Be=f?Object.defineProperties:function(e,t){A(e);for(var n,r=Ne(t),o=r.length,u=0;o>u;)P.f(e,n=r[u++],t[n]);return e},Ye=oe("document","documentElement"),Ue=q("IE_PROTO"),Ke=function(){},Fe=function(e){return"<script>"+e+"</"+"script>"},We=function(){try{Me=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;We=Me?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Me):((t=T("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete We.prototype[Ee[n]];return We()};z[Ue]=!0;var qe,ze=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=A(e),n=new Ke,Ke.prototype=null,n[Ue]=e):n=We(),void 0===t?n:Be(n,t)},Ve=(g(Ce,qe="unscopables")||(He&&g(Ge,qe)?Ce[qe]=Ge[qe]:Ce[qe]=xe("Symbol."+qe)),Ce[qe]),Ze=Array.prototype;null==Ze[Ve]&&P.f(Ze,Ve,{configurable:!0,value:ze(null)});var Qe,Xe=Object.defineProperty,Je={},$e=function(e){throw e},et=pe.includes;Pe({target:"Array",proto:!0,forced:!function(e,t){if(g(Je,e))return Je[e];t||(t={});var n=[][e],r=!!g(t,"ACCESSORS")&&t.ACCESSORS,o=g(t,0)?t[0]:$e,u=g(t,1)?t[1]:void 0;return Je[e]=!!n&&!c((function(){if(r&&!f)return!0;var e={length:-1};r?Xe(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",Ze[Ve][Qe]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ut=Function.call;tt="includes",ot(ut,i["Array"].prototype[tt],nt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var it,ct=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(it||(it={}));var ft,at=it,lt=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],pt=((ft={})[ct.OL_LIST]=[ct.LIST_ITEM],ft[ct.UL_LIST]=[ct.LIST_ITEM],ft[ct.LIST_ITEM]=lt.slice(),ft[ct.QUOTE]=[ct.PARAGRAPH],ft),dt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var yt=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=ct,t.oN={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"}},5329:function(e,t,n){"use strict";n.r(t);var r=n(422),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},f=function(e){return e&&e.sys&&"Link"===e.sys.type},a=function(e){return e.type+"!"+e.id},l=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=a({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),c=new Map(u.map((function(e){return[a(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,f,(function(e){return s(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},422:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,f=Object.prototype,a=f.hasOwnProperty,l=f.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof i,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},d=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,u=n.__proto__||c(n);if(o===r.Object)return u===r.Object.prototype?{}:t(u);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(f){}return t(u)},y=function(e,t,n,r){var o=d(e,t);for(var u in r.set(e,o),e)a.call(e,u)&&(o[u]=n(e[u],r));if(s.SYMBOL_PROPERTIES){var c=i(e),f=c.length;if(f)for(var p=0,y=void 0;p<f;p++)y=c[p],l.call(e,y)&&(o[y]=n(e[y],r))}return o},E=function(e,t,n,c){var f=d(e,t);c.set(e,f);var a=s.SYMBOL_PROPERTIES?u(e).concat(i(e)):u(e),l=a.length;if(l)for(var p=0,y=void 0,E=void 0;p<l;p++)if("callee"!==(y=a[p])&&"caller"!==y)if(E=o(e,y)){E.get||E.set||(E.value=n(e[y],c));try{r(f,y,E)}catch(h){f[y]=E.value}}else f[y]=n(e[y],c);return f},h=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},v=Array.isArray,b="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function m(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||b,o=n?E:y;return function e(t,u){if(!t||"object"!=typeof t)return t;if(u.has(t))return u.get(t);var i,c=t.constructor;if(c===r.Object)return o(t,r,e,u);if(v(t)){if(n)return E(t,r,e,u);var f=t.length;i=new c,u.set(t,i);for(var a=0;a<f;a++)i[a]=e(t[a],u);return i}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(i=new c(t.source,t.flags||h(t))).lastIndex=t.lastIndex,i;if(r.Map&&t instanceof r.Map)return i=new c,u.set(t,i),t.forEach((function(t,n){i.set(n,e(t,u))})),i;if(r.Set&&t instanceof r.Set)return i=new c,u.set(t,i),t.forEach((function(t){i.add(e(t,u))})),i;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),u.set(t,i),t.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return i=new c(t.buffer.slice(0)),u.set(t,i),i;if(t instanceof r.ArrayBuffer)return i=t.slice(0),u.set(t,i),i}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,u)}(e,p())}return m.default=m,m.strict=function(e,t){return m(e,{isStrict:!0,realm:t?t.realm:void 0})},m}()},72:function(e,t,n){"use strict";var r,o,u=n(7294),i=n(5761),c=n(833),f=n(979),a=f.ZP.span.withConfig({displayName:"MDRenderer__Bold",componentId:"sc-1hh9qmd-0"})(["font-weight:bold;"]),l=f.ZP.p.withConfig({displayName:"MDRenderer__P",componentId:"sc-1hh9qmd-1"})([""]),s=f.ZP.h1.withConfig({displayName:"MDRenderer__H1",componentId:"sc-1hh9qmd-2"})([""]),p=f.ZP.h2.withConfig({displayName:"MDRenderer__H2",componentId:"sc-1hh9qmd-3"})([""]),d=f.ZP.h3.withConfig({displayName:"MDRenderer__H3",componentId:"sc-1hh9qmd-4"})([""]),y={renderMark:(r={},r[c.oN.BOLD]=function(e){return u.createElement(a,null,e)},r),renderNode:(o={},o[c.RG.PARAGRAPH]=function(e,t){return u.createElement(l,null,t)},o[c.RG.HEADING_1]=function(e,t){return u.createElement(s,null,t)},o[c.RG.HEADING_2]=function(e,t){return u.createElement(p,null,t)},o[c.RG.HEADING_3]=function(e,t){return u.createElement(d,null,t)},o)};t.Z=function(e){var t=e.children;return u.createElement(u.Fragment,null,t?(0,i.Z)(t,y):"")}},5761:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(5318),c=n(1071),f=i(n(5329));t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var o=JSON.parse(n);if(!r||!r.length)return(0,c.documentToReactComponents)(o,t);var i={items:[{sys:{type:"Entry"},richText:o}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return u(u({},e),{},{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return u(u({},e),{},{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,f.default)(i,{removeUnresolved:!0});return(0,c.documentToReactComponents)(a[0].richText,t)}}}]);
//# sourceMappingURL=f7fd679e46f5fb1cbc1b506cb8ac354992d56d0c-a6edf122a86185fca520.js.map