import React, { useState } from "react";

const ReadyToRemoveSection = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-[#ffe5e0] py-14 px-6 flex flex-col md:flex-row items-center justify-center gap-10 rounded-3xl max-w-7xl mx-auto mt-10 shadow-sm">
      {/* Left Side Text + Upload */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Ready to Remove <br /> Background from Image?
        </h2>

        <div className="mt-6 w-full max-w-sm border-2 border-dashed border-purple-400 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all">
          <label className="cursor-pointer flex flex-col items-center">
            <div className="text-4xl text-purple-400 mb-2">+</div>
            <p className="text-gray-700 font-medium mb-2">
              Drag and Drop Your Image
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-all">
              Upload Image
            </button>
          </label>
          <p className="text-sm text-gray-400 mt-2">
            You can also copy and paste{" "}
            <a href="#" className="text-blue-500 underline">
              URL
            </a>
          </p>
        </div>
      </div>

      {/* Right Side Before / After */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={
              image ||
              "https://i.ibb.co/QpbHp1v/girl-before.jpg"
            }
            alt="Before"
            className="w-56 h-64 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Arrow */}
        <div className="text-purple-500 text-5xl md:text-6xl transform rotate-90 md:rotate-0">
          ➜
        </div>

        <div className="relative">
          <img
            src={
              image ||
              "https://i.ibb.co/xh6K6gR/girl-after.jpg"
            }
            alt="After"
            className="w-56 h-64 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToRemoveSection;
