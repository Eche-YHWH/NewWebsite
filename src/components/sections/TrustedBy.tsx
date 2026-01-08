import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

import cityLogo from "../../assets/Logo/city.png";
import grillLogo from "../../assets/Logo/grill.png";
import spicyLogo from "../../assets/Logo/spicy.png";
import wingsLogo from "../../assets/Logo/wings.png";
import papasLogo from "../../assets/Logo/papas.png";

const logos = [
  { src: cityLogo, alt: "City Subs" },
  { src: grillLogo, alt: "Grill Shack" },
  { src: spicyLogo, alt: "Spicy Corner" },
  { src: wingsLogo, alt: "Wings Bistro" },
  { src: papasLogo, alt: "Papa's Grill" },
];

// duplicate for endless loop
const marqueeLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="py-16">
      <Reveal>
        <Container>
          <p className="text-center text-sm text-black/50">
            Trusted by 7,000+ teams, founders and studios
          </p>

          {/* Marquee with edge fade */}
          <div className="relative mt-8 overflow-hidden">
            {/* left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
            {/* right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

            <motion.div
              className="flex w-max items-center gap-x-12 sm:gap-x-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 22,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeLogos.map((logo, idx) => (
                <div
                  key={`${logo.alt}-${idx}`}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto opacity-60 sm:h-9 md:h-10"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
