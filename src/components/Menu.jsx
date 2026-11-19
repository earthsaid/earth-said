import { Link } from "react-router"
import ThemeToggle from "./ThemeToggle";

export default function Menu({ items }) {
  return (
    <div className="absolute top-full right-0 bg-surface border border-line flex flex-col">
      <ThemeToggle />
      <div className="w-full h-px bg-line"></div>
      <div>
        {items.map(({ icon: Icon, label, to }) => (
          <Link
            key={label}
            to={to}
            className="flex items-center gap-2 text-muted hover:text-ink px-6 py-5"
          >
            <Icon size={18} />
            <span className="mt-0.5">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
