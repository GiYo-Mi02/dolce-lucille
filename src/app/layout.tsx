import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
// IMPORT THE COMPONENTS
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans', 
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dolcè Lucille | Cake Atelier",
  description: "A digital archive of sweet moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${dmSans.variable} bg-cream text-espresso antialiased`}>
        {/* Navbar goes at the top */}
        <Navbar />
        
        {children}
        
        {/* Footer goes at the bottom */}
        <Footer />
      </body>
    </html>
  );
}