import { slider1, slider2, slider3, slider4, slider5 } from "@/utils/image";
import Image from "next/image";
import React from "react";

const SliderImage = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slide-back-forth {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-100%); /* adh instead of -50% */
          }
          100% {
            transform: translateX(0);
          }
        }

        .slider-track {
          display: flex;
          gap: 1.5rem; /* same as gap-6 */
          animation: slide-back-forth 9s linear infinite; /* same speed but more travel */
        }
      `}</style>

      <div className="overflow-hidden w-full">
        <div className="slider-track">
          <Image src={slider1} alt="slider1" className="w-[390px] h-auto" />
          <Image src={slider2} alt="slider2" className="w-[390px] h-auto" />
          <Image src={slider3} alt="slider3" className="w-[390px] h-auto" />
          <Image src={slider4} alt="slider4" className="w-[390px] h-auto" />
          <Image src={slider5} alt="slider5" className="w-[390px] h-auto" />

          {/* duplicate for smooth continuous effect */}
          <Image src={slider1} alt="slider1" className="w-[390px] h-auto" />
          <Image src={slider2} alt="slider2" className="w-[390px] h-auto" />
          <Image src={slider3} alt="slider3" className="w-[390px] h-auto" />
          <Image src={slider4} alt="slider4" className="w-[390px] h-auto" />
          <Image src={slider5} alt="slider5" className="w-[390px] h-auto" />
        </div>
      </div>
    </>
  );
};

export default SliderImage;
