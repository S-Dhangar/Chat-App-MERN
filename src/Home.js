

import './App.css';
import BG from "./images/imag.avif";
import Chats from './Chats';
import Leftnav from './Leftnav';
import Rightnav from './Rightnav';
import Conversations from './Conversations';
import React, { useState } from 'react';
import { createContext } from 'react';
export const mycontext=createContext();



function Home() {
    //const userdata = JSON.parse(localStorage.getItem('user'));
        //console.log(userdata.name);
      
const [name,setname] = useState();
const [photo,setPhoto] = useState();
const set=(e,e1)=>{
  setname(e);
  setPhoto(e1);
}
  const style = {
    backgroundColor:"rgba(225, 225, 225, 0.5)",
    display:"flex",
    paddingTop: '40px',
    paddingLeft: '40px',
  }
  const leftStyle={
    marginRight:"2px",
    borderRadius:"8px 0px 0px 0px",
    backgroundColor:"white",
    width:"400px",
    height:"535px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // Add the box shadow
  }
  const rightStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '870px',
    height: '535px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // Add the box shadow
  };
       
  return (
    <div className="App" style={style}>
 
     <div className="leftpart" style={leftStyle}>
  <Leftnav/>
  <mycontext.Provider value={set}>
    <Chats/>
  </mycontext.Provider>
     </div>
     <div className="rightpart" style={rightStyle}>
{name && <Rightnav name={name} photo={photo}/>}
{name && <Conversations/>}
     </div>
    </div>
  );
}

export default Home;
