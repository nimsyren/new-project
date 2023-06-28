"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./scrollto.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const handleScroll = (event) => {
      window.scrollY > 500 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={
          visible ? styles.button + " " + styles.visible : styles.button
        }
      >
        <Image src="/svg/up.svg" alt="up icon" width={20} height={20} />
      </button>
    </>
  );
}
