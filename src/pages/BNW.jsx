import './BNW.css';
import { Index } from './index';
import React, { useEffect } from 'react';
import ScrollButton from "../components/ScrollButton";

import a64511 from '/6451bw/1.jpg';
import a64512 from '/6451bw/2.jpg';
import a64513 from '/6451bw/3.jpg';
import a64514 from '/6451bw/4.jpg';
import a64515 from '/6451bw/5.jpg';
import a64516 from '/6451bw/6.jpg';
import a from '/bnw/000011530004.jpg';
import b from '/bnw/000011530016.jpg';
import c from '/bnw/000011530028.jpg';
import d from '/bnw/000011530029.jpg';
import e from '/bnw/000011540004.jpg';
import f from '/bnw/000011540009.jpg';
import g from '/bnw/000011540010.jpg';
import h from '/bnw/000011540036.jpg';
import i from '/bnw/000015880012.jpg';
import j from '/bnw/000023670020.jpg';
import k from '/bnw/000023670033.jpg';
import l from '/bnw/000023670039.jpg';
import m from '/bnw/000034690001.jpg';
import n from '/bnw/000034690019.jpg';
import o from '/bnw/000034700001.jpg';
import p from '/bnw/000034700008.jpg';
import q from '/bnw/000034700024.jpg';
import r from '/bnw/000034700032.jpg';
import s from '/bnw/000023670037.jpg';
import t from '/bnw/000011530010.jpg';
import u from '/bnw/000011530002.jpg';
import v from '/bnw/000011530011.jpg';
import w from '/bnw/000011530015.jpg';
import x from '/bnw/000011530021.jpg';
import mt from '/bnw/middletree.jpg';
import al from '/bnw/alley.jpg';
import tr from '/bnw/trash.jpg';
import nc from '/bnw/night_campus.jpg';
import vb from '/bnw/vons_books.jpg';
import dc1 from '/dc/1bw.jpg';

export function BNW() {
  const imgs = [dc1, a64511, a64512, a64513, a64514, a64515, a64516,
    tr, mt, vb, nc, a, b, c, d, e, al, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x];

  useEffect(() => {
    document.title = 'szean choi: black & white';

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