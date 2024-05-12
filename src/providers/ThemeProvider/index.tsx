import { useState, useEffect } from "react";
import { ThemeContext } from "./context";
import { Theme } from "constants/theme";

export const ThemeProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const getTheme = () => {
    if (localStorage.theme === Theme.DARK || (!localStorage.theme && window.matchMedia(`(prefers-color-scheme: ${Theme.DARK})`).matches)) {
      return Theme.DARK;
    } else return Theme.LIGHT;
  }; 
  
  const [theme, setTheme] = useState<Theme | undefined>();
  
  const toggleTheme = (): void => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  }
  
  useEffect(() => {
    if (!theme) {
      setTheme(getTheme());
    }

    if (theme === Theme.DARK) {
      document.querySelector("html")?.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }

    if (theme === Theme.LIGHT) {
      document.querySelector("html")?.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      isDark: theme === Theme.DARK,
      setTheme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
};
