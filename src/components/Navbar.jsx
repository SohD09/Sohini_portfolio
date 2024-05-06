import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar h-[100px] w-full">
      <Sidebar />
      <div className="wrapper h-full m-auto max-w-[80%] flex flex-row items-center justify-between mobile:justify-end mobile:p-5">
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.25 }}
          className=" font-sans text-xl tablet:ml-9 mobile:hidden "
        >
          SOHINI DAS
        </motion.section>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="links flex z-[999] flex-row mt-0 ml-auto gap-6 top-auto "
        >
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            href=""
          >
            <FaGithub className=" w-6 h-6 text-white bg-slate-950" />
            {/* <img className=' w-9 h-9 bg-slate-950 lg:w-6 lg:h-6 'src='../src/assets/images/github.png' alt="" /> */}
          </motion.a>
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            href=""
          >
            <FaLinkedin className=" w-6 h-6 text-white bg-slate-950 " />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
