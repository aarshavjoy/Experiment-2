import React, { useState } from 'react';
import './counting.css';

const Counting = () => {
    const [isCounted, setIsCounted] = useState(false);
    const [reCounted, setReCounted] = useState(false);
    const [serialNumber, setSerialNumber] = useState('');
    const [reEnteredSerialNumber, setReEnteredSerialNumber] = useState(''); // New state variable for the second input
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleCountClick = (e) => {
        e.preventDefault();
        if (serialNumber === "VMSN4321") {
            setIsCounted(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid Serial Number. Please check and try again.');
            setIsCounted(false);
        }
    };

    const handleReCountClick = (e) => {
        e.preventDefault();
        if (reEnteredSerialNumber === "VMSN4321") { // Use the new state variable here
            setReCounted(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid Serial Number. Please check and try again.');
            setReCounted(false);
        }
    };

    return (
        <>
            <div>
                {/* Image Placeholder */}
            </div>
            <center>
                <h5 style={{ color: "white" }}>Count Verification</h5>
                <p style={{color:"white"}}>Serial Number: VMSN4321</p>

                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control vote-ip" 
                        placeholder="Serial No" 
                        value={serialNumber} 
                        onChange={(e) => setSerialNumber(e.target.value)}
                        aria-label="Serial Number" 
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleCountClick}>
                        Count
                    </button>
                </div>

                {/* Display error message if any */}
                {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}

                {isCounted && (
                    <div className='vote'>
                        <h6>Initial Count</h6>
                        <p>Amit Trived:100</p>
                        <p>Vikram Patel:123</p>
                        <p>Geetha Jeeva:88</p>
                    </div>
                )}

                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control vote-ip" 
                        placeholder="Re-Enter the Serial No" 
                        value={reEnteredSerialNumber} // Updated to use the new state variable
                        onChange={(e) => setReEnteredSerialNumber(e.target.value)} // Updated to use the new state variable
                        aria-label="Re-enter Serial Number" 
                        aria-describedby="button-addon3"
                    />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon3" onClick={handleReCountClick}>
                        Count
                    </button>
                </div>

                {reCounted && (
                    <div className='vote'>
                        <h6>Re Count</h6>
                        <p>Amit Trived:100</p>
                        <p>Vikram Patel:123</p>
                        <p>Geetha Jeeva:88</p>
                        <h6 style={{ color: "green" }}>Vote Count Verified</h6>
                    </div>
                )}
            </center>
        </>
    );
}

export default Counting;
