import React, { useEffect } from "react";
import "./App.css";
import Swiper from "swiper";
import "./swiper/swiper-bundle.min.css";

const Project = () => {
    const image1 = process.env.PUBLIC_URL + '/Capture1.JPG';
    const image2 = process.env.PUBLIC_URL + '/Capture2.JPG';
    const image3 = process.env.PUBLIC_URL + '/Capture3.JPG';
    const image4 = process.env.PUBLIC_URL + '/Capture4.JPG';
    const image5 = process.env.PUBLIC_URL + '/Capture5.JPG';
    const image6 = process.env.PUBLIC_URL + '/Capture6.JPG';
    useEffect(() => {
        const swiper = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        });
        swiper.slideToLoop()
    }, []);

  return (
    <section className="portfolio section" id="portfolio">
    {/* <!-- Title Project --> */}
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">My Recent Project</span>
    {/* <!--  --> */}
    <div className="portfolio__container container swiper-container">
      {/* <!--  --> */}
      <div className="swiper-wrapper">
        {/* <!-- Project - 01 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image1} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">Hotel & Restaurant Website</h3>
            <p className="portfolio__description">This website design made by HTML and Bootstrap CDN & Js.</p>
            <a
              href="https://github.com/chrstncleofas/responsive-hotel-bootstrap-3.3.1v"
              target="_blank"
              className="button button--flex button--small portfolio__button"
              rel="noreferrer">Source Code
              <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
        {/* <!-- Project - 02 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image2} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">This website design made by HTML and Css & Js, Jquery.</p>
            <a
              href="https://github.com/chrstncleofas/modern-website"
              target="_blank"
              className="button button--flex button--small portfolio__button"
              rel="noreferrer">Source Code
              <i className="uil uil-download-alt button__icon"></i></a>
          </div>
        </div>
        {/* <!-- Project - 03 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image3} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">Cloud Solution Website</h3>
            <p className="portfolio__description">This website design made by HTML and Css & Js</p>
            <a
             href="https://github.com/chrstncleofas/cloud-platform-01"
             target="_blank"
            className="button button--flex button--small portfolio__button"
            rel="noreferrer">Source Code
            <i className="uil uil-download-alt button__icon"></i></a>
          </div>
        </div>
        {/* <!-- Project - 04 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image4} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">MRJL Construction Services Website</h3>
            <p className="portfolio__description">This website design made by Vue js and Laravel PHP for Backend</p>
            <a
                href="https://github.com/chrstncleofas/vue-website-engr"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noreferrer">Source Code
                <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
        {/* <!-- Project - 05 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image5} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">Employee Management System</h3>
            <p className="portfolio__description">This website design made by HTML and Bootstrap & Javascript & CodeIgniter
              PHP.</p>
            <a
              href="https://github.com/chrstncleofas/"
              target="_blank"
              className="button button--flex button--small portfolio__button"
              rel="noreferrer">Source Code
              <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
        {/* <!-- Project - 06 --> */}
        <div className="portfolio__content grid swiper-slide">
          <img src={image6} alt="" className="portfolio__img"/>
          <div className="portfolio__data">
            <h3 className="portfolio__title">Fight Covid-19 Mobile Game App</h3>
            <p className="portfolio__description">This game application i use to build by Unity Game Engine and C# Language.
            </p>
            <a
                href="https://github.com/chrstncleofas/"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noreferrer">Source Code
                <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Add Arrow --> */}
      <div className="swiper-button-next">
        <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
      <div className="swiper-button-prev">
        <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>
      {/* <!-- Add Pagination --> */}
      <div className="swiper-pagination"></div>
    </div>
  </section>
  );
};

export default Project;
