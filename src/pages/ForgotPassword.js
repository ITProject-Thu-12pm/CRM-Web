import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/Inputs/Input.js";
import "./ForgotPasswordStyles.css";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

function LoadForgotPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [codeGenerationTime, setCodeGenerationTime] = useState(null);
  const [verificationCode] = useState(
    Math.floor(100000 + Math.random() * 900000).toString()
  );

  const handleVerifyCode = () => {
    const currentTime = new Date().getTime();
    const maxSeconds = 20 * 60 * 1000;

    if (currentTime - codeGenerationTime > maxSeconds) {
      alert("The verification code has expired. Please request a new code.");
      return;
    }

    if (enteredCode !== verificationCode) {
      alert("The verification code you entered is incorrect. Please try again.");
      return;
    }

    //Todo: implement change password here!
    navigate("/login");
  };

  return (
    <div className="container-all">
      <div className="container-left"></div>
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
            setCodeGenerationTime={setCodeGenerationTime}
          />
          <Buttons handleVerifyCode={handleVerifyCode} />
        </form>
      </div>
    </div>
  );
}

function ResetForm(props) {

 /* btn cannot be clicked in 30 seconds */
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (btnDisabled && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setBtnDisabled(false);
      setCountdown(30); // Reset countdown
    }
  }, [btnDisabled, countdown]);

    /* send email config */
  const handleGetCodeClick = () => {
    setBtnDisabled(true);
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
        props.setCodeGenerationTime(new Date().getTime());
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  

  return (
    <div>
      <InputForm
        inputTitle="Email Address"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <div className="vertification">
        <div className="vertification-left">
          <InputForm
            inputTitle="6-digital Code"
            onChange={(e) => props.setEnteredCode(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            disabled={btnDisabled}
            className="btn-outline-secondary rounded-5 get-code"
            onClick={handleGetCodeClick}
          >
            {btnDisabled ? `${countdown}s` : 'Get Code'}
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
