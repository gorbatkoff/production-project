import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import {memo} from "react";


export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    CENTER = "center",
    LEFT = "left",
}

interface TextProps {
    className?: string,
    title?: string,
    description?: string,
    theme?: TextTheme,
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        description,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props

    return (
        <div className={classNames(styles.Text, {}, [className, styles[theme], styles[align]])}>
            {title && <h4 className={styles.title}>{title}</h4>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
});