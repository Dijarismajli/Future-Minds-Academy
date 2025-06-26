import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [task, setTask] = useState('');
  const [date, setDate] = useState('today');
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const login = () => {
    if (email && password) setIsLoggedIn(true);
  };

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { text: task, date, completed: false }]);
    setTask('');
  };

  const filterTodos = (val) => setFilter(val);

  const getFilteredTodos = () => {
    if (filter === 'all') return todos;
    return todos.filter(todo => todo.date === filter);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const saveEdit = () => {
    const updated = [...todos];
    updated[editIndex].text = editText;
    setTodos(updated);
    setEditIndex(null);
    setEditText('');
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login">
          <h2>Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div className="app">
          <h2>TODO List</h2>
          <input type="text" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
          <button onClick={addTodo}>Add</button>

          <div className="filters">
            <button onClick={() => filterTodos('all')}>All</button>
            <button onClick={() => filterTodos('yesterday')}>Yesterday</button>
            <button onClick={() => filterTodos('today')}>Today</button>
            <button onClick={() => filterTodos('tomorrow')}>Tomorrow</button>
          </div>

          <ul>
            {getFilteredTodos().map((todo, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <div className="modal">
                    <div className="modal-content">
                      <h3>Edit Task</h3>
                      <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                      <button onClick={saveEdit}>Save</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span
                      onClick={() => toggleComplete(index)}
                      style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: 'pointer',
                        marginRight: '10px',

                      }}
                    >
                      {todo.text} ({todo.date})
                    </span>
                    <button onClick={() => startEdit(index)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>

          <footer>
            &copy; Future Minds Academy 2025. All Rights Reserved!
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
