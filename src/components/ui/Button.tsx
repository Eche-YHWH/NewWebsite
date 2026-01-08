import type { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

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
  // Keep your secondary button as-is (Tailwind)
  const secondary =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium " +
    "bg-white/70 text-neutral-900 border border-black/10 shadow-sm hover:bg-white " +
    "transition focus:outline-none focus:ring-2 focus:ring-black/10";

  if (variant === "secondary") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        className={`${secondary} ${className}`}
        whileHover={{ y: -1, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {children}
      </motion.button>
    );
  }

  // Primary: new blue CTA style
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${styles.cta} ${className}`}
      // CSS already handles hover/active transforms, so keep motion subtle
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className={styles.pointsWrapper} aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} className={styles.point} />
        ))}
      </div>

      <span className={styles.inner}>
        {children}
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </motion.button>
  );
}
