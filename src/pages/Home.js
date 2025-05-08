import React from 'react';
import { ReactTyped } from 'react-typed';
import mephoto from './mephoto.jpeg'; // Adjust the path if needed

function Home() {
  const styles = {
    container: {
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      textAlign: 'center',
      padding: '20px',
    },
    image: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    typedText: {
      fontSize: '1.4rem',
      color: '#555',
      marginBottom: '20px',
    },
    button: {
      padding: '12px 24px',
      background: '#0077ff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      transition: 'background 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <img src={mephoto} alt="Portrait of Jose" style={styles.image} />
      <h1 style={styles.heading}>Hey there! 👋 I'm Jose</h1>
      <div style={styles.typedText}>
        <ReactTyped
          strings={[
            "I'm a Software Developer.",
            "I build C++ and JavaScript projects.",
            "I love clean code and creative UI.",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
      </div>
      <a href="/projects" style={styles.button}>View My Work</a>
    </div>
  );
}

export default Home;
