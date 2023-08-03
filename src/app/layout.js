import React from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../../public/fontello/css/fontello.css";

const font = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "Мобайл апп хийх | гар утасын апп | Codesign ХХК | Кодсигн ХХК",
  description:
    "гар утасны апп, мобайл апп хийх, application hiih, вэб сайт хийх, website hiih, cargo app, карго апп, delivery app, хүргэлтйин апп, хүргэлтйин апп, iphone, android, андройд, application хийдэг компани",
  robots: "index, follow",
  openGraph: {
    type: "website",
    site_name: "Codesign",
    url: "https://codesign.mn/",
    image: "https://codesign.mn/img/codesign.png",
    title: "Мобайл апп хийх | гар утасын апп | Codesign ХХК | Кодсигн ХХК",
    description:
      "Codesign ХХК нь компани, онлайн худалдааны сайт, ios андройд апп, карго апп, хүргэлтийн апп хамгийн найдвартай хийдэг. Утас: 7211-2121",
  },
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
