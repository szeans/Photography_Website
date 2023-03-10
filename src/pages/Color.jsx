import './Color.css';
import { Index } from './index';
import React, { useEffect, useState } from 'react';

import ScrollButton from "../components/ScrollButton";
import a from '/color/000010810006.jpg';
import b from '/color/000010810012.jpg';
import c from '/color/000010810017.jpg';
import d from '/color/plants_greenhouse_1.jpg';
import e from '/color/000023650020.jpg';
import f from '/color/000023650023.jpg';
import g from '/color/000023650034.jpg';
import h from '/color/000023660004.jpg';
import i from '/color/000023660007.jpg';
import j from '/color/000023660030.jpg';
import k from '/color/000046820026.jpg';
import l from '/color/000046830017.jpg';
import m from '/color/000073600004.jpg';
import n from '/color/0004.jpg';
import o from '/color/000496160010.jpg';
import p from '/color/000497650015.jpg';
import q from '/color/000497650027.jpg';
import s from '/color/001249710013.jpg';
import t from '/color/001249710021.jpg';
import u from '/color/0014.jpg';
import v from '/color/0024.jpg';
import w from '/color/0031.jpg';
import x from '/color/000014830013.jpg';
import y from '/color/stop_snowy_1.jpg';
import z from '/color/armstrong_sun_1.jpg';

export function Color() {
  const imgs = [z, q, d, e, g, p, h, x, i, j, k, f, b, l, m, n, a, o, c, s, t, u, v, w];

  useEffect(() => {
    document.title = 'szean: color';

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