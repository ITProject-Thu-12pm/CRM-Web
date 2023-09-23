import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEvent from "./addEvent";
import EventDetail from "./eventDetails";


const DnDCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function MyCalendarComponent({ allEvents, handleDeleteEvent, newEvent, setNewEvent, handleAddEvent }) {
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
            <div className="row calendar-header">
                <h1 className="col-md-4">My Calendar</h1>
                <div className="col-md-4 text-end">
                    <AddEvent newEvent={newEvent} setNewEvent={setNewEvent} handleAddEvent={handleAddEvent} />
                </div>

            </div>

            <div className="calendar-content">
                <DnDCalendar
                    localizer={localizer}
                    events={allEvents}
                    defaultDate={new Date(2015, 3, 1)}
                    // defaultDate={new Date()}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    style={{ height: 500, margin: "50px" }}
                    selectable={true}
                    onSelectEvent={event => {
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
