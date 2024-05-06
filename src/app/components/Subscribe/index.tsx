import s from "./Subscribe.module.scss";

const Subscribe = () => {
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
          <input type="text" className={s.field} />
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
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
