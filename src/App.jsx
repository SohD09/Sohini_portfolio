import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
      <section
        id="Home"
        className=" h-screen w-screen snap-center overflow-hidden"
      >
        <Navbar />
        <Hero />
      </section>
      <section
        id="About"
        className=" h-screen w-screen snap-center overflow-hidden"
      >
        <About />
      </section>
      <section
        id="Skills"
        className=" h-screen w-screen snap-center overflow-hidden"
      >
        <Skills />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>

      <section
        id="Contact"
        className=" h-screen w-screen snap-center overflow-hidden"
      >
        <Contact />
      </section>
    </>
  );
};

export default App;
