import React,{ useState, useEffect } from 'react';
import {sponsors} from '../constants/sponsorsData';

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <section id="sponsor" className="max-w-6xl mx-auto px-5 mt-28 mb-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-semibold text-4xl text-yellow-400">FINSTREET'25 Sponsors</h2>
        <p className="font-semibold mt-2 text-[#e0f0a8] max-w-2xl">
          Heartfelt thanks to our esteemed sponsors for their unwavering support and commitment, adding a touch of excellence to FINSTREET'25.
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-linear"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-full md:w-1/4 lg:w-1/4 px-4"
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="object-contain w-full h-full rounded-lg bg-white border border-gray-300 transition-transform duration-1000 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
