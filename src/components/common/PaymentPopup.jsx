"use client";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

const PaymentPopup = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (

    <div>
      <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
        <div className="pt-10 pb-10 px-10">
          {/* Title */}
          <h2 className="text-center text-2xl font-semibold mb-2">Start Your Trial</h2>

          {/* Payment header */}
          <div className="flex justify-between items-center mb-1">
            <span className="text-[var(--btnbg)] font-medium text-base">Payment</span>
            <span className="text-[var(--btnbg)] font-semibold text-lg">$01.00</span>
          </div>
          <p className="text-xs text-gray-500 mb-5">
            2 days trial, then $10/month after trial
          </p>

          {/* Secure dropdown */}
          <div className="mb-5">
            <div
              className="flex items-center justify-between border border-gray-200 rounded-md px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600 w-5 h-5" />
                <span className="text-sm font-medium">
                  Secure, 1-click checkout with link
                </span>
              </div>
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </div>

            {isDropdownOpen && (
              <div className="border border-t-0 border-gray-200 rounded-b-md px-4 py-3 bg-gray-50 mt-[-2px] text-sm text-gray-600">
                Your information is encrypted and securely processed through
                PCI-compliant gateways.
              </div>
            )}
          </div>

          {/* Card Info */}
          <div className="space-y-3 mb-6">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Card Number</label>
              <div className="flex items-center border border-gray-200 rounded-md px-3 py-2">
                <input
                  type="text"
                  placeholder="0000 - 0000 - 0000 - 0000"
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="visa"
                  className="h-5 ml-1"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
                  alt="master"
                  className="h-5 ml-1"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Amex_logo.svg"
                  alt="amex"
                  className="h-5 ml-1"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">Expiration</label>
                <input
                  type="text"
                  placeholder="MM - YY"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none placeholder-gray-400 focus:border-[var(--btnbg)]"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">CVV</label>
                <input
                  type="text"
                  placeholder="***"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none placeholder-gray-400 focus:border-[var(--btnbg)]"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">Country</label>
                <input
                  type="text"
                  placeholder="Canada"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none placeholder-gray-400 focus:border-[var(--btnbg)]"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-1 block">Postal Code</label>
                <input
                  type="text"
                  placeholder="M5T 1T4"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none placeholder-gray-400 focus:border-[var(--btnbg)]"
                />
              </div>
            </div>
          </div>

          {/* Confirm button */}
          <button className="w-full bg-[var(--btnbg)] text-white py-2.5 rounded-md font-semibold hover:opacity-90 transition">
            Confirm Payment
          </button>

          {/* Secure message */}
          <div className="flex flex-col items-center text-center mt-5 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-green-600 mb-1" />
            <p>
              You will be charged $01 for a 02-day trial. After 2 days, the
              subscription renews automatically at $10/month unless canceled within
              the trial period. Cancel anytime online or via email. 30-day money-back
              guarantee included.
            </p>
          </div>
        </div>
      </ModalComponent>
      
    </div>
  );
};

export default PaymentPopup;