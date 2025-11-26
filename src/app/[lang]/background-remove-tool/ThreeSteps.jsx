"use client";

import Image from "next/image";
import { useRef } from "react";
import { bgremove, choiseimgbg, downloadbgremove, Layerbg, removebgmind } from "utils/image";

const ThreeSteps = () => {

    const fileInputRef = useRef(null);

    const handleOpenFile = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div
                className='md:py-20 py-10'
                style={{
                    background: "linear-gradient(90deg, #F9FBFF -1.3%, #FFF3F0 49.35%, #F9FBFF 100%)",
                }}
            >
                <div className="max-w-[1250px] mx-auto">


                </div>
            </div>





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
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:pl-[86px] pl-5 pr-[86px]  py-8 h-[353px]">

                                <div className="">
                                    <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                        Choose your image
                                    </h4>
                                    <p className="text-[#2A2A33] font-medium md:text-lg text-base sm:max-w-[420px] max-w-full">
                                        Select the image you want to remove the background from. The supported formats are JPG, PNG, and WEBP.
                                    </p>
                                </div>

                                <div className="relative">

                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={(e) =>
                                            console.log("Uploaded file:", e.target.files[0])
                                        }
                                    />

                                    <div
                                        className="border-2 border-dashed border-[#B8C7FF] rounded-[20px] w-[260px] h-[160px] flex items-center justify-center bg-white cursor-pointer"
                                        onClick={handleOpenFile}
                                    >
                                        <span className="text-[#6D5CF7] text-4xl font-bold">+</span>
                                    </div>

                                    <div className="absolute -bottom-4 -right-6 pointer-events-none">
                                        <Image
                                            src={choiseimgbg}
                                            alt="choose-img"
                                            className="w-[160px] h-auto rounded-lg shadow-lg"
                                        />
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
            </div>
        </div>
    );
};

export default ThreeSteps;
