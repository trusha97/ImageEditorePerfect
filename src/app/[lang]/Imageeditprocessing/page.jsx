"use client"
import Image from 'next/image'
import React from 'react'
import { ProcessingAnimation, prograssbg } from 'utils/image'

const page = () => {
  return (
    <div className=''>
      <div class="bg-cover bg-center h-[823px]" style={{ backgroundImage: `url(${prograssbg.src})` }}>
        <div className="absolute inset-0 z-40 flex items-center justify-center p-[15px] ">
              <div className="relative flex-col text-center flex items-center justify-center h-[561px] w-[520px] sm:w-[620px] md:w-[720px] lg:w-[820px] xl:w-[994px] bg-white rounded-[24px]  sm:p-10 p-5   "
              >
                {/* Close button */}
                <button
                  // onClick={onClose}
                  className="absolute right-10 top-10 text-gray-400 hover:text-gray-600 text-3xl leading-none"
                >
                  ×
                </button>
        
                {/* Icon */}
                <div className="flex justify-center mb-8 mt-6">
                  <Image
                    src={ProcessingAnimation}
                    alt="Processing"
                    width={180}
                    height={180}
                    className="animate-pulse"
                  />
                </div>
        
                {/* Text */}
                <h2 className="text-[18px] font-medium text-[#2E2E2E] mb-10">
                  Your Image is Processing...
                </h2>
        
                {/* Progress Bar */}
                <div className="relative w-[70%] h-[12px] rounded-full bg-[#EFEFEF] overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full w-[40%] animate-progress"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF89B5 0%, #946FFF 33%, #FFA486 66%, #6938FF 100%)",
                    }}
                  ></div>
                </div>
        
                <div className="absolute inset-0 rounded-[24px] p-[1.5px] pointer-events-none border border-[#EBEBEB] m-5">
                </div>
              </div>
        
              {/* Animation for progress movement */}
              <style jsx>{`
                @keyframes progressMove {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(250%);
                  }
                }
                .animate-progress {
                  animation: progressMove 2.8s linear infinite;
                }
              `}</style>
            </div>
      </div>
    </div>
  )
}

export default page
