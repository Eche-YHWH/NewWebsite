import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white/70 py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/50">© {new Date().getFullYear()} Daash.</p>

        <div className="flex gap-6 text-sm text-black/60">
          <a className="hover:text-black" href="#">
            Privacy
          </a>
          <a className="hover:text-black" href="#">
            Terms
          </a>
          <a className="hover:text-black" href="#">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
