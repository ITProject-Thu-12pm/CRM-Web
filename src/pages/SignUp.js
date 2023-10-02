import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/Inputs/Input.js'
import './LoginStyles.css';
import './SignUpStyles.css';
import { SignUp } from './Interface.js';


function LoadSignPage() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
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

          <SignUpForm 
          userFirstName = {userFirstName}
          userLastName = {userLastName}
          user_email={user_email}
          user_password={user_password}
          setUserFirstName={setUserFirstName}
          setUserLastName={setUserLastName}
          setUserEmail={setUserEmail}
          setUserPassword={setUserPassword}
          />
          <Authentication />
          <LogInButtons
          userFirstName = {userFirstName}
          userLastName = {userLastName}
          user_email={user_email}
          user_password={user_password}/>
        </form>
      </div>
    </div>
  );
}

function SignUpForm({firstName, lastName, user_email, user_password,
                     setUserFirstName, setUserLastName, setUserEmail, setUserPassword}) {
  return (
    <div className="input">
      <InputForm 
      inputTitle="First Name" 
      inputType="firstName" 
      value = {firstName}
      onChange={e => setUserFirstName(e.target.value)}/>
      <InputForm 
      inputTitle="Last Name" 
      inputType="lastName" 
      value = {lastName}
      onChange={e => setUserLastName(e.target.value)}/>
      <InputForm 
      inputTitle="Email" 
      inputType="email" 
      value = {user_email}
      onChange={e => setUserEmail(e.target.value)}/>
      <InputForm 
      inputTitle="Password" 
      inputType="password" 
      value = {user_password}
      onChange={e => setUserPassword(e.target.value)}/>
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

function LogInButtons({userFirstName, userLastName, user_email, user_password}) {
  const navigate = useNavigate();

  const handleLogInClick = () => {
      navigate("/login");
  };

  const handleSignUpClick = () => {
    SignUp(userFirstName, userLastName, user_email, user_password).then(data => {
      if (data) {
        console.log("SignUp success!");
      } else {
        console.log("SignUp Fail!");
      }
    })  
  }
  return (
    <form className="btns">

      <button type="button" className="btn btn-lighter-secondary rounded-5 login" onClick={handleSignUpClick}>Create an account</button>
      <div className="already-acc">
        <span>Already have an account?</span>
        <button type="button" className="btn-outline-secondary sign-up water-button" onClick={handleLogInClick}>Log in</button>

      </div>

    </form>
  );
}

export default LoadSignPage;
