import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{F as u,m as c}from"./index-EaYoR7Ht.js";import{A as d}from"./Avatar-CynWoDHF.js";const p=({alt:m,firstName:t="",lastName:r="",src:s})=>{const[o,f]=n.useState("");let a=e.jsx(u,{id:"user-avatar-icon",icon:c,size:"sm"});return o&&(a=e.jsx(e.Fragment,{children:o})),s&&(a=null),n.useEffect(()=>{const i=t.trim(),l=r.trim();if(i&&l){f(`${i.charAt(0)}${l.charAt(0)}`);return}},[t,r]),e.jsx(d,{id:"user-avatar",src:s,alt:m,sx:{width:35,height:35},children:a})};p.__docgenInfo={description:"",methods:[],displayName:"TeliUserAvatar",props:{firstName:{defaultValue:{value:'""',computed:!1},required:!1},lastName:{defaultValue:{value:'""',computed:!1},required:!1}}};export{p as T};
