"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className: string;
};

const AnimatedText = ({ text, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <p ref={ref} className={className}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {text}
      </span>
    </p>
  );
};

export default AnimatedText;
