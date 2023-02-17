import {Theme, useTheme} from "app/providers/ThemeProvider"
import {classNames} from "shared/lib/classNames/classNames"

import IconThemeSwitcher from "shared/assets/images/IconThemeSwitcher.svg"

import {Button, ThemeButton} from "shared/ui/Button/Button"

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <IconThemeSwitcher fill='#fff'/>
                : <IconThemeSwitcher fill='#fa0'/>
            }
        </Button>
    )
}
