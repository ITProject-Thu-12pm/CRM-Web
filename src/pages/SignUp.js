import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
          user_password={user_password}
          setShow = {setShow}
          setErrorMessage = {setErrorMessage}/>
          <LogDialog 
          show = {show}
          setShow = {setShow}
          errorMessage= {errorMessage}/>
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

function LogInButtons({userFirstName, userLastName, user_email, user_password, setShow, setErrorMessage}) {

  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleLogInClick = () => {
      navigate("/login");
  };

  const handleSignUpClick = () => {
    SignUp(userFirstName, userLastName, user_email, user_password).then(data => {
      console.log(data);
      if (data === 'SUCCESS') {
        console.log("SignUp success!");
        navigate("/login");
      } else if (data === 'ALREADY EXIEST'){
        setErrorMessage("That email is taken. Try another.");
        handleShow();
        console.log("SignUp Fail!");
      } else {
        handleShow();
        setErrorMessage("That email format is invalid. Try another.");
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

function LogDialog({show, setShow, errorMessage}) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {errorMessage} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default LoadSignPage;
