import React, { useState } from 'react';
import './App.css';

function ProductivityHub() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [schedule, setSchedule] = useState('today');
  const [activeFilter, setActiveFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [editInput, setEditInput] = useState('');

  const authenticateUser = () => {
    if (email && password) setAuthenticated(true);
  };

  const createTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { description: newTask, schedule, isDone: false }]);
    setNewTask('');
  };

  const applyFilter = (val) => setActiveFilter(val);

  const filteredTasks = () => {
    if (activeFilter === 'all') return tasks;
    return tasks.filter(task => task.schedule === activeFilter);
  };

  const handleEdit = (index) => {
    setCurrentEdit(index);
    setEditInput(tasks[index].description);
  };

  const saveChanges = () => {
    const copy = [...tasks];
    copy[currentEdit].description = editInput;
    setTasks(copy);
    setCurrentEdit(null);
    setEditInput('');
  };

  const toggleStatus = (index) => {
    const copy = [...tasks];
    copy[index].isDone = !copy[index].isDone;
    setTasks(copy);
  };

  const removeTask = (index) => {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  };

  return (
    <main className="main-wrapper">
      {!authenticated ? (
        <section className="login-panel gradient-bg">
          <h2>Login to Your Dashboard</h2>
          <div className="input-wrap">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>
          <div className="input-wrap">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
          </div>
          <button className="btn large" onClick={authenticateUser}>Access Hub</button>
        </section>
      ) : (
        <section className="task-dashboard">
          <header className="top-bar">
            <h1>Productivity Hub 🚀</h1>
            <div className="create-task">
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="What's next?" />
              <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="tomorrow">Tomorrow</option>
              </select>
              <button className="btn add" onClick={createTask}>Create</button>
            </div>
          </header>

          <nav className="filter-bar">
            <span>Filter:</span>
            <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => applyFilter('all')}>All</button>
            <button className={activeFilter === 'yesterday' ? 'active' : ''} onClick={() => applyFilter('yesterday')}>Yesterday</button>
            <button className={activeFilter === 'today' ? 'active' : ''} onClick={() => applyFilter('today')}>Today</button>
            <button className={activeFilter === 'tomorrow' ? 'active' : ''} onClick={() => applyFilter('tomorrow')}>Tomorrow</button>
          </nav>

          <div className="task-list">
            {filteredTasks().length === 0 ? (
              <p className="empty-state">✅ Nothing to do here!</p>
            ) : (
              filteredTasks().map((task, idx) => (
                <div key={idx} className={`task-block ${task.isDone ? 'done' : ''}`}>
                  {currentEdit === idx ? (
                    <div className="edit-area">
                      <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                      <button className="btn save" onClick={saveChanges}>Save</button>
                    </div>
                  ) : (
                    <div className="task-body">
                      <div className="task-check" onClick={() => toggleStatus(idx)}>
                        <h3>{task.description}</h3>
                        <span className="tag">{task.schedule}</span>
                      </div>
                      <div className="task-actions">
                        <button onClick={() => handleEdit(idx)}>✏️</button>
                        <button onClick={() => removeTask(idx)}>❌</button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <footer className="bottom-note">
            <p>Designed with 💡 by Future Minds Academy - 2025</p>
          </footer>
        </section>
      )}
    </main>
  );
}

export default ProductivityHub;
