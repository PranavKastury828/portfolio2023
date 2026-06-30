"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types out `wrong`, pauses, backspaces to the point where it diverges
 * from `right`, then types the correct remainder. Ends with a thick
 * blinking block cursor. Respects prefers-reduced-motion.
 */
export function Typed({
  wrong,
  right,
  className = "",
  startDelay = 350,
}: {
  wrong: string;
  right: string;
  className?: string;
  startDelay?: number;
}) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(right);
      setDone(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    // longest common prefix of wrong and right
    let common = 0;
    const min = Math.min(wrong.length, right.length);
    while (common < min && wrong[common] === right[common]) common++;

    (async () => {
      await wait(startDelay);
      for (let i = 1; i <= wrong.length; i++) {
        if (cancelled.current) return;
        setDisplay(wrong.slice(0, i));
        await wait(65 + Math.random() * 55);
      }
      await wait(550);
      for (let i = wrong.length - 1; i >= common; i--) {
        if (cancelled.current) return;
        setDisplay(wrong.slice(0, i));
        await wait(42);
      }
      await wait(120);
      for (let i = common + 1; i <= right.length; i++) {
        if (cancelled.current) return;
        setDisplay(right.slice(0, i));
        await wait(75 + Math.random() * 45);
      }
      if (!cancelled.current) setDone(true);
    })();

    return () => {
      cancelled.current = true;
      timers.forEach(clearTimeout);
    };
  }, [wrong, right, startDelay]);

  return (
    <span className={className}>
      <span className="sr-only">{right}</span>
      <span aria-hidden>{display}</span>
      <span
        aria-hidden
        className={`term-cursor${done ? " term-cursor--blink" : ""}`}
      />
    </span>
  );
}
