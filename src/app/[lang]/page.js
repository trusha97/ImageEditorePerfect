"use client";
import { useTranslation } from 'react-i18next';
import Empower from './home/Empower';
import Creativehorizons from './home/CreativeHorizons';
import EditingTools from './home/EditingTools';
import ImageGenerator from './home/ImageGenerator';
import ObjectRemover from './home/ObjectRemover';
import GenerativeAi from './home/GenerativeAi';
import Faq from './home/Faq';
import CardPlan from './home/CardPlan';
import SliderImage from './home/SliderImage';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Empower />
      <Creativehorizons />
      <EditingTools />
      <ImageGenerator />
      <ObjectRemover/>
      <GenerativeAi/>
      <Faq/>
      <CardPlan/>
      <SliderImage/>




    </>
  );
}