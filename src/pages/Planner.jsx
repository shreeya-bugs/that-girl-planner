import { useState } from "react";

export default function Planner() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText) {
      const updated = [...tasks];
      updated[index].text = newText;
      setTasks(updated);
    }
  };

  return (
    <div className="app-wrapper">
  <div className="content-box">

      <h2 className="mb-3">📔 Daily Planner</h2>

      {/* Input */}
      <div className="input-group mb-4">
        <input
          className="form-control custom-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="✨ Add your task..."
        />
        <button className="btn custom-btn" onClick={addTask}>
          Add 💖
        </button>
      </div>
      </div>

      {/* Tasks */}
      <div>
        {tasks.length === 0 && (
          <p className="text-muted">No tasks yet… let’s glow up today 💅</p>
        )}

        {tasks.map((t, index) => (
          <div
            key={index}
            className={`task-card ${t.done ? "done" : ""}`}
          >
            <span>{t.text}</span>

            <div>
              <button
                className="btn btn-sm me-2"
                onClick={() => toggleDone(index)}
              >
                Done
              </button>

              <button
                className="btn btn-sm me-2"
                onClick={() => editTask(index)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}