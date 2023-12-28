import React, { useState } from "react";
import "./todo-item.css";

const TodoItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    onEdit(task.id, editedTitle, editedDescription);
    setEditing(false);
  };

  return (
    <div className="list">
      {isEditing ? (
        <div className="list_item">
          <input
            type="text"
            className="list_item_input"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            className="list_item_input"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave} className="btn_add">Save</button>
        </div>
      ) : (
        <div className="list_item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title} - {task.description}
          </span>
          <div className="btn_center">
            <button
              onClick={() => onDelete(task.id)}
              className="list_btn_delete"
            >
              Delete
            </button>
            <button onClick={() => setEditing(true)} className="list_btn_edit">
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
