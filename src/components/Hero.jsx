import React from "react";
import Button from "./Button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiMouseSimpleLight } from "react-icons/pi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-50%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 6,
    },
  },
};
const imagevariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Hero = () => {
  const [text] = useTypewriter({
    words: ["", "A Web Developer", "Designer"],
    loop: true,
  });
  return (
    <div className="hero relative h-[calc(100vh-100px)] w-screen bg-gradient-to-b from-slate-950 to-blue-950 ">
      <div className="h-full max-w-[80%] m-auto ">
        <motion.div
          variants={textvariants}
          initial="initial"
          animate="animate"
          className="flex flex-col h-full justify-center gap-10"
        >
          <motion.h1
            variants={textvariants}
            className=" text-4xl font-bold  text-indigo-400 leading-relaxed"
          >
            Hi, I am <br />
            <motion.span className="hover:text-cyan-300 tracking-[0.2em]">
              SOHINI DAS
            </motion.span>
          </motion.h1>
          <motion.h2
            variants={textvariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, ease: "easeIn" }}
            className="text-7xl text-white font-semibold tracking-wider"
          >
            <span> {text}</span>
            <span>
              <Cursor />
            </span>
          </motion.h2>
          <motion.div variants={textvariants} className="flex flex-row gap-4">
            <a href="#Portfolio">
              <Button text={"Projects"} />
            </a>
            <a href="#Contact">
              <Button text={"Contact Me"} />
            </a>
          </motion.div>
          <motion.div variants={textvariants} animate="scrollButton">
            <div className="w-5 flex flex-col items-center">
              <PiMouseSimpleLight className=" h-9 w-9" />
              <BsChevronDoubleDown className="h-9 w-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className=" absolute w-full -bottom-10 left-0 text-[23vh] tracking-wide whitespace-nowrap overflow-x-hidden text-violet-900 opacity-10 "
      >
        WEB DEVELOPER
      </motion.div>
      <motion.div
        variants={imagevariants}
        initial="initial"
        animate="animate"
        className=" absolute right-24 -top-11 h-full"
      >
        <img className="" src="../src/assets/images/hero.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
