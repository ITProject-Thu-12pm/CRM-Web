import "./App.css";
// import { Button, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormFloatingCustom from "./components/FloatingLabel";
// import ClickButton from "./components/ClickButton";
import LoadSignPage from "./pages/SignIn";
import NavScrollExample from "./components/NavBar";

function App() {
  return (
    <div>
      <NavScrollExample />
      <LoadSignPage />
    </div>
  );
}

export default App;


