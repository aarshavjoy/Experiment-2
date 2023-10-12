import React, { useState } from "react";
import { generateRandomToken } from "../utilts";
import Login from "./Common/Login";
import Divider from "../Divider";
import Token from "../components/PoW/Token";
import Candidate from "../components/PoW/Candidate";
import Scene from "./ThreeComponents/Scene";

const PowComponent = () => {
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

  const closeTokenDialog = () => {
    setShowTokenDialog(false);
    setCurrentPage("candidate");
  };
  let pageContent = null;

  switch (currentPage) {
    case "login":
      pageContent = <Login generateRandomToken={generateRandomToken} />;
      break;
    case "token":
      pageContent = <Token token={randomToken} onClose={closeTokenDialog} />;
      break;
    case "candidate":
      pageContent = <Candidate />;
      break;
    default:
      pageContent = <Login generateRandomToken={generateRandomToken} />;
  }
  return (
    <div className="App">
      <Divider title={"Proof of Work"} />

      <div className="container-fluid container-full-height">
        <div className="row">
          <div className="col-md-9 left-column">
            <Scene />
          </div>
          <div className="col-md-3 right-column">
            {isLoging && <>{pageContent}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowComponent;
