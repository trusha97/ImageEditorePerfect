// "use client";
// import React from "react";
// import ModalComponent from "./ModalComponent";
// import Image from "next/image";
// import { Backgroundmodal, Unblurmodal } from "../../utils/image";

// const ToolSelectModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
//       <div className="pt-8 pb-10 px-8">
//         {/* Title */}
//         <h2 className="text-center text-[22px] font-semibold text-[#111] mb-6">
//           Select Your Tool
//         </h2>

//         {/* Tool options */}
//         <div className="space-y-3">
//           {/* Background Remover */}
//           <div className="flex items-center gap-4 border border-[#A29BE8] rounded-xl p-3 cursor-pointer hover:shadow-[0_0_0_3px_rgba(162,155,232,0.4)] transition">
//             <div className="flex-shrink-0">
//               <Image
//                 src={Backgroundmodal}
//                 alt="Background Remover"
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col">
//               <h3 className="text-[18px] font-semibold text-[#111] leading-none">
//                 Background Remover
//               </h3>
//               <p className="text-[14px] text-[#555] mt-1">
//                 Lorem Ipsum is simply dummy text
//               </p>
//             </div>
//           </div>

//           {/* Unblur Images */}
//           <div className="flex items-center gap-4 border border-transparent rounded-xl p-3 cursor-pointer hover:border-[#A29BE8] hover:shadow-[0_0_0_3px_rgba(162,155,232,0.4)] transition">
//             <div className="flex-shrink-0">
//               <Image
//                 src={Unblurmodal}
//                 alt="Unblur Images"
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col">
//               <h3 className="text-[18px] font-semibold text-[#111] leading-none">
//                 Unblur Images
//               </h3>
//               <p className="text-[14px] text-[#555] mt-1">
//                 Lorem Ipsum is simply dummy text
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ModalComponent>
//   );
// };

// export default ToolSelectModal;






"use client";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import { Backgroundmodal, Unblurmodal } from "../../utils/image";

const ToolSelectModal = ({ isOpen, onClose }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  if (!isOpen) return null;

  const tools = [
    {
      id: "background",
      title: "Background Remover",
      desc: "Lorem Ipsum is simply dummy text",
      image: Backgroundmodal,
    },
    {
      id: "unblur",
      title: "Unblur Images",
      desc: "Lorem Ipsum is simply dummy text",
      image: Unblurmodal,
    },
  ];

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
      <div className="pt-8 pb-10 px-8">
        {/* Title */}
        <h2 className="text-center text-[22px] font-semibold text-[#111] mb-6">
          Select Your Tool
        </h2>

        {/* Tool Options */}
        <div className="space-y-3">
          {tools.map((tool) => {
            const isSelected = selectedTool === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`flex items-center gap-4 rounded-xl p-3 cursor-pointer border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#F2EEFF80] border-[#8256FF]  "
                    : "border border-transparent  hover:border-[#A29BE8] "
                }`}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h3
                    className="text-[18px] font-semibold leading-none text-[#111] "
                  >
                    {tool.title}
                  </h3>
                  <p
                    className="text-[14px] mt-1 text-[#111]"
                  >
                    {tool.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ModalComponent>
  );
};

export default ToolSelectModal;

