import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import dashboardImage from "../../assets/daash-hero2.png";
import cloudsImg from "../../assets/Clouds.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroVisualRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress tied to hero visual
  const { scrollYProgress } = useScroll({
    target: heroVisualRef,
    offset: ["start 0.92", "end 0.35"],
  });

  // Z-axis style motion
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <section className="relative overflow-hidden pt-32">
      {/* Sky background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-neutral-100" />

        {/* Clouds (replaces the white blob divs) */}
        <img
          src={cloudsImg}
          alt=""
          aria-hidden="true"
          className="absolute left-6 top-28 w-[320px] opacity-70 blur-[0.5px] sm:left-10 sm:top-28 sm:w-[420px]"
        />
        <img
          src={cloudsImg}
          alt=""
          aria-hidden="true"
          className="absolute right-4 top-36 w-[360px] opacity-60 blur-[0.5px] sm:right-8 sm:top-36 sm:w-[460px]"
        />
        <img
          src={cloudsImg}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-52 w-[300px] -translate-x-1/2 opacity-55 blur-[0.5px] sm:top-56 sm:w-[420px]"
        />
      </div>

      {/* Text content */}
      <Reveal>
        <Container className="text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Run your business like a pro
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-black/60 sm:text-lg">
            All-in-one platform for managing work, clients, and payments without
            the chaos.
          </p>

          {/* Buttons: stacked on mobile, inline on desktop */}
          <div className="mx-auto mt-10 flex w-full max-w-sm flex-col justify-center gap-4 sm:max-w-none sm:w-auto sm:flex-row">
            <Button className="w-full sm:w-auto">Try Daash free</Button>
            <Button className="w-full sm:w-auto" variant="secondary">
              See features
            </Button>
          </div>
        </Container>
      </Reveal>

      {/* Hero visual */}
      <div className="mt-14 pb-24">
        <Container>
          <div
            ref={heroVisualRef}
            className="relative mx-auto max-w-5xl"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              style={{
                rotateX,
                translateY,
                scale,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative top-10 will-change-transform sm:top-12 lg:top-16"
            >
              <div className="rounded-[28px] border border-black/10 bg-white/60 p-3 shadow-sm backdrop-blur">
                <img
                  src={dashboardImage}
                  alt="Daash preview"
                  className="w-full rounded-[22px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
