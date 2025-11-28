"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { bgremove, choiseimgbg, downloadbgremove, Layerbg, removebgmind } from "utils/image";

const ThreeSteps = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setImage(URL.createObjectURL(file));
    };
    ;

    return (
        <div
            className='md:py-20 py-10 '
            style={{
                background: "linear-gradient(90deg, #F9FBFF -1.3%, #FFF3F0 49.35%, #F9FBFF 100%)",
            }}
        >
            <div className="max-w-[1250px] mx-auto ">
                <div className=" mx-[15px]">
                    <h2 className="md:text-[50px] text-3xl font-bold md:leading-[60px] leading-10 text-center md:pb-10 pb-5">
                        Remove your Background in{" "}
                        <span className="text-[#D64011] font-bold">three steps</span>
                    </h2>

                    <div
                        className="bg-[#E9F1FF] rounded-[20px] mb-[30px]"
                        style={{
                            backgroundImage: `url(${Layerbg.src})`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* <div className=" w-full flex flex-col md:flex-row items-center justify-start gap-10 lg:pl-[86px] pl-5 lg:pr-[86px] pr-5  pt-8 pb-8 h-[353px]"> */}
                        <div className="lg:pl-[86px] pl-5 lg:pr-[86px] pr-5 pt-8 pb-8 lg:flex block items-center justify-start gap-[139px]  ">
                            <div className="lg:w-1/2 w-full pb-7">
                                <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                    Choose your image
                                </h4>
                                <p className="text-[#2A2A33] font-medium md:text-lg text-base sm:max-w-[420px] max-w-full">
                                    Select the image you want to remove the background from. The supported formats are JPG, PNG, and WEBP.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full mb-8">
                                <div className=" w-full max-w-[468px] h-[252px] px-[22px] py-6 bg-white rounded-lg transition-all relative">
                                    <div className="border-2 border-dashed border-[#484848] rounded-lg h-full flex items-center justify-center">

                                        <label className="cursor-pointer flex flex-col items-center justify-center h-full w-full">

                                            <div className="bg-[#8256FF] p-5 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M22.7999 10.8H13.2001V1.19992C13.2001 0.537693 
                    12.6624 0 11.9999 0C11.3377 0 10.8 0.537693 10.8 1.19992V10.8H1.19992
                    C0.537693 10.8 0 11.3377 0 11.9999C0 12.6624 0.537693 13.2001 
                    1.19992 13.2001H10.8V22.7999C10.8 23.4624 11.3377 24.0001 
                    11.9999 24.0001C12.6624 24.0001 13.2001 23.4624 13.2001 
                    22.7999V13.2001H22.7999C23.4624 13.2001 24.0001 12.6624 
                    24.0001 11.9999C24.0001 11.3377 23.4624 10.8 22.7999 10.8Z" fill="white" />
                                                </svg>
                                            </div>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                            />
                                        </label>

                                    </div>
                                    <div className="absolute -bottom-10 -right-16 pointer-events-none">
                                        <Image
                                            src={choiseimgbg}
                                            alt="choose-img"
                                            className="max-w-[309px] h-[270.13px] "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex block  gap-[30px] w-full">
                    <div
                        className="bg-[#E9F1FF] rounded-[20px] md:max-w-[610px] mx-auto md:w-1/2 w-full"
                        style={{
                            backgroundImage: `url(${bgremove.src})`,
                            backgroundRepeat: "no-repeat",
                            // backgroundSize: "cover",
                        }}
                    >
                        <div className="sm:pt-8 pt-5 sm:pr-8 pr-5 sm:pb-8 pb-5 sm:pl-8 pl-5 ">
                            <div>
                                <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                    Removing Background
                                </h4>
                                <p className="text-[#2A2A33] font-medium sm:text-lg text-base">
                                    Watch how the IA does its magic. Remember that you can always edit the image or change the background.
                                </p>
                            </div>
                            <div className="  ">
                                <Image src={removebgmind} alt="removebgmind" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-[#E9F1FF] rounded-[20px]  md:max-w-[610px]  mx-auto md:w-1/2 w-full md:mt-0 mt-5"
                        style={{
                            backgroundImage: `url(${bgremove.src})`,
                            backgroundRepeat: "no-repeat",
                            // backgroundSize: "cover",
                        }}
                    >
                        <div className="sm:pt-8 pt-5 sm:pr-8 pr-5 sm:pb-8 pb-5 sm:pl-8 pl-5 ">
                            <div>
                                <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                    Download Image
                                </h4>
                                <p className="text-[#2A2A33] font-medium sm:text-lg text-base">
                                    Once you get the desired result just download the image and that's it!
                                </p>
                            </div>
                            <div className="  ">
                                <Image src={downloadbgremove} alt="removebgmind" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeSteps;
