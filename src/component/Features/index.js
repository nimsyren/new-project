"use client";
import React from "react";
import styles from "./features.module.css";
import Image from "next/image";

const Features = () => {
  const [active, setActive] = React.useState(1);

  const handleChange = (index) => {
    setActive(index);
  };

  return (
    <>
      <div className={styles.column35}>
        <div className={styles.featureCard + " " + styles.right}>
          <div>
            <h3>Уян хатан үнэ, үнэлгээ</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor augue et justo eleifend tempor. Nullam auctor, velit non
              hendrerit eleifend.
            </p>
          </div>
          <div className={styles.cardIconCont}>
            <div className={styles.cardIcon}>
              <i className="icon-code" />
            </div>
          </div>
        </div>
        <div className={styles.featureCard + " " + styles.right}>
          <div>
            <h3 className={styles.cardTitle}>Дизайны ухаалаг шийдэл</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor augue et justo eleifend tempor. Nullam auctor, velit non
              hendrerit eleifend.
            </p>
          </div>
          <div className={styles.cardIconCont}>
            <div className={styles.cardIcon}>
              <i className="icon-code" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column3}>
        <div className={styles.featureImgCont}>
          <Image
            className={styles.bgImg}
            src="/svg/phone.svg"
            width={240}
            height={480}
          />
          <div className={styles.slCont}>
            <Image
              className={styles.slImg}
              src="/image/appscreen1.png"
              width={220}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className={styles.column35}>
        <div className={styles.featureCard}>
          <div className={styles.cardIconCont}>
            <div className={styles.cardIcon}>
              <i className="icon-code" />
            </div>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Дэвшилтэт технологи</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor augue et justo eleifend tempor. Nullam auctor, velit non
              hendrerit eleifend.
            </p>
          </div>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.cardIconCont}>
            <div className={styles.cardIcon}>
              <i className="icon-code" />
            </div>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Харилцагчийн сэтгэл ханамж</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor augue et justo eleifend tempor. Nullam auctor, velit non
              hendrerit eleifend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
