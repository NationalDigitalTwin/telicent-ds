import{j as n}from"./jsx-runtime-CexXSJP5.js";import{u as j}from"./useTheme-CmkBszCQ.js";import"./Container-DpRykjJ-.js";import{F as Q,a as X}from"./FlexBox-B9w_HhTY.js";import{S as Y}from"./SvgIcon-C5tcZsyu.js";import{g as V,_ as w,r as y,h as M}from"./createTheme-BI2OWDpv.js";import{_ as d}from"./extends-BFqQA52f.js";import{r as B}from"./index-BP8_t0zE.js";import{g as W,s as G,c as Z,a as _,e as r2}from"./styled-CwhWP0k9.js";import{g as D}from"./generateUtilityClasses-CPjhs1S_.js";import{P as o2}from"./Paper-DEGHyXeH.js";import{u as O}from"./DefaultPropsProvider-D6MvNwoC.js";import{S as N}from"./Stack-8PiQyM1k.js";import{T as e2}from"./Typography-DE0lXvn2.js";import{B as R}from"./Box-Jzim7HDp.js";import{F as t2,e as i2}from"./index-EaYoR7Ht.js";import{a as a2,T as n2}from"./Text-D8QQO482.js";import{A as s2}from"./Avatar-CynWoDHF.js";function l2(r){return W("MuiAppBar",r)}D("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const c2=["className","color","enableColorOnDark","position"],p2=r=>{const{color:o,position:e,classes:t}=r,i={root:["root",`color${V(o)}`,`position${V(e)}`]};return _(i,l2,t)},k=(r,o)=>r?`${r==null?void 0:r.replace(")","")}, ${o})`:o,u2=G(o2,{name:"MuiAppBar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,o[`position${V(e.position)}`],o[`color${V(e.color)}`]]}})(({theme:r,ownerState:o})=>{const e=r.palette.mode==="light"?r.palette.grey[100]:r.palette.grey[900];return d({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!r.vars&&d({},o.color==="default"&&{backgroundColor:e,color:r.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:r.palette[o.color].main,color:r.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},r.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&d({backgroundColor:"transparent",color:"inherit"},r.palette.mode==="dark"&&{backgroundImage:"none"})),r.vars&&d({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette.AppBar.defaultBg:k(r.vars.palette.AppBar.darkBg,r.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?r.vars.palette.text.primary:k(r.vars.palette.AppBar.darkColor,r.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette[o.color].main:k(r.vars.palette.AppBar.darkBg,r.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?r.vars.palette[o.color].contrastText:k(r.vars.palette.AppBar.darkColor,r.vars.palette[o.color].contrastText)},!["inherit","transparent"].includes(o.color)&&{backgroundColor:"var(--AppBar-background)"},{color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),d2=B.forwardRef(function(o,e){const t=O({props:o,name:"MuiAppBar"}),{className:i,color:a="primary",enableColorOnDark:l=!1,position:p="fixed"}=t,u=w(t,c2),c=d({},t,{color:a,position:p,enableColorOnDark:l}),s=p2(c);return n.jsx(u2,d({square:!0,component:"header",ownerState:c,elevation:4,className:Z(s.root,i,p==="fixed"&&"mui-fixed"),ref:e},u))}),T=B.createContext();function f2(r){return W("MuiGrid",r)}const m2=[0,1,2,3,4,5,6,7,8,9,10],g2=["column-reverse","column","row-reverse","row"],x2=["nowrap","wrap-reverse","wrap"],h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=D("MuiGrid",["root","container","item","zeroMinWidth",...m2.map(r=>`spacing-xs-${r}`),...g2.map(r=>`direction-xs-${r}`),...x2.map(r=>`wrap-xs-${r}`),...h.map(r=>`grid-xs-${r}`),...h.map(r=>`grid-sm-${r}`),...h.map(r=>`grid-md-${r}`),...h.map(r=>`grid-lg-${r}`),...h.map(r=>`grid-xl-${r}`)]),C2=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function C(r){const o=parseFloat(r);return`${o}${String(r).replace(String(o),"")||"px"}`}function h2({theme:r,ownerState:o}){let e;return r.breakpoints.keys.reduce((t,i)=>{let a={};if(o[i]&&(e=o[i]),!e)return t;if(e===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(e==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=y({values:o.columns,breakpoints:r.breakpoints.values}),p=typeof l=="object"?l[i]:l;if(p==null)return t;const u=`${Math.round(e/p*1e8)/1e6}%`;let c={};if(o.container&&o.item&&o.columnSpacing!==0){const s=r.spacing(o.columnSpacing);if(s!=="0px"){const f=`calc(${u} + ${C(s)})`;c={flexBasis:f,maxWidth:f}}}a=d({flexBasis:u,flexGrow:0,maxWidth:u},c)}return r.breakpoints.values[i]===0?Object.assign(t,a):t[r.breakpoints.up(i)]=a,t},{})}function v2({theme:r,ownerState:o}){const e=y({values:o.direction,breakpoints:r.breakpoints.values});return M({theme:r},e,t=>{const i={flexDirection:t};return t.indexOf("column")===0&&(i[`& > .${v.item}`]={maxWidth:"none"}),i})}function P({breakpoints:r,values:o}){let e="";Object.keys(o).forEach(i=>{e===""&&o[i]!==0&&(e=i)});const t=Object.keys(r).sort((i,a)=>r[i]-r[a]);return t.slice(0,t.indexOf(e))}function b2({theme:r,ownerState:o}){const{container:e,rowSpacing:t}=o;let i={};if(e&&t!==0){const a=y({values:t,breakpoints:r.breakpoints.values});let l;typeof a=="object"&&(l=P({breakpoints:r.breakpoints.values,values:a})),i=M({theme:r},a,(p,u)=>{var c;const s=r.spacing(p);return s!=="0px"?{marginTop:`-${C(s)}`,[`& > .${v.item}`]:{paddingTop:C(s)}}:(c=l)!=null&&c.includes(u)?{}:{marginTop:0,[`& > .${v.item}`]:{paddingTop:0}}})}return i}function k2({theme:r,ownerState:o}){const{container:e,columnSpacing:t}=o;let i={};if(e&&t!==0){const a=y({values:t,breakpoints:r.breakpoints.values});let l;typeof a=="object"&&(l=P({breakpoints:r.breakpoints.values,values:a})),i=M({theme:r},a,(p,u)=>{var c;const s=r.spacing(p);return s!=="0px"?{width:`calc(100% + ${C(s)})`,marginLeft:`-${C(s)}`,[`& > .${v.item}`]:{paddingLeft:C(s)}}:(c=l)!=null&&c.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${v.item}`]:{paddingLeft:0}}})}return i}function V2(r,o,e={}){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[e[`spacing-xs-${String(r)}`]];const t=[];return o.forEach(i=>{const a=r[i];Number(a)>0&&t.push(e[`spacing-${i}-${String(a)}`])}),t}const B2=G("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r,{container:t,direction:i,item:a,spacing:l,wrap:p,zeroMinWidth:u,breakpoints:c}=e;let s=[];t&&(s=V2(l,c,o));const f=[];return c.forEach(m=>{const g=e[m];g&&f.push(o[`grid-${m}-${String(g)}`])}),[o.root,t&&o.container,a&&o.item,u&&o.zeroMinWidth,...s,i!=="row"&&o[`direction-xs-${String(i)}`],p!=="wrap"&&o[`wrap-xs-${String(p)}`],...f]}})(({ownerState:r})=>d({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},r.wrap!=="wrap"&&{flexWrap:r.wrap}),v2,b2,k2,h2);function y2(r,o){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[`spacing-xs-${String(r)}`];const e=[];return o.forEach(t=>{const i=r[t];if(Number(i)>0){const a=`spacing-${t}-${String(i)}`;e.push(a)}}),e}const $2=r=>{const{classes:o,container:e,direction:t,item:i,spacing:a,wrap:l,zeroMinWidth:p,breakpoints:u}=r;let c=[];e&&(c=y2(a,u));const s=[];u.forEach(m=>{const g=r[m];g&&s.push(`grid-${m}-${String(g)}`)});const f={root:["root",e&&"container",i&&"item",p&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...s]};return _(f,f2,o)},x=B.forwardRef(function(o,e){const t=O({props:o,name:"MuiGrid"}),{breakpoints:i}=j(),a=r2(t),{className:l,columns:p,columnSpacing:u,component:c="div",container:s=!1,direction:f="row",item:m=!1,rowSpacing:g,spacing:$=0,wrap:U="wrap",zeroMinWidth:F=!1}=a,H=w(a,C2),q=g||$,K=u||$,L=B.useContext(T),A=s?p||12:L,I={},z=d({},H);i.keys.forEach(b=>{H[b]!=null&&(I[b]=H[b],delete z[b])});const S=d({},a,{columns:A,container:s,direction:f,item:m,rowSpacing:q,columnSpacing:K,wrap:U,zeroMinWidth:F,spacing:$},I,{breakpoints:i.keys}),J=$2(S);return n.jsx(T.Provider,{value:A,children:n.jsx(B2,d({ownerState:S,className:Z(J.root,l),as:c,ref:e},z))})}),H2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='141'%20height='30'%20viewBox='0%200%20141%2030'%20fill='none'%3e%3cpath%20d='M5.00326%204.72116V2.92553H9.2337V4.96003C9.2337%206.87593%209.2337%208.51177%206.52049%208.51177V8.91208H15.0604V12.5841H9.11344V23.0004C9.11344%2024.9954%209.27324%2025.315%2011.2698%2025.315H14.6618V28.8667H9.91241C6.4793%2028.8667%205.00326%2027.4697%205.00326%2023.918V12.5841H0.253906V8.91208C5.24213%208.91208%205.00326%207.31577%205.00326%204.72116Z'%20fill='black'%20/%3e%3cpath%20d='M16.2598%2018.8492C16.2598%2013.1427%2020.65%208.43282%2026.8754%208.43282C33.2606%208.43282%2037.412%2013.342%2037.412%2020.1259H20.5297C20.8493%2023.1999%2023.3237%2025.6742%2027.1143%2025.6742C29.5095%2025.6742%2031.745%2024.6759%2032.8224%2022.5211H37.0133C36.1353%2026.3513%2032.3826%2029.3857%2027.0747%2029.3857C20.4507%2029.3857%2016.2598%2024.6364%2016.2598%2018.8492ZM32.8619%2017.0931C32.4633%2014.2596%2029.9494%2012.1048%2026.7551%2012.1048C23.6037%2012.1048%2021.0882%2014.2596%2020.6895%2017.0931H32.8619Z'%20fill='black'%20/%3e%3cpath%20d='M40.4043%200.929094H44.5557V28.8652H40.4043V0.929094Z'%20fill='black'%20/%3e%3cpath%20d='M50.8972%200.929586C52.2941%200.929586%2053.411%201.96743%2053.411%203.3644C53.411%204.80091%2052.2941%205.83875%2050.8972%205.83875C49.4607%205.83875%2048.3438%204.80091%2048.3438%203.3644C48.3438%201.96743%2049.4607%200.929586%2050.8972%200.929586ZM48.8215%208.9111H52.9712V28.8657H48.8215V8.9111Z'%20fill='black'%20/%3e%3cpath%20d='M72.4084%2021.8029H76.5994C75.3622%2026.1536%2071.2503%2029.3462%2066.3824%2029.3462C60.4354%2029.3462%2055.6465%2024.6364%2055.6465%2018.8887C55.6465%2013.1426%2060.4354%208.43281%2066.3824%208.43281C71.2503%208.43281%2075.3622%2011.6254%2076.5994%2015.9761H72.4084C71.3311%2013.6616%2069.1763%2012.1048%2066.4615%2012.1048C62.6313%2012.1048%2059.7962%2015.1376%2059.7962%2018.8491C59.7962%2022.6414%2062.6313%2025.6742%2066.4615%2025.6742C69.1763%2025.6742%2071.3311%2024.1174%2072.4084%2021.8029Z'%20fill='black'%20/%3e%3cpath%20d='M79.1914%2018.8492C79.1914%2013.1427%2083.5816%208.43282%2089.807%208.43282C96.1922%208.43282%20100.344%2013.342%20100.344%2020.1259H83.4614C83.781%2023.1999%2086.2553%2025.6742%2090.0476%2025.6742C92.4412%2025.6742%2094.6767%2024.6759%2095.754%2022.5211H99.9449C99.0669%2026.3513%2095.3142%2029.3857%2090.0064%2029.3857C83.3823%2029.3857%2079.1914%2024.6364%2079.1914%2018.8492ZM95.7936%2017.0931C95.3949%2014.2596%2092.881%2012.1048%2089.6868%2012.1048C86.5354%2012.1048%2084.0198%2014.2596%2083.6212%2017.0931H95.7936Z'%20fill='black'%20/%3e%3cpath%20d='M107.689%208.91209V13.3023H108.087C108.886%2010.7473%20111.241%208.4327%20115.151%208.4327C120.42%208.4327%20123.971%2013.0223%20123.971%2018.8886V28.8667H119.861V18.8886C119.861%2014.7784%20117.187%2012.1047%20113.875%2012.1047C110.402%2012.1047%20107.689%2015.0584%20107.689%2018.8886V28.8667H103.539V8.91209H107.689Z'%20fill='black'%20/%3e%3cpath%20d='M129.958%204.72116V2.92553H134.189V4.96003C134.189%206.87593%20134.189%208.51177%20131.476%208.51177V8.91208H140.016V12.5841H134.069V23.0004C134.069%2024.9954%20134.228%2025.315%20136.225%2025.315H139.617V28.8667H134.867C131.434%2028.8667%20129.958%2027.4697%20129.958%2023.918V12.5841H125.209V8.91208C130.197%208.91208%20129.958%207.31577%20129.958%204.72116Z'%20fill='black'%20/%3e%3c/svg%3e",j2=({appName:r,beta:o=!1,position:e="relative",userProfile:t})=>{const i=j();return n.jsxs(d2,{color:"inherit",position:e,sx:{height:70},children:[n.jsxs(N,{direction:"row",spacing:2,alignItems:"center",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%);"},children:[n.jsx(E,{fontSize:"large"}),n.jsx("img",{src:H2,alt:"Telicent",height:28}),n.jsx(e2,{variant:"h1",color:"primary",sx:{fontFamily:"Figtree",fontSize:40},children:r}),o&&n.jsx(R,{position:"absolute",right:-28,bottom:2,fontSize:8,paddingInline:.5,sx:{backgroundColor:i.palette.primary.main,color:i.palette.primary.contrastText},children:"BETA"})]}),t&&n.jsx(N,{sx:{position:"absolute",top:"50%",right:16,transform:"translate(0, -50%)"},children:t})]})};j2.__docgenInfo={description:"",methods:[],displayName:"AppBar",props:{beta:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"relative"',computed:!1},required:!1}}};const E=({width:r=24,height:o=24,transparentBg:e=!1,color:t,sx:i,...a})=>{const l=j();return n.jsx(Q,{sx:{width:"fit-content",height:"fit-content",padding:e?0:.5,backgroundColor:e?"transparent":l.palette.primary.main},children:n.jsx(Y,{width:r,height:o,sx:{width:r,height:o,...i},...a,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49 51",children:n.jsxs("g",{fill:t?"currentColor":l.palette.primary.contrastText,children:[n.jsx("path",{d:"M14.0213 18.9119C11.1503 16.4425 7.52745 15.0966 3.68057 15.0966H0.660156V18.9119H3.68057C6.9466 18.9119 10.0002 20.1865 12.2788 22.4999C14.5541 24.8117 15.807 27.9002 15.807 31.1978V50.7061H19.6224V31.1978C19.6224 26.8928 17.9794 22.8534 14.9972 19.823C14.6835 19.5044 14.3566 19.2007 14.0213 18.9119Z"}),n.jsx("path",{d:"M20.2962 15.0966C20.2016 14.997 20.107 14.8991 20.0107 14.8012C18.9021 13.6809 17.6973 12.6902 16.4161 11.8338C12.9277 9.5038 8.86506 8.18277 4.58835 8.01847C4.28631 8.00686 3.98427 8.00022 3.68057 8.00022V8.01847H0.660156V11.8338H4.52529C8.11162 11.9882 11.5137 13.1167 14.4279 15.0966C15.4502 15.7903 16.4111 16.5885 17.299 17.4847C17.7521 17.9427 18.1786 18.419 18.5785 18.9119C21.3799 22.3605 22.9034 26.6572 22.9034 31.1978V50.7061H26.7187V31.1978C26.7187 26.7816 25.5089 22.5563 23.2519 18.9119C22.4105 17.5527 21.4214 16.2749 20.2962 15.0966Z"}),n.jsx("path",{d:"M48.9188 0.94141H3.68057H0.660156V4.75677H3.68057C8.2029 4.75677 12.5443 5.89025 16.3829 8.01949C18.2582 9.05838 20.0124 10.3363 21.6089 11.8348C21.8396 12.0506 22.0669 12.2713 22.2926 12.497C23.1092 13.3202 23.8643 14.1881 24.5563 15.0976C25.4774 16.3024 26.2872 17.5786 26.9826 18.9113C28.9276 22.6536 29.9615 26.8424 29.9615 31.1971V50.707H33.7769V31.1971C33.7769 26.8938 32.894 22.7283 31.2145 18.9113H48.9188V15.0976H29.1948C28.4862 13.9641 27.6979 12.8737 26.8365 11.8348H48.9188V8.01949H23.061C21.594 6.77481 20.024 5.68447 18.3727 4.75677H48.9188V0.94141Z"})]})})})})};E.__docgenInfo={description:"",methods:[],displayName:"TelicentMark",props:{transparentBg:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{defaultValue:{value:"24",computed:!1},required:!1},height:{defaultValue:{value:"24",computed:!1},required:!1}},composes:["MUISvgIconProps"]};const M2=r=>n.jsx(t2,{icon:i2,...r});M2.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};const A2=({fullName:r,children:o})=>n.jsxs(x,{container:!0,children:[n.jsx(R,{sx:{width:"100%"},marginBottom:2,children:n.jsx(a2,{variant:"h4",children:"User Status"})}),n.jsxs(x,{container:!0,columns:6,alignItems:"center",children:[n.jsx(x,{item:!0,xs:1,children:n.jsx(s2,{variant:"circular-outlined",sx:{width:32,height:32},children:n.jsx(X,{color:"primary"})})}),n.jsx(x,{item:!0,xs:5,children:n.jsx(n2,{variant:"subtitle1",children:r})})]}),n.jsxs(x,{container:!0,columns:6,children:[n.jsx(x,{item:!0,xs:1}),n.jsx(x,{item:!0,xs:5,children:o})]})]});A2.__docgenInfo={description:"",methods:[],displayName:"UserStatus",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{j2 as A,M2 as S,A2 as U};
