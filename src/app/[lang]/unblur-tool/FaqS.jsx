import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { faqsectionbg } from "utils/image";

const FaqS = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const data = [
    {
      question: t("FAQ_ASKED_QUESTION_TAB_1_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_1_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_2_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_2_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_3_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_3_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_4_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_4_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_5_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_5_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_6_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_6_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_7_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_7_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_8_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_8_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_9_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_10_TEXT"),
    },
    {
      question: t("FAQ_ASKED_QUESTION_TAB_10_TITLE"),
      answer: t("FAQ_ASKED_QUESTION_TAB_10_TEXT"),
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <React.Fragment>
      <div
        className="mb-[50px] px-[30px] py-[100px] bg-blue-56 max-sm:py-[70px] max-sm:px-[20px]  "
        style={{ backgroundImage: `url(${faqsectionbg})` }}
      >
        <div className="">
          <div className="text-center max-w-[1063px] mt-0 mb-[70px] mx-auto max-[480px]:mb-[30px]">
            <h2 className="text-[58px] max-sm:text-[35px] font-bold leading-[1.138] max-sm:leading-[1.2]  mt-0 mx-auto mb-5 max-sm:mb-[15px] text-grey-56">
              {t("FAQ_ASKED_QUESTION_TITLE")}
            </h2>
            <p className=" text-2xl max-sm:text-[18px] font-medium leading-[1.3334] max-sm:leading-[1.2] text-grey-20">
              {t("FAQ_ASKED_QUESTION_DESCRIPTION")}
            </p>
          </div>
          <div className="max-w-[1063px] w-full mx-auto my-0">
            {data.map((item, index) => {
              const isOpen = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`mb-[18px] transition-all duration-50 rounded-xl px-12 py-7 max-sm:p-[16px] max-sm:mb-[16px]  ${isOpen ? "rounded-xl bg-blue-60 text-white " : "bg-sky-6"
                    }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex justify-between items-center text-start transition-all duration-50 cursor-pointer   ${isOpen
                        ? "text-white"
                        : "text-grey-55 bg-sky-6 rounded-xl"
                      }`}
                  >
                    <span className="max-md:text-lg text-[22px] max-sm:text-[16px] font-bold max-[480px]:leading-[1.125] leading-[1.454545454545455] max-[480px]-w-[calc(100%_-_18px)] ">
                      {item.question}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-50 text-[18px] max-sm:text-sm font-normal border-b-[hidden] mt-[30px] max-sm:mt-5 leading-[1.556] max-sm:leading-[1.2858] w-[80%] max-sm:w-full ${isOpen ? "block" : "hidden"
                      }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqS;
