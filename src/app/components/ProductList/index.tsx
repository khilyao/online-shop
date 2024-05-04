"use client";

import Image from "next/image";
import amdLogo from "@assets/amdLogo.png";
import appleLogo from "@assets/appleLogo.png";
import dellLogo from "@assets/dellLogo.png";
import asusLogo from "@assets/asusLogo.png";
import hpLogo from "@assets/hpLogo.png";
import intelLogo from "@assets/intelLogo.png";
import s from "./ProductList.module.scss";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animation = { duration: 10000, easing: (t: number) => t };
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 5,
      spacing: 100,
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const imgLinksMobile = [
    amdLogo,
    appleLogo,
    dellLogo,
    asusLogo,
    hpLogo,
    intelLogo,
  ];

  const imgLinksDesktop = [
    amdLogo,
    appleLogo,
    dellLogo,
    asusLogo,
    hpLogo,
    intelLogo,
    amdLogo,
    appleLogo,
    dellLogo,
    asusLogo,
    hpLogo,
    intelLogo,
  ];

  const mobilePhoto = imgLinksMobile.map((img, index) => (
    <li key={index} className={s.item}>
      <Image width={130} src={img} alt="product" />
    </li>
  ));

  const desktopPhoto = imgLinksDesktop.map((img, index) => (
    <Image
      key={index}
      className={`${s.item} keen-slider__slide`}
      width={130}
      src={img}
      alt="product"
    />
  ));

  return (
    <>
      {screenSize > 1024 ? (
        <motion.div
          initial={{ opacity: 0, translateX: "-80px", translateY: "30px" }}
          whileInView={{
            opacity: 1,
            scale: 1,
            translateX: "0px",
            translateY: "0px",
          }}
          transition={{ duration: 2.5 }}
          ref={ref}
          className={`keen-slider`}
        >
          {desktopPhoto}
        </motion.div>
      ) : (
        <>
          <motion.ul
            initial={{ opacity: 0, translateX: "-80px" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              translateX: "0px",
            }}
            transition={{ duration: 1 }}
            className={s.list}
          >
            {mobilePhoto}
          </motion.ul>
        </>
      )}
    </>
  );
};

export default ProductList;
