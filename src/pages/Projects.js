import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'To-Do List App',
      description: 'A simple React-based app to manage tasks with local storage.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/yourusername/todo-list',
      demo: 'https://yourusername.github.io/todo-list',
    },
    {
      title: 'Weather App',
      description: 'Fetches real-time weather data using an external API.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/yourusername/weather-app',
    },
    {
      title: 'Binary Search Tree Visualizer',
      description: 'Java program that visualizes tree insertion and traversal.',
      tech: ['Java', 'JavaFX'],
      github: 'https://github.com/yourusername/bst-visualizer',
    },
  ];

  const styles = {
    container: {
      padding: '40px',
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      fontFamily: 'Segoe UI, sans-serif',
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      fontSize: '3rem',
      marginBottom: '40px',
      color: '#333',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    card: {
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#0077ff',
    },
    tech: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '10px',
    },
    link: {
      marginRight: '10px',
      color: '#0077ff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.title}>{project.title}</div>
            <p>{project.description}</p>
            <p style={styles.tech}>Technologies: {project.tech.join(', ')}</p>
            {project.github && <a style={styles.link} href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {project.demo && <a style={styles.link} href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
