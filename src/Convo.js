import React from 'react';

export default function Convo(props) {
  const me = JSON.parse(localStorage.getItem('user'));

  const style = {
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "white",
    width: "30%",
    height: "auto",
    marginLeft:"5%",
    marginTop: "10px",
  };
const mychatStyle={
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "hsl(143, 70%, 68%)",
  width: "30%",
  height: "auto",
  marginLeft:"60%",
  marginTop: "10px",

}
  return (
    <div>
      {props.val.map((e, index) => (
        <div key={index} className="convo" style={ me._id===(e.sender || e.receiver) ? mychatStyle : style}>
         
        <p style={{fontSize:"20px"}}>{e.message}</p>
          

        </div>
      ))}
    </div>
  );
}
