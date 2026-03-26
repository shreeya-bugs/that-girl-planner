import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      setError("please fill all fields 💌");
      return;
    }

    if (!email.includes("@")) {
      setError("enter a valid email 💖");
      return;
    }

    if (password.length < 6) {
      setError("password must be at least 6 characters 🔒");
      return;
    }

    setError("");
    alert("logged in successfully ✨");
  };

  return (
    <div className="app-wrapper">
      <div className="content-box login-box">

        <h2>💖 welcome back</h2>
        <p>login to your cozy space ✨</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="email 💌"
            className="custom-input login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password 🔒"
            className="custom-input login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button className="custom-btn login-btn">
            login 💕
          </button>

        </form>

      </div>
    </div>
  );
}