import React, { useState } from "react";
import "./App.css";

const Services = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const servicesData = [
    {
      title: "Web Development",
      modalTitle: "Web Development",
      services: [
        "I develop web design",
        "Web page and Web Application",
        "I create full functional web application",
        "I develop backend interface",
      ],
    },
    {
      title: "Mobile Development",
      modalTitle: "Mobile Development",
      services: [
        "I develop mobile application",
        "Mobile Interface",
        "I create mobile application",
        "I develop business App",
      ],
    },
    {
      title: "Game Development",
      modalTitle: "Mobile Game Development",
      services: [
        "I develop mobile game interface",
        "Mobile Game Animation",
        "I create mobile game 2D & 3D",
        "I develop game for thesis project",
      ],
    },
  ];

  return (
    <section id="services" className="services section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">{service.title}</h3>
            </div>
            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => openModal(index)}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>
            {activeModalIndex === index && (
              <div className="services__modal active-modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    {service.modalTitle}
                  </h4>
                  <i
                    className="uil uil-times services__modal-close"
                    onClick={closeModal}
                  ></i>
                  <ul className="services__modal-services grid">
                    {service.services.map((item, i) => (
                      <li className="services__modal-service" key={i}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
