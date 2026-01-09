import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import {
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Card = {
  key: string;
  icon: ReactNode;
  stat: string;
  title: string;
  text: string;
  cta: string;
  href: string;
};

const cards: Card[] = [
  {
    key: "x",
    icon: <Twitter className="h-6 w-6 text-black" />,
    stat: "15.2K FOLLOWERS",
    title: "X/Twitter",
    text: "Stay updated on new features and see how others use Daash.",
    cta: "Follow us",
    href: "https://x.com",
  },
  {
    key: "yt",
    icon: <Youtube className="h-6 w-6 text-red-600" />,
    stat: "32K SUBSCRIBERS",
    title: "YouTube",
    text: "Tips, tutorials, and guides to help you get more from Daash.",
    cta: "Subscribe",
    href: "https://youtube.com",
  },
  {
    key: "li",
    icon: <Linkedin className="h-6 w-6 text-blue-700" />,
    stat: "JOIN THE PAGE",
    title: "LinkedIn",
    text: "Product updates, launches, and short wins from teams using Daash.",
    cta: "Connect",
    href: "https://linkedin.com",
  },
  {
    key: "ig",
    icon: <Instagram className="h-6 w-6 text-pink-600" />,
    stat: "NEW POSTS WEEKLY",
    title: "Instagram",
    text: "Short clips, tips, and product moments. Light, useful, and quick.",
    cta: "Follow",
    href: "https://instagram.com",
  },
  {
    key: "fb",
    icon: <Facebook className="h-6 w-6 text-blue-600" />,
    stat: "COMMUNITY UPDATES",
    title: "Facebook",
    text: "News, events, and updates from the Daash community.",
    cta: "Join",
    href: "https://facebook.com",
  },
];

export default function Community() {
  const track = useMemo(() => [...cards, ...cards], []);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const halfWidthRef = useRef(0);

  const [isHolding, setIsHolding] = useState(false);

  const dragRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: -1,
  });

  // Measure the "half" point (since we duplicated the list)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const measure = () => {
      // scrollWidth is total, we duplicated content, half is one full set
      halfWidthRef.current = el.scrollWidth / 2;
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const speedPxPerFrame = 0.9; // adjust if you want faster/slower

    const tick = () => {
      if (!isHolding) {
        el.scrollLeft += speedPxPerFrame;

        const half = halfWidthRef.current;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isHolding]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    dragRef.current.active = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startScrollLeft = el.scrollLeft;
    dragRef.current.pointerId = e.pointerId;

    setIsHolding(true);

    // capture pointer so dragging still works if you leave the container
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (!dragRef.current.active) return;

    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startScrollLeft - dx;

    // keep it seamless when dragging too
    const half = halfWidthRef.current;
    if (half > 0) {
      if (el.scrollLeft < 0) el.scrollLeft += half;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    }
  };

  const endHold = () => {
    dragRef.current.active = false;
    dragRef.current.pointerId = -1;
    setIsHolding(false);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (el && dragRef.current.pointerId !== -1) {
      try {
        el.releasePointerCapture(dragRef.current.pointerId);
      } catch {
        // ignore
      }
    }
    endHold();
  };

  const onPointerCancel = () => {
    endHold();
  };

  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.22em] text-black/45">
              COMMUNITY
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Stay in the loop
            </h2>
          </div>

          <div className="relative mt-10">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            {/* draggable scroller */}
            <div
              ref={scrollerRef}
              className={[
                "relative overflow-hidden",
                "select-none",
                isHolding ? "cursor-grabbing" : "cursor-grab",
              ].join(" ")}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              {/* hide scrollbar if it ever appears */}
              <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>

              <div className="hide-scrollbar flex w-max gap-6 pr-6">
                {track.map((c, idx) => (
                  <a
                    key={`${c.key}-${idx}`}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      block w-[340px]
                      rounded-[26px]
                      border border-black/10
                      bg-white/65
                      p-8
                      shadow-sm
                      backdrop-blur
                      sm:w-[380px]
                    "
                    draggable={false}
                    onDragStart={(ev) => ev.preventDefault()}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                        {c.icon}
                      </div>

                      <div className="text-xs font-semibold tracking-wide text-black/40">
                        {c.stat}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-2xl font-semibold tracking-tight text-black">
                        {c.title}
                      </div>

                      <p className="mt-3 text-sm text-black/60 sm:text-base">
                        {c.text}
                      </p>

                      <div className="mt-7">
                        <div
                          className="
                            inline-flex items-center gap-2
                            rounded-full
                            border border-black/10
                            bg-white/70
                            px-5 py-3
                            text-sm font-medium text-black/70
                            shadow-sm
                          "
                        >
                          {c.cta}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
