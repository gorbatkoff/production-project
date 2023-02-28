import React, {FC, useMemo, useState} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/themeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps{
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {

    const {
        initialTheme,
        children
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProp = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProp}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
