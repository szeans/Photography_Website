import './Contact.css';
import {Index} from './index';
import pp from "/photos/profile_photo.jpg";
import React, { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'szean choi: contact';
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
      <p>email: ysc [at] purdue [dot] edu </p>
      <p>github: <a href="https://github.com/szeans" target="_blank">@szeans</a> </p>
      <p>linkedin: <a href="https://www.linkedin.com/in/szean/" target="_blank">@szean</a> </p>
    </div>
    <br />
    <br />
    </div>
  );
}