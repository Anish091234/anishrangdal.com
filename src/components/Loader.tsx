"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if already loaded this session
    if (sessionStorage.getItem("loaded")) {
      setVisible(false);
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("loaded", "true");
        setVisible(false);
        onComplete();
      },
    });

    tl.to(".loader-screen", {
      delay: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="loader-screen">
      <div className="loader-icon" />
    </div>
  );
}
