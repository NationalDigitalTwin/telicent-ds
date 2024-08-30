import{j as e}from"./jsx-runtime-CexXSJP5.js";import{F as I,i as y}from"./index-EaYoR7Ht.js";import{T as b}from"./TeliChip-DAG7I11l.js";import{T as P}from"./TeliSpinner-DRh8kcx4.js";import"./ClockRotateLeft-BjWmZ_24.js";import"./TeliAddIcon-CbwSfORU.js";import{T as j}from"./TeliCloseIcon-JFcrqpdS.js";import"./TeliDeleteIcon-ggWi4uOu.js";import"./TeliEditIcon-BvDMgwnY.js";import{T as A}from"./TeliSearchIcon-BX-OU3i7.js";import"./TeliSortIcons-BiII0Lui.js";import{A as R}from"./TeliAutocomplete-DgUdjHQV.js";import{F as q,a as w}from"./Select-Yt9PZUPM.js";import{T as F}from"./TextField-D8pns3DD.js";function N({error:a,fullWidth:l,helperText:i,label:m,loading:p,maxHeight:u,mode:d,placeholder:c,startAdornment:f,width:h,getChipIcon:T=t=>t==null?void 0:t.icon,getOptionLabel:x=t=>(t==null?void 0:t.label)??t,...g}){const t=r=>{if(d==="search"){if(r==="base")return{openOnFocus:!0,autoComplete:!0,autoHighlight:!0};if(r==="InputProps")return{InputProps:{type:"search",startAdornment:e.jsx(A,{size:"sm"})}}}};return e.jsxs(q,{error:a,sx:{width:h},fullWidth:l,children:[e.jsx(R,{disablePortal:!0,clearIcon:e.jsx(j,{}),popupIcon:e.jsx(I,{icon:y}),size:"small",className:"error",loading:p,renderInput:r=>{var o,n,s;return e.jsx(F,{...r,variant:"outlined",label:m,placeholder:c,error:a,InputProps:{...r.InputProps,...(o=t("InputProps"))==null?void 0:o.InputProps,startAdornment:e.jsxs(e.Fragment,{children:[f??((s=(n=t("InputProps"))==null?void 0:n.InputProps)==null?void 0:s.startAdornment),r.InputProps.startAdornment]}),endAdornment:e.jsxs(e.Fragment,{children:[p?e.jsx(P,{color:"inherit",size:14}):null,r.InputProps.endAdornment]})}})},renderTags:(r,o)=>r.map((n,s)=>e.jsx(b,{variant:"tertiary",size:"small",icon:T(n),label:x(n),...o({index:s})})),slotProps:{popper:{modifiers:[{name:"offset",options:{offset:[0,8]}}]}},ListboxProps:{sx:{maxHeight:u}},...t("base"),...g}),i?e.jsx(w,{children:i}):null]})}N.__docgenInfo={description:"",methods:[],displayName:"TeliAutocomplete",props:{error:{required:!1,tsType:{name:"boolean"},description:"If true, the component will be rendered in an error state"},getChipIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Value) => any",signature:{arguments:[{type:{name:"Value"},name:"option"}],return:{name:"any"}}},description:"Used to determine the icon elment of a given option",defaultValue:{value:"(option: any) => option?.icon",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"The label content."},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"The label content."},maxHeight:{required:!1,tsType:{name:"number"},description:"Maximum height of the menu component"},mode:{required:!1,tsType:{name:"literal",value:'"search"'},description:"The autocomplete mode with predefined defaults"},placeholder:{required:!1,tsType:{name:"string"},description:""},startAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element placed before the input element"},width:{required:!1,tsType:{name:"number"},description:"Width of the component."},getOptionLabel:{defaultValue:{value:"(option: Value | any) => option?.label ?? option",computed:!1},required:!1}},composes:["Omit"]};export{N as T};
