import { useState } from "react";
const suggestions = [
  "Take a mindful walk 🌿",
  "Write in your journal 📓",
  "Do a mini skincare routine 🧴",
  "Listen to your favorite music 🎶",
  "Take a relaxing shower 🚿",
  "Drink water and hydrate 💧",
  "Read 10 pages of a book 📚",
  "Stretch or do yoga 🧘‍♀️",
  "Take a short nap 😴",
  "Light a candle and relax 🕯️",
  "Watch something that makes you happy 🍿",
  "Cook something nice for yourself 🍝",
  "Take a break from social media 📵",
  "Call or text someone you love 💌",
  "Do something creative (draw, write, etc.) 🎨",
  "Organize your space a little 🧹",
  "Write 3 things you're grateful for ✨",
  "Sit quietly and breathe deeply 🌸",
  "Pamper yourself like a spa day 🛁",
  "Go outside and get fresh air 🌞"
];

export default function SelfCare() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    "Drink water 💧",
    "Take a walk 🌿",
    "Listen to your favorite song 🎶",
  ]);

  const [randomTask, setRandomTask] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    const newText = prompt("Edit your self-care task:", tasks[index]);
    if (newText) {
      const updated = [...tasks];
      updated[index] = newText;
      setTasks(updated);
    }
  };

  // 🎲 RANDOM GENERATOR
  const suggestTask = () => {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  setRandomTask(suggestions[randomIndex]);
};

  return (
    
        <div className="app-wrapper">
  <h2> self care corner</h2>

      

      {/* ➕ Add Task */}
      <div className="input-group mb-4">
        <input
          className="form-control custom-input"
          placeholder="✨ Add a self-care task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn custom-btn" onClick={addTask}>
          Add 💕
        </button>
      </div>

      {/* 🎲 Random Suggestion */}
      <div className="mb-4 text-center">
        <button className="btn custom-btn" onClick={suggestTask}>
          🎲 Suggest something cute
        </button>

        {randomTask && (
          <div className="mt-3 suggestion-box">
            {randomTask}
          </div>
        )}
      </div>

      {/* 📋 Task List */}
      {tasks.map((task, index) => (
        <div key={index} className="task-card">

          <span>{task}</span>

          <div>
            <button
              className="btn btn-sm me-2"
              onClick={() => editTask(index)}
            >
              ✏️
            </button>

            <button
              className="btn btn-sm"
              onClick={() => deleteTask(index)}
            >
              ❌
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}