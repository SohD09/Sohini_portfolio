import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      backgroundColor: "rgb(30 41 59)",
      clipPath: "circle(1600px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    close: {
      backgroundColor: "rgb(255,255, 255)",
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "close"}
      className=" top-0 left-0 bg-slate-950 flex flex-col justify-center items-center text-black z-[9999]"
    >
      <motion.div
        variants={variants}
        className=" fixed top-0 left-0 bottom-0 w-[400px] bg-slate-950 z-[9999]"
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
