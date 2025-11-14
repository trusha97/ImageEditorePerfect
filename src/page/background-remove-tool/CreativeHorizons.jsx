"use client";

import Paragraph from '@/Typography/text/Paragraph';
import React from 'react'

const Creativehorizons = () => {
  const stats = [
    { label: "Creative Edits Made Every Month", value: "1B+" },
    { label: "Image Processed", value: "15M+" },
    { label: "Faster Editing on Platform", value: "10x" },
    { label: "Happy Users", value: "40K+" },
  ];

  return (
    <>
      <div className="max-w-[1506px] mx-auto pt-[100px] px-4">
        {/* Desktop: flex row | Mobile: flex-col */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-40 items-center">

          {/* Left content */}
          <div className="xl:w-1/2 w-full text-center xl:text-left !pl-4">
            <h2 className="!pb-4 sm:text-[50px] text-3xl font-bold sm:leading-[60px] leading-10 text-[var(--doubelblack)]">
              Unveil New
              <span className="text-[var(--orange)] font-bold"> Creative</span>{" "}
              <br className="hidden sm:block" /> Horizons
            </h2>
            <Paragraph
              level={3}
              className="sm:text-lg text-base text-[var(--paragraphtitle)] xl:max-w-[610px] max-w-full font-medium mx-auto xl:mx-0"
              text="Explore new creative horizons with cutting-edge tools and techniques that push the boundaries of your imagination. Unveil fresh ideas and innovative possibilities to elevate your work to the next level."
            />
            <div>
              <button
                type="button"
                className="sm:mt-11 mt-8 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="xl:w-1/2 w-full ">
            <div className="grid grid-cols-2 sm:gap-6 gap-3  xl:max-w-3xl max-w-full mx-auto">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl sm:p-6 p-3  shadow-md creativebg sm:h-[234px] xs:h-[136px] h-[120px]  flex flex-col justify-between"
                >
                  <p className="text-gray-700  md:text-2xl xs:text-base text-sm sm:leading-[30px] leading-[20px] font-medium max-w-[217px]">
                    {item.label}
                  </p>
                  <h2 className="xs:text-[50px] sm:text-[80px] text-4xl xs:leading-[50px] sm:leading-[90px] leading-9  font-bold text-black">
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Creativehorizons;
