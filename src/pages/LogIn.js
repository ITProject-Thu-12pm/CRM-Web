import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import InputForm from '../components/Inputs/Input.js';
import '../components/ButtonStyle.css';
import './ButtonStyles.css';
import './LoginStyles.css';

function LoadLogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;
  
    if (!email.trim()) {
      setEmailError('Email cannot be empty.');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    if (!password) {
      setPasswordError('Password cannot be empty.');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };

  return (
    <div className="container-all">
        <div className="container-left">
            {/* img */}
        </div>
        <div className="container-right">
            <form className="content">
                <div className="title-header">
                    <h1 className="loginTitle1">Connecting You to</h1>
                    <h1 className="loginTitle2">What Matters Most</h1>
                </div>
                <LogInForm 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword}
                    emailError={emailError}
                    passwordError={passwordError} 
                />
                <Buttons validateInputs={validateInputs} />
            </form>
        </div>
    </div>
);

}

function LogInForm({ email, setEmail, password, setPassword, emailError, passwordError }) {
  return (
      <div className="input">
          <InputForm 
              inputTitle="Email Address" 
              inputType="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={emailError}
          />
          <InputForm 
              inputTitle="Password" 
              inputType="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={passwordError}
          />
      </div>
  );
}

function Buttons({ validateInputs }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    if (validateInputs()) {
      navigate("/profile");
    }
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };

  return (
    <div className="btns">
      <button type="button" className="rounded-5 btn login" onClick={handleLoginClick}>Log in</button>
      <button type="button" className="rounded-5 btn forgot-pass" onClick={handleForgotClick}>Forgot password?</button>
      <div className="new-acc">
        <span>Don't have an account?</span>
        <button type="button" className="btn-outline-secondary sign-up water-button" onClick={handleSignUpClick}>Sign up</button>
      </div>
    </div>
  );
}



export default LoadLogInPage;
