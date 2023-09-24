import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './ProfileStyles.css';
import SideBar from '../../components/Bar.js'
import DateInput from '../../components/DateInput.js'
import { useNavigate } from 'react-router-dom';
import profileInfo from './ProfileInfo.json';
import InputFormProfile from '../../components/Inputs/InputProfile';


function LoadProfilePage() {

    const [profile, setProfile] = useState({
        avatar: profileInfo.profile_picture,
        tempAvatar: null,
        firstName: profileInfo.first_name,
        lastName: profileInfo.last_name,
        address: profileInfo.street_address,
        city: profileInfo.city,
        state: profileInfo.state,
        postCode: profileInfo.postcode,
        email: profileInfo.email,
        phone: profileInfo.phone,
        dob: new Date(profileInfo.dob)
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevProfile => ({ ...prevProfile, tempAvatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const saveChanges = () => {
        if (profile.tempAvatar) {
            setProfile(prevProfile => ({ ...prevProfile, avatar: profile.tempAvatar, tempAvatar: null }));
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
                    <div className="text-center mb-4">
                        <img src={isEditing && profile.tempAvatar ? profile.tempAvatar : profile.avatar} alt="Avatar" className="rounded-circle profile-avatar" />
                        {isEditing && (
                            <div>
                                <input type="file" onChange={handleAvatarChange} />
                            </div>
                        )}
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="First Name" inputContent={profile.firstName} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, firstName: value }))} isEditing={isEditing} />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Last Name" inputContent={profile.lastName} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, lastName: value }))} isEditing={isEditing} />
                        </div>
                    </div>
                    <InputFormProfile inputTitle="Address" inputContent={profile.address} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, address: value }))} isEditing={isEditing} />
                    <div className="row">
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="City" inputContent={profile.city} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, city: value }))} isEditing={isEditing} />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="State" inputContent={profile.state} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, state: value }))} isEditing={isEditing} />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile inputTitle="Post Code" inputContent={profile.postCode} inputType="text" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, postCode: value }))} isEditing={isEditing} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Email" inputContent={profile.email} inputType="email" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, email: value }))} isEditing={isEditing} isProfileEmail={true}/>
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Phone" inputContent={profile.phone} inputType="tel" setInputContent={value => setProfile(prevProfile => ({ ...prevProfile, phone: value }))} isEditing={isEditing} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <DateInput
                                inputTitle="Date of Birth"
                                selectedDate={profile.dob}
                                setSelectedDate={date => setProfile(prevProfile => ({ ...prevProfile, dob: date }))}
                                isEditing={isEditing}
                            />
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3 d-flex flex-column">
                                <label className="form-label">Password</label>
                                <button className="btn btn-link reset-pass" onClick={handleResetClick}>Click to reset password</button>
                            </div>
                        </div>
                    </div>
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
