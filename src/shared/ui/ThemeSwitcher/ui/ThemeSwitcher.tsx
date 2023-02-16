import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import SwitcherButtonDark from 'shared/assets/images/SwitherButtonDark.svg';
import SwitcherButton from 'shared/assets/images/SwitherButton.svg';
import IconThemeSwitcher from 'shared/assets/images/IconThemeSwitcher.svg';

import styles from './ThemeSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ?
                <IconThemeSwitcher fill='#fff'/>
                :
                <IconThemeSwitcher fill='#fa0'/>
            }
        </Button>
    );
};