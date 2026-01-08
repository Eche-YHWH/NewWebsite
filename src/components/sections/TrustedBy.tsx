import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { itemStagger, sectionReveal, easeOutSoft } from "../../motion/presets";

const logos = ["Amsterdam", "Savannah", "Milano", "Luminous", "Thrive", "Amsterdam"];

export default function TrustedBy() {
  return (
    <section className="py-16">
      <Reveal>
        <Container>
          <p className="text-center text-sm text-black/50">
            Trusted by 7,000+ teams, founders and studios
          </p>

          <motion.div
            variants={itemStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {logos.map((name, idx) => (
              <motion.div
                key={`${name}-${idx}`}
                variants={sectionReveal}
                transition={{ duration: 0.55, ease: easeOutSoft }}
                className="text-lg font-semibold tracking-tight text-black/18"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Reveal>
    </section>
  );
}
