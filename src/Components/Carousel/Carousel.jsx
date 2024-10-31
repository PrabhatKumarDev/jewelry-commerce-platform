import React, { useState, useEffect } from "react";
import { data } from "./Slides";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1);
  }
  const handlePrevious = () => {
    setCurrentSlide((prev) => prev === 0 ? data.length - 1 : prev - 1);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-[500px] relative w-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((item, index) => (
          <div className="h-full w-full flex-shrink-0 flex flex-col justify-center items-center bg-deepTeal" key={item.id}>
            <h1 className="text-white lg:text-4xl md:text-4xl font-bold sm:text-2xl">{item.title}</h1>
            <p className="text-white lg:text-lg sm:text-sm mx-6 max-w-[500px] text-center">{item.description}</p>
            <button className="bg-gold text-white px-8 py-4 rounded-lg mt-8 hover:bg-roseGold transition-colors duration-300">
              Shop Now
            </button>
          </div>
        ))}
      </div>
      <button className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white   text-black px-4 py-2 rounded-full" onClick={handlePrevious}><i className="fa-solid fa-arrow-left"></i></button>
      <button className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
