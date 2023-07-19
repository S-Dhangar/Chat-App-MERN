import React from 'react'
import { User } from './User';
import { useNavigate } from 'react-router-dom';



export default function Chats(props) {
  const navigate = useNavigate();
if(localStorage.length===0){
  navigate('/');
}
 
    const boxstyle={
       padding:"5%",
       overflowY: 'auto',
       border: '1px solid #ccc',
      cursor:"pointer",
       height:"405px",
      
    }
    const me = JSON.parse(localStorage.getItem('user'));

    const userdata = JSON.parse(localStorage.getItem('users'));
    let users = userdata;
    console.log(users);

  return (
    <div>

<div style={boxstyle} className='container'>
{
            users
            .filter(user => user._id !== me._id)
            .map(e => <User key={e._id} char={e} set={props.set} />)
            
}

</div>
        

    </div>
  )
}
