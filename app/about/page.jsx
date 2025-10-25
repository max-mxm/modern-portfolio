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
          <span className="text-accent">Développeur</span> Senior Front-end
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm xl:text-base"
          >
            Développeur Senior Full-Stack avec 7 ans d'expérience, spécialisé en React, Next.js, automatisation et Java.

            Expert en développement front-end senior et back-end, avec une solide expérience en architecture logicielle, automatisation des processus et gestion de projet technique.

            Actuellement CTO chez Davancorp, responsable de la stratégie technologique, de l'automatisation des processus et de l'optimisation des workflows.
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
                <span className="text-[50px]">7</span>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Années d'expérience
              </div>
            </div>
            <div>
              <div className="text-4xl xl:text-[64px] font-extrabold text-accent mb-2">
                <span className="text-[50px]">50</span>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Projets livrés
              </div>
            </div>
            <div>
              <div className="text-4xl xl:text-[64px] font-extrabold text-accent mb-2">
                <span className="text-[50px]">83</span>%
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Taux d'accessibilité
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