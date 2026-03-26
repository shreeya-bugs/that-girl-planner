import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Habits from "./pages/Habits";
import Login from "./pages/login";
import Vision from "./pages/Vision";

import SelfCare from "./pages/SelfCare";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/selfcare" element={<SelfCare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;