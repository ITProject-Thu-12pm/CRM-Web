import React, { useState } from 'react';
import './ProfileStyles.css';
import SideBar from '../components/Bar.js'
import DateInput from '../components/DateInput.js'
import { useNavigate } from 'react-router-dom';


function LoadResetPage() {
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

    const navigate = useNavigate();

    const handleResetClick = () => {
        navigate("/login");
    };

    


    return (

        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>


            <div className="div2 d-flex align-items-center justify-content-center">
                <h1>hello rest</h1>
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
                className="form-control input-profile"
                value={inputContent}
                onChange={handleChange}
                readOnly={!isEditing}
            />
        </div>
    );
}

export default LoadResetPage;
