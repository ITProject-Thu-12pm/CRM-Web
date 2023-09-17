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
import LoadResetPage from "./pages/ResetPassword";
import Contacts from './pages/ContactsPage/Contact';
import ContactDetail from  './pages/ContactsPage/ContactsDetails'
import LoadProfilePage from "./pages/ProfilePage/Profile";
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
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
        <Route path="/profile" element={<LoadProfilePage />} /> 
        <Route path="/reset" element={<LoadResetPage />} /> 
      </Routes>
    </Router> 

    </div>
  );
}

export default App;


