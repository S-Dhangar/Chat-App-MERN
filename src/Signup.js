import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup= () => {
    const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo,setPhoto] = useState();

  
  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const photoData = reader.result; // This will be a base64-encoded string
      setPhoto(photoData);
    };
    reader.readAsDataURL(selectedPhoto);
  };
 
    const Signup = ()=>{
        navigate('/');
    }
  const submit = async(e) =>{
e.preventDefault();
console.log("what")

    const data = await fetch('http://localhost:5000/signup',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({name,email,password,photo})
      });

    if(data.ok){
        window.alert('Registration Successfull');
        navigate('/');
    }
    else{
        console.log(data.status);
        window.alert('Registration fail');

    }
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form method='POST' style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
        <h2 style={{ textAlign: 'center' }}>Signup Page</h2>
        <div>
          <label htmlFor="name">Photo:</label>
          <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />
        <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={submit} type="submit" style={{ padding: '10px 20px', margin: '12px', background: 'blue', color: 'white', border: 'none', borderRadius:"4px" }}>
            Signup
          </button>
          <button onClick={Signup} type="submit" style={{ padding: '10px 20px', margin: '12px', background: 'blue', color: 'white', border: 'none', borderRadius:"4px" }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
