import React, { useState } from 'react';
import './ProfileStyles.css';
import './ResetPasswordStyles.css'
import SideBar from '../components/Bar.js'
import InputForm from '../components/Input.js'
import { useNavigate } from 'react-router-dom';


function LoadResetPage() {

    /* navigation */
    const navigate = useNavigate();

    const handleResetClick = () => {
        navigate("/login");
    };

    /* check old password */
    const [oldPassword, setOldPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    /* helper func */
    const handlePasswordCheck = () => {
        console.log("Checking passwords...");

        if (oldPassword !== reEnteredPassword) {
            setErrorMessage('Passwords do not match!');
        } else {
            /* setErrorMessage(''); */
            // Proceed with other logic, e.g., API call to update the password
        }
    };


    return (

        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>

            <div className="div2">
                <div className="content">
                    <div className="header">
                        <h1 className="title loginTitle1">Reset Password</h1>
                    </div>
                    
                    <div>
                        <InputForm
                            inputTitle="Enter Old Password"
                            inputType="password"
                            value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)}
                            className = "input-box"
                        />
                        <span style={{ color: 'red', marginLeft: '1rem' }}>{errorMessage}</span>
                    </div>

                    <div>
                        <InputForm
                            inputTitle="Re-enter Old Password"
                            inputType="password"
                            value={reEnteredPassword}
                            onChange={e => setReEnteredPassword(e.target.value)}
                        />
                        <span style={{ color: 'red', marginLeft: '1rem' }}>{errorMessage}</span>
                    </div>

                    <InputForm
                        inputTitle="enter New Password"
                        inputType="password"

                    />

                    <button onClick={handlePasswordCheck}>Confirm</button>


                </div>



            </div>

        </div>
    );
}

export default LoadResetPage;
