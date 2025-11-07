interface SocialIconProps {
  icon: "email" | "instagram" | "tiktok" | "youtube";
  className?: string;
}

export default function SocialIcon({ icon, className = "w-[26px] h-[26px]" }: SocialIconProps) {
  const icons = {
    email: (
      <>
        <path d="M3 6h18v12H3z" />
        <path d="m3 7.5 9 6 9-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="17.2" cy="6.8" r="0.8" />
      </>
    ),
    tiktok: (
      <path d="M15 3c0 2.5 1.7 4.5 4 4.9v3.2c-1.1 0-2.2-0.3-3.2-0.8v4.9c0 2.9-2.2 5.2-5 5.3-2.5 0.1-4.8-1.8-5.1-4.4-0.3-2.9 2-5.3 4.8-5.3 0.5 0 0.9 0 1.3 0.2V8.1c-0.4-0.1-0.9-0.1-1.3-0.1-4 0-7.2 3.4-6.9 7.4 0.2 3.2 2.8 5.8 6 6.1 3.7 0.3 6.9-2.5 7-6.1V3h-1.6z" />
    ),
    youtube: (
      <>
        <path d="M21.5 8.2c-0.1-1.2-1-2.2-2.2-2.3C17.1 5.5 12 5.5 12 5.5s-5.1 0-7.3 0.4c-1.2 0.1-2.1 1.1-2.2 2.3C2.2 9.4 2 10.9 2 12s0.2 2.6 0.5 3.8c0.1 1.2 1 2.2 2.2 2.3 2.2 0.4 7.3 0.4 7.3 0.4s5.1 0 7.3-0.4c1.2-0.1 2.1-1.1 2.2-2.3 0.3-1.2 0.5-2.7 0.5-3.8s-0.2-2.6-0.5-3.8z" />
        <path d="M10 9.75 14.5 12 10 14.25z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-none stroke-current stroke-[1.6] ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[icon]}
    </svg>
  );
}
