"use client";
import Navigation from "@components/Navigation";
import Container from "../Container";
import s from "./Header.module.scss";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "@/app/context/context";

const Header = () => {
  const { isVideoScrolled } = useContext(storeContext);

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
