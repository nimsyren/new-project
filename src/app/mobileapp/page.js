"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";
import Visible from "../../component/Visible";

export default function MobileApp() {
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
          <div className={styles.column + " " + styles.colCenter}>
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
                src="/svg/phone.svg"
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
              <p className={styles.title}>Мобайл апп хөгжүүлэх</p>
              <p className={styles.subtitle}>
                Ухаалаг утасны хэрэглээ асар хурдтай өсөн нэмэгдэж байгаа өнөө
                үед та мобайл аппликэйшн (Mobile Application) -аар дамжуулан
                өөрийн бизнесээ сурталчилж, үйл ажиллагаагаа хялбаржуулах нь
                хамгийн оновчтой суваг болоод байгаа нь тодорхой байна. CodeSign
                ХХК нь танай байгууллагын үйл ажиллагааны зорилго, тулгарч
                байгаа асуудал, зорилтот зах зээл зэрэгт тохируулан хамгийн
                сүүлийн үеийн технологийг ашиглан мобайл аппликэйшн хийж байна.
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
          <div className={styles.column + " " + styles.colCenter}>
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
                src="/svg/phone.svg"
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
              <p className={styles.title}>Захиалагчийн шаардлага</p>
              <p className={styles.subtitle}>
                Мобайл аппликейшн хийлгэж байгаа зорилго, тулгарч байгаа
                асуудал, зорилтот зах зээл зэргийг захиалагчтай сайтар ярилцан,
                танай компанийн үйл ажиллагаа болон түүнд тавигдах техникийн
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
          <div className={styles.column + " " + styles.colCenter}>
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
                src="/svg/phone.svg"
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
              <p className={styles.title}>Тестлэх</p>
              <p className={styles.subtitle}>
                Гүйцэтгэсэн аппликейшнаа захиалагчийн серверт байршуулан бодит
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
          <div className={styles.column + " " + styles.colCenter}>
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
                src="/svg/phone.svg"
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
              <p className={styles.title}>Сургалт</p>
              <p className={styles.subtitle}>
                Аппликейшнийг сайтар тестэлж чанарын хяналт хийсний дараа
                аппликейшнийг эх кодын хамт захиалагчид хүлээлгэн өгнө.
                Хүлээлгэн өгөхдөө агуулга удирдах систем болон аппликейшнийг
                ажиллуулах талаар сургалт зохион байгуулж, агуулга удирдлах
                системийн гарын авлагаар хангана.
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
          <div className={styles.column + " " + styles.colCenter}>
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
                src="/svg/phone.svg"
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
              <p className={styles.title}>Шинчлэл(Update), Арчилгаа</p>
              <p className={styles.subtitle}>
                Аппликейшнийг захиалагчид хүлээлгэн өгснөөр энэхүү аппликейшн
                хөгжүүлэх төслийн ажил дуусгавар болохгүй. CodeSign ХХК нь
                захиалагчийнхаа аппликейшнийг тогтмол шинчлэл(update) хийж,
                тогтвортой ажиллагааг хангах үйлчилгээнүүдийг үзүүлэн эргэх
                холбоотой ажилладаг.
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
          <p className={styles.title}>Үйлчилгээний үнийн санал</p>
          <Tabs />
        </div>
      </Visible>
    </Fragment>
  );
}
