import React, { useState } from 'react';
import './ToDoComponent.css';

const ToDoComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="todo-component">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoComponent;
