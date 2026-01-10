import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    desc: "For solo use with light needs.",
    features: ["Unlimited projects", "Unlimited clients", "Time tracking", "CRM", "Mobile app"],
    cta: "Try free",
    featured: false,
  },
  {
    name: "Premium",
    price: "$189/mo",
    desc: "For pro use with light needs.",
    features: ["Everything in Basic", "Invoices & payments", "Expense tracking", "Income tracking", "Scheduling"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Flexible",
    desc: "For team use with light needs.",
    features: ["Everything in Premium", "Custom import", "Advanced onboarding", "Integrations", "Timesheets"],
    cta: "Contact sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sky-90/80 py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-semibold tracking-widest text-black/45">PRICING</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-black">
            Simple plans
            <br />
            for serious work
          </h2>
        </Container>
      </Reveal>

      <Container className="mt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-[28px] border bg-white/80 p-10 shadow-sm ${
                p.featured ? "border-sky-300 ring-2 ring-sky-200" : "border-black/10"
              }`}
            >
              <div className="text-sm text-black/60">Daash {p.name}</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-black">{p.price}</div>
              <div className="mt-2 text-black/50">{p.desc}</div>

              <ul className="mt-8 space-y-3 text-black/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="inline-block h-5 w-5 rounded-full bg-black/10" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                {p.featured ? (
                  <Button className="w-full py-3">Get started</Button>
                ) : (
                  <Button variant="secondary" className="w-full py-3">
                    {p.cta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
