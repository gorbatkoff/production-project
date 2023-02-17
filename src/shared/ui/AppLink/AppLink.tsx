import React, {type FC} from "react"
import {Link, type LinkProps} from "react-router-dom"
import {classNames} from "shared/lib/classNames/classNames"
import styles from "./AppLink.module.scss"

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red",
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props

    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
