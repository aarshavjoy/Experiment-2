import React, { useState } from 'react';

function CustomCaptcha() {
  const [captchaValue, setCaptchaValue] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateRandomCaptcha());

  function generateRandomCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    return captcha;
  }

  const handleRefresh = () => {
    setGeneratedCaptcha(generateRandomCaptcha());
    setCaptchaValue('');
  };

  const handleSubmit = () => {
    if (captchaValue === generatedCaptcha) {
      alert('Captcha Matched');
    } else {
      alert('Captcha Does Not Match');
      setCaptchaValue('');
    }
  };

  return (
    <div className="card capcard">
      <div className="card-body">
        <div className="captcha-container">
          <div className="captcha card-text">
            <div className="captcha-text">
              {generatedCaptcha}
            </div>
            <div className="captcha-noise">
              {/* Add noise or lines here */}
            </div>
          </div>
          <a onClick={handleRefresh}>
            Refresh
          </a>
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
          <button className="btn btn-primary submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomCaptcha;
