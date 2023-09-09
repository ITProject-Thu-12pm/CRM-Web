import React from "react";
import events from "./events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function MyCalendar() {
  return (
    <div style={{ height: 700 }}>
      <Calendar
        events={events}
        localizer={localizer}
        step={60}
        defaultDate={new Date(2015, 3, 1)}
        popup={false}
        onShowMore={(events, date) => {
          // Handle your modal logic here if needed
          console.log("Show More: ", events, date);
        }}
      />
    </div>
  );
}

function LoadCalendarPage() {
  return (
    <>
      <MyCalendar />
    </>
  );
}

export default LoadCalendarPage;
