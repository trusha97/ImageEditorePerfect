"use client";

import Image from "next/image";
import React from "react";
import { faqsectionbg } from "utils/image";

const FAQSection = () => {
  return (
    <div className="mx-auto  relative mb-[100px]">
      <Image  src={faqsectionbg} className="w-[1291px] h-[870px]"/>
      <div
  className="w-full flex justify-center px-4 py-16  border border-[#E8E8E8] rounded-xl h-[882px] max-w-[994px]  absolute top-0 left-1/2 -translate-x-1/2"
  style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}
>
        <div className="max-w-5xl w-full ">

          {/* Title */}
          <h2 className="text-4xl font-semibold text-center mb-12">
            Frequently Asked{" "}
            <span className="text-[#FF6A3D] font-bold">Questions</span>
          </h2>

          {/* FAQ LIST */}
          <div className="space-y-4">

            {/* CARD 1 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What makes Image Editor the top choice for background removal?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With cutting-edge AI and advanced image processing, Image Editor delivers precise
                and high-quality background removal. Our platform is user-friendly and supports a
                wide range of image formats for seamless editing.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I remove backgrounds from images on my mobile device?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! You can remove backgrounds directly from your phone by visiting our
                website through your mobile browser.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I make an image's background transparent?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simply upload your image to Image Editor, and our tool will automatically remove
                the background, leaving it transparent. You can then download the file with ease.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I replace the background of an image?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! After removing the background, you can add a new background or create a
                custom one using our AI-powered tools.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is Image Editor free to use, and what does it include?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You can try the background removal tool for free on the main page. To access all
                features and download high-resolution images, you can opt for a 7-day trial
                subscription for just $1.50.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
