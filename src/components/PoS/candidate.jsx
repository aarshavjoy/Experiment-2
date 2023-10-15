import React from 'react';
import { useSelector } from 'react-redux';
import { selectCandidates } from './Redux/candidatesSlice'; // Ensure the correct path

const Candidates = () => {
    // Fetch candidates' data from Redux
    const candidates = useSelector(selectCandidates);

    return (
        <div className='verify'>
            <h3 style={{ marginBottom: "10px" }}>Candidate Verification</h3>
            <div>
                {candidates.map(candidate => (
                    <p key={candidate.id}>
                        {candidate.name}: {candidate.verified ? 'Verified' : 'Not Verified'} 
                        {candidate.verified && <i className="fa-solid fa-check"></i>}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Candidates;
