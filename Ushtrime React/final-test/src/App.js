import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('today');
  const [filter, setFilter] = useState('all');
  const [modalActive, setModalActive] = useState(false);

  function openModal(index = null) {
    setModalActive(true);
    if (index !== null) {
      setEditingIndex(index);
      const student = students[index];
      setName(student.name);
      setEmail(student.email);
      setDate(student.date);
    }
    else {
      setEditingIndex(null);
      setName('');
      setEmail('');
      setDate('today');
    }
  }

  function closeModal() {
    setModalActive(false);
  }

  function saveStudent() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) {
      alert('Please fill all fields'); return;
    }

    const newStudent = { name: trimmedName, email: trimmedEmail, date };
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
    }
    else {
      setStudents([...students, newStudent]);
    }
    closeModal();
  }

  function deleteStudent(index) {
    if (window.confirm('Are you sure?')) {
      const updated = [...students];
      updated.splice(index, 1);
      setStudents(updated);
    }
  }

  function renderStudents() {
    return students
      .map((s, i) => ({ ...s, index: i }))
      .filter(s => filter === 'all' || s.date === filter)
      .map(s => (
        <tr key={s.index}>
          <td>{s.name}</td>
          <td>{s.email}</td>
          <td>{s.date}</td>
          <td>
            <button className="edit-btn" onClick={() => openModal(s.index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteStudent(s.index)}>Delete</button>
          </td>
        </tr>
      ));
  }

  return (
    <>
      <header>📘 Student Record Manager</header>
      <div className="container">
        <div className="actions">
          <button onClick={() => openModal()}>➕ Add Student</button>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="yesterday">Yesterday</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderStudents()}
          </tbody>
        </table>
      </div>

      {modalActive && (
        <div className={`modal active`}>
          <div className="modal-content">
            <h2>{editingIndex !== null ? 'Edit Student' : 'Add Student'}</h2>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />

            <select value={date} onChange={e => setDate(e.target.value)}>
              <option value="yesterday">Yesterday</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>

            <div>
              <button onClick={saveStudent}>Save</button>
              <button onClick={closeModal} >Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;