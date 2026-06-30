"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { nav } from "@/lib/data";

export function TopBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    const lenis = window.__lenis;
    if (lenis) {
      e.preventDefault();
      lenis.scrollTo(`#${id}`, { offset: -88 });
    }
  };

  return (
    <div className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="term-dot bg-accent/70" />
            <span className="term-dot bg-border" />
            <span className="term-dot bg-border" />
          </div>
          <span className="hidden text-xs text-muted sm:inline">
            pranav@kastury:~/portfolio
          </span>
        </div>

        <div className="flex items-center gap-4">
          <nav aria-label="Sections" className="hidden items-center gap-4 sm:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className={`text-xs transition-colors ${
                  active === item.id
                    ? "text-accent"
                    : "text-muted hover:text-text"
                }`}
              >
                <span className="text-accent/50">/</span>
                {item.label.toLowerCase()}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
