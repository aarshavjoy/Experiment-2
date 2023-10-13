import { Suspense } from "react";
import "./App.css";

import MainContainer from "./components/common/MainContainer";

function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <Suspense>
            <MainContainer />
          </Suspense>

        </div>
      </div>
    </>
  );
}

export default App;
