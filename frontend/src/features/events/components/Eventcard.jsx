import React from "react";

const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const formatDate = (iso) =>
  new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

const EventCard = ({ event, onDelete }) => {
  const isPast = event.status === "past";

  return (
    <div className="accent-bar rounded-xl border border-ink-100 bg-white p-4 transition-shadow hover:shadow-md sm:p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-semibold text-ink-900 dark:text-ink-50">
            {event.title}
          </h3>
          <p className="mt-0.5 font-mono-data text-xs text-ink-400">
            {formatDate(event.date)}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
            isPast
              ? "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400"
              : "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
          }`}
        >
          {isPast ? "Past" : "Upcoming"}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
        <span className="flex items-center gap-1.5">
          <PinIcon className="h-4 w-4" /> {event.location}
        </span>
        <span className="flex items-center gap-1.5 font-mono-data">
          <UsersIcon className="h-4 w-4" /> {event.attendees}
        </span>
      </div>

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(event.id)}
          className="mt-4 text-sm font-medium text-ember-600 hover:underline dark:text-ember-400"
        >
          Remove event
        </button>
      )}
    </div>
  );
};

export default EventCard;