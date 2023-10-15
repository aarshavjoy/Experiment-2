import { Suspense } from "react";
import "./App.css";

import MainContainer from "./components/common/MainContainer";
import VoterMachine from "./components/common/VotingMachine";
import LoginAuth from "./components/PoW/LoginAuth";
import Main from "./components/PoW/Main";

function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <Suspense>
            {/* <MainContainer /> */}
            <VoterMachine/>
            {/* <Main/> */}
          </Suspense>

        </div>
      </div> 
    </>
  );
}

export default App;
