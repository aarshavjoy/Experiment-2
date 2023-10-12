import React, { useState } from 'react';

function Candidate() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Green Future Party', voted: false },
    { id: 2, name: 'Technological Party', voted: false },
    { id: 3, name: 'Cultural Party', voted: false },
  ]);

  

  return (
    <div className="card cards">
      <div className="card-body">
        <h5 className="card-title">Candidates List</h5>
        <ul className="list-group">
          {candidates.map((candidate) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={candidate.id}>
              {candidate.name}
              
                <span className="party-symbol">
                  {candidate.name === 'Green Future Party' && <i className="fas fa-leaf"></i>}
                  {candidate.name === 'Technological Party' && <i className="fas fa-cogs"></i>}
                  {candidate.name === 'Cultural Party' && <i className="fas fa-globe"></i>}
                </span>
                <div>
                <button className="btn canbtn btn-primary">
                  Vote
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Candidate;

