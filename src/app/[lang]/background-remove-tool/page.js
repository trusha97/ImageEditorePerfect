"use client";

import { useTranslation } from "react-i18next";
import RemoveBgSection from "./RemoveBgSection";
import WhyChooseSection from "./WhyChooseSection";
import QualityandAccuracy from "./QualityandAccuracy";
import ImageEditer from "./ImageEditer";
import FAQSection from "./FAQSection";
import TestimonialsSlider from "./TestimonialsSlider";
import ReadyToRemoveSection from "./ReadyToRemoveSection";
import ThreeSteps from "./ThreeSteps";
import UploadBox from "./UploadBox";

export default function BackgroundRemove() {
  const { t } = useTranslation();

  return (

    <>
      <RemoveBgSection />
      <WhyChooseSection />
      <QualityandAccuracy />
      <ImageEditer />
      <ThreeSteps/>
      <FAQSection />
      <TestimonialsSlider />
      <ReadyToRemoveSection />
      {/* <UploadBox/> */}

    </>
  );
}

