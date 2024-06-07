import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body className=''>
        <div className="relative w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
        <div className="">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
