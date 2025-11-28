<div
                    className="bg-[#E9F1FF] rounded-[20px] mb-[30px] bg-cover bg-right"
                    style={{
                        backgroundImage: `url(${Layerbg.src})`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className=" lg:flex block  items-center justify-between gap-10 lg:pl-[86px] pl-5 lg:pr-[86px] pr-5 pt-8 pb-8">

                        <div className=" w-full max-w-[411px]">
                            <h4 className="lg:text-left md:text-center text-left  md:text-[40px] text-2xl font-bold md:leading-[50px] leading-[30px] text-[#181D20] mb-4">
                                Choose your image
                            </h4>
                            <p className=" text-[#2A2A33] font-medium md:text-lg text-base sm:max-w-[420px] max-w-full">
                            {/* <p className="text-[#2A2A33] font-medium md:text-lg text-base   lg:text-left md:text-center text-left mx-auto  mb-[51px]"> */}
                                Select the image you want to remove the background from. The
                                supported formats are JPG, PNG, and WEBP.
                            </p>
                        </div>

                        {/* UPLOAD BOX */}
                        <div className=" w-full max-w-[528px]  flex justify-center">
                            {/* <div className="w-full max-w-[468px] h-[252px] px-[22px] py-6   bg-white rounded-lg transition-all relative"> */}
                            <div className="w-full max-w-[468px] h-[252px] 
    px-[22px] md:px-[15px] 
    py-6 md:py-[16.36px] 
    bg-white rounded-lg transition-all relative">
                                <div className="border-2 border-dashed border-[#484848] rounded-lg h-full flex items-center justify-center ">

                                    <label className="cursor-pointer flex flex-col items-center justify-center h-full w-full">

                                        {/* ICON CENTER */}
                                        <div className="bg-[#8256FF] p-5 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M22.7999 10.8H13.2001V1.19992C13.2001 0.537693 
                                                    12.6624 0 11.9999 0C11.3377 0 10.8 0.537693 10.8 1.19992V10.8H1.19992
                                                    C0.537693 10.8 0 11.3377 0 11.9999C0 12.6624 0.537693 13.2001 
                                                    1.19992 13.2001H10.8V22.7999C10.8 23.4624 11.3377 24.0001 
                                                    11.9999 24.0001C12.6624 24.0001 13.2001 23.4624 13.2001 
                                                    22.7999V13.2001H22.7999C23.4624 13.2001 24.0001 12.6624 
                                                    24.0001 11.9999C24.0001 11.3377 23.4624 10.8 22.7999 10.8Z"
                                                    fill="white"
                                                />
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

                                {/* DECORATION IMAGE */}
                                <div className="absolute -bottom-12 -right-10 md:-bottom-10 md:-right-16 pointer-events-none mb-10">
                                    <Image
                                        src={choiseimgbg}
                                        alt="choose-img"
                                        className="w-[220px] md:w-[309px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>