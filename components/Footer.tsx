"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="fixed bottom-[clamp(1.5rem,5vw,2.4rem)] left-1/2 -translate-x-1/2 w-[min(100%,var(--max-width))] max-w-[calc(100vw-3rem)] inline-flex items-center justify-between gap-5 px-[clamp(1.5rem,4vw,2rem)] text-[0.6rem] text-[rgba(248,247,242,0.6)] tracking-[0.12em] uppercase z-[2] opacity-0 transition-opacity duration-[2000ms] pointer-events-none invisible [.page-visible_&]:opacity-100 [.page-visible_&]:pointer-events-auto [.page-visible_&]:visible box-border">
      <span className="inline-flex items-center gap-2.5">
        © {year} Monteval
      </span>
      <span className="inline-flex gap-4" aria-label="Rechtliche Hinweise">
        <Link
          href="/impressum"
          className="relative transition-colors duration-[240ms] ease-in-out hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:text-[var(--color-text-primary)] after:content-[''] after:absolute after:left-0 after:bottom-[-0.2rem] after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-[240ms] after:ease-in-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
        >
          Impressum
        </Link>
        <Link
          href="/datenschutz"
          className="relative transition-colors duration-[240ms] ease-in-out hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:text-[var(--color-text-primary)] after:content-[''] after:absolute after:left-0 after:bottom-[-0.2rem] after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-[240ms] after:ease-in-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
        >
          Datenschutzerklärung
        </Link>
      </span>
    </footer>
  );
}
