import MotionItem from "@components/MotionItem";
import { motion } from "framer-motion";
import sidebar from "@/app/animation/sidebar";
import s from "./MotionList.module.scss";

type Props = {
  items: string[];
  isListShouldOpen?: boolean;
};

const MotionList = ({ items, isListShouldOpen }: Props) => {
  return (
    <motion.ul
      className={s.motionMenu}
      variants={sidebar}
      animate={isListShouldOpen ? "open" : "closed"}
      style={{ background: isListShouldOpen ? "#0129ff" : "#fff" }}
      transition={{ duration: 1.4 }}
    >
      {items.map((page, index) => (
        <MotionItem key={index}>{page}</MotionItem>
      ))}
    </motion.ul>
  );
};

export default MotionList;
