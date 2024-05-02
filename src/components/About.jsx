import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <div className="about h-screen w-screen bg-slate-950 ">
      <div className="h-screen  max-w-[80%] m-auto flex ">
        <div className="h-full w-full m-auto flex-1 flex justify-center items-center">
          <div
            className="h-[80%] w-[80%] flex justify-center items-center"
            ref={ref}
          >
            <img className="" src="../src/assets/images/working.png" alt="" />
          </div>
        </div>
        <motion.div className=" h-full w-full flex-1 " style={{ y }}>
          <div className="h-full w-full flex flex-col justify-center gap-10">
            <h1 className="text-5xl font-semibold text-white tracking-[.2em] ">
              ABOUT ME
            </h1>
            <div className=" w-[80%] leading-10">
              As a computer science graduate with a passion for innovation and
              problem-solving, I am currently immersing myself in the world of
              technology at Jadavpur University, where I am pursuing my Master's
              in Computer Applications (MCA). My journey in the realm of
              computing began with a fascination for coding and has evolved into
              a deep-seated interest in web development and UI designing. Driven
              by a desire to create seamless digital experiences, I constantly
              seek to enhance my skills in front-end development, mastering
              languages like HTML, CSS, and JavaScript. Crafting intuitive user
              interfaces that marry functionality with aesthetics excites me,
              and I thrive on the challenge of transforming complex ideas into
              elegant designs that resonate with users.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
