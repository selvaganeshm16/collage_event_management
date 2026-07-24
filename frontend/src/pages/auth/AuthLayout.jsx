import React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const highlights = [
  "One shared login for every event you run",
  "Live attendance synced across your team",
  "Dark mode that's actually easy on the eyes",
];

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-paper dark:bg-ink-950">
      {/* Brand panel — hidden on mobile */}
      <div className="relative hidden w-[42%] flex-col justify-between overflow-hidden bg-ink-950 p-10 text-white lg:flex">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 100% at 0% 0%, #DD4B25 0%, #9c2f14 38%, #12141C 75%)",
          }}
        />
        <div className="relative flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 font-display text-base font-bold backdrop-blur">
            E
          </div>
          <span className="font-display text-xl font-semibold">Eventra</span>
        </div>

        <div className="relative space-y-6">
          <p className="font-display text-3xl font-semibold leading-tight xl:text-4xl">
            Run events your team can actually keep up with.
          </p>
          <ul className="space-y-3 text-sm text-white/85">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative font-mono-data text-xs text-white/60">
          © {new Date().getFullYear()} Eventra
        </p>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:justify-end">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember-500 font-display text-sm font-bold text-white">
              E
            </div>
            <span className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
              Eventra
            </span>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex flex-1 items-center justify-center px-5 pb-10 sm:px-8">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;