import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import ClickButton from "../components/ClickButton";

function FloatingSignIn() {
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
}

function LoadSignPage() {
  return (
    <>
      <h1>Connecting You to What Matters Most</h1>
      <FloatingSignIn />
      <ClickButton value="Sign in" />
    </>
  );
}

export default LoadSignPage;
