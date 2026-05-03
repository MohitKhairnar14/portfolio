import { useState } from "react";
import { darkTheme, lightTheme } from "../data";
import type { Theme } from "../types";

interface UseThemeReturn {
  isDark: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const [isDark, setIsDark] = useState<boolean>(true);
  return {
    isDark,
    theme: isDark ? darkTheme : lightTheme,
    toggleTheme: () => setIsDark((d) => !d),
  };
}
