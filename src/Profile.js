// Profile
import React from 'react';
import './App.css';

const Profile = () => {
  const imageUrl = process.env.PUBLIC_URL + '/Photo.jpg';
  return (
    <section class="section-a">
    <div class="container-01">
      <div>
        <h1>I am Christian Cleofas</h1>
        <div class="position-t">
          <h4>Backend Developer</h4>
        </div>
        <p>
          Within the intricate tapestry of the digital universe, each line of code I write serves as a vital thread, weaving together the fabric of tomorrow's technological landscape, a testament to my relentless pursuit of excellence and my commitment to crafting elegant, efficient, and bug-free software.
        </p>
        <a href="contact.html" class="btn">Contact Me <i class="uil uil-message"></i></a>

        <div class="socail__media">
          <a class="socail__media_link" href="https://github.com/chrstncleofas" target="_blank" rel="noreferrer">
            <i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>

          <a class="socail__media_link" href="https://facebook.com/chrstncleofas27" target="_blank" rel="noreferrer">
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>

          <a class="socail__media_link" href="https://instagram.com/chrstnclfs12" target="_blank" rel="noreferrer">
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>

          <a class="socail__media_link" href="https://twitter.com/tianoclfs" target="_blank" rel="noreferrer">
            <i class="fa fa-twitter-square fa-2x" aria-hidden="true" target="_blank"></i></a>
        </div>
      </div>
      <img class="profile-img" src={imageUrl} alt="Profile"/>
    </div>
  </section>
  );
}

export default Profile;
