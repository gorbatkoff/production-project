import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Button.module.scss";

import {ButtonHTMLAttributes, FC} from "react"
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

type ButtonProps = {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M, // по дефолту ставим M
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    }

    return (
        <button className={classNames(styles.Button, mods, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
