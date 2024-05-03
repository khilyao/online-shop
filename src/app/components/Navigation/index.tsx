import s from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "@assets/avatar.png";
import logo from "@assets/logo.png";
import Basket from "@assets/basket.svg";
import Burger from "@assets/burger.svg";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Link href={"/"}>
        <Image className={s.logo} src={logo} alt="Logo"></Image>
      </Link>
      <div className={s.navBtnGroup}>
        <Image className={s.avatar} src={avatar} alt="Avatar"></Image>
        <Basket className={s.basket} />
        <Burger className={s.burger} />
      </div>
    </nav>
  );
};

export default Navigation;
