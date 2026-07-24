import React, { useState } from "react";
import { useEvents } from "@/features/events/hooks/useEvents";
import EventList from "@/features/events/components/EventList";
import EventFormModal from "@/features/events/components/EventFormModal";

const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const Events = () => {
  const { events, loading, error, addEvent, removeEvent } = useEvents();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
            Events
          </h2>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            {events.length} total · manage upcoming and past events
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ember-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-ember-600"
        >
          <PlusIcon className="h-4 w-4" /> New event
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-ember-300 bg-ember-50 px-4 py-3 text-sm text-ember-700 dark:border-ember-700 dark:bg-ember-500/10 dark:text-ember-300">
          {error}
        </div>
      )}

      <EventList events={events} loading={loading} onDelete={removeEvent} />

      <EventFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={addEvent}
      />
    </div>
  );
};

export default Events;