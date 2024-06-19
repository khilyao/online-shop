import s from "./PreviewStore.module.scss";
import AnimatedText from "@/app/components/UI/AnimatedText";
import dynamic from "next/dynamic";

const ProductList = dynamic(() => import("@components/ProductList"), {
  ssr: false,
});

const PreviewStore = () => {
  return (
    <section className={s.section}>
      <div className={s.store}>
        <AnimatedText text={"Our customers"} className={s.title} />
      </div>
      <ProductList />
    </section>
  );
};

export default PreviewStore;
