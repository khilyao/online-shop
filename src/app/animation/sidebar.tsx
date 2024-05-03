const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 4,
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

export default sidebar;
