import "modern-normalize";
import s from "./page.module.scss";
import Header from "@components/Header";
import Container from "./components/Container";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.main}></main>
    </>
  );
}
