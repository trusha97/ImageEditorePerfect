"use client";
import React from "react";

const ModalComponent = ({ isOpen, onClose, children, width = "520px" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] z-[999] overflow-hidden">
      <div
        className={`relative bg-white rounded-lg shadow-lg w-[${width}] max-w-[calc(100vw-32px)] pointer-events-auto`}
      >
        <button
          onClick={onClose}
          className="absolute top-[12px] right-[5%] z-[10] w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-gray-600 hover:text-black"
        >
          ✕
        </button>
        {/* <div className="pt-[38px] px-[10px] py-[10px]">{children}</div> */}
        <div >{children}</div>

      </div>
    </div>
  );
};

export default ModalComponent;
