"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const papers = [
  {
    title:
      "Advancing Science in Microgravity – Implications for Effective Therapies",
    authors:
      "A. Rangdal, S. Munoz, C. Ma, M. S. De Lorenzo, L. S. Sherman",
    journal: "International Journal of Translational Science",
    year: "2025",
    doi: "10.13052/ijts2246-8765.2025.001",
    link: "https://journals.riverpublishers.com/index.php/IJTS/article/view/29961",
  },
  {
    title:
      "Aerospace Medicine – An Evolving Field to Mitigate and Treat Organ Dysfunction Partly Caused by Premature Aging in Low Microgravity",
    authors: "A. Rangdal, S. Munoz, L. S. Sherman, S. Mahendrakar",
    journal: "International Journal of Translational Science",
    year: "2024",
    doi: "10.13052/ijts2246-8765.2024.032",
    link: "https://journals.riverpublishers.com/index.php/IJTS/article/view/26919",
  },
  {
    title:
      "A Theory of Gravitational Generation to Mitigate Space-Induced Low Gravity – Relevance to Premature Aging in Space",
    authors:
      "A. Rangdal, A. Petryna, B. Shadpoor, L. S. Sherman, E. Homsi",
    journal: "International Journal of Translational Science",
    year: "2024",
    doi: "10.13052/ijts2246-8765.2024.005",
    link: "https://journals.riverpublishers.com/index.php/IJTS/article/view/25517",
  },
];

const media = {
  title: "Interview — Space Research & Diamagnetic Levitation",
  source: "YouTube",
  link: "https://www.youtube.com/watch?v=zlSTqrOBYTw",
  description:
    "A conversation about diamagnetic levitation, microgravity experimentation, and how emerging research can push space medicine forward.",
};

export default function Publications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pub-panel",
        { opacity: 0, y: 36, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pub-panel", start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".pub-card",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pub-grid", start: "top 84%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="site-gutter relative py-40 md:py-48"
    >
      <div className="site-wrap">
        <div className="section-divider mb-24 md:mb-28" />

        <div className="pub-grid grid gap-7 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="pub-panel glass-panel overflow-hidden rounded-[2rem] p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,223,171,0.16),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(97,126,255,0.14),_transparent_40%)]" />

            <div className="relative">
              <span className="section-kicker">Research & Media</span>

              <h2 className="mt-9 max-w-[14ch] text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white [word-spacing:0.03em] md:text-[3.2rem]">
                Publishing, presenting, and translating complex work into clear
                stories.
              </h2>

              <p className="mt-9 max-w-[37rem] text-base leading-[1.95] text-white/54 md:text-[1.05rem]">
                My research spans microgravity therapeutics, artificial gravity,
                and the biological impact of space environments. Alongside the
                papers, I also enjoy communicating the why behind the work.
              </p>

              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card group mt-14 block rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-white/18 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      {media.source}
                    </div>
                    <h3 className="mt-5 text-[1.45rem] font-medium leading-[1.28] tracking-[-0.015em] text-white [word-spacing:0.02em]">
                      {media.title}
                    </h3>
                    <p className="mt-4 max-w-[32rem] text-sm leading-[1.8] text-white/48">
                      {media.description}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors group-hover:border-white/20 group-hover:text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {papers.map((paper, index) => (
              <a
                key={paper.doi}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`pub-card glass-panel group opacity-0 rounded-[1.8rem] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 md:p-12 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    {paper.journal}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {paper.year}
                  </span>
                </div>

                <h3 className="mt-8 text-[1.35rem] font-medium leading-[1.3] tracking-[-0.015em] text-white [word-spacing:0.02em] md:text-[1.55rem]">
                  {paper.title}
                </h3>

                <p className="mt-6 text-sm leading-[1.95] text-white/48">
                  {paper.authors}
                </p>

                <div className="mt-12 flex items-center justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/34">
                    DOI {paper.doi}
                  </span>
                  <svg
                    className="h-4 w-4 text-white/28 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/65"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
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
    </section>
  );
}
