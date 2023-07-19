import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    
  
    const formStyle = {
marginTop:"10%",
marginLeft:"40%",
width: '300px',
  height: '300px',
  borderRadius: '8px',
  backgroundColor: '#f8f8f8',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
  
    const inputStyle = {
      width: '100%',
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    };
  
    const buttonStyle = {
      width: '30%',
      padding: '8px',
      borderRadius: '4px',
      color:"white",
      margin:"26px",
      background: 'blue',
      border: 'none',
      cursor: 'pointer',
    };
    const SignupUser = () =>{
        navigate('/signup');
    }
  const LoginUser = async(e) =>{
    e.preventDefault();
    const data = await fetch('http://localhost:5000/signin',{
        method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email,password})

    });
    console.log("what")
    if(data.ok){
        const response = await data.json();
        localStorage.setItem('users', JSON.stringify(response.user));
        localStorage.setItem('user',JSON.stringify(response.me));
        //const userdata = JSON.parse(localStorage.getItem('user'));
        window.alert("login successfull");
        navigate('/Home');

    }
    else{
        window.alert("login failed: Please provide right login credentials")
    }
  }
    return (
      <div style={formStyle}>
        <h2>Signin Page</h2>
        <form method='POST'>
         
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={buttonStyle} onClick={LoginUser}>
            Login
          </button>
          <button type="submit" style={buttonStyle} onClick={SignupUser}>
            Signup
          </button>
        </form>
      </div>
    );
}

export default Login