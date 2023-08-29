import React from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
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
        </div>
      </div>
    </div>
  );
}

function SignUpForm() {
  return (
    <div>
      <InputForm inputTitle="First Name"/>;
      <InputForm inputTitle="Lirst Name"/>;
      <InputForm inputTitle="Email"/>;
      <InputForm inputTitle="Password"/>;
    </div>
  );
}

export default LoadSignPage;
