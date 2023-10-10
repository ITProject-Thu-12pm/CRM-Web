import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/Bar.js'
import InputFormProfile from '../../components/Inputs/InputProfile';
import DateInput from '../../components/DateInput.js'
import { addUserContact } from '../Interface.js'

function AddContactManually() {
    const [id, setId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tags, setTags] = useState([]);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postcode, setPostcode] = useState('');
    const [dob, setDob] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [avatar, setAvatar] = useState('https://github.com/ITProject-Thu-12pm/Assets/blob/main/broken_avatar.png?raw=true');
    const [avatarDataUrl, setAvatarDataUrl] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const navigate = useNavigate();

    const handleSave = () => {
        if (!firstName || !lastName || !email) {
            alert("Name and Email are mandatory!");
            return;
        }
        const image = new Image();
        image.src = avatar;
        image.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // 设置 Canvas 的尺寸与图像一样
            canvas.width = image.width;
            canvas.height = image.height;

            // 在 Canvas 上绘制图像
            ctx.drawImage(image, 0, 0);

            // 将 Canvas 上的图像转换为 Data URL
            const dataUrl = canvas.toDataURL('image/png'); // 可以选择不同的图像格式，如 'image/png'

            // dataUrl 就是包含图像的 Base64 编码字符串
            console.log('Image as Data URL:', dataUrl);
        }
            
        // todo: Logic to save the contact goes here
        addUserContact(firstName, lastName, tags, phone, email, streetAddress, city, state, postcode, dob, gender, avatarDataUrl);
        navigate('/contacts');
    };

    return (
        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2 d-flex align-items-center justify-content-center'>
                <div className="content">

                    {/* avatar */}
                    <div className="text-center mb-4">
                        <img src={avatar} alt="Avatar" className="rounded-circle profile-avatar" />
                        <div>
                            <input type="file" onChange={handleAvatarChange} />
                        </div>
                    </div>

                    {/* name */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile
                                inputTitle="First Name*"
                                inputContent={firstName}
                                setInputContent={setFirstName}
                                inputType="text"
                                isEditing={true}
                            />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile
                                inputTitle="Last Name*"
                                inputContent={lastName}
                                setInputContent={setLastName}
                                inputType="text"
                                isEditing={true}
                            />
                        </div>
                    </div>

                    {/* contacts */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <InputFormProfile
                                inputTitle="Email*"
                                inputContent={email}
                                setInputContent={setEmail}
                                inputType="email"
                                isEditing={true}
                            />
                        </div>
                        <div className='col-md-6'>
                            <InputFormProfile
                                inputTitle="Phone"
                                inputContent={phone}
                                setInputContent={setPhone}
                                inputType="tel"
                                isEditing={true}
                            />
                        </div>
                    </div>

                    {/* Dob and gender */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <DateInput
                                inputTitle="Date of Birth (dd/mm/yyyy)"
                                selectedDate={dob}
                                setSelectedDate={setDob}
                                isEditing={true}
                            />
                        </div>
                        <div className='col-md-6'>
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
                        </div>
                    </div>

                    {/* address */}
                    <InputFormProfile
                        inputTitle="Street Address"
                        inputContent={streetAddress}
                        setInputContent={setStreetAddress}
                        inputType="text"
                        isEditing={true}
                    />
                    <div className="row">
                        <div className='col-md-4'>
                            <InputFormProfile
                                inputTitle="City"
                                inputContent={city}
                                setInputContent={setCity}
                                inputType="text"
                                isEditing={true}
                            />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile
                                inputTitle="State"
                                inputContent={state}
                                setInputContent={setState}
                                inputType="text"
                                isEditing={true}
                            />
                        </div>
                        <div className='col-md-4'>
                            <InputFormProfile
                                inputTitle="Postcode"
                                inputContent={postcode}
                                setInputContent={setPostcode}
                                inputType="text"
                                isEditing={true}
                            />
                        </div>
                    </div>

                    <div className="d-flex profile-btns">
                    <button className="btn btn-primary rounded-5 change-color-btn" onClick={handleSave}>Save</button>
                    <button className="btn" onClick={() => navigate('/contacts')}>Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AddContactManually;