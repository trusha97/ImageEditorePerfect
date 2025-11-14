import Header from '@/Typography/header/Header'
import Paragraph from '@/Typography/text/Paragraph'
import { editingtoolbg, removebg } from '@/utils/image'
import Image from 'next/image'
import React from 'react'

const EditingTools = () => {
    return (
        <div>
            <div className="bg-cover bg-center rounded-3xl lg:mx-12.5 mx-4 sm:my-24.5 my-20 mb-0"
                style={{ backgroundImage: `url(${editingtoolbg.src})` }}>
                <div className='text-center xl:text-left'>
                    {/* <div> */}
                    <div className=" pt-20 xl:pb-25 pb-7.5 px-4">
                        <div className="2xl:mx-[211px] mx-0 xl:flex block  items-end justify-between gap-[50px] ">
                            <h2 className=" sm:text-[50px] text-3xl font-bold sm:leading-[70px] leading-10 text-[var(--doubelblack)] text-center xl:text-left">
                                Editing Tools Are <br className="hidden sm:block" />
                                Designed For <span className="text-[var(--orange)] font-bold">Every Purpose.</span>
                            </h2>

                            <Paragraph level={3} className="sm:text-lg text-base text-[var(--paragraphtitle)] max-w-[610px]  font-medium text-center xl:text-left !mx-auto" text="Our editing tools are versatile and designed for any task, offering precision
                                    and flexibility for all your editing needs."/>
                        </div>
                    </div>

                    <div className='px-4'>
                        <div className='2xl:mx-[211px] mx-0 xl:flex block items-center justify-between'>
                            <div className='xl:hidden block pb-7.5'>
                                <Image src={removebg} alt="removebg" className='mx-auto' />
                            </div>
                            <div className=''>
                                <Header className="font-bold sm:text-[40px] text-2xl  sm:leading-[50px] leading-7.5 text-[var(--doubelblack)] text-center xl:text-left" level={4} text="Background Remover" />
                                <Paragraph className="!mt-4  font-medium text-lg leading-[28px] text-[var(--doubelblack)] max-w-[430px] text-center xl:text-left !mx-auto" level={3} text="Edit your images with a comprehensive set tools and AI powered-features." />
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
