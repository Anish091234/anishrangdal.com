"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Student Researcher — Benaroya Lab",
    company: "Rutgers University",
    period: "Sep 2025 — Present",
    description:
      "Investigating lunar habitat structural designs using Regolith + PEEK composites with embedded radiation shielding. Developing material selection frameworks comparing composite architectures across thermal, mechanical, and radiation shielding performance.",
    tags: ["ISRU", "Composites", "Analytical Modeling"],
  },
  {
    role: "Engineering Intern",
    company: "XDLINX Space Labs — Hyderabad, India",
    period: "Summer 2025",
    description:
      "Executed GMAT orbital simulations and SolidWorks propulsion CAD modeling for nuclear space propulsion architectures. Contributed to satellite subsystem assembly in a cleanroom environment across all subsystems.",
    tags: ["GMAT", "SolidWorks", "Cleanroom Integration"],
  },
  {
    role: "Student Researcher",
    company: "Rutgers University Newark",
    period: "Jun 2023 — Aug 2025",
    description:
      "Published peer-reviewed paper on microgravity-induced premature aging. Conducted approximately 1,000 experimental trials of diamagnetic levitation setups and FEMM simulations, cutting experimental time by over 50%.",
    tags: ["Published", "FEMM", "Diamagnetic Levitation"],
  },
  {
    role: "Research Assistant",
    company: "JelliBio — Warren, NJ",
    period: "Summer 2024 — 2025",
    description:
      "Helped establish a new biotechnology lab from the ground up, installing more than 15 instruments. Processed 500 plus human blood samples with high viability retention and executed 3D bioprinting of bone marrow scaffolds.",
    tags: ["Bioprinting", "Cryopreservation", "Lab Setup"],
  },
];

const education = {
  school: "Rutgers University",
  degree: "B.S. Aerospace Engineering",
  gpa: "3.43",
  graduation: "Expected May 2028",
  note: "Graduating one year early",
  activities: [
    "Rutgers Rocket Propulsion Lab — Structures",
    "Rutgers Formula Racing — Aerodynamics & Outreach",
  ],
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-panel",
        { opacity: 0, y: 36, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-panel",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".exp-item",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 84%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="site-gutter relative py-40 md:py-48"
    >
      <div className="site-wrap">
        <div className="section-divider mb-24 md:mb-28" />

        <div className="grid gap-7 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="exp-panel glass-panel overflow-hidden rounded-[2rem] p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,220,173,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(90,122,255,0.14),_transparent_40%)]" />

            <div className="relative">
              <span className="section-kicker">Experience</span>

              <h2 className="mt-9 max-w-[14ch] text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white [word-spacing:0.03em] md:text-[3.1rem]">
                Building depth across research, analysis, and hands-on hardware.
              </h2>

              <p className="mt-9 max-w-[35rem] text-base leading-[1.95] text-white/54 md:text-[1.05rem]">
                I like roles where theory meets execution: labs, simulations,
                cleanrooms, and collaborative engineering teams moving from
                ideas to mission-ready systems.
              </p>

              <div className="mt-14 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  Education
                </div>
                <h3 className="mt-6 text-[1.82rem] font-medium leading-[1.24] tracking-[-0.015em] text-white [word-spacing:0.02em]">
                  {education.degree}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-white/48">
                  {education.school} • GPA {education.gpa}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-white/42">
                  {education.graduation} • {education.note}
                </p>

                <div className="mt-8 space-y-5">
                  {education.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/54"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/32" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="exp-list space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="exp-item glass-panel opacity-0 rounded-[1.8rem] p-10 md:p-12"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-[40rem]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Role {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 text-[1.78rem] font-medium leading-[1.26] tracking-[-0.015em] text-white [word-spacing:0.02em]">
                      {exp.role}
                    </h3>
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/36">
                      {exp.company}
                    </p>
                    <p className="mt-7 text-sm leading-[1.95] text-white/50 md:text-base">
                      {exp.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/46">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
