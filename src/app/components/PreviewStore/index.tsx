import s from "./PreviewStore.module.scss";
import AnimatedText2 from "@components/UI/AnimatedText2";
import dynamic from "next/dynamic";

const ProductList = dynamic(() => import("@components/ProductList"), {
  ssr: false,
});

const PreviewStore = () => {
  return (
    <section className={s.section}>
      <div className={s.store}>
        <AnimatedText2 text={"In our store"} className={s.title} />
      </div>
      <ProductList />
    </section>
  );
};

export default PreviewStore;
