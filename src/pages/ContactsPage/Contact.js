import React,{ useState } from 'react';
import Greetings from '../../components/Contacts/Greeting';
import Summary from '../../components/Contacts/ContactSummary';
import ContactTable from '../../components/Contacts/ContactTable';
import SideBar from '../../components/Bar.js'
import contactsData from './ContactsInfo.json';
import "./ContactStyles.css"

function Contacts() {
    
    let storedContacts = JSON.parse(localStorage.getItem('contactsData'));
    if (!storedContacts) {
        localStorage.setItem('contactsData', JSON.stringify(contactsData));
        storedContacts = contactsData;
    }
    const [contacts, setContacts] = useState(storedContacts)
    /* const contacts = contactsData;  */

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
                    <ContactTable contacts={contacts} setContacts={setContacts} />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contacts;
