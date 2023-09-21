// good
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import events from "./eventsInfo";

const DnDCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    id: ""
  });

  const [allEvents, setAllEvents] = useState(events);

  function handleAddTitle(e) {
    setNewEvent({ ...newEvent, title: e.target.value });
  }

  function handleAddStartDate(e) {
    setNewEvent({ ...newEvent, startDate: e.target.value });
  }

  function handleAddStartTime(e) {
    setNewEvent({ ...newEvent, startTime: e.target.value });
  }

  function handleAddEndDate(e) {
    setNewEvent({ ...newEvent, endDate: e.target.value });
  }

  function handleAddEndTime(e) {
    setNewEvent({ ...newEvent, endTime: e.target.value });
  }

  const handleAddEvent = () => {
    // Ensure the start and end date/time fields are not empty
    if (
      !newEvent.startDate ||
      !newEvent.startTime ||
      !newEvent.endDate ||
      !newEvent.endTime
    ) {
      alert("Please fill in all date and time fields.");
      return;
    }

    const newEventObject = {
      title: newEvent.title,
      start: moment(
        `${newEvent.startDate} ${newEvent.startTime}`,
        "YYYY-MM-DD HH:mm"
      ).toDate(),
      end: moment(
        `${newEvent.endDate} ${newEvent.endTime}`,
        "YYYY-MM-DD HH:mm"
      ).toDate(),
    };

    setAllEvents([...allEvents, newEventObject]);

    // Clear input fields after adding the event
    setNewEvent({
      title: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    });
  };

  // const [showModal, setShowModal] = useState(false);

  function handleDeleteEvent(e) {
    const updatedEvents = allEvents.filter(
      (event) => event.id !== e.id
    );
    setAllEvents(updatedEvents);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <DnDCalendar
            localizer={localizer}
            events={allEvents}
            defaultDate={new Date(2015, 3, 1)}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            style={{ height: 500, margin: "50px" }}
            selectable={true}
            onSelectEvent={handleDeleteEvent}
          />
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Add Event
          </button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Add Event
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        placeholder="Event Title"
                        id="floatingTitle"
                        className="form-control"
                        value={newEvent.title}
                        onChange={handleAddTitle}
                      />
                      <label htmlFor="floatingTitle">Event Title</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        placeholder="dd/mm/yyyy"
                        id="startDatePicker"
                        className="form-control"
                        value={newEvent.startDate}
                        onChange={handleAddStartDate}
                      />
                      <label htmlFor="startDatePicker">Start Date</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="time"
                        id="startTimePicker"
                        className="form-control"
                        value={newEvent.startTime}
                        onChange={handleAddStartTime}
                      />
                      <label htmlFor="startTimePicker">Start Time</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        id="endDatePicker"
                        value={newEvent.endDate}
                        onChange={handleAddEndDate}
                      />
                      <label htmlFor="endDatePicker">End Date</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="time"
                        id="endTimePicker"
                        className="form-control"
                        value={newEvent.endTime}
                        onChange={handleAddEndTime}
                      />
                      <label htmlFor="endTimePicker">End Time</label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleAddEvent}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
