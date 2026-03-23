"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}
