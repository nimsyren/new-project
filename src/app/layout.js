import React from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const font = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
