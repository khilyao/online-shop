import Container from "../Container";
import s from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <section>
      <Container>
        <h3 className={s.title}>Have a question about a product or order?</h3>
        <a href="" className={s.subtitle}>
          Help Center
        </a>
      </Container>
    </section>
  );
};

export default FAQ;
