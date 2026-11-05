import ThemeToggle from "./ThemeToggle";

export default function Menu({ items }) {
  return (
    <div className="absolute top-full right-0 bg-surface border border-line flex flex-col">
      <ThemeToggle />
      <div className="w-full h-px bg-line"></div>
      <div>
        {items.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href={label}
            className="flex items-center gap-2 text-muted hover:text-ink px-6 py-5"
          >
            <Icon size={18} />
            <span className="mt-0.5">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
