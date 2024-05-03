import "modern-normalize";
import Image from "next/image";
import s from "./page.module.scss";
import Header from "@components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.container}>
          <h1>fsdfsd</h1>
        </div>
      </main>
    </>
  );
}
