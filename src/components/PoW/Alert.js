
import Main from "../PoW/Main";
import React, { useState } from 'react';



export default function Alert() {
    const [showMain, setShowMain] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const toggleMain = () => {
        setShowMain(!showMain);
        setShowAlert(false);
      };

  return (
    <div className="alerts">
        {showAlert && (
      <div className="card alerts" style={{ width: '18rem' }}>
      <i className="material-icons">warning</i>
         <div className="card-body">
          <h5 className="card-title">Error</h5>
          <p className="card-text">
          Please login to the official portal immediately due to system tampering.
          </p>
          <button className="btn btnss" onClick={toggleMain}>
          Login
          </button>
        </div>
      </div>
         )}
       {showMain && <Main isVisible={showMain} />} 
    </div>
  );
}
