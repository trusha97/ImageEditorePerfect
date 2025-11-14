// import React from 'react'

// const Faq = () => {
//   return (
//     <div>
//       <div>
//         <h1>faq</h1>
//       </div>
//     </div>
//   )
// }

// export default Faq



"use client";

// import { faqframe } from "@/utils/image";
import Image from "next/image";
import React, { useState } from "react";
import { faqframe } from "../../../utils/image";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "How do Edit Your Image?",
    answer: "You can edit your image by using our online editor with easy tools.",
  },
  {
    question: "In which formats can I download my background-removed image?",
    answer: "You can download your images in PNG, JPG, and WebP formats.",
  },
  {
    question: "Can I customize the background for my images?",
    answer: "Yes, you can replace or add a custom background to your images.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 ">
      <div className="max-w-[1505px] mx-auto flex flex-col xl:flex-row w-full justify-between items-center gap-8 xl:gap-0 mb-[50px] xl:mb-[100px]">
        {/* Left Content */}
        <div className="xl:w-2/5 w-full flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
          <div className="flex justify-center items-center mb-4">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[50px] font-bold leading-[48px] sm:leading-[60px] lg:leading-[70px] md:max-w-[250px] max-w-full">
              Let’s Have
              <span className="text-[var(--orange)] font-bold">
                {" "}
                Quick FAQ
              </span>
            </h2>
            <span>
              <Image
                src={faqframe}
                alt="faqframe"
                className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[142px] lg:w-[142px] hidden md:block ml-2"
              />
            </span>
          </div>

          <p className="text-[var(--paragraphtitle)] font-medium text-base sm:text-lg leading-[26px] sm:leading-[28px] xl:max-w-[438px] max-w-[660px] mx-auto xl:mx-0">
            Find answers to the most common questions about our services,
            features, and how to get started. We’ve compiled everything you need
            to know right here.
          </p>
        </div>

        {/* Right FAQ Accordion */}
        <div className="lg:w-3/5 w-full space-y-5 md:space-y-6 mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 sm:p-5 lg:p-6 transition-all bg-[var(--litesceen)] w-full`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-lg sm:text-xl lg:text-2xl leading-7 text-left font-bold text-[var(--doubelblack)]"
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M29.207 16C29.207 16.3978 29.049 16.7794 28.7677 17.0607C28.4864 17.342 28.1049 17.5 27.707 17.5H5.70703C5.30921 17.5 4.92768 17.342 4.64637 17.0607C4.36507 16.7794 4.20703 16.3978 4.20703 16C4.20703 15.6022 4.36507 15.2206 4.64637 14.9393C4.92768 14.658 5.30921 14.5 5.70703 14.5H27.707C28.1049 14.5 28.4864 14.658 28.7677 14.9393C29.049 15.2206 29.207 15.6022 29.207 16Z"
                        fill="#CA8068"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M25.207 13C25.207 13.3978 25.049 13.7794 24.7677 14.0607C24.4864 14.342 24.1049 14.5 23.707 14.5H14.207V24C14.207 24.3978 14.049 24.7794 13.7677 25.0607C13.4864 25.342 13.1049 25.5 12.707 25.5C12.3092 25.5 11.9277 25.342 11.6464 25.0607C11.3651 24.7794 11.207 24.3978 11.207 24V14.5H1.70703C1.30921 14.5 0.927676 14.342 0.646371 14.0607C0.365067 13.7794 0.207031 13.3978 0.207031 13C0.207031 12.6022 0.365067 12.2206 0.646371 11.9393C0.927676 11.658 1.30921 11.5 1.70703 11.5H11.207V2C11.207 1.60218 11.3651 1.22064 11.6464 0.93934C11.9277 0.658035 12.3092 0.5 12.707 0.5C13.1049 0.5 13.4864 0.658035 13.7677 0.93934C14.049 1.22064 14.207 1.60218 14.207 2V11.5H23.707C24.1049 11.5 24.4864 11.658 24.7677 11.9393C25.049 12.2206 25.207 12.6022 25.207 13Z"
                        fill="#CA8068"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-base sm:text-lg leading-[24px] sm:leading-[26px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;