import Image from 'next/image'
import React from 'react'
import { bgremove, choiseimagesright, downloadbgremove, Layerbg, removebgmind } from 'utils/image'

const ThreeSteps = () => {
    return (
        <>
            <div>
                <div className='md:py-20 py-10 md:mt-[100px] mt-[50px]'
                    style={{
                        background: "linear-gradient(90deg, #F9FBFF -1.3%, #FFF3F0 49.35%, #F9FBFF 100%)",
                    }}>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className='mx-[15px]'>
                            <h2 className="md:text-[50px] text-3xl font-bold md:leading-[60px] leading-10 text-center md:pb-10 pb-5">
                                Remove your Background in{" "}
                                <span className="text-[#D64011] font-bold">three steps</span>
                            </h2>

                            <div>
                                <div
                                    className="bg-[#E9F1FF] rounded-[20px] mb-[30px] lg:pl-[86px] pl-5 lg:pr-[86px]  pr-5"
                                    style={{
                                        backgroundImage: `url(${Layerbg.src})`,
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    {/* <div className=" w-full flex flex-col md:flex-row items-center justify-start gap-10 lg:pl-[86px] pl-5 lg:pr-[86px] pr-5  pt-8 pb-8 h-[353px]"> */}
                                    <div className=" pt-8  md:flex block items-center justify-between lg:gap-[139px] gap-[50px]  ">
                                        <div className=" pb-7">
                                            <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                                Choose your image
                                            </h4>
                                            <p className="text-[#2A2A33] font-medium md:text-lg text-base sm:max-w-[420px] max-w-full">
                                                Select the image you want to remove the background from. The supported formats are JPG, PNG, and WEBP.
                                            </p>
                                        </div>
                                        <div className="lg:pb-0 pb-8 mb-8">
                                            <Image src={choiseimagesright} alt="removebgmind" />
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
            </div>
        </>
    )
}

export default ThreeSteps

