"use client"
import React from "react";
import Image from "next/image";
import { EasyBackground, HighQuality, Instant } from "utils/image";

const WhyChooseUnblur = () => {
  const features = [
    {
      title: "Instant Background Removal",
      desc: "Easy and fast to delete background online without any technical skills or installing complicated software.",
      imgBefore: Instant,
      tag: "",
    },
    {
      title: "High-Quality Result",
      desc: "Our bg remover delivers high-quality, clean photo cutting. Export transparent images in HD quality.",
      imgBefore: HighQuality,
      // tag: "HD",
    },
    {
      title: "Easy Background Editing",
      desc: "Change photo background color or add entirely new backgrounds instantly with a single click.",
      imgBefore: EasyBackground,
      tag: "",
    },
    {
      title: "Instant Background Removal",
      desc: "Easy and fast to delete background online without any technical skills or installing complicated software.",
      imgBefore: Instant,
      tag: "",
    },
  ];

  return (
    <div className="md:py-[100px] py-[50px] bg-white flex flex-col items-center  md:px-10 px-4 xs:px-5 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#181D20] text-center leading-tight mb-4">
        Experience the power of <span className="text-[#D64011]">AI Editing</span>
      </h2>

      <p className="text-[#2A2A33] text-base md:text-lg lg:text-xl text-center mb-12">
        Experience how AI editing transforms your images with precision and efficiency, offering superior results with minimal effort.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1512px]">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F2EEFF] md:p-5 p-3 rounded-2xl shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative flex justify-center mb-6">
              <div className="flex justify-center items-center overflow-hidden rounded-xl w-full">
                <Image
                  src={item.imgBefore}
                  alt={item.title}
                  width={400}
                  height={220}
                  className="rounded-xl w-full h-auto object-cover"
                />

                {item.tag && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#181D20] mb-3 leading-tight">
              {item.title}
            </h3>

            <p className="text-[#181D20] font-medium text-sm md:text-base lg:text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUnblur;
