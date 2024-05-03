import { motion } from "framer-motion";
import Link from "next/link";
import itemVariants from "@animation/itemVariants";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const MotionItem = ({ children }: Props) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={""}>{children}</Link>
    </motion.li>
  );
};

export default MotionItem;
