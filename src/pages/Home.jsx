import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">

  <h1 className="main-title">🍓 my little life planner ✨</h1>

  <p className="emoji-row">🌸 🎀 🧁 ✨ 💌</p>

  {/* 🌸 floating boxes */}
  <div className="floating-container">
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

  {/* ✨ filler aesthetic content */}
  <div className="aesthetic-section">
    <p>✨ you’re doing better than you think ✨</p>
    <p>💌 take it one soft step at a time 💌</p>
  </div>

  {/* 🍓 stickers */}
  <div className="sticker" style={{ top: "120px", left: "40px" }}>🌸</div>
  <div className="sticker" style={{ top: "250px", right: "60px" }}>🍓</div>
  <div className="sticker" style={{ bottom: "100px", left: "80px" }}>✨</div>

</div>
  );
}