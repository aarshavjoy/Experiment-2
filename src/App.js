import { Suspense } from "react";
import "./App.css";

import MainContainer from "./components/common/MainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <Suspense>
            {/* <MainContainer /> */}
            {/* <VoterMachine/> */}
            {/* <Main/> */}
            {/* <Alert/> */}
            <Provider store={store}>
              <MainContainer />
            </Provider>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
