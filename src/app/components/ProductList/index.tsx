import Image from "next/image";
import amdLogo from "@assets/amdLogo.png";
import appleLogo from "@assets/appleLogo.png";
import dellLogo from "@assets/dellLogo.png";
import asusLogo from "@assets/asusLogo.png";
import hpLogo from "@assets/hpLogo.png";
import intelLogo from "@assets/intelLogo.png";
import s from "./ProductList.module.scss";

const ProductList = () => {
  const imgLinks = [amdLogo, appleLogo, dellLogo, asusLogo, hpLogo, intelLogo];
  return (
    <ul className={s.list}>
      {imgLinks.map((img, index) => (
        <li key={index} className={s.item}>
          <Image width={140} src={img} alt="product" />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
