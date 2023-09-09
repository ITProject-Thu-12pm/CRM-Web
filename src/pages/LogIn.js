import React from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom'; //Login.js


function LoadLogInPage() {

  return (
    <div className="container-all">

      <div className="container-left">
        {/* img */}
      </div>

      <div className="container-right">
        <form className="content">
          <div className="header">
            <h1 className="title loginTitle1">Connecting You to</h1>
            <h1 className="loginTitle2">What Matters Most</h1>
          </div>

          <LogInForm />
          <Buttons />

        </form>
      </div>
    </div>
  );
}

function LogInForm() {
  return (
    <div className="input">
      <InputForm inputTitle="Email Address" inputType="email" />
      <InputForm inputTitle="Password" inputType="password" />
    </div>
  );
}

function Buttons() {
  const navigate = useNavigate();

  const handleNavBarClick = () => {
    navigate("/bar");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };

  return (
    <div className="btns">

      <button type="button" className="btn-lighter-secondary rounded-5 btn login">Log in</button>
      <button type="button" className="rounded-5 btn forgot-pass" onClick={handleForgotClick}>Forgot password?</button>

      <div className="new-acc">
        <span>Don't have an account?</span>
        <button type="button" className="btn-outline-secondary rounded-5 sign-up" onClick={handleSignInClick}>Sign up</button>

      </div>

    </div>
  );
}

export default LoadLogInPage;
