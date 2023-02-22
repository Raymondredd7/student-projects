import React, { useState } from "react";

const Gallery = () => {
  const slides = [
    {
      image: "/images/projects/enclub.jpg",
      title: "Slide 1",
      description:
        "In the school year 2017/2018 professors from our school are taking part in Nansen model for integrated education",
      buttonLabel: "Button 1",
    },
    {
      image: "/images/hero.jpg",
      title: "Slide 2",
      description:
        "In the school year 2018/2019 professors from our school are taking part in Nansen model for integrated education",
      buttonLabel: "Button 2",
    },
    {
      image: "/images/hero.jpg",
      title: "Slide 3",
      description:
        "In the school year 2019/2020 professors from our school are taking part in Nansen model for integrated education",
      buttonLabel: "Button 3",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-white shadow-md rounded-lg">
          <img
            className="object-cover h-48 rounded-t-lg"
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
          />
          <img
            className="object-cover h-48 rounded-b-lg"
            src={slides[(activeSlide + 1) % slides.length].image}
            alt={slides[(activeSlide + 1) % slides.length].title}
          />
        </div>
        <img
          className="object-cover h-96 bg-white shadow-md rounded-lg"
          src={slides[(activeSlide + 2) % slides.length].image}
          alt={slides[(activeSlide + 2) % slides.length].title}
        />
      </div>
      <div className="max-w-3xl mx-auto mt-8 flex items-center">
        <h2 className="text-2xl font-bold mr-4">{slides[activeSlide].title}</h2>
        <p className="text-gray-500 truncate truncate-2 hover:truncate-none mr-4">
          {slides[activeSlide].description}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          {slides[activeSlide].buttonLabel}
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-8 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4"
          onClick={handlePrevSlide}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;