import './BNW.css';
import { Index } from './index';
import React, { useEffect, useState } from 'react';
import a from '/photos/bnw/000011530004.jpg';
import b from '/photos/bnw/000011530016.jpg';
import c from '/photos/bnw/000011530028.jpg';
import d from '/photos/bnw/000011530029.jpg';
import e from '/photos/bnw/000011540004.jpg';
import f from '/photos/bnw/000011540009.jpg';
import g from '/photos/bnw/000011540010.jpg';
import h from '/photos/bnw/000011540036.jpg';
import i from '/photos/bnw/000015880012.jpg';
import j from '/photos/bnw/000023670020.jpg';
import k from '/photos/bnw/000023670033.jpg';
import l from '/photos/bnw/000023670039.jpg';
import m from '/photos/bnw/000034690001.jpg';
import n from '/photos/bnw/000034690019.jpg';
import o from '/photos/bnw/000034700001.jpg';
import p from '/photos/bnw/000034700008.jpg';
import q from '/photos/bnw/000034700024.jpg';
import r from '/photos/bnw/000034700032.jpg';

export function BNW() {
  const imgs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r];

  useEffect(() => {
    document.title = 'szean';

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