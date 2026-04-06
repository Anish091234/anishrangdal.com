"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "SolidWorks",
  "MATLAB",
  "GMAT",
  "FEMM",
  "AutoCAD",
  "Python",
  "SwiftUI",
  "Git",
  "Claude API",
];

const highlights = [
  { value: "3", label: "Published Papers" },
  { value: "500+", label: "Blood Samples Processed" },
  { value: "1,000+", label: "Experimental Trials" },
  { value: "1 Year", label: "Early Graduation" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-panel",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-panel",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-grid",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".about-tech",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-tech-wrap",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="site-gutter relative py-40 md:py-48">
      <div className="site-wrap">
        <div className="section-divider mb-24 md:mb-28" />

        <div className="about-grid grid gap-7 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="about-panel glass-panel overflow-hidden rounded-[2rem] p-10 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,225,174,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(108,142,255,0.16),_transparent_36%)]" />

            <div className="relative">
              <span className="section-kicker">About</span>

              <h2 className="mt-9 max-w-[14ch] text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white [word-spacing:0.03em] md:text-[3.45rem]">
                Building the systems that make space feel closer.
              </h2>

              <p className="mt-9 max-w-[52rem] text-lg leading-[1.9] text-white/76 md:text-[1.24rem]">
                I&apos;m an aerospace engineering student at Rutgers
                University, graduating a year early and focused on structural
                design, space systems, and turning ambitious research into real
                hardware.
              </p>

              <p className="mt-8 max-w-[47rem] text-base leading-[1.95] text-white/52 md:text-[1.06rem]">
                From lunar habitat concepts in the Benaroya Lab to
                peer-reviewed microgravity research and propulsion analysis at
                XDLINX Space Labs, my work lives at the intersection of
                hands-on engineering, experimentation, and long-horizon
                thinking.
              </p>

              <div className="about-tech-wrap mt-12 flex flex-wrap gap-3.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="about-tech opacity-0 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] uppercase tracking-[0.2em] text-white/56"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="about-card glass-panel opacity-0 rounded-[1.7rem] p-10 md:p-12"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  {item.label}
                </div>
                <div className="mt-12 text-4xl font-semibold tracking-[-0.02em] text-white md:text-[3.4rem]">
                  {item.value}
                </div>
              </div>
            ))}

            <div className="about-card glass-panel opacity-0 rounded-[1.7rem] p-10 sm:col-span-2 md:p-12">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Current Focus
              </div>

              <div className="mt-9 grid gap-6 md:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="text-sm font-medium text-white">
                    Lunar Habitat Structures
                  </div>
                  <p className="mt-3 text-sm leading-[1.8] text-white/45">
                    Composite architectures for thermal, mechanical, and
                    radiation performance on the Moon.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="text-sm font-medium text-white">
                    Microgravity Research
                  </div>
                  <p className="mt-3 text-sm leading-[1.8] text-white/45">
                    Experimental work connecting low gravity environments with
                    aging, organoid growth, and therapeutics.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="text-sm font-medium text-white">
                    Space Propulsion Analysis
                  </div>
                  <p className="mt-3 text-sm leading-[1.8] text-white/45">
                    Mission architecture, orbital simulation, and CAD-backed
                    propulsion trade studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
