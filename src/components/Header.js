"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie'; // ✅ import js-cookie
import Image from 'next/image';
import Paragraph from "../Typography/text/Paragraph";
import { useState, useEffect } from 'react';
import LoginModal from './common/LoginModal';
import LanguageModal from './common/languageModal';
import { languages, isValidLanguage, getLanguageByCode } from '../config/languages';
import { logo } from 'utils/image';

export default function Header() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  // ✅ Prevent background scroll
  useEffect(() => {
    const body = document.body;
    if (isLoginOpen || isLangOpen || isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => (body.style.overflow = '');
  }, [isLoginOpen, isLangOpen, isMenuOpen]);


  // get current pathname from Next so the header reacts to URL changes
  const pathname = usePathname();

  // determine a normalized current language code used in links (must match one of `languages[].code`)
  // priority: URL first (leading segment), then cookie, then i18n/browser, then fallback
  const getFirstLocaleFromPath = (path) => {
    if (!path) return null;
    const parts = path.split('/').filter(Boolean); // removes empty parts
    if (!parts || parts.length === 0) return null;
    // find the first segment that matches a known language code
    for (let i = 0; i < parts.length; i++) {
      const seg = parts[i].toLowerCase();
      if (languages.some(l => l.code === seg)) return seg;
    }
    return null;
  };

  const stripLeadingLocales = (path) => {
    // Remove ALL leading language codes from the path, leaving only the rest
    if (!path) return '/';
    const parts = path.split('/').filter(Boolean);
    let idx = 0;
    // skip all initial segments that are valid language codes
    while (idx < parts.length && isValidLanguage(parts[idx])) {
      idx += 1;
    }
    const rest = parts.slice(idx).join('/');
    return rest ? `/${rest}` : '/';
  };

  const getNormalizedLang = () => {
    // 1) URL first
    if (typeof window !== 'undefined' || pathname) {
      const url = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
      const found = getFirstLocaleFromPath(url);
      if (found && languages.some(l => l.code === found)) return found;
    }

    // 2) cookie (persisted choice)
    if (typeof window !== 'undefined') {
      const cookieLang = Cookies.get('lang');
      if (cookieLang && languages.some(l => l.code === cookieLang)) return cookieLang;
    }

    // 3) i18n language (take base part if region is present)
    if (i18n && i18n.language) {
      const full = i18n.language;
      if (languages.some(l => l.code === full)) return full;
      const base = full.split('-')[0];
      if (languages.some(l => l.code === base)) return base;
    }

    // fallback
    return 'en';
  };

  const currentLang = getNormalizedLang();

  const changeLang = (code) => {
    // set i18n language
    i18n.changeLanguage(code);

    // persist choice in cookie
    Cookies.set('lang', code, { expires: 365, path: '/' });

    // update URL while removing any leading locale segments and preserving the rest
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';
    const suffix = stripLeadingLocales(path);
    router.push(`/${code}${suffix}`);
  };

  // initialize selected language from URL (pathname), cookie, or browser locale
  useEffect(() => {
    if (typeof window === 'undefined' || !i18n) return;
    
    // 1) try to detect from current pathname (URL first priority)
    const langFromUrl = getFirstLocaleFromPath(pathname);
    if (langFromUrl && languages.some(l => l.code === langFromUrl)) {
      const found = languages.find((l) => l.code === langFromUrl);
      setSelectedLang(found);
      try {
        i18n.changeLanguage(langFromUrl);
      } catch (e) {
        // ignore
      }
      return;
    }
    
    // 2) fallback to cookie or browser
    const cookieLang = Cookies.get('lang');
    const browser = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    const initial = (cookieLang || browser).toLowerCase();
    const found = languages.find((l) => l.code === initial) || languages[0];
    setSelectedLang(found);
    // sync i18n
    try {
      i18n.changeLanguage(found.code);
    } catch (e) {
      // ignore
    }
  }, [pathname, i18n]);

  const handleChangeLanguage = (lang) => {
    if (!lang) return;
    setSelectedLang(lang);
    changeLang(lang.code);
    setIsLangOpen(false);
  };

  return (
    <div className=" bg-white">
      {/* Navbar */}
      <nav className="mx-auto flex sm:items-end items-center justify-between sm:py-7 py-4 lg:px-12 px-4 sm:h-24 h-14">
        {/* Logo */}
        <Link href={`/${currentLang}`}>
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
                countryCode={selectedLang.flagCode || selectedLang.code}
              svg
              style={{ width: "25px", height: "20px" }}
              className="sm:!w-[28px] !w-[1.375rem] sm:!h-[20px] !h-4"
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
          <Link href={`/${currentLang}/background-remove-tool`}>
            <Paragraph
              level={2}
              text={t("Background Remove Tool")}
              className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
            />
          </Link>
          <Link href={`/${currentLang}/unblur-tool`}>
            <Paragraph
              level={2}
              text={t("Unblur Tool")}
              className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
            />
          </Link>
          <Link href={`/${currentLang}/pricing`}>
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
            href={`/${currentLang}/signup`}
            className="border border-[var(--btnbg)] text-[var(--btnbg)] font-bold text-base leading-5 h-10 w-[103px] flex items-center justify-center rounded-[var(--radius)]"
          >
            {t("Sign up")}
          </Link>
          <button
            className='bg-[var(--btnbg)] text-white font-bold text-base h-10 w-[103px] flex items-center justify-center rounded-[var(--radius)]'
            onClick={() => {
              setIsMenuOpen(false);
              setIsLoginOpen(true);
            }}
          >
            {t("Log in")}
          </button>
        </div>

      </nav>



      {/* LoginModal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      {/* <PaymentPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}/> */}
      {/* <AccountCreateModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}/> */}
      {/* <ResetPassword isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}/> */}
      {/* <ToolSelectModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
      {/* <PasteImageURLModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}/> */}
      {/* <ImageEditProcessingModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}

        
      {/* LanguageModal */}
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
            <Link href={`/${currentLang}/background-remove-tool`} onClick={() => setIsMenuOpen(false)}>
              <Paragraph
                level={2}
                text={t("Background Remove Tool")}
                className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
              />
            </Link>
            <Link href={`/${currentLang}/unblur-tool`} onClick={() => setIsMenuOpen(false)}>
              <Paragraph
                level={2}
                text={t("Unblur Tool")}
                className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
              />
            </Link>
            <Link href={`/${currentLang}/pricing`} onClick={() => setIsMenuOpen(false)}>
              <Paragraph
                level={2}
                text={t("Pricing")}
                className="!font-medium text-[20px] leading-4 !text-[var(--headertext)]"
              />
            </Link>
            <Link
              href={`/${currentLang}/signup`}
              className="border border-[var(--btnbg)] text-[var(--btnbg)] font-bold text-base leading-5 h-10 w-[103px] flex items-center justify-center rounded-[var(--radius)]"
            >
              {t("Sign up")}
            </Link>
            <button
              className='bg-[var(--btnbg)] text-white font-bold text-base h-10 w-[103px] flex items-center justify-center rounded-[var(--radius)]'
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
}
