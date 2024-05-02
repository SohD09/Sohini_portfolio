import React from "react";
import ProgressBar from "./ProgressBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      duration: 0.5,
      delay: 0.25,
    },
  },
};
const skillVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.25,
      staggerChildren: 0.25,
    },
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Skills = () => {
  const skillset = [
    {
      skill: "Web Development",
      progress: 90,
    },
    {
      skill: "Web Design",
      progress: 96,
    },
    {
      skill: "Problem Solving",
      progress: 80,
    },
    {
      skill: "React",
      progress: 90,
    },
    {
      skill: "SQL",
      progress: 90,
    },
    {
      skill: "JS",
      progress: 70,
    },
    {
      skill: "HTML",
      progress: 90,
    },
    {
      skill: "CSS",
      progress: 90,
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };
  return (
    <div className="relative h-screen w-screen bg-gradient-to-b from-slate-950 to-blue-950">
      <section className="relative h-[80%] w-[80%] m-auto ">
        <div className="absolute w-full h-full flex flex-col justify-center gap-10 ">
          <motion.h2
            variants={textvariants}
            initial="initial"
            whileInView="animate"
            className="text-indigo-400 text-5xl font-semibold tracking-wider"
          >
            SKILLS
          </motion.h2>
          <motion.div
            variants={skillVariants}
            initial="close"
            whileInView="open"
            className=" bg-slate-800 h-2/3 w-full rounded-xl justify-center bg-opacity-30"
          >
            <motion.div
              variants={skillVariants}
              className="w-[3/4] h-full m-auto"
            >
              <motion.div variants={skillVariants} className="mt-20 h-full">
                <Slider {...settings}>
                  {skillset.map((skill) => (
                    <div className="cursor-pointer">
                      <motion.div
                        variants={skillVariants}
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                        className=" w-[2/3] h-[100%] text-white flex justify-evenly"
                      >
                        <ProgressBar
                          progress={skill.progress}
                          label={skill.skill}
                        />
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
