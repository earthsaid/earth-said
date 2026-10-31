export function Title({ text }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-display w-fit max-w-full border-b border-line">
      {text}
    </h2>
  );
}

export function Highlight({ children }) {
  return <span className="text-ink">{children}</span>;
}

export function TextLink(props) {
  return (
    <a
      {...props}
      className="text-ink underline decoration-muted underline-offset-4 hover:text-accent hover:decoration-accent"
    />
  );
}
