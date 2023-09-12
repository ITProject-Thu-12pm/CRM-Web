import React, { useState } from 'react';
import './ProfileStyles.css';
import SideBar from '../components/Bar.js'
import DateInput from '../components/DateInput.js'


function LoadProfilePage() {
    const [firstName, setFirstName] = useState('Evano');
    const [lastName, setLastName] = useState('Doe');
    const [address, setAddress] = useState('1234 abc Rd');
    const [city, setCity] = useState('Springfield');
    const [state, setState] = useState('VIC');
    const [zipCode, setZipCode] = useState('3000');
    const [email, setEmail] = useState('hello@example.com');
    const [phone, setPhone] = useState('0499966688');
    const [dob, setDob] = useState(new Date('2001-10-10'));

    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };


    return (

        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>


            <div className="div2">
                <form className="content">

                    {/* avatar */}
                    <div className="text-center mb-4">
                        <img src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/user-photo.png?raw=true" alt="Avatar" className="rounded-circle" width="100" />
                    </div>

                    {/* name */}
                    <InputFormProfile inputTitle="First Name" inputContent={firstName} inputType="text" setInputContent={setFirstName} isEditing={isEditing} />
                    <InputFormProfile inputTitle="Last Name" inputContent={lastName} inputType="text" setInputContent={setLastName} isEditing={isEditing} />

                    {/* address */}
                    <InputFormProfile inputTitle="Address" inputContent={address} inputType="text" setInputContent={setAddress} isEditing={isEditing} />
                    <div className="row">
                        <InputFormAddress inputTitle="City" inputContent={city} inputType="text" setInputContent={setCity} isEditing={isEditing} />
                        <InputFormAddress inputTitle="State" inputContent={state} inputType="text" setInputContent={setState} isEditing={isEditing} />
                        <InputFormAddress inputTitle="Zip Code" inputContent={zipCode} inputType="text" setInputContent={setZipCode} isEditing={isEditing} />

                        {/* contacts */}
                    </div>
                    <InputFormProfile inputTitle="Email" inputContent={email} inputType="email" setInputContent={setEmail} isEditing={isEditing} />
                    <InputFormProfile inputTitle="Phone" inputContent={phone} inputType="tel" setInputContent={setPhone} isEditing={isEditing} />

                    {/* DOB */}
                    <DateInput
                        inputTitle="Date of Birth"
                        selectedDate={dob}
                        setSelectedDate={setDob}
                        isEditing={isEditing}
                    />
                    

                    {/* password */}
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <a href="/reset-password" className="btn btn-link">Click to reset password</a>
                    </div>

                    {/* edit and log-out */}
                    {/* <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-secondary">Log out</button>
                    </div> */}

                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleEditToggle}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button className="btn btn-secondary">Log out</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

function InputFormProfile({ inputTitle, inputContent, inputType, setInputContent, isEditing }) {

    const handleChange = (e) => {
        if (setInputContent) {
            setInputContent(e.target.value);
        }
    };

    return (
        <div className="mb-3">
            <label className="form-label">{inputTitle}</label>
            <input
                type={inputType}
                className="form-control"
                value={inputContent}
                onChange={handleChange}
                readOnly={!isEditing}
            />
        </div>
    );
}

function InputFormAddress({ inputTitle, inputContent, inputType, setInputContent, isEditing }) {

    const handleChange = (e) => {
        if (setInputContent) {
            setInputContent(e.target.value);
        }
    };

    return (
        <div className="col-md-4 mb-3">
            <label className="form-label">{inputTitle}</label>
            <input
                type={inputType}
                className="form-control"
                value={inputContent}
                onChange={handleChange}
                readOnly={!isEditing}
            />
        </div>
    );
}

export default LoadProfilePage;
