"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RxCube,
  RxLightningBolt,
  RxTarget,
  RxGear,
  RxRocket,
  RxCode,
  RxCross2,
} from "react-icons/rx";

const projectsData = [
  {
    icon: <RxLightningBolt />,
    client: "Davancorp",
    year: "2024-2025",
    title: "CTO / Responsable Automatisation & IA",
    type: "Startup Gestion Locative",
    description:
      "En tant que CTO, j'ai piloté la transformation digitale et l'automatisation complète des processus métier. Mise en place d'automatisations inter-services (CRM, setters, closers, équipes terrain). Intégration d'outils d'IA et systèmes no-code pour optimiser la performance des équipes. Élaboration de stratégies pour qualifier les leads et améliorer le ROI via couplage humain/automatisation.",
    technologies: ["Make", "n8n", "GoHighLevel", "Pabbly", "IA"],
    role: "CTO / Responsable Automatisation & IA",
    achievements: [
      "Réduction significative du temps opérationnel sur les process internes",
      "Systématisation des flux de communication entre pôles (support, prospection, opérations)",
      "Déploiement de systèmes d'analyse et de scoring de leads intégrant l'IA"
    ]
  },
  {
    icon: <RxTarget />,
    client: "Ministère de l'Intérieur",
    year: "2022-2024",
    title: "Développeur Senior / Tech Lead - Projet Rendez-vous Permis",
    type: "Plateforme Nationale",
    description:
      "En tant que Développeur Senior et Tech Lead, j'ai assuré le développement full-stack et la maintenance de la plateforme en production gérant plusieurs centaines de milliers de connexions quotidiennes. Encadrement technique d'une équipe de 6 développeurs et optimisation de la performance sur un système critique à forte charge.",
    technologies: ["React", "Java", "TypeScript", "PostgreSQL", "Keycloak", "Docker"],
    role: "Développeur Senior / Tech Lead",
    achievements: [
      "Contribution à un service gérant plusieurs centaines de milliers de connexions par jour",
      "Optimisation de la performance et de la stabilité sur un système critique à forte charge",
      "Encadrement technique d'une équipe de 6 développeurs"
    ]
  },
  {
    icon: <RxGear />,
    client: "Ministère de la Défense",
    year: "2021-2022",
    title: "Développeur Senior React / Java",
    type: "Projet Gouvernemental",
    description:
      "En tant que Développeur Senior, j'ai piloté l'amélioration d'outils internes et la migration vers un environnement React moderne. Développement front-end sur des modules critiques et accompagnement des équipes dans l'adoption des nouvelles technologies.",
    technologies: ["React", "TypeScript", "Java", "PostgreSQL"],
    role: "Développeur Senior React / Java",
    achievements: [
      "Optimisation des composants pour améliorer la maintenabilité et la performance",
      "Accompagnement des équipes dans la migration front-end"
    ]
  },
  {
    icon: <RxGear />,
    client: "Ministère de la Défense",
    year: "2020-2021",
    title: "Développeur Full-stack Angular / Java",
    type: "Projet Gouvernemental",
    description:
      "En tant que Développeur Full-stack, j'ai conçu et développé une application interne de gestion et de suivi de processus administratifs. Conception d'interfaces ergonomiques Angular et intégration backend Java Spring Boot dans un environnement hautement sécurisé.",
    technologies: ["Angular 8", "Java", "Spring Boot", "Oracle DB"],
    role: "Développeur Full-stack Angular / Java",
    achievements: [
      "Conception d'interfaces ergonomiques",
      "Intégration backend dans environnement hautement sécurisé"
    ]
  },
  {
    icon: <RxRocket />,
    client: "Airbus",
    year: "2019-2020",
    title: "Développeur Front-end React",
    type: "Industrie Aéronautique",
    description:
      "En tant que Développeur Front-end React, j'ai développé un outil interne pour les équipes d'ingénierie et de maintenance. Création de composants réactifs et ergonomiques pour moderniser le front-end et améliorer l'expérience utilisateur dans un environnement industriel exigeant.",
    technologies: ["React", "Redux", "Node.js"],
    role: "Développeur Front-end React",
    achievements: [
      "Contribution à la modernisation du front-end sur une base React",
      "Amélioration de l'expérience utilisateur et des performances du front"
    ]
  },
  {
    icon: <RxCode />,
    client: "Total",
    year: "2018-2019",
    title: "Développeur Java",
    type: "Énergie & Industrie",
    description:
      "En tant que Développeur Java, j'ai conçu et développé une solution IoT pour la supervision et la maintenance d'équipements industriels connectés. Développement de microservices backend en Java Spring Boot pour la collecte et le traitement des données IoT dans une architecture modulaire et performante.",
    technologies: ["Java", "Spring Boot", "Docker", "REST API"],
    role: "Développeur Java",
    achievements: [
      "Participation à la conception d'une architecture modulaire et performante",
      "Intégration d'API backend pour la communication entre services"
    ]
  },
];

const WorkSlider = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Grille 3x2 des projets */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative rounded-lg overflow-hidden cursor-pointer group bg-[rgba(19,20,36,0.95)] border border-white/10 hover:border-accent/30 transition-all duration-300"
            onClick={() => openModal(project)}
          >
            <div className="p-3 md:p-4 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px]">
              {/* Icône */}
              <div className="text-3xl md:text-4xl lg:text-5xl text-accent mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Client */}
              <h3 className="text-sm md:text-base lg:text-xl font-bold text-white text-center mb-1">
                {project.client}
              </h3>

              {/* Année */}
              <p className="text-accent text-xs md:text-sm font-semibold mb-1 md:mb-2">
                {project.year}
              </p>

              {/* Fonction */}
              <p className="text-white/70 text-[10px] md:text-xs text-center">
                {project.title}
              </p>
            </div>

            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Modal avec détails du projet */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="relative bg-[rgba(19,20,36,0.98)] backdrop-blur-xl rounded-2xl border-2 border-white/20 p-8 max-w-2xl w-full mx-auto shadow-2xl pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Bouton fermer */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white/70 hover:text-accent transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  >
                    <RxCross2 className="text-2xl" />
                  </button>

                  {/* Header avec client et année */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl text-accent">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-accent mb-1">
                          {selectedProject.client}
                        </h2>
                        <p className="text-white/70 text-xs">
                          {selectedProject.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-accent pr-14">
                      {selectedProject.year}
                    </div>
                  </div>

                  {/* Titre du projet */}
                  <h3 className="text-base font-semibold text-white mb-3">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-accent mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/40 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rôle */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent">Rôle: </span>
                    <span className="text-xs text-white/80">{selectedProject.role}</span>
                  </div>

                  {/* Réalisations */}
                  {selectedProject.achievements && (
                    <div>
                      <h4 className="text-xs font-bold text-accent mb-2">
                        Réalisations clés
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-xs text-white/80"
                          >
                            <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSlider;
