import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/Inputs/Input.js";
import "./ForgotPasswordStyles.css";
import emailjs from "@emailjs/browser";
function LoadForgotPage() {
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

          <ResetForm />
          <Buttons />
        </form>
      </div>
    </div>
  );
}

function ResetForm() {
  const [email, setEmail] = useState("");
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  //generate vertification code
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const handleGetCodeClick = () => {
    emailjs
      .send(
        "service_pduei9j",
        "template_jfx4wqp",
        {
          from_name: "My Circle",
          email_from: email, //user email
          verification_code: verificationCode,
          reply_to: "bbzhuoying@gmail.com",
        },
        "qONCoXhfVWko-j4vy"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setVerificationCodeSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div>
      <InputForm inputTitle="Email Address"  onChange={e => setEmail(e.target.value)} />
      <div className="vertification">
        <div className="vertification-left">
          <InputForm inputTitle="Email Verification Code" />
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

function Buttons() {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/login");
  };

  return (
    <form className="input">
      <button
        type="button"
        className="btn btn-lighter-secondary w-100 rounded-5 py-2 login"
        onClick={handleLogInClick}
      >
        Reset
      </button>
    </form>
  );
}

function SendEmailForm() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_pduei9j",
      "template_7nityb8",
      e.target,
      "qONCoXhfVWko-j4vy"
    );
  };
}

export default LoadForgotPage;
