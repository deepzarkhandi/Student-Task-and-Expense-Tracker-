import "./taskmanager.css";

import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = { _id: Date.now(), title: title };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const remove = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="app-container">
      <div className="task-card">
        <h1 className="task-title">Task Manager</h1>

        <div className="input-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's next?"
            className="task-input"
          />
          <button onClick={addTask} className="add-button">
            Add
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t._id} className="task-item">
              <span>{t.title}</span>
              <button onClick={() => remove(t._id)} className="delete-button">
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;