import React from "react";

const ArrowUp = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const StatCard = ({ label, value, delta, trend }) => {
  const isUp = trend === "up";
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <p className="text-sm text-ink-500 dark:text-ink-400">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-ink-50">
          {value}
        </p>
        <span
          className={`flex items-center gap-0.5 font-mono-data text-xs font-medium ${
            isUp ? "text-teal-600 dark:text-teal-300" : "text-ember-600 dark:text-ember-400"
          }`}
        >
          <ArrowUp className={`h-3 w-3 ${isUp ? "" : "rotate-180"}`} />
          {delta}
        </span>
      </div>
    </div>
  );
};

export default StatCard;