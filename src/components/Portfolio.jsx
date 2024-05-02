import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Button from "./Button";
const projects = [
  {
    id: 1,
    title: "ML Pedia",
    img: "./src/assets/images/MLPedia.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptas possimus eius illum illo sunt fugit temporibus quibusdam facilis, cumque, quod dolorum praesentium dolor, voluptatem vero aut. Repudiandae, alias.",
  },
  {
    id: 2,
    title: "React Jobs",
    img: "./src/assets/images/ReactJobs.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptas possimus eius illum illo sunt fugit temporibus quibusdam facilis, cumque, quod dolorum praesentium dolor, voluptatem vero aut. Repudiandae, alias.",
  },
  {
    id: 3,
    title: "Dairy Management",
    img: "./src/assets/images/DairyProduct.png",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo voluptas possimus eius illum illo sunt fugit temporibus quibusdam facilis, cumque, quod dolorum praesentium dolor, voluptatem vero aut. Repudiandae, alias.",
  },
];
function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Single = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className=" h-screen w-full snap-center  ">
      <div className="container w-full h-full flex justify-center items-center overflow-hidden">
        <div className=" max-w-[80%] flex h-full justify-center items-center m-auto gap-12">
          <div className=" flex flex-1 h-1/2 rounded-2xl" ref={ref}>
            <img
              src={item.img}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <motion.div className=" flex flex-1 flex-col gap-7" style={{ y }}>
            <h2 className="text-3xl text-slate-50">{item.title}</h2>
            <p className=" text-slate-400">{item.desc}</p>
            <div className="w-[30%]">
              <Button text={"GitHub Link"} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const { ref } = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <div
      className="portfolio  relative w-screen bg-gradient-to-b from-blue-950 to-slate-950"
      ref={ref}
    >
      <div className=" text-center sticky left-0 top-0  pt-8">
        <div className="text-slate-50 text-5xl font-semibold tracking-wider">
          PROJECTS
        </div>
        <motion.div
          style={{ scaleX }}
          className="progressbar m-auto h-2 mt-4 bg-gradient-to-r from-cyan-300 to-purple-500"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Single item={project} key={project.id} />
      ))}
    </div>
  );
};

export default Portfolio;
