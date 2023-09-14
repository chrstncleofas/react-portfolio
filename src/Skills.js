// Skills
import React, { useEffect } from 'react';
import './App.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Other from './Other';

function Skills() {
  useEffect(() => {
    const skillsContent = document.getElementsByClassName('skills__content');
    const skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
      const itemClass = this.parentNode.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
      }

      if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills);
    });

    return () => {
      skillsHeader.forEach((el) => {
        el.removeEventListener('click', toggleSkills);
      });
    };
  }, []);

  return (
    <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My technical Skills</span>
      <div class="skills__container container grid">
        <Frontend />
        <Backend />
        <Other />
      </div>
    </section>
  );
}

export default Skills;
