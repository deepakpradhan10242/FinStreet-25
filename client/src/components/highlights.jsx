import React, { useState, useEffect } from 'react';
import hi2 from "../assets/hi2.jpg";
import hi3 from "../assets/hi3.jpg";
import hi4 from "../assets/hi4.jpg";

const EventHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of highlights with their media sources
  const highlights = [
    { type: 'image', src: hi2, alt: 'Highlight 2' },
    { type: 'image', src: hi3, alt: 'Highlight 3' },
    { type: 'image', src: hi4, alt: 'Highlight 4' },
    { type: 'image', src: hi4, alt: 'Highlight 4' },
    { type: 'image', src: hi4, alt: 'Highlight 4' },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === highlights.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? highlights.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === highlights.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="carousel" className="py-12 bg-transparent">
      <h2 className="text-3xl mx-auto text-yellow-400 font-bold text-center mb-8 uppercase">
        Event Highlights
      </h2>
      <div className="relative overflow-hidden">
        {/* Carousel Content */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="min-w-full flex justify-center items-center">
              <img
                src={highlight.src}
                alt={highlight.alt}
                className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-6/12 h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default EventHighlights;
