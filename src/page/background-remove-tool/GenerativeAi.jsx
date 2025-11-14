// import { newtools } from '@/utils/image'
// import React from 'react'

// const GenerativeAi = () => {
//   return (
//     <div>
//         <div className="bg-cover bg-center rounded-[30px] mx-12.5"
//                         style={{ backgroundImage: `url(${newtools.src})` }}>
//         </div>
//     </div>
//   )
// }

// export default GenerativeAi



"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Typography/header/Header";
import Paragraph from "@/Typography/text/Paragraph";
import Image from "next/image";
import { Ai1, Ai2, Ai3, note, obremover, sound, textspech, textspechimage } from "@/utils/image";

const GenerativeAi = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <>
            <div className="relative  xl:!h-[600px] sm:h-[750px] h-[600px] 2xl:ml-12 ml-0 2xl:mr-12.5 mr-0 !mb-12">
                {/* Background Image */}
                <Image
                    src={textspech}
                    alt="textspech"
                    className="hidden sm:block w-full xl:!h-[620px] h-[775px] object-cover rounded-lg absolute -top-16.5"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 -top-[70px] xl:flex block justify-between 2xl:px-[157px] xl:px-28 px-4 !h-[620px] items-center ">
                    {/* ==== left Side (Text Content) ==== */}
                    <div className="xl:text-left text-center !mx-auto">
                        <div>
                            <button
                                type="button"
                                className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
                            >
                                NEW
                            </button>
                        </div>

                        <Header
                            className="text-[var(--doubelblack)] text-[40px] font-bold mt-4"
                            text="AI Image Generator"
                        />

                        <Paragraph
                            className="font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3 xl:text-left text-center !mx-auto"
                            text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
                        />

                        <button
                            type="button"
                            disabled
                            className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)] xl:mb-0 mb-14.5"
                        >
                            Try Now
                        </button>
                    </div>

                    {/* ==== right Side (Images) ==== */}
                    <div className="relative md:w-[500px] sm:w-[400px] w-[275px] md:h-[350px] sm:h-[325px] h-[250px] group mx-auto ">
                        {/* Main Image */}
                        <Image
                            src={textspechimage}
                            alt="textspech image"
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Note Icon - Top Right (slide out on hover) */}
                        <Image
                            src={note}
                            alt="note"
                            className="absolute top-4 right-4 md:w-[118.76px] sm:w-[95.76px] w-[70.76px] md:h-[146.3px] sm:h-[115.3px] h-[80.3px] 
                   transition-all duration-500 
                   group-hover:translate-x-[80%]"
                        />

                        {/* Sound Bar - Bottom Center (slide out on hover) */}
                        <Image
                            src={sound}
                            alt="sound"
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                   md:!w-[378.43px] sm:w-[270.43px] w-[230.43px] md:h-[95.61px] sm:h-[70.61px] h-[50.61px]
                   transition-all duration-500 
                   group-hover:translate-y-[80%]"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default GenerativeAi;




