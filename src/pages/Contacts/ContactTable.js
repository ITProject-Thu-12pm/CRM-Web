import React from 'react';

const ContactTable = ({ contacts }) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3>All Contacts</h3>
                <div>
                    <button className="btn btn-primary mr-2">+ Add New Contact</button>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Like</th>
                        <th>Tags</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{/* Add like button here */}</td>
                            <td>{contact.tags}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;
