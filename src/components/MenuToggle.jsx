export default function MenuToggle({ isMenu, setIsMenu }) {
  return (
    <div
      onClick={() => setIsMenu(!isMenu)}
      className="space-y-2 cursor-pointer"
    >
      <span
        className={`block w-8 h-px bg-ink transition-all duration-300 ease-in-out origin-center ${
          isMenu ? "translate-y-2.25 rotate-45" : ""
        }`}
      ></span>

      <span
        className={`block w-8 h-px bg-ink transition-all duration-300 ease-in-out ${
          isMenu ? "opacity-0 scale-0" : ""
        }`}
      ></span>

      <span
        className={`block w-8 h-px bg-ink transition-all duration-300 ease-in-out origin-center ${
          isMenu ? "-translate-y-2.25 -rotate-45" : ""
        }`}
      ></span>
    </div>
  );
}
