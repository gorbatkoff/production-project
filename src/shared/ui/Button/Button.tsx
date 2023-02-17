import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react"

export enum ThemeButton {
	CLEAR = "clear",
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
