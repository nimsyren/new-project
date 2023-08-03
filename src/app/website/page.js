"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";
import Visible from "../../component/Visible";

export default function WebSite() {
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
                alt="website image 1"
                width="300"
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
              <p className={styles.title}>Веб сайт хийх</p>
              <p className={styles.subtitle}>
                Вэб сайт гэдэг нь бизнесийн салшгүй нэгэн хүчин зүйл бөгөөд
                харилцагч таны бизнесийг өргөтгөх хамгийн үр өгөөжтэй хэрэгсэл
                юм. Вэб сайт нь таны бизнестэй холбогдолтой бүхий л хүмүүстэй
                байнгын холбоог бий болгох хамгийн чухал хэрэгсэл юм. CodeSign
                ХХК нь таны үйл ажиллагаанд хамгийн тохиромжтой вэб сайтыг
                хөгжүүлэн, хамтран ажиллахад бэлэн байна.
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
                src="/image/computer.png"
                alt="website image 2"
                width="300"
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
              <p className={styles.title}>Захиалагчийн шаардлага</p>
              <p className={styles.subtitle}>
                Веб сайт хийлгэж байгаа зорилго, тулгарч байгаа асуудал,
                зорилтот зах зээл зэргийг захиалагчтай сайтар ярилцан, танай
                компанийн үйл ажиллагаа болон түүнд тавигдах техникийн
                шаардлагыг тодорхойлно.
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
                src="/image/computer.png"
                alt="website image 3"
                width="300"
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
              <p className={styles.title}>Тестлэх</p>
              <p className={styles.subtitle}>
                Гүйцэтгэсэн вэб сайтаа захиалагчийн серверт байршуулан бодит
                агуулга болон өгөгдөлийн үүсгэн ямар нэгэн алдаа, буруу
                ажиллагаа байгаа эсэхийг хуудас тус бүр, үйлдэл тус бүрээр
                сайтар тестэлж чанарын хяналт хийнэ.
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
                src="/image/computer.png"
                alt="website image 4"
                width="300"
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
              <p className={styles.title}>Сургалт</p>
              <p className={styles.subtitle}>
                Тестэлж чанарын хяналт хийсний дараа Вэб сайтаа эх кодын хамт
                захиалагчид хүлээлгэн өгнө. Хүлээлгэн өгөхдөө агуулга удирдах
                систем болон ажиллуулах талаар сургалт зохион байгуулж, агуулга
                удирдлах системийн гарын авлагаар хангана.
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
                src="/image/computer.png"
                alt="website image 5"
                width="300"
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
              <p className={styles.title}>Шинчлэл(Update), Арчилгаа</p>
              <p className={styles.subtitle}>
                Захиалагчид хүлээлгэн өгснөөр хөгжүүлэх төслийн ажил дуусгавар
                болохгүй. CodeSign ХХК нь захиалагчийнхаа вэб сайтыг тогтмол
                шинчлэл(update) хийж, тогтвортой ажиллагааг хангах
                үйлчилгээнүүдийг үзүүлэн эргэх холбоотой ажилладаг.
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
