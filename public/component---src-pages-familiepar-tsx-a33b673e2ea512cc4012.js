(self.webpackChunkfotohakon=self.webpackChunkfotohakon||[]).push([[52],{4271:function(e,t,n){"use strict";var r=n(627),l=n(1177),a=n(7294),i=n(979),o=n(72),m=n(6155),s=n.n(m),u=(0,r.Z)(i.ZP.div.withConfig({displayName:"selectionCard__CheckMark",componentId:"sc-6dn8sw-0"})(["transition:opacity 200ms ease,color 200ms ease;opacity:",";color:",";position:absolute;top:-2.2rem;right:-0.2rem;"],(function(e){return e.selected||e.hover?1:0}),(function(e){return e.theme.palette.grey[e.selected?900:400]}))),c=(0,r.Z)((0,i.ZP)(l.Z).withConfig({displayName:"selectionCard__CardWrapper",componentId:"sc-6dn8sw-1"})(["transition:border-color 200ms ease,transform 200ms ease;border:","px solid ",";padding:","rem;position:relative;background-color:transparent;cursor:pointer;text-align:left;"," min-width:","rem;display:flex;align-items:flex-start;flex-direction:column;font-size:0.9rem;font-family:'Libre Baskerville',serif;&:active{transform:scale(0.98);}& >:last-child{margin-top:auto;}& >:not(:last-child){margin-bottom:0.8rem;}& > h4{margin-top:0;font-size:","rem;}& > ul{padding-left:1rem;}"],(function(e){return e.summary?3:6}),(function(e){return e.theme.palette.grey[e.selected?900:400]}),(function(e){return e.summary?.6:2}),(function(e){return!e.summary&&"flex: 1;"}),(function(e){return e.summary?2:20}),(function(e){return e.summary?1.2:1.8})));t.Z=function(e){var t=e.node,n=e.selected,r=e.onClick,l=e.summary,i=(0,a.useState)(!1),m=i[0],d=i[1];return a.createElement(c,{selected:n?1:0,disableRipple:!0,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onClick:r,summary:l?1:0},!l?a.createElement(a.Fragment,null,a.createElement(u,{selected:n?1:0,hover:m},a.createElement(s(),null)),a.createElement(o.Z,null,t.content)):a.createElement(a.Fragment,null,t.title))}},4900:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(627),l=n(7294),a=n(979),i=(0,r.Z)(a.ZP.div.withConfig({displayName:"sliderWrapper__LinesWrapper",componentId:"u1kc7e-0"})(["display:flex;width:30%;","{display:none;}"],(function(e){return e.theme.breakpoints.up("md")}))),o=a.ZP.div.withConfig({displayName:"sliderWrapper__LineWrapper",componentId:"u1kc7e-1"})(["cursor:pointer;position:relative;display:flex;flex:1;align-items:center;transition:transform 200ms ease;transform:translateX(0.4em);width:20%;--marg:0.6rem;margin-top:calc(-1 * var(--marg));margin-bottom:var(--marg);& > span:nth-child(1){width:100%;height:2px;background-color:black;border-top-right-radius:10px;border-bottom-right-radius:10px;}& > span:nth-child(2),& > span:nth-child(3){position:absolute;right:0;width:2em;height:2px;background-color:black;transition:transform 200ms ease;transform-origin:right;border-top-right-radius:10px;border-bottom-right-radius:10px;}& > span:nth-child(2){transform:translateY(0.04em) translateX(0.01em) rotateZ(45deg);}& > span:nth-child(3){transform:translateY(-0.04em) translateX(0.01em) rotateZ(-45deg);}"]),m=a.ZP.div.withConfig({displayName:"sliderWrapper__OptionsLabelWrapper",componentId:"u1kc7e-2"})(["display:flex;justify-content:space-between;"]),s=(0,r.Z)(a.ZP.h2.withConfig({displayName:"sliderWrapper__OptionsLabelHeading",componentId:"u1kc7e-3"})(["font-size:2.6rem;margin-bottom:1rem;","{font-size:2rem;}"],(function(e){return e.theme.breakpoints.down("md")}))),u=(0,r.Z)(a.ZP.div.withConfig({displayName:"sliderWrapper__SliderWrapper",componentId:"u1kc7e-4"})(["& > *{flex-shrink:0;}",""],(function(e){return e.summary?"\n      display: flex;\n      flex-wrap: wrap;\n      overflow: auto;\n      margin: 0 -1rem;\n      margin-bottom: -1rem;\n      padding: 0 1rem;\n\n      & > *:not(:last-child) {\n        margin-right: 1rem;\n        margin-bottom: 1rem\n      }\n      ":"\n      display: flex;\n      overflow: auto;\n      margin: -2rem -2rem;\n      padding: 2rem 2rem;\n\n      & > *:not(:last-child) {\n        margin-right: 3rem;\n      }\n\n      & > *:nth-last-child(2) {\n        margin-right: 1rem;\n      }\n      \n      "+e.theme.breakpoints.up("md")+" {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 2rem;\n        margin: -2rem;\n        padding: 2rem;\n        & > * {\n          min-width: 0;\n        }\n        & > *:not(:last-child) {\n          margin-right: 0;\n        }\n  "}))),c=function(e){var t,n=e.children,r=e.summary,a=void 0!==r&&r,c=e.title,d=(0,l.useRef)(),p=function(e,t,n){var r,l=!0,a=t/n*20,i=0,o=0,m=a/t;r=requestAnimationFrame((function n(){if(Math.abs(t)-Math.abs(i)<1&&(l=!1),!l)return cancelAnimationFrame(r);var s;e.scrollLeft+=(s=o,(1-Math.pow(1-s,3))*a),i+=a,o+=m,r=requestAnimationFrame(n)}))};return l.createElement(l.Fragment,null,l.createElement(m,null,l.createElement(s,null,c),!a&&l.createElement(i,null,l.createElement(o,{onClick:function(){null!=d&&d.current&&p(d.current,-500,300)},style:{transform:"rotateZ(180deg)"}},l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)),l.createElement(o,{onClick:function(){null!=d&&d.current&&p(d.current,500,300)}},l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)))),l.createElement(u,{ref:d,summary:null!==(t=a.valueOf())&&void 0!==t&&t},n,l.createElement("div",{style:{width:.1}})))}},5015:function(e,t,n){"use strict";n.r(t);var r=n(9850),l=n(7294),a=n(1232),i=n(9580),o=n(6718),m=n(4915),s=n(3197),u=n(4271),c=n(258),d=n(4900),p=n(7481),f=n(72),h=n(9601),g=n(1529),E=n(9504);t.default=function(e){var t,n,b,v,k=e.data.contentfulFamiliepar,y=(0,l.useState)(),Z=y[0],w=y[1];return l.createElement("div",null,l.createElement(g.Z,{title:"Familie/par",image:null!==(t=k.seoBilde)&&void 0!==t&&null!==(n=t.file)&&void 0!==n&&n.url?"https:"+(null===(b=k.seoBilde)||void 0===b||null===(v=b.file)||void 0===v?void 0:v.url):void 0}),l.createElement(h.Z,null),(null==k?void 0:k.topText)&&l.createElement(p.$0,null,l.createElement(p.W2,{style:{textAlign:"center"}},l.createElement(f.Z,null,k.topText),l.createElement("br",null),l.createElement(E.r,{to:a.familyPortfolioLink},"Portfolio"))),l.createElement(p.$0,{id:"pakker"},l.createElement(p.W2,{style:{textAlign:"center"},width:"sm"},l.createElement(i.n,null,l.createElement(f.Z,null,k.optionsIntro)))),l.createElement(p.$0,null,l.createElement(p.W2,null,l.createElement(d.Z,null,k.solutions.map((function(e,t){return l.createElement(u.Z,{selected:Z===e.title.toUpperCase(),node:e,key:"ps"+t,onClick:function(){return w(Z===e.title.toUpperCase()?null:e.title.toUpperCase())}})}))))),l.createElement(p.$0,{id:"booking"},l.createElement(p.W2,null,l.createElement(s.Z,null),l.createElement(i.q,null,"Send meg en melding"),l.createElement(m.Fu,{name:"familieparbooking",autoComplete:"off",method:"POST","data-netlify":"true",action:"/portfolio/familiepar"},l.createElement("input",{type:"hidden",name:"form-name",value:"familieparbooking"}),l.createElement(r.Z,{id:"fname",name:"Navn",label:"Navn",required:!0,fullWidth:!0}),l.createElement(m.bz,null,l.createElement(r.Z,{id:"fphone",name:"Mobil",label:"Mobil",required:!0}),l.createElement(r.Z,{id:"femail",name:"E-post",type:"email",label:"Epost",required:!0})),l.createElement("h3",null,"Pakke"),l.createElement(d.Z,{summary:!0},k.solutions.map((function(e,t){return l.createElement(u.Z,{key:"phots-"+t,summary:!0,selected:Z===e.title.toUpperCase(),node:e,onClick:function(){return w(Z===e.title.toUpperCase()?null:e.title.toUpperCase())}})}))),l.createElement("input",{name:"Pakke",defaultValue:null!=Z?Z:"",hidden:!0}),l.createElement(r.Z,{id:"freference",name:"Referanse",label:"Hvordan hørte dere om meg?",multiline:!0,fullWidth:!0,rows:6}),l.createElement(r.Z,{id:"fsubject",name:"OmBryllupet",label:"Skriv litt om fotogaferingen og hvorfor vi er en god match",multiline:!0,required:!0,fullWidth:!0,rows:6}),l.createElement(r.Z,{id:"fmessage",name:"Spørsmål",label:"Fortell meg hva dere lurer på",multiline:!0,required:!0,fullWidth:!0,rows:6}),l.createElement(c.Z,{onClick:function(){console.log("submit")}})))),l.createElement(o.Z,null))}},6155:function(e,t,n){var r=n(7294);function l(e){return r.createElement("svg",e,r.createElement("path",{d:"M3 52.5L23.5 73L67.5 3",stroke:"currentColor",strokeWidth:"6"}))}l.defaultProps={width:"71",height:"80",viewBox:"0 0 71 80",fill:"none",style:{color:"inherit"}},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-familiepar-tsx-a33b673e2ea512cc4012.js.map