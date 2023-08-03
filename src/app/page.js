import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/component/Slider";
import Features from "../component/Features";

export default function Home() {
  return (
    <>
      <div className={"container " + styles.mb12 + " " + styles.mt6}>
        <Slider />
      </div>
      <div className={"container " + styles.mb12}>
        <div className={styles.cardCol + " " + styles.mr2}>
          <div className={styles.card}>
            <h3>Ур чадвар</h3>
            <p>
              Codesign ХХК-нь туршлагатай, мэргэжлийн хамт олноос бүрдсэн
              компани юм.
            </p>
          </div>
        </div>
        <div className={styles.cardCol + " " + styles.mr2}>
          <div className={styles.card}>
            <h3>Хариуцлага</h3>
            <p>Хамгийн зөв шийдэл, төгс гүйцэтгэл, түргэн шуурхай</p>
          </div>
        </div>
        <div className={styles.cardCol}>
          <div className={styles.card}>
            <h3>Бүтээлч байдал</h3>
            <p>
              Энгийн вэб сайтаас эхлээд олон үйлдэл, шийдэлтэй вэб сайт болон
              мобайл апп
            </p>
          </div>
        </div>
      </div>
      <div className={"container " + styles.mb6}>
        <Features />
      </div>
    </>
  );
}
