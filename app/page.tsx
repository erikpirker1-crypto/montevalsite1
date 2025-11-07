"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import IntroAnimation from "@/components/IntroAnimation";
import Footer from "@/components/Footer";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPageVisible(true);
    } else {
      const timer = setTimeout(() => {
        setPageVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen relative overflow-hidden ${pageVisible ? 'page-visible' : ''}`}>
      <IntroAnimation />

      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-10 text-center opacity-0 transition-opacity duration-[400ms] [.page-visible_&]:opacity-100">
        <Image
          src="/monte.png"
          alt="Monteval Logo"
          width={800}
          height={200}
          priority
          className="w-[clamp(400px,80vw,800px)] h-auto block"
        />
      </div>

      <main className="w-[min(100%,var(--max-width))] px-[clamp(1.5rem,5vw,2.75rem)] py-[clamp(1.5rem,5vw,2.5rem)] relative z-[1] flex flex-col gap-[clamp(1.75rem,4vw,2.5rem)] mt-[clamp(10rem,18vh,12rem)] max-sm:mt-[clamp(2rem,6vh,3rem)]">
        <section className="text-center relative z-[1] grid gap-4 max-w-[var(--content-width)] mx-auto" aria-label="Monteval Markenauftritt">
          <p className="text-[clamp(0.95rem,2vw,1.1rem)] max-w-[var(--content-width)] mx-auto leading-[1.3] text-[rgba(248,247,242,0.88)] font-light tracking-[clamp(0.05em,0.6vw,0.1em)] normal-case whitespace-normal text-center">
            <span className="max-sm:inline">„Wo die Essenz der Natur auf</span>
            <span className="max-sm:inline"> </span>
            <span className="max-sm:inline">zeitlose Eleganz trifft."</span>
          </p>

          <nav className="grid grid-cols-4 max-sm:grid-cols-2 gap-[clamp(0.75rem,2vw,1.1rem)] max-sm:gap-[clamp(0.75rem,4vw,1rem)] mt-2 max-w-[var(--content-width)] mx-auto" aria-label="Kontakt und soziale Kanäle">
            <SocialLink
              href="mailto:kontakt@monteval.de"
              icon="email"
              label="Kontakt"
              ariaLabel="E-Mail an Monteval"
            />
            <SocialLink
              href="https://www.instagram.com/monteval.galerie/"
              icon="instagram"
              label="Instagram"
              ariaLabel="Instagram"
            />
            <SocialLink
              href="https://www.tiktok.com/@monteval.galerie"
              icon="tiktok"
              label="TikTok"
              ariaLabel="TikTok"
            />
            <SocialLink
              href="https://www.youtube.com/channel/UCaPBgtN6Cn3vKYQLwJoZ05Q"
              icon="youtube"
              label="YouTube"
              ariaLabel="YouTube"
            />
          </nav>
        </section>

        <p className="text-[clamp(0.95rem,2vw,1.1rem)] max-w-[var(--content-width)] mx-auto leading-[1.3] text-[rgba(248,247,242,0.88)] font-light tracking-[clamp(0.05em,0.6vw,0.1em)] normal-case whitespace-normal text-center mb-4 max-sm:mt-10 sm:mb-16">
          „coming soon"
        </p>
      </main>

      <Footer />
    </div>
  );
}
