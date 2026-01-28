import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { itemStagger, sectionReveal, easeOutSoft } from "../../motion/presets";

const bigCards = [
  {
    title: "Online store builder that is easy to launch",
    text:
      "Create your storefront, list products, and start taking orders fast. Daash helps you sell online with a clean checkout and simple order management.",
  },
  {
    title: "Inventory and sales dashboard in one view",
    text:
      "Track stock levels, monitor daily sales, and see what is selling. Get clear reports so you can restock on time and focus on what works.",
  },
];

const smallCards = [
  {
    title: "POS for in-store sales",
    text:
      "Sell in your shop and track every sale automatically. Products, inventory, and revenue stay in sync.",
  },
  {
    title: "Customer management and follow-ups",
    text:
      "See your best customers, keep notes, and send updates or offers when it matters.",
  },
  {
    title: "Team access and roles",
    text:
      "Add staff, assign roles, and keep operations tidy without sharing one login.",
  },
];

export default function FeaturesBlock() {
  return (
    <section id="features" className="bg-sky-90 py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-semibold tracking-widest text-black/45">FEATURES</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-black">
            Built for growing businesses,
            <br />
            simple for daily use
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
