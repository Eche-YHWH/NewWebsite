import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

import phoneImg from "../../assets/mobile.png";

export default function FinalCTA() {
  // Keep this value the same as the footer card radius for perfect rhythm
  const CARD_RADIUS = "rounded-[34px]";

  return (
    <section className="relative py-16 sm:py-20">
      {/* section sky background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-sky-100" />

      <Container>
        <Reveal>
          {/* OUTER WRAPPER */}
          <div className="relative">
            {/* CARD */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={[
                "relative overflow-hidden",
                CARD_RADIUS,
                // match footer white/glass feel
                "bg-white/70 backdrop-blur",
                "px-8 py-14 sm:px-12 lg:px-14",
                // remove shadow on mobile, add it back from sm
                "shadow-none sm:shadow-sm",
              ].join(" ")}
            >
              {/* soft depth */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/80 blur-3xl" />
                <div className="absolute left-32 top-16 h-60 w-60 rounded-full bg-white/70 blur-3xl" />
                <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-white/65 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/85" />
              </div>

              {/* dotted texture on right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-[0.35]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                  maskImage:
                    "radial-gradient(circle at 70% 45%, black 0%, transparent 65%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 70% 45%, black 0%, transparent 65%)",
                }}
              />

              {/* content grid */}
              <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left */}
                <div className="max-w-xl">
                  <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                    Ready to get started
                  </h2>

                  <p className="mt-4 max-w-md text-sm text-black/60 sm:text-base">
                    Download Daash for free. No credit card required. Start managing your business
                    with clarity and control.
                  </p>

                  <div className="mt-8">
                    <Button>Try Daash free</Button>
                  </div>
                </div>

                {/* Right spacer: ONLY needed on lg+ since phone shows only on sm+ and overlaps on wide layouts */}
                <div className="relative hidden lg:block">
                  <div className="h-[360px]" />
                </div>
              </div>

              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/80" />
            </motion.div>

            {/* PHONE: hidden on mobile, visible from sm up */}
            <div className="pointer-events-none absolute right-6 top-0 z-10 hidden sm:block sm:right-10 lg:right-14">
              <img
                src={phoneImg}
                alt="Daash mobile preview"
                draggable={false}
                className="
                  select-none
                  w-[340px]
                  max-w-none
                  translate-y-[-90px]
                  sm:w-[420px]
                  sm:translate-y-[-120px]
                "
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
