



// "use client";
// import React from "react";
// import ModalComponent from "./ModalComponent";
// import ReactCountryFlag from "react-country-flag";

// const LanguageModal = ({ isOpen, onClose, selectedLang, handleLanguageSelect, languages }) => {
//   return (
//     <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
//       <h2 className="text-[28px] font-medium text-center mb-[25px]">
//         Language
//       </h2>
//       <div className="max-h-[570px] overflow-y-auto pt-[38px] pr-[10px] pl-[5px] py-[10px] space-y-[5px]">
//         {languages.map((lang) => (
//           <button
//             key={lang.code}
//             onClick={() => handleLanguageSelect(lang)}
//             className={`w-full flex items-center justify-center py-[12px] gap-[10px] rounded-[30px] font-medium transition-all duration-200
//     ${selectedLang.code === lang.code
//                 ? "bg-[var(--btnbg)] text-white shadow-sm scale-[1.00]"
//                 : "text-[#1A1A1A] hover:bg-[#EAF1FF] hover:text-var(--btnbg)"
//               }`}
//           >
//             <ReactCountryFlag
//               countryCode={lang.code}
//               svg 
//               style={{
//                 width: "22px",
//                 height: "22px",
//                 borderRadius: "50%",
//                 border: selectedLang.code === lang.code ? "2px solid white" : "2px solid transparent",
//               }}
//             />
            
//             <span className="text-[20px] whitespace-nowrap">{lang.name}</span>
//           </button>
//         ))}
//       </div>
//     </ModalComponent>
//   );
// };

// export default LanguageModal;




"use client";
import ReactCountryFlag from "react-country-flag";
import { t } from "i18next";
import { languages } from "../../utils/data";
import ModalComponent from "./commonModal";

const LanguageModal = ({
  isOpen,
  onClose,
  currentLang,
  handleChangeLanguage, // ✅ keep name same as Header
}) => {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="px-[5px] py-[5px] sm:px-[10px] sm:py-[10px]">
        <div className="pt-[38px]">
          <div className="max-h-[570px] overflow-y-auto">
            <h2 className="text-[28px] font-medium text-center mb-[25px]">
              {t("LANGUAGE")}
            </h2>

            <div>
              {languages?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleChangeLanguage(item)} // ✅ pass full item only
                  className={`w-full flex justify-center cursor-pointer items-center py-[10px] gap-[10px] mb-[2px] transition-colors ${
                    currentLang === item?.code
                      ? "bg-blue-600 text-white rounded-[24px] shadow-md"
                      : "hover:text-blue-400"
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={item?.flagCode}
                    svg
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                    className="rounded-full object-cover"
                  />
                  <span
                    className={`text-[20px] font-[400] ${
                      currentLang === item?.code ? "font-medium" : ""
                    }`}
                  >
                    {item?.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};

export default LanguageModal;


