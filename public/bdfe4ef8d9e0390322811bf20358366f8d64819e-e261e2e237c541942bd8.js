(self.webpackChunkfotohakon=self.webpackChunkfotohakon||[]).push([[767],{4520:function(e,t,n){var r=n(8).default;function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},7229:function(e,t,n){"use strict";var r=n(2122),o=n(1253),i=n(7294),a=n(2585),s=n(3288),u=n(1010),c=n(1177),l=n(7969),d=i.forwardRef((function(e,t){var n=e.edge,s=void 0!==n&&n,u=e.children,d=e.classes,p=e.className,f=e.color,h=void 0===f?"default":f,b=e.disabled,v=void 0!==b&&b,g=e.disableFocusRipple,y=void 0!==g&&g,m=e.size,w=void 0===m?"medium":m,k=(0,o.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(c.Z,(0,r.Z)({className:(0,a.Z)(d.root,p,"default"!==h&&d["color".concat((0,l.Z)(h))],v&&d.disabled,"small"===w&&d["size".concat((0,l.Z)(w))],{start:d.edgeStart,end:d.edgeEnd}[s]),centerRipple:!0,focusRipple:!y,disabled:v,ref:t},k),i.createElement("span",{className:d.label},u))}));t.Z=(0,s.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,u.U1)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},7739:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return d},setRef:function(){return p.Z},unstable_useId:function(){return g.Z},unsupportedProp:function(){return f},useControlled:function(){return h.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return y.Z}});var r=n(7969),o=n(9349),i=n(8230),a=n(6278);function s(e,t){return function(){return null}}var u=n(9963),c=n(3226),l=n(5165);function d(e){return function(){return null}}var p=n(9113);function f(e,t,n,r,o){return null}var h=n(2760),b=n(6986),v=n(395),g=n(8249),y=n(5500)},6461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(7739)},7035:function(e,t,n){"use strict";n.d(t,{YD:function(){return p}});var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=new Map,a=new Map,s=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=u(e),n=i.get(t);if(!n){var r,o=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=o.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:o},i.set(t,n)}return n}(n),o=r.id,a=r.observer,s=r.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),i.delete(o))}}function l(e){return"function"!=typeof e.children}var d=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),l(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.trackVisibility,i=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!l(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,s=i.as,u=i.tag,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,r.createElement)(s||u||"div",o({ref:this.handleNode},c),a)},i}(r.Component);function p(e){var t=void 0===e?{}:e,n=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,s=t.root,u=t.triggerOnce,l=t.skip,d=t.initialInView,p=(0,r.useRef)(),f=(0,r.useState)({inView:!!d}),h=f[0],b=f[1],v=(0,r.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),l||e&&(p.current=c(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&u&&p.current&&(p.current(),p.current=void 0)}),{root:s,rootMargin:a,threshold:n,trackVisibility:i,delay:o}))}),[Array.isArray(n)?n.toString():n,s,a,u,l,i,o]);(0,r.useEffect)((function(){p.current||!h.entry||u||l||b({inView:!!d})}));var g=[v,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},8618:function(e,t,n){"use strict";var r=n(7294),o=n(8605),i=n(979),a=i.ZP.div.withConfig({displayName:"image__AbosluteWrapper",componentId:"sc-1u6vj54-0"})(["",""],(function(e){var t;return e.absolute?"\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom:0;\n    right:0;\n    height: 100%;\n    width:100%;\n    object-fit: fill;\n    ":"\n    height: "+(null!==(t=e.height)&&void 0!==t?t:"auto")+";\n    display: flex;"})),s=(0,i.ZP)(o.G).withConfig({displayName:"image__GImage",componentId:"sc-1u6vj54-1"})(["max-width:100%;transition:filter 200ms ease;position:relative;"," "," ",""],(function(e){return e.maxheight?"max-width: calc("+e.maxheight+" * "+e.ratio+");":"height: 100%;"}),(function(e){return e.bw?"\n      filter: grayscale();\n      ":""}),(function(e){return"\n\n    &::after {\n      transition: opacity 200ms ease;\n      content:'';\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width:100%;\n      z-index: 1;\n      background-color: black;\n      opacity: "+e.darken+";\n    }\n\n    "}));t.Z=function(e){var t=e.imageData,n=e.maxheight,i=e.absolute,u=void 0!==i&&i,c=e.bw,l=void 0!==c&&c,d=e.darken,p=void 0===d?0:d,f=e.height,h=(0,o.e)(t);return r.createElement(a,{absolute:u?1:0,height:f},h&&r.createElement(s,{image:h,alt:t.title,ratio:h.width/h.height,maxheight:n,absolute:u?1:0,bw:l?1:0,darken:p}))}}}]);
//# sourceMappingURL=bdfe4ef8d9e0390322811bf20358366f8d64819e-e261e2e237c541942bd8.js.map