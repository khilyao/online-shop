import s from "./Container.module.scss";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
