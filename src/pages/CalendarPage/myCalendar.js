import React, { useState } from "react";
import events from "./eventsInfo";
import MyCalendarComponent from "./calendar";
import moment from "moment";
import AddEvent from "./addEvent.js";
import SideBar from "../../components/Bar.js";
import "./calendarStyles.css";


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




  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = allEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setAllEvents(updatedEvents);
    
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
      !newEvent.endTime ||
      !newEvent.title
    ) {
      alert("Please fill in all the fields.");
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
          /* save event */
          handleUpdateEvent={handleUpdateEvent}
          
        />
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
