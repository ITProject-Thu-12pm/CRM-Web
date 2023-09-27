import React,{ useState } from 'react';
import Greetings from '../../components/Contacts/Greeting';
import Summary from '../../components/Contacts/ContactSummary';
import ContactTable from '../../components/Contacts/ContactTable';
import SideBar from '../../components/Bar.js'
import contactsData from './ContactsInfo.json';
import "../../components/RightSideStyles.css"
import "./ContactStyles.css"

function Contacts() {
    
    const [contacts, setContacts] = useState(contactsData);

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
                        {/* todo: back-end link here */}
                        <Summary total={7} active={4} inactive={3} />
                    </div>
                    <div className='table contacts-cards'>
                        <ContactTable contacts={contacts} setContacts={setContacts} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contacts;
