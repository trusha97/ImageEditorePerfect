import Image from 'next/image'
import React from 'react'
import { PricingBanner } from 'utils/image'

const UnblurBanner = () => {
    return (
        <>
            <div>
                <div className='bg-cover bg-center ' style={{ backgroundImage: `url(${PricingBanner.src})` }}>
                    <div className="text-center flex flex-col items-center justify-center md:pt-[100px] pt-[70px] md:pb-[205px] pb-[70px] px-[30px] ">
                        <h2 className="md:text-6xl text-3xl font-bold text-[#181D20]">
                            Pricing
                        </h2>
                        <p className="text-center mx-auto md:mt-5 mt-3 max-w-2xl text-sm md:text-base text-black/70">
                            Discover our transparent and competitive pricing plans. Choose the one
                            that fits your needs and start optimizing your images today!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnblurBanner



