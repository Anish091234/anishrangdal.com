"use client";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-gutter relative pb-12 pt-4 md:pb-14">
      <div className="site-wrap">
        <div className="section-divider mb-10" />

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[24rem]">
            <div className="text-[1.08rem] font-medium tracking-[-0.03em] text-white">
              Anish Rangdal
            </div>
            <p className="mt-4 text-sm leading-[1.9] text-white/38">
              Aerospace engineering student building toward the next human
              frontier in space.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.28em] text-white/36 transition-colors hover:text-white/72"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.06] pt-7 md:flex-row md:items-center md:justify-between">
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/28">
            &copy; {new Date().getFullYear()} Anish Rangdal
          </span>

          <div className="flex items-center gap-7">
            <a
              href="https://github.com/Anish091234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.26em] text-white/32 transition-colors hover:text-white/70"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anish-rangdal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.26em] text-white/32 transition-colors hover:text-white/70"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
