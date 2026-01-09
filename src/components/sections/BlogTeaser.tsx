import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import blogCover from "../../assets/blog-cover.avif";

export default function BlogTeaser() {
  return (
    <section id="blog" className="bg-sky-60 py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-semibold tracking-widest text-black/45">BLOG</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-black">
            Ideas to level-up
            <br />
            your work game
          </h2>
        </Container>
      </Reveal>

      <Container className="mt-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white/80 shadow-sm">
            <img src={blogCover} alt="Blog cover" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white/80 p-10 shadow-sm">
            <div className="inline-flex rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white">
              MUST READ
            </div>

            <h3 className="mt-6 text-4xl font-semibold tracking-tight text-black">
              How to start a creative agency in 2025
            </h3>

            <p className="mt-4 text-black/60">
              Practical steps for getting your first clients, staying organized, and getting paid on time.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex text-sm font-semibold text-black underline underline-offset-4"
            >
              Read article
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
