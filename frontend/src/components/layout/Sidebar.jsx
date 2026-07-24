import React from "react";
import { NavLink } from "react-router-dom";

const LayoutIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const CalendarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const UserIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>
);

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutIcon },
  { to: "/events", label: "Events", icon: CalendarIcon },
  { to: "/profile", label: "Profile", icon: UserIcon },
];

const Sidebar = ({ open, onClose }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
     ${isActive
       ? "bg-ember-50 text-ember-700 dark:bg-ember-500/10 dark:text-ember-300"
       : "text-ink-600 hover:bg-ink-100/70 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-100"}`;

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember-500 font-display text-sm font-bold text-white">
          E
        </div>
        <span className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
          Eventra
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={linkClasses} onClick={onClose}>
            <Icon className="h-[18px] w-[18px] shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-5 py-4 text-xs text-ink-400 font-mono-data">
        v1.0.0
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-ink-100 lg:bg-white dark:lg:border-ink-800 dark:lg:bg-ink-900">
        {content}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-ink-950/50"
          onClick={onClose}
          aria-hidden="true"
        />
        <aside
          className={`absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-xl
            transition-transform duration-200 dark:bg-ink-900
            ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {content}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;