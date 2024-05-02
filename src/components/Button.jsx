import React from "react";
import { motion } from "framer-motion";
const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`py-2 px-3 font-semibold border-white border-2 rounded-xl cursor-pointer z-10 text-white hover:bg-white hover:text-slate-950`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
