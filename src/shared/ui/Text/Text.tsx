import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import {memo} from "react";


export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
    className?: string,
    title?: string,
    description?: string,
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {

    const {
        className,
        title,
        description,
        theme = TextTheme.PRIMARY
    } = props

    return (
        <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
            {title && <h4 className={styles.title}>{title}</h4>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
});