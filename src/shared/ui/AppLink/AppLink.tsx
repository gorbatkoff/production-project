import React, {ReactNode} from "react"
import {Link, LinkProps} from "react-router-dom"
import {classNames} from "shared/lib/classNames/classNames"
import styles from "./AppLink.module.scss"
import {memo} from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red",
}

type AppLinkProps = {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode
} & LinkProps;

export const AppLink = memo((props: AppLinkProps) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props

    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
