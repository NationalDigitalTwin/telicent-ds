import{d as y,_ as B}from"./createTheme-CNnsHS-w.js";import{_ as s}from"./extends-BFqQA52f.js";import{r as T}from"./index-BP8_t0zE.js";import{g as W,s as C,e as M,c as R,a as P}from"./styled-BLGAcoWM.js";import{g as _}from"./generateUtilityClasses-DWDXFugI.js";import{j}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{u as U}from"./DefaultPropsProvider-O1PffH9H.js";function N(a){return W("MuiTypography",a)}_("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const D=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=a,e={root:["root",o,a.align!=="inherit"&&`align${y(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return P(e,N,p)},L=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${y(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=a=>$[a]||a,G=T.forwardRef(function(t,r){const n=U({props:t,name:"MuiTypography"}),i=z(n.color),o=M(s({},n,{color:i})),{align:p="inherit",className:e,component:h,gutterBottom:f=!1,noWrap:d=!1,paragraph:l=!1,variant:g="body1",variantMapping:m=u}=o,x=B(o,D),c=s({},o,{align:p,color:i,className:e,component:h,gutterBottom:f,noWrap:d,paragraph:l,variant:g,variantMapping:m}),v=h||(l?"p":m[g]||u[g])||"span",b=E(c);return j.jsx(L,s({as:v,ref:r,ownerState:c,className:R(b.root,e)},x))});export{G as T};
