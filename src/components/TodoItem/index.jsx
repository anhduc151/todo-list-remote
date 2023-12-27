import React from 'react';
import './todo-item.css'

const TodoItem = ({ task, onToggle, onDelete }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title} - {task.description}
        </span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;