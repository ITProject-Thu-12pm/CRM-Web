import React, { useState, useEffect} from "react";
import Greetings from "../../components/Contacts/Greeting";
import Summary from "../../components/Contacts/ContactSummary";
import ContactTable from "../../components/Contacts/ContactTable";
import ContactDetails from "../../pages/ContactsPage/ContactsDetails"; // Import this if not already imported
import SideBar from "../../components/Bar.js";
import contactsData from "./ContactsInfo.json";
import "../../components/RightSideStyles.css";
import "./ContactStyles.css";
import {GetUserContact} from "../Interface.js";

function Contacts() {
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContactId, setSelectedContactId] = useState(null); 
  useEffect(() => {
          // Asynchronously fetch user data
          const fetchData = async () => {
              try {
                  const datas = await GetUserContact();
                  for (let data in datas) {
                    datas[data]["address"] = {"street_address" : datas[data]["address"],
                                    "city": datas[data]["city"],
                                    "state": datas[data]["state"],
                                    "postcode": datas[data]["postcode"]}
                  }
                  
                  setContacts(datas);
              } catch (error) {
                  console.error("Error fetching user data:", error);
              }
          };
          // Invoke the asynchronous function
          fetchData();
      }, []);
  if (selectedContactId) {
    /* direct to contact details when click contact name */
    return <ContactDetails id={selectedContactId} contacts = {contacts}/>;
  } else {
    return (
        /* contact page */
      <div className="parent">
        <div className="div1">
          <SideBar />
        </div>
        <div className="div2 right--side-bg">
          <div className="container-contact">
            <div className="greeting">
              <Greetings username="Evano" />
            </div>
            <div className="summary contacts-cards">
              <Summary total={7} active={4} inactive={3} />
            </div>
            <div className="table contacts-cards">
              <ContactTable
                contacts={contacts}
                setContacts={setContacts}
                onSelectContact={(id) => setSelectedContactId(id)} // Pass the handler as a prop
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
