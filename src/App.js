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
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

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
        <Route path="/" element={<LoadLogInPage />} />
        <Route path="/login" element={<LoadLogInPage />} />
        <Route path="/signup" element={<LoadSignPage />} />
        <Route path="/forgot" element={<LoadForgotPage />} />
      </Routes>
    </Router> 

    </div>
  );
}

export default App;


