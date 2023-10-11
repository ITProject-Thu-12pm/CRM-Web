import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import AddEvent from "./addEvent";
import EventDetail from "./eventDetails";

const DnDCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function MyCalendarComponent({
  allEvents,
  handleDeleteEvent,
  newEvent,
  setNewEvent,
  handleAddEvent,
}) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="container-calender">
      <div className="calendar-header-row header-container-blur">
        <h1 className="calendar-header-title">My Calendar</h1>
        <div>
          <AddEvent
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
          />
        </div>
      </div>

      <div className="calendar-content">
        <DnDCalendar
          localizer={localizer}
          events={allEvents}
          defaultDate={new Date()}
          // defaultDate={new Date()}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          style={{ height: 500, margin: "50px" }}
          selectable={true}
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            handleShowModal();
          }}
          // delete an event on selection.
          // onSelectEvent={handleDeleteEvent}
        />
      </div>

      <EventDetail
        selectedEvent={selectedEvent}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleDeleteEvent={handleDeleteEvent}
      />
    </div>
  );
}

export default MyCalendarComponent;
