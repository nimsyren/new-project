import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Tabs from "../../component/Tabs";

export default function Delivery() {
  return (
    <Fragment>
      <div className={styles.sectionbg}>
        <div className={styles.container + " " + styles.slider}>
          <div className={styles.column}>
            <div className={styles.box}>
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
            <div className={styles.box}>
              <p className={styles.title}>Хүргэлтийн систем</p>
              <p className={styles.subtitle}>
                Захиалгын барааг байгаа газраас нь аван хэрэглэгчид хүргэж өгөх,
                хаана байгааг хянах хүргэлтийн системийн түрээсийн үйлчилгээг
                үзүүлж байна.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container + " " + styles.reverse}>
          <div className={styles.column}>
            <div className={styles.box}>
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
            <div className={styles.box}>
              <p className={styles.title}>Бараагаа хаана байгааг хянах</p>
              <p className={styles.subtitle}>
                Захиалагч болон худалдаалагч аль аль тал нь бараагаа хаана явааг
                хялбар хянах боломжийг бүрдүүлсэн.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionbg}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.box}>
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
            <div className={styles.box}>
              <p className={styles.title}>Жолоочийн хүргэлтийн апп</p>
              <p className={styles.subtitle}>
                Хүргэлтийн жолооч бүр QR код суурьтай гар утасны апп ашиглан
                хурдан шуурхай, алдаагүй хүргэлт хийх боломжтой
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container + " " + styles.reverse}>
          <div className={styles.column}>
            <div className={styles.box}>
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
            <div className={styles.box}>
              <p className={styles.title}>Татан авалт хийх</p>
              <p className={styles.subtitle}>
                Худалдаалагч тал хүргэлтийн компанид татан авалт хийх захиалга
                өгөх боломжтой.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionbg}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.box}>
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
            <div className={styles.box}>
              <p className={styles.title}>Тайлан</p>
              <p className={styles.subtitle}>
                Нийт хүргэлтийг жолооч, захиалагчаар гаргаж, хянах боломжтой.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container + " " + styles.containerColumn}>
          <p className={styles.title}>Үйлчилгээний түрээсийн үнийн санал</p>
          <Tabs />
        </div>
      </div>
    </Fragment>
  );
}
