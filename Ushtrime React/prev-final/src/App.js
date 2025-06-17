import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('medium');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');


  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);




  useEffect(() => {
    const tasksString = tasks.join(',');
    localStorage.setItem('tasks', tasksString);
  }, [tasks]);




  const addTask = () => {
    if (!task || !date) return;
    setTasks([...tasks, { text: task, date, priority: taskPriority, completed: false }]);
    setTask('');
    setDate('');
    setTaskPriority('medium');
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text);
  };

  const saveEdit = (index) => {
    const updated = [...tasks];
    updated[index].text = editedTask;
    setTasks(updated);
    setEditingIndex(null);
    setEditedTask('');
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditedTask('');
  };

  const getFilteredTasks = () => {
    const dateOnly = (offset = 0) => {
      const d = new Date();
      d.setDate(d.getDate() + offset);
      return d.toISOString().split('T')[0];
    };

    const today = dateOnly();
    const tomorrow = dateOnly(1);
    const yesterday = dateOnly(-1);

    if (filter === 'today') {
      return tasks.filter(task => task.date === today);
    } else if (filter === 'tomorrow') {
      return tasks.filter(task => task.date === tomorrow);
    } else if (filter === 'yesterday') {
      return tasks.filter(task => task.date === yesterday);
    } else {
      return tasks;
    }
  };


  return (
    <div className="app">
      <h1>📅 To-Do List with Date</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="buttons">
        <button onClick={() => setFilter('today')}>Today</button>
        <button onClick={() => setFilter('tomorrow')}>Tomorrow</button>
        <button onClick={() => setFilter('yesterday')}>Yesterday</button>
        <button onClick={() => setFilter('all')}>All</button>
      </div>

      <ul className="task-list">
        {getFilteredTasks().map((t, i) => (
          <li key={i} className={t.completed ? 'completed' : ''}>
            {editingIndex === i ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => saveEdit(i)}>💾</button>
                <button onClick={cancelEdit}>❌</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(i)} title="Click to toggle complete">
                  {t.text} — <span>{t.date}</span>
                </span>
                <button onClick={() => startEditing(i)}>✏️</button>
                <button onClick={() => deleteTask(i)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
