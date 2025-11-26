"use client"

import React from 'react'
import { editingtoolbg, removebg } from '../../../utils/image'
import Paragraph from '../../../Typography/text/Paragraph'
import Image from 'next/image'

const EditingTools = () => {
    return (
        <div>
            <div className="bg-cover bg-center rounded-3xl lg:ml-[49px] ml-[15px] lg:mr-[51px] mr-[15px] lg:mt-[100px] mt-[50px]"
                style={{ backgroundImage: `url(${editingtoolbg.src})` }}>
                <div className='text-center xl:text-left md:pt-20 pt-10 xl:pb-20 pb-[30px] px-4'>
                    {/* <div> */}
                    {/* <div className="sm:pt-20 pt-10 xl:pb-25 pb-7.5 px-4"> */}
                    <div className="">
                        <div className="2xl:mx-[211px] mx-0 xl:flex block  items-end justify-between gap-[50px] ">
                            <h2 className=" sm:text-[50px] text-3xl font-bold sm:leading-[70px] leading-10 text-[var(--doubelblack)] text-center xl:text-left">
                                Editing Tools Are <br className="hidden sm:block" />
                                Designed For <span className="text-[var(--orange)] font-bold">Every Purpose.</span>
                            </h2>

                            <Paragraph level={3} className="sm:text-lg text-base text-[var(--paragraphtitle)] max-w-[610px]  font-medium text-center xl:text-left !mx-auto mt-2" text="Our editing tools are versatile and designed for any task, offering precision
                                    and flexibility for all your editing needs."/>
                        </div>
                    </div>

                    <div className='md:pt-[100px] pt-[30px]'>
                        <div className='2xl:mx-[211px] mx-0 xl:flex block items-center justify-between'>
                            <div className='xl:hidden block pb-7.5'>
                                <Image src={removebg} alt="removebg" className='mx-auto' />
                            </div>
                            <div className='pt-[30px]'>
                                <Paragraph className="font-bold sm:text-[40px] text-2xl  sm:leading-[50px] leading-7.5 text-[var(--doubelblack)] text-center xl:text-left" level={4} text="Background Remover" />
                                <Paragraph className="sm:!mt-4 !mt-[10px] font-medium sm:text-lg text-base leading-[28px] text-[var(--doubelblack)] max-w-[430px] text-center xl:text-left !mx-auto" level={3} text="Edit your images with a comprehensive set tools and AI powered-features." />
                                <button
                                    type="button"
                                    // disabled
                                    className="sm:mt-11 mt-8 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                                >
                                    Try Now
                                </button>
                            </div>
                            <div className='hidden xl:block'>
                                <Image src={removebg} alt="removebg" />
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default EditingTools
