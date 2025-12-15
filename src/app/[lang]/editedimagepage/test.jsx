"use client";
import Image from "next/image";
import React, { useState } from "react";
import { bgsquere, editimagepage, prograssbg } from "utils/image";

export default function Page() {
  const [activeTab, setActiveTab] = useState("background");
  const [active, setActive] = useState("photo");

  const baseBtn =
    "px-5 py-2 rounded-md font-bold text-sm w-[137.33px] h-[50px] flex items-center justify-center transition-all";
  return (
    <div className="sm:mt-[96px] mt-14 bg-cover bg-center h-[895px] md:pt-[70px] pt-[30px] pb-[86px]" style={{ backgroundImage: `url(${prograssbg.src})` }}>
      <div className="">
        <div className="flex items-center">
          <div className=' flex items-center lg:mx-auto mx-0  gap-[7px] px-[15px] pt-4 '>
            <label class="relative flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" />

              <div class="w-[45px] h-[24px] bg-white rounded-full border border-[#D5C6FF]
       peer-checked:bg-[#f4edff] transition-all duration-300"></div>

              <span class="absolute left-0 top-1/2 -translate-y-1/2
        h-[20px] w-[20px] bg-[#8256FF] rounded-full
        border border-white shadow-[4px_4px_12px_rgba(0,0,0,0.25)]
        transition-all duration-300
        peer-checked:translate-x-[23px]">
              </span>
            </label>

            <span class="select-none  text-sm font-medium leading-4">Process in bulk</span>
          </div>

          <div className="md:hidden flex items-center gap-3 mt-4">
            <div className="sm:w-[60px] w-[47px] sm:h-[60px] h-[47px] rounded-xl overflow-hidden ">
              <Image src={editimagepage} className="object-cover w-full h-full" />
            </div>

            <button className="sm:w-[60px] w-[47px] sm:h-[60px] h-[47px]  border border-[#8256FF] bg-[#D5C6FF4D] rounded-xl flex items-center justify-center text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15.3658 8.78068C15.3658 8.92622 15.308 9.06581 15.2051 9.16873C15.1021 9.27164 14.9626 9.32946 14.817 9.32946H9.32922V14.8173C9.32922 14.9628 9.2714 15.1024 9.16848 15.2053C9.06557 15.3082 8.92598 15.366 8.78043 15.366C8.63489 15.366 8.4953 15.3082 8.39239 15.2053C8.28947 15.1024 8.23165 14.9628 8.23165 14.8173V9.32946H2.74385C2.5983 9.32946 2.45872 9.27164 2.3558 9.16873C2.25289 9.06581 2.19507 8.92622 2.19507 8.78068C2.19507 8.63513 2.25289 8.49555 2.3558 8.39263C2.45872 8.28972 2.5983 8.2319 2.74385 8.2319H8.23165V2.74409C8.23165 2.59855 8.28947 2.45896 8.39239 2.35605C8.4953 2.25313 8.63489 2.19531 8.78043 2.19531C8.92598 2.19531 9.06557 2.25313 9.16848 2.35605C9.2714 2.45896 9.32922 2.59855 9.32922 2.74409V8.2319H14.817C14.9626 8.2319 15.1021 8.28972 15.2051 8.39263C15.308 8.49555 15.3658 8.63513 15.3658 8.78068Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="
    w-full lg:flex block bg-white  max-w-[979px] h-[699px] rounded-[32px]    mt-[20px] mx-auto
  "
        >
          <div className="w-full">
            <div>
              <div className=" pt-6 lg:pl-6 pl-0 pb-6 pr-5 rounded-2xl">
                <div className="w-full max-w-[461px] h-[501px] bg-[#f0f0f0] rounded-2xl overflow-hidden flex items-center justify-center mx-auto">
                  <Image
                    src={editimagepage}
                    className="h-full object-cover"
                    alt=""
                  />
                </div>

                <div className="flex items-center justify-between gap-[70px] lg:border-b border-0 border-[#D8D8D8] lg:px-0 px-[15px] pb-[10px] mt-5">
                  <div className="w-[100px] h-12 bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                    <button className="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                      </svg>
                    </button>
                    <button >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                      </svg>
                    </button>
                  </div>
                  <div className=" flex items-center justify-center gap-[10px]">
                    <button className="w-[56px] h-12 bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                      </svg>
                    </button>
                    <button className="w-[56px] h-12 bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-[100px] h-12 bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                    <button className="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.20193 18.5V17H14.3789C15.4224 17 16.3205 16.6554 17.0731 15.9663C17.8256 15.2772 18.2019 14.4262 18.2019 13.4134C18.2019 12.4006 17.8256 11.5513 17.0731 10.8654C16.3205 10.1795 15.4224 9.8365 14.3789 9.8365H7.35762L10.1403 12.6192L9.08652 13.673L4.5 9.08652L9.08652 4.5L10.1403 5.55383L7.35762 8.33655H14.3789C15.8417 8.33655 17.0945 8.82468 18.1375 9.80095C19.1804 10.7772 19.7019 11.9814 19.7019 13.4134C19.7019 14.8455 19.1804 16.0512 18.1375 17.0307C17.0945 18.0102 15.8417 18.5 14.3789 18.5H7.20193Z" fill="black" />
                      </svg>
                    </button>
                    <button >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.7981 18.5V17H9.6211C8.5776 17 7.6795 16.6554 6.9269 15.9663C6.1744 15.2772 5.7981 14.4262 5.7981 13.4134C5.7981 12.4006 6.1744 11.5513 6.9269 10.8654C7.6795 10.1795 8.5776 9.8365 9.6211 9.8365H16.6424L13.8597 12.6192L14.9135 13.673L19.5 9.08652L14.9135 4.5L13.8597 5.55383L16.6424 8.33655H9.6211C8.1583 8.33655 6.9055 8.82468 5.8625 9.80095C4.8196 10.7772 4.2981 11.9814 4.2981 13.4134C4.2981 14.8455 4.8196 16.0512 5.8625 17.0307C6.9055 18.0102 8.1583 18.5 9.6211 18.5H16.7981Z" fill="#A7A7A7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="md:flex hidden items-center gap-3 mt-4">
                  <div className="w-[60px] h-[60px] rounded-xl overflow-hidden ">
                    <Image src={editimagepage} className="object-cover w-full h-full" />
                  </div>

                  <button className="w-[60px] h-[60px]  border border-[#8256FF] bg-[#D5C6FF4D] rounded-xl flex items-center justify-center text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M15.3658 8.78068C15.3658 8.92622 15.308 9.06581 15.2051 9.16873C15.1021 9.27164 14.9626 9.32946 14.817 9.32946H9.32922V14.8173C9.32922 14.9628 9.2714 15.1024 9.16848 15.2053C9.06557 15.3082 8.92598 15.366 8.78043 15.366C8.63489 15.366 8.4953 15.3082 8.39239 15.2053C8.28947 15.1024 8.23165 14.9628 8.23165 14.8173V9.32946H2.74385C2.5983 9.32946 2.45872 9.27164 2.3558 9.16873C2.25289 9.06581 2.19507 8.92622 2.19507 8.78068C2.19507 8.63513 2.25289 8.49555 2.3558 8.39263C2.45872 8.28972 2.5983 8.2319 2.74385 8.2319H8.23165V2.74409C8.23165 2.59855 8.28947 2.45896 8.39239 2.35605C8.4953 2.25313 8.63489 2.19531 8.78043 2.19531C8.92598 2.19531 9.06557 2.25313 9.16848 2.35605C9.2714 2.45896 9.32922 2.59855 9.32922 2.74409V8.2319H14.817C14.9626 8.2319 15.1021 8.28972 15.2051 8.39263C15.308 8.49555 15.3658 8.63513 15.3658 8.78068Z" fill="black" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className=" bg-white lg:border border-[#D8D8D8] border-0 rounded-[32px] ">
              <div className="w-[442px] mx-auto  flex border-b border-gray-200 mt-[30px] ">
                <button
                  onClick={() => setActiveTab("background")}
                  className={`
      font-bold leading-5 text-base w-1/2 relative flex items-center justify-center 
      ${activeTab === "background" ? "text-[#000]" : "text-[#414141] "}
    `}
                >
                  {activeTab === "background" && (
                    <span className="absolute left-0 right-0 bottom-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] h-[5px] "></span>
                  )}

                  <span className="relative z-10 mb-[7px]">Background</span>
                </button>

                <button
                  onClick={() => setActiveTab("erase")}
                  className={`
      font-bold leading-5 text-base w-1/2 relative flex items-center justify-center 
      ${activeTab === "erase" ? "text-[#000]" : "text-[#414141] "}
    `}
                >
                  {activeTab === "erase" && (
                    <span className="absolute left-0 right-0 bottom-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] h-[5px]  "></span>
                  )}

                  <span className="relative z-10 mb-[7px] ">Erase / Restore</span>
                </button>

              </div>



              <div className="bg-[#F6F3FF80] px-5 pt-5 h-[529px]" >
                <div className="flex justify-between mb-[30px] bg-[#D5C6FF66] rounded-md w-[419px] h-[50px]">
                  <button
                    onClick={() => setActive("photo")}
                    className={`${baseBtn} 
          ${active === "photo"
                        ? "bg-white border border-[#8256FF80] text-[#8256FF] shadow-sm"
                        : "text-[#414141]"
                      }
        `}
                  >
                    Photo
                  </button>

                  <button
                    onClick={() => setActive("color")}
                    className={`${baseBtn}
          ${active === "color"
                        ? "bg-white border border-[#8256FF80] text-[#8256FF] shadow-sm"
                        : "text-[#414141]"
                      }
        `}
                  >
                    Color
                  </button>

                  <button
                    onClick={() => setActive("blur")}
                    className={`${baseBtn}
          ${active === "blur"
                        ? "bg-white border border-[#8256FF80] text-[#8256FF] shadow-sm"
                        : "text-[#414141]"
                      }
        `}
                  >
                    Blur
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-3 overflow-y-auto h-[336px] pr-2 scrollbar-custom">

                  <div
                    className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgsquere.src})` }}
                  ></div>

                  <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center text-3xl bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M24 12C24 12.2652..." fill="black" />
                    </svg>
                  </div>

                  <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" fill="none" viewBox="0 0 31 22">
                      <path d="M30.201 16.9437..." fill="black" />
                    </svg>
                  </div>

                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md overflow-hidden">
                      <img
                        src={`https://picsum.photos/200?random=${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>


                <div className="flex justify-end gap-4 pt-[33px] pb-5">
                  <button className="w-[81px] h-10 border border-[#D9D9D9] text-[#414141] text-base font-bold leading-4 rounded-md">
                    Reset
                  </button>
                  <button className="w-[76px] h-10 bg-[#8256FF] text-[#FFFFFF] text-base font-bold leading-4 rounded-md">
                    Save
                  </button>
                </div>
              </div>

              <div className="my-[30px] ">
                <button className=" mx-auto w-[442px] h-12 bg-[#8256FF] text-[#FFFFFF] rounded-xl text-lg flex items-center justify-center gap-[6px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.45219 15.8401C4.98238 15.8401 5.41219 16.2699 5.41219 16.8001V18.7201C5.41219 18.9747 5.51331 19.2188 5.69338 19.3989C5.8734 19.5789 6.11757 19.6801 6.37219 19.6801H17.8922C18.1468 19.6801 18.3909 19.579 18.571 19.3989C18.7511 19.2188 18.8522 18.9747 18.8522 18.7201V16.8001C18.8522 16.2699 19.282 15.8401 19.8122 15.8401C20.3424 15.8401 20.7722 16.2699 20.7722 16.8001V18.7201C20.7722 19.4839 20.4688 20.2164 19.9286 20.7565C19.3885 21.2966 18.6559 21.6001 17.8922 21.6001H6.37219C5.60838 21.6001 4.87582 21.2967 4.3357 20.7565C3.79562 20.2164 3.49219 19.4839 3.49219 18.7201V16.8001C3.49219 16.2699 3.92199 15.8401 4.45219 15.8401Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65227 10.3613C7.02718 9.98635 7.63501 9.98635 8.00992 10.3613L12.1311 14.4824L16.2523 10.3613C16.6271 9.98635 17.235 9.98635 17.6099 10.3613C17.9849 10.7361 17.9849 11.344 17.6099 11.7189L12.8099 16.5189C12.435 16.8938 11.8271 16.8938 11.4523 16.5189L6.65227 11.7189C6.27737 11.344 6.27737 10.7361 6.65227 10.3613Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1319 3.36011C12.6621 3.36011 13.0919 3.78992 13.0919 4.32011V15.8401C13.0919 16.3703 12.6621 16.8001 12.1319 16.8001C11.6017 16.8001 11.1719 16.3703 11.1719 15.8401V4.32011C11.1719 3.78992 11.6017 3.36011 12.1319 3.36011Z" fill="white" />
                  </svg> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




