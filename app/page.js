"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./styles/main.module.scss";

// IMAGES
import Image from "next/image";
import p1 from "/public/p1.jpg";
import p2 from "/public/p2.png";
import p3 from "/public/p3.jpg";
import p4 from "/public/p4.jpg";
import c1 from "/public/c2_img.jpg";
import c2 from "/public/c2_img2.jpg";
import c3 from "/public/c2_img3.jpg";

const BG_IMAGES = ["main1.jpg", "main2.jpg", "main3.jpg", "main4.jpg"];
const PERFORMANCES = {
  0: { title: "땅끝마을 출장", location: "경상남도 창원시 진해구 용원동", usage: "수질 검사", img: p1 },
  1: { title: "신항만 출장", location: "경상남도 창원시 진해구 용원동", usage: "수질 검사", img: p2 },
  2: { title: "양산 출장", location: "경상남도 창원시 진해구 용원동", usage: "수질 검사", img: p3 },
  3: { title: "백령도 출장", location: "경상남도 창원시 진해구 용원동", usage: "수질 검사", img: p4 },
};
const BUSINESS = {
  0: {
    title_eng: "Test Agency",
    title: "수질조사 대행",
    index: "01",
    desc: "도스이엔지가 맡은 현장이 어디든 100% 사업을 성공적으로 완수해오고 있습니다.",
    img: c1,
  },
  1: {
    title_eng: "Development Business",
    title: "개발사업",
    index: "02",
    desc: "참신한 상품개발과 독창적인 상품의 지속적인 개발을 통해 최고의 Devleopment & Planning을 자랑합니다.",
    img: c2,
  },
  2: {
    title_eng: "Business Consulting",
    title: "사업컨설팅",
    index: "03",
    desc: "도스이엔지만의 정밀한 사업분석 기법을 통해 최고 수준의 컨설팅 보고서와 사업제안서를 공급합니다.",
    img: c3,
  },
};

export default function Home() {
  // Landing Section Background Image
  const landingRef = useRef(null);
  const [imageSrcIndex, setImageSrcIndex] = useState(0);
  useEffect(() => {
    const slide = setInterval(() => {
      setImageSrcIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);
    return () => {
      clearInterval(slide);
    };
  }, []);

  useEffect(() => {
    const myRef = landingRef.current;
    myRef.style.setProperty("background-image", `url(${BG_IMAGES[imageSrcIndex]})`);
  }, [imageSrcIndex]);

  return (
    <>
      <div className={styles.frame}>
        {/* Landing */}
        <div className={styles.landing}>
          <div ref={landingRef} className={styles.landing_bg} key={imageSrcIndex}></div>
          <div className={styles.landing_title}>
            <p className={styles.header}>New normal 시대의 선두주자</p>
            <p className={styles.body}>
              당신의 <span>성공 파트너</span>
            </p>
            <p className={styles.body}>
              <span>도스이엔지</span>가 함께합니다.
            </p>
          </div>
        </div>
        {/* Performance */}
        <div className={styles.performance}>
          <div className={styles.box}>
            <p className={styles.header}>PERFORMANCE</p>
            <p className={styles.title}>대행 실적</p>
            <div className={styles.list}>
              {Object.keys(PERFORMANCES).map((item, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.card_image_box}>
                      <Image src={PERFORMANCES[item].img} alt="" />
                    </div>
                    <div className={styles.desc}>
                      <p className={styles.title}>{PERFORMANCES[item].title}</p>
                      <div className={styles.line}></div>
                      <div className={styles.subtitle}>
                        <p className={styles.left}>위치</p>
                        <p className={styles.right}>{PERFORMANCES[item].location}</p>
                      </div>
                      <div className={styles.subtitle}>
                        <p className={styles.left}>용도</p>
                        <p className={styles.right}>{PERFORMANCES[item].usage}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.business}>
          <div className={styles.box}>
            <p className={styles.header}>BUSINESS</p>
            <p className={styles.title}>비즈니스</p>
            <div className={styles.business_box}>
              {Object.keys(BUSINESS).map((item, index) => {
                return (
                  <div key={index}>
                    <div className={styles.card}>
                      <div className={styles.bg}>
                        <Image src={BUSINESS[item].img} alt="" />
                      </div>
                      <div className={styles.col}>
                        <p className={styles.title_eng}>{BUSINESS[item].title_eng}</p>
                        <p className={styles.title}>{BUSINESS[item].title}</p>
                        <div className={styles.hide}>
                          <div className={styles.line}></div>
                          <p className={styles.desc}>{BUSINESS[item].desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.black_box} />
        </div>
      </div>
    </>
  );
}
