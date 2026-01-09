import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import daashLogo from "../../assets/Daash Final logo.svg";


import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // A) Track breakpoint and auto-close menu when entering desktop
  useEffect(() => {
    const mq: MediaQueryList = window.matchMedia("(min-width: 768px)");

    const sync = (e?: MediaQueryListEvent) => {
      const matches = e ? e.matches : mq.matches; // true = desktop
      setIsMobile(!matches);

      if (matches) {
        setMobileOpen(false);
      }
    };

    sync();

    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  // Desktop scroll behavior only (mobile is always pill)
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // B) Lock background scroll when mobile menu is open
  useEffect(() => {
    if (!isMobile) return;

    const prevOverflow = document.body.style.overflow;

    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prevOverflow || "";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen, isMobile]);

  // Desktop: pill only after scroll
  // Mobile: pill always
  const pillActive = isMobile ? true : isScrolled;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    window.location.hash = href.replace("#", "");
  };

  return (
    <motion.header
      layout
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={[
        "z-50",
        // Mobile: always fixed and pill
        isMobile ? "fixed inset-x-0 top-5" : "",
        // Desktop: absolute at top, becomes fixed on scroll
        !isMobile && pillActive ? "fixed inset-x-0 top-5" : "",
        !isMobile && !pillActive ? "absolute inset-x-0 top-6" : "",
      ].join(" ")}
    >
      <Container className={pillActive ? "flex justify-center" : ""}>
        {/* Shared shell */}
        <motion.div
          layout
          layoutId="nav-shell"
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className={[
            "relative w-full",
            // Desktop normal state: no pill styling
            !pillActive
              ? "bg-transparent shadow-none backdrop-blur-0"
              : "border border-black/10 bg-white/70 shadow-sm backdrop-blur",
            // Width behavior when pill is active
            pillActive ? "mx-auto max-w-4xl" : "",
            // Shape
            mobileOpen ? "rounded-3xl" : pillActive ? "rounded-full" : "",
            // Padding
            pillActive ? "px-4 py-3" : "px-0 py-0",
          ].join(" ")}
        >
          {/* Top row */}
          <motion.div
            layout
            layoutId="nav-row"
            className={[
              "flex items-center justify-between",
              // breathing room in desktop normal state
              !pillActive ? "px-2" : "",
            ].join(" ")}
          >
            {/* Logo group */}
            <motion.div
              layout
              layoutId="nav-logo"
              className="flex items-center"
            >
              <motion.img
                layout
                layoutId="nav-mark"
                src={daashLogo}
                alt="Daash"
                draggable={false}
                className="h-8 w-auto object-contain"
              />
            </motion.div>


            {/* Desktop links */}
            <motion.nav
              layout
              layoutId="nav-links"
              className={[
                "hidden md:flex items-center text-sm text-black/70",
                pillActive ? "gap-6" : "gap-8",
              ].join(" ")}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition hover:text-black"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>

            {/* Right side */}
            <motion.div layout layoutId="nav-actions" className="flex items-center gap-3">
              {/* Desktop CTA only (removed on mobile) */}
              <motion.div layout layoutId="nav-cta" className="hidden md:block">
                <Button className="px-5 py-2.5">Try Daash free</Button>
              </motion.div>

              {/* Mobile hamburger far right */}
              <motion.button
                layout
                layoutId="nav-burger"
                type="button"
                className={[
                  "md:hidden inline-flex h-10 w-10 items-center justify-center",
                  "rounded-full border border-black/10 bg-white/60",
                ].join(" ")}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile expanded menu INSIDE the same shell */}
          <AnimatePresence>
            {mobileOpen && isMobile && (
              <motion.div
                key="mobileMenu"
                layout
                layoutId="nav-mobile-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden"
              >
                <div className="pt-3">
                  <div className="h-px w-full bg-black/10" />
                </div>

                <div className="pt-3">
                  <div className="flex flex-col">
                    {links.map((l, idx) => (
                      <motion.button
                        key={l.href}
                        type="button"
                        onClick={() => handleNavClick(l.href)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25, delay: 0.03 * idx }}
                        className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-black/80 transition hover:bg-black/5"
                      >
                        {l.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* CTA inside menu on mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25, delay: 0.2 }}
                    className="mt-3 px-2 pb-2"
                  >
                    <Button className="w-full py-3">Try Daash free</Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </motion.header>
  );
}
