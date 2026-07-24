import React from "react";

const ActivityFeed = ({ items, loading }) => {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <h3 className="font-display text-base font-semibold text-ink-900 dark:text-ink-50">
        Recent activity
      </h3>

      <ul className="mt-4 space-y-4">
        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="animate-pulse">
              <div className="h-3 w-4/5 rounded bg-ink-100 dark:bg-ink-800" />
              <div className="mt-2 h-2.5 w-1/4 rounded bg-ink-100 dark:bg-ink-800" />
            </li>
          ))}

        {!loading &&
          items.map((item) => (
            <li key={item.id} className="accent-bar">
              <p className="text-sm text-ink-700 dark:text-ink-200">{item.text}</p>
              <p className="mt-0.5 font-mono-data text-xs text-ink-400">{item.time}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;