import { InView } from "react-intersection-observer";
import FAQ from "../FAQ";
import Subscribe from "../Subscribe";
import s from "./Footer.module.scss";
import { useContext } from "react";
import { storeContext } from "@context/context";

const Footer = () => {
  const { setIsModalOpen } = useContext(storeContext);

  return (
    <InView
      as="footer"
      className={s.footer}
      onChange={() => {
        setIsModalOpen(false);
      }}
    >
      <Subscribe />
      <FAQ />
    </InView>
  );
};

export default Footer;
