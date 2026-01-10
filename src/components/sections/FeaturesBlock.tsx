import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { itemStagger, sectionReveal, easeOutSoft } from "../../motion/presets";

const bigCards = [
  {
    title: "Smart, flexible, built around your workflow",
    text:
      "Personalize the look and layout so it fits how you work, not the other way around.",
  },
  {
    title: "Works with tools you already use",
    text:
      "Connect your stack and keep your work organized in one place.",
  },
];

const smallCards = [
  {
    title: "Collaborate in real time",
    text: "Keep comments, updates, and work discussions together.",
  },
  {
    title: "Speaks your language",
    text: "Set preferences like currency, time, and date formats.",
  },
  {
    title: "View things your way",
    text: "Switch between views like cards, list, timeline, and calendar.",
  },
];

export default function FeaturesBlock() {
  return (
    <section id="features" className="bg-sky-90 py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-semibold tracking-widest text-black/45">FEATURES</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-black">
            Built for teams,
            <br />
            powered by simplicity
          </h2>
        </Container>
      </Reveal>

      <Container className="mt-14">
        <motion.div
          variants={itemStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {bigCards.map((c) => (
            <motion.div
              key={c.title}
              variants={sectionReveal}
              transition={{ duration: 0.6, ease: easeOutSoft }}
              className="rounded-[28px] border border-black/10 bg-neutral-200/30 p-10 shadow-sm"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-black">{c.title}</h3>
              <p className="mt-6 max-w-xl text-black/60">{c.text}</p>

              <div className="mt-10 h-44 rounded-[22px] border border-black/10 bg-white/70" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {smallCards.map((c) => (
            <motion.div
              key={c.title}
              variants={sectionReveal}
              transition={{ duration: 0.55, ease: easeOutSoft }}
              className="rounded-[28px] border border-black/10 bg-neutral-200/30 p-10 shadow-sm"
            >
              <div className="h-10 w-10 rounded-full bg-white/70" />
              <h4 className="mt-6 text-lg font-semibold text-black">{c.title}</h4>
              <p className="mt-3 text-black/60">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
