import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const cards = [
  {
    text:
      "We needed something that matched our pace. From onboarding to getting paid, it just works.",
    name: "Sergio Walker",
    role: "Agency Owner",
    faded: true,
  },
  {
    text:
      "Daash is by far the best agency tool I have ever used.",
    name: "Martha Punla",
    role: "VP Marketing",
    faded: false,
  },
  {
    text:
      "We used to duct-tape tools together. Now everything lives in one clean system.",
    name: "Jane Jay Jay",
    role: "Project Manager",
    faded: true,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sky-50/60 py-24">
      <Reveal>
        <Container className="text-center">
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-black">
            "Daash is by far the best tool I have ever used"
          </h2>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-black/20" />
            <div className="text-sm font-semibold">Martha Punla</div>
            <div className="text-sm text-black/50">VP Marketing</div>
          </div>
        </Container>
      </Reveal>

      <Container className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.name}
              className={`rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-sm transition ${
                c.faded ? "opacity-40" : "opacity-100"
              }`}
            >
              <p className="text-black/70">{c.text}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-black/15" />
                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-sm text-black/50">{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
