import React, { useState } from "react";
import { generateRandomToken } from "../utilts";
import Login from "./common/Login";
import Instruction from "./common/Instruction";
import Token from "../components/PoW/Token";
import Scene from "./ThreeComponents/Scene";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../redux/slices/BlockChainReducer";
import Voting from "./PoS/voting";

const PowComponent = () => {
  const { userIntract, task, selectedCardIndex } = useSelector(
    (state) => state.BlockChainReducer
  );

  const dispatch = useDispatch();

  console.log(userIntract);
  const isLoging = true;
  const [showTokenDialog, setShowTokenDialog] = useState(false);
  

  const [randomToken, setRandomToken] = useState("");
  const [currentPage, setCurrentPage] = useState("login");

 


  const generateRandomToken = () => {
    const min = 10000;
    const max = 99999;
    const token = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomToken(token);
    setShowTokenDialog(true);
    setCurrentPage("token");
  };
  console.log(userIntract, task, "hello");
  const closeTokenDialog = () => {
    const nextIndex =
      selectedCardIndex.length > 0
        ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
        : 0;
    setShowTokenDialog(false);
    setCurrentPage("voting machine");
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(2));
  };
  let pageContent = null;
  console.log(currentPage);
  switch (currentPage) {
    case "login":
      pageContent = userIntract && task === 1 ? 
        <Login generateRandomToken={generateRandomToken} />:<Instruction text={
          <>
            Welcome, 
            <br />
            Please click on the voter to start the voting process.
          </>
        } />
      ;
      break;
    case "token":
      pageContent = <Token token={randomToken} onClose={closeTokenDialog} />;
      break;
    case "voting machine":
      pageContent = userIntract && task === 2 ?  <Voting />:<Instruction text={ <>
       Click on the voter to move forward!
        <br />
        <div className="text2">
        To verify if the voting machine has been tampered or not , please click on the "Test" button.
       </div>
      </>} />;
      break;

    default:
      pageContent = null;
  }
  return (
    <div className="App">
      

      <div className="container-fluid container-full-height">
        <div className="row">
          <div className="col-md-9 left-column">
            <Scene />
          </div>
          <div className="col-md-3 right-column">{pageContent}</div>
        </div>
      </div>
    </div>
  );
};

export default PowComponent;
