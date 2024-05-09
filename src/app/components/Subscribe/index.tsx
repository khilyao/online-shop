"use client";
import s from "./Subscribe.module.scss";
import { useState, ChangeEvent } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div>
          <h2 className={s.title}>Subscribe to Our Newsletter</h2>
          <p className={s.subtitle}>
            Sign up to receive updates on new products and special offers
          </p>
        </div>
      </div>
      <div className={s.formWrapper}>
        <form className={s.form}>
          <input
            type="text"
            className={s.field}
            value={email}
            onChange={handleInput}
          />
          <div className={s.subscribeBlock}>
            <div className={s.checkboxField}>
              <input
                id="newsletter"
                name="newsletter"
                className={s.checkbox}
                type="checkbox"
              />
              <label htmlFor="newsletter" className={s.signature}>
                Yes, subscribe me to your newsletter
              </label>
            </div>
            <button type="submit" className={s.button}>
              Send a message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
