"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Lunar Habitat Structural Design",
    description:
      "Investigating structural designs for lunar habitats using Regolith + PEEK composites with embedded radiation shielding. Developing material selection frameworks and additive manufacturing strategies for in-situ resource utilization.",
    tags: ["Benaroya Lab", "ISRU", "Composites", "Analytical Modeling"],
    link: "",
    image: null,
    tint: "from-[#1b1a1a] via-[#111114] to-[#0c0c0f]",
  },
  {
    title: "Microgravity Aging Research",
    description:
      "Published peer-reviewed paper on microgravity-induced premature aging, proposing diamagnetic levitation as an artificial gravity countermeasure. Conducted ~1,000 experimental trials and FEMM simulations to optimize levitation configurations.",
    tags: ["Published", "FEMM", "Diamagnetic Levitation", "Simulations"],
    link: "https://journals.riverpublishers.com/index.php/IJTS/article/view/25517",
    image: "/images/diamagnetic-levitation.png",
    tint: "from-[#111317] via-[#0f1115] to-[#0a0b0d]",
  },
  {
    title: "Nuclear Space Propulsion Analysis",
    description:
      "Executed GMAT orbital simulations and SolidWorks propulsion CAD modeling to evaluate nuclear propulsion architectures, demonstrating more than 50% performance improvement over conventional chemical systems.",
    tags: ["XDLINX Space Labs", "GMAT", "SolidWorks", "Propulsion"],
    link: "",
    image: null,
    tint: "from-[#171717] via-[#101112] to-[#090a0b]",
  },
  {
    title: "Microgravity Therapeutics & Organoid Research",
    description:
      "Published research on organoid development in microgravity, 3D tumor modeling for cancer studies, and biomarker discovery. Exploring how space-based experiments advance regenerative medicine and precision health.",
    tags: ["Published", "Organoids", "Microgravity", "Biomedical"],
    link: "https://journals.riverpublishers.com/index.php/IJTS/article/view/29961",
    image: "/images/microgravity-organoids.jpg",
    tint: "from-[#121316] via-[#0e1016] to-[#090b10]",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-intro",
        { opacity: 0, y: 32, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-intro",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-stack",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section ref={sectionRef} id="projects" className="site-gutter relative py-40 md:py-48">
      <div className="site-wrap">
        <div className="section-divider mb-24 md:mb-28" />

        <div className="projects-intro grid gap-8 md:grid-cols-[240px_1fr]">
          <div>
            <span className="section-kicker">Projects</span>
          </div>
          <div className="max-w-[50rem]">
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white [word-spacing:0.03em] md:text-[3.2rem]">
              Research and engineering work shaped like flagship mission
              studies.
            </h2>
            <p className="mt-8 text-base leading-[1.95] text-white/52 md:text-[1.06rem]">
              I tend to work on problems that live somewhere between conceptual
              architecture and execution: habitats, propulsion, bioengineering,
              and the infrastructure that makes ambitious missions practical.
            </p>
          </div>
        </div>

        <div className="projects-stack mt-16 space-y-7">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const visual = (
              <div
                className={`relative min-h-[320px] overflow-hidden rounded-[1.55rem] border border-white/8 bg-gradient-to-br ${project.tint}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,_rgba(255,224,181,0.2),_transparent_24%),radial-gradient(circle_at_75%_72%,_rgba(115,144,255,0.14),_transparent_30%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,_rgba(0,0,0,0.38))]" />
                    <div className="absolute left-5 top-5 text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Mission Study {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="max-w-[19rem] text-[1.8rem] font-medium leading-[1.26] tracking-[-0.015em] text-white/90 [word-spacing:0.02em]">
                        {project.title}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );

            const content = (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.link ? (
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
                    ) : null}
                  </div>

                  <h3 className="mt-7 text-[1.88rem] font-medium leading-[1.26] tracking-[-0.015em] text-white [word-spacing:0.02em] md:text-[2.05rem]">
                    {project.title}
                  </h3>

                  <p className="mt-7 max-w-[36rem] text-sm leading-[1.95] text-white/48 md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-11 flex flex-wrap gap-3.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            const sharedProps = {
              className:
                "project-card glass-panel card-glow group block opacity-0 rounded-[2rem] p-7 transition-all duration-300 hover:border-white/16 md:p-9",
              onMouseMove: handleMouseMove,
            };

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...sharedProps}
              >
                <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                  <div className={isReversed ? "lg:order-2" : ""}>{visual}</div>
                  <div className={isReversed ? "lg:order-1" : ""}>{content}</div>
                </div>
              </a>
            ) : (
              <article key={project.title} {...sharedProps}>
                <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                  <div className={isReversed ? "lg:order-2" : ""}>{visual}</div>
                  <div className={isReversed ? "lg:order-1" : ""}>{content}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
