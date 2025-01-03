import { useEffect } from 'react';
import React from 'react'
import Hero from '../components/hero';
import About from '../components/about';
import Highlight from '../components/highlights';
import Sponsors from '../components/sponsor';

const home = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  })

  return (
    
    <div>
      <Hero />  
      <About />
      <Highlight />
      <Sponsors />
    </div>
  );
};

export default home