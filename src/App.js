import React, { useEffect } from "react";
import "./App.css";
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';
import Services from './Services';
import Project from './Project';

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    document.onkeydown = function (e) {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
          (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
      }
    };

    return () => {
      document.removeEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
      document.onkeydown = null;
    }
  }, []);

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
