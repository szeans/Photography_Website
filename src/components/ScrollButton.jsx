import React, { useState } from 'react';
import { CiCircleChevUp } from 'react-icons/ci';
import { Button } from './Styles';

const ScrollButton = () => {

  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true)
    }
    else if (scrolled <= 400) {
      setVisible(false)
    }
  }

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
        style={{ display: visible ? 'block' : 'none' }} />
    </Button>
  );
}

export default ScrollButton;
