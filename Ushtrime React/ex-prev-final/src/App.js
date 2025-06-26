import { useState } from 'react';
import './App.css'

function StudyTracker() {
  const [studies, setStudies] = useState([]);
  const [subject, setSubject] = useState('');
  const [duration, setDuration] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [filter, setFilter] = useState('all');

  const [editingId, setEditingId] = useState(null);
  const [editSubject, setEditSubject] = useState('');
  const [editDuration, setEditDuration] = useState('');
  const [editDate, setEditDate] = useState('');

  const addStudy = () => {
    if (!subject || !duration || !studyDate) return alert("Fill all fields!");

    const newEntry = {
      id: Date.now(),
      subject,
      duration,
      date: studyDate
    };

    setStudies([...studies, newEntry]);
    setSubject('');
    setDuration('');
    setStudyDate('');
  };

  const startEditing = (study) => {
    setEditingId(study.id);
    setEditSubject(study.subject);
    setEditDuration(study.duration);
    setEditDate(study.date);
  };

  const saveEdit = (id) => {
    if (!editSubject || !editDuration || !editDate) return alert("Fill all fields");

    setStudies(studies.map(s =>
      s.id === id ? { ...s, subject: editSubject, duration: editDuration, date: editDate } : s
    ));

    setEditingId(null);
    setEditSubject('');
    setEditDuration('');
    setEditDate('');
  };

  const deleteStudy = (id) => {
    setStudies(studies.filter(s => s.id !== id));
  };

  const isSameDay = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  };

  const filteredStudies = studies.filter(s => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const entryDate = new Date(s.date);
    if (filter === 'today') return isSameDay(entryDate, today);
    if (filter === 'yesterday') return isSameDay(entryDate, yesterday);
    if (filter === 'tomorrow') return isSameDay(entryDate, tomorrow);
    return true;
  });

  return (
    <div>
      <h2>📘 Study Tracker</h2>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <input
        type="date"
        value={studyDate}
        onChange={e => setStudyDate(e.target.value)}
      />
      <button onClick={addStudy}>Add Study</button>

      <div className="filters" style={{ margin: '10px 0' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('today')}>Today</button>
        <button onClick={() => setFilter('yesterday')}>Yesterday</button>
        <button onClick={() => setFilter('tomorrow')}>Tomorrow</button>
      </div>

      <div>
        {filteredStudies.map(study => (
          <div key={study.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
            <span>
              📚 <strong>{study.subject}</strong> — {study.duration} mins on {study.date}
            </span>
            <div>
              <button onClick={() => startEditing(study)}>Edit</button>
              <button onClick={() => deleteStudy(study.id)}>Delete</button>
            </div>

            {editingId === study.id && (
              <div style={{ marginTop: '10px' }}>
                <input
                  type="text"
                  value={editSubject}
                  onChange={e => setEditSubject(e.target.value)}
                />
                <input
                  type="number"
                  value={editDuration}
                  onChange={e => setEditDuration(e.target.value)}
                />
                <input
                  type="date"
                  value={editDate}
                  onChange={e => setEditDate(e.target.value)}
                />
                <button onClick={() => saveEdit(study.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyTracker;
