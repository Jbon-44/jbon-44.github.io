import React from 'react';

function ScrollToTopButton() {
  const styles = {
    position: 'fixed',
    right: '30px',
    bottom: '30px',
    padding: '10px 16px',
    backgroundColor: '#0077ff',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.2rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 1000,
  };

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={styles}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
