"use client";

/**
 * Scroll-spy: reports which section is currently "active" (the last one
 * whose top has crossed a line near the top of the viewport), so the nav
 * can underline it as you scroll.
 *
 * An IntersectionObserver is used purely as an efficient *trigger* —
 * "something entered or left the viewport, recheck" — rather than relying
 * on its rootMargin math to decide the active section directly. That math
 * gets unreliable once sections are taller than the viewport (a tall
 * section's edges can both be outside a narrow trigger band at once),
 * which is exactly the case here.
 *
 * `ids` must be a stable reference (e.g. a module-level array) — it's an
 * effect dependency, so a new array literal on every render would tear
 * down and rebuild the observer constantly.
 */
import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // A section counts as "active" once its top has scrolled up past this
    // line. Roughly "just below the sticky nav".
    const LINE_FRACTION = 0.35;

    function recompute() {
      const line = window.innerHeight * LINE_FRACTION;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) {
          current = el.id;
        }
      }
      setActiveId(current);
    }

    const observer = new IntersectionObserver(recompute, {
      threshold: [0, 1],
    });
    elements.forEach((el) => observer.observe(el));

    // IntersectionObserver only fires on visibility changes; a resize can
    // change where the line falls without any element crossing it.
    window.addEventListener("resize", recompute);
    recompute();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [ids]);

  return activeId;
}
