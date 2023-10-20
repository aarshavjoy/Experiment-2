import React from "react";
import Login from "./common/Login";
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

export default function PowComponent() {
  const [currentPage, setCurrentPage] = useState("login");
  const [token, setToken] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [showVotingComponent, setShowVotingComponent] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [votingData, setVotingData] = useState(null);
  const [userName, setUserName] = useState("");
 



  
  const showName = (userName) => {
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
    setCurrentPage("votingComponent");
  };
  const handleTable = () => {
    setCurrentPage("tables");
  };
  const handleReport=() => {
    setCurrentPage("report");
  };
 
const handleNotification=() => {
  setCurrentPage("notification");
};
const handleLoginauth=() => {
  setCurrentPage("loginAuth");
};
const handleCheckbox=() => {
  setCurrentPage("checkbox");
};
const handleAlert=() => {
  setCurrentPage("alert");
};
const handleVote=() => {
  setCurrentPage("vote");
};
const showTables = (votingData) => {
  setVotingData(votingData);
  setCurrentPage("tables");
  console.log(votingData)
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
              
              {currentPage === "login" ? (
                <Login
                  generateRandomToken={() => {}}
                  setCurrentPage={handleLoginClose}
                  onButtonClick={showName}
                />
              ) : null}
              {currentPage === "token" ? <Timer initialTime={300} /> : null}
              {currentPage === "token" ? (
                <Token onClose={handleTokenClose} />
              ) : null}

               {currentPage === "votingComponent" ? (
                <VotingComponent onClick={handleReport}  onChange={handleTable} showTables={showTables} userName={userName} />
              ) : null}

              {currentPage === "tables" ? (
                <Tables  userName={votingData.userName}
                time={votingData.time}
                status={votingData.status} />
              ) : null}

              {currentPage === "report" ? (
                <Report onClick={handleNotification} />
              ) : null}
             {currentPage === "notification" ? (
                <Notification  onClick={handleLoginauth}/>
              ) : null}
             {currentPage === "loginAuth" ? (
                <LoginAuth  onClick={handleCheckbox}/>
              ) : null}
             {currentPage === "checkbox" ? (
                <CheckboxCard onClick={handleAlert} />
              ) : null}
               {currentPage === "alert" ? (
                <Alert  onClick={handleVote}/>
              ) : null}
                {currentPage === "vote" ? (
                <VotingComponent onChange={handleTable} showTables={showTables}  userName={userName} />
              ) : null}
            
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
