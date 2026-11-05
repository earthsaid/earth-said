import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }

    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2 shrink-0 text-muted cursor-pointer hover:text-ink px-6 py-5"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="mt-0.5">Theme</span>
    </button>
  );
}
