import './Color.css';
import { Index } from './index';
import React, { useEffect } from 'react';

import ScrollButton from "../components/ScrollButton";

import ft71 from '/fromthe7/1.jpg';
import ft72 from '/fromthe7/2.jpg';
import ft73 from '/fromthe7/3.jpg';
import ft74 from '/fromthe7/4.jpg';
import ft75 from '/fromthe7/5.jpg';
import ft76 from '/fromthe7/6.jpg';
import ft77 from '/fromthe7/7.jpg';
import ft78 from '/fromthe7/8.jpg';
import ft79 from '/fromthe7/9.jpg';
import ft710 from '/fromthe7/10.jpg';
import tr1 from '/turkeyrun/tr1.jpg';
import tr3 from '/turkeyrun/tr3.jpg';
import tr4 from '/turkeyrun/tr4.jpg';
import benguitar from '/color/benguitar.jpg';
import alichi1 from '/color/000034670004.jpg';
import alichi2 from '/color/000034670014.jpg';
import n1 from '/nov17film/n1.jpg';
import n2 from '/nov17film/n2.jpg';
import n3 from '/nov17film/n3.jpg';
import n4 from '/nov17film/n4.jpg';
import n5 from '/nov17film/n5.jpg';
import w1 from '/westcoast23/1.jpg';
import w2 from '/westcoast23/2.jpg';
import w3 from '/westcoast23/3.jpg';
import ra from '/roadtrip23/ra.jpg';
import rb from '/roadtrip23/rb.jpg';
import rc from '/roadtrip23/rc.jpg';
import rd from '/roadtrip23/rd.jpg';
import re from '/roadtrip23/re.jpg';
import rf from '/roadtrip23/rf.jpg';
import rg from '/roadtrip23/rg.jpg';
import rh from '/roadtrip23/rh.jpg';
import ri from '/roadtrip23/ri.jpg';
import rj from '/roadtrip23/rj.jpg';
import rk from '/roadtrip23/rk.jpg';
import rl from '/roadtrip23/rl.jpg';
import b from '/color/000010810012.jpg';
import c from '/color/000010810017.jpg';
import d from '/color/plants_greenhouse_1.jpg';
import e from '/color/000023650020.jpg';
import f from '/color/000023650023.jpg';
import j from '/color/000023660030.jpg';
import l from '/color/000046830017.jpg';
import m from '/color/000073600004.jpg';
import o from '/color/000496160010.jpg';
import p from '/color/000497650015.jpg';
import q from '/color/000497650027.jpg';
import s from '/color/001249710013.jpg';
import t from '/color/001249710021.jpg';
import u from '/color/0014.jpg';
import v from '/color/0024.jpg';
import w from '/color/0031.jpg';
import monk from '/color/monky.jpg'
import x from '/color/000014830013.jpg';
import z from '/color/armstrong_sun_1.jpg';


export function Color() {
  const imgs = [ft72, ft73, ft74, ft75, ft71, ft76, ft77, ft78, ft79, ft710,
    tr4, tr3, tr1, 
    benguitar, 
    alichi1, alichi2, 
    n1, n2, n3, n4, n5, 
    monk, 
    w1, w2, w3, 
    ra, rb, rc, rd, re, rf, rg, rh, ri, rj, rk, rl, 
    z, q, d, t, e, p, v, w, x, j, f, b, l, m, o, c, s, u];

  useEffect(() => {
    document.title = 'szean choi';

    var gallery = document.querySelector('.gallery');

    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };

    var resizeAll = function () {
      var altura = 0;
      var gap = 15;
      gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
    };

    gallery.querySelectorAll('img').forEach(function (item) {
      item.addEventListener('load', function () {
        var altura = 0;
        var gap = 15;
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      });
    });

    if (document.readyState === 'complete') {
      resizeAll();
    }

    window.addEventListener('resize', resizeAll);
  }, []);

  return (
    <div>
      <Index />
      <div id="body">
        <div className="gallery">
          {
            imgs.map((s, index) =>
              <div className="gallery-item" key={index}>
                <div className="content">
                  <img src={s} />
                </div>
              </div>
            )
          }
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}