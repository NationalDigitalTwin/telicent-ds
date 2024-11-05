import{_ as h,u as U,a as I,j as A}from"./DefaultPropsProvider-CCTKYLI5.js";import{c as N}from"./Text-Bdpz0hNF.js";import{S as _,U as D}from"./UserIcon-DKSQbTWz.js";import{_ as n,j as S}from"./extends-EO7Nsyo1.js";import{r as R}from"./index-uubelm5h.js";import{g as M,s as j,c as O,a as T}from"./styled-DM1eSaGT.js";import{c as z}from"./createSvgIcon-D9Qcjewg.js";import{g as E}from"./generateUtilityClasses-C2NGeXhi.js";import{r as L,m as q,a as G}from"./resolveComponentProps-Czjqrhj_.js";import{u as H}from"./TransitionGroupContext-CLVPPxcC.js";const B=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],W=["component","slots","slotProps"],$=["component"];function J(o,e){const{className:r,elementType:t,ownerState:l,externalForwardedProps:a,getSlotOwnerState:i,internalForwardedProps:s}=e,w=h(e,B),{component:F,slots:f={[o]:void 0},slotProps:b={[o]:void 0}}=a;h(a,W);const d=f[o]||t,c=L(b[o],l),v=q(n({className:r},w,{externalForwardedProps:void 0,externalSlotProps:c})),{props:{component:k},internalRef:p}=v,P=h(v.props,$),x=H(p,c==null?void 0:c.ref,e.ref),g=i?i(P):{},u=n({},l,g),m=k,y=G(d,n({},o==="root",!f[o]&&s,P,m&&{as:m},{ref:x}),u);return Object.keys(g).forEach(C=>{delete y[C]}),[d,y]}const K=z(S.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Q(o){return M("MuiAvatar",o)}E("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const V=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],X=o=>{const{classes:e,variant:r,colorDefault:t}=o;return T({root:["root",r,t&&"colorDefault"],img:["img"],fallback:["fallback"]},Q,e)},Y=j("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(o.vars||o).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(o.vars||o).palette.background.default},o.vars?{backgroundColor:o.vars.palette.Avatar.defaultBg}:n({backgroundColor:o.palette.grey[400]},o.applyStyles("dark",{backgroundColor:o.palette.grey[600]})))}]})),Z=j("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(o,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),oo=j(K,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(o,e)=>e.fallback})({width:"75%",height:"75%"});function eo({crossOrigin:o,referrerPolicy:e,src:r,srcSet:t}){const[l,a]=R.useState(!1);return R.useEffect(()=>{if(!r&&!t)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=o,s.referrerPolicy=e,s.src=r,t&&(s.srcset=t),()=>{i=!1}},[o,e,r,t]),l}const ro=R.forwardRef(function(e,r){const t=U({props:e,name:"MuiAvatar"}),{alt:l,children:a,className:i,component:s="div",slots:w={},slotProps:F={},imgProps:f,sizes:b,src:d,srcSet:c,variant:v="circular"}=t,k=h(t,V);let p=null;const P=eo(n({},f,{src:d,srcSet:c})),x=d||c,g=x&&P!=="error",u=n({},t,{colorDefault:!g,component:s,variant:v}),m=X(u),[y,C]=J("img",{className:m.img,elementType:Z,externalForwardedProps:{slots:w,slotProps:{img:n({},f,F.img)}},additionalProps:{alt:l,src:d,srcSet:c,sizes:b},ownerState:u});return g?p=S.jsx(y,n({},C)):a||a===0?p=a:x&&l?p=l[0]:p=S.jsx(oo,{ownerState:u,className:m.fallback}),S.jsx(Y,n({as:s,ownerState:u,className:O(m.root,i),ref:r},k,{children:p}))}),to=({children:o})=>I(_,{rowGap:2,children:[I(_,{direction:"row",columnGap:1,alignItems:"center",children:[A(ro,{variant:"circular-outlined",sx:{width:32,height:32},children:A(D,{color:"primary"})}),A(N,{variant:"h4",children:"User Profile"})]}),o]});to.__docgenInfo={description:"",methods:[],displayName:"UserProfileContent"};export{ro as A,to as U};
