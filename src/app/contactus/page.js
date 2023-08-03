import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";

export const metadata = {
  title: "Contact us | Холбоо барих | Codesign ХХК ",
  description:
    "cargo app, карго апп, delivery app, хүргэлтйин апп, хүргэлтйин апп, мобайл апп хийх, гар утасны апп, iphone, android, андройд, application hiih, application хийдэг компани",
  robots: "index, follow",
};

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Холбоо Барих</h1>
        <p>
          <strong>И-мэйл:</strong> info@codesign.mn
        </p>
        <p>
          <strong>Утас:</strong> 72112121
        </p>
      </div>
      <h3 className={styles.subTitle}>Санал хүсэлт</h3>
      <form>
        <div className={styles.cont + " " + styles.mb}>
          <div className={styles.col + " " + styles.pr}>
            <input
              className={styles.form}
              type="text"
              name="name"
              placeholder="Нэр"
            ></input>
          </div>
          <div className={styles.col + " " + styles.pr}>
            <input
              className={styles.form}
              type="text"
              name="email"
              placeholder="И-мэйл"
            ></input>
          </div>
          <div className={styles.col}>
            <input
              className={styles.form}
              type="text"
              name="phone"
              placeholder="Утас"
            ></input>
          </div>
        </div>
        <div className={styles.mb}>
          <textarea
            className={styles.form + " " + styles.textarea}
            type="text"
            name="message"
            placeholder="Захидал"
          ></textarea>
        </div>
        <div className={styles.rigth}>
          <button type="submit" className={styles.formBtn}>
            Илгээх
          </button>
        </div>
      </form>
    </div>
  );
}
