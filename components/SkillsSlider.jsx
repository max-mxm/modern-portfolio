"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  RxDesktop,
  RxMagicWand,
  RxLayers,
  RxAccessibility,
  RxMagnifyingGlass,
  RxChevronLeft,
  RxChevronRight,
} from "react-icons/rx";

const skillsData = [
  {
    icon: <RxDesktop />,
    title: "Expertise Front-end React/Next.js",
    description:
      "Développement d'applications web performantes avec React 18, Next.js 15, TypeScript. Architecture moderne, state management avancé, design systems et composants réutilisables pour des interfaces utilisateur fluides et maintenables.",
  },
  {
    icon: <RxMagicWand />,
    title: "Automatisation & IA",
    description:
      "Intégration d'outils d'IA (GPT-4, Claude), automatisation de workflows via Make/n8n, développement de chatbots intelligents et optimisation des processus métier. Réduction jusqu'à 60% du temps opérationnel.",
  },
  {
    icon: <RxLayers />,
    title: "Backend Java & UX/UI",
    description:
      "Solide expérience en développement backend avec Java et Spring Boot acquise durant les premières années de carrière. Sensibilité forte à l'UX/UI pour créer des interfaces intuitives et des expériences utilisateur fluides, alliant technique et design.",
  },
  {
    icon: <RxAccessibility />,
    title: "Accessibilité & Performance",
    description:
      "Sensibilité forte à l'accessibilité web et aux bonnes pratiques WCAG. Expérience concrète avec un record de 83% d'accessibilité sur des projets gouvernementaux. Optimisation continue de la performance et de l'expérience utilisateur pour tous.",
  },
  {
    icon: <RxMagnifyingGlass />,
    title: "SEO & Optimisation",
    description:
      "Connaissances solides en SEO technique et bonnes pratiques web. Amélioration des Core Web Vitals et scores Lighthouse. Application des standards modernes pour maximiser la visibilité et la performance des applications web.",
  },
];

const SkillsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % skillsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Navigation dots en haut */}
      <div className="flex justify-center gap-3 mb-8">
        {skillsData.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
              activeIndex === index ? "scale-110" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div
              className={`text-2xl transition-colors duration-300 ${
                activeIndex === index ? "text-accent" : "text-white/70"
              }`}
            >
              {item.icon}
            </div>
            <div
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-accent" : "bg-white/20"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Contenu avec animation */}
      <div className="relative min-h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl mx-auto"
          >
            <div className="bg-[rgba(19,20,36,0.95)] border border-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="text-6xl text-accent">
                  {skillsData[activeIndex].icon}
                </div>
                <h3 className="text-2xl md:text-3xl text-white font-bold leading-tight">
                  {skillsData[activeIndex].title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {skillsData[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flèches de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-accent/20 hover:bg-accent/40 text-white rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Précédent"
        >
          <RxChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-accent/20 hover:bg-accent/40 text-white rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Suivant"
        >
          <RxChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Indicateur de position */}
      <div className="text-center mt-6 text-white/50 text-sm">
        {activeIndex + 1} / {skillsData.length}
      </div>
    </div>
  );
};

export default SkillsSlider;
