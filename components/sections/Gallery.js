import React from "react";

const Gallery = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-white shadow-md rounded-lg">
          <img className="object-cover h-48 rounded-t-lg" src="/images/hero.jpg" alt="Image 1" />
          <img className="object-cover h-48 rounded-b-lg" src="/images/hero.jpg" alt="Image 2" />
        </div>
        <img className="object-cover h-96 bg-white shadow-md rounded-lg" src="/images/hero.jpg" alt="Image 3" />
      </div>
      <div className="max-w-3xl mx-auto mt-8 flex items-center">
        <h2 className="text-2xl font-bold mr-4">Title</h2>
        <p className="text-gray-500 truncate truncate-2 hover:truncate-none mr-4">
          In the school year 2017/2018 professors from our school are taking part in Nansen model for integrated education
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Button</button>
      </div>
    </div>
  );
};

export default Gallery;