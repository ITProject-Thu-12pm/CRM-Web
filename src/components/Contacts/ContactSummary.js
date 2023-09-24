import React from 'react';


const ContactSummary = ({ total, active, inactive }) => {
    return (
        <div className="summary-container">
            <div className="col d-flex icon-and-content">
                {/* Add icon here */}
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/inactive.png?raw=true"
                    alt="Total Icon"
                />
                <div>
                    <div className='summary-first-text'>Total Contacts</div>
                    <div className='summary-second-text'>{total}</div>
                </div>
            </div>
            <div className="col d-flex icon-and-content">
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/total.png?raw=true"
                    alt="Active Icon"
                />
                <div>
                    <div className='summary-first-text'>Active Contacts</div>
                    <div className='summary-second-text'>{active}</div>
                </div>
            </div>
            <div className="col d-flex icon-and-content">
                {/* Add icon here */}
                <img
                    src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/active.png?raw=true"
                    alt="Inactive Icon"
                />
                <div>
                    <div className='summary-first-text'>Inactive Contacts</div>
                    <div className='summary-second-text'>{inactive}</div>
                </div>
            </div>
        </div>
    );
}

export default ContactSummary;
