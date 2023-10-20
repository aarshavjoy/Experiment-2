import React, { useState } from 'react';
import CheckboxCard from './CheckBox';

function LoginAuth({ onClick }) {
  const [name, setName] = useState('');
  const [officialID, setOfficialID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showcheckbox,setShowCheckbox]= useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOfficialIDChange = (e) => {
    setOfficialID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const idPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    if (idPattern.test(officialID)) {
      setErrorMessage('');
    } else {
      setErrorMessage(
        'Invalid official ID. ID should contain a mix of uppercase and lowercase letters, numbers, and special characters, with a minimum length of 6 characters.'
      );
      
    
     
      
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4 className="logins">Authority Login</h4>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Official ID:</label>
          <input
            type="text"
            className="form-control"
            placeholder="E.g; Ab1$cd"
            value={officialID}
            onChange={handleOfficialIDChange}
            required
          />
        </div>
        <button onClick={onClick} type="submit" className="btn btns">
          Login
        </button>
        {showcheckbox && <CheckboxCard />}
      </form>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      
    </div>
  );
}

export default LoginAuth;
