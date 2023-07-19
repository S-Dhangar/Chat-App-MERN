import React from 'react'
import {mycontext} from './Home'
export const User = (props) => {
    const imgstyle={
        height:"30px",

        width:"30px",
        marginRight:"20px",
        borderRadius:"50% 50% 50% 50%"
    }
    const boxstyle={
        height:"90px",
       marginBottom:"7px",
       

    }
    
  const present = (e) => {
    e(props.char.name,props.char.photo);

    localStorage.setItem('receiver', props.char._id);

    




  };

  return (
 /*   <div style={boxstyle}>

<h3>{props.char.Name} {props.char.Sname}</h3>

    </div>
    */
    <mycontext.Consumer>
      {(context) => (
        <div>
          <div className="card" style={boxstyle} onClick={() => present(context)}>
            <div className="card-body">
              <h6>
                <img src={props.char.photo} alt="" style={imgstyle} />
                {props.char.name}
              </h6>
              <p style={{ fontSize: '15px', marginLeft: '50px' }}>
                {

                props.char._id
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </mycontext.Consumer>
  );
}
