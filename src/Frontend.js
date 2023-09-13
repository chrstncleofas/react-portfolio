// Navbar.js
import React from "react";
import "./App.css";

const Frontend = () => {
  return (
    <div class="skills__content skills__open">
      <div class="skills__header">
        <i class="uil uil-brackets-curly skills__icon"></i>
        <div>
          <h1 class="skills__title">Frontend Developer</h1>
          <span class="skills__subtitle">More than 3 years</span>
        </div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        <div class="skills_data">
          <div class="skills__titles">
            <h3 class="skills__name">HTML 5</h3>
            <span class="skills__number">90%</span>
          </div>
          <div class="skills__bar">
            <span class="skills__percentage skills__html"></span>
          </div>
        </div>
        <div class="skills_data">
          <div class="skills__titles">
            <h3 class="skills__name">CSS</h3>
            <span class="skills__number">80%</span>
          </div>
          <div class="skills__bar">
            <span class="skills__percentage skills__css"></span>
          </div>
        </div>
        <div class="skills_data">
          <div class="skills__titles">
            <h3 class="skills__name">Java Script</h3>
            <span class="skills__number">80%</span>
          </div>
          <div class="skills__bar">
            <span class="skills__percentage skills__js"></span>
          </div>
        </div>
        <div class="skills_data">
          <div class="skills__titles">
            <h3 class="skills__name">Vue Js</h3>
            <span class="skills__number">70%</span>
          </div>
          <div class="skills__bar">
            <span class="skills__percentage skills__vue"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
