"use client";
import Image from "next/image";
import React from "react";
import { plancardstar } from "utils/image";

const Plan = () => {
    return (
        // <div className="md:pb-[100px] pb-[50px] 2xl:px-[158px] md:mt-[6.25rem] px-5 xl:flex xl:gap-12 block md:ml-[49px] ml-0 md:mr-[51px] mr-0 rounded-3xl">
        <div className="">
            <div className="lg:flex justify-center block gap-5 w-full md:-mt-[85px] mt-0 md:mb-[100px] mb-[50px] px-[15px]">
                {/* Trial Card */}
                <div className="lg:w-[354px] gap-0 w-full bg-white shadow-lg rounded-xl p-[30px]  relative flex flex-col lg:!h-[495px] h-full xs:h-full">
                    <span className="md:w-[60%] w-[70%] text-center  absolute -top-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-base leading-5 font-bold py-2 px-2 rounded-b-lg">
                        Best value - 33% OFF
                    </span>
                    <h3 className="text-[var(--doubelblack)] text-[26px] font-medium leading-[1.875rem] !pt-[30px] !pb-2">07 Days Trial</h3>
                    <p className="text-[var(--blacktext)] font-medium text-sm leading-4 card-plan2 md:!mb-10 mb-5">10 Credits</p>
                    <p className="text-[50px] text-[var(--doubelblack)] leading-[60px] font-black !mb-5">$01.00</p>
                    <p className="text-[var(--paragraphtitle)] text-base leading-[1.625rem] font-medium md:!mb-[61px] mb-5">
                        Try all the features. If you do not cancel after that period, you will automatically
                        renew to the 200 credits plan for $800.00/month
                    </p>

                    {/* SAME BUTTON DESIGN */}
                    <button className=" text-base font-bold leading-[1.125rem] py-[0.875rem] border border-[var(--btnbg)] text-[var(--btnbg)] px-4 rounded-lg hover:bg-purple-50 transition">
                        Sign Up
                    </button>
                </div>

                {/* Subscription Plan Card */}
                <div className="lg:w-[354px] w-full lg:mt-0 mt-10 bg-white shadow-lg rounded-xl p-[30px] flex flex-col justify-between lg:!h-[495px] h-full xs:h-full">
                    {/* <div> */}
                    <h3 className="text-[var(--doubelblack)] font-medium !mb-2 text-[26px] leading-[1.875rem]">Subscription Plan</h3>
                    <p className="text-[var(--blacktext)] font-medium !mb-5 text-sm leading-4 card-plan3">200 Credits</p>
                    <p className="flex items-end text-[50px] text-[var(--doubelblack)] leading-[60px] font-black !mb-5">
                        $10.00<span className="text-[var(--doubelblack)] font-medium text-2xl  leading-5 sm:block hidden">/month</span>
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
        </div>
    );
};

export default Plan;
