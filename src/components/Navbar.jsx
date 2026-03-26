import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="custom-navbar">
      <h3 className="logo">🍓 The Girl Planner</h3>

      <div>
        <Link to="/">Home</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/selfcare">Self Care</Link>
      </div>
    </nav>
  );
}