import './myapp.css';
import Nav from './nav'
function App() {
  const full = "Ridvan Aliu"
  const colors = ['read', 'blue', 'green']
  return (
    <>
      <h1>Hello,{full}</h1>

      <ul className="ngjyrat">
        {
          colors.map((colors, index) => (
            <li class key={index} >(colors)</li>
          ))
        }
      </ul>
      <Nav />
    </>
  );
}

export default App;
