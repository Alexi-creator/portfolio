import { Theme } from "constants/theme";
import { createContext } from "react";

interface IInitContent {
  theme: Theme | undefined,
  isDark: boolean,
  setTheme: (theme: Theme) => void,
  toggleTheme: () => void,
}

export const ThemeContext = createContext<IInitContent>({
  theme: Theme.LIGHT,
  isDark: false,
  setTheme: () => {},
  toggleTheme: () => {},
});