import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ← make sure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}

export default Navbar;
