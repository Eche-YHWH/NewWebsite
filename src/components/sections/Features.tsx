import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { easeOutSoft, itemStagger, sectionReveal } from "../../motion/presets";

const features = [
  {
    title: "One dashboard",
    text: "All your key numbers in one place. No more switching tools.",
  },
  {
    title: "Simple insights",
    text: "Understand what’s working and what’s not without digging.",
  },
  {
    title: "Built for teams",
    text: "Share reports and stay aligned across your business.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <Reveal>
        <Container>
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything you need to stay on top of your business
            </h2>
            <p className="mt-3 text-neutral-600">
              Clear metrics, simple reports, and a dashboard your whole team can
              understand.
            </p>
          </div>

          <motion.div
            variants={itemStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={sectionReveal}
                transition={{ duration: 0.6, ease: easeOutSoft }}
                className="rounded-2xl border border-neutral-200 bg-white/70 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-neutral-600">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Reveal>
    </section>
  );
}
