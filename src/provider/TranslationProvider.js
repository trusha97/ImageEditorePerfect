// "use client";
// import '../i18n/i18n';

// export default function TranslationProvider({ children }) {
//   return <>{children}</>;
// }



"use client";
import { useEffect } from "react";
import i18n from "../i18n/i18n";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function TranslationProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const cookieLang = Cookies.get("lang");
    const pathLang = pathname?.split("/")[1];
    const langToUse = cookieLang || pathLang || "en";

    if (i18n.language !== langToUse) {
      i18n.changeLanguage(langToUse);
    }
  }, [pathname]);

  return <>{children}</>;
}



