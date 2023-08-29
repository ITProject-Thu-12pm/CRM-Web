import React, { useState } from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
import './SignUpStyles.css';
import InputForm from '../components/Input.js'

/* function FloatingSignIn() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
} */

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
        </div>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div>
      <InputForm inputTitle="First Name" />;
      <InputForm inputTitle="Lirst Name" />;
      <InputForm inputTitle="Email" />;
      <InputForm inputTitle="Passwordss" />;
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

      <input
        className="form-check-input"
        type="checkbox"
        checked={isClicked}
        onChange={handleClick}
      />
    
      <span className="authentication-text">
        By creating an account, I agree to our <a href="#">Terms of Use</a>{" "}
        and <a href="#">Privacy Policy</a>
      </span>

    </div>
  );
}


export default LoadSignPage;
