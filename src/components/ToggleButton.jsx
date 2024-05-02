import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <motion.button
      className="fixed top-9 left-8 w-8 h-8 rounded-3xl bg-transparent border-none cursor-pointer z-[9999]"
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg
        className=""
        width="50"
        height="48"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={{
            open: { d: "M4 4L31 20 " },
            close: { d: "M4 2H30", y: 1, transition: {} },
          }}
          stroke="#6366f1"
          stroke-width="3"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { opacity: 0, y: 11 },
            close: { opacity: 1, y: 11, transition: { delay: 0 } },
          }}
          d="M4 2H30 "
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { d: "M4 18L31 4 " },
            close: {
              d: "M4 2H30",
              y: 21,
              transition: { stroke: { delay: 0.05, ease: "easeInOut" } },
            },
          }}
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
};

export default ToggleButton;
