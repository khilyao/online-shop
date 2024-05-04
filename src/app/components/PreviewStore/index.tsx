import ProductList from "../ProductList";
import s from "./PreviewStore.module.scss";
import AnimatedText from "@components/UI/AnimatedText";

const PreviewStore = () => {
  return (
    <section className={s.section}>
      <div style={{ marginBottom: "70px" }}>
        <AnimatedText text={"In our store"} className={s.title} />
      </div>
      <ProductList />
    </section>
  );
};

export default PreviewStore;
