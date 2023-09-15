import React from 'react';
import Greetings from './Greeting';
import Summary from './ContactSummary';
import ContactTable from './ContactTable';
import SideBar from '../../components/Bar.js'
import "./ContactStyles.css"

function Contacts() {
    const contacts = [
        { id: 1, name: 'John Doe', like: true, tags: 'Friend', phone: '123-456-7890', email: 'john.doe@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', like: false, tags: 'Colleague', phone: '987-654-3210', email: 'jane.smith@example.com', status: 'Inactive' },
        { id: 3, name: 'Alice Johnson', like: true, tags: 'Family', phone: '456-789-0123', email: 'alice.johnson@example.com', status: 'Active' },
        { id: 4, name: 'Bob Williams', like: false, tags: 'Friend', phone: '789-012-3456', email: 'bob.williams@example.com', status: 'Active' },
        { id: 5, name: 'Charlie Brown', like: true, tags: 'Neighbor', phone: '012-345-6789', email: 'charlie.brown@example.com', status: 'Inactive' },
        { id: 6, name: 'Charlie Brown', like: true, tags: 'Neighbor', phone: '012-345-6789', email: 'charlie.brown@example.com', status: 'Inactive' },
        { id: 7, name: 'Charlie Brown', like: true, tags: 'Neighbor', phone: '012-345-6789', email: 'charlie.brown@example.com', status: 'Inactive' },
        
    ];
    

    return (
        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2 right--side-bg'>
                <div className="container-contact">
                    <div className='greeting'>
                        <Greetings username="Evano" />
                    </div>
                    <div className='summary contacts-cards'>
                        <Summary total={10} active={7} inactive={3} />
                    </div>
                    <div className='table contacts-cards'>
                        <ContactTable contacts={contacts} />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contacts;
