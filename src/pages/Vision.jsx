import { useState, useEffect } from "react";

export default function Vision() {
  const [goalInput, setGoalInput] = useState("");
  const [blogInput, setBlogInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const [goals, setGoals] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [images, setImages] = useState([]);

  // 💾 Load from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];

    setGoals(savedGoals);
    setBlogs(savedBlogs);
    setImages(savedImages);
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
    localStorage.setItem("blogs", JSON.stringify(blogs));
    localStorage.setItem("images", JSON.stringify(images));
  }, [goals, blogs, images]);

  // 🌟 Goals
  const addGoal = () => {
    if (goalInput.trim() === "") return;
    setGoals([...goals, goalInput]);
    setGoalInput("");
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  // 📝 Blogs
  const addBlog = () => {
    if (blogInput.trim() === "") return;

    const newBlog = {
      text: blogInput,
      date: new Date().toLocaleString(),
    };

    setBlogs([newBlog, ...blogs]);
    setBlogInput("");
  };

  const deleteBlog = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  // 🖼️ Images (Pinterest style)
  const addImage = () => {
    if (imageInput.trim() === "") return;

    setImages([imageInput, ...images]);
    setImageInput("");
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">

      <h2>🖼️ Vision Board</h2>
      <p>✨ design your dream life ✨</p>

      {/* 🌸 Goals */}
      <div className="content-box mb-4">
        <h4>🌟 My Goals</h4>

        <div className="mb-3">
          <input
            className="custom-input me-2"
            placeholder="Add a goal..."
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
          />
          <button className="custom-btn" onClick={addGoal}>
            Add 💖
          </button>
        </div>

        {goals.map((g, index) => (
          <div key={index} className="task-card">
            <span>{g}</span>
            <button
              className="custom-btn"
              onClick={() => deleteGoal(index)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* 🖼️ Vision Images */}
      <div className="content-box mb-4">
        <h4>🎨 Vision Gallery</h4>

        <div className="mb-3">
          <input
            className="custom-input me-2"
            placeholder="Paste image URL..."
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <button className="custom-btn" onClick={addImage}>
            Add Image ✨
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "10px",
          }}
        >
          {images.map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={img}
                alt="vision"
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <button
                onClick={() => deleteImage(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 📝 Blog / Journal */}
      <div className="content-box">
        <h4>📝 My Thoughts</h4>

        <textarea
          className="custom-input"
          placeholder="Write your thoughts..."
          value={blogInput}
          onChange={(e) => setBlogInput(e.target.value)}
        />

        <button className="custom-btn mt-2" onClick={addBlog}>
          Post ✨
        </button>

        {blogs.length === 0 && (
          <p className="text-muted mt-2">
            No posts yet... start writing 💭
          </p>
        )}

        {blogs.map((b, index) => (
          <div key={index} className="task-card">
            <div>
              <p>{b.text}</p>
              <small style={{ color: "gray" }}>{b.date}</small>
            </div>

            <button
              className="custom-btn"
              onClick={() => deleteBlog(index)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}