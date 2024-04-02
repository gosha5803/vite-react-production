import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeREsult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = ():UseThemeREsult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
      //@ts-ignore
      setTheme(newTheme)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    
    //@ts-ignore
    return {theme, toggleTheme}
}