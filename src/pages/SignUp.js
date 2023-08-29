import React, { useState } from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
import './SignUpStyles.css';
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom';


function LoadSignPage() {
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

          <SignUpForm />
          <Authentication />
          <LogInButtons />
        </div>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div>
      <InputForm inputTitle="First Name" />
      <InputForm inputTitle="Last Name" />
      <InputForm inputTitle="Email" />
      <InputForm inputTitle="Password" />
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
    <form className="butt-position">

      <button type="button" className="btn btn-lighter-secondary w-100 rounded-5 py-2 login">Create an account</button>
      <div className="already-acc">
        <span>Already have an account?</span>
        <button type="button" className="btn btn-outline-secondary rounded-5 py-2 sign-up" onClick={handleLogInClick}>Log in</button>

      </div>

    </form>
  );
}

export default LoadSignPage;
