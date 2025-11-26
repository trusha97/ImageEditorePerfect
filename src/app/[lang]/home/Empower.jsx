"use client"
import Image from "next/image";
import Paragraph from "../../../Typography/text/Paragraph";
import { Amazon, cocacola, empowerbg, Meta, Netflix, weare, womanwalking1 } from "../../../utils/image";
import TestimonialCard from "./TestimonialCard ";


const Empower = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center rounded-[30px] lg:mx-12 mx-[15px]"
                style={{ backgroundImage: `url(${empowerbg.src})` }}
            >
                <div className="max-w-[1398px] mx-auto xl:flex block gap-5 sm:pt-20 pt-10 xl:pb-24 pb-10 px-4">
                    <div className="xl:w-[60%] w-full">
                        <div className="lg:text-[70px] sm:text-6xl text-4xl font-normal leading-snug md:mb-[86px] mb-2.5  xl:text-left sm:text-center text-left">
                            <span className="text-white">
                                Empower Your Creativity and{" "}
                            </span>
                            <span className="bg-gradient-to-r from-[#FF71A9] to-[#FFA385] bg-clip-text text-transparent font-bold">
                                Productivity With AI
                            </span>
                        </div>
                        <TestimonialCard/>
                        <div className="text-white sm:mt-6 mt-0 xl:hidden block ">
                            <Paragraph
                                level={3}
                                className="max-w-[611px] font-manrope sm:text-lg text-base tracking-normal sm:!mb-10 !mb-7.5 !mx-auto xl:mx-0 "
                                text="Boost your creativity and productivity with AI, which provides innovative tools and smart solutions to streamline your workflow. Unlock new levels of efficiency and inspiration for your projects."
                            />
                        </div>
                        <div className="xl:hidden block mb-[30px] mt-[30px]">
                            <button
                                type="button"
                                className=" xl:mx-0 sm:mx-auto mx-0  mb-7.5 px-8.5 py-3.5  h-12 w-[200px] flex items-center justify-center rounded-[var(--radius)] bg-[var(--btnbg)] gap-[6px] cursor-pointer text-[var(--white)] font-bold text-base leading-5 "
                            >
                                Let’s Get Start
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                >
                                    <path
                                        d="M13.0306 6.53074L8.53063 11.0307C8.38973 11.1716 8.19863 11.2508 7.99938 11.2508C7.80012 11.2508 7.60902 11.1716 7.46813 11.0307C7.32723 10.8898 7.24807 10.6987 7.24807 10.4995C7.24807 10.3002 7.32723 10.1091 7.46813 9.96824L10.6875 6.75011H1.5C1.30109 6.75011 1.11032 6.67109 0.96967 6.53044C0.829018 6.38979 0.75 6.19902 0.75 6.00011C0.75 5.8012 0.829018 5.61043 0.96967 5.46978C1.11032 5.32913 1.30109 5.25011 1.5 5.25011H10.6875L7.46937 2.03011C7.32848 1.88921 7.24932 1.69812 7.24932 1.49886C7.24932 1.2996 7.32848 1.10851 7.46937 0.967609C7.61027 0.826713 7.80137 0.747559 8.00062 0.747559C8.19988 0.747559 8.39098 0.826713 8.53187 0.967609L13.0319 5.46761C13.1018 5.53738 13.1573 5.62028 13.1951 5.71155C13.2329 5.80281 13.2523 5.90065 13.2522 5.99943C13.252 6.09822 13.2324 6.19601 13.1944 6.28718C13.1564 6.37836 13.1007 6.46113 13.0306 6.53074Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="xl:w-[40%] w-full">
                        <Image
                            src={womanwalking1}
                            alt="womanwalking1"
                            width={611}
                            height={420}
                            className="rounded-[22px] !mx-auto xl:mx-0"
                        />

                        <div className="text-white mt-6 xl:block hidden">
                            <Paragraph
                                level={3}
                                className="max-w-[611px] font-manrope text-lg tracking-normal !mb-10 "
                                text="Boost your creativity and productivity with AI, which provides innovative tools and smart solutions to streamline your workflow. Unlock new levels of efficiency and inspiration for your projects."
                            />
                        </div>
                        <div className="xl:block hidden">
                            <button
                                type="button"
                                className="px-8.5 py-3.5 h-12 w-[200px] flex items-center justify-center rounded-[var(--radius)] bg-[var(--btnbg)]  gap-[6px] cursor-pointer text-[var(--white)] font-bold text-base leading-5 "
                            >
                                Let’s Get Start
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                >
                                    <path
                                        d="M13.0306 6.53074L8.53063 11.0307C8.38973 11.1716 8.19863 11.2508 7.99938 11.2508C7.80012 11.2508 7.60902 11.1716 7.46813 11.0307C7.32723 10.8898 7.24807 10.6987 7.24807 10.4995C7.24807 10.3002 7.32723 10.1091 7.46813 9.96824L10.6875 6.75011H1.5C1.30109 6.75011 1.11032 6.67109 0.96967 6.53044C0.829018 6.38979 0.75 6.19902 0.75 6.00011C0.75 5.8012 0.829018 5.61043 0.96967 5.46978C1.11032 5.32913 1.30109 5.25011 1.5 5.25011H10.6875L7.46937 2.03011C7.32848 1.88921 7.24932 1.69812 7.24932 1.49886C7.24932 1.2996 7.32848 1.10851 7.46937 0.967609C7.61027 0.826713 7.80137 0.747559 8.00062 0.747559C8.19988 0.747559 8.39098 0.826713 8.53187 0.967609L13.0319 5.46761C13.1018 5.53738 13.1573 5.62028 13.1951 5.71155C13.2329 5.80281 13.2523 5.90065 13.2522 5.99943C13.252 6.09822 13.2324 6.19601 13.1944 6.28718C13.1564 6.37836 13.1007 6.46113 13.0306 6.53074Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" xl:flex items-center block trusted-by py-6 lg:px-48 sm:px-9 px-[15px] !pt-0 ">
                    <div className="flex items-center  xl:w-[40%] w-full ">
                        <Image className="mr-5.5 xl:block hidden" src={weare} alt="weare" />
                        <Paragraph
                            className="text-white font-bold sm:text-[30px] text-base leading-[40px] !mb-1 !mx-auto xl:mx-0  "
                            level={4} 
                            text={"We are Trusted by"}
                        />
                    </div>
                    <span className="block border-t border-white opacity-50 max-w-[400px] mx-auto mb-2.5 "></span>

                    <div className="overflow-hidden w-full ">
                        <div className="animate-scroll md:gap-16 sm:gap-10 gap-5">
                            <Image src={Amazon} alt="Amazon logo" className="titlelogo" />
                            <Image src={cocacola} alt="CocaCola logo" className="titlelogo" />
                            <Image src={Meta} alt="Meta logo" className="titlelogo" />
                            <Image src={Netflix} alt="Netflix logo" className="titlelogo" />
                            <Image src={Amazon} alt="Amazon logo" className="titlelogo" />
                            <Image src={cocacola} alt="CocaCola logo" className="titlelogo" />
                            <Image src={Meta} alt="Meta logo" className="titlelogo" />
                            <Image src={Netflix} alt="Netflix logo" className="titlelogo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empower;
