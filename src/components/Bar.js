import React from "react";
import "bootstrap";
import './BarStyles.css';

function SideBar() {
    return (
        <div className="container-fluid sidebar-container">
            {/* sidebar col */}
            <div className="all">
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
                <div>
                    <Button buttonTitle="Dashboard" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/dashboard.png?raw=true" />
                    <Button buttonTitle="Contacts" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/user-square.png?raw=true" />
                    <Button buttonTitle="Todo" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/Check.png?raw=true" />
                    <Button buttonTitle="Calendar" iconSrc="https://github.com/ITProject-Thu-12pm/Assets/blob/main/Calendar.png?raw=true" />
                </div>

                {/* profile dropdown menu */}
                <div className="dropdown mt-3 profile">
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
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

const Button = ({ buttonTitle, iconSrc }) => {
    return (
        <form>
            <div className="form-floating">
                <button
                    type="button"
                    className="btn btn-outline-secondary rounded-5 d-flex align-items-center remove-default-btn-style button-style"
                /* onClick={handleGetCodeClick} */
                >
                    <img src={iconSrc} alt="Icon" className="me-2 icon-img" />
                    <span className="button-title">{buttonTitle}</span>
                </button>
            </div>
        </form>
    );
}

export default SideBar;
