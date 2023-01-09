import './Contact.css';
import {Index} from './index';
import pp from "/photos/profile_photo.jpg";
import React, { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'szean: contact';
  }, []);

  return (
    <div>
    <Index id = "index"/>
    <div id = "body">
    <img id = "profile" src = {pp} alt = "profile photo" />
      <p>Yeonseung "Sean" Choi</p>
      <br/>
      <p>Full time student pursuing a Bachelor of Science in Computer Science at Purdue University.</p>
      <br />
      <p>email: <a href="mailto:ysc@purdue.edu" target="_blank">ysc@purdue.edu</a></p>
      <p>instagram: <a href="https://www.instagram.com/szeans/" target="_blank">@szeans</a> </p>
      <p>github: <a href="https://github.com/szeans" target="_blank">@szeans</a> </p>
      <p>linkedin: <a href="https://www.linkedin.com/in/szean/" target="_blank">@szean</a> </p>
    </div>
    </div>
  );
}