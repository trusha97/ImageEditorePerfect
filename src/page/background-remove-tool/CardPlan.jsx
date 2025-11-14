// import { plancardstar } from "@/utils/image";
import Image from "next/image";
import React from "react";

const CardPlan = () => {
  return (
    <section className="card-plan pb-[4.75rem] 2xl:px-[158px] md:my-[6.25rem] px-5 xl:flex xl:gap-12 block md:ml-[49px] ml-0 md:mr-[51px] mr-0 rounded-3xl">
      {/* Left Info Section */}
      <div className="w-full xl:max-w-[588px] flex items-center justify-center xl:justify-start pt-10">
        <div className="space-y-4 text-center xl:text-left">
          <p className="text-[var(--btnbg)] font-bold md:text-lg text-base leading-5 md:pb-4 pb-2.5">
            - Buy Plan
          </p>
          <h2 className="md:text-[50px] text-3xl md:leading-[70px] leading-10 font-bold text-[var(--doubelblack)]">
            We’ve Got A Plan <br /> That’s{" "}
            <span className="text-[var(--orange)] font-bold">Perfect For You</span>
          </h2>
          <ul className="md:mt-4 mt-[1.875rem] space-y-6 md:space-y-8">
            {[
              "There are no limitations on the number of files you want to convert.",
              "Store files worry-free. Files are fully encrypted and only you have access.",
              "Easy access to all your files from any device anywhere in the world.",
            ].map((text, idx) => (
              <li
                key={idx}
                className="flex gap-4 items-start justify-center xl:justify-start"
              >
                <span className="bg-[var(--litepurpeltwo)] p-1.5 rounded-[6px] h-10 w-10 flex items-center justify-center bgstar">
                  <Image
                    // src={plancardstar}
                    alt="plancardstar"
                    height={26.67}
                    width={26.67}
                  />
                </span>
                <p className="text-[var(--paragraphtitle)] text-left font-medium md:text-lg text-base leading-6 max-w-[400px]">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Cards Section */}
      <div className="lg:flex block gap-5 w-full xl:justify-end justify-center mt-[6.25rem] card-main">
        {/* Trial Card */}
        <div className="lg:w-[354px] gap-0 w-full bg-white shadow-lg rounded-xl sm:p-[1.875rem] p-3 relative flex flex-col lg:!h-[495px] h-full xs:h-full">
          <span className="md:w-[60%] w-[70%] text-center  absolute -top-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-base leading-5 font-bold py-2 px-2 rounded-b-lg">
            Best value - 33% OFF
          </span>
          <h3 className="text-[var(--doubelblack)] text-[26px] font-medium leading-[1.875rem] !pt-[91px] !pb-2">07 Days Trial</h3>
          <p className="text-[var(--blacktext)] font-medium text-sm leading-4 card-plan2 !mb-5">10 Credits</p>
          <p className="text-[50px] text-[var(--doubelblack)] leading-[60px] font-black !mb-5">$01.00</p>
          <p className="text-[var(--paragraphtitle)] text-base leading-[1.625rem] font-medium !mb-5">
            Try all the features. If you do not cancel after that period, you will automatically
            renew to the 200 credits plan for $800.00/month
          </p>

          {/* SAME BUTTON DESIGN */}
          <button className=" text-base font-bold leading-[1.125rem] py-[0.875rem] border border-[var(--btnbg)] text-[var(--btnbg)] px-4 rounded-lg hover:bg-purple-50 transition">
            Sign Up
          </button>
        </div>

        {/* Subscription Plan Card */}
        <div className="lg:w-[354px] w-full lg:mt-0 mt-10 bg-white shadow-lg rounded-xl sm:p-[1.875rem] p-3 flex flex-col justify-between lg:!h-[495px] h-full xs:h-full">
          {/* <div> */}
            <h3 className="text-[var(--doubelblack)] font-medium !mb-2 text-[26px] leading-[1.875rem]">Subscription Plan</h3>
            <p className="text-[var(--blacktext)] font-medium !mb-5 text-sm leading-4 card-plan3">200 Credits</p>
            <p className="text-[50px] text-[var(--doubelblack)] leading-[60px] font-black !mb-5">
              $10.00<span className="text-[var(--doubelblack)] font-medium text-2xl leading-5">/month</span>
            </p>

            <div className="flex flex-col space-y-3 mb-4">
              {[
                { credits: 200, price: "$10.00" },
                { credits: 500, price: "$15.00" },
                { credits: 1000, price: "$40.00" },
                { credits: 2000, price: "$80.00" },
                { credits: 5000, price: "$105.00" },
              ].map((plan) => (
                <label
                  key={plan.credits}
                  className="flex items-center text-[var(--paragraphtitle)] font-medium leading-5 text-base"
                >
                  <input type="radio" name="plan" className="mr-3" />
                  {plan.credits} Credits ------------
                  <span className="ml-2">{plan.price}</span>
                </label>
              ))}
            </div>
            <p className="text-[var(--btnbg)] text-lg leading-5 font-bold !mb-5 cursor-pointer hover:underline">See more</p>
          {/* </div> */}

          {/* SAME BUTTON DESIGN */}
          <button className="w-full bg-[var(--btnbg)] text-white py-3.5 rounded-lg hover:bg-purple-600 transition text-lg leading-4.5 font-bold">
            Buy Plan
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default CardPlan;
