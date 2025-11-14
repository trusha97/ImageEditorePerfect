import React, { useState } from "react";

const RemoveBgSection = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center px-6 py-10">
      {/* Header Section */}
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Instantly Remove <br />
          Background From <br /> Your Images
        </h1>
        <p className="text-gray-500 mt-3">
          Easily remove the background from your images, just in seconds and for free.
        </p>
      </div>

      {/* Upload Box */}
      <div className="mt-8 w-full max-w-md border-2 border-dashed border-purple-300 rounded-2xl p-8 text-center bg-white shadow-md">
        <label className="cursor-pointer flex flex-col items-center">
          <div className="text-5xl text-purple-400 mb-3">+</div>
          <p className="text-gray-700 font-medium mb-2">Drag and Drop Your Image</p>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          <button className="bg-purple-500 text-white px-5 py-2 rounded-lg mt-2 hover:bg-purple-600 transition-all">
            Upload Image
          </button>
        </label>
        <p className="text-sm text-gray-400 mt-2">
          You can also copy and paste <a href="#" className="text-blue-500 underline">URL</a>
        </p>
      </div>

      {/* Before / After Section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden border shadow-md">
          <img
            src={image || "https://i.ibb.co/s9vV9GQ/sample-before.jpg"}
            alt="Before"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://i.ibb.co/s9vV9GQ/sample-before.jpg')] bg-cover bg-center opacity-30 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white bg-purple-500 rounded-full px-3 py-1 text-xs font-semibold shadow-lg">
            BEFORE / AFTER
          </div>
        </div>
      </div>

      {/* Demo Thumbnails */}
      <div className="mt-6 flex gap-3">
        {["https://i.ibb.co/f2kPZKp/demo1.jpg", "https://i.ibb.co/vL4jzQH/demo2.jpg", "https://i.ibb.co/8KQQTLL/demo3.jpg"].map((demo, i) => (
          <img
            key={i}
            src={demo}
            alt={`demo-${i}`}
            className="w-14 h-14 rounded-lg object-cover border cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-10 w-full bg-gradient-to-r from-pink-100 to-purple-100 py-6 rounded-xl flex flex-col md:flex-row justify-center gap-8 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">2M+</h2>
          <p className="text-gray-500 text-sm">Images Processed</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">80k</h2>
          <p className="text-gray-500 text-sm">Happy Users</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">10x</h2>
          <p className="text-gray-500 text-sm">Faster Editing</p>
        </div>
      </div>
    </div>
  );
};

export default RemoveBgSection;
