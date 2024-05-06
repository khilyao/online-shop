import Link from "next/link";
// import Image from "next/image";
// import lightLogo from "@assets/lightLogo.png";
import s from "./FAQ.module.scss";
// import { useMediaQuery } from "react-responsive";
// import { ReactNode, useContext, useEffect, useState } from "react";
// import { storeContext } from "@/app/context/context";

const FAQ = () => {
  // const [logoMarkup, setLogoMarkup] = useState<ReactNode | null>(null);
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  // const { isVideoScrolled } = useContext(storeContext);

  // const generateLogoMarkup = () => {
  //   return isDesktop ? (
  //     <Image
  //       width={45}
  //       height={45}
  //       className={s.logo}
  //       src={lightLogo}
  //       alt="Logo"
  //     />
  //   ) : (
  //     <div>fads</div>
  //   );
  // };

  // useEffect(() => {
  //   const logoMarkup = generateLogoMarkup();

  //   setLogoMarkup(logoMarkup);
  // }, []);

  return (
    <section>
      <div className={s.helpBlock}>
        <h3 className={s.question}>
          Have a question about a product or order?
        </h3>
        <a href="" className={s.helpCenter}>
          Help Center
        </a>
      </div>
      <div className={s.infoSection}>
        <div className={s.infoRow}>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Shop</h3>
            <Link href="" className={s.subtitle}>
              All Products
            </Link>
            <Link href="" className={s.subtitle}>
              Special Offers
            </Link>
            <Link
              href=""
              style={{ marginBottom: "27px" }}
              className={s.subtitle}
            >
              New Arrivals
            </Link>
            <Link href="" className={s.subtitle}>
              Speakers & Headphones
            </Link>
            <Link href="" className={s.subtitle}>
              Phones & Accessories
            </Link>
          </div>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Policy</h3>
            <Link href="" className={s.subtitle}>
              Terms & Conditions
            </Link>
            <Link
              href=""
              style={{ marginBottom: "27px" }}
              className={s.subtitle}
            >
              Privacy Policy
            </Link>
            <Link href="" className={s.subtitle}>
              Refund Policy
            </Link>
            <Link href="" className={s.subtitle}>
              Cookies Policy
            </Link>
            <Link href="" className={s.subtitle}>
              Accessibility Statement
            </Link>
          </div>
        </div>
        <div className={s.infoRow}>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Follow Us</h3>
            <a href="" className={s.subtitle}>
              Facebook
            </a>
            <a href="" className={s.subtitle}>
              Instagram
            </a>
            <a href="" className={s.subtitle}>
              Telegram
            </a>
            <span className={s.subtitle} style={{ marginTop: "18px" }}>
              &#169; 2024 by ITW
            </span>
          </div>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Contact</h3>
            <Link href="mailto:info@iec.com" className={s.subtitle}>
              info@iec.com
            </Link>
            <a href="tel:1234567890" className={s.subtitle}>
              123-456-7890
            </a>
            <a className={s.subtitle} style={{ marginTop: "22px" }}>
              Zuirch, SW 94158 Langstrass 123 ,
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
