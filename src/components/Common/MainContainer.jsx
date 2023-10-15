import React from 'react';
import PosComponent from '../PosComponent';
import PowComponent from '../PowComponent';

import { useState } from 'react';

const MainContainer = () => {
    const [showPoW, setShowPoW] = useState(true); 

    const handlePowClick = () => {
        setShowPoW(true);
    }

    const handlePosClick = () => {
        setShowPoW(false);
    }

    return (
        <div>
            <div className='switches'>
                <button className='powbtn' onClick={handlePowClick}>POW</button>
                <button className='posbtn' onClick={handlePosClick}>POS</button>
            </div>
            {showPoW ? <PowComponent /> : <PosComponent />}
        </div>
    );
}

export default MainContainer;
