"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(140%_140%_at_50%_0%,rgba(216,177,121,0.18),transparent_60%),var(--color-bg)] p-[clamp(1.5rem,6vw,4rem)] overflow-auto">
      <main className="w-[min(100%,760px)] mx-auto p-[clamp(2.2rem,6vw,3.6rem)] grid gap-[clamp(1.4rem,3.5vw,2.2rem)]">
        <Link
          href="/"
          className="justify-self-start inline-flex items-center gap-[0.45rem] tracking-[0.12em] uppercase text-[0.75rem] text-[rgba(248,247,242,0.7)] no-underline hover:text-[var(--color-text-primary)] transition-colors duration-200"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-[18px] h-[18px] stroke-current stroke-[1.5] fill-none"
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
          Zurück zur Startseite
        </Link>

        <header className="grid gap-6 text-center">
          <div className="inline-flex flex-col gap-[0.35rem] items-center">
            <Image
              src="/montevallogoround.png"
              alt="Monteval Logo"
              width={160}
              height={160}
              className="w-[clamp(120px,20vw,160px)] h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
            />
          </div>
          <h1 className="font-[var(--font-display)] font-semibold tracking-[0.26em] uppercase text-[clamp(1.3rem,2.5vw,1.8rem)] m-0 break-words hyphens-auto">
            {title}
          </h1>
        </header>

        <div className="grid gap-[clamp(1.4rem,3.5vw,2.2rem)]">{children}</div>

        <p className="uppercase tracking-[0.16em] text-[0.76rem] text-[rgba(248,247,242,0.6)] mt-4">
          © {year} Monteval
        </p>
      </main>
    </div>
  );
}
