"use client";
import React, { useState } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const slider1 = [
  {
    title: "МОБАЙЛ АПП",
    text: "Бид хамгийн сүүлийн үеийн технологи, программчлалыг ашиглан таны хүссэн бүх төрлийн мобайл аппликэйшнийг бүтээж өгөхөд бэлэн байна",
  },
  {
    title: "ВЭБСАЙТ",
    text: "Манай компани таны хүссэн вэб сайтыг чанарын өндөр түвшинд хийж гүйцэтгэнэ. ",
  },
  {
    title: "ХҮРГЭЛТИЙН АПП",
    text: "Бараа хүргэлт түгээлтийн бүрэн цогц шийдлийг манай компани танд санал болгож байна.",
  },
];
const slider2 = [
  "/image/appscreen1.png",
  "/image/appscreen2.png",
  "/image/appscreen3.png",
];

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
      >
        {slider1.map((p, i) => (
          <SwiperSlide key={i} className={styles.slide1}>
            <div className={styles.slide1}>
              <h1>{p.title}</h1>
              <p>{p.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={
          "swiper-button-prev " + styles.navBtn + " " + styles.navBtnPrev
        }
      >
        <i
          className="icon-right-arrow"
          style={{ fontSize: "30px", lineHeight: 1 }}
        />
      </button>
      <div className={styles.navLine}></div>
      <button
        className={
          "swiper-button-next " + styles.navBtn + " " + styles.navBtnNext
        }
      >
        <i
          className="icon-left-arrow"
          style={{ fontSize: "30px", lineHeight: 1 }}
        />
      </button>
      <div className={styles.slider2Cont}>
        <Swiper
          className={styles.slider2}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
        >
          {slider2.map((s, i) => (
            <SwiperSlide key={i} className={styles.slide2}>
              <Image src={s} width={165} height={350}></Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          alt="phone"
          src="/svg/phone.svg"
          width={200}
          height={400}
          className={styles.slider2Image}
        />
      </div>
    </div>
  );
};

export default Slider;
