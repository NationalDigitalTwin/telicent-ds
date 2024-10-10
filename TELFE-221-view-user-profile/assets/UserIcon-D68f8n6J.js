import{g as B,o as v,p as d,q as R,t as b,v as T,_ as D,w as x,u as I,j as a,a as M}from"./DefaultPropsProvider-BtHbA0VU.js";import{e as N,c as U,a as E,g as G,s as L}from"./styled-BYpVOPyr.js";import{_ as k,j as O}from"./extends-EO7Nsyo1.js";import{r as m}from"./index-uubelm5h.js";import{s as W}from"./styled-BkWK7I8A.js";import{u as $}from"./useThemeProps-2Kac9Ors.js";import{S as w}from"./SvgIcon-BaDrUo6b.js";const A=["component","direction","spacing","divider","children","className","useFlexGap"],q=B(),H=W("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function z(e){return $({props:e,name:"MuiStack",defaultTheme:q})}function J(e,s){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((c,i,t)=>(c.push(i),t<n.length-1&&c.push(m.cloneElement(s,{key:`separator-${t}`})),c),[])}const K=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Q=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},d({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=R(s),i=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=d({values:e.direction,base:i}),f=d({values:e.spacing,base:i});typeof t=="object"&&Object.keys(t).forEach((o,r,l)=>{if(!t[o]){const p=r>0?t[l[r-1]]:"column";t[o]=p}}),n=b(n,v({theme:s},f,(o,r)=>e.useFlexGap?{gap:x(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${K(r?t[r]:e.direction)}`]:x(c,o)}}))}return n=T(s.breakpoints,n),n};function X(e={}){const{createStyledComponent:s=H,useThemeProps:n=z,componentName:c="MuiStack"}=e,i=()=>E({root:["root"]},o=>G(c,o),{}),t=s(Q);return m.forwardRef(function(o,r){const l=n(o),u=N(l),{component:p="div",direction:j="column",spacing:C=0,divider:y,children:g,className:S,useFlexGap:P=!1}=u,V=D(u,A),F={direction:j,spacing:C,useFlexGap:P},_=i();return O.jsx(t,k({as:p,ownerState:F,ref:r,className:U(_.root,S)},V,{children:y?J(g,y):g}))})}const Y=X({createStyledComponent:L("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>I({props:e,name:"MuiStack"})}),Z=e=>a(Y,{...e,children:e.children});Z.__docgenInfo={description:"",methods:[],displayName:"FlexBox"};const ee=e=>a(w,{...e,children:M("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a("circle",{cx:"18",cy:"13.5",r:"3.375",stroke:"currentColor",strokeWidth:"2.25"}),a("path",{d:"M12 25.5V23.25C12 21.5931 13.3431 20.25 15 20.25H21C22.6569 20.25 24 21.5931 24 23.25V25.5",stroke:"currentColor",strokeWidth:"2.25",strokeLinecap:"round"})]})});ee.__docgenInfo={description:"",methods:[],displayName:"UserIcon"};export{Z as F,Y as S,ee as U};
