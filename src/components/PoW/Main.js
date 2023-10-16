import React, { useState } from "react";
import LoginAuth from "./LoginAuth";
import VotingComponent from "./VotingComponent";
import Tables from "./Table";
import Divider from "../Divider";
import Scene from "../ThreeComponents/Scene";
import { useSelector } from "react-redux";

function Main({ isVisible }) {
  const isLogging = true;
  const [currentPages, setCurrentPages] = useState("login");
  const [userName, setUserName] = useState("");
  const [votingData, setVotingData] = useState(null);
  const { userIntract, task } = useSelector((state) => state.BlockChainReducer);
  const showVotingComponent = (user) => {
    setUserName(user.name);

    setCurrentPages("voting");
  };
  console.log(userIntract, task);
  const showTable = (votingData) => {
    setVotingData(votingData);
    setCurrentPages("tables");
  };

  let pageContent = null;

  switch (currentPages) {
    case "login":
      pageContent = <LoginAuth onButtonClick={showVotingComponent} />;
      break;
    case "voting":
      pageContent = (
        <VotingComponent userName={userName} showTable={showTable} />
      );

      break;
    case "tables":
      pageContent = (
        <Tables
          userName={votingData.userName}
          time={votingData.time}
          status={votingData.status}
        />
      );
      break;
  }

  return (
    <div className="App" style={{ display: isVisible ? "block" : "none" }}>
      {/* <Divider title={"Proof of Work"} /> */}

      <div className="container-fluid container-full-height">
        <div className="row">
          <div className="col-md-1 left-column">{/* <Scene /> */}</div>
          <div className="col-md-11 right-column">
            <>{pageContent}</>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
