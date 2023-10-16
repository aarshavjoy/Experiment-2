import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheck, selectCandidates } from './Redux/candidatesSlice';


const CandidateVerification = () => {
    const candidates = useSelector(selectCandidates);
    const dispatch = useDispatch();

    const handleCheck = (candidateId, checkIndex) => {
        dispatch(toggleCheck({ candidateId, checkIndex }));
    };
    console.log(candidates);
    return (
        <div>
            {candidates.map(candidate => (
                <div key={candidate.id}>
                    <h4>{candidate.name}</h4>
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={candidate.checks[0]}
                                onChange={() => handleCheck(candidate.id, 0)}
                            />The candidate does not have any criminal record
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={candidate.checks[1]}
                                onChange={() => handleCheck(candidate.id, 1)}
                            /> Rule 2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={candidate.checks[2]}
                                onChange={() => handleCheck(candidate.id, 2)}
                            /> Rule 3
                        </label>
                    </div>
                    <div>
                        {candidate.verified ? <span style={{color: 'green'}}>Verified</span> : <span style={{color: 'red'}}>Not Verified</span>}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default CandidateVerification;
