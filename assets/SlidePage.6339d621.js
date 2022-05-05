var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{a as p,u as a,d as e,B as o,aD as m,P as g,e as u}from"./index.03445290.js";import{C as f}from"./ComponentInfo.5face755.js";import{F as x}from"./FormControlLabel.011c0639.js";import{S}from"./Switch.1093c0b0.js";import"./Link.71f3d46f.js";import"./copyText.a5ff548e.js";import"./PaperCode.5c60fc55.js";import"./formControlState.c20baf6c.js";import"./useFormControl.a6d746de.js";import"./SwitchBase.0d5edb25.js";import"./useControlled.d532c0e7.js";function w(){const n=a();return e(g,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function l(){const[n,r]=p(!1),d=a(),i=u(),h=t(()=>{r(s=>!s)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:d.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(x,{get control(){return e(S,{get checked(){return n()},onChange:h})},label:"Show"}),e(m,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(l,"SimpleSlide");l.code=`import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import FormControlLabel from "@suid/material/FormControlLabel";
import Paper from "@suid/material/Paper";
import Slide from "@suid/material/Slide";
import Switch from "@suid/material/Switch";
import createElementRef from "@suid/system/createElementRef";
import { createSignal } from "solid-js";

function Icon() {
  const theme = useTheme();
  return (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
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

export default function SimpleSlide() {
  const [checked, setChecked] = createSignal(false);
  const theme = useTheme();
  const element = createElementRef();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        width: 240,
        display: "flex",
        padding: 2,
        borderRadius: 1,
        bgcolor: theme.palette.mode === "light" ? "grey.100" : "grey.900",
        overflow: "hidden",
      }}
      ref={element}
    >
      <Box sx={{ width: 200 }}>
        <FormControlLabel
          control={<Switch checked={checked()} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked()} container={element.ref}>
          <Icon />
        </Slide>
      </Box>
    </Box>
  );
}
`;function T(){return e(f,{get name(){return m.name},docsName:"transitions",examples:[l]})}t(T,"SlidePage");export{T as default};