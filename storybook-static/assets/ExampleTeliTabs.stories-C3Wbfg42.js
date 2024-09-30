import{j as P,a as ze,F as ct}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{r as d,a as dt}from"./index-BP8_t0zE.js";import{d as Ae,_ as ie}from"./createTheme-CNnsHS-w.js";import{_ as p}from"./extends-BFqQA52f.js";import{g as ve,s as _,c as $,a as Se}from"./styled-BLGAcoWM.js";import{u as _e}from"./index-BpIClzG7.js";import{u as ut}from"./useTheme-Cxnl1_9N.js";import{j as h}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{u as pt,b as me}from"./TransitionGroupContext-Cc1z3uP3.js";import{d as He}from"./debounce-Be36O1Ab.js";import{o as De}from"./ownerWindow-HkKU3E4x.js";import{g as xe}from"./generateUtilityClasses-DWDXFugI.js";import{u as ge}from"./DefaultPropsProvider-O1PffH9H.js";import{u as ae}from"./useSlotProps-C0aSIFYh.js";import{c as Xe}from"./createSvgIcon-BK8_stpa.js";import{B as Ue}from"./ButtonBase-zNROK4sl.js";import{o as bt}from"./ownerDocument-DW-IO8s5.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./resolveComponentProps-CRsKqwAv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-rM2yqL0Y.js";import"./SvgIcon-DbzBai8R.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";let Y;function Ye(){if(Y)return Y;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),Y="reverse",e.scrollLeft>0?Y="default":(e.scrollLeft=1,e.scrollLeft===0&&(Y="negative")),document.body.removeChild(e),Y}function ft(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ye()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function mt(e){return ve("MuiTab",e)}const L=xe("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),ht=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],vt=e=>{const{classes:t,textColor:r,fullWidth:n,wrapped:s,icon:c,label:m,selected:f,disabled:u}=e,x={root:["root",c&&m&&"labelIcon",`textColor${Ae(r)}`,n&&"fullWidth",s&&"wrapped",f&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return Se(x,mt,t)},St=_(Ue,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Ae(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped,{[`& .${L.iconWrapper}`]:t.iconWrapper}]}})(({theme:e,ownerState:t})=>p({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${L.iconWrapper}`]:p({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${L.selected}`]:{opacity:1},[`&.${L.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${L.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${L.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),xt=d.forwardRef(function(t,r){const n=ge({props:t,name:"MuiTab"}),{className:s,disabled:c=!1,disableFocusRipple:m=!1,fullWidth:f,icon:u,iconPosition:x="top",indicator:T,label:y,onChange:v,onClick:B,onFocus:k,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:R,wrapped:ce=!1}=n,D=ie(n,ht),q=p({},n,{disabled:c,disableFocusRipple:m,selected:I,icon:!!u,iconPosition:x,label:!!y,fullWidth:f,textColor:H,wrapped:ce}),X=vt(q),F=u&&y&&d.isValidElement(u)?d.cloneElement(u,{className:$(X.iconWrapper,u.props.className)}):u,Q=M=>{!I&&v&&v(M,R),B&&B(M)},U=M=>{g&&!I&&v&&v(M,R),k&&k(M)};return h.jsxs(St,p({focusRipple:!m,className:$(X.root,s),ref:r,role:"tab","aria-selected":I,disabled:c,onClick:Q,onFocus:U,ownerState:q,tabIndex:I?0:-1},D,{children:[x==="top"||x==="start"?h.jsxs(d.Fragment,{children:[F,y]}):h.jsxs(d.Fragment,{children:[y,F]}),T]}))}),gt=Xe(h.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),yt=Xe(h.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Ct(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Tt(e,t,r,n={},s=()=>{}){const{ease:c=Ct,duration:m=300}=n;let f=null;const u=t[e];let x=!1;const T=()=>{x=!0},y=v=>{if(x){s(new Error("Animation cancelled"));return}f===null&&(f=v);const B=Math.min(1,(v-f)/m);if(t[e]=c(B)*(r-u)+u,B>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(y)};return u===r?(s(new Error("Element already at target position")),T):(requestAnimationFrame(y),T)}const Bt=["onChange"],It={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function wt(e){const{onChange:t}=e,r=ie(e,Bt),n=d.useRef(),s=d.useRef(null),c=()=>{n.current=s.current.offsetHeight-s.current.clientHeight};return pt(()=>{const m=He(()=>{const u=n.current;c(),u!==n.current&&t(n.current)}),f=De(s.current);return f.addEventListener("resize",m),()=>{m.clear(),f.removeEventListener("resize",m)}},[t]),d.useEffect(()=>{c(),t(n.current)},[t]),h.jsx("div",p({style:It,ref:s},r))}function Et(e){return ve("MuiTabScrollButton",e)}const Rt=xe("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Mt=["className","slots","slotProps","direction","orientation","disabled"],Nt=e=>{const{classes:t,orientation:r,disabled:n}=e;return Se({root:["root",r,n&&"disabled"]},Et,t)},Pt=_(Ue,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>p({width:40,flexShrink:0,opacity:.8,[`&.${Rt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Wt=d.forwardRef(function(t,r){var n,s;const c=ge({props:t,name:"MuiTabScrollButton"}),{className:m,slots:f={},slotProps:u={},direction:x}=c,T=ie(c,Mt),y=_e(),v=p({isRtl:y},c),B=Nt(v),k=(n=f.StartScrollButtonIcon)!=null?n:gt,I=(s=f.EndScrollButtonIcon)!=null?s:yt,g=ae({elementType:k,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),H=ae({elementType:I,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return h.jsx(Pt,p({component:"div",className:$(B.root,m),ref:r,role:null,ownerState:v,tabIndex:null},T,{children:x==="left"?h.jsx(k,p({},g)):h.jsx(I,p({},H))}))});function zt(e){return ve("MuiTabs",e)}const he=xe("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Lt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Le=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,$e=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,re=(e,t,r)=>{let n=!1,s=r(e,t);for(;s;){if(s===e.firstChild){if(n)return;n=!0}const c=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||c)s=r(e,s);else{s.focus();return}}},$t=e=>{const{vertical:t,fixed:r,hideScrollbar:n,scrollableX:s,scrollableY:c,centered:m,scrollButtonsHideMobile:f,classes:u}=e;return Se({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",n&&"hideScrollbar",s&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",m&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[n&&"hideScrollbar"]},zt,u)},kt=_("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${he.scrollButtons}`]:t.scrollButtons},{[`& .${he.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>p({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${he.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Ft=_("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>p({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ot=_("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>p({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),jt=_("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>p({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),At=_(wt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),ke={},_t=d.forwardRef(function(t,r){const n=ge({props:t,name:"MuiTabs"}),s=ut(),c=_e(),{"aria-label":m,"aria-labelledby":f,action:u,centered:x=!1,children:T,className:y,component:v="div",allowScrollButtonsMobile:B=!1,indicatorColor:k="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=Wt,scrollButtons:R="auto",selectionFollowsFocus:ce,slots:D={},slotProps:q={},TabIndicatorProps:X={},TabScrollButtonProps:F={},textColor:Q="primary",value:U,variant:M="standard",visibleScrollbar:de=!1}=n,Ve=ie(n,Lt),w=M==="scrollable",C=g==="vertical",K=C?"scrollTop":"scrollLeft",Z=C?"top":"left",ee=C?"bottom":"right",ue=C?"clientHeight":"clientWidth",V=C?"height":"width",O=p({},n,{component:v,allowScrollButtonsMobile:B,indicatorColor:k,orientation:g,vertical:C,scrollButtons:R,textColor:Q,variant:M,visibleScrollbar:de,fixed:!w,hideScrollbar:w&&!de,scrollableX:w&&!C,scrollableY:w&&C,centered:x&&!w,scrollButtonsHideMobile:!B}),W=$t(O),Ge=ae({elementType:D.StartScrollButtonIcon,externalSlotProps:q.startScrollButtonIcon,ownerState:O}),Je=ae({elementType:D.EndScrollButtonIcon,externalSlotProps:q.endScrollButtonIcon,ownerState:O}),[ye,Qe]=d.useState(!1),[j,Ce]=d.useState(ke),[Te,Ze]=d.useState(!1),[Be,et]=d.useState(!1),[Ie,tt]=d.useState(!1),[we,ot]=d.useState({overflow:"hidden",scrollbarWidth:0}),Ee=new Map,N=d.useRef(null),A=d.useRef(null),Re=()=>{const o=N.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ft(o,c?"rtl":"ltr"),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let i;if(o&&U!==!1){const a=A.current.children;if(a.length>0){const b=a[Ee.get(U)];i=b?b.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},G=me(()=>{const{tabsMeta:o,tabMeta:l}=Re();let i=0,a;if(C)a="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(a=c?"right":"left",l&&o){const S=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(c?-1:1)*(l[a]-o[a]+S)}const b={[a]:i,[V]:l?l[V]:0};if(isNaN(j[a])||isNaN(j[V]))Ce(b);else{const S=Math.abs(j[a]-b[a]),E=Math.abs(j[V]-b[V]);(S>=1||E>=1)&&Ce(b)}}),pe=(o,{animation:l=!0}={})=>{l?Tt(K,N.current,o,{duration:s.transitions.duration.standard}):N.current[K]=o},Me=o=>{let l=N.current[K];C?l+=o:(l+=o*(c?-1:1),l*=c&&Ye()==="reverse"?-1:1),pe(l)},Ne=()=>{const o=N.current[ue];let l=0;const i=Array.from(A.current.children);for(let a=0;a<i.length;a+=1){const b=i[a];if(l+b[ue]>o){a===0&&(l=o);break}l+=b[ue]}return l},rt=()=>{Me(-1*Ne())},lt=()=>{Me(Ne())},nt=d.useCallback(o=>{ot({overflow:null,scrollbarWidth:o})},[]),st=()=>{const o={};o.scrollbarSizeListener=w?h.jsx(At,{onChange:nt,className:$(W.scrollableX,W.hideScrollbar)}):null;const i=w&&(R==="auto"&&(Te||Be)||R===!0);return o.scrollButtonStart=i?h.jsx(H,p({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ge},orientation:g,direction:c?"right":"left",onClick:rt,disabled:!Te},F,{className:$(W.scrollButtons,F.className)})):null,o.scrollButtonEnd=i?h.jsx(H,p({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Je},orientation:g,direction:c?"left":"right",onClick:lt,disabled:!Be},F,{className:$(W.scrollButtons,F.className)})):null,o},Pe=me(o=>{const{tabsMeta:l,tabMeta:i}=Re();if(!(!i||!l)){if(i[Z]<l[Z]){const a=l[K]+(i[Z]-l[Z]);pe(a,{animation:o})}else if(i[ee]>l[ee]){const a=l[K]+(i[ee]-l[ee]);pe(a,{animation:o})}}}),te=me(()=>{w&&R!==!1&&tt(!Ie)});d.useEffect(()=>{const o=He(()=>{N.current&&G()});let l;const i=S=>{S.forEach(E=>{E.removedNodes.forEach(J=>{var z;(z=l)==null||z.unobserve(J)}),E.addedNodes.forEach(J=>{var z;(z=l)==null||z.observe(J)})}),o(),te()},a=De(N.current);a.addEventListener("resize",o);let b;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(A.current.children).forEach(S=>{l.observe(S)})),typeof MutationObserver<"u"&&(b=new MutationObserver(i),b.observe(A.current,{childList:!0})),()=>{var S,E;o.clear(),a.removeEventListener("resize",o),(S=b)==null||S.disconnect(),(E=l)==null||E.disconnect()}},[G,te]),d.useEffect(()=>{const o=Array.from(A.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&w&&R!==!1){const i=o[0],a=o[l-1],b={root:N.current,threshold:.99},S=fe=>{Ze(!fe[0].isIntersecting)},E=new IntersectionObserver(S,b);E.observe(i);const J=fe=>{et(!fe[0].isIntersecting)},z=new IntersectionObserver(J,b);return z.observe(a),()=>{E.disconnect(),z.disconnect()}}},[w,R,Ie,T==null?void 0:T.length]),d.useEffect(()=>{Qe(!0)},[]),d.useEffect(()=>{G()}),d.useEffect(()=>{Pe(ke!==j)},[Pe,j]),d.useImperativeHandle(u,()=>({updateIndicator:G,updateScrollButtons:te}),[G,te]);const We=h.jsx(jt,p({},X,{className:$(W.indicator,X.className),ownerState:O,style:p({},j,X.style)}));let oe=0;const at=d.Children.map(T,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?oe:o.props.value;Ee.set(l,oe);const i=l===U;return oe+=1,d.cloneElement(o,p({fullWidth:M==="fullWidth",indicator:i&&!ye&&We,selected:i,selectionFollowsFocus:ce,onChange:I,textColor:Q,value:l},oe===1&&U===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),it=o=>{const l=A.current,i=bt(l).activeElement;if(i.getAttribute("role")!=="tab")return;let b=g==="horizontal"?"ArrowLeft":"ArrowUp",S=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&c&&(b="ArrowRight",S="ArrowLeft"),o.key){case b:o.preventDefault(),re(l,i,$e);break;case S:o.preventDefault(),re(l,i,Le);break;case"Home":o.preventDefault(),re(l,null,Le);break;case"End":o.preventDefault(),re(l,null,$e);break}},be=st();return h.jsxs(kt,p({className:$(W.root,y),ownerState:O,ref:r,as:v},Ve,{children:[be.scrollButtonStart,be.scrollbarSizeListener,h.jsxs(Ft,{className:W.scroller,ownerState:O,style:{overflow:we.overflow,[C?`margin${c?"Left":"Right"}`:"marginBottom"]:de?void 0:-we.scrollbarWidth},ref:N,children:[h.jsx(Ot,{"aria-label":m,"aria-labelledby":f,"aria-orientation":g==="vertical"?"vertical":null,className:W.flexContainer,ownerState:O,onKeyDown:it,ref:A,role:"tablist",children:at}),ye&&We]}),be.scrollButtonEnd]}))}),qe=({selectedTabIndex:e,...t})=>P(_t,{className:"gap-x-3",textColor:"secondary",indicatorColor:"secondary",value:e,...t});qe.__docgenInfo={description:"",methods:[],displayName:"TeliTabs",props:{selectedTabIndex:{required:!0,tsType:{name:"number"},description:"The value of the currently selected `Tab`."}},composes:["Omit"]};const ne=({tabIndex:e,className:t,...r})=>P(xt,{className:t,...Ht(e),...r});function Ht(e){if(e)return{id:`teli-tab-${e}`,"aria-controls":`teli-tabpanel-${e}`}}ne.__docgenInfo={description:"",methods:[],displayName:"TeliTab",props:{tabIndex:{required:!0,tsType:{name:"number"},description:""}},composes:["Omit"]};const se=({tabIndex:e,selectedTabIndex:t,children:r,...n})=>P("div",{role:"tabpanel",hidden:t!==e,id:`teli-tabpanel-${e}`,"aria-labelledby":`teli-tab-${e}`,className:"py-2",...n,children:r});se.__docgenInfo={description:"",methods:[],displayName:"TeliTabPanel",props:{tabIndex:{required:!0,tsType:{name:"number"},description:""},selectedTabIndex:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ke=()=>{const[e,t]=dt.useState(0);return ze(ct,{children:[ze(qe,{selectedTabIndex:e,onChange:(n,s)=>{t(s)},children:[P(ne,{label:"Item one",tabIndex:0}),P(ne,{label:"Item two",tabIndex:1}),P(ne,{label:"Item three",tabIndex:3})]}),P(se,{selectedTabIndex:e,tabIndex:0,children:"Item one content"}),P(se,{selectedTabIndex:e,tabIndex:1,children:"Item two content"}),P(se,{selectedTabIndex:e,tabIndex:2,children:"Item three content"})]})},ho={title:"Components/TeliTabs",component:Ke},le={render:Ke,parameters:{docs:{source:{type:"dynamic"}}}};var Fe,Oe,je;le.parameters={...le.parameters,docs:{...(Fe=le.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: TabsExample,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(je=(Oe=le.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};const vo=["BasicTabs"];export{le as BasicTabs,vo as __namedExportsOrder,ho as default};
