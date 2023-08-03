import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";

export default function AboutUs() {
  return (
    <div className={"container"}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/working.jpg"
          alt="working"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h1 className={styles.pageTitle}>Бидний тухай</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin, neque non viverra lacinia, lorem urna suscipit arcu, in
          tempor lorem arcu eu ligula. Mauris ornare aliquet porta. Integer
          consequat est justo, ac ultricies turpis fringilla eleifend. Donec
          dictum viverra cursus. Nulla pharetra dignissim egestas. Cras
          condimentum aliquam eros, quis ullamcorper erat lobortis in. Sed vel
          laoreet purus. Proin ornare orci nec nunc malesuada, accumsan tempus
          tellus dictum. Suspendisse eu rutrum orci, id tempus neque. In
          hendrerit nibh ut diam condimentum aliquam eu in orci.
        </p>
      </div>
    </div>
  );
}
