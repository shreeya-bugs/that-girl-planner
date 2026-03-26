import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Habits() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState([
    { text: "Workout 🏃‍♀️", done: false },
  ]);

  const addHabit = () => {
    if (habitInput.trim() === "") return;
    setHabits([...habits, { text: habitInput, done: false }]);
    setHabitInput("");
  };

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  const editHabit = (index) => {
    const newText = prompt("Edit habit:", habits[index].text);
    if (newText) {
      const updated = [...habits];
      updated[index].text = newText;
      setHabits(updated);
    }
  };

  const data = habits.map((h, i) => ({
    name: `H${i + 1}`,
    progress: h.done ? 1 : 0,
  }));

  return (
    <div className="app-wrapper">

      <h2>🌱 my habit garden</h2>

      {/* ➕ Add Habit */}
      <div className="mb-4">
        <input
          className="custom-input me-2"
          placeholder="✨ add a new habit..."
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
        />
        <button className="custom-btn" onClick={addHabit}>
          add 💖
        </button>
      </div>

      {/* Habit List */}
      {habits.map((h, index) => (
        <div key={index} className="task-card">

          <div>
            <input
              type="checkbox"
              checked={h.done}
              onChange={() => toggleHabit(index)}
              className="me-2"
            />
            <span style={{ textDecoration: h.done ? "line-through" : "none" }}>
              {h.text}
            </span>
          </div>

          <div>
            <button className="custom-btn me-2" onClick={() => editHabit(index)}>
              ✏️
            </button>
            <button className="custom-btn" onClick={() => deleteHabit(index)}>
              ❌
            </button>
          </div>

        </div>
      ))}

      {/* 📊 Graph */}
      <div className="mt-5">
        <h5>📊 my progress</h5>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ffd6e8" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#ff69b4"
              strokeWidth={3}
              dot={{ r: 6, fill: "#ff69b4" }}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}