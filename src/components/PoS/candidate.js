import React from "react";
import { useSelector } from "react-redux";


const Candidate = ({ onNextClick }) => {
  const { candidatesList } = useSelector((state) => state.BlockChainReducer);
  console.log(candidatesList);

  return (

    <div style={{ color: "white" }}>
        <h4>Candidate verificarion Details</h4>
      {/* Added style here */}
      {candidatesList.map((candidate) => (
        <div key={candidate.id}>
          <p>{candidate.name}</p>
          <p>
            {candidate.verified ? (
              <span style={{ color: "green" }}>Verified</span>
            ) : (
              <span style={{ color: "red" }}>Not Verified</span>
            )}
          </p>
        </div>
      ))}
      <div className="next-button">
        <button
          type="button"
          className="btn btn-outline-light details-btn"
          onClick={onNextClick}
        >
          next
        </button>
        
      </div>
    </div>
  );
};

export default Candidate;
