"use client";
import React, { useState } from "react";
import "./BeforeAfterSlider.css";
import { EasyBackground, HighQuality } from "utils/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <main className="main">
      <div className="container" style={{ "--position": `${position}%` }}>
        <div className="imageContainer">
          <img
            className="sliderImage imageBefore"
            src={EasyBackground}
            alt="Before"
          />

          <img
            className="sliderImage imageAfter"
            src={HighQuality}
            alt="After"
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="slider"
        />

        <div className="sliderLine"></div>

        <div className="sliderButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line x1="128" y1="40" x2="128" y2="216" stroke="currentColor" strokeWidth="16"></line>
            <line x1="96" y1="128" x2="16" y2="128" stroke="currentColor" strokeWidth="16"></line>
            <polyline points="48 160 16 128 48 96" stroke="currentColor" strokeWidth="16" fill="none"></polyline>
            <line x1="160" y1="128" x2="240" y2="128" stroke="currentColor" strokeWidth="16"></line>
            <polyline points="208 96 240 128 208 160" stroke="currentColor" strokeWidth="16" fill="none"></polyline>
          </svg>
        </div>
      </div>
    </main>
  );
}
