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
    S = "size_s",
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

type HeaderTagType = "h1" | "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: "h1",
    [TextSize.M]: "h2",
    [TextSize.S]: "h3",
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

    const HeaderTag = mapSizeToHeaderTag[size];

    const addition = [
        className,
        styles[theme],
        styles[align],
        styles[size],
    ]

    return (
        <div className={classNames(styles.Text, {}, [...addition])}>
            {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
});