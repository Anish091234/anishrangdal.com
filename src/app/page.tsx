"use client";

import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const onLoaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Loader onComplete={onLoaderComplete} />
      {loaded && (
        <div className="site-shell">
          <div className="site-stars" />
          <div className="site-vignette" />
          <div className="site-noise" />
          <Navigation />
          <main className="relative z-10 w-full">
            <Hero />
            <About />
            <Publications />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
