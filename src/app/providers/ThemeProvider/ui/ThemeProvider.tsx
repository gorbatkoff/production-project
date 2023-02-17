import React, {type FC, useMemo, useState} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/themeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

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
