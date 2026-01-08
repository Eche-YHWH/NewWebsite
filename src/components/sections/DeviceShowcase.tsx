import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

import mobileImg from "../../assets/device-mobile.avif";
import webImg from "../../assets/device-web.avif";

type Mode = "mobile" | "web";

const swipeVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "18%" : "-18%" }),
  center: { x: "0%" },
  exit: (dir: number) => ({ x: dir > 0 ? "-18%" : "18%" }),
};

export default function DeviceShowcase() {
  const [mode, setMode] = useState<Mode>("mobile");

  // Track prev mode so we know which direction to swipe
  const prevModeRef = useRef<Mode>("mobile");
  const dir =
    prevModeRef.current === "mobile" && mode === "web"
      ? 1
      : prevModeRef.current === "web" && mode === "mobile"
      ? -1
      : 1;

  const src = useMemo(() => (mode === "mobile" ? mobileImg : webImg), [mode]);

  const onChange = (next: Mode) => {
    if (next === mode) return;
    prevModeRef.current = mode;
    setMode(next);
  };

  // Scroll scale-in for the whole visual block
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.55"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [1.09, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section ref={sectionRef} id="benefits" className="py-20">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-semibold tracking-widest text-black/45">
            ACROSS DEVICES
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-black">
            Work from anywhere,
            <br />
            stay in sync
          </h2>

          <div className="mt-12">
            <motion.div style={{ scale: cardScale, y: cardY, opacity: cardOpacity }}>
              {/* IMAGE IS THE FRAME (no white card) */}
              <div className="mx-auto max-w-5xl">
                <div className="relative overflow-hidden rounded-[28px]">
                  {/* Hover zoom stays inside the image bounds */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  >
                    {/* Fixed height frame */}
                    <div className="relative h-[420px] w-full overflow-hidden sm:h-[1820px] lg:h-[700px]">
                      <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                        <motion.img
                          key={mode}
                          src={src}
                          alt="Device preview"
                          className="absolute inset-0 h-full w-full object-cover object-center"
                          variants={swipeVariants}
                          custom={dir}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ type: "spring", stiffness: 220, damping: 24 }}
                        />
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Toggle sits ON the image */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-black/20 p-2 backdrop-blur-md">
                      <button
                        type="button"
                        onClick={() => onChange("mobile")}
                        aria-pressed={mode === "mobile"}
                        className={[
                          "rounded-full px-6 py-3 text-sm font-semibold transition",
                          "border",
                          mode === "mobile"
                            ? "bg-black text-white border-white/80 shadow-sm"
                            : "bg-white/20 text-white/85 border-white/25 hover:text-white",
                        ].join(" ")}
                      >
                        Mobile App
                      </button>

                      <button
                        type="button"
                        onClick={() => onChange("web")}
                        aria-pressed={mode === "web"}
                        className={[
                          "rounded-full px-6 py-3 text-sm font-semibold transition",
                          "border",
                          mode === "web"
                            ? "bg-black text-white border-white/80 shadow-sm"
                            : "bg-white/20 text-white/85 border-white/25 hover:text-white",
                        ].join(" ")}
                      >
                        Web App
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
