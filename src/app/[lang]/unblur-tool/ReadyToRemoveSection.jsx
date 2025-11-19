// import Image from "next/image";
// import React, { useState } from "react";
// import { bgremoveimage } from "utils/image";

// const ReadyToRemoveSection = () => {
//     const [image, setImage] = useState(null);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) setImage(URL.createObjectURL(file));
//     };

//     return (
//         <div className="bg-[#ffe5e0] py-14 px-6 flex flex-col md:flex-row items-center justify-center gap-10 rounded-3xl max-w-7xl mx-auto mt-10 shadow-sm">
//             {/* Left Side Text + Upload */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                 <h2 className="text-3xl md:text-[41px] font-bold text-[#181D20] leading-[60px]">
//                     Ready to Remove <br /> Background from Image?
//                 </h2>

//                 <div className="mt-6 w-full max-w-sm border-2 border-dashed border-[#8256FF] rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all">
//                     <label className="cursor-pointer flex flex-col items-center">
//                         <div className="text-4xl text-[#545454] mb-2">+</div>
//                         <p className="text-[#545454] font-bold text-xl leading-5 mb-5">
//                             Drag and Drop Your Image
//                         </p>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                             className="hidden"
//                         />
//                         <button className="flex items-center justify-center gap-2 bg-[#8256FF] text-white  rounded-lg hover:bg-purple-600 transition-all w-[279px] h-[54px]">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
//                                 <path d="M22.1932 11.9998C21.9129 11.9998 21.6441 12.1051 21.4459 12.2926C21.2477 12.4802 21.1364 12.7345 21.1364 12.9998V17.2128C21.1355 17.9517 20.8249 18.6601 20.2728 19.1826C19.7206 19.7051 18.9719 19.999 18.191 19.9998H5.05899C4.27809 19.999 3.52942 19.7051 2.97724 19.1826C2.42506 18.6601 2.11448 17.9517 2.11364 17.2128V12.9998C2.11364 12.7345 2.00229 12.4802 1.8041 12.2926C1.60591 12.1051 1.3371 11.9998 1.05682 11.9998C0.776533 11.9998 0.507727 12.1051 0.309535 12.2926C0.111343 12.4802 0 12.7345 0 12.9998V17.2128C0.00139879 18.4819 0.534847 19.6988 1.48329 20.5962C2.43173 21.4937 3.71769 21.9984 5.05899 21.9998H18.191C19.5323 21.9984 20.8183 21.4937 21.7667 20.5962C22.7152 19.6988 23.2486 18.4819 23.25 17.2128V12.9998C23.25 12.7345 23.1387 12.4802 22.9405 12.2926C22.7423 12.1051 22.4735 11.9998 22.1932 11.9998Z" fill="white" />
//                                 <path d="M6.03124 7.70679L10.5682 3.41379V15.9998C10.5682 16.265 10.6795 16.5194 10.8777 16.7069C11.0759 16.8944 11.3447 16.9998 11.625 16.9998C11.9053 16.9998 12.1741 16.8944 12.3723 16.7069C12.5704 16.5194 12.6818 16.265 12.6818 15.9998V3.41379L17.2187 7.70679C17.418 7.88894 17.685 7.98974 17.9621 7.98746C18.2392 7.98518 18.5042 7.88001 18.7002 7.6946C18.8961 7.5092 19.0073 7.25838 19.0097 6.99619C19.0121 6.73399 18.9056 6.48139 18.7131 6.29279L12.3721 0.292786C12.174 0.105315 11.9052 0 11.625 0C11.3447 0 11.076 0.105315 10.8778 0.292786L4.5369 6.29279C4.34439 6.48139 4.23787 6.73399 4.24027 6.99619C4.24268 7.25838 4.35383 7.5092 4.54977 7.6946C4.74571 7.88001 5.01078 7.98518 5.28787 7.98746C5.56496 7.98974 5.83192 7.88894 6.03124 7.70679Z" fill="white" />
//                             </svg>
//                             Upload Image
//                         </button>
//                     </label>
//                     <p className="text-lg leading-6 font-medium text-[#545454] mt-5 text-center">
//                         You can also copy and paste{" "}
//                         <a href="#" className="text-[#8256FF] underline text-lg leading-6 font-bold">
//                             URL
//                         </a>
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side Before / After */}
//             {/* <div className="flex flex-col md:flex-row items-center gap-6">
//         <div className="relative">
//           <img
//             src={
//               image ||
//               "https://i.ibb.co/QpbHp1v/girl-before.jpg"
//             }
//             alt="Before"
//             className="w-56 h-64 object-cover rounded-xl shadow-md"
//           />
//         </div>

//         <div className="text-purple-500 text-5xl md:text-6xl transform rotate-90 md:rotate-0">
//           ➜
//         </div>

//         <div className="relative">
//           <img
//             src={
//               image ||
//               "https://i.ibb.co/xh6K6gR/girl-after.jpg"
//             }
//             alt="After"
//             className="w-56 h-64 object-cover rounded-xl shadow-md"
//           />
//         </div>
//       </div> */}

//             <div>
//                 <Image src={bgremoveimage} />
//             </div>
//         </div>
//     );
// };

// export default ReadyToRemoveSection;







import Image from "next/image";
import React, { useState } from "react";
import { bgremoveimage } from "utils/image";

const ReadyToRemoveSection = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setImage(URL.createObjectURL(file));
    };

    return (
        <div className="bg-[#ffe5e0] md:px-20 px-[15px] py-[78px]  lg:flex block flex-col md:flex-row items-center justify-between rounded-3xl max-w-[1510px] mx-auto mt-10 shadow-sm">
            {/* Left Side Text + Upload */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl md:text-[41px] font-bold text-[#181D20] lg:text-left text-center mx-auto md:leading-[60px] leading-10 mb-[51px]">
                    Ready to Remove <br /> Background from Image?
                </h2>

                <div className="mx-auto w-full max-w-[485px]  max-h-[269px] h-full md:p-2.5 p-2 bg-white rounded-[40px]  transition-all">
                    <div className="border-2 border-dashed border-[#8256FF] rounded-[40px]">
                        <label className="cursor-pointer flex flex-col items-center">
                            <div className=" text-[#545454] mb-4 mt-6"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M26.7188 15C26.7188 15.373 26.5706 15.7306 26.3069 15.9944C26.0431 16.2581 25.6855 16.4062 25.3125 16.4062H16.4062V25.3125C16.4062 25.6855 16.2581 26.0431 15.9944 26.3069C15.7306 26.5706 15.373 26.7188 15 26.7188C14.627 26.7188 14.2694 26.5706 14.0056 26.3069C13.7419 26.0431 13.5938 25.6855 13.5938 25.3125V16.4062H4.6875C4.31454 16.4062 3.95685 16.2581 3.69313 15.9944C3.42941 15.7306 3.28125 15.373 3.28125 15C3.28125 14.627 3.42941 14.2694 3.69313 14.0056C3.95685 13.7419 4.31454 13.5938 4.6875 13.5938H13.5938V4.6875C13.5938 4.31454 13.7419 3.95685 14.0056 3.69313C14.2694 3.42941 14.627 3.28125 15 3.28125C15.373 3.28125 15.7306 3.42941 15.9944 3.69313C16.2581 3.95685 16.4062 4.31454 16.4062 4.6875V13.5938H25.3125C25.6855 13.5938 26.0431 13.7419 26.3069 14.0056C26.5706 14.2694 26.7188 14.627 26.7188 15Z" fill="#545454" />
                            </svg></div>
                            <p className="text-[#545454] font-bold text-xl leading-5 mb-5">
                                Drag and Drop Your Image
                            </p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            {/* <button className="flex items-center justify-center gap-2 bg-[#8256FF] font-bold text-xl leading-[125%] text-white  rounded-lg hover:bg-purple-600 transition-all sm:max-w-[279px] max-w-[276px]  h-[54px]"> */}
                                <button className="bg-[#8256FF] font-bold  text-xl xs:text-[15px] text-white rounded-lg hover:bg-purple-600 transition-all w-full md:max-w-[279px] max-w-[276.76px] xs:max-w-[200px]  h-[54px] flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                    <path d="M22.1932 11.9998C21.9129 11.9998 21.6441 12.1051 21.4459 12.2926C21.2477 12.4802 21.1364 12.7345 21.1364 12.9998V17.2128C21.1355 17.9517 20.8249 18.6601 20.2728 19.1826C19.7206 19.7051 18.9719 19.999 18.191 19.9998H5.05899C4.27809 19.999 3.52942 19.7051 2.97724 19.1826C2.42506 18.6601 2.11448 17.9517 2.11364 17.2128V12.9998C2.11364 12.7345 2.00229 12.4802 1.8041 12.2926C1.60591 12.1051 1.3371 11.9998 1.05682 11.9998C0.776533 11.9998 0.507727 12.1051 0.309535 12.2926C0.111343 12.4802 0 12.7345 0 12.9998V17.2128C0.00139879 18.4819 0.534847 19.6988 1.48329 20.5962C2.43173 21.4937 3.71769 21.9984 5.05899 21.9998H18.191C19.5323 21.9984 20.8183 21.4937 21.7667 20.5962C22.7152 19.6988 23.2486 18.4819 23.25 17.2128V12.9998C23.25 12.7345 23.1387 12.4802 22.9405 12.2926C22.7423 12.1051 22.4735 11.9998 22.1932 11.9998Z" fill="white" />
                                    <path d="M6.03124 7.70679L10.5682 3.41379V15.9998C10.5682 16.265 10.6795 16.5194 10.8777 16.7069C11.0759 16.8944 11.3447 16.9998 11.625 16.9998C11.9053 16.9998 12.1741 16.8944 12.3723 16.7069C12.5704 16.5194 12.6818 16.265 12.6818 15.9998V3.41379L17.2187 7.70679C17.418 7.88894 17.685 7.98974 17.9621 7.98746C18.2392 7.98518 18.5042 7.88001 18.7002 7.6946C18.8961 7.5092 19.0073 7.25838 19.0097 6.99619C19.0121 6.73399 18.9056 6.48139 18.7131 6.29279L12.3721 0.292786C12.174 0.105315 11.9052 0 11.625 0C11.3447 0 11.076 0.105315 10.8778 0.292786L4.5369 6.29279C4.34439 6.48139 4.23787 6.73399 4.24027 6.99619C4.24268 7.25838 4.35383 7.5092 4.54977 7.6946C4.74571 7.88001 5.01078 7.98518 5.28787 7.98746C5.56496 7.98974 5.83192 7.88894 6.03124 7.70679Z" fill="white" />
                                </svg>
                                Upload Image
                            </button>
                        </label>
                        <p className="sm:text-lg text-base leading-6 font-medium text-[#545454] mt-5 mb-[31px] text-center">
                            You can also copy and paste{" "}
                            <a href="#" className="text-[#8256FF] underline text-lg leading-6 font-bold">
                                URL
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:pt-0 pt-8">
                <Image src={bgremoveimage} className="mx-auto" />
            </div>
        </div>
    );
};

export default ReadyToRemoveSection;



