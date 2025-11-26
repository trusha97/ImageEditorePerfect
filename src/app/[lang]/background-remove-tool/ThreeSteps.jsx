"use client";

import { useRef } from "react";

const ThreeSteps = () => {

    const fileInputRef = useRef(null);

    const handleOpenFile = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            {/* <div
                className='md:py-20 py-10'
                style={{
                    background: "linear-gradient(90deg, #F9FBFF -1.3%, #FFF3F0 49.35%, #F9FBFF 100%)",
                }}
            >
                <div className="max-w-[1250px] mx-auto">
                    <h2 className="md:text-[50px] text-3xl font-bold md:leading-[60px] leading-10 text-center md:pb-10 pb-5">
                        Remove your Background in{" "}
                        <span className="text-[#D64011] font-bold">three steps</span>
                    </h2>

                    <div
                        className="bg-[#E9F1FF] rounded-[20px]"
                        style={{
                            backgroundImage: `url(${Layerbg.src})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-[86px] py-8 h-[353px]">

                            <div className="max-w-[420px]">
                                <h4 className="md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                    Choose your image
                                </h4>
                                <p className="text-[#2A2A33] font-medium md:text-lg text-base">
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
                                        src={Chooseyourimage}
                                        alt="choose-img"
                                        className="w-[160px] h-auto rounded-lg shadow-lg"
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div> */}





            <div>
                
            </div>
        </div>
    );
};

export default ThreeSteps;
