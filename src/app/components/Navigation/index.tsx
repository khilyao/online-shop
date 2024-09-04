"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
// import lightLogo from "@assets/lightLogo.png";
// import darkLogo from "@assets/darkLogo.png";
import logo from "@assets/yadin.png";
import SideBar from "@components/SideBar";
import { storeContext } from "@/app/context/context";
// import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  // const [logo, setLogo] = useState<ReactNode | null>(null);
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const { isVideoScrolled } = useContext(storeContext);

  // const generateContentLogo = () => {
  //   return !isDesktop || isVideoScrolled ? (
  //     <Image className={s.logo} src={darkLogo} alt="Logo" />
  //   ) : (
  //     <Image className={s.logo} src={lightLogo} alt="Logo" />
  //   );
  // };

  // useEffect(() => {
  // const newLogo = generateContentLogo();

  //   setLogo(newLogo);
  // }, [isVideoScrolled]);

  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        <Image
          className={s.logo}
          width={120}
          height={120}
          src={logo}
          alt="Logo"
        />
      </Link>
      <div className={s.navBtnGroup}>
        <SideBar />
      </div>
    </nav>
  );
};

export default Navigation;
