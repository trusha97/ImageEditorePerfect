"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Isabella Anderson",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "This background remover is fantastic! It's quick, easy to use, and delivers perfect results every time. I’ve saved so much time on editing thanks to its accuracy. Highly recommend it for anyone needing fast, professional-quality edits!",
    },
    {
        name: "Klara Matheson",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
        text: "This background remover tool is an absolute game-changer! I’ve tried other similar tools before, but none come close to the precision and speed of this one. Highly recommend!",
    },
    {
        name: "Emily Carter",
        image: "https://randomuser.me/api/portraits/women/70.jpg",
        text: "This background remover is fantastic! It's quick, easy to use, and delivers perfect results every time. Highly recommend it for anyone needing professional-quality edits!",
    },
];

/* ------------------------------------------------------------------ */
/* CUSTOM ARROW COMPONENTS (MATCHING YOUR SCREENSHOT DESIGN) */
/* ------------------------------------------------------------------ */
const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-prev-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
            <path d="M0.219376 8.03104L6.96937 14.781C7.11011 14.9218 7.30098 15.0008 7.5 15.0008C7.69902 15.0008 7.88989 14.9218 8.03063 14.781C8.17136 14.6403 8.25042 14.4494 8.25042 14.2504C8.25042 14.0514 8.17136 13.8605 8.03063 13.7198L2.56031 8.25042H17.25C17.4489 8.25042 17.6397 8.1714 17.7803 8.03075C17.921 7.8901 18 7.69933 18 7.50042C18 7.3015 17.921 7.11074 17.7803 6.97009C17.6397 6.82943 17.4489 6.75042 17.25 6.75042H2.56031L8.03063 1.28104C8.17136 1.14031 8.25042 0.94944 8.25042 0.750417C8.25042 0.551394 8.17136 0.360523 8.03063 0.219792C7.88989 0.0790615 7.69902 0 7.5 0C7.30098 0 7.11011 0.0790615 6.96937 0.219792L0.219376 6.96979C0.149643 7.03945 0.0943222 7.12216 0.0565796 7.21321C0.018837 7.30426 -0.000589371 7.40186 -0.000589371 7.50042C-0.000589371 7.59898 0.018837 7.69657 0.0565796 7.78762C0.0943222 7.87867 0.149643 7.96139 0.219376 8.03104Z" fill="white" />
        </svg>
    </button>
);

const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z" fill="white" />
        </svg>
    </button>
);

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT */
/* ------------------------------------------------------------------ */

const TestimonialsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // FIX: Detect screen width BEFORE slick renders
      const [initialSlides, setInitialSlides] = useState(3);

      useEffect(() => {
          const width = window.innerWidth;
      
          if (width <= 480) setInitialSlides(1);
          else if (width <= 640) setInitialSlides(1);
          else if (width <= 768) setInitialSlides(2);
          else if (width <= 1024) setInitialSlides(2);
          else if (width <= 1280) setInitialSlides(2);
          else setInitialSlides(2);
        }, []);


    const totalSlides = testimonials.length;
    const progressWidth = ((activeIndex + 1) / totalSlides) * 100;

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: initialSlides,   // FIXED
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: false,
        autoplaySpeed: 3000,
        beforeChange: (_, next) => setActiveIndex(next),

        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        // responsive: [
        //     { breakpoint: 1024, settings: { slidesToShow: 1, arrows: false } },
        //     { breakpoint: 900, settings: { slidesToShow: 1, arrows: false } },
        // ],

        responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    };

    return (
        <div className="md:py-20 py-10 testimonials-bg md:my-[100px] my-[50px]">
            <h2 className="text-[30px] md:text-[50px] font-bold text-center text-[#181D20] mb-10">
                What Our <span className="text-[#D64011]">Happy Users</span> Say?
            </h2>

            <div className="max-w-[1058px] mx-auto px-4 relative">
                <Slider {...settings}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="px-4 mb-10">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-2xl text-[#000000]">
                                            {t.name}
                                        </h3>
                                        <div className="text-[#F6B500] gap-1.5 text-[16px]">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#2A2A33] text-lg leading-6">{t.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Purple progress bar */}
            <div className="flex justify-center ">
                <div className="w-[180px] h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#8b5cf6] rounded-full transition-all duration-500"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>
            </div>

            {/* CUSTOM CSS */}
            <style>{`
        /* Custom Purple Round Arrows Like Your Screenshot */
        .custom-prev-arrow,
        .custom-next-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #8b5cf6;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0px 3px 10px rgba(0,0,0,0.18);
        }

        .custom-prev-arrow:hover,
        .custom-next-arrow:hover {
          background: #7c3aed;
        }

        .custom-prev-arrow { left: -65px; }
        .custom-next-arrow { right: -65px; }

        .custom-prev-arrow svg,
        .custom-next-arrow svg {
          stroke: #ffffff;
        }

        /* Hide arrows on mobile */
        @media (max-width: 1023px) {
          .custom-prev-arrow,
          .custom-next-arrow {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
};

export default TestimonialsSlider;
