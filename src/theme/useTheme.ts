import { ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';
import { useContext } from "react";
import { Theme } from "./../App";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {theme, toggleTheme};

};
