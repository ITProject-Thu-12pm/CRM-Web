import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/Inputs/Input.js';
import './LoginStyles.css';
import './SignUpStyles.css';

function LoadSignPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('First name cannot be empty.');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Last name cannot be empty.');
      isValid = false;
    } else {
      setLastNameError('');
    }

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

  const handleCreateAccountClick = () => {
    if (validateInputs()) {
      // Here you can proceed with the account creation logic, e.g., API call
      console.log("Account creation logic goes here.");
    }
  };

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
            firstName={firstName} 
            setFirstName={setFirstName} 
            lastName={lastName} 
            setLastName={setLastName} 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            firstNameError={firstNameError} 
            lastNameError={lastNameError} 
            emailError={emailError} 
            passwordError={passwordError} 
          />
          <Authentication />
          <LogInButtons handleCreateAccountClick={handleCreateAccountClick} />
        </form>
      </div>
    </div>
  );
}

function SignUpForm({ firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, firstNameError, lastNameError, emailError, passwordError }) {
  return (
    <div className="input">
      <InputForm inputTitle="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} error={firstNameError} />
      <InputForm inputTitle="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} error={lastNameError} />
      <InputForm inputTitle="Email" inputType="email" value={email} onChange={e => setEmail(e.target.value)} error={emailError} />
      <InputForm inputTitle="Password" inputType="password" value={password} onChange={e => setPassword(e.target.value)} error={passwordError} />
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
          By creating an account, I agree to our Terms of Use and Privacy Policy
        </span>
      </div>
    </div>
  );
}

function LogInButtons({ handleCreateAccountClick }) {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/login");
  };

  return (
    <form className="btns">
      <button type="button" className="btn btn-lighter-secondary rounded-5 login" onClick={handleCreateAccountClick}>Create an account</button>
      <div className="already-acc">
        <span>Already have an account?</span>
        <button type="button" className="btn-outline-secondary sign-up water-button" onClick={handleLogInClick}>Log in</button>
      </div>
    </form>
  );
}

export default LoadSignPage;
