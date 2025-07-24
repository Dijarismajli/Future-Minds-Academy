import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "To-Do App",
      description: "Task manager with filters, local storage, and priority system.",
    },
    {
      title: "Weather App",
      description: "Fetches weather data by city using OpenWeather API.",
    },
    {
      title: "Portfolio Website",
      description: "This very website — built with React.js and custom CSS.",
    },
    {
      title: "Quiz App",
      description: "A multiple choice quiz with scoring and question timer.",
    },
    {
      title: "Recipe Finder",
      description: "Search for meals using MealDB API and save your favorites.",
    }
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div className="header-container">
          <h1 className="logo">MyPortfolio</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/cv.pdf" download className="download-btn">Download CV</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>🙋🏻 About Me</h2>
        <p>
          Hi! I'm a passionate front-end developer with experience in React.js.
          I love building beautiful, responsive websites and learning new web technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>📁 Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>📬 Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 MyPortfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
