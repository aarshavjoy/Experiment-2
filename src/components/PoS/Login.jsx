
import React, { useState } from 'react';

function Login({ onSuccessfulLogin }) {
  const [name, setName] = useState('');
  const [voterid, setVoterid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleVoteridChange = (e) => {
    setVoterid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccessfulLogin();

    const pattern = /^[A-Za-z]{4}\d{6}$/;

    if (pattern.test(voterid)) {
      // Voter ID is valid, generate the random token
     
      setErrorMessage('');
    } else {
     
      setErrorMessage('Invalid Voter ID. ID Should Start With 4 Letters Followed With 6 Numbers.');
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
          <label>Voter ID:</label>
          <input
            type="text"
            className="form-control"
            placeholder="E.g; ABXD123456"
            value={voterid}
            onChange={handleVoteridChange}
            required
          />
        </div>
        <button type="submit" className="btn btns " >
          Login
        </button>
      </form>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
}

export default Login;
