"use client";
import React from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import { apple, facebook, google, problem } from "../../utils/image";

import { useRouter } from "next/navigation";

const LoginModal = ({ isOpen, onClose }) => {
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
            <span className="text-gray-500 hover:text-[var(--btnbg)] cursor-pointer flex items-center gap-1">
              <Image src={problem}/>
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
