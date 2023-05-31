import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import {memo} from "react";


export enum TextTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    CENTER = "center",
    LEFT = "left",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string,
    title?: string,
    description?: string,
    theme?: TextTheme,
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        description,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    const addition = [
        className,
        styles[theme],
        styles[align],
        styles[size],
    ]

    return (
        <div className={classNames(styles.Text, {}, [...addition])}>
            {title && <h4 className={styles.title}>{title}</h4>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
});