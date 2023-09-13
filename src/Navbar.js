// Navbar.js
import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="container-01">
      <a href="#home">
        <h1 class="logo">ChrstnDev</h1>
      </a>
      <ul class="nav">
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
