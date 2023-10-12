import React from 'react';

function Token({ token, onClose }) {
  return (
    <div className="card tokencard">
      <div className="card-body">
        <h5 className="card-title tokenhead">Your token has been successfully generated! </h5>
        <p className="card-text">{token}</p>
        <button className="btn btns " onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Token;
