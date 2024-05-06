import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import working from "../assets/images/working.png";

function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const [scrollDistance, setScrollDistance] = useState(500);
  useEffect(() => {
    // Calculate scroll distance based on screen width
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let newScrollDistance = 500; // Default scroll distance

    newScrollDistance = screenWidth > 1024 ? 500 : screenHeight / 10;

    setScrollDistance(newScrollDistance);
  }, []);

  const y = useParallax(scrollYProgress, scrollDistance);

  return (
    <div className="about h-screen bg-slate-950 ">
      <div className="h-screen  max-w-[80%] m-auto flex mobile:flex-col mobile:h-[90%] mobile:gap-5">
        <div className="h-full w-full m-auto flex-1 flex justify-center items-center mobile:h-[40%]  mobile:w-[60%] mobile:flex-none ">
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0, transition: { stiffness: 400, damping: 20 } }}
            className="h-[80%] w-[80%] flex justify-center items-center"
            ref={ref}
          >
            <img
              className="h-full w-full object-contain"
              src={working}
              alt="Woman working"
            />
          </motion.div>
        </div>
        <motion.div
          className=" h-full w-full flex-1 mobile:h-[40%] mobile:flex-3 "
          style={{ y }}
        >
          <div className="h-full w-full flex flex-col justify-center gap-10 mobile:h-[90%] mobile:gap-5 laptop:gap-6">
            <h1 className="text-5xl font-semibold text-white tracking-[.2em] mobile:text-3xl mobile:text-center">
              ABOUT ME
            </h1>
            <div className=" w-full leading-10 mobile:w-full mobile:leading-4 mobile:text-[15px] mobile:object-contain tablet:text-[15px] tablet:leading-6 tablet:w-full laptop:text-[15px] laptop:w-full laptop:leading-7">
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
