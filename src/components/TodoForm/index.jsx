import React, { useState } from "react";
import "./todo-form.css";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      onAdd({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="form">
      <div className="item">
        <label>Title</label>
        <input
          type="text"
          className="form_input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="item">
        <label>Description</label>
        <input
          type="text"
          className="form_input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="item">
        <button onClick={handleAdd} className="btn_add">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
