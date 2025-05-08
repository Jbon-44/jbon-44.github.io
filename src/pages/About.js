import React from 'react';

function About() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    section: {
      width: '100%',
      maxWidth: '800px',
      marginBottom: '60px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '10px',
      borderBottom: '2px solid #0077ff',
      paddingBottom: '8px',
    },
    content: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555',
    },
    list: {
      marginTop: '10px',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Education Section */}
      <div style={styles.section}>
        <h2 style={styles.heading}>🎓 Education</h2>
        <div style={styles.content}>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>University of Utah</strong> – M.S. in Software Development (2024–2025)</li>
            <li style={styles.listItem}><strong>Madonna University</strong> – B.S. in Mathematics (2014-2019)</li>
            {/* Add more schools or certifications if you like */}
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div style={styles.section}>
        <h2 style={styles.heading}>💼 Experience</h2>
        <div style={styles.content}>
          <ul style={styles.list}>
          <li style={styles.listItem}><strong>Analyst</strong> – Etrade by Morgan Stanley (2021-2024)</li>
            <li style={styles.listItem}><strong>Machine Operator/Fabricator</strong> – Diamond Cutting (2020-2021)</li>
            <li style={styles.listItem}><strong>Data Analyst</strong> – TD Williamson (2019-2020)</li>
            {/* Add more roles or side projects if you want */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
