import {classNames, Mods} from "shared/lib/classNames/classNames"

import styles from "./Button.module.scss";

import {ButtonHTMLAttributes, memo, ReactNode} from "react"

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    WARNING = "warning",
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
    disabled?: boolean;
    children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M, // по дефолту ставим M
        disabled,
        ...otherProps
    } = props;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mods: Mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled
    }

    return (
        <button className={classNames(styles.Button, mods, [className, styles[theme]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    )
})
