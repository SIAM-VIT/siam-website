import "./App.css";
import LandingPage from "./pages/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamPage from "./pages/team-page";
import Events from "./pages/Events";
import WrappedPage from "./pages/wrapped-page";
import DomainsPage from "./pages/domains-page";
import AboutPage from "./pages/about-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/wrapped" element={<WrappedPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
