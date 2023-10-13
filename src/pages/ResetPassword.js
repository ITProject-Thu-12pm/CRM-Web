import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reset_Passowrd } from './Interface.js';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import SideBar from '../components/Bar.js'
import InputForm from '../components/Inputs/Input.js'
import './ProfilePage/ProfileStyles.css';
import './ResetPasswordStyles.css'


function LoadResetPage() {

    /* navigation */
    const navigate = useNavigate();

    const handleResetClick = () => {
        navigate("/login");
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    /* check old password */
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [oldPaErrorMessage, setOldPaErrorMessage] = useState('');
    const [newPaErrorMessage, setNewPaErrorMessage] = useState('');
    /* helper func */
    const handlePasswordCheck = () => {
        if (newPassword !== reEnteredPassword) {
            setNewPaErrorMessage('Passwords do not match');
        } else {
            Reset_Passowrd(oldPassword, newPassword).then(data => {
                if (data === true) {
                    navigate('/login');
                    console.log('Reset Success!');
                } else {
                    setOldPaErrorMessage('Reset Fail')
                    console.log('Reset Fail');
                  
                }
              })
                
            
            /* setErrorMessage(''); */
            /* Proceed with other logic, e.g., API call to update the password */
        }
    };

    const checkOldPass = () => {
        if (oldPaErrorMessage) {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PriorityHighRoundedIcon fontSize="small" style={{ color: 'red' }} />
                    <span style={{ color: 'red' }}>{oldPaErrorMessage}</span>
                </div>
            );
        }
         
        return null;
    };
    const checkNewPass = () => {
        if (newPaErrorMessage) {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PriorityHighRoundedIcon fontSize="small" style={{ color: 'red' }} />
                    <span style={{ color: 'red' }}>{newPaErrorMessage}</span>
                </div>
            );
        }
         
        return null;
    };

    return (

        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>

            <div className="div2 d-flex">
                <div className="content">
                    <div className="header">
                        <h1 className="title loginTitle1">Reset Password</h1>
                    </div>
                    <div className='d-flex flex-column'>
                    <div>
                        {checkOldPass()}
                        <InputForm
                            inputTitle="Enter Old Password"
                            inputType="password"
                            value={oldPassword}
                            onChange={e => {setOldPassword(e.target.value);
                                            if (oldPaErrorMessage){
                                                setOldPaErrorMessage('');
                                            }}}
                        />
                        {checkNewPass()}

                    </div>

                    <div>
                        <InputForm
                            inputTitle="enter New Password"
                            inputType="password"
                            value={newPassword}
                            onChange={e => {setNewPassword(e.target.value);
                                            if (newPaErrorMessage){
                                                setNewPaErrorMessage('');
                                            }}}
                        />
                        {checkNewPass()}
                    </div>

                    <InputForm
                        inputTitle="re-enter New Password"
                        inputType="password"
                        value={reEnteredPassword}
                        onChange={e => {setReEnteredPassword(e.target.value);
                                            if (newPaErrorMessage){
                                                setNewPaErrorMessage('');
                                        }}}
                    />
                    </div>
                   
                    <div className="d-flex reset-btns align-items-end">
                        <button className='btn reset-btn' onClick={handleProfileClick}>Cancel</button>
                        <button className='btn reset-btn rounded-5 btn-edit change-color-btn' onClick={handlePasswordCheck}>Confirm</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

function checkOldPassword() {
    
}

export default LoadResetPage;
