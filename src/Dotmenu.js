import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Dotmenu = (props) => {
    const navigate=useNavigate();
    const style={
        fontSize: "15px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        ":hover": {
          backgroundColor: "gray",
        },
    }
    const handleLogout = () => {
        localStorage.clear();
navigate('/');
    }
  
    const handleAbout = () => {
  
    }
 
  return (
    <div>
        <div style={style} onClick={handleLogout}>Logout</div>
        <div style={style}>Profile</div>

    </div>
  )
}

export default Dotmenu