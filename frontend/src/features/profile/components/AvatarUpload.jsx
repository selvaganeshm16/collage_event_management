import React, { useRef, useState } from "react";

const CameraIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const AvatarUpload = ({ name = "", initialUrl = "", onChange }) => {
  const [preview, setPreview] = useState(initialUrl);
  const inputRef = useRef(null);
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-teal-500 sm:h-20 sm:w-20">
        {preview ? (
          <img src={preview} alt="Profile avatar" className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-lg font-semibold text-white sm:text-xl">
            {initials}
          </span>
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-ink-100 px-3.5 py-2 text-sm font-medium text-ink-700 hover:border-ember-300 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ember-500"
        >
          <CameraIcon className="h-4 w-4" /> Change photo
        </button>
        <p className="mt-1.5 text-xs text-ink-400">JPG or PNG, up to 5MB.</p>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>
    </div>
  );
};

export default AvatarUpload;