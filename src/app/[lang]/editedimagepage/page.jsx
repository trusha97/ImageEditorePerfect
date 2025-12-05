// import Image from 'next/image'
// import React from 'react'
// import { ProcessingAnimation, prograssbg } from 'utils/image'

// const page = () => {
//   return (
//     <div>
//       <div className="sm:mt-[96px] mt-14 bg-cover bg-center h-[823px]" style={{ backgroundImage: `url(${prograssbg.src})` }}>
//         <div className="absolute inset-0 z-40 flex items-center justify-center  ">
//           <div className=' flex items-center gap-[7px]'>
//             {/* Top Switch */}
//             <label class="relative flex items-center cursor-pointer">
//               <input type="checkbox" class="sr-only peer" />

//               <div class="w-[45px] h-[24px] bg-white rounded-full border border-[#D5C6FF]
//        peer-checked:bg-[#f4edff] transition-all duration-300"></div>

//               <span class="absolute left-0 top-1/2 -translate-y-1/2
//         h-[20px] w-[20px] bg-[#8256FF] rounded-full
//         border border-white shadow-[4px_4px_12px_rgba(0,0,0,0.25)]
//         transition-all duration-300
//         peer-checked:translate-x-[23px]">
//               </span>
//             </label>

//             <span class="select-none  text-sm font-medium leading-4">Checked toggle</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default page



// import Image from 'next/image'
// import React from 'react'
// import { ProcessingAnimation, prograssbg } from 'utils/image'

// const page = () => {
//   return (
//     <div>
//       <div className="sm:mt-[96px] mt-14 bg-cover bg-center h-[823px] pt-[70px] pb-[86px]" style={{ backgroundImage: `url(${prograssbg.src})` }}>
//         <div className="">
//           {/* Top Switch */}
//           <div className=' flex items-center justify-center gap-[7px]'>
//             <label class="relative flex items-center cursor-pointer">
//               <input type="checkbox" class="sr-only peer" />

//               <div class="w-[45px] h-[24px] bg-white rounded-full border border-[#D5C6FF]
//        peer-checked:bg-[#f4edff] transition-all duration-300"></div>

//               <span class="absolute left-0 top-1/2 -translate-y-1/2
//         h-[20px] w-[20px] bg-[#8256FF] rounded-full
//         border border-white shadow-[4px_4px_12px_rgba(0,0,0,0.25)]
//         transition-all duration-300
//         peer-checked:translate-x-[23px]">
//               </span>
//             </label>

//             <span class="select-none  text-sm font-medium leading-4">Checked toggle</span>
//           </div>

//           <div>

//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default page



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
    <div className="sm:mt-[96px] mt-14 bg-cover bg-center h-[895px] pt-[70px] pb-[86px]" style={{ backgroundImage: `url(${prograssbg.src})` }}>
      <div className="">
        {/* Top Switch */}
        <div className=' flex items-center justify-center gap-[7px]'>
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

          <span class="select-none  text-sm font-medium leading-4">Checked toggle</span>
        </div>

        {/* <div> */}

        <div className="bg-white w-full max-w-[979px] h-[699px] rounded-[32px]   flex gap-6 mt-[20px] mx-auto">
          <div className="w-[50%] pt-6 pl-6 pb-6 rounded-2xl">
            <div className="w-full max-w-[461px] h-[501px] bg-[#f0f0f0] rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={editimagepage}
                className="h-full object-cover"
                alt=""
              />
            </div>

            <div className="flex items-center justify-between gap-[70px] border-b border-[#D8D8D8] pb-[10px] mt-5">
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

            <div className="flex items-center gap-3 mt-4">
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


          {/* <div className="w-[50%] bg-white border border-[#D8D8D8] rounded-[32px] p-6 flex flex-col">

            <div className="flex justify-around  border-b border-gray-200 mb-5">
              <button className="text-purple-600 font-semibold pb-3 border-b-2 border-purple-500 px-4">
                Background
              </button>
              <button className="pb-3 px-4 text-gray-500">Erase / Restore</button>
            </div>
            
            <div className="grid grid-cols-4 gap-3 overflow-y-auto h-[380px] pr-2">

              <div className="w-full h-[80px] border rounded-xl bg-[url('/checker.png')] bg-cover"></div>

              <div className="w-full h-[80px] border rounded-xl flex items-center justify-center text-2xl bg-white">
                +
              </div>

              <div className="w-full h-[80px] border rounded-xl flex items-center justify-center bg-white">
                <span className="text-xl">✦</span>
              </div>

              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-[80px] rounded-xl overflow-hidden bg-gray-200"
                >
                  <img
                    src={`https://picsum.photos/200?random=${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>

            <div className="flex justify-between mt-5">
              <button className="px-5 py-2 border border-gray-300 rounded-lg">
                Reset
              </button>
              <button className="px-5 py-2 bg-purple-600 text-white rounded-lg">
                Save
              </button>
            </div>

            <div className="mt-6">
              <button className="w-full py-4 bg-purple-600 text-white rounded-xl text-lg">
                ⬇ Download
              </button>
            </div>
          </div> */}

          <div className="w-[50%] bg-white border border-[#D8D8D8] rounded-[32px] ">

            {/* Top Tabs */}
            {/* <div className="w-full flex border-b border-gray-200 mb-5 ">
              <button
                onClick={() => setActiveTab("background")}
                className={`
      pb-[10px] font-bold text-base w-1/2 relative
      ${activeTab === "background" ? "text-[#000000]" : "text-[#414141]"}
    `}
              >
                {activeTab === "background" && (
                  <span className="absolute inset-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] top-8 h-[5px]"></span>
                )}
                <span className="relative ">Background</span>
              </button>

              <button
                onClick={() => setActiveTab("erase")}
                className={`
      pb-[10px] font-bold text-base w-1/2 relative
      ${activeTab === "erase" ? "text-[#000000]" : "text-[#414141]"}
    `}
              >
                {activeTab === "erase" && (
                  <span className="absolute inset-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] top-8 h-[5px]"></span>
                )}
                <span className="relative z-10">Erase / Restore</span>
              </button>
            </div> */}

            <div className="w-[442px] mx-auto h-[32px] flex border-b border-gray-200 mt-[30px] ">
              <button
                onClick={() => setActiveTab("background")}
                className={`
      font-bold leading-5 text-base w-1/2 relative flex items-center justify-center
      ${activeTab === "background" ? "text-[#000]" : "text-[#414141]"}
    `}
              >
                {activeTab === "background" && (
                  <span className="absolute left-0 right-0 bottom-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] h-[5px]"></span>
                )}

                <span className="relative z-10">Background</span>
              </button>

              {/* Erase / Restore */}
              <button
                onClick={() => setActiveTab("erase")}
                className={`
      font-bold leading-5 text-base w-1/2 relative flex items-center justify-center
      ${activeTab === "erase" ? "text-[#000]" : "text-[#414141]"}
    `}
              >
                {activeTab === "erase" && (
                  <span className="absolute left-0 right-0 bottom-0 bg-purple-500 rounded-tl-[7px] rounded-tr-[7px] h-[5px]"></span>
                )}

                <span className="relative z-10">Erase / Restore</span>
              </button>

            </div>



            {/* Inner Tabs */}
            <div className="bg-[#F6F3FF80] px-5 pt-5">
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

              {/* Image Grid */}
              {/* <div className="grid grid-cols-5 gap-3 overflow-y-auto h-[380px] pr-2 scrollbar-hide">
                <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${bgsquere.src})` }}>
                </div>
                <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center text-3xl bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H13V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12Z" fill="black" />
                  </svg>
                </div>
                <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center bg-white">
                  <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
                    <path d="M30.201 16.9437L28.3578 17.8653C27.8043 18.1403 27.356 18.5887 27.081 19.1421L26.1594 20.9853C26.0282 21.2509 25.6506 21.2509 25.5194 20.9853L24.5978 19.1421C24.3227 18.5887 23.8744 18.1403 23.321 17.8653L21.4778 16.9437C21.2122 16.8125 21.2122 16.4349 21.4778 16.3037L23.321 15.3821C23.8744 15.1071 24.3227 14.6587 24.5978 14.1053L25.5194 12.2621C25.6506 11.9965 26.0282 11.9965 26.1594 12.2621L27.081 14.1053C27.356 14.6587 27.8043 15.1071 28.3578 15.3821L30.201 16.3037C30.4666 16.4349 30.4666 16.8125 30.201 16.9437ZM20.8186 11.3856L16.5178 13.536C15.2282 14.1824 14.1818 15.2288 13.5354 16.5184L11.3856 20.8192C11.0784 21.4336 10.2016 21.4336 9.8944 20.8192L7.744 16.5184C7.0976 15.2288 6.0512 14.1824 4.7616 13.536L0.4608 11.3856C-0.1536 11.0784 -0.1536 10.2016 0.4608 9.8944L4.7616 7.744C6.0512 7.0976 7.0976 6.0512 7.744 4.7616L9.8944 0.4608C10.2016 -0.1536 11.0784 -0.1536 11.3856 0.4608L13.5357 4.7616C14.1821 6.0512 15.2285 7.0976 16.5181 7.744L20.8189 9.8944C21.4333 10.2016 21.433 11.0784 20.8186 11.3856ZM21.4301 2.3072L22.3408 1.85184C22.6143 1.71592 22.8359 1.49432 22.9718 1.2208L23.4272 0.31008C23.4416 0.280409 23.4641 0.255398 23.4921 0.237901C23.5201 0.220404 23.5524 0.211126 23.5854 0.211126C23.6184 0.211126 23.6508 0.220404 23.6788 0.237901C23.7067 0.255398 23.7292 0.280409 23.7437 0.31008L24.199 1.2208C24.335 1.49432 24.5566 1.71592 24.8301 1.85184L25.7408 2.3072C25.7705 2.32165 25.7955 2.34414 25.813 2.37212C25.8305 2.4001 25.8398 2.43244 25.8398 2.46544C25.8398 2.49844 25.8305 2.53078 25.813 2.55876C25.7955 2.58674 25.7705 2.60923 25.7408 2.62368L24.8301 3.07904C24.5566 3.21496 24.335 3.43656 24.199 3.71008L23.7437 4.6208C23.7289 4.65008 23.7063 4.67468 23.6783 4.69187C23.6504 4.70905 23.6182 4.71815 23.5854 4.71815C23.5526 4.71815 23.5205 4.70905 23.4925 4.69187C23.4646 4.67468 23.442 4.65008 23.4272 4.6208L22.9718 3.71008C22.8359 3.43656 22.6143 3.21496 22.3408 3.07904L21.4301 2.62368C21.4004 2.60923 21.3754 2.58674 21.3579 2.55876C21.3404 2.53078 21.3311 2.49844 21.3311 2.46544C21.3311 2.43244 21.3404 2.4001 21.3579 2.37212C21.3754 2.34414 21.4004 2.32165 21.4301 2.3072Z" fill="black" />
                  </svg></span>
                </div>
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md overflow-hidden "
                  >
                    <img
                      src={`https://picsum.photos/200?random=${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div> */}

              <div className="grid grid-cols-5 gap-3 overflow-y-auto h-[380px] pr-2 scrollbar-custom">

                {/* Transparent BG */}
                <div
                  className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgsquere.src})` }}
                ></div>

                {/* Add Button */}
                <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center text-3xl bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M24 12C24 12.2652..." fill="black" />
                  </svg>
                </div>

                {/* Sparkle */}
                <div className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md flex items-center justify-center bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" fill="none" viewBox="0 0 31 22">
                    <path d="M30.201 16.9437..." fill="black" />
                  </svg>
                </div>

                {/* Random Images */}
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="w-[75px] h-[75px] border border-[#D9D9D9] rounded-md overflow-hidden">
                    <img
                      src={`https://picsum.photos/200?random=${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>


              {/* Reset / Save Buttons */}
              <div className="flex justify-end gap-4 py-5">
                <button className="w-[81px] h-10 border border-[#D9D9D9] text-[#414141] text-base font-bold leading-4 rounded-md">
                  Reset
                </button>
                <button className="w-[76px] h-10 bg-[#8256FF] text-[#FFFFFF] text-base font-bold leading-4 rounded-md">
                  Save
                </button>
              </div>
            </div>

            {/* Download Button */}
            <div className="my-5 ">
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
        {/* </div> */}

      </div>

    </div>
  );
}
