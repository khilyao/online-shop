import MotionList from "../MotionList";
import s from "./SideBar.module.scss";
import { Slant as Hamburger } from "hamburger-react";

type Props = {
  screenSize: number;
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isOpen: boolean) => void;
};

const SideBar = ({ screenSize, isSideBarOpen, setIsSideBarOpen }: Props) => {
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

  return (
    <aside
      className={s.sidebar}
      style={{ pointerEvents: isSideBarOpen ? "auto" : "none" }}
    >
      <div className={s.menuBtn}>
        <Hamburger
          size={screenSize > 1024 ? 38 : 30}
          toggled={isSideBarOpen}
          color={screenSize > 1024 ? "#fff" : "#000"}
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
