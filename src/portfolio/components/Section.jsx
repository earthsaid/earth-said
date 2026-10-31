import { Title } from "./Typography";

export default function Section({ title, id, className = "", children }) {
  return (
    <section id={id} className={`mt-14 ${className}`}>
      <Title text={title} />
      {children}
    </section>
  );
}
