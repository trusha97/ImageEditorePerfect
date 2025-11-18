import React, { useState } from "react";
import Image from "next/image";
import { bgremoveimage, textspechimage, womanwalking1 } from "utils/image";
// import { InstantlyRemove, Remove1, Remove2, Remove3, Remove4 } from "utils/image";

const RemoveBgSection = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const BeforeAfter = ({ before, after }) => {
      const [position, setPosition] = useState(50);
  
      const handleMouseMove = (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
  
          let newPos = (x / rect.width) * 100;
          if (newPos < 0) newPos = 0;
          if (newPos > 100) newPos = 100;
  
          setPosition(newPos);
      };
  
      return (
          <div
              className="relative mx-auto w-full lg:max-w-[500px]  max-w-[368px] 
              lg:h-[550px]  h-[393px]
              overflow-hidden rounded-2xl"
              onMouseMove={handleMouseMove}
          >
              {/* AFTER Image */}
              <img
                  src={after}
                  className="absolute inset-0 w-full h-full object-cover"
              />
  
              {/* BEFORE Image */}
              <img
                  src={before}
                  className="absolute inset-0 h-full object-cover transition-all duration-75"
                  style={{ width: `${position}%` }}
              />
  
              {/* RANGE Input */}
              <input
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  onChange={(e) => setPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
  
              {/* Divider Line */}
              <div
                  className="absolute top-0 bottom-0 w-[5px] bg-white"
                  style={{ left: `${position}%`, transform: "translateX(-50%)" }}
              />
  
              {/* Knob */}
              <div
                  className="absolute top-1/2 bg-white w-[42.48px] h-[40px] 
                  flex items-center justify-center rounded-full shadow-lg 
                  border-[4px] border-[#8256FF]"
                  style={{
                      left: `${position}%`,
                      transform: "translate(-50%, -50%)",
                  }}
              >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 22 12"
                      fill="none"
                  >
                      <path
                          d="M15.3367 0.231563C15.4146 0.158161 15.507 0.0999292 15.6088 0.0601991C15.7106 0.02047 15.8197 2.13094e-05 15.9299 2.1305e-05C16.04 2.13007e-05 16.1491 0.02047 16.2509 0.0601991C16.3527 0.0999292 16.4452 0.158161 16.523 0.231563L21.5533 4.9684C21.6312 5.04172 21.6931 5.12879 21.7353 5.22464C21.7775 5.32048 21.7992 5.42321 21.7992 5.52696C21.7992 5.63071 21.7775 5.73344 21.7353 5.82928C21.6931 5.92512 21.6312 6.01219 21.5533 6.08551L16.523 10.8224C16.3657 10.9705 16.1523 11.0537 15.9299 11.0537C15.7074 11.0537 15.494 10.9705 15.3367 10.8224C15.1794 10.6742 15.091 10.4733 15.091 10.2638C15.091 10.0543 15.1794 9.85338 15.3367 9.70525L19.7749 5.52696L15.3367 1.34867C15.2588 1.27535 15.1969 1.18828 15.1547 1.09244C15.1125 0.996596 15.0908 0.893864 15.0908 0.790116C15.0908 0.686366 15.1125 0.583635 15.1547 0.487794C15.1969 0.391954 15.2588 0.304883 15.3367 0.231563ZM6.46247 9.70525L2.0243 5.52696L6.46247 1.34867C6.61978 1.20053 6.70816 0.999613 6.70816 0.790116C6.70816 0.580618 6.61978 0.3797 6.46247 0.231563C6.30515 0.0834253 6.09179 0.000202892 5.86931 0.000202901C5.64684 0.000202909 5.43347 0.0834253 5.27616 0.231563L0.245885 4.9684C0.167936 5.04173 0.106097 5.1288 0.0639066 5.22464C0.0217158 5.32048 -2.72253e-07 5.42321 -2.67237e-07 5.52696C-2.6222e-07 5.63071 0.0217158 5.73344 0.0639066 5.82928C0.106097 5.92512 0.167936 6.01219 0.245885 6.08551L5.27616 10.8224C5.43347 10.9705 5.64684 11.0537 5.86931 11.0537C6.09179 11.0537 6.30515 10.9705 6.46247 10.8224C6.61978 10.6742 6.70816 10.4733 6.70816 10.2638C6.70816 10.0543 6.61978 9.85338 6.46247 9.70525Z"
                          fill="black"
                      />
                  </svg>
              </div>
  
              {/* Labels */}
              <div className="absolute bottom-4 left-6 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow">
                  BEFORE
              </div>
              <div className="absolute bottom-4 right-6 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow">
                  AFTER
              </div>
          </div>
      );
  };


  return (
    <div className="w-full">
      <div className="md:px-20 px-5 py-[78px]   lg:flex block flex-col md:flex-row items-center justify-between max-w-[1398px] mx-auto mt-10 shadow-sm rounded-tl-[30px] rounded-tr-[30px]"
        style={{
          background: "linear-gradient(180deg, rgba(220, 234, 255, 0.5) 0%, rgba(220, 234, 255, 0) 100%)"
        }}>
        {/* Left Side Text + Upload */}
        <div className="w-[610px] flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[40px] md:text-[52px] font-bold text-[#181D20] md:mb-3 mb-[10px] text-left  md:leading-[70px] leading-[50px] max-w-[465px] ">
            Instantly Remove Background From Your Images
          </h2>

          <p className="font-medium md:text-xl text-lg  leading-[140%] text-[#2A2A33] md:mb-[34px] mb-[20px]">
            Easily remove the background from your images, just in seconds and for free.
          </p>
          <div className="mx-auto w-full max-w-[610px]  max-h-[353px] h-full p-2.5 bg-white rounded-[40px]  transition-all " style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
          >
            <div className="border-2 border-dashed border-[#8256FF] rounded-[40px]">
              <label className="cursor-pointer flex flex-col items-center">
                <div className=" text-[#545454] mb-[26px] mt-[29px] md:w-[46.88px] w-[29.76px] md:h-[46.88px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="none">
                  <path d="M46.875 23.4131C46.875 24.1582 46.5787 24.8729 46.0512 25.3998C45.5238 25.9266 44.8084 26.2227 44.0625 26.2227H26.25V44.0166C26.25 44.7617 25.9537 45.4764 25.4262 46.0033C24.8988 46.5302 24.1834 46.8262 23.4375 46.8262C22.6916 46.8262 21.9762 46.5302 21.4488 46.0033C20.9213 45.4764 20.625 44.7617 20.625 44.0166V26.2227H2.8125C2.06658 26.2227 1.35121 25.9266 0.823762 25.3998C0.296316 24.8729 0 24.1582 0 23.4131C0 22.6679 0.296316 21.9533 0.823762 21.4264C1.35121 20.8995 2.06658 20.6035 2.8125 20.6035H20.625V2.80957C20.625 2.06443 20.9213 1.3498 21.4488 0.822904C21.9762 0.296008 22.6916 0 23.4375 0C24.1834 0 24.8988 0.296008 25.4262 0.822904C25.9537 1.3498 26.25 2.06443 26.25 2.80957V20.6035H44.0625C44.8084 20.6035 45.5238 20.8995 46.0512 21.4264C46.5787 21.9533 46.875 22.6679 46.875 23.4131Z" fill="#545454" />
                </svg></div>
                <p className="text-[#545454] font-bold text-[26px] leading-10 mb-5">
                  Drag and Drop Your Image
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button className="flex items-center justify-center gap-2 bg-[#8256FF] font-bold text-2xl leading-[125%] text-white  rounded-lg hover:bg-purple-600 transition-all max-w-[410px] w-full h-[89.91px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M22.1932 11.9998C21.9129 11.9998 21.6441 12.1051 21.4459 12.2926C21.2477 12.4802 21.1364 12.7345 21.1364 12.9998V17.2128C21.1355 17.9517 20.8249 18.6601 20.2728 19.1826C19.7206 19.7051 18.9719 19.999 18.191 19.9998H5.05899C4.27809 19.999 3.52942 19.7051 2.97724 19.1826C2.42506 18.6601 2.11448 17.9517 2.11364 17.2128V12.9998C2.11364 12.7345 2.00229 12.4802 1.8041 12.2926C1.60591 12.1051 1.3371 11.9998 1.05682 11.9998C0.776533 11.9998 0.507727 12.1051 0.309535 12.2926C0.111343 12.4802 0 12.7345 0 12.9998V17.2128C0.00139879 18.4819 0.534847 19.6988 1.48329 20.5962C2.43173 21.4937 3.71769 21.9984 5.05899 21.9998H18.191C19.5323 21.9984 20.8183 21.4937 21.7667 20.5962C22.7152 19.6988 23.2486 18.4819 23.25 17.2128V12.9998C23.25 12.7345 23.1387 12.4802 22.9405 12.2926C22.7423 12.1051 22.4735 11.9998 22.1932 11.9998Z" fill="white" />
                    <path d="M6.03124 7.70679L10.5682 3.41379V15.9998C10.5682 16.265 10.6795 16.5194 10.8777 16.7069C11.0759 16.8944 11.3447 16.9998 11.625 16.9998C11.9053 16.9998 12.1741 16.8944 12.3723 16.7069C12.5704 16.5194 12.6818 16.265 12.6818 15.9998V3.41379L17.2187 7.70679C17.418 7.88894 17.685 7.98974 17.9621 7.98746C18.2392 7.98518 18.5042 7.88001 18.7002 7.6946C18.8961 7.5092 19.0073 7.25838 19.0097 6.99619C19.0121 6.73399 18.9056 6.48139 18.7131 6.29279L12.3721 0.292786C12.174 0.105315 11.9052 0 11.625 0C11.3447 0 11.076 0.105315 10.8778 0.292786L4.5369 6.29279C4.34439 6.48139 4.23787 6.73399 4.24027 6.99619C4.24268 7.25838 4.35383 7.5092 4.54977 7.6946C4.74571 7.88001 5.01078 7.98518 5.28787 7.98746C5.56496 7.98974 5.83192 7.88894 6.03124 7.70679Z" fill="white" />
                  </svg>
                  Upload Image
                </button>
              </label>
              <p className="text-lg leading-6 font-medium text-[#545454] mt-5 mb-[31px] text-center">
                You can also copy and paste{" "}
                <a href="#" className="text-[#8256FF] underline text-lg leading-6 font-bold">
                  URL
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="lg:pt-0 pt-8 rounded-[30px] w-[500px]"
        >
              <BeforeAfter before={textspechimage?.src} after={womanwalking1?.src} />
        </div>
      </div>

      {/* Stats Section */}
      <div className=" max-w-[1398px] mx-auto pt-7 pb-[27px] px-[15px] rounded-xl flex  md:flex-row justify-center lg:gap-[179px] gap-[43px] text-center"
        style={{
          background: "linear-gradient(90deg, rgba(254, 211, 201, 0.6) 0%, rgba(254, 211, 201, 0.6) 20.5%, rgba(255, 154, 188, 0.6) 86.5%, rgba(255, 142, 186, 0.6) 100%)"
        }}>
        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] leading-[60px] font-black text-[#353434] sm:mb-[3px] mb-[2px]">2M+</h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm leading-[140%]">Images Processed</p>
        </div>
        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] leading-[60px] font-black text-[#353434] sm:mb-[3px] mb-[2px]">80k</h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm leading-[140%]">Happy Users</p>
        </div>
        <div>
          <h2 className="lg:text-[50px] md:text-[35px] text-[30px] leading-[60px] font-black text-[#353434] sm:mb-[3px] mb-[2px]">10x</h2>
          <p className="text-[#2A2A33] font-medium sm:text-xl text-sm leading-[140%]">Faster Editing</p>
        </div>
      </div>


    </div>
  );
};






export default RemoveBgSection;





