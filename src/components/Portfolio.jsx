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
    link: "https://github.com/ArkadebMisra/MLPedia",
    languages: [
      "./src/assets/logos/python.png",
      "./src/assets/logos/javascript.png",
      "./src/assets/logos/html.png",
      "./src/assets/logos/tailwind.png",
      "./src/assets/logos/django.png",
    ],
    desc: "MLPedia is a technology-driven GUI based way to simplify activities like plotting data, defining prediction models, applying various ML algorithms on data etc for both users who are uncomfortable or unable to code and the programming savvy users.Users can use the tools available using any desktop or laptop device from anywhere through the internet.",
  },
  {
    id: 2,
    title: "React Jobs",
    img: "./src/assets/images/ReactJobs.png",
    link: "https://github.com/SohD09/react-jobs",
    languages: [
      "./src/assets/logos/react.png",
      "./src/assets/logos/javascript.png",
      "./src/assets/logos/html.png",
      "./src/assets/logos/tailwind.png",
    ],
    desc: "ReactJobs ia a website that lets users browse for jobs, as well as let recruiters post new jobs, edit existing jobs and delete jobs. This project uses JSON-Server for a mock backend.",
  },
];
function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Single = ({ item }) => {
  const ref = useRef(null);
  let offset = 300;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  offset = screenWidth > 769 ? 300 : screenHeight / 10;
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, offset);
  return (
    <section className=" h-screen w-full snap-center  ">
      <div className=" w-full h-full flex justify-center items-center overflow-hidden">
        <div className=" max-w-[80%] flex h-full justify-center items-center m-auto gap-12 mobile:h-1/2 mobile:flex-col ">
          <div
            className=" flex flex-1 h-1/2 rounded-2xl mobile:max-h-[40%] mobile:w-full"
            ref={ref}
          >
            <img
              src={item.img}
              alt=""
              className="h-full w-full object-cover rounded-2xl mobile:contain"
            />
          </div>
          <motion.div
            className=" flex flex-1 flex-col gap-7 mobile:gap-4"
            style={{ y }}
          >
            <h2 className="text-3xl text-slate-50 mobile:mt-2 mobile:text-2xl">
              {item.title}
            </h2>
            <div className="flex gap-3 ">
              {item.languages.map((language) => (
                <div className="h-10 w-12">
                  <img
                    className="h-full w-full object-contain"
                    src={language}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <p className=" text-slate-400 mobile:text-[15px]">{item.desc}</p>
            <div className="w-[30%] mobile:w-full">
              <a href={item.link} target="blank">
                <Button text={"GitHub Link"} />
              </a>
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
      <div className=" text-center sticky left-0 top-0  pt-8 mobile:top-[calc(100vh-100px)]">
        <div className="text-slate-50 text-5xl font-semibold tracking-[.2em] mobile:text-3xl mobile:tracking-normal">
          PROJECTS
        </div>
        <motion.div
          style={{ scaleX }}
          className="progressbar sticky m-auto h-2 mt-4 bg-gradient-to-r from-cyan-300 to-purple-500 "
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Single item={project} key={project.id} />
      ))}
    </div>
  );
};

export default Portfolio;
