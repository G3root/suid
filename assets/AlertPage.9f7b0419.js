var A=Object.defineProperty;var a=(e,r)=>A(e,"name",{value:r,configurable:!0});import{c as s,j as C,k as y,l as k,m,s as d,P as M,w as g,x as p,I as x}from"./index.f8c435ad.js";import{t as c,d as n,m as S,S as u,g as I}from"./vendor.7f6460ea.js";import{C as $}from"./ComponentInfo.056394a0.js";import{S as z}from"./copyText.f8718ad2.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";import"./Grid.67791fa5.js";const L=c('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',4,!0);var N=s(()=>L.cloneNode(!0),"Close");const T=c('<svg><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',4,!0);var w=s(()=>T.cloneNode(!0),"ErrorOutline");const R=c('<svg><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>',4,!0);var b=s(()=>R.cloneNode(!0),"InfoOutlined");const O=c('<svg><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>',4,!0);var E=s(()=>O.cloneNode(!0),"ReportProblemOutlined");const H=c('<svg><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>',4,!0);var W=s(()=>H.cloneNode(!0),"SuccessOutlined");function _(e){return y("MuiAlert",e)}a(_,"getAlertUtilityClass");const h=C("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),B=k()({name:"MuiAlert",selfPropNames:["action","classes","closeText","color","icon","iconMapping","onClose","role","severity","variant"],utilityClass:_,slotClasses:e=>({root:["root",`${e.variant}${m(e.color||e.severity)}`,`${e.variant}`],icon:["icon"],message:["message"],action:["action"]}),propDefaults:({set:e})=>e({closeText:"Close",role:"alert",severity:"success",variant:"standard"})}),U=d(M,{name:"MuiAlert",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,r[i.variant],r[`${i.variant}${m(i.color||i.severity)}`]]}})(({theme:e,ownerState:r})=>{const i=e.palette.mode==="light"?g:p,o=e.palette.mode==="light"?p:g,t=r.color||r.severity;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",...t&&r.variant==="standard"&&{color:i(e.palette[t].light,.6),backgroundColor:o(e.palette[t].light,.9),[`& .${h.icon}`]:{color:e.palette.mode==="dark"?e.palette[t].main:e.palette[t].light}},...t&&r.variant==="outlined"&&{color:i(e.palette[t].light,.6),border:`1px solid ${e.palette[t].light}`,[`& .${h.icon}`]:{color:e.palette.mode==="dark"?e.palette[t].main:e.palette[t].light}},...t&&r.variant==="filled"&&{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.mode==="dark"?e.palette[t].dark:e.palette[t].main}}}),V=d("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=d("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,r)=>r.message})({padding:"8px 0"}),v=d("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Z={success:()=>n(W,{fontSize:"inherit"}),warning:()=>n(E,{fontSize:"inherit"}),error:()=>n(w,{fontSize:"inherit"}),info:()=>n(b,{fontSize:"inherit"})},l=B.component(a(function({allProps:r,classes:i,otherProps:o,props:t}){return n(U,S({get role(){return t.role},elevation:0,ownerState:r,get className(){return I(i.root,o.className)}},o,{get children(){return[n(u,{get when(){return t.icon!==!1},get children(){return n(V,{ownerState:r,get className(){return i.icon},get children(){return t.icon||t.iconMapping?.[t.severity]||Z[t.severity]}})}}),n(P,{ownerState:r,get className(){return i.message},get children(){return o.children}}),n(u,{get when(){return!!t.action},get children(){return n(v,{get className(){return i.action},get children(){return t.action}})}}),n(u,{get when(){return!t.action&&t.onClose},get children(){return n(v,{ownerState:r,get className(){return i.action},get children(){return n(x,{size:"small",get["aria-label"](){return t.closeText},get title(){return t.closeText},color:"inherit",get onClick(){return t.onClose},get children(){return n(N,{fontSize:"small"})}})}})}})]}}))},"Alert"));function f(){return n(z,{sx:{width:"100%"},spacing:2,get children(){return[n(l,{severity:"error",children:"This is an error alert \u2014 check it out!"}),n(l,{severity:"warning",children:"This is a warning alert \u2014 check it out!"}),n(l,{severity:"info",children:"This is an info alert \u2014 check it out!"}),n(l,{severity:"success",children:"This is a success alert \u2014 check it out!"})]}})}a(f,"BasicAlerts");f.code=`import Alert from "@suid/material/Alert";
import Stack from "@suid/material/Stack";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert \u2014 check it out!</Alert>
      <Alert severity="warning">This is a warning alert \u2014 check it out!</Alert>
      <Alert severity="info">This is an info alert \u2014 check it out!</Alert>
      <Alert severity="success">This is a success alert \u2014 check it out!</Alert>
    </Stack>
  );
}
`;function X(){return n($,{get name(){return l.name},examples:[f],docsName:"alerts"})}a(X,"AlertPage");export{X as default};
