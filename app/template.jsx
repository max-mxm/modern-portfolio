"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Template = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName} className="h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;