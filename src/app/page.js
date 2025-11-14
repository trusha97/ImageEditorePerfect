// export default function Home(){
//  return (
//   <div className='p-10 text-center text-3xl font-bold'>
//     Next.js + Tailwind Project Working!
//   </div>
//  );
// }



"use client";
import { useEffect } from "react";
import "../style/globals.css";


export default function HomePageRedirect() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/en");
    }
  }, []);

  return null;
}