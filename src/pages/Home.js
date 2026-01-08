import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import mephoto from './mephoto.jpeg';

function Home() {
  const [showSkills, setShowSkills] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

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
    /******** overlay data style *********/
    overlayBackdrop: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      padding: '24px',
    },
    overlayCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '16px',
      padding: '24px',
      maxWidth: '720px',
      width: '100%',
      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      textAlign: 'left',
    },
    overlayImage: {
      width: '100%',
      maxWidth: '360px',
      borderRadius: '16px',
      opacity: 0.75,
      boxShadow: '0 8px 18px rgba(0, 0, 0, 0.18)',
    },
    overlayContent: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    overlayClose: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      border: 'none',
      background: '#111',
      color: 'white',
      borderRadius: '999px',
      width: '32px',
      height: '32px',
      cursor: 'pointer',
      fontWeight: 'bold',
      lineHeight: '32px',
    },
    /**** end of overlay style ***/
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
    { name: 'SQL', level: 45},
    { name: 'PHP', level: 45}
  ];

  return (
    <div style={styles.container}>
      <style>{`
        .profile-photo {
          transition: transform 180ms ease, box-shadow 180ms ease;
          will-change: transform;
        }
        .profile-photo:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
        }
      `}</style>
      {/* Profile Info */}
      <div style={styles.profileSection}>
        <img
          src={mephoto}
          alt="Portrait of Jose"
          style={styles.image}
          className="profile-photo"
          onClick={() => setShowOverlay(true)}
        />
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

      {/***********   overlay updates  **********/}
      {showOverlay && (
        <div
          style={styles.overlayBackdrop}
          onClick={() => setShowOverlay(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setShowOverlay(false);
            }
          }}
        >
          <div
            style={styles.overlayCard}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              style={styles.overlayClose}
              onClick={() => setShowOverlay(false)}
              aria-label="Close overlay"
            >
              ×
            </button>
            <div style={styles.overlayContent}>
              <img src={mephoto} alt="Portrait of Jose" style={styles.overlayImage} />
              <div style={{ flex: '1 1 240px' }}>
                <h2 style={{ marginTop: 0 }}>Jose Bonilla</h2>
                <p style={{ margin: '8px 0' }}>
                  I am a Software developer who likes building clean UIs and software that is fun to interact with.
                </p>
                <p style={{ margin: '8px 0' }}>
                  Currently exploring full-stack projects, real-time apps, game dev concepts, web app projects looking to land my first full time position as a developer.
                </p>
                <p style={{ margin: '8px 0', fontSize: '0.95rem', color: '#444' }}>
                  Fun fact: I am a sci-fi fanatic! I love Marvel, StarWars, and Startrek.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/***********   end overlay updates  **********/}

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
