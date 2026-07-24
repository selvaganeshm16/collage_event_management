import React, { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ChevronIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Header = ({ onMenuClick, user = { name: "Alex Rivera", email: "alex@eventra.io" } }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const initials = user.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-ink-100 bg-white/90 px-4 backdrop-blur sm:px-6 dark:border-ink-800 dark:bg-ink-950/90">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100 lg:hidden dark:text-ink-300 dark:hover:bg-ink-800"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
        <h1 className="font-display text-base font-semibold text-ink-900 sm:text-lg dark:text-ink-50">
          Welcome back
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-ink-100 py-1 pl-1 pr-2 hover:border-ember-300 dark:border-ink-700 dark:hover:border-ember-500"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 text-xs font-semibold text-white">
              {initials}
            </span>
            <ChevronIcon className="hidden h-3.5 w-3.5 text-ink-400 sm:block" />
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 top-11 w-48 rounded-xl border border-ink-100 bg-white p-1.5 shadow-lg dark:border-ink-700 dark:bg-ink-900"
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="px-2.5 py-2 text-xs text-ink-400">
                <p className="truncate font-medium text-ink-700 dark:text-ink-200">{user.name}</p>
                <p className="truncate">{user.email}</p>
              </div>
              <hr className="my-1 border-ink-100 dark:border-ink-700" />
              <button className="w-full rounded-lg px-2.5 py-2 text-left text-sm text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800">
                Settings
              </button>
              <button className="w-full rounded-lg px-2.5 py-2 text-left text-sm text-ember-600 hover:bg-ember-50 dark:text-ember-400 dark:hover:bg-ember-500/10">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;