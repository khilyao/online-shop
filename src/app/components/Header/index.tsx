"use client";
import Navigation from "@components/Navigation";
import Container from "../Container";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVideoScrolled, setIsVideoScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        setIsVideoScrolled(scrollTop > viewportHeight - 35);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={s.header}
      style={{ backgroundColor: isVideoScrolled ? "#fff" : "" }}
    >
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
