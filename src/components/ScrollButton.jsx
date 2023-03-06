import React, { useState } from 'react';
import { CiCircleChevUp } from 'react-icons/ci';
import { Button } from './Styles';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if ("ontouchstart" in document.documentElement) {
      if (scrolled > 200) {
        setVisible(true)
      }
      else if (scrolled <= 200) {
        setVisible(false)
      }
    } else {
      if (scrolled > 1000) {
        setVisible(true)
      }
      else if (scrolled <= 1000) {
        setVisible(false)
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
      <CiCircleChevUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  );
}

export default ScrollButton;
