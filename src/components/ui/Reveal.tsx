import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeOutSoft, sectionReveal } from "../../motion/presets";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: easeOutSoft, delay }}
    >
      {children}
    </motion.div>
  );
}
