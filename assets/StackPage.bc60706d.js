var c=Object.defineProperty;var n=(t,m)=>c(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText.5f673600.js";import{C as i}from"./ComponentInfo.c0ea0fda.js";import{w as p,P as s,a6 as d,d as e,t as l}from"./index.2116f91f.js";import"./Link.1208e16e.js";import"./PaperCode.7c834132.js";const u=l("<div></div>"),r=p(s)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=u.cloneNode(!0);return d(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
import styled from "@suid/material/styles/styled";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
`;function k(){return e(i,{get name(){return a.name},examples:[{bgcolor:"contrasted",component:o}]})}n(k,"StackPage");export{k as default};