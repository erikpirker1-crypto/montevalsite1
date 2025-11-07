"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 4000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/96 backdrop-blur-3xl transition-opacity duration-[2000ms] ease-linear ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-[3400ms] ease-linear"
        style={{
          background: "radial-gradient(120% 120% at 50% 40%, rgba(212, 175, 55, 0.12), transparent 74%)",
          filter: "blur(36px)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      <div
        className="absolute w-[clamp(280px,60vw,420px)] h-[clamp(280px,60vw,420px)] rounded-full opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.14), transparent 74%)",
          filter: "blur(50px)",
          animation: "glow-rise 2s ease forwards",
        }}
      />

      <div className="relative flex items-center justify-center">
        <Image
          src="/montevallogoround.png"
          alt="Monteval Logo"
          width={280}
          height={280}
          priority
          className="w-[clamp(180px,40vw,280px)] h-auto scale-[0.82]"
          style={{
            animation: "logo-pop 2s var(--transition) forwards",
          }}
        />
      </div>
    </div>
  );
}
