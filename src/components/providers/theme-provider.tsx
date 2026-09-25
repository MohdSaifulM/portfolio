"use client";

/**
 * Thin wrapper around next-themes.
 *
 * Why this exists as its own file: `next-themes` needs to run on the client,
 * but `layout.tsx` is a server component. Isolating the "use client"
 * boundary here keeps the rest of the layout server-rendered.
 *
 * Behaviour:
 *  - Defaults to the visitor's OS preference (`defaultTheme="system"`).
 *  - Persists an explicit choice from the theme toggle in localStorage.
 *  - Adds/removes the `dark` class on <html>, which is what every color
 *    token in globals.css keys off.
 */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
