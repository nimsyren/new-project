import React from "react";
import styles from "./footer.module.css";
import ScrollToTop from "../ScrollToTop";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p>Powered by Codesign</p>
      </div>
      <ScrollToTop />
    </footer>
  );
}
