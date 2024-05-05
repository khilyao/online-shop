import { motion } from "framer-motion";
import Link from "next/link";
import itemVariants from "@animation/itemVariants";
import { ReactNode } from "react";
import s from "./MotionItem.module.scss";

type Props = {
  children?: ReactNode;
};

const MotionItem = ({ children }: Props) => {
  return (
    <motion.li
      className={s.item}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={""} className={s.link}>
        {children}
      </Link>
    </motion.li>
  );
};

export default MotionItem;
