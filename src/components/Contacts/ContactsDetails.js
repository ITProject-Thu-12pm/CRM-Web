import { useParams } from 'react-router-dom';
import contactsData from '../../pages/Contacts/ContactsInfo.json';


function ContactDetails({ contacts }) {
  let { id } = useParams();
  const contact = contactsData.find(contact => contact.id === parseInt(id));

  return (
    <div>
      {/* Render the contact details here */}
      <h2>{contact.name}</h2>
      {/* ... */}
    </div>
  );
}

export default ContactDetails;
