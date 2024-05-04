"use client";

import { useState, useEffect } from "react";
import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import logoLight from "@assets/logoLightTheme.png";
import logoDark from "@assets/logoDarkTheme.png";
import Basket from "@assets/basket.svg";
import SideBar from "../SideBar";

const Navigation = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [screenSize] = useState(window.innerWidth);
  console.log(screenSize);

  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        {screenSize > 1024 ? (
          <Image className={s.logo} src={logoDark} alt="Logo" />
        ) : (
          <Image className={s.logo} src={logoLight} alt="Logo" />
        )}
      </Link>
      <div className={s.navBtnGroup}>
        <Basket className={s.basket} fill={"#000"} />
        <SideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;
