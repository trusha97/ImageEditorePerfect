"use client";
import React, { useState } from "react";
import { textspechimage, womanwalking1 } from "utils/image";

// ------------------------------------------------------
// BEFORE–AFTER COMPONENT
// ------------------------------------------------------
const BeforeAfter = ({ before, after }) => {
    const [position, setPosition] = useState(50);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        let newPos = (x / rect.width) * 100;
        if (newPos < 0) newPos = 0;
        if (newPos > 100) newPos = 100;

        setPosition(newPos);
    };

    return (
        <div
            className="relative w-full max-w-[609px]  sm:h-[300px] md:h-[350px] lg:h-[420px] h-[277px] overflow-hidden rounded-xl shadow-md cursor-pointer mx-auto"
            onMouseMove={handleMouseMove}
        >
            <img src={after} className="absolute inset-0 w-full h-full object-cover" />
            <img
                src={before}
                className="absolute inset-0 h-full object-cover transition-all duration-75"
                style={{ width: `${position}%` }}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {/* Slider handle */}
            <div
                className="absolute top-0 bottom-0 w-[5px] bg-white shadow-md"
                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            />
            <div
                className="absolute top-1/2 bg-white text-black w-[42px] h-[40px] flex items-center justify-center rounded-full shadow-lg border-[4px] border-[#8256FF]"
                style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M15.97 6.96932C16.0396 6.89959 16.1223 6.84427 16.2134 6.80653C16.3044 6.76878 16.402 6.74936 16.5006 6.74936C16.5992 6.74936 16.6967 6.76878 16.7878 6.80653C16.8788 6.84427 16.9616 6.89959 17.0312 6.96932L21.5312 11.4693C21.6009 11.539 21.6563 11.6217 21.694 11.7127C21.7318 11.8038 21.7512 11.9014 21.7512 11.9999C21.7512 12.0985 21.7318 12.1961 21.694 12.2872C21.6563 12.3782 21.6009 12.4609 21.5312 12.5306L17.0312 17.0306C16.8905 17.1713 16.6996 17.2504 16.5006 17.2504C16.3016 17.2504 16.1107 17.1713 15.97 17.0306C15.8292 16.8898 15.7502 16.699 15.7502 16.4999C15.7502 16.3009 15.8292 16.1101 15.97 15.9693L19.9403 11.9999L15.97 8.03057Z"
                        fill="black"
                    />
                    <path
                        d="M8.03122 15.9693L4.0609 11.9999L8.03122 8.03057C8.17195 7.88984 8.25101 7.69897 8.25101 7.49995C8.25101 7.30093 8.17195 7.11005 8.03122 6.96932C7.89048 6.82859 7.69961 6.74953 7.50059 6.74953C7.30157 6.74953 7.11069 6.82859 6.96996 6.96932L2.46996 11.4693C2.40023 11.539 2.34491 11.6217 2.30717 11.7127C2.26943 11.8038 2.25 11.9014 2.25 11.9999C2.25 12.0985 2.26943 12.1961 2.30717 12.2872C2.34491 12.3782 2.40023 12.4609 2.46996 12.5306L6.96996 17.0306C7.1107 17.1713 7.30157 17.2504 7.50059 17.2504C7.69961 17.2504 7.89048 17.1713 8.03122 17.0306C8.17195 16.8898 8.25101 16.699 8.25101 16.4999C8.25101 16.3009 8.17195 16.1101 8.03122 15.9693Z"
                        fill="black"
                    />
                </svg>
            </div>
        </div>
    );
};

// ------------------------------------------------------
// MAIN SECTION
// ------------------------------------------------------
const CanBeUsed = () => {
    return (
        <div className="max-w-[1250px] mx-auto md:py-[100px] py-[50px] ">
            <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#181D20] text-center leading-tight mb-3">
                Where the tool can be <span className="text-[#D64011]">used?</span>
            </h2>
            <p className="text-[#2A2A33] leading-[140%] text-xl font-medium px-[15px] mx-auto text-center">Find out where and how this tool can be applied to achieve outstanding results in both personal and professional projects.</p>

            {/* CARD 1: Product Images - SIDE BY SIDE */}
            <div className="flex flex-col lg:flex-row items-center px-[15px] justify-between mb-[60px] mt-[60px]">
                {/* Image on small screens top */}
                <div className="w-full lg:w-[550px] xl:w-[609px]  mb-6 lg:mb-0 lg:order-2">
                    <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
                </div>

                {/* Text section */}
                <div className=" w-full lg:w-auto lg:order-1">
                    <p className="lg:mx-0 mx-auto sm:text-sm text-xs font-bold bg-[#FED4C6] text-[#D64011] sm:w-[137px] w-[110px] sm:h-[28px] h-[24px] flex items-center justify-center rounded-[4px] md:mb-6 mb-3">
                        For Product Use
                    </p>

                    <h2 className="lg:mx-0 mx-auto lg:text-left text-center text-[28px] sm:text-[32px] font-bold text-[#181D20] leading-[30px] md:mb-3 mb-4 max-w-[500px]">
                        Unblur your product images
                    </h2>

                    <p className="lg:mx-0 mx-auto lg:text-left text-center text-[#2A2A33] font-medium text-lg leading-[140%] mb-[30px] max-w-[483px]">
                        Make your products shine with sharp, clear images that capture attention. Learn simple techniques to unblur your photos, ensuring every detail stands out. Attract more customers with high-quality visuals that elevate your brand.
                    </p>

                    <button className="lg:mx-0 mx-auto text-lg font-bold bg-[#8157FF] hover:bg-[#6c43ff] transition text-white w-[200px] h-[48px] flex items-center justify-center rounded-md shadow-md">
                        Try Now
                    </button>
                </div>
            </div>



            <div className="lg:flex block  items-center px-[15px] justify-between mb-[60px]">
                <div className="w-full lg:w-[550px] xl:w-[609px]  mb-6 lg:mb-0 ">
                    <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
                </div>
                <div className=" ">
                    <p className="lg:mx-0 mx-auto sm:text-sm  text-xs font-bold bg-[#FED4C6] text-[#D64011] sm:w-[137px] w-[110px] sm:h-[28px] h-[24px] flex items-center justify-center rounded-[4px] md:mb-6 mb-3">
                        For Business Use
                    </p>

                    <h2 className="lg:mx-0 mx-auto  lg:text-left text-center text-[28px] sm:text-[32px] font-bold text-[#181D20] leading-[40px] md:mb-3 mb-4 max-w-[500px]">
                        Enhance your professional images and recover lost details.
                    </h2>

                    <p className="lg:mx-0 mx-auto lg:text-left text-center text-[#2A2A33] font-medium text-lg leading-[140%] mb-[30px] max-w-[483px]">
                        Enhance your professional images by restoring sharpness and clarity, bringing out the details that make your photos stand out. Learn how to recover lost details and improve the overall quality of your images for a polished, professional look.
                    </p>

                    <button className="lg:mx-0 mx-auto text-lg font-bold bg-[#8157FF] hover:bg-[#6c43ff] transition text-white w-[200px] h-[48px] flex items-center justify-center rounded-md shadow-md">
                        Try Now
                    </button>
                </div>
            </div>

            {/* <div className="lg:flex block items-center px-[15px] justify-between ">
                <div className="w-full lg:w-auto ">
                    <p className="lg:mx-0 mx-auto sm:text-sm text-xs font-bold bg-[#FED4C6] text-[#D64011] sm:w-[137px] w-[110px] sm:h-[28px] h-[24px] flex items-center justify-center rounded-[4px] md:mb-6 mb-3">
                        For Social Use
                    </p>

                    <h2 className="lg:mx-0 mx-auto lg:text-left text-center text-[28px] sm:text-[32px] font-bold text-[#181D20] leading-[30px] md:mb-3 mb-4 max-w-[500px]">
                        Unblur your social images
                    </h2>

                    <p className="lg:mx-0 mx-auto lg:text-left text-center text-[#2A2A33] font-medium text-lg leading-[140%] mb-[30px] max-w-[483px]">
                        Make your social media images pop by removing blur and enhancing clarity. Learn how to easily unblur your photos, ensuring your content is vibrant and eye-catching. Boost engagement with sharp, clear visuals that capture attention.
                    </p>

                    <button className="lg:mx-0 mx-auto text-lg font-bold bg-[#8157FF] hover:bg-[#6c43ff] transition text-white w-[200px] h-[48px] flex items-center justify-center rounded-md shadow-md">
                        Try Now
                    </button>
                </div>
                <div className="w-full lg:w-[550px] xl:w-[609px]  mb-6 lg:mb-0 ">
                    <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
                </div>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center px-[15px] justify-between ">
                {/* Image on small screens top */}
                <div className="w-full lg:w-[550px] xl:w-[609px]  mb-6 lg:mb-0 lg:order-2">
                    <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
                </div>

                {/* Text section */}
                <div className=" w-full lg:w-auto lg:order-1">
                    <p className="lg:mx-0 mx-auto sm:text-sm text-xs font-bold bg-[#FED4C6] text-[#D64011] sm:w-[137px] w-[110px] sm:h-[28px] h-[24px] flex items-center justify-center rounded-[4px] md:mb-6 mb-3">
                        For Social Use
                    </p>

                    <h2 className="lg:mx-0 mx-auto lg:text-left text-center text-[28px] sm:text-[32px] font-bold text-[#181D20] leading-[30px] md:mb-3 mb-4 max-w-[500px]">
                        Unblur your social images
                    </h2>

                    <p className="lg:mx-0 mx-auto lg:text-left text-center text-[#2A2A33] font-medium text-lg leading-[140%] mb-[30px] max-w-[483px]">
                        Make your social media images pop by removing blur and enhancing clarity. Learn how to easily unblur your photos, ensuring your content is vibrant and eye-catching. Boost engagement with sharp, clear visuals that capture attention.
                    </p>

                    <button className="lg:mx-0 mx-auto text-lg font-bold bg-[#8157FF] hover:bg-[#6c43ff] transition text-white w-[200px] h-[48px] flex items-center justify-center rounded-md shadow-md">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CanBeUsed;
