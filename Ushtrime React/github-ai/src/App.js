import './App.css';
import ContactForm from './components/ContactForm';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <div className={`app ${theme}`}>
        <header>
          <h1>My Portfolio</h1>
          <button onClick={toggleTheme}>
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>
        <Profile name="John Doe" bio="Web Developer and Designer" />
        <ProjectList projects={projects} />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
