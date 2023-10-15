import React, { useState } from 'react';
import BasicAccordion from './PoS/Details';
import Manifesto from './PoS/Manifesto';
import Login from './PoS/Login';
import Divider from '../Divider';
import Scene from "./ThreeComponents/Scene";
import Voting from './PoS/voting';
import Counting from './PoS/Counting';
import AuthLogin from './PoS/autority-login';
import CandidateVerification from './PoS/verify';

const PosComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showManifesto, setShowManifesto] = useState(false);
    const [showVotingMachine, setShowVotingMachine] = useState(false);
    const [showCounting, setShowCounting] = useState(false);
    const [showAuthorityLogin, setShowAuthorityLogin] = useState(false);
    const [showCandidateVerification, setShowCandidateVerification] = useState(false);

    const handleSuccessfulLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSuccessfulAuthorityLogin = () => {
        setShowCandidateVerification(true);
    };

    const handleAuthorityLoginClick = () => {
        setShowAuthorityLogin(true);
    };

    const handleNextClick = () => {
        setShowManifesto(true);
    };

    const handleSelectClick = () => {
        setShowVotingMachine(true);
    };

    const handleCounting = () => {
        setShowCounting(true);
    };

    return (
        <>
            <Divider title={"Proof of Stake"} />
            <div className='heading'>
                {/* ... */}
            </div>
            <div className="container-fluid container-full-height">
                <div className="row">
                    <div className="col-md-9 left-column">
                        <Scene />
                    </div>
                    <div className="col-md-3 right-column">
                        {
                            showCandidateVerification 
                            ? <CandidateVerification />
                            : (
                                showAuthorityLogin 
                                ? <AuthLogin onSuccessfulAuthorityLogin={handleSuccessfulAuthorityLogin} />
                                : (
                                    isLoggedIn 
                                    ? (
                                        showManifesto 
                                        ? (
                                            showVotingMachine 
                                            ? (showCounting ? <Counting /> : <Voting onCounting={handleCounting} />)
                                            : <Manifesto onSelectClick={handleSelectClick} />
                                        )
                                        : <BasicAccordion onNextClick={handleNextClick} />
                                    )
                                    : <Login onSuccessfulLogin={handleSuccessfulLogin} onAuthorityLoginClick={handleAuthorityLoginClick} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default PosComponent;
