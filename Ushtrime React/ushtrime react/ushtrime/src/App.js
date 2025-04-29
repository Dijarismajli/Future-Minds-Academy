import './App.css';
import Calculator from './calculator';
import Card from './Card';

function App() {
  const employees = [
    { name: 'Viktor Ahmeti', occupation: 'Programmer' },
    { name: 'Elena Petrova', occupation: 'Designer' },
    { name: 'Jason Miles', occupation: 'Product Manager' },
    { name: 'Sofia Chen', occupation: 'Data Analyst' },
    { name: 'Liam Bennett', occupation: 'QA Engineer' },
    { name: 'Nina Kowalski', occupation: 'UX Researcher' },
    { name: 'Arjun Patel', occupation: 'DevOps Engineer' },
    { name: 'Maria Gonzalez', occupation: 'Software Engineer' },
    { name: 'Oliver Smith', occupation: 'System Administrator' },
    { name: 'Emily Johnson', occupation: 'Frontend Developer' },
    { name: 'Noah Kim', occupation: 'Backend Developer' },
    { name: 'Ava Rossi', occupation: 'Project Coordinator' },
    { name: 'Mason Dubois', occupation: 'Security Specialist' },
    { name: 'Isla Moretti', occupation: 'Mobile Developer' },
    { name: 'Ethan Nguyen', occupation: 'Network Engineer' },
    { name: 'Chloe Davis', occupation: 'Technical Writer' },
    { name: 'Lucas Brown', occupation: 'Scrum Master' },
    { name: 'Layla Wilson', occupation: 'Business Analyst' },
    { name: 'William Zhao', occupation: 'Cloud Architect' },
    { name: 'Grace Müller', occupation: 'AI Engineer' },
    { name: 'Jack Robinson', occupation: 'Database Administrator' },
    { name: 'Mia Andersen', occupation: 'Support Specialist' },
    { name: 'Benjamin Scott', occupation: 'IT Manager' },
    { name: 'Zoe Lee', occupation: 'Full Stack Developer' },
    { name: 'Daniel Green', occupation: 'Site Reliability Engineer' },
    { name: 'Ruby Carter', occupation: 'Marketing Technologist' },
    { name: 'Sebastian Novak', occupation: 'Blockchain Developer' },
    { name: 'Hannah Silva', occupation: 'UI Developer' },
    { name: 'Leo Costa', occupation: 'Machine Learning Engineer' },
    { name: 'Natalie Park', occupation: 'Technical Recruiter' }
  ];

  return <div>
    <Calculator a={2} b={2} />
    {employees.map(e => <Card name={e.name} occupation={e.occupation}></Card>)}
  </div>;
}

export default App;

