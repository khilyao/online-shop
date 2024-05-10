"use client";
import s from "./Subscribe.module.scss";
import { useState, ChangeEvent } from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
            type="email"
            className={s.field}
            value={email}
            onChange={handleInput}
          />
          <div className={s.subscribeBlock}>
            <div className={s.checkboxField}>
              <Checkbox
                {...label}
                id="newsletter"
                name="newsletter"
                className={s.checkbox}
                sx={{
                  color: "#fffbfc",
                  "&.Mui-checked": {
                    color: "#6c8ef6",
                  },
                }}
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
