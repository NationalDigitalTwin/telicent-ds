import{r,R as c}from"./index-uubelm5h.js";const o=typeof window<"u"?r.useLayoutEffect:r.useEffect;function i(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function h(t){const e=r.useRef(t);return o(()=>{e.current=t}),r.useRef((...n)=>(0,e.current)(...n)).current}function E(...t){return r.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{i(n,e)})},t)}const s={};function f(t,e){const n=r.useRef(s);return n.current===s&&(n.current=t(e)),n}const a=[];function l(t){r.useEffect(t,a)}class u{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new u}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function I(){const t=f(u.create).current;return l(t.disposeEffect),t}const p=c.createContext(null);export{p as T,o as a,u as b,I as c,h as d,i as s,E as u};