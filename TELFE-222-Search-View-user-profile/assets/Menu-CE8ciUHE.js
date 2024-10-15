import{e as C,k as H,u as j,_ as z}from"./DefaultPropsProvider-BtHbA0VU.js";import{_ as h,j as I}from"./extends-EO7Nsyo1.js";import{r as p}from"./index-uubelm5h.js";import{g as B,s as F,c as K,a as O,r as ee}from"./styled-BYpVOPyr.js";import{g as U}from"./generateUtilityClasses-BIknaJ37.js";import{a as oe}from"./ButtonBase-DCYB2nLY.js";import{u as te}from"./index-CB99OiCM.js";import{g as se,P as re,a as ne,u as W}from"./Popover-CEasQiDS.js";import{a as ae,u as ie}from"./TransitionGroupContext-CLVPPxcC.js";import{o as G}from"./utils-C0stDFpQ.js";function le(e){return B("MuiIconButton",e)}const ce=U("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ue=["edge","children","className","color","disabled","disableFocusRipple","size"],pe=e=>{const{classes:o,disabled:t,color:s,edge:i,size:d}=e,l={root:["root",t&&"disabled",s!=="default"&&`color${C(s)}`,i&&`edge${C(i)}`,`size${C(d)}`]};return O(l,le,o)},de=F(oe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="default"&&o[`color${C(t.color)}`],t.edge&&o[`edge${C(t.edge)}`],o[`size${C(t.size)}`]]}})(({theme:e,ownerState:o})=>h({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:H(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var t;const s=(t=(e.vars||e).palette)==null?void 0:t[o.color];return h({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&h({color:s==null?void 0:s.main},!o.disableRipple&&{"&:hover":h({},s&&{backgroundColor:e.vars?`rgba(${s.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:H(s.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${ce.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ke=p.forwardRef(function(o,t){const s=j({props:o,name:"MuiIconButton"}),{edge:i=!1,children:d,className:l,color:n="default",disabled:g=!1,disableFocusRipple:b=!1,size:y="medium"}=s,M=z(s,ue),P=h({},s,{edge:i,color:n,disabled:g,disableFocusRipple:b,size:y}),f=pe(P);return I.jsx(de,h({className:K(f.root,l),centerRipple:!0,focusRipple:!b,disabled:g,ref:t},M,{ownerState:P,children:d}))}),fe=p.createContext({});function ge(e){return B("MuiList",e)}U("MuiList",["root","padding","dense","subheader"]);const me=["children","className","component","dense","disablePadding","subheader"],he=e=>{const{classes:o,disablePadding:t,dense:s,subheader:i}=e;return O({root:["root",!t&&"padding",s&&"dense",i&&"subheader"]},ge,o)},be=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disablePadding&&o.padding,t.dense&&o.dense,t.subheader&&o.subheader]}})(({ownerState:e})=>h({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),ve=p.forwardRef(function(o,t){const s=j({props:o,name:"MuiList"}),{children:i,className:d,component:l="ul",dense:n=!1,disablePadding:g=!1,subheader:b}=s,y=z(s,me),M=p.useMemo(()=>({dense:n}),[n]),P=h({},s,{component:l,dense:n,disablePadding:g}),f=he(P);return I.jsx(fe.Provider,{value:M,children:I.jsxs(be,h({as:l,className:K(f.root,d),ref:t,ownerState:P},y,{children:[b,i]}))})}),ye=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function _(e,o,t){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t?null:e.firstChild}function V(e,o,t){return e===o?t?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t?null:e.lastChild}function q(e,o){if(o===void 0)return!0;let t=e.innerText;return t===void 0&&(t=e.textContent),t=t.trim().toLowerCase(),t.length===0?!1:o.repeating?t[0]===o.keys[0]:t.indexOf(o.keys.join(""))===0}function w(e,o,t,s,i,d){let l=!1,n=i(e,o,o?t:!1);for(;n;){if(n===e.firstChild){if(l)return!1;l=!0}const g=s?!1:n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||!q(n,d)||g)n=i(e,n,t);else return n.focus(),!0}return!1}const Me=p.forwardRef(function(o,t){const{actions:s,autoFocus:i=!1,autoFocusItem:d=!1,children:l,className:n,disabledItemsFocusable:g=!1,disableListWrap:b=!1,onKeyDown:y,variant:M="selectedMenu"}=o,P=z(o,ye),f=p.useRef(null),N=p.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ae(()=>{i&&f.current.focus()},[i]),p.useImperativeHandle(s,()=>({adjustStyleForScrollbar:(r,{direction:c})=>{const m=!f.current.style.width;if(r.clientHeight<f.current.clientHeight&&m){const v=`${se(G(r))}px`;f.current.style[c==="rtl"?"paddingLeft":"paddingRight"]=v,f.current.style.width=`calc(100% + ${v})`}return f.current}}),[]);const E=r=>{const c=f.current,m=r.key,v=G(c).activeElement;if(m==="ArrowDown")r.preventDefault(),w(c,v,b,g,_);else if(m==="ArrowUp")r.preventDefault(),w(c,v,b,g,V);else if(m==="Home")r.preventDefault(),w(c,null,b,g,_);else if(m==="End")r.preventDefault(),w(c,null,b,g,V);else if(m.length===1){const a=N.current,x=m.toLowerCase(),T=performance.now();a.keys.length>0&&(T-a.lastTime>500?(a.keys=[],a.repeating=!0,a.previousKeyMatched=!0):a.repeating&&x!==a.keys[0]&&(a.repeating=!1)),a.lastTime=T,a.keys.push(x);const k=v&&!a.repeating&&q(v,a);a.previousKeyMatched&&(k||w(c,v,!1,g,_,a))?r.preventDefault():a.previousKeyMatched=!1}y&&y(r)},L=ie(f,t);let u=-1;p.Children.forEach(l,(r,c)=>{if(!p.isValidElement(r)){u===c&&(u+=1,u>=l.length&&(u=-1));return}r.props.disabled||(M==="selectedMenu"&&r.props.selected||u===-1)&&(u=c),u===c&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(u+=1,u>=l.length&&(u=-1))});const S=p.Children.map(l,(r,c)=>{if(c===u){const m={};return d&&(m.autoFocus=!0),r.props.tabIndex===void 0&&M==="selectedMenu"&&(m.tabIndex=0),p.cloneElement(r,m)}return r});return I.jsx(ve,h({role:"menu",ref:L,className:n,onKeyDown:E,tabIndex:i?0:-1},P,{children:S}))});function Pe(e){return B("MuiMenu",e)}U("MuiMenu",["root","paper","list"]);const Re=["onEntering"],xe=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Ce={vertical:"top",horizontal:"right"},Ie={vertical:"top",horizontal:"left"},Le=e=>{const{classes:o}=e;return O({root:["root"],paper:["paper"],list:["list"]},Pe,o)},Se=F(re,{shouldForwardProp:e=>ee(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),ke=F(ne,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),we=F(Me,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),Oe=p.forwardRef(function(o,t){var s,i;const d=j({props:o,name:"MuiMenu"}),{autoFocus:l=!0,children:n,className:g,disableAutoFocusItem:b=!1,MenuListProps:y={},onClose:M,open:P,PaperProps:f={},PopoverClasses:N,transitionDuration:E="auto",TransitionProps:{onEntering:L}={},variant:u="selectedMenu",slots:S={},slotProps:r={}}=d,c=z(d.TransitionProps,Re),m=z(d,xe),v=te(),a=h({},d,{autoFocus:l,disableAutoFocusItem:b,MenuListProps:y,onEntering:L,PaperProps:f,transitionDuration:E,TransitionProps:c,variant:u}),x=Le(a),T=l&&!b&&P,k=p.useRef(null),J=(R,D)=>{k.current&&k.current.adjustStyleForScrollbar(R,{direction:v?"rtl":"ltr"}),L&&L(R,D)},Q=R=>{R.key==="Tab"&&(R.preventDefault(),M&&M(R,"tabKeyDown"))};let $=-1;p.Children.map(n,(R,D)=>{p.isValidElement(R)&&(R.props.disabled||(u==="selectedMenu"&&R.props.selected||$===-1)&&($=D))});const A=(s=S.paper)!=null?s:ke,X=(i=r.paper)!=null?i:f,Y=W({elementType:S.root,externalSlotProps:r.root,ownerState:a,className:[x.root,g]}),Z=W({elementType:A,externalSlotProps:X,ownerState:a,className:x.paper});return I.jsx(Se,h({onClose:M,anchorOrigin:{vertical:"bottom",horizontal:v?"right":"left"},transformOrigin:v?Ce:Ie,slots:{paper:A,root:S.root},slotProps:{root:Y,paper:Z},open:P,ref:t,transitionDuration:E,TransitionProps:h({onEntering:J},c),ownerState:a},m,{classes:N,children:I.jsx(we,h({onKeyDown:Q,actions:k,autoFocus:l&&($===-1||b),autoFocusItem:T,variant:u},y,{className:K(x.list,y.className),children:n}))}))});export{Ke as I,fe as L,Oe as M};
