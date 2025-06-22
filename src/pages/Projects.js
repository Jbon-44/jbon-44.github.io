import React from 'react';

function Projects() {
  const sectionStyle = {
    position: 'relative',
    zIndex: 1,
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    borderBottom: '2px solid #0077ff',
    paddingBottom: '8px',
    marginBottom: '16px',
  };

  const projectItem = {
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#555',
  };

  return (
    <div
      style={{
        padding: '40px',
        background: 'linear-gradient(to bottom right, #c2e9fb, #a1c4fd, #d4fc79)',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {/* Class Projects */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>📘 Class Projects</h2>
        <ul>
          <li style={projectItem}>
            <strong>NotTheBees game</strong> – Used DOM concepts to create a bees game using Javascript, HTML, CSS.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/NotTheBees" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>Script Interpreter</strong> – Custom scripting language built in C++ for software engineer course.
            {/* [<a href="https://github.com/your-username/msdscript" target="_blank" rel="noreferrer">GitHub</a>] */}
          </li>
          <li style={projectItem}>
            <strong>MyHttpServer</strong> – Built a HTTP server using websocket, HTTPRequest and HTTPResponse classes to parse requests using Java, Javascript, CSS, HTML. 
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/MyHttpServer" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>Webchat</strong> – Designed and implemented a responsive chat interface using HTML, CSS, and JavaScript.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/WebChat" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>React Chat Client server</strong> – Created a web chat using react.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/reactchatclient" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>Pong Game</strong> – Built the classic pong game with scoreboard and additional features using C++.
            [<a href="https://github.com/ojkavapalu/6010-Final-Project" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>DNS Resolver/Server</strong> – Built a caching DNS resolver using Java.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/DNSResolver" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>TSLlite</strong> – Built a simplified version of the TLS protocol using Java.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/TLSlite" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
          <li style={projectItem}>
            <strong>Raining Knives</strong> – Created a C++ game using SFML in Qt Creator where the player dodges falling knives.
            [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/RainingKnives" target="_blank" rel="noreferrer">GitHub</a>]
          </li>
        </ul>
      </div>

      {/* Personal Projects */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>🛠️ Personal Projects</h2>
        <ul>
          <li style={projectItem}>
            <strong>Portfolio Website</strong> – This site you're viewing! Built with React and hosted on GitHub Pages.
            {/* [<a href="https://jbon44-44.github.io" target="_blank" rel="noreferrer">GitHub</a>] */}
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Projects;
