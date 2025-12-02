"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie'; // ✅ import js-cookie
import Image from 'next/image';
import Paragraph from "../Typography/text/Paragraph";
import { useState, useEffect, useRef } from 'react';
// Dropdown menu component for dashboard header (must be top-level for hooks)
function DashboardMenuDropdown() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);
    // Close dropdown on outside click
    useEffect(() => {
        if (!open) return;
        function handle(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, [open]);

    return (
        <div className="relative ml-2" ref={menuRef}>
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 py-2"
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
            {open && (
                <div className="absolute right-0  w-[195px] h-[116px] bg-white rounded-lg shadow-lg border border-gray-100 z-50 mt-2">
                    <div className='mt-5 mr-[15px] mb-5 ml-[15px]'>
                        <button
                            className="flex items-center pl-[10px]  w-[165px] h-[36px]  gap-2 rounded-md bg-[#8B5CF6] text-white font-medium text-base leading-5 focus:outline-none"
                            style={{ background: '#8B5CF6' }}
                            onClick={() => { setOpen(false); router.push('/de/dashboard'); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.93652 7.51562H2.9375C3.18525 7.5816 3.3314 7.83651 3.26562 8.08301L1.84766 13.3701C1.76067 13.7023 1.96037 14.0492 2.29395 14.1416H2.29297L13.5332 17.1514C13.8668 17.2393 14.2107 17.0406 14.2969 16.7109V16.71L14.8652 14.6055C14.9319 14.3587 15.1856 14.2107 15.4336 14.2783L15.5215 14.3115C15.6868 14.3945 15.7863 14.5699 15.7754 14.7539L15.7607 14.8467L15.1934 16.9482C15.0104 17.6408 14.3806 18.0996 13.6924 18.0996C13.562 18.0996 13.4281 18.0838 13.2959 18.0488V18.0479L2.0498 15.0371V15.0361C1.22618 14.8092 0.735088 13.9567 0.951172 13.1328L2.37012 7.84375C2.43707 7.59546 2.69135 7.45295 2.93652 7.51562Z" fill="white" stroke="white" stroke-width="0.2" />
                                <path d="M17.001 1.90039C17.8582 1.90042 18.5554 2.59691 18.5557 3.4541V12.1816C18.5557 13.039 17.8584 13.7363 17.001 13.7363H5.36426C4.50705 13.7361 3.81055 13.0389 3.81055 12.1816V3.4541C3.81078 2.59704 4.5072 1.90062 5.36426 1.90039H17.001ZM5.36426 2.82715C5.0191 2.82738 4.73754 3.10895 4.7373 3.4541V12.1816C4.7373 12.527 5.01896 12.8084 5.36426 12.8086H17.001C17.3464 12.8086 17.6279 12.5271 17.6279 12.1816V3.4541C17.6277 3.10882 17.3463 2.82718 17.001 2.82715H5.36426Z" fill="white" stroke="white" stroke-width="0.2" />
                                <path d="M7.5459 4.08252C8.40316 4.08252 9.10035 4.77902 9.10059 5.63623C9.10059 6.49363 8.4033 7.19092 7.5459 7.19092C6.68869 7.19069 5.99219 6.49349 5.99219 5.63623C5.99242 4.77917 6.68884 4.08275 7.5459 4.08252ZM7.5459 5.00928C7.20074 5.00951 6.91918 5.29107 6.91895 5.63623C6.91895 5.98158 7.2006 6.26393 7.5459 6.26416C7.89139 6.26416 8.17383 5.98173 8.17383 5.63623C8.1736 5.29093 7.89125 5.00928 7.5459 5.00928Z" fill="white" stroke="white" stroke-width="0.2" />
                                <path d="M13.7344 5.93652C14.0386 5.93653 14.3289 6.05178 14.5488 6.25781L14.6387 6.35156L18.4424 10.7891L18.4961 10.8662C18.6009 11.0545 18.5627 11.2975 18.3926 11.4434L18.3916 11.4424C18.1977 11.6092 17.9059 11.5879 17.7383 11.3926L13.9346 6.95508V6.9541C13.8829 6.89502 13.813 6.86329 13.7344 6.86328H13.7256C13.7108 6.86204 13.6765 6.8668 13.6338 6.88574C13.5924 6.90414 13.5552 6.93036 13.5322 6.95801L10.4463 10.6611C10.3633 10.7607 10.2422 10.8201 10.1123 10.8262L10.1104 10.8271L10.1094 10.8262C10.0096 10.8324 9.91507 10.8046 9.83594 10.752L9.76172 10.6914L8.45801 9.3877C8.37184 9.30202 8.22602 9.29117 8.125 9.35547L8.08496 9.3877L4.65039 12.8223C4.56044 12.9122 4.44161 12.9579 4.32324 12.958C4.20476 12.958 4.08565 12.9127 3.99512 12.8232V12.8223C3.81425 12.6414 3.81425 12.3479 3.99512 12.167L7.42969 8.73242C7.88037 8.28174 8.6626 8.28174 9.11328 8.73242L10.0576 9.67676L12.8193 6.36523C13.044 6.09615 13.3741 5.9397 13.7256 5.93652H13.7344Z" fill="white" stroke="white" stroke-width="0.2" />
                            </svg>
                            My Images
                        </button>
                        <button
                            className="flex items-center mt-1 pl-[10px] w-[165px] h-[36px] gap-2 rounded-md text-[#2A2A33] font-medium text-base leading-5 focus:outline-none hover:bg-[#8B5CF6] hover:text-white transition-colors group"
                            onClick={() => { setOpen(false); router.push('/de/account'); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 1.9502C12.1501 1.9502 14.172 2.78725 15.6924 4.30762C17.2127 5.82798 18.0498 7.8499 18.0498 10C18.0498 12.1501 17.2127 14.172 15.6924 15.6924C14.172 17.2127 12.1501 18.0498 10 18.0498C7.8499 18.0498 5.82798 17.2127 4.30762 15.6924C2.78725 14.172 1.9502 12.1501 1.9502 10C1.9502 7.8499 2.78725 5.82798 4.30762 4.30762C5.82798 2.78725 7.8499 1.9502 10 1.9502ZM10 11.4375C7.72527 11.4375 5.79823 13.1592 5.52441 15.3936C6.73973 16.4038 8.29987 17.0127 10 17.0127C11.6998 17.0127 13.2594 16.4035 14.4746 15.3936C14.3528 14.4008 13.9013 13.4718 13.1885 12.7588C12.3366 11.9071 11.2043 11.4375 10 11.4375ZM10 2.9873C6.13333 2.9873 2.9873 6.13333 2.9873 10C2.9873 11.7198 3.61033 13.2963 4.6416 14.5176C4.90735 13.5172 5.44895 12.6064 6.2207 11.8877C6.74711 11.3973 7.35564 11.0206 8.0127 10.7686C7.14813 10.148 6.58301 9.13553 6.58301 7.99219C6.58307 6.10794 8.11574 4.5752 10 4.5752C11.8843 4.5752 13.4169 6.10794 13.417 7.99219C13.417 9.13496 12.8522 10.1469 11.9883 10.7676C12.705 11.0425 13.3629 11.4665 13.9219 12.0254C14.6162 12.7198 15.1068 13.5814 15.3564 14.5166C16.3879 13.2954 17.0127 11.72 17.0127 10C17.0127 6.13333 13.8667 2.9873 10 2.9873ZM10 5.6123C8.68793 5.6123 7.62018 6.68002 7.62012 7.99219C7.62012 9.30429 8.68789 10.3721 10 10.3721C11.3121 10.3721 12.3799 9.30429 12.3799 7.99219C12.3798 6.68002 11.3121 5.6123 10 5.6123Z"
                                    className="transition-colors group-hover:fill-white group-hover:stroke-white"
                                    fill="#2A2A33" stroke="#2A2A33" stroke-width="0.1" />
                            </svg>
                            My Account
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
import LanguageModal from './common/languageModal';
import { languages, isValidLanguage, getLanguageByCode } from '../config/languages';
import { logo } from 'utils/image';

export default function DashboardHeader() {
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
            <nav className="mx-auto flex sm:items-end items-center justify-between sm:py-7 py-4  px-4 sm:h-24 h-14 max-w-[1510px]">
                {/* Logo */}
                <Link href={`/${currentLang}`}>
                    <Image src={logo} alt="logo" className="sm:h-9 h-6 sm:w-56 w-36" />
                </Link>

                {/* Mobile Right Section */}
                <div className="flex  items-center gap-5 ">

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
                    <DashboardMenuDropdown />
                </div>
            </nav>





            {/* LanguageModal */}
            <LanguageModal
                isOpen={isLangOpen}
                onClose={() => setIsLangOpen(false)}
                currentLang={selectedLang.code}
                handleChangeLanguage={handleChangeLanguage} // ✅ fixed function name
            />
        </div>
    );
}
