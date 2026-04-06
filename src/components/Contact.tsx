"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: "GitHub", href: "https://github.com/Anish091234" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anish-rangdal" },
  { label: "Email", href: "mailto:anish.rangdal@rutgers.edu" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-panel",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-panel",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".contact-link",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-links",
            start: "top 86%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="site-gutter relative py-40 md:py-48">
      <div className="site-wrap">
        <div className="section-divider mb-24 md:mb-28" />

        <div className="contact-panel glass-panel overflow-hidden rounded-[2rem] p-10 opacity-0 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,_rgba(255,223,175,0.18),_transparent_34%),radial-gradient(circle_at_right_center,_rgba(102,132,255,0.18),_transparent_40%)]" />

          <div className="relative grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
            <div>
              <span className="section-kicker">Get in Touch</span>

              <h2 className="mt-9 max-w-[14ch] text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white [word-spacing:0.03em] md:text-[3.45rem]">
                Open to research, engineering, and ambitious space conversations.
              </h2>

              <p className="mt-9 max-w-[42rem] text-base leading-[1.95] text-white/58 md:text-[1.08rem]">
                If you&apos;re building something thoughtful in aerospace,
                biotech, or frontier technology, I&apos;d love to hear about
                it. I&apos;m especially interested in opportunities where
                systems thinking and experimentation matter.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:anish.rangdal@rutgers.edu"
                className="contact-link block rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/18 hover:bg-white/[0.07]"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  Direct
                </div>
                <div className="mt-6 text-[1.42rem] font-medium leading-[1.28] tracking-[-0.015em] text-white [word-spacing:0.02em]">
                  anish.rangdal@rutgers.edu
                </div>
                <p className="mt-5 text-sm leading-[1.9] text-white/48">
                  Best for collaborations, internships, and technical
                  opportunities.
                </p>
              </a>

              <div className="contact-links grid gap-5 sm:grid-cols-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link group rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-7 py-6 text-left transition-all duration-300 hover:border-white/18 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                        {social.label}
                      </span>
                      <svg
                        className="h-3.5 w-3.5 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
