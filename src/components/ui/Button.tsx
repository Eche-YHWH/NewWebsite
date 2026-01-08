import type { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/10";

  const styles = {
    primary: "group bg-black text-white shadow-sm hover:shadow",
    secondary:
      "bg-white/70 text-neutral-900 border border-black/10 shadow-sm hover:bg-white",
  };

  const glow =
    variant === "primary" ? (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-black/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    ) : null;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {glow}
      {children}
    </motion.button>
  );
}
