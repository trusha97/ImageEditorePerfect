"use client";

import React, { useState } from "react";
import Image from "next/image";
import { curleyaerrow, ellipse5, start1, start5 } from "@/utils/image";
import Paragraph from "@/Typography/text/Paragraph";

const testimonials = [
    {
        id: 1,
        name: "Jessica Martinez",
        avatar: ellipse5,
        rating: start5,
        text: "My vectorized files were unbelievably crisp and scalable to any size without losing a single detail. Whether I needed the vector for a small icon or a massive banner, the results were consistently outstanding.",
    },
    {
        id: 2,
        name: "David Johnson",
        avatar: ellipse5,
        rating: start5,
        text: "Amazing service! The quality and precision of the vectors blew me away. I’ll definitely be using this again for my projects.",
    },
    {
        id: 3,
        name: "Sophia Lee",
        avatar: ellipse5,
        rating: start5,
        text: "The conversion was super fast and flawless. Saved me so much time compared to doing it manually!",
    },
];

const TestimonialCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const { name, avatar, rating, text } = testimonials[currentIndex];

    return (
        <div className="relative bg-gradient-custom rounded-xl p-6 max-w-[625px] shadow-lg mx-auto xl:mx-0 md:block hidden" >
            {/* Header */}
            <div className="flex gap-4 items-center mb-6">
                <div>
                    <Image src={avatar} alt="avatar" />
                </div>
                <div className="">
                    <Paragraph
                        className="text-white font-bold text-[30px] leading-[40px] !mb-1"
                        level={4}
                        text={name}
                    />
                    <Image src={rating} alt="5 stars"  />
                </div>
            </div>

            {/* Testimonial Text */}
            <Paragraph
                className="text-white font-medium text-[22px] leading-[30px] max-w-[577px]"
                level={1}
                text={text}
            />

            {/* Arrows */}
            <div className="flex items-center justify-between mt-6">
                {/* Left Arrow */}
                <button onClick={handlePrev}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="22"
                        viewBox="0 0 29 22"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.60078 9.39975C5.50158 9.39975 9.05678 5.84775 9.05678 1.94375V0.34375H12.2568V1.94375C12.2568 4.78215 11.012 7.44455 9.05838 9.39975H28.8008V12.5997H9.05838C11.012 14.5549 12.2568 17.2173 12.2568 20.0557V21.6557H9.05678V20.0557C9.05678 16.1533 5.50158 12.5997 1.60078 12.5997H0.000782013V9.39975H1.60078Z"
                            fill="white"
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M32.3992 18.3997C28.4984 18.3997 24.9432 14.8477 24.9432 10.9437V9.34375H21.7432V10.9437C21.7432 13.7821 22.988 16.4445 24.9416 18.3997H5.19922V21.5997H24.9416C22.988 23.5549 21.7432 26.2173 21.7432 29.0557V30.6557H24.9432V29.0557C24.9432 25.1533 28.4984 21.5997 32.3992 21.5997H33.9992V18.3997H32.3992Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>

            {/* Extra Decorative Icons */}
            <div className="absolute top-[-24px] right-[-34px]">
                <Image
                    src={start1}
                    alt="sparkle"
                    className="animate-spin-pause"
                />
            </div>


            <div className="absolute top-[100px] right-[-142px] max-[1439px]:hidden min-[1440px]:block">
                <Image src={curleyaerrow} alt="curleyArrow" />
            </div>
        </div>
    );
};

export default TestimonialCard;
