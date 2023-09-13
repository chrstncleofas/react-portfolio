// Skills
import React from 'react';
import './App.css';
import Frontend from './Frontend';
import Backend from './Backend';
import GameDev from './GameDev';

const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My technical Skills</span>
      <div class="skills__container container grid">
        <Frontend />
        <Backend />
        <GameDev />
      </div>
    </section>
  );
}

export default Skills;
