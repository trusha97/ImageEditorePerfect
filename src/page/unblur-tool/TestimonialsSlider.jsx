"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Isabella Anderson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This background remover is fantastic! It's quick, easy to use, and delivers perfect results every time. I've saved so much time on editing thanks to its accuracy. Highly recommend it for anyone needing fast, professional-quality edits!",
  },
  {
    name: "Klara Matheson",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
    text: "This background remover tool is an absolute game-changer! I've tried other similar tools before, but none come close to the precision and speed of this one. It saves me so much time on editing, and the quality is always top-notch. Highly recommend!",
  },
  {
    name: "Emily Carter",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    text: "Amazing experience! The tool is intuitive, fast, and the results are incredible. It’s a must-have for any designer.",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-white to-pink-50 py-16">
      <h2 className="text-center text-3xl font-bold mb-10">
        What Our <span className="text-orange-500">Happy Users</span> Say?
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-md p-6 h-full text-center border border-gray-100">
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <div className="text-yellow-400 my-2">★★★★★</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
