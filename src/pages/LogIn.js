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

          <LogInForm 
            user_email = {user_email}
            setUserEmail = {setUserEmail}
            user_password = {user_password}
            setUserPassword = {setUserPassword}
          />
          <Buttons 
            user_email = {user_email}
            user_password = {user_password}
          />
          

        </form>
      </div>
    </div>
  );
}

function LogInForm({user_email, setUserEmail, user_password, setUserPassword}) {
  
  return (
    <div className="input">
      <InputForm 
      inputTitle="Email Address" 
      inputType="email" 
      value = {user_email}
      onChange={e => setUserEmail(e.target.value)}
      />
      <InputForm inputTitle="Password" 
      inputType="password" 
      value = {user_password}
      onChange={e => setUserPassword(e.target.value)}
      />
    </div>
  );
}

function Buttons({user_email, user_password}) {
  const navigate = useNavigate();

  const handleNavBarClick = () => {
    navigate("/bar");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    Login(user_email, user_password).then(data => {
      if (data == true) {
        navigate('/profile');
      }
    })
    
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };

  return (
    <div className="btns">

      <button type="button" className="btn-lighter-secondary rounded-5 btn login" onClick={handleLoginClick}>Log in</button>
      <button type="button" className="rounded-5 btn forgot-pass" onClick={handleForgotClick}>Forgot password?</button>

      <div className="new-acc">
        <span>Don't have an account?</span>
        <button type="button" className="btn-outline-secondary sign-up water-button" onClick={handleSignUpClick}>Sign up</button>

      </div>

    </div>
  );
}


export default LoadLogInPage;
