import React, { useState } from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
import './SignUpStyles.css';
import './ForgotPasswordStyles.css';
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom';

function LoadForgotPage() {
    return (
        <div className="container m-0 fix container-fluid">
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
                        Reset password
                    </div>
                    <div className="content">
                        <ResetForm />
                        <Buttons />
                    </div>


                </div>
            </div>
        </div>
    );
}

function ResetForm() {
    const [verificationCodeSent, setVerificationCodeSent] = useState(false);

    const handleGetCodeClick = () => {
        // Add code here to send verification code
        setVerificationCodeSent(true);
    };
    return (
        <div>
            <InputForm inputTitle="Email Address" />
            <div className="row input-form-group">
                <div className="col">
                    <InputForm inputTitle="Email Verification Code" />
                </div>
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-outline-secondary rounded-5 get-code-btn"
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
            <button type="button" className="btn btn-lighter-secondary w-100 rounded-5 py-2 login" onClick={handleLogInClick}>Reset</button>
        </form>
    );
}

export default LoadForgotPage;