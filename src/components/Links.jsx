import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};
const Links = ({ setOpen }) => {
  const items = ["Home", "About", "Skills", "Portfolio", "Contact"];
  return (
    <motion.div
      variants={variants}
      className=" absolute text-gray-50 w-full h-full flex flex-col justify-center items-center z-[9999] "
    >
      {items.map((item) => (
        <>
          <motion.div
            variants={itemVariants}
            className="w-[70%] h-[17%] flex flex-col justify-around items-center "
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              onClick={() => setOpen((prev) => !prev)}
              className="w-full pt-3 h-11 text-center hover:bg-slate-700 rounded-md"
              href={`#${item}`}
              key={item}
            >
              {item}
            </motion.a>
            <div className="h-2 w-full border-b-4 border-white opacity-10 "></div>
          </motion.div>
        </>
      ))}
    </motion.div>
  );
};

export default Links;
