"use client";
import React from "react";
import ModalComponent from "./ModalComponent";

const PasteImageURLModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
      <div className="pt-8 pb-6">
        {/* Title */}
        <h2 className="text-center text-[22px] font-semibold text-[#111]">
          Paste Image URL
        </h2>

        {/* Divider */}
        <div className="px-8 mt-4">
          {/* URL Input */}
          <div className="mb-5">
            <label
              htmlFor="imageUrl"
              className="block text-[13px] font-medium text-[#444] mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              placeholder="https://unsplash.com/photos/green-grassland......"
              className="border border-[#ddd] rounded-lg w-full p-3 text-sm focus:outline-none focus:border-[rgba(130,86,255,1)] placeholder:text-[#aaa]"
            />
          </div>

          {/* Accept Button */}
          <button className="w-full bg-[rgba(130,86,255,1)] text-white py-3 rounded-lg font-semibold text-[15px] hover:opacity-90 transition">
            Accept
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default PasteImageURLModal;
