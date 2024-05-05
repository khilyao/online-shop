"use client";
import { useContext, useEffect } from "react";
import "modern-normalize";
import s from "./page.module.scss";
import Header from "@components/Header";
import VideoPlayer from "./components/VideoPlayer";
import PreviewStore from "@components/PreviewStore";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { storeContext } from "./context/context";

export default function Home() {
  const { setScreenSize, setIsVideoScrolled } = useContext(storeContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        setIsVideoScrolled(scrollTop > viewportHeight - 35);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setScreenSize, setIsVideoScrolled]);

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
