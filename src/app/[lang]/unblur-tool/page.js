// "use client";
// import { useTranslation } from 'react-i18next';
// import ReadyToRemoveSection from './ReadyToRemoveSection';
// import RemoveBgSection from './RemoveBgSection';
// import TestimonialsSlider from './TestimonialsSlider';
// import WhyChooseSection from './WhyChooseSection';

// export default  Unblur() {
//   const { t } = useTranslation();
//   return (
//     // <div className="flex items-center justify-center p-6">
//     //   <div className="max-w-3xl w-full bg-white p-8 rounded shadow">
//     //     <h2 className="text-2xl font-semibold">{t('Unblur Tool')}</h2>
//     //     <p className="mt-3 text-gray-600">This is an example unblur tool page.</p>
//     //   </div>
//     // </div>
//     <>
//     {/* <ReadyToRemoveSection/> */}
//     <RemoveBgSection/>
//     <WhyChooseSection/>
//     <TestimonialsSlider/>
//     </>
//   );
// }
"use client"
import React from 'react'
import RemoveBgSection from './RemoveBgSection'
import WhyChooseSection from './WhyChooseSection'
import QualityandAccuracy from './QualityandAccuracy'
import ImageEditer from './ImageEditer'
import FAQSection from './FAQSection'
import TestimonialsSlider from './TestimonialsSlider'
import ReadyToRemoveSection from './ReadyToRemoveSection'
import ThreeSteps from './ThreeSteps'

const Unblur = () => {
  return (
    <>
      <RemoveBgSection/>
      <WhyChooseSection/>
      <QualityandAccuracy/>
      <ImageEditer/>
      {/* <FAQSection/> */}
      <TestimonialsSlider/>
      <ReadyToRemoveSection/>
      {/* <ThreeSteps/> */}
    </>
  )
}

export default Unblur
