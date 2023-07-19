import React, { useState } from 'react'
import chat from "./images/chat.png";
import Dotmenu from './Dotmenu';
import { useEffect } from 'react';
export default function Leftnav() {
  const style = {
    margin: "20px",
    alignItems: "center",
    display: "flex",
    
    flexDirection: "column",
    position: "sticky"
  }
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    setOpen(false);
  },[setOpen])
  return (
    <div>
      <div style={style}>
        <div> 
             <h5><img src={chat} alt="" style={{ height: "30px",marginRight:"30px" }} />Chats            <button style={{ fontWeight: "bolder", background: "#FFFFFF", border: "none",marginLeft:"60px" }} onClick={() => { if(open===false) setOpen(true); else setOpen(false) }}>...</button></h5>
             {
          open && <div style={{textAlign:"Right"}}> < Dotmenu setOpen={setOpen} /> </div>}  </div>
   { /*    <div> 
           <button style={{ fontWeight: "bolder", background: "#FFFFFF", border: "none" }} onClick={() => { setOpen(true) }}>...</button> {
          open && <Dotmenu />
        }
        </div>

      */}


      </div>

    </div>
  )
}
