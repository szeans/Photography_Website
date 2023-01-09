import './Color.css';
import { Index } from './index';
import React, { useEffect, useState } from 'react';
import a from '/photos/color/000010810006.jpg';
import b from '/photos/color/000010810012.jpg';
import c from '/photos/color/000010810017.jpg';
import d from '/photos/color/000012030014.jpg';
import e from '/photos/color/000023650020.jpg';
import f from '/photos/color/000023650023.jpg';
import g from '/photos/color/000023650034.jpg';
import h from '/photos/color/000023660004.jpg';
import i from '/photos/color/000023660007.jpg';
import j from '/photos/color/000023660030.jpg';
import k from '/photos/color/000046820026.jpg';
import l from '/photos/color/000046830017.jpg';
import m from '/photos/color/000073600004.jpg';
import n from '/photos/color/0004.jpg';
import o from '/photos/color/000496160010.jpg';
import p from '/photos/color/000497650015.jpg';
import q from '/photos/color/000497650027.jpg';
import r from '/photos/color/001249710006.jpg';
import s from '/photos/color/001249710013.jpg';
import t from '/photos/color/001249710021.jpg';
import u from '/photos/color/0014.jpg';
import v from '/photos/color/0024.jpg';
import w from '/photos/color/0031.jpg';

export function Color() {
  const imgs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w];
  useEffect(() => {
    document.title = 'szean: color';

    var gallery = document.querySelector('#gallery');

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

    window.addEventListener('resize', resizeAll);
  }, []);

  return (
    <div>
      <Index />
      <div id="body">
        <div class="gallery" id="gallery">
          {
            imgs.map(s =>
              <div class="gallery-item">
                <div class="content">
                  <img src={s} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}