"use client";
import { useEffect, useContext } from "react";
import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import lightLogo from "@assets/lightLogo.png";
import darkLogo from "@assets/darkLogo.png";
import Basket from "@assets/basket.svg";
import SideBar from "@components/SideBar";
import { storeContext } from "@/app/context/context";

const Navigation = () => {
  const { screenSize, isVideoScrolled } = useContext(storeContext);

  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        {screenSize > 1024 && !isVideoScrolled ? (
          <Image
            className={s.logo}
            src={lightLogo}
            alt="Logo"
            priority={true}
          />
        ) : (
          <Image className={s.logo} src={darkLogo} alt="Logo" priority={true} />
        )}
      </Link>
      <div className={s.navBtnGroup}>
        <Basket className={s.basket} fill={"#000"} />
        <SideBar />
      </div>
    </nav>
  );
};

export default Navigation;
