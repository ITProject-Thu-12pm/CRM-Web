import React, { useState } from "react";

import './ButtonStyles.css';
import './LoginStyles.css';
import './SignUpStyles.css';
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom';

function LoadForgotPage() {
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
                        Reset password
                    </div>
                    <ResetForm />
                </div>
            </div>
        </div>
    );
}

function ResetForm() {
    return (
      <div>
        <InputForm inputTitle="Email Address" />;
        <InputForm inputTitle="Email Verification Code" />;
        <InputForm inputTitle="New Password" />;
        <InputForm inputTitle="Re-enter New Password" />;
      </div>
    );
  }

export default LoadForgotPage;