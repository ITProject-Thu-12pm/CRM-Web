// // import React, {
// //   Fragment,
// //   Component,
// //   useState,
// //   useCallback,
// //   useMemo,
// // } from "react";
// // import events from "./events";
// // import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// // import { Calendar, momentLocalizer } from "react-big-calendar";
// // import moment from "moment";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

// // const localizer = momentLocalizer(moment);
// // const DnDCalendar = withDragAndDrop(Calendar);

// // // function onEventDrop(data) {
// // //   console.log(data);
// // // }

// // class MyCalendar extends Component {
// // //   state = {
// // //     events: [
// // //       {
// // //         start: moment().toDate(),
// // //         end: moment().add(1, "days").toDate(),
// // //         title: "Some title",
// // //       },
// // //     ],
// // //   };

// // //   onEventResize = (data) => {
// // //     const { start, end } = data;

// // //     this.setState((state) => {
// // //       state.events[0].start = start;
// // //       state.events[0].end = end;
// // //       return { events: [...state.events] };
// // //     });
// // //   };

// // //   onEventDrop = (data) => {
// // //     console.log(data);
// // //   };

// //   // handleSelectEvent = useCallback(
// //   //   (event) => window.alert(event.title),
// //   //   []
// //   // );

// //   render() {
// //     return (
// //       // <div style={{ height: 700 }}>
// //       //   <DnDCalendar
// //       //     localizer={localizer}
// //       //     events={events}
// //       //     step={60}
// //       //     defaultDate={new Date(2015, 3, 1)}
// //       //     // defaultDate={moment().toDate()}
// //       //     defaultView="month"
// //       //     // onEventDrop={}
// //       //     resizable
// //       //     onEventResize={this.onEventResize}
// //       //     onEventDrop={this.onEventDrop}
// //       //     popup={false}
// //       //     // style={{ height: "100vh" }}
// //       //     onShowMore={(events, date) => {
// //       //       // Handle your modal logic here if needed
// //       //       console.log("Show More: ", events, date);
// //       //     }}
// //       //   />
// //       // </div>
// //       // <Fragment>
// //         {/* <DemoLink fileName="popup">
// //           <strong>
// //             Click the "+&#123;x&#125; more" link on any calendar day that cannot
// //             fit all the days events to see an inline popup of all the events.
// //           </strong>
// //         </DemoLink> */}
// //       //   <div className="calendar">
// //       //     <DnDCalendar
// //       //       defaultDate={moment().toDate()}
// //       //       defaultView="month"
// //       //       events={this.state.events}
// //       //       localizer={localizer}
// //       //       // onEventDrop={this.onEventDrop}
// //       //       // onEventResize={this.onEventResize}
// //       //       // resizable
// //       //       // selectable
// //       //       // popup
// //       //       style={{ height: "100vh" }}
// //       //       // onSelectEvent={this.handleSelectEvent}
// //       //     />
// //       //   </div>
// //       // </Fragment>

// //       <div className="calendar">
// //       <DnDCalendar
// //         defaultDate={moment().toDate()}
// //         defaultView="month"
// //         events={this.state.events}
// //         localizer={localizer}

// //         style={{ height: "100vh" }}/>
// //     </div>
// //       );
// //   }
// // }

// // // function LoadCalendarPage() {
// // //   return (
// // //     MyCalendar.render()
// // //   );
// // // }
// // // const linkBase =
// // //   "https://github.com/jquense/react-big-calendar/blob/master/stories/demos/exampleCode/";

// // // function DemoLink({ fileName, children }) {
// // //   return (
// // //     <Fragment>
// // //       <div style={{ marginBottom: 10 }}>
// // //         <a target="_blank" href={`${linkBase}${fileName}.js`}>
// // //           &lt;\&gt; View Example Source Code
// // //         </a>
// // //       </div>
// // //       {children ? <div style={{ marginBottom: 10 }}>{children}</div> : null}
// // //     </Fragment>
// // //   );
// // // }

// // // function Selectable({ localizer }) {
// // //   const [myEvents, setEvents] = useState(events);

// // //   const handleSelectSlot = useCallback(
// // //     ({ start, end }) => {
// // //       const title = window.prompt("New Event name");
// // //       if (title) {
// // //         setEvents((prev) => [...prev, { start, end, title }]);
// // //       }
// // //     },
// // //     [setEvents]
// // //   );

// // //   const handleSelectEvent = useCallback(
// // //     (event) => window.alert(event.title),
// // //     []
// // //   );

// // //   const { defaultDate, scrollToTime } = useMemo(
// // //     () => ({
// // //       defaultDate: new Date(2015, 3, 12),
// // //       scrollToTime: new Date(1970, 1, 1, 6),
// // //     }),
// // //     []
// // //   );
// // // }

// import { Calendar, momentLocalizer } from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// import moment from "moment";
// // import events from "./events";

// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DnDCalendar = withDragAndDrop(Calendar);
// const myLocalizer = momentLocalizer(moment);

// const myevents = [
//   {
//     start: moment("2023-09-14T12:00:00").toDate(),
//     end: moment("2023-09-14T14:00:00").toDate(),
//     title: "IT Project Workshop",
//   },
//   {
//     start: moment("2023-09-14T14:00:00").toDate(),
//     end: moment("2023-09-16T15:30:00").toDate(),
//     title: "Lunch Time!",
//   },
// ];

// // function MyCalendar() {
// // const [newEvent, setNewEvent] = useState({ title: " ", start: "", end: "" });
// // const [allEvents, setAllEvents] = useState(events);

// // function handleAddEvent() {
// //   setAllEvents([...allEvents, newEvent]);
// // }

// // import format from "date-fns/format";
// // import getDay from "date-fns/getDay";
// // import parse from "date-fns/parse";
// // import startOfWeek from "date-fns/startOfWeek";
// // import React, { useState } from "react";
// // import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import "./App.css";

// // const locales = {
// //     "en-US": require("date-fns/locale/en-US"),
// // };
// // const localizer = dateFnsLocalizer({
// //     format,
// //     parse,
// //     startOfWeek,
// //     getDay,
// //     locales,
// // });

// // const events = [
// //     {
// //         title: "Big Meeting",
// //         allDay: true,
// //         start: new Date(2021, 6, 0),
// //         end: new Date(2021, 6, 0),
// //     },
// //     {
// //         title: "Vacation",
// //         start: new Date(2021, 6, 7),
// //         end: new Date(2021, 6, 10),
// //     },
// //     {
// //         title: "Conference",
// //         start: new Date(2021, 6, 20),
// //         end: new Date(2021, 6, 23),
// //     },
// // ];

// const eventsJson = require("./events.json");

// function convertUTCSToDate(events) {
//   for (const event of events) {
//     // Convert start to Date object
//     event.start = new Date(event.start);
//     // Convert end to Date object
//     event.end = new Date(event.end);
//   }
//   return events;
// }

// function convertToUTC(dateString, timeString) {
//   // Combine the date and time strings into a single string
//   const combinedDateTimeString = `${dateString}T${timeString}`;

//   // Parse the combined string into a JavaScript Date object
//   const localDate = new Date(combinedDateTimeString);

//   // Convert the Date object to a UTC-formatted string
//   const utcDate = localDate.toISOString();

//   return utcDate;
// }

// const events = convertUTCSToDate(eventsJson);

// function MyCalendar() {
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//   const [allEvents, setAllEvents] = useState(events);
//   const [startDate, setStartDate] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [endTime, setEndTime] = useState("");

//   useEffect(() => {
//     // Combine date and time and store in 'start' state variable
//     const combinedDateTime = `${startDate}T${startTime}:00Z`;
//     setNewEvent((prevNewEvent) => ({
//       ...prevNewEvent,
//       start: combinedDateTime,
//     }));
//   }, [startDate, startTime]);

//   useEffect(() => {
//     // Combine date and time and store in 'start' state variable
//     const combinedDateTime = `${endDate}T${endTime}:00Z`;
//     setNewEvent((prevNewEvent) => ({
//       ...prevNewEvent,
//       end: combinedDateTime,
//     }));
//   }, [endDate, endTime]);

//   function handleAddEvent() {
//     // for (let i = 0; i < allEvents.length; i++) {
//     //   const d1 = new Date(allEvents[i].start);
//     //   const d2 = new Date(newEvent.start);
//     //   const d3 = new Date(allEvents[i].end);
//     //   const d4 = new Date(newEvent.end);
//     //   /*
//     //         console.log(d1 <= d2);
//     //         console.log(d2 <= d3);
//     //         console.log(d1 <= d4);
//     //         console.log(d4 <= d3);
//     //           */

//     //   if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
//     //     alert("CLASH");
//     //     break;
//     //   }
//     // }

//     setAllEvents([...allEvents, newEvent]);
//   }

//   // return (
//   //   <div>
//   //     <h1>Calendar</h1>
//   //     <h2>Add New Event</h2>
//   //     <div>
//   //       <input
//   //         type="text"
//   //         placeholder="Add Title"
//   //         style={{ width: "20%", marginRight: "10px" }}
//   //         value={newEvent.title}
//   //         onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//   //       />
//   //       <DatePicker
//   //         placeholderText="Start Date"
//   //         style={{ marginRight: "10px" }}
//   //         selected={newEvent.start}
//   //         onChange={(start) => setNewEvent(...newEvent, start)}
//   //       />
//   //       <DatePicker
//   //         placeholderText="End Date"
//   //         style={{ marginRight: "10px" }}
//   //         selected={newEvent.end}
//   //         onChange={(end) => setNewEvent(...newEvent, end)}
//   //       />
//   //       <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
//   //         Add Event
//   //       </button>
//   //     </div>
//   return (
//     <div className="App">
//       {/* <h1>Calendar</h1>
//       <h2>Add New Event</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Add Title"
//           style={{ width: "20%", marginRight: "10px" }}
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//         />
//         <DatePicker
//           placeholderText="Start Date"
//           style={{ marginRight: "10px" }}
//           selected={newEvent.start}
//           onChange={(start) => setNewEvent({ ...newEvent, start })}
//         />
//         <DatePicker
//           placeholderText="End Date"
//           selected={newEvent.end}
//           onChange={(end) => setNewEvent({ ...newEvent, end })}
//         />
//         <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//           Add Event
//         </button>
//       </div> */}

//       <button
//         type="button"
//         class="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop"
//       >
//         Add Event
//       </button>

//       <div
//         class="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="staticBackdropLabel">
//                 Add Event
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <div>
//                 <div class="form-floating mb-3">
//                   <input
//                     type="text"
//                     placeholder="Event Title"
//                     id="floatingTitle"
//                     class="form-control"
//                     // style={{ width: "20%", marginRight: "10px" }}
//                     value={newEvent.title}
//                     onChange={(e) =>
//                       setNewEvent({ ...newEvent, title: e.target.value })
//                     }
//                   />
//                   <label for="floatingTitle">Event Title</label>
//                 </div>

//                 <div class="form-floating mb-3">
//                   <input
//                     type="date"
//                     placeholder="dd/mm/yyyy"
//                     id="startDatePicker"
//                     class="form-control"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                   />
//                   <label for="startDatePicker">Start Date</label>
//                 </div>

//                 <div class="form-floating mb-3">
//                   <input
//                     type="time"
//                     id="startTimePicker"
//                     class="form-control"
//                     value={startTime}
//                     onChange={(e) => setStartTime(e.target.value)}
//                   />
//                   <label for="startTimePicker">Start Time</label>
//                 </div>

//                 <div class="form-floating mb-3">
//                   <input
//                     type="date"
//                     class="form-control"
//                     placeholder="dd/mm/yyyy"
//                     id="endDatePicker"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                   />
//                   <label for="endDatePicker">End Date</label>
//                 </div>

//                 <div class="form-floating mb-3">
//                   <input
//                     type="time"
//                     id="endTimePicker"
//                     class="form-control"
//                     value={endTime}
//                     onChange={(e) => setEndTime(e.target.value)}
//                   />
//                   <label for="endTimePicker">End Time</label>
//                 </div>

//                 {/* <DatePicker
//                   placeholderText="Start Date"
//                   // style={{ marginRight: "10px" }}
//                   selected={newEvent.start}
//                   onChange={(start) => setNewEvent({ ...newEvent, start })}
//                 /> */}
//                 {/*
//                 <DatePicker
//                   placeholderText="End Date"
//                   selected={newEvent.end}
//                   onChange={(end) => setNewEvent({ ...newEvent, end })}
//                 /> */}
//                 {/* <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//                   Add Event
//                 </button> */}
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-primary"
//                 data-bs-dismiss="modal"
//                 onClick={handleAddEvent}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DnDCalendar
//         localizer={myLocalizer}
//         events={allEvents}
//         defaultDate={new Date(2015, 3, 1)}
//         // step={60}
//         startAccessor="start"
//         endAccessor="end"
//         defaultView="month"
//         // style={{ height: "100vh" }}
//         style={{ height: 500, margin: "50px" }}
//         // draggableAccessor={(event) => true}
//       />
//     </div>
//   );
// }

// export default MyCalendar;

// good
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import events from "./events";

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

  // Event date and time input states
  // const [startDate, setStartDate] = useState("");
  // const [startTime, setStartTime] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [endTime, setEndTime] = useState("");

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

  // function handleSelectEvent(e) {
  //   // myModal(title="Edit Event");
  // }


  

  // function myModal(props) {
  //   return (
  //     <>
  //       <div
  //         className="modal fade"
  //         id="staticBackdrop"
  //         data-bs-backdrop="static"
  //         data-bs-keyboard="false"
  //         tabIndex="-1"
  //         aria-labelledby="staticBackdropLabel"
  //         aria-hidden="true"
  //       >
  //         <div className="modal-dialog">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h1 className="modal-title fs-5" id="staticBackdropLabel">
  //                 {props.title}
  //               </h1>
  //               <button
  //                 type="button"
  //                 className="btn-close"
  //                 data-bs-dismiss="modal"
  //                 aria-label="Close"
  //               ></button>
  //             </div>
  //             <div className="modal-body">
  //               <div>
  //                 <div className="form-floating mb-3">
  //                   <input
  //                     type="text"
  //                     placeholder="Event Title"
  //                     id="floatingTitle"
  //                     className="form-control"
  //                     value={newEvent.title}
  //                     onChange={handleAddTitle}
  //                   />
  //                   <label htmlFor="floatingTitle">Event Title</label>
  //                 </div>

  //                 <div className="form-floating mb-3">
  //                   <input
  //                     type="date"
  //                     placeholder="dd/mm/yyyy"
  //                     id="startDatePicker"
  //                     className="form-control"
  //                     value={newEvent.startDate}
  //                     onChange={handleAddStartDate}
  //                   />
  //                   <label htmlFor="startDatePicker">Start Date</label>
  //                 </div>

  //                 <div className="form-floating mb-3">
  //                   <input
  //                     type="time"
  //                     id="startTimePicker"
  //                     className="form-control"
  //                     value={newEvent.startTime}
  //                     onChange={handleAddStartTime}
  //                   />
  //                   <label htmlFor="startTimePicker">Start Time</label>
  //                 </div>

  //                 <div className="form-floating mb-3">
  //                   <input
  //                     type="date"
  //                     className="form-control"
  //                     placeholder="dd/mm/yyyy"
  //                     id="endDatePicker"
  //                     value={newEvent.endDate}
  //                     onChange={handleAddEndDate}
  //                   />
  //                   <label htmlFor="endDatePicker">End Date</label>
  //                 </div>

  //                 <div className="form-floating mb-3">
  //                   <input
  //                     type="time"
  //                     id="endTimePicker"
  //                     className="form-control"
  //                     value={newEvent.endTime}
  //                     onChange={handleAddEndTime}
  //                   />
  //                   <label htmlFor="endTimePicker">End Time</label>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="modal-footer">
  //               <button
  //                 type="button"
  //                 className="btn btn-secondary"
  //                 data-bs-dismiss="modal"
  //               >
  //                 Close
  //               </button>
  //               {/* {props.OnCreate && (
  //                 <button
  //                   type="button"
  //                   className="btn btn-primary"
  //                   data-bs-dismiss="modal"
  //                   onClick={handleAddEvent}
  //                 >
  //                   Save
  //                 </button>
  //               )} */}

  //               {/* {props.OnDelete && ( */}
  //                 <button
  //                   type="button"
  //                   className="btn btn-primary"
  //                   data-bs-dismiss="modal"
  //                   onClick={handleDeleteEvent}
  //                 >
  //                   Delete
  //                 </button>
  //               {/* )} */}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

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
