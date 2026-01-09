import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../ui/Container";

import cloudsImg from "../../assets/Clouds.png";

export default function CloudDivider() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  });

  // Subtle scale-in + slide-in from sides as you scroll into this area
  const leftX = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.9, 1]);

  return (
    <section ref={ref} className="relative py-10 sm:py-12">
      <Container>
        <div className="relative h-16 sm:h-20">
          {/* Left cloud */}
          <motion.img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            draggable={false}
            style={{ x: leftX, scale, opacity }}
            className="
              pointer-events-none select-none
              absolute left-0 top-1/2
              w-[220px] -translate-y-1/2
              opacity-80
              sm:w-[260px]
            "
          />

          {/* Right cloud */}
          <motion.img
            src={cloudsImg}
            alt=""
            aria-hidden="true"
            draggable={false}
            style={{ x: rightX, scale, opacity }}
            className="
              pointer-events-none select-none
              absolute right-0 top-1/2
              w-[220px] -translate-y-1/2
              opacity-80
              sm:w-[260px]
            "
          />
        </div>
      </Container>
    </section>
  );
}
