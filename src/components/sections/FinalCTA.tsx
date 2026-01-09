import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

import phoneImg from "../../assets/mobile.png";

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />

      <Container>
        <Reveal>
          {/* OUTER WRAPPER: no clipping, so phone can spill out */}
          <div className="relative">
            {/* CARD: clipped for the nice rounded frame */}
            <div
              className="
                relative overflow-hidden
                rounded-[34px]
                border border-black/10
                bg-gradient-to-b from-sky-100 via-sky-50 to-white
                px-8 py-14
                shadow-sm
                sm:px-12
                lg:px-14
              "
            >
              {/* soft depth */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
                <div className="absolute left-24 top-10 h-64 w-64 rounded-full bg-white/60 blur-3xl" />
                <div className="absolute -right-24 top-6 h-96 w-96 rounded-full bg-white/55 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200/25 via-transparent to-white/85" />
              </div>

              {/* dotted texture on right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-[0.55]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                  maskImage:
                    "radial-gradient(circle at 70% 45%, black 0%, transparent 65%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 70% 45%, black 0%, transparent 65%)",
                }}
              />

              {/* content grid */}
              <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left */}
                <div className="max-w-xl">
                  <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                    Ready to get started
                  </h2>

                  <p className="mt-4 max-w-md text-sm text-black/60 sm:text-base">
                    Download Daash for free. No credit card required. Start managing your business
                    with clarity and control.
                  </p>

                  <div className="mt-8">
                    <Button>Try Daash free</Button>
                  </div>
                </div>

                {/* Right spacer so text doesn't collide */}
                <div className="relative">
                  <div className="h-[300px] sm:h-[360px]" />
                </div>
              </div>

              {/* bottom fade so forearm cut feels intentional */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/75" />
            </div>

            {/* PHONE: hidden on mobile, visible from sm up */}
            <div className="pointer-events-none absolute right-6 top-0 z-10 hidden sm:block sm:right-10 lg:right-14">
              <img
                src={phoneImg}
                alt="Daash mobile preview"
                draggable={false}
                className="
                  select-none
                  w-[340px]
                  max-w-none
                  translate-y-[-90px]
                  sm:w-[420px]
                  sm:translate-y-[-120px]
                "
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
