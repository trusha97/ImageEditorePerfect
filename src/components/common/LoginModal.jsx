"use client";
import React from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import { apple, facebook, google, problem } from "../../utils/image";

import { useRouter } from "next/navigation";

const LoginModal = ({ isOpen, onClose, onForgotPassword }) => {
  const router = useRouter();
  if (!isOpen) return null;

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} width="520px">
      <div className="pt-10">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">Log in</h2>

        {/* Social Login Buttons */}
        <div className=" sm:flex block justify-center gap-3 sm:px-10 px-5">
          <button className="sm:mb-0 mb-3 w-full flex items-center justify-center gap-2 border  border-[var(--borderpurpule)] px-4 py-2.5 rounded-md hover:bg-gray-50 transition">
            <Image src={google} alt="Google" width={20} height={20} />
            <span className="text-base font-medium">Google</span>
          </button>
          <button className="sm:mb-0 mb-3 w-full flex items-center justify-center gap-2 border border-[var(--borderpurpule)] px-4 py-2.5 rounded-md hover:bg-gray-50 transition">
            <Image src={apple} alt="Apple" width={20} height={20} />
            <span className="text-base font-medium">Apple</span>
          </button>
          <button className="sm:mb-0 mb-3 w-full flex items-center justify-center gap-2 border border-[var(--borderpurpule)] px-4 py-2.5 rounded-md hover:bg-gray-50 transition">
            <Image src={facebook} alt="Facebook" width={20} height={20} />
            <span className="text-base font-medium">Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="sm:px-10 px-5 pb-10 sm:pt-10 pt-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] bg-gray-200 flex-1" />
            <p className="text-xs text-gray-500">Or, login with</p>
            <div className="h-[1px] bg-gray-200 flex-1" />
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="hello@gmail.com"
            className="border border-[var(--borderpurpule)] rounded-md w-full p-2.5 mb-3 text-sm focus:outline-none focus:border-[var(--btnbg)]"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="****************"
            className="border border-[var(--borderpurpule)] rounded-md w-full p-2.5 mb-3 text-sm focus:outline-none focus:border-[var(--btnbg)]"
          />

          {/* Forgot Password */}
          <div className="flex justify-end text-sm mb-4">
            <span
              className="text-gray-500 cursor-pointer flex items-center gap-1"
              onClick={() => onForgotPassword && onForgotPassword()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_1581_665)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 0.833252C11.9555 0.833252 15.1668 4.04459 15.1668 7.99992C15.1668 11.9553 11.9555 15.1666 8.00016 15.1666C4.04483 15.1666 0.833496 11.9553 0.833496 7.99992C0.833496 4.04459 4.04483 0.833252 8.00016 0.833252ZM8.00016 1.83325C4.59683 1.83325 1.8335 4.59659 1.8335 7.99992C1.8335 11.4033 4.59683 14.1666 8.00016 14.1666C11.4035 14.1666 14.1668 11.4033 14.1668 7.99992C14.1668 4.59659 11.4035 1.83325 8.00016 1.83325Z" fill="#676767" />
                  <path d="M8.00016 11.7498C8.36835 11.7498 8.66683 11.4514 8.66683 11.0832C8.66683 10.715 8.36835 10.4165 8.00016 10.4165C7.63197 10.4165 7.3335 10.715 7.3335 11.0832C7.3335 11.4514 7.63197 11.7498 8.00016 11.7498Z" fill="#676767" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.16699 5.08333L7.50033 9.08333C7.50033 9.35933 7.72433 9.58333 8.00033 9.58333C8.27633 9.58333 8.50033 9.35933 8.50033 9.08333L8.83366 5.08333C8.83366 4.80733 8.66699 4.25 8.00033 4.25C7.33366 4.25 7.16699 4.80733 7.16699 5.08333Z" fill="#676767" />
                </g>
                <defs>
                  <clipPath id="clip0_1581_665">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={() => {
              // Redirect to the German dashboard path after successful login click
              router.push("/de/dashboard");
              // close modal if a handler was passed
              onClose && onClose();
            }}
            className="w-full bg-[var(--btnbg)] text-white py-2.5 rounded-md font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>

          {/* Signup Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <span className="text-[var(--btnbg)] font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </ModalComponent>
  );
};

export default LoginModal;
