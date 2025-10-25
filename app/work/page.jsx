"use client";

import { motion } from "framer-motion";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8 xl:mb-0"
        >
          My Work <span className="text-accent">.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%] mx-auto xl:mt-12"
        >
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;