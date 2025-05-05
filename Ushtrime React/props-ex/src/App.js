import Student from './components/Index'
import './App.css';
import Futeri from './components/Futeri';

function App() {
  return (
    <>
      <Student name="Dijar" age="15" desc="Future web devloper at future minds academy" />
      <br />
      <Student name="Arti" age="17" desc="Future footballer at Barcelona" />

      <Futeri />
    </>
  );
}

export default App;
