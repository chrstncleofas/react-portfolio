// Navbar.js
import React from "react";
import "./App.css";

const ExpDetails = () => {
  return (
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
            <span class="qualification__subtitle">TDH International Inc.</span>
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
            <span class="qualification__subtitle">TDH International Inc.</span>
            <div class="qualification__calendar">
              <i class="uil uil-calendar-alt"></i> 2022-Present
            </div>
          </div>
        </div>
        {/* <!-- qual 3 --> */}
        <div class="qualification__data">
          <div>
            <h3 class="qualification__title">Junior Python Developer</h3>
            <span class="qualification__subtitle">TDH International Inc.</span>
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
  );
};

export default ExpDetails;
