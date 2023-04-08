/* eslint-disable */
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext"
import {useContext} from "react"

type useThemeResult = {
    toggleTheme: () => void;
    theme: Theme;
};

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {

        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.OCEAN;
                break;
            case Theme.OCEAN:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT
        }

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme: theme || Theme.LIGHT, toggleTheme}
}
