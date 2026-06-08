"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const current = resolvedTheme ?? theme ?? "dark";
  const toggleTheme = () => setTheme(current === "dark" ? "light" : "dark");
  return { theme: current, setTheme, toggleTheme };
}
