import s from "./PreviewStore.module.scss";
import AnimatedText from "@components/UI/AnimatedText";

const PreviewStore = () => {
  return (
    <section className={s.section}>
      <AnimatedText text={"In our store"} className={s.title} />
    </section>
  );
};

export default PreviewStore;
