import useScrollProgress from "../hooks/useScrollProgress";

// Thin gradient bar fixed to the very top of the viewport, filling left to
// right as the reader scrolls through the page.
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-cyan)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
