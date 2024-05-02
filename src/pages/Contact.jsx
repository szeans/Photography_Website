import './Contact.css';
import { Index } from './index';
import pp from "/photos/profile_photo.jpg";
import React, { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'szean choi: contact';
  }, []);

  return (
    <>
      <div className="contact-container">
        <div className="left-column">
          <Index />
        </div>
        <div className="main-content">
          <div className="profile-container">
            <img className="profile" src={pp} alt="profile photo" />
          </div>
          <div className="text-container">
            <p>Yeonseung "Sean" Choi</p>
            <br />
            <p>The places I've been on film. Since 2022.</p>
            <p>
              I also like to make/play music, read, skateboard, workout, golf, and my recent obsession has been denim/americana fashion. 
            </p>
            <br />
            <p>email: szeanchoi [at] gmail [dot] com</p>
            <p>
              github: <a href="https://github.com/szeans" target="_blank">@szeans</a>
            </p>
            <p>
              linkedin: <a href="https://www.linkedin.com/in/szean/" target="_blank">@szean</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
