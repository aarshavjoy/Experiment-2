
import React, { useState } from 'react';
import VotingComponent from './VotingComponent';



export default function Alert({onClick}) {
    const [showAlert, setShowAlert] = useState(false);

    

  return (
    <div className="alerts">
        
      <div className="card alerts" style={{ width: '20rem' }}>
      <i className="fa-solid fa-square-check" style={{ fontSize: '5em', textAlign: 'center', display: 'block', margin: '5% auto' }}></i>
         <div className="card-body">
          <h5 className="alerthead">Success!</h5>
          <p className="card-text">
         Secruity check completed successfully, voting machine is secure to use , continue with your voting process.
          </p>
          <button  onClick={onClick}  className="btn btnss" >
          Continue
          </button>
          {showAlert && <VotingComponent />}
        </div>
      </div>
        
       
    </div>
  );
}
