var u=Object.defineProperty;var n=(t,e)=>u(t,"name",{value:e,configurable:!0});import{a as c,u as h,a6 as l,d as o,h as f,B as g,T as r,aw as i,t as x}from"./index.2116f91f.js";import{C as y}from"./ComponentInfo.c0ea0fda.js";import"./Link.1208e16e.js";import"./copyText.5f673600.js";import"./PaperCode.7c834132.js";const b=x("<div></div>");function s(){const[t,e]=c(!1),d=n(()=>e(!0),"handleOpen"),m=n(()=>e(!1),"handleClose"),p=h();return(()=>{const a=b.cloneNode(!0);return l(a,o(f,{onClick:d,children:"Open modal"}),null),l(a,o(i,{get open(){return t()},onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(g,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:p.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(r,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(r,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}n(s,"BasicModal");s.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import Typography from "@suid/material/Typography";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export default function BasicModal() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open()}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: "24px",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
`;function w(){return o(y,{get name(){return i.name},examples:[s]})}n(w,"ModalPage");export{w as default};