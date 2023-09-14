// Profile
import React, { useEffect } from "react";
import "./App.css";
import ExpDetails from "./ExpDetails";

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
        <ExpDetails />
      </div>
    </section>
  );
}

export default Experience;
