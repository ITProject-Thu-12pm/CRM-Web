import React, { useState } from "react";
import events from "./eventsInfo";
import MyCalendarComponent from "./calendar";
import moment from "moment";
import AddEvent from "./addEvent.js";
import SideBar from "../../components/Bar.js";
import "./calendarStyles.css";

import EditEventModal from "./EditEventModal";

function MyCalendar() {
  const [allEvents, setAllEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    id: "",
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [eventBeingEdited, setEventBeingEdited] = useState(null);

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = allEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setAllEvents(updatedEvents);
    setIsEditModalOpen(false);
  };

  const openEditModal = (event) => {
    setEventBeingEdited(event);
    setIsEditModalOpen(true);
  };

  const handleDeleteEvent = (e) => {
    const updatedEvents = allEvents.filter((event) => event.id !== e.id);
    setAllEvents(updatedEvents);
  };

  const handleAddEvent = () => {
    if (
      !newEvent.startDate ||
      !newEvent.startTime ||
      !newEvent.endDate ||
      !newEvent.endTime
    ) {
      alert("Please fill in all date and time fields.");
      return;
    }

    const formattedEvent = {
      title: newEvent.title,
      start: moment(`${newEvent.startDate} ${newEvent.startTime}`).toDate(),
      end: moment(`${newEvent.endDate} ${newEvent.endTime}`).toDate(),
      id: allEvents.length.toString(),
    };
    setAllEvents([...allEvents, formattedEvent]);
    setNewEvent({
      title: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      id: "",
    });
  };
  console.log(isEditModalOpen);
  // console.log(eventBeingEdited);
  return (
    <div className="parent">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2 right--side-bg">
        {/* <AddEvent newEvent={newEvent} setNewEvent={setNewEvent} handleAddEvent={handleAddEvent} /> */}
        <MyCalendarComponent
          allEvents={allEvents}
          handleDeleteEvent={handleDeleteEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          handleAddEvent={handleAddEvent}
          openEditModal={openEditModal}
        />
        <div>
          {isEditModalOpen && eventBeingEdited && (
            <EditEventModal
              eventToEdit={eventBeingEdited}
              handleUpdateEvent={handleUpdateEvent}
              closeModal={() => setIsEditModalOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
