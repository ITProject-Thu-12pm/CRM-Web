import React from "react";
 
import './ButtonStyles.css';
import './LoginStyles.css';
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom'; //Login.js


function LoadLogInPage() {

  return (
    <div className="container m-0 fix">
      <div className="row">
        <div className="col-sm-8 gx-0">
          <img
            src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/mountain.jpg?raw=true"
            alt="moutain"
            className="img-responsive log-in-img"
          />
        </div>
        <hr className="d-sm-none" />

        <div className="col-sm-4 gx-5 pt-5 pl-3 form-floating">
          <div className="title loginTitle1 form-floating">
            Connecting You to
            <div className="loginTitle2">What Matters Most</div>
          </div>

          <LogInForm />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function LogInForm() {
  return (
    <div>
      <InputForm inputTitle="Email Address" />
      <InputForm inputTitle="Password" />
    </div>
  );
}

function Buttons() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signup");
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };
  return (
    <form className="input">

      <button type="button" className="btn btn-lighter-secondary w-100 rounded-5 py-2 login">Log in</button>
      <button type="button" className="btn w-100 rounded-5 py-2 forgot-pass" onClick={handleForgotClick}>Forgot password?</button>

      <div className="new-acc">
        <span>Don't have an account?</span>
        <button type="button" className="btn btn-outline-secondary rounded-5 py-2 sign-up" onClick={handleSignInClick}>Sign up</button>

      </div>

    </form>
  );
}

export default LoadLogInPage;
