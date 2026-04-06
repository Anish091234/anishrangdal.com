"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const heroMetrics = [
  { value: "3", label: "Published Papers" },
  { value: "1,000+", label: "Experimental Trials" },
  { value: "1 Year", label: "Early Graduation" },
];

const affiliations = ["Rutgers University", "Benaroya Lab", "XDLINX Space Labs"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.3 });

      tl.fromTo(
        ".hero-aux",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        ".hero-line",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.fromTo(
        ".hero-metric",
        { opacity: 0, y: 18, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.25"
      );

      tl.fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="site-gutter relative min-h-screen overflow-hidden pt-30 md:pt-32"
    >
      <div className="hero-media">
        <Image
          src="/images/hero-earthrise.jpg"
          alt="Earth rising above the Moon's horizon"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>
      <div className="hero-image-glow" />
      <div className="hero-image-overlay" />
      <div className="hero-image-vignette" />

      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-end justify-center pb-20 md:pb-24">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center text-center">
          <p className="hero-aux opacity-0 text-[11px] uppercase tracking-[0.32em] text-white/40">
            Aerospace Engineering • Research • Space Systems
          </p>

          <h1 className="mt-9 text-[clamp(2.65rem,6vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-white [word-spacing:0.06em]">
            <span className="hero-line block opacity-0">Hi, I&apos;m Anish.</span>
            <span className="hero-line block opacity-0 text-white/46">
              Engineering the next
            </span>
            <span className="hero-line block opacity-0 text-white/46">
              frontier in space.
            </span>
          </h1>

          <p className="hero-subtitle opacity-0 mt-12 max-w-[780px] text-base leading-[1.95] text-white/60 md:text-[1.1rem]">
            Aerospace engineering student at Rutgers University building toward
            lunar habitats, space propulsion, and the systems that make a
            long-term human future beyond Earth possible.
          </p>

          <div className="hero-aux opacity-0 mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.28em] text-white/42">
            {affiliations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-cta opacity-0 group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-black transition-colors hover:bg-white/90"
            >
              View My Work
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-cta opacity-0 rounded-full border border-white/12 bg-white/[0.03] px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-white/68 transition-all hover:border-white/24 hover:text-white"
            >
              Explore Background
            </a>
          </div>

          <div className="mt-20 grid w-full max-w-[940px] gap-5 md:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="hero-metric glass-panel opacity-0 rounded-[1.55rem] px-9 py-9 text-left backdrop-blur-xl"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                  {metric.label}
                </div>
                <div className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator opacity-0 absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
