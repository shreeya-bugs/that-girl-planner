import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Habits from "./pages/Habits";

import SelfCare from "./pages/SelfCare";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/habits" element={<Habits />} />
      
          <Route path="/selfcare" element={<SelfCare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;