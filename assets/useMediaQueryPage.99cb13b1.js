var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{b as a}from"./index.d6a24491.js";import{C as s}from"./ComponentInfo.9889b205.js";import{t as i,v as o,d as p}from"./vendor.4f4857c8.js";import"./copyText.1fe66694.js";import"./PaperCode.ca3f9047.js";const u=o("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return p(s,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
