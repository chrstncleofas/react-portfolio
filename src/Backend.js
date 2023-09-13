// Navbar.js
import React from "react";
import "./App.css";

const Backend = () => {
  return (
    <div class="skills__content skills__close">
    <div class="skills__header">
      <i class="uil uil-server-network skills__icon"></i>
      <div>
        <h1 class="skills__title">Backend Developer</h1>
        <span class="skills__subtitle">More than 2 years</span>
      </div>
      <i class="uil uil-angle-down skills__arrow"></i>
    </div>
    <div class="skills__list grid">
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">PHP</h3>
          <span class="skills__number">50%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__php"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Python</h3>
          <span class="skills__number">90%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__python"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Node js</h3>
          <span class="skills__number">40%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__node"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Firebase</h3>
          <span class="skills__number">70%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__firebase"></span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Backend;
