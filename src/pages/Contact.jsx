import './Contact.css';
import {Index} from './index';
import pp from "../../photos/profile_photo.jpg";
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
      <p>Full time student pursuing a Bachelor of Science in Computer Science at Purdue University.</p>
      <br />
      <p>
        e: ysc@purdue.edu <br />
        ig: @szeans  <br />
        github: @szean  <br />
        linkedin: @szean  <br />
        soundcloud @szean  <br />
      </p>
    </div>
    </div>
  );
}