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
    {
      text: "Workout 🏃‍♀️",
      days: [false, false, false, false, false, false, false],
    },
  ]);

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const colors = [
    "#ff69b4",
    "#ff8fab",
    "#c77dff",
    "#80ed99",
    "#ffd166",
    "#00bbf9",
  ];

  const emojis = ["🏃‍♀️", "📚", "💧", "🧘‍♀️", "💻", "🌸"];

  const addHabit = () => {
    if (habitInput.trim() === "") return;

    setHabits([
      ...habits,
      {
        text: habitInput,
        days: [false, false, false, false, false, false, false],
      },
    ]);

    setHabitInput("");
  };

  const toggleHabit = (habitIndex, dayIndex) => {
    const updated = [...habits];
    updated[habitIndex].days[dayIndex] =
      !updated[habitIndex].days[dayIndex];
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

  // 📊 Multi-line graph data
  const data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
    (day, dayIndex) => {
      const entry = { name: day };

      habits.forEach((h, i) => {
        entry[`habit${i}`] = h.days[dayIndex] ? 1 : 0;
      });

      return entry;
    }
  );

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
      {habits.map((h, habitIndex) => (
        <div key={habitIndex} className="task-card">
          <span>{h.text}</span>

          {/* Weekly checkboxes */}
          <div style={{ display: "flex", gap: "8px" }}>
            {h.days.map((d, dayIndex) => (
              <div key={dayIndex} style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={d}
                  onChange={() =>
                    toggleHabit(habitIndex, dayIndex)
                  }
                />
                <div style={{ fontSize: "10px" }}>
                  {days[dayIndex]}
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              className="custom-btn me-2"
              onClick={() => editHabit(habitIndex)}
            >
              ✏️
            </button>
            <button
              className="custom-btn"
              onClick={() => deleteHabit(habitIndex)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}

      {/* 📊 Graph */}
      <div className="mt-5">
        <h5>📊 weekly habit tracking</h5>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ffd6e8" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 1]} />
            <Tooltip />

            {habits.map((h, i) => (
              <Line
                key={i}
                type="monotone"
                dataKey={`habit${i}`}
                stroke={colors[i % colors.length]}
                strokeWidth={3}
                dot={{ r: 5 }}
                name={`${emojis[i % emojis.length]} ${h.text}`}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}