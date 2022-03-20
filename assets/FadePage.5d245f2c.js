var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{d as m,B as o,F as i,u as c,p as d}from"./index.d6a24491.js";import{C as l}from"./ComponentInfo.9889b205.js";import{a as p,d as e}from"./vendor.4f4857c8.js";import"./copyText.1fe66694.js";import"./PaperCode.ca3f9047.js";function u(){const n=c();return e(d,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=p(!1);return e(o,{sx:{height:180},get children(){return[e(m,{onClick:()=>r(!n()),get children(){return n()?"true":"false"}}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Fade from "@suid/material/Fade";
import Paper from "@suid/material/Paper";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export function Icon() {
  const theme = useTheme();

  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: "1",
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
}
export default function SimpleFade() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Box sx={{ height: 180 }}>
      <Button onClick={() => setChecked(!checked())}>
        {checked() ? "true" : "false"}
      </Button>
      <Box sx={{ display: "flex" }}>
        <Fade in={checked()}>
          <Icon />
        </Fade>
      </Box>
    </Box>
  );
}
`;function F(){return e(l,{get name(){return i.name},docsName:"transitions",examples:[a]})}t(F,"FadePage");export{F as default};
