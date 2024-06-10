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
import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { innerWidth } = useWindowSize();
  const screenSize = innerWidth || 0;

  const [hasAnimated, setHasAnimated] = useState(false);
  const animation = { duration: 9000, easing: (t: number) => t };
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: getSlidesPerView(screenSize),
      spacing: getSpacingPerView(screenSize),
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

  function getSlidesPerView(screenWidth: number): number {
    if (screenWidth > 1200) {
      return 6;
    }

    if (screenWidth > 1024) {
      return 5;
    }

    return 0;
  }

  function getSpacingPerView(screenWidth: number): number {
    if (screenWidth > 1700) {
      return 150;
    }

    if (screenWidth > 1536) {
      return 100;
    }

    if (screenWidth > 1400) {
      return 70;
    }

    if (screenWidth > 1200) {
      return 50;
    }

    if (screenWidth > 1024) {
      return 50;
    }

    return 0;
  }

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
      src={img}
      alt="product"
    />
  ));

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && window.scrollY > 0) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <>
      {screenSize > 1024 ? (
        <motion.div
          initial={{ opacity: 0, translateY: "-40px" }}
          animate={hasAnimated ? { opacity: 1, translateY: "0px" } : {}}
          transition={{ duration: 1 }}
          ref={ref}
          className={`keen-slider`}
        >
          {desktopPhoto}
        </motion.div>
      ) : (
        <motion.ul
          initial={{ opacity: 0, translateX: "-80px" }}
          animate={hasAnimated ? { opacity: 1, translateX: "0px" } : {}}
          transition={{ duration: 1 }}
          className={s.list}
        >
          {mobilePhoto}
        </motion.ul>
      )}
    </>
  );
};

export default ProductList;
