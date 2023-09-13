// Profile
import React, { useEffect } from "react";
import "./App.css";

function Experience() {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });
    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section class="qualification section">
      <h2 class="section__title">Experience</h2>
      <span class="section__subtitle">My Personal Journey</span>

      <div class="qualification__container container">
        <div class="qualification__tabs">
          {/* <!--  --> */}
          <div
            class="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          {/* <!--  --> */}
          <div class="qualification__button button--flex" data-target="#work">
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>
        <div class="qualification__sections">
          {/* <!-- 1 qual content--> */}
          <div
            class="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/* <!-- qual 1 --> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Computer Science</h3>
                <span class="qualification__subtitle">PRMSU - Zambales</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2018-2022
                </div>
              </div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>
            {/* <!-- qual 2 --> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
              <div>
                <h3 class="qualification__title">Information Technology</h3>
                <span class="qualification__subtitle">Macsat</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2016-2018
                </div>
              </div>
            </div>
            {/* <!-- qual 3 --> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Sta. Monica High School</h3>
                <span class="qualification__subtitle">Botolan - Zambales</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2011-2015
                </div>
              </div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>
            {/* <!-- qual 4 --> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                {/* <!-- <span class="qualification__line"></span> --> */}
              </div>
              <div>
                <h3 class="qualification__title"> Bancal Elementary School</h3>
                <span class="qualification__subtitle">Botolan - Zambales</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2005-2011
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2 qual content --> */}
          <div class="qualification__content" data-content id="work">
            {/* <!-- qual 1 --> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Backend Developer</h3>
                <span class="qualification__subtitle">
                  TDH International Inc.
                </span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>
            {/* <!-- qual 2 --> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
              <div>
                <h3 class="qualification__title">Associate Developer</h3>
                <span class="qualification__subtitle">
                  TDH International Inc.
                </span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
            </div>
            {/* <!-- qual 3 --> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Junior Python Developer</h3>
                <span class="qualification__subtitle">
                  TDH International Inc.
                </span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
              <div>
                <span class="qualification__rounder"></span>
                {/* <!-- <span class="qualification__line"></span> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
