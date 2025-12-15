"use client";
import React, { useState } from "react";
import Image from "next/image";
import { bgsquere, editimagepage, prograssbg } from "utils/image";

const Page = () => {
  const [activeTab, setActiveTab] = useState("background");
  const [active, setActive] = useState("photo");

  const baseBtn =
    "px-5 py-2 rounded-md font-bold text-sm w-[137.33px] h-[50px] flex items-center justify-center transition-all";

  return (
    <>
      <div>
        <div className="sm:mt-[96px] mt-14 bg-cover bg-center  md:pt-[70px] pt-[30px] lg:pb-[86px] sm:pb-[50px] pb-5" style={{ backgroundImage: `url(${prograssbg.src})` }}>
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

            <div className="lg:bg-white bg-transparent   max-w-[979px] lg:h-[699px] h-full mx-auto mt-[20px] rounded-[32px]">
              <div className="lg:flex block">
                <div className=" bg-white rounded-[32px] mx-5">
                  <div className="w-full">
                    <div>
                      <div className=" pt-6 lg:pl-6 pl-0 lg:pb-0 pb-6 lg:pr-5 pr-0 rounded-2xl">
                        <div className="w-full max-w-[461px] md:h-[501px] h-auto  rounded-2xl overflow-hidden flex items-center justify-center mx-auto ">
                          <Image
                            src={editimagepage}
                            className=" object-cover md:w-full w-[370px] "
                            alt=""
                          />
                        </div>

                        <div className="flex items-center justify-between md:gap-[70px] sm:gap-[50px] gap-6 lg:border-b border-0 border-[#D8D8D8] lg:px-0 px-[15px] pb-[10px] mt-5">
                          <div className="sm:w-[100px] w-[84px] sm:h-12 h-[38px] bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                            <button className="sm:w-6 w-[18px] sm:h-6 h-[18px]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                              </svg>
                            </button>
                            <button className="sm:w-6 w-[18px] sm:h-6 h-[18px]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="#A7A7A7" />
                              </svg>
                            </button>
                          </div>
                          <div className=" flex items-center justify-center gap-[10px]">
                            <button className="sm:w-[56px] w-[45px] sm:h-12 h-[38px] bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                              <svg className="sm:w-6 w-[18px] sm:h-6 h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M8.9615 20.5001H5.31228C4.81051 20.5001 4.38302 20.3231 4.02982 19.969C3.67661 19.615 3.5 19.1895 3.5 18.6924V5.30778C3.5 4.81067 3.67701 4.38511 4.03102 4.03111C4.38503 3.67709 4.81058 3.50008 5.3077 3.50008H8.9615V5.00006H5.3077C5.21795 5.00006 5.14423 5.02891 5.08653 5.08661C5.02883 5.14431 4.99997 5.21803 4.99997 5.30778V18.6924C4.99997 18.7821 5.02883 18.8558 5.08653 18.9135C5.14423 18.9712 5.21795 19.0001 5.3077 19.0001H8.9615V20.5001ZM11.25 23.0001V1.19238H12.75V23.0001H11.25ZM15.0385 20.5001V18.8847H16.6538V20.5001H15.0385ZM15.0385 5.11546V3.50008H16.6538V5.11546H15.0385ZM18.8846 20.5001V18.8847H20.5C20.5 19.3321 20.3418 19.7132 20.0254 20.0279C19.7091 20.3427 19.3288 20.5001 18.8846 20.5001ZM18.8846 16.6539V15.0386H20.5V16.6539H18.8846ZM18.8846 12.8078V11.1924H20.5V12.8078H18.8846ZM18.8846 8.96158V7.34623H20.5V8.96158H18.8846ZM18.8846 5.11546V3.50008C19.3288 3.50008 19.7091 3.65826 20.0254 3.97461C20.3418 4.29094 20.5 4.67122 20.5 5.11546H18.8846Z" fill="black" />
                              </svg>
                            </button>
                            <button className="sm:w-[56px] w-[45px] sm:h-12 h-[38px] bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                              <svg className="sm:w-6 w-[18px] sm:h-6 h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M11.25 22.5V18.113L9.958 19.39L8.904 18.337L12 15.24L15.096 18.336L14.042 19.389L12.75 18.112V22.5H11.25ZM5.663 15.096L4.61 14.042L5.886 12.75H1.5V11.25H5.886L4.61 9.958L5.663 8.904L8.76 12L5.663 15.096ZM18.337 15.096L15.24 12L18.336 8.904L19.389 9.958L18.112 11.25H22.5V12.75H18.113L19.39 14.042L18.337 15.096ZM12 13.24C11.654 13.24 11.36 13.12 11.12 12.88C10.88 12.64 10.76 12.346 10.76 12C10.76 11.654 10.88 11.36 11.12 11.12C11.36 10.88 11.654 10.76 12 10.76C12.346 10.76 12.64 10.88 12.88 11.12C13.12 11.36 13.24 11.654 13.24 12C13.24 12.346 13.12 12.64 12.88 12.88C12.64 13.12 12.346 13.24 12 13.24ZM12 8.76L8.904 5.663L9.958 4.61L11.25 5.886V1.5H12.75V5.886L14.042 4.61L15.096 5.663L12 8.76Z" fill="black" />
                              </svg>
                            </button>
                          </div>
                          <div className="sm:w-[100px] w-[84px] sm:h-12 h-[38px] bg-white border border-[#DEDEDE] rounded-xl flex items-center justify-center gap-4">
                            <button className="sm:w-6 w-[18px] sm:h-6 h-[18px]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M7.20193 18.5V17H14.3789C15.4224 17 16.3205 16.6554 17.0731 15.9663C17.8256 15.2772 18.2019 14.4262 18.2019 13.4134C18.2019 12.4006 17.8256 11.5513 17.0731 10.8654C16.3205 10.1795 15.4224 9.8365 14.3789 9.8365H7.35762L10.1403 12.6192L9.08652 13.673L4.5 9.08652L9.08652 4.5L10.1403 5.55383L7.35762 8.33655H14.3789C15.8417 8.33655 17.0945 8.82468 18.1375 9.80095C19.1804 10.7772 19.7019 11.9814 19.7019 13.4134C19.7019 14.8455 19.1804 16.0512 18.1375 17.0307C17.0945 18.0102 15.8417 18.5 14.3789 18.5H7.20193Z" fill="black" />
                              </svg>
                            </button>
                            <button className="sm:w-6 w-[18px] sm:h-6 h-[18px]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M16.7981 18.5V17H9.6211C8.5776 17 7.6795 16.6554 6.9269 15.9663C6.1744 15.2772 5.7981 14.4262 5.7981 13.4134C5.7981 12.4006 6.1744 11.5513 6.9269 10.8654C7.6795 10.1795 8.5776 9.8365 9.6211 9.8365H16.6424L13.8597 12.6192L14.9135 13.673L19.5 9.08652L14.9135 4.5L13.8597 5.55383L16.6424 8.33655H9.6211C8.1583 8.33655 6.9055 8.82468 5.8625 9.80095C4.8196 10.7772 4.2981 11.9814 4.2981 13.4134C4.2981 14.8455 4.8196 16.0512 5.8625 17.0307C6.9055 18.0102 8.1583 18.5 9.6211 18.5H16.7981Z" fill="#A7A7A7" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="md:flex hidden items-center gap-3 mt-4 lg:px-0 px-5">
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
                </div>
                <div className=" rounded-[32px] ">
                  <div className="w-full">
                    <div className=" bg-white lg:border border-[#D8D8D8] border-0 rounded-[32px] ">
                      <div className="lg:w-[442px] w-full mx-auto  flex border-b border-gray-200 mt-[30px] lg:pt-0 pt-5">
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
                        <div className="flex justify-between mb-[30px] bg-[#D5C6FF66] rounded-md lg:w-[419px] w-full h-[50px]">
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
                            className="sm:w-[75px] w-[50px] sm:h-[75px] h-[50px] border border-[#D9D9D9] rounded-md bg-cover bg-center"
                            style={{ backgroundImage: `url(${bgsquere.src})` }}
                          ></div>

                          <div className="sm:w-[75px] w-[50px] sm:h-[75px] h-[50px] border border-[#D9D9D9] rounded-md flex items-center justify-center text-3xl bg-white">
                            <svg className="sm:w-6 w-4 sm:h-6 h-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                              <path d="M24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H13V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12Z" fill="black" />
                            </svg>
                          </div>

                          <div className="sm:w-[75px] w-[50px] sm:h-[75px] h-[50px] border border-[#D9D9D9] rounded-md flex items-center justify-center bg-white">
                            <svg className="sm:w-8 w-[21.33px] sm:h-8 h-[21.33px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M31.0017 22.3038L29.1585 23.2254C28.6051 23.5004 28.1568 23.9488 27.8817 24.5022L26.9601 26.3454C26.8289 26.611 26.4513 26.611 26.3201 26.3454L25.3985 24.5022C25.1235 23.9488 24.6752 23.5004 24.1217 23.2254L22.2785 22.3038C22.0129 22.1726 22.0129 21.795 22.2785 21.6638L24.1217 20.7422C24.6752 20.4672 25.1235 20.0188 25.3985 19.4654L26.3201 17.6222C26.4513 17.3566 26.8289 17.3566 26.9601 17.6222L27.8817 19.4654C28.1568 20.0188 28.6051 20.4672 29.1585 20.7422L31.0017 21.6638C31.2673 21.795 31.2673 22.1726 31.0017 22.3038ZM21.6193 16.7457L17.3185 18.8961C16.0289 19.5425 14.9825 20.5889 14.3361 21.8785L12.1864 26.1793C11.8792 26.7937 11.0024 26.7937 10.6952 26.1793L8.54478 21.8785C7.89838 20.5889 6.85198 19.5425 5.56238 18.8961L1.26158 16.7457C0.647181 16.4385 0.647181 15.5617 1.26158 15.2545L5.56238 13.1041C6.85198 12.4577 7.89838 11.4113 8.54478 10.1217L10.6952 5.82091C11.0024 5.20651 11.8792 5.20651 12.1864 5.82091L14.3365 10.1217C14.9829 11.4113 16.0293 12.4577 17.3189 13.1041L21.6197 15.2545C22.2341 15.5617 22.2337 16.4385 21.6193 16.7457ZM22.2309 7.66731L23.1416 7.21195C23.4151 7.07603 23.6367 6.85443 23.7726 6.58091L24.228 5.67019C24.2424 5.64052 24.2649 5.61551 24.2929 5.59801C24.3209 5.58051 24.3532 5.57123 24.3862 5.57123C24.4192 5.57123 24.4516 5.58051 24.4795 5.59801C24.5075 5.61551 24.53 5.64052 24.5445 5.67019L24.9998 6.58091C25.1357 6.85443 25.3573 7.07603 25.6309 7.21195L26.5416 7.66731C26.5713 7.68175 26.5963 7.70425 26.6138 7.73223C26.6313 7.76021 26.6405 7.79255 26.6405 7.82555C26.6405 7.85855 26.6313 7.89088 26.6138 7.91886C26.5963 7.94684 26.5713 7.96934 26.5416 7.98379L25.6309 8.43915C25.3573 8.57506 25.1357 8.79666 24.9998 9.07019L24.5445 9.98091C24.5297 10.0102 24.5071 10.0348 24.4791 10.052C24.4512 10.0692 24.419 10.0783 24.3862 10.0783C24.3534 10.0783 24.3213 10.0692 24.2933 10.052C24.2654 10.0348 24.2428 10.0102 24.228 9.98091L23.7726 9.07019C23.6367 8.79666 23.4151 8.57506 23.1416 8.43915L22.2309 7.98379C22.2012 7.96934 22.1762 7.94684 22.1587 7.91886C22.1412 7.89088 22.1319 7.85855 22.1319 7.82555C22.1319 7.79255 22.1412 7.76021 22.1587 7.73223C22.1762 7.70425 22.2012 7.68175 22.2309 7.66731Z" fill="black" />
                            </svg>
                          </div>

                          {[...Array(18)].map((_, i) => (
                            <div key={i} className="sm:w-[75px] w-[50px] sm:h-[75px] h-[50px] border border-[#D9D9D9] rounded-md overflow-hidden">
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

                      <div className="lg:pt-[30px] pt-0 pb-[30px] mx-[15px] ">
                        <button className=" mx-auto lg:w-[442px] w-full h-12 bg-[#8256FF] text-[#FFFFFF] rounded-xl text-lg flex items-center justify-center gap-[6px]">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
