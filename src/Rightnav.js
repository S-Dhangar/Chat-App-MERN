import React from 'react';
import vid from "./images/vid.jpg";
import call from "./images/call.png";

export default function Rightnav(props) {
  const imgstyle = {
    margin: "20px",
    height: "40px",
    width: "40px",
    cursor:"pointer",

    borderRadius: "50% 50% 50% 50%"
  };

  const style = {
    height: "80px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    position: "sticky"
  };

  return (
    <div>
      <div className="nav" style={style}>
            <h6 style={{width:"300px",cursor:"pointer"}}>
              <img src={props.photo} alt="" style={imgstyle} />
              {props.name}
            </h6>
          
        <div className="logos" style={{ display: "flex", alignItems: "center", marginTop: "20px", marginLeft: "400px" }}>
          <img src={vid} alt="" style={{ height: "40px", width: "40px",        cursor:"pointer",
 }} />
          <img src={call} alt="" style={{ height: "30px", width: "30px",        cursor:"pointer", marginLeft: "50px" }} />
        </div>
      </div>
    </div>
  );
}
