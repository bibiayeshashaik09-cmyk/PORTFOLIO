import { useEffect, useState } from "react";

// Manages dark/light theme, persisted to localStorage, applied via a class
// on <html> so Tailwind's `dark:` variant (configured for class strategy
// through the presence of .dark) and our custom CSS both respond to it.
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    return saved || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
