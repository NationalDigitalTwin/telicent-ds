import{k as l,u as g,_ as x}from"./DefaultPropsProvider-_Lew82y0.js";import{_ as s,j as m}from"./extends-l96ZYLL7.js";import{r as P}from"./index-BBkUAzwr.js";import{g as b,s as R,c as _,a as $}from"./styled-BJBODTqz.js";import{g as k}from"./generateUtilityClasses-Dvcw8qpp.js";const v=a=>{let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,(e/100).toFixed(2)};function y(a){return b("MuiPaper",a)}k("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const C=["className","component","elevation","square","variant"],q=a=>{const{square:e,elevation:o,variant:t,classes:n}=a,r={root:["root",t,!e&&"rounded",t==="elevation"&&`elevation${o}`]};return $(r,y,n)},M=R("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:a,ownerState:e})=>{var o;return s({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!e.square&&{borderRadius:a.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(a.vars||a).palette.divider}`},e.variant==="elevation"&&s({boxShadow:(a.vars||a).shadows[e.elevation]},!a.vars&&a.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(e.elevation))}, ${l("#fff",v(e.elevation))})`},a.vars&&{backgroundImage:(o=a.vars.overlays)==null?void 0:o[e.elevation]}))}),A=P.forwardRef(function(e,o){const t=g({props:e,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:u=!1,variant:d="elevation"}=t,c=x(t,C),i=s({},t,{component:r,elevation:p,square:u,variant:d}),f=q(i);return m.jsx(M,s({as:r,ownerState:i,className:_(f.root,n),ref:o},c))});export{A as P};
