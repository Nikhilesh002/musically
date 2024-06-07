import "./globals.css";
import Navbar from "@/components/Navbar";

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
        </body>
    </html>
  );
}
