import React, { useState } from 'react';
import VotingComponent from './VotingComponent';
import Alert from './Alert';
import { useEffect } from 'react';

function CheckboxCard({onClick}) {
  const [isGreenLightChecked, setGreenLightChecked] = useState(false);
  const [isSerialNumberChecked, setSerialNumberChecked] = useState(false);
  const [isBeepSoundChecked, setBeepSoundChecked] = useState(false);
  const[showalert,setShowalert]= useState(false);
  const [disabled, setDisabled] = useState(true);

  
  useEffect(() => {
    if (isGreenLightChecked && isSerialNumberChecked && isBeepSoundChecked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isGreenLightChecked, isSerialNumberChecked, isBeepSoundChecked]);


  const handleGreenLightChange = () => {
    setGreenLightChecked(!isGreenLightChecked);
  };

  const handleSerialNumberChange = () => {
    setSerialNumberChecked(!isSerialNumberChecked);
  };

  const handleBeepSoundChange = () => {
    setBeepSoundChecked(!isBeepSoundChecked);
  };

  return (
    <div className="card checkbox">
      <div className="card-header">
     
      </div>
      <div className="card-tittle">
        <h5>Criteria for Secure Voting Machine</h5></div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="greenLightCheckbox"
            checked={isGreenLightChecked}
            onChange={handleGreenLightChange}
          />
          <label className="form-check-label" htmlFor="greenLightCheckbox">
            Green Light Indication
          </label><br/>

          <input
            type="checkbox"
            className="form-check-input"
            id="serialNumberCheckbox"
            checked={isSerialNumberChecked}
            onChange={handleSerialNumberChange}
          />
          <label className="form-check-label" htmlFor="serialNumberCheckbox">
            Serial Number Matching
          </label><br/>

          <input
            type="checkbox"
            className="form-check-input"
            id="beepSoundCheckbox"
            checked={isBeepSoundChecked}
            onChange={handleBeepSoundChange}
          />
          <label className="form-check-label" htmlFor="beepSoundCheckbox">
            Beep Sound Indication
          </label><br/>

          <button onClick={onClick} className="btn checkbox-button" disabled={disabled}> Submit </button>
          {showalert && <Alert />}
        </div>
      </div>
    
  );
}

export default CheckboxCard;
