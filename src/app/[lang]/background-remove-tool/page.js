"use client";

import { useTranslation } from "react-i18next";
import Faq from "./Faq";
import Empower from "./Empower";
import Creativehorizons from "./CreativeHorizons";
import EditingTools from "./EditingTools";
import ImageGenerator from "./ImageGenerator";
import ObjectRemover from "./ObjectRemover";
import CardPlan from "./CardPlan";
import GenerativeAi from "./GenerativeAi";
import SliderImage from "./SliderImage";
export default function BackgroundRemove() {
  const { t } = useTranslation();

  return (
    // <div className=" flex items-center justify-center p-6">
    //   <div className="max-w-3xl w-full bg-white p-8 rounded shadow">
    //     <h2 className="text-2xl font-semibold">{t("Background Remove Tool")}</h2>
    //     <p className="mt-3 text-gray-600">
    //       This is an example page for the background remove tool.
    //     </p>
    //   </div>
    // </div>
    <>

      <Empower/>
      <Creativehorizons/>
      <EditingTools/>
      <ImageGenerator/>
      <ObjectRemover/>
      <GenerativeAi/>
      <Faq/>
      <CardPlan/>
      <SliderImage/>



    </>
  );
}

