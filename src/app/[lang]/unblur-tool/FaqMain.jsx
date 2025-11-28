"use client";

// import { faqframe } from "@/utils/image";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "Is Image Editor free to use, and what features are available?",
    answer: "You can test the background removal tool for free on the homepage. To access all features of Image Editor and download high-resolution images, you can subscribe to a 7-day trial for just $1.50.",
  },
  {
    question: "Do all subscription plans include the same tools?",
    answer: "Yes, every plan includes core features like background removal, AI-generated images, and high-resolution downloads. The key difference between plans is the number of credits you receive each month.",
  },
  {
    question: "What if I don't use all of my credits for the month?",
    answer: "Unused credits do not roll over to the next billing cycle. Credits reset monthly, and any credits from the previous cycle will expire. There is no option to accumulate unused credits.",
  },
  {
    question: "What can I do if I run out of credits?",
    answer: "If you run out of credits, you can still use the background removal tool, but you won’t be able to download high-resolution images, use AI-generated backgrounds, or upload images in bulk. You can either upgrade your plan or wait for the renewal to get more credits.",
  },
  {
    question: "Can I get a refund for unused credits?",
    answer: "No, unused credits are non-refundable. However, you can continue to use your remaining credits until they are depleted, even after canceling your subscription.",
  },
  {
    question: "Can I cancel my subscription whenever I want?",
    answer: "Yes, you can cancel your subscription at any time. After canceling, you can still use the remaining credits you purchased until they are used up.",
  },
  {
    question: "What happens after the trial period ends?",
    answer: "If you do not cancel the subscription within the 7-day trial period, you will be automatically enrolled in the basic plan, and a monthly fee will be charged.",
  },
];

const FaqMain = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-[15px] ">
      <div className="max-w-[1250px] mx-auto w-full md:mb-[100px] mb-[50px] ">
        {/* Right FAQ Accordion */}
        {/* <div className=" mx-auto"> */}
        <h2 className="text-[32px] md:text-[42px] lg:text-[50px] text-[#181D20] font-bold md:leading-[60px] leading-10 text-center md:mb-[60px] mb-10">
          {/* text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#181D20] text-center leading-tight mb-4 */}
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg md:mb-[15px] mb-4  transition-all bg-[#D5C6FF1A] border border-[#8256FF] w-full md:pt-6 pt-[14px] md:pr-[30px] pr-3 md:pl-[30px] pl-3` }
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="md:mb-6 mb-[14px]  flex justify-between items-center w-full md:text-xl text-base xs:text-sm leading-7 text-left font-bold text-[var(--doubelblack)]"
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className="md:w-[18.75px] w-[15.62px] md:h-[18.75px] h-[15.62px]">
                      <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="#8256FF" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 19 19" fill="none" className="md:w-[18.75px] w-[15.62px] md:h-[18.75px] h-[15.62px]">
                      <path d="M18.75 9.375C18.75 9.67337 18.6315 9.95952 18.4205 10.1705C18.2095 10.3815 17.9234 10.5 17.625 10.5H10.5V17.625C10.5 17.9234 10.3815 18.2095 10.1705 18.4205C9.95952 18.6315 9.67337 18.75 9.375 18.75C9.07663 18.75 8.79048 18.6315 8.5795 18.4205C8.36853 18.2095 8.25 17.9234 8.25 17.625V10.5H1.125C0.826631 10.5 0.540483 10.3815 0.329505 10.1705C0.118526 9.95952 0 9.67337 0 9.375C0 9.07663 0.118526 8.79048 0.329505 8.5795C0.540483 8.36853 0.826631 8.25 1.125 8.25H8.25V1.125C8.25 0.826631 8.36853 0.540483 8.5795 0.329505C8.79048 0.118526 9.07663 0 9.375 0C9.67337 0 9.95952 0.118526 10.1705 0.329505C10.3815 0.540483 10.5 0.826631 10.5 1.125V8.25H17.625C17.9234 8.25 18.2095 8.36853 18.4205 8.5795C18.6315 8.79048 18.75 9.07663 18.75 9.375Z" fill="#8256FF" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className=" text-[#3C3C3C] md:text-base text-sm sm:leading-[24px] leading-[20px]  md:pb-4 pb-3 ">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default FaqMain;