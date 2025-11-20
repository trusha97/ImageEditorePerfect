import React from "react";
import { faqsectionbg } from "utils/image";

const FAQSection = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat md:py-[100px] py-[50px] sm:px-[30px] px-[20px] "
        style={{ backgroundImage: `url(${faqsectionbg.src})` }}
      >
        {/* CENTER BOX */}
        <div
          className="w-full max-w-[994px] mx-auto sm:px-10 px-[10px]  md:pt-10 pt-[30px] md:pb-10 pb-[30px]  border border-[#E8E8E8] rounded-xl"
          style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}
        >
          <div className="max-w-5xl w-full mx-auto">
            {/* Title */}
            <h2 className="md:text-[50px] text-3xl font-bold md:leading-[60px] leading-10 text-center md:mb-10 mb-5">
              Frequently Asked{" "}
              <span className="text-[#FF6A3D] font-bold">Questions</span>
            </h2>

            {/* FAQ LIST */}
            <div className="space-y-4">

              {/* CARD 1 */}
              <div className="bg-white border border-[#E8E8E8] rounded-xl shadow-sm sm:p-[30px] p-[15px]">
                <h3 className="sm:text-xl text-base font-bold text-[#141414] sm:leading-[30px] leading-5  mb-[10px]">
                  What makes Image Editor the top choice for background removal?
                </h3>
                <p className="text-[#2A2A33] text-sm font-normal leading-relaxed">
                  With cutting-edge AI and advanced image processing, Image Editor delivers
                  precise and high-quality background removal. Our platform is user-friendly
                  and supports a wide range of image formats for seamless editing.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white border border-[#E8E8E8] rounded-xl shadow-sm sm:p-[30px] p-[15px]">
                <h3 className="sm:text-xl text-base font-bold text-[#141414] sm:leading-[30px] leading-5  mb-[10px]">
                  Can I remove backgrounds from images on my mobile device?
                </h3>
                <p className="text-[#2A2A33] text-sm font-normal leading-relaxed">
                  Absolutely! You can remove backgrounds directly from your phone by visiting
                  our website through your mobile browser.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white border border-[#E8E8E8] rounded-xl shadow-sm sm:p-[30px] p-[15px]">
                <h3 className="sm:text-xl text-base font-bold text-[#141414] sm:leading-[30px] leading-5  mb-[10px]">
                  How do I make an image's background transparent?
                </h3>
                <p className="text-[#2A2A33] text-sm font-normal leading-relaxed">
                  Simply upload your image to Image Editor, and our tool will automatically
                  remove the background, leaving it transparent. You can then download the file.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white border border-[#E8E8E8] rounded-xl shadow-sm sm:p-[30px] p-[15px]">
                <h3 className="sm:text-xl text-base font-bold text-[#141414] sm:leading-[30px] leading-5  mb-[10px]">
                  Can I replace the background of an image?
                </h3>
                <p className="text-[#2A2A33] text-sm font-normal leading-relaxed">
                  Yes! After removing the background, you can add a new background or create
                  a custom one using our AI-powered tools.
                </p>
              </div>

              {/* CARD 5 */}
              <div className="bg-white border border-[#E8E8E8] rounded-xl shadow-sm sm:p-[30px] p-[15px]">
                <h3 className="sm:text-xl text-base font-bold text-[#141414] sm:leading-[30px] leading-5  mb-[10px]">
                  Is Image Editor free to use, and what does it include?
                </h3>
                <p className="text-[#2A2A33] text-sm font-normal leading-relaxed">
                  You can try the background removal tool for free. To access all features
                  and download high-res images, start a 7-day trial subscription for $1.50.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
