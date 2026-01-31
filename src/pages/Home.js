import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import mephoto from './mephoto.jpeg';
import resumePdf from '../images/Resume-Jose-Bonilla.pdf';

function Home() {
  const [showSkills, setShowSkills] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [openSkillGroup, setOpenSkillGroup] = useState(null);

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
    resumeButton: {
      padding: '12px 24px',
      background: '#0f172a',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      transition: 'background 0.3s ease',
    },
  };

  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { name: 'JavaScript', level: 50 },
        { name: 'C++', level: 60 },
        { name: 'Java', level: 40 },
        { name: 'Python', level: 35 },
        { name: 'HTML/CSS', level: 60 },
        { name: 'SQL', level: 45 },
        { name: 'PHP', level: 30 },
        { name: 'C#', level: 30}
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'React', level: 45 },
        { name: 'Vue', level: 10 },
        { name: 'Slim', level: 15 },
      ],
    },
    {
      title: 'Engineering Practices',
      items: [
        { name: 'REST APIs', level: 35 },
        { name: 'CI/CD', level: 15 },
        { name: 'Git/GitHub', level: 65 },
        { name: 'Azure', level: 20 },
      ],
    },
  ];

  const toggleSkillGroup = (title) => {
    setOpenSkillGroup((current) => (current === title ? null : title));
  };

  return (
    <div style={styles.container}>
      <style>{`
        .profile-photo {
          transition: transform 320ms ease, box-shadow 320ms ease, outline-color 320ms ease,
            outline-offset 320ms ease;
          will-change: transform;
        }
        .profile-photo:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
          outline: 6px solid #0077ff;
          outline-offset: 6px;
        }
        .cta-button,
        .skills-button,
        .resume-button {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .cta-button:hover,
        .skills-button:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 18px rgba(0, 119, 255, 0.25);
        }
        .resume-button:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 18px rgba(15, 23, 42, 0.25);
        }
        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
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
        <h1 style={styles.heading}>Hey there! I'm Jose</h1>
        <div style={styles.typedText}>
          <ReactTyped
            strings={[
              "I'm a Software Engineer.",
              "I hope you enjoy exploring my portfolio.",
            ]}
            typeSpeed={50}
            backSpeed={40}
            // loop
          />
        </div>
        <div className="cta-row">
          <Link to="/projects" style={styles.button} className="cta-button">
            View My Work
          </Link>
          <a
            href={resumePdf}
            style={styles.resumeButton}
            className="resume-button"
            download
          >
            Download Resume
          </a>
        </div>
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
                  Hi there, my name is Jose. I am an aspiring sotware developer who enjoys building fun interactive and challenging software. 
                  I am very curious in learning and keeping up with the latest technology and look forward to contributing to new developments.
                </p>
                <p style={{ margin: '8px 0' }}>
                  Currently I am exploring and building full-stack projects, real-time apps, game dev concepts, web app projects and looking to land my first full time position as a developer.
                </p>
                <p style={{ margin: '8px 0', fontSize: '0.95rem', color: '#444' }}>
                  Fun fact: As you can tell from my shirt, I am a sci-fi fanatic! I love Marvel, StarWars, and Startrek.
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
        className="skills-button"
      >
        {showSkills ? 'Hide Skills' : 'Show Skills'}
      </button>

      {/* Skills Box */}
      <div
        style={{
          maxHeight: showSkills ? '520px' : '0px',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {skillGroups.map((group) => {
              const isOpen = openSkillGroup === group.title;
              return (
                <div
                  key={group.title}
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleSkillGroup(group.title)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '10px 12px',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#1f2937',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`skills-${group.title}`}
                  >
                    <span>{group.title}</span>
                    <span style={{ fontSize: '0.9rem' }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    id={`skills-${group.title}`}
                    style={{
                      maxHeight: isOpen ? '240px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.6s ease',
                      padding: isOpen ? '0 12px 10px' : '0 12px',
                    }}
                  >
                    {group.items.map((skill, index) => (
                      <div key={`${group.title}-${index}`} style={{ marginTop: '10px' }}>
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


///npm run deploy
