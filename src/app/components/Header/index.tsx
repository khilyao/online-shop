import Navigation from "@components/Navigation";
import Container from "../Container";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
