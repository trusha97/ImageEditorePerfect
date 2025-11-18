"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import all demo images
import {
  InstantlyRemove,
  textspechimage,
  womanwalking1,
} from "utils/image";

const RemoveBgSection = () => {
  // -------------------------------
  // DEMO BEFORE/AFTER IMAGES
  // -------------------------------
  const demoImages = [
    { before: textspechimage?.src, after: womanwalking1?.src },
    { before: womanwalking1?.src, after: InstantlyRemove?.src },
    { before: InstantlyRemove?.src, after: textspechimage?.src },
    { before: textspechimage?.src, after: InstantlyRemove?.src },
  ];

  const [selected, setSelected] = useState(demoImages[0]);
  const [image, setImage] = useState(null);

  // -------------------------------
  // IMAGE UPLOAD
  // -------------------------------
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  // -------------------------------
  // BEFORE–AFTER COMPONENT
  // -------------------------------
  const BeforeAfter = ({ before, after }) => {
    const [position, setPosition] = useState(50);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;

      let newPos = (x / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, newPos)));
    };

    return (
      <div
        className="
          relative w-full
          max-w-[500px] h-[550px]
          rounded-2xl overflow-hidden
        "
        onMouseMove={handleMouseMove}
      >
        {/* AFTER Image */}
        <img
          src={after}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE Image */}
        <img
          src={before}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${position}%` }}
        />

        {/* Hidden Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[4px] bg-white"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Knob */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            bg-white w-[42px] h-[42px] rounded-full shadow-lg
            border-[4px] border-[#8256FF]
            flex items-center justify-center
          "
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <span className="text-black font-bold text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M20.252 8.83766C20.3403 8.74923 20.4452 8.67908 20.5607 8.63122C20.6762 8.58335 20.7999 8.55872 20.9249 8.55872C21.0499 8.55872 21.1737 8.58335 21.2891 8.63122C21.4046 8.67908 21.5095 8.74923 21.5978 8.83766L27.3043 14.5442C27.3928 14.6325 27.4629 14.7374 27.5108 14.8529C27.5586 14.9683 27.5833 15.0921 27.5833 15.2171C27.5833 15.3421 27.5586 15.4658 27.5108 15.5813C27.4629 15.6967 27.3928 15.8016 27.3043 15.89L21.5978 21.5965C21.4193 21.775 21.1773 21.8752 20.9249 21.8752C20.6725 21.8752 20.4305 21.775 20.252 21.5965C20.0736 21.418 19.9733 21.176 19.9733 20.9236C19.9733 20.6712 20.0736 20.4292 20.252 20.2507L25.2868 15.2171L20.252 10.1834C20.1636 10.0951 20.0934 9.99022 20.0456 9.87476C19.9977 9.7593 19.9731 9.63554 19.9731 9.51055C19.9731 9.38557 19.9977 9.2618 20.0456 9.14634C20.0934 9.03088 20.1636 8.92599 20.252 8.83766ZM10.1848 20.2507L5.14995 15.2171L10.1848 10.1834C10.3632 10.005 10.4635 9.76294 10.4635 9.51055C10.4635 9.25817 10.3632 9.01612 10.1848 8.83766C10.0063 8.6592 9.76426 8.55894 9.51187 8.55894C9.25949 8.55894 9.01744 8.6592 8.83898 8.83766L3.13246 14.5442C3.04403 14.6325 2.97388 14.7374 2.92601 14.8529C2.87815 14.9683 2.85352 15.0921 2.85352 15.2171C2.85352 15.3421 2.87815 15.4658 2.92601 15.5813C2.97388 15.6967 3.04403 15.8016 3.13246 15.89L8.83898 21.5965C9.01744 21.775 9.25949 21.8752 9.51187 21.8752C9.76426 21.8752 10.0063 21.775 10.1848 21.5965C10.3632 21.418 10.4635 21.176 10.4635 20.9236C10.4635 20.6712 10.3632 20.4292 10.1848 20.2507Z" fill="black" />
          </svg></span>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-6 text-white font-bold shadow-lg">
          BEFORE
        </div>
        <div className="absolute bottom-4 right-6 text-white font-bold shadow-lg">
          AFTER
        </div>
      </div>
    );
  };

  // -------------------------------
  // MAIN RETURN
  // -------------------------------
  return (
    <div className="w-full">
      <div
        className="
          xl:px-20 px-5 py-[78px]
          lg:flex block flex-col md:flex-row items-center justify-between
          max-w-[1398px] mx-auto mt-10
          shadow-sm rounded-tl-[30px] rounded-tr-[30px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(220, 234, 255, 0.5) 0%, rgba(220, 234, 255, 0) 100%)",
        }}
      >
        {/* LEFT SIDE */}
        <div className="w-full max-w-[610px] flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[40px] md:text-[52px] font-bold text-[#181D20] leading-[50px] md:leading-[70px] max-w-[465px] mb-[20px] md:mb-3">
            Instantly Remove Background From Your Images
          </h2>

          <p className="font-medium md:text-xl text-lg leading-[140%] text-[#2A2A33] mb-[20px] md:mb-[34px]">
            Easily remove the background from your images, just in seconds and
            for free.
          </p>

          {/* Upload Box */}
          <div
            className="
              mx-auto w-full max-w-[610px] h-[353px] h-full p-2.5
              bg-white rounded-[40px] transition-all
            "
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
          >
            <div className="border-2 border-dashed border-[#8256FF] rounded-[40px]">
              <label className="cursor-pointer flex flex-col items-center">
                {/* Upload Icon */}
                <div className="text-[#545454] mb-[26px] mt-[29px] w-[40px] h-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47 47"
                    fill="none"
                  >
                    <path
                      d="M46.875 23.4131C46.875 24.1582 46.5787 24.8729 46.0512 25.3998C45.5238 25.9266 44.8084 26.2227 44.0625 26.2227H26.25V44.0166C26.25 44.7617 25.9537 45.4764 25.4262 46.0033C24.8988 46.5302 24.1834 46.8262 23.4375 46.8262C22.6916 46.8262 21.9762 46.5302 21.4488 46.0033C20.9213 45.4764 20.625 44.7617 20.625 44.0166V26.2227H2.8125C2.06658 26.2227 1.35121 25.9266 0.823762 25.3998C0.296316 24.8729 0 24.1582 0 23.4131C0 22.6679 0.296316 21.9533 0.823762 21.4264C1.35121 20.8995 2.06658 20.6035 2.8125 20.6035H20.625V2.80957C20.625 2.06443 20.9213 1.3498 21.4488 0.822904C21.9762 0.296008 22.6916 0 23.4375 0C24.1834 0 24.8988 0.296008 25.4262 0.822904C25.9537 1.3498 26.25 2.06443 26.25 2.80957V20.6035H44.0625C44.8084 20.6035 45.5238 20.8995 46.0512 21.4264C46.5787 21.9533 46.875 22.6679 46.875 23.4131Z"
                      fill="#545454"
                    />
                  </svg>
                </div>

                <p className="text-[#545454] font-bold text-[26px] leading-10 mb-5">
                  Drag and Drop Your Image
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {/* Upload Button */}
                <button className="bg-[#8256FF] font-bold text-2xl text-white rounded-lg hover:bg-purple-600 transition-all max-w-[410px] w-full h-[90px] flex items-center justify-center gap-2">
                  Upload Image
                </button>
              </label>

              <p className="text-lg font-medium text-[#545454] mt-5 mb-[31px] text-center">
                You can also copy and paste{" "}
                <a
                  href="#"
                  className="text-[#8256FF] underline font-bold text-lg"
                >
                  URL
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – BEFORE AFTER + THUMBNAILS */}
        <div className="lg:pt-0 pt-8 w-full max-w-[500px] mx-auto">

          {/* 🔥 Before / After Component */}
          <BeforeAfter before={selected.before} after={selected.after} />

          {/* 🔥 Demo Thumbnails */}
          <div>
            <p className="text-[#2A2A33] mt-[18px] mb-[15px] text-center font-medium text-xl leading-[140%]"> Pick one of this for Demo :</p>
            <div className="flex justify-center gap-4 mt-4 overflow-x-auto pb-2">
              {demoImages.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelected(item)}
                  className={`w-[60px] h-[59.94px]  rounded-xl overflow-hidden cursor-pointer border-2 ${selected.before === item.before
                      ? "border-[#8256FF]"
                      : "border-transparent"
                    }`}
                >
                  <img
                    src={item.after}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div
        className="
          max-w-[1398px] mx-auto pt-7 pb-[27px] px-[15px]
          rounded-xl flex md:flex-row justify-center
          lg:gap-[179px] gap-[43px] text-center
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(254, 211, 201, 0.6) 0%, rgba(254, 211, 201, 0.6) 20.5%, rgba(255, 154, 188, 0.6) 86.5%, rgba(255, 142, 186, 0.6) 100%)",
        }}
      >
        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
            2M+
          </h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
            Images Processed
          </p>
        </div>

        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
            80k
          </h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
            Happy Users
          </p>
        </div>

        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
            10x
          </h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
            Faster Editing
          </p>
        </div>
      </div>
    </div>
  );
};

export default RemoveBgSection;
