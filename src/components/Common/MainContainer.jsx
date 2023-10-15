import React from "react";
import PosComponent from "../PosComponent";
import PowComponent from "../PowComponent";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/slices/BlockChainReducer";

const MainContainer = () => {
  const [showPoW, setShowPoW] = useState(true);
  const dispatch = useDispatch();

  const handlePowClick = () => {
    setShowPoW(true);
    dispatch(clearState());
  };

  const handlePosClick = () => {
    setShowPoW(false);
    dispatch(clearState());
  };

  return (
    <div>
      <div className="switches">
        <button className="powbtn" onClick={handlePowClick}>
          POW
        </button>
        <button className="posbtn" onClick={handlePosClick}>
          POS
        </button>
      </div>
      {showPoW ? <PowComponent /> : <PosComponent />}
    </div>
  );
};

export default MainContainer;
