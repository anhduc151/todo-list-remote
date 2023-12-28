import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
