import "./App.css";
import LandingPage from "./pages/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/team-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team-page" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
