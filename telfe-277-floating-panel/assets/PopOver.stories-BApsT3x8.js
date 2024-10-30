import{a as h,j as n}from"./DefaultPropsProvider-CCTKYLI5.js";import{R as u}from"./index-uubelm5h.js";import{f as v}from"./index-R3fZrLBo.js";import{B as f}from"./Button-BrAHSOy_.js";import{T as g}from"./Text-Bdpz0hNF.js";import{P as c}from"./Popover-BDcVDf82.js";import"./extends-EO7Nsyo1.js";import"./PrimaryButton-C3DkoPa_.js";import"./Button-nE7jradu.js";import"./styled-DM1eSaGT.js";import"./generateUtilityClasses-C2NGeXhi.js";import"./ButtonBase-BqsTvKzc.js";import"./useTheme-DuiTjpwn.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-K53Y7m-L.js";import"./Popover-BCeiGNac.js";import"./utils-CEb430w8.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-Czjqrhj_.js";import"./Paper-ak1QantU.js";const G={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return <div>
        <Button aria-describedby={id} onClick={handleClick}>
          Open Popover
        </Button>
        <PopOver id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 0
      }}>
          <Text>The content of the pop over.</Text>
        </PopOver>
      </div>;
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["Demo"];export{o as Demo,I as __namedExportsOrder,G as default};
