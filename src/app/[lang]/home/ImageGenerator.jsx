// "use client"

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Header from "Typography/header/Header";
// import Paragraph from "Typography/text/Paragraph";
// import { Ai1, Ai2, Ai3 } from "utils/image";
// const ImageGenerator = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//         <>
//             <div className="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 my-10 sm:py-20 pt-0 px-6 text-center overflow-hidden">
//                 {/* <div className="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 my-10 sm:py-20 pt-0 px-6 text-center overflow-hidden"> */}

//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <Header
//                         level={2}
//                         text="NEW TOOLS"
//                         className=" xl:text-[160px] md:text-[100px] sm:block hidden text-[50px] !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
//                     />
//                 </div>

//                 {/* Foreground Heading */}
//                 <h2 className="relative top-[30px] xl:text-[50px] text-[30px] font-bold text-[var(--doubelblack)] leading-snug">
//                     Spark Your Imagination With{" "}
//                     <span className="text-[var(--orange)]">Generative AI</span>
//                 </h2>

//                 {/* Subtext (optional) */}
//                 <Paragraph className="relative top-[55px] font-medium text-lg  text-[var(--paragraphtitle)] !mx-auto !text-center max-w-[1138px] " text="Unleash your creativity with generative AI, transforming your ideas into
//         unique and inspiring designs. Explore endless possibilities and elevate
//         your projects to new heights."/>
//             </div>

//             <div className="flex flex-col xl:flex-row justify-between items-center lg:px-20 md:px-12 px-4 gap-12">
//                 <div className="xl:text-left text-center !mx-auto">
//                     <div className="xl:text-left text-center !mx-auto">
//                         <button
//                             type="button"
//                             className=" text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
//                         >
//                             NEW
//                         </button>
//                     </div>
//                     <Header className="text-[var(--doubelblack)] text-[40px] font-bold" text="AI Image Generator" />
//                     <Paragraph className="font-medium text-lg xl:text-left text-center !mx-auto  text-[var(--paragraphtitle)] !max-w-[563px]" text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life." />
//                     <button
//                         type="button"
//                         disabled
//                         className=" mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
//                     >
//                         Try Now
//                     </button>
//                 </div>

//                 <div className="flex justify-end items-center xl:w-[738px] w-full sm:h-[494px] h-[300px]">
//                     <div className="relative group xl:w-[664px] w-full sm:h-[420px] h-[290px] flex justify-center">

//                         {/* Card 1 */}
//                         {/* Card 1 */}
//                         <div className="absolute transition-all duration-500 ease-in-out
// xl:group-hover:-translate-x-12
// sm:group-hover:-translate-x-8
// group-hover:-translate-x-4
// group-hover:-rotate-6">
//                             <Image
//                                 src={Ai1}
//                                 alt="ai image1"
//                                 height={380}
//                                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//                             />
//                         </div>

//                         {/* Card 2 (middle) */}
//                         <div className="absolute transition-all duration-500 ease-in-out z-10 group-hover:scale-105">
//                             <Image
//                                 src={Ai2}
//                                 alt="ai image2"
//                                 height={380}
//                                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//                             />
//                         </div>

//                         {/* Card 3 */}
//                         <div className="absolute transition-all duration-500 ease-in-out
// xl:group-hover:translate-x-12
// sm:group-hover:translate-x-8
// group-hover:translate-x-4
// group-hover:rotate-6">
//                             <Image
//                                 src={Ai3}
//                                 alt="ai image3"
//                                 height={380}
//                                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//                             />
//                         </div>


//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default ImageGenerator




"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "Typography/header/Header";
import Paragraph from "Typography/text/Paragraph";
import { Ai1, Ai2, Ai3 } from "utils/image";

const ImageGenerator = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Top Section */}
            <div className="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 xl:mt-10 mt-0 mb-10 sm:py-20 pt-0  text-center overflow-hidden">

                <div className="absolute inset-0 flex items-center justify-center">
                    <Header
                        level={2}
                        text="NEW TOOLS"
                        className="xl:text-[160px] md:text-[100px] sm:block hidden text-[50px] !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
                    />
                </div>

                <h2 className="relative top-[30px] xl:text-[50px] text-[30px] font-bold text-[var(--doubelblack)] leading-snug">
                    Spark Your Imagination With{" "}
                    <span className="text-[var(--orange)]">Generative AI</span>
                </h2>

                <Paragraph
                    className="relative top-[55px] font-medium text-lg text-[var(--paragraphtitle)] !mx-auto !text-center max-w-[1138px]"
                    text="Unleash your creativity with generative AI, transforming your ideas into unique and inspiring designs. Explore endless possibilities and elevate your projects to new heights."
                />
            </div>

            {/* Main Section */}
            <div
                className="
                    flex 
                    flex-col-reverse       /* 👉 Mobile: image first, text second */
                    xl:flex-row            /* 👉 Desktop: text left, image right */
                    justify-between 
                    items-center 
                    lg:px-20 md:px-12 px-4 
                    gap-12 
                "
            >

                {/* TEXT SECTION */}
                <div className="xl:text-left text-center !mx-auto">
                    <div className="xl:text-left text-center !mx-auto sm:mb-6 mb-3">
                        <button
                            type="button"
                            className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-[6px] font-bold text-sm leading-4"
                        >
                            NEW
                        </button>
                    </div>

                    <Header
                        className="text-[var(--doubelblack)] sm:text-[40px] text-2xl font-bold"
                        text="AI Image Generator"
                    />

                    <Paragraph
                        className="font-medium text-lg xl:text-left text-center !mx-auto text-[var(--paragraphtitle)] !max-w-[563px] sm:mt-[16px] mt-[6px]"
                        text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
                    />

                    <button
                        type="button"
                        disabled
                        className="sm:mt-[30px] mt-6 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                    >
                        Try Now
                    </button>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex justify-start items-center xl:w-[738px] w-full ">
                    <div className="relative group xl:w-[664px] w-full md:h-[420px] sm:h-[300px] h-[230px] flex justify-center">

                        {/* Card 1 */}
                        <div
                            className="
                                absolute 
                                transition-all duration-500 ease-in-out
                                xl:group-hover:-translate-x-12
                                sm:group-hover:-translate-x-8
                                group-hover:-translate-x-4
                                group-hover:-rotate-6
                            "
                        >
                            <Image
                                src={Ai1}
                                alt="ai image1"
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="absolute transition-all duration-500 ease-in-out z-10 group-hover:scale-105">
                            <Image
                                src={Ai2}
                                alt="ai image2"
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>

                        {/* Card 3 */}
                        <div
                            className="
                                absolute 
                                transition-all duration-500 ease-in-out
                                xl:group-hover:translate-x-12
                                sm:group-hover:translate-x-8
                                group-hover:translate-x-4
                                group-hover:rotate-6
                            "
                        >
                            <Image
                                src={Ai3}
                                alt="ai image3"
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ImageGenerator;






// "use client";

// import React from "react";
// import Header from "Typography/header/Header";
// import Paragraph from "Typography/text/Paragraph";
// import Image from "next/image";
// import { Ai1, Ai2, Ai3 } from "utils/image";

// const ImageGenerator = () => {
//   return (
//     <>
//       {/* TOP SECTION */}
//       <div className="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 my-10 sm:py-20 pt-0 px-6 text-center overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Header
//             level={2}
//             text="NEW TOOLS"
//             className="xl:text-[160px] md:text-[100px] sm:block hidden text-[50px] !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
//           />
//         </div>

//         <h2 className="relative top-[30px] xl:text-[50px] text-[30px] font-bold text-[var(--doubelblack)] leading-snug">
//           Spark Your Imagination With{" "}
//           <span className="text-[var(--orange)]">Generative AI</span>
//         </h2>

//         <Paragraph
//           className="relative top-[55px] font-medium text-lg text-[var(--paragraphtitle)] !mx-auto !text-center max-w-[1138px]"
//           text="Unleash your creativity with generative AI, transforming your ideas into
//           unique and inspiring designs. Explore endless possibilities and elevate
//           your projects to new heights."
//         />
//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="flex flex-col xl:flex-row justify-between items-center lg:px-20 md:px-12 px-4 gap-12">
//         {/* LEFT TEXT */}
//         <div className="xl:text-left text-center !mx-auto">
//           <div>
//             <button
//               type="button"
//               className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
//             >
//               NEW
//             </button>
//           </div>

//           <Header
//             className="text-[var(--doubelblack)] text-[40px] font-bold mt-4"
//             text="AI Image Generator"
//           />

//           <Paragraph
//             className="font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3 xl:text-left text-center !mx-auto"
//             text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
//           />

//           <button
//             type="button"
//             disabled
//             className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)] xl:mb-0 mb-14.5"
//           >
//             Try Now
//           </button>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="flex justify-left items-center xl:w-[738px] w-full sm:h-[494px] h-[300px]">
//           <div className="relative group xl:w-[664px] w-full sm:h-[420px] h-[290px] flex justify-center">

//             {/* CARD 1 */}
//             <div
//               className="
//                 absolute transition-all duration-500 ease-in-out
//                 group-hover:-translate-x-[140px]
//                 group-hover:-rotate-6
//               "
//             >
//               <Image
//                 src={Ai1}
//                 alt="ai image1"
//                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//               />
//             </div>

//             {/* CENTER CARD */}
//             <div
//               className="
//                 absolute z-10 transition-all duration-500 ease-in-out
//                 group-hover:scale-[1.07]
//                 group-hover:-translate-y-2
//               "
//             >
//               <Image
//                 src={Ai2}
//                 alt="ai image2"
//                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//               />
//             </div>

//             {/* CARD 3 */}
//             <div
//               className="
//                 absolute transition-all duration-500 ease-in-out
//                 group-hover:translate-x-[140px]
//                 group-hover:rotate-6
//               "
//             >
//               <Image
//                 src={Ai3}
//                 alt="ai image3"
//                 className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageGenerator;

