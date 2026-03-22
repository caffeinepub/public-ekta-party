import {
  SiFacebook,
  SiInstagram,
  SiTelegram,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

const socialLinks = [
  {
    Icon: SiFacebook,
    href: "https://facebook.com/PEPSocial",
    label: "Facebook",
  },
  {
    Icon: SiInstagram,
    href: "https://instagram.com/PEPSocial",
    label: "Instagram",
  },
  { Icon: SiWhatsapp, href: "https://wa.me/916001885969", label: "WhatsApp" },
  { Icon: SiTelegram, href: "https://t.me/PEPSocial", label: "Telegram" },
  { Icon: SiX, href: "https://x.com/PEPSocial", label: "X" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="blue-gradient pt-14 pb-6">
      <div className="h-1 tricolor-bar w-full mb-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img
              src="/assets/uploads/IMG-20260305-WA0013-1--2.jpg"
              alt="Public Ekta Party Logo"
              className="h-16 w-16 rounded-full object-cover border-2 border-[oklch(0.68_0.18_55)]"
            />
            <div>
              <p className="font-display font-black text-white text-lg leading-tight">
                PUBLIC EKTA PARTY
              </p>
              <p className="text-[oklch(0.68_0.18_55)] text-xs font-bold tracking-widest">
                P.E.P. – FOR THE PEOPLE
              </p>
              <p className="font-display italic text-white/60 text-sm mt-0.5">
                नेता अपना, विकास सपना
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {["Home", "About", "Manifesto", "Join Us"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
                data-ocid="footer.link"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.68_0.18_55)] flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/50 text-sm">
            © {year} Public Ekta Party. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.68_0.18_55)] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
