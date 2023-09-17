import "./App.css";
// import { Button, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormFloatingCustom from "./components/FloatingLabel";
// import ClickButton from "./components/ClickButton";
// import NavScrollExample  from "./components/NavBar";
// import CardExample  from "./components/Card";
import SideBar from "./components/SideBar";
import LoadLogInPage from "./pages/LogIn";
import LoadSignPage from "./pages/SignUp";
import LoadForgotPage from "./pages/ForgotPassword";
import Bar from "./components/Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadCalendarPage from "./pages/MyCalendar";
import MyCalendar from "./pages/MyCalendar";
function App() {
  return (
    <div>
      {/* <NavScrollExample /> 
       <SideBar /> 
       <LoadSignPage />
      <CardExample /> 
      <CardExample />
      <CardExample />
      <CardExample /> 
      <LoadSignPage />*/}
      {/* <SideBar /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Bar />} /> */}
          {/*  <Route path="/login" element={<Bar />} /> */}
          <Route path="/" element={<MyCalendar />} />
          <Route path="/login" element={<LoadLogInPage />} />
          <Route path="/signup" element={<LoadSignPage />} />
          <Route path="/forgot" element={<LoadForgotPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// test

// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

// import "./App.css";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);

// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       },
//     ],
//   };

//   onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: [...state.events] };
//     });
//   };

//   onEventDrop = (data) => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div className="App">
//         <DnDCalendar
//           defaultDate={moment().toDate()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// export default App;
