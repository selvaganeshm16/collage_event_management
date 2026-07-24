import React from "react";
import EventCard from "./EventCard";

const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
    <div className="h-4 w-2/3 rounded bg-ink-100 dark:bg-ink-800" />
    <div className="mt-2 h-3 w-1/3 rounded bg-ink-100 dark:bg-ink-800" />
    <div className="mt-6 h-3 w-1/2 rounded bg-ink-100 dark:bg-ink-800" />
  </div>
);

const EventList = ({ events, loading, onDelete }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="rounded-xl border border-dashed border-ink-200 py-16 text-center dark:border-ink-700">
        <p className="font-display text-lg font-semibold text-ink-700 dark:text-ink-200">
          No events yet
        </p>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
          Create your first event to see it here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EventList;