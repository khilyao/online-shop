"use client";
import { useContext, useEffect, useState } from "react";
import "modern-normalize";
import s from "./page.module.scss";
import Header from "@components/Header";
import VideoPlayer from "@components/VideoPlayer";
import PreviewStore from "@components/PreviewStore";
import Footer from "@components/Footer";
import { storeContext } from "@context/context";
import Auth from "@components/Auth";
import Preload from "@components/Preload";

export default function Home() {
  const { setIsVideoScrolled } = useContext(storeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showMainContent ? (
        <Preload setShowMainContent={setShowMainContent} />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              <Header />
              <main className={s.main}>
                <VideoPlayer />
                <PreviewStore />
              </main>
              <Footer />
            </>
          ) : (
            <Auth onAuth={setIsAuthenticated} />
          )}
        </>
      )}
    </>
  );
}
