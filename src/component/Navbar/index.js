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
        <div className={styles.menuLink + " " + styles.mr + " " + styles.drop}>
          <a>Үйлчилгээ</a>
          <div className={styles.dropdown}>
            <div className={styles.dropdownCont}>
              <Link
                href="/delivery"
                className={styles.dropdownMenu + " " + styles.mb}
              >
                Хүргэлтийн апп
              </Link>
              <Link
                href="/mobileapp"
                className={styles.dropdownMenu + " " + styles.mb}
              >
                Мобайл апп
              </Link>
              <Link href="/website" className={styles.dropdownMenu}>
                Веб сайт
              </Link>
            </div>
          </div>
        </div>
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
