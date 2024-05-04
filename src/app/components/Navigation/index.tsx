"use client";
import { useState, useEffect } from "react";
import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import lightLogo from "@assets/lightLogo.png";
import darkLogo from "@assets/darkLogo.png";
import Basket from "@assets/basket.svg";
import SideBar from "@components/SideBar";

type Props = {
  isVideoScrolled: boolean;
};

const Navigation = ({ isVideoScrolled }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1280);

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

  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        {screenSize > 1024 && !isVideoScrolled ? (
          <Image className={s.logo} src={lightLogo} alt="Logo" />
        ) : (
          <Image className={s.logo} src={darkLogo} alt="Logo" />
        )}
      </Link>
      <div className={s.navBtnGroup}>
        <Basket className={s.basket} fill={"#000"} />
        <SideBar
          screenSize={screenSize}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;
