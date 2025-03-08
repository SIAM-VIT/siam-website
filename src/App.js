import "./App.css";
import LandingPage from "./pages/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/team-page";
import Events from "./pages/Events";
import Domains from "./pages/domains-page";
import Wrapped from "./pages/wrapped-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team-page" element={<TeamPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/wrapped" element={<Wrapped />} />
      </Routes>
    </Router>
  );
}

export default App;
