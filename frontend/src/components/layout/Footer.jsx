import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-ink-100 bg-white px-4 py-4 text-center text-xs text-ink-400 sm:px-6 dark:border-ink-800 dark:bg-ink-950">
      <p>
        © {new Date().getFullYear()} Eventra. All rights reserved.{" "}
        <span className="mx-1 hidden sm:inline">·</span>
        <span className="block sm:inline">Built for people who show up.</span>
      </p>
    </footer>
  );
};

export default Footer;