import Link from "next/link";
import s from "./FAQ.module.scss";

const FAQ = () => {
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
              Cookies Policy
            </Link>
            <Link href="" className={s.subtitle}>
              Accessibility Statement
            </Link>
            <Link href="message.pdf" className={s.subtitle}>
              File
            </Link>
          </div>
        </div>
        <div className={s.infoRow}>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Follow Us</h3>
            <Link href="" className={s.subtitle}>
              Facebook
            </Link>
            <Link href="" className={s.subtitle}>
              Instagram
            </Link>
            <Link href="" className={s.subtitle}>
              Telegram
            </Link>
            <Link href="" className={s.subtitle}>
              LinkedIn
            </Link>
            <span className={s.subtitle} style={{ marginTop: "18px" }}>
              &#169; 2024 by creative clout
            </span>
          </div>
          <div className={s.infoBlock}>
            <h3 className={s.title}>Contact</h3>
            <Link href="mailto:info@iec.com" className={s.subtitle}>
              info@bubublu.com
            </Link>
            <a href="tel:0788888888" className={s.subtitle}>
              0788888888
            </a>
            <Link href="" className={s.subtitle} style={{ marginTop: "22px" }}>
              Zuirch, SW 94158 Langstrass 123
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
