import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // protect route
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="app-wrapper">

      <h1>🍓 my little life planner ✨</h1>

      <div>
        <div className="floating-box" onClick={() => navigate("/planner")}>
          🗓️ today's plan
        </div>

        <div className="floating-box" onClick={() => navigate("/habits")}>
          🌱 habit garden
        </div>

        <div className="floating-box" onClick={() => navigate("/selfcare")}>
          💖 self care corner
        </div>
      </div>

      {/* logout button */}
      <button
        className="custom-btn"
        style={{ marginTop: "40px" }}
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          navigate("/");
        }}
      >
        logout 💔
      </button>

    </div>
  );
}