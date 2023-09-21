import React from "react";
import "bootstrap";
import './BarStyles.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';



function SideBar() {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate("/login");
    };
    const handleProfileClick = () => {
        navigate("/profile");
    };

    const location = useLocation();

    return (
        <div>
            {/* sidebar col */}
            {/* image and mycircle */}
            <div className="my-circles">
                <a class="navbar-brand" href="/" aria-label="MyCircles">
                    <img
                        src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/logo-white-bg.png?raw=true"
                        class="title-img"
                        alt="logo"
                    ></img>
                </a>
                <h5>MyCircles</h5>
            </div>

            {/* button */}
            <div className="btns">
                <Button to="/dashboard" buttonTitle="Dashboard" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/dashboard.png?raw=true" />
                <Button to="/contacts" buttonTitle="Contacts" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/user-square.png?raw=true" />
                <Button to="/todo" buttonTitle="Todo" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/Check.png?raw=true" />
                <Button to="/calendar" buttonTitle="Calendar" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/Calendar.png?raw=true" />

            </div>

            {/* profile dropdown menu */}
            <div className={`dropdown profile ${location.pathname === "/profile" ? "active-profile" : ""}`}>
                <a
                    href="#"
                    className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
                    id="dropdownUser"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/user-photo.png?raw=true" // Replace with actual image URL
                        alt="User Avatar"
                        className="rounded-circle me-2 avatar"
                    />
                    <span className="d-none d-sm-inline user-name">Evano</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
                    {/* Dropdown menu items */}
                    <li><a className="dropdown-item" href="#" onClick={handleProfileClick}>Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={handleSignOutClick}>Sign Out</a></li>
                </ul>
            </div>



        </div>
    );
}

const Button = ({ buttonTitle, iconSrc, to }) => {
    return (
        <NavLink
            to={to}
            activeClassName="active"
            className="btn btn-outline-secondary align-items-center bar-btn"
        >
            <img src={iconSrc} alt="Icon" className="me-2" />
            <span>{buttonTitle}</span>
        </NavLink>
    );
}


export default SideBar;
