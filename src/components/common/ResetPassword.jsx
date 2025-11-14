"use client";
import React from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import { google, facebook } from "../../utils/image";

const ResetPassword = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
      <div className="pt-8 pb-10">
        {/* Title */}
        <h2 className="text-center text-[22px] font-semibold text-[#111]">
          Reset Password
        </h2>        

        {/* Divider */}
        <div className="px-10 mt-2">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="hello@gmail.com"
              className="border border-[#ddd] rounded-lg w-full p-3 text-sm focus:outline-none focus:border-[#7c3aed] placeholder:text-[#aaa]"
            />
          </div>

          <button className="w-full bg-[#7c3aed] text-white py-3 rounded-lg font-semibold text-[15px] hover:opacity-90 transition">
            Set New Password
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default ResetPassword;
