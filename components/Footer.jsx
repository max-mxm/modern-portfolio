"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full py-6 bg-primary/30 border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Copyright */}
          <div className="text-sm text-white/70">
            © {currentYear} Maxime Morellon. Tous droits réservés.
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-white/70">
            <a
              href="/mentions-legales"
              className="hover:text-accent transition-colors duration-300"
            >
              Mentions légales
            </a>
            <a
              href="/politique-confidentialite"
              className="hover:text-accent transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-white/70">
            Développeur freelance basé à Paris
          </div>
        </div>

        {/* SIRET / Legal Number (if applicable) */}
        <div className="text-center mt-4 text-xs text-white/50">
          SIRET: [À compléter] | APE: [À compléter]
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
