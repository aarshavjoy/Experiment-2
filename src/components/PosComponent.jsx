
import BasicAccordion  from './PoS/Details'
import Manifesto from './PoS/Manifesto'
import React, { useState } from 'react';
import Login from './PoS/Login'
import Divider from '../Divider';



const PosComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showManifesto, setShowManifesto] = useState(false);

    const handleSuccessfulLogin = () => {
        setIsLoggedIn(true);
    };

    const handleNextClick = () => {
        setShowManifesto(true);
    };
    return (
    <>
      <Divider title={"Proof of Stake"}  />
     <div className='heading'>
                <h2>Power of Stake</h2>
            </div>
            <div className="container-fluid container-full-height">
                <div className="row">
                    <div className="col-md-9 left-column">
                        <h2>Left Column</h2>
                    </div>
                    <div className="col-md-3 right-column">
                    {
        isLoggedIn 
        ? (showManifesto ? <Manifesto /> : <BasicAccordion onNextClick={handleNextClick} />)
        : <Login onSuccessfulLogin={handleSuccessfulLogin} />
    }
                        {/* <Voting></Voting> */}
                    </div>
                </div>
            </div></>
    );
}

export default PosComponent;
