import FAQ from "../FAQ";
import Subscribe from "../Subscribe";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Subscribe />
      <FAQ />
    </footer>
  );
};

export default Footer;
