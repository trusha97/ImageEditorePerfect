// export const metadata={title:'Home',description:'Next + Tailwind'}; 
// export default function RootLayout({children}) {
//  return (
//   <html lang="en">
//    <body className="bg-gray-900 text-white">{children}</body>
//   </html>
//  );
// }



import { Suspense } from "react";
import TranslationProvider from "../provider/TranslationProvider";
import "../style/globals.css";
import HeaderController from "../components/HeaderController";
import FooterController from "../components/FooterController";
import UnsubscribeHeader from "components/UnsubscribeHeader";
// NOTE: DashboardHeader is auto-selected by HeaderController when needed.

export const metadata = { title: "Generative Ai" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TranslationProvider>
          <HeaderController />
          {/* <UnsubscribeHeader/> */}
          <main className="">{children}</main>
          <Suspense fallback={null}>
            <FooterController />
          </Suspense>
        </TranslationProvider>
      </body>
    </html>
  );
}