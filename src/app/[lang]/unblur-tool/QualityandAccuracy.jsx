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
            className="relative mx-auto w-full lg:max-w-[994px] md:max-w-[600px] max-w-[400px] 
                 lg:h-[600px] md:h-[400px]  h-[266px]
                 overflow-hidden rounded-2xl"
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
                className="absolute inset-0 h-full object-cover transition-all duration-75"
                style={{ width: `${position}%` }}
            />

            {/* RANGE Input */}
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
                className="absolute top-0 bottom-0 w-[5px] bg-white"
                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            />

            {/* Knob */}
            <div
                className="absolute top-1/2 bg-white w-[42.48px] h-[40px] 
        flex items-center justify-center rounded-full shadow-lg 
        border-[4px] border-[#8256FF]"
                style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 22 12"
                    fill="none"
                >
                    <path
                        d="M15.3367 0.231563C15.4146 0.158161 15.507 0.0999292 15.6088 0.0601991C15.7106 0.02047 15.8197 2.13094e-05 15.9299 2.1305e-05C16.04 2.13007e-05 16.1491 0.02047 16.2509 0.0601991C16.3527 0.0999292 16.4452 0.158161 16.523 0.231563L21.5533 4.9684C21.6312 5.04172 21.6931 5.12879 21.7353 5.22464C21.7775 5.32048 21.7992 5.42321 21.7992 5.52696C21.7992 5.63071 21.7775 5.73344 21.7353 5.82928C21.6931 5.92512 21.6312 6.01219 21.5533 6.08551L16.523 10.8224C16.3657 10.9705 16.1523 11.0537 15.9299 11.0537C15.7074 11.0537 15.494 10.9705 15.3367 10.8224C15.1794 10.6742 15.091 10.4733 15.091 10.2638C15.091 10.0543 15.1794 9.85338 15.3367 9.70525L19.7749 5.52696L15.3367 1.34867C15.2588 1.27535 15.1969 1.18828 15.1547 1.09244C15.1125 0.996596 15.0908 0.893864 15.0908 0.790116C15.0908 0.686366 15.1125 0.583635 15.1547 0.487794C15.1969 0.391954 15.2588 0.304883 15.3367 0.231563ZM6.46247 9.70525L2.0243 5.52696L6.46247 1.34867C6.61978 1.20053 6.70816 0.999613 6.70816 0.790116C6.70816 0.580618 6.61978 0.3797 6.46247 0.231563C6.30515 0.0834253 6.09179 0.000202892 5.86931 0.000202901C5.64684 0.000202909 5.43347 0.0834253 5.27616 0.231563L0.245885 4.9684C0.167936 5.04173 0.106097 5.1288 0.0639066 5.22464C0.0217158 5.32048 -2.72253e-07 5.42321 -2.67237e-07 5.52696C-2.6222e-07 5.63071 0.0217158 5.73344 0.0639066 5.82928C0.106097 5.92512 0.167936 6.01219 0.245885 6.08551L5.27616 10.8224C5.43347 10.9705 5.64684 11.0537 5.86931 11.0537C6.09179 11.0537 6.30515 10.9705 6.46247 10.8224C6.61978 10.6742 6.70816 10.4733 6.70816 10.2638C6.70816 10.0543 6.61978 9.85338 6.46247 9.70525Z"
                        fill="black"
                    />
                </svg>
            </div>
            {/* Labels */}
            <div className="absolute bottom-4 left-6 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow">
                BEFORE
            </div>
            <div className="absolute bottom-4 right-6 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow">
                AFTER
            </div>

        </div>

    );
};

// ------------------------------------------------------
// MAIN COMPONENT (Single Before/After)
// ------------------------------------------------------
const QualityandAccuracy = () => {
    return (
        <div className="lg:mx-[50px] mx-0 my-[100px]  rounded-[30px]"
            style={{
                background: "linear-gradient(180deg, rgba(220, 234, 255, 0.5) 0%, rgba(255, 203, 223, 0.2) 49.5%, rgba(220, 234, 255, 0) 100%)"
            }}>
            <div className="md:pt-20 pt-10 md:px-0 px-[15px]">

                <h2 className=" lg:text-[50px] md:text-[35px] text-[30px] font-bold text-center text-[#2A2A33] sm:mb-3 mb-2 leading-tight">
                    Remove Background With High{" "}
                    <span className="text-[#D64011]">Quality and Accuracy</span>
                </h2>

                <p className="font-medium text-[#2A2A33] text-base md:text-xl leading-[150%] text-center mx-auto sm:mb-[60px] mb-[30px]">
                    Get pristine background removal with unmatched quality and precision for your images.
                </p>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 ">
                    {["People", "Products", "Animals", "Vehicle", "Graphics"].map((item, i) => (
                        <button
                            key={i}
                            className="w-[126px] md:h-12 h-[34px] bg-[#F2EEFF] border-[1px] border-[#8256FF] rounded-lg sm:text-base text-sm shadow-sm hover:shadow-md transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* SINGLE BEFORE/AFTER – NO SLIDER */}
                <div className=" mx-auto sm:mt-10 mt-[30px]">
                    <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
                </div>
                {/* Button */}
                <div className="flex justify-center mt-10">
                    <button className="w-[200px] h-12 bg-[#8256FF] text-white text-lg rounded-lg  hover:opacity-90 transition">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QualityandAccuracy;
