import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Join Us", href: "#join" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[oklch(0.22_0.14_264)] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="h-1 tricolor-bar w-full" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <a
          href="#home"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/IMG-20260305-WA0013-1--2.jpg"
            alt="Public Ekta Party Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-party-orange shadow-orange"
          />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-white text-sm leading-tight tracking-wide">
              PUBLIC EKTA PARTY
            </p>
            <p className="text-[oklch(0.68_0.18_55)] text-xs font-semibold tracking-widest">
              P.E.P. – FOR THE PEOPLE
            </p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-2 text-white/90 hover:text-[oklch(0.68_0.18_55)] font-semibold text-sm transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              asChild
              size="sm"
              data-ocid="nav.primary_button"
              className="ml-2 bg-[oklch(0.68_0.18_55)] hover:bg-[oklch(0.75_0.19_60)] text-white font-bold shadow-orange"
            >
              <a
                href="https://wa.me/916001885969"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[oklch(0.22_0.14_264)] border-t border-white/10"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 px-3 text-white/90 hover:text-[oklch(0.68_0.18_55)] font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/916001885969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 py-2 px-3 bg-[oklch(0.68_0.18_55)] text-white font-bold rounded-md text-center"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
