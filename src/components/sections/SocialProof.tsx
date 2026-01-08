import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { easeOutSoft, itemStagger, sectionReveal } from "../../motion/presets";

const logos = ["Orion", "Pine", "Kora", "Westmark", "Lumen", "Arc"];

export default function SocialProof() {
  return (
    <section className="py-10">
      <Reveal>
        <Container>
          <p className="text-center text-sm text-neutral-600">
            Trusted by teams that want clarity
          </p>

          <motion.div
            variants={itemStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {logos.map((name) => (
              <motion.div
                key={name}
                variants={sectionReveal}
                transition={{ duration: 0.55, ease: easeOutSoft }}
                className="text-sm font-semibold text-neutral-400 transition hover:text-neutral-500"
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

