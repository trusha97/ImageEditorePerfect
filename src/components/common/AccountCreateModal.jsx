"use client";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import { google, facebook } from "../../utils/image";
import PaymentPopup from "./PaymentPopup";

const AccountCreateModal = ({ isOpen, onClose, onPaymentPopup }) => {
  if (!isOpen) return null;
  
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div>
    <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
      <div className="pt-8 pb-6">
        {/* Title */}
        <h2 className="text-center text-[22px] font-semibold text-[#111]">
          Download Your Image in HD
        </h2>
        <p className="text-center mt-2 mb-7 text-[14px] text-[#666]">
          Create your account and try the app for 7 days
        </p>

        {/* Social Login Buttons */}
        <div className="px-8">
          {/* Google Button */}
          <button className="relative mb-3 w-full flex items-center justify-center border border-[#ddd] px-4 py-3 rounded-lg hover:bg-[#fafafa] transition font-medium text-[15px] text-[#111]">
            <div className="absolute left-4">
              <Image src={google} alt="Google" width={20} height={20} />
            </div>
            Continue with Google
          </button>

          {/* Facebook Button */}
          <button className="relative mb-3 w-full flex items-center justify-center border border-[#ddd] px-4 py-3 rounded-lg hover:bg-[#fafafa] transition font-medium text-[15px] text-[#111]">
            <div className="absolute left-4">
              <Image src={facebook} alt="Facebook" width={20} height={20} />
            </div>
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="px-8 mt-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] bg-[#e5e5e5] flex-1" />
            <p className="text-xs text-[#888] whitespace-nowrap">Or, sign up with</p>
            <div className="h-[1px] bg-[#e5e5e5] flex-1" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-[#444] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@gmail.com"
              className="border border-[#ddd] rounded-lg w-full p-3 text-sm focus:outline-none focus:border-[#7c3aed] placeholder:text-[#aaa]"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-[#7c3aed] text-white py-3 rounded-lg font-semibold text-[15px] hover:opacity-90 transition"
          onClick={() => setIsPaymentOpen(true)}>
            Continue
          </button>

          {/* Terms */}
          <p className="text-center mt-4 text-[14px] text-[#777] leading-relaxed">
            By creating an account, you agree to the{" "}
            <span className="underline cursor-pointer">Terms of Use</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </ModalComponent>
    <PaymentPopup isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)}/>
      </div>
  );
};

export default AccountCreateModal;