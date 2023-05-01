import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route element={<LoginComponent />} path="/" />
            <Route element={<Dashboard />} path="/dashboard" />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
