import SocialIcon from "./SocialIcon";

interface SocialLinkProps {
  href: string;
  icon: "email" | "instagram" | "tiktok" | "youtube";
  label: string;
  ariaLabel: string;
}

export default function SocialLink({ href, icon, label, ariaLabel }: SocialLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener" })}
      aria-label={ariaLabel}
      className="relative grid gap-2 py-[clamp(1.05rem,2.6vw,1.3rem)] px-[clamp(1rem,2vw,1.4rem)] rounded-[22px] border border-[rgba(216,177,121,0.22)] bg-[linear-gradient(155deg,rgba(255,255,255,0.05),rgba(9,9,9,0.6))] text-[var(--color-text-primary)] no-underline text-[0.95rem] font-medium justify-items-center transition-all duration-[320ms] ease-in-out cursor-pointer select-none hover:border-[rgba(216,177,121,0.45)] hover:bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(9,9,9,0.7))] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgba(216,177,121,0.6)] focus-visible:outline-offset-2 active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(120deg,rgba(216,177,121,0.18),transparent_55%)] before:opacity-0 before:transition-opacity before:duration-[320ms] before:ease-in-out before:-z-10 before:pointer-events-none hover:before:opacity-100"
    >
      <span className="w-8 h-8 grid place-items-center" aria-hidden="true">
        <SocialIcon icon={icon} />
      </span>
      <span className="tracking-[0.12em] uppercase text-[0.76rem] text-[var(--color-text-secondary)]">
        {label}
      </span>
    </a>
  );
}
