import{_ as S,j as y}from"./extends-EO7Nsyo1.js";import{e as v,u as _,_ as z}from"./DefaultPropsProvider-BtHbA0VU.js";import{r as x}from"./index-uubelm5h.js";import{g as C,s as I,c as R,a as w}from"./styled-BYpVOPyr.js";import{g as b}from"./generateUtilityClasses-BIknaJ37.js";function j(o){return C("MuiSvgIcon",o)}b("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],B=o=>{const{color:t,fontSize:i,classes:l}=o,e={root:["root",t!=="inherit"&&`color${v(t)}`,`fontSize${v(i)}`]};return w(e,j,l)},M=I("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,i.color!=="inherit"&&t[`color${v(i.color)}`],t[`fontSize${v(i.fontSize)}`]]}})(({theme:o,ownerState:t})=>{var i,l,e,p,d,a,h,u,m,n,s,c,r;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(i=o.transitions)==null||(l=i.create)==null?void 0:l.call(i,"fill",{duration:(e=o.transitions)==null||(e=e.duration)==null?void 0:e.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(d=p.pxToRem)==null?void 0:d.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((u=o.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,35))||"2.1875rem"}[t.fontSize],color:(n=(s=(o.vars||o).palette)==null||(s=s[t.color])==null?void 0:s.main)!=null?n:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(r=(o.vars||o).palette)==null||(r=r.action)==null?void 0:r.disabled,inherit:void 0}[t.color]}}),E=x.forwardRef(function(t,i){const l=_({props:t,name:"MuiSvgIcon"}),{children:e,className:p,color:d="inherit",component:a="svg",fontSize:h="medium",htmlColor:u,inheritViewBox:m=!1,titleAccess:n,viewBox:s="0 0 24 24"}=l,c=z(l,A),r=x.isValidElement(e)&&e.type==="svg",g=S({},l,{color:d,component:a,fontSize:h,instanceFontSize:t.fontSize,inheritViewBox:m,viewBox:s,hasSvgAsChild:r}),f={};m||(f.viewBox=s);const $=B(g);return y.jsxs(M,S({as:a,className:R($.root,p),focusable:"false",color:u,"aria-hidden":n?void 0:!0,role:n?"img":void 0,ref:i},f,c,r&&e.props,{ownerState:g,children:[r?e.props.children:e,n?y.jsx("title",{children:n}):null]}))});E.muiName="SvgIcon";export{E as S};