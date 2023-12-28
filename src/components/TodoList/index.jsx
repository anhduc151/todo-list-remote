import React, { useState } from "react";
import TodoItem from "../TodoItem";
import './todo-list.css'

const TodoList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [filter, setFilter] = useState('all');
  // const [active, setActive] = useState(false);

  const renderTasks = () => {
    let filteredTasks = tasks;

    if (filter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'pending') {
      filteredTasks = tasks.filter(task => !task.completed);
    }

    return filteredTasks.map(task => (
      <TodoItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ));

  }
  return (
    <div>
      <div className="tab">
        <button
          onClick={() => setFilter('all')}
          className={`btn_tab ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`btn_tab ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`btn_tab ${filter === 'pending' ? 'active' : ''}`}
        >
          Pending
        </button>
      </div>
      {renderTasks()}
    </div>
  );
};

export default TodoList;
