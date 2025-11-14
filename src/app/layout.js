// export const metadata={title:'Home',description:'Next + Tailwind'}; 
// export default function RootLayout({children}) {
//  return (
//   <html lang="en">
//    <body className="bg-gray-900 text-white">{children}</body>
//   </html>
//  );
// }



import TranslationProvider from "../provider/TranslationProvider";
import "../style/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = { title: "Generative Ai" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TranslationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}