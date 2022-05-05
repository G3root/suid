var C=Object.defineProperty;var l=(e,n)=>C(e,"name",{value:n,configurable:!0});import{q as h,r as F,s as b,v as f,w as v,a as u,f as y,d as m,m as W,A as q,a9 as x,ad as z,ae as M}from"./index.03445290.js";import{F as N}from"./useFormControl.a6d746de.js";function L(e){return F("MuiFormControl",e)}l(L,"getFormControlUtilityClasses");h("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const j=b()({name:"MuiFormControl",selfPropNames:["children","classes","color","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],propDefaults:({set:e})=>e({color:"primary",component:"div",disabled:!1,error:!1,fullWidth:!1,hiddenLabel:!1,margin:"none",required:!1,size:"medium",variant:"outlined"}),utilityClass:L,slotClasses:e=>({root:["root",e.margin!=="none"&&`margin${f(e.margin)}`,e.fullWidth&&"fullWidth"]})}),k=v("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},n)=>({...n.root,...n[`margin${f(e.margin)}`],...e.fullWidth&&n.fullWidth})})(({ownerState:e})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...e.margin==="normal"&&{marginTop:16,marginBottom:8},...e.margin==="dense"&&{marginTop:8,marginBottom:4},...e.fullWidth&&{width:"100%"}})),E=j.component(l(function({allProps:n,classes:i,otherProps:t,props:r}){const[o,s]=u(!1),[d,a]=u(!1);y(()=>{r.disabled&&d()&&a(!1)});const c=l(()=>r.focused!==void 0&&!r.disabled?r.focused:d(),"focused");let g;return m(N.Provider,{value:{get adornedStart(){return!1},setAdornedStart:()=>{},get margin(){return r.margin},get color(){return r.color},get disabled(){return r.disabled},get error(){return r.error},get filled(){return o()},get focused(){return c()},get fullWidth(){return r.fullWidth},get hiddenLabel(){return r.hiddenLabel},get size(){return r.size},onBlur:()=>{a(!1)},onEmpty:()=>{s(!1)},onFilled:()=>{s(!0)},onFocus:()=>{a(!0)},registerEffect:g,get required(){return r.required},get variant(){return r.variant}},get children(){return m(k,W(t,{ownerState:n,get className(){return q(i.root,t.className)},get children(){return r.children}}))}})},"FormControl"));function R(e){const n=l(()=>e.states.reduce((t,r)=>(t[r]=e.props[r],e.muiFormControl&&typeof e.props[r]>"u"&&(t[r]=e.muiFormControl[r]),t),{}),"compose"),i=x({});return z(()=>{const t=n();M(()=>{for(const o in t)i[o]!==t[o]&&(i[o]=t[o]);const r=Object.keys(t);for(const o in i)r.includes(o)||delete i[o]})}),i}l(R,"formControlState");export{E as F,R as f};