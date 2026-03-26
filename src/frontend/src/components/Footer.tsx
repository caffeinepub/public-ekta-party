import { SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_GROUP = "https://chat.whatsapp.com/LaKgkOtuEBLGbQwIco5410";

const socialLinks = [
  {
    Icon: SiInstagram,
    href: "https://www.instagram.com/public_ekta_party?igsh=MTYwM250N2RxdXFmcg==",
    label: "Instagram",
  },
  { Icon: SiWhatsapp, href: WA_GROUP, label: "WhatsApp" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="blue-gradient pt-14 pb-6">
      <div className="h-1 tricolor-bar w-full mb-10" />

      {/* WhatsApp group join banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[oklch(0.46_0.18_145)] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <p className="text-white font-black text-xl font-display">
              Join Public Ekta Party on WhatsApp
            </p>
            <p className="text-white/80 text-sm mt-1">
              Free election tickets available for every area. Join us today!
            </p>
          </div>
          <a
            href={WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[oklch(0.46_0.18_145)] font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md whitespace-nowrap"
          >
            <SiWhatsapp size={20} />
            Join Group Now
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img
              src="/assets/uploads/IMG-20260305-WA0013-1-4-1.jpg"
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
                "Sabka Saath, Sabka Haq, Sabka Vikas"
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {["Home", "About", "Leadership", "Manifesto", "Join Us"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
                  data-ocid="footer.link"
                >
                  {link}
                </a>
              ),
            )}
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

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-4">
          <div className="border border-white/20 bg-white/5 rounded-lg p-4 mb-4">
            <p className="text-white/80 text-sm text-center leading-relaxed">
              <strong className="text-white font-bold">
                Legal Disclaimer:
              </strong>{" "}
              Public Ekta Party is currently an independent political movement,
              not yet registered with the Election Commission of India. We are
              currently building our community and gathering members.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/50 text-sm">
            © {year} Public Ekta Party. All rights reserved. Founded 2026.
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
