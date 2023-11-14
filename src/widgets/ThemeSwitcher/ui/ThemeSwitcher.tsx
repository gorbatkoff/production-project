import {Theme, useTheme} from "app/providers/ThemeProvider"
import {classNames} from "shared/lib/classNames/classNames"

import IconThemeSwitcher from "shared/assets/images/IconThemeSwitcher.svg"

import {Button, ButtonTheme} from "shared/ui/Button/Button"
import {memo} from "react";

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {(theme === Theme.DARK)
                ? <IconThemeSwitcher fill='#fff'/>
                : (theme === Theme.LIGHT)
                    ? <IconThemeSwitcher fill='#fff'/>
                    :
                    <IconThemeSwitcher fill='#fff'/>
            }
        </Button>
    )
})
