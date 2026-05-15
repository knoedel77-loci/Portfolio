import type { Metadata } from "next";
import { Roboto, Ranchers, Playfair_Display,Zen_Dots, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zendots",
});

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sora",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="de"
  className={`dark ${roboto.variable} ${playfair.variable} ${sora.variable} ${zendots.variable}`}
>
      <body>
        <Navbar/>
        
          {children}
        
        <Footer/>
      </body>
    </html>
  );
}
