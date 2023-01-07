import './BNW.css';
import {Index} from './index';
import React, { useEffect, useState } from 'react';


export function BNW() {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    document.title = 'szean';
    (async function () {
      const req = await fetch("http://localhost:3000/bnw/");
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
        <img src = {"../../photos/bnw/" + s} />
        )
    }
    </div>
    </div>
    </div>
  );
}