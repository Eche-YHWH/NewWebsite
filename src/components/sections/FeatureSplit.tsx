import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import type { ReactNode } from "react";

type Chip = { label: string };

type Props = {
  id?: string;
  eyebrow: string;
  eyebrowIcon?: ReactNode; // NEW
  title: string;
  text: string;
  chips: Chip[];
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
};

export default function FeatureSplit({
  id,
  eyebrow,
  eyebrowIcon,
  title,
  text,
  chips,
  imageSrc,
  imageAlt,
  flip = false,
}: Props) {
  return (
    <section id={id} className="py-20">
      <Reveal>
        <Container>
          <div
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <div className="rounded-[28px] bg-gradient-to-b from-sky-200/70 to-amber-100/40 p-6">
                <div className="rounded-[22px] border border-black/10 bg-white/80 p-4 shadow-sm">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full rounded-[18px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Eyebrow with icon */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-black/45">
                {eyebrowIcon && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-black">
                    {eyebrowIcon}
                  </span>
                )}
                <span>{eyebrow}</span>
              </div>

              <h3 className="mt-4 text-5xl font-semibold tracking-tight text-black">
                {title}
              </h3>

              <p className="mt-5 max-w-xl text-base text-black/60 sm:text-lg">
                {text}
              </p>

              <div className="mt-10">
                <Button className="px-6">Try Daash free</Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {chips.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm text-black/80"
                  >
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
