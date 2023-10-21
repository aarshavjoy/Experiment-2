import React from "react";
import Login from "../components/Common/Login";
import Scene from "./ThreeComponents/Scene";
import Token from "./PoW/Token";
import Timer from "./PoW/Timer";
import VotingComponent from "./PoW/VotingComponent";
import { useState } from "react";
import Report from "./PoW/Report";
import LoginAuth from "./PoW/LoginAuth";
import Notification from "./PoW/Notification";
import Tables from "./PoW/Table";
import CheckboxCard from "./PoW/CheckBox";
import Alert from "./PoW/Alert";
import { useDispatch, useSelector } from "react-redux";
import InstructionMessage from "./Instruction";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../redux/slices/BlockChainReducer";

export default function PowComponent() {
  const { userIntract, task, selectedCardIndex } = useSelector(
    (state) => state.BlockChainReducer
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("login");
  const [token, setToken] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [showVotingComponent, setShowVotingComponent] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [votingData, setVotingData] = useState(null);
  const [userName, setUserName] = useState("");
  const nextIndex =
    selectedCardIndex.length > 0
      ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
      : 0;

  const showName = (userName) => {
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(2));

    setUserName(userName.name);
    console.log(userName);
  };
  const handleLoginClose = () => {
    setCurrentPage("token");
    setShowTimer(true);
  };
  const generateRandomToken = () => {
    setToken("");
  };

  const handleTokenClose = () => {
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(3));
    setCurrentPage("votingComponent");
  };
  const handleTable = () => {
    setCurrentPage("tables");
  };
  const handleReport = () => {
    setCurrentPage("report");
  };

  const handleNotification = () => {
    setCurrentPage("notification");
  };
  const handleLoginauth = () => {
    setCurrentPage("loginAuth");
  };
  const handleCheckbox = () => {
    setCurrentPage("checkbox");
  };
  const handleAlert = () => {
    setCurrentPage("alert");
  };
  const handleVote = () => {
    setCurrentPage("vote");
  };
  const showTables = (votingData) => {
    setVotingData(votingData);
    setCurrentPage("tables");
    console.log(votingData);
  };

  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <div className="row">
            <div className="col-md-9 left-column">
              <Scene />
            </div>
            <div className="col-md-3 right-column">
              {currentPage === "login" && userIntract && task === 1 ? (
                <Login
                  generateRandomToken={() => {}}
                  setCurrentPage={handleLoginClose}
                  onButtonClick={showName}
                />
              ) : null}

              {currentPage === "token" && userIntract && task === 2 ? (
                <>
                  <Timer initialTime={300} />
                  <Token onClose={handleTokenClose} />
                </>
              ) : null}

              {currentPage === "votingComponent" &&
              userIntract &&
              task === 3 ? (
                <VotingComponent
                  onClick={handleReport}
                  onChange={handleTable}
                  showTables={showTables}
                  userName={userName}
                />
              ) : null}

              {currentPage === "tables" && userIntract && task === 4 ? (
                <Tables
                  userName={votingData.userName}
                  time={votingData.time}
                  status={votingData.status}
                />
              ) : null}

              {currentPage === "report" ? (
                <Report onClick={handleNotification} />
              ) : null}
              {currentPage === "notification" ? (
                <Notification onClick={handleLoginauth} />
              ) : null}
              {currentPage === "loginAuth" ? (
                <LoginAuth onClick={handleCheckbox} />
              ) : null}
              {currentPage === "checkbox" ? (
                <CheckboxCard onClick={handleAlert} />
              ) : null}
              {currentPage === "alert" ? <Alert onClick={handleVote} /> : null}
              {currentPage === "vote" ? (
                <VotingComponent
                  onChange={handleTable}
                  showTables={showTables}
                  userName={userName}
                />
              ) : null}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
