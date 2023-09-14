// Navbar.js
import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">ChrstnDev</h1>
          <span class="footer__subtitle">Backend Developer</span>
        </div>
        <ul class="footer__links">
          <li>
            <a href="/services" class="footer__link">Services</a>
          </li>
          <li>
            <a href="/project" class="footer__link">Project</a>
          </li>
          <li>
            <a href="/contact.html" class="footer__link">Contact</a>
          </li>
        </ul>
        <div class="footer__socials">
          {/* <!-- Facebook Icon --> */}
          <a
            href="https://facebook.com/chrstncleofas27"
            target="_blank" class="footer__social"
            rel="noreferrer">
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
         </a>
          {/* <!-- Github --> */}
          <a
            href="https://github.com/chrstncleofas"
            target="_blank" class="footer__social"
            rel="noreferrer">
            <i class="fa fa-github-square fa-2x" aria-hidden="true">
            </i>
          </a>
          {/* <!-- Twitter --> */}
          <a
            href="https://twitter.com/tianoclfs"
            target="_blank" class="footer__social"
            rel="noreferrer"
          >
            <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
         </a>
        </div>
      </div>
      <p class="footer__copy">&#169; ChrstnDev All right reserved</p>
    </div>
  </footer>
  );
};

export default Footer;
