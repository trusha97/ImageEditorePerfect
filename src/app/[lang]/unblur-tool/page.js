"use client"
import React from 'react'
import UnblurBgSection from './UnblurBgSection'
import WhyChooseUnblur from './WhyChooseUnblur'
import ImageUnblurEditer from './ImageUnblurEditer'
import ImageEditer from '../background-remove-tool/ImageEditer'
import ThreeSteps from '../background-remove-tool/ThreeSteps'
import TestimonialsSlider from '../background-remove-tool/TestimonialsSlider'
import CanBeUsed from './CanBeUsed'

const Unblur = () => {
  return (
    <>
    <UnblurBgSection/>
    <WhyChooseUnblur/>
    <ImageUnblurEditer/>
    <ImageEditer/>
    <ThreeSteps/>
    <CanBeUsed/>
    <TestimonialsSlider/>
    </>
  )
}

export default Unblur
