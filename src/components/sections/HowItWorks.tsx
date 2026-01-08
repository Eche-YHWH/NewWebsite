import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { easeOutSoft, itemStagger, sectionReveal } from "../../motion/presets";

const steps = [
  {
    title: "Connect your data",
    text: "Bring your business activity into one place. Start with the basics, grow from there.",
  },
  {
    title: "Track what matters",
    text: "See sales, customers, and performance in a simple view your team understands.",
  },
  {
    title: "Act fast",
    text: "Spot what’s working, fix what isn’t, and move with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <Reveal>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                How Daash works
              </h2>
              <p className="mt-3 text-neutral-600">
                A simple flow that gets you from scattered numbers to clear
                decisions.
              </p>

              <motion.div
                variants={itemStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-10 space-y-6"
              >
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.title}
                    variants={sectionReveal}
                    transition={{ duration: 0.6, ease: easeOutSoft }}
                    className="flex gap-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-neutral-600">{s.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 flex gap-4">
                <Button>Get started</Button>
                <Button variant="secondary">Talk to us</Button>
              </div>
            </div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: easeOutSoft }}
              className="rounded-3xl border border-neutral-200 bg-white/60 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-sm font-semibold">Live snapshot</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Placeholder for a clean dashboard mockup.
                </p>
                <div className="mt-6 h-64 rounded-2xl bg-neutral-100" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-sm font-semibold">Sales</div>
                  <p className="mt-2 text-sm text-neutral-600">
                    Track daily and monthly growth.
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-sm font-semibold">Customers</div>
                  <p className="mt-2 text-sm text-neutral-600">
                    See who is coming back.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
