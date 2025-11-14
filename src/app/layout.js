export const metadata={title:'Home',description:'Next + Tailwind'}; 
export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className="bg-gray-900 text-white">{children}</body>
  </html>
 );
}