import React, { useState } from "react";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../../redux/slices/BlockChainReducer";
import { useDispatch, useSelector } from "react-redux";

function CustomCaptcha({ setShowCaptcha }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState(
    generateRandomCaptcha()
  );
  const { selectedCardIndex } = useSelector((state) => state.BlockChainReducer);

  const dispatch = useDispatch();
  function generateRandomCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    return captcha;
  }

  const handleRefresh = () => {
    setGeneratedCaptcha(generateRandomCaptcha());
    setCaptchaValue("");
  };

  const handleSubmit = () => {
    const nextIndex =
      selectedCardIndex.length > 0
        ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
        : 0;
    if (captchaValue === generatedCaptcha) {
      setShowCaptcha(false);
      dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
      dispatch(updateUserInteract(false));
      dispatch(updateTask(2));
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
      setCaptchaValue("");
    }
  };

  return (
    <div className="card capcard">
      <div className="card-body">
        <div className="captcha-container">
          <div className="captcha card-text">
            <div className="captcha-text">{generatedCaptcha}</div>
          </div>
          <a onClick={handleRefresh}>Refresh</a>
        </div>
        <div className="form-group mt-3">
          <label>Enter Captcha:</label>
          <input
            type="text"
            className="form-control"
            value={captchaValue}
            onChange={(e) => setCaptchaValue(e.target.value)}
            placeholder="Enter the CAPTCHA"
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomCaptcha;
