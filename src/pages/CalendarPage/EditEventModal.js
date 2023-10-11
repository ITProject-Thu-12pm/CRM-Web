import React, { useState } from 'react';
import moment from 'moment';

function EditEventModal({ eventToEdit, handleUpdateEvent, closeModal }) {
  // State to hold the edited event details
  const [editedEvent, setEditedEvent] = useState({
    title: eventToEdit.title,
    startDate: moment(eventToEdit.start).format('YYYY-MM-DD'),
    startTime: moment(eventToEdit.start).format('HH:mm'),
    endDate: moment(eventToEdit.end).format('YYYY-MM-DD'),
    endTime: moment(eventToEdit.end).format('HH:mm'),
    id: eventToEdit.id
  });

  // Function to handle the submission of the edited event
  const handleSubmit = () => {
    if (
      !editedEvent.startDate ||
      !editedEvent.startTime ||
      !editedEvent.endDate ||
      !editedEvent.endTime ||
      !editedEvent.title
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const updatedEvent = {
      title: editedEvent.title,
      start: moment(`${editedEvent.startDate} ${editedEvent.startTime}`).toDate(),
      end: moment(`${editedEvent.endDate} ${editedEvent.endTime}`).toDate(),
      id: editedEvent.id
    };

    handleUpdateEvent(updatedEvent);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Edit Event</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={editedEvent.title}
          onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={editedEvent.startDate}
          onChange={(e) => setEditedEvent({ ...editedEvent, startDate: e.target.value })}
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="time"
          value={editedEvent.startTime}
          onChange={(e) => setEditedEvent({ ...editedEvent, startTime: e.target.value })}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={editedEvent.endDate}
          onChange={(e) => setEditedEvent({ ...editedEvent, endDate: e.target.value })}
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="time"
          value={editedEvent.endTime}
          onChange={(e) => setEditedEvent({ ...editedEvent, endTime: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Update Event</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
  
}



export default EditEventModal;
