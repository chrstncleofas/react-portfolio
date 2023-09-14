import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';
import Services from './Services';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <Services />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
