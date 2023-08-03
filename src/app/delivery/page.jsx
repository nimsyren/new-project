"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";
import Visible from "../../component/Visible";

export default function Delivery() {
  const [statusVisbile, setStatusVisible] = useState(0);

  const handleVisible = (n) => {
    setStatusVisible(n);
    console.log(statusVisbile);
  };

  return (
    <Fragment>
      <Visible
        className={styles.section}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(0);
          }
        }}
      >
        <div className={styles.container + " " + styles.slider}>
          <div className={styles.column}>
            <div
              className={
                statusVisbile >= 0
                  ? styles.box + " " + styles.slideInRight
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 0 ? "visible" : "hidden" }}
            >
              <Image
                className="image"
                src="/image/computer.png"
                alt="image"
                width="400"
                height="300"
              />
            </div>
          </div>
          <div className={styles.column + " " + styles.right}>
            <div
              className={
                statusVisbile >= 0
                  ? styles.box + " " + styles.slideInLeft
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 0 ? "visible" : "hidden" }}
            >
              <p className={styles.title}>Хүргэлтийн систем</p>
              <p className={styles.subtitle}>
                Захиалгын барааг байгаа газраас нь аван хэрэглэгчид хүргэж өгөх,
                хаана байгааг хянах хүргэлтийн системийн түрээсийн үйлчилгээг
                үзүүлж байна.
              </p>
            </div>
          </div>
        </div>
      </Visible>
      <Visible
        className={styles.section + " " + styles.bg}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(1);
          }
        }}
      >
        <div className={styles.container + " " + styles.reverse}>
          <div className={styles.column}>
            <div
              className={
                statusVisbile >= 1
                  ? styles.box + " " + styles.slideInLeft
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 1 ? "visible" : "hidden" }}
            >
              <Image
                className="image"
                src="/image/map.png"
                alt="image"
                width="150"
                height="300"
              />
            </div>
          </div>
          <div className={styles.column + " " + styles.left}>
            <div
              className={
                statusVisbile >= 1
                  ? styles.box + " " + styles.slideInRight
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 1 ? "visible" : "hidden" }}
            >
              <p className={styles.title}>Бараагаа хаана байгааг хянах</p>
              <p className={styles.subtitle}>
                Захиалагч болон худалдаалагч аль аль тал нь бараагаа хаана явааг
                хялбар хянах боломжийг бүрдүүлсэн.
              </p>
            </div>
          </div>
        </div>
      </Visible>
      <Visible
        className={styles.section}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(2);
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.column}>
            <div
              className={
                statusVisbile >= 2
                  ? styles.box + " " + styles.slideInRight
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 2 ? "visible" : "hidden" }}
            >
              <Image
                className="image"
                src="/image/qrcode.png"
                alt="image"
                width="150"
                height="300"
              />
            </div>
          </div>
          <div className={styles.column + " " + styles.right}>
            <div
              className={
                statusVisbile >= 2
                  ? styles.box + " " + styles.slideInLeft
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 2 ? "visible" : "hidden" }}
            >
              <p className={styles.title}>Жолоочийн хүргэлтийн апп</p>
              <p className={styles.subtitle}>
                Хүргэлтийн жолооч бүр QR код суурьтай гар утасны апп ашиглан
                хурдан шуурхай, алдаагүй хүргэлт хийх боломжтой
              </p>
            </div>
          </div>
        </div>
      </Visible>
      <Visible
        className={styles.section + " " + styles.bg}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(3);
          }
        }}
      >
        <div className={styles.container + " " + styles.reverse}>
          <div className={styles.column}>
            <div
              className={
                statusVisbile >= 3
                  ? styles.box + " " + styles.slideInLeft
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 3 ? "visible" : "hidden" }}
            >
              <Image
                className="image"
                src="/image/plus.png"
                alt="image"
                width="150"
                height="300"
              />
            </div>
          </div>
          <div className={styles.column + " " + styles.left}>
            <div
              className={
                statusVisbile >= 3
                  ? styles.box + " " + styles.slideInRight
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 3 ? "visible" : "hidden" }}
            >
              <p className={styles.title}>Татан авалт хийх</p>
              <p className={styles.subtitle}>
                Худалдаалагч тал хүргэлтийн компанид татан авалт хийх захиалга
                өгөх боломжтой.
              </p>
            </div>
          </div>
        </div>
      </Visible>
      <Visible
        className={styles.section}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(4);
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.column}>
            <div
              className={
                statusVisbile >= 4
                  ? styles.box + " " + styles.slideInRight
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 4 ? "visible" : "hidden" }}
            >
              <Image
                className="image"
                src="/image/report.png"
                alt="logo"
                width="150"
                height="300"
              />
            </div>
          </div>
          <div className={styles.column + " " + styles.right}>
            <div
              className={
                statusVisbile >= 4
                  ? styles.box + " " + styles.slideInLeft
                  : styles.box
              }
              style={{ visibility: statusVisbile >= 4 ? "visible" : "hidden" }}
            >
              <p className={styles.title}>Тайлан</p>
              <p className={styles.subtitle}>
                Нийт хүргэлтийг жолооч, захиалагчаар гаргаж, хянах боломжтой.
              </p>
            </div>
          </div>
        </div>
      </Visible>
      <Visible
        className={styles.section + " " + styles.bg}
        setElementStatus={(status) => {
          if (status === true) {
            handleVisible(5);
          }
        }}
      >
        <div className={styles.container + " " + styles.containerColumn}>
          <p className={styles.title}>Үйлчилгээний түрээсийн үнийн санал</p>
          <Tabs />
        </div>
      </Visible>
    </Fragment>
  );
}
