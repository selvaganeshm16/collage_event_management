import React, { useState } from "react";

const inputClasses =
  "w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-sm text-ink-900 " +
  "placeholder:text-ink-400 outline-none transition-colors focus:border-ember-500 " +
  "dark:border-ink-700 dark:bg-ink-900 dark:text-ink-50";

const EventFormModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ title: "", date: "", location: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await onSubmit(form);
    setSubmitting(false);
    setForm({ title: "", date: "", location: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-ink-950/50" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-ink-900">
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
          New event
        </h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Title</span>
            <input name="title" value={form.title} onChange={handleChange} required
              className={inputClasses} placeholder="Team offsite" />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Date & time</span>
            <input type="datetime-local" name="date" value={form.date} onChange={handleChange} required
              className={inputClasses} />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Location</span>
            <input name="location" value={form.location} onChange={handleChange} required
              className={inputClasses} placeholder="Remote or address" />
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800">
              Cancel
            </button>
            <button type="submit" disabled={submitting}
              className="rounded-lg bg-ember-500 px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600 disabled:opacity-60">
              {submitting ? "Creating…" : "Create event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventFormModal;