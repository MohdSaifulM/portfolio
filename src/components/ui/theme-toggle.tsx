"use client";

/**
 * Light/dark switch. Mirrors the terminal's `theme` command — both call the
 * same next-themes setter, so the two stay in sync automatically.
 *
 * The `mounted` guard avoids a hydration mismatch: the server has no idea
 * what the visitor's OS theme is, so we render a neutral placeholder until
 * the client has resolved it.
 */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Standard next-themes hydration guard: the server can't know the
    // visitor's resolved theme, so we render a neutral icon until the
    // client has mounted and `resolvedTheme` is trustworthy.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
      className="flex size-8 items-center justify-center rounded-sm border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
