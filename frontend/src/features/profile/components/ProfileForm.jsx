import React, { useEffect, useState } from "react";
import AvatarUpload from "./AvatarUpload";

const inputClasses =
  "w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-sm text-ink-900 " +
  "placeholder:text-ink-400 outline-none transition-colors focus:border-ember-500 " +
  "dark:border-ink-700 dark:bg-ink-900 dark:text-ink-50";

const ProfileForm = ({ profile, saving, onSave }) => {
  const [form, setForm] = useState(profile || {});
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    if (profile) setForm(profile);
  }, [profile]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(form);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-ink-100 bg-white p-5 sm:p-6 dark:border-ink-800 dark:bg-ink-900">
      <AvatarUpload name={form.name} initialUrl={form.avatarUrl} onChange={() => {}} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Full name</span>
          <input name="name" value={form.name || ""} onChange={handleChange} className={inputClasses} />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Email</span>
          <input name="email" type="email" value={form.email || ""} onChange={handleChange} className={inputClasses} />
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Role</span>
          <input name="role" value={form.role || ""} onChange={handleChange} className={inputClasses} />
        </label>
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-ink-700 dark:text-ink-200">Bio</span>
          <textarea name="bio" rows={3} value={form.bio || ""} onChange={handleChange} className={inputClasses} />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ember-600 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
        {savedFlash && (
          <span className="text-sm font-medium text-teal-600 dark:text-teal-300">Saved</span>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;