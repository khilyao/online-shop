"use client";
import { useContext, useEffect, useState } from "react";
import MotionList from "../MotionList";
import s from "./SideBar.module.scss";
import { Slant as Hamburger } from "hamburger-react";
import { storeContext } from "@/app/context/context";
import { useMediaQuery } from "react-responsive";

const SideBar = () => {
  const pages = [
    "All Products",
    "Special Offers",
    "New Arrivals",
    "Eco technology",
    "Case to study",
  ];

  const { isSideBarOpen, isVideoScrolled, setIsSideBarOpen } =
    useContext(storeContext);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [hamburgerColor, setHamburgerColor] = useState<string>("#000");

  useEffect(() => {
    if (
      (typeof window !== "undefined" && !isVideoScrolled && isDesktop) ||
      isSideBarOpen
    ) {
      setHamburgerColor("#fff");
    } else {
      setHamburgerColor("#000");
    }
  }, [isVideoScrolled, isDesktop, isSideBarOpen]);

  return (
    <aside
      className={s.sidebar}
      style={{ pointerEvents: isSideBarOpen ? "auto" : "none" }}
    >
      <div className={s.menuBtn}>
        <Hamburger
          size={38}
          toggled={isSideBarOpen}
          color={hamburgerColor}
          toggle={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
        />
      </div>
      <MotionList items={pages} isListShouldOpen={isSideBarOpen}></MotionList>
    </aside>
  );
};

export default SideBar;
