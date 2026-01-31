import React, { useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Router>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
          overflow: 'hidden',
        }}
      >
        {/* Global Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            particles: {
              number: { value: 50 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },

              links: {
                enable: true,
                color: '#003366',     // deep navy blue
                distance: 200,
                opacity: 0.5          // more visible
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
          }}
        />

        {/* App Layout */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
