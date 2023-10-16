import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";

function EventDetail({
  selectedEvent,
  showModal,
  handleCloseModal,
  handleDeleteEvent,
  openEditModal,
}) {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-floating mb-3">
          <input
            type="text"
            placeholder="Event Title"
            id="floatingTitle"
            className="form-control"
            value={selectedEvent ? selectedEvent.title : ""}

          />
          <label htmlFor="floatingTitle">Title</label>
        </div>
        {/* <p>Title: {selectedEvent?.title}</p> */}
        <div className="form-floating mb-3">
          <input
            type="date"
            placeholder="dd/mm/yyyy"
            id="startDatePicker"
            className="form-control"
            value={
              selectedEvent
                ? moment(selectedEvent.start).format("YYYY-MM-DD")
                : ""
            }
            // readOnly  //only for testing
            disabled
          />
          <label htmlFor="startDatePicker">Start Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            id="startTimePicker"
            className="form-control"
            value={
              selectedEvent ? moment(selectedEvent.start).format("HH:mm") : ""
            }
            // readOnly  // only for testing
            disabled
          />
          <label htmlFor="startTimePicker">Start Time</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            placeholder="dd/mm/yyyy"
            id="startDatePicker"
            className="form-control"
            value={
              selectedEvent
                ? moment(selectedEvent.end).format("YYYY-MM-DD")
                : ""
            }
            // readOnly  //only for testing
            disabled
          />
          <label htmlFor="startDatePicker">End Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            id="startTimePicker"
            className="form-control"
            value={
              selectedEvent ? moment(selectedEvent.end).format("HH:mm") : ""
            }
            // readOnly  // only for testing
            disabled
          />
          <label htmlFor="startTimePicker">End Time</label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          onClick={() => {
            handleCloseModal();
            openEditModal(selectedEvent);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
            style={{ marginRight: "8px", marginBottom: "2px" }}
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          Edit Event
        </Button>

        <Button
          variant="outline-danger"
          onClick={() => {
            handleDeleteEvent(selectedEvent);
            handleCloseModal();
          }}
          style={{
            position: "absolute",
            bottom: "12px", // Adjust the distance from the bottom as needed
            left: "20px", // Adjust the distance from the left as needed
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
            style={{ marginRight: "8px" }}
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
          Delete Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventDetail;
