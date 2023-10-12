import React, { useState } from 'react';

function Candidate() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Candidate 1', votes: 0, voted: false },
    { id: 2, name: 'Candidate 2', votes: 0, voted: false },
    { id: 3, name: 'Candidate 3', votes: 0, voted: false },
  ]);

  const handleVote = (id) => {
    // Check if the user has already voted for another candidate
    const hasVoted = candidates.some((candidate) => candidate.voted);

    if (hasVoted) {
  
      alert('You can only vote once. ');
    } else {
      const updatedCandidates = candidates.map((candidate) => {
        if (candidate.id === id) {
          return { ...candidate, votes: candidate.votes + 1, voted: true };
        }
        return candidate;
      });
      setCandidates(updatedCandidates);
    }
  };

  return (
    <div className="card cards">
      <div className="card-body">
        <h5 className="card-title">Candidates List</h5>
        <ul className="list-group">
          {candidates.map((candidate) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={candidate.id}>
              {candidate.name}
              <span className="badge badge-primary badge-pill">{candidate.votes}</span>
              <button className="btn btn-primary" onClick={() => handleVote(candidate.id)}>
                Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Candidate;
