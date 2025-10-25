"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="h-full bg-primary/60 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
            exercitationem harum, quia nulla temporibus deleniti libero veniam
            vero beatae numquam ducimus illum ab similique ipsam tempore fugit
            quod laudantium debitis.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-x-6 xl:gap-x-10 mb-12"
          >
            <div>
              <div className="text-4xl xl:text-[64px] font-extrabold text-accent mb-2">
                <span className="text-[50px]">10</span>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>
            <div>
              <div className="text-4xl xl:text-[64px] font-extrabold text-accent mb-2">
                <span className="text-[50px]">250</span>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Satisfied clients
              </div>
            </div>
            <div>
              <div className="text-4xl xl:text-[64px] font-extrabold text-accent mb-2">
                <span className="text-[50px]">650</span>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished projects
              </div>
            </div>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]">
            <div className="absolute inset-0 bg-accent/20 rounded-full mix-blend-lighten animate-pulse"></div>
            <div className="absolute inset-0 bg-accent/20 rounded-full mix-blend-lighten animate-ping"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-6xl xl:text-8xl font-bold text-white">A</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;