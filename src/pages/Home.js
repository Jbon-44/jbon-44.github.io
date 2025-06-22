import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import mephoto from './mephoto.jpeg';

function Home() {
  const [showSkills, setShowSkills] = useState(false);

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      textAlign: 'center',
      padding: '40px',
      overflow: 'hidden',
    },
    profileSection: {
      zIndex: 1,
      position: 'relative',
      maxWidth: '400px',
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

  const skills = [
    { name: 'JavaScript', level: 50 },
    { name: 'C++', level: 60 },
    { name: 'Java', level: 45 },
    { name: 'Python', level: 35 },
    { name: 'HTML/CSS', level: 60 },
    { name: 'React', level: 35 },
    { name: 'SQL', level: 45}
  ];

  return (
    <div style={styles.container}>
      {/* Profile Info */}
      <div style={styles.profileSection}>
        <img src={mephoto} alt="Portrait of Jose" style={styles.image} />
        <h1 style={styles.heading}>Hey there! 👋 I'm Jose</h1>
        <div style={styles.typedText}>
          <ReactTyped
            strings={[
              "I'm a Software Developer.",
              "I build C++ Java, and JavaScript projects.",
              "I love clean code and creative UI.",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </div>
        <Link to="/projects" style={styles.button}>View My Work</Link>
      </div>

      {/* Show/Hide Skills Button */}
      <button
        onClick={() => setShowSkills(prev => !prev)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '8px',
          backgroundColor: '#0077ff',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        {showSkills ? 'Hide Skills' : 'Show Skills'}
      </button>

      {/* Skills Box */}
      <div
        style={{
          maxHeight: showSkills ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 1.5s ease',
          marginTop: showSkills ? '20px' : '0px',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '16px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>🧠 My Skills</div>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '0.9rem' }}>{skill.name}</div>
              <div style={{ height: '6px', background: '#eee', borderRadius: '4px' }}>
                <div style={{
                  width: `${skill.level}%`,
                  background: '#0077ff',
                  height: '100%',
                  borderRadius: '4px',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
