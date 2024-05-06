import React from "react";
import ProgressBar from "./ProgressBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const textvariants = {
  initial: {
    x: -50,
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
      skill: "Java",
      progress: 90,
      img: "./src/assets/logos/Java.png",
    },
    {
      skill: "Python",
      progress: 80,
      img: "./src/assets/logos/python.png",
    },
    {
      skill: "HTML",
      progress: 95,
      img: "./src/assets/logos/Html.png",
    },
    {
      skill: "CSS",
      progress: 95,
      img: "./src/assets/logos/css.png",
    },

    {
      skill: "Java Script",
      progress: 70,
      img: "./src/assets/logos/javascript.png",
    },
    {
      skill: "SQL",
      progress: 90,
      img: "./src/assets/logos/sql.png",
    },
    {
      skill: "React JS",
      progress: 80,
      img: "./src/assets/logos/react.png",
    },
    {
      skill: "Tailwind CSS",
      progress: 90,
      img: "./src/assets/logos/tailwind.png",
    },
  ];
  const screenWidth = window.innerWidth;
  let noOfRows = screenWidth > 770 ? 1 : 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: false,
    rows: 1, // Display one row by default
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2, // Display two rows for smaller screens
        },
      },
    ],
  };
  return (
    <div className="relative h-screen w-screen bg-gradient-to-b from-slate-950 to-blue-950">
      <section className="relative h-[80%] w-[90%] m-auto mobile:w-[80%]">
        <div className="absolute w-full h-full flex flex-col justify-center gap-10 mobile:gap-7">
          <motion.h2
            variants={textvariants}
            initial="initial"
            whileInView="animate"
            className="text-indigo-400 text-5xl ml-2 font-semibold tracking-[.2em] mobile:text-3xl mobile:mt-20"
          >
            SKILLS
          </motion.h2>
          <motion.div
            variants={skillVariants}
            initial="close"
            whileInView="open"
            className=" bg-slate-800 h-2/3 w-full rounded-xl justify-center bg-opacity-30 "
          >
            <motion.div
              variants={skillVariants}
              className="w-[3/4] h-full m-auto"
            >
              <motion.div
                variants={skillVariants}
                className="mt-20 h-full mobile:mt-5"
              >
                <Slider {...settings}>
                  {skillset.map((skill) => (
                    <div className="cursor-pointer">
                      <motion.div
                        variants={skillVariants}
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                        className=" w-[2/3] h-[100%] text-white flex justify-evenly "
                      >
                        <ProgressBar
                          progress={skill.progress}
                          label={skill.skill}
                          img={skill.img}
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
