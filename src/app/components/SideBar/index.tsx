"use client";
import { useContext } from "react";
import MotionList from "../MotionList";
import s from "./SideBar.module.scss";
import { Slant as Hamburger } from "hamburger-react";
import { storeContext } from "@/app/context/context";

const SideBar = () => {
  const pages = [
    "All products",
    "Phone",
    "PC",
    "Accessories",
    "Request product",
    "Request repair",
    "Help",
    "Contact",
  ];

  const { isSideBarOpen, isVideoScrolled, screenSize, setIsSideBarOpen } =
    useContext(storeContext);

  return (
    <aside
      className={s.sidebar}
      style={{ pointerEvents: isSideBarOpen ? "auto" : "none" }}
    >
      <div className={s.menuBtn}>
        <Hamburger
          size={screenSize > 1024 ? 38 : 30}
          toggled={isSideBarOpen}
          color={screenSize > 1024 && !isVideoScrolled ? "#fff" : "#000"}
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
