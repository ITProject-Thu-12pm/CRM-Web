import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import InputForm from '../components/Inputs/Input.js'
import '../components/ButtonStyle.css'
import './ButtonStyles.css';
import './LoginStyles.css';
import { Login } from './Interface.js';


function LoadLogInPage() {
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;
  
    if (!user_email.trim()) {
      setEmailError('Email cannot be empty.');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    if (!user_password) {
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
            user_email = {user_email}
            setUserEmail = {setUserEmail}
            user_password = {user_password}
            setUserPassword = {setUserPassword}
            loginStatus = {loginStatus}
            emailError={emailError}
            passwordError={passwordError}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
          />
          <Buttons 
            validateInputs={validateInputs}
            user_email = {user_email}
            user_password = {user_password}
            loginStatus = {loginStatus}
            setLoginStatus = {setLoginStatus}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
          />
          

        </form>
      </div>
    </div>
  );
}

function LogInForm({user_email, setUserEmail, user_password, setUserPassword, loginStatus, emailError, passwordError, setEmailError, setPasswordError}) {
  
  return (
    <div className="input">
      <InputForm 
      inputTitle="Email Address" 
      inputType="email" 
      value = {user_email}
      onChange={e => {setUserEmail(e.target.value); setEmailError(''); setPasswordError('')}}
      error={emailError}
      />
      <InputForm inputTitle="Password" 
      inputType="password" 
      value = {user_password}
      onChange={e => {setUserPassword(e.target.value); setPasswordError(''); setEmailError('');}}
      error={passwordError}
      />
    </div>
  );
}

function Buttons({validateInputs, user_email, user_password, loginStatus, setLoginStatus, setEmailError, setPasswordError}) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    if (validateInputs()) {
      Login(user_email, user_password).then(data => {
        if (data === true) {
          navigate('/profile');
        } else {
          setLoginStatus(false);
          //setErrorMessage('Please ensure Email or Password is correct and retry again!');
          setEmailError('Please ensure Email or Password is correct and retry again!');
          setPasswordError('ALL_RED');
        }
      })
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
