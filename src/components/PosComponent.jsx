import React, { useState } from "react";
import BasicAccordion from "./PoS/Details";
import Manifesto from "./PoS/Manifesto";
import Login from "./PoS/Login";
import Scene from "./ThreeComponents/Scene";
import Voting from "./PoS/voting";
import Counting from "./PoS/Counting";
import AuthLogin from "./PoS/autority-login";
import CandidateVerification from "./PoS/verify";
import Candidate from "./PoS/candidate";
import InstructionMessage from "./Instruction";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../redux/slices/BlockChainReducer";

const PosComponent = () => {
  const { userIntract, task, selectedCardIndex } = useSelector(
    (state) => state.BlockChainReducer
  );
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showManifesto, setShowManifesto] = useState(false);
  const [showVotingMachine, setShowVotingMachine] = useState(false);
  const [showCounting, setShowCounting] = useState(false);
  const [showAuthorityLogin, setShowAuthorityLogin] = useState(false);
  const [showCandidateVerification, setShowCandidateVerification] =
    useState(false);
  const [showCandidate, setShowCandidate] = useState(false);
  const nextIndex =
    selectedCardIndex.length > 0
      ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
      : 0;
  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSuccessfulAuthorityLogin = () => {
    setShowCandidateVerification(true);
  };

  const handleAuthorityLoginClick = () => {
    setShowAuthorityLogin(true);
  };
  const handleCandidateDisplay = () => {
    setShowCandidate(true);
  };
  const handleVotingDisplay = () => {
    setShowCandidate(false);
    setShowVotingMachine(true);
  };

  const handleNextClick = () => {
    setShowManifesto(true);
  };

  const handleSelectClick = () => {
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(3));
    setShowCandidate(true);
  };

  const handleCounting = () => {
    setShowCounting(true);
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(4));
  };

  // Inside PosComponent

  const handleCandidateVerificationSubmit = () => {
    setShowCandidateVerification(false);
    setIsLoggedIn(false);
    setShowAuthorityLogin(false);
  };
  console.log(";oo", task, userIntract);
  return (
    <>
      <div className="heading">{/* ... */}</div>
      <div className="container-fluid container-full-height">
        <div className="row">
          <div className="col-md-9 left-column">
            <Scene />
          </div>
          <div className="col-md-3 right-column">
            {userIntract && task === 1 && (
              <Login
                onSuccessfulLogin={handleSuccessfulLogin}
                onAuthorityLoginClick={handleAuthorityLoginClick}
              />
            )}
            {userIntract && task === 2 && (
              <>
                {showManifesto ? (
                  <Manifesto
                    onSelectClick={handleSelectClick}
                    onCandidateDisplay={handleCandidateDisplay}
                  />
                ) : (
                  <BasicAccordion onNextClick={handleNextClick} />
                )}
              </>
            )}
            {userIntract && task === 3 && (
              <>
                {showVotingMachine && <Voting onCounting={handleCounting} />}
                {showCandidate && (
                  <Candidate onNextClick={handleVotingDisplay} />
                )}
              </>
            )}
            {userIntract && task === 4 && <>{showCounting && <Counting />}</>}

            {!userIntract && task === 1 && (
              <InstructionMessage text={"task1"} />
            )}
            {!userIntract && task === 2 && (
              <InstructionMessage text={"task2"} />
            )}
            {!userIntract && task === 3 && (
              <InstructionMessage text={"task3"} />
            )}
            {!userIntract && task === 4 && (
              <InstructionMessage text={"task4"} />
            )}
            {/* {showCandidateVerification ? (
              <CandidateVerification
                onSubmit={handleCandidateVerificationSubmit}
              />
            ) : showAuthorityLogin ? (
              <AuthLogin
                onSuccessfulAuthorityLogin={handleSuccessfulAuthorityLogin}
              />
            ) : isLoggedIn ? (
              showManifesto ? (
                showCandidate ? (
                  showVotingMachine ? (
                    showCounting ? (
                      <Counting />
                    ) : (
                      <Voting onCounting={handleCounting} />
                    )
                  ) : (
                    <Candidate onNextClick={handleVotingDisplay} />
                  )
                ) : (
                  <Manifesto
                    onSelectClick={handleSelectClick}
                    onCandidateDisplay={handleCandidateDisplay}
                  />
                )
              ) : (
                <BasicAccordion onNextClick={handleNextClick} />
              )
            ) : (
              <Login
                onSuccessfulLogin={handleSuccessfulLogin}
                onAuthorityLoginClick={handleAuthorityLoginClick}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PosComponent;
