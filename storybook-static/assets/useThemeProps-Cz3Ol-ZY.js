import{n as t}from"./createTheme-BI2OWDpv.js";import{u as p}from"./useTheme-BOvJgVym.js";function m(n){const{theme:e,name:o,props:r}=n;return!e||!e.components||!e.components[o]||!e.components[o].defaultProps?r:t(e.components[o].defaultProps,r)}function P({props:n,name:e,defaultTheme:o,themeId:r}){let s=p(o);return r&&(s=s[r]||s),m({theme:s,name:e,props:n})}export{P as u};
