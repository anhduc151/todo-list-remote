import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ Local Storage khi component được render
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Lưu trữ dữ liệu vào Local Storage mỗi khi tasks thay đổi
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggle = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleAdd = newTask => {
    setTasks(prevTasks => [...prevTasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;