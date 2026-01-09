import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white/70 py-14">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="text-lg font-semibold text-black">Daash</div>
            <p className="mt-3 text-sm leading-6 text-black/60">
              Simple tools to help SMEs track sales, manage teams, and stay on top of cash flow.
            </p>

            <div className="mt-6 space-y-2 text-sm text-black/70">
              <div className="flex gap-3">
                <span className="w-24 text-black/45">Phone</span>
                <span>+234 000 000 0000</span>
              </div>
              <div className="flex gap-3">
                <span className="w-24 text-black/45">Email</span>
                <a className="hover:text-black" href="mailto:support@daashapp.co">
                  support@daashapp.co
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/70 hover:bg-white hover:text-black"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/70 hover:bg-white hover:text-black"
                aria-label="X"
              >
                X
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="text-sm font-semibold text-black/80">Pages</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-sm font-semibold text-black/80">Quick links</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#benefits">
                  Across devices
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#features">
                  Product management
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#pricing">
                  Plans
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold text-black/80">Legal</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Daash. All rights reserved.</p>
          <p className="text-black/40">Built for teams that move fast.</p>
        </div>
      </Container>
    </footer>
  );
}

