"use client";
import React from "react";
import styles from "./tabs.module.css";

const Tabs = () => {
  const [active, setActive] = React.useState(1);

  const handleTabChange = (index) => {
    setActive(index);
  };

  return (
    <div className={styles.paddingTop}>
      {/* tab header buttons */}
      <div className={styles.container}>
        <button
          className={
            active === 1
              ? styles.tabButton + " " + styles.active
              : styles.tabButton
          }
          onClick={(e) => handleTabChange(1)}
          aria-label="tab1"
        >
          1 Сараар төлбөл
        </button>
        <button
          className={
            active === 2
              ? styles.tabButton + " " + styles.active
              : styles.tabButton
          }
          onClick={(e) => handleTabChange(2)}
          aria-label="tab2"
        >
          6 Сараар төлбөл
        </button>
        <button
          className={
            active === 3
              ? styles.tabButton + " " + styles.active
              : styles.tabButton
          }
          onClick={(e) => handleTabChange(3)}
          aria-label="tab3"
        >
          1 Жилээр төлбөл
        </button>
      </div>
      {/* 1 tab content */}
      {active === 1 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Энгийн багц</p>
              </div>
              <div className={styles.priceBody}>
                <div className={styles.priceDescr}>
                  <p className={styles.priceMain}>200,000₮</p>
                  <p className={styles.priceSecondary}>/сар</p>
                </div>
              </div>
              <div className={styles.priceFooter}>
                <ul className={styles.priceList}>
                  <li>1-9 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Ахисан багц</p>
              </div>
              <div className={styles.priceBody}>
                <div className={styles.priceDescr}>
                  <p className={styles.priceMain}>400,000₮</p>
                  <p className={styles.priceSecondary}>/сар</p>
                </div>
              </div>
              <div className={styles.priceDescr}>
                <ul className={styles.priceList}>
                  <li>10-20 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* 2 tab content */}
      {active === 2 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Энгийн багц</p>
              </div>
              <div className={styles.priceBody}>
                <div className={styles.priceDescr}>
                  <p className={styles.priceMain}>175,000₮</p>
                  <p className={styles.priceSecondary}>/сар</p>
                </div>
              </div>
              <div className={styles.priceFooter}>
                <ul className={styles.priceList}>
                  <li>1-9 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Ахисан багц</p>
              </div>
              <div className={styles.priceBody}>
                <div className={styles.priceDescr}>
                  <p className={styles.priceMain}>350,000₮</p>
                  <p className={styles.priceSecondary}>/сар</p>
                </div>
              </div>
              <div className={styles.priceDescr}>
                <ul className={styles.priceList}>
                  <li>10-20 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* 3 tab content */}
      {active === 3 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Энгийн багц</p>
              </div>
              <div className={styles.priceBody}>
                <p className={styles.priceMain}>150,000₮</p>
                <p className={styles.priceSecondary}>/сар</p>
              </div>
              <div className={styles.priceFooter}>
                <ul className={styles.priceList}>
                  <li>1-9 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.priceHeader}>
                <p className={styles.priceTitle}>Ахисан багц</p>
              </div>
              <div className={styles.priceBody}>
                <div className={styles.priceDescr}>
                  <p className={styles.priceMain}>300,000₮</p>
                  <p className={styles.priceSecondary}>/сар</p>
                </div>
              </div>
              <div className={styles.priceDescr}>
                <ul className={styles.priceList}>
                  <li>10-20 жолооч</li>
                  <li>Хүргэлтийн тоо хязгааргүй</li>
                  <li>Хүргэлтийн тайлан</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Tabs;
