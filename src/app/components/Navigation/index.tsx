"use client";

import { useState } from "react";
import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.png";
import Basket from "@assets/basket.svg";
import SideBar from "../SideBar";

const Navigation = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        <Image className={s.logo} src={logo} alt="Logo" />
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
