// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Header from "@/Typography/header/Header";
// import Paragraph from "@/Typography/text/Paragraph";
// import Image from "next/image";
// import { obremover } from "@/utils/image";

// const ObjectRemover = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="w-full px-4 xl:px-20 2xl:px-51.5 xl:40">
//       <div className="flex flex-col xl:flex-row justify-between items-center">

//         {/* ==== Right Side (Text Content) ==== */}
//         <div className="xl:order-2 order-1 w-full xl:w-auto xl:text-left text-center !mx-auto xl:mb-0 mb-14.5">
//           <div className="xl:text-left text-center !mx-auto">
//             <button
//               type="button"
//               className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
//             >
//               NEW
//             </button>
//           </div>

//           <Header
//             className="text-[var(--doubelblack)] text-[40px] font-bold mt-4 xl:text-left text-center !mx-auto"
//             text="Object Remover"
//           />
//           <Paragraph
//             className="xl:text-left text-center !mx-auto font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3"
//             text="Effortlessly remove unwanted objects from your images, leaving behind clean and professional results. Perfect for enhancing photos and creating flawless visuals."
//           />
//           <button
//             type="button"
//             disabled
//             className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
//           >
//             Try Now
//           </button>
//         </div>

//         {/* ==== Left Side (Images) ==== */}
//         <div className="xl:order-1 order-2 relative flex items-center w-full xl:w-[738px] sm:h-[494px] h-[325px] overflow-hidden mt-8 abobrom ">
//           <div className="absolute z-50 md:top-0 top-16  md:left-0 sm:left-28 left-14 aaa ">
//             <Image
//               src={obremover}
//               alt="obremover image"
//               className="obremover"
//               />
//           </div>

          
//           <motion.div
//             className="absolute md:top-24 top-24.5 sm:left-48 left-24  cursor-pointer bbb"
//             initial={{ x: 0, y: 0, opacity: 1 }}
//             animate={{
//               x: isHovered ? 110 : 50,
//               y: isHovered ? 20 : 0,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 80,
//               damping: 15,
//               mass: 0.6,
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <Image
//               src={obremover}
//               alt="obremover image"
//               className="obremover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ObjectRemover;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Typography/header/Header";
import Paragraph from "@/Typography/text/Paragraph";
import Image from "next/image";
import { obremover } from "@/utils/image";

const ObjectRemover = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Single function to toggle animation
  const handleToggle = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div className="w-full px-4 xl:px-20 2xl:px-51.5 xl:40">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        {/* ==== Right Side (Text Content) ==== */}
        <div className="xl:order-2 order-1 w-full xl:w-auto xl:text-left text-center !mx-auto xl:mb-0 mb-14.5">
          <div className="xl:text-left text-center !mx-auto">
            <button
              type="button"
              className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
            >
              NEW
            </button>
          </div>

          <Header
            className="text-[var(--doubelblack)] text-[40px] font-bold mt-4 xl:text-left text-center !mx-auto"
            text="Object Remover"
          />
          <Paragraph
            className="xl:text-left text-center !mx-auto font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3"
            text="Effortlessly remove unwanted objects from your images, leaving behind clean and professional results. Perfect for enhancing photos and creating flawless visuals."
          />
          <button
            type="button"
            disabled
            className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
          >
            Try Now
          </button>
        </div>

        {/* ==== Left Side (Images) ==== */}
        <div className="xl:order-1 order-2 relative flex items-center w-full xl:w-[738px] sm:h-[494px] h-[460px] overflow-hidden mt-8 abobrom">
          {/* Static Image */}
          <div
            className="absolute z-50 md:top-0 top-16 md:left-0 sm:left-28 left-14 aaa cursor-pointer"
            onClick={handleToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image src={obremover} alt="obremover image" className="obremover" />
          </div>

          {/* Animated Image */}
          <motion.div
            className="absolute md:top-24 top-24.5 sm:left-48 left-24 cursor-pointer bbb"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: isHovered ? 110 : 50,
              y: isHovered ? 20 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              mass: 0.6,
            }}
            onClick={handleToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image src={obremover} alt="obremover image" className="obremover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ObjectRemover;
