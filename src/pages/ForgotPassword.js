import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/Inputs/Input.js'
import './ForgotPasswordStyles.css';

function LoadForgotPage() {
    return (
        <div className="container-all">

            <div className="container-left">

            </div>

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
    const [verificationCodeSent, setVerificationCodeSent] = useState(false);

    const handleGetCodeClick = () => {
        // Add code here to send verification code
        setVerificationCodeSent(true);
    };
    return (
        <div>
            <InputForm inputTitle="Email Address" />
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
            <button type="button" className="btn btn-lighter-secondary w-100 rounded-5 py-2 login" onClick={handleLogInClick}>Reset</button>
        </form>
    );
}

export default LoadForgotPage;