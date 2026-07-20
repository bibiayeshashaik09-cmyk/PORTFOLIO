import { useEffect, useState } from "react";

// Cycles through a list of role strings with a typewriter effect — a nod to
// a developer's command line rather than a generic animated headline.
export default function TypingText({ words, typingSpeed = 55, pause = 1600 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-[var(--color-cyan)] ml-1 align-middle animate-pulse" />
    </span>
  );
}
