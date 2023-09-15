import React from 'react';
import "./ContactStyles.css"

const ContactSummary = ({ total, active, inactive }) => {
    return (
        <div className="row">
            <div className="col d-flex align-items-center">
                {/* Add icon here */}
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/inactive.png?raw=true"
                    alt="Dashboard Icon"
                    className="icon-style mr-2" // Add some margin to separate the icon from the text
                />
                <div>
                    <div className='contact-output'>Total Contacts</div>
                    <div>{total}</div>
                </div>
            </div>
            <div className="col d-flex align-items-center">
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/total.png?raw=true"
                    alt="Dashboard Icon"
                    className="mr-2" // Add some margin to separate the icon from the text
                />
                <div>
                    <div className='contact-output'>Active Contacts</div>
                    <div>{active}</div>
                </div>
            </div>
            <div className="col d-flex align-items-center">
                {/* Add icon here */}
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/active.png?raw=true"
                    alt="Dashboard Icon"
                    className="mr-2" // Add some margin to separate the icon from the text
                />
                <div>
                    <div className='contact-output'>Inactive Contacts</div>
                    <div>{inactive}</div>
                </div>
            </div>
        </div>
    );
}

export default ContactSummary;
