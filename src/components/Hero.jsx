import React from "react";
import Button from "./Button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiMouseSimpleLight } from "react-icons/pi";
import { BsChevronDoubleDown } from "react-icons/bs";
import resume from "../assets/resume/Resume.pdf";
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
    x: "-100%",
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
    <div className="hero relative h-[calc(100vh-100px)] bg-gradient-to-b from-slate-950 to-blue-950 ">
      <div className="h-full max-w-[80%] m-auto ">
        <motion.div
          variants={textvariants}
          initial="initial"
          animate="animate"
          className="flex flex-col h-full gap-10 justify-center text-left items-start mobile:h-1/2 mobile:text-center mobile:w-full mobile:gap-5 mobile:items-center"
        >
          <motion.h1
            variants={textvariants}
            className=" font-bold text-indigo-400 leading-relaxed text-4xl mobile:text-2xl "
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
            className=" text-white font-semibold tracking-wider text-7xl tablet:text-4xl mobile:text-3xl"
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
            <a href={resume} download>
              <Button text={"Resume"} />
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
        className=" absolute w-full -bottom-10 left-0 text-[23vh] tracking-wide whitespace-nowrap overflow-hidden text-violet-900 opacity-10 mobile:hidden tablet:text-[9vh] tablet:tracking-tighter "
      >
        WEB DEVELOPER
      </motion.div>
      <motion.div
        variants={imagevariants}
        initial="initial"
        animate="animate"
        className="absolute h-full right-24 bottom-0 w-auto tablet:w-[50%] tablet:right-10 tablet:bottom-12  mobile:h-[50%] mobile:w-full mobile:right-[5%] mobile:bottom-0 "
      >
        <img
          className="w-full h-full object-contain"
          src="../src/assets/images/hero.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
