import {classNames, Mods} from "shared/lib/classNames/classNames";

import styles from "./Flex.module.scss";
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

export interface FlexProps extends DivProps{
  children: ReactNode;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;

}

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    between: styles.justifyBetween,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
}

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export const Flex = (props: FlexProps) => {

    const {
        className,
        children,
        justify = "start",
        align = "center",
        direction = "row",
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [styles.max]: max
    }

    return (
        <div className={classNames(styles.Flex, mods, classes)}>
            {children}
        </div>
    );
}