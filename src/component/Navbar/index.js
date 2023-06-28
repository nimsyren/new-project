import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Image
        src="/image/codesign.png"
        alt="logo"
        width="120"
        height="60"
        priority={true}
      />
      <div className={styles.menuContainer}>
        <Link href="/" className={styles.menuLink + " " + styles.mr}>
          Нүүр
        </Link>
        <Link href="/delivery" className={styles.menuLink + " " + styles.mr}>
          Үйлчилгээ
        </Link>
        <Link href="/aboutus" className={styles.menuLink + " " + styles.mr}>
          Бидний тухай
        </Link>
        <Link href="/contactus" className={styles.menuLink}>
          Холбоо барих
        </Link>
      </div>
      <div className={styles.contact}>
        <p>Утас: 72112121</p>
        <p>И-мэйл: info@codesign.mn</p>
      </div>
    </nav>
  );
}
