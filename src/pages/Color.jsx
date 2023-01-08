import './Color.css';
import { Index } from './index';
import React, { useEffect, useState } from 'react';

export function Color() {
  const imgs = ["000010810006.jpg", "000010810012.jpg", "000010810017.jpg", "000012030014.jpg", "000023650020.jpg", "000023650023.jpg", "000023650034.jpg", "000023660004.jpg", "000023660007.jpg", "000023660030.jpg", "000046820026.jpg", "000046830017.jpg", "000073600004.jpg", "0004.jpg", "000496160010.jpg", "000497650015.jpg", "000497650027.jpg", "001249710006.jpg", "001249710013.jpg", "001249710021.jpg", "0014.jpg", "0024.jpg", "0031.jpg"];
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
                  <img src={"../../photos/color/" + s} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}