// Navbar.js
import React from "react";
import "./App.css";

const GameDev = () => {
  return (
    <div class="skills__content skills__close">
    <div class="skills__header">
      <i class="uil uil-game-structure skills__icon"></i>
      <div>
        <h1 class="skills__title">Game Developer</h1>
        <span class="skills__subtitle">More than 1 years</span>
      </div>
      <i class="uil uil-angle-down skills__arrow"></i>
    </div>
    <div class="skills__list grid">
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">C#</h3>
          <span class="skills__number">90%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__csharp"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Unity Game Engine</h3>
          <span class="skills__number">80%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__unity"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Photoshop</h3>
          <span class="skills__number">80%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__photoshop"></span>
        </div>
      </div>
      <div class="skills_data">
        <div class="skills__titles">
          <h3 class="skills__name">Blender</h3>
          <span class="skills__number">50%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__percentage skills__blender"></span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GameDev;
