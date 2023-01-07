import './Color.css';
import {Index} from './index';
import React, { useEffect, useState } from 'react';

export function Color() {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    document.title = 'szean: color';
    (async function () {
      const req = await fetch("http://localhost:3000/color/");
      const json = await req.json();
      setImgs(json);
    })();
  }, []);

  return (
    <div>
    <Index />
    <div id = "body">
    <div class = "gallery">
    {
      imgs.map(s => 
        <img src = {"../../photos/color/" + s} />
        )
    }
    </div>
    </div>
    </div>
  );
}