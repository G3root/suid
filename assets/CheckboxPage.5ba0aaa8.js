var B=Object.defineProperty;var a=(e,t)=>B(e,"name",{value:t,configurable:!0});import{c as d,t as c,q as $,r as z,s as P,d as o,v as p,w as M,ai as N,y as _,K as h,ab as y,m as i,aj as F,a6 as s,a as H}from"./index.4c2eaa26.js";import{S as R}from"./SwitchBase.a6fe262a.js";import{C as V}from"./ComponentInfo.499e78fa.js";import{F as L}from"./Favorite.1169501f.js";import"./useFormControl.29642d82.js";import"./useControlled.d7e7dd38.js";import"./Link.32e525d3.js";import"./copyText.e62e7e6d.js";import"./PaperCode.1e0fbfc5.js";const S=c('<svg><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',4,!0);var O=d(()=>S.cloneNode(!0),"CheckBox");const U=c('<svg><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>',4,!0);var j=d(()=>U.cloneNode(!0),"CheckBoxOutlineBlank");const q=c('<svg><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></svg>',4,!0);var D=d(()=>q.cloneNode(!0),"IndeterminateCheckBox");function K(e){return z("MuiCheckbox",e)}a(K,"getCheckboxUtilityClass");const u=$("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),A=P()({name:"MuiCheckbox",propDefaults:({set:e})=>e({color:"primary",indeterminate:!1,size:"medium",checkedIcon:()=>o(O,{}),icon:()=>o(j,{}),indeterminateIcon:()=>o(D,{})}),selfPropNames:["checked","checkedIcon","classes","color","disableRipple","disabled","icon","id","indeterminate","indeterminateIcon","inputProps","inputRef","onChange","required","size","value"],utilityClass:K,slotClasses:e=>({root:["root",e.indeterminate&&"indeterminate",`color${p(e.color)}`]})}),E=M(R,{skipProps:N.filter(e=>e!=="classes"),name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.indeterminate&&t.indeterminate,l.color!=="default"&&t[`color${p(l.color)}`]]}})(({theme:e,ownerState:t})=>({color:e.palette.text.secondary,...!t.disableRipple&&{"&:hover":{backgroundColor:_(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...t.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:e.palette[t.color].main},[`&.${u.disabled}`]:{color:e.palette.action.disabled}}})),r=A.component(a(function({allProps:t,classes:l,props:n}){const x=h(()=>n.indeterminate?n.indeterminateIcon:n.icon),g=h(()=>n.indeterminate?n.indeterminateIcon:n.checkedIcon),[,f]=y(t,["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),I=i(()=>n.classes||{},()=>l);return o(F.Provider,{value:{get fontSize(){return n.size}},get children(){return o(E,i({type:"checkbox"},f,{classes:I,get inputProps(){return{["data-indeterminate"]:n.indeterminate,...n.inputProps||{}}},get icon(){return x()},get checkedIcon(){return g()},ownerState:t}))}})},"Checkbox")),G=c("<div></div>"),m={inputProps:{"aria-label":"Checkbox demo"}};function C(){return(()=>{const e=G.cloneNode(!0);return s(e,o(r,i(m,{defaultChecked:!0})),null),s(e,o(r,m),null),s(e,o(r,i(m,{disabled:!0})),null),s(e,o(r,i(m,{disabled:!0,checked:!0})),null),e})()}a(C,"BasicCheckboxes");C.code=`import Checkbox from "@suid/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
`;function b(){const[e,t]=H(!0);return o(r,{get checked(){return e()},onChange:(l,n)=>{t(n)},inputProps:{"aria-label":"controlled"}})}a(b,"ControlledCheckbox");b.code=`import Checkbox from "@suid/material/Checkbox";
import { createSignal } from "solid-js";

export default function ControlledCheckbox() {
  const [checked, setChecked] = createSignal(true);

  return (
    <Checkbox
      checked={checked()}
      onChange={(event, checked) => {
        setChecked(checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
`;const J=c('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Q=c('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>',4,!0);var T=d(()=>[J.cloneNode(!0),Q.cloneNode(!0)],"Bookmark");const W=c('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),X=c('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>',4,!0);var Y=d(()=>[W.cloneNode(!0),X.cloneNode(!0)],"BookmarkBorder");const Z=c('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),w=c('<svg><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>',4,!0);var ee=d(()=>[Z.cloneNode(!0),w.cloneNode(!0)],"FavoriteBorder");const oe=c("<div></div>"),k={inputProps:{"aria-label":"Checkbox demo"}};function v(){return(()=>{const e=oe.cloneNode(!0);return s(e,o(r,i(k,{get icon(){return o(ee,{})},get checkedIcon(){return o(L,{})}})),null),s(e,o(r,i(k,{get icon(){return o(Y,{})},get checkedIcon(){return o(T,{})}})),null),e})()}a(v,"IconCheckboxes");v.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
import BookmarkBorderIcon from "@suid/icons-material/BookmarkBorder";
import Favorite from "@suid/icons-material/Favorite";
import FavoriteBorder from "@suid/icons-material/FavoriteBorder";
import Checkbox from "@suid/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
`;function ue(){return o(V,{get name(){return r.name},docsName:"checkboxes",examples:[C,{title:"Icon",component:v},{title:"Controlled",component:b}]})}a(ue,"CheckboxPage");export{ue as default};
