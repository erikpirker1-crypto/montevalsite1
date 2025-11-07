import { ReactNode } from "react";

interface LegalSectionProps {
  title?: string;
  children: ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="grid gap-[0.8rem]">
      {title && (
        <h2 className="font-[var(--font-display)] text-[clamp(1.0rem,2vw,1.3rem)] tracking-[0.12em] uppercase m-0">
          {title}
        </h2>
      )}
      <div className="grid gap-[0.8rem] [&_p]:m-0 [&_p]:leading-[1.75] [&_p]:text-[var(--color-text-secondary)] [&_p]:text-[0.8rem] [&_p]:break-words [&_p]:hyphens-auto [&_ul]:m-0 [&_ul]:pl-[1.1rem] [&_ul]:grid [&_ul]:gap-[0.6rem] [&_ul]:text-[var(--color-text-secondary)] [&_li]:leading-[1.6] [&_li]:text-[0.8rem] [&_li]:break-words [&_a]:text-[var(--color-text-primary)] [&_a]:no-underline [&_a]:relative [&_a]:after:content-[''] [&_a]:after:absolute [&_a]:after:left-0 [&_a]:after:bottom-[-0.1rem] [&_a]:after:w-full [&_a]:after:h-px [&_a]:after:bg-current [&_a]:after:scale-x-0 [&_a]:after:origin-left [&_a]:after:transition-transform [&_a]:after:duration-[240ms] [&_a]:after:ease-in-out [&_a]:hover:after:scale-x-100 [&_a]:focus-visible:after:scale-x-100 [&_a]:focus-visible:outline-none [&_a]:focus-visible:text-[var(--color-accent)]">
        {children}
      </div>
    </section>
  );
}
