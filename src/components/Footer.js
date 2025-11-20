
"use client";

import React from "react";
import Image from "next/image";
import {  logofooter } from "../utils/image";
import Paragraph from "../Typography/text/Paragraph";

const Footer = () => {
    return (
        <footer className="bg-[#1F2B3E] text-white sm:rounded-[32px] rounded-none  sm:mr-[3.125rem] mr-0 mb-[3.125rem] sm:ml-[3.125rem] ml-0">
            <div className="max-w-[1202px] mx-auto md:pt-[3.125rem] pt-[1.875rem] sm:pb-[3.125rem] pb-6 px-4">
                <div className="flex items-start lg:pr-[16.5rem] pr-[11.5rem]">
                    <Image
                        src={logofooter}
                        alt="Logo"
                        className="md:hidden block pb-5"
                    />

                    
                </div>
                <div className="md:flex block border-y border-gray-600 py-[1.875rem]">
                    <div className="flex items-start lg:pr-[16.5rem] pr-[11.5rem]">
                        <Image
                            src={logofooter}
                            alt="Logo"
                            className="md:block hidden"
                            width={224}
                            height={37}
                        />
                    </div>

                    <div className="w-[33.333%]  pt-0 ">
                        <Paragraph
                            level={2} text="Support" className="!mb-3 font-bold !text-[var(--litepurpel)]"
                        />
                        <ul className="space-y-3  text-white ">
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Sign up"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Log in"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="FAQs"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Pricing"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="APIs"
                                />
                            </a></li>
                        </ul>
                    </div>

                    <div className="w-[33.333%] md:pt-0 pt-7.5 ">
                        <Paragraph
                            level={2} text="Legal" className="!mb-3 font-bold !text-[var(--litepurpel)]"
                        />
                        <ul className="space-y-3  text-white ">
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Privacy Policy"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Terms & Condition"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Cancel Subscription"
                                />
                            </a></li>
                        </ul>
                    </div>

                    <div className="w-[33.333%] md:pt-0 pt-7.5 ">
                        <Paragraph
                            level={2} text="Tools" className="!mb-3 font-bold !text-[var(--litepurpel)]"
                        />
                        <ul className="space-y-3  text-white ">
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Background Remover"
                                />
                            </a></li>
                            <li><a href="#">
                                <Paragraph
                                    level={4} text="Unblur Images"
                                />
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-white  mt-6">
                    <Paragraph
                        level={4} text="All Rights Reserve © Imageeditor"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
