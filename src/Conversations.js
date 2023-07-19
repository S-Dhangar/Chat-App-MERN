import React, { useEffect, useState } from 'react';
import Convo from './Convo';
import io from 'socket.io-client';
const socket = io('http://localhost:5000'); // Replace with your server URL

export default function Conversations() {
  const [value, setvalue] = useState('');
  const [send, setsend] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const change = (e) => {
    setvalue(e.target.value);
  };
  const me = JSON.parse(localStorage.getItem('user'));
  const rec = localStorage.getItem('receiver');
  const sendMessage=async()=>{
      try{
          await fetch('http://localhost:5000/sendmessages',{
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({sender:me._id,receiver:rec,message:value})
        });
        socket.emit('sendMessage',{sender:me._id,receiver:rec,message:value});
        setReceivedMessages((msg) => [...msg, {sender:me._id,receiver:rec,message:value}]);
        setvalue('');
      }
      catch(error)
      {
        console.log(error);
      }
  }

  useEffect(() => {
    socket.emit('login', me._id);
    socket.on('receiveMessage', (messageData) => {
      // Check if the message is received from the correct sender
      if (messageData.sender === rec) {
        setReceivedMessages((prevMessages) => [...prevMessages, messageData]);
      }
    });
  
    // Clean up on component unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, [me._id, rec]);
  
  
  
  
  
  



useEffect(()=>{
  async function getdata(){
  try{
    const response = await fetch('http://localhost:5000/getmessages',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({users:[me._id,rec]})
    });
    const data = await response.json();
    const formattedData = data.map(item =>
      {
        return {
          sender: item.sender,
          receiver: item.users[1],
          message: item.text
        };
      }
      );
    setReceivedMessages(formattedData)
    setsend(true)
  }
  catch(error){
console.log(error);
  }
}
getdata();
console.log("hii")
},[rec,me._id])



  return (
    <div>
      <div className="convo" style={{ overflow: 'scroll', height: '390px' }}>
        {send && <Convo val={receivedMessages} />}
      </div>

      <div className="input-group" style={{ padding: '10px', position: 'sticky' }}>
        <input type="text" onChange={change} className="form-control" placeholder="Type here" value={value} />
        <button
          type="button"
          onClick={sendMessage}
          style={{ fontWeight: 'bold', height: '50px', borderRadius: '7px' }}>
          Send
        </button>
      </div>
    </div>
  );
}
