import { Button } from './ui/button';
import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Button className="fixed bottom-10 right-10" onClick={scrollToTop}>^</Button>
    </>
  );
}

export default BackToTop;
