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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure
              natus, optio nam, at molestias earum est doloremque necessitatibus
              incidunt, perferendis hic aut cum odit laborum omnis nemo nesciunt
              eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Earum provident, cumque ea hic doloremque velit pariatur
              exercitationem architecto. Ratione quae quia esse rem amet, id
              placeat deserunt saepe dolorem perspiciatis!
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
