import React from 'react';

function Contact() {
  const styles = {
    container: {
      height: '90vh',
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
    heading: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    text: {
      fontSize: '1.2rem',
      marginBottom: '30px',
      maxWidth: '600px',
      color: '#444',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
    },
    button: {
      padding: '12px 24px',
      borderRadius: '8px',
      background: '#0077ff',
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      background: '#005fcc',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.text}>Feel free to reach out on LinkedIn or view my profile on Indeed.</p>
      <div style={styles.buttonContainer}>
        <a
          href="https://www.linkedin.com/in/jose-bonilla-8a19aa163/"  // <-- replace with your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          LinkedIn
        </a>
        <a
          href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobsearch--indeedmobile"  // <-- replace with your actual Indeed
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Indeed
        </a>
      </div>
    </div>
  );
}

export default Contact;
