import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/Inputs/Input.js";
import "./ForgotPasswordStyles.css";
import emailjs from "@emailjs/browser";

function LoadForgotPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");

  //generate vertification code
  const [verificationCode] = useState(
    Math.floor(100000 + Math.random() * 900000).toString()
  );

  const handleVerifyCode = () => {
    console.log(verificationCode);
    if (enteredCode !== verificationCode) {
      alert(
        "The verification code you entered is incorrect. Please try again."
      );
    } else {
      //Todo: implement change password here!
      navigate("/login");
    }
  };

  return (
    <div className="container-all">
      {/* bg-img */}
      <div className="container-left"></div>
      {/* content */}
      <div className="container-right">
        <form className="content">
          <div className="header">
            <h1 className="title loginTitle1">Reset password</h1>
          </div>
          <ResetForm
            email={email}
            setEmail={setEmail}
            verificationCodeSent={verificationCodeSent}
            setVerificationCodeSent={setVerificationCodeSent}
            verificationCode={verificationCode}
            setEnteredCode={setEnteredCode}
          />
          <Buttons handleVerifyCode={handleVerifyCode} />
        </form>
      </div>
    </div>
  );
}

function ResetForm(props) {
  const handleGetCodeClick = () => {
    emailjs
      .send(
        "service_pduei9j",
        "template_jfx4wqp",
        {
          from_name: "My Circle",
          email_from: props.email,
          verification_code: props.verificationCode,
          reply_to: "bbzhuoying@gmail.com",
        },
        "qONCoXhfVWko-j4vy"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        props.setVerificationCodeSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <InputForm
        inputTitle="Email Address"
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <div className="vertification">
        <div className="vertification-left">
          <InputForm
            inputTitle="Email Verification Code"
            onChange={(e) => props.setEnteredCode(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn-outline-secondary rounded-5 get-code"
            onClick={handleGetCodeClick}
          >
            Get Code
          </button>
        </div>
      </div>
      <InputForm inputTitle="New Password" />
      <InputForm inputTitle="Re-enter New Password" />
    </div>
  );
}

function Buttons(props) {
  return (
    <form className="input">
      <button
        type="button"
        className="btn btn-lighter-secondary w-100 rounded-5 py-2 login"
        onClick={props.handleVerifyCode}
      >
        Reset
      </button>
    </form>
  );
}

export default LoadForgotPage;
