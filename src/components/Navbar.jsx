import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar h-[100px]">
      <Sidebar />
      <div className="wrapper h-full max-w-full m-auto lg:max-w-[80%] lg:flex flex-row items-center justify-between">
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className=" font-sans text-center text-sm md:text-xl"
        >
          SOHINI DAS
        </motion.section>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="links flex flex-col ml-6 gap-6 lg:flex-row lg:mt-0 lg:ml-auto"
        >
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            href=""
          >
            <FaGithub className=" w-9 h-9 text-white bg-slate-950 lg:w-6 lg:h-6 " />
            {/* <img className=' w-9 h-9 bg-slate-950 lg:w-6 lg:h-6 'src='../src/assets/images/github.png' alt="" /> */}
          </motion.a>
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            href=""
          >
            <FaLinkedin className=" w-9 h-9 text-white bg-slate-950 lg:w-6 lg:h-6 " />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
