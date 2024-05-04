import MotionList from "../MotionList";
import s from "./SideBar.module.scss";
import Burger from "@assets/menu.svg";
import MenuCLoseBtn from "@assets/menu-close.svg";

type Props = {
  isSideBarOpen?: boolean;
  setIsSideBarOpen: (isOpen: boolean) => void;
};

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }: Props) => {
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
      {isSideBarOpen ? (
        <MenuCLoseBtn
          fill={"#fff"}
          className={s.menuBtn}
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
        />
      ) : (
        <Burger
          className={s.menuBtn}
          onClick={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
        />
      )}
      <MotionList items={pages} isListShouldOpen={isSideBarOpen}></MotionList>
    </aside>
  );
};

export default SideBar;
