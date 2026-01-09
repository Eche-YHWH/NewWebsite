import Container from "../ui/Container";
import daashLogo from "../../assets/Daash Final logo.svg";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white/70 py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <img
              src={daashLogo}
              alt="Daash"
              draggable={false}
              className="h-9 w-auto object-contain"
            />

            <p className="mt-3 text-sm text-black/60">
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
          </div>

          {/* Pages */}
          <div>
            <div className="text-sm font-semibold text-black/80">Pages</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#benefits">
                  Benefits
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

          {/* Information */}
          <div>
            <div className="text-sm font-semibold text-black/80">Information</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Extra */}
          <div>
            <div className="text-sm font-semibold text-black/80">More</div>
            <ul className="mt-4 space-y-3 text-sm text-black/60">
              <li>
                <a className="hover:text-black" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Status
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Daash.</p>
          <p className="text-black/40">Built for teams that move fast.</p>
        </div>
      </Container>
    </footer>
  );
}


