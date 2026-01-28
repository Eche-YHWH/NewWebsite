import React from "react";
import { ArrowRight } from "lucide-react";

// ✅ correct relative path from: src/components/sections/Integrations.tsx
import GoSourceLogo from "../../assets/Logo/GoSource.png";
import GlovoLogo from "../../assets/Logo/Glovo.png";
import TermiiLogo from "../../assets/Logo/Termii.png";

import PaystackLogo from "../../assets/Logo/paystack.png";
import ChowdeckLogo from "../../assets/Logo/Chowdeck.png";
import RelayLogo from "../../assets/Logo/Relay.png"; // keep if you use Relay, otherwise swap back to Gmail

import DaashLogo from "../../assets/Logo/daashcopy.png";

type LogoItem = {
  label: string;
  src: string;
  floatDelay?: string;
};

const leftItems: LogoItem[] = [
  { label: "GoSource", src: GoSourceLogo, floatDelay: "0s" },
  { label: "Glovo", src: GlovoLogo, floatDelay: "0.6s" },
  { label: "Termii", src: TermiiLogo, floatDelay: "1.2s" },
];

const rightItems: LogoItem[] = [
  { label: "Paystack", src: PaystackLogo, floatDelay: "0.3s" },
  { label: "Chowdeck", src: ChowdeckLogo, floatDelay: "0.9s" },
  { label: "Relay", src: RelayLogo, floatDelay: "1.5s" },
];

function LogoNode({ label, src, floatDelay = "0s" }: LogoItem) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-black/[0.05] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-black/70 shadow-sm opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </div>

      <div
        className="floaty relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur transition-transform duration-300 group-hover:scale-[1.04]"
        style={{ animationDelay: floatDelay }}
      >
        <div className="pointer-events-none absolute inset-[1px] rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0))] opacity-70" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]" />

        <img
          src={src}
          alt={label}
          className="relative h-full w-full object-contain p-0"
          draggable={false}
        />
      </div>

      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="relative mx-auto mt-24 mb-24 max-w-6xl px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-mono tracking-widest text-sky-700">
          INTEGRATIONS
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          Integrates with your workflow
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
          Connect the tools you already use, keep your store and team in sync
          from one place.
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-4xl">
        <div className="relative flex items-center justify-center rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur md:p-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 900 340"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wire" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                <stop offset="35%" stopColor="#000000" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.18" />
                <stop offset="65%" stopColor="#000000" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>

              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feColorMatrix
                  in="b"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.22 0"
                  result="g"
                />
                <feMerge>
                  <feMergeNode in="g" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* WIRE (6 total) - start points aligned to logo columns */}
            {/* left top */}
            <path
              d="M250,85 C330,85 360,170 450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.9"
            />
            {/* left middle (straight) */}
            <path
              d="M250,170 L450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.85"
            />
            {/* left bottom */}
            <path
              d="M250,255 C330,255 360,170 450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.9"
            />

            {/* right top */}
            <path
              d="M650,85 C570,85 540,170 450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.9"
            />
            {/* right middle (straight) */}
            <path
              d="M650,170 L450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.85"
            />
            {/* right bottom */}
            <path
              d="M650,255 C570,255 540,170 450,170"
              stroke="url(#wire)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glow)"
              opacity="0.9"
            />

            {/* FLOW (6 total) - same paths on top */}
            {/* left top */}
            <path
              d="M250,85 C330,85 360,170 450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow"
            />
            {/* left middle (straight) */}
            <path
              d="M250,170 L450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow delay"
            />
            {/* left bottom */}
            <path
              d="M250,255 C330,255 360,170 450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow delay2"
            />

            {/* right top */}
            <path
              d="M650,85 C570,85 540,170 450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow delay"
            />
            {/* right middle (straight) */}
            <path
              d="M650,170 L450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow delay2"
            />
            {/* right bottom */}
            <path
              d="M650,255 C570,255 540,170 450,170"
              stroke="url(#flow)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#glow)"
              className="flow"
            />

            <circle cx="450" cy="170" r="3" fill="#6366f1" opacity="0.85" />
          </svg>

          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-0">
            <div className="flex items-center justify-center gap-6 md:flex-col md:gap-8">
              {leftItems.map((it) => (
                <LogoNode key={it.label} {...it} />
              ))}
            </div>

            <div className="flex items-center justify-center py-2 md:py-0">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12),_transparent_68%)] blur-3xl" />

                <div
                  className="floaty relative flex h-[84px] w-[84px] items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white/75 shadow-sm backdrop-blur-2xl md:h-[96px] md:w-[96px]"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="pointer-events-none absolute inset-[1px] rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0))] opacity-70" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]" />

                  <img
                    src={DaashLogo}
                    alt="Daash"
                    className="relative h-full w-full object-contain p-3"
                    draggable={false}
                  />

                  <div className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-black/70 shadow-sm opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100" />
                </div>

                <div className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-black/70 shadow-sm opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                  Daash
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 md:flex-col md:gap-8">
              {rightItems.map((it) => (
                <LogoNode key={it.label} {...it} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/integrations"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-xs font-medium tracking-wide text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
        >
          <span>Explore integrations</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <style>{`
        .flow {
          stroke-dasharray: 14 360;
          stroke-dashoffset: 0;
          animation: flow 2.9s linear infinite;
          opacity: 0.85;
        }
        .flow.delay { animation-delay: .55s; }
        .flow.delay2 { animation-delay: 1.0s; }

        @keyframes flow {
          0% { stroke-dashoffset: 0; opacity: .45; }
          50% { opacity: .9; }
          100% { stroke-dashoffset: -380; opacity: .45; }
        }

        .floaty {
          animation: floaty 6.5s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
