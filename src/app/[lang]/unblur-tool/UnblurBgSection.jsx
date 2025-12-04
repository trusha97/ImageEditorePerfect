"use client";
import React, { useState } from "react";
import ImageEditProcessingModal from "../../../components/common/ImageEditProcessingModal";
import PasteImageURLModal from "../../../components/common/PasteImageURLModal";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';

// Import all demo images
import {
  InstantlyRemove,
  textspechimage,
  womanwalking1,
} from "utils/image";

const UnblurBgSection = () => {
  // -------------------------------
  // DEMO BEFORE/AFTER IMAGES
  // -------------------------------
  const demoImages = [
    { before: textspechimage?.src, after: womanwalking1?.src },
    { before: womanwalking1?.src, after: InstantlyRemove?.src },
    { before: InstantlyRemove?.src, after: textspechimage?.src },
    { before: textspechimage?.src, after: InstantlyRemove?.src },
  ];

  const [selected, setSelected] = useState(demoImages[0]);
  const [image, setImage] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPasteOpen, setIsPasteOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const currentLang = (pathname && pathname.split("/").filter(Boolean)[0]) || ""; // e.g. 'de'

  // -------------------------------
  // IMAGE UPLOAD
  // -------------------------------
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  // -------------------------------
  // BEFORE–AFTER COMPONENT
  // -------------------------------
  const BeforeAfter = ({ before, after }) => {
    const [position, setPosition] = useState(50);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;

      let newPos = (x / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, newPos)));
    };

    return (
      <div
        className="
          relative w-full
          lg:max-w-[564px] max-w-full md:h-[550px] h-[380.62px]
          rounded-2xl overflow-hidden
        "
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
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${position}%` }}
        />

        {/* Hidden Range Input */}
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
          className="absolute top-0 bottom-0 w-[4px] bg-white"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Knob */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            bg-white w-[42px] h-[42px] rounded-full shadow-lg
            border-[4px] border-[#8256FF]
            flex items-center justify-center
          "
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <span className="text-black font-bold text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M20.252 8.83766C20.3403 8.74923 20.4452 8.67908 20.5607 8.63122C20.6762 8.58335 20.7999 8.55872 20.9249 8.55872C21.0499 8.55872 21.1737 8.58335 21.2891 8.63122C21.4046 8.67908 21.5095 8.74923 21.5978 8.83766L27.3043 14.5442C27.3928 14.6325 27.4629 14.7374 27.5108 14.8529C27.5586 14.9683 27.5833 15.0921 27.5833 15.2171C27.5833 15.3421 27.5586 15.4658 27.5108 15.5813C27.4629 15.6967 27.3928 15.8016 27.3043 15.89L21.5978 21.5965C21.4193 21.775 21.1773 21.8752 20.9249 21.8752C20.6725 21.8752 20.4305 21.775 20.252 21.5965C20.0736 21.418 19.9733 21.176 19.9733 20.9236C19.9733 20.6712 20.0736 20.4292 20.252 20.2507L25.2868 15.2171L20.252 10.1834C20.1636 10.0951 20.0934 9.99022 20.0456 9.87476C19.9977 9.7593 19.9731 9.63554 19.9731 9.51055C19.9731 9.38557 19.9977 9.2618 20.0456 9.14634C20.0934 9.03088 20.1636 8.92599 20.252 8.83766ZM10.1848 20.2507L5.14995 15.2171L10.1848 10.1834C10.3632 10.005 10.4635 9.76294 10.4635 9.51055C10.4635 9.25817 10.3632 9.01612 10.1848 8.83766C10.0063 8.6592 9.76426 8.55894 9.51187 8.55894C9.25949 8.55894 9.01744 8.6592 8.83898 8.83766L3.13246 14.5442C3.04403 14.6325 2.97388 14.7374 2.92601 14.8529C2.87815 14.9683 2.85352 15.0921 2.85352 15.2171C2.85352 15.3421 2.87815 15.4658 2.92601 15.5813C2.97388 15.6967 3.04403 15.8016 3.13246 15.89L8.83898 21.5965C9.01744 21.775 9.25949 21.8752 9.51187 21.8752C9.76426 21.8752 10.0063 21.775 10.1848 21.5965C10.3632 21.418 10.4635 21.176 10.4635 20.9236C10.4635 20.6712 10.3632 20.4292 10.1848 20.2507Z" fill="black" />
          </svg></span>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-6 text-white font-bold shadow-lg">
          BEFORE
        </div>
        <div className="absolute bottom-4 right-6 text-white font-bold shadow-lg">
          AFTER
        </div>
      </div>
    );
  };

  // -------------------------------
  // MAIN RETURN
  // -------------------------------
  return (
    <div>
      <div className="w-full   max-w-[1510px] mx-auto">
        <div
          className="xl:flex block flex-col md:flex-row items-center justify-between
          mx-[15px] xs:mx-[0]
          shadow-sm rounded-tl-[30px] rounded-tr-[30px] 2xl:px-[130px] px-[15px] xs:px-[20px] md:pt-[70px] pt-[30px] md:pb-[70px] pb-5
        "
          style={{
            background:
              "linear-gradient(180deg, rgba(220, 234, 255, 0.5) 0%, rgba(220, 234, 255, 0) 100%)",
          }}
        >
          {/* LEFT SIDE */}
          <div className="w-full xl:max-w-[610px] max-w-full flex flex-col items-center md:items-start text-left">
            <h2 className="md:text-[60px] text-[40px]  xs:text-[32px] font-bold text-[#181D20]  md:leading-[70px] leading-[50px] xs:leading-[40px]  mb-[10px] md:mb-[15px]">
              Instantly Unblur Your Images 
            </h2>
            {/* class="text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#181D20] text-center leading-tight mb-4" */}

            <p className="font-medium md:text-xl text-lg leading-[140%] text-[#2A2A33] mb-[20px] md:mb-[32px]">
              Transform blurred photos into sharp, clear images with Image Editor's intuitive tools for precise adjustments.
            </p>

            {/* Upload Box */}
            <div
              className="
              mx-auto w-full max-w-[610px] h-[353px] h-full md:p-2.5 p-[6px]
              bg-white rounded-[40px] transition-all
            "
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <div className="border-2 border-dashed border-[#8256FF] rounded-[40px]">
                <label className="cursor-pointer flex flex-col items-center">
                  {/* Upload Icon */}
                  <div className="text-[#545454] md:mb-[26.56px] mb-[10px] md:mt-[30px] mt-6 sm:w-[46.88px] w-[23.25px] sm:h-[46.88px] h-[23.44px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 47 47"
                      fill="none"
                    >
                      <path
                        d="M46.875 23.4131C46.875 24.1582 46.5787 24.8729 46.0512 25.3998C45.5238 25.9266 44.8084 26.2227 44.0625 26.2227H26.25V44.0166C26.25 44.7617 25.9537 45.4764 25.4262 46.0033C24.8988 46.5302 24.1834 46.8262 23.4375 46.8262C22.6916 46.8262 21.9762 46.5302 21.4488 46.0033C20.9213 45.4764 20.625 44.7617 20.625 44.0166V26.2227H2.8125C2.06658 26.2227 1.35121 25.9266 0.823762 25.3998C0.296316 24.8729 0 24.1582 0 23.4131C0 22.6679 0.296316 21.9533 0.823762 21.4264C1.35121 20.8995 2.06658 20.6035 2.8125 20.6035H20.625V2.80957C20.625 2.06443 20.9213 1.3498 21.4488 0.822904C21.9762 0.296008 22.6916 0 23.4375 0C24.1834 0 24.8988 0.296008 25.4262 0.822904C25.9537 1.3498 26.25 2.06443 26.25 2.80957V20.6035H44.0625C44.8084 20.6035 45.5238 20.8995 46.0512 21.4264C46.5787 21.9533 46.875 22.6679 46.875 23.4131Z"
                        fill="#545454"
                      />
                    </svg>
                  </div>

                  <p className="text-[#545454] font-bold md:text-[26px] text-base md:mb-5 mb-[10px]">
                    Drag and Drop Your Image
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Upload Button */}
                  <button
                    className="bg-[#8256FF] font-bold md:text-2xl text-xl xs:text-[15px] text-white rounded-lg hover:bg-purple-600 transition-all w-full md:max-w-[410px] max-w-[276.76px] xs:max-w-[200px] md:h-[90px] h-[54px] flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate to the image processing page with noFooter flag
                      const langSegment = currentLang ? `/${currentLang}` : "";
                      router.push(`${langSegment}/Imageeditprocessing?=1`);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                      <path d="M23.2498 12.4624C22.9695 12.4624 22.7007 12.5634 22.5025 12.7432C22.3043 12.923 22.193 13.1668 22.193 13.4211V17.4599C22.1922 18.1682 21.8816 18.8474 21.3294 19.3483C20.7772 19.8492 20.0285 20.1309 19.2477 20.1317H6.11563C5.33473 20.1309 4.58606 19.8492 4.03388 19.3483C3.4817 18.8474 3.17112 18.1682 3.17028 17.4599V13.4211C3.17028 13.1668 3.05893 12.923 2.86074 12.7432C2.66255 12.5634 2.39374 12.4624 2.11346 12.4624C1.83317 12.4624 1.56437 12.5634 1.36618 12.7432C1.16798 12.923 1.05664 13.1668 1.05664 13.4211V17.4599C1.05804 18.6766 1.59149 19.8431 2.53993 20.7035C3.48837 21.5638 4.77433 22.0477 6.11563 22.049H19.2477C20.5889 22.0477 21.8749 21.5638 22.8234 20.7035C23.7718 19.8431 24.3052 18.6766 24.3066 17.4599V13.4211C24.3066 13.1668 24.1953 12.923 23.9971 12.7432C23.7989 12.5634 23.5301 12.4624 23.2498 12.4624Z" fill="white" />
                      <path d="M7.08788 8.3469L11.6248 4.23139V16.297C11.6248 16.5513 11.7361 16.7951 11.9343 16.9749C12.1325 17.1547 12.4013 17.2557 12.6816 17.2557C12.9619 17.2557 13.2307 17.1547 13.4289 16.9749C13.6271 16.7951 13.7384 16.5513 13.7384 16.297V4.23139L18.2754 8.3469C18.4747 8.52153 18.7416 8.61815 19.0187 8.61597C19.2958 8.61379 19.5609 8.51296 19.7568 8.33522C19.9528 8.15748 20.0639 7.91704 20.0663 7.66568C20.0687 7.41432 19.9622 7.17216 19.7697 6.99136L13.4288 1.23942C13.2306 1.0597 12.9618 0.95874 12.6816 0.95874C12.4014 0.95874 12.1326 1.0597 11.9344 1.23942L5.59354 6.99136C5.40103 7.17216 5.29451 7.41432 5.29691 7.66568C5.29932 7.91704 5.41047 8.15748 5.60641 8.33522C5.80235 8.51296 6.06742 8.61379 6.34451 8.61597C6.6216 8.61815 6.88856 8.52153 7.08788 8.3469Z" fill="white" />
                    </svg>
                    Upload Image
                  </button>
                </label>

                <p className="md:text-lg text-base font-medium text-[#545454] md:mt-5 mt-[17px] md:mb-[30px] mb-[22px] text-center">
                  You can also copy and paste{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasteOpen(true);
                    }}
                    className="text-[#8256FF] underline font-bold md:text-lg text-base"
                  >
                    URL
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – BEFORE AFTER + THUMBNAILS */}
          <div className="xl:mt-0 mt-8 w-full max-w-[564px] xl:mx-0 mx-auto  ">

            {/* 🔥 Before / After Component */}
            <BeforeAfter before={selected.before} after={selected.after} />

            {/* 🔥 Demo Thumbnails */}
            <div>
              <p className="text-[#2A2A33] mt-[18px] mb-[15px] text-center font-medium md:text-xl text-base leading-[140%]"> Pick one of this for Demo :</p>
              <div className="flex justify-center gap-4 mt-4 overflow-x-auto pb-2">
                {demoImages.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelected(item)}
                    className={`w-[60px] h-[59.94px]  rounded-xl overflow-hidden cursor-pointer border-2 ${selected.before === item.before
                      ? "border-[#8256FF]"
                      : "border-transparent"
                      }`}
                  >
                    <img
                      src={item.after}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div
          className="
          max-w-[1510px] mx-auto pt-7 pb-[27px] px-[15px]
          2xl:rounded-xl rounded-[0] flex md:flex-row justify-center
          lg:gap-[179px] gap-[43px] xs:gap-[20px] text-center
        "
          style={{
            background:
              "linear-gradient(90deg, rgba(254, 211, 201, 0.6) 0%, rgba(254, 211, 201, 0.6) 20.5%, rgba(255, 154, 188, 0.6) 86.5%, rgba(255, 142, 186, 0.6) 100%)",
          }}
        >
          <div>
            <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
              2M+
            </h2>
            <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
              Images Processed
            </p>
          </div>

          <div>
            <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
              80k
            </h2>
            <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
              Happy Users
            </p>
          </div>

          <div>
            <h2 className="lg:text-[50px] md:text-[35px] text-[30px] font-black text-[#353434]">
              10x
            </h2>
            <p className="text-[#2A2A33] font-medium sm:text-xl text-sm">
              Faster Editing
            </p>
          </div>
        </div>
      </div>
    <PasteImageURLModal isOpen={isPasteOpen} onClose={() => setIsPasteOpen(false)} />
    </div>
  );
};

export default UnblurBgSection;
