// "use client";
// import Link from 'next/link';
// import { useTranslation } from 'react-i18next';
// import ReactCountryFlag from 'react-country-flag';
// import { useRouter } from 'next/navigation';

// const languages = [
//   { code: 'en', name: 'English', flag: 'GB' },
//   { code: 'de', name: 'Deutsch', flag: 'DE' },
//   { code: 'fr', name: 'Français', flag: 'FR' },
//   { code: 'es', name: 'Español', flag: 'ES' },
//   { code: 'hi', name: 'हिन्दी', flag: 'IN' },
//   { code: 'cz', name: 'Čeština', flag: 'CZ' },
// ];

// export default function Header() {
//   const { t, i18n } = useTranslation();
//   const router = useRouter();
//   const current = i18n.language || 'en';

//   function changeLang(code) {
//     i18n.changeLanguage(code);
//     const path = typeof window !== 'undefined' ? window.location.pathname : '/';
//     const newPath = path.replace(/^\/([a-zA-Z-]{2,5})/, '') || '/';
// router.push(`/${code}${newPath}`);

//   }

//   return (
//     <header className="w-full border-b bg-white">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href={`/${current}`} className="font-bold text-xl">Image Tools</Link>
//         <nav className="flex items-center gap-4">
//           <Link href={`/${current}/background-remove-tool`} className="hidden md:inline">{t('Background Remove Tool')}</Link>
//           <Link href={`/${current}/unblur-tool`} className="hidden md:inline">{t('Unblur Tool')}</Link>
//           <Link href={`/${current}/pricing`} className="hidden md:inline">{t('Pricing')}</Link>
//         </nav>
//         <div className="flex items-center gap-3">
//           {languages.map(l => (
//             <button key={l.code} onClick={() => changeLang(l.code)} className={`px-2 py-1 rounded ${current === l.code ? 'bg-black text-white' : 'bg-gray-100'}`}>
//               <div className="flex items-center gap-2">
//                 <ReactCountryFlag svg countryCode={l.flag} style={{width:18,height:14}}/>
//                 <span className="hidden sm:inline">{l.name}</span>
//               </div>
//             </button>
//           ))}
//           <Link href={`/${current}/signup`} className="ml-3 px-3 py-1 border rounded">{t('Sign up')}</Link>
//           <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">{t('Log in')}</button>
//         </div>
//       </div>
//     </header>
//   );
// }







"use client";

import React, { useState, useEffect } from "react";
import Paragraph from "@/Typography/text/Paragraph";
import { logo } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "../common/LoginModal";
import LanguageModal from "../common/LanguageModal";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { getMultipleCookies, setCookie } from "@/utils/cookieHelper";
import { languages } from "@/utils/data";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "GB", name: "English" });

  // ✅ Initialize language from cookie or browser
  useEffect(() => {
    if (!i18n) return;
    const cookieLang = getMultipleCookies("lang")?.lang;
    const browserLang = navigator.language?.slice(0, 2).toUpperCase() || "GB";
    const initialLang = cookieLang || browserLang;

    const foundLang = languages.find((l) => l.code === initialLang) || languages[2];
    setSelectedLang(foundLang);
    i18n.changeLanguage(foundLang.code.toLowerCase());
  }, [i18n]);

  // ✅ Handle language change (called from LanguageModal)
  const handleChangeLanguage = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.code);
    setCookie("lang", lang.code, { sameSite: true });

    // Redirect with locale in URL
    window.location.pathname = `/${lang.code}${window.location.pathname.replace(/^\/[a-z]{2}/, "")}`;
    setIsLangOpen(false);
  };


  // ✅ Disable page scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = isLoginOpen || isLangOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginOpen, isLangOpen]);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="mx-auto flex sm:items-end items-center justify-between sm:py-6.5 py-4 lg:px-12.5 px-4 sm:h-22.5 h-14.5">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="sm:h-9 h-6 sm:w-56 w-36" />
        </Link>

        {/* Mobile Right Section */}
        <div className="flex xl:hidden items-center gap-3">
          {/* Language Button */}
          <button
            onClick={() => setIsLangOpen(true)}
            className="flex items-center gap-1.5 sm:p-2.5 p-1.5 sm:w-16 w-[47px] sm:h-10 h-[26px] bg-[var(--bgdpwhite)] rounded-[var(--radius)]"
          >
            <ReactCountryFlag
              countryCode={selectedLang.code}
              svg
              style={{ width: "25px", height: "20px" }}
              className="sm:!w-[28px] !w-5.5 sm:!h-[20px] !h-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M8.34634 3.97109L5.22134 7.09609C5.19232 7.12515 5.15785 7.1482 5.11992 7.16393C5.08198 7.17965 5.04131 7.18775 5.00025 7.18775C4.95918 7.18775 4.91851 7.17965 4.88058 7.16393C4.84264 7.1482 4.80818 7.12515 4.77915 7.09609L1.65415 3.97109C1.6104 3.92739 1.5806 3.87168 1.56852 3.81103C1.55644 3.75038 1.56263 3.68751 1.5863 3.63038C1.60997 3.57325 1.65007 3.52442 1.7015 3.49009C1.75294 3.45575 1.8134 3.43745 1.87525 3.4375H8.12525C8.18709 3.43745 8.24756 3.45575 8.29899 3.49009C8.35043 3.52442 8.39052 3.57325 8.41419 3.63038C8.43786 3.68751 8.44405 3.75038 8.43197 3.81103C8.4199 3.87168 8.39009 3.92739 8.34634 3.97109Z"
                fill="black"
              />
            </svg>
          </button>

          {/* Burger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md sm:px-2.5 px-0 sm:py-2.5 py-1.5 text-gray-700"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-10 ml-10 mb-1.5">
          <Link href="/background-remove-tool">
            <Paragraph
              level={2}
              text={t("Background Remove Tool")}
              className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
            />
          </Link>
          <Link href="/unblur-tool">
            <Paragraph
              level={2}
              text={t("Unblur Tool")}
              className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
            />
          </Link>
          <Link href="/pricing">
            <Paragraph
              level={2}
              text={t("Pricing")}
              className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
            />
          </Link>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden xl:flex lg:flex-1 lg:justify-end items-center gap-6">
          {/* Language Button */}
          <button
            onClick={() => setIsLangOpen(true)}
            className="flex items-center gap-1.5 p-2.5 bg-[var(--bgdpwhite)] rounded-[var(--radius)]"
          >
            <ReactCountryFlag
              countryCode={(selectedLang.flagCode || selectedLang.code || "GB").toUpperCase()}
              svg
              style={{ width: "28px", height: "20px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M8.34634 3.97109L5.22134 7.09609C5.19232 7.12515 5.15785 7.1482 5.11992 7.16393C5.08198 7.17965 5.04131 7.18775 5.00025 7.18775C4.95918 7.18775 4.91851 7.17965 4.88058 7.16393C4.84264 7.1482 4.80818 7.12515 4.77915 7.09609L1.65415 3.97109C1.6104 3.92739 1.5806 3.87168 1.56852 3.81103C1.55644 3.75038 1.56263 3.68751 1.5863 3.63038C1.60997 3.57325 1.65007 3.52442 1.7015 3.49009C1.75294 3.45575 1.8134 3.43745 1.87525 3.4375H8.12525C8.18709 3.43745 8.24756 3.45575 8.29899 3.49009C8.35043 3.52442 8.39052 3.57325 8.41419 3.63038C8.43786 3.68751 8.44405 3.75038 8.43197 3.81103C8.4199 3.87168 8.39009 3.92739 8.34634 3.97109Z"
                fill="black"
              />
            </svg>
          </button>

          <Link
            href="/signup"
            className="border border-[var(--btnbg)] text-[var(--btnbg)] font-bold text-base leading-5 h-10 w-[103px] flex items-center justify-center rounded-[var(--radius)]"
          >
            {t("Sign up")}
          </Link>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-[var(--btnbg)] text-white font-bold text-base h-10 w-[103px] rounded-[var(--radius)]"
          >
            {t("Log in")}
          </button>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <LanguageModal
        isOpen={isLangOpen}
        onClose={() => setIsLangOpen(false)}
        currentLang={selectedLang.code}
        handleChangeLanguage={handleChangeLanguage} // ✅ fixed function name
      />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-white z-40 flex flex-col p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-6 text-2xl"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6">
            <Link href="/background-remove-tool" onClick={() => setIsMenuOpen(false)}>
              {t("Background Remove Tool")}
            </Link>
            <Link href="/unblur-tool" onClick={() => setIsMenuOpen(false)}>
              {t("Unblur Tool")}
            </Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
              {t("Pricing")}
            </Link>
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              {t("Sign up")}
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsLoginOpen(true);
              }}
            >
              {t("Log in")}
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;