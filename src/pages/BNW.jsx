import './BNW.css';
import { Index } from './index';
import React, { useEffect, useState } from 'react';


export function BNW() {
  const imgs = ["000011530004.jpg", "000011530016.jpg", "000011530028.jpg", "000011530029.jpg", "000011540004.jpg", "000011540009.jpg", "000011540010.jpg", "000011540036.jpg", "000015880012.jpg", "000023670020.jpg", "000023670033.jpg", "000023670039.jpg", "000034690001.jpg", "000034690019.jpg", "000034700001.jpg", "000034700008.jpg", "000034700024.jpg", "000034700032.jpg"];

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
                  <img src={"/photos/bnw/" + s} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}