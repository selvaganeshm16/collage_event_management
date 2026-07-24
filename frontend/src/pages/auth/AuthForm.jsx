import React, { useState } from "react";

const inputClasses =
  "w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-sm text-ink-900 " +
  "placeholder:text-ink-400 outline-none transition-colors focus:border-ember-500 " +
  "dark:border-ink-700 dark:bg-ink-900 dark:text-ink-50";

const Field = ({ label, ...props }) => (
  <label className="block space-y-1.5">
    <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{label}</span>
    <input className={inputClasses} {...props} />
  </label>
);

/**
 * Shared UI for both /sign-in and /sign-up.
 * `initialMode` sets which view loads for that route, but switching
 * between Sign in / Sign up happens locally (no route change), so the
 * screen updates instantly instead of loading a separate page.
 */
const AuthForm = ({ initialMode = "signin" }) => {
  const [mode, setMode] = useState(initialMode);
  const [submitting, setSubmitting] = useState(false);
  const isSignIn = mode === "signin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to your auth service
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
          {isSignIn ? "Welcome back" : "Create your account"}
        </h2>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          {isSignIn
            ? "Sign in to get to your dashboard."
            : "Takes less than a minute."}
        </p>
      </div>

      {/* Segmented toggle — swaps content in place, no navigation */}
      <div className="grid grid-cols-2 rounded-lg bg-ink-100/70 p-1 text-sm font-medium dark:bg-ink-800">
        {["signin", "signup"].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-md py-2 transition-colors ${
              mode === m
                ? "bg-white text-ink-900 shadow-sm dark:bg-ink-900 dark:text-ink-50"
                : "text-ink-500 hover:text-ink-700 dark:text-ink-400 dark:hover:text-ink-200"
            }`}
          >
            {m === "signin" ? "Sign in" : "Sign up"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isSignIn && (
          <Field label="Full name" type="text" placeholder="Jordan Lee" required />
        )}
        <Field label="Email" type="email" placeholder="you@company.com" required />
        <Field label="Password" type="password" placeholder="••••••••" required />
        {!isSignIn && (
          <Field label="Confirm password" type="password" placeholder="••••••••" required />
        )}

        {isSignIn && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink-600 dark:text-ink-300">
              <input type="checkbox" className="rounded border-ink-300 text-ember-500 focus:ring-ember-500" />
              Remember me
            </label>
            <button type="button" className="font-medium text-ember-600 hover:underline dark:text-ember-400">
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-ember-500 py-2.5 text-sm font-semibold text-white
            transition-colors hover:bg-ember-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Please wait…" : isSignIn ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="text-center text-sm text-ink-500 dark:text-ink-400">
        {isSignIn ? "New to Eventra?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setMode(isSignIn ? "signup" : "signin")}
          className="font-medium text-ember-600 hover:underline dark:text-ember-400"
        >
          {isSignIn ? "Create an account" : "Sign in instead"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;