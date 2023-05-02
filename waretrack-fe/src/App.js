import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";
import SignUpcomponent from "./components/SignUpComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <Router>
          <Routes>
            <Route element={<LoginComponent />} path="/" />
            <Route element={<SignUpcomponent />} path="/signup" />
            <Route element={<Dashboard />} path="/dashboard" />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
