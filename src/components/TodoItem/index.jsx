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
          <button onClick={handleSave} className="btn_add">
            Save
          </button>
        </div>
      ) : (
        <div className="list_item">
          <div className="list_check">
            <label className="container">
              <input
                type="checkbox"
                className="container_input"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <div className="checkmark"></div>
            </label>

            <div className="list_item_left">
              <div
                className="list_item_left"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                <p className="list_item_left_title">{task.title}</p>
                <p className="list_item_left_des">{task.description}</p>
              </div>
            </div>
          </div>
          <div className="btn_center">
            {/* <button
              onClick={() => onDelete(task.id)}
              className="list_btn_delete"
            >
              Delete
            </button> */}
            <i class='bx bx-edit' onClick={() => setEditing(true)} title="edit"></i>
            <i className='bx bx-trash' onClick={() => onDelete(task.id)} title="delete"></i>
            {/* <button onClick={() => setEditing(true)} className="list_btn_edit">
              Edit
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
