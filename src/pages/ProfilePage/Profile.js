import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './ProfileStyles.css';
import SideBar from '../../components/Bar.js'
import DateInput from '../../components/DateInput.js'
import { useNavigate } from 'react-router-dom';
import profileInfo from './ProfileInfo.json';
import InputFormProfile from '../../components/Inputs/InputProfile';


function LoadProfilePage() {
    const [avatar, setAvatar] = useState(profileInfo.avatar);
    const [tempAvatar, setTempAvatar] = useState(null);
    const [firstName, setFirstName] = useState(profileInfo.firstName);
    const [lastName, setLastName] = useState(profileInfo.lastName);
    const [address, setAddress] = useState(profileInfo.address);
    const [city, setCity] = useState(profileInfo.city);
    const [state, setState] = useState(profileInfo.state);
    const [zipCode, setZipCode] = useState(profileInfo.zipCode);
    const [email, setEmail] = useState(profileInfo.email);
    const [phone, setPhone] = useState(profileInfo.phone);
    const [dob, setDob] = useState(new Date(profileInfo.dob));

    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const saveChanges = () => {
        if (tempAvatar) {
            setAvatar(tempAvatar);
            setTempAvatar(null);
        }
        handleEditToggle();
    };

    const navigate = useNavigate();

    const handleLogInClick = () => {
        navigate("/login");
    };

    const handleResetClick = () => {
        navigate("/reset");
    };


    return (

        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>


            <div className="div2 d-flex align-items-center justify-content-center">
                <form className="content">

                    {/* avatar */}
                    <div className="text-center mb-4">
                        <img src={isEditing && tempAvatar ? tempAvatar : avatar} alt="Avatar" className="rounded-circle profile-avatar"/>
                        {isEditing && (
                            <div>
                                <input type="file" onChange={handleAvatarChange} />
                            </div>
                        )}
                    </div>

                    {/* name */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="First Name" inputContent={firstName} inputType="text" setInputContent={setFirstName} isEditing={isEditing} />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Last Name" inputContent={lastName} inputType="text" setInputContent={setLastName} isEditing={isEditing} />
                        </div>
                    </div>

                    {/* address */}
                    <InputFormProfile inputTitle="Address" inputContent={address} inputType="text" setInputContent={setAddress} isEditing={isEditing} />
                    <div className="row">
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="City" inputContent={city} inputType="text" setInputContent={setCity} isEditing={isEditing} />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="State" inputContent={state} inputType="text" setInputContent={setState} isEditing={isEditing} />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="Zip Code" inputContent={zipCode} inputType="text" setInputContent={setZipCode} isEditing={isEditing} />
                        </div>
                    </div>

                    {/* contacts */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Email" inputContent={email} inputType="email" setInputContent={setEmail} isEditing={isEditing} />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Phone" inputContent={phone} inputType="tel" setInputContent={setPhone} isEditing={isEditing} />
                        </div>
                    </div>

                    {/* DOB & Password*/}
                    <div className='row'>
                        <div className='col-md-6'>
                            <DateInput
                                inputTitle="Date of Birth"
                                selectedDate={dob}
                                setSelectedDate={setDob}
                                isEditing={isEditing}
                            />
                        </div>
                        <div className='col-md-6'>
                            {/* password */}
                            <div className="mb-3 d-flex flex-column">
                                <label className="form-label">Password</label>
                                <button className="btn btn-link reset-pass" onClick={handleResetClick}>Click to reset password</button>
                            </div>
                        </div>
                    </div>


                    {/* edit and log-out */}
                    {/* <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Log out</button>
                    </div> */}

                    <div className="d-flex profile-btns">
                        <button
                            type="button"
                            className="btn btn-primary rounded-5 change-color-btn"
                            onClick={isEditing ? saveChanges : handleEditToggle}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button className="btn" onClick={handleLogInClick}>Log out</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoadProfilePage;
