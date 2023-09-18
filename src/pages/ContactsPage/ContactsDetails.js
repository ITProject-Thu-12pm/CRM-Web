import { useParams } from 'react-router-dom';
import contactsData from './ContactsInfo.json';
import SideBar from '../../components/Bar'
import React, { useState } from 'react';
import '../ProfilePage/ProfileStyles.css';
import DateInput from '../../components/DateInput.js'
import InputFormProfile from '../../components/Inputs/InputProfile';
import { useNavigate } from 'react-router-dom';

function ContactDetails() {
    let { id } = useParams();
    const contact = contactsData.find(contact => contact.id === parseInt(id));

    const [avatar, setAvatar] = useState(contact.avatar);
    const [tempAvatar, setTempAvatar] = useState(null);
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [address, setAddress] = useState(contact.address.streetAddress);
    const [city, setCity] = useState(contact.address.city);
    const [state, setState] = useState(contact.address.state);
    const [zipCode, setZipCode] = useState(contact.address.postcode);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [dob, setDob] = useState(new Date(contact.dob));
    const [gender, setGender] = useState(contact.gender);

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
    const initialContacts = contactsData;
    const [contactsList, setContactsList] = useState(initialContacts); 

    const saveChanges = () => {
        if (tempAvatar) {
            setAvatar(tempAvatar);
            setTempAvatar(null);
        }
        handleEditToggle();
        const updatedContacts = contactsList.map(c => 
            c.id === contact.id ? {...contact, firstName, lastName} : c
        );
    
        setContactsList(updatedContacts); // Update the contacts state (if you maintain it here)
        localStorage.setItem('contactsData', JSON.stringify(updatedContacts));
    };

    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contacts");
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
                        <img src={isEditing && tempAvatar ? tempAvatar : avatar} alt="Avatar" className="rounded-circle profile-avatar" />
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

                    {/* contacts */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Email" inputContent={email} inputType="email" setInputContent={setEmail} isEditing={isEditing} />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile inputTitle="Phone" inputContent={phone} inputType="tel" setInputContent={setPhone} isEditing={isEditing} />
                        </div>
                    </div>

                    {/* DOB & Gender*/}
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
                            {isEditing ? (
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <select
                                        className="form-control input-profile"
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                    >
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            ) : (
                                <InputFormProfile inputTitle="Gender" inputContent={gender} inputType="text" setInputContent={setGender} isEditing={isEditing} />
                            )}
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
                        <button className="btn" onClick={handleContactClick}>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default ContactDetails;
