import { Theme } from './../App';
import { createContext } from "react";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (newTheme: Theme) => void 
}

export const ThemeContext = createContext<ThemeContextProps>({});


export const LOCAL_STORAGE_THEME_KEY = 'theme';