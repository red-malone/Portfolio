"use client"; // This component uses browser APIs (localStorage, matchMedia), so it runs on the client.

/**
 * Light/dark switch. The current theme is read from <html data-theme> if set,
 * otherwise from the OS preference. Clicking flips it and remembers the choice.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode / blocked storage: the toggle still works for this visit.
    }
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
      {/* Both icons are rendered; CSS shows the right one for the active theme. */}
      <span className="icon-moon" aria-hidden="true">☾</span>
      <span className="icon-sun" aria-hidden="true">☀</span>
    </button>
  );
}
