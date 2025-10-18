import "./globals.css";
import { Poppins, Montserrat_Alternates } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserratAlt = Montserrat_Alternates({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat-alt",
});

export const metadata = {
  title: "Qurrath Ul Aain | Portfolio",
  description: "App Developer • AI Enthusiast • Cyber Explorer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserratAlt.variable}`}>
        {children}
      </body>
    </html>
  );
}
