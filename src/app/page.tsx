"use client";
import { useContext, useEffect } from "react";
import "modern-normalize";
import s from "./page.module.scss";
import Header from "@components/Header";
import VideoPlayer from "@components/VideoPlayer";
import PreviewStore from "@components/PreviewStore";
import Footer from "@components/Footer";
import { storeContext } from "./context/context";

export default function Home() {
  const { setIsVideoScrolled } = useContext(storeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      setIsVideoScrolled(scrollTop > viewportHeight - 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVideoScrolled]);

  return (
    <>
      <Header />
      <main className={s.main}>
        <VideoPlayer />
        <PreviewStore />
      </main>
      <Footer />
    </>
  );
}
