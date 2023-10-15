import React, { useState } from 'react';

function LoginAuth(props) {
  const [name, setName] = useState('');
  const [officialID, setOfficialID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOfficialIDChange = (e) => {
    setOfficialID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const idPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    if (name.trim() === '') {
      
      setErrorMessage('Please enter your name.');
    } else if (!idPattern.test(officialID)) {
      setErrorMessage(
        'Invalid official ID. ID should contain a mix of uppercase and lowercase letters, numbers, and special characters, with a minimum length of 6 characters.'
      );
    } else {
      
      
      setErrorMessage('');
      props.onButtonClick({ name });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <button type="submit" className="btn btns">
          Login
        </button>
      </form>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
}

export default LoginAuth;
