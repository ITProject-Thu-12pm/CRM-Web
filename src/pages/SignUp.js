import React, { useState } from "react";

import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom';


function LoadSignPage() {
  return (
    <div className="container-all">

      <div className="container-left">
        {/* need: Add our logo here! */}
      </div>
      <div className="container-right">
        <form className="content">
          <div className="header">
            <h1 className="title loginTitle1">Connecting You to</h1>
            <h1 className="loginTitle2">What Matters Most</h1>
          </div>

          <SignUpForm />
          <Authentication />
          <LogInButtons />
        </form>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="input">
      <InputForm inputTitle="First Name" />
      <InputForm inputTitle="Last Name" />
      <InputForm inputTitle="Email" inputType="email" />
      <InputForm inputTitle="Password" inputType="password" />
    </div>
  );
}

function Authentication() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="authentication-container">
      <div className="align-text-center">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isClicked}
          onChange={handleClick}
        />
        <span className="authentication-text">
          By creating an account, I agree to our Terms of Use{" "}
          and Privacy Policy
        </span>
      </div>
    </div>
  );
}

function LogInButtons() {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/login");
  };
  return (
    <form className="btns">

      <button type="button" className="btn btn-lighter-secondary rounded-5 login">Create an account</button>
      <div className="already-acc">
        <span>Already have an account?</span>
        <button type="button" className="btn-outline-secondary rounded-5 sign-up" onClick={handleLogInClick}>Log in</button>

      </div>

    </form>
  );
}

export default LoadSignPage;
