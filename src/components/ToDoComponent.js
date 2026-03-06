import React, { useState } from 'react';
import './ToDoComponent.css';

const ToDoComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="todo-component">
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoComponent;
